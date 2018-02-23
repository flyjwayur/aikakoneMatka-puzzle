(ns aikakonematka.core
  (:require [goog.events :as events]
            [nightlight.repl-server]
            [aikakonematka.web-socket :as web-sck]))

(enable-console-print!)

(def window-width (atom (.-innerWidth js/window)))
(def window-height (atom (.-innerHeight js/window)))
(def puzzle-image-width (atom nil))
(def puzzle-image-height (atom nil))
(defn- get-left-margin [window-width puzzle-width]
  (/ (- window-width puzzle-width) 2))
(defn- get-top-margin [window-height puzzle-height]
  (/ (- window-height puzzle-height) 2))
(def row-num 6)
(def col-num 6)
(defn- get-piece-width [puzzle-width col-number]
  (/ puzzle-width col-number))
(defn- get-piece-height [puzzle-height row-number]
  (/ puzzle-height row-number))
(def button-sprite-sheet-width (atom nil))
(def button-sprite-sheet-height (atom nil))
(def button-sprite-col-num 3)
(def button-sprite-row-num 2)
(defn- get-button-width [sheet-width btn-sprite-col-num]
  (/ sheet-width btn-sprite-col-num))
(defn- get-button-height [sheet-height btn-sprite-row-num]
  (/ sheet-height btn-sprite-row-num))
(def sprites (atom nil))

(def game (atom nil))

(defn- preload []
  (.spritesheet
    (.-load @game)
    "puzzle"
    "images/puzzleImage.jpg"
    (get-piece-width @puzzle-image-width col-num)
    (get-piece-height @puzzle-image-height row-num)
    (* row-num col-num))
  (.spritesheet
    (.-load @game)
    "flip-buttons"
    "images/control-buttons.png"
    (get-button-width @button-sprite-sheet-width button-sprite-col-num)
    (get-button-height @button-sprite-sheet-height button-sprite-row-num)
    (* button-sprite-row-num button-sprite-col-num)))

(defn- create []
  "Create randomized puzzle board with one black piece"
  (let [game-object-factory (.-add @game)
        piece-width (get-piece-width @puzzle-image-width col-num)
        piece-height (get-piece-height @puzzle-image-height row-num)
        left-margin (get-left-margin @window-width @puzzle-image-width)
        top-margin (get-top-margin @window-height @puzzle-image-height)
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
        toggle-visibility! (fn [sprite]
                             (let [piece-scale (.-scale sprite)]
                               (if (zero? (.-x piece-scale))
                                 (.setTo piece-scale 1 1)
                                 (.setTo piece-scale 0 0))))]
    (doseq [row (range row-num)
            col (range row-num)
            :let [frame-id (+ (* col-num row) col)
                  x-pos (+ (* piece-width col) left-margin col)
                  y-pos (+ (* piece-height row) top-margin row)]]
      (println "x-pos : " x-pos ", y-pos : " y-pos)
      (when
        (and (zero? col) (= row (dec row-num)))
        (let [bottom-left-button (.sprite
                                   game-object-factory
                                   (- x-pos piece-width)
                                   (+ y-pos piece-height)
                                   "flip-buttons"
                                   5)]
          (make-buttons-same-size-as-puzzle-piece! bottom-left-button)
          (set-on-click-callback!
            bottom-left-button
           (fn []
             (println "bottom-left-button is clicked!")
             ;Without getting new row & col range with doseq for flipping,
             ;it won't flip the puzzle. it will consider row & col to clicked button's row & col
             (doseq [row (range row-num)
                     :let [col (- (dec col-num) row)]]
               (toggle-visibility! (@sprites [row col])))))))
      (when (zero? col)
        (let [left-button (.sprite
                            game-object-factory
                            (- x-pos piece-width)
                            y-pos
                            "flip-buttons"
                            row)]
          (make-buttons-same-size-as-puzzle-piece! left-button)
          (set-on-click-callback!
            left-button
            (fn []
              (println "left-button row #" row " clicked")))))
      (when (= row (dec row-num))
        (make-buttons-same-size-as-puzzle-piece!
          (.sprite
            game-object-factory
            x-pos
            (+ y-pos piece-height)
            "flip-buttons"
            col)))
      (let [piece (.sprite
                    game-object-factory
                    x-pos
                    y-pos
                    "puzzle"
                    frame-id)]
        (swap! sprites assoc [row col] piece)))))

(defn- update [])

(defn- start-game! []
  (println "starting game")
  (reset! game
          (js/Phaser.Game.
            @window-width
            @window-height
            js/Phaser.Auto
            ""
            (clj->js {:preload preload :create create :update update}))))

(defonce state (atom {}))

(web-sck/start-router state)

; this is the game program's entry point
(let [puzzle-img (js/Image.)
      buttons-img (js/Image.)]
  ; finding out size of image. https://stackoverflow.com/a/626505/5802173
  ; image loading is done asynchronously. The way to start the game after image is loaded is
  ; we start the game in `onload` callback of the image. After loading buttons-img first,
  ; start loading puzzle image then start the game.
  (set!
    (.-onload buttons-img)
    (clj->js
      (fn []
        (reset! button-sprite-sheet-width (.-width buttons-img))
        (reset! button-sprite-sheet-height (.-height buttons-img))
        (println "buttons image loaded")
        (set! (.-src puzzle-img) "images/puzzleImage.jpg"))))
  (set!
    (.-onload puzzle-img)
    (clj->js
      (fn []
        (reset! puzzle-image-width (.-width puzzle-img))
        (reset! puzzle-image-height (.-height puzzle-img))
        (println "Puzzle image loaded")
        (start-game!))))                                    ; start game after loading image
  (set! (.-src buttons-img) "images/control-buttons.png")
  (println "loading images"))