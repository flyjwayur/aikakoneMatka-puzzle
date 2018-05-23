(ns aikakonematka.components
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [aikakonematka.config :as config]
            [aikakonematka.util :as util]
            [aikakonematka.game :as game]
            [aikakonematka.web-socket :as web-socket]
            [cljsjs.material-ui]
            [cljs-react-material-ui.core :refer [get-mui-theme color]]
            [cljs-react-material-ui.reagent :as ui]
            [cljs-react-material-ui.icons :as ic]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [reagent.core :as r]
            [re-frame.core :as rf]
            ))

;- view functions -

(defn go-back-to-game-button []
  [ui/mui-theme-provider
   {:muiTheme (get-mui-theme (aget js/MaterialUIStyles "DarkRawTheme"))}
   [ui/raised-button {:label    "Play game"
                      :icon (ic/navigation-arrow-back)
                      :on-click #(rf/dispatch [:screen-change :game])}]])

(defn ranking-dashboard []
  ;Fetch the ranking data from server using cljs-http
  (go (let [response (<! (http/get (str config/protocol-to-backend "://" config/backend-host "/rankings")))
            ranking (:body response)]
        ;JSON.parse turns a string of JSON text into a Javascript object.
        ;Here it creates Clojure data
        (rf/dispatch [:ranking (util/parse-json ranking)])))
  (let [ranking @(rf/subscribe [:ranking])]
    [:div {:style {:background-image  "url(\"images/ranking-board-bg.png\")"
                   :width "100%"
                   :height "100%"}}
     [go-back-to-game-button]
     [:div {:style {:padding "30px"}}]
     [ui/mui-theme-provider
      {:muiTheme (get-mui-theme {:palette {:text-color (color :grey600)}})}
      [ui/table {:style {:background-color "rgba(255, 255, 255, 0.5)"}}
       [ui/table-header {:displaySelectAll false :adjustForCheckbox false}
        [ui/table-row
         [ui/table-header-column
          {:style
           {:font-size "25px" :font-weight "700" :color "#fff" :background-color "rgba(238, 108, 77, 0.7)"}}
          "Ranking"]
         [ui/table-header-column
          {:style
           {:font-size "25px" :font-weight "700" :color "#fff" :background-color "rgba(238, 108, 77, 0.7)"}}
          "Time Record"]]]
       (apply conj
              [ui/table-body {:displayRowCheckbox false}]
              (for [rank (range (count ranking))]
                [ui/table-row
                 [ui/table-row-column {:style {:color "#696969" :font-size "18px"}} (inc rank)]
                 [ui/table-row-column {:style {:color "#696969" :font-size "18px"}} (ranking rank)]]))]]]))

(defn- puzzle-selection-view []
  (into
    [:div
     [:img {:style  {:position "absolute"
                     :z-index  "0"
                     :display  "block"}
            :src    "images/puzzle-selection-bg.png"
            :width  "100%"
            :height "100%"}]]
    (map (fn [{:keys [search-keyword img-pos-in-puzzle-selection-view]}]
           ^{:key search-keyword} [:img
                                {:id       search-keyword
                                 :style    {:position "absolute"
                                            :z-index  "1"
                                            :left     (:left img-pos-in-puzzle-selection-view)
                                            :top      (:top img-pos-in-puzzle-selection-view)}
                                 :src      (let [game-imgs @(rf/subscribe [:search-keyword->game-img-url])]
                                             (when game-imgs
                                               (println game-imgs)
                                               (game-imgs search-keyword "")))
                                 :width    "20%"
                                 :height   "27.5%"
                                 :on-click #(util/show-game! search-keyword)}])
         util/puzzle-images)))

(defn game-screen [search-word->game-img-url game-img]
  (r/create-class
    {:component-did-mount #(game/start-game!
                             (search-word->game-img-url game-img)
                             {:send-game-start-fn!      web-socket/send-game-start!
                              :send-reset-fn!           web-socket/send-reset!
                              :send-sprites-state-fn!   web-socket/send-sprites-state!
                              :send-puzzle-complete-fn! web-socket/send-puzzle-complete!
                              :send-music-note-fn!      web-socket/send-button-music-notes!})
     :reagent-render (fn [] [:div#canvas {:style {:position "absolute"
                                              :display "block"}
                                      :width  "100%"
                                      :height "100%"}])}))

(defn app []
  (let [search-word->game-img-url @(rf/subscribe [:search-keyword->game-img-url])
        game-img @(rf/subscribe [:game-img])]
    (if (and (= :game @(rf/subscribe [:screen]))
             (= (count util/puzzle-images) (count search-word->game-img-url))
             (when search-word->game-img-url
               (string? (search-word->game-img-url game-img))))
      (do
        (swap! util/game-state merge util/initial-game-state)
        (js/setTimeout
                       500)
        [:div
         [game-screen search-word->game-img-url game-img]
         [:h1 {:style {:display "inline"}} "Loading..."]])
      (do
        (cond
          (= :intro @(rf/subscribe [:screen]))
          [:div
           [:img {:style {:position "absolute"
                          :background-color "#fff"
                          :z-index "2"}
                  :src      "images/aikakone-intro.png"
                  :width    "100%"
                  :height   "100%"
                  :on-click util/show-puzzle-selection!}]
           [puzzle-selection-view]]

          (= :puzzle-selection @(rf/subscribe [:screen]))
          [puzzle-selection-view]

          (= :ranking-dashboard @(rf/subscribe [:screen]))
          [ranking-dashboard])))))
