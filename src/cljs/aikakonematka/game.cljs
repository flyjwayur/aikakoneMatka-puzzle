(ns aikakonematka.game
  (:require [aikakonematka.util :as util]
            [aikakonematka.sound :as sound]))

(defn- randomly-execute-a-fn [f]
  (when (< (rand) 0.5) (f)))

(defn- preload []
  (.spritesheet
    (.-load @util/game)
    "puzzle"
    "images/puzzleImage.jpg"
    (util/get-piece-width-height @util/puzzle-image-width)
    (util/get-piece-width-height @util/puzzle-image-height)
    (* util/row-col-num util/row-col-num))
  (.spritesheet
    (.-load @util/game)
    "flip-buttons"
    "images/control-buttons.png"
    (util/get-button-width util/button-sprite-col-num)
    (util/get-button-height util/button-sprite-row-num)
    (* util/button-sprite-row-num util/button-sprite-col-num))
  (.image
    (.-load @util/game)
    "play-button"
    "images/play-button.png")
  (.image
    (.-load @util/game)
    "ranking-button"
    "images/ranking-button.png")
  (.image
    (.-load @util/game)
    "reset-button"
    "images/reset-button.jpg"))

(defn- toggle-visibility-and-flipped-state! [row col]
  (let [piece-flipped-state ((:sprites-state @util/game-state) [row col])
        piece-scale (.-scale ((:sprites @util/game-state) [row col]))
        game-object-factory (.-add @util/game)]
    (if (= util/flipped-state piece-flipped-state)
      (do
        (swap!
          util/game-state
          assoc-in
          [:sprites-state [row col]]
          util/non-flipped-state)
        (.to
          (.tween game-object-factory piece-scale)
          (clj->js {:x (:piece-x-scale @util/game-state)
                    :y (:piece-y-scale @util/game-state)})
          200
          js/Phaser.Easing.Linear.In
          true))
      (do
        (swap!
          util/game-state
          assoc-in
          [:sprites-state [row col]]
          util/flipped-state)
        (.to
          (.tween game-object-factory piece-scale)
          (clj->js {:x 0 :y 0})
          200
          js/Phaser.Easing.Linear.In
          true)))))

(defn flip-diagonal-pieces! []
  (doseq [row (range util/row-col-num)
          :let [col (- (dec util/row-col-num) row)]]
    (toggle-visibility-and-flipped-state! row col)))

(defn flip-col! [row]
  (doseq [col (range util/row-col-num)]
    (toggle-visibility-and-flipped-state! row col)))

(defn flip-row! [col]
  (doseq [row (range util/row-col-num)]
    (toggle-visibility-and-flipped-state! row col)))

(defn- randomize-puzzle-pieces []
  (randomly-execute-a-fn flip-diagonal-pieces!)
  (doseq [row-col-num (range util/row-col-num)]
    (randomly-execute-a-fn (fn [] (js/setTimeout (fn [] (flip-row! row-col-num)) 200)))
    (randomly-execute-a-fn (fn [] (js/setTimeout (fn [] (flip-col! row-col-num)) 200)))))

(declare create-puzzle-board)

(defn- make-play-button [{:keys [chsk-send-fn!]}]
  (swap!
    util/game-state
    assoc
    :play-button
    (this-as this
      (.button
        (.-add @util/game)
        10
        10
        "play-button"
        (fn []
          (chsk-send-fn! [:aikakone/game-start])
          (util/destroy-stage-clear-text!))
        this))))

(defn- store-control-button-and-return-it [control-button]
  (swap! util/game-state update :control-buttons conj control-button)
  (set! (.-x (.-anchor control-button)) 0.5)
  (set! (.-y (.-anchor control-button)) 0.5)
  control-button)

(defn- create-puzzle-piece-and-store [{:keys [frame-id x-pos y-pos row col]}]
  (let [piece (.sprite
                (.-add @util/game)
                x-pos
                y-pos
                "puzzle"
                frame-id)]
    (swap! util/game-state assoc-in [:sprites [row col]] piece)
    (.setTo (.-scale piece) 0 0)
    (set! (.-x (.-anchor piece))0.5)
    (set! (.-y (.-anchor piece)) 0.5)))

