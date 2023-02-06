goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49508 = arguments.length;
var i__5770__auto___49509 = (0);
while(true){
if((i__5770__auto___49509 < len__5769__auto___49508)){
args__5775__auto__.push((arguments[i__5770__auto___49509]));

var G__49510 = (i__5770__auto___49509 + (1));
i__5770__auto___49509 = G__49510;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq49007){
var G__49008 = cljs.core.first(seq49007);
var seq49007__$1 = cljs.core.next(seq49007);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49008,seq49007__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__49009 = cljs.core.seq(sources);
var chunk__49010 = null;
var count__49011 = (0);
var i__49012 = (0);
while(true){
if((i__49012 < count__49011)){
var map__49033 = chunk__49010.cljs$core$IIndexed$_nth$arity$2(null,i__49012);
var map__49033__$1 = cljs.core.__destructure_map(map__49033);
var src = map__49033__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49033__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49033__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49033__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49033__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e49034){var e_49511 = e49034;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49511);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49511.message)].join('')));
}

var G__49512 = seq__49009;
var G__49513 = chunk__49010;
var G__49514 = count__49011;
var G__49515 = (i__49012 + (1));
seq__49009 = G__49512;
chunk__49010 = G__49513;
count__49011 = G__49514;
i__49012 = G__49515;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49009);
if(temp__5804__auto__){
var seq__49009__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49009__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__49009__$1);
var G__49516 = cljs.core.chunk_rest(seq__49009__$1);
var G__49517 = c__5568__auto__;
var G__49518 = cljs.core.count(c__5568__auto__);
var G__49519 = (0);
seq__49009 = G__49516;
chunk__49010 = G__49517;
count__49011 = G__49518;
i__49012 = G__49519;
continue;
} else {
var map__49035 = cljs.core.first(seq__49009__$1);
var map__49035__$1 = cljs.core.__destructure_map(map__49035);
var src = map__49035__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49035__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49035__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49035__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49035__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e49036){var e_49520 = e49036;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49520);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49520.message)].join('')));
}

var G__49521 = cljs.core.next(seq__49009__$1);
var G__49522 = null;
var G__49523 = (0);
var G__49524 = (0);
seq__49009 = G__49521;
chunk__49010 = G__49522;
count__49011 = G__49523;
i__49012 = G__49524;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__49039 = cljs.core.seq(js_requires);
var chunk__49040 = null;
var count__49041 = (0);
var i__49042 = (0);
while(true){
if((i__49042 < count__49041)){
var js_ns = chunk__49040.cljs$core$IIndexed$_nth$arity$2(null,i__49042);
var require_str_49525 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49525);


var G__49526 = seq__49039;
var G__49527 = chunk__49040;
var G__49528 = count__49041;
var G__49529 = (i__49042 + (1));
seq__49039 = G__49526;
chunk__49040 = G__49527;
count__49041 = G__49528;
i__49042 = G__49529;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49039);
if(temp__5804__auto__){
var seq__49039__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49039__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__49039__$1);
var G__49530 = cljs.core.chunk_rest(seq__49039__$1);
var G__49531 = c__5568__auto__;
var G__49532 = cljs.core.count(c__5568__auto__);
var G__49533 = (0);
seq__49039 = G__49530;
chunk__49040 = G__49531;
count__49041 = G__49532;
i__49042 = G__49533;
continue;
} else {
var js_ns = cljs.core.first(seq__49039__$1);
var require_str_49534 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49534);


