(ns aikakonematka.util)

(def row-col-num 6)

(defn randomly-execute-a-fn [f]
  (when (< (rand) 0.5) (f)))
