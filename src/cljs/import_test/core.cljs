(ns import-test.core
  (:require [ajax.core :refer [GET]]
            [clojure.string :as str]
            [reagent.core :as r]
            [reagent.dom :as rdom]))

(defonce session (r/atom {}))


(defn fetch-docs! [url token]
  (GET (str url) {:handler (fn [response]
                             (swap! session  assoc :api response))
                  ;; :params {:ids "771:41805"}
                  :response-format :json
                  ;; :headers {:X-FIGMA-TOKEN (str "figd_S6tiC_L9TQDKvKq1BUrrbC4AFUglk3W2QcudPEHa")}
                  :headers {:X-FIGMA-TOKEN (str token)}
                  :keywords? true}))

(defn constraint->position [{:keys [constraints]}]
  (let [{vertical :verical
         horizontal :horizontal} constraints]))

(defn color->rgb [{:keys [r g b a]}]
  (let [red (* (int r) 255)
        green (* (int g) 255)
        blue (* (int b) 255)]
    (str "rgba(" (int red) ", " (int green) ", " (int blue) ", " a ")")))

(defn color->hex [{:keys [r g b a]}]
  (let [red (.toString ^js (int (* r 255)) 16)
        green (.toString ^js (int (* g 255)) 16)
        blue (.toString ^js (int (* b 255)) 16)
        alpha (.toString ^js (int (* a 255)) 16)]
    (str "#" red  green  blue  alpha)))


;;  "x": -721.0,
;;   "y": -1884.0,
(defn bounds->css [{:keys [absoluteBoundingBox absoluteRenderBox parent-x parent-y]}]
  (let [{xb :x yb :y hb :height wb :width} absoluteBoundingBox
        {xr :x yr :y hr :height wr :width} absoluteBoundingBox
        top (- yb parent-y)
        left (- xb parent-x)]
    {:position (if-not parent-x "absolute" "absolute") :height (str hb "px") :width (str wb "px") :top (str top "px") :left (str left "px")}))

(defn gradient->css [{:keys [gradientHandlePositions gradientStops]}]
  (let [{xsh :x ysh :y} (first gradientHandlePositions)
        {xeh :x yeh :y} (second gradientHandlePositions)
        {xmh :x ymh :y} (last gradientHandlePositions)

        {s-position :position s-color :color} (first gradientStops)
        {m-position :position m-color :color} (second gradientStops)
        {e-position :position e-color :color} (last gradientStops)
        ss-color (color->hex s-color)
        mm-color (color->hex m-color)
        ee-color (color->hex e-color)]
    ;; (println ss-color)
    {:background (str "linear-gradient(" 90 "deg, " ss-color " " (* 100 s-position) "%, " mm-color " " (* 100 m-position) "%, " ee-color " " (* 100 e-position) "%")}))

(defn stroke->border [{:keys [strokes strokeWeight strokeAlign]}]
  (if (seq? strokes)
    ()
    {:border (str "\"" strokeWeight "px solid black\"")}))

(defn background->css [{:keys [fills]}]
  (let [color (color->hex (-> fills first :color))]
    ;; (println color)
    {:background (str color)}))

(defn borders [node]
  {:border-radius (str (:cornerRadius node) "px")})

(defn node->fonts [{:keys [style]}]
  (let [{px :lineHeightUnit
         ff :fontFamily
         fw :fontWeight
         fos :fontSize
         lih :lineHeightPx
         h-align :textAlignHorizontal
         v-align :textAlignVertical
         les :letterSpacing} style
        px (str/lower-case px)
        h-align (str/lower-case h-align)
        v-align (str/lower-case v-align)
        fs (str fos px)
        ls (str les px)
        lh (str lih px)]
    {:display "inline" :font-size fs :letter-spacing ls :font-family ff :font-weight fw :line-height lh :align h-align :vertical-align v-align}))

(defn convert-to-text [node])


(defn type->element [node]
  (let [{id :id

         p-x :parent-x
         p-y :parent-y

         type :type
         parent-position :absoluteBoundingBox} node
;; (gradient->css (-> node :fills last))
        styles (apply conj (background->css node)  (borders node) (bounds->css node))

        render-child-fn (fn [{:keys [children]}]
                          (if-not (empty? children)
                            (map #(type->element (assoc % :parent-x (:x parent-position) :parent-y (:y parent-position))) children)))]
    (println (node->fonts node))

    (case type
      "DOCUMENT" [:<> {:id id} (render-child-fn node)]
      "COMPONENT" [:div {:key id
                         :id id
                         :style (-> styles (dissoc :top :left))} (render-child-fn node)]
      "RECTANGLE" [:div {:key id
                         :id id
                         :style styles} (render-child-fn node)]
      "TEXT" [:span {:key id
                     :id id
                     :style (apply conj styles (node->fonts node))} (render-child-fn node) (:name node)]
      "GROUP" [:div {:key id
                     :id id
                     :style styles} (render-child-fn node)]
      "FRAME" [:div {:key id
                     :id id
                     :style styles} (render-child-fn node)]
      "VECTOR" [:div {:key id
                      :id id
                      :style styles} (render-child-fn node)]
      "ELLIPSE" [:div {:key id
                       :id id
                       :style styles} (render-child-fn node)]
      "LINE" [:div {:key id
                    :id id
                    :style styles} (render-child-fn node)]
      [:span {:key id
              :id id}
       (str type)])))

(defn render-document [{:keys [document]}]
  (type->element document))



(defn main []
  (r/create-class {:reagent-render (fn [_]
                                     [:<>
                                      [:div.center 
                                       [:button.primary "Import API"]]
                                      (when-not (:api @session) [:div {:class "modal hide"}
                                                                 [:div {:class "dialog"}
                                                                  [:div {:class "flex-div"}
                                                                   [:input {:type "text" :id "url" :class "input" :placeholder "Type the url here"}]
                                                                   [:input {:type "text" :id "token" :class "input" :placeholder "X-FIGMA-TOKEN"}]]
                                                                  [:button {:on-click #(fetch-docs! (.-value (.getElementById js/document "url")) (.-value (.getElementById js/document "token")))
                                                                            :class "button"} "Import"]]])
                                      [:div (when (:api @session)
                                              (map #(render-document %) (-> @session :api :nodes vals)))]])}))


(defn ^:dev/after-load init! []
  (rdom/render [main] (.getElementById js/document  "app")))

