(ns aikakonematka.util
  (:require [reagent.core :as r]))

(enable-console-print!)

(defn parse-json [json-string]
  (js->clj (.parse js/JSON json-string)))

(defonce ranking (r/atom []))

(defonce showing-game? (r/atom true))

(def game (atom nil))

(defonce game-state (atom {:sprites                {}
                           :sprites-state          {}
                           :puzzle-width-height    0
                           :piece-x-scale          0
                           :piece-y-scale          0
                           :play-button            nil
                           :play-time              0.0
                           :play-time-text         nil
                           :puzzle-completion-text nil
                           :ranking-button     nil}))

(def flipped-state "FLIPPED")
(def non-flipped-state "NON-FLIPPED")
(def puzzle-image-width (atom nil))
(def puzzle-image-height (atom nil))
(def button-sprite-sheet-width (atom nil))
(def button-sprite-sheet-height (atom nil))
(def button-sprite-col-num 3)
(def button-sprite-row-num 2)
(defn- get-button-width [btn-sprite-col-num]
  (/ @button-sprite-sheet-width btn-sprite-col-num))
(defn- get-button-height [btn-sprite-row-num]
  (/ @button-sprite-sheet-height btn-sprite-row-num))
(defn- get-left-margin []
  (/ (- (.-innerWidth js/window) (:puzzle-width-height @game-state)) 2))
(defn- get-top-margin []
  (/ (- (.-innerHeight js/window) (:puzzle-width-height @game-state)) 4))

(defn- currently-playing-game? []
  (let [dereffed-game-state @game-state]
    (and (not (empty? (:sprites dereffed-game-state)))
         (nil? (:puzzle-completion-text dereffed-game-state)))))

(defn- puzzle-completed? []
  (every? #(= non-flipped-state (val %)) (:sprites-state @game-state)))

(defn- display-play-button! []
  (set! (.-visible (:play-button @game-state)) true))

(defn hide-play-button! []
  (set! (.-visible (:play-button @game-state)) false))

(defn- display-congrats-message! []
  (swap!
    game-state
    assoc
    :puzzle-completion-text
    (.text
      (.-add @game)
      (/ (.-innerWidth js/window) 5)
      (/ (.-innerHeight js/window) 20)
      "Congrats! \n You made it :D Yeahhhh!"
      (clj->js {:font            "40px Arial"
                :fill            "#06184c"
                :backgroundColor "#f7eb7e"
                :align           "center"}))))

(defn show-game! []
  (reset! showing-game? true)
  (let [canvas (.getElementById js/document "canvas")]
    (set! (.-display (.-style canvas)) "block")))

(defn hide-game! []
  (reset! showing-game? false)
  (let [canvas (.getElementById js/document "canvas")]
    (set! (.-display (.-style canvas)) "none")))

(defn- display-ranking-button! []
  (.setTo (.-scale (:ranking-button @game-state)) 0.5 0.5))

(defn hide-ranking-button! []
  (.setTo (.-scale (:ranking-button @game-state)) 0 0))

(defn make-ranking-button! []
  (swap!
    game-state
    assoc
    :ranking-button
    (this-as this
      (.button
        (.-add @game)
        (* 0.75 (.-innerWidth js/window))
        (* 0.2 (.-innerHeight js/window))
        "ranking-button"
        (fn []
          (println "Display ranking")
          (hide-game!))
        this)))
  (display-ranking-button!))

(defn show-reset-button! []
  (.setTo (.-scale (:reset-button @game-state)) 0.1 0.1))

(defn hide-reset-button! []
  (.setTo (.-scale (:reset-button @game-state)) 0 0))

(defn make-reset-button! []
  (swap!
    game-state
    assoc
    :reset-button
    (this-as this
      (.button
        (.-add @game)
        (* 0.85 (.-innerWidth js/window))
        (* 0.3 (.-innerHeight js/window))
        "reset-button"
        (fn []
          (println "Reset clicked"))
        this)))
  ;Make reset button when game start. It is not needed until the player starts playing the game.
  (hide-reset-button!))

(defn congrats-completion-finish-game [send-puzzle-complete-fn!]
  (when (and (currently-playing-game?)
             (puzzle-completed?)
             (not (:puzzle-completion-text @game-state)))
    (println "From puzzle-is-completed : " (:sprites-state @game-state))
    (println "Congrats" "You've got a great start to solving!")
    (hide-reset-button!)
    (display-play-button!)
    (make-ranking-button!)
    (display-congrats-message!)
    (send-puzzle-complete-fn! (:play-time @game-state))
    (swap! game-state assoc :sprites-state {})))

(defn- synchronize-puzzle-board [sprite-state]
  (swap! game-state assoc :sprites-state sprite-state)
  (when (currently-playing-game?)
    (println "synchronizing.... :)")
    (let [derefed-state @game-state
          sprites (:sprites derefed-state)
          piece-x-scale (:piece-x-scale derefed-state)
          piece-y-scale (:piece-y-scale derefed-state)]
      (doseq [[[col row] sprite-flipped-state] sprite-state]
        (let [piece-scale (.-scale (sprites [col row]))]
          (if (= non-flipped-state sprite-flipped-state)
            (.setTo piece-scale piece-x-scale piece-y-scale)
            (.setTo piece-scale 0 0)))))))

(defn destroy-stage-clear-text! []
  (when-let [puzzle-completion-text (:puzzle-completion-text @game-state)]
    (.destroy puzzle-completion-text))
  (swap! game-state assoc :puzzle-completion-text nil))

(defn display-play-time! []
  (when-not (:play-time-text @game-state)
    (swap! game-state
           assoc
           :play-time-text
           (.text (.-add @game)
                  (* (.-innerWidth js/window) 0.8)
                  (/ (.-innerHeight js/window) 20)
                  "0.000"
                  (clj->js {:font            "40px Arial"
                            :fill            "#fff"
                            :backgroundColor "#000"
                            :align           "center"})))))

(defn update-play-time-to-current-time [play-time]
  (let [derefed-state @game-state
        play-time-in-sec (/ play-time 1000)]
    (.setText
      (:play-time-text derefed-state)
      (str play-time-in-sec))
    (swap! game-state assoc :play-time play-time-in-sec)))