var G__49535 = cljs.core.next(seq__49039__$1);
var G__49536 = null;
var G__49537 = (0);
var G__49538 = (0);
seq__49039 = G__49535;
chunk__49040 = G__49536;
count__49041 = G__49537;
i__49042 = G__49538;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__49044){
var map__49045 = p__49044;
var map__49045__$1 = cljs.core.__destructure_map(map__49045);
var msg = map__49045__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49045__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49045__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49046(s__49047){
return (new cljs.core.LazySeq(null,(function (){
var s__49047__$1 = s__49047;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__49047__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__49052 = cljs.core.first(xs__6360__auto__);
var map__49052__$1 = cljs.core.__destructure_map(map__49052);
var src = map__49052__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49052__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49052__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__49047__$1,map__49052,map__49052__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__49045,map__49045__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49046_$_iter__49048(s__49049){
return (new cljs.core.LazySeq(null,((function (s__49047__$1,map__49052,map__49052__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__49045,map__49045__$1,msg,info,reload_info){
return (function (){
var s__49049__$1 = s__49049;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__49049__$1);
if(temp__5804__auto____$1){
var s__49049__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49049__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__49049__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__49051 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__49050 = (0);
while(true){
if((i__49050 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__49050);
cljs.core.chunk_append(b__49051,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__49539 = (i__49050 + (1));
i__49050 = G__49539;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49051),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49046_$_iter__49048(cljs.core.chunk_rest(s__49049__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49051),null);
}
} else {
var warning = cljs.core.first(s__49049__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49046_$_iter__49048(cljs.core.rest(s__49049__$2)));
}
} else {
return null;
}
break;
}
});})(s__49047__$1,map__49052,map__49052__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__49045,map__49045__$1,msg,info,reload_info))
,null,null));
});})(s__49047__$1,map__49052,map__49052__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__49045,map__49045__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49046(cljs.core.rest(s__49047__$1)));
} else {
var G__49542 = cljs.core.rest(s__49047__$1);
s__49047__$1 = G__49542;
continue;
}
} else {
var G__49543 = cljs.core.rest(s__49047__$1);
s__49047__$1 = G__49543;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__49053_49544 = cljs.core.seq(warnings);
var chunk__49054_49545 = null;
var count__49055_49546 = (0);
var i__49056_49547 = (0);
while(true){
if((i__49056_49547 < count__49055_49546)){
var map__49059_49548 = chunk__49054_49545.cljs$core$IIndexed$_nth$arity$2(null,i__49056_49547);
var map__49059_49549__$1 = cljs.core.__destructure_map(map__49059_49548);
var w_49550 = map__49059_49549__$1;
var msg_49551__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49059_49549__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49059_49549__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49059_49549__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49059_49549__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49554)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49552),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49553),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49551__$1)].join(''));


var G__49555 = seq__49053_49544;
var G__49556 = chunk__49054_49545;
var G__49557 = count__49055_49546;
var G__49558 = (i__49056_49547 + (1));
seq__49053_49544 = G__49555;
chunk__49054_49545 = G__49556;
count__49055_49546 = G__49557;
i__49056_49547 = G__49558;
continue;
} else {
var temp__5804__auto___49559 = cljs.core.seq(seq__49053_49544);
if(temp__5804__auto___49559){
var seq__49053_49560__$1 = temp__5804__auto___49559;
if(cljs.core.chunked_seq_QMARK_(seq__49053_49560__$1)){
var c__5568__auto___49561 = cljs.core.chunk_first(seq__49053_49560__$1);
var G__49562 = cljs.core.chunk_rest(seq__49053_49560__$1);
var G__49563 = c__5568__auto___49561;
var G__49564 = cljs.core.count(c__5568__auto___49561);
var G__49565 = (0);
seq__49053_49544 = G__49562;
chunk__49054_49545 = G__49563;
count__49055_49546 = G__49564;
i__49056_49547 = G__49565;
continue;
} else {
var map__49060_49566 = cljs.core.first(seq__49053_49560__$1);
var map__49060_49567__$1 = cljs.core.__destructure_map(map__49060_49566);
var w_49568 = map__49060_49567__$1;
var msg_49569__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49060_49567__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49060_49567__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49060_49567__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49060_49567__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49572)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49570),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49571),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49569__$1)].join(''));


