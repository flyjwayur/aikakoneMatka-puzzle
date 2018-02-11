(ns aikakonematka.core
  (:require [org.httpkit.server :as server]
            ))

(defn- app [req]
  {:status  200
   :headers {"Content-Type" "text/html"}
   :body    "hello HTTP!"})

(defn -main []
  (server/run-server app {:port 2222}))
