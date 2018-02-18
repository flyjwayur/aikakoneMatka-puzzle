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


(def game (atom nil))

(defn- preload []
  (.spritesheet
    (.-load @game)
    "puzzle"
    "images/puzzleImage.jpg"
    (piece-width puzzle-width)
    (piece-height puzzle-height)
    (* row-num col-num)))

(defn- create []
  "Create randomized puzzle board with one black piece"
  (let [game-object-factory (.-add @game)
        piece-width (piece-width puzzle-width)
        piece-height (piece-height puzzle-height)
        left-margin (left-margin window-width)
        top-margin (top-margin window-height)
        shuffled-frame-ids (shuffle (range (* row-num col-num)))]
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
          shuffled-frame-id)))))

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

(let [img (js/Image.)]
  (set! (.-onload img)
        (clj->js
          (fn []
            (reset! puzzle-width (.-width img))
            (reset! puzzle-height (.-height img))
            (println "Puzzle image loaded")
            (start-game!))))
  (set! (.-src img) "images/puzzleImage.jpg")
  (println "loading puzzle image"))


