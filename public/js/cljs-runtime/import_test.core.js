goog.provide('import_test.core');
if((typeof import_test !== 'undefined') && (typeof import_test.core !== 'undefined') && (typeof import_test.core.session !== 'undefined')){
} else {
import_test.core.session = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide?","hide?",-988635670),true], null));
}
import_test.core.fetch_docs_BANG_ = (function import_test$core$fetch_docs_BANG_(url,token){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(import_test.core.session,cljs.core.assoc,new cljs.core.Keyword(null,"api","api",-899839580),response);
}),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-FIGMA-TOKEN","X-FIGMA-TOKEN",-265203111),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)], null),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)], 0));
});
import_test.core.constraint__GT_position = (function import_test$core$constraint__GT_position(p__49577){
var map__49578 = p__49577;
var map__49578__$1 = cljs.core.__destructure_map(map__49578);
var constraints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49578__$1,new cljs.core.Keyword(null,"constraints","constraints",422775616));
var map__49579 = constraints;
var map__49579__$1 = cljs.core.__destructure_map(map__49579);
var vertical = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49579__$1,new cljs.core.Keyword(null,"verical","verical",1693106182));
var horizontal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49579__$1,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475));
return null;
});
import_test.core.color__GT_rgb = (function import_test$core$color__GT_rgb(p__49580){
var map__49581 = p__49580;
var map__49581__$1 = cljs.core.__destructure_map(map__49581);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49581__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49581__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49581__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49581__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var red = ((r | (0)) * (255));
var green = ((g | (0)) * (255));
var blue = ((b | (0)) * (255));
return ["rgba(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((red | (0))),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((green | (0))),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((blue | (0))),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),")"].join('');
});
import_test.core.color__GT_hex = (function import_test$core$color__GT_hex(p__49582){
var map__49583 = p__49582;
var map__49583__$1 = cljs.core.__destructure_map(map__49583);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49583__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49583__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49583__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49583__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var red = ((r * (255)) | (0)).toString((16));
var green = ((g * (255)) | (0)).toString((16));
var blue = ((b * (255)) | (0)).toString((16));
var alpha = ((a * (255)) | (0)).toString((16));
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(red),cljs.core.str.cljs$core$IFn$_invoke$arity$1(green),cljs.core.str.cljs$core$IFn$_invoke$arity$1(blue),cljs.core.str.cljs$core$IFn$_invoke$arity$1(alpha)].join('');
});
import_test.core.bounds__GT_css = (function import_test$core$bounds__GT_css(p__49584){
var map__49585 = p__49584;
var map__49585__$1 = cljs.core.__destructure_map(map__49585);
var absoluteBoundingBox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49585__$1,new cljs.core.Keyword(null,"absoluteBoundingBox","absoluteBoundingBox",747821926));
var absoluteRenderBox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49585__$1,new cljs.core.Keyword(null,"absoluteRenderBox","absoluteRenderBox",-523994399));
var parent_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49585__$1,new cljs.core.Keyword(null,"parent-x","parent-x",1170193753));
var parent_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49585__$1,new cljs.core.Keyword(null,"parent-y","parent-y",1012835354));
var map__49586 = absoluteBoundingBox;
var map__49586__$1 = cljs.core.__destructure_map(map__49586);
var xb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49586__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var yb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49586__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var hb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49586__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var wb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49586__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var map__49587 = absoluteBoundingBox;
var map__49587__$1 = cljs.core.__destructure_map(map__49587);
var xr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49587__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var yr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49587__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var hr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49587__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var wr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49587__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var top = (yb - parent_y);
var left = (xb - parent_x);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),((cljs.core.not(parent_x))?"absolute":"absolute"),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hb),"px"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(wb),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(top),"px"].join(''),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(left),"px"].join('')], null);
});
import_test.core.gradient__GT_css = (function import_test$core$gradient__GT_css(p__49588){
var map__49589 = p__49588;
var map__49589__$1 = cljs.core.__destructure_map(map__49589);
var gradientHandlePositions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49589__$1,new cljs.core.Keyword(null,"gradientHandlePositions","gradientHandlePositions",-1903719564));
var gradientStops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49589__$1,new cljs.core.Keyword(null,"gradientStops","gradientStops",-433784335));
var map__49590 = cljs.core.first(gradientHandlePositions);
var map__49590__$1 = cljs.core.__destructure_map(map__49590);
var xsh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49590__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ysh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49590__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__49591 = cljs.core.second(gradientHandlePositions);
var map__49591__$1 = cljs.core.__destructure_map(map__49591);
var xeh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49591__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var yeh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49591__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__49592 = cljs.core.last(gradientHandlePositions);
var map__49592__$1 = cljs.core.__destructure_map(map__49592);
var xmh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49592__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ymh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49592__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__49593 = cljs.core.first(gradientStops);
var map__49593__$1 = cljs.core.__destructure_map(map__49593);
var s_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49593__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var s_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49593__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var map__49594 = cljs.core.second(gradientStops);
var map__49594__$1 = cljs.core.__destructure_map(map__49594);
var m_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49594__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var m_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49594__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var map__49595 = cljs.core.last(gradientStops);
var map__49595__$1 = cljs.core.__destructure_map(map__49595);
var e_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49595__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var e_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49595__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var ss_color = import_test.core.color__GT_hex(s_color);
var mm_color = import_test.core.color__GT_hex(m_color);
var ee_color = import_test.core.color__GT_hex(e_color);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),["linear-gradient(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((90)),"deg, ",ss_color," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * s_position)),"%, ",mm_color," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * m_position)),"%, ",ee_color," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * e_position)),"%"].join('')], null);
});
import_test.core.stroke__GT_border = (function import_test$core$stroke__GT_border(p__49596){
var map__49597 = p__49596;
var map__49597__$1 = cljs.core.__destructure_map(map__49597);
var strokes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49597__$1,new cljs.core.Keyword(null,"strokes","strokes",-1645650952));
var strokeWeight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49597__$1,new cljs.core.Keyword(null,"strokeWeight","strokeWeight",-573609245));
var strokeAlign = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49597__$1,new cljs.core.Keyword(null,"strokeAlign","strokeAlign",1297228068));
if(cljs.core.seq_QMARK_(strokes)){
return cljs.core.List.EMPTY;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(strokeWeight),"px solid black\""].join('')], null);
}
});
import_test.core.background__GT_css = (function import_test$core$background__GT_css(p__49598){
var map__49599 = p__49598;
var map__49599__$1 = cljs.core.__destructure_map(map__49599);
var fills = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49599__$1,new cljs.core.Keyword(null,"fills","fills",902966780));
var color = import_test.core.color__GT_hex(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.first(fills)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),color], null);
});
import_test.core.borders = (function import_test$core$borders(node){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cornerRadius","cornerRadius",1969842287).cljs$core$IFn$_invoke$arity$1(node)),"px"].join('')], null);
});
import_test.core.node__GT_fonts = (function import_test$core$node__GT_fonts(p__49600){
var map__49601 = p__49600;
var map__49601__$1 = cljs.core.__destructure_map(map__49601);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49601__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var map__49602 = style;
var map__49602__$1 = cljs.core.__destructure_map(map__49602);
var px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49602__$1,new cljs.core.Keyword(null,"lineHeightUnit","lineHeightUnit",-245881052));
var ff = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49602__$1,new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353));
var fw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49602__$1,new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581));
var fos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49602__$1,new cljs.core.Keyword(null,"fontSize","fontSize",919623033));
var lih = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49602__$1,new cljs.core.Keyword(null,"lineHeightPx","lineHeightPx",-1949202050));
var h_align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49602__$1,new cljs.core.Keyword(null,"textAlignHorizontal","textAlignHorizontal",-1984005314));
var v_align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49602__$1,new cljs.core.Keyword(null,"textAlignVertical","textAlignVertical",-843163598));
var les = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49602__$1,new cljs.core.Keyword(null,"letterSpacing","letterSpacing",-1331934989));
var px__$1 = clojure.string.lower_case(px);
var h_align__$1 = clojure.string.lower_case(h_align);
var v_align__$1 = clojure.string.lower_case(v_align);
var fs = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fos),px__$1].join('');
var ls = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(les),px__$1].join('');
var lh = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(lih),px__$1].join('');
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"display","display",242065432),"inline",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),fs,new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),ls,new cljs.core.Keyword(null,"font-family","font-family",-667419874),ff,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),fw,new cljs.core.Keyword(null,"line-height","line-height",1870784992),lh,new cljs.core.Keyword(null,"align","align",1964212802),h_align__$1,new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),v_align__$1], null);
});
import_test.core.convert_to_text = (function import_test$core$convert_to_text(node){
return null;
});
import_test.core.type__GT_element = (function import_test$core$type__GT_element(node){
var map__49604 = node;
var map__49604__$1 = cljs.core.__destructure_map(map__49604);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49604__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var p_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49604__$1,new cljs.core.Keyword(null,"parent-x","parent-x",1170193753));
var p_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49604__$1,new cljs.core.Keyword(null,"parent-y","parent-y",1012835354));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49604__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var parent_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49604__$1,new cljs.core.Keyword(null,"absoluteBoundingBox","absoluteBoundingBox",747821926));
var style = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.conj,import_test.core.background__GT_css(node),import_test.core.borders(node),import_test.core.bounds__GT_css(node));
var node_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node));
var styles = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"document","document",-1329188687).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vals(new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(import_test.core.session))))))))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(style,new cljs.core.Keyword(null,"top","top",-1856271961),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"left","left",-399115937),(0)], 0)):style);
var render_child_fn = (function (p__49605){
var map__49606 = p__49605;
var map__49606__$1 = cljs.core.__destructure_map(map__49606);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49606__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if((!(cljs.core.empty_QMARK_(children)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49603_SHARP_){
var G__49607 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__49603_SHARP_,new cljs.core.Keyword(null,"parent-x","parent-x",1170193753),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(parent_position),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parent-y","parent-y",1012835354),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(parent_position)], 0));
return (import_test.core.type__GT_element.cljs$core$IFn$_invoke$arity$1 ? import_test.core.type__GT_element.cljs$core$IFn$_invoke$arity$1(G__49607) : import_test.core.type__GT_element.call(null,G__49607));
}),children);
} else {
return null;
}
});
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([styles], 0));

