(ns aikakonematka.core
  (:require [compojure.core :refer (defroutes GET POST)]
            [org.httpkit.server :as server]
            [ring.middleware.defaults :as defaults]
            [ring.middleware.cors :as cors]
            [taoensso.sente :as sente]
            [taoensso.sente.server-adapters.http-kit :refer (get-sch-adapter)]
            ))

(let [connection (sente/make-channel-socket! (get-sch-adapter)
      {:user-id-fn (fn [req] (get-in req [:params :client-id]))})]
  (def ring-ajax-post                (:ajax-post-fn connection))
  (def ring-ajax-get-or-ws-handshake (:ajax-get-or-ws-handshake-fn connection))
  (def ch-chsk                      (:ch-recv connection))
  (def chsk-send!                    (:send-fn connection))
  (def connected-uids                (:connected-uids connection)))

(defn- handle-message! [{:keys [id cliend-id ?data]}]
  (when (= id :aikakone/mouse-moved)
    (doseq [uid (:any @connected-uids)]
      (chsk-send! uid [:aikakone/mouse-moved ?data]))))

(sente/start-chsk-router! ch-chsk handle-message!)

(defroutes app
           (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
           (POST "/chsk" req (ring-ajax-post                req)))

(def handler
  (-> #'app
      (defaults/wrap-defaults (assoc-in defaults/site-defaults [:security :anti-forgery] false))
      (cors/wrap-cors :access-control-allow-origin [#".*"]
                      :access-control-allow-methods [:get :put :post :delete]
                      :access-control-allow-credentials ["true"])))

(defn -main []
  (server/run-server handler {:port 2222}))
