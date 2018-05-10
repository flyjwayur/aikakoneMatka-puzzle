(ns aikakonematka.game
  (:require [aikakonematka.util :as util]
            [aikakonematka.sound :as sound]))

(defn- create-preload [image-src]
  (fn []
    (let [phaser-loader (.-load @util/game)]
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
        "reset-button"
        "images/reset-button.jpg"))))

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
      (.. @util/game
          -add
          (button
            10
            10
            "play-button"
            (fn []
              (send-game-start-fn!)
              (util/destroy-stage-clear-text!))
            this)))))

(defn- store-control-button-and-return-it! [control-button]
  (swap! util/game-state update :control-buttons conj control-button)
  (set! (.. control-button -anchor -x) 0.5)
  (set! (.. control-button -anchor -y) 0.5)
  control-button)

(defn- create-puzzle-piece-and-store! [{:keys [frame-id x-pos y-pos row col]}]
  (let [piece (.. @util/game
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
  (util/display-play-time!))

(defn- create-game [{:keys [send-game-start-fn!
                            send-reset-fn!
                            send-sprites-state-fn!
                            send-puzzle-complete-fn!
                            send-music-note-fn!]}]
  (fn []
    (when-not (:play-button @util/game-state)
      (make-play-button! send-game-start-fn!)
      (util/make-ranking-button!)
      (util/make-reset-button! send-reset-fn!))
    ;It only creates the puzzle piece/button sprites only once for each client.
    (when (empty? (:sprites @util/game-state))
      (let [game-object-factory (.-add @util/game)
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
              (util/make-buttons-same-size-as-puzzle-piece! bottom-left-button)
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
                    (util/congrats-completion-finish-game! send-puzzle-complete-fn!))))))
          (when (zero? col)
            (let [left-button (store-control-button-and-return-it!
                                (.sprite
                                  game-object-factory
                                  (- x-pos piece-width-height)
                                  y-pos
                                  "flip-buttons"
                                  row))
                  frequency (sound/frequencies-of-major-scale-in-4th-octave row)]
              (util/make-buttons-same-size-as-puzzle-piece! left-button)
              (util/set-on-click-callback!
                left-button
                (fn []
                  (when (util/currently-playing-game?)
                    (sound/play-beep! frequency)
                    (send-music-note-fn! frequency)
                    (flip-row! row)
                    (util/synchronize-puzzle-board! (:sprites-state @util/game-state))
                    (send-sprites-state-fn!)
                    (util/congrats-completion-finish-game! send-puzzle-complete-fn!))))))
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
              (util/make-buttons-same-size-as-puzzle-piece! bottom-button)
              (util/set-on-click-callback!
                bottom-button
                (fn []
                  (when (util/currently-playing-game?)
                    (sound/play-beep! frequency)
                    (send-music-note-fn! frequency)
                    (flip-col! col)
                    (util/synchronize-puzzle-board! (:sprites-state @util/game-state))
                    (send-sprites-state-fn!)
                    (util/congrats-completion-finish-game! send-puzzle-complete-fn!)))))))))))

(defn- game-update [])

(defn- start-game! [image-src websocket-msg-send-fns]
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
    (set! (.-src puzzle-img) image-src)))
