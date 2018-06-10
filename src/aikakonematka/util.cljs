(ns aikakonematka.util
  (:require [re-frame.core :as rf]))

(enable-console-print!)

;- util variables

(def puzzle-images
  [{:search-keyword "tori" :img-pos-in-puzzle-selection-view {:left "18.5%" :top "13.7%"}}
   {:search-keyword "Mannerheimintie" :img-pos-in-puzzle-selection-view {:left "39.3%" :top "13.7%"}}
   {:search-keyword "Lapinlahdenkatu" :img-pos-in-puzzle-selection-view {:left "60%" :top "13.7%"}}
   {:search-keyword "kamppi" :img-pos-in-puzzle-selection-view {:left "18.5%" :top "43.5%"}}
   {:search-keyword "tuomiokirkko" :img-pos-in-puzzle-selection-view {:left "39.3%" :top "43.5%"}}
   {:search-keyword "mustikka" :img-pos-in-puzzle-selection-view {:left "60%" :top "43.5%"}}
   {:search-keyword "Rovaniemi" :img-pos-in-puzzle-selection-view {:left "18.5%" :top "73.2%"}}
   {:search-keyword "suomenlinna" :img-pos-in-puzzle-selection-view {:left "60%" :top "73.2%"}}])

(def row-col-num 6)

(defn parse-json [json-string]
  (js->clj (.parse js/JSON json-string)))

(def game (atom nil))

(def initial-game-state
  {:sprites                 {}
   :sprites-state           {}
   :puzzle-width-height     0
   :play-button             nil
   :control-buttons         []
   :control-button-tweens   []
   :play-time               0.0
   :play-time-text          nil
   :puzzle-completion-text  nil
   :puzzle-game-intro-text  nil
   :ranking-button          nil
   :puzzle-selection-button nil
   :music-pitches           []
   :music-durations         []})

(defonce game-state (atom initial-game-state))

(def puzzle-image-width (atom nil))
(def puzzle-image-height (atom nil))
(def button-sprite-sheet-width (atom nil))
(def button-sprite-sheet-height (atom nil))
(def button-sprite-col-num 2)
(def button-sprite-row-num 3)


;- util functions to find size of puzzle and buttons

(defn- get-button-width [btn-sprite-col-num]
  (/ @button-sprite-sheet-width btn-sprite-col-num))

(defn- get-button-height [btn-sprite-row-num]
  (/ @button-sprite-sheet-height btn-sprite-row-num))

(defn- get-left-margin []
  (/ (- (.-innerWidth js/window) (:puzzle-width-height @game-state)) 2))

(defn- get-top-margin []
  (/ (- (.-innerHeight js/window) (:puzzle-width-height @game-state)) 2))

(defn- get-piece-width-height [puzzle-width-height]
  (int (/ puzzle-width-height row-col-num)))

(defn get-scale-for-same-size-as-piece! []
  (/ (get-piece-width-height (:puzzle-width-height @game-state))
     (get-button-width button-sprite-col-num)))

(defn- display-control-buttons-and-use-tween-scale! [control-button]
  (let [control-button-scale (get-scale-for-same-size-as-piece!)
        tween (.. ^js/Phaser.Game @game
                  -add
                  (tween (.-scale control-button)))]
    (.. control-button
        -scale
        (setTo (* 0.90 control-button-scale)
               (* 0.90 control-button-scale)))
    (swap! game-state update :control-button-tweens conj tween)
    (.to tween (clj->js {:x control-button-scale
                         :y control-button-scale})          ; properties
         1000                                               ; duration
         js/Phaser.Easing.Linear.None                       ; ease
         true                                               ; autoStart
         0                                                  ; delay
         -1                                                 ; repeat
         true)))                                            ; yoyo

(defn- get-puzzle-image-width []
  (.. ^js/Phaser.Game @game -cache (getImage "puzzle") -width))

(defn- get-puzzle-image-height []
  (.. ^js/Phaser.Game @game -cache (getImage "puzzle") -height))

(defn- get-piece-x-scale []
  (/ (:puzzle-width-height @game-state)
     (get-puzzle-image-width)))

(defn- get-piece-y-scale []
  (/ (:puzzle-width-height @game-state)
     (get-puzzle-image-height)))


;- util functions for checking condition
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

;- util functions to create/display/hide puzzle and buttons

(defn- display-play-button! []
  (.. ^js/Phaser.Button (:play-button @game-state) -scale (setTo 1 1)))

