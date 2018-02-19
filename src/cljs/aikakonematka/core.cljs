(ns aikakonematka.core
  (:require [goog.events :as events]
            [nightlight.repl-server]
            [aikakonematka.web-socket :as web-sck]))

(enable-console-print!)

(def window-width (atom (.-innerWidth js/window)))
(def window-height (atom (.-innerHeight js/window)))
(def puzzle-image-width (atom nil))
(def puzzle-image-height (atom nil))
(defn- left-margin [window-width puzzle-width]
  (/ (- window-width puzzle-width) 2))
(defn- top-margin [window-height puzzle-height]
  (/ (- window-height puzzle-height) 2))
(def row-num 6)
(def col-num 6)
(defn- piece-width [puzzle-width col-number]
  (/ puzzle-width col-number))
(defn- piece-height [puzzle-height row-number]
  (/ puzzle-height row-number))
(def button-sprite-sheet-width (atom nil))
(def button-sprite-sheet-height (atom nil))
(def button-sprite-col-num 3)
(def button-sprite-row-num 2)
(defn- button-width [sheet-width btn-sprite-col-num]
  (/ sheet-width btn-sprite-col-num))
(defn- button-height [sheet-height btn-sprite-row-num]
  (/ sheet-height btn-sprite-row-num))
(def sprites {})

(def game (atom nil))

(defn- preload []
  (.spritesheet
    (.-load @game)
    "puzzle"
    "images/puzzleImage.jpg"
    (piece-width @puzzle-image-width col-num)
    (piece-height @puzzle-image-height row-num)
    (* row-num col-num)
    )
  (.spritesheet
    (.-load @game)
    "flip-button"
    "images/control-buttons.png"
    (button-width @button-sprite-sheet-width button-sprite-col-num)
    (button-height @button-sprite-sheet-height button-sprite-row-num)
    (* button-sprite-row-num button-sprite-col-num)
    ))

(defn- create []
  "Create randomized puzzle board with one black piece"
  (let [game-object-factory (.-add @game)
        piece-width (piece-width @puzzle-image-width col-num)
        piece-height (piece-height @puzzle-image-height row-num)
        left-margin (left-margin @window-width @puzzle-image-width)
        top-margin (top-margin @window-height @puzzle-image-height)
        button-width (button-width @button-sprite-sheet-width button-sprite-col-num)
        button-height (button-height @button-sprite-sheet-height button-sprite-row-num)]
    (doseq [row (range row-num)
            col (range row-num)
            :let [frame-id (+ (* col-num row)col)
                  x-pos (+ (* piece-width col) left-margin col)
                  y-pos (+ (* piece-height row) top-margin row)]]
      (assoc sprites
              [x-pos y-pos]
              (.sprite
                game-object-factory
                x-pos
                y-pos
                "puzzle"
                frame-id)))
    (doseq [button-id (range (* button-sprite-row-num button-sprite-col-num))]
      (println "button-id : " button-id)
      (println button-width :* button-height)
      (.setTo
        (.-scale
         (.sprite                                    ;
           game-object-factory
           (* button-id button-width)
           (* button-id button-height)
           "flip-button"
           button-id))
        (/ piece-width button-width)
        (/ piece-height button-height)))))

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


