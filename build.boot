(set-env!
  :source-paths #{"src/clj" "src/cljs"}
  :resource-paths #{"resources"}
  :dependencies '[[org.clojure/clojure "1.9.0" :scope "provided"]
                  [adzerk/boot-cljs "2.1.4" :scope "test"]
                  [adzerk/boot-reload "0.5.2" :scope "test"]
                  [pandeiro/boot-http "0.8.3" :scope "test"]
                  [javax.xml.bind/jaxb-api "2.3.0" :scope "test"] ; necessary for Java 9 compatibility
                  ; project deps
                  [clj-time "0.14.2"]
                  [compojure "1.6.0"]
                  [com.taoensso/sente "1.12.0"]
                  [http-kit "2.2.0"]
                  [nightlight "RELEASE" :scope "test"]
                  [onetom/boot-lein-generate "0.1.3" :scope "test"]
                  [org.clojure/clojurescript "1.9.946"]
                  [play-cljs "1.1.0"]
                  [ring/ring-defaults "0.2.0"]
                  [ring-cors "0.1.7"]
                  [tolitius/boot-check "0.1.7"]])

;generate 'project.clj' every time boot task is run
(require 'boot.lein)
(boot.lein/generate)

(require
  '[adzerk.boot-cljs :refer [cljs]]
  '[adzerk.boot-reload :refer [reload]]
  '[pandeiro.boot-http :refer [serve]]
  '[nightlight.boot :refer [nightlight]]
  '[aikakonematka.core :as core]
  '[tolitius.boot-check :as check])

(deftask check []
  (comp
      (check/with-yagni)
      (check/with-eastwood)
      (check/with-kibit)
      (check/with-bikeshed :options {:docstrings      false
                                     :verbose         true
                                     :max-line-length 120})))

(deftask run-fe []
  (comp
    (serve :dir "target/public")
    (watch)
    (reload)
    (cljs :source-map true :optimizations :none)
    (target)
    (nightlight :port 4000 :url "http://localhost:3000")))

(deftask run []
  (comp
    (serve :dir "target/public")
    (watch)
    (reload)
    (cljs :source-map true :optimizations :none)
    (target)
    (with-pass-thru _
        (core/-main))
    (nightlight :port 4000 :url "http://localhost:3000")))

(deftask build []
  (comp (cljs :optimizations :advanced) (target)))

