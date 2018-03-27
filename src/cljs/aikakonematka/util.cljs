(ns aikakonematka.util)

(enable-console-print!)

(def game (atom nil))

(defonce game-state (atom {:sprites                {}
                           :sprites-state          {}
                           :puzzle-width-height    0
                           :piece-x-scale          0
                           :piece-y-scale          0
                           :play-button            nil
                           :play-time-text         nil
                           :game-start-time        nil
                           :puzzle-completion-text nil}))

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
  (/ (- (.-innerWidth js/window)(:puzzle-width-height @game-state)) 2))
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

(defn congrats-completion-finish-game [send-puzzle-complete-fn!]
  (when (and (currently-playing-game?)
             (puzzle-completed?)
             (not (:puzzle-completion-text @game-state)))
    (println "From puzzle-is-completed : " (:sprites-state @game-state))
    (println "Congrats" "You've got a great start to solving!")
    (display-play-button!)
    (display-congrats-message!)
    (send-puzzle-complete-fn!)
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

(defn mark-start-time! []
  (swap! game-state assoc :game-start-time (js/Date.)))

(defn display-play-time! []
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
                          :align           "center"}))))