var G__49608 = type;
switch (G__49608) {
case "DOCUMENT":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),render_child_fn(node)], null);

break;
case "COMPONENT":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"style","style",-496642736),styles], null),render_child_fn(node)], null);

break;
case "RECTANGLE":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"style","style",-496642736),styles], null),render_child_fn(node)], null);

break;
case "TEXT":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,styles,import_test.core.node__GT_fonts(node))], null),render_child_fn(node),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node)], null);

break;
case "GROUP":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"style","style",-496642736),styles], null),render_child_fn(node)], null);

break;
case "FRAME":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"style","style",-496642736),styles], null),render_child_fn(node)], null);

break;
case "VECTOR":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"style","style",-496642736),styles], null),render_child_fn(node)], null);

break;
case "ELLIPSE":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"style","style",-496642736),styles], null),render_child_fn(node)], null);

break;
case "LINE":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"style","style",-496642736),styles], null),render_child_fn(node)], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"id","id",-1388402092),id], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)], null);

}
});
import_test.core.render_document = (function import_test$core$render_document(p__49609){
var map__49610 = p__49609;
var map__49610__$1 = cljs.core.__destructure_map(map__49610);
var document__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49610__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
return import_test.core.type__GT_element(document__$1);
});
import_test.core.main = (function import_test$core$main(){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (_){
var hide_QMARK_ = new cljs.core.Keyword(null,"hide?","hide?",-988635670).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(import_test.core.session));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.center","div.center",1338956224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.primary","button.primary",-486456892),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not(hide_QMARK_))?"hide":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(import_test.core.session,cljs.core.assoc,new cljs.core.Keyword(null,"hide?","hide?",-988635670),cljs.core.not(hide_QMARK_));
})], null),"Import from API"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(import_test.core.session)))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal","div.modal",-610985484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(hide_QMARK_)?"hide":"")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dialog"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-div"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"url",new cljs.core.Keyword(null,"id","id",-1388402092),"url",new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type the url here"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"token",new cljs.core.Keyword(null,"id","id",-1388402092),"token",new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"X-FIGMA-TOKEN"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return import_test.core.fetch_docs_BANG_(document.getElementById("url").value,document.getElementById("token").value);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"button"], null),"Import"], null)], null)], null)),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(import_test.core.session)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(import_test.core.session)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49611_SHARP_){
return import_test.core.render_document(p1__49611_SHARP_);
}),cljs.core.vals(new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(import_test.core.session))))):null)], null)], null);
})], null));
});
import_test.core.init_BANG_ = (function import_test$core$init_BANG_(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [import_test.core.main], null),document.getElementById("app"));
});

//# sourceMappingURL=import_test.core.js.map
