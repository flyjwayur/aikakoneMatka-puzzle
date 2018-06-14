(ns aikakonematka.sound
  (:require [cljs-bach.synthesis
             :refer [add adshr adsr audio-context connect connect-> constant current-time destination
                     gain low-pass percussive run-with sine square sawtooth triangle]]
            [leipzig.melody :as melody]
            [aikakonematka.util :as util]
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

(def C6 (* 4 (frequencies-of-major-scale-in-4th-octave 0)))

(defn play-beep! [sq-freq]
  (when (:audio-on? @util/game-state)
    (run-with
      (connect->
        (square sq-freq)                                      ;Define the periodic waves
        (low-pass 600)
        (percussive 0.01 0.4)                                 ;Define how log it takes the note and a decay
        (gain 0.3)                                            ;Alter amplitude of the wave                                       ;                                         ;
        destination)
      context
      (current-time context)
      1.0)))

(defn make-melody! []
  (melody/phrase (:music-durations @util/game-state) (:music-pitches @util/game-state)))

(def composition1
  ; Row, row, row  your boat,
  (->>
    (melody/phrase [1 1 0.67 0.33 1]                        ;The duration of each note
                   [C5 C5 C5 D5 E5])                        ;The pitch of each note
    ; Gent-ly  down the  stream,
    (melody/then
      (melody/phrase [0.67 0.33 0.67 0.33 1]
                     [E5 D5 E5 F5 G5])),
    ; Merrily, merrily, merrily, merrily,
    (melody/then
      (melody/phrase (repeat 12 0.33)
                     (mapcat (partial repeat 3) [C6 G5 E5 C5])))
    ; Life  is   but  a    dream!
    (melody/then
      (melody/phrase [0.67 0.33 0.67 0.33 2]
                     [G5 F5 E5 D5 C5]))))

;(def composition2
;  (->>
;    (melody/phrase [1 1 0.67 0.33 1]
;                   [C5 C5 C5 D5 E5])
;    (melody/with
;      (melody/phrase [0.67 0.33 0.67 0.33 1]
;                     [E5 D5 E5 F5 G5]))
;    (melody/then
;      (melody/phrase (repeat 12 0.33)
;                     (mapcat (partial repeat 3) [C6 G5 E5 C5])))
;    (melody/then
;      (melody/phrase [0.67 0.33 0.67 0.33 2]
;                     [G5 F5 E5 D5 C5]))))

;(def music-box [composition1 composition2])

(defn marimba [{:keys [pitch]}]
  (connect->
    (add (sine pitch) (sine (inc pitch)) (sine (* 2 pitch)))
    (adshr 0.01 0.2 0.2 0.2 0.3)
    (gain 0.1)))

(defn bell
  "An imitation bell, made by adding together harmonics."
  [{:keys [pitch]}]
  (let [harmonic (fn [n proportion]
                   (connect->
                     (sine (* n pitch))                     ; Each harmonic is a sine wave.
                     (percussive 0.01 proportion)           ; The attack and decay of each note.
                     (gain 0.05)))]                         ; Multiply the volume of each harmonic by 0.5.
    (->> (map harmonic [1.0 2.0 3.0 4.1 5.2]                ; Each harmonic is a multiple of the base frequency.
              [1.0 0.6 0.4 0.3 0.2])                        ; Higher harmonics are weaker.
         (apply add))))

(defn organ [note]
  (connect->
    (add (sine (* 0.5 (:pitch note))) (triangle (:pitch note)))
    (low-pass (* 4 (:pitch note)) (connect-> (sine 3) (gain 3)))
    (adsr 0.1 0 1 0.3)
    (gain 0.2)))

(defn wah [{:keys [pitch]}]
  (connect->
    (sawtooth pitch)
    (low-pass
      (connect->
        (constant (* 4 pitch))
        (adsr 0.1 0.2 0.4 0.3)) 5)
    (adsr 0.3 0.5 0.8 0.3)
    (gain 0.1)))

(def music-instrument [bell marimba organ wah])

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


(defn play-row-row-row-your-boat []
  (when-not (util/currently-playing-game?)
    (->> composition1
         (melody/wherever (comp not :instrument) :instrument (melody/is marimba))
         (play! context))))

;(music-box 0)
;(melody/then (music-box 1))

(play-row-row-row-your-boat)

(defn play-song-with-instrument []
  (defn play-song-with-instrument []
    (->> (make-melody!)
         (map
           (fn [note]
             (let [pitch (:pitch note)]
               (cond
                 (< pitch 300) (assoc note :instrument (music-instrument 0))
                 (< pitch 350) (assoc note :instrument (music-instrument 1))
                 (<= pitch 440) (assoc note :instrument (music-instrument 2))
                 :else (assoc note :instrument (music-instrument 3))))))
         (play! context))))

(defn song-from-players []
  (when (:audio-on? @util/game-state)
    (play-song-with-instrument))
  (js/setTimeout song-from-players (+ 1000 (* 1000 (apply + (:music-durations @util/game-state))))))

(song-from-players)
