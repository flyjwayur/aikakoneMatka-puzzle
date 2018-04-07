(ns aikakonematka.sound
  (:require [cljs-bach.synthesis
             :refer [add audio-context connect-> current-time destination
                     gain low-pass percussive low-pass run-with square sawtooth]]
            ))

(defonce context (audio-context))


(defn play-beep! [sq-freq saw-freq]
  (run-with
    (connect->
      (add
        (square 440)
        (sawtooth sq-freq saw-freq))                               ;Define the periodic waves
      (low-pass 600)
      (percussive 0.001 0.4)                                 ;Define how log it takes the note and a decay
      (gain 0.1)                                            ;Alter amplitude of the wave                                       ;                                         ;
      destination)
    context
    (current-time context)
    1.0))
