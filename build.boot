(set-env!
  :source-paths #{"src"}
  :resource-paths #{"resources"}
  :dependencies '[[adzerk/boot-cljs "2.1.4" :scope "test"]
                  [adzerk/boot-reload "0.5.2" :scope "test"]
                  [pandeiro/boot-http "0.8.3" :scope "test"]
                  [javax.xml.bind/jaxb-api "2.3.0" :scope "test"] ; necessary for Java 9 compatibility
                  ; project deps
                  [cljs-bach "0.3.0"]
                  [cljs-http "0.1.44"]
                  [cljs-react-material-ui "0.2.48"]
                  [cljsjs/react "15.6.1-1"]
                  [cljsjs/react-dom "15.6.1-1"]
                  [com.taoensso/sente "1.12.0"]
                  [garden "1.3.5"]
                  [leipzig "0.10.0"]
                  [nightlight "RELEASE" :scope "test"]
                  [onetom/boot-lein-generate "0.1.3" :scope "test"]
                  [org.clojure/clojurescript "1.9.946"]
                  [reagent "0.8.0-alpha2"]
                  [re-frame "0.10.5"]
                  [play-cljs "1.1.0"]
                  [tolitius/boot-check "0.1.7"]])

;generate 'project.clj' every time boot task is run
(require 'boot.lein)
(boot.lein/generate)

(require
  '[adzerk.boot-cljs :refer [cljs]]
  '[adzerk.boot-reload :refer [reload]]
  '[pandeiro.boot-http :refer [serve]]
  '[nightlight.boot :refer [nightlight]]
  '[tolitius.boot-check :as check])

(deftask check []
  (comp
      (check/with-yagni)
      (check/with-eastwood)
      (check/with-kibit)
      (check/with-bikeshed :options {:docstrings      false
                                     :verbose         true
                                     :max-line-length 120})))

(deftask run []
    (set-env! :source-paths #(conj % "dev"))
        (comp
        (serve :dir "target/public")
        (watch)
        (reload)
        (cljs :source-map true :optimizations :none)
        (target)
        (nightlight :port 4000 :url "http://localhost:3000")))

(deftask build []
    (set-env! :source-paths #(conj % "prod"))
  (comp
    (cljs :optimizations :advanced
          :compiler-options {:infer-externs true})
    (target)))
