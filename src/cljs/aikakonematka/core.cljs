(ns aikakonematka.core

  (:require [aikakonematka.components :as view]
            [aikakonematka.web-socket :as web-sck]
            [aikakonematka.util :as util]
            [reagent.core :as r]
            [re-frame.core :as rf]
            [nightlight.repl-server]
            ))

(enable-console-print!)

;- Event Handlers -

(rf/reg-event-db
  :initialize
  (fn [_ _]
    {:screen :intro
     :ranking []}))

(rf/reg-event-db
  :ranking
  (fn [db [_ ranking]]
    (assoc db :ranking ranking)))

(rf/reg-event-db
  :screen-change
  (fn [db [_ screen]]
    (assoc db :screen screen)))

(rf/reg-event-db
  :set-finna-img
  (fn [db [_ screen]]
    (assoc db :finna-img screen)))

;- Query -

(rf/reg-sub
  :screen
  (fn [db _]
    (:screen db)))

(rf/reg-sub
  :ranking
  (fn [db _]
    (:ranking db)))

(rf/reg-sub
  :finna-img
  (fn [db _]
    (:finna-img db)))

(rf/dispatch-sync [:initialize])
(r/render [view/app]
          (.getElementById js/document "app"))

; this is the game program's entry point
(let [buttons-img (js/Image.)]
  ; finding out size of image. https://stackoverflow.com/a/626505/5802173
  ; image loading is done asynchronously. The way to start the game after image is loaded is
  ; we start the game in `onload` callback of the image. After loading buttons-img first,
  ; start loading puzzle image then start the game.
  (set!
    (.-onload buttons-img)
    (clj->js
      (fn []
        (reset! util/button-sprite-sheet-width (.-width buttons-img))
        (reset! util/button-sprite-sheet-height (.-height buttons-img))
        (web-sck/start-web-socket!)))) ; start game after loading image
  (swap! util/game-state assoc :puzzle-width-height (int (* 0.7 (min (.-innerWidth js/window) (.-innerHeight js/window)))))
  (set! (.-src buttons-img) "images/control-buttons.png"))
