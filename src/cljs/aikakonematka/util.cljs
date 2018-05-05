(ns aikakonematka.util
  (:require [re-frame.core :as rf]))

(enable-console-print!)

(def row-col-num 6)

(defn parse-json [json-string]
  (js->clj (.parse js/JSON json-string)))

(def game (atom nil))

(defonce game-state (atom {:sprites                {}
                           :sprites-state          {}
                           :puzzle-width-height    0
                           :piece-x-scale          0
                           :piece-y-scale          0
                           :play-button            nil
                           :control-buttons        []
                           :play-time              0.0
                           :play-time-text         nil
                           :puzzle-completion-text nil
                           :ranking-button         nil
                           :music-pitches          []
                           :music-durations        []}))

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
  (/ (- (.-innerHeight js/window) (:puzzle-width-height @game-state)) 2))

(defn- get-piece-width-height [puzzle-width-height]
  (/ puzzle-width-height row-col-num))

(defn- make-buttons-same-size-as-puzzle-piece! [button-sprite]
  (let [piece-width-height (get-piece-width-height (:puzzle-width-height @game-state))]
    (do
      (.setTo
        (.-scale button-sprite)
        (/ piece-width-height (get-button-width button-sprite-col-num))
        (/ piece-width-height (get-button-height button-sprite-row-num))))))

(defn- currently-playing-game? []
  (let [dereffed-game-state @game-state]
    (and (not (empty? (:sprites-state dereffed-game-state)))
         (nil? (:puzzle-completion-text dereffed-game-state)))))

(defn- puzzle-completed? []
  (let [sprites-state (:sprites-state @game-state)
        row-flipped? (:row-flipped? sprites-state)
        col-flipped? (:col-flipped? sprites-state)
        diagonal-flipped? (:diagonal-flipped? sprites-state)]
    (or (and (every? #(false? (val %)) row-flipped?)
             (every? #(false? (val %)) col-flipped?)
             (false? diagonal-flipped?))
        (and (every? #(true? (val %)) row-flipped?)
             (every? #(true? (val %)) col-flipped?)
             (false? diagonal-flipped?)))))

(defn- display-play-button! []
  (set! (.-visible (:play-button @game-state)) true))

(defn hide-play-button! []
  (set! (.-visible (:play-button @game-state)) false))

(def initial-sprites-state-per-piece
  (reduce
    #(assoc %1 %2 false)
    {}
    (for [row (range row-col-num)
          col (range row-col-num)]
      [row col])))

(defn- synchronize-puzzle-board! [sprites-state]
  (when (currently-playing-game?)
    (swap! game-state assoc :sprites-state sprites-state)
    (println "synchronizing.... :)")
    (let [game-object-facotry (.-add game)
          derefed-state @game-state
          sprites (:sprites derefed-state)
          row-flips-applied (reduce
                              (fn [modified-sprites-state-per-piece [row flipped?]]
                                ;flipped? from control button clicking or randomized flipped states
                                (reduce
                                  (fn [sprites-state-per-piece col]
                                    (update sprites-state-per-piece [row col] (if flipped? not identity)))
                                  modified-sprites-state-per-piece
                                  (range row-col-num)))
                              ;Initially, pieces' sprites-state is all false,
                              ;So if the flip happens in the game,
                              ;initial game state will be changed by 'not'
                              ;otherwise, it is same as false by 'identity'
                              initial-sprites-state-per-piece
                              (:row-flipped? sprites-state))
          col-flips-applied (reduce
                              (fn [modified-sprites-state [col flipped?]]
                                (reduce
                                  (fn [sprites-state-per-piece row]
                                    (update sprites-state-per-piece [row col] (if flipped? not identity)))
                                  modified-sprites-state
                                  (range row-col-num)))
                              row-flips-applied
                              (:col-flipped? sprites-state))
          diagonal-flip-applied (reduce
                                  (fn [modified-sprites-state row-col]
                                    (update modified-sprites-state
                                            [(- row-col-num 1 row-col) row-col]
                                            (if (:diagonal-flipped? sprites-state) not identity)))
                                  col-flips-applied
                                  (range row-col-num))]
      (doseq [[[row col] sprite-flipped-state] diagonal-flip-applied]
        (let [piece-scale (.-scale (sprites [row col]))
              game-object-factory (.-add @game)]
          (if (= false sprite-flipped-state)
            (.to
              (.tween game-object-factory piece-scale)
              (clj->js {:x (:piece-x-scale derefed-state)
                        :y (:piece-y-scale derefed-state)})
              500
              js/Phaser.Easing.Cubic.In
              true)
            (.to
              (.tween game-object-factory piece-scale)
              (clj->js {:x 0 :y 0})
              500
              js/Phaser.Easing.Cubic.In
              true)))))))

(defn show-game! []
  (rf/dispatch [:screen-change :game])
  (let [canvas (.getElementById js/document "canvas")]
    (set! (.-display (.-style canvas)) "block")))

(defn hide-game! []
  (rf/dispatch [:screen-change :ranking-dashboard])
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
          (hide-game!))
        this)))
  (display-ranking-button!))

(defn- hide-control-buttons! []
  (doseq [control-button (:control-buttons @game-state)]
    (.setTo (.-scale control-button) 0 0)))

(defn- show-control-buttons! []
  (doseq [control-button (:control-buttons @game-state)]
    (make-buttons-same-size-as-puzzle-piece! control-button)))

(defn hide-all-puzzle-pieces! []
  (synchronize-puzzle-board!
    {:row-flipped? (reduce
                     #(assoc %1 %2 true)
                     {}
                     (range row-col-num))
     :col-flipped? (reduce
                     #(assoc %1 %2 false)
                     {}
                     (range row-col-num))
     :diagonal-flipped? false})
  (swap! game-state assoc :sprites-state nil))

(defn hide-play-time! []
  (when-let [play-time-text (:play-time-text @game-state)]
    (.destroy play-time-text))
  (swap! game-state assoc :play-time-text nil))

(defn show-reset-button! []
  (.setTo (.-scale (:reset-button @game-state)) 0.1 0.1))

(defn hide-reset-button! []
  (.setTo (.-scale (:reset-button @game-state)) 0 0))

(defn reset-game! []
  (hide-all-puzzle-pieces!)
  (hide-control-buttons!)
  (hide-play-time!)
  (display-play-button!)
  (display-ranking-button!))

(defn make-reset-button! [send-reset-fn]
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
          (reset-game!)
          (send-reset-fn))
        this)))
  ;Make reset button when game start. It is not needed until the player starts playing the game.
  (hide-reset-button!))

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

(defn destroy-stage-clear-text! []
  (when-let [puzzle-completion-text (:puzzle-completion-text @game-state)]
    (.destroy puzzle-completion-text))
  (swap! game-state assoc :puzzle-completion-text nil))

(defn congrats-completion-finish-game! [send-puzzle-complete-fn!]
  (when (and (currently-playing-game?)
             (puzzle-completed?)
             (not (:puzzle-completion-text @game-state)))
    (hide-reset-button!)
    (hide-control-buttons!)
    (display-play-button!)
    (make-ranking-button!)
    (display-congrats-message!)
    (send-puzzle-complete-fn! (:play-time @game-state))
    (swap! game-state assoc :sprites-state {})))

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

(defn update-music-notes [music-pitches]
  (println "music notes : " music-pitches)
  (swap! game-state assoc :music-pitches music-pitches)
  (swap! game-state assoc :music-durations (map (fn [_] (rand 1)) music-pitches)))
