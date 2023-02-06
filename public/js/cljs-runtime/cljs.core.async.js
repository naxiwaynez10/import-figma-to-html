goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44249 = arguments.length;
switch (G__44249) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44250 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44250 = (function (f,blockable,meta44251){
this.f = f;
this.blockable = blockable;
this.meta44251 = meta44251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44252,meta44251__$1){
var self__ = this;
var _44252__$1 = this;
return (new cljs.core.async.t_cljs$core$async44250(self__.f,self__.blockable,meta44251__$1));
}));

(cljs.core.async.t_cljs$core$async44250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44252){
var self__ = this;
var _44252__$1 = this;
return self__.meta44251;
}));

(cljs.core.async.t_cljs$core$async44250.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44250.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44250.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async44250.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async44250.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44251","meta44251",1559676189,null)], null);
}));

(cljs.core.async.t_cljs$core$async44250.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44250.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44250");

(cljs.core.async.t_cljs$core$async44250.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44250");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44250.
 */
cljs.core.async.__GT_t_cljs$core$async44250 = (function cljs$core$async$__GT_t_cljs$core$async44250(f__$1,blockable__$1,meta44251){
return (new cljs.core.async.t_cljs$core$async44250(f__$1,blockable__$1,meta44251));
});

}

return (new cljs.core.async.t_cljs$core$async44250(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__44264 = arguments.length;
switch (G__44264) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__44266 = arguments.length;
switch (G__44266) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__44268 = arguments.length;
switch (G__44268) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_45726 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45726) : fn1.call(null,val_45726));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45726) : fn1.call(null,val_45726));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__44270 = arguments.length;
switch (G__44270) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___45728 = n;
var x_45729 = (0);
while(true){
if((x_45729 < n__5636__auto___45728)){
(a[x_45729] = x_45729);

var G__45730 = (x_45729 + (1));
x_45729 = G__45730;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44271 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44271 = (function (flag,meta44272){
this.flag = flag;
this.meta44272 = meta44272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44273,meta44272__$1){
var self__ = this;
var _44273__$1 = this;
return (new cljs.core.async.t_cljs$core$async44271(self__.flag,meta44272__$1));
}));

(cljs.core.async.t_cljs$core$async44271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44273){
var self__ = this;
var _44273__$1 = this;
return self__.meta44272;
}));

(cljs.core.async.t_cljs$core$async44271.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44271.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44271.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44271.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async44271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44272","meta44272",2084436581,null)], null);
}));

(cljs.core.async.t_cljs$core$async44271.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44271");

(cljs.core.async.t_cljs$core$async44271.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44271");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44271.
 */
cljs.core.async.__GT_t_cljs$core$async44271 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44271(flag__$1,meta44272){
return (new cljs.core.async.t_cljs$core$async44271(flag__$1,meta44272));
});

}

return (new cljs.core.async.t_cljs$core$async44271(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44274 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44274 = (function (flag,cb,meta44275){
this.flag = flag;
this.cb = cb;
this.meta44275 = meta44275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44276,meta44275__$1){
var self__ = this;
var _44276__$1 = this;
return (new cljs.core.async.t_cljs$core$async44274(self__.flag,self__.cb,meta44275__$1));
}));

(cljs.core.async.t_cljs$core$async44274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44276){
var self__ = this;
var _44276__$1 = this;
return self__.meta44275;
}));

(cljs.core.async.t_cljs$core$async44274.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44274.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44274.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44274.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async44274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44275","meta44275",-281805688,null)], null);
}));

(cljs.core.async.t_cljs$core$async44274.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44274");

(cljs.core.async.t_cljs$core$async44274.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44274");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44274.
 */
cljs.core.async.__GT_t_cljs$core$async44274 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44274(flag__$1,cb__$1,meta44275){
return (new cljs.core.async.t_cljs$core$async44274(flag__$1,cb__$1,meta44275));
});

}