var G__49573 = cljs.core.next(seq__49053_49560__$1);
var G__49574 = null;
var G__49575 = (0);
var G__49576 = (0);
seq__49053_49544 = G__49573;
chunk__49054_49545 = G__49574;
count__49055_49546 = G__49575;
i__49056_49547 = G__49576;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__49043_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__49043_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__49061){
var map__49062 = p__49061;
var map__49062__$1 = cljs.core.__destructure_map(map__49062);
var msg = map__49062__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49062__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49062__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__49063 = cljs.core.seq(updates);
var chunk__49065 = null;
var count__49066 = (0);
var i__49067 = (0);
while(true){
if((i__49067 < count__49066)){
var path = chunk__49065.cljs$core$IIndexed$_nth$arity$2(null,i__49067);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49275_49577 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49279_49578 = null;
var count__49280_49579 = (0);
var i__49281_49580 = (0);
while(true){
if((i__49281_49580 < count__49280_49579)){
var node_49581 = chunk__49279_49578.cljs$core$IIndexed$_nth$arity$2(null,i__49281_49580);
if(cljs.core.not(node_49581.shadow$old)){
var path_match_49582 = shadow.cljs.devtools.client.browser.match_paths(node_49581.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49582)){
var new_link_49583 = (function (){var G__49312 = node_49581.cloneNode(true);
G__49312.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49582),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49312;
})();
(node_49581.shadow$old = true);

(new_link_49583.onload = ((function (seq__49275_49577,chunk__49279_49578,count__49280_49579,i__49281_49580,seq__49063,chunk__49065,count__49066,i__49067,new_link_49583,path_match_49582,node_49581,path,map__49062,map__49062__$1,msg,updates,reload_info){
return (function (e){
var seq__49313_49584 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49315_49585 = null;
var count__49316_49586 = (0);
var i__49317_49587 = (0);
while(true){
if((i__49317_49587 < count__49316_49586)){
var map__49330_49588 = chunk__49315_49585.cljs$core$IIndexed$_nth$arity$2(null,i__49317_49587);
var map__49330_49589__$1 = cljs.core.__destructure_map(map__49330_49588);
var task_49590 = map__49330_49589__$1;
var fn_str_49591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49330_49589__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49330_49589__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49593 = goog.getObjectByName(fn_str_49591,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49592)].join(''));

(fn_obj_49593.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49593.cljs$core$IFn$_invoke$arity$2(path,new_link_49583) : fn_obj_49593.call(null,path,new_link_49583));


var G__49594 = seq__49313_49584;
var G__49595 = chunk__49315_49585;
var G__49596 = count__49316_49586;
var G__49597 = (i__49317_49587 + (1));
seq__49313_49584 = G__49594;
chunk__49315_49585 = G__49595;
count__49316_49586 = G__49596;
i__49317_49587 = G__49597;
continue;
} else {
var temp__5804__auto___49598 = cljs.core.seq(seq__49313_49584);
if(temp__5804__auto___49598){
var seq__49313_49599__$1 = temp__5804__auto___49598;
if(cljs.core.chunked_seq_QMARK_(seq__49313_49599__$1)){
var c__5568__auto___49600 = cljs.core.chunk_first(seq__49313_49599__$1);
var G__49601 = cljs.core.chunk_rest(seq__49313_49599__$1);
var G__49602 = c__5568__auto___49600;
var G__49603 = cljs.core.count(c__5568__auto___49600);
var G__49604 = (0);
seq__49313_49584 = G__49601;
chunk__49315_49585 = G__49602;
count__49316_49586 = G__49603;
i__49317_49587 = G__49604;
continue;
} else {
var map__49331_49605 = cljs.core.first(seq__49313_49599__$1);
var map__49331_49606__$1 = cljs.core.__destructure_map(map__49331_49605);
var task_49607 = map__49331_49606__$1;
var fn_str_49608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49331_49606__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49331_49606__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49610 = goog.getObjectByName(fn_str_49608,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49609)].join(''));

(fn_obj_49610.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49610.cljs$core$IFn$_invoke$arity$2(path,new_link_49583) : fn_obj_49610.call(null,path,new_link_49583));


var G__49611 = cljs.core.next(seq__49313_49599__$1);
var G__49612 = null;
var G__49613 = (0);
var G__49614 = (0);
seq__49313_49584 = G__49611;
chunk__49315_49585 = G__49612;
count__49316_49586 = G__49613;
i__49317_49587 = G__49614;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49581);
});})(seq__49275_49577,chunk__49279_49578,count__49280_49579,i__49281_49580,seq__49063,chunk__49065,count__49066,i__49067,new_link_49583,path_match_49582,node_49581,path,map__49062,map__49062__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49582], 0));

goog.dom.insertSiblingAfter(new_link_49583,node_49581);


var G__49615 = seq__49275_49577;
var G__49616 = chunk__49279_49578;
var G__49617 = count__49280_49579;
var G__49618 = (i__49281_49580 + (1));
seq__49275_49577 = G__49615;
chunk__49279_49578 = G__49616;
count__49280_49579 = G__49617;
i__49281_49580 = G__49618;
continue;
} else {
var G__49619 = seq__49275_49577;
var G__49620 = chunk__49279_49578;
var G__49621 = count__49280_49579;
var G__49622 = (i__49281_49580 + (1));
seq__49275_49577 = G__49619;
chunk__49279_49578 = G__49620;
count__49280_49579 = G__49621;
i__49281_49580 = G__49622;
continue;
}
} else {
var G__49623 = seq__49275_49577;
var G__49624 = chunk__49279_49578;
var G__49625 = count__49280_49579;
var G__49626 = (i__49281_49580 + (1));
seq__49275_49577 = G__49623;
chunk__49279_49578 = G__49624;
count__49280_49579 = G__49625;
i__49281_49580 = G__49626;
continue;
}
} else {
var temp__5804__auto___49627 = cljs.core.seq(seq__49275_49577);
if(temp__5804__auto___49627){
var seq__49275_49628__$1 = temp__5804__auto___49627;
if(cljs.core.chunked_seq_QMARK_(seq__49275_49628__$1)){
var c__5568__auto___49629 = cljs.core.chunk_first(seq__49275_49628__$1);
var G__49630 = cljs.core.chunk_rest(seq__49275_49628__$1);
var G__49631 = c__5568__auto___49629;
var G__49632 = cljs.core.count(c__5568__auto___49629);
var G__49633 = (0);
seq__49275_49577 = G__49630;
chunk__49279_49578 = G__49631;
count__49280_49579 = G__49632;
i__49281_49580 = G__49633;
continue;
} else {
var node_49634 = cljs.core.first(seq__49275_49628__$1);
if(cljs.core.not(node_49634.shadow$old)){
var path_match_49635 = shadow.cljs.devtools.client.browser.match_paths(node_49634.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49635)){
var new_link_49636 = (function (){var G__49332 = node_49634.cloneNode(true);
G__49332.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49635),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49332;
})();
(node_49634.shadow$old = true);

(new_link_49636.onload = ((function (seq__49275_49577,chunk__49279_49578,count__49280_49579,i__49281_49580,seq__49063,chunk__49065,count__49066,i__49067,new_link_49636,path_match_49635,node_49634,seq__49275_49628__$1,temp__5804__auto___49627,path,map__49062,map__49062__$1,msg,updates,reload_info){
return (function (e){
var seq__49333_49637 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49335_49638 = null;
var count__49336_49639 = (0);
var i__49337_49640 = (0);
while(true){
if((i__49337_49640 < count__49336_49639)){
var map__49344_49641 = chunk__49335_49638.cljs$core$IIndexed$_nth$arity$2(null,i__49337_49640);
var map__49344_49642__$1 = cljs.core.__destructure_map(map__49344_49641);
var task_49643 = map__49344_49642__$1;
var fn_str_49644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49344_49642__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49344_49642__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49646 = goog.getObjectByName(fn_str_49644,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49645)].join(''));

(fn_obj_49646.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49646.cljs$core$IFn$_invoke$arity$2(path,new_link_49636) : fn_obj_49646.call(null,path,new_link_49636));


var G__49647 = seq__49333_49637;
var G__49648 = chunk__49335_49638;
var G__49649 = count__49336_49639;
var G__49650 = (i__49337_49640 + (1));
seq__49333_49637 = G__49647;
chunk__49335_49638 = G__49648;
count__49336_49639 = G__49649;
i__49337_49640 = G__49650;
continue;
} else {
var temp__5804__auto___49651__$1 = cljs.core.seq(seq__49333_49637);
if(temp__5804__auto___49651__$1){
var seq__49333_49652__$1 = temp__5804__auto___49651__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49333_49652__$1)){
var c__5568__auto___49653 = cljs.core.chunk_first(seq__49333_49652__$1);
var G__49654 = cljs.core.chunk_rest(seq__49333_49652__$1);
var G__49655 = c__5568__auto___49653;
var G__49656 = cljs.core.count(c__5568__auto___49653);
var G__49657 = (0);
seq__49333_49637 = G__49654;
chunk__49335_49638 = G__49655;
count__49336_49639 = G__49656;
i__49337_49640 = G__49657;
continue;
} else {
var map__49345_49658 = cljs.core.first(seq__49333_49652__$1);
var map__49345_49659__$1 = cljs.core.__destructure_map(map__49345_49658);
var task_49660 = map__49345_49659__$1;
var fn_str_49661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49345_49659__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49345_49659__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49663 = goog.getObjectByName(fn_str_49661,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49662)].join(''));

(fn_obj_49663.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49663.cljs$core$IFn$_invoke$arity$2(path,new_link_49636) : fn_obj_49663.call(null,path,new_link_49636));


var G__49664 = cljs.core.next(seq__49333_49652__$1);
var G__49665 = null;
var G__49666 = (0);
var G__49667 = (0);
seq__49333_49637 = G__49664;
chunk__49335_49638 = G__49665;
count__49336_49639 = G__49666;
i__49337_49640 = G__49667;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49634);
});})(seq__49275_49577,chunk__49279_49578,count__49280_49579,i__49281_49580,seq__49063,chunk__49065,count__49066,i__49067,new_link_49636,path_match_49635,node_49634,seq__49275_49628__$1,temp__5804__auto___49627,path,map__49062,map__49062__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49635], 0));

goog.dom.insertSiblingAfter(new_link_49636,node_49634);


var G__49668 = cljs.core.next(seq__49275_49628__$1);
var G__49669 = null;
var G__49670 = (0);
var G__49671 = (0);
seq__49275_49577 = G__49668;
chunk__49279_49578 = G__49669;
count__49280_49579 = G__49670;
i__49281_49580 = G__49671;
continue;
} else {
var G__49672 = cljs.core.next(seq__49275_49628__$1);
var G__49673 = null;
var G__49674 = (0);
var G__49675 = (0);
seq__49275_49577 = G__49672;
chunk__49279_49578 = G__49673;
count__49280_49579 = G__49674;
i__49281_49580 = G__49675;
continue;
}
} else {
var G__49676 = cljs.core.next(seq__49275_49628__$1);
var G__49677 = null;
var G__49678 = (0);
var G__49679 = (0);
seq__49275_49577 = G__49676;
chunk__49279_49578 = G__49677;
count__49280_49579 = G__49678;
i__49281_49580 = G__49679;
continue;
}
}
} else {
}
}
break;
}


