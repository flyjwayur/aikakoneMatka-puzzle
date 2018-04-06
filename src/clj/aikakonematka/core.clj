(ns aikakonematka.core
  (:require [compojure.core :refer (defroutes GET POST)]
            [cheshire.core :as json]
            [java-time :as jt]
            [org.httpkit.server :as server]
            [ring.middleware.defaults :as defaults]
            [ring.middleware.cors :as cors]
            [taoensso.sente :as sente]
            [taoensso.sente.server-adapters.http-kit :refer (get-sch-adapter)]
            ))

(let [connection (sente/make-channel-socket! (get-sch-adapter)
                                             {:user-id-fn (fn [req] (get-in req [:params :client-id]))})]
  (def ring-ajax-post (:ajax-post-fn connection))
  (def ring-ajax-get-or-ws-handshake (:ajax-get-or-ws-handshake-fn connection))
  (def ch-chsk (:ch-recv connection))
  (def chsk-send! (:send-fn connection))
  (def connected-uids (:connected-uids connection)))

(def sprites-state (ref nil))

(def ranking (ref []))

(def game-start-game (ref nil))

(def sending-time-future (ref nil))

(defn- convert-to-millis [seconds nanos]
  (+ (* 1000 seconds) (/ nanos 1000000)))

(defn- start-sending-current-playtime! []
  (future (loop []
            (Thread/sleep 200)
            (when-let [start-time @game-start-game]
              (let [duration (jt/duration start-time (jt/local-date-time))
                    seconds (jt/value (jt/property duration :seconds))
                    nanos (jt/value (jt/property duration :nanos))]
                (doseq [uid (:any @connected-uids)]
                  (chsk-send! uid [:aikakone/current-time (convert-to-millis seconds nanos)]))
                (recur))))))

(defn broadcast-data-to-all-except-msg-sender [client-id msg-type data]
  (doseq [uid (:any @connected-uids)]
    ; -listed by the connected uuids variable.
    (when (not= client-id uid)
      (println "broadcast data except msg sender, msg type :" msg-type)
      (chsk-send! uid [msg-type data]))))

(defmulti event-msg-handler :id)

(defmethod event-msg-handler :default [{:as ev-msg :keys [event]}]
  (println "Unhandled event: " event))

(defmethod event-msg-handler :aikakone/sprites-state [{:as ev-msg :keys [id client-id ?data]}]
  (println :id id)                                          ; To identify type of msg and handle them accordingly
  (println :client-id client-id)                            ; To have unique UUID for each client that matches the ID used by the :user-id-fn
  (println :data? ?data)

  ; To broadcast the response to all the connected clients
  (dosync
    (ref-set sprites-state ?data)
    (broadcast-data-to-all-except-msg-sender client-id :aikakone/sprites-state @sprites-state)))

(defmethod event-msg-handler :aikakone/game-start [{:as ev-msg :keys [id client-id ?data]}]
  (chsk-send! client-id [:aikakone/game-start @sprites-state]))

(defmethod event-msg-handler :aikakone/start-timer [{:as ev-msg :keys [id client-id ?data]}]
  (dosync
      (ref-set game-start-game (jt/local-date-time))
      (ref-set sending-time-future (start-sending-current-playtime!))))

(defmethod event-msg-handler :aikakone/puzzle-complete! [{:as ev-msg :keys [id client-id ?data]}]
  (dosync
    (ref-set sprites-state nil)
    ;It will only take the first player's play time in each game
    (when @game-start-game
      (ref-set game-start-game nil)
      (alter ranking (fn [ranking]
                       (sort (conj ranking ?data)))))
    (broadcast-data-to-all-except-msg-sender client-id :aikakone/sprites-state {})))

(defmethod event-msg-handler :aikakone/reset [{:as ev-msg :keys [id client-id ?data]}]
  (dosync
      (ref-set game-start-game nil)
      (ref-set sprites-state nil)
      (broadcast-data-to-all-except-msg-sender client-id :aikakone/reset nil)))

(sente/start-chsk-router! ch-chsk event-msg-handler)        ; To initialize the router which uses core.async go-loop
; to manage msg routing between clients
; and pass it handle-message! as the event handler.

(defroutes app
           ;Make JSON with ranking data
           ;and open the link(localhost:2222/rankings for the clients
           (GET "/rankings" req (json/generate-string @ranking))
           (GET "/chsk" req (ring-ajax-get-or-ws-handshake req)) ; To update the routes with these two fns
           (POST "/chsk" req (ring-ajax-post req)))         ; to handle client requests.

(def handler
  (-> #'app
      (defaults/wrap-defaults (assoc-in defaults/site-defaults [:security :anti-forgery] false))
      (cors/wrap-cors :access-control-allow-origin [#".*"]
                      :access-control-allow-methods [:get :put :post :delete]
                      :access-control-allow-credentials ["true"])))

(defn -main []
  (server/run-server handler {:port 2222}))

