(ns aikakonematka.util)

(enable-console-print!)

(def game (atom nil))

(defonce game-state (atom {:sprites                {}
                           :sprites-state          {}
                           :puzzle-width-height    0
                           :piece-x-scale          0
                           :piece-y-scale          0
                           :puzzle-completion-text nil}))

(def flipped-state "FLIPPED")
(def non-flipped-state "NON-FLIPPED")

(defn check-time-to-get-start-time []
  (let [start-time (.getTime (js/Date.))]
    (println "start time : " start-time)))

(defn check-time-to-solve-puzzle []
  (let [last-time (.getTime (js/Date.))]
    (println "last time : " last-time)))

(defn show-completion-text []
  (.setTo
    (.-anchor
      (.text
        (.-add @game)
        (/ (.-innerWidth js/window) 5)
        (/ (.-innerHeight js/window) 20)
        "Congrats! \n You made it :D Yeahhhh!"
        (clj->js {:font            "40px Arial"
                  :fill            "#06184c"
                  :backgroundColor "#f7eb7e"
                  :align           "center"}))) 0.1))


(defn show-congrats-msg-when-puzzle-is-completed []
  (when (and (every? #(= non-flipped-state (val %)) (:sprites-state @game-state))
             (not (:puzzle-completion-text @game-state)))
    (println "From puzzle-is-completed : " (:sprites-state @game-state))
    (println "Congrats" "You've got a great start to solving!")
    (check-time-to-solve-puzzle)
    (swap!
      game-state
      assoc
      :puzzle-completion-text
      (show-completion-text))))