var G__49680 = seq__49063;
var G__49681 = chunk__49065;
var G__49682 = count__49066;
var G__49683 = (i__49067 + (1));
seq__49063 = G__49680;
chunk__49065 = G__49681;
count__49066 = G__49682;
i__49067 = G__49683;
continue;
} else {
var G__49684 = seq__49063;
var G__49685 = chunk__49065;
var G__49686 = count__49066;
var G__49687 = (i__49067 + (1));
seq__49063 = G__49684;
chunk__49065 = G__49685;
count__49066 = G__49686;
i__49067 = G__49687;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49063);
if(temp__5804__auto__){
var seq__49063__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49063__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__49063__$1);
var G__49688 = cljs.core.chunk_rest(seq__49063__$1);
var G__49689 = c__5568__auto__;
var G__49690 = cljs.core.count(c__5568__auto__);
var G__49691 = (0);
seq__49063 = G__49688;
chunk__49065 = G__49689;
count__49066 = G__49690;
i__49067 = G__49691;
continue;
} else {
var path = cljs.core.first(seq__49063__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49346_49692 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49350_49693 = null;
var count__49351_49694 = (0);
var i__49352_49695 = (0);
while(true){
if((i__49352_49695 < count__49351_49694)){
var node_49696 = chunk__49350_49693.cljs$core$IIndexed$_nth$arity$2(null,i__49352_49695);
if(cljs.core.not(node_49696.shadow$old)){
var path_match_49697 = shadow.cljs.devtools.client.browser.match_paths(node_49696.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49697)){
var new_link_49698 = (function (){var G__49387 = node_49696.cloneNode(true);
G__49387.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49697),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49387;
})();
(node_49696.shadow$old = true);

(new_link_49698.onload = ((function (seq__49346_49692,chunk__49350_49693,count__49351_49694,i__49352_49695,seq__49063,chunk__49065,count__49066,i__49067,new_link_49698,path_match_49697,node_49696,path,seq__49063__$1,temp__5804__auto__,map__49062,map__49062__$1,msg,updates,reload_info){
return (function (e){
var seq__49389_49699 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49391_49700 = null;
var count__49392_49701 = (0);
var i__49393_49702 = (0);
while(true){
if((i__49393_49702 < count__49392_49701)){
var map__49401_49706 = chunk__49391_49700.cljs$core$IIndexed$_nth$arity$2(null,i__49393_49702);
var map__49401_49707__$1 = cljs.core.__destructure_map(map__49401_49706);
var task_49708 = map__49401_49707__$1;
var fn_str_49709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49401_49707__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49401_49707__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49712 = goog.getObjectByName(fn_str_49709,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49710)].join(''));

(fn_obj_49712.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49712.cljs$core$IFn$_invoke$arity$2(path,new_link_49698) : fn_obj_49712.call(null,path,new_link_49698));


var G__49713 = seq__49389_49699;
var G__49714 = chunk__49391_49700;
var G__49715 = count__49392_49701;
var G__49716 = (i__49393_49702 + (1));
seq__49389_49699 = G__49713;
chunk__49391_49700 = G__49714;
count__49392_49701 = G__49715;
i__49393_49702 = G__49716;
continue;
} else {
var temp__5804__auto___49717__$1 = cljs.core.seq(seq__49389_49699);
if(temp__5804__auto___49717__$1){
var seq__49389_49718__$1 = temp__5804__auto___49717__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49389_49718__$1)){
var c__5568__auto___49719 = cljs.core.chunk_first(seq__49389_49718__$1);
var G__49720 = cljs.core.chunk_rest(seq__49389_49718__$1);
var G__49721 = c__5568__auto___49719;
var G__49722 = cljs.core.count(c__5568__auto___49719);
var G__49723 = (0);
seq__49389_49699 = G__49720;
chunk__49391_49700 = G__49721;
count__49392_49701 = G__49722;
i__49393_49702 = G__49723;
continue;
} else {
var map__49402_49724 = cljs.core.first(seq__49389_49718__$1);
var map__49402_49725__$1 = cljs.core.__destructure_map(map__49402_49724);
var task_49726 = map__49402_49725__$1;
var fn_str_49727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49402_49725__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49402_49725__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49729 = goog.getObjectByName(fn_str_49727,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49728)].join(''));

(fn_obj_49729.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49729.cljs$core$IFn$_invoke$arity$2(path,new_link_49698) : fn_obj_49729.call(null,path,new_link_49698));


var G__49730 = cljs.core.next(seq__49389_49718__$1);
var G__49731 = null;
var G__49732 = (0);
var G__49733 = (0);
seq__49389_49699 = G__49730;
chunk__49391_49700 = G__49731;
count__49392_49701 = G__49732;
i__49393_49702 = G__49733;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49696);
});})(seq__49346_49692,chunk__49350_49693,count__49351_49694,i__49352_49695,seq__49063,chunk__49065,count__49066,i__49067,new_link_49698,path_match_49697,node_49696,path,seq__49063__$1,temp__5804__auto__,map__49062,map__49062__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49697], 0));

goog.dom.insertSiblingAfter(new_link_49698,node_49696);


var G__49734 = seq__49346_49692;
var G__49735 = chunk__49350_49693;
var G__49736 = count__49351_49694;
var G__49737 = (i__49352_49695 + (1));
seq__49346_49692 = G__49734;
chunk__49350_49693 = G__49735;
count__49351_49694 = G__49736;
i__49352_49695 = G__49737;
continue;
} else {
var G__49738 = seq__49346_49692;
var G__49739 = chunk__49350_49693;
var G__49740 = count__49351_49694;
var G__49741 = (i__49352_49695 + (1));
seq__49346_49692 = G__49738;
chunk__49350_49693 = G__49739;
count__49351_49694 = G__49740;
i__49352_49695 = G__49741;
continue;
}
} else {
var G__49742 = seq__49346_49692;
var G__49743 = chunk__49350_49693;
var G__49744 = count__49351_49694;
var G__49745 = (i__49352_49695 + (1));
seq__49346_49692 = G__49742;
chunk__49350_49693 = G__49743;
count__49351_49694 = G__49744;
i__49352_49695 = G__49745;
continue;
}
} else {
var temp__5804__auto___49746__$1 = cljs.core.seq(seq__49346_49692);
if(temp__5804__auto___49746__$1){
var seq__49346_49747__$1 = temp__5804__auto___49746__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49346_49747__$1)){
var c__5568__auto___49748 = cljs.core.chunk_first(seq__49346_49747__$1);
var G__49749 = cljs.core.chunk_rest(seq__49346_49747__$1);
var G__49750 = c__5568__auto___49748;
var G__49751 = cljs.core.count(c__5568__auto___49748);
var G__49752 = (0);
seq__49346_49692 = G__49749;
chunk__49350_49693 = G__49750;
count__49351_49694 = G__49751;
i__49352_49695 = G__49752;
continue;
} else {
var node_49753 = cljs.core.first(seq__49346_49747__$1);
if(cljs.core.not(node_49753.shadow$old)){
var path_match_49754 = shadow.cljs.devtools.client.browser.match_paths(node_49753.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49754)){
var new_link_49755 = (function (){var G__49403 = node_49753.cloneNode(true);
G__49403.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49754),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49403;
})();
(node_49753.shadow$old = true);

(new_link_49755.onload = ((function (seq__49346_49692,chunk__49350_49693,count__49351_49694,i__49352_49695,seq__49063,chunk__49065,count__49066,i__49067,new_link_49755,path_match_49754,node_49753,seq__49346_49747__$1,temp__5804__auto___49746__$1,path,seq__49063__$1,temp__5804__auto__,map__49062,map__49062__$1,msg,updates,reload_info){
return (function (e){
var seq__49404_49756 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49406_49757 = null;
var count__49407_49758 = (0);
var i__49408_49759 = (0);
while(true){
if((i__49408_49759 < count__49407_49758)){
var map__49436_49760 = chunk__49406_49757.cljs$core$IIndexed$_nth$arity$2(null,i__49408_49759);
var map__49436_49761__$1 = cljs.core.__destructure_map(map__49436_49760);
var task_49762 = map__49436_49761__$1;
var fn_str_49763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49436_49761__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49436_49761__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49765 = goog.getObjectByName(fn_str_49763,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49764)].join(''));

(fn_obj_49765.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49765.cljs$core$IFn$_invoke$arity$2(path,new_link_49755) : fn_obj_49765.call(null,path,new_link_49755));


var G__49766 = seq__49404_49756;
var G__49767 = chunk__49406_49757;
var G__49768 = count__49407_49758;
var G__49769 = (i__49408_49759 + (1));
seq__49404_49756 = G__49766;
chunk__49406_49757 = G__49767;
count__49407_49758 = G__49768;
i__49408_49759 = G__49769;
continue;
} else {
var temp__5804__auto___49770__$2 = cljs.core.seq(seq__49404_49756);
if(temp__5804__auto___49770__$2){
var seq__49404_49771__$1 = temp__5804__auto___49770__$2;
if(cljs.core.chunked_seq_QMARK_(seq__49404_49771__$1)){
var c__5568__auto___49772 = cljs.core.chunk_first(seq__49404_49771__$1);
var G__49773 = cljs.core.chunk_rest(seq__49404_49771__$1);
var G__49774 = c__5568__auto___49772;
var G__49775 = cljs.core.count(c__5568__auto___49772);
var G__49776 = (0);
seq__49404_49756 = G__49773;
chunk__49406_49757 = G__49774;
count__49407_49758 = G__49775;
i__49408_49759 = G__49776;
continue;
} else {
var map__49440_49777 = cljs.core.first(seq__49404_49771__$1);
var map__49440_49778__$1 = cljs.core.__destructure_map(map__49440_49777);
var task_49779 = map__49440_49778__$1;
var fn_str_49780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49440_49778__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49440_49778__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49782 = goog.getObjectByName(fn_str_49780,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49781)].join(''));

(fn_obj_49782.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49782.cljs$core$IFn$_invoke$arity$2(path,new_link_49755) : fn_obj_49782.call(null,path,new_link_49755));


var G__49783 = cljs.core.next(seq__49404_49771__$1);
var G__49784 = null;
var G__49785 = (0);
var G__49786 = (0);
seq__49404_49756 = G__49783;
chunk__49406_49757 = G__49784;
count__49407_49758 = G__49785;
i__49408_49759 = G__49786;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49753);
});})(seq__49346_49692,chunk__49350_49693,count__49351_49694,i__49352_49695,seq__49063,chunk__49065,count__49066,i__49067,new_link_49755,path_match_49754,node_49753,seq__49346_49747__$1,temp__5804__auto___49746__$1,path,seq__49063__$1,temp__5804__auto__,map__49062,map__49062__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49754], 0));

