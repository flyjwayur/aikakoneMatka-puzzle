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
   :control-buttons         {}
   :control-button-tweens   []
   :play-time               0.0
   :play-time-text          nil
   :puzzle-completion-text  nil
   :puzzle-game-intro-text  nil
   :ranking-button          nil
   :puzzle-selection-button nil
   :music-pitches           []
   :music-durations         []
   :audio-on?               true})

(defonce game-state (atom initial-game-state))

(defn set-puzzle-width-height-in-relation-to-window-size! []
  (swap! game-state assoc :puzzle-width-height (int (* 0.7 (min (.-innerWidth js/window)
                                                                     (.-innerHeight js/window))))))

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

(defn- get-piece-width-height [puzzle-width-height]
  (int (/ puzzle-width-height row-col-num)))

(defn get-scale-for-same-size-as-piece! []
  (/ (get-piece-width-height (:puzzle-width-height @game-state))
     (get-button-width button-sprite-col-num)))

(defn set-play-button-size! []
  (let [window-inner-width (.-innerWidth js/window)
        window-inner-height (.-innerHeight js/window)
        is-landscape (> (/ window-inner-width window-inner-height) 1.3)]
    (if is-landscape
      (do
        (set! (.-width (:play-button @game-state)) (/ window-inner-width 4))
        (set! (.-height (:play-button @game-state)) (/ window-inner-height 8)))
      (do
        (set! (.-width (:play-button @game-state)) (/ window-inner-width 2))
        (set! (.-height (:play-button @game-state)) (/ window-inner-height 4))))))

(defn set-button-size-in-portrait! []
  (let [window-inner-width (.-innerWidth js/window)
        window-inner-height (.-innerHeight js/window)
        is-landscape (> (/ window-inner-width window-inner-height) 1.3)]
    (when-not is-landscape
      (doseq [ui-button-element [:puzzle-selection-button :reset-button :ranking-button :audio-button]]
        (set! (.-width (ui-button-element @game-state)) (/ window-inner-width 8))
        (set! (.-height (ui-button-element @game-state)) (/ window-inner-height 8))))))

(defn- get-left-margin []
  (+ (/ (- (.-innerWidth js/window) (:puzzle-width-height @game-state)) 2)
     (* (get-button-width button-sprite-col-num) (get-scale-for-same-size-as-piece!))))

(defn- get-top-margin []
  (/ (- (.-innerHeight js/window) (:puzzle-width-height @game-state)) 2))

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
         (not (.-visible (:puzzle-completion-text dereffed-game-state))))))

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
                  true)))))))

(defn synchronize-puzzle-board-when-playing! [sprites-state]
  (when (currently-playing-game?)
    (synchronize-puzzle-board! sprites-state)))

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
  (doseq [[_ control-button] (:control-buttons @game-state)]
    (.setTo (.-scale control-button) 0 0)))

(defn- show-control-buttons! []
  (doseq [[_ control-button] (:control-buttons @game-state)]
    (display-control-buttons-and-use-tween-scale! control-button)))

(defn hide-all-puzzle-pieces! []
  (synchronize-puzzle-board-when-playing!
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
  (set! (.-visible (:play-time-text @game-state)) true))

(defn hide-play-time-text! []
  (set! (.-visible (:play-time-text @game-state)) false))

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
          (button (- (* 0.90 (.-innerWidth js/window)) 270)
                  (* 0.03 (.-innerHeight js/window))
                  "reset-button"
                  (fn []
                    (reset-game!)
                    (send-reset-fn))
                  this))))
  ;Make reset button when game start. It is not needed until the player starts playing the game.
  (hide-reset-button!))


;- util functions for audio-button
(defn- toggle-sound-on-off []
  (swap! game-state
         update
         :audio-on?
         not)
  (if (:audio-on? @game-state)
    (set! (.. ^js/Phaser.Button (:audio-button @game-state) -frame) 0)
    (set! (.. ^js/Phaser.Button (:audio-button @game-state) -frame) 1)))

(defn make-audio-button! []
  (swap!
    game-state
    assoc
    :audio-button
    (this-as this
      (.. ^js/Phaser.Game @game
          -add
          (button (- (* 0.9 (.-innerWidth js/window)) 180)
                  (* 0.03 (.-innerHeight js/window))
                  "audio-onoff-toggle-button"
                  toggle-sound-on-off
                  this))))
  (.. ^js/Phaser.Button (:audio-button @game-state) -scale (setTo 0.5 0.5))
  (set! (.. ^js/Phaser.Button (:audio-button @game-state) -frame) 0))

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

(defn display-congrats-message! []
  (set! (.-visible (:puzzle-completion-text @game-state)) true))

