(ns aikakonematka.core
  (:require [goog.events :as events]
            [nightlight.repl-server]
            [play-cljs.core :as p]))

(defonce game (p/create-game (.-innerWidth js/window) (.-innerHeight js/window)))
(defonce state (atom {}))

(def ^:const image-width 192)
(def ^:const image-height 192)
(def ^:const column-number 6)
(def ^:const row-number 6)
(def ^:const piece-width (/ image-width column-number))
(def ^:const piece-height (/ image-height row-number))
(def ^:const image-url "tileset.png")
(doto game
  (p/load-image image-url))

(defn createGameImage [colNum rowNum]
  (for [x (range colNum)
        y (range rowNum)]
    (vector :image (hash-map :name image-url :width piece-width :height piece-height
                             :x (+ (/ js/window.innerWidth 2) (* piece-width x) ) :y (+ (/ js/window.innerHeight 2) (* piece-height y) )
                             :swidth piece-width :sheight piece-height
                             :sx (* piece-width x) :sy (* piece-height y)))))
  ; (loop [column-number row-number]
  ; (if-not (and (= 0 column-number) (= 0 row-number))
  ;  (recur)))

(def main-screen
  (reify p/Screen
    (on-show [this]
      (reset! state {:text-x 20 :text-y 30}))
    (on-hide [this])
    (on-render [this]
      (p/render game
                [[:image {:name image-url :width image-width :height image-height :x 100 :y 100}]
                 (createGameImage column-number row-number)]))))

(events/listen js/window "mousemove"
  (fn [event]
    (swap! state assoc :text-x (.-clientX event) :text-y (.-clientY event))))

(events/listen js/window "resize"
  (fn [event]
    (p/set-size game js/window.innerWidth js/window.innerHeight)))

(doto game
  (p/start)
  (p/set-screen main-screen))