goog.dom.insertSiblingAfter(new_link_49755,node_49753);


var G__49787 = cljs.core.next(seq__49346_49747__$1);
var G__49788 = null;
var G__49789 = (0);
var G__49790 = (0);
seq__49346_49692 = G__49787;
chunk__49350_49693 = G__49788;
count__49351_49694 = G__49789;
i__49352_49695 = G__49790;
continue;
} else {
var G__49791 = cljs.core.next(seq__49346_49747__$1);
var G__49792 = null;
var G__49793 = (0);
var G__49794 = (0);
seq__49346_49692 = G__49791;
chunk__49350_49693 = G__49792;
count__49351_49694 = G__49793;
i__49352_49695 = G__49794;
continue;
}
} else {
var G__49795 = cljs.core.next(seq__49346_49747__$1);
var G__49796 = null;
var G__49797 = (0);
var G__49798 = (0);
seq__49346_49692 = G__49795;
chunk__49350_49693 = G__49796;
count__49351_49694 = G__49797;
i__49352_49695 = G__49798;
continue;
}
}
} else {
}
}
break;
}


var G__49799 = cljs.core.next(seq__49063__$1);
var G__49800 = null;
var G__49801 = (0);
var G__49802 = (0);
seq__49063 = G__49799;
chunk__49065 = G__49800;
count__49066 = G__49801;
i__49067 = G__49802;
continue;
} else {
var G__49803 = cljs.core.next(seq__49063__$1);
var G__49804 = null;
var G__49805 = (0);
var G__49806 = (0);
seq__49063 = G__49803;
chunk__49065 = G__49804;
count__49066 = G__49805;
i__49067 = G__49806;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__49444){
var map__49445 = p__49444;
var map__49445__$1 = cljs.core.__destructure_map(map__49445);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49445__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__49480){
var map__49481 = p__49480;
var map__49481__$1 = cljs.core.__destructure_map(map__49481);
var _ = map__49481__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49481__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__49482,done,error){
var map__49483 = p__49482;
var map__49483__$1 = cljs.core.__destructure_map(map__49483);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49483__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__49484,done,error){
var map__49485 = p__49484;
var map__49485__$1 = cljs.core.__destructure_map(map__49485);
var msg = map__49485__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49485__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49485__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49485__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49486){
var map__49487 = p__49486;
var map__49487__$1 = cljs.core.__destructure_map(map__49487);
var src = map__49487__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49487__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__49488 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__49488) : done.call(null,G__49488));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__49493){
var map__49494 = p__49493;
var map__49494__$1 = cljs.core.__destructure_map(map__49494);
var msg__$1 = map__49494__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49494__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e49495){var ex = e49495;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__49496){
var map__49497 = p__49496;
var map__49497__$1 = cljs.core.__destructure_map(map__49497);
var env = map__49497__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49497__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__49498){
var map__49499 = p__49498;
var map__49499__$1 = cljs.core.__destructure_map(map__49499);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49499__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49499__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__49500){
var map__49507 = p__49500;
var map__49507__$1 = cljs.core.__destructure_map(map__49507);
var svc = map__49507__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49507__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
