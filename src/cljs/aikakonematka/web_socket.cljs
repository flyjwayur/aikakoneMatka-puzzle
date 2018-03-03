(ns aikakonematka.web-socket
  (:require [taoensso.sente :as sente :refer (cb-success?)]
            [aikakonematka.util :as util]))

;Establish the websocket connection
(defn get-chsk-url
  "Connect to a configured server instead of the page host"
  [protocol chsk-host chsk-path type]
  (let [protocol (case type :ajax protocol
                            :ws (if (= protocol "https:") "wss:" "ws:"))] ; To specify the route /ws where the connection is made
    (str protocol "//" "localhost:2222" chsk-path)))

(defonce channel-socket                                     ;To initialize the connection
         (with-redefs [sente/get-chsk-url get-chsk-url]     ;and it returns a map with the initialized variables.
                      (sente/make-channel-socket! "/chsk" {:type :auto}))) ; To automatically decide whether to use WebSockets or Ajax
(defonce ch-chsk (:ch-recv channel-socket))                 ;To receive the msg
(defonce chsk-send! (:send-fn channel-socket))              ;To send the msg

(defn- synchronize-puzzle-board [sprite-state]
  (let [derefed-state @util/game-state
        sprites (:sprites derefed-state)
        piece-x-scale (:piece-x-scale derefed-state)
        piece-y-scale (:piece-y-scale derefed-state)]
    (doseq [[[col row] sprite-flipped-state] sprite-state]
      (let [piece-scale (.-scale (sprites [col row]))]
        (if (= util/non-flipped-state sprite-flipped-state)
          (do
            (swap!
              util/game-state
              update
              :sprites-state
              assoc
              [col row]
              util/non-flipped-state)
            (.setTo piece-scale piece-x-scale piece-y-scale))
          (do
            (swap!
              util/game-state
              update
              :sprites-state
              assoc
              [col row]
              util/flipped-state)
            (.setTo piece-scale 0 0)))))))

;Initialize event-msg-handlers for handling different socket events.
(defmulti event-msg-handler :id)                            ; To check the :id key on the msg and route it accordingly.
; for handshake, state change, and incoming msg.          ; To initialize it with a map containing fns
(defmethod event-msg-handler :default [{:keys [event]}]     ; To define a default event-handling fns.
  (println "Unhandled event: " event))

(defmethod event-msg-handler :chsk/state [{:keys [?data]}]
  (if (= ?data {:first-open? true})
    (println "Channel socket successfully established!")
    (println "Channel socket state change:" ?data)))

(defmethod event-msg-handler :chsk/recv [{:keys [?data]}]
  ;when client received a pushed msg from the server via web socket
  (let [[event-id event-data] ?data]
    (println "received " [event-id event-data])
    (case event-id
      :aikakone/sprites-state (do
                                (synchronize-puzzle-board event-data)
                                (util/show-congrats-msg-when-puzzle-is-completed))
      (println event-id " is unknown event type"))))

(defn send-uid []
  (chsk-send! [:aikakone/uid (:uid @util/game-state)]))

(defn send-sprites-state! []
  (println "sending " (:sprites-state @util/game-state))
  (chsk-send! [:aikakone/sprites-state (:sprites-state @util/game-state)]))

(defmethod event-msg-handler :chsk/handshake [{:keys [?data]}]
  (let [[?uid ?csrf-token ?handshake-data] ?data]
    (println "Handshake:" ?data)
    (swap! util/game-state assoc :uid ?uid)
    (send-uid)))

(defn start-router []                                       ; To create msg router to handle incoming msg.
  (sente/start-chsk-router! ch-chsk event-msg-handler))   ; To pass the fn for handling the incoming msg.
