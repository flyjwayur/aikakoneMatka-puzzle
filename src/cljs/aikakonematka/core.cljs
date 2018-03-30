(ns aikakonematka.core
  (:require [goog.events :as events]
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
(def image-box ["puzzle" "puzzle2"])
(def current-puzzle-image (atom nil))

(defn- preload []
  (.spritesheet
    (.-load @util/game)
    (nth image-box 0)
    "images/puzzleImage.jpg"
    (get-piece-width-height @puzzle-image-width)
    (get-piece-width-height @puzzle-image-height)
    (* row-col-num row-col-num))
  (.spritesheet
    (.-load @util/game)
    (nth image-box 1)
    "images/puzzle-Image2.jpg"
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
    "images/play-button.png")
  (.image
    (.-load @util/game)
    "play-game-button2"
    "images/play-game-button2.png"))

; this is the game program's entry point
(let [puzzle-img (js/Image.)
      puzzle-img2 (js/Image.)
      buttons-img (js/Image.)
      play-button (js/Image.)
      play-game-button2 (js/Image.)]
  ; finding out size of image. https://stackoverflow.com/a/626505/5802173
  ; image loading is done asynchronously. The way to start the game after image is loaded is
  ; we start the game in `onload` callback of the image. After loading buttons-img first,
  ; start loading puzzle image then start the game.
  (set!
    (.-onload play-button)
    (clj->js
      (fn []
        (println "play button image is loaded")
        (set! (.-src play-game-button2) "images/play-game-button2.png"))))
  (set!
    (.-onload play-game-button2)
    (clj->js
      (fn []
        (println "play button image is loaded")
        (set! (.-src buttons-img) "images/control-buttons.png"))))
  (set!
    (.-onload buttons-img)
    (clj->js
      (fn []
        (reset! util/button-sprite-sheet-width (.-width buttons-img))
        (reset! util/button-sprite-sheet-height (.-height buttons-img))
        (println "buttons image loaded")
        (set! (.-src puzzle-img) "images/puzzleImage.jpg")
        )))
  (set!
    (.-onload puzzle-img)
    (clj->js
      (fn []
        (reset! util/puzzle-image-width (.-width puzzle-img))
        (reset! util/puzzle-image-height (.-height puzzle-img))
        (swap! util/game-state assoc :puzzle-width-height (int (* 0.7 (min (.-innerWidth js/window)
                                                                           (.-innerHeight js/window)))))
        (swap! util/game-state assoc :piece-x-scale (/ (:puzzle-width-height @util/game-state)
                                                       @util/puzzle-image-width))
        (swap! util/game-state assoc :piece-y-scale (/ (:puzzle-width-height @util/game-state)
                                                       @util/puzzle-image-height))
        (println "Puzzle image loaded")
        (web-sck/start-web-socket!))))                      ; start game after loading image
  (set! (.-src buttons-img) "images/control-buttons.png")
  (println "loading images"))
