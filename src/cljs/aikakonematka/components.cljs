(ns aikakonematka.components
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljsjs.material-ui]
            [cljs-react-material-ui.core :refer [get-mui-theme color]]
            [cljs-react-material-ui.reagent :as ui]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [aikakonematka.util :as util]
            [re-frame.core :as rf]
            ))

;- view functions -

(defn go-back-to-game-button []
  [ui/mui-theme-provider
   {:muiTheme (get-mui-theme {:palette {:textColor (color :blue200)}})}
   [ui/raised-button {:label "Play game"
                      :on-click #(rf/dispatch [:screen-change :game])}]])

(defn ranking-dashboard []
  ;Fetch the ranking data from server using cljs-http
  (go (let [response (<! (http/get "http://localhost:2222/rankings"))
            ranking (:body response)]
        ;JSON.parse turns a string of JSON text into a Javascript object.
        ;Here it creates Clojure data
        (rf/dispatch [:ranking (util/parse-json ranking)])))
  (let [ranking @(rf/subscribe [:ranking])]
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
                 [ui/table-row-column (ranking rank)]]))]]]))

(defn app []
  (let [canvas (.getElementById js/document "canvas")]
    (if (= :game @(rf/subscribe [:screen]))
      (do
        (set! (.-display (.-style canvas)) "block")
        [:div])
      (cond
        (= :ranking-dashboard @(rf/subscribe [:screen]))
        (do (set! (.-display (.-style canvas)) "none")
          [ranking-dashboard])))))