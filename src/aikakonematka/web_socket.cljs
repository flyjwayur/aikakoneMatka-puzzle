(ns aikakonematka.web-socket
  (:require [taoensso.sente :as sente :refer (cb-success?)]
            [aikakonematka.config :as config]
            [aikakonematka.util :as util]
            [aikakonematka.game :as game]
            [aikakonematka.sound :as sound]
            ))

;Establish the websocket connection
(defn get-chsk-url
  "Connect to a configured server instead of the page host"
  [protocol chsk-host chsk-path type]
  (let [protocol (case type :ajax protocol
                            :ws (if (= protocol "https:") "wss:" "ws:"))] ; To specify the route /ws where the connection is made
    (str protocol "//" config/backend-host chsk-path)))

(defonce channel-socket                                     ;To initialize the connection
         (with-redefs [sente/get-chsk-url get-chsk-url]     ;and it returns a map with the initialized variables.
                      (sente/make-channel-socket! "/chsk" {:type :auto}))) ; To automatically decide whether to use WebSockets or Ajax
(defonce ch-chsk (:ch-recv channel-socket))                 ;To receive the msg
(defonce chsk-send! (:send-fn channel-socket))              ;To send the msg

(defn send-game-start! []
  (chsk-send! [:aikakone/game-start]))

(defn send-sprites-state! []
  (chsk-send! [:aikakone/sprites-state (:sprites-state @util/game-state)]))

(defn send-start-timer! []
  (chsk-send! [:aikakone/start-timer nil]))

(defn send-reset! []
  (chsk-send! [:aikakone/reset nil]))

(defn send-puzzle-complete! [play-time]
  (chsk-send! [:aikakone/puzzle-complete! play-time]))

(defn send-button-music-notes! [note]
  (chsk-send! [:aikakone/music note]))

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
    (case event-id
      :aikakone/sprites-state (do
                                (util/synchronize-puzzle-board-when-playing! event-data)
                                (util/congrats-finish-game! send-puzzle-complete!))

      :aikakone/game-start (do
                             (swap! util/game-state assoc :sprites-state event-data)
                             (util/set-game-play-state! :playing)
                             (game/display-puzzle-board! {:send-start-timer-fn! send-start-timer!})
                             (send-sprites-state!))

      :aikakone/current-time (when (and (:play-time-text @util/game-state)
                                        (util/currently-playing-game?))
                               (util/update-play-time-to-current-time! event-data))

      :aikakone/reset (util/reset-game!)

      :aikakone/music (when (:audio-on? @util/game-state)
                        (util/update-music-notes! event-data))

      (println event-id " is unknown event type"))))

(defn send-uid []
  (chsk-send! [:aikakone/uid (:uid @util/game-state)]))

(defmethod event-msg-handler :chsk/handshake [{:keys [?data]}]
  (let [[?uid ?csrf-token ?handshake-data] ?data]
    (println "Handshake:" ?data)
    (swap! util/game-state assoc :uid ?uid)
    (send-uid)))

(defn start-web-socket! []                                  ; To create msg router to handle incoming msg.
  (sente/start-chsk-router! ch-chsk event-msg-handler))
