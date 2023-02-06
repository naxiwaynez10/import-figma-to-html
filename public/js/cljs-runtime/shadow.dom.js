goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_46417 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_46417(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_46418 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_46418(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__45709 = coll;
var G__45710 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__45709,G__45710) : shadow.dom.lazy_native_coll_seq.call(null,G__45709,G__45710));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__45713 = arguments.length;
switch (G__45713) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__45715 = arguments.length;
switch (G__45715) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__45717 = arguments.length;
switch (G__45717) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__45719 = arguments.length;
switch (G__45719) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__45724 = arguments.length;
switch (G__45724) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__45732 = arguments.length;
switch (G__45732) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e45733){if((e45733 instanceof Object)){
var e = e45733;
return console.log("didnt support attachEvent",el,e);
} else {
throw e45733;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__45735 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__45736 = null;
var count__45737 = (0);
var i__45738 = (0);
while(true){
if((i__45738 < count__45737)){
var el = chunk__45736.cljs$core$IIndexed$_nth$arity$2(null,i__45738);
var handler_46437__$1 = ((function (seq__45735,chunk__45736,count__45737,i__45738,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45735,chunk__45736,count__45737,i__45738,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46437__$1);


var G__46438 = seq__45735;
var G__46439 = chunk__45736;
var G__46440 = count__45737;
var G__46441 = (i__45738 + (1));
seq__45735 = G__46438;
chunk__45736 = G__46439;
count__45737 = G__46440;
i__45738 = G__46441;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45735);
if(temp__5804__auto__){
var seq__45735__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45735__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45735__$1);
var G__46442 = cljs.core.chunk_rest(seq__45735__$1);
var G__46443 = c__5568__auto__;
var G__46444 = cljs.core.count(c__5568__auto__);
var G__46445 = (0);
seq__45735 = G__46442;
chunk__45736 = G__46443;
count__45737 = G__46444;
i__45738 = G__46445;
continue;
} else {
var el = cljs.core.first(seq__45735__$1);
var handler_46446__$1 = ((function (seq__45735,chunk__45736,count__45737,i__45738,el,seq__45735__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45735,chunk__45736,count__45737,i__45738,el,seq__45735__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46446__$1);


var G__46447 = cljs.core.next(seq__45735__$1);
var G__46448 = null;
var G__46449 = (0);
var G__46450 = (0);
seq__45735 = G__46447;
chunk__45736 = G__46448;
count__45737 = G__46449;
i__45738 = G__46450;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__45759 = arguments.length;
switch (G__45759) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__45788 = cljs.core.seq(events);
var chunk__45789 = null;
var count__45790 = (0);
var i__45791 = (0);
while(true){
if((i__45791 < count__45790)){
var vec__45799 = chunk__45789.cljs$core$IIndexed$_nth$arity$2(null,i__45791);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45799,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45799,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46452 = seq__45788;
var G__46453 = chunk__45789;
var G__46454 = count__45790;
var G__46455 = (i__45791 + (1));
seq__45788 = G__46452;
chunk__45789 = G__46453;
count__45790 = G__46454;
i__45791 = G__46455;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45788);
if(temp__5804__auto__){
var seq__45788__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45788__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45788__$1);
var G__46456 = cljs.core.chunk_rest(seq__45788__$1);
var G__46457 = c__5568__auto__;
var G__46458 = cljs.core.count(c__5568__auto__);
var G__46459 = (0);
seq__45788 = G__46456;
chunk__45789 = G__46457;
count__45790 = G__46458;
i__45791 = G__46459;
continue;
} else {
var vec__45802 = cljs.core.first(seq__45788__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45802,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45802,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46460 = cljs.core.next(seq__45788__$1);
var G__46461 = null;
var G__46462 = (0);
var G__46463 = (0);
seq__45788 = G__46460;
chunk__45789 = G__46461;
count__45790 = G__46462;
i__45791 = G__46463;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__45805 = cljs.core.seq(styles);
var chunk__45806 = null;
var count__45807 = (0);
var i__45808 = (0);
while(true){
if((i__45808 < count__45807)){
var vec__45828 = chunk__45806.cljs$core$IIndexed$_nth$arity$2(null,i__45808);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45828,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45828,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46464 = seq__45805;
var G__46465 = chunk__45806;
var G__46466 = count__45807;
var G__46467 = (i__45808 + (1));
seq__45805 = G__46464;
chunk__45806 = G__46465;
count__45807 = G__46466;
i__45808 = G__46467;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45805);
if(temp__5804__auto__){
var seq__45805__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45805__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45805__$1);
var G__46468 = cljs.core.chunk_rest(seq__45805__$1);
var G__46469 = c__5568__auto__;
var G__46470 = cljs.core.count(c__5568__auto__);
var G__46471 = (0);
seq__45805 = G__46468;
chunk__45806 = G__46469;
count__45807 = G__46470;
i__45808 = G__46471;
continue;
} else {
var vec__45837 = cljs.core.first(seq__45805__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45837,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45837,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46472 = cljs.core.next(seq__45805__$1);
var G__46473 = null;
var G__46474 = (0);
var G__46475 = (0);
seq__45805 = G__46472;
chunk__45806 = G__46473;
count__45807 = G__46474;
i__45808 = G__46475;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__45845_46476 = key;
var G__45845_46477__$1 = (((G__45845_46476 instanceof cljs.core.Keyword))?G__45845_46476.fqn:null);
switch (G__45845_46477__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_46479 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_46479,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_46479,"aria-");
}
})())){
el.setAttribute(ks_46479,value);
} else {
(el[ks_46479] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__45890){
var map__45891 = p__45890;
var map__45891__$1 = cljs.core.__destructure_map(map__45891);
var props = map__45891__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45891__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__45895 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45895,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45895,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45895,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__45898 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__45898,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__45898;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__45903 = arguments.length;
switch (G__45903) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__45910){
var vec__45911 = p__45910;
var seq__45912 = cljs.core.seq(vec__45911);
var first__45913 = cljs.core.first(seq__45912);
var seq__45912__$1 = cljs.core.next(seq__45912);
var nn = first__45913;
var first__45913__$1 = cljs.core.first(seq__45912__$1);
var seq__45912__$2 = cljs.core.next(seq__45912__$1);
var np = first__45913__$1;
var nc = seq__45912__$2;
var node = vec__45911;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45914 = nn;
var G__45915 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45914,G__45915) : create_fn.call(null,G__45914,G__45915));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45916 = nn;
var G__45917 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45916,G__45917) : create_fn.call(null,G__45916,G__45917));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__45918 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45918,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45918,(1),null);
var seq__45921_46488 = cljs.core.seq(node_children);
var chunk__45922_46489 = null;
var count__45923_46490 = (0);
var i__45924_46491 = (0);
while(true){
if((i__45924_46491 < count__45923_46490)){
var child_struct_46492 = chunk__45922_46489.cljs$core$IIndexed$_nth$arity$2(null,i__45924_46491);
var children_46493 = shadow.dom.dom_node(child_struct_46492);
if(cljs.core.seq_QMARK_(children_46493)){
var seq__45979_46494 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46493));
var chunk__45981_46495 = null;
var count__45982_46496 = (0);
var i__45983_46497 = (0);
while(true){
if((i__45983_46497 < count__45982_46496)){
var child_46498 = chunk__45981_46495.cljs$core$IIndexed$_nth$arity$2(null,i__45983_46497);
if(cljs.core.truth_(child_46498)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46498);


var G__46499 = seq__45979_46494;
var G__46500 = chunk__45981_46495;
var G__46501 = count__45982_46496;
var G__46502 = (i__45983_46497 + (1));
seq__45979_46494 = G__46499;
chunk__45981_46495 = G__46500;
count__45982_46496 = G__46501;
i__45983_46497 = G__46502;
continue;
} else {
var G__46503 = seq__45979_46494;
var G__46504 = chunk__45981_46495;
var G__46505 = count__45982_46496;
var G__46506 = (i__45983_46497 + (1));
seq__45979_46494 = G__46503;
chunk__45981_46495 = G__46504;
count__45982_46496 = G__46505;
i__45983_46497 = G__46506;
continue;
}
} else {
var temp__5804__auto___46507 = cljs.core.seq(seq__45979_46494);
if(temp__5804__auto___46507){
var seq__45979_46508__$1 = temp__5804__auto___46507;
if(cljs.core.chunked_seq_QMARK_(seq__45979_46508__$1)){
var c__5568__auto___46509 = cljs.core.chunk_first(seq__45979_46508__$1);
var G__46510 = cljs.core.chunk_rest(seq__45979_46508__$1);
var G__46511 = c__5568__auto___46509;
var G__46512 = cljs.core.count(c__5568__auto___46509);
var G__46513 = (0);
seq__45979_46494 = G__46510;
chunk__45981_46495 = G__46511;
count__45982_46496 = G__46512;
i__45983_46497 = G__46513;
continue;
} else {
var child_46514 = cljs.core.first(seq__45979_46508__$1);
if(cljs.core.truth_(child_46514)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46514);


var G__46515 = cljs.core.next(seq__45979_46508__$1);
var G__46516 = null;
var G__46517 = (0);
var G__46518 = (0);
seq__45979_46494 = G__46515;
chunk__45981_46495 = G__46516;
count__45982_46496 = G__46517;
i__45983_46497 = G__46518;
continue;
} else {
var G__46519 = cljs.core.next(seq__45979_46508__$1);
var G__46520 = null;
var G__46521 = (0);
var G__46522 = (0);
seq__45979_46494 = G__46519;
chunk__45981_46495 = G__46520;
count__45982_46496 = G__46521;
i__45983_46497 = G__46522;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46493);
}


var G__46523 = seq__45921_46488;
var G__46524 = chunk__45922_46489;
var G__46525 = count__45923_46490;
var G__46526 = (i__45924_46491 + (1));
seq__45921_46488 = G__46523;
chunk__45922_46489 = G__46524;
count__45923_46490 = G__46525;
i__45924_46491 = G__46526;
continue;
} else {
var temp__5804__auto___46527 = cljs.core.seq(seq__45921_46488);
if(temp__5804__auto___46527){
var seq__45921_46528__$1 = temp__5804__auto___46527;
if(cljs.core.chunked_seq_QMARK_(seq__45921_46528__$1)){
var c__5568__auto___46529 = cljs.core.chunk_first(seq__45921_46528__$1);
var G__46530 = cljs.core.chunk_rest(seq__45921_46528__$1);
var G__46531 = c__5568__auto___46529;
var G__46532 = cljs.core.count(c__5568__auto___46529);
var G__46533 = (0);
seq__45921_46488 = G__46530;
chunk__45922_46489 = G__46531;
count__45923_46490 = G__46532;
i__45924_46491 = G__46533;
continue;
} else {
var child_struct_46534 = cljs.core.first(seq__45921_46528__$1);
var children_46535 = shadow.dom.dom_node(child_struct_46534);
if(cljs.core.seq_QMARK_(children_46535)){
var seq__45999_46536 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46535));
var chunk__46001_46537 = null;
var count__46002_46538 = (0);
var i__46003_46539 = (0);
while(true){
if((i__46003_46539 < count__46002_46538)){
var child_46540 = chunk__46001_46537.cljs$core$IIndexed$_nth$arity$2(null,i__46003_46539);
if(cljs.core.truth_(child_46540)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46540);


var G__46541 = seq__45999_46536;
var G__46542 = chunk__46001_46537;
var G__46543 = count__46002_46538;
var G__46544 = (i__46003_46539 + (1));
seq__45999_46536 = G__46541;
chunk__46001_46537 = G__46542;
count__46002_46538 = G__46543;
i__46003_46539 = G__46544;
continue;
} else {
var G__46545 = seq__45999_46536;
var G__46546 = chunk__46001_46537;
var G__46547 = count__46002_46538;
var G__46548 = (i__46003_46539 + (1));
seq__45999_46536 = G__46545;
chunk__46001_46537 = G__46546;
count__46002_46538 = G__46547;
i__46003_46539 = G__46548;
continue;
}
} else {
var temp__5804__auto___46549__$1 = cljs.core.seq(seq__45999_46536);
if(temp__5804__auto___46549__$1){
var seq__45999_46550__$1 = temp__5804__auto___46549__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45999_46550__$1)){
var c__5568__auto___46551 = cljs.core.chunk_first(seq__45999_46550__$1);
var G__46552 = cljs.core.chunk_rest(seq__45999_46550__$1);
var G__46553 = c__5568__auto___46551;
var G__46554 = cljs.core.count(c__5568__auto___46551);
var G__46555 = (0);
seq__45999_46536 = G__46552;
chunk__46001_46537 = G__46553;
count__46002_46538 = G__46554;
i__46003_46539 = G__46555;
continue;
} else {
var child_46556 = cljs.core.first(seq__45999_46550__$1);
if(cljs.core.truth_(child_46556)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46556);


var G__46557 = cljs.core.next(seq__45999_46550__$1);
var G__46558 = null;
var G__46559 = (0);
var G__46560 = (0);
seq__45999_46536 = G__46557;
chunk__46001_46537 = G__46558;
count__46002_46538 = G__46559;
i__46003_46539 = G__46560;
continue;
} else {
var G__46561 = cljs.core.next(seq__45999_46550__$1);
var G__46562 = null;
var G__46563 = (0);
var G__46564 = (0);
seq__45999_46536 = G__46561;
chunk__46001_46537 = G__46562;
count__46002_46538 = G__46563;
i__46003_46539 = G__46564;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46535);
}


var G__46565 = cljs.core.next(seq__45921_46528__$1);
var G__46566 = null;
var G__46567 = (0);
var G__46568 = (0);
seq__45921_46488 = G__46565;
chunk__45922_46489 = G__46566;
count__45923_46490 = G__46567;
i__45924_46491 = G__46568;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__46022 = cljs.core.seq(node);
var chunk__46023 = null;
var count__46024 = (0);
var i__46025 = (0);
while(true){
if((i__46025 < count__46024)){
var n = chunk__46023.cljs$core$IIndexed$_nth$arity$2(null,i__46025);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46569 = seq__46022;
var G__46570 = chunk__46023;
var G__46571 = count__46024;
var G__46572 = (i__46025 + (1));
seq__46022 = G__46569;
chunk__46023 = G__46570;
count__46024 = G__46571;
i__46025 = G__46572;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46022);
if(temp__5804__auto__){
var seq__46022__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46022__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46022__$1);
var G__46573 = cljs.core.chunk_rest(seq__46022__$1);
var G__46574 = c__5568__auto__;
var G__46575 = cljs.core.count(c__5568__auto__);
var G__46576 = (0);
seq__46022 = G__46573;
chunk__46023 = G__46574;
count__46024 = G__46575;
i__46025 = G__46576;
continue;
} else {
var n = cljs.core.first(seq__46022__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46577 = cljs.core.next(seq__46022__$1);
var G__46578 = null;
var G__46579 = (0);
var G__46580 = (0);
seq__46022 = G__46577;
chunk__46023 = G__46578;
count__46024 = G__46579;
i__46025 = G__46580;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__46032 = arguments.length;
switch (G__46032) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__46037 = arguments.length;
switch (G__46037) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__46046 = arguments.length;
switch (G__46046) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46594 = arguments.length;
var i__5770__auto___46595 = (0);
while(true){
if((i__5770__auto___46595 < len__5769__auto___46594)){
args__5775__auto__.push((arguments[i__5770__auto___46595]));

var G__46596 = (i__5770__auto___46595 + (1));
i__5770__auto___46595 = G__46596;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__46064_46597 = cljs.core.seq(nodes);
var chunk__46065_46598 = null;
var count__46066_46599 = (0);
var i__46067_46600 = (0);
while(true){
if((i__46067_46600 < count__46066_46599)){
var node_46601 = chunk__46065_46598.cljs$core$IIndexed$_nth$arity$2(null,i__46067_46600);
fragment.appendChild(shadow.dom._to_dom(node_46601));


var G__46602 = seq__46064_46597;
var G__46603 = chunk__46065_46598;
var G__46604 = count__46066_46599;
var G__46605 = (i__46067_46600 + (1));
seq__46064_46597 = G__46602;
chunk__46065_46598 = G__46603;
count__46066_46599 = G__46604;
i__46067_46600 = G__46605;
continue;
} else {
var temp__5804__auto___46606 = cljs.core.seq(seq__46064_46597);
if(temp__5804__auto___46606){
var seq__46064_46607__$1 = temp__5804__auto___46606;
if(cljs.core.chunked_seq_QMARK_(seq__46064_46607__$1)){
var c__5568__auto___46608 = cljs.core.chunk_first(seq__46064_46607__$1);
var G__46609 = cljs.core.chunk_rest(seq__46064_46607__$1);
var G__46610 = c__5568__auto___46608;
var G__46611 = cljs.core.count(c__5568__auto___46608);
var G__46612 = (0);
seq__46064_46597 = G__46609;
chunk__46065_46598 = G__46610;
count__46066_46599 = G__46611;
i__46067_46600 = G__46612;
continue;
} else {
var node_46613 = cljs.core.first(seq__46064_46607__$1);
fragment.appendChild(shadow.dom._to_dom(node_46613));


var G__46614 = cljs.core.next(seq__46064_46607__$1);
var G__46615 = null;
var G__46616 = (0);
var G__46617 = (0);
seq__46064_46597 = G__46614;
chunk__46065_46598 = G__46615;
count__46066_46599 = G__46616;
i__46067_46600 = G__46617;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq46063){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46063));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__46081_46618 = cljs.core.seq(scripts);
var chunk__46082_46619 = null;
var count__46083_46620 = (0);
var i__46084_46621 = (0);
while(true){
if((i__46084_46621 < count__46083_46620)){
var vec__46100_46622 = chunk__46082_46619.cljs$core$IIndexed$_nth$arity$2(null,i__46084_46621);
var script_tag_46623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46100_46622,(0),null);
var script_body_46624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46100_46622,(1),null);
eval(script_body_46624);


var G__46625 = seq__46081_46618;
var G__46626 = chunk__46082_46619;
var G__46627 = count__46083_46620;
var G__46628 = (i__46084_46621 + (1));
seq__46081_46618 = G__46625;
chunk__46082_46619 = G__46626;
count__46083_46620 = G__46627;
i__46084_46621 = G__46628;
continue;
} else {
var temp__5804__auto___46629 = cljs.core.seq(seq__46081_46618);
if(temp__5804__auto___46629){
var seq__46081_46630__$1 = temp__5804__auto___46629;
if(cljs.core.chunked_seq_QMARK_(seq__46081_46630__$1)){
var c__5568__auto___46631 = cljs.core.chunk_first(seq__46081_46630__$1);
var G__46632 = cljs.core.chunk_rest(seq__46081_46630__$1);
var G__46633 = c__5568__auto___46631;
var G__46634 = cljs.core.count(c__5568__auto___46631);
var G__46635 = (0);
seq__46081_46618 = G__46632;
chunk__46082_46619 = G__46633;
count__46083_46620 = G__46634;
i__46084_46621 = G__46635;
continue;
} else {
var vec__46103_46636 = cljs.core.first(seq__46081_46630__$1);
var script_tag_46637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46103_46636,(0),null);
var script_body_46638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46103_46636,(1),null);
eval(script_body_46638);


var G__46639 = cljs.core.next(seq__46081_46630__$1);
var G__46640 = null;
var G__46641 = (0);
var G__46642 = (0);
seq__46081_46618 = G__46639;
chunk__46082_46619 = G__46640;
count__46083_46620 = G__46641;
i__46084_46621 = G__46642;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__46106){
var vec__46107 = p__46106;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46107,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46107,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__46111 = arguments.length;
switch (G__46111) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__46127 = cljs.core.seq(style_keys);
var chunk__46128 = null;
var count__46129 = (0);
var i__46130 = (0);
while(true){
if((i__46130 < count__46129)){
var it = chunk__46128.cljs$core$IIndexed$_nth$arity$2(null,i__46130);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46644 = seq__46127;
var G__46645 = chunk__46128;
var G__46646 = count__46129;
var G__46647 = (i__46130 + (1));
seq__46127 = G__46644;
chunk__46128 = G__46645;
count__46129 = G__46646;
i__46130 = G__46647;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46127);
if(temp__5804__auto__){
var seq__46127__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46127__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46127__$1);
var G__46648 = cljs.core.chunk_rest(seq__46127__$1);
var G__46649 = c__5568__auto__;
var G__46650 = cljs.core.count(c__5568__auto__);
var G__46651 = (0);
seq__46127 = G__46648;
chunk__46128 = G__46649;
count__46129 = G__46650;
i__46130 = G__46651;
continue;
} else {
var it = cljs.core.first(seq__46127__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46652 = cljs.core.next(seq__46127__$1);
var G__46653 = null;
var G__46654 = (0);
var G__46655 = (0);
seq__46127 = G__46652;
chunk__46128 = G__46653;
count__46129 = G__46654;
i__46130 = G__46655;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k46141,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__46156 = k46141;
var G__46156__$1 = (((G__46156 instanceof cljs.core.Keyword))?G__46156.fqn:null);
switch (G__46156__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46141,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__46159){
var vec__46160 = p__46159;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46160,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46160,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46140){
var self__ = this;
var G__46140__$1 = this;
return (new cljs.core.RecordIter((0),G__46140__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46142,other46143){
var self__ = this;
var this46142__$1 = this;
return (((!((other46143 == null)))) && ((((this46142__$1.constructor === other46143.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46142__$1.x,other46143.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46142__$1.y,other46143.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46142__$1.__extmap,other46143.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k46141){
var self__ = this;
var this__5350__auto____$1 = this;
var G__46188 = k46141;
var G__46188__$1 = (((G__46188 instanceof cljs.core.Keyword))?G__46188.fqn:null);
switch (G__46188__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46141);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__46140){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__46189 = cljs.core.keyword_identical_QMARK_;
var expr__46190 = k__5352__auto__;
if(cljs.core.truth_((pred__46189.cljs$core$IFn$_invoke$arity$2 ? pred__46189.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__46190) : pred__46189.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__46190)))){
return (new shadow.dom.Coordinate(G__46140,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46189.cljs$core$IFn$_invoke$arity$2 ? pred__46189.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__46190) : pred__46189.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__46190)))){
return (new shadow.dom.Coordinate(self__.x,G__46140,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__46140),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__46140){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__46140,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__46146){
var extmap__5385__auto__ = (function (){var G__46204 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46146,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__46146)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46204);
} else {
return G__46204;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__46146),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__46146),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k46217,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__46225 = k46217;
var G__46225__$1 = (((G__46225 instanceof cljs.core.Keyword))?G__46225.fqn:null);
switch (G__46225__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46217,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__46226){
var vec__46227 = p__46226;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46227,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46227,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46216){
var self__ = this;
var G__46216__$1 = this;
return (new cljs.core.RecordIter((0),G__46216__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46218,other46219){
var self__ = this;
var this46218__$1 = this;
return (((!((other46219 == null)))) && ((((this46218__$1.constructor === other46219.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46218__$1.w,other46219.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46218__$1.h,other46219.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46218__$1.__extmap,other46219.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k46217){
var self__ = this;
var this__5350__auto____$1 = this;
var G__46230 = k46217;
var G__46230__$1 = (((G__46230 instanceof cljs.core.Keyword))?G__46230.fqn:null);
switch (G__46230__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46217);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__46216){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__46231 = cljs.core.keyword_identical_QMARK_;
var expr__46232 = k__5352__auto__;
if(cljs.core.truth_((pred__46231.cljs$core$IFn$_invoke$arity$2 ? pred__46231.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__46232) : pred__46231.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__46232)))){
return (new shadow.dom.Size(G__46216,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46231.cljs$core$IFn$_invoke$arity$2 ? pred__46231.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__46232) : pred__46231.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__46232)))){
return (new shadow.dom.Size(self__.w,G__46216,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__46216),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__46216){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__46216,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__46223){
var extmap__5385__auto__ = (function (){var G__46288 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46223,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__46223)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46288);
} else {
return G__46288;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__46223),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__46223),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__46677 = (i + (1));
var G__46678 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__46677;
ret = G__46678;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46293){
var vec__46294 = p__46293;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46294,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46294,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__46298 = arguments.length;
switch (G__46298) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__46680 = ps;
var G__46681 = (i + (1));
el__$1 = G__46680;
i = G__46681;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__46346 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46346,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46346,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46346,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__46349_46682 = cljs.core.seq(props);
var chunk__46350_46683 = null;
var count__46351_46684 = (0);
var i__46352_46685 = (0);
while(true){
if((i__46352_46685 < count__46351_46684)){
var vec__46359_46686 = chunk__46350_46683.cljs$core$IIndexed$_nth$arity$2(null,i__46352_46685);
var k_46687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46359_46686,(0),null);
var v_46688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46359_46686,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_46687);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46687),v_46688);


var G__46689 = seq__46349_46682;
var G__46690 = chunk__46350_46683;
var G__46691 = count__46351_46684;
var G__46692 = (i__46352_46685 + (1));
seq__46349_46682 = G__46689;
chunk__46350_46683 = G__46690;
count__46351_46684 = G__46691;
i__46352_46685 = G__46692;
continue;
} else {
var temp__5804__auto___46693 = cljs.core.seq(seq__46349_46682);
if(temp__5804__auto___46693){
var seq__46349_46694__$1 = temp__5804__auto___46693;
if(cljs.core.chunked_seq_QMARK_(seq__46349_46694__$1)){
var c__5568__auto___46695 = cljs.core.chunk_first(seq__46349_46694__$1);
var G__46696 = cljs.core.chunk_rest(seq__46349_46694__$1);
var G__46697 = c__5568__auto___46695;
var G__46698 = cljs.core.count(c__5568__auto___46695);
var G__46699 = (0);
seq__46349_46682 = G__46696;
chunk__46350_46683 = G__46697;
count__46351_46684 = G__46698;
i__46352_46685 = G__46699;
continue;
} else {
var vec__46362_46700 = cljs.core.first(seq__46349_46694__$1);
var k_46701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46362_46700,(0),null);
var v_46702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46362_46700,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_46701);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46701),v_46702);


var G__46703 = cljs.core.next(seq__46349_46694__$1);
var G__46704 = null;
var G__46705 = (0);
var G__46706 = (0);
seq__46349_46682 = G__46703;
chunk__46350_46683 = G__46704;
count__46351_46684 = G__46705;
i__46352_46685 = G__46706;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__46366 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46366,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46366,(1),null);
var seq__46369_46713 = cljs.core.seq(node_children);
var chunk__46371_46714 = null;
var count__46372_46715 = (0);
var i__46373_46716 = (0);
while(true){
if((i__46373_46716 < count__46372_46715)){
var child_struct_46717 = chunk__46371_46714.cljs$core$IIndexed$_nth$arity$2(null,i__46373_46716);
if((!((child_struct_46717 == null)))){
if(typeof child_struct_46717 === 'string'){
var text_46718 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46718),child_struct_46717].join(''));
} else {
var children_46719 = shadow.dom.svg_node(child_struct_46717);
if(cljs.core.seq_QMARK_(children_46719)){
var seq__46387_46720 = cljs.core.seq(children_46719);
var chunk__46389_46721 = null;
var count__46390_46722 = (0);
var i__46391_46723 = (0);
while(true){
if((i__46391_46723 < count__46390_46722)){
var child_46724 = chunk__46389_46721.cljs$core$IIndexed$_nth$arity$2(null,i__46391_46723);
if(cljs.core.truth_(child_46724)){
node.appendChild(child_46724);


var G__46725 = seq__46387_46720;
var G__46726 = chunk__46389_46721;
var G__46727 = count__46390_46722;
var G__46728 = (i__46391_46723 + (1));
seq__46387_46720 = G__46725;
chunk__46389_46721 = G__46726;
count__46390_46722 = G__46727;
i__46391_46723 = G__46728;
continue;
} else {
var G__46729 = seq__46387_46720;
var G__46730 = chunk__46389_46721;
var G__46731 = count__46390_46722;
var G__46732 = (i__46391_46723 + (1));
seq__46387_46720 = G__46729;
chunk__46389_46721 = G__46730;
count__46390_46722 = G__46731;
i__46391_46723 = G__46732;
continue;
}
} else {
var temp__5804__auto___46733 = cljs.core.seq(seq__46387_46720);
if(temp__5804__auto___46733){
var seq__46387_46734__$1 = temp__5804__auto___46733;
if(cljs.core.chunked_seq_QMARK_(seq__46387_46734__$1)){
var c__5568__auto___46735 = cljs.core.chunk_first(seq__46387_46734__$1);
var G__46736 = cljs.core.chunk_rest(seq__46387_46734__$1);
var G__46737 = c__5568__auto___46735;
var G__46738 = cljs.core.count(c__5568__auto___46735);
var G__46739 = (0);
seq__46387_46720 = G__46736;
chunk__46389_46721 = G__46737;
count__46390_46722 = G__46738;
i__46391_46723 = G__46739;
continue;
} else {
var child_46740 = cljs.core.first(seq__46387_46734__$1);
if(cljs.core.truth_(child_46740)){
node.appendChild(child_46740);


var G__46741 = cljs.core.next(seq__46387_46734__$1);
var G__46742 = null;
var G__46743 = (0);
var G__46744 = (0);
seq__46387_46720 = G__46741;
chunk__46389_46721 = G__46742;
count__46390_46722 = G__46743;
i__46391_46723 = G__46744;
continue;
} else {
var G__46745 = cljs.core.next(seq__46387_46734__$1);
var G__46746 = null;
var G__46747 = (0);
var G__46748 = (0);
seq__46387_46720 = G__46745;
chunk__46389_46721 = G__46746;
count__46390_46722 = G__46747;
i__46391_46723 = G__46748;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46719);
}
}


var G__46749 = seq__46369_46713;
var G__46750 = chunk__46371_46714;
var G__46751 = count__46372_46715;
var G__46752 = (i__46373_46716 + (1));
seq__46369_46713 = G__46749;
chunk__46371_46714 = G__46750;
count__46372_46715 = G__46751;
i__46373_46716 = G__46752;
continue;
} else {
var G__46753 = seq__46369_46713;
var G__46754 = chunk__46371_46714;
var G__46755 = count__46372_46715;
var G__46756 = (i__46373_46716 + (1));
seq__46369_46713 = G__46753;
chunk__46371_46714 = G__46754;
count__46372_46715 = G__46755;
i__46373_46716 = G__46756;
continue;
}
} else {
var temp__5804__auto___46757 = cljs.core.seq(seq__46369_46713);
if(temp__5804__auto___46757){
var seq__46369_46758__$1 = temp__5804__auto___46757;
if(cljs.core.chunked_seq_QMARK_(seq__46369_46758__$1)){
var c__5568__auto___46760 = cljs.core.chunk_first(seq__46369_46758__$1);
var G__46761 = cljs.core.chunk_rest(seq__46369_46758__$1);
var G__46762 = c__5568__auto___46760;
var G__46763 = cljs.core.count(c__5568__auto___46760);
var G__46764 = (0);
seq__46369_46713 = G__46761;
chunk__46371_46714 = G__46762;
count__46372_46715 = G__46763;
i__46373_46716 = G__46764;
continue;
} else {
var child_struct_46768 = cljs.core.first(seq__46369_46758__$1);
if((!((child_struct_46768 == null)))){
if(typeof child_struct_46768 === 'string'){
var text_46769 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46769),child_struct_46768].join(''));
} else {
var children_46770 = shadow.dom.svg_node(child_struct_46768);
if(cljs.core.seq_QMARK_(children_46770)){
var seq__46393_46771 = cljs.core.seq(children_46770);
var chunk__46395_46772 = null;
var count__46396_46773 = (0);
var i__46397_46774 = (0);
while(true){
if((i__46397_46774 < count__46396_46773)){
var child_46775 = chunk__46395_46772.cljs$core$IIndexed$_nth$arity$2(null,i__46397_46774);
if(cljs.core.truth_(child_46775)){
node.appendChild(child_46775);


var G__46776 = seq__46393_46771;
var G__46777 = chunk__46395_46772;
var G__46778 = count__46396_46773;
var G__46779 = (i__46397_46774 + (1));
seq__46393_46771 = G__46776;
chunk__46395_46772 = G__46777;
count__46396_46773 = G__46778;
i__46397_46774 = G__46779;
continue;
} else {
var G__46780 = seq__46393_46771;
var G__46781 = chunk__46395_46772;
var G__46782 = count__46396_46773;
var G__46783 = (i__46397_46774 + (1));
seq__46393_46771 = G__46780;
chunk__46395_46772 = G__46781;
count__46396_46773 = G__46782;
i__46397_46774 = G__46783;
continue;
}
} else {
var temp__5804__auto___46784__$1 = cljs.core.seq(seq__46393_46771);
if(temp__5804__auto___46784__$1){
var seq__46393_46785__$1 = temp__5804__auto___46784__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46393_46785__$1)){
var c__5568__auto___46786 = cljs.core.chunk_first(seq__46393_46785__$1);
var G__46787 = cljs.core.chunk_rest(seq__46393_46785__$1);
var G__46788 = c__5568__auto___46786;
var G__46789 = cljs.core.count(c__5568__auto___46786);
var G__46790 = (0);
seq__46393_46771 = G__46787;
chunk__46395_46772 = G__46788;
count__46396_46773 = G__46789;
i__46397_46774 = G__46790;
continue;
} else {
var child_46791 = cljs.core.first(seq__46393_46785__$1);
if(cljs.core.truth_(child_46791)){
node.appendChild(child_46791);


var G__46792 = cljs.core.next(seq__46393_46785__$1);
var G__46793 = null;
var G__46794 = (0);
var G__46795 = (0);
seq__46393_46771 = G__46792;
chunk__46395_46772 = G__46793;
count__46396_46773 = G__46794;
i__46397_46774 = G__46795;
continue;
} else {
var G__46796 = cljs.core.next(seq__46393_46785__$1);
var G__46797 = null;
var G__46798 = (0);
var G__46799 = (0);
seq__46393_46771 = G__46796;
chunk__46395_46772 = G__46797;
count__46396_46773 = G__46798;
i__46397_46774 = G__46799;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46770);
}
}


var G__46800 = cljs.core.next(seq__46369_46758__$1);
var G__46801 = null;
var G__46802 = (0);
var G__46803 = (0);
seq__46369_46713 = G__46800;
chunk__46371_46714 = G__46801;
count__46372_46715 = G__46802;
i__46373_46716 = G__46803;
continue;
} else {
var G__46804 = cljs.core.next(seq__46369_46758__$1);
var G__46805 = null;
var G__46806 = (0);
var G__46807 = (0);
seq__46369_46713 = G__46804;
chunk__46371_46714 = G__46805;
count__46372_46715 = G__46806;
i__46373_46716 = G__46807;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46808 = arguments.length;
var i__5770__auto___46809 = (0);
while(true){
if((i__5770__auto___46809 < len__5769__auto___46808)){
args__5775__auto__.push((arguments[i__5770__auto___46809]));

var G__46810 = (i__5770__auto___46809 + (1));
i__5770__auto___46809 = G__46810;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq46399){
var G__46400 = cljs.core.first(seq46399);
var seq46399__$1 = cljs.core.next(seq46399);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46400,seq46399__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__46402 = arguments.length;
switch (G__46402) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__44187__auto___46812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44188__auto__ = (function (){var switch__44072__auto__ = (function (state_46407){
var state_val_46408 = (state_46407[(1)]);
if((state_val_46408 === (1))){
var state_46407__$1 = state_46407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46407__$1,(2),once_or_cleanup);
} else {
if((state_val_46408 === (2))){
var inst_46404 = (state_46407[(2)]);
var inst_46405 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_46407__$1 = (function (){var statearr_46409 = state_46407;
(statearr_46409[(7)] = inst_46404);

return statearr_46409;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46407__$1,inst_46405);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__44073__auto__ = null;
var shadow$dom$state_machine__44073__auto____0 = (function (){
var statearr_46410 = [null,null,null,null,null,null,null,null];
(statearr_46410[(0)] = shadow$dom$state_machine__44073__auto__);

(statearr_46410[(1)] = (1));

return statearr_46410;
});
var shadow$dom$state_machine__44073__auto____1 = (function (state_46407){
while(true){
var ret_value__44074__auto__ = (function (){try{while(true){
var result__44075__auto__ = switch__44072__auto__(state_46407);
if(cljs.core.keyword_identical_QMARK_(result__44075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44075__auto__;
}
break;
}
}catch (e46411){var ex__44076__auto__ = e46411;
var statearr_46412_46813 = state_46407;
(statearr_46412_46813[(2)] = ex__44076__auto__);


if(cljs.core.seq((state_46407[(4)]))){
var statearr_46413_46814 = state_46407;
(statearr_46413_46814[(1)] = cljs.core.first((state_46407[(4)])));

} else {
throw ex__44076__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46815 = state_46407;
state_46407 = G__46815;
continue;
} else {
return ret_value__44074__auto__;
}
break;
}
});
shadow$dom$state_machine__44073__auto__ = function(state_46407){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__44073__auto____0.call(this);
case 1:
return shadow$dom$state_machine__44073__auto____1.call(this,state_46407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__44073__auto____0;
shadow$dom$state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__44073__auto____1;
return shadow$dom$state_machine__44073__auto__;
})()
})();
var state__44189__auto__ = (function (){var statearr_46414 = f__44188__auto__();
(statearr_46414[(6)] = c__44187__auto___46812);

return statearr_46414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44189__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