(defn hide-play-button! []
  (.. ^js/Phaser.Button (:play-button @game-state) -scale (setTo 0 0)))

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
    (let [derefed-state @game-state
          sprites (:sprites derefed-state)
          piece-x-scale (get-piece-x-scale)
          piece-y-scale (get-piece-y-scale)
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
              game-object-factory (.-add ^js/Phaser.Game @game)]
          (if (= false sprite-flipped-state)
            (.. game-object-factory
                (tween piece-scale)
                (to (clj->js {:x piece-x-scale
                              :y piece-y-scale})
                    500
                    js/Phaser.Easing.Cubic.In
                    true))
            (.. game-object-factory
                (tween piece-scale)
                (to (clj->js {:x 0 :y 0})
                    500
                    js/Phaser.Easing.Cubic.In
                    true))))))))

(defn- display-ranking-button! []
  (.. ^js/Phaser.Button (:ranking-button @game-state) -scale (setTo 0.5 0.5)))

(defn hide-ranking-button! []
  (.. ^js/Phaser.Button (:ranking-button @game-state) -scale (setTo 0 0)))

(defn make-ranking-button! []
  (swap!
    game-state
    assoc
    :ranking-button
    (this-as this
      (.. ^js/Phaser.Game @game
          -add
          (button (* 0.90 (.-innerWidth js/window))
                  (* 0.03 (.-innerHeight js/window))
                  "ranking-button"
                  #(rf/dispatch [:screen-change :ranking-dashboard])
                  this))))
  (display-ranking-button!))

(defn set-on-click-callback! [^js/Phaser.Sprite sprite callback-fn]
  (set! (.-inputEnabled sprite) true)
  (.add
    (.-onInputDown (.-events sprite))
    callback-fn))

(defn show-game! [search-word]
  (rf/dispatch [:set-game-img search-word])
  (rf/dispatch [:screen-change :game]))

(defn show-puzzle-selection! []
  (rf/dispatch [:screen-change :puzzle-selection]))

(defn- hide-control-buttons! []
  (doseq [control-button-tween (:control-button-tweens @game-state)]
    (.stop control-button-tween))
  (swap! game-state assoc :control-button-tweens [])
  (doseq [control-button (:control-buttons @game-state)]
    (.setTo (.-scale control-button) 0 0)))

(defn- show-control-buttons! []
  (doseq [control-button (:control-buttons @game-state)]
    (display-control-buttons-and-use-tween-scale! control-button)))

(defn hide-all-puzzle-pieces! []
  (synchronize-puzzle-board!
    {:row-flipped?      (reduce
                          #(assoc %1 %2 true)
                          {}
                          (range row-col-num))
     :col-flipped?      (reduce
                          #(assoc %1 %2 false)
                          {}
                          (range row-col-num))
     :diagonal-flipped? false})
  (swap! game-state assoc :sprites-state nil))

;- util functions for the play time

(defn make-play-time! []
  (let [play-time-text (.. ^js/Phaser.Game @game
                           -add
                           (text (/ (.-innerHeight js/window) 20)
                                 (/ (.-innerHeight js/window) 20)
                                 "0.000"
                                 (clj->js {:font            "bold 30px Arial"
                                           :fontVariant     "small-caps"
                                           :fill            "#F6F4F3"
                                           :align           "center"
                                           :stroke          "#3D5A80"
                                           :strokeThickness "7"})))]
    (when-not (:play-time-text @game-state)
      (swap! game-state assoc :play-time-text play-time-text))
    (.setShadow ^js/Phaser.Text play-time-text 3 3 "rgba(0,0,0,0.5)" 3)))

(defn show-play-time-text! []
  (.. ^js/Phaser.Text (:play-time-text @game-state) -scale (setTo 1 1)))

(defn hide-play-time-text! []
  (.. ^js/Phaser.Text (:play-time-text @game-state) -scale (setTo 0 0)))

(defn update-play-time-to-current-time! [play-time]
  (let [derefed-state @game-state
        play-time-in-sec (/ play-time 1000)]
    (.setText
      ^js/Phaser.Text (:play-time-text derefed-state)
      (str play-time-in-sec))
    (swap! game-state assoc :play-time play-time-in-sec)))


;- util functions to create/display/hide reset button

(defn show-reset-button! []
  (.. ^js/Phaser.Button (:reset-button @game-state) -scale (setTo 0.5 0.5)))

(defn hide-reset-button! []
  (.. ^js/Phaser.Button (:reset-button @game-state) -scale (setTo 0 0)))

(defn reset-game! []
  (hide-all-puzzle-pieces!)
  (hide-control-buttons!)
  (hide-play-time-text!)
  (display-play-button!)
  (display-ranking-button!))

