goog.provide('shadow.remote.runtime.eval_support');
shadow.remote.runtime.eval_support.obj_support_inst = null;
shadow.remote.runtime.eval_support.get_ref = (function shadow$remote$runtime$eval_support$get_ref(oid){
if(cljs.core.truth_(shadow.remote.runtime.eval_support.obj_support_inst)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("obj-support not bound, can only call this from eval",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));
}

return shadow.remote.runtime.obj_support.get_ref(shadow.remote.runtime.eval_support.obj_support_inst,oid);
});
shadow.remote.runtime.eval_support.cljs_eval = (function shadow$remote$runtime$eval_support$cljs_eval(p__48751,p__48752){
var map__48753 = p__48751;
var map__48753__$1 = cljs.core.__destructure_map(map__48753);
var svc = map__48753__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48753__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48753__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var map__48754 = p__48752;
var map__48754__$1 = cljs.core.__destructure_map(map__48754);
var msg = map__48754__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48754__$1,new cljs.core.Keyword(null,"input","input",556931961));
(shadow.remote.runtime.eval_support.obj_support_inst = obj_support);

return shadow.remote.runtime.api.cljs_eval(runtime,input,(function (p__48757){
var map__48759 = p__48757;
var map__48759__$1 = cljs.core.__destructure_map(map__48759);
var info = map__48759__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48759__$1,new cljs.core.Keyword(null,"result","result",1415092211));
(shadow.remote.runtime.eval_support.obj_support_inst = null);

var G__48761 = result;
var G__48761__$1 = (((G__48761 instanceof cljs.core.Keyword))?G__48761.fqn:null);
switch (G__48761__$1) {
case "compile-error":
var map__48762 = info;
var map__48762__$1 = cljs.core.__destructure_map(map__48762);
var ex_client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48762__$1,new cljs.core.Keyword(null,"ex-client-id","ex-client-id",-446123984));
var ex_oid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48762__$1,new cljs.core.Keyword(null,"ex-oid","ex-oid",-650256737));
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48762__$1,new cljs.core.Keyword(null,"report","report",1394055010));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-compile-error","eval-compile-error",-1765075397),new cljs.core.Keyword(null,"ex-client-id","ex-client-id",-446123984),ex_client_id,new cljs.core.Keyword(null,"ex-oid","ex-oid",-650256737),ex_oid,new cljs.core.Keyword(null,"report","report",1394055010),report], null));

break;
case "runtime-error":
var map__48766 = info;
var map__48766__$1 = cljs.core.__destructure_map(map__48766);
var ex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48766__$1,new cljs.core.Keyword(null,"ex","ex",-1413771341));
var ex_oid = shadow.remote.runtime.obj_support.register(obj_support,ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),input], null));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-runtime-error","eval-runtime-error",275935402),new cljs.core.Keyword(null,"ex-oid","ex-oid",-650256737),ex_oid], null));

break;
case "warnings":
var map__48769 = info;
var map__48769__$1 = cljs.core.__destructure_map(map__48769);
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48769__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-compile-warnings","eval-compile-warnings",1994859386),new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));

break;
case "ok":
var map__48771 = info;
var map__48771__$1 = cljs.core.__destructure_map(map__48771);
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48771__$1,new cljs.core.Keyword(null,"results","results",-1134170113));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48771__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var time_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48771__$1,new cljs.core.Keyword(null,"time-start","time-start",-590811745));
var time_finish = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48771__$1,new cljs.core.Keyword(null,"time-finish","time-finish",-1456032653));
var val = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(results)))?cljs.core.first(results):results);
var ref_oid = shadow.remote.runtime.obj_support.register(obj_support,val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),input], null));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result-ref","eval-result-ref",263827420),new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),ref_oid,new cljs.core.Keyword(null,"eval-ms","eval-ms",788821074),(time_finish - time_start),new cljs.core.Keyword(null,"eval-ns","eval-ns",-915623795),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));

break;
default:
return console.error("Unhandled cljs-eval result",info);

}
}));
});
shadow.remote.runtime.eval_support.js_eval = (function shadow$remote$runtime$eval_support$js_eval(p__48780,p__48781){
var map__48783 = p__48780;
var map__48783__$1 = cljs.core.__destructure_map(map__48783);
var svc = map__48783__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48783__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48783__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var map__48786 = p__48781;
var map__48786__$1 = cljs.core.__destructure_map(map__48786);
var msg = map__48786__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48786__$1,new cljs.core.Keyword(null,"code","code",1586293142));
try{var res = shadow.remote.runtime.api.js_eval(runtime,code);
var ref_oid = shadow.remote.runtime.obj_support.register(obj_support,res,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-code","js-code",1816578331),code], null));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result-ref","eval-result-ref",263827420),new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),ref_oid], null));
}catch (e48790){var e = e48790;
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-error","eval-error",466139568),new cljs.core.Keyword(null,"e","e",1381269198),e.message], null));
}});
shadow.remote.runtime.eval_support.start = (function shadow$remote$runtime$eval_support$start(runtime,obj_support){
var svc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support], null);
shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.eval-support","ext","shadow.remote.runtime.eval-support/ext",1781604625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"js-eval","js-eval",-137738892),(function (p1__48794_SHARP_){
return shadow.remote.runtime.eval_support.js_eval(svc,p1__48794_SHARP_);
}),new cljs.core.Keyword(null,"cljs-eval","cljs-eval",1860675817),(function (p1__48795_SHARP_){
return shadow.remote.runtime.eval_support.cljs_eval(svc,p1__48795_SHARP_);
})], null)], null));

return svc;
});
shadow.remote.runtime.eval_support.stop = (function shadow$remote$runtime$eval_support$stop(p__48799){
var map__48800 = p__48799;
var map__48800__$1 = cljs.core.__destructure_map(map__48800);
var svc = map__48800__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48800__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.eval-support","ext","shadow.remote.runtime.eval-support/ext",1781604625));
});

//# sourceMappingURL=shadow.remote.runtime.eval_support.js.map
