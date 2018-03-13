(ns user
  (:require [aikakonematka.core :as core]
            ))

(defonce server (atom nil))

(defn stop-server []
  (when-not (nil? server)
    ;; graceful shutdown; wait 100ms for existing requests to be finished
    ;; :timeout is optional, when no timeout, stop immediately.
    (@server :timout 100)
    (reset! server nil)))

(defn start-server []
  (reset! server (core/-main)))