(defn make-reset-button! [send-reset-fn]
  (swap!
    game-state
    assoc
    :reset-button
    (this-as this
      (.. ^js/Phaser.Game @game
          -add
          (button (- (* 0.90 (.-innerWidth js/window)) 180)
                  (* 0.03 (.-innerHeight js/window))
                  "reset-button"
                  (fn []
                    (reset-game!)
                    (send-reset-fn))
                  this))))
  ;Make reset button when game start. It is not needed until the player starts playing the game.
  (hide-reset-button!))

;- util functions for puzzle-selection-button

(defn- display-puzzle-selection-button! []
  (.. (:puzzle-selection-button @game-state) -scale (setTo 0.5 0.5)))

(defn make-puzzle-selection-button! []
  (swap!
    game-state
    assoc
    :puzzle-selection-button
    (this-as this
      (.. ^js/Phaser.Game @game
          -add
          (button (- (* 0.90 (.-innerWidth js/window)) 90)
                  (* 0.03 (.-innerHeight js/window))
                  "puzzle-selection-button"
                  #(rf/dispatch [:screen-change :puzzle-selection])
                  this))))
  (display-puzzle-selection-button!))

;- util functions for game intro message

(defn- display-game-intro-message! []
  (let [intro-text (.text
                     (.-add ^js/Phaser.Game @game)
                     (/ (.-innerWidth js/window) 2)
                     (/ (.-innerHeight js/window) 4)
                     "Back to the Suomi past!
                     Like our journey in our life,
                     playing this game with companions,
                     it might be more fun and enjoyable.
                     Are you ready for beautiful discovery?"
                     (clj->js {:font            "bold 25px Arial"
                               :fontVariant     "small-caps"
                               :fill            "#F6F4F3"
                               :align           "center"
                               :boundsAlignH    "center"
                               :boundsAlignV    "center"
                               :stroke          "#3D5A80"
                               :strokeThickness "7"}))]
    (swap! game-state assoc :puzzle-game-intro-text intro-text)
    (set! (.. intro-text -anchor -x) 0.5)
    (set! (.. intro-text -anchor -y) 0.5)
    (.setShadow ^js/Phaser.Text intro-text 3 3 "rgba(0,0,0,0.5)" 3)))

(defn destroy-game-intro-text! []
  (when-let [puzzle-intro-text ^js/Phaser.Text (:puzzle-game-intro-text @game-state)]
    (.destroy puzzle-intro-text))
  (swap! game-state assoc :puzzle-game-intro-text nil))

;- util functions for puzzle completion msg

(defn- make-congrats-message! []
  (let [congrats-msg (.text
                       (.-add ^js/Phaser.Game @game)
                       (* 0.5 (.-innerWidth js/window))
                       (* 0.3 (.-innerHeight js/window))
                       "Congrats! \n Awesome! You made it :D"
                       (clj->js {:font            "bold 60px Arial"
                                 :fontVariant     "small-caps"
                                 :fill            "#F6F4F3"
                                 :backgroundColor "rgba(242,242,242, 0.7)"
                                 :align           "center"
                                 :boundsAlignH    "center"
                                 :boundsAlignV    "center"
                                 :stroke          "#EE6C4D"
                                 :strokeThickness "10"}))]
    (swap! game-state assoc :puzzle-completion-text congrats-msg)
    (set! (.. congrats-msg -anchor -x) 0.5)
    (set! (.. congrats-msg -anchor -y) 0.5)
    (.setShadow ^js/Phaser.Text congrats-msg 3 3 "rgba(32,32,32, 0.8)" 1)))

(defn destroy-congrats-message! []
  (when-let [congrats-message-text ^js/Phaser.Text (:puzzle-completion-text @game-state)]
    (.destroy congrats-message-text))
  (swap! game-state assoc :puzzle-completion-text nil))

(defn congrats-finish-game! [send-puzzle-complete-fn!]
  (when (and (puzzle-completed?)
             ;for other client's (in case they didn't start a puzzle yet)
             (currently-playing-game?)
             (not (:puzzle-completion-text @game-state)))
    (hide-reset-button!)
    (hide-control-buttons!)
    (display-play-button!)
    (display-ranking-button!)
    (make-congrats-message!)
    (send-puzzle-complete-fn! (:play-time @game-state))
    (swap! game-state assoc :sprites-state {})))

;- util function for updating music

(defn update-music-notes! [music-pitches]
  (println "music notes : " music-pitches)
  (swap! game-state assoc :music-pitches music-pitches)
  (swap! game-state assoc :music-durations (map (fn [_] (rand 1)) music-pitches)))
