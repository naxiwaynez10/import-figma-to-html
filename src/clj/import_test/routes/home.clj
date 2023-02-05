(ns import-test.routes.home
  (:require
   [import-test.layout :as layout]
   [clojure.java.io :as io]
   [import-test.middleware :as middleware]
   [ring.util.response]
   [ring.util.http-response :as response]))



(defn home-page [request]
  (layout/render request "home.html"))

(defn home-routes []
  [""
   {:middleware [middleware/wrap-csrf
                 middleware/wrap-formats]}
   ["/" {:get home-page}]
   ["/api/figma" {:get (fn [_]
                         (-> (response/ok (-> "api/FigmaNodes.json" io/resource slurp))
                             (response/header "Content-Type" "text/plain; charset=utf-8")))}]])

