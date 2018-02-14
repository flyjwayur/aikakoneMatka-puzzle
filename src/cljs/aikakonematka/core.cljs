(ns aikakonematka.core
  (:require [goog.events :as events]
            [nightlight.repl-server]
            [aikakonematka.web-socket :as web-sck]))

(enable-console-print!)

(declare game)

(defn- preload []
  (.image (.-load game) "puzzle" "images/tileset.png" ))

(defn- create []
  (.sprite (.-add game) 0 0  "puzzle"))

(defn- update [])

(defonce game (js/Phaser.Game.
                (.-innerWidth js/window)
                (.-innerHeight js/window)
                js/Phaser.Auto
                ""
                (clj->js {:preload preload :create create :update update})))

(defonce state (atom {}))

(web-sck/start-router state)
