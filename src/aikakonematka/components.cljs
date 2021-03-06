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

;- css & url definition

(def table-header-style
  {:style
   {:font-size        "4.5vw"
    :font-weight      "700"
    :color            "#fff"
    :background-color "rgba(238, 108, 77, 0.7)"}})

(def table-body-style
  {:style
   {:font-size "3.5vw"
    :color     "#696969"}})

(def backend-url
  (str config/protocol-to-backend "://" config/backend-host))

(defn- check-backend-health []
  (go (let [response (<! (http/get (str backend-url "/health")))]
        (println :backend-health-check-success (:body response)))))

;- view functions & definition -

(defn go-back-to-game-button []
  [ui/mui-theme-provider
   {:muiTheme (get-mui-theme (aget js/MaterialUIStyles "DarkRawTheme"))}
   [ui/raised-button {:label    "Play game"
                      :icon     (ic/navigation-arrow-back)
                      :on-click #(rf/dispatch [:screen-change :game])}]])

(defn ranking-dashboard []
  ;Fetch the ranking data from server using cljs-http
  (go (let [response (<! (http/get (str backend-url "/rankings")))
            ranking (:body response)]
        ;JSON.parse turns a string of JSON text into a Javascript object.
        ;Here it creates Clojure data
        (rf/dispatch [:ranking (util/parse-json ranking)])))
  (let [ranking @(rf/subscribe [:ranking])]
    [:div {:style {:background-image "url(\"images/ranking-board-bg.png\")"
                   :width            "100%"
                   :height           "100%"}}
     [:div {:style {:padding "30px"}}]
     [ui/mui-theme-provider
      {:muiTheme (get-mui-theme {:palette {:text-color (color :grey600)}})}
      [ui/table {:style {:background-color "rgba(255, 255, 255, 0.5)"}}
       [ui/table-header {:displaySelectAll false :adjustForCheckbox false}
        [ui/table-row
         [ui/table-header-column table-header-style "Ranking"]
         [ui/table-header-column table-header-style "Time Record"]]]
       (apply conj
              [ui/table-body {:displayRowCheckbox false}]
              (for [rank (range (count ranking))]
                [ui/table-row
                 [ui/table-row-column table-body-style (inc rank)]
                 [ui/table-row-column table-body-style (ranking rank)]]))]]
     [:div {:style {:display         "flex"
                    :justify-content "flex-end"}}
      [go-back-to-game-button]]]))

(defn- puzzle-selection-view []
  (into
    [:div
     [:img {:style  {:position "absolute"
                     :z-index  "0"
                     :display  "block"}
            :src    "images/puzzle-selection-bg.png"
            :width  "100%"
            :height "100%"}]
     [:img {:style  {:position "absolute"
                     :z-index  "2"
                     :display  "block"
                     :right    "0.1%"
                     :bottom   "0.1%"}
            :src    "images/lovely-baby-in-selection.png"
            :width  "25%"
            :height "33.5%"}]
     [:img {:style  {:position "absolute"
                     :z-index  "2"
                     :display  "block"
                     :right    "38%"
                     :bottom   "0.1%"}
            :src    "images/puzzle-selection-door.png"
            :width  "25%"
            :height "33.5%"}]
     [:img {:style {:position "absolute"
                    :z-index  "3"
                    :right    "3%"
                    :bottom   "37%"
                    :width    "16%"}
            :src   "images/choose-image.png"}]]
    (map (fn [{:keys [search-keyword img-pos-in-puzzle-selection-view]}]
           ^{:key search-keyword} [:img
                                   {:id       search-keyword
                                    :style    {:position   "absolute"
                                               :z-index    "1"
                                               :box-shadow "6px 6px 3px -3px rgb(119,136,153)"
                                               :left       (:left img-pos-in-puzzle-selection-view)
                                               :top        (:top img-pos-in-puzzle-selection-view)}
                                    :src      (let [game-imgs @(rf/subscribe [:search-keyword->game-img-url])]
                                                (when game-imgs
                                                  (game-imgs search-keyword "")))
                                    :width    "20%"
                                    :height   "27.5%"
                                    :on-click #(util/show-game! search-keyword)}])
         util/puzzle-images)))

(def game-intro-view
  (do
    (check-backend-health)
    [:div
     [:img {:style    {:position                  "fixed"
                       :width                     "60%"
                       :height                    "55%"
                       :z-index                   "6"
                       :right                     "30%"
                       :bottom                    "30%"
                       :animation-name            "titleAnimation"
                       :transform                 "rotateX(40deg)"
                       :animation-duration        "2s"
                       :animation-iteration-count "infinite"
                       :animation-direction       "alternate"}
            :src      "images/intro-title.png"
            :width    "100%"
            :height   "100%"
            :on-click util/show-puzzle-selection!}]
     [:img {:style    {:position                  "fixed"
                       :z-index                   "5"
                       :width                     "20%"
                       :height                    "20%"
                       :right                     "10%"
                       :animation-name            "clicktostart"
                       :animation-duration        "2s"
                       :animation-iteration-count "infinite"
                       :animation-direction       "alternate"}
            :src      "images/click-to-start-button.png"
            :on-click util/show-puzzle-selection!}]
     [:picture {:style    {:position "absolute"
                           :z-index  "4"
                           :width    "100%"
                           :height   "100%"}
                :on-click util/show-puzzle-selection!}
      [:source {:media  "(min-width: 600px)"
                :srcSet "images/aikakone-intro.jpg"}]
      [:img {:src    "images/aikakone-intro-mobile.jpg"
             :alt    "aikakone intro image"
             :width  "100%"
             :height "100%"}]]
     [:div {:style {:display "none"}}
      [puzzle-selection-view]]]))

(defn game-screen [search-word->game-img-url game-img]
  (r/create-class
    {:component-did-mount #(game/start-game!
                             (search-word->game-img-url game-img)
                             {:send-game-start-fn!      web-socket/send-game-start!
                              :send-reset-fn!           web-socket/send-reset!
                              :send-sprites-state-fn!   web-socket/send-sprites-state!
                              :send-puzzle-complete-fn! web-socket/send-puzzle-complete!
                              :send-music-note-fn!      web-socket/send-button-music-notes!})
     :reagent-render      (fn [] [:div#canvas])}))

(defn app []
  (let [search-word->game-img-url @(rf/subscribe [:search-keyword->game-img-url])
        game-img @(rf/subscribe [:game-img])]
    (if (and (= :game @(rf/subscribe [:screen]))
             (= (count util/puzzle-images) (count search-word->game-img-url))
             (when search-word->game-img-url
               (string? (search-word->game-img-url game-img))))
      (do
        [:div
         [game-screen search-word->game-img-url game-img]
         (when @(rf/subscribe [:loading?])
           [:div#loader
            [:h1 {:style {:display "inline-block"
                          :align   "center"}}
             "Loading..."]])])
      (do
        (cond
          (= :intro @(rf/subscribe [:screen]))
          game-intro-view

          (= :puzzle-selection @(rf/subscribe [:screen]))
          [:div {:style {:display "block"}}
           [puzzle-selection-view]]

          (= :ranking-dashboard @(rf/subscribe [:screen]))
          [ranking-dashboard])))))