(defn hide-congrats-message! []
  (set! (.-visible (:puzzle-completion-text @game-state)) false))

(defn congrats-finish-game! [send-puzzle-complete-fn!]
  (when (and (puzzle-completed?)
             ;for other client's (in case they didn't start a puzzle yet)
             (currently-playing-game?))
    (hide-reset-button!)
    (hide-control-buttons!)
    (display-play-button!)
    (display-ranking-button!)
    (display-congrats-message!)
    (send-puzzle-complete-fn! (:play-time @game-state))
    (swap! game-state assoc :sprites-state {})))

;- util function for updating music

(defn update-music-notes! [music-pitches]
  (println "music notes : " music-pitches)
  (swap! game-state assoc :music-pitches music-pitches)
  (swap! game-state assoc :music-durations (map (fn [_] (rand 1)) music-pitches)))

;- util UI elements for positioning

(defn- repositioning-puzzle-pieces! [{:keys [x-pos y-pos row col]}]
  (let [piece (get-in @game-state [:sprites [row col]])]
    (when piece
      (set! (.-x piece) x-pos)
      (set! (.-y piece) y-pos))))

(defn- repositioning-control-button! [{:keys [row col x-pos y-pos piece-width-height]}]
  ; bottom left
  (when
    (and (and (zero? col) (= row (dec row-col-num))))
    (let [control-button ((@game-state :control-buttons) :bottom-left)]
      (when control-button
        (set! (.-x control-button) (- x-pos piece-width-height))
        (set! (.-y control-button) (+ y-pos piece-width-height)))))
  ; left buttons
  (when (zero? col)
    (let [control-button ((@game-state :control-buttons) [:left row])]
      (when control-button
        (set! (.-x control-button) (- x-pos piece-width-height))
        (set! (.-y control-button) y-pos))))

  ; bottom buttons
  (when (= row (dec row-col-num))
    (let [control-button ((@game-state :control-buttons) [:bottom col])]
      (when control-button
        (set! (.-x control-button) x-pos)
        (set! (.-y control-button) (+ y-pos piece-width-height))))))

(defn- positioning-control-buttons-and-puzzle-pieces! []
  (doseq [row (range row-col-num)
          col (range row-col-num)
          :let [piece-width-height (get-piece-width-height (:puzzle-width-height @game-state))
                x-pos (+ (* piece-width-height col) (get-left-margin) (+ 2 col))
                y-pos (+ (* piece-width-height row) (get-top-margin) (+ 2 row))]]
    (repositioning-puzzle-pieces! {:x-pos x-pos
                                   :y-pos y-pos
                                   :row row
                                   :col col})
    (repositioning-control-button! {:row row
                                    :col col
                                    :x-pos x-pos
                                    :y-pos y-pos
                                    :piece-width-height piece-width-height})))

(defn positioning-ui-elements-for-portrait-mode! []
  (let [derefed-stated @game-state
        window-inner-width (.-innerWidth js/window)
        window-inner-height (.-innerHeight js/window)]
    (set! (.-x (:play-button derefed-stated))
          (* 0.5 window-inner-width))
    (set! (.-y (:play-button derefed-stated))
          (* 0.6 window-inner-height))
    (set! (.-x (:ranking-button derefed-stated))
          (* 0.75 window-inner-width))
    (set! (.-y (:ranking-button derefed-stated))
          (* 0.85 window-inner-height))
    (set! (.-x (:reset-button derefed-stated))
          (* 0.55 window-inner-width))
    (set! (.-y (:reset-button derefed-stated))
          (* 0.85 window-inner-height))
    (set! (.-x (:audio-button derefed-stated))
          (* 0.35 window-inner-width))
    (set! (.-y (:audio-button derefed-stated))
          (* 0.85 window-inner-height))
    (set! (.-x (:puzzle-selection-button derefed-stated))
          (* 0.10 window-inner-width))
    (set! (.-y (:puzzle-selection-button derefed-stated))
          (* 0.85 window-inner-height))
    (set! (.-x (:play-time-text derefed-stated))
          (/ window-inner-width 20))
    (set! (.-y (:play-time-text derefed-stated))
          (/ window-inner-height 20))
    (set! (.-x (:puzzle-completion-text derefed-stated))
          (* 0.5 window-inner-width))
    (set! (.-y (:puzzle-completion-text derefed-stated))
          (* 0.3 window-inner-height))))

(defn positioning-ui-elements! []
  (let [window-inner-width (.-innerWidth js/window)
        window-inner-height (.-innerHieght js/window)
        is-landscape (> (/ window-inner-width window-inner-height) 1.3)]
    (positioning-control-buttons-and-puzzle-pieces!)
    (when-not is-landscape
      (positioning-ui-elements-for-portrait-mode!))))
