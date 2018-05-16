(ns aikakonematka.components
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [aikakonematka.util :as util]
            [aikakonematka.game :as game]
            [aikakonematka.web-socket :as web-socket]
            [cljsjs.material-ui]
            [cljs-react-material-ui.core :refer [get-mui-theme color]]
            [cljs-react-material-ui.reagent :as ui]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [re-frame.core :as rf]
            ))

;- Finna API -

(defn add-game-img-url-to-DB! [search-keyword]
  (go (let [response (<! (http/get "https://api.finna.fi/v1/search"
                                   {:with-credentials? false
                                    :query-params      {"lookfor" search-keyword}}))]
        (rf/dispatch [:add-game-img-url
                      search-keyword
                      (str "http://api.finna.fi"
                           (-> (filter :images (get-in response [:body :records]))
                               second
                               :images
                               first))]))))


;- view functions -

(defn go-back-to-game-button []
  [ui/mui-theme-provider
   {:muiTheme (get-mui-theme {:palette {:textColor (color :blue200)}})}
   [ui/raised-button {:label    "Play game"
                      :on-click util/show-game!}]])

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

(defn- puzzle-selection-view []
  (into
    [:div
     [:img {:style  {:position "absolute"
                     :z-index  "0"
                     :display  "block"}
            :src    "images/puzzle-selection-bg.png"
            :width  "100%"
            :height "100%"}]]
    (map (fn [{:keys [search-word left top]}]
           (add-game-img-url-to-DB! search-word)
           ^{:key search-word} [:img
                                {:id       search-word
                                 :style    {:position "absolute"
                                            :z-index  "1"
                                            :left     left
                                            :top      top}
                                 :src      (let [game-imgs @(rf/subscribe [:search-keyword->game-img-url])]
                                             (when game-imgs
                                               (println game-imgs)
                                               (game-imgs search-word "")))
                                 :width    "20%"
                                 :height   "27.5%"
                                 :on-click #(util/show-game! search-word)}])
         [{:search-word "tori" :left "18.5%" :top "13.7%"}
          {:search-word "Mannerheimintie" :left "39.3%" :top "13.7%"}
          {:search-word "Lapinlahdenkatu" :left "60%" :top "13.7%"}
          {:search-word "kamppi" :left "18.5%" :top "43.5%"}
          {:search-word "tuomiokirkko" :left "39.3%" :top "43.5%"}
          {:search-word "mustikka" :left "60%" :top "43.5%"}
          {:search-word "Rovaniemi" :left "18.5%" :top "73.2%"}
          {:search-word "suomenlinna" :left "60%" :top "73.2%"}])))

(defn app []
  (let [search-word->game-img-url @(rf/subscribe [:search-keyword->game-img-url])
        game-img @(rf/subscribe [:game-img])]
    (if (and (= :game @(rf/subscribe [:screen]))
             (when search-word->game-img-url
               (string? (search-word->game-img-url game-img))))
      (do (let [canvas (.getElementById js/document "canvas")]
            (game/start-game!
              (search-word->game-img-url game-img)
              {:send-game-start-fn!      web-socket/send-game-start!
               :send-reset-fn!           web-socket/send-reset!
               :send-sprites-state-fn!   web-socket/send-sprites-state!
               :send-puzzle-complete-fn! web-socket/send-puzzle-complete!
               :send-music-note-fn!      web-socket/send-button-music-notes!})
            (set! (.-display (.-style canvas)) "block"))
          [:div])
      (do
        (let [canvas (.getElementById js/document "canvas")]
          (set! (.-display (.-style canvas)) "none"))
        (cond
          (= :intro @(rf/subscribe [:screen]))
          [:img {:src      "images/aikakone-intro.png"
                 :width    "100%"
                 :height   "100%"
                 :on-click util/show-puzzle-selection!}]

          (= :puzzle-selection @(rf/subscribe [:screen]))
          [puzzle-selection-view]

          (= :ranking-dashboard @(rf/subscribe [:screen]))
          [ranking-dashboard])))))
