(ns aikakonematka.sound
  (:require [cljs-bach.synthesis
             :refer [add audio-context connect-> current-time destination
                     gain low-pass percussive low-pass run-with square sawtooth]]
            ))

(defonce context (audio-context))


(def frequencies-of-major-scale-in-4th-octave
  [261.63                                                   ;C4
   293.66                                                   ;D4
   329.63                                                   ;E4
   349.23                                                   ;F4
   392.00                                                   ;G4
   440                                                      ;A4
   493.88                                                   ;B4
   523.25                                                   ;C5
   ])

(defn play-beep! [sq-freq]
  (run-with
    (connect->
      (square sq-freq)                             ;Define the periodic waves
      (low-pass 600)
      (percussive 0.001 0.4)                                 ;Define how log it takes the note and a decay
      (gain 0.1)                                            ;Alter amplitude of the wave                                       ;                                         ;
      destination)
    context
    (current-time context)
    1.0))
