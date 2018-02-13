(ns aikakonematka.core
  (:require [goog.events :as events]
            [nightlight.repl-server]
            [play-cljs.core :as p]
            [aikakonematka.web-socket :as web-sck]))

(enable-console-print!)

;Define the game and state
(defonce game (p/create-game (.-innerWidth js/window) (.-innerHeight js/window)))
(defonce state (atom {}))

;Define the game variables and screen
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
                             :x (+ (/ js/window.innerWidth 2) (* (* piece-width x) 2) ) :y (+ (/ js/window.innerHeight 2) (* (* piece-height y) 2) )
                             :swidth piece-width :sheight piece-height
                             :sx (* piece-width x) :sy (* piece-height y)
                             :scale-x 2 :scale-y 2))))
(def main-screen
  (reify p/Screen
    (on-show [this]
      (reset! state {:text-x 20 :text-y 30}))
    (on-hide [this])
    (on-render [this]
      (p/render game
                [[:fill {:color "lightblue"}
                  [:rect {:x 0 :y 0 :width (.-innerWidth js/window) :height (.-innerHeight js/window)}]]
                 [:fill {:color "black"}
                  [:text {:value "Hello, world!" :x (:text-x @state) :y (:text-y @state)
                          :size 16 :font "Georgia" :style :italic}]]
                 [:image {:name image-url :width image-width :height image-height :x 100 :y 100}]
                 (createGameImage column-number row-number)]))))

(events/listen js/window "mousemove"
  (fn [event]
    (swap! state assoc :text-x (.-clientX event) :text-y (.-clientY event))
    (let [{:keys [text-x text-y]} @state]
      (web-sck/chsk-send!
        [:aikakone/mouse-moved {:x text-x :y text-y}] 3000))))

(events/listen js/window "resize"
  (fn [event]
    (p/set-size game js/window.innerWidth js/window.innerHeight)))

(doto game
  (p/start)
  (p/set-screen main-screen))

(web-sck/start-router state)
