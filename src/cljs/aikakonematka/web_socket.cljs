(ns aikakonematka.web-socket
  (:require [taoensso.sente :as sente :refer (cb-success?)]))

;Establish the websocket connection
(defn get-chsk-url
  "Connect to a configured server instead of the page host"
  [protocol chsk-host chsk-path type]
  (let [protocol (case type :ajax protocol
                            :ws   (if (= protocol "https:") "wss:" "ws:"))]
    (str protocol "//" "localhost:2222" chsk-path)))

(defonce channel-socket
         (with-redefs [sente/get-chsk-url get-chsk-url]
                      (sente/make-channel-socket! "/chsk" {:type :auto})))
(defonce ch-chsk (:ch-recv channel-socket))
(defonce chsk-send! (:send-fn channel-socket))

;Initialize event-msg-hanlders for handling different socket events.
(defn- define-event-msg-handler [state]
  (defmulti event-msg-handler :id)

  (defmethod event-msg-handler :default [{:keys [event]}]
    (println "Unhandled event: " event))

  (defmethod event-msg-handler :chsk/state [{:keys [?data]}]
    (if (= ?data {:first-open? true})
      (println "Channel socket successfully established!")
      (println "Channel socket state change:" ?data)))

  (defmethod event-msg-handler :chsk/recv [{:keys [?data]}]
    (let [position (second ?data)]
      (swap! state assoc :text-x (:x position) :text-y (:y position))))

  (defn send-uid []
    (chsk-send! [:aikakone/uid (:uid @state)]))

  (defmethod event-msg-handler :chsk/handshake [{:keys [?data]}]
    (let [[?uid ?csrf-token ?handshake-data] ?data]
      (println "Handshake:" ?data)
      (swap! state assoc :uid ?uid)
      (send-uid))))

(defn start-router [state]
  (sente/start-chsk-router! ch-chsk (define-event-msg-handler state)))


