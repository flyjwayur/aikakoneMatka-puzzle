(ns aikakonematka.web-socket
  (:require [taoensso.sente :as sente :refer (cb-success?)]
            [aikakonematka.util :as util]
            [aikakonematka.game :as game]
            ))

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

(defn send-sprites-state! []
  (println "sending " (:sprites-state @util/game-state))
  (chsk-send! [:aikakone/sprites-state (:sprites-state @util/game-state)]))

(defn- sync-reset-puzzle-board [event-data]
  (let [derefed-state @util/game-state]
    (println "From sync-reset-puzzle-board : " derefed-state)
    (swap! derefed-state empty)
    (swap! derefed-state assoc @util/initial-game-state)))

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
                                (util/synchronize-puzzle-board event-data)
                                (util/show-congrats-msg-when-puzzle-is-completed))
      :aikakone/initial-game-state (do
                                     (println "received from initial-game-state " [event-id event-data])
                                     (sync-reset-puzzle-board event-data))
      (println event-id " is unknown event type"))))

(defn send-uid []
  (chsk-send! [:aikakone/uid (:uid @util/game-state)]))

(defn send-sprites-state! []
  (if (every? #(= util/non-flipped-state (val %)) (:sprites-state @util/game-state))
    (do
      (println "sending inital-game-state " @util/initial-game-state)
      (swap! util/game-state empty)
      (swap! util/game-state assoc @util/initial-game-state)
      (chsk-send! [:aikakone/initial-game-state @util/initial-game-state])
      (println "from reset-puzzle : " @util/initial-game-state))
    (do
      (println "sending " (:sprites-state @util/game-state))
      ;(println "sending game-state" (@util/game-state))
      (chsk-send! [:aikakone/sprites-state (:sprites-state @util/game-state)])
      ;(chsk-send! [:aikakone/game-state (@util/game-state)])))
      )))

  (defmethod event-msg-handler :chsk/handshake [{:keys [?data]}]
  (let [[?uid ?csrf-token ?handshake-data] ?data]
    (println "Handshake:" ?data)
    (swap! util/game-state assoc :uid ?uid)
    (chsk-send! [:aikakone/game-start])
    (send-uid)))

(defn start-web-socket! [] ; To create msg router to handle incoming msg.
  (sente/start-chsk-router! ch-chsk event-msg-handler))
