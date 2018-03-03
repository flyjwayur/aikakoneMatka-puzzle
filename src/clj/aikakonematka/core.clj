(ns aikakonematka.core
  (:require [compojure.core :refer (defroutes GET POST)]
            [org.httpkit.server :as server]
            [ring.middleware.defaults :as defaults]
            [ring.middleware.cors :as cors]
            [taoensso.sente :as sente]
            [taoensso.sente.server-adapters.http-kit :refer (get-sch-adapter)]
            ))

(let [connection (sente/make-channel-socket! (get-sch-adapter)
      {:user-id-fn (fn [req] (get-in req [:params :client-id]))})]
  (def ring-ajax-post                (:ajax-post-fn connection))
  (def ring-ajax-get-or-ws-handshake (:ajax-get-or-ws-handshake-fn connection))
  (def ch-chsk                      (:ch-recv connection))
  (def chsk-send!                    (:send-fn connection))
  (def connected-uids                (:connected-uids connection)))

(defn- handle-message! [{:keys [id client-id ?data]}]       ; To check requested ID to see if it matches the :aikakone/sprites-state
  (println :id id)                                          ; To identify type of msg and handle them accordingly
  (println :client-id client-id)                            ; To have unique UUID for each client that matches the ID used by the :user-id-fn
  (println :data? ?data)                                    ; To contain the request payload.

  (when (= id :aikakone/sprites-state)                      ; To broadcast the response to all the connected clients
    (doseq [uid (:any @connected-uids)]
      ; -listed by the connected uuids variable.
      (println :uid uid)
      (when (not= client-id uid)
        (chsk-send! uid [:aikakone/sprites-state ?data])))))

(sente/start-chsk-router! ch-chsk handle-message!)          ; To initialize the router which uses core.async go-loop
                                                            ; to manage msg routing between clients
                                                            ; and pass it handle-message! as the event handler.

(defroutes app
           (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))  ; To update the routes with these two fns
           (POST "/chsk" req (ring-ajax-post                req))) ; to handle client requests.

(def handler
  (-> #'app
      (defaults/wrap-defaults (assoc-in defaults/site-defaults [:security :anti-forgery] false))
      (cors/wrap-cors :access-control-allow-origin [#".*"]
                      :access-control-allow-methods [:get :put :post :delete]
                      :access-control-allow-credentials ["true"])))

(defn -main []
  (server/run-server handler {:port 2222}))
