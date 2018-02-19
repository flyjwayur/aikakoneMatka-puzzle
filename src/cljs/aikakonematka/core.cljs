(ns aikakonematka.core
  (:require [goog.events :as events]
            [nightlight.repl-server]
            [aikakonematka.web-socket :as web-sck]))

(enable-console-print!)

(def window-width (atom (.-innerWidth js/window)))
(def window-height (atom (.-innerHeight js/window)))
(def puzzle-width (atom nil))
(def puzzle-height (atom nil))
(defn- left-margin [window-width]
  (/ (- @window-width @puzzle-width) 2))
(defn- top-margin [window-height]
  (/ (- @window-height @puzzle-height) 2))
(def row-num 6)
(def col-num 6)
(defn- piece-width [puzzle-width]
  (/ @puzzle-width col-num))
(defn- piece-height [puzzle-height]
  (/ @puzzle-height row-num))
(def button-sprite-sheet-width (atom nil))
(def button-sprite-sheet-height (atom nil))
(def button-sprite-col-num 3)
(def button-sprite-row-num 2)
(defn- button-width [sheet-width]
  (/ @sheet-width button-sprite-col-num))
(defn- button-height [sheet-height]
  (/ @sheet-height button-sprite-row-num))


(def game (atom nil))

(defn- preload []
  (.spritesheet
    (.-load @game)
    "puzzle"
    "images/puzzleImage.jpg"
    (piece-width puzzle-width)
    (piece-height puzzle-height)
    (* row-num col-num)
    )
  (.spritesheet
    (.-load @game)
    "flip-button"
    "images/control-buttons.png"
    (button-width button-sprite-sheet-width)
    (button-height button-sprite-sheet-height)
    (* button-sprite-row-num button-sprite-col-num)
    ))

(defn- create []
  "Create randomized puzzle board with one black piece"
  (let [game-object-factory (.-add @game)
        piece-width (piece-width puzzle-width)
        piece-height (piece-height puzzle-height)
        left-margin (left-margin window-width)
        top-margin (top-margin window-height)
        shuffled-frame-ids (shuffle (range (* row-num col-num)))
        button-width (button-width button-sprite-sheet-width)
        button-height (button-height button-sprite-sheet-height)]
    (doseq [row (range row-num)
            col (range row-num)
            :let [shuffled-frame-id (shuffled-frame-ids (+ (* col row-num) row))
                  x-pos (+ (* piece-width col) left-margin col)
                  y-pos (+ (* piece-height row) top-margin row)]]
      (if (= 1 shuffled-frame-id)
        (.sprite
          game-object-factory
          x-pos
          y-pos)
        (.sprite
          game-object-factory
          x-pos
          y-pos
          "puzzle"
          shuffled-frame-id)))
    (doseq [ button-id (range (* button-sprite-row-num button-sprite-col-num))]
      (println "button-id : " button-id)
      (println button-width :* button-height)
      (.sprite                                                ;
        game-object-factory
        (+ (* button-id button-width) puzzle-width left-margin)
        (+ (* button-id button-height) puzzle-height top-margin)
        "flip-button"
        button-id))))

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
        (reset! puzzle-width (.-width puzzle-img))
        (reset! puzzle-height (.-height puzzle-img))
        (println "Puzzle image loaded")
        (start-game!))))                                    ; start game after loading image
  (set! (.-src buttons-img) "images/control-buttons.png")
  (println "loading images"))


