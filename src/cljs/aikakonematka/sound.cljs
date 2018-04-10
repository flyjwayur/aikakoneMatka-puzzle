(ns aikakonematka.sound
  (:require [cljs-bach.synthesis
             :refer [add adshr audio-context connect connect-> current-time destination
                     gain low-pass percussive low-pass run-with sine square sawtooth]]
            [leipzig.melody :as melody]
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

(def C5 (* 2 (frequencies-of-major-scale-in-4th-octave 0)))

(def D5 (* 2 (frequencies-of-major-scale-in-4th-octave 1)))

(def E5 (* 2 (frequencies-of-major-scale-in-4th-octave 2)))

(def F5 (* 2 (frequencies-of-major-scale-in-4th-octave 3)))

(def G5 (* 2 (frequencies-of-major-scale-in-4th-octave 4)))

(defn play-beep! [sq-freq]
  (run-with
    (connect->
      (square sq-freq)                             ;Define the periodic waves
      (low-pass 600)
      (percussive 0.01 0.4)                                 ;Define how log it takes the note and a decay
      (gain 0.1)                                            ;Alter amplitude of the wave                                       ;                                         ;
      destination)
    context
    (current-time context)
    1.0))

(def composition
  (->>
    (melody/phrase [1 1 0.67 0.33 1]                      ;The duration of each note
                   [C5 C5 C5 D5 E5])                          ;The pitch of each note
    (melody/then
      (melody/phrase [0.67 0.33 0.67 0.33 1]
                     [E5 D5 E5 F5 G5]))))

(def composition2
  (->>
    (melody/phrase [1 1 0.67 0.33 1]
                   [C5 C5 C5 D5 E5])
    (melody/with
      (melody/phrase [0.67 0.33 0.67 0.33 1]
                     [E5 D5 E5 F5 G5]))))

(def melody-box [composition composition2])

(defn marimba [{:keys [pitch]}]
  (connect->
    (add (sine pitch) (sine (inc pitch)) (sine (* 2 pitch)))
    (adshr 0.01 0.2 0.2 0.2 0.3)
    (gain 0.1)))

(defn play-from!
  "Take a sequence of notes and play them from a set point in an audiocontext."
  [audiocontext from notes]
  (doseq [{:keys [time duration instrument] :as note} notes]
    (let [at (+ time from)
          synth-instance (-> note
                             (dissoc :time)
                             instrument)
          connected-instance (connect synth-instance destination)]
      (connected-instance audiocontext at duration))))

(defn play!
  "Take a sequence of notes and play them in an audiocontext."
  [audiocontext notes]
  (play-from! audiocontext (current-time audiocontext) notes))

(defn play-row-row-row-your-boat [melody-box]
  (loop [i 0]
    (when (<  i (count melody-box))
      (->> (nth melody-box i)
           (melody/wherever (comp not :instrument) :instrument (melody/is marimba))
           (play! context))
      (recur (inc i))))
  (js/setTimeout play-row-row-row-your-boat 8000))

(play-row-row-row-your-boat melody-box)