(defn- create-puzzle-board [{:keys [send-sprites-state-fn!
                                    send-puzzle-complete-fn!
                                    send-start-timer-fn!
                                    send-music-note-fn!]}]
  "Create randomized puzzle board with one black piece,
   It also checks whether it already created piece/button sprites."
  (util/show-reset-button!)
  (util/show-control-buttons!)
  (util/hide-play-button!)
  (util/hide-ranking-button!)
  ;It only creates the puzzle piece/button sprites only once for each client.
  (when (empty? (:sprites @util/game-state))
    (let [game-object-factory (.-add @util/game)
          piece-width-height (util/get-piece-width-height (:puzzle-width-height @util/game-state))
          left-margin (util/get-left-margin)
          top-margin (util/get-top-margin)
          set-on-click-callback! (fn [sprite callback-fn]
                                   (set! (.-inputEnabled sprite) true)
                                   (.add
                                     (.-onInputDown (.-events sprite))
                                     callback-fn))]
      (doseq [row (range util/row-col-num)
              col (range util/row-col-num)
              :let [frame-id (+ (* util/row-col-num row) col)
                    x-pos (+ (* piece-width-height col) left-margin col)
                    y-pos (+ (* piece-width-height row) top-margin row)]]
        (create-puzzle-piece-and-store {:frame-id frame-id
                                        :x-pos x-pos
                                        :y-pos y-pos
                                        :row row
                                        :col col})
        (when
          (and (zero? col) (= row (dec util/row-col-num)))
          (let [bottom-left-button (store-control-button-and-return-it
                                     (.sprite
                                       game-object-factory
                                       (- x-pos piece-width-height)
                                       (+ y-pos piece-width-height)
                                       "flip-buttons"
                                       5))
                frequency (sound/frequencies-of-major-scale-in-4th-octave util/row-col-num)]
            (util/make-buttons-same-size-as-puzzle-piece! bottom-left-button)
            (set-on-click-callback!
              bottom-left-button
              (fn []
                (when (util/currently-playing-game?)
                  ;Without getting new row & col range with doseq for flipping,
                  ;it won't flip the puzzle. it will consider row & col to clicked button's row & col
                  (sound/play-beep! frequency)
                  (send-music-note-fn! frequency)
                  (flip-diagonal-pieces!)
                  (send-sprites-state-fn!)
                  (util/congrats-completion-finish-game! send-puzzle-complete-fn!))))))
        (when (zero? col)
          (let [left-button (store-control-button-and-return-it
                              (.sprite
                                game-object-factory
                                (- x-pos piece-width-height)
                                y-pos
                                "flip-buttons"
                                row))
                frequency (sound/frequencies-of-major-scale-in-4th-octave row)]
            (util/make-buttons-same-size-as-puzzle-piece! left-button)
            (set-on-click-callback!
              left-button
              (fn []
                (when (util/currently-playing-game?)
                  (sound/play-beep! frequency)
                  (send-music-note-fn! frequency)
                  (flip-row! row)
                  (send-sprites-state-fn!)
                  (util/congrats-completion-finish-game! send-puzzle-complete-fn!))))))
        (when (= row (dec util/row-col-num))
          (let [bottom-button (store-control-button-and-return-it
                                (.sprite
                                  game-object-factory
                                  x-pos
                                  (+ y-pos piece-width-height)
                                  "flip-buttons"
                                  col))
                frequency (sound/frequencies-of-major-scale-in-4th-octave
                            (mod (+ 1 util/row-col-num col)
                                 (count sound/frequencies-of-major-scale-in-4th-octave)))]
            (util/make-buttons-same-size-as-puzzle-piece! bottom-button)
            (set-on-click-callback!
              bottom-button
              (fn []
                (when (util/currently-playing-game?)
                  (sound/play-beep! frequency)
                  (send-music-note-fn! frequency)
                  (flip-col! col)
                  (send-sprites-state-fn!)
                  (util/congrats-completion-finish-game! send-puzzle-complete-fn!)))))))))
  ;It synchronizes the puzzle board with the existing state for each player.
  ;The later synchronization will happen from the web_socket.
  (let [initial-sprites-state (:sprites-state @util/game-state)]
    (if (not (empty? initial-sprites-state))
      (util/synchronize-puzzle-board! initial-sprites-state)
      ;It make puzzle pieces randomly flipped,
      ;if it is the initial puzzle creation.
      (do (swap! util/game-state assoc :sprites-state {})   ;Prevent :sprites-state is nil
          (randomize-puzzle-pieces)                         ;When the puzzle board is created
          (send-start-timer-fn!))))
  (util/display-play-time!))

(defn- create-game [websocket-msg-send-fns]
  (fn []
    (when-not (:play-button @util/game-state)
      (make-play-button websocket-msg-send-fns)
      (util/make-ranking-button!)
      (util/make-reset-button! (:send-reset-fn! websocket-msg-send-fns)))))

(defn- game-update [])

(defn- start-game! [websocket-msg-send-fns]
  (println "starting game")
  (reset! util/game
          (js/Phaser.Game.
            (.-innerWidth js/window)
            (.-innerHeight js/window)
            js/Phaser.Auto
            "canvas"
            (clj->js {:preload preload
                      :create  (create-game websocket-msg-send-fns)
                      :update  game-update}))))
