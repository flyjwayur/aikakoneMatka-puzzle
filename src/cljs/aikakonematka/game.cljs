(ns aikakonematka.game
  (:require [aikakonematka.util :as util]))

(def row-col-num 6)

(defn- get-piece-width-height [puzzle-width-height]
  (/ puzzle-width-height row-col-num))

(defn- randomly-execute-a-fn [f]
  (when (< (rand) 0.5) (f)))

(defn- preload []
  (.spritesheet
    (.-load @util/game)
    "puzzle"
    "images/puzzleImage.jpg"
    (get-piece-width-height @util/puzzle-image-width)
    (get-piece-width-height @util/puzzle-image-height)
    (* row-col-num row-col-num))
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
    "images/play-button.png"))

(defn- make-buttons-same-size-as-puzzle-piece! [button-sprite]
  (let [piece-width-height (get-piece-width-height (:puzzle-width-height @util/game-state))]
    (do
      (println "make-button-same-size-as-puzzle-piece! : " button-sprite)
      (.setTo
        (.-scale button-sprite)
        (/ piece-width-height (util/get-button-width util/button-sprite-col-num))
        (/ piece-width-height (util/get-button-height util/button-sprite-row-num))))))

(defn- toggle-visibility-and-flipped-state! [col row]
  (let [piece-scale (.-scale ((:sprites @util/game-state) [col row]))]
    (if (zero? (.-x piece-scale))
      (do
        (swap!
          util/game-state
          update
          :sprites-state
          assoc
          [col row]
          util/non-flipped-state)
        (.setTo
          piece-scale
          (:piece-x-scale @util/game-state)
          (:piece-y-scale @util/game-state)))
      (do
        (swap!
          util/game-state
          update
          :sprites-state
          assoc
          [col row]
          util/flipped-state)
        (.setTo piece-scale 0 0)))))

(defn flip-diagonal-pieces! []
  (doseq [row (range row-col-num)
          :let [col (- (dec row-col-num) row)]]
    (toggle-visibility-and-flipped-state! col row)))

(defn flip-row! [row]
  (doseq [col (range row-col-num)]
    (toggle-visibility-and-flipped-state! col row)))

(defn flip-col! [col]
  (doseq [row (range row-col-num)]
    (toggle-visibility-and-flipped-state! col row)))

(defn- randomize-puzzle-pieces []
  (randomly-execute-a-fn flip-diagonal-pieces!)
  (doseq [row-col-num (range row-col-num)]
    (randomly-execute-a-fn (fn [] (js/setTimeout (fn [] (flip-row! row-col-num)) 200)))
    (randomly-execute-a-fn (fn [] (js/setTimeout (fn [] (flip-col! row-col-num)) 200)))))

(defn- create-puzzle-board [send-sprites-state-fn! initial-sprites-state]
  "Create randomized puzzle board with one black piece"
  (set! (.-visible (:play-button @util/game-state)) false)
  ;It only creates the puzzle piece/button sprites only once for each client.
  (when (empty? (:sprites @util/game-state))
    (let [game-object-factory (.-add @util/game)
          piece-width-height (get-piece-width-height (:puzzle-width-height @util/game-state))
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
      (doseq [row (range row-col-num)
              col (range row-col-num)
              :let [frame-id (+ (* row-col-num row) col)
                    x-pos (+ (* piece-width-height col) left-margin col)
                    y-pos (+ (* piece-width-height row) top-margin row)]]
        (let [piece (.sprite
                      game-object-factory
                      x-pos
                      y-pos
                      "puzzle"
                      frame-id)]
          (swap! util/game-state assoc-in [:sprites [col row]] piece)
          (swap! util/game-state assoc-in [:sprites-state [col row]] util/non-flipped-state)
          (.setTo (.-scale piece) (:piece-x-scale @util/game-state) (:piece-y-scale @util/game-state)))
        (println "x-pos : " x-pos ", y-pos : " y-pos)
        (when
          (and (zero? col) (= row (dec row-col-num)))
          (let [bottom-left-button (.sprite
                                     game-object-factory
                                     (- x-pos piece-width-height)
                                     (+ y-pos piece-width-height)
                                     "flip-buttons"
                                     5)]
            (make-buttons-same-size-as-puzzle-piece! bottom-left-button)
            (set-on-click-callback!
              bottom-left-button
              (fn []
                (println "bottom-left-button is clicked!")
                ;Without getting new row & col range with doseq for flipping,
                ;it won't flip the puzzle. it will consider row & col to clicked button's row & col
                (flip-diagonal-pieces!)
                (send-sprites-state-fn!)
                (util/show-congrats-msg-and-play-button-when-puzzle-is-completed)
                (println "bottom-left-button : " :game-state @util/game-state)))))
        (when (zero? col)
          (let [left-button (.sprite
                              game-object-factory
                              (- x-pos piece-width-height)
                              y-pos
                              "flip-buttons"
                              row)]
            (make-buttons-same-size-as-puzzle-piece! left-button)
            (set-on-click-callback!
              left-button
              (fn []
                (println "left-button row #" row " clicked, " "which col : " col)
                (flip-row! row)
                (send-sprites-state-fn!)
                (util/show-congrats-msg-and-play-button-when-puzzle-is-completed)
                (println "left-button : " :game-state @util/game-state)))))
        (when (= row (dec row-col-num))
          (let [bottom-button (.sprite
                                game-object-factory
                                x-pos
                                (+ y-pos piece-width-height)
                                "flip-buttons"
                                col)]
            (make-buttons-same-size-as-puzzle-piece! bottom-button)
            (set-on-click-callback!
              bottom-button
              (fn []
                (println "bottom button col #" col " clicked, " "which row : " row)
                (flip-col! col)
                (send-sprites-state-fn!)
                (util/show-congrats-msg-and-play-button-when-puzzle-is-completed)
                (println "bottom-button : " :game-state @util/game-state))))))
      ;It synchronizes the puzzle board with the existing state initially.
      ;The later synchronization will happen from the web_socket.
      (when (not (empty? initial-sprites-state))
        (util/synchronize-puzzle-board initial-sprites-state)))))

  (defn- create-game [{:keys [send-sprites-state-fn!]} initial-sprites-state]
    (fn []
      (let [game-object-factory (.-add @util/game)
            play-button (this-as this
                          (.button
                            game-object-factory
                            10
                            10
                            "play-button"
                            (fn []
                              (when-let [puzzle-completion-text (:puzzle-completion-text @util/game-state)]
                                (.destroy puzzle-completion-text))
                              (swap! util/game-state assoc :puzzle-completion-text nil)
                              ;It also checks whether it already created piece/button sprites.
                              (create-puzzle-board send-sprites-state-fn! initial-sprites-state)
                              ;It randomizes puzzle pieces.
                              ;From the next play it also works as a resetting the previous puzzle.
                              (randomize-puzzle-pieces)
                              (js/setTimeout send-sprites-state-fn! 300))
                            this))]
        (swap! util/game-state assoc :play-button play-button))
      (println "initial-sprites-state : " initial-sprites-state)
      ;when player joined in the middle of the game
      (when (not (empty? initial-sprites-state))
        (create-puzzle-board send-sprites-state-fn! initial-sprites-state))))

(defn- update [])

(defn- start-game! [websocket-msg-send-fns initial-sprites-state]
  (println "starting game")
  (reset! util/game
          (js/Phaser.Game.
            (.-innerWidth js/window)
            (.-innerHeight js/window)
            js/Phaser.Auto
            ""
            (clj->js {:preload preload
                      :create (create-game websocket-msg-send-fns initial-sprites-state)
                      :update update}))))
