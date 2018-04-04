(ns aikakonematka.game
  (:require [aikakonematka.util :as util]))

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

(defn- toggle-visibility-and-flipped-state! [col row]
  (let [piece-scale (.-scale ((:sprites @util/game-state) [col row]))]
    (if (zero? (.-x piece-scale))
      (do
        (swap!
          util/game-state
          assoc-in
          [:sprites-state [col row]]
          util/non-flipped-state)
        (.setTo
          piece-scale
          (:piece-x-scale @util/game-state)
          (:piece-y-scale @util/game-state)))
      (do
        (swap!
          util/game-state
          assoc-in
          [:sprites-state [col row]]
          util/flipped-state)
        (.setTo piece-scale 0 0)))))

(defn flip-diagonal-pieces! []
  (doseq [row (range util/row-col-num)
          :let [col (- (dec util/row-col-num) row)]]
    (toggle-visibility-and-flipped-state! col row)))

(defn flip-row! [row]
  (doseq [col (range util/row-col-num)]
    (toggle-visibility-and-flipped-state! col row)))

(defn flip-col! [col]
  (doseq [row (range util/row-col-num)]
    (toggle-visibility-and-flipped-state! col row)))

(defn- randomize-puzzle-pieces []
  (randomly-execute-a-fn flip-diagonal-pieces!)
  (doseq [row-col-num (range util/row-col-num)]
    (randomly-execute-a-fn (fn [] (js/setTimeout (fn [] (flip-row! row-col-num)) 200)))
    (randomly-execute-a-fn (fn [] (js/setTimeout (fn [] (flip-col! row-col-num)) 200)))))

(declare create-puzzle-board)

(defn- make-play-button [websocket-msg-send-fns]
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
          (util/destroy-stage-clear-text!)
          ;It also checks whether it already created piece/button sprites.
          (create-puzzle-board websocket-msg-send-fns)
          ;From the next play it also works as a resetting the previous puzzle.
          (js/setTimeout (:send-sprites-state-fn! websocket-msg-send-fns) 300))
        this))))

(defn- store-control-button-and-return-it [control-button]
  (swap! util/game-state update :control-buttons conj control-button)
  control-button)

(defn- create-puzzle-board [{:keys [send-sprites-state-fn!
                                    send-puzzle-complete-fn!
                                    send-start-timer-fn!]}]
  "Create randomized puzzle board with one black piece"
  (util/show-reset-button!)
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
      (println "puzzle-image-width : " @util/puzzle-image-width)
      (println "puzzle-image-height : " @util/puzzle-image-height)
      (println "puzzle-width-height(* 0.7) : " (:puzzle-width-height @util/game-state))
      (println :game-state @util/game-state)
      (doseq [row (range util/row-col-num)
              col (range util/row-col-num)
              :let [frame-id (+ (* util/row-col-num row) col)
                    x-pos (+ (* piece-width-height col) left-margin col)
                    y-pos (+ (* piece-width-height row) top-margin row)]]
        (let [piece (.sprite
                      game-object-factory
                      x-pos
                      y-pos
                      "puzzle"
                      frame-id)]
          (swap! util/game-state assoc-in [:sprites [col row]] piece)
          (.setTo (.-scale piece) 0 0))
        (println "x-pos : " x-pos ", y-pos : " y-pos)
        (when
          (and (zero? col) (= row (dec util/row-col-num)))
          (let [bottom-left-button (store-control-button-and-return-it
                                     (.sprite
                                       game-object-factory
                                       (- x-pos piece-width-height)
                                       (+ y-pos piece-width-height)
                                       "flip-buttons"
                                       5))]
            (util/make-buttons-same-size-as-puzzle-piece! bottom-left-button)
            (set-on-click-callback!
              bottom-left-button
              (fn []
                (when (util/currently-playing-game?)
                  (println "bottom-left-button is clicked!")
                  (println "control-buttons : " (:control-buttons @util/game-state))
                  ;Without getting new row & col range with doseq for flipping,
                  ;it won't flip the puzzle. it will consider row & col to clicked button's row & col
                  (flip-diagonal-pieces!)
                  (send-sprites-state-fn!)
                  (util/congrats-completion-finish-game send-puzzle-complete-fn!)
                  (println "bottom-left-button : " :game-state @util/game-state))))))
        (when (zero? col)
          (let [left-button (store-control-button-and-return-it
                              (.sprite
                                game-object-factory
                                (- x-pos piece-width-height)
                                y-pos
                                "flip-buttons"
                                row))]
            (util/make-buttons-same-size-as-puzzle-piece! left-button)
            (set-on-click-callback!
              left-button
              (fn []
                (when (util/currently-playing-game?)
                  (println "left-button row #" row " clicked, " "which col : " col)
                  (println "control-buttons : " (:control-buttons @util/game-state))
                  (flip-row! row)
                  (send-sprites-state-fn!)
                  (util/congrats-completion-finish-game send-puzzle-complete-fn!)
                  (println "left-button : " :game-state @util/game-state))))))
        (when (= row (dec util/row-col-num))
          (let [bottom-button (store-control-button-and-return-it
                                (.sprite
                                  game-object-factory
                                  x-pos
                                  (+ y-pos piece-width-height)
                                  "flip-buttons"
                                  col))]
            (util/make-buttons-same-size-as-puzzle-piece! bottom-button)
            (set-on-click-callback!
              bottom-button
              (fn []
                (when (util/currently-playing-game?)
                  (println "bottom button col #" col " clicked, " "which row : " row)
                  (println "control-buttons : " (:control-buttons @util/game-state))
                  (flip-col! col)
                  (send-sprites-state-fn!)
                  (util/congrats-completion-finish-game send-puzzle-complete-fn!)
                  (println "bottom-button : " :game-state @util/game-state)))))))))
  ;It synchronizes the puzzle board with the existing state for each player.
  ;The later synchronization will happen from the web_socket.
  (let [initial-sprites-state (:sprites-state @util/game-state)]
    (if (not (empty? initial-sprites-state))
      (util/synchronize-puzzle-board initial-sprites-state)
      ;It make puzzle pieces randomly flipped,
      ;if it is the initial puzzle creation.
      (do (randomize-puzzle-pieces)
          (send-start-timer-fn!))))
  (util/display-play-time!))

(defn- create-game [websocket-msg-send-fns]
  (fn []
    (when-not (:play-button @util/game-state)
      (make-play-button websocket-msg-send-fns)
      (util/make-ranking-button!)
      (util/make-reset-button! (:send-reset-fn! websocket-msg-send-fns)))))

(defn- update [])

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
                      :update  update}))))
