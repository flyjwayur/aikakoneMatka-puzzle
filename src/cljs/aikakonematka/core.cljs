(ns aikakonematka.core
  (:require [goog.events :as events]
            [nightlight.repl-server]
            [aikakonematka.web-socket :as web-sck]
            [aikakonematka.util :as util]))

(def puzzle-image-width (atom nil))
(def puzzle-image-height (atom nil))
(defn- get-left-margin [puzzle-width-height]
  (/ (- (.-innerWidth js/window) puzzle-width-height) 2))
(defn- get-top-margin [puzzle-width-height]
  (/ (- (.-innerHeight js/window) puzzle-width-height) 4))
(def row-col-num 6)
(defn- get-piece-width-height [puzzle-width-height]
  (/ puzzle-width-height row-col-num))
(def button-sprite-sheet-width (atom nil))
(def button-sprite-sheet-height (atom nil))
(def button-sprite-col-num 3)
(def button-sprite-row-num 2)
(defn- get-button-width [sheet-width btn-sprite-col-num]
  (/ sheet-width btn-sprite-col-num))
(defn- get-button-height [sheet-height btn-sprite-row-num]
  (/ sheet-height btn-sprite-row-num))

(defn- preload []
  (.spritesheet
    (.-load @util/game)
    "puzzle"
    "images/puzzleImage.jpg"
    (get-piece-width-height @puzzle-image-width)
    (get-piece-width-height @puzzle-image-height)
    (* row-col-num row-col-num))
  (.spritesheet
    (.-load @util/game)
    "flip-buttons"
    "images/control-buttons.png"
    (get-button-width @button-sprite-sheet-width button-sprite-col-num)
    (get-button-height @button-sprite-sheet-height button-sprite-row-num)
    (* button-sprite-row-num button-sprite-col-num))
  (.image
    (.-load @util/game)
    "play-button"
    "images/play-button.png"))

(defn- create []
  "Create randomized puzzle board with one black piece"
  (let [game-object-factory (.-add @util/game)
        piece-width (get-piece-width-height (:puzzle-width-height @util/game-state))
        piece-height (get-piece-width-height (:puzzle-width-height @util/game-state))
        left-margin (get-left-margin (:puzzle-width-height @util/game-state))
        top-margin (get-top-margin (:puzzle-width-height @util/game-state))
        button-width (get-button-width @button-sprite-sheet-width button-sprite-col-num)
        button-height (get-button-height @button-sprite-sheet-height button-sprite-row-num)
        make-buttons-same-size-as-puzzle-piece! (fn [sprite]
                                                  (.setTo
                                                    (.-scale sprite)
                                                    (/ piece-width button-width)
                                                    (/ piece-height button-height)))
        set-on-click-callback! (fn [sprite callback-fn]
                                 (set! (.-inputEnabled sprite) true)
                                 (.add
                                   (.-onInputDown (.-events sprite))
                                   callback-fn))
        toggle-visibility-and-flipped-state! (fn [col row]
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
        randomly-execute-a-fn (fn [f]
                                (when (< (rand) 0.5) (f)))
        play-button (this-as this
                      (.button
                        game-object-factory
                        10
                        10
                        "play-button"
                        util/check-time-to-get-start-time
                        this))]
    (println "puzzle-image-width : " @puzzle-image-width)
    (println "puzzle-image-height : " @puzzle-image-height)
    (println "puzzle-width-height(* 0.7) : " (:puzzle-width-height @util/game-state))
    (println :game-state @util/game-state)
    (doseq [row (range row-col-num)
            col (range row-col-num)
            :let [frame-id (+ (* row-col-num row) col)
                  x-pos (+ (* piece-width col) left-margin col)
                  y-pos (+ (* piece-height row) top-margin row)]]
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
                                   (- x-pos piece-width)
                                   (+ y-pos piece-height)
                                   "flip-buttons"
                                   5)
              flip-diagonal-pieces! (fn []
                                      (doseq [row (range row-col-num)
                                              :let [col (- (dec row-col-num) row)]]
                                        (toggle-visibility-and-flipped-state! col row)))]
          (make-buttons-same-size-as-puzzle-piece! bottom-left-button)
          (set-on-click-callback!
            bottom-left-button
            (fn []
              (println "bottom-left-button is clicked!")
              ;Without getting new row & col range with doseq for flipping,
              ;it won't flip the puzzle. it will consider row & col to clicked button's row & col
              (flip-diagonal-pieces!)
              (web-sck/send-sprites-state!)
              (util/show-congrats-msg-when-puzzle-is-completed)
              (println "bottom-left-button : " :game-state @util/game-state)))
          (randomly-execute-a-fn flip-diagonal-pieces!)))
      (when (zero? col)
        (let [left-button (.sprite
                            game-object-factory
                            (- x-pos piece-width)
                            y-pos
                            "flip-buttons"
                            row)
              flip-row! (fn []
                          (doseq [col (range row-col-num)]
                            (toggle-visibility-and-flipped-state! col row)))]
          (make-buttons-same-size-as-puzzle-piece! left-button)
          (set-on-click-callback!
            left-button
            (fn []
              (println "left-button row #" row " clicked, " "which col : " col)
              (flip-row!)
              (web-sck/send-sprites-state!)
              (util/show-congrats-msg-when-puzzle-is-completed)
              (println "left-button : " :game-state @util/game-state)))
          (randomly-execute-a-fn (fn [] (js/setTimeout flip-row! 200)))))
      (when (= row (dec row-col-num))
        (let [bottom-button (.sprite
                              game-object-factory
                              x-pos
                              (+ y-pos piece-height)
                              "flip-buttons"
                              col)
              flip-col! (fn []
                          (doseq [row (range row-col-num)]
                            (toggle-visibility-and-flipped-state! col row)))]
          (make-buttons-same-size-as-puzzle-piece! bottom-button)
          (set-on-click-callback!
            bottom-button
            (fn []
              (println "bottom button col #" col " clicked, " "which row : " row)
              (flip-col!)
              (web-sck/send-sprites-state!)
              (util/show-congrats-msg-when-puzzle-is-completed)
              (println "bottom-button : " :game-state @util/game-state)))
          (randomly-execute-a-fn (fn [] (js/setTimeout flip-col! 200))))))))

