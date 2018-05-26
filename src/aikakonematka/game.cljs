(ns aikakonematka.game
  (:require [aikakonematka.util :as util]
            [aikakonematka.sound :as sound]
            [re-frame.core :as rf]))

(defn- create-preload [image-src]
  (fn []
    (let [phaser-loader (.-load ^js/Phaser.Game @util/game)]
      (.spritesheet
        phaser-loader
        "puzzle"
        image-src
        (util/get-piece-width-height @util/puzzle-image-width)
        (util/get-piece-width-height @util/puzzle-image-height)
        (* util/row-col-num util/row-col-num))
      (.spritesheet
        phaser-loader
        "flip-buttons"
        "images/control-buttons.png"
        (util/get-button-width util/button-sprite-col-num)
        (util/get-button-height util/button-sprite-row-num)
        (* util/button-sprite-row-num util/button-sprite-col-num))
      (.image
        phaser-loader
        "play-button"
        "images/play-button.png")
      (.image
        phaser-loader
        "ranking-button"
        "images/ranking-button.png")
      (.image
        phaser-loader
        "puzzle-selection-button"
        "images/puzzle-selection-button.png")
      (.image
        phaser-loader
        "reset-button"
        "images/reset-button.png")
      (.image
        phaser-loader
        "game-play-bg"
        "images/puzzle-play-bg.jpg")
      (.image
        phaser-loader
        "intro-title"
        "images/intro-title.png")
      (.image
        phaser-loader
        "lovely-baby-in-selection"
        "images/lovely-baby-in-selection.png")
      (.image
        phaser-loader
        "lovely-baby-in-puzzle"
        "images/lovely-baby-in-puzzle.png"))))

(defn flip-diagonal-pieces! []
  (swap! util/game-state update-in [:sprites-state :diagonal-flipped?] not))

(defn flip-row! [row]
  (swap! util/game-state update-in [:sprites-state :row-flipped? row] not))

(defn flip-col! [col]
  (swap! util/game-state update-in [:sprites-state :col-flipped? col] not))

(declare create-puzzle-board)

