(ns aikakonematka.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [goog.events :as events]
            [aikakonematka.web-socket :as web-sck]
            [aikakonematka.util :as util]
            [reagent.core :as r]
            [nightlight.repl-server]
            ))

(defn go-back-to-game-button []
  [:div
   [:input {:type "button" :value "Go back to play game"
            :on-click #(do
                         (reset! util/showing-game? true)
                         (util/show-game!))}]])

(defn ranking-dashboard []
  (when-not @util/showing-game?
    ;Fetch the ranking data from server using cljs-http
    (go (let [response (<! (http/get "http://localhost:2222/rankings"))
              ranking (:body response)]
          (reset! util/ranking ranking)))
    [:div
     [go-back-to-game-button]
     [:p (str "Ranking is: " @util/ranking)]]))

(r/render [ranking-dashboard]
          (.getElementById js/document "ranking-board"))

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
        (reset! util/button-sprite-sheet-width (.-width buttons-img))
        (reset! util/button-sprite-sheet-height (.-height buttons-img))
        (println "buttons image loaded")
        (set! (.-src puzzle-img) "images/puzzleImage.jpg"))))
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