return (new cljs.core.async.t_cljs$core$async44274(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44283_SHARP_){
var G__44286 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44283_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44286) : fret.call(null,G__44286));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44284_SHARP_){
var G__44287 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44284_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44287) : fret.call(null,G__44287));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45734 = (i + (1));
i = G__45734;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45739 = arguments.length;
var i__5770__auto___45740 = (0);
while(true){
if((i__5770__auto___45740 < len__5769__auto___45739)){
args__5775__auto__.push((arguments[i__5770__auto___45740]));

var G__45741 = (i__5770__auto___45740 + (1));
i__5770__auto___45740 = G__45741;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44294){
var map__44295 = p__44294;
var map__44295__$1 = cljs.core.__destructure_map(map__44295);
var opts = map__44295__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44292){
var G__44293 = cljs.core.first(seq44292);
var seq44292__$1 = cljs.core.next(seq44292);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44293,seq44292__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__44297 = arguments.length;
switch (G__44297) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44187__auto___45743 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44188__auto__ = (function (){var switch__44072__auto__ = (function (state_44321){
var state_val_44322 = (state_44321[(1)]);
if((state_val_44322 === (7))){
var inst_44317 = (state_44321[(2)]);
var state_44321__$1 = state_44321;
var statearr_44323_45744 = state_44321__$1;
(statearr_44323_45744[(2)] = inst_44317);

(statearr_44323_45744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44322 === (1))){
var state_44321__$1 = state_44321;
var statearr_44324_45745 = state_44321__$1;
(statearr_44324_45745[(2)] = null);

(statearr_44324_45745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44322 === (4))){
var inst_44300 = (state_44321[(7)]);
var inst_44300__$1 = (state_44321[(2)]);
var inst_44301 = (inst_44300__$1 == null);
var state_44321__$1 = (function (){var statearr_44325 = state_44321;
(statearr_44325[(7)] = inst_44300__$1);

return statearr_44325;
})();
if(cljs.core.truth_(inst_44301)){
var statearr_44326_45746 = state_44321__$1;
(statearr_44326_45746[(1)] = (5));

} else {
var statearr_44327_45747 = state_44321__$1;
(statearr_44327_45747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44322 === (13))){
var state_44321__$1 = state_44321;
var statearr_44328_45748 = state_44321__$1;
(statearr_44328_45748[(2)] = null);

(statearr_44328_45748[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44322 === (6))){
var inst_44300 = (state_44321[(7)]);
var state_44321__$1 = state_44321;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44321__$1,(11),to,inst_44300);
} else {
if((state_val_44322 === (3))){
var inst_44319 = (state_44321[(2)]);
var state_44321__$1 = state_44321;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44321__$1,inst_44319);
} else {
if((state_val_44322 === (12))){
var state_44321__$1 = state_44321;
var statearr_44329_45749 = state_44321__$1;
(statearr_44329_45749[(2)] = null);

(statearr_44329_45749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44322 === (2))){
var state_44321__$1 = state_44321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44321__$1,(4),from);
} else {
if((state_val_44322 === (11))){
var inst_44310 = (state_44321[(2)]);
var state_44321__$1 = state_44321;
if(cljs.core.truth_(inst_44310)){
var statearr_44330_45750 = state_44321__$1;
(statearr_44330_45750[(1)] = (12));

} else {
var statearr_44331_45751 = state_44321__$1;
(statearr_44331_45751[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44322 === (9))){
var state_44321__$1 = state_44321;
var statearr_44332_45752 = state_44321__$1;
(statearr_44332_45752[(2)] = null);

(statearr_44332_45752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44322 === (5))){
var state_44321__$1 = state_44321;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44333_45753 = state_44321__$1;
(statearr_44333_45753[(1)] = (8));

} else {
var statearr_44334_45754 = state_44321__$1;
(statearr_44334_45754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44322 === (14))){
var inst_44315 = (state_44321[(2)]);
var state_44321__$1 = state_44321;
var statearr_44335_45755 = state_44321__$1;
(statearr_44335_45755[(2)] = inst_44315);

(statearr_44335_45755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44322 === (10))){
var inst_44307 = (state_44321[(2)]);
var state_44321__$1 = state_44321;
var statearr_44336_45756 = state_44321__$1;
(statearr_44336_45756[(2)] = inst_44307);

(statearr_44336_45756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44322 === (8))){
var inst_44304 = cljs.core.async.close_BANG_(to);
var state_44321__$1 = state_44321;
var statearr_44337_45757 = state_44321__$1;
(statearr_44337_45757[(2)] = inst_44304);

(statearr_44337_45757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44073__auto__ = null;
var cljs$core$async$state_machine__44073__auto____0 = (function (){
var statearr_44338 = [null,null,null,null,null,null,null,null];
(statearr_44338[(0)] = cljs$core$async$state_machine__44073__auto__);

(statearr_44338[(1)] = (1));

return statearr_44338;
});
var cljs$core$async$state_machine__44073__auto____1 = (function (state_44321){
while(true){
var ret_value__44074__auto__ = (function (){try{while(true){
var result__44075__auto__ = switch__44072__auto__(state_44321);
if(cljs.core.keyword_identical_QMARK_(result__44075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44075__auto__;
}
break;
}
}catch (e44339){var ex__44076__auto__ = e44339;
var statearr_44340_45760 = state_44321;
(statearr_44340_45760[(2)] = ex__44076__auto__);


if(cljs.core.seq((state_44321[(4)]))){
var statearr_44341_45761 = state_44321;
(statearr_44341_45761[(1)] = cljs.core.first((state_44321[(4)])));

} else {
throw ex__44076__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45762 = state_44321;
state_44321 = G__45762;
continue;
} else {
return ret_value__44074__auto__;
}
break;
}
});
cljs$core$async$state_machine__44073__auto__ = function(state_44321){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44073__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44073__auto____1.call(this,state_44321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44073__auto____0;
cljs$core$async$state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44073__auto____1;
return cljs$core$async$state_machine__44073__auto__;
})()
})();
var state__44189__auto__ = (function (){var statearr_44342 = f__44188__auto__();
(statearr_44342[(6)] = c__44187__auto___45743);

return statearr_44342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44189__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__44343){
var vec__44344 = p__44343;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44344,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44344,(1),null);
var job = vec__44344;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__44187__auto___45763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44188__auto__ = (function (){var switch__44072__auto__ = (function (state_44351){
var state_val_44352 = (state_44351[(1)]);
if((state_val_44352 === (1))){
var state_44351__$1 = state_44351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44351__$1,(2),res,v);
} else {
if((state_val_44352 === (2))){
var inst_44348 = (state_44351[(2)]);
var inst_44349 = cljs.core.async.close_BANG_(res);
var state_44351__$1 = (function (){var statearr_44353 = state_44351;
(statearr_44353[(7)] = inst_44348);

return statearr_44353;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44351__$1,inst_44349);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____0 = (function (){
var statearr_44354 = [null,null,null,null,null,null,null,null];
(statearr_44354[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__);

(statearr_44354[(1)] = (1));

return statearr_44354;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____1 = (function (state_44351){
while(true){
var ret_value__44074__auto__ = (function (){try{while(true){
var result__44075__auto__ = switch__44072__auto__(state_44351);
if(cljs.core.keyword_identical_QMARK_(result__44075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44075__auto__;
}
break;
}
}catch (e44355){var ex__44076__auto__ = e44355;
var statearr_44356_45764 = state_44351;
(statearr_44356_45764[(2)] = ex__44076__auto__);


if(cljs.core.seq((state_44351[(4)]))){
var statearr_44357_45765 = state_44351;
(statearr_44357_45765[(1)] = cljs.core.first((state_44351[(4)])));

} else {
throw ex__44076__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45766 = state_44351;
state_44351 = G__45766;
continue;
} else {
return ret_value__44074__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__ = function(state_44351){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____1.call(this,state_44351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__;
})()
})();
var state__44189__auto__ = (function (){var statearr_44358 = f__44188__auto__();
(statearr_44358[(6)] = c__44187__auto___45763);

return statearr_44358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44189__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44359){
var vec__44360 = p__44359;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44360,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44360,(1),null);
var job = vec__44360;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___45767 = n;
var __45768 = (0);
while(true){
if((__45768 < n__5636__auto___45767)){
var G__44363_45769 = type;
var G__44363_45770__$1 = (((G__44363_45769 instanceof cljs.core.Keyword))?G__44363_45769.fqn:null);
switch (G__44363_45770__$1) {
case "compute":
var c__44187__auto___45772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45768,c__44187__auto___45772,G__44363_45769,G__44363_45770__$1,n__5636__auto___45767,jobs,results,process__$1,async){
return (function (){
var f__44188__auto__ = (function (){var switch__44072__auto__ = ((function (__45768,c__44187__auto___45772,G__44363_45769,G__44363_45770__$1,n__5636__auto___45767,jobs,results,process__$1,async){
return (function (state_44376){
var state_val_44377 = (state_44376[(1)]);
if((state_val_44377 === (1))){
var state_44376__$1 = state_44376;
var statearr_44378_45773 = state_44376__$1;
(statearr_44378_45773[(2)] = null);

(statearr_44378_45773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44377 === (2))){
var state_44376__$1 = state_44376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44376__$1,(4),jobs);
} else {
if((state_val_44377 === (3))){
var inst_44374 = (state_44376[(2)]);
var state_44376__$1 = state_44376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44376__$1,inst_44374);
} else {
if((state_val_44377 === (4))){
var inst_44366 = (state_44376[(2)]);
var inst_44367 = process__$1(inst_44366);
var state_44376__$1 = state_44376;
if(cljs.core.truth_(inst_44367)){
var statearr_44379_45774 = state_44376__$1;
(statearr_44379_45774[(1)] = (5));

} else {
var statearr_44380_45775 = state_44376__$1;
(statearr_44380_45775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44377 === (5))){
var state_44376__$1 = state_44376;
var statearr_44381_45776 = state_44376__$1;
(statearr_44381_45776[(2)] = null);

(statearr_44381_45776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44377 === (6))){
var state_44376__$1 = state_44376;
var statearr_44382_45777 = state_44376__$1;
(statearr_44382_45777[(2)] = null);

(statearr_44382_45777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44377 === (7))){
var inst_44372 = (state_44376[(2)]);
var state_44376__$1 = state_44376;
var statearr_44383_45778 = state_44376__$1;
(statearr_44383_45778[(2)] = inst_44372);

(statearr_44383_45778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__45768,c__44187__auto___45772,G__44363_45769,G__44363_45770__$1,n__5636__auto___45767,jobs,results,process__$1,async))
;
return ((function (__45768,switch__44072__auto__,c__44187__auto___45772,G__44363_45769,G__44363_45770__$1,n__5636__auto___45767,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____0 = (function (){
var statearr_44384 = [null,null,null,null,null,null,null];
(statearr_44384[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__);

(statearr_44384[(1)] = (1));

return statearr_44384;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____1 = (function (state_44376){
while(true){
var ret_value__44074__auto__ = (function (){try{while(true){
var result__44075__auto__ = switch__44072__auto__(state_44376);
if(cljs.core.keyword_identical_QMARK_(result__44075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44075__auto__;
}
break;
}
}catch (e44385){var ex__44076__auto__ = e44385;
var statearr_44386_45779 = state_44376;
(statearr_44386_45779[(2)] = ex__44076__auto__);


if(cljs.core.seq((state_44376[(4)]))){
var statearr_44387_45780 = state_44376;
(statearr_44387_45780[(1)] = cljs.core.first((state_44376[(4)])));

} else {
throw ex__44076__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45781 = state_44376;
state_44376 = G__45781;
continue;
} else {
return ret_value__44074__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__ = function(state_44376){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____1.call(this,state_44376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__;
})()
;})(__45768,switch__44072__auto__,c__44187__auto___45772,G__44363_45769,G__44363_45770__$1,n__5636__auto___45767,jobs,results,process__$1,async))
})();
var state__44189__auto__ = (function (){var statearr_44388 = f__44188__auto__();
(statearr_44388[(6)] = c__44187__auto___45772);

return statearr_44388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44189__auto__);
});})(__45768,c__44187__auto___45772,G__44363_45769,G__44363_45770__$1,n__5636__auto___45767,jobs,results,process__$1,async))
);


break;
case "async":
var c__44187__auto___45782 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45768,c__44187__auto___45782,G__44363_45769,G__44363_45770__$1,n__5636__auto___45767,jobs,results,process__$1,async){
return (function (){
var f__44188__auto__ = (function (){var switch__44072__auto__ = ((function (__45768,c__44187__auto___45782,G__44363_45769,G__44363_45770__$1,n__5636__auto___45767,jobs,results,process__$1,async){
return (function (state_44401){
var state_val_44402 = (state_44401[(1)]);
if((state_val_44402 === (1))){
var state_44401__$1 = state_44401;
var statearr_44403_45783 = state_44401__$1;
(statearr_44403_45783[(2)] = null);

(statearr_44403_45783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44402 === (2))){
var state_44401__$1 = state_44401;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44401__$1,(4),jobs);
} else {
if((state_val_44402 === (3))){
var inst_44399 = (state_44401[(2)]);
var state_44401__$1 = state_44401;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44401__$1,inst_44399);
} else {
if((state_val_44402 === (4))){
var inst_44391 = (state_44401[(2)]);
var inst_44392 = async(inst_44391);
var state_44401__$1 = state_44401;
if(cljs.core.truth_(inst_44392)){
var statearr_44404_45784 = state_44401__$1;
(statearr_44404_45784[(1)] = (5));

} else {
var statearr_44405_45785 = state_44401__$1;
(statearr_44405_45785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44402 === (5))){
var state_44401__$1 = state_44401;
var statearr_44406_45786 = state_44401__$1;
(statearr_44406_45786[(2)] = null);

(statearr_44406_45786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44402 === (6))){
var state_44401__$1 = state_44401;
var statearr_44407_45787 = state_44401__$1;
(statearr_44407_45787[(2)] = null);

(statearr_44407_45787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44402 === (7))){
var inst_44397 = (state_44401[(2)]);
var state_44401__$1 = state_44401;
var statearr_44408_45792 = state_44401__$1;
(statearr_44408_45792[(2)] = inst_44397);

(statearr_44408_45792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__45768,c__44187__auto___45782,G__44363_45769,G__44363_45770__$1,n__5636__auto___45767,jobs,results,process__$1,async))
;
return ((function (__45768,switch__44072__auto__,c__44187__auto___45782,G__44363_45769,G__44363_45770__$1,n__5636__auto___45767,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____0 = (function (){
var statearr_44409 = [null,null,null,null,null,null,null];
(statearr_44409[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__);

(statearr_44409[(1)] = (1));

return statearr_44409;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____1 = (function (state_44401){
while(true){
var ret_value__44074__auto__ = (function (){try{while(true){
var result__44075__auto__ = switch__44072__auto__(state_44401);
if(cljs.core.keyword_identical_QMARK_(result__44075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44075__auto__;
}
break;
}
}catch (e44410){var ex__44076__auto__ = e44410;
var statearr_44411_45812 = state_44401;
(statearr_44411_45812[(2)] = ex__44076__auto__);


if(cljs.core.seq((state_44401[(4)]))){
var statearr_44412_45813 = state_44401;
(statearr_44412_45813[(1)] = cljs.core.first((state_44401[(4)])));

} else {
throw ex__44076__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45814 = state_44401;
state_44401 = G__45814;
continue;
} else {
return ret_value__44074__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__ = function(state_44401){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____1.call(this,state_44401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__;
})()
;})(__45768,switch__44072__auto__,c__44187__auto___45782,G__44363_45769,G__44363_45770__$1,n__5636__auto___45767,jobs,results,process__$1,async))
})();
var state__44189__auto__ = (function (){var statearr_44413 = f__44188__auto__();
(statearr_44413[(6)] = c__44187__auto___45782);

return statearr_44413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44189__auto__);
});})(__45768,c__44187__auto___45782,G__44363_45769,G__44363_45770__$1,n__5636__auto___45767,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44363_45770__$1)].join('')));

}

var G__45815 = (__45768 + (1));
__45768 = G__45815;
continue;
} else {
}
break;
}

var c__44187__auto___45816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44188__auto__ = (function (){var switch__44072__auto__ = (function (state_44435){
var state_val_44436 = (state_44435[(1)]);
if((state_val_44436 === (7))){
var inst_44431 = (state_44435[(2)]);
var state_44435__$1 = state_44435;
var statearr_44437_45817 = state_44435__$1;
(statearr_44437_45817[(2)] = inst_44431);

(statearr_44437_45817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44436 === (1))){
var state_44435__$1 = state_44435;
var statearr_44438_45818 = state_44435__$1;
(statearr_44438_45818[(2)] = null);

(statearr_44438_45818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44436 === (4))){
var inst_44416 = (state_44435[(7)]);
var inst_44416__$1 = (state_44435[(2)]);
var inst_44417 = (inst_44416__$1 == null);
var state_44435__$1 = (function (){var statearr_44439 = state_44435;
(statearr_44439[(7)] = inst_44416__$1);

return statearr_44439;
})();
if(cljs.core.truth_(inst_44417)){
var statearr_44440_45819 = state_44435__$1;
(statearr_44440_45819[(1)] = (5));

} else {
var statearr_44441_45820 = state_44435__$1;
(statearr_44441_45820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44436 === (6))){
var inst_44416 = (state_44435[(7)]);
var inst_44421 = (state_44435[(8)]);
var inst_44421__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44422 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44423 = [inst_44416,inst_44421__$1];
var inst_44424 = (new cljs.core.PersistentVector(null,2,(5),inst_44422,inst_44423,null));
var state_44435__$1 = (function (){var statearr_44442 = state_44435;
(statearr_44442[(8)] = inst_44421__$1);

return statearr_44442;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44435__$1,(8),jobs,inst_44424);
} else {
if((state_val_44436 === (3))){
var inst_44433 = (state_44435[(2)]);
var state_44435__$1 = state_44435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44435__$1,inst_44433);
} else {
if((state_val_44436 === (2))){
var state_44435__$1 = state_44435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44435__$1,(4),from);
} else {
if((state_val_44436 === (9))){
var inst_44428 = (state_44435[(2)]);
var state_44435__$1 = (function (){var statearr_44443 = state_44435;
(statearr_44443[(9)] = inst_44428);

return statearr_44443;
})();
var statearr_44444_45821 = state_44435__$1;
(statearr_44444_45821[(2)] = null);

(statearr_44444_45821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44436 === (5))){
var inst_44419 = cljs.core.async.close_BANG_(jobs);
var state_44435__$1 = state_44435;
var statearr_44445_45825 = state_44435__$1;
(statearr_44445_45825[(2)] = inst_44419);

(statearr_44445_45825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44436 === (8))){
var inst_44421 = (state_44435[(8)]);
var inst_44426 = (state_44435[(2)]);
var state_44435__$1 = (function (){var statearr_44446 = state_44435;
(statearr_44446[(10)] = inst_44426);

return statearr_44446;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44435__$1,(9),results,inst_44421);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____0 = (function (){
var statearr_44447 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44447[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__);

(statearr_44447[(1)] = (1));

return statearr_44447;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____1 = (function (state_44435){
while(true){
var ret_value__44074__auto__ = (function (){try{while(true){
var result__44075__auto__ = switch__44072__auto__(state_44435);
if(cljs.core.keyword_identical_QMARK_(result__44075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44075__auto__;
}
break;
}
}catch (e44448){var ex__44076__auto__ = e44448;
var statearr_44449_45826 = state_44435;
(statearr_44449_45826[(2)] = ex__44076__auto__);


if(cljs.core.seq((state_44435[(4)]))){
var statearr_44450_45827 = state_44435;
(statearr_44450_45827[(1)] = cljs.core.first((state_44435[(4)])));

} else {
throw ex__44076__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45831 = state_44435;
state_44435 = G__45831;
continue;
} else {
return ret_value__44074__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__ = function(state_44435){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____1.call(this,state_44435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__;
})()
})();
var state__44189__auto__ = (function (){var statearr_44451 = f__44188__auto__();
(statearr_44451[(6)] = c__44187__auto___45816);

return statearr_44451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44189__auto__);
}));


var c__44187__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44188__auto__ = (function (){var switch__44072__auto__ = (function (state_44489){
var state_val_44490 = (state_44489[(1)]);
if((state_val_44490 === (7))){
var inst_44485 = (state_44489[(2)]);
var state_44489__$1 = state_44489;
var statearr_44491_45832 = state_44489__$1;
(statearr_44491_45832[(2)] = inst_44485);

(statearr_44491_45832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44490 === (20))){
var state_44489__$1 = state_44489;
var statearr_44492_45833 = state_44489__$1;
(statearr_44492_45833[(2)] = null);

(statearr_44492_45833[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44490 === (1))){
var state_44489__$1 = state_44489;
var statearr_44493_45834 = state_44489__$1;
(statearr_44493_45834[(2)] = null);

(statearr_44493_45834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44490 === (4))){
var inst_44454 = (state_44489[(7)]);
var inst_44454__$1 = (state_44489[(2)]);
var inst_44455 = (inst_44454__$1 == null);
var state_44489__$1 = (function (){var statearr_44494 = state_44489;
(statearr_44494[(7)] = inst_44454__$1);

return statearr_44494;
})();
if(cljs.core.truth_(inst_44455)){
var statearr_44495_45835 = state_44489__$1;
(statearr_44495_45835[(1)] = (5));

} else {
var statearr_44496_45836 = state_44489__$1;
(statearr_44496_45836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44490 === (15))){
var inst_44467 = (state_44489[(8)]);
var state_44489__$1 = state_44489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44489__$1,(18),to,inst_44467);
} else {
if((state_val_44490 === (21))){
var inst_44480 = (state_44489[(2)]);
var state_44489__$1 = state_44489;
var statearr_44497_45840 = state_44489__$1;
(statearr_44497_45840[(2)] = inst_44480);

(statearr_44497_45840[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44490 === (13))){
var inst_44482 = (state_44489[(2)]);
var state_44489__$1 = (function (){var statearr_44498 = state_44489;
(statearr_44498[(9)] = inst_44482);

return statearr_44498;
})();
var statearr_44499_45841 = state_44489__$1;
(statearr_44499_45841[(2)] = null);

(statearr_44499_45841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44490 === (6))){
var inst_44454 = (state_44489[(7)]);
var state_44489__$1 = state_44489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44489__$1,(11),inst_44454);
} else {
if((state_val_44490 === (17))){
var inst_44475 = (state_44489[(2)]);
var state_44489__$1 = state_44489;
if(cljs.core.truth_(inst_44475)){
var statearr_44500_45842 = state_44489__$1;
(statearr_44500_45842[(1)] = (19));

} else {
var statearr_44501_45843 = state_44489__$1;
(statearr_44501_45843[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44490 === (3))){
var inst_44487 = (state_44489[(2)]);
var state_44489__$1 = state_44489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44489__$1,inst_44487);
} else {
if((state_val_44490 === (12))){
var inst_44464 = (state_44489[(10)]);
var state_44489__$1 = state_44489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44489__$1,(14),inst_44464);
} else {
if((state_val_44490 === (2))){
var state_44489__$1 = state_44489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44489__$1,(4),results);
} else {
if((state_val_44490 === (19))){
var state_44489__$1 = state_44489;
var statearr_44502_45844 = state_44489__$1;
(statearr_44502_45844[(2)] = null);

(statearr_44502_45844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44490 === (11))){
var inst_44464 = (state_44489[(2)]);
var state_44489__$1 = (function (){var statearr_44503 = state_44489;
(statearr_44503[(10)] = inst_44464);

return statearr_44503;
})();
var statearr_44504_45846 = state_44489__$1;
(statearr_44504_45846[(2)] = null);

(statearr_44504_45846[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44490 === (9))){
var state_44489__$1 = state_44489;
var statearr_44505_45847 = state_44489__$1;
(statearr_44505_45847[(2)] = null);

(statearr_44505_45847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44490 === (5))){
var state_44489__$1 = state_44489;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44506_45848 = state_44489__$1;
(statearr_44506_45848[(1)] = (8));

} else {
var statearr_44507_45849 = state_44489__$1;
(statearr_44507_45849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44490 === (14))){
var inst_44467 = (state_44489[(8)]);
var inst_44469 = (state_44489[(11)]);
var inst_44467__$1 = (state_44489[(2)]);
var inst_44468 = (inst_44467__$1 == null);
var inst_44469__$1 = cljs.core.not(inst_44468);
var state_44489__$1 = (function (){var statearr_44508 = state_44489;
(statearr_44508[(8)] = inst_44467__$1);

(statearr_44508[(11)] = inst_44469__$1);

return statearr_44508;
})();
if(inst_44469__$1){
var statearr_44509_45850 = state_44489__$1;
(statearr_44509_45850[(1)] = (15));

} else {
var statearr_44510_45851 = state_44489__$1;
(statearr_44510_45851[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44490 === (16))){
var inst_44469 = (state_44489[(11)]);
var state_44489__$1 = state_44489;
var statearr_44511_45852 = state_44489__$1;
(statearr_44511_45852[(2)] = inst_44469);

(statearr_44511_45852[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44490 === (10))){
var inst_44461 = (state_44489[(2)]);
var state_44489__$1 = state_44489;
var statearr_44512_45853 = state_44489__$1;
(statearr_44512_45853[(2)] = inst_44461);

(statearr_44512_45853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44490 === (18))){
var inst_44472 = (state_44489[(2)]);
var state_44489__$1 = state_44489;
var statearr_44513_45854 = state_44489__$1;
(statearr_44513_45854[(2)] = inst_44472);

(statearr_44513_45854[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44490 === (8))){
var inst_44458 = cljs.core.async.close_BANG_(to);
var state_44489__$1 = state_44489;
var statearr_44514_45855 = state_44489__$1;
(statearr_44514_45855[(2)] = inst_44458);

(statearr_44514_45855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____0 = (function (){
var statearr_44515 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44515[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__);

(statearr_44515[(1)] = (1));

return statearr_44515;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____1 = (function (state_44489){
while(true){
var ret_value__44074__auto__ = (function (){try{while(true){
var result__44075__auto__ = switch__44072__auto__(state_44489);
if(cljs.core.keyword_identical_QMARK_(result__44075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44075__auto__;
}
break;
}
}catch (e44516){var ex__44076__auto__ = e44516;
var statearr_44517_45856 = state_44489;
(statearr_44517_45856[(2)] = ex__44076__auto__);


if(cljs.core.seq((state_44489[(4)]))){
var statearr_44518_45857 = state_44489;
(statearr_44518_45857[(1)] = cljs.core.first((state_44489[(4)])));

} else {
throw ex__44076__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45858 = state_44489;
state_44489 = G__45858;
continue;
} else {
return ret_value__44074__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__ = function(state_44489){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____1.call(this,state_44489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44073__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44073__auto__;
})()
})();
var state__44189__auto__ = (function (){var statearr_44519 = f__44188__auto__();
(statearr_44519[(6)] = c__44187__auto__);

return statearr_44519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44189__auto__);
}));

return c__44187__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__44521 = arguments.length;
switch (G__44521) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__44523 = arguments.length;
switch (G__44523) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__44525 = arguments.length;
switch (G__44525) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__44187__auto___45862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44188__auto__ = (function (){var switch__44072__auto__ = (function (state_44551){
var state_val_44552 = (state_44551[(1)]);
if((state_val_44552 === (7))){
var inst_44547 = (state_44551[(2)]);
var state_44551__$1 = state_44551;
var statearr_44553_45863 = state_44551__$1;
(statearr_44553_45863[(2)] = inst_44547);

(statearr_44553_45863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (1))){
var state_44551__$1 = state_44551;
var statearr_44554_45864 = state_44551__$1;
(statearr_44554_45864[(2)] = null);

(statearr_44554_45864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (4))){
var inst_44528 = (state_44551[(7)]);
var inst_44528__$1 = (state_44551[(2)]);
var inst_44529 = (inst_44528__$1 == null);
var state_44551__$1 = (function (){var statearr_44555 = state_44551;
(statearr_44555[(7)] = inst_44528__$1);

return statearr_44555;
})();
if(cljs.core.truth_(inst_44529)){
var statearr_44556_45865 = state_44551__$1;
(statearr_44556_45865[(1)] = (5));

} else {
var statearr_44557_45866 = state_44551__$1;
(statearr_44557_45866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (13))){
var state_44551__$1 = state_44551;
var statearr_44558_45867 = state_44551__$1;
(statearr_44558_45867[(2)] = null);

(statearr_44558_45867[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (6))){
var inst_44528 = (state_44551[(7)]);
var inst_44534 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44528) : p.call(null,inst_44528));
var state_44551__$1 = state_44551;
if(cljs.core.truth_(inst_44534)){
var statearr_44559_45868 = state_44551__$1;
(statearr_44559_45868[(1)] = (9));

} else {
var statearr_44560_45869 = state_44551__$1;
(statearr_44560_45869[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (3))){
var inst_44549 = (state_44551[(2)]);
var state_44551__$1 = state_44551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44551__$1,inst_44549);
} else {
if((state_val_44552 === (12))){
var state_44551__$1 = state_44551;
var statearr_44561_45870 = state_44551__$1;
(statearr_44561_45870[(2)] = null);

(statearr_44561_45870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (2))){
var state_44551__$1 = state_44551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44551__$1,(4),ch);
} else {
if((state_val_44552 === (11))){
var inst_44528 = (state_44551[(7)]);
var inst_44538 = (state_44551[(2)]);
var state_44551__$1 = state_44551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44551__$1,(8),inst_44538,inst_44528);
} else {
if((state_val_44552 === (9))){
var state_44551__$1 = state_44551;
var statearr_44562_45871 = state_44551__$1;
(statearr_44562_45871[(2)] = tc);

(statearr_44562_45871[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (5))){
var inst_44531 = cljs.core.async.close_BANG_(tc);
var inst_44532 = cljs.core.async.close_BANG_(fc);
var state_44551__$1 = (function (){var statearr_44563 = state_44551;
(statearr_44563[(8)] = inst_44531);

return statearr_44563;
})();
var statearr_44564_45872 = state_44551__$1;
(statearr_44564_45872[(2)] = inst_44532);

(statearr_44564_45872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (14))){
var inst_44545 = (state_44551[(2)]);
var state_44551__$1 = state_44551;
var statearr_44565_45873 = state_44551__$1;
(statearr_44565_45873[(2)] = inst_44545);

(statearr_44565_45873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (10))){
var state_44551__$1 = state_44551;
var statearr_44566_45874 = state_44551__$1;
(statearr_44566_45874[(2)] = fc);

(statearr_44566_45874[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (8))){
var inst_44540 = (state_44551[(2)]);
var state_44551__$1 = state_44551;
if(cljs.core.truth_(inst_44540)){
var statearr_44567_45875 = state_44551__$1;
(statearr_44567_45875[(1)] = (12));

} else {
var statearr_44568_45876 = state_44551__$1;
(statearr_44568_45876[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44073__auto__ = null;
var cljs$core$async$state_machine__44073__auto____0 = (function (){
var statearr_44569 = [null,null,null,null,null,null,null,null,null];
(statearr_44569[(0)] = cljs$core$async$state_machine__44073__auto__);

(statearr_44569[(1)] = (1));

return statearr_44569;
});
var cljs$core$async$state_machine__44073__auto____1 = (function (state_44551){
while(true){
var ret_value__44074__auto__ = (function (){try{while(true){
var result__44075__auto__ = switch__44072__auto__(state_44551);
if(cljs.core.keyword_identical_QMARK_(result__44075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44075__auto__;
}
break;
}
}catch (e44570){var ex__44076__auto__ = e44570;
var statearr_44571_45877 = state_44551;
(statearr_44571_45877[(2)] = ex__44076__auto__);


if(cljs.core.seq((state_44551[(4)]))){
var statearr_44572_45878 = state_44551;
(statearr_44572_45878[(1)] = cljs.core.first((state_44551[(4)])));

} else {
throw ex__44076__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45879 = state_44551;
state_44551 = G__45879;
continue;
} else {
return ret_value__44074__auto__;
}
break;
}
});
cljs$core$async$state_machine__44073__auto__ = function(state_44551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44073__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44073__auto____1.call(this,state_44551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44073__auto____0;
cljs$core$async$state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44073__auto____1;
return cljs$core$async$state_machine__44073__auto__;
})()
})();
var state__44189__auto__ = (function (){var statearr_44573 = f__44188__auto__();
(statearr_44573[(6)] = c__44187__auto___45862);

return statearr_44573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44189__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__44187__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44188__auto__ = (function (){var switch__44072__auto__ = (function (state_44595){
var state_val_44596 = (state_44595[(1)]);
if((state_val_44596 === (7))){
var inst_44591 = (state_44595[(2)]);
var state_44595__$1 = state_44595;
var statearr_44597_45880 = state_44595__$1;
(statearr_44597_45880[(2)] = inst_44591);

(statearr_44597_45880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44596 === (1))){
var inst_44574 = init;
var inst_44575 = inst_44574;
var state_44595__$1 = (function (){var statearr_44598 = state_44595;
(statearr_44598[(7)] = inst_44575);

return statearr_44598;
})();
var statearr_44599_45881 = state_44595__$1;
(statearr_44599_45881[(2)] = null);

(statearr_44599_45881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44596 === (4))){
var inst_44578 = (state_44595[(8)]);
var inst_44578__$1 = (state_44595[(2)]);
var inst_44579 = (inst_44578__$1 == null);
var state_44595__$1 = (function (){var statearr_44600 = state_44595;
(statearr_44600[(8)] = inst_44578__$1);

return statearr_44600;
})();
if(cljs.core.truth_(inst_44579)){
var statearr_44601_45882 = state_44595__$1;
(statearr_44601_45882[(1)] = (5));

} else {
var statearr_44602_45883 = state_44595__$1;
(statearr_44602_45883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44596 === (6))){
var inst_44575 = (state_44595[(7)]);
var inst_44582 = (state_44595[(9)]);
var inst_44578 = (state_44595[(8)]);
var inst_44582__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44575,inst_44578) : f.call(null,inst_44575,inst_44578));
var inst_44583 = cljs.core.reduced_QMARK_(inst_44582__$1);
var state_44595__$1 = (function (){var statearr_44603 = state_44595;
(statearr_44603[(9)] = inst_44582__$1);

return statearr_44603;
})();
if(inst_44583){
var statearr_44604_45884 = state_44595__$1;
(statearr_44604_45884[(1)] = (8));

} else {
var statearr_44605_45885 = state_44595__$1;
(statearr_44605_45885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44596 === (3))){
var inst_44593 = (state_44595[(2)]);
var state_44595__$1 = state_44595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44595__$1,inst_44593);
} else {
if((state_val_44596 === (2))){
var state_44595__$1 = state_44595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44595__$1,(4),ch);
} else {
if((state_val_44596 === (9))){
var inst_44582 = (state_44595[(9)]);
var inst_44575 = inst_44582;
var state_44595__$1 = (function (){var statearr_44606 = state_44595;
(statearr_44606[(7)] = inst_44575);

return statearr_44606;
})();
var statearr_44607_45886 = state_44595__$1;
(statearr_44607_45886[(2)] = null);

(statearr_44607_45886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44596 === (5))){
var inst_44575 = (state_44595[(7)]);
var state_44595__$1 = state_44595;
var statearr_44608_45887 = state_44595__$1;
(statearr_44608_45887[(2)] = inst_44575);

(statearr_44608_45887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44596 === (10))){
var inst_44589 = (state_44595[(2)]);
var state_44595__$1 = state_44595;
var statearr_44609_45888 = state_44595__$1;
(statearr_44609_45888[(2)] = inst_44589);

(statearr_44609_45888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44596 === (8))){
var inst_44582 = (state_44595[(9)]);
var inst_44585 = cljs.core.deref(inst_44582);
var state_44595__$1 = state_44595;
var statearr_44610_45889 = state_44595__$1;
(statearr_44610_45889[(2)] = inst_44585);

(statearr_44610_45889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__44073__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44073__auto____0 = (function (){
var statearr_44611 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44611[(0)] = cljs$core$async$reduce_$_state_machine__44073__auto__);

(statearr_44611[(1)] = (1));

return statearr_44611;
});
var cljs$core$async$reduce_$_state_machine__44073__auto____1 = (function (state_44595){
while(true){
var ret_value__44074__auto__ = (function (){try{while(true){
var result__44075__auto__ = switch__44072__auto__(state_44595);
if(cljs.core.keyword_identical_QMARK_(result__44075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44075__auto__;
}
break;
}
}catch (e44612){var ex__44076__auto__ = e44612;
var statearr_44613_45892 = state_44595;
(statearr_44613_45892[(2)] = ex__44076__auto__);


if(cljs.core.seq((state_44595[(4)]))){
var statearr_44614_45893 = state_44595;
(statearr_44614_45893[(1)] = cljs.core.first((state_44595[(4)])));

} else {
throw ex__44076__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45894 = state_44595;
state_44595 = G__45894;
continue;
} else {
return ret_value__44074__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44073__auto__ = function(state_44595){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44073__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44073__auto____1.call(this,state_44595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44073__auto____0;
cljs$core$async$reduce_$_state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44073__auto____1;
return cljs$core$async$reduce_$_state_machine__44073__auto__;
})()
})();
var state__44189__auto__ = (function (){var statearr_44615 = f__44188__auto__();
(statearr_44615[(6)] = c__44187__auto__);

return statearr_44615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44189__auto__);
}));

return c__44187__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__44187__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44188__auto__ = (function (){var switch__44072__auto__ = (function (state_44621){
var state_val_44622 = (state_44621[(1)]);
if((state_val_44622 === (1))){
var inst_44616 = cljs.core.async.reduce(f__$1,init,ch);
var state_44621__$1 = state_44621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44621__$1,(2),inst_44616);
} else {
if((state_val_44622 === (2))){
var inst_44618 = (state_44621[(2)]);
var inst_44619 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44618) : f__$1.call(null,inst_44618));
var state_44621__$1 = state_44621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44621__$1,inst_44619);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__44073__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44073__auto____0 = (function (){
var statearr_44623 = [null,null,null,null,null,null,null];
(statearr_44623[(0)] = cljs$core$async$transduce_$_state_machine__44073__auto__);

(statearr_44623[(1)] = (1));

return statearr_44623;
});
var cljs$core$async$transduce_$_state_machine__44073__auto____1 = (function (state_44621){
while(true){
var ret_value__44074__auto__ = (function (){try{while(true){
var result__44075__auto__ = switch__44072__auto__(state_44621);
if(cljs.core.keyword_identical_QMARK_(result__44075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44075__auto__;
}
break;
}
}catch (e44624){var ex__44076__auto__ = e44624;
var statearr_44625_45899 = state_44621;
(statearr_44625_45899[(2)] = ex__44076__auto__);


if(cljs.core.seq((state_44621[(4)]))){
var statearr_44626_45900 = state_44621;
(statearr_44626_45900[(1)] = cljs.core.first((state_44621[(4)])));

} else {
throw ex__44076__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45902 = state_44621;
state_44621 = G__45902;
continue;
} else {
return ret_value__44074__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44073__auto__ = function(state_44621){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44073__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44073__auto____1.call(this,state_44621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44073__auto____0;
cljs$core$async$transduce_$_state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44073__auto____1;
return cljs$core$async$transduce_$_state_machine__44073__auto__;
})()
})();
var state__44189__auto__ = (function (){var statearr_44627 = f__44188__auto__();
(statearr_44627[(6)] = c__44187__auto__);

return statearr_44627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44189__auto__);
}));

return c__44187__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__44629 = arguments.length;
switch (G__44629) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44187__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44188__auto__ = (function (){var switch__44072__auto__ = (function (state_44654){
var state_val_44655 = (state_44654[(1)]);
if((state_val_44655 === (7))){
var inst_44636 = (state_44654[(2)]);
var state_44654__$1 = state_44654;
var statearr_44656_45905 = state_44654__$1;
(statearr_44656_45905[(2)] = inst_44636);

(statearr_44656_45905[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44655 === (1))){
var inst_44630 = cljs.core.seq(coll);
var inst_44631 = inst_44630;
var state_44654__$1 = (function (){var statearr_44657 = state_44654;
(statearr_44657[(7)] = inst_44631);

return statearr_44657;
})();
var statearr_44658_45906 = state_44654__$1;
(statearr_44658_45906[(2)] = null);

(statearr_44658_45906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44655 === (4))){
var inst_44631 = (state_44654[(7)]);
var inst_44634 = cljs.core.first(inst_44631);
var state_44654__$1 = state_44654;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44654__$1,(7),ch,inst_44634);
} else {
if((state_val_44655 === (13))){
var inst_44648 = (state_44654[(2)]);
var state_44654__$1 = state_44654;
var statearr_44659_45907 = state_44654__$1;
(statearr_44659_45907[(2)] = inst_44648);

(statearr_44659_45907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44655 === (6))){
var inst_44639 = (state_44654[(2)]);
var state_44654__$1 = state_44654;
if(cljs.core.truth_(inst_44639)){
var statearr_44660_45908 = state_44654__$1;
(statearr_44660_45908[(1)] = (8));

} else {
var statearr_44661_45909 = state_44654__$1;
(statearr_44661_45909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44655 === (3))){
var inst_44652 = (state_44654[(2)]);
var state_44654__$1 = state_44654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44654__$1,inst_44652);
} else {
if((state_val_44655 === (12))){
var state_44654__$1 = state_44654;
var statearr_44662_45925 = state_44654__$1;
(statearr_44662_45925[(2)] = null);

(statearr_44662_45925[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44655 === (2))){
var inst_44631 = (state_44654[(7)]);
var state_44654__$1 = state_44654;
if(cljs.core.truth_(inst_44631)){
var statearr_44663_45932 = state_44654__$1;
(statearr_44663_45932[(1)] = (4));

} else {
var statearr_44664_45933 = state_44654__$1;
(statearr_44664_45933[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44655 === (11))){
var inst_44645 = cljs.core.async.close_BANG_(ch);
var state_44654__$1 = state_44654;
var statearr_44665_45934 = state_44654__$1;
(statearr_44665_45934[(2)] = inst_44645);

(statearr_44665_45934[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44655 === (9))){
var state_44654__$1 = state_44654;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44666_45935 = state_44654__$1;
(statearr_44666_45935[(1)] = (11));

} else {
var statearr_44667_45936 = state_44654__$1;
(statearr_44667_45936[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44655 === (5))){
var inst_44631 = (state_44654[(7)]);
var state_44654__$1 = state_44654;
var statearr_44668_45937 = state_44654__$1;
(statearr_44668_45937[(2)] = inst_44631);

(statearr_44668_45937[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44655 === (10))){
var inst_44650 = (state_44654[(2)]);
var state_44654__$1 = state_44654;
var statearr_44669_45938 = state_44654__$1;
(statearr_44669_45938[(2)] = inst_44650);

(statearr_44669_45938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44655 === (8))){
var inst_44631 = (state_44654[(7)]);
var inst_44641 = cljs.core.next(inst_44631);
var inst_44631__$1 = inst_44641;
var state_44654__$1 = (function (){var statearr_44670 = state_44654;
(statearr_44670[(7)] = inst_44631__$1);

return statearr_44670;
})();
var statearr_44671_45939 = state_44654__$1;
(statearr_44671_45939[(2)] = null);

(statearr_44671_45939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44073__auto__ = null;
var cljs$core$async$state_machine__44073__auto____0 = (function (){
var statearr_44672 = [null,null,null,null,null,null,null,null];
(statearr_44672[(0)] = cljs$core$async$state_machine__44073__auto__);

(statearr_44672[(1)] = (1));

return statearr_44672;
});
var cljs$core$async$state_machine__44073__auto____1 = (function (state_44654){
while(true){
var ret_value__44074__auto__ = (function (){try{while(true){
var result__44075__auto__ = switch__44072__auto__(state_44654);
if(cljs.core.keyword_identical_QMARK_(result__44075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44075__auto__;
}
break;
}
}catch (e44673){var ex__44076__auto__ = e44673;
var statearr_44674_45940 = state_44654;
(statearr_44674_45940[(2)] = ex__44076__auto__);


if(cljs.core.seq((state_44654[(4)]))){
var statearr_44675_45941 = state_44654;
(statearr_44675_45941[(1)] = cljs.core.first((state_44654[(4)])));

} else {
throw ex__44076__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45942 = state_44654;
state_44654 = G__45942;
continue;
} else {
return ret_value__44074__auto__;
}
break;
}
});
cljs$core$async$state_machine__44073__auto__ = function(state_44654){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44073__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44073__auto____1.call(this,state_44654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44073__auto____0;
cljs$core$async$state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44073__auto____1;
return cljs$core$async$state_machine__44073__auto__;
})()
})();
var state__44189__auto__ = (function (){var statearr_44676 = f__44188__auto__();
(statearr_44676[(6)] = c__44187__auto__);

return statearr_44676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44189__auto__);
}));

return c__44187__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__44678 = arguments.length;
switch (G__44678) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_45944 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_45944(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_45945 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_45945(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_45946 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_45946(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_45947 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_45947(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44679 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44679 = (function (ch,cs,meta44680){
this.ch = ch;
this.cs = cs;
this.meta44680 = meta44680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44681,meta44680__$1){
var self__ = this;
var _44681__$1 = this;
return (new cljs.core.async.t_cljs$core$async44679(self__.ch,self__.cs,meta44680__$1));
}));

(cljs.core.async.t_cljs$core$async44679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44681){
var self__ = this;
var _44681__$1 = this;
return self__.meta44680;
}));

(cljs.core.async.t_cljs$core$async44679.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44679.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44679.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44679.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async44679.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async44679.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async44679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44680","meta44680",1062021471,null)], null);
}));

(cljs.core.async.t_cljs$core$async44679.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44679");

(cljs.core.async.t_cljs$core$async44679.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44679");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44679.
 */
cljs.core.async.__GT_t_cljs$core$async44679 = (function cljs$core$async$mult_$___GT_t_cljs$core$async44679(ch__$1,cs__$1,meta44680){
return (new cljs.core.async.t_cljs$core$async44679(ch__$1,cs__$1,meta44680));
});

}

return (new cljs.core.async.t_cljs$core$async44679(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__44187__auto___45954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44188__auto__ = (function (){var switch__44072__auto__ = (function (state_44814){
var state_val_44815 = (state_44814[(1)]);
if((state_val_44815 === (7))){
var inst_44810 = (state_44814[(2)]);
var state_44814__$1 = state_44814;
var statearr_44816_45955 = state_44814__$1;
(statearr_44816_45955[(2)] = inst_44810);

(statearr_44816_45955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (20))){
var inst_44715 = (state_44814[(7)]);
var inst_44727 = cljs.core.first(inst_44715);
var inst_44728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44727,(0),null);
var inst_44729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44727,(1),null);
var state_44814__$1 = (function (){var statearr_44817 = state_44814;
(statearr_44817[(8)] = inst_44728);

return statearr_44817;
})();
if(cljs.core.truth_(inst_44729)){
var statearr_44818_45956 = state_44814__$1;
(statearr_44818_45956[(1)] = (22));

} else {
var statearr_44819_45957 = state_44814__$1;
(statearr_44819_45957[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (27))){
var inst_44684 = (state_44814[(9)]);
var inst_44764 = (state_44814[(10)]);
var inst_44759 = (state_44814[(11)]);
var inst_44757 = (state_44814[(12)]);
var inst_44764__$1 = cljs.core._nth(inst_44757,inst_44759);
var inst_44765 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44764__$1,inst_44684,done);
var state_44814__$1 = (function (){var statearr_44820 = state_44814;
(statearr_44820[(10)] = inst_44764__$1);

return statearr_44820;
})();
if(cljs.core.truth_(inst_44765)){
var statearr_44821_45958 = state_44814__$1;
(statearr_44821_45958[(1)] = (30));

} else {
var statearr_44822_45959 = state_44814__$1;
(statearr_44822_45959[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (1))){
var state_44814__$1 = state_44814;
var statearr_44823_45960 = state_44814__$1;
(statearr_44823_45960[(2)] = null);

(statearr_44823_45960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (24))){
var inst_44715 = (state_44814[(7)]);
var inst_44734 = (state_44814[(2)]);
var inst_44735 = cljs.core.next(inst_44715);
var inst_44693 = inst_44735;
var inst_44694 = null;
var inst_44695 = (0);
var inst_44696 = (0);
var state_44814__$1 = (function (){var statearr_44824 = state_44814;
(statearr_44824[(13)] = inst_44695);

(statearr_44824[(14)] = inst_44696);

(statearr_44824[(15)] = inst_44694);

(statearr_44824[(16)] = inst_44734);

(statearr_44824[(17)] = inst_44693);

return statearr_44824;
})();
var statearr_44825_45961 = state_44814__$1;
(statearr_44825_45961[(2)] = null);

(statearr_44825_45961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (39))){
var state_44814__$1 = state_44814;
var statearr_44829_45962 = state_44814__$1;
(statearr_44829_45962[(2)] = null);

(statearr_44829_45962[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (4))){
var inst_44684 = (state_44814[(9)]);
var inst_44684__$1 = (state_44814[(2)]);
var inst_44685 = (inst_44684__$1 == null);
var state_44814__$1 = (function (){var statearr_44830 = state_44814;
(statearr_44830[(9)] = inst_44684__$1);

return statearr_44830;
})();
if(cljs.core.truth_(inst_44685)){
var statearr_44831_45963 = state_44814__$1;
(statearr_44831_45963[(1)] = (5));

} else {
var statearr_44832_45964 = state_44814__$1;
(statearr_44832_45964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (15))){
var inst_44695 = (state_44814[(13)]);
var inst_44696 = (state_44814[(14)]);
var inst_44694 = (state_44814[(15)]);
var inst_44693 = (state_44814[(17)]);
var inst_44711 = (state_44814[(2)]);
var inst_44712 = (inst_44696 + (1));
var tmp44826 = inst_44695;
var tmp44827 = inst_44694;
var tmp44828 = inst_44693;
var inst_44693__$1 = tmp44828;
var inst_44694__$1 = tmp44827;
var inst_44695__$1 = tmp44826;
var inst_44696__$1 = inst_44712;
var state_44814__$1 = (function (){var statearr_44833 = state_44814;
(statearr_44833[(13)] = inst_44695__$1);

(statearr_44833[(14)] = inst_44696__$1);

(statearr_44833[(18)] = inst_44711);

(statearr_44833[(15)] = inst_44694__$1);

(statearr_44833[(17)] = inst_44693__$1);

return statearr_44833;
})();
var statearr_44834_45965 = state_44814__$1;
(statearr_44834_45965[(2)] = null);

(statearr_44834_45965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (21))){
var inst_44738 = (state_44814[(2)]);
var state_44814__$1 = state_44814;
var statearr_44838_45966 = state_44814__$1;
(statearr_44838_45966[(2)] = inst_44738);

(statearr_44838_45966[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (31))){
var inst_44764 = (state_44814[(10)]);
var inst_44768 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44764);
var state_44814__$1 = state_44814;
var statearr_44839_45967 = state_44814__$1;
(statearr_44839_45967[(2)] = inst_44768);

(statearr_44839_45967[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (32))){
var inst_44756 = (state_44814[(19)]);
var inst_44758 = (state_44814[(20)]);
var inst_44759 = (state_44814[(11)]);
var inst_44757 = (state_44814[(12)]);
var inst_44770 = (state_44814[(2)]);
var inst_44771 = (inst_44759 + (1));
var tmp44835 = inst_44756;
var tmp44836 = inst_44758;
var tmp44837 = inst_44757;
var inst_44756__$1 = tmp44835;
var inst_44757__$1 = tmp44837;
var inst_44758__$1 = tmp44836;
var inst_44759__$1 = inst_44771;
var state_44814__$1 = (function (){var statearr_44840 = state_44814;
(statearr_44840[(19)] = inst_44756__$1);

(statearr_44840[(20)] = inst_44758__$1);

(statearr_44840[(11)] = inst_44759__$1);

(statearr_44840[(21)] = inst_44770);

(statearr_44840[(12)] = inst_44757__$1);

return statearr_44840;
})();
var statearr_44841_45968 = state_44814__$1;
(statearr_44841_45968[(2)] = null);

(statearr_44841_45968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (40))){
var inst_44783 = (state_44814[(22)]);
var inst_44787 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44783);
var state_44814__$1 = state_44814;
var statearr_44842_45969 = state_44814__$1;
(statearr_44842_45969[(2)] = inst_44787);

(statearr_44842_45969[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (33))){
var inst_44774 = (state_44814[(23)]);
var inst_44776 = cljs.core.chunked_seq_QMARK_(inst_44774);
var state_44814__$1 = state_44814;
if(inst_44776){
var statearr_44843_45970 = state_44814__$1;
(statearr_44843_45970[(1)] = (36));

} else {
var statearr_44844_45971 = state_44814__$1;
(statearr_44844_45971[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (13))){
var inst_44705 = (state_44814[(24)]);
var inst_44708 = cljs.core.async.close_BANG_(inst_44705);
var state_44814__$1 = state_44814;
var statearr_44845_45972 = state_44814__$1;
(statearr_44845_45972[(2)] = inst_44708);

(statearr_44845_45972[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (22))){
var inst_44728 = (state_44814[(8)]);
var inst_44731 = cljs.core.async.close_BANG_(inst_44728);
var state_44814__$1 = state_44814;
var statearr_44846_45973 = state_44814__$1;
(statearr_44846_45973[(2)] = inst_44731);

(statearr_44846_45973[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (36))){
var inst_44774 = (state_44814[(23)]);
var inst_44778 = cljs.core.chunk_first(inst_44774);
var inst_44779 = cljs.core.chunk_rest(inst_44774);
var inst_44780 = cljs.core.count(inst_44778);
var inst_44756 = inst_44779;
var inst_44757 = inst_44778;
var inst_44758 = inst_44780;
var inst_44759 = (0);
var state_44814__$1 = (function (){var statearr_44847 = state_44814;
(statearr_44847[(19)] = inst_44756);

(statearr_44847[(20)] = inst_44758);

(statearr_44847[(11)] = inst_44759);

(statearr_44847[(12)] = inst_44757);

return statearr_44847;
})();
var statearr_44848_45974 = state_44814__$1;
(statearr_44848_45974[(2)] = null);

(statearr_44848_45974[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (41))){
var inst_44774 = (state_44814[(23)]);
var inst_44789 = (state_44814[(2)]);
var inst_44790 = cljs.core.next(inst_44774);
var inst_44756 = inst_44790;
var inst_44757 = null;
var inst_44758 = (0);
var inst_44759 = (0);
var state_44814__$1 = (function (){var statearr_44849 = state_44814;
(statearr_44849[(19)] = inst_44756);

(statearr_44849[(20)] = inst_44758);

(statearr_44849[(25)] = inst_44789);

(statearr_44849[(11)] = inst_44759);

(statearr_44849[(12)] = inst_44757);

return statearr_44849;
})();
var statearr_44850_45975 = state_44814__$1;
(statearr_44850_45975[(2)] = null);

(statearr_44850_45975[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (43))){
var state_44814__$1 = state_44814;
var statearr_44851_45976 = state_44814__$1;
(statearr_44851_45976[(2)] = null);

(statearr_44851_45976[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (29))){
var inst_44798 = (state_44814[(2)]);
var state_44814__$1 = state_44814;
var statearr_44852_45977 = state_44814__$1;
(statearr_44852_45977[(2)] = inst_44798);

(statearr_44852_45977[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (44))){
var inst_44807 = (state_44814[(2)]);
var state_44814__$1 = (function (){var statearr_44853 = state_44814;
(statearr_44853[(26)] = inst_44807);

return statearr_44853;
})();
var statearr_44854_45978 = state_44814__$1;
(statearr_44854_45978[(2)] = null);

(statearr_44854_45978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (6))){
var inst_44748 = (state_44814[(27)]);
var inst_44747 = cljs.core.deref(cs);
var inst_44748__$1 = cljs.core.keys(inst_44747);
var inst_44749 = cljs.core.count(inst_44748__$1);
var inst_44750 = cljs.core.reset_BANG_(dctr,inst_44749);
var inst_44755 = cljs.core.seq(inst_44748__$1);
var inst_44756 = inst_44755;
var inst_44757 = null;
var inst_44758 = (0);
var inst_44759 = (0);
var state_44814__$1 = (function (){var statearr_44855 = state_44814;
(statearr_44855[(19)] = inst_44756);

(statearr_44855[(20)] = inst_44758);

(statearr_44855[(28)] = inst_44750);

(statearr_44855[(27)] = inst_44748__$1);

(statearr_44855[(11)] = inst_44759);

(statearr_44855[(12)] = inst_44757);

return statearr_44855;
})();
var statearr_44856_45985 = state_44814__$1;
(statearr_44856_45985[(2)] = null);

(statearr_44856_45985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (28))){
var inst_44756 = (state_44814[(19)]);
var inst_44774 = (state_44814[(23)]);
var inst_44774__$1 = cljs.core.seq(inst_44756);
var state_44814__$1 = (function (){var statearr_44857 = state_44814;
(statearr_44857[(23)] = inst_44774__$1);

return statearr_44857;
})();
if(inst_44774__$1){
var statearr_44858_45986 = state_44814__$1;
(statearr_44858_45986[(1)] = (33));

} else {
var statearr_44859_45987 = state_44814__$1;
(statearr_44859_45987[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (25))){
var inst_44758 = (state_44814[(20)]);
var inst_44759 = (state_44814[(11)]);
var inst_44761 = (inst_44759 < inst_44758);
var inst_44762 = inst_44761;
var state_44814__$1 = state_44814;
if(cljs.core.truth_(inst_44762)){
var statearr_44860_45988 = state_44814__$1;
(statearr_44860_45988[(1)] = (27));

} else {
var statearr_44861_45989 = state_44814__$1;
(statearr_44861_45989[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (34))){
var state_44814__$1 = state_44814;
var statearr_44862_45990 = state_44814__$1;
(statearr_44862_45990[(2)] = null);

(statearr_44862_45990[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (17))){
var state_44814__$1 = state_44814;
var statearr_44863_45991 = state_44814__$1;
(statearr_44863_45991[(2)] = null);

(statearr_44863_45991[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (3))){
var inst_44812 = (state_44814[(2)]);
var state_44814__$1 = state_44814;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44814__$1,inst_44812);
} else {
if((state_val_44815 === (12))){
var inst_44743 = (state_44814[(2)]);
var state_44814__$1 = state_44814;
var statearr_44864_45992 = state_44814__$1;
(statearr_44864_45992[(2)] = inst_44743);

(statearr_44864_45992[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (2))){
var state_44814__$1 = state_44814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44814__$1,(4),ch);
} else {
if((state_val_44815 === (23))){
var state_44814__$1 = state_44814;
var statearr_44865_45993 = state_44814__$1;
(statearr_44865_45993[(2)] = null);

(statearr_44865_45993[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (35))){
var inst_44796 = (state_44814[(2)]);
var state_44814__$1 = state_44814;
var statearr_44866_45994 = state_44814__$1;
(statearr_44866_45994[(2)] = inst_44796);

(statearr_44866_45994[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (19))){
var inst_44715 = (state_44814[(7)]);
var inst_44719 = cljs.core.chunk_first(inst_44715);
var inst_44720 = cljs.core.chunk_rest(inst_44715);
var inst_44721 = cljs.core.count(inst_44719);
var inst_44693 = inst_44720;
var inst_44694 = inst_44719;
var inst_44695 = inst_44721;
var inst_44696 = (0);
var state_44814__$1 = (function (){var statearr_44867 = state_44814;
(statearr_44867[(13)] = inst_44695);

(statearr_44867[(14)] = inst_44696);

(statearr_44867[(15)] = inst_44694);

(statearr_44867[(17)] = inst_44693);

return statearr_44867;
})();
var statearr_44868_45995 = state_44814__$1;
(statearr_44868_45995[(2)] = null);

(statearr_44868_45995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (11))){
var inst_44715 = (state_44814[(7)]);
var inst_44693 = (state_44814[(17)]);
var inst_44715__$1 = cljs.core.seq(inst_44693);
var state_44814__$1 = (function (){var statearr_44869 = state_44814;
(statearr_44869[(7)] = inst_44715__$1);

return statearr_44869;
})();
if(inst_44715__$1){
var statearr_44870_45996 = state_44814__$1;
(statearr_44870_45996[(1)] = (16));

} else {
var statearr_44871_45997 = state_44814__$1;
(statearr_44871_45997[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (9))){
var inst_44745 = (state_44814[(2)]);
var state_44814__$1 = state_44814;
var statearr_44872_45998 = state_44814__$1;
(statearr_44872_45998[(2)] = inst_44745);

(statearr_44872_45998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (5))){
var inst_44691 = cljs.core.deref(cs);
var inst_44692 = cljs.core.seq(inst_44691);
var inst_44693 = inst_44692;
var inst_44694 = null;
var inst_44695 = (0);
var inst_44696 = (0);
var state_44814__$1 = (function (){var statearr_44873 = state_44814;
(statearr_44873[(13)] = inst_44695);

(statearr_44873[(14)] = inst_44696);

(statearr_44873[(15)] = inst_44694);

(statearr_44873[(17)] = inst_44693);

return statearr_44873;
})();
var statearr_44874_46005 = state_44814__$1;
(statearr_44874_46005[(2)] = null);

(statearr_44874_46005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (14))){
var state_44814__$1 = state_44814;
var statearr_44875_46006 = state_44814__$1;
(statearr_44875_46006[(2)] = null);

(statearr_44875_46006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (45))){
var inst_44804 = (state_44814[(2)]);
var state_44814__$1 = state_44814;
var statearr_44876_46007 = state_44814__$1;
(statearr_44876_46007[(2)] = inst_44804);

(statearr_44876_46007[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (26))){
var inst_44748 = (state_44814[(27)]);
var inst_44800 = (state_44814[(2)]);
var inst_44801 = cljs.core.seq(inst_44748);
var state_44814__$1 = (function (){var statearr_44877 = state_44814;
(statearr_44877[(29)] = inst_44800);

return statearr_44877;
})();
if(inst_44801){
var statearr_44878_46008 = state_44814__$1;
(statearr_44878_46008[(1)] = (42));

} else {
var statearr_44879_46009 = state_44814__$1;
(statearr_44879_46009[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (16))){
var inst_44715 = (state_44814[(7)]);
var inst_44717 = cljs.core.chunked_seq_QMARK_(inst_44715);
var state_44814__$1 = state_44814;
if(inst_44717){
var statearr_44880_46010 = state_44814__$1;
(statearr_44880_46010[(1)] = (19));

} else {
var statearr_44881_46011 = state_44814__$1;
(statearr_44881_46011[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (38))){
var inst_44793 = (state_44814[(2)]);
var state_44814__$1 = state_44814;
var statearr_44882_46012 = state_44814__$1;
(statearr_44882_46012[(2)] = inst_44793);

(statearr_44882_46012[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (30))){
var state_44814__$1 = state_44814;
var statearr_44883_46013 = state_44814__$1;
(statearr_44883_46013[(2)] = null);

(statearr_44883_46013[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (10))){
var inst_44696 = (state_44814[(14)]);
var inst_44694 = (state_44814[(15)]);
var inst_44704 = cljs.core._nth(inst_44694,inst_44696);
var inst_44705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44704,(0),null);
var inst_44706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44704,(1),null);
var state_44814__$1 = (function (){var statearr_44884 = state_44814;
(statearr_44884[(24)] = inst_44705);

return statearr_44884;
})();
if(cljs.core.truth_(inst_44706)){
var statearr_44885_46014 = state_44814__$1;
(statearr_44885_46014[(1)] = (13));

} else {
var statearr_44886_46015 = state_44814__$1;
(statearr_44886_46015[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (18))){
var inst_44741 = (state_44814[(2)]);
var state_44814__$1 = state_44814;
var statearr_44887_46016 = state_44814__$1;
(statearr_44887_46016[(2)] = inst_44741);

(statearr_44887_46016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (42))){
var state_44814__$1 = state_44814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44814__$1,(45),dchan);
} else {
if((state_val_44815 === (37))){
var inst_44783 = (state_44814[(22)]);
var inst_44684 = (state_44814[(9)]);
var inst_44774 = (state_44814[(23)]);
var inst_44783__$1 = cljs.core.first(inst_44774);
var inst_44784 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44783__$1,inst_44684,done);
var state_44814__$1 = (function (){var statearr_44888 = state_44814;
(statearr_44888[(22)] = inst_44783__$1);

return statearr_44888;
})();
if(cljs.core.truth_(inst_44784)){
var statearr_44889_46017 = state_44814__$1;
(statearr_44889_46017[(1)] = (39));

} else {
var statearr_44890_46018 = state_44814__$1;
(statearr_44890_46018[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (8))){
var inst_44695 = (state_44814[(13)]);
var inst_44696 = (state_44814[(14)]);
var inst_44698 = (inst_44696 < inst_44695);
var inst_44699 = inst_44698;
var state_44814__$1 = state_44814;
if(cljs.core.truth_(inst_44699)){
var statearr_44891_46019 = state_44814__$1;
(statearr_44891_46019[(1)] = (10));

} else {
var statearr_44892_46020 = state_44814__$1;
(statearr_44892_46020[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__44073__auto__ = null;
var cljs$core$async$mult_$_state_machine__44073__auto____0 = (function (){
var statearr_44893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44893[(0)] = cljs$core$async$mult_$_state_machine__44073__auto__);

(statearr_44893[(1)] = (1));

return statearr_44893;
});
var cljs$core$async$mult_$_state_machine__44073__auto____1 = (function (state_44814){
while(true){
var ret_value__44074__auto__ = (function (){try{while(true){
var result__44075__auto__ = switch__44072__auto__(state_44814);
if(cljs.core.keyword_identical_QMARK_(result__44075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44075__auto__;
}
break;
}
}catch (e44894){var ex__44076__auto__ = e44894;
var statearr_44895_46026 = state_44814;
(statearr_44895_46026[(2)] = ex__44076__auto__);


if(cljs.core.seq((state_44814[(4)]))){
var statearr_44896_46027 = state_44814;
(statearr_44896_46027[(1)] = cljs.core.first((state_44814[(4)])));

} else {
throw ex__44076__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46028 = state_44814;
state_44814 = G__46028;
continue;
} else {
return ret_value__44074__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44073__auto__ = function(state_44814){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44073__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44073__auto____1.call(this,state_44814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44073__auto____0;
cljs$core$async$mult_$_state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44073__auto____1;
return cljs$core$async$mult_$_state_machine__44073__auto__;
})()
})();
var state__44189__auto__ = (function (){var statearr_44897 = f__44188__auto__();
(statearr_44897[(6)] = c__44187__auto___45954);

return statearr_44897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44189__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__44899 = arguments.length;
switch (G__44899) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_46030 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_46030(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_46033 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_46033(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_46034 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_46034(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_46035 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_46035(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_46038 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_46038(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46039 = arguments.length;
var i__5770__auto___46040 = (0);
while(true){
if((i__5770__auto___46040 < len__5769__auto___46039)){
args__5775__auto__.push((arguments[i__5770__auto___46040]));

var G__46041 = (i__5770__auto___46040 + (1));
i__5770__auto___46040 = G__46041;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44904){
var map__44905 = p__44904;
var map__44905__$1 = cljs.core.__destructure_map(map__44905);
var opts = map__44905__$1;
var statearr_44906_46042 = state;
(statearr_44906_46042[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_44907_46043 = state;
(statearr_44907_46043[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_44908_46044 = state;
(statearr_44908_46044[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44900){
var G__44901 = cljs.core.first(seq44900);
var seq44900__$1 = cljs.core.next(seq44900);
var G__44902 = cljs.core.first(seq44900__$1);
var seq44900__$2 = cljs.core.next(seq44900__$1);
var G__44903 = cljs.core.first(seq44900__$2);
var seq44900__$3 = cljs.core.next(seq44900__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44901,G__44902,G__44903,seq44900__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44909 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44909 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44910){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44910 = meta44910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44911,meta44910__$1){
var self__ = this;
var _44911__$1 = this;
return (new cljs.core.async.t_cljs$core$async44909(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44910__$1));
}));

(cljs.core.async.t_cljs$core$async44909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44911){
var self__ = this;
var _44911__$1 = this;
return self__.meta44910;
}));

(cljs.core.async.t_cljs$core$async44909.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44909.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async44909.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44909.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44909.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44909.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44909.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44909.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44910","meta44910",1721599324,null)], null);
}));

(cljs.core.async.t_cljs$core$async44909.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44909.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44909");

(cljs.core.async.t_cljs$core$async44909.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44909");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44909.
 */
cljs.core.async.__GT_t_cljs$core$async44909 = (function cljs$core$async$mix_$___GT_t_cljs$core$async44909(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44910){
return (new cljs.core.async.t_cljs$core$async44909(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44910));
});

}

return (new cljs.core.async.t_cljs$core$async44909(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44187__auto___46047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44188__auto__ = (function (){var switch__44072__auto__ = (function (state_44979){
var state_val_44980 = (state_44979[(1)]);
if((state_val_44980 === (7))){
var inst_44939 = (state_44979[(2)]);
var state_44979__$1 = state_44979;
if(cljs.core.truth_(inst_44939)){
var statearr_44981_46048 = state_44979__$1;
(statearr_44981_46048[(1)] = (8));

} else {
var statearr_44982_46049 = state_44979__$1;
(statearr_44982_46049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (20))){
var inst_44932 = (state_44979[(7)]);
var state_44979__$1 = state_44979;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44979__$1,(23),out,inst_44932);
} else {
if((state_val_44980 === (1))){
var inst_44915 = calc_state();
var inst_44916 = cljs.core.__destructure_map(inst_44915);
var inst_44917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44916,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44916,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44916,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44920 = inst_44915;
var state_44979__$1 = (function (){var statearr_44983 = state_44979;
(statearr_44983[(8)] = inst_44919);

(statearr_44983[(9)] = inst_44918);

(statearr_44983[(10)] = inst_44917);

(statearr_44983[(11)] = inst_44920);

return statearr_44983;
})();
var statearr_44984_46050 = state_44979__$1;
(statearr_44984_46050[(2)] = null);

(statearr_44984_46050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (24))){
var inst_44923 = (state_44979[(12)]);
var inst_44920 = inst_44923;
var state_44979__$1 = (function (){var statearr_44985 = state_44979;
(statearr_44985[(11)] = inst_44920);

return statearr_44985;
})();
var statearr_44986_46051 = state_44979__$1;
(statearr_44986_46051[(2)] = null);

(statearr_44986_46051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (4))){
var inst_44932 = (state_44979[(7)]);
var inst_44934 = (state_44979[(13)]);
var inst_44931 = (state_44979[(2)]);
var inst_44932__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44931,(0),null);
var inst_44933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44931,(1),null);
var inst_44934__$1 = (inst_44932__$1 == null);
var state_44979__$1 = (function (){var statearr_44987 = state_44979;
(statearr_44987[(7)] = inst_44932__$1);

(statearr_44987[(14)] = inst_44933);

(statearr_44987[(13)] = inst_44934__$1);

return statearr_44987;
})();
if(cljs.core.truth_(inst_44934__$1)){
var statearr_44988_46052 = state_44979__$1;
(statearr_44988_46052[(1)] = (5));

} else {
var statearr_44989_46053 = state_44979__$1;
(statearr_44989_46053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (15))){
var inst_44953 = (state_44979[(15)]);
var inst_44924 = (state_44979[(16)]);
var inst_44953__$1 = cljs.core.empty_QMARK_(inst_44924);
var state_44979__$1 = (function (){var statearr_44990 = state_44979;
(statearr_44990[(15)] = inst_44953__$1);

return statearr_44990;
})();
if(inst_44953__$1){
var statearr_44991_46054 = state_44979__$1;
(statearr_44991_46054[(1)] = (17));

} else {
var statearr_44992_46055 = state_44979__$1;
(statearr_44992_46055[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (21))){
var inst_44923 = (state_44979[(12)]);
var inst_44920 = inst_44923;
var state_44979__$1 = (function (){var statearr_44993 = state_44979;
(statearr_44993[(11)] = inst_44920);

return statearr_44993;
})();
var statearr_44994_46056 = state_44979__$1;
(statearr_44994_46056[(2)] = null);

(statearr_44994_46056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (13))){
var inst_44946 = (state_44979[(2)]);
var inst_44947 = calc_state();
var inst_44920 = inst_44947;
var state_44979__$1 = (function (){var statearr_44995 = state_44979;
(statearr_44995[(17)] = inst_44946);

(statearr_44995[(11)] = inst_44920);

return statearr_44995;
})();
var statearr_44996_46057 = state_44979__$1;
(statearr_44996_46057[(2)] = null);

(statearr_44996_46057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (22))){
var inst_44973 = (state_44979[(2)]);
var state_44979__$1 = state_44979;
var statearr_44997_46058 = state_44979__$1;
(statearr_44997_46058[(2)] = inst_44973);

(statearr_44997_46058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (6))){
var inst_44933 = (state_44979[(14)]);
var inst_44937 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44933,change);
var state_44979__$1 = state_44979;
var statearr_44998_46059 = state_44979__$1;
(statearr_44998_46059[(2)] = inst_44937);

(statearr_44998_46059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (25))){
var state_44979__$1 = state_44979;
var statearr_44999_46060 = state_44979__$1;
(statearr_44999_46060[(2)] = null);

(statearr_44999_46060[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (17))){
var inst_44933 = (state_44979[(14)]);
var inst_44925 = (state_44979[(18)]);
var inst_44955 = (inst_44925.cljs$core$IFn$_invoke$arity$1 ? inst_44925.cljs$core$IFn$_invoke$arity$1(inst_44933) : inst_44925.call(null,inst_44933));
var inst_44956 = cljs.core.not(inst_44955);
var state_44979__$1 = state_44979;
var statearr_45000_46061 = state_44979__$1;
(statearr_45000_46061[(2)] = inst_44956);

(statearr_45000_46061[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (3))){
var inst_44977 = (state_44979[(2)]);
var state_44979__$1 = state_44979;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44979__$1,inst_44977);
} else {
if((state_val_44980 === (12))){
var state_44979__$1 = state_44979;
var statearr_45001_46062 = state_44979__$1;
(statearr_45001_46062[(2)] = null);

(statearr_45001_46062[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (2))){
var inst_44923 = (state_44979[(12)]);
var inst_44920 = (state_44979[(11)]);
var inst_44923__$1 = cljs.core.__destructure_map(inst_44920);
var inst_44924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44923__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44923__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44923__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44979__$1 = (function (){var statearr_45002 = state_44979;
(statearr_45002[(12)] = inst_44923__$1);

(statearr_45002[(18)] = inst_44925);

(statearr_45002[(16)] = inst_44924);

return statearr_45002;
})();
return cljs.core.async.ioc_alts_BANG_(state_44979__$1,(4),inst_44926);
} else {
if((state_val_44980 === (23))){
var inst_44964 = (state_44979[(2)]);
var state_44979__$1 = state_44979;
if(cljs.core.truth_(inst_44964)){
var statearr_45003_46068 = state_44979__$1;
(statearr_45003_46068[(1)] = (24));

} else {
var statearr_45004_46069 = state_44979__$1;
(statearr_45004_46069[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (19))){
var inst_44959 = (state_44979[(2)]);
var state_44979__$1 = state_44979;
var statearr_45005_46070 = state_44979__$1;
(statearr_45005_46070[(2)] = inst_44959);

(statearr_45005_46070[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (11))){
var inst_44933 = (state_44979[(14)]);
var inst_44943 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_44933);
var state_44979__$1 = state_44979;
var statearr_45006_46071 = state_44979__$1;
(statearr_45006_46071[(2)] = inst_44943);

(statearr_45006_46071[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (9))){
var inst_44933 = (state_44979[(14)]);
var inst_44950 = (state_44979[(19)]);
var inst_44924 = (state_44979[(16)]);
var inst_44950__$1 = (inst_44924.cljs$core$IFn$_invoke$arity$1 ? inst_44924.cljs$core$IFn$_invoke$arity$1(inst_44933) : inst_44924.call(null,inst_44933));
var state_44979__$1 = (function (){var statearr_45007 = state_44979;
(statearr_45007[(19)] = inst_44950__$1);

return statearr_45007;
})();
if(cljs.core.truth_(inst_44950__$1)){
var statearr_45008_46072 = state_44979__$1;
(statearr_45008_46072[(1)] = (14));

} else {
var statearr_45009_46073 = state_44979__$1;
(statearr_45009_46073[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (5))){
var inst_44934 = (state_44979[(13)]);
var state_44979__$1 = state_44979;
var statearr_45010_46074 = state_44979__$1;
(statearr_45010_46074[(2)] = inst_44934);

(statearr_45010_46074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (14))){
var inst_44950 = (state_44979[(19)]);
var state_44979__$1 = state_44979;
var statearr_45011_46075 = state_44979__$1;
(statearr_45011_46075[(2)] = inst_44950);

(statearr_45011_46075[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (26))){
var inst_44969 = (state_44979[(2)]);
var state_44979__$1 = state_44979;
var statearr_45012_46076 = state_44979__$1;
(statearr_45012_46076[(2)] = inst_44969);

(statearr_45012_46076[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (16))){
var inst_44961 = (state_44979[(2)]);
var state_44979__$1 = state_44979;
if(cljs.core.truth_(inst_44961)){
var statearr_45013_46077 = state_44979__$1;
(statearr_45013_46077[(1)] = (20));

} else {
var statearr_45014_46078 = state_44979__$1;
(statearr_45014_46078[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (10))){
var inst_44975 = (state_44979[(2)]);
var state_44979__$1 = state_44979;
var statearr_45015_46079 = state_44979__$1;
(statearr_45015_46079[(2)] = inst_44975);

(statearr_45015_46079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (18))){
var inst_44953 = (state_44979[(15)]);
var state_44979__$1 = state_44979;
var statearr_45016_46080 = state_44979__$1;
(statearr_45016_46080[(2)] = inst_44953);

(statearr_45016_46080[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (8))){
var inst_44932 = (state_44979[(7)]);
var inst_44941 = (inst_44932 == null);
var state_44979__$1 = state_44979;
if(cljs.core.truth_(inst_44941)){
var statearr_45017_46085 = state_44979__$1;
(statearr_45017_46085[(1)] = (11));

} else {
var statearr_45018_46086 = state_44979__$1;
(statearr_45018_46086[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__44073__auto__ = null;
var cljs$core$async$mix_$_state_machine__44073__auto____0 = (function (){
var statearr_45019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45019[(0)] = cljs$core$async$mix_$_state_machine__44073__auto__);

(statearr_45019[(1)] = (1));

return statearr_45019;
});
var cljs$core$async$mix_$_state_machine__44073__auto____1 = (function (state_44979){
while(true){
var ret_value__44074__auto__ = (function (){try{while(true){
var result__44075__auto__ = switch__44072__auto__(state_44979);
if(cljs.core.keyword_identical_QMARK_(result__44075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44075__auto__;
}
break;
}
}catch (e45020){var ex__44076__auto__ = e45020;
var statearr_45021_46090 = state_44979;
(statearr_45021_46090[(2)] = ex__44076__auto__);


if(cljs.core.seq((state_44979[(4)]))){
var statearr_45022_46091 = state_44979;
(statearr_45022_46091[(1)] = cljs.core.first((state_44979[(4)])));

} else {
throw ex__44076__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46092 = state_44979;
state_44979 = G__46092;
continue;
} else {
return ret_value__44074__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44073__auto__ = function(state_44979){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44073__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44073__auto____1.call(this,state_44979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44073__auto____0;
cljs$core$async$mix_$_state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44073__auto____1;
return cljs$core$async$mix_$_state_machine__44073__auto__;
})()
})();
var state__44189__auto__ = (function (){var statearr_45023 = f__44188__auto__();
(statearr_45023[(6)] = c__44187__auto___46047);

return statearr_45023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44189__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_46093 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_46093(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_46094 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_46094(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_46095 = (function() {
var G__46096 = null;
var G__46096__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__46096__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__46096 = function(p,v){
switch(arguments.length){
case 1:
return G__46096__1.call(this,p);
case 2:
return G__46096__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46096.cljs$core$IFn$_invoke$arity$1 = G__46096__1;
G__46096.cljs$core$IFn$_invoke$arity$2 = G__46096__2;
return G__46096;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45025 = arguments.length;
switch (G__45025) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_46095(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_46095(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__45028 = arguments.length;
switch (G__45028) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45026_SHARP_){
if(cljs.core.truth_((p1__45026_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45026_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45026_SHARP_.call(null,topic)))){
return p1__45026_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45026_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45029 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45029 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45030){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45030 = meta45030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45031,meta45030__$1){
var self__ = this;
var _45031__$1 = this;
return (new cljs.core.async.t_cljs$core$async45029(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45030__$1));
}));

(cljs.core.async.t_cljs$core$async45029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45031){
var self__ = this;
var _45031__$1 = this;
return self__.meta45030;
}));

(cljs.core.async.t_cljs$core$async45029.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45029.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45029.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45029.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45029.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async45029.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45029.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45030","meta45030",-130080934,null)], null);
}));

(cljs.core.async.t_cljs$core$async45029.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45029");

(cljs.core.async.t_cljs$core$async45029.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45029");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45029.
 */
cljs.core.async.__GT_t_cljs$core$async45029 = (function cljs$core$async$__GT_t_cljs$core$async45029(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45030){
return (new cljs.core.async.t_cljs$core$async45029(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45030));
});

}

return (new cljs.core.async.t_cljs$core$async45029(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44187__auto___46114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44188__auto__ = (function (){var switch__44072__auto__ = (function (state_45103){
var state_val_45104 = (state_45103[(1)]);
if((state_val_45104 === (7))){
var inst_45099 = (state_45103[(2)]);
var state_45103__$1 = state_45103;
var statearr_45105_46115 = state_45103__$1;
(statearr_45105_46115[(2)] = inst_45099);

(statearr_45105_46115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (20))){
var state_45103__$1 = state_45103;
var statearr_45106_46116 = state_45103__$1;
(statearr_45106_46116[(2)] = null);

(statearr_45106_46116[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (1))){
var state_45103__$1 = state_45103;
var statearr_45107_46117 = state_45103__$1;
(statearr_45107_46117[(2)] = null);

(statearr_45107_46117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (24))){
var inst_45082 = (state_45103[(7)]);
var inst_45091 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45082);
var state_45103__$1 = state_45103;
var statearr_45108_46118 = state_45103__$1;
(statearr_45108_46118[(2)] = inst_45091);

(statearr_45108_46118[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (4))){
var inst_45034 = (state_45103[(8)]);
var inst_45034__$1 = (state_45103[(2)]);
var inst_45035 = (inst_45034__$1 == null);
var state_45103__$1 = (function (){var statearr_45109 = state_45103;
(statearr_45109[(8)] = inst_45034__$1);

return statearr_45109;
})();
if(cljs.core.truth_(inst_45035)){
var statearr_45110_46119 = state_45103__$1;
(statearr_45110_46119[(1)] = (5));

} else {
var statearr_45111_46120 = state_45103__$1;
(statearr_45111_46120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (15))){
var inst_45076 = (state_45103[(2)]);
var state_45103__$1 = state_45103;
var statearr_45112_46121 = state_45103__$1;
(statearr_45112_46121[(2)] = inst_45076);

(statearr_45112_46121[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (21))){
var inst_45096 = (state_45103[(2)]);
var state_45103__$1 = (function (){var statearr_45113 = state_45103;
(statearr_45113[(9)] = inst_45096);

return statearr_45113;
})();
var statearr_45114_46122 = state_45103__$1;
(statearr_45114_46122[(2)] = null);

(statearr_45114_46122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (13))){
var inst_45058 = (state_45103[(10)]);
var inst_45060 = cljs.core.chunked_seq_QMARK_(inst_45058);
var state_45103__$1 = state_45103;
if(inst_45060){
var statearr_45115_46123 = state_45103__$1;
(statearr_45115_46123[(1)] = (16));

} else {
var statearr_45116_46124 = state_45103__$1;
(statearr_45116_46124[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (22))){
var inst_45088 = (state_45103[(2)]);
var state_45103__$1 = state_45103;
if(cljs.core.truth_(inst_45088)){
var statearr_45117_46125 = state_45103__$1;
(statearr_45117_46125[(1)] = (23));

} else {
var statearr_45118_46126 = state_45103__$1;
(statearr_45118_46126[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (6))){
var inst_45034 = (state_45103[(8)]);
var inst_45084 = (state_45103[(11)]);
var inst_45082 = (state_45103[(7)]);
var inst_45082__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45034) : topic_fn.call(null,inst_45034));
var inst_45083 = cljs.core.deref(mults);
var inst_45084__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45083,inst_45082__$1);
var state_45103__$1 = (function (){var statearr_45119 = state_45103;
(statearr_45119[(11)] = inst_45084__$1);

(statearr_45119[(7)] = inst_45082__$1);

return statearr_45119;
})();
if(cljs.core.truth_(inst_45084__$1)){
var statearr_45120_46131 = state_45103__$1;
(statearr_45120_46131[(1)] = (19));

} else {
var statearr_45121_46132 = state_45103__$1;
(statearr_45121_46132[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (25))){
var inst_45093 = (state_45103[(2)]);
var state_45103__$1 = state_45103;
var statearr_45122_46133 = state_45103__$1;
(statearr_45122_46133[(2)] = inst_45093);

(statearr_45122_46133[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (17))){
var inst_45058 = (state_45103[(10)]);
var inst_45067 = cljs.core.first(inst_45058);
var inst_45068 = cljs.core.async.muxch_STAR_(inst_45067);
var inst_45069 = cljs.core.async.close_BANG_(inst_45068);
var inst_45070 = cljs.core.next(inst_45058);
var inst_45044 = inst_45070;
var inst_45045 = null;
var inst_45046 = (0);
var inst_45047 = (0);
var state_45103__$1 = (function (){var statearr_45123 = state_45103;
(statearr_45123[(12)] = inst_45047);

(statearr_45123[(13)] = inst_45046);

(statearr_45123[(14)] = inst_45045);

(statearr_45123[(15)] = inst_45044);

(statearr_45123[(16)] = inst_45069);

return statearr_45123;
})();
var statearr_45124_46134 = state_45103__$1;
(statearr_45124_46134[(2)] = null);

(statearr_45124_46134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (3))){
var inst_45101 = (state_45103[(2)]);
var state_45103__$1 = state_45103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45103__$1,inst_45101);
} else {
if((state_val_45104 === (12))){
var inst_45078 = (state_45103[(2)]);
var state_45103__$1 = state_45103;
var statearr_45125_46135 = state_45103__$1;
(statearr_45125_46135[(2)] = inst_45078);

(statearr_45125_46135[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (2))){
var state_45103__$1 = state_45103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45103__$1,(4),ch);
} else {
if((state_val_45104 === (23))){
var state_45103__$1 = state_45103;
var statearr_45126_46136 = state_45103__$1;
(statearr_45126_46136[(2)] = null);

(statearr_45126_46136[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (19))){
var inst_45034 = (state_45103[(8)]);
var inst_45084 = (state_45103[(11)]);
var inst_45086 = cljs.core.async.muxch_STAR_(inst_45084);
var state_45103__$1 = state_45103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45103__$1,(22),inst_45086,inst_45034);
} else {
if((state_val_45104 === (11))){
var inst_45044 = (state_45103[(15)]);
var inst_45058 = (state_45103[(10)]);
var inst_45058__$1 = cljs.core.seq(inst_45044);
var state_45103__$1 = (function (){var statearr_45127 = state_45103;
(statearr_45127[(10)] = inst_45058__$1);

return statearr_45127;
})();
if(inst_45058__$1){
var statearr_45128_46137 = state_45103__$1;
(statearr_45128_46137[(1)] = (13));

} else {
var statearr_45129_46138 = state_45103__$1;
(statearr_45129_46138[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (9))){
var inst_45080 = (state_45103[(2)]);
var state_45103__$1 = state_45103;
var statearr_45130_46139 = state_45103__$1;
(statearr_45130_46139[(2)] = inst_45080);

(statearr_45130_46139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (5))){
var inst_45041 = cljs.core.deref(mults);
var inst_45042 = cljs.core.vals(inst_45041);
var inst_45043 = cljs.core.seq(inst_45042);
var inst_45044 = inst_45043;
var inst_45045 = null;
var inst_45046 = (0);
var inst_45047 = (0);
var state_45103__$1 = (function (){var statearr_45131 = state_45103;
(statearr_45131[(12)] = inst_45047);

(statearr_45131[(13)] = inst_45046);

(statearr_45131[(14)] = inst_45045);

(statearr_45131[(15)] = inst_45044);

return statearr_45131;
})();
var statearr_45132_46144 = state_45103__$1;
(statearr_45132_46144[(2)] = null);

(statearr_45132_46144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (14))){
var state_45103__$1 = state_45103;
var statearr_45136_46145 = state_45103__$1;
(statearr_45136_46145[(2)] = null);

(statearr_45136_46145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (16))){
var inst_45058 = (state_45103[(10)]);
var inst_45062 = cljs.core.chunk_first(inst_45058);
var inst_45063 = cljs.core.chunk_rest(inst_45058);
var inst_45064 = cljs.core.count(inst_45062);
var inst_45044 = inst_45063;
var inst_45045 = inst_45062;
var inst_45046 = inst_45064;
var inst_45047 = (0);
var state_45103__$1 = (function (){var statearr_45137 = state_45103;
(statearr_45137[(12)] = inst_45047);

(statearr_45137[(13)] = inst_45046);

(statearr_45137[(14)] = inst_45045);

(statearr_45137[(15)] = inst_45044);

return statearr_45137;
})();
var statearr_45138_46147 = state_45103__$1;
(statearr_45138_46147[(2)] = null);

(statearr_45138_46147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (10))){
var inst_45047 = (state_45103[(12)]);
var inst_45046 = (state_45103[(13)]);
var inst_45045 = (state_45103[(14)]);
var inst_45044 = (state_45103[(15)]);
var inst_45052 = cljs.core._nth(inst_45045,inst_45047);
var inst_45053 = cljs.core.async.muxch_STAR_(inst_45052);
var inst_45054 = cljs.core.async.close_BANG_(inst_45053);
var inst_45055 = (inst_45047 + (1));
var tmp45133 = inst_45046;
var tmp45134 = inst_45045;
var tmp45135 = inst_45044;
var inst_45044__$1 = tmp45135;
var inst_45045__$1 = tmp45134;
var inst_45046__$1 = tmp45133;
var inst_45047__$1 = inst_45055;
var state_45103__$1 = (function (){var statearr_45139 = state_45103;
(statearr_45139[(12)] = inst_45047__$1);

(statearr_45139[(13)] = inst_45046__$1);

(statearr_45139[(14)] = inst_45045__$1);

(statearr_45139[(17)] = inst_45054);

(statearr_45139[(15)] = inst_45044__$1);

return statearr_45139;
})();
var statearr_45140_46148 = state_45103__$1;
(statearr_45140_46148[(2)] = null);

(statearr_45140_46148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (18))){
var inst_45073 = (state_45103[(2)]);
var state_45103__$1 = state_45103;
var statearr_45141_46149 = state_45103__$1;
(statearr_45141_46149[(2)] = inst_45073);

(statearr_45141_46149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (8))){
var inst_45047 = (state_45103[(12)]);
var inst_45046 = (state_45103[(13)]);
var inst_45049 = (inst_45047 < inst_45046);
var inst_45050 = inst_45049;
var state_45103__$1 = state_45103;
if(cljs.core.truth_(inst_45050)){
var statearr_45142_46150 = state_45103__$1;
(statearr_45142_46150[(1)] = (10));

} else {
var statearr_45143_46151 = state_45103__$1;
(statearr_45143_46151[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44073__auto__ = null;
var cljs$core$async$state_machine__44073__auto____0 = (function (){
var statearr_45144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45144[(0)] = cljs$core$async$state_machine__44073__auto__);

(statearr_45144[(1)] = (1));

return statearr_45144;
});
var cljs$core$async$state_machine__44073__auto____1 = (function (state_45103){
while(true){
var ret_value__44074__auto__ = (function (){try{while(true){
var result__44075__auto__ = switch__44072__auto__(state_45103);
if(cljs.core.keyword_identical_QMARK_(result__44075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44075__auto__;
}
break;
}
}catch (e45145){var ex__44076__auto__ = e45145;
var statearr_45146_46152 = state_45103;
(statearr_45146_46152[(2)] = ex__44076__auto__);


if(cljs.core.seq((state_45103[(4)]))){
var statearr_45147_46153 = state_45103;
(statearr_45147_46153[(1)] = cljs.core.first((state_45103[(4)])));

} else {
throw ex__44076__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46154 = state_45103;
state_45103 = G__46154;
continue;
} else {
return ret_value__44074__auto__;
}
break;
}
});
cljs$core$async$state_machine__44073__auto__ = function(state_45103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44073__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44073__auto____1.call(this,state_45103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44073__auto____0;
cljs$core$async$state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44073__auto____1;
return cljs$core$async$state_machine__44073__auto__;
})()
})();
var state__44189__auto__ = (function (){var statearr_45148 = f__44188__auto__();
(statearr_45148[(6)] = c__44187__auto___46114);

return statearr_45148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44189__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__45150 = arguments.length;
switch (G__45150) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__45152 = arguments.length;
switch (G__45152) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__45154 = arguments.length;
switch (G__45154) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__44187__auto___46163 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44188__auto__ = (function (){var switch__44072__auto__ = (function (state_45197){
var state_val_45198 = (state_45197[(1)]);
if((state_val_45198 === (7))){
var state_45197__$1 = state_45197;
var statearr_45199_46164 = state_45197__$1;
(statearr_45199_46164[(2)] = null);

(statearr_45199_46164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45198 === (1))){
var state_45197__$1 = state_45197;
var statearr_45200_46165 = state_45197__$1;
(statearr_45200_46165[(2)] = null);

(statearr_45200_46165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45198 === (4))){
var inst_45158 = (state_45197[(7)]);
var inst_45157 = (state_45197[(8)]);
var inst_45160 = (inst_45158 < inst_45157);
var state_45197__$1 = state_45197;
if(cljs.core.truth_(inst_45160)){
var statearr_45201_46166 = state_45197__$1;
(statearr_45201_46166[(1)] = (6));

} else {
var statearr_45202_46167 = state_45197__$1;
(statearr_45202_46167[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45198 === (15))){
var inst_45183 = (state_45197[(9)]);
var inst_45188 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45183);
var state_45197__$1 = state_45197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45197__$1,(17),out,inst_45188);
} else {
if((state_val_45198 === (13))){
var inst_45183 = (state_45197[(9)]);
var inst_45183__$1 = (state_45197[(2)]);
var inst_45184 = cljs.core.some(cljs.core.nil_QMARK_,inst_45183__$1);
var state_45197__$1 = (function (){var statearr_45203 = state_45197;
(statearr_45203[(9)] = inst_45183__$1);

return statearr_45203;
})();
if(cljs.core.truth_(inst_45184)){
var statearr_45204_46168 = state_45197__$1;
(statearr_45204_46168[(1)] = (14));

} else {
var statearr_45205_46169 = state_45197__$1;
(statearr_45205_46169[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45198 === (6))){
var state_45197__$1 = state_45197;
var statearr_45206_46170 = state_45197__$1;
(statearr_45206_46170[(2)] = null);

(statearr_45206_46170[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45198 === (17))){
var inst_45190 = (state_45197[(2)]);
var state_45197__$1 = (function (){var statearr_45208 = state_45197;
(statearr_45208[(10)] = inst_45190);

return statearr_45208;
})();
var statearr_45209_46171 = state_45197__$1;
(statearr_45209_46171[(2)] = null);

(statearr_45209_46171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45198 === (3))){
var inst_45195 = (state_45197[(2)]);
var state_45197__$1 = state_45197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45197__$1,inst_45195);
} else {
if((state_val_45198 === (12))){
var _ = (function (){var statearr_45210 = state_45197;
(statearr_45210[(4)] = cljs.core.rest((state_45197[(4)])));

return statearr_45210;
})();
var state_45197__$1 = state_45197;
var ex45207 = (state_45197__$1[(2)]);
var statearr_45211_46172 = state_45197__$1;
(statearr_45211_46172[(5)] = ex45207);


if((ex45207 instanceof Object)){
var statearr_45212_46173 = state_45197__$1;
(statearr_45212_46173[(1)] = (11));

(statearr_45212_46173[(5)] = null);

} else {
throw ex45207;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45198 === (2))){
var inst_45156 = cljs.core.reset_BANG_(dctr,cnt);
var inst_45157 = cnt;
var inst_45158 = (0);
var state_45197__$1 = (function (){var statearr_45213 = state_45197;
(statearr_45213[(7)] = inst_45158);

(statearr_45213[(8)] = inst_45157);

(statearr_45213[(11)] = inst_45156);

return statearr_45213;
})();
var statearr_45214_46174 = state_45197__$1;
(statearr_45214_46174[(2)] = null);

(statearr_45214_46174[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45198 === (11))){
var inst_45162 = (state_45197[(2)]);
var inst_45163 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_45197__$1 = (function (){var statearr_45215 = state_45197;
(statearr_45215[(12)] = inst_45162);

return statearr_45215;
})();
var statearr_45216_46175 = state_45197__$1;
(statearr_45216_46175[(2)] = inst_45163);

(statearr_45216_46175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45198 === (9))){
var inst_45158 = (state_45197[(7)]);
var _ = (function (){var statearr_45217 = state_45197;
(statearr_45217[(4)] = cljs.core.cons((12),(state_45197[(4)])));

return statearr_45217;
})();
var inst_45169 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_45158) : chs__$1.call(null,inst_45158));
var inst_45170 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_45158) : done.call(null,inst_45158));
var inst_45171 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45169,inst_45170);
var ___$1 = (function (){var statearr_45218 = state_45197;
(statearr_45218[(4)] = cljs.core.rest((state_45197[(4)])));

return statearr_45218;
})();
var state_45197__$1 = state_45197;
var statearr_45219_46176 = state_45197__$1;
(statearr_45219_46176[(2)] = inst_45171);

(statearr_45219_46176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45198 === (5))){
var inst_45181 = (state_45197[(2)]);
var state_45197__$1 = (function (){var statearr_45220 = state_45197;
(statearr_45220[(13)] = inst_45181);

return statearr_45220;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45197__$1,(13),dchan);
} else {
if((state_val_45198 === (14))){
var inst_45186 = cljs.core.async.close_BANG_(out);
var state_45197__$1 = state_45197;
var statearr_45221_46177 = state_45197__$1;
(statearr_45221_46177[(2)] = inst_45186);

(statearr_45221_46177[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45198 === (16))){
var inst_45193 = (state_45197[(2)]);
var state_45197__$1 = state_45197;
var statearr_45222_46178 = state_45197__$1;
(statearr_45222_46178[(2)] = inst_45193);

(statearr_45222_46178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45198 === (10))){
var inst_45158 = (state_45197[(7)]);
var inst_45174 = (state_45197[(2)]);
var inst_45175 = (inst_45158 + (1));
var inst_45158__$1 = inst_45175;
var state_45197__$1 = (function (){var statearr_45223 = state_45197;
(statearr_45223[(7)] = inst_45158__$1);

(statearr_45223[(14)] = inst_45174);

return statearr_45223;
})();
var statearr_45224_46179 = state_45197__$1;
(statearr_45224_46179[(2)] = null);

(statearr_45224_46179[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45198 === (8))){
var inst_45179 = (state_45197[(2)]);
var state_45197__$1 = state_45197;
var statearr_45225_46180 = state_45197__$1;
(statearr_45225_46180[(2)] = inst_45179);

(statearr_45225_46180[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44073__auto__ = null;
var cljs$core$async$state_machine__44073__auto____0 = (function (){
var statearr_45226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45226[(0)] = cljs$core$async$state_machine__44073__auto__);

(statearr_45226[(1)] = (1));

return statearr_45226;
});
var cljs$core$async$state_machine__44073__auto____1 = (function (state_45197){
while(true){
var ret_value__44074__auto__ = (function (){try{while(true){
var result__44075__auto__ = switch__44072__auto__(state_45197);
if(cljs.core.keyword_identical_QMARK_(result__44075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44075__auto__;
}
break;
}
}catch (e45227){var ex__44076__auto__ = e45227;
var statearr_45228_46181 = state_45197;
(statearr_45228_46181[(2)] = ex__44076__auto__);


if(cljs.core.seq((state_45197[(4)]))){
var statearr_45229_46182 = state_45197;
(statearr_45229_46182[(1)] = cljs.core.first((state_45197[(4)])));

} else {
throw ex__44076__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46183 = state_45197;
state_45197 = G__46183;
continue;
} else {
return ret_value__44074__auto__;
}
break;
}
});
cljs$core$async$state_machine__44073__auto__ = function(state_45197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44073__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44073__auto____1.call(this,state_45197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44073__auto____0;
cljs$core$async$state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44073__auto____1;
return cljs$core$async$state_machine__44073__auto__;
})()
})();
var state__44189__auto__ = (function (){var statearr_45230 = f__44188__auto__();
(statearr_45230[(6)] = c__44187__auto___46163);

return statearr_45230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44189__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__45233 = arguments.length;
switch (G__45233) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44187__auto___46185 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44188__auto__ = (function (){var switch__44072__auto__ = (function (state_45265){
var state_val_45266 = (state_45265[(1)]);
if((state_val_45266 === (7))){
var inst_45244 = (state_45265[(7)]);
var inst_45245 = (state_45265[(8)]);
var inst_45244__$1 = (state_45265[(2)]);
var inst_45245__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45244__$1,(0),null);
var inst_45246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45244__$1,(1),null);
var inst_45247 = (inst_45245__$1 == null);
var state_45265__$1 = (function (){var statearr_45267 = state_45265;
(statearr_45267[(7)] = inst_45244__$1);

(statearr_45267[(9)] = inst_45246);

(statearr_45267[(8)] = inst_45245__$1);

return statearr_45267;
})();
if(cljs.core.truth_(inst_45247)){
var statearr_45268_46186 = state_45265__$1;
(statearr_45268_46186[(1)] = (8));

} else {
var statearr_45269_46187 = state_45265__$1;
(statearr_45269_46187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45266 === (1))){
var inst_45234 = cljs.core.vec(chs);
var inst_45235 = inst_45234;
var state_45265__$1 = (function (){var statearr_45270 = state_45265;
(statearr_45270[(10)] = inst_45235);

return statearr_45270;
})();
var statearr_45271_46192 = state_45265__$1;
(statearr_45271_46192[(2)] = null);

(statearr_45271_46192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45266 === (4))){
var inst_45235 = (state_45265[(10)]);
var state_45265__$1 = state_45265;
return cljs.core.async.ioc_alts_BANG_(state_45265__$1,(7),inst_45235);
} else {
if((state_val_45266 === (6))){
var inst_45261 = (state_45265[(2)]);
var state_45265__$1 = state_45265;
var statearr_45272_46193 = state_45265__$1;
(statearr_45272_46193[(2)] = inst_45261);

(statearr_45272_46193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45266 === (3))){
var inst_45263 = (state_45265[(2)]);
var state_45265__$1 = state_45265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45265__$1,inst_45263);
} else {
if((state_val_45266 === (2))){
var inst_45235 = (state_45265[(10)]);
var inst_45237 = cljs.core.count(inst_45235);
var inst_45238 = (inst_45237 > (0));
var state_45265__$1 = state_45265;
if(cljs.core.truth_(inst_45238)){
var statearr_45274_46194 = state_45265__$1;
(statearr_45274_46194[(1)] = (4));

} else {
var statearr_45275_46195 = state_45265__$1;
(statearr_45275_46195[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45266 === (11))){
var inst_45235 = (state_45265[(10)]);
var inst_45254 = (state_45265[(2)]);
var tmp45273 = inst_45235;
var inst_45235__$1 = tmp45273;
var state_45265__$1 = (function (){var statearr_45276 = state_45265;
(statearr_45276[(11)] = inst_45254);

(statearr_45276[(10)] = inst_45235__$1);

return statearr_45276;
})();
var statearr_45277_46196 = state_45265__$1;
(statearr_45277_46196[(2)] = null);

(statearr_45277_46196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45266 === (9))){
var inst_45245 = (state_45265[(8)]);
var state_45265__$1 = state_45265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45265__$1,(11),out,inst_45245);
} else {
if((state_val_45266 === (5))){
var inst_45259 = cljs.core.async.close_BANG_(out);
var state_45265__$1 = state_45265;
var statearr_45278_46197 = state_45265__$1;
(statearr_45278_46197[(2)] = inst_45259);

(statearr_45278_46197[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45266 === (10))){
var inst_45257 = (state_45265[(2)]);
var state_45265__$1 = state_45265;
var statearr_45279_46198 = state_45265__$1;
(statearr_45279_46198[(2)] = inst_45257);

(statearr_45279_46198[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45266 === (8))){
var inst_45244 = (state_45265[(7)]);
var inst_45246 = (state_45265[(9)]);
var inst_45245 = (state_45265[(8)]);
var inst_45235 = (state_45265[(10)]);
var inst_45249 = (function (){var cs = inst_45235;
var vec__45240 = inst_45244;
var v = inst_45245;
var c = inst_45246;
return (function (p1__45231_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__45231_SHARP_);
});
})();
var inst_45250 = cljs.core.filterv(inst_45249,inst_45235);
var inst_45235__$1 = inst_45250;
var state_45265__$1 = (function (){var statearr_45280 = state_45265;
(statearr_45280[(10)] = inst_45235__$1);

return statearr_45280;
})();
var statearr_45281_46199 = state_45265__$1;
(statearr_45281_46199[(2)] = null);

(statearr_45281_46199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44073__auto__ = null;
var cljs$core$async$state_machine__44073__auto____0 = (function (){
var statearr_45282 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45282[(0)] = cljs$core$async$state_machine__44073__auto__);

(statearr_45282[(1)] = (1));

return statearr_45282;
});
var cljs$core$async$state_machine__44073__auto____1 = (function (state_45265){
while(true){
var ret_value__44074__auto__ = (function (){try{while(true){
var result__44075__auto__ = switch__44072__auto__(state_45265);
if(cljs.core.keyword_identical_QMARK_(result__44075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44075__auto__;
}
break;
}
}catch (e45283){var ex__44076__auto__ = e45283;
var statearr_45284_46200 = state_45265;
(statearr_45284_46200[(2)] = ex__44076__auto__);


if(cljs.core.seq((state_45265[(4)]))){
var statearr_45285_46201 = state_45265;
(statearr_45285_46201[(1)] = cljs.core.first((state_45265[(4)])));

} else {
throw ex__44076__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46202 = state_45265;
state_45265 = G__46202;
continue;
} else {
return ret_value__44074__auto__;
}
break;
}
});
cljs$core$async$state_machine__44073__auto__ = function(state_45265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44073__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44073__auto____1.call(this,state_45265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44073__auto____0;
cljs$core$async$state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44073__auto____1;
return cljs$core$async$state_machine__44073__auto__;
})()
})();
var state__44189__auto__ = (function (){var statearr_45286 = f__44188__auto__();
(statearr_45286[(6)] = c__44187__auto___46185);

return statearr_45286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44189__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__45288 = arguments.length;
switch (G__45288) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44187__auto___46205 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44188__auto__ = (function (){var switch__44072__auto__ = (function (state_45312){
var state_val_45313 = (state_45312[(1)]);
if((state_val_45313 === (7))){
var inst_45294 = (state_45312[(7)]);
var inst_45294__$1 = (state_45312[(2)]);
var inst_45295 = (inst_45294__$1 == null);
var inst_45296 = cljs.core.not(inst_45295);
var state_45312__$1 = (function (){var statearr_45314 = state_45312;
(statearr_45314[(7)] = inst_45294__$1);

return statearr_45314;
})();
if(inst_45296){
var statearr_45315_46206 = state_45312__$1;
(statearr_45315_46206[(1)] = (8));

} else {
var statearr_45316_46207 = state_45312__$1;
(statearr_45316_46207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45313 === (1))){
var inst_45289 = (0);
var state_45312__$1 = (function (){var statearr_45317 = state_45312;
(statearr_45317[(8)] = inst_45289);

return statearr_45317;
})();
var statearr_45318_46208 = state_45312__$1;
(statearr_45318_46208[(2)] = null);

(statearr_45318_46208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45313 === (4))){
var state_45312__$1 = state_45312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45312__$1,(7),ch);
} else {
if((state_val_45313 === (6))){
var inst_45307 = (state_45312[(2)]);
var state_45312__$1 = state_45312;
var statearr_45319_46209 = state_45312__$1;
(statearr_45319_46209[(2)] = inst_45307);

(statearr_45319_46209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45313 === (3))){
var inst_45309 = (state_45312[(2)]);
var inst_45310 = cljs.core.async.close_BANG_(out);
var state_45312__$1 = (function (){var statearr_45320 = state_45312;
(statearr_45320[(9)] = inst_45309);

return statearr_45320;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45312__$1,inst_45310);
} else {
if((state_val_45313 === (2))){
var inst_45289 = (state_45312[(8)]);
var inst_45291 = (inst_45289 < n);
var state_45312__$1 = state_45312;
if(cljs.core.truth_(inst_45291)){
var statearr_45321_46210 = state_45312__$1;
(statearr_45321_46210[(1)] = (4));

} else {
var statearr_45322_46211 = state_45312__$1;
(statearr_45322_46211[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45313 === (11))){
var inst_45289 = (state_45312[(8)]);
var inst_45299 = (state_45312[(2)]);
var inst_45300 = (inst_45289 + (1));
var inst_45289__$1 = inst_45300;
var state_45312__$1 = (function (){var statearr_45323 = state_45312;
(statearr_45323[(10)] = inst_45299);

(statearr_45323[(8)] = inst_45289__$1);

return statearr_45323;
})();
var statearr_45324_46212 = state_45312__$1;
(statearr_45324_46212[(2)] = null);

(statearr_45324_46212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45313 === (9))){
var state_45312__$1 = state_45312;
var statearr_45325_46213 = state_45312__$1;
(statearr_45325_46213[(2)] = null);

(statearr_45325_46213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45313 === (5))){
var state_45312__$1 = state_45312;
var statearr_45326_46214 = state_45312__$1;
(statearr_45326_46214[(2)] = null);

(statearr_45326_46214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45313 === (10))){
var inst_45304 = (state_45312[(2)]);
var state_45312__$1 = state_45312;
var statearr_45327_46215 = state_45312__$1;
(statearr_45327_46215[(2)] = inst_45304);

(statearr_45327_46215[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45313 === (8))){
var inst_45294 = (state_45312[(7)]);
var state_45312__$1 = state_45312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45312__$1,(11),out,inst_45294);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44073__auto__ = null;
var cljs$core$async$state_machine__44073__auto____0 = (function (){
var statearr_45328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45328[(0)] = cljs$core$async$state_machine__44073__auto__);

(statearr_45328[(1)] = (1));

return statearr_45328;
});
var cljs$core$async$state_machine__44073__auto____1 = (function (state_45312){
while(true){
var ret_value__44074__auto__ = (function (){try{while(true){
var result__44075__auto__ = switch__44072__auto__(state_45312);
if(cljs.core.keyword_identical_QMARK_(result__44075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44075__auto__;
}
break;
}
}catch (e45329){var ex__44076__auto__ = e45329;
var statearr_45330_46220 = state_45312;
(statearr_45330_46220[(2)] = ex__44076__auto__);


if(cljs.core.seq((state_45312[(4)]))){
var statearr_45331_46221 = state_45312;
(statearr_45331_46221[(1)] = cljs.core.first((state_45312[(4)])));

} else {
throw ex__44076__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46222 = state_45312;
state_45312 = G__46222;
continue;
} else {
return ret_value__44074__auto__;
}
break;
}
});
cljs$core$async$state_machine__44073__auto__ = function(state_45312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44073__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44073__auto____1.call(this,state_45312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44073__auto____0;
cljs$core$async$state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44073__auto____1;
return cljs$core$async$state_machine__44073__auto__;
})()
})();
var state__44189__auto__ = (function (){var statearr_45332 = f__44188__auto__();
(statearr_45332[(6)] = c__44187__auto___46205);

return statearr_45332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44189__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45334 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45334 = (function (f,ch,meta45335){
this.f = f;
this.ch = ch;
this.meta45335 = meta45335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45336,meta45335__$1){
var self__ = this;
var _45336__$1 = this;
return (new cljs.core.async.t_cljs$core$async45334(self__.f,self__.ch,meta45335__$1));
}));

(cljs.core.async.t_cljs$core$async45334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45336){
var self__ = this;
var _45336__$1 = this;
return self__.meta45335;
}));

(cljs.core.async.t_cljs$core$async45334.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45334.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45334.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45334.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45334.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45337 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45337 = (function (f,ch,meta45335,_,fn1,meta45338){
this.f = f;
this.ch = ch;
this.meta45335 = meta45335;
this._ = _;
this.fn1 = fn1;
this.meta45338 = meta45338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45339,meta45338__$1){
var self__ = this;
var _45339__$1 = this;
return (new cljs.core.async.t_cljs$core$async45337(self__.f,self__.ch,self__.meta45335,self__._,self__.fn1,meta45338__$1));
}));

(cljs.core.async.t_cljs$core$async45337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45339){
var self__ = this;
var _45339__$1 = this;
return self__.meta45338;
}));

(cljs.core.async.t_cljs$core$async45337.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45337.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async45337.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45337.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__45333_SHARP_){
var G__45340 = (((p1__45333_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__45333_SHARP_) : self__.f.call(null,p1__45333_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__45340) : f1.call(null,G__45340));
});
}));

(cljs.core.async.t_cljs$core$async45337.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45335","meta45335",1967467044,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45334","cljs.core.async/t_cljs$core$async45334",-1684107572,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45338","meta45338",-321627486,null)], null);
}));

(cljs.core.async.t_cljs$core$async45337.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45337.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45337");

(cljs.core.async.t_cljs$core$async45337.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45337");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45337.
 */
cljs.core.async.__GT_t_cljs$core$async45337 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45337(f__$1,ch__$1,meta45335__$1,___$2,fn1__$1,meta45338){
return (new cljs.core.async.t_cljs$core$async45337(f__$1,ch__$1,meta45335__$1,___$2,fn1__$1,meta45338));
});

}

return (new cljs.core.async.t_cljs$core$async45337(self__.f,self__.ch,self__.meta45335,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__45341 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45341) : self__.f.call(null,G__45341));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async45334.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45334.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async45334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45335","meta45335",1967467044,null)], null);
}));

(cljs.core.async.t_cljs$core$async45334.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45334");

(cljs.core.async.t_cljs$core$async45334.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45334");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45334.
 */
cljs.core.async.__GT_t_cljs$core$async45334 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45334(f__$1,ch__$1,meta45335){
return (new cljs.core.async.t_cljs$core$async45334(f__$1,ch__$1,meta45335));
});

}

return (new cljs.core.async.t_cljs$core$async45334(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45342 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45342 = (function (f,ch,meta45343){
this.f = f;
this.ch = ch;
this.meta45343 = meta45343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45344,meta45343__$1){
var self__ = this;
var _45344__$1 = this;
return (new cljs.core.async.t_cljs$core$async45342(self__.f,self__.ch,meta45343__$1));
}));

(cljs.core.async.t_cljs$core$async45342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45344){
var self__ = this;
var _45344__$1 = this;
return self__.meta45343;
}));

(cljs.core.async.t_cljs$core$async45342.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45342.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45342.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45342.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45342.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45342.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async45342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45343","meta45343",-881944426,null)], null);
}));

(cljs.core.async.t_cljs$core$async45342.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45342");

(cljs.core.async.t_cljs$core$async45342.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45342");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45342.
 */
cljs.core.async.__GT_t_cljs$core$async45342 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45342(f__$1,ch__$1,meta45343){
return (new cljs.core.async.t_cljs$core$async45342(f__$1,ch__$1,meta45343));
});

}

return (new cljs.core.async.t_cljs$core$async45342(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45345 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45345 = (function (p,ch,meta45346){
this.p = p;
this.ch = ch;
this.meta45346 = meta45346;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45347,meta45346__$1){
var self__ = this;
var _45347__$1 = this;
return (new cljs.core.async.t_cljs$core$async45345(self__.p,self__.ch,meta45346__$1));
}));

(cljs.core.async.t_cljs$core$async45345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45347){
var self__ = this;
var _45347__$1 = this;
return self__.meta45346;
}));

(cljs.core.async.t_cljs$core$async45345.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45345.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45345.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45345.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45345.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45345.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45345.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async45345.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45346","meta45346",508040206,null)], null);
}));

(cljs.core.async.t_cljs$core$async45345.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45345.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45345");

(cljs.core.async.t_cljs$core$async45345.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45345");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45345.
 */
cljs.core.async.__GT_t_cljs$core$async45345 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45345(p__$1,ch__$1,meta45346){
return (new cljs.core.async.t_cljs$core$async45345(p__$1,ch__$1,meta45346));
});

}

return (new cljs.core.async.t_cljs$core$async45345(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__45349 = arguments.length;
switch (G__45349) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44187__auto___46234 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44188__auto__ = (function (){var switch__44072__auto__ = (function (state_45370){
var state_val_45371 = (state_45370[(1)]);
if((state_val_45371 === (7))){
var inst_45366 = (state_45370[(2)]);
var state_45370__$1 = state_45370;
var statearr_45372_46235 = state_45370__$1;
(statearr_45372_46235[(2)] = inst_45366);

(statearr_45372_46235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (1))){
var state_45370__$1 = state_45370;
var statearr_45373_46236 = state_45370__$1;
(statearr_45373_46236[(2)] = null);

(statearr_45373_46236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (4))){
var inst_45352 = (state_45370[(7)]);
var inst_45352__$1 = (state_45370[(2)]);
var inst_45353 = (inst_45352__$1 == null);
var state_45370__$1 = (function (){var statearr_45374 = state_45370;
(statearr_45374[(7)] = inst_45352__$1);

return statearr_45374;
})();
if(cljs.core.truth_(inst_45353)){
var statearr_45375_46237 = state_45370__$1;
(statearr_45375_46237[(1)] = (5));

} else {
var statearr_45376_46238 = state_45370__$1;
(statearr_45376_46238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (6))){
var inst_45352 = (state_45370[(7)]);
var inst_45357 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45352) : p.call(null,inst_45352));
var state_45370__$1 = state_45370;
if(cljs.core.truth_(inst_45357)){
var statearr_45377_46239 = state_45370__$1;
(statearr_45377_46239[(1)] = (8));

} else {
var statearr_45378_46240 = state_45370__$1;
(statearr_45378_46240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (3))){
var inst_45368 = (state_45370[(2)]);
var state_45370__$1 = state_45370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45370__$1,inst_45368);
} else {
if((state_val_45371 === (2))){
var state_45370__$1 = state_45370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45370__$1,(4),ch);
} else {
if((state_val_45371 === (11))){
var inst_45360 = (state_45370[(2)]);
var state_45370__$1 = state_45370;
var statearr_45379_46241 = state_45370__$1;
(statearr_45379_46241[(2)] = inst_45360);

(statearr_45379_46241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (9))){
var state_45370__$1 = state_45370;
var statearr_45380_46242 = state_45370__$1;
(statearr_45380_46242[(2)] = null);

(statearr_45380_46242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (5))){
var inst_45355 = cljs.core.async.close_BANG_(out);
var state_45370__$1 = state_45370;
var statearr_45381_46243 = state_45370__$1;
(statearr_45381_46243[(2)] = inst_45355);

(statearr_45381_46243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (10))){
var inst_45363 = (state_45370[(2)]);
var state_45370__$1 = (function (){var statearr_45382 = state_45370;
(statearr_45382[(8)] = inst_45363);

return statearr_45382;
})();
var statearr_45383_46244 = state_45370__$1;
(statearr_45383_46244[(2)] = null);

(statearr_45383_46244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (8))){
var inst_45352 = (state_45370[(7)]);
var state_45370__$1 = state_45370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45370__$1,(11),out,inst_45352);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44073__auto__ = null;
var cljs$core$async$state_machine__44073__auto____0 = (function (){
var statearr_45384 = [null,null,null,null,null,null,null,null,null];
(statearr_45384[(0)] = cljs$core$async$state_machine__44073__auto__);

(statearr_45384[(1)] = (1));

return statearr_45384;
});
var cljs$core$async$state_machine__44073__auto____1 = (function (state_45370){
while(true){
var ret_value__44074__auto__ = (function (){try{while(true){
var result__44075__auto__ = switch__44072__auto__(state_45370);
if(cljs.core.keyword_identical_QMARK_(result__44075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44075__auto__;
}
break;
}
}catch (e45385){var ex__44076__auto__ = e45385;
var statearr_45386_46245 = state_45370;
(statearr_45386_46245[(2)] = ex__44076__auto__);


if(cljs.core.seq((state_45370[(4)]))){
var statearr_45387_46246 = state_45370;
(statearr_45387_46246[(1)] = cljs.core.first((state_45370[(4)])));

} else {
throw ex__44076__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46247 = state_45370;
state_45370 = G__46247;
continue;
} else {
return ret_value__44074__auto__;
}
break;
}
});
cljs$core$async$state_machine__44073__auto__ = function(state_45370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44073__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44073__auto____1.call(this,state_45370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44073__auto____0;
cljs$core$async$state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44073__auto____1;
return cljs$core$async$state_machine__44073__auto__;
})()
})();
var state__44189__auto__ = (function (){var statearr_45388 = f__44188__auto__();
(statearr_45388[(6)] = c__44187__auto___46234);

return statearr_45388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44189__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45390 = arguments.length;
switch (G__45390) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__44187__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44188__auto__ = (function (){var switch__44072__auto__ = (function (state_45452){
var state_val_45453 = (state_45452[(1)]);
if((state_val_45453 === (7))){
var inst_45448 = (state_45452[(2)]);
var state_45452__$1 = state_45452;
var statearr_45454_46249 = state_45452__$1;
(statearr_45454_46249[(2)] = inst_45448);

(statearr_45454_46249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45453 === (20))){
var inst_45418 = (state_45452[(7)]);
var inst_45429 = (state_45452[(2)]);
var inst_45430 = cljs.core.next(inst_45418);
var inst_45404 = inst_45430;
var inst_45405 = null;
var inst_45406 = (0);
var inst_45407 = (0);
var state_45452__$1 = (function (){var statearr_45455 = state_45452;
(statearr_45455[(8)] = inst_45429);

(statearr_45455[(9)] = inst_45405);

(statearr_45455[(10)] = inst_45407);

(statearr_45455[(11)] = inst_45404);

(statearr_45455[(12)] = inst_45406);

return statearr_45455;
})();
var statearr_45456_46250 = state_45452__$1;
(statearr_45456_46250[(2)] = null);

(statearr_45456_46250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45453 === (1))){
var state_45452__$1 = state_45452;
var statearr_45457_46251 = state_45452__$1;
(statearr_45457_46251[(2)] = null);

(statearr_45457_46251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45453 === (4))){
var inst_45393 = (state_45452[(13)]);
var inst_45393__$1 = (state_45452[(2)]);
var inst_45394 = (inst_45393__$1 == null);
var state_45452__$1 = (function (){var statearr_45458 = state_45452;
(statearr_45458[(13)] = inst_45393__$1);

return statearr_45458;
})();
if(cljs.core.truth_(inst_45394)){
var statearr_45459_46252 = state_45452__$1;
(statearr_45459_46252[(1)] = (5));

} else {
var statearr_45460_46253 = state_45452__$1;
(statearr_45460_46253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45453 === (15))){
var state_45452__$1 = state_45452;
var statearr_45464_46254 = state_45452__$1;
(statearr_45464_46254[(2)] = null);

(statearr_45464_46254[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45453 === (21))){
var state_45452__$1 = state_45452;
var statearr_45465_46255 = state_45452__$1;
(statearr_45465_46255[(2)] = null);

(statearr_45465_46255[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45453 === (13))){
var inst_45405 = (state_45452[(9)]);
var inst_45407 = (state_45452[(10)]);
var inst_45404 = (state_45452[(11)]);
var inst_45406 = (state_45452[(12)]);
var inst_45414 = (state_45452[(2)]);
var inst_45415 = (inst_45407 + (1));
var tmp45461 = inst_45405;
var tmp45462 = inst_45404;
var tmp45463 = inst_45406;
var inst_45404__$1 = tmp45462;
var inst_45405__$1 = tmp45461;
var inst_45406__$1 = tmp45463;
var inst_45407__$1 = inst_45415;
var state_45452__$1 = (function (){var statearr_45466 = state_45452;
(statearr_45466[(14)] = inst_45414);

(statearr_45466[(9)] = inst_45405__$1);

(statearr_45466[(10)] = inst_45407__$1);

(statearr_45466[(11)] = inst_45404__$1);

(statearr_45466[(12)] = inst_45406__$1);

return statearr_45466;
})();
var statearr_45467_46256 = state_45452__$1;
(statearr_45467_46256[(2)] = null);

(statearr_45467_46256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45453 === (22))){
var state_45452__$1 = state_45452;
var statearr_45468_46257 = state_45452__$1;
(statearr_45468_46257[(2)] = null);

(statearr_45468_46257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45453 === (6))){
var inst_45393 = (state_45452[(13)]);
var inst_45402 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45393) : f.call(null,inst_45393));
var inst_45403 = cljs.core.seq(inst_45402);
var inst_45404 = inst_45403;
var inst_45405 = null;
var inst_45406 = (0);
var inst_45407 = (0);
var state_45452__$1 = (function (){var statearr_45469 = state_45452;
(statearr_45469[(9)] = inst_45405);

(statearr_45469[(10)] = inst_45407);

(statearr_45469[(11)] = inst_45404);

(statearr_45469[(12)] = inst_45406);

return statearr_45469;
})();
var statearr_45470_46258 = state_45452__$1;
(statearr_45470_46258[(2)] = null);

(statearr_45470_46258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45453 === (17))){
var inst_45418 = (state_45452[(7)]);
var inst_45422 = cljs.core.chunk_first(inst_45418);
var inst_45423 = cljs.core.chunk_rest(inst_45418);
var inst_45424 = cljs.core.count(inst_45422);
var inst_45404 = inst_45423;
var inst_45405 = inst_45422;
var inst_45406 = inst_45424;
var inst_45407 = (0);
var state_45452__$1 = (function (){var statearr_45471 = state_45452;
(statearr_45471[(9)] = inst_45405);

(statearr_45471[(10)] = inst_45407);

(statearr_45471[(11)] = inst_45404);

(statearr_45471[(12)] = inst_45406);

return statearr_45471;
})();
var statearr_45472_46259 = state_45452__$1;
(statearr_45472_46259[(2)] = null);

(statearr_45472_46259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45453 === (3))){
var inst_45450 = (state_45452[(2)]);
var state_45452__$1 = state_45452;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45452__$1,inst_45450);
} else {
if((state_val_45453 === (12))){
var inst_45438 = (state_45452[(2)]);
var state_45452__$1 = state_45452;
var statearr_45473_46260 = state_45452__$1;
(statearr_45473_46260[(2)] = inst_45438);

(statearr_45473_46260[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45453 === (2))){
var state_45452__$1 = state_45452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45452__$1,(4),in$);
} else {
if((state_val_45453 === (23))){
var inst_45446 = (state_45452[(2)]);
var state_45452__$1 = state_45452;
var statearr_45474_46261 = state_45452__$1;
(statearr_45474_46261[(2)] = inst_45446);

(statearr_45474_46261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45453 === (19))){
var inst_45433 = (state_45452[(2)]);
var state_45452__$1 = state_45452;
var statearr_45475_46262 = state_45452__$1;
(statearr_45475_46262[(2)] = inst_45433);

(statearr_45475_46262[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45453 === (11))){
var inst_45404 = (state_45452[(11)]);
var inst_45418 = (state_45452[(7)]);
var inst_45418__$1 = cljs.core.seq(inst_45404);
var state_45452__$1 = (function (){var statearr_45476 = state_45452;
(statearr_45476[(7)] = inst_45418__$1);

return statearr_45476;
})();
if(inst_45418__$1){
var statearr_45477_46263 = state_45452__$1;
(statearr_45477_46263[(1)] = (14));

} else {
var statearr_45478_46264 = state_45452__$1;
(statearr_45478_46264[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45453 === (9))){
var inst_45440 = (state_45452[(2)]);
var inst_45441 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_45452__$1 = (function (){var statearr_45479 = state_45452;
(statearr_45479[(15)] = inst_45440);

return statearr_45479;
})();
if(cljs.core.truth_(inst_45441)){
var statearr_45480_46265 = state_45452__$1;
(statearr_45480_46265[(1)] = (21));

} else {
var statearr_45481_46266 = state_45452__$1;
(statearr_45481_46266[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45453 === (5))){
var inst_45396 = cljs.core.async.close_BANG_(out);
var state_45452__$1 = state_45452;
var statearr_45482_46267 = state_45452__$1;
(statearr_45482_46267[(2)] = inst_45396);

(statearr_45482_46267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45453 === (14))){
var inst_45418 = (state_45452[(7)]);
var inst_45420 = cljs.core.chunked_seq_QMARK_(inst_45418);
var state_45452__$1 = state_45452;
if(inst_45420){
var statearr_45483_46268 = state_45452__$1;
(statearr_45483_46268[(1)] = (17));

} else {
var statearr_45484_46269 = state_45452__$1;
(statearr_45484_46269[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45453 === (16))){
var inst_45436 = (state_45452[(2)]);
var state_45452__$1 = state_45452;
var statearr_45485_46270 = state_45452__$1;
(statearr_45485_46270[(2)] = inst_45436);

(statearr_45485_46270[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45453 === (10))){
var inst_45405 = (state_45452[(9)]);
var inst_45407 = (state_45452[(10)]);
var inst_45412 = cljs.core._nth(inst_45405,inst_45407);
var state_45452__$1 = state_45452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45452__$1,(13),out,inst_45412);
} else {
if((state_val_45453 === (18))){
var inst_45418 = (state_45452[(7)]);
var inst_45427 = cljs.core.first(inst_45418);
var state_45452__$1 = state_45452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45452__$1,(20),out,inst_45427);
} else {
if((state_val_45453 === (8))){
var inst_45407 = (state_45452[(10)]);
var inst_45406 = (state_45452[(12)]);
var inst_45409 = (inst_45407 < inst_45406);
var inst_45410 = inst_45409;
var state_45452__$1 = state_45452;
if(cljs.core.truth_(inst_45410)){
var statearr_45486_46271 = state_45452__$1;
(statearr_45486_46271[(1)] = (10));

} else {
var statearr_45487_46272 = state_45452__$1;
(statearr_45487_46272[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44073__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44073__auto____0 = (function (){
var statearr_45488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45488[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44073__auto__);

(statearr_45488[(1)] = (1));

return statearr_45488;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44073__auto____1 = (function (state_45452){
while(true){
var ret_value__44074__auto__ = (function (){try{while(true){
var result__44075__auto__ = switch__44072__auto__(state_45452);
if(cljs.core.keyword_identical_QMARK_(result__44075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44075__auto__;
}
break;
}
}catch (e45489){var ex__44076__auto__ = e45489;
var statearr_45490_46273 = state_45452;
(statearr_45490_46273[(2)] = ex__44076__auto__);


if(cljs.core.seq((state_45452[(4)]))){
var statearr_45491_46274 = state_45452;
(statearr_45491_46274[(1)] = cljs.core.first((state_45452[(4)])));

} else {
throw ex__44076__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46275 = state_45452;
state_45452 = G__46275;
continue;
} else {
return ret_value__44074__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44073__auto__ = function(state_45452){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44073__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44073__auto____1.call(this,state_45452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44073__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44073__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44073__auto__;
})()
})();
var state__44189__auto__ = (function (){var statearr_45492 = f__44188__auto__();
(statearr_45492[(6)] = c__44187__auto__);

return statearr_45492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44189__auto__);
}));

return c__44187__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45494 = arguments.length;
switch (G__45494) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__45496 = arguments.length;
switch (G__45496) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__45498 = arguments.length;
switch (G__45498) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44187__auto___46279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44188__auto__ = (function (){var switch__44072__auto__ = (function (state_45522){
var state_val_45523 = (state_45522[(1)]);
if((state_val_45523 === (7))){
var inst_45517 = (state_45522[(2)]);
var state_45522__$1 = state_45522;
var statearr_45524_46280 = state_45522__$1;
(statearr_45524_46280[(2)] = inst_45517);

(statearr_45524_46280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (1))){
var inst_45499 = null;
var state_45522__$1 = (function (){var statearr_45525 = state_45522;
(statearr_45525[(7)] = inst_45499);

return statearr_45525;
})();
var statearr_45526_46281 = state_45522__$1;
(statearr_45526_46281[(2)] = null);

(statearr_45526_46281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (4))){
var inst_45502 = (state_45522[(8)]);
var inst_45502__$1 = (state_45522[(2)]);
var inst_45503 = (inst_45502__$1 == null);
var inst_45504 = cljs.core.not(inst_45503);
var state_45522__$1 = (function (){var statearr_45527 = state_45522;
(statearr_45527[(8)] = inst_45502__$1);

return statearr_45527;
})();
if(inst_45504){
var statearr_45528_46282 = state_45522__$1;
(statearr_45528_46282[(1)] = (5));

} else {
var statearr_45529_46283 = state_45522__$1;
(statearr_45529_46283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (6))){
var state_45522__$1 = state_45522;
var statearr_45530_46284 = state_45522__$1;
(statearr_45530_46284[(2)] = null);

(statearr_45530_46284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (3))){
var inst_45519 = (state_45522[(2)]);
var inst_45520 = cljs.core.async.close_BANG_(out);
var state_45522__$1 = (function (){var statearr_45531 = state_45522;
(statearr_45531[(9)] = inst_45519);

return statearr_45531;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45522__$1,inst_45520);
} else {
if((state_val_45523 === (2))){
var state_45522__$1 = state_45522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45522__$1,(4),ch);
} else {
if((state_val_45523 === (11))){
var inst_45502 = (state_45522[(8)]);
var inst_45511 = (state_45522[(2)]);
var inst_45499 = inst_45502;
var state_45522__$1 = (function (){var statearr_45532 = state_45522;
(statearr_45532[(7)] = inst_45499);

(statearr_45532[(10)] = inst_45511);

return statearr_45532;
})();
var statearr_45533_46285 = state_45522__$1;
(statearr_45533_46285[(2)] = null);

(statearr_45533_46285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (9))){
var inst_45502 = (state_45522[(8)]);
var state_45522__$1 = state_45522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45522__$1,(11),out,inst_45502);
} else {
if((state_val_45523 === (5))){
var inst_45499 = (state_45522[(7)]);
var inst_45502 = (state_45522[(8)]);
var inst_45506 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45502,inst_45499);
var state_45522__$1 = state_45522;
if(inst_45506){
var statearr_45535_46286 = state_45522__$1;
(statearr_45535_46286[(1)] = (8));

} else {
var statearr_45536_46287 = state_45522__$1;
(statearr_45536_46287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (10))){
var inst_45514 = (state_45522[(2)]);
var state_45522__$1 = state_45522;
var statearr_45537_46299 = state_45522__$1;
(statearr_45537_46299[(2)] = inst_45514);

(statearr_45537_46299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (8))){
var inst_45499 = (state_45522[(7)]);
var tmp45534 = inst_45499;
var inst_45499__$1 = tmp45534;
var state_45522__$1 = (function (){var statearr_45538 = state_45522;
(statearr_45538[(7)] = inst_45499__$1);

return statearr_45538;
})();
var statearr_45539_46300 = state_45522__$1;
(statearr_45539_46300[(2)] = null);

(statearr_45539_46300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44073__auto__ = null;
var cljs$core$async$state_machine__44073__auto____0 = (function (){
var statearr_45540 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45540[(0)] = cljs$core$async$state_machine__44073__auto__);

(statearr_45540[(1)] = (1));

return statearr_45540;
});
var cljs$core$async$state_machine__44073__auto____1 = (function (state_45522){
while(true){
var ret_value__44074__auto__ = (function (){try{while(true){
var result__44075__auto__ = switch__44072__auto__(state_45522);
if(cljs.core.keyword_identical_QMARK_(result__44075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44075__auto__;
}
break;
}
}catch (e45541){var ex__44076__auto__ = e45541;
var statearr_45542_46301 = state_45522;
(statearr_45542_46301[(2)] = ex__44076__auto__);


if(cljs.core.seq((state_45522[(4)]))){
var statearr_45543_46302 = state_45522;
(statearr_45543_46302[(1)] = cljs.core.first((state_45522[(4)])));

} else {
throw ex__44076__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46303 = state_45522;
state_45522 = G__46303;
continue;
} else {
return ret_value__44074__auto__;
}
break;
}
});
cljs$core$async$state_machine__44073__auto__ = function(state_45522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44073__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44073__auto____1.call(this,state_45522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44073__auto____0;
cljs$core$async$state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44073__auto____1;
return cljs$core$async$state_machine__44073__auto__;
})()
})();
var state__44189__auto__ = (function (){var statearr_45544 = f__44188__auto__();
(statearr_45544[(6)] = c__44187__auto___46279);

return statearr_45544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44189__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45546 = arguments.length;
switch (G__45546) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44187__auto___46305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44188__auto__ = (function (){var switch__44072__auto__ = (function (state_45584){
var state_val_45585 = (state_45584[(1)]);
if((state_val_45585 === (7))){
var inst_45580 = (state_45584[(2)]);
var state_45584__$1 = state_45584;
var statearr_45586_46306 = state_45584__$1;
(statearr_45586_46306[(2)] = inst_45580);

(statearr_45586_46306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (1))){
var inst_45547 = (new Array(n));
var inst_45548 = inst_45547;
var inst_45549 = (0);
var state_45584__$1 = (function (){var statearr_45587 = state_45584;
(statearr_45587[(7)] = inst_45548);

(statearr_45587[(8)] = inst_45549);

return statearr_45587;
})();
var statearr_45588_46307 = state_45584__$1;
(statearr_45588_46307[(2)] = null);

(statearr_45588_46307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (4))){
var inst_45552 = (state_45584[(9)]);
var inst_45552__$1 = (state_45584[(2)]);
var inst_45553 = (inst_45552__$1 == null);
var inst_45554 = cljs.core.not(inst_45553);
var state_45584__$1 = (function (){var statearr_45589 = state_45584;
(statearr_45589[(9)] = inst_45552__$1);

return statearr_45589;
})();
if(inst_45554){
var statearr_45590_46308 = state_45584__$1;
(statearr_45590_46308[(1)] = (5));

} else {
var statearr_45591_46309 = state_45584__$1;
(statearr_45591_46309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (15))){
var inst_45574 = (state_45584[(2)]);
var state_45584__$1 = state_45584;
var statearr_45592_46310 = state_45584__$1;
(statearr_45592_46310[(2)] = inst_45574);

(statearr_45592_46310[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (13))){
var state_45584__$1 = state_45584;
var statearr_45593_46311 = state_45584__$1;
(statearr_45593_46311[(2)] = null);

(statearr_45593_46311[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (6))){
var inst_45549 = (state_45584[(8)]);
var inst_45570 = (inst_45549 > (0));
var state_45584__$1 = state_45584;
if(cljs.core.truth_(inst_45570)){
var statearr_45594_46312 = state_45584__$1;
(statearr_45594_46312[(1)] = (12));

} else {
var statearr_45595_46313 = state_45584__$1;
(statearr_45595_46313[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (3))){
var inst_45582 = (state_45584[(2)]);
var state_45584__$1 = state_45584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45584__$1,inst_45582);
} else {
if((state_val_45585 === (12))){
var inst_45548 = (state_45584[(7)]);
var inst_45572 = cljs.core.vec(inst_45548);
var state_45584__$1 = state_45584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45584__$1,(15),out,inst_45572);
} else {
if((state_val_45585 === (2))){
var state_45584__$1 = state_45584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45584__$1,(4),ch);
} else {
if((state_val_45585 === (11))){
var inst_45564 = (state_45584[(2)]);
var inst_45565 = (new Array(n));
var inst_45548 = inst_45565;
var inst_45549 = (0);
var state_45584__$1 = (function (){var statearr_45596 = state_45584;
(statearr_45596[(7)] = inst_45548);

(statearr_45596[(8)] = inst_45549);

(statearr_45596[(10)] = inst_45564);

return statearr_45596;
})();
var statearr_45597_46314 = state_45584__$1;
(statearr_45597_46314[(2)] = null);

(statearr_45597_46314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (9))){
var inst_45548 = (state_45584[(7)]);
var inst_45562 = cljs.core.vec(inst_45548);
var state_45584__$1 = state_45584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45584__$1,(11),out,inst_45562);
} else {
if((state_val_45585 === (5))){
var inst_45557 = (state_45584[(11)]);
var inst_45548 = (state_45584[(7)]);
var inst_45552 = (state_45584[(9)]);
var inst_45549 = (state_45584[(8)]);
var inst_45556 = (inst_45548[inst_45549] = inst_45552);
var inst_45557__$1 = (inst_45549 + (1));
var inst_45558 = (inst_45557__$1 < n);
var state_45584__$1 = (function (){var statearr_45598 = state_45584;
(statearr_45598[(11)] = inst_45557__$1);

(statearr_45598[(12)] = inst_45556);

return statearr_45598;
})();
if(cljs.core.truth_(inst_45558)){
var statearr_45599_46315 = state_45584__$1;
(statearr_45599_46315[(1)] = (8));

} else {
var statearr_45600_46316 = state_45584__$1;
(statearr_45600_46316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (14))){
var inst_45577 = (state_45584[(2)]);
var inst_45578 = cljs.core.async.close_BANG_(out);
var state_45584__$1 = (function (){var statearr_45602 = state_45584;
(statearr_45602[(13)] = inst_45577);

return statearr_45602;
})();
var statearr_45603_46317 = state_45584__$1;
(statearr_45603_46317[(2)] = inst_45578);

(statearr_45603_46317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (10))){
var inst_45568 = (state_45584[(2)]);
var state_45584__$1 = state_45584;
var statearr_45604_46318 = state_45584__$1;
(statearr_45604_46318[(2)] = inst_45568);

(statearr_45604_46318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (8))){
var inst_45557 = (state_45584[(11)]);
var inst_45548 = (state_45584[(7)]);
var tmp45601 = inst_45548;
var inst_45548__$1 = tmp45601;
var inst_45549 = inst_45557;
var state_45584__$1 = (function (){var statearr_45605 = state_45584;
(statearr_45605[(7)] = inst_45548__$1);

(statearr_45605[(8)] = inst_45549);

return statearr_45605;
})();
var statearr_45606_46319 = state_45584__$1;
(statearr_45606_46319[(2)] = null);

(statearr_45606_46319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44073__auto__ = null;
var cljs$core$async$state_machine__44073__auto____0 = (function (){
var statearr_45607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45607[(0)] = cljs$core$async$state_machine__44073__auto__);

(statearr_45607[(1)] = (1));

return statearr_45607;
});
var cljs$core$async$state_machine__44073__auto____1 = (function (state_45584){
while(true){
var ret_value__44074__auto__ = (function (){try{while(true){
var result__44075__auto__ = switch__44072__auto__(state_45584);
if(cljs.core.keyword_identical_QMARK_(result__44075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44075__auto__;
}
break;
}
}catch (e45608){var ex__44076__auto__ = e45608;
var statearr_45609_46320 = state_45584;
(statearr_45609_46320[(2)] = ex__44076__auto__);


if(cljs.core.seq((state_45584[(4)]))){
var statearr_45610_46321 = state_45584;
(statearr_45610_46321[(1)] = cljs.core.first((state_45584[(4)])));

} else {
throw ex__44076__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46322 = state_45584;
state_45584 = G__46322;
continue;
} else {
return ret_value__44074__auto__;
}
break;
}
});
cljs$core$async$state_machine__44073__auto__ = function(state_45584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44073__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44073__auto____1.call(this,state_45584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44073__auto____0;
cljs$core$async$state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44073__auto____1;
return cljs$core$async$state_machine__44073__auto__;
})()
})();
var state__44189__auto__ = (function (){var statearr_45611 = f__44188__auto__();
(statearr_45611[(6)] = c__44187__auto___46305);

return statearr_45611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44189__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45613 = arguments.length;
switch (G__45613) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44187__auto___46324 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44188__auto__ = (function (){var switch__44072__auto__ = (function (state_45658){
var state_val_45659 = (state_45658[(1)]);
if((state_val_45659 === (7))){
var inst_45654 = (state_45658[(2)]);
var state_45658__$1 = state_45658;
var statearr_45660_46325 = state_45658__$1;
(statearr_45660_46325[(2)] = inst_45654);

(statearr_45660_46325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45659 === (1))){
var inst_45614 = [];
var inst_45615 = inst_45614;
var inst_45616 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45658__$1 = (function (){var statearr_45661 = state_45658;
(statearr_45661[(7)] = inst_45615);

(statearr_45661[(8)] = inst_45616);

return statearr_45661;
})();
var statearr_45662_46326 = state_45658__$1;
(statearr_45662_46326[(2)] = null);

(statearr_45662_46326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45659 === (4))){
var inst_45619 = (state_45658[(9)]);
var inst_45619__$1 = (state_45658[(2)]);
var inst_45620 = (inst_45619__$1 == null);
var inst_45621 = cljs.core.not(inst_45620);
var state_45658__$1 = (function (){var statearr_45663 = state_45658;
(statearr_45663[(9)] = inst_45619__$1);

return statearr_45663;
})();
if(inst_45621){
var statearr_45664_46327 = state_45658__$1;
(statearr_45664_46327[(1)] = (5));

} else {
var statearr_45665_46328 = state_45658__$1;
(statearr_45665_46328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45659 === (15))){
var inst_45615 = (state_45658[(7)]);
var inst_45646 = cljs.core.vec(inst_45615);
var state_45658__$1 = state_45658;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45658__$1,(18),out,inst_45646);
} else {
if((state_val_45659 === (13))){
var inst_45641 = (state_45658[(2)]);
var state_45658__$1 = state_45658;
var statearr_45666_46329 = state_45658__$1;
(statearr_45666_46329[(2)] = inst_45641);

(statearr_45666_46329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45659 === (6))){
var inst_45615 = (state_45658[(7)]);
var inst_45643 = inst_45615.length;
var inst_45644 = (inst_45643 > (0));
var state_45658__$1 = state_45658;
if(cljs.core.truth_(inst_45644)){
var statearr_45667_46330 = state_45658__$1;
(statearr_45667_46330[(1)] = (15));

} else {
var statearr_45668_46331 = state_45658__$1;
(statearr_45668_46331[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45659 === (17))){
var inst_45651 = (state_45658[(2)]);
var inst_45652 = cljs.core.async.close_BANG_(out);
var state_45658__$1 = (function (){var statearr_45669 = state_45658;
(statearr_45669[(10)] = inst_45651);

return statearr_45669;
})();
var statearr_45670_46332 = state_45658__$1;
(statearr_45670_46332[(2)] = inst_45652);

(statearr_45670_46332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45659 === (3))){
var inst_45656 = (state_45658[(2)]);
var state_45658__$1 = state_45658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45658__$1,inst_45656);
} else {
if((state_val_45659 === (12))){
var inst_45615 = (state_45658[(7)]);
var inst_45634 = cljs.core.vec(inst_45615);
var state_45658__$1 = state_45658;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45658__$1,(14),out,inst_45634);
} else {
if((state_val_45659 === (2))){
var state_45658__$1 = state_45658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45658__$1,(4),ch);
} else {
if((state_val_45659 === (11))){
var inst_45623 = (state_45658[(11)]);
var inst_45619 = (state_45658[(9)]);
var inst_45615 = (state_45658[(7)]);
var inst_45631 = inst_45615.push(inst_45619);
var tmp45671 = inst_45615;
var inst_45615__$1 = tmp45671;
var inst_45616 = inst_45623;
var state_45658__$1 = (function (){var statearr_45672 = state_45658;
(statearr_45672[(12)] = inst_45631);

(statearr_45672[(7)] = inst_45615__$1);

(statearr_45672[(8)] = inst_45616);

return statearr_45672;
})();
var statearr_45673_46333 = state_45658__$1;
(statearr_45673_46333[(2)] = null);

(statearr_45673_46333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45659 === (9))){
var inst_45616 = (state_45658[(8)]);
var inst_45627 = cljs.core.keyword_identical_QMARK_(inst_45616,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_45658__$1 = state_45658;
var statearr_45674_46334 = state_45658__$1;
(statearr_45674_46334[(2)] = inst_45627);

(statearr_45674_46334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45659 === (5))){
var inst_45623 = (state_45658[(11)]);
var inst_45619 = (state_45658[(9)]);
var inst_45624 = (state_45658[(13)]);
var inst_45616 = (state_45658[(8)]);
var inst_45623__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45619) : f.call(null,inst_45619));
var inst_45624__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45623__$1,inst_45616);
var state_45658__$1 = (function (){var statearr_45675 = state_45658;
(statearr_45675[(11)] = inst_45623__$1);

(statearr_45675[(13)] = inst_45624__$1);

return statearr_45675;
})();
if(inst_45624__$1){
var statearr_45676_46335 = state_45658__$1;
(statearr_45676_46335[(1)] = (8));

} else {
var statearr_45677_46336 = state_45658__$1;
(statearr_45677_46336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45659 === (14))){
var inst_45623 = (state_45658[(11)]);
var inst_45619 = (state_45658[(9)]);
var inst_45636 = (state_45658[(2)]);
var inst_45637 = [];
var inst_45638 = inst_45637.push(inst_45619);
var inst_45615 = inst_45637;
var inst_45616 = inst_45623;
var state_45658__$1 = (function (){var statearr_45678 = state_45658;
(statearr_45678[(14)] = inst_45638);

(statearr_45678[(15)] = inst_45636);

(statearr_45678[(7)] = inst_45615);

(statearr_45678[(8)] = inst_45616);

return statearr_45678;
})();
var statearr_45679_46337 = state_45658__$1;
(statearr_45679_46337[(2)] = null);

(statearr_45679_46337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45659 === (16))){
var state_45658__$1 = state_45658;
var statearr_45680_46338 = state_45658__$1;
(statearr_45680_46338[(2)] = null);

(statearr_45680_46338[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45659 === (10))){
var inst_45629 = (state_45658[(2)]);
var state_45658__$1 = state_45658;
if(cljs.core.truth_(inst_45629)){
var statearr_45681_46339 = state_45658__$1;
(statearr_45681_46339[(1)] = (11));

} else {
var statearr_45682_46340 = state_45658__$1;
(statearr_45682_46340[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45659 === (18))){
var inst_45648 = (state_45658[(2)]);
var state_45658__$1 = state_45658;
var statearr_45683_46341 = state_45658__$1;
(statearr_45683_46341[(2)] = inst_45648);

(statearr_45683_46341[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45659 === (8))){
var inst_45624 = (state_45658[(13)]);
var state_45658__$1 = state_45658;
var statearr_45684_46342 = state_45658__$1;
(statearr_45684_46342[(2)] = inst_45624);

(statearr_45684_46342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44073__auto__ = null;
var cljs$core$async$state_machine__44073__auto____0 = (function (){
var statearr_45685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45685[(0)] = cljs$core$async$state_machine__44073__auto__);

(statearr_45685[(1)] = (1));

return statearr_45685;
});
var cljs$core$async$state_machine__44073__auto____1 = (function (state_45658){
while(true){
var ret_value__44074__auto__ = (function (){try{while(true){
var result__44075__auto__ = switch__44072__auto__(state_45658);
if(cljs.core.keyword_identical_QMARK_(result__44075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44075__auto__;
}
break;
}
}catch (e45686){var ex__44076__auto__ = e45686;
var statearr_45687_46343 = state_45658;
(statearr_45687_46343[(2)] = ex__44076__auto__);


if(cljs.core.seq((state_45658[(4)]))){
var statearr_45688_46344 = state_45658;
(statearr_45688_46344[(1)] = cljs.core.first((state_45658[(4)])));

} else {
throw ex__44076__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46345 = state_45658;
state_45658 = G__46345;
continue;
} else {
return ret_value__44074__auto__;
}
break;
}
});
cljs$core$async$state_machine__44073__auto__ = function(state_45658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44073__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44073__auto____1.call(this,state_45658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44073__auto____0;
cljs$core$async$state_machine__44073__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44073__auto____1;
return cljs$core$async$state_machine__44073__auto__;
})()
})();
var state__44189__auto__ = (function (){var statearr_45689 = f__44188__auto__();
(statearr_45689[(6)] = c__44187__auto___46324);

return statearr_45689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44189__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