(defn- make-play-button! [send-game-start-fn!]
  (swap!
    util/game-state
    assoc
    :play-button
    (this-as this
      (.. ^js/Phaser.Game @util/game
          -add
          (button
            (/ (.-innerWidth js/window) 2)
            (* 0.7 (.-innerHeight js/window))
            "play-button"
            (fn []
              (send-game-start-fn!)
              ;hide congrats msg for the next play(when it's not the first play)
              ;because congrats msg only hide once right after it is created in create-game
              (util/hide-congrats-msg!)
              (util/destroy-game-intro-text!))
            this))))
  (set! (.. (:play-button @util/game-state) -anchor -x) 0.5)
  (set! (.. (:play-button @util/game-state) -anchor -y) 0.5))

(defn- store-control-button-and-return-it! [^js/Phaser.Game control-button]
  (swap! util/game-state update :control-buttons conj control-button)
  (.. control-button -scale (setTo 0 0))
  (set! (.. control-button -anchor -x) 0.5)
  (set! (.. control-button -anchor -y) 0.5)
  control-button)

(defn- create-puzzle-piece-and-store! [{:keys [frame-id x-pos y-pos row col]}]
  (let [piece (.. ^js/Phaser.Game @util/game
                  -add
                  (sprite x-pos y-pos "puzzle" frame-id))]
    (swap! util/game-state assoc-in [:sprites [row col]] piece)
    (.. piece -scale (setTo 0 0))
    (set! (.. piece -anchor -x) 0.5)
    (set! (.. piece -anchor -y) 0.5)))

(defn- display-puzzle-board! [{:keys [send-start-timer-fn!]}]
  "Create randomized puzzle board with one black piece,
   It also checks whether it already created piece/button sprites."
  (util/show-reset-button!)
  (util/show-control-buttons!)
  (util/hide-play-button!)
  (util/hide-ranking-button!)
  ;Change the scale of pieces according to the current sprites-state
  (util/synchronize-puzzle-board! (:sprites-state @util/game-state))
  (send-start-timer-fn!)
  (util/show-play-time-text!))

(defn- display-puzzle-background []
  (set! (.. ^js/Phaser.Game @util/game -stage -backgroundColor) "#fff")
  (.. ^js/Phaser.Game @util/game -add (image 0 0 "game-play-bg")))

(defn- display-lovely-baby-in-bg []
  (let [baby-image (.. ^js/Phaser.Game @util/game -add (image
                                                         (* 0.20 (.-innerWidth js/window))
                                                         (* 0.30 (.-innerHeight js/window))
                                                         "lovely-baby-in-puzzle"))]
    (.. baby-image -scale (setTo 0.9 0.9))
    ))

(defn- create-game [{:keys [send-game-start-fn!
                            send-reset-fn!
                            send-sprites-state-fn!
                            send-puzzle-complete-fn!
                            send-music-note-fn!]}]
  (fn []
    (rf/dispatch [:loading? false])
    (display-puzzle-background)
    (display-lovely-baby-in-bg)
    ;It only creates the puzzle piece/button sprites only once for each client.
    (when (empty? (:sprites @util/game-state))
      (let [game-object-factory (.-add ^js/Phaser.Game @util/game)
            piece-width-height (util/get-piece-width-height (:puzzle-width-height @util/game-state))
            left-margin (util/get-left-margin)
            top-margin (util/get-top-margin)]
        (doseq [row (range util/row-col-num)
                col (range util/row-col-num)
                :let [frame-id (+ (* util/row-col-num row) col)
                      x-pos (+ (* piece-width-height col) left-margin (+ 2 col))
                      y-pos (+ (* piece-width-height row) top-margin (+ 2 row))]]
          (create-puzzle-piece-and-store! {:frame-id frame-id
                                           :x-pos     x-pos
                                           :y-pos     y-pos
                                           :row       row
                                           :col       col})
          (when
            (and (zero? col) (= row (dec util/row-col-num)))
            (let [bottom-left-button (store-control-button-and-return-it!
                                       (.sprite
                                         game-object-factory
                                         (- x-pos piece-width-height)
                                         (+ y-pos piece-width-height)
                                         "flip-buttons"
                                         5))
                  frequency (sound/frequencies-of-major-scale-in-4th-octave util/row-col-num)]
              (util/set-on-click-callback!
                bottom-left-button
                (fn []
                  (when (util/currently-playing-game?)
                    ;Without getting new row & col range with doseq for flipping,
                    ;it won't flip the puzzle. it will consider row & col to clicked button's row & col
                    (sound/play-beep! frequency)
                    (send-music-note-fn! frequency)
                    (flip-diagonal-pieces!)
                    (util/synchronize-puzzle-board! (:sprites-state @util/game-state))
                    (send-sprites-state-fn!)
                    (util/congrats-finish-game! send-puzzle-complete-fn!))))))
          (when (zero? col)
            (let [left-button (store-control-button-and-return-it!
                                (.sprite
                                  game-object-factory
                                  (- x-pos piece-width-height)
                                  y-pos
                                  "flip-buttons"
                                  row))
                  frequency (sound/frequencies-of-major-scale-in-4th-octave row)]
              (util/set-on-click-callback!
                left-button
                (fn []
                  (when (util/currently-playing-game?)
                    (sound/play-beep! frequency)
                    (send-music-note-fn! frequency)
                    (flip-row! row)
                    (util/synchronize-puzzle-board! (:sprites-state @util/game-state))
                    (send-sprites-state-fn!)
                    (util/congrats-finish-game! send-puzzle-complete-fn!))))))
          (when (= row (dec util/row-col-num))
            (let [bottom-button (store-control-button-and-return-it!
                                  (.sprite
                                    game-object-factory
                                    x-pos
                                    (+ y-pos piece-width-height)
                                    "flip-buttons"
                                    col))
                  frequency (sound/frequencies-of-major-scale-in-4th-octave
                              (mod (+ 1 util/row-col-num col)
                                   (count sound/frequencies-of-major-scale-in-4th-octave)))]
              (util/set-on-click-callback!
                bottom-button
                (fn []
                  (when (util/currently-playing-game?)
                    (sound/play-beep! frequency)
                    (send-music-note-fn! frequency)
                    (flip-col! col)
                    (util/synchronize-puzzle-board! (:sprites-state @util/game-state))
                    (send-sprites-state-fn!)
                    (util/congrats-finish-game! send-puzzle-complete-fn!)))))))))
    (when-not (:play-button @util/game-state)
      (util/display-game-intro-message!)
      (make-play-button! send-game-start-fn!)
      (util/make-ranking-button!)
      (util/make-puzzle-selection-button!)
      (util/make-play-time!)
      (util/hide-play-time-text!)
      (util/make-reset-button! send-reset-fn!)
      (util/make-congrats-message!)
      (util/hide-congrats-msg!))))

(defn- game-update [])

(defn- start-game! [image-src websocket-msg-send-fns]
  (rf/dispatch [:loading? true])
  (let [puzzle-img (js/Image.)]
    (set!
      (.-onload puzzle-img)
      (clj->js
        (fn []
          (reset! util/puzzle-image-width (.-width puzzle-img))
          (reset! util/puzzle-image-height (.-height puzzle-img))
          (reset! util/game
                  (js/Phaser.Game.
                    (.-innerWidth js/window)
                    (.-innerHeight js/window)
                    js/Phaser.Canvas
                    "canvas"
                    (clj->js {:preload (create-preload image-src)
                              :create  (create-game websocket-msg-send-fns)
                              :update  game-update}))))))
    (swap! util/game-state assoc :puzzle-width-height (int (* 0.7 (min (.-innerWidth js/window) (.-innerHeight js/window)))))
    (set! (.-src puzzle-img) image-src)))
