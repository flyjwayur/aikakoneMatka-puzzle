(ns aikakonematka.web-socket
  (:require [taoensso.sente :as sente :refer (cb-success?)]))

;Establish the websocket connection
(defn get-chsk-url
  "Connect to a configured server instead of the page host"
  [protocol chsk-host chsk-path type]
  (let [protocol (case type :ajax protocol
                            :ws   (if (= protocol "https:") "wss:" "ws:"))] ; To specify the route /ws where the connection is made
    (str protocol "//" "localhost:2222" chsk-path)))

(defonce channel-socket                                     ;To initialize the connection
         (with-redefs [sente/get-chsk-url get-chsk-url]     ;and it returns a map with the initialized variables.
                      (sente/make-channel-socket! "/chsk" {:type :auto}))) ; To automatically decide whether to use WebSockets or Ajax
(defonce ch-chsk (:ch-recv channel-socket))                 ;To receive the msg
(defonce chsk-send! (:send-fn channel-socket))              ;To send the msg

;Initialize event-msg-hanlders for handling different socket events.
(defn- define-event-msg-handler [state]                     ; To check the :id key on the msg and route it accordingly.
  (defmulti event-msg-handler :id)                          ; To initialize it with a map containing fns
                                                            ; for handshake, state change, and incoming msg.
  (defmethod event-msg-handler :default [{:keys [event]}]   ; To define a default event-handling fns.
    (println "Unhandled event: " event))

  (defmethod event-msg-handler :chsk/state [{:keys [?data]}]
    (if (= ?data {:first-open? true})
      (println "Channel socket successfully established!")
      (println "Channel socket state change:" ?data)))

  (defmethod event-msg-handler :chsk/recv [{:keys [?data]}]
    ;when client received a pushed msg from the server via server
    (let [[event-id event-data] ?data]
      (println "received " [event-id event-data])
      (case event-id
        :aikakone/sprites-state (swap! state update :sprite-state assoc event-data)
        (println event-id " is unknown event type"))))

  (defn send-uid []
    (chsk-send! [:aikakone/uid (:uid @state)]))

  (defn send-sprites-state! []
    (println "sending " (:sprites-state @state))
    (chsk-send! [:aikakone/sprites-state (:sprites-state @state)]))

  (defmethod event-msg-handler :chsk/handshake [{:keys [?data]}]
    (let [[?uid ?csrf-token ?handshake-data] ?data]
      (println "Handshake:" ?data)
      (swap! state assoc :uid ?uid)
      (send-uid))))

(defn start-router [state]                                  ; To create msg router to handle incoming msg.
  (sente/start-chsk-router! ch-chsk (define-event-msg-handler state))) ; To pass the fn for handling the incoming msg.
