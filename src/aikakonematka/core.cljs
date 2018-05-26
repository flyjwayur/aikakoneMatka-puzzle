(ns aikakonematka.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [aikakonematka.components :as view]
            [aikakonematka.web-socket :as web-sck]
            [aikakonematka.util :as util]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [reagent.core :as r]
            [re-frame.core :as rf]
            [nightlight.repl-server]
            ))

(enable-console-print!)

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

;- Event Handlers -

(rf/reg-event-db
  :initialize
  (fn [_ _]
    (doseq [{:keys [search-keyword]} util/puzzle-images]
      (add-game-img-url-to-DB! search-keyword))
    {:screen  :intro
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
  :set-game-img
  (fn [db [_ search-keyword]]
    (assoc db :game-img search-keyword)))

(rf/reg-event-db
  :add-game-img-url
  (fn [db [_ search-keyword image-url]]
    (update db :search-keyword->game-img-url assoc search-keyword image-url)))

(rf/reg-event-db
  :loading?
  (fn [db [_ loading?]]
    (assoc db :loading? loading?)))

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
  :game-img
  (fn [db _]
    (:game-img db)))

(rf/reg-sub
  :search-keyword->game-img-url
  (fn [db _]
    (:search-keyword->game-img-url db)))

(rf/reg-sub
  :loading?
  (fn [db _]
    (:loading? db)))


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
        (web-sck/start-web-socket!))))                      ; start game after loading image
  (set! (.-src buttons-img) "images/control-buttons.png"))