(defn- update [])

(defn- start-game! []
  (println "starting game")
  (reset! util/game
          (js/Phaser.Game.
            (.-innerWidth js/window)
            (.-innerHeight js/window)
            js/Phaser.Auto
            ""
            (clj->js {:preload preload :create create :update update}))))


(web-sck/start-router)

; this is the game program's entry point
(let [puzzle-img (js/Image.)
      buttons-img (js/Image.)
      play-button (js/Image.)]
  ; finding out size of image. https://stackoverflow.com/a/626505/5802173
  ; image loading is done asynchronously. The way to start the game after image is loaded is
  ; we start the game in `onload` callback of the image. After loading buttons-img first,
  ; start loading puzzle image then start the game.
  (set!
    (.-onload play-button)
    (clj->js
      (fn []
        (println "play button image is loaded")
        (set! (.-src buttons-img) "images/control-buttons.png"))))
  (set!
    (.-onload buttons-img)
    (clj->js
      (fn []
        (reset! button-sprite-sheet-width (.-width buttons-img))
        (reset! button-sprite-sheet-height (.-height buttons-img))
        (println "buttons image loaded")
        (set! (.-src puzzle-img) "images/puzzleImage.jpg")
        )))
  (set!
    (.-onload puzzle-img)
    (clj->js
      (fn []
        (reset! puzzle-image-width (.-width puzzle-img))
        (reset! puzzle-image-height (.-height puzzle-img))
        (swap! util/game-state assoc :puzzle-width-height (int (* 0.7 (min (.-innerWidth js/window)
                                                                           (.-innerHeight js/window)))))
        (swap! util/game-state assoc :piece-x-scale (/ (:puzzle-width-height @util/game-state)
                                                       @puzzle-image-width))
        (swap! util/game-state assoc :piece-y-scale (/ (:puzzle-width-height @util/game-state)
                                                       @puzzle-image-height))
        (println "Puzzle image loaded")
        (start-game!))))                                    ; start game after loading image
  (set! (.-src play-button) "images/play-button.png")
  (println "loading images"))
