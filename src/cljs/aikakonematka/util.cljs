(ns aikakonematka.util)

(def flipped-state "FLIPPED")
(def non-flipped-state "NON-FLIPPED")

(defn show-completion-text [game]
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


(defn puzzle-is-completed [game game-state]
  (when (and (every? #(= non-flipped-state (val %)) (:sprites-state @game-state))
             (not (:puzzle-completion-text @game-state)))
    (println "From puzzle-is-completed : " (:sprites-state @game-state))
    (println "Congrats" "You've got a great start to solving!")
    (swap!
      game-state
      assoc
      :puzzle-completion-text
      (show-completion-text game))))