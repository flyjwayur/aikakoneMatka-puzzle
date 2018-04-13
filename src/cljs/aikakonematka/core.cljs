(ns aikakonematka.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljsjs.material-ui]
            [cljs-react-material-ui.core :refer [get-mui-theme color]]
            [cljs-react-material-ui.reagent :as ui]
            [cljs-react-material-ui.icons :as icon]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [goog.events :as events]
            [aikakonematka.web-socket :as web-sck]
            [aikakonematka.util :as util]
            [reagent.core :as r]
            [nightlight.repl-server]
            ))

(enable-console-print!)

(defn go-back-to-game-button []
  [ui/mui-theme-provider
   {:muiTheme (get-mui-theme {:palette {:textColor (color :blue200)}})}
    [ui/raised-button {:label "Play game"
                       :on-click #(do
                                    (util/show-game!))}]])

(defn ranking-dashboard []
  (when @util/showing-ranking?
    ;Fetch the ranking data from server using cljs-http
    (go (let [response (<! (http/get "http://localhost:2222/rankings"))
              ranking (:body response)]
          ;JSON.parse turns a string of JSON text into a Javascript object.
          ;Here it creates Clojure data
          (reset! util/ranking (util/parse-json ranking))))
    (let [ranking @util/ranking]
      [:div
       [go-back-to-game-button]
       [ui/mui-theme-provider
        {:muiTheme (get-mui-theme {:palette {:textColor (color :blue200)}})}
        [ui/table
         [ui/table-header {:displaySelectAll false :adjustForCheckbox false}
          [ui/table-row
           [ui/table-header-column "Ranking"]
           [ui/table-header-column "Time Record"]]]
         (apply conj
                [ui/table-body {:displayRowCheckbox false}]
                (for [rank (range (count ranking))]
                  [ui/table-row
                   [ui/table-row-column (inc rank)]
                   [ui/table-row-column (ranking rank)]]))]]])))

(r/render [ranking-dashboard]
          (.getElementById js/document "app"))

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
        (web-sck/start-web-socket!))))                      ; start game after loading image
  (set! (.-src buttons-img) "images/control-buttons.png")
  (println "loading images"))
