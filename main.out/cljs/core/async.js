// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__22018 = arguments.length;
switch (G__22018) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22019 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22019 = (function (f,blockable,meta22020){
this.f = f;
this.blockable = blockable;
this.meta22020 = meta22020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22021,meta22020__$1){
var self__ = this;
var _22021__$1 = this;
return (new cljs.core.async.t_cljs$core$async22019(self__.f,self__.blockable,meta22020__$1));
});

cljs.core.async.t_cljs$core$async22019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22021){
var self__ = this;
var _22021__$1 = this;
return self__.meta22020;
});

cljs.core.async.t_cljs$core$async22019.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22019.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22019.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22019.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta22020], null);
});

cljs.core.async.t_cljs$core$async22019.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22019";

cljs.core.async.t_cljs$core$async22019.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.core.async/t_cljs$core$async22019");
});

cljs.core.async.__GT_t_cljs$core$async22019 = (function cljs$core$async$__GT_t_cljs$core$async22019(f__$1,blockable__$1,meta22020){
return (new cljs.core.async.t_cljs$core$async22019(f__$1,blockable__$1,meta22020));
});

}

return (new cljs.core.async.t_cljs$core$async22019(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var G__22025 = arguments.length;
switch (G__22025) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__22028 = arguments.length;
switch (G__22028) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__22031 = arguments.length;
switch (G__22031) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_22033 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22033) : fn1.call(null,val_22033));
} else {
cljs.core.async.impl.dispatch.run(((function (val_22033,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22033) : fn1.call(null,val_22033));
});})(val_22033,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

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
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__22035 = arguments.length;
switch (G__22035) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__9853__auto___22037 = n;
var x_22038 = (0);
while(true){
if((x_22038 < n__9853__auto___22037)){
(a[x_22038] = (0));

var G__22039 = (x_22038 + (1));
x_22038 = G__22039;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__22040 = (i + (1));
i = G__22040;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async22041 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22041 = (function (flag,meta22042){
this.flag = flag;
this.meta22042 = meta22042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22043,meta22042__$1){
var self__ = this;
var _22043__$1 = this;
return (new cljs.core.async.t_cljs$core$async22041(self__.flag,meta22042__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22041.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22043){
var self__ = this;
var _22043__$1 = this;
return self__.meta22042;
});})(flag))
;

cljs.core.async.t_cljs$core$async22041.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22041.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22041.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22041.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22041.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta22042], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22041.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22041";

cljs.core.async.t_cljs$core$async22041.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.core.async/t_cljs$core$async22041");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22041 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22041(flag__$1,meta22042){
return (new cljs.core.async.t_cljs$core$async22041(flag__$1,meta22042));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22041(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22044 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22044 = (function (flag,cb,meta22045){
this.flag = flag;
this.cb = cb;
this.meta22045 = meta22045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22046,meta22045__$1){
var self__ = this;
var _22046__$1 = this;
return (new cljs.core.async.t_cljs$core$async22044(self__.flag,self__.cb,meta22045__$1));
});

cljs.core.async.t_cljs$core$async22044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22046){
var self__ = this;
var _22046__$1 = this;
return self__.meta22045;
});

cljs.core.async.t_cljs$core$async22044.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22044.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async22044.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22044.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta22045], null);
});

cljs.core.async.t_cljs$core$async22044.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22044";

cljs.core.async.t_cljs$core$async22044.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.core.async/t_cljs$core$async22044");
});

cljs.core.async.__GT_t_cljs$core$async22044 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22044(flag__$1,cb__$1,meta22045){
return (new cljs.core.async.t_cljs$core$async22044(flag__$1,cb__$1,meta22045));
});

}

return (new cljs.core.async.t_cljs$core$async22044(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22047_SHARP_){
var G__22049 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22047_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22049) : fret.call(null,G__22049));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22048_SHARP_){
var G__22050 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22048_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22050) : fret.call(null,G__22050));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__8808__auto__ = wport;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22051 = (i + (1));
i = G__22051;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8808__auto__ = ret;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5457__auto__ = (function (){var and__8796__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__8796__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__8796__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var args__10094__auto__ = [];
var len__10087__auto___22057 = arguments.length;
var i__10088__auto___22058 = (0);
while(true){
if((i__10088__auto___22058 < len__10087__auto___22057)){
args__10094__auto__.push((arguments[i__10088__auto___22058]));

var G__22059 = (i__10088__auto___22058 + (1));
i__10088__auto___22058 = G__22059;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22054){
var map__22055 = p__22054;
var map__22055__$1 = ((((!((map__22055 == null)))?((((map__22055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22055):map__22055);
var opts = map__22055__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22052){
var G__22053 = cljs.core.first(seq22052);
var seq22052__$1 = cljs.core.next(seq22052);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22053,seq22052__$1);
});

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
var G__22061 = arguments.length;
switch (G__22061) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21958__auto___22107 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto___22107){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto___22107){
return (function (state_22085){
var state_val_22086 = (state_22085[(1)]);
if((state_val_22086 === (7))){
var inst_22081 = (state_22085[(2)]);
var state_22085__$1 = state_22085;
var statearr_22087_22108 = state_22085__$1;
(statearr_22087_22108[(2)] = inst_22081);

(statearr_22087_22108[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22086 === (1))){
var state_22085__$1 = state_22085;
var statearr_22088_22109 = state_22085__$1;
(statearr_22088_22109[(2)] = null);

(statearr_22088_22109[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22086 === (4))){
var inst_22064 = (state_22085[(7)]);
var inst_22064__$1 = (state_22085[(2)]);
var inst_22065 = (inst_22064__$1 == null);
var state_22085__$1 = (function (){var statearr_22089 = state_22085;
(statearr_22089[(7)] = inst_22064__$1);

return statearr_22089;
})();
if(cljs.core.truth_(inst_22065)){
var statearr_22090_22110 = state_22085__$1;
(statearr_22090_22110[(1)] = (5));

} else {
var statearr_22091_22111 = state_22085__$1;
(statearr_22091_22111[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22086 === (13))){
var state_22085__$1 = state_22085;
var statearr_22092_22112 = state_22085__$1;
(statearr_22092_22112[(2)] = null);

(statearr_22092_22112[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22086 === (6))){
var inst_22064 = (state_22085[(7)]);
var state_22085__$1 = state_22085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22085__$1,(11),to,inst_22064);
} else {
if((state_val_22086 === (3))){
var inst_22083 = (state_22085[(2)]);
var state_22085__$1 = state_22085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22085__$1,inst_22083);
} else {
if((state_val_22086 === (12))){
var state_22085__$1 = state_22085;
var statearr_22093_22113 = state_22085__$1;
(statearr_22093_22113[(2)] = null);

(statearr_22093_22113[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22086 === (2))){
var state_22085__$1 = state_22085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22085__$1,(4),from);
} else {
if((state_val_22086 === (11))){
var inst_22074 = (state_22085[(2)]);
var state_22085__$1 = state_22085;
if(cljs.core.truth_(inst_22074)){
var statearr_22094_22114 = state_22085__$1;
(statearr_22094_22114[(1)] = (12));

} else {
var statearr_22095_22115 = state_22085__$1;
(statearr_22095_22115[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22086 === (9))){
var state_22085__$1 = state_22085;
var statearr_22096_22116 = state_22085__$1;
(statearr_22096_22116[(2)] = null);

(statearr_22096_22116[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22086 === (5))){
var state_22085__$1 = state_22085;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22097_22117 = state_22085__$1;
(statearr_22097_22117[(1)] = (8));

} else {
var statearr_22098_22118 = state_22085__$1;
(statearr_22098_22118[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22086 === (14))){
var inst_22079 = (state_22085[(2)]);
var state_22085__$1 = state_22085;
var statearr_22099_22119 = state_22085__$1;
(statearr_22099_22119[(2)] = inst_22079);

(statearr_22099_22119[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22086 === (10))){
var inst_22071 = (state_22085[(2)]);
var state_22085__$1 = state_22085;
var statearr_22100_22120 = state_22085__$1;
(statearr_22100_22120[(2)] = inst_22071);

(statearr_22100_22120[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22086 === (8))){
var inst_22068 = cljs.core.async.close_BANG_(to);
var state_22085__$1 = state_22085;
var statearr_22101_22121 = state_22085__$1;
(statearr_22101_22121[(2)] = inst_22068);

(statearr_22101_22121[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__21958__auto___22107))
;
return ((function (switch__21856__auto__,c__21958__auto___22107){
return (function() {
var cljs$core$async$state_machine__21857__auto__ = null;
var cljs$core$async$state_machine__21857__auto____0 = (function (){
var statearr_22102 = [null,null,null,null,null,null,null,null];
(statearr_22102[(0)] = cljs$core$async$state_machine__21857__auto__);

(statearr_22102[(1)] = (1));

return statearr_22102;
});
var cljs$core$async$state_machine__21857__auto____1 = (function (state_22085){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_22085);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e22103){if((e22103 instanceof Object)){
var ex__21860__auto__ = e22103;
var statearr_22104_22122 = state_22085;
(statearr_22104_22122[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22085);

return cljs.core.cst$kw$recur;
} else {
throw e22103;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__22123 = state_22085;
state_22085 = G__22123;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
cljs$core$async$state_machine__21857__auto__ = function(state_22085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21857__auto____1.call(this,state_22085);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21857__auto____0;
cljs$core$async$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21857__auto____1;
return cljs$core$async$state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto___22107))
})();
var state__21960__auto__ = (function (){var statearr_22105 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_22105[(6)] = c__21958__auto___22107);

return statearr_22105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto___22107))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__22124){
var vec__22125 = p__22124;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22125,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22125,(1),null);
var job = vec__22125;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__21958__auto___22296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto___22296,res,vec__22125,v,p,job,jobs,results){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto___22296,res,vec__22125,v,p,job,jobs,results){
return (function (state_22132){
var state_val_22133 = (state_22132[(1)]);
if((state_val_22133 === (1))){
var state_22132__$1 = state_22132;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22132__$1,(2),res,v);
} else {
if((state_val_22133 === (2))){
var inst_22129 = (state_22132[(2)]);
var inst_22130 = cljs.core.async.close_BANG_(res);
var state_22132__$1 = (function (){var statearr_22134 = state_22132;
(statearr_22134[(7)] = inst_22129);

return statearr_22134;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22132__$1,inst_22130);
} else {
return null;
}
}
});})(c__21958__auto___22296,res,vec__22125,v,p,job,jobs,results))
;
return ((function (switch__21856__auto__,c__21958__auto___22296,res,vec__22125,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____0 = (function (){
var statearr_22135 = [null,null,null,null,null,null,null,null];
(statearr_22135[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__);

(statearr_22135[(1)] = (1));

return statearr_22135;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____1 = (function (state_22132){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_22132);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e22136){if((e22136 instanceof Object)){
var ex__21860__auto__ = e22136;
var statearr_22137_22297 = state_22132;
(statearr_22137_22297[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22132);

return cljs.core.cst$kw$recur;
} else {
throw e22136;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__22298 = state_22132;
state_22132 = G__22298;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__ = function(state_22132){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____1.call(this,state_22132);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto___22296,res,vec__22125,v,p,job,jobs,results))
})();
var state__21960__auto__ = (function (){var statearr_22138 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_22138[(6)] = c__21958__auto___22296);

return statearr_22138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto___22296,res,vec__22125,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22139){
var vec__22140 = p__22139;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22140,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22140,(1),null);
var job = vec__22140;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__9853__auto___22299 = n;
var __22300 = (0);
while(true){
if((__22300 < n__9853__auto___22299)){
var G__22143_22301 = type;
var G__22143_22302__$1 = (((G__22143_22301 instanceof cljs.core.Keyword))?G__22143_22301.fqn:null);
switch (G__22143_22302__$1) {
case "compute":
var c__21958__auto___22304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22300,c__21958__auto___22304,G__22143_22301,G__22143_22302__$1,n__9853__auto___22299,jobs,results,process,async){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (__22300,c__21958__auto___22304,G__22143_22301,G__22143_22302__$1,n__9853__auto___22299,jobs,results,process,async){
return (function (state_22156){
var state_val_22157 = (state_22156[(1)]);
if((state_val_22157 === (1))){
var state_22156__$1 = state_22156;
var statearr_22158_22305 = state_22156__$1;
(statearr_22158_22305[(2)] = null);

(statearr_22158_22305[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22157 === (2))){
var state_22156__$1 = state_22156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22156__$1,(4),jobs);
} else {
if((state_val_22157 === (3))){
var inst_22154 = (state_22156[(2)]);
var state_22156__$1 = state_22156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22156__$1,inst_22154);
} else {
if((state_val_22157 === (4))){
var inst_22146 = (state_22156[(2)]);
var inst_22147 = process(inst_22146);
var state_22156__$1 = state_22156;
if(cljs.core.truth_(inst_22147)){
var statearr_22159_22306 = state_22156__$1;
(statearr_22159_22306[(1)] = (5));

} else {
var statearr_22160_22307 = state_22156__$1;
(statearr_22160_22307[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22157 === (5))){
var state_22156__$1 = state_22156;
var statearr_22161_22308 = state_22156__$1;
(statearr_22161_22308[(2)] = null);

(statearr_22161_22308[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22157 === (6))){
var state_22156__$1 = state_22156;
var statearr_22162_22309 = state_22156__$1;
(statearr_22162_22309[(2)] = null);

(statearr_22162_22309[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22157 === (7))){
var inst_22152 = (state_22156[(2)]);
var state_22156__$1 = state_22156;
var statearr_22163_22310 = state_22156__$1;
(statearr_22163_22310[(2)] = inst_22152);

(statearr_22163_22310[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__22300,c__21958__auto___22304,G__22143_22301,G__22143_22302__$1,n__9853__auto___22299,jobs,results,process,async))
;
return ((function (__22300,switch__21856__auto__,c__21958__auto___22304,G__22143_22301,G__22143_22302__$1,n__9853__auto___22299,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____0 = (function (){
var statearr_22164 = [null,null,null,null,null,null,null];
(statearr_22164[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__);

(statearr_22164[(1)] = (1));

return statearr_22164;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____1 = (function (state_22156){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_22156);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e22165){if((e22165 instanceof Object)){
var ex__21860__auto__ = e22165;
var statearr_22166_22311 = state_22156;
(statearr_22166_22311[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22156);

return cljs.core.cst$kw$recur;
} else {
throw e22165;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__22312 = state_22156;
state_22156 = G__22312;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__ = function(state_22156){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____1.call(this,state_22156);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__;
})()
;})(__22300,switch__21856__auto__,c__21958__auto___22304,G__22143_22301,G__22143_22302__$1,n__9853__auto___22299,jobs,results,process,async))
})();
var state__21960__auto__ = (function (){var statearr_22167 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_22167[(6)] = c__21958__auto___22304);

return statearr_22167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(__22300,c__21958__auto___22304,G__22143_22301,G__22143_22302__$1,n__9853__auto___22299,jobs,results,process,async))
);


break;
case "async":
var c__21958__auto___22313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22300,c__21958__auto___22313,G__22143_22301,G__22143_22302__$1,n__9853__auto___22299,jobs,results,process,async){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (__22300,c__21958__auto___22313,G__22143_22301,G__22143_22302__$1,n__9853__auto___22299,jobs,results,process,async){
return (function (state_22180){
var state_val_22181 = (state_22180[(1)]);
if((state_val_22181 === (1))){
var state_22180__$1 = state_22180;
var statearr_22182_22314 = state_22180__$1;
(statearr_22182_22314[(2)] = null);

(statearr_22182_22314[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22181 === (2))){
var state_22180__$1 = state_22180;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22180__$1,(4),jobs);
} else {
if((state_val_22181 === (3))){
var inst_22178 = (state_22180[(2)]);
var state_22180__$1 = state_22180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22180__$1,inst_22178);
} else {
if((state_val_22181 === (4))){
var inst_22170 = (state_22180[(2)]);
var inst_22171 = async(inst_22170);
var state_22180__$1 = state_22180;
if(cljs.core.truth_(inst_22171)){
var statearr_22183_22315 = state_22180__$1;
(statearr_22183_22315[(1)] = (5));

} else {
var statearr_22184_22316 = state_22180__$1;
(statearr_22184_22316[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22181 === (5))){
var state_22180__$1 = state_22180;
var statearr_22185_22317 = state_22180__$1;
(statearr_22185_22317[(2)] = null);

(statearr_22185_22317[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22181 === (6))){
var state_22180__$1 = state_22180;
var statearr_22186_22318 = state_22180__$1;
(statearr_22186_22318[(2)] = null);

(statearr_22186_22318[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22181 === (7))){
var inst_22176 = (state_22180[(2)]);
var state_22180__$1 = state_22180;
var statearr_22187_22319 = state_22180__$1;
(statearr_22187_22319[(2)] = inst_22176);

(statearr_22187_22319[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__22300,c__21958__auto___22313,G__22143_22301,G__22143_22302__$1,n__9853__auto___22299,jobs,results,process,async))
;
return ((function (__22300,switch__21856__auto__,c__21958__auto___22313,G__22143_22301,G__22143_22302__$1,n__9853__auto___22299,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____0 = (function (){
var statearr_22188 = [null,null,null,null,null,null,null];
(statearr_22188[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__);

(statearr_22188[(1)] = (1));

return statearr_22188;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____1 = (function (state_22180){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_22180);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e22189){if((e22189 instanceof Object)){
var ex__21860__auto__ = e22189;
var statearr_22190_22320 = state_22180;
(statearr_22190_22320[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22180);

return cljs.core.cst$kw$recur;
} else {
throw e22189;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__22321 = state_22180;
state_22180 = G__22321;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__ = function(state_22180){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____1.call(this,state_22180);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__;
})()
;})(__22300,switch__21856__auto__,c__21958__auto___22313,G__22143_22301,G__22143_22302__$1,n__9853__auto___22299,jobs,results,process,async))
})();
var state__21960__auto__ = (function (){var statearr_22191 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_22191[(6)] = c__21958__auto___22313);

return statearr_22191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(__22300,c__21958__auto___22313,G__22143_22301,G__22143_22302__$1,n__9853__auto___22299,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22143_22302__$1)].join('')));

}

var G__22322 = (__22300 + (1));
__22300 = G__22322;
continue;
} else {
}
break;
}

var c__21958__auto___22323 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto___22323,jobs,results,process,async){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto___22323,jobs,results,process,async){
return (function (state_22213){
var state_val_22214 = (state_22213[(1)]);
if((state_val_22214 === (1))){
var state_22213__$1 = state_22213;
var statearr_22215_22324 = state_22213__$1;
(statearr_22215_22324[(2)] = null);

(statearr_22215_22324[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22214 === (2))){
var state_22213__$1 = state_22213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22213__$1,(4),from);
} else {
if((state_val_22214 === (3))){
var inst_22211 = (state_22213[(2)]);
var state_22213__$1 = state_22213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22213__$1,inst_22211);
} else {
if((state_val_22214 === (4))){
var inst_22194 = (state_22213[(7)]);
var inst_22194__$1 = (state_22213[(2)]);
var inst_22195 = (inst_22194__$1 == null);
var state_22213__$1 = (function (){var statearr_22216 = state_22213;
(statearr_22216[(7)] = inst_22194__$1);

return statearr_22216;
})();
if(cljs.core.truth_(inst_22195)){
var statearr_22217_22325 = state_22213__$1;
(statearr_22217_22325[(1)] = (5));

} else {
var statearr_22218_22326 = state_22213__$1;
(statearr_22218_22326[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22214 === (5))){
var inst_22197 = cljs.core.async.close_BANG_(jobs);
var state_22213__$1 = state_22213;
var statearr_22219_22327 = state_22213__$1;
(statearr_22219_22327[(2)] = inst_22197);

(statearr_22219_22327[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22214 === (6))){
var inst_22194 = (state_22213[(7)]);
var inst_22199 = (state_22213[(8)]);
var inst_22199__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_22200 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22201 = [inst_22194,inst_22199__$1];
var inst_22202 = (new cljs.core.PersistentVector(null,2,(5),inst_22200,inst_22201,null));
var state_22213__$1 = (function (){var statearr_22220 = state_22213;
(statearr_22220[(8)] = inst_22199__$1);

return statearr_22220;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22213__$1,(8),jobs,inst_22202);
} else {
if((state_val_22214 === (7))){
var inst_22209 = (state_22213[(2)]);
var state_22213__$1 = state_22213;
var statearr_22221_22328 = state_22213__$1;
(statearr_22221_22328[(2)] = inst_22209);

(statearr_22221_22328[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22214 === (8))){
var inst_22199 = (state_22213[(8)]);
var inst_22204 = (state_22213[(2)]);
var state_22213__$1 = (function (){var statearr_22222 = state_22213;
(statearr_22222[(9)] = inst_22204);

return statearr_22222;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22213__$1,(9),results,inst_22199);
} else {
if((state_val_22214 === (9))){
var inst_22206 = (state_22213[(2)]);
var state_22213__$1 = (function (){var statearr_22223 = state_22213;
(statearr_22223[(10)] = inst_22206);

return statearr_22223;
})();
var statearr_22224_22329 = state_22213__$1;
(statearr_22224_22329[(2)] = null);

(statearr_22224_22329[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__21958__auto___22323,jobs,results,process,async))
;
return ((function (switch__21856__auto__,c__21958__auto___22323,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____0 = (function (){
var statearr_22225 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22225[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__);

(statearr_22225[(1)] = (1));

return statearr_22225;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____1 = (function (state_22213){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_22213);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e22226){if((e22226 instanceof Object)){
var ex__21860__auto__ = e22226;
var statearr_22227_22330 = state_22213;
(statearr_22227_22330[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22213);

return cljs.core.cst$kw$recur;
} else {
throw e22226;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__22331 = state_22213;
state_22213 = G__22331;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__ = function(state_22213){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____1.call(this,state_22213);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto___22323,jobs,results,process,async))
})();
var state__21960__auto__ = (function (){var statearr_22228 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_22228[(6)] = c__21958__auto___22323);

return statearr_22228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto___22323,jobs,results,process,async))
);


var c__21958__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto__,jobs,results,process,async){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto__,jobs,results,process,async){
return (function (state_22266){
var state_val_22267 = (state_22266[(1)]);
if((state_val_22267 === (7))){
var inst_22262 = (state_22266[(2)]);
var state_22266__$1 = state_22266;
var statearr_22268_22332 = state_22266__$1;
(statearr_22268_22332[(2)] = inst_22262);

(statearr_22268_22332[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22267 === (20))){
var state_22266__$1 = state_22266;
var statearr_22269_22333 = state_22266__$1;
(statearr_22269_22333[(2)] = null);

(statearr_22269_22333[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22267 === (1))){
var state_22266__$1 = state_22266;
var statearr_22270_22334 = state_22266__$1;
(statearr_22270_22334[(2)] = null);

(statearr_22270_22334[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22267 === (4))){
var inst_22231 = (state_22266[(7)]);
var inst_22231__$1 = (state_22266[(2)]);
var inst_22232 = (inst_22231__$1 == null);
var state_22266__$1 = (function (){var statearr_22271 = state_22266;
(statearr_22271[(7)] = inst_22231__$1);

return statearr_22271;
})();
if(cljs.core.truth_(inst_22232)){
var statearr_22272_22335 = state_22266__$1;
(statearr_22272_22335[(1)] = (5));

} else {
var statearr_22273_22336 = state_22266__$1;
(statearr_22273_22336[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22267 === (15))){
var inst_22244 = (state_22266[(8)]);
var state_22266__$1 = state_22266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22266__$1,(18),to,inst_22244);
} else {
if((state_val_22267 === (21))){
var inst_22257 = (state_22266[(2)]);
var state_22266__$1 = state_22266;
var statearr_22274_22337 = state_22266__$1;
(statearr_22274_22337[(2)] = inst_22257);

(statearr_22274_22337[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22267 === (13))){
var inst_22259 = (state_22266[(2)]);
var state_22266__$1 = (function (){var statearr_22275 = state_22266;
(statearr_22275[(9)] = inst_22259);

return statearr_22275;
})();
var statearr_22276_22338 = state_22266__$1;
(statearr_22276_22338[(2)] = null);

(statearr_22276_22338[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22267 === (6))){
var inst_22231 = (state_22266[(7)]);
var state_22266__$1 = state_22266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22266__$1,(11),inst_22231);
} else {
if((state_val_22267 === (17))){
var inst_22252 = (state_22266[(2)]);
var state_22266__$1 = state_22266;
if(cljs.core.truth_(inst_22252)){
var statearr_22277_22339 = state_22266__$1;
(statearr_22277_22339[(1)] = (19));

} else {
var statearr_22278_22340 = state_22266__$1;
(statearr_22278_22340[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22267 === (3))){
var inst_22264 = (state_22266[(2)]);
var state_22266__$1 = state_22266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22266__$1,inst_22264);
} else {
if((state_val_22267 === (12))){
var inst_22241 = (state_22266[(10)]);
var state_22266__$1 = state_22266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22266__$1,(14),inst_22241);
} else {
if((state_val_22267 === (2))){
var state_22266__$1 = state_22266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22266__$1,(4),results);
} else {
if((state_val_22267 === (19))){
var state_22266__$1 = state_22266;
var statearr_22279_22341 = state_22266__$1;
(statearr_22279_22341[(2)] = null);

(statearr_22279_22341[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22267 === (11))){
var inst_22241 = (state_22266[(2)]);
var state_22266__$1 = (function (){var statearr_22280 = state_22266;
(statearr_22280[(10)] = inst_22241);

return statearr_22280;
})();
var statearr_22281_22342 = state_22266__$1;
(statearr_22281_22342[(2)] = null);

(statearr_22281_22342[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22267 === (9))){
var state_22266__$1 = state_22266;
var statearr_22282_22343 = state_22266__$1;
(statearr_22282_22343[(2)] = null);

(statearr_22282_22343[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22267 === (5))){
var state_22266__$1 = state_22266;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22283_22344 = state_22266__$1;
(statearr_22283_22344[(1)] = (8));

} else {
var statearr_22284_22345 = state_22266__$1;
(statearr_22284_22345[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22267 === (14))){
var inst_22246 = (state_22266[(11)]);
var inst_22244 = (state_22266[(8)]);
var inst_22244__$1 = (state_22266[(2)]);
var inst_22245 = (inst_22244__$1 == null);
var inst_22246__$1 = cljs.core.not(inst_22245);
var state_22266__$1 = (function (){var statearr_22285 = state_22266;
(statearr_22285[(11)] = inst_22246__$1);

(statearr_22285[(8)] = inst_22244__$1);

return statearr_22285;
})();
if(inst_22246__$1){
var statearr_22286_22346 = state_22266__$1;
(statearr_22286_22346[(1)] = (15));

} else {
var statearr_22287_22347 = state_22266__$1;
(statearr_22287_22347[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22267 === (16))){
var inst_22246 = (state_22266[(11)]);
var state_22266__$1 = state_22266;
var statearr_22288_22348 = state_22266__$1;
(statearr_22288_22348[(2)] = inst_22246);

(statearr_22288_22348[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22267 === (10))){
var inst_22238 = (state_22266[(2)]);
var state_22266__$1 = state_22266;
var statearr_22289_22349 = state_22266__$1;
(statearr_22289_22349[(2)] = inst_22238);

(statearr_22289_22349[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22267 === (18))){
var inst_22249 = (state_22266[(2)]);
var state_22266__$1 = state_22266;
var statearr_22290_22350 = state_22266__$1;
(statearr_22290_22350[(2)] = inst_22249);

(statearr_22290_22350[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22267 === (8))){
var inst_22235 = cljs.core.async.close_BANG_(to);
var state_22266__$1 = state_22266;
var statearr_22291_22351 = state_22266__$1;
(statearr_22291_22351[(2)] = inst_22235);

(statearr_22291_22351[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__21958__auto__,jobs,results,process,async))
;
return ((function (switch__21856__auto__,c__21958__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____0 = (function (){
var statearr_22292 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22292[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__);

(statearr_22292[(1)] = (1));

return statearr_22292;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____1 = (function (state_22266){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_22266);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e22293){if((e22293 instanceof Object)){
var ex__21860__auto__ = e22293;
var statearr_22294_22352 = state_22266;
(statearr_22294_22352[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22266);

return cljs.core.cst$kw$recur;
} else {
throw e22293;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__22353 = state_22266;
state_22266 = G__22353;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__ = function(state_22266){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____1.call(this,state_22266);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto__,jobs,results,process,async))
})();
var state__21960__auto__ = (function (){var statearr_22295 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_22295[(6)] = c__21958__auto__);

return statearr_22295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto__,jobs,results,process,async))
);

return c__21958__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__22355 = arguments.length;
switch (G__22355) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__22358 = arguments.length;
switch (G__22358) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__22361 = arguments.length;
switch (G__22361) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__21958__auto___22410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto___22410,tc,fc){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto___22410,tc,fc){
return (function (state_22387){
var state_val_22388 = (state_22387[(1)]);
if((state_val_22388 === (7))){
var inst_22383 = (state_22387[(2)]);
var state_22387__$1 = state_22387;
var statearr_22389_22411 = state_22387__$1;
(statearr_22389_22411[(2)] = inst_22383);

(statearr_22389_22411[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22388 === (1))){
var state_22387__$1 = state_22387;
var statearr_22390_22412 = state_22387__$1;
(statearr_22390_22412[(2)] = null);

(statearr_22390_22412[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22388 === (4))){
var inst_22364 = (state_22387[(7)]);
var inst_22364__$1 = (state_22387[(2)]);
var inst_22365 = (inst_22364__$1 == null);
var state_22387__$1 = (function (){var statearr_22391 = state_22387;
(statearr_22391[(7)] = inst_22364__$1);

return statearr_22391;
})();
if(cljs.core.truth_(inst_22365)){
var statearr_22392_22413 = state_22387__$1;
(statearr_22392_22413[(1)] = (5));

} else {
var statearr_22393_22414 = state_22387__$1;
(statearr_22393_22414[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22388 === (13))){
var state_22387__$1 = state_22387;
var statearr_22394_22415 = state_22387__$1;
(statearr_22394_22415[(2)] = null);

(statearr_22394_22415[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22388 === (6))){
var inst_22364 = (state_22387[(7)]);
var inst_22370 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22364) : p.call(null,inst_22364));
var state_22387__$1 = state_22387;
if(cljs.core.truth_(inst_22370)){
var statearr_22395_22416 = state_22387__$1;
(statearr_22395_22416[(1)] = (9));

} else {
var statearr_22396_22417 = state_22387__$1;
(statearr_22396_22417[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22388 === (3))){
var inst_22385 = (state_22387[(2)]);
var state_22387__$1 = state_22387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22387__$1,inst_22385);
} else {
if((state_val_22388 === (12))){
var state_22387__$1 = state_22387;
var statearr_22397_22418 = state_22387__$1;
(statearr_22397_22418[(2)] = null);

(statearr_22397_22418[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22388 === (2))){
var state_22387__$1 = state_22387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22387__$1,(4),ch);
} else {
if((state_val_22388 === (11))){
var inst_22364 = (state_22387[(7)]);
var inst_22374 = (state_22387[(2)]);
var state_22387__$1 = state_22387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22387__$1,(8),inst_22374,inst_22364);
} else {
if((state_val_22388 === (9))){
var state_22387__$1 = state_22387;
var statearr_22398_22419 = state_22387__$1;
(statearr_22398_22419[(2)] = tc);

(statearr_22398_22419[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22388 === (5))){
var inst_22367 = cljs.core.async.close_BANG_(tc);
var inst_22368 = cljs.core.async.close_BANG_(fc);
var state_22387__$1 = (function (){var statearr_22399 = state_22387;
(statearr_22399[(8)] = inst_22367);

return statearr_22399;
})();
var statearr_22400_22420 = state_22387__$1;
(statearr_22400_22420[(2)] = inst_22368);

(statearr_22400_22420[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22388 === (14))){
var inst_22381 = (state_22387[(2)]);
var state_22387__$1 = state_22387;
var statearr_22401_22421 = state_22387__$1;
(statearr_22401_22421[(2)] = inst_22381);

(statearr_22401_22421[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22388 === (10))){
var state_22387__$1 = state_22387;
var statearr_22402_22422 = state_22387__$1;
(statearr_22402_22422[(2)] = fc);

(statearr_22402_22422[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22388 === (8))){
var inst_22376 = (state_22387[(2)]);
var state_22387__$1 = state_22387;
if(cljs.core.truth_(inst_22376)){
var statearr_22403_22423 = state_22387__$1;
(statearr_22403_22423[(1)] = (12));

} else {
var statearr_22404_22424 = state_22387__$1;
(statearr_22404_22424[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__21958__auto___22410,tc,fc))
;
return ((function (switch__21856__auto__,c__21958__auto___22410,tc,fc){
return (function() {
var cljs$core$async$state_machine__21857__auto__ = null;
var cljs$core$async$state_machine__21857__auto____0 = (function (){
var statearr_22405 = [null,null,null,null,null,null,null,null,null];
(statearr_22405[(0)] = cljs$core$async$state_machine__21857__auto__);

(statearr_22405[(1)] = (1));

return statearr_22405;
});
var cljs$core$async$state_machine__21857__auto____1 = (function (state_22387){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_22387);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e22406){if((e22406 instanceof Object)){
var ex__21860__auto__ = e22406;
var statearr_22407_22425 = state_22387;
(statearr_22407_22425[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22387);

return cljs.core.cst$kw$recur;
} else {
throw e22406;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__22426 = state_22387;
state_22387 = G__22426;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
cljs$core$async$state_machine__21857__auto__ = function(state_22387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21857__auto____1.call(this,state_22387);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21857__auto____0;
cljs$core$async$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21857__auto____1;
return cljs$core$async$state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto___22410,tc,fc))
})();
var state__21960__auto__ = (function (){var statearr_22408 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_22408[(6)] = c__21958__auto___22410);

return statearr_22408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto___22410,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21958__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto__){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto__){
return (function (state_22447){
var state_val_22448 = (state_22447[(1)]);
if((state_val_22448 === (7))){
var inst_22443 = (state_22447[(2)]);
var state_22447__$1 = state_22447;
var statearr_22449_22467 = state_22447__$1;
(statearr_22449_22467[(2)] = inst_22443);

(statearr_22449_22467[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22448 === (1))){
var inst_22427 = init;
var state_22447__$1 = (function (){var statearr_22450 = state_22447;
(statearr_22450[(7)] = inst_22427);

return statearr_22450;
})();
var statearr_22451_22468 = state_22447__$1;
(statearr_22451_22468[(2)] = null);

(statearr_22451_22468[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22448 === (4))){
var inst_22430 = (state_22447[(8)]);
var inst_22430__$1 = (state_22447[(2)]);
var inst_22431 = (inst_22430__$1 == null);
var state_22447__$1 = (function (){var statearr_22452 = state_22447;
(statearr_22452[(8)] = inst_22430__$1);

return statearr_22452;
})();
if(cljs.core.truth_(inst_22431)){
var statearr_22453_22469 = state_22447__$1;
(statearr_22453_22469[(1)] = (5));

} else {
var statearr_22454_22470 = state_22447__$1;
(statearr_22454_22470[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22448 === (6))){
var inst_22434 = (state_22447[(9)]);
var inst_22430 = (state_22447[(8)]);
var inst_22427 = (state_22447[(7)]);
var inst_22434__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_22427,inst_22430) : f.call(null,inst_22427,inst_22430));
var inst_22435 = cljs.core.reduced_QMARK_(inst_22434__$1);
var state_22447__$1 = (function (){var statearr_22455 = state_22447;
(statearr_22455[(9)] = inst_22434__$1);

return statearr_22455;
})();
if(inst_22435){
var statearr_22456_22471 = state_22447__$1;
(statearr_22456_22471[(1)] = (8));

} else {
var statearr_22457_22472 = state_22447__$1;
(statearr_22457_22472[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22448 === (3))){
var inst_22445 = (state_22447[(2)]);
var state_22447__$1 = state_22447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22447__$1,inst_22445);
} else {
if((state_val_22448 === (2))){
var state_22447__$1 = state_22447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22447__$1,(4),ch);
} else {
if((state_val_22448 === (9))){
var inst_22434 = (state_22447[(9)]);
var inst_22427 = inst_22434;
var state_22447__$1 = (function (){var statearr_22458 = state_22447;
(statearr_22458[(7)] = inst_22427);

return statearr_22458;
})();
var statearr_22459_22473 = state_22447__$1;
(statearr_22459_22473[(2)] = null);

(statearr_22459_22473[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22448 === (5))){
var inst_22427 = (state_22447[(7)]);
var state_22447__$1 = state_22447;
var statearr_22460_22474 = state_22447__$1;
(statearr_22460_22474[(2)] = inst_22427);

(statearr_22460_22474[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22448 === (10))){
var inst_22441 = (state_22447[(2)]);
var state_22447__$1 = state_22447;
var statearr_22461_22475 = state_22447__$1;
(statearr_22461_22475[(2)] = inst_22441);

(statearr_22461_22475[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22448 === (8))){
var inst_22434 = (state_22447[(9)]);
var inst_22437 = cljs.core.deref(inst_22434);
var state_22447__$1 = state_22447;
var statearr_22462_22476 = state_22447__$1;
(statearr_22462_22476[(2)] = inst_22437);

(statearr_22462_22476[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__21958__auto__))
;
return ((function (switch__21856__auto__,c__21958__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21857__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21857__auto____0 = (function (){
var statearr_22463 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22463[(0)] = cljs$core$async$reduce_$_state_machine__21857__auto__);

(statearr_22463[(1)] = (1));

return statearr_22463;
});
var cljs$core$async$reduce_$_state_machine__21857__auto____1 = (function (state_22447){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_22447);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e22464){if((e22464 instanceof Object)){
var ex__21860__auto__ = e22464;
var statearr_22465_22477 = state_22447;
(statearr_22465_22477[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22447);

return cljs.core.cst$kw$recur;
} else {
throw e22464;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__22478 = state_22447;
state_22447 = G__22478;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21857__auto__ = function(state_22447){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21857__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21857__auto____1.call(this,state_22447);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21857__auto____0;
cljs$core$async$reduce_$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21857__auto____1;
return cljs$core$async$reduce_$_state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto__))
})();
var state__21960__auto__ = (function (){var statearr_22466 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_22466[(6)] = c__21958__auto__);

return statearr_22466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto__))
);

return c__21958__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__21958__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto__,f__$1){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto__,f__$1){
return (function (state_22484){
var state_val_22485 = (state_22484[(1)]);
if((state_val_22485 === (1))){
var inst_22479 = cljs.core.async.reduce(f__$1,init,ch);
var state_22484__$1 = state_22484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22484__$1,(2),inst_22479);
} else {
if((state_val_22485 === (2))){
var inst_22481 = (state_22484[(2)]);
var inst_22482 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_22481) : f__$1.call(null,inst_22481));
var state_22484__$1 = state_22484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22484__$1,inst_22482);
} else {
return null;
}
}
});})(c__21958__auto__,f__$1))
;
return ((function (switch__21856__auto__,c__21958__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__21857__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21857__auto____0 = (function (){
var statearr_22486 = [null,null,null,null,null,null,null];
(statearr_22486[(0)] = cljs$core$async$transduce_$_state_machine__21857__auto__);

(statearr_22486[(1)] = (1));

return statearr_22486;
});
var cljs$core$async$transduce_$_state_machine__21857__auto____1 = (function (state_22484){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_22484);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e22487){if((e22487 instanceof Object)){
var ex__21860__auto__ = e22487;
var statearr_22488_22490 = state_22484;
(statearr_22488_22490[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22484);

return cljs.core.cst$kw$recur;
} else {
throw e22487;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__22491 = state_22484;
state_22484 = G__22491;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21857__auto__ = function(state_22484){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21857__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21857__auto____1.call(this,state_22484);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21857__auto____0;
cljs$core$async$transduce_$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21857__auto____1;
return cljs$core$async$transduce_$_state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto__,f__$1))
})();
var state__21960__auto__ = (function (){var statearr_22489 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_22489[(6)] = c__21958__auto__);

return statearr_22489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto__,f__$1))
);

return c__21958__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__22493 = arguments.length;
switch (G__22493) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21958__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto__){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto__){
return (function (state_22518){
var state_val_22519 = (state_22518[(1)]);
if((state_val_22519 === (7))){
var inst_22500 = (state_22518[(2)]);
var state_22518__$1 = state_22518;
var statearr_22520_22541 = state_22518__$1;
(statearr_22520_22541[(2)] = inst_22500);

(statearr_22520_22541[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22519 === (1))){
var inst_22494 = cljs.core.seq(coll);
var inst_22495 = inst_22494;
var state_22518__$1 = (function (){var statearr_22521 = state_22518;
(statearr_22521[(7)] = inst_22495);

return statearr_22521;
})();
var statearr_22522_22542 = state_22518__$1;
(statearr_22522_22542[(2)] = null);

(statearr_22522_22542[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22519 === (4))){
var inst_22495 = (state_22518[(7)]);
var inst_22498 = cljs.core.first(inst_22495);
var state_22518__$1 = state_22518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22518__$1,(7),ch,inst_22498);
} else {
if((state_val_22519 === (13))){
var inst_22512 = (state_22518[(2)]);
var state_22518__$1 = state_22518;
var statearr_22523_22543 = state_22518__$1;
(statearr_22523_22543[(2)] = inst_22512);

(statearr_22523_22543[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22519 === (6))){
var inst_22503 = (state_22518[(2)]);
var state_22518__$1 = state_22518;
if(cljs.core.truth_(inst_22503)){
var statearr_22524_22544 = state_22518__$1;
(statearr_22524_22544[(1)] = (8));

} else {
var statearr_22525_22545 = state_22518__$1;
(statearr_22525_22545[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22519 === (3))){
var inst_22516 = (state_22518[(2)]);
var state_22518__$1 = state_22518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22518__$1,inst_22516);
} else {
if((state_val_22519 === (12))){
var state_22518__$1 = state_22518;
var statearr_22526_22546 = state_22518__$1;
(statearr_22526_22546[(2)] = null);

(statearr_22526_22546[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22519 === (2))){
var inst_22495 = (state_22518[(7)]);
var state_22518__$1 = state_22518;
if(cljs.core.truth_(inst_22495)){
var statearr_22527_22547 = state_22518__$1;
(statearr_22527_22547[(1)] = (4));

} else {
var statearr_22528_22548 = state_22518__$1;
(statearr_22528_22548[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22519 === (11))){
var inst_22509 = cljs.core.async.close_BANG_(ch);
var state_22518__$1 = state_22518;
var statearr_22529_22549 = state_22518__$1;
(statearr_22529_22549[(2)] = inst_22509);

(statearr_22529_22549[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22519 === (9))){
var state_22518__$1 = state_22518;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22530_22550 = state_22518__$1;
(statearr_22530_22550[(1)] = (11));

} else {
var statearr_22531_22551 = state_22518__$1;
(statearr_22531_22551[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22519 === (5))){
var inst_22495 = (state_22518[(7)]);
var state_22518__$1 = state_22518;
var statearr_22532_22552 = state_22518__$1;
(statearr_22532_22552[(2)] = inst_22495);

(statearr_22532_22552[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22519 === (10))){
var inst_22514 = (state_22518[(2)]);
var state_22518__$1 = state_22518;
var statearr_22533_22553 = state_22518__$1;
(statearr_22533_22553[(2)] = inst_22514);

(statearr_22533_22553[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22519 === (8))){
var inst_22495 = (state_22518[(7)]);
var inst_22505 = cljs.core.next(inst_22495);
var inst_22495__$1 = inst_22505;
var state_22518__$1 = (function (){var statearr_22534 = state_22518;
(statearr_22534[(7)] = inst_22495__$1);

return statearr_22534;
})();
var statearr_22535_22554 = state_22518__$1;
(statearr_22535_22554[(2)] = null);

(statearr_22535_22554[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__21958__auto__))
;
return ((function (switch__21856__auto__,c__21958__auto__){
return (function() {
var cljs$core$async$state_machine__21857__auto__ = null;
var cljs$core$async$state_machine__21857__auto____0 = (function (){
var statearr_22536 = [null,null,null,null,null,null,null,null];
(statearr_22536[(0)] = cljs$core$async$state_machine__21857__auto__);

(statearr_22536[(1)] = (1));

return statearr_22536;
});
var cljs$core$async$state_machine__21857__auto____1 = (function (state_22518){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_22518);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e22537){if((e22537 instanceof Object)){
var ex__21860__auto__ = e22537;
var statearr_22538_22555 = state_22518;
(statearr_22538_22555[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22518);

return cljs.core.cst$kw$recur;
} else {
throw e22537;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__22556 = state_22518;
state_22518 = G__22556;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
cljs$core$async$state_machine__21857__auto__ = function(state_22518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21857__auto____1.call(this,state_22518);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21857__auto____0;
cljs$core$async$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21857__auto____1;
return cljs$core$async$state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto__))
})();
var state__21960__auto__ = (function (){var statearr_22539 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_22539[(6)] = c__21958__auto__);

return statearr_22539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto__))
);

return c__21958__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__9541__auto__ = (((_ == null))?null:_);
var m__9542__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__9542__auto__.call(null,_));
} else {
var m__9542__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__9542__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__9541__auto__ = (((m == null))?null:m);
var m__9542__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__9542__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__9542__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__9542__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__9541__auto__ = (((m == null))?null:m);
var m__9542__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9542__auto__.call(null,m,ch));
} else {
var m__9542__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9542__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__9541__auto__ = (((m == null))?null:m);
var m__9542__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__9542__auto__.call(null,m));
} else {
var m__9542__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__9542__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
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
if(typeof cljs.core.async.t_cljs$core$async22557 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22557 = (function (ch,cs,meta22558){
this.ch = ch;
this.cs = cs;
this.meta22558 = meta22558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22559,meta22558__$1){
var self__ = this;
var _22559__$1 = this;
return (new cljs.core.async.t_cljs$core$async22557(self__.ch,self__.cs,meta22558__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22557.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22559){
var self__ = this;
var _22559__$1 = this;
return self__.meta22558;
});})(cs))
;

cljs.core.async.t_cljs$core$async22557.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22557.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22557.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22557.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22557.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22557.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22557.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta22558], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22557.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22557";

cljs.core.async.t_cljs$core$async22557.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.core.async/t_cljs$core$async22557");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22557 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22557(ch__$1,cs__$1,meta22558){
return (new cljs.core.async.t_cljs$core$async22557(ch__$1,cs__$1,meta22558));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22557(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21958__auto___22779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto___22779,cs,m,dchan,dctr,done){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto___22779,cs,m,dchan,dctr,done){
return (function (state_22694){
var state_val_22695 = (state_22694[(1)]);
if((state_val_22695 === (7))){
var inst_22690 = (state_22694[(2)]);
var state_22694__$1 = state_22694;
var statearr_22696_22780 = state_22694__$1;
(statearr_22696_22780[(2)] = inst_22690);

(statearr_22696_22780[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (20))){
var inst_22593 = (state_22694[(7)]);
var inst_22605 = cljs.core.first(inst_22593);
var inst_22606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22605,(0),null);
var inst_22607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22605,(1),null);
var state_22694__$1 = (function (){var statearr_22697 = state_22694;
(statearr_22697[(8)] = inst_22606);

return statearr_22697;
})();
if(cljs.core.truth_(inst_22607)){
var statearr_22698_22781 = state_22694__$1;
(statearr_22698_22781[(1)] = (22));

} else {
var statearr_22699_22782 = state_22694__$1;
(statearr_22699_22782[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (27))){
var inst_22642 = (state_22694[(9)]);
var inst_22637 = (state_22694[(10)]);
var inst_22635 = (state_22694[(11)]);
var inst_22562 = (state_22694[(12)]);
var inst_22642__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22635,inst_22637);
var inst_22643 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22642__$1,inst_22562,done);
var state_22694__$1 = (function (){var statearr_22700 = state_22694;
(statearr_22700[(9)] = inst_22642__$1);

return statearr_22700;
})();
if(cljs.core.truth_(inst_22643)){
var statearr_22701_22783 = state_22694__$1;
(statearr_22701_22783[(1)] = (30));

} else {
var statearr_22702_22784 = state_22694__$1;
(statearr_22702_22784[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (1))){
var state_22694__$1 = state_22694;
var statearr_22703_22785 = state_22694__$1;
(statearr_22703_22785[(2)] = null);

(statearr_22703_22785[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (24))){
var inst_22593 = (state_22694[(7)]);
var inst_22612 = (state_22694[(2)]);
var inst_22613 = cljs.core.next(inst_22593);
var inst_22571 = inst_22613;
var inst_22572 = null;
var inst_22573 = (0);
var inst_22574 = (0);
var state_22694__$1 = (function (){var statearr_22704 = state_22694;
(statearr_22704[(13)] = inst_22571);

(statearr_22704[(14)] = inst_22612);

(statearr_22704[(15)] = inst_22572);

(statearr_22704[(16)] = inst_22574);

(statearr_22704[(17)] = inst_22573);

return statearr_22704;
})();
var statearr_22705_22786 = state_22694__$1;
(statearr_22705_22786[(2)] = null);

(statearr_22705_22786[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (39))){
var state_22694__$1 = state_22694;
var statearr_22709_22787 = state_22694__$1;
(statearr_22709_22787[(2)] = null);

(statearr_22709_22787[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (4))){
var inst_22562 = (state_22694[(12)]);
var inst_22562__$1 = (state_22694[(2)]);
var inst_22563 = (inst_22562__$1 == null);
var state_22694__$1 = (function (){var statearr_22710 = state_22694;
(statearr_22710[(12)] = inst_22562__$1);

return statearr_22710;
})();
if(cljs.core.truth_(inst_22563)){
var statearr_22711_22788 = state_22694__$1;
(statearr_22711_22788[(1)] = (5));

} else {
var statearr_22712_22789 = state_22694__$1;
(statearr_22712_22789[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (15))){
var inst_22571 = (state_22694[(13)]);
var inst_22572 = (state_22694[(15)]);
var inst_22574 = (state_22694[(16)]);
var inst_22573 = (state_22694[(17)]);
var inst_22589 = (state_22694[(2)]);
var inst_22590 = (inst_22574 + (1));
var tmp22706 = inst_22571;
var tmp22707 = inst_22572;
var tmp22708 = inst_22573;
var inst_22571__$1 = tmp22706;
var inst_22572__$1 = tmp22707;
var inst_22573__$1 = tmp22708;
var inst_22574__$1 = inst_22590;
var state_22694__$1 = (function (){var statearr_22713 = state_22694;
(statearr_22713[(13)] = inst_22571__$1);

(statearr_22713[(15)] = inst_22572__$1);

(statearr_22713[(16)] = inst_22574__$1);

(statearr_22713[(18)] = inst_22589);

(statearr_22713[(17)] = inst_22573__$1);

return statearr_22713;
})();
var statearr_22714_22790 = state_22694__$1;
(statearr_22714_22790[(2)] = null);

(statearr_22714_22790[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (21))){
var inst_22616 = (state_22694[(2)]);
var state_22694__$1 = state_22694;
var statearr_22718_22791 = state_22694__$1;
(statearr_22718_22791[(2)] = inst_22616);

(statearr_22718_22791[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (31))){
var inst_22642 = (state_22694[(9)]);
var inst_22646 = done(null);
var inst_22647 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22642);
var state_22694__$1 = (function (){var statearr_22719 = state_22694;
(statearr_22719[(19)] = inst_22646);

return statearr_22719;
})();
var statearr_22720_22792 = state_22694__$1;
(statearr_22720_22792[(2)] = inst_22647);

(statearr_22720_22792[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (32))){
var inst_22634 = (state_22694[(20)]);
var inst_22637 = (state_22694[(10)]);
var inst_22635 = (state_22694[(11)]);
var inst_22636 = (state_22694[(21)]);
var inst_22649 = (state_22694[(2)]);
var inst_22650 = (inst_22637 + (1));
var tmp22715 = inst_22634;
var tmp22716 = inst_22635;
var tmp22717 = inst_22636;
var inst_22634__$1 = tmp22715;
var inst_22635__$1 = tmp22716;
var inst_22636__$1 = tmp22717;
var inst_22637__$1 = inst_22650;
var state_22694__$1 = (function (){var statearr_22721 = state_22694;
(statearr_22721[(20)] = inst_22634__$1);

(statearr_22721[(10)] = inst_22637__$1);

(statearr_22721[(22)] = inst_22649);

(statearr_22721[(11)] = inst_22635__$1);

(statearr_22721[(21)] = inst_22636__$1);

return statearr_22721;
})();
var statearr_22722_22793 = state_22694__$1;
(statearr_22722_22793[(2)] = null);

(statearr_22722_22793[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (40))){
var inst_22662 = (state_22694[(23)]);
var inst_22666 = done(null);
var inst_22667 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22662);
var state_22694__$1 = (function (){var statearr_22723 = state_22694;
(statearr_22723[(24)] = inst_22666);

return statearr_22723;
})();
var statearr_22724_22794 = state_22694__$1;
(statearr_22724_22794[(2)] = inst_22667);

(statearr_22724_22794[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (33))){
var inst_22653 = (state_22694[(25)]);
var inst_22655 = cljs.core.chunked_seq_QMARK_(inst_22653);
var state_22694__$1 = state_22694;
if(inst_22655){
var statearr_22725_22795 = state_22694__$1;
(statearr_22725_22795[(1)] = (36));

} else {
var statearr_22726_22796 = state_22694__$1;
(statearr_22726_22796[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (13))){
var inst_22583 = (state_22694[(26)]);
var inst_22586 = cljs.core.async.close_BANG_(inst_22583);
var state_22694__$1 = state_22694;
var statearr_22727_22797 = state_22694__$1;
(statearr_22727_22797[(2)] = inst_22586);

(statearr_22727_22797[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (22))){
var inst_22606 = (state_22694[(8)]);
var inst_22609 = cljs.core.async.close_BANG_(inst_22606);
var state_22694__$1 = state_22694;
var statearr_22728_22798 = state_22694__$1;
(statearr_22728_22798[(2)] = inst_22609);

(statearr_22728_22798[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (36))){
var inst_22653 = (state_22694[(25)]);
var inst_22657 = cljs.core.chunk_first(inst_22653);
var inst_22658 = cljs.core.chunk_rest(inst_22653);
var inst_22659 = cljs.core.count(inst_22657);
var inst_22634 = inst_22658;
var inst_22635 = inst_22657;
var inst_22636 = inst_22659;
var inst_22637 = (0);
var state_22694__$1 = (function (){var statearr_22729 = state_22694;
(statearr_22729[(20)] = inst_22634);

(statearr_22729[(10)] = inst_22637);

(statearr_22729[(11)] = inst_22635);

(statearr_22729[(21)] = inst_22636);

return statearr_22729;
})();
var statearr_22730_22799 = state_22694__$1;
(statearr_22730_22799[(2)] = null);

(statearr_22730_22799[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (41))){
var inst_22653 = (state_22694[(25)]);
var inst_22669 = (state_22694[(2)]);
var inst_22670 = cljs.core.next(inst_22653);
var inst_22634 = inst_22670;
var inst_22635 = null;
var inst_22636 = (0);
var inst_22637 = (0);
var state_22694__$1 = (function (){var statearr_22731 = state_22694;
(statearr_22731[(20)] = inst_22634);

(statearr_22731[(10)] = inst_22637);

(statearr_22731[(11)] = inst_22635);

(statearr_22731[(27)] = inst_22669);

(statearr_22731[(21)] = inst_22636);

return statearr_22731;
})();
var statearr_22732_22800 = state_22694__$1;
(statearr_22732_22800[(2)] = null);

(statearr_22732_22800[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (43))){
var state_22694__$1 = state_22694;
var statearr_22733_22801 = state_22694__$1;
(statearr_22733_22801[(2)] = null);

(statearr_22733_22801[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (29))){
var inst_22678 = (state_22694[(2)]);
var state_22694__$1 = state_22694;
var statearr_22734_22802 = state_22694__$1;
(statearr_22734_22802[(2)] = inst_22678);

(statearr_22734_22802[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (44))){
var inst_22687 = (state_22694[(2)]);
var state_22694__$1 = (function (){var statearr_22735 = state_22694;
(statearr_22735[(28)] = inst_22687);

return statearr_22735;
})();
var statearr_22736_22803 = state_22694__$1;
(statearr_22736_22803[(2)] = null);

(statearr_22736_22803[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (6))){
var inst_22626 = (state_22694[(29)]);
var inst_22625 = cljs.core.deref(cs);
var inst_22626__$1 = cljs.core.keys(inst_22625);
var inst_22627 = cljs.core.count(inst_22626__$1);
var inst_22628 = cljs.core.reset_BANG_(dctr,inst_22627);
var inst_22633 = cljs.core.seq(inst_22626__$1);
var inst_22634 = inst_22633;
var inst_22635 = null;
var inst_22636 = (0);
var inst_22637 = (0);
var state_22694__$1 = (function (){var statearr_22737 = state_22694;
(statearr_22737[(20)] = inst_22634);

(statearr_22737[(29)] = inst_22626__$1);

(statearr_22737[(10)] = inst_22637);

(statearr_22737[(11)] = inst_22635);

(statearr_22737[(21)] = inst_22636);

(statearr_22737[(30)] = inst_22628);

return statearr_22737;
})();
var statearr_22738_22804 = state_22694__$1;
(statearr_22738_22804[(2)] = null);

(statearr_22738_22804[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (28))){
var inst_22634 = (state_22694[(20)]);
var inst_22653 = (state_22694[(25)]);
var inst_22653__$1 = cljs.core.seq(inst_22634);
var state_22694__$1 = (function (){var statearr_22739 = state_22694;
(statearr_22739[(25)] = inst_22653__$1);

return statearr_22739;
})();
if(inst_22653__$1){
var statearr_22740_22805 = state_22694__$1;
(statearr_22740_22805[(1)] = (33));

} else {
var statearr_22741_22806 = state_22694__$1;
(statearr_22741_22806[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (25))){
var inst_22637 = (state_22694[(10)]);
var inst_22636 = (state_22694[(21)]);
var inst_22639 = (inst_22637 < inst_22636);
var inst_22640 = inst_22639;
var state_22694__$1 = state_22694;
if(cljs.core.truth_(inst_22640)){
var statearr_22742_22807 = state_22694__$1;
(statearr_22742_22807[(1)] = (27));

} else {
var statearr_22743_22808 = state_22694__$1;
(statearr_22743_22808[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (34))){
var state_22694__$1 = state_22694;
var statearr_22744_22809 = state_22694__$1;
(statearr_22744_22809[(2)] = null);

(statearr_22744_22809[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (17))){
var state_22694__$1 = state_22694;
var statearr_22745_22810 = state_22694__$1;
(statearr_22745_22810[(2)] = null);

(statearr_22745_22810[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (3))){
var inst_22692 = (state_22694[(2)]);
var state_22694__$1 = state_22694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22694__$1,inst_22692);
} else {
if((state_val_22695 === (12))){
var inst_22621 = (state_22694[(2)]);
var state_22694__$1 = state_22694;
var statearr_22746_22811 = state_22694__$1;
(statearr_22746_22811[(2)] = inst_22621);

(statearr_22746_22811[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (2))){
var state_22694__$1 = state_22694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22694__$1,(4),ch);
} else {
if((state_val_22695 === (23))){
var state_22694__$1 = state_22694;
var statearr_22747_22812 = state_22694__$1;
(statearr_22747_22812[(2)] = null);

(statearr_22747_22812[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (35))){
var inst_22676 = (state_22694[(2)]);
var state_22694__$1 = state_22694;
var statearr_22748_22813 = state_22694__$1;
(statearr_22748_22813[(2)] = inst_22676);

(statearr_22748_22813[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (19))){
var inst_22593 = (state_22694[(7)]);
var inst_22597 = cljs.core.chunk_first(inst_22593);
var inst_22598 = cljs.core.chunk_rest(inst_22593);
var inst_22599 = cljs.core.count(inst_22597);
var inst_22571 = inst_22598;
var inst_22572 = inst_22597;
var inst_22573 = inst_22599;
var inst_22574 = (0);
var state_22694__$1 = (function (){var statearr_22749 = state_22694;
(statearr_22749[(13)] = inst_22571);

(statearr_22749[(15)] = inst_22572);

(statearr_22749[(16)] = inst_22574);

(statearr_22749[(17)] = inst_22573);

return statearr_22749;
})();
var statearr_22750_22814 = state_22694__$1;
(statearr_22750_22814[(2)] = null);

(statearr_22750_22814[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (11))){
var inst_22571 = (state_22694[(13)]);
var inst_22593 = (state_22694[(7)]);
var inst_22593__$1 = cljs.core.seq(inst_22571);
var state_22694__$1 = (function (){var statearr_22751 = state_22694;
(statearr_22751[(7)] = inst_22593__$1);

return statearr_22751;
})();
if(inst_22593__$1){
var statearr_22752_22815 = state_22694__$1;
(statearr_22752_22815[(1)] = (16));

} else {
var statearr_22753_22816 = state_22694__$1;
(statearr_22753_22816[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (9))){
var inst_22623 = (state_22694[(2)]);
var state_22694__$1 = state_22694;
var statearr_22754_22817 = state_22694__$1;
(statearr_22754_22817[(2)] = inst_22623);

(statearr_22754_22817[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (5))){
var inst_22569 = cljs.core.deref(cs);
var inst_22570 = cljs.core.seq(inst_22569);
var inst_22571 = inst_22570;
var inst_22572 = null;
var inst_22573 = (0);
var inst_22574 = (0);
var state_22694__$1 = (function (){var statearr_22755 = state_22694;
(statearr_22755[(13)] = inst_22571);

(statearr_22755[(15)] = inst_22572);

(statearr_22755[(16)] = inst_22574);

(statearr_22755[(17)] = inst_22573);

return statearr_22755;
})();
var statearr_22756_22818 = state_22694__$1;
(statearr_22756_22818[(2)] = null);

(statearr_22756_22818[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (14))){
var state_22694__$1 = state_22694;
var statearr_22757_22819 = state_22694__$1;
(statearr_22757_22819[(2)] = null);

(statearr_22757_22819[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (45))){
var inst_22684 = (state_22694[(2)]);
var state_22694__$1 = state_22694;
var statearr_22758_22820 = state_22694__$1;
(statearr_22758_22820[(2)] = inst_22684);

(statearr_22758_22820[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (26))){
var inst_22626 = (state_22694[(29)]);
var inst_22680 = (state_22694[(2)]);
var inst_22681 = cljs.core.seq(inst_22626);
var state_22694__$1 = (function (){var statearr_22759 = state_22694;
(statearr_22759[(31)] = inst_22680);

return statearr_22759;
})();
if(inst_22681){
var statearr_22760_22821 = state_22694__$1;
(statearr_22760_22821[(1)] = (42));

} else {
var statearr_22761_22822 = state_22694__$1;
(statearr_22761_22822[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (16))){
var inst_22593 = (state_22694[(7)]);
var inst_22595 = cljs.core.chunked_seq_QMARK_(inst_22593);
var state_22694__$1 = state_22694;
if(inst_22595){
var statearr_22762_22823 = state_22694__$1;
(statearr_22762_22823[(1)] = (19));

} else {
var statearr_22763_22824 = state_22694__$1;
(statearr_22763_22824[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (38))){
var inst_22673 = (state_22694[(2)]);
var state_22694__$1 = state_22694;
var statearr_22764_22825 = state_22694__$1;
(statearr_22764_22825[(2)] = inst_22673);

(statearr_22764_22825[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (30))){
var state_22694__$1 = state_22694;
var statearr_22765_22826 = state_22694__$1;
(statearr_22765_22826[(2)] = null);

(statearr_22765_22826[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (10))){
var inst_22572 = (state_22694[(15)]);
var inst_22574 = (state_22694[(16)]);
var inst_22582 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22572,inst_22574);
var inst_22583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22582,(0),null);
var inst_22584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22582,(1),null);
var state_22694__$1 = (function (){var statearr_22766 = state_22694;
(statearr_22766[(26)] = inst_22583);

return statearr_22766;
})();
if(cljs.core.truth_(inst_22584)){
var statearr_22767_22827 = state_22694__$1;
(statearr_22767_22827[(1)] = (13));

} else {
var statearr_22768_22828 = state_22694__$1;
(statearr_22768_22828[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (18))){
var inst_22619 = (state_22694[(2)]);
var state_22694__$1 = state_22694;
var statearr_22769_22829 = state_22694__$1;
(statearr_22769_22829[(2)] = inst_22619);

(statearr_22769_22829[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (42))){
var state_22694__$1 = state_22694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22694__$1,(45),dchan);
} else {
if((state_val_22695 === (37))){
var inst_22653 = (state_22694[(25)]);
var inst_22562 = (state_22694[(12)]);
var inst_22662 = (state_22694[(23)]);
var inst_22662__$1 = cljs.core.first(inst_22653);
var inst_22663 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22662__$1,inst_22562,done);
var state_22694__$1 = (function (){var statearr_22770 = state_22694;
(statearr_22770[(23)] = inst_22662__$1);

return statearr_22770;
})();
if(cljs.core.truth_(inst_22663)){
var statearr_22771_22830 = state_22694__$1;
(statearr_22771_22830[(1)] = (39));

} else {
var statearr_22772_22831 = state_22694__$1;
(statearr_22772_22831[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22695 === (8))){
var inst_22574 = (state_22694[(16)]);
var inst_22573 = (state_22694[(17)]);
var inst_22576 = (inst_22574 < inst_22573);
var inst_22577 = inst_22576;
var state_22694__$1 = state_22694;
if(cljs.core.truth_(inst_22577)){
var statearr_22773_22832 = state_22694__$1;
(statearr_22773_22832[(1)] = (10));

} else {
var statearr_22774_22833 = state_22694__$1;
(statearr_22774_22833[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__21958__auto___22779,cs,m,dchan,dctr,done))
;
return ((function (switch__21856__auto__,c__21958__auto___22779,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21857__auto__ = null;
var cljs$core$async$mult_$_state_machine__21857__auto____0 = (function (){
var statearr_22775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22775[(0)] = cljs$core$async$mult_$_state_machine__21857__auto__);

(statearr_22775[(1)] = (1));

return statearr_22775;
});
var cljs$core$async$mult_$_state_machine__21857__auto____1 = (function (state_22694){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_22694);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e22776){if((e22776 instanceof Object)){
var ex__21860__auto__ = e22776;
var statearr_22777_22834 = state_22694;
(statearr_22777_22834[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22694);

return cljs.core.cst$kw$recur;
} else {
throw e22776;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__22835 = state_22694;
state_22694 = G__22835;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21857__auto__ = function(state_22694){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21857__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21857__auto____1.call(this,state_22694);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21857__auto____0;
cljs$core$async$mult_$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21857__auto____1;
return cljs$core$async$mult_$_state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto___22779,cs,m,dchan,dctr,done))
})();
var state__21960__auto__ = (function (){var statearr_22778 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_22778[(6)] = c__21958__auto___22779);

return statearr_22778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto___22779,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__22837 = arguments.length;
switch (G__22837) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__9541__auto__ = (((m == null))?null:m);
var m__9542__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9542__auto__.call(null,m,ch));
} else {
var m__9542__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9542__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__9541__auto__ = (((m == null))?null:m);
var m__9542__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9542__auto__.call(null,m,ch));
} else {
var m__9542__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9542__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__9541__auto__ = (((m == null))?null:m);
var m__9542__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__9542__auto__.call(null,m));
} else {
var m__9542__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__9542__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__9541__auto__ = (((m == null))?null:m);
var m__9542__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__9542__auto__.call(null,m,state_map));
} else {
var m__9542__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__9542__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__9541__auto__ = (((m == null))?null:m);
var m__9542__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__9542__auto__.call(null,m,mode));
} else {
var m__9542__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__9542__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22849 = arguments.length;
var i__10088__auto___22850 = (0);
while(true){
if((i__10088__auto___22850 < len__10087__auto___22849)){
args__10094__auto__.push((arguments[i__10088__auto___22850]));

var G__22851 = (i__10088__auto___22850 + (1));
i__10088__auto___22850 = G__22851;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22843){
var map__22844 = p__22843;
var map__22844__$1 = ((((!((map__22844 == null)))?((((map__22844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22844.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22844):map__22844);
var opts = map__22844__$1;
var statearr_22846_22852 = state;
(statearr_22846_22852[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__22844,map__22844__$1,opts){
return (function (val){
var statearr_22847_22853 = state;
(statearr_22847_22853[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__22844,map__22844__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_22848_22854 = state;
(statearr_22848_22854[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22839){
var G__22840 = cljs.core.first(seq22839);
var seq22839__$1 = cljs.core.next(seq22839);
var G__22841 = cljs.core.first(seq22839__$1);
var seq22839__$2 = cljs.core.next(seq22839__$1);
var G__22842 = cljs.core.first(seq22839__$2);
var seq22839__$3 = cljs.core.next(seq22839__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22840,G__22841,G__22842,seq22839__$3);
});

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
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22855 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22855 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta22856){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta22856 = meta22856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22857,meta22856__$1){
var self__ = this;
var _22857__$1 = this;
return (new cljs.core.async.t_cljs$core$async22855(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta22856__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22855.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22857){
var self__ = this;
var _22857__$1 = this;
return self__.meta22856;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22855.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22855.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22855.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22855.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22855.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22855.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22855.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22855.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22855.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta22856], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22855.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22855.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22855";

cljs.core.async.t_cljs$core$async22855.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.core.async/t_cljs$core$async22855");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22855 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22855(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22856){
return (new cljs.core.async.t_cljs$core$async22855(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22856));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22855(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21958__auto___23019 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto___23019,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto___23019,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22959){
var state_val_22960 = (state_22959[(1)]);
if((state_val_22960 === (7))){
var inst_22874 = (state_22959[(2)]);
var state_22959__$1 = state_22959;
var statearr_22961_23020 = state_22959__$1;
(statearr_22961_23020[(2)] = inst_22874);

(statearr_22961_23020[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (20))){
var inst_22886 = (state_22959[(7)]);
var state_22959__$1 = state_22959;
var statearr_22962_23021 = state_22959__$1;
(statearr_22962_23021[(2)] = inst_22886);

(statearr_22962_23021[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (27))){
var state_22959__$1 = state_22959;
var statearr_22963_23022 = state_22959__$1;
(statearr_22963_23022[(2)] = null);

(statearr_22963_23022[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (1))){
var inst_22861 = (state_22959[(8)]);
var inst_22861__$1 = calc_state();
var inst_22863 = (inst_22861__$1 == null);
var inst_22864 = cljs.core.not(inst_22863);
var state_22959__$1 = (function (){var statearr_22964 = state_22959;
(statearr_22964[(8)] = inst_22861__$1);

return statearr_22964;
})();
if(inst_22864){
var statearr_22965_23023 = state_22959__$1;
(statearr_22965_23023[(1)] = (2));

} else {
var statearr_22966_23024 = state_22959__$1;
(statearr_22966_23024[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (24))){
var inst_22919 = (state_22959[(9)]);
var inst_22933 = (state_22959[(10)]);
var inst_22910 = (state_22959[(11)]);
var inst_22933__$1 = (inst_22910.cljs$core$IFn$_invoke$arity$1 ? inst_22910.cljs$core$IFn$_invoke$arity$1(inst_22919) : inst_22910.call(null,inst_22919));
var state_22959__$1 = (function (){var statearr_22967 = state_22959;
(statearr_22967[(10)] = inst_22933__$1);

return statearr_22967;
})();
if(cljs.core.truth_(inst_22933__$1)){
var statearr_22968_23025 = state_22959__$1;
(statearr_22968_23025[(1)] = (29));

} else {
var statearr_22969_23026 = state_22959__$1;
(statearr_22969_23026[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (4))){
var inst_22877 = (state_22959[(2)]);
var state_22959__$1 = state_22959;
if(cljs.core.truth_(inst_22877)){
var statearr_22970_23027 = state_22959__$1;
(statearr_22970_23027[(1)] = (8));

} else {
var statearr_22971_23028 = state_22959__$1;
(statearr_22971_23028[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (15))){
var inst_22904 = (state_22959[(2)]);
var state_22959__$1 = state_22959;
if(cljs.core.truth_(inst_22904)){
var statearr_22972_23029 = state_22959__$1;
(statearr_22972_23029[(1)] = (19));

} else {
var statearr_22973_23030 = state_22959__$1;
(statearr_22973_23030[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (21))){
var inst_22909 = (state_22959[(12)]);
var inst_22909__$1 = (state_22959[(2)]);
var inst_22910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22909__$1,cljs.core.cst$kw$solos);
var inst_22911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22909__$1,cljs.core.cst$kw$mutes);
var inst_22912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22909__$1,cljs.core.cst$kw$reads);
var state_22959__$1 = (function (){var statearr_22974 = state_22959;
(statearr_22974[(12)] = inst_22909__$1);

(statearr_22974[(11)] = inst_22910);

(statearr_22974[(13)] = inst_22911);

return statearr_22974;
})();
return cljs.core.async.ioc_alts_BANG_(state_22959__$1,(22),inst_22912);
} else {
if((state_val_22960 === (31))){
var inst_22941 = (state_22959[(2)]);
var state_22959__$1 = state_22959;
if(cljs.core.truth_(inst_22941)){
var statearr_22975_23031 = state_22959__$1;
(statearr_22975_23031[(1)] = (32));

} else {
var statearr_22976_23032 = state_22959__$1;
(statearr_22976_23032[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (32))){
var inst_22918 = (state_22959[(14)]);
var state_22959__$1 = state_22959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22959__$1,(35),out,inst_22918);
} else {
if((state_val_22960 === (33))){
var inst_22909 = (state_22959[(12)]);
var inst_22886 = inst_22909;
var state_22959__$1 = (function (){var statearr_22977 = state_22959;
(statearr_22977[(7)] = inst_22886);

return statearr_22977;
})();
var statearr_22978_23033 = state_22959__$1;
(statearr_22978_23033[(2)] = null);

(statearr_22978_23033[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (13))){
var inst_22886 = (state_22959[(7)]);
var inst_22893 = inst_22886.cljs$lang$protocol_mask$partition0$;
var inst_22894 = (inst_22893 & (64));
var inst_22895 = inst_22886.cljs$core$ISeq$;
var inst_22896 = (cljs.core.PROTOCOL_SENTINEL === inst_22895);
var inst_22897 = (inst_22894) || (inst_22896);
var state_22959__$1 = state_22959;
if(cljs.core.truth_(inst_22897)){
var statearr_22979_23034 = state_22959__$1;
(statearr_22979_23034[(1)] = (16));

} else {
var statearr_22980_23035 = state_22959__$1;
(statearr_22980_23035[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (22))){
var inst_22919 = (state_22959[(9)]);
var inst_22918 = (state_22959[(14)]);
var inst_22917 = (state_22959[(2)]);
var inst_22918__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22917,(0),null);
var inst_22919__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22917,(1),null);
var inst_22920 = (inst_22918__$1 == null);
var inst_22921 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22919__$1,change);
var inst_22922 = (inst_22920) || (inst_22921);
var state_22959__$1 = (function (){var statearr_22981 = state_22959;
(statearr_22981[(9)] = inst_22919__$1);

(statearr_22981[(14)] = inst_22918__$1);

return statearr_22981;
})();
if(cljs.core.truth_(inst_22922)){
var statearr_22982_23036 = state_22959__$1;
(statearr_22982_23036[(1)] = (23));

} else {
var statearr_22983_23037 = state_22959__$1;
(statearr_22983_23037[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (36))){
var inst_22909 = (state_22959[(12)]);
var inst_22886 = inst_22909;
var state_22959__$1 = (function (){var statearr_22984 = state_22959;
(statearr_22984[(7)] = inst_22886);

return statearr_22984;
})();
var statearr_22985_23038 = state_22959__$1;
(statearr_22985_23038[(2)] = null);

(statearr_22985_23038[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (29))){
var inst_22933 = (state_22959[(10)]);
var state_22959__$1 = state_22959;
var statearr_22986_23039 = state_22959__$1;
(statearr_22986_23039[(2)] = inst_22933);

(statearr_22986_23039[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (6))){
var state_22959__$1 = state_22959;
var statearr_22987_23040 = state_22959__$1;
(statearr_22987_23040[(2)] = false);

(statearr_22987_23040[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (28))){
var inst_22929 = (state_22959[(2)]);
var inst_22930 = calc_state();
var inst_22886 = inst_22930;
var state_22959__$1 = (function (){var statearr_22988 = state_22959;
(statearr_22988[(15)] = inst_22929);

(statearr_22988[(7)] = inst_22886);

return statearr_22988;
})();
var statearr_22989_23041 = state_22959__$1;
(statearr_22989_23041[(2)] = null);

(statearr_22989_23041[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (25))){
var inst_22955 = (state_22959[(2)]);
var state_22959__$1 = state_22959;
var statearr_22990_23042 = state_22959__$1;
(statearr_22990_23042[(2)] = inst_22955);

(statearr_22990_23042[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (34))){
var inst_22953 = (state_22959[(2)]);
var state_22959__$1 = state_22959;
var statearr_22991_23043 = state_22959__$1;
(statearr_22991_23043[(2)] = inst_22953);

(statearr_22991_23043[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (17))){
var state_22959__$1 = state_22959;
var statearr_22992_23044 = state_22959__$1;
(statearr_22992_23044[(2)] = false);

(statearr_22992_23044[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (3))){
var state_22959__$1 = state_22959;
var statearr_22993_23045 = state_22959__$1;
(statearr_22993_23045[(2)] = false);

(statearr_22993_23045[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (12))){
var inst_22957 = (state_22959[(2)]);
var state_22959__$1 = state_22959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22959__$1,inst_22957);
} else {
if((state_val_22960 === (2))){
var inst_22861 = (state_22959[(8)]);
var inst_22866 = inst_22861.cljs$lang$protocol_mask$partition0$;
var inst_22867 = (inst_22866 & (64));
var inst_22868 = inst_22861.cljs$core$ISeq$;
var inst_22869 = (cljs.core.PROTOCOL_SENTINEL === inst_22868);
var inst_22870 = (inst_22867) || (inst_22869);
var state_22959__$1 = state_22959;
if(cljs.core.truth_(inst_22870)){
var statearr_22994_23046 = state_22959__$1;
(statearr_22994_23046[(1)] = (5));

} else {
var statearr_22995_23047 = state_22959__$1;
(statearr_22995_23047[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (23))){
var inst_22918 = (state_22959[(14)]);
var inst_22924 = (inst_22918 == null);
var state_22959__$1 = state_22959;
if(cljs.core.truth_(inst_22924)){
var statearr_22996_23048 = state_22959__$1;
(statearr_22996_23048[(1)] = (26));

} else {
var statearr_22997_23049 = state_22959__$1;
(statearr_22997_23049[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (35))){
var inst_22944 = (state_22959[(2)]);
var state_22959__$1 = state_22959;
if(cljs.core.truth_(inst_22944)){
var statearr_22998_23050 = state_22959__$1;
(statearr_22998_23050[(1)] = (36));

} else {
var statearr_22999_23051 = state_22959__$1;
(statearr_22999_23051[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (19))){
var inst_22886 = (state_22959[(7)]);
var inst_22906 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22886);
var state_22959__$1 = state_22959;
var statearr_23000_23052 = state_22959__$1;
(statearr_23000_23052[(2)] = inst_22906);

(statearr_23000_23052[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (11))){
var inst_22886 = (state_22959[(7)]);
var inst_22890 = (inst_22886 == null);
var inst_22891 = cljs.core.not(inst_22890);
var state_22959__$1 = state_22959;
if(inst_22891){
var statearr_23001_23053 = state_22959__$1;
(statearr_23001_23053[(1)] = (13));

} else {
var statearr_23002_23054 = state_22959__$1;
(statearr_23002_23054[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (9))){
var inst_22861 = (state_22959[(8)]);
var state_22959__$1 = state_22959;
var statearr_23003_23055 = state_22959__$1;
(statearr_23003_23055[(2)] = inst_22861);

(statearr_23003_23055[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (5))){
var state_22959__$1 = state_22959;
var statearr_23004_23056 = state_22959__$1;
(statearr_23004_23056[(2)] = true);

(statearr_23004_23056[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (14))){
var state_22959__$1 = state_22959;
var statearr_23005_23057 = state_22959__$1;
(statearr_23005_23057[(2)] = false);

(statearr_23005_23057[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (26))){
var inst_22919 = (state_22959[(9)]);
var inst_22926 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_22919);
var state_22959__$1 = state_22959;
var statearr_23006_23058 = state_22959__$1;
(statearr_23006_23058[(2)] = inst_22926);

(statearr_23006_23058[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (16))){
var state_22959__$1 = state_22959;
var statearr_23007_23059 = state_22959__$1;
(statearr_23007_23059[(2)] = true);

(statearr_23007_23059[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (38))){
var inst_22949 = (state_22959[(2)]);
var state_22959__$1 = state_22959;
var statearr_23008_23060 = state_22959__$1;
(statearr_23008_23060[(2)] = inst_22949);

(statearr_23008_23060[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (30))){
var inst_22919 = (state_22959[(9)]);
var inst_22910 = (state_22959[(11)]);
var inst_22911 = (state_22959[(13)]);
var inst_22936 = cljs.core.empty_QMARK_(inst_22910);
var inst_22937 = (inst_22911.cljs$core$IFn$_invoke$arity$1 ? inst_22911.cljs$core$IFn$_invoke$arity$1(inst_22919) : inst_22911.call(null,inst_22919));
var inst_22938 = cljs.core.not(inst_22937);
var inst_22939 = (inst_22936) && (inst_22938);
var state_22959__$1 = state_22959;
var statearr_23009_23061 = state_22959__$1;
(statearr_23009_23061[(2)] = inst_22939);

(statearr_23009_23061[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (10))){
var inst_22861 = (state_22959[(8)]);
var inst_22882 = (state_22959[(2)]);
var inst_22883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22882,cljs.core.cst$kw$solos);
var inst_22884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22882,cljs.core.cst$kw$mutes);
var inst_22885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22882,cljs.core.cst$kw$reads);
var inst_22886 = inst_22861;
var state_22959__$1 = (function (){var statearr_23010 = state_22959;
(statearr_23010[(16)] = inst_22885);

(statearr_23010[(17)] = inst_22884);

(statearr_23010[(18)] = inst_22883);

(statearr_23010[(7)] = inst_22886);

return statearr_23010;
})();
var statearr_23011_23062 = state_22959__$1;
(statearr_23011_23062[(2)] = null);

(statearr_23011_23062[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (18))){
var inst_22901 = (state_22959[(2)]);
var state_22959__$1 = state_22959;
var statearr_23012_23063 = state_22959__$1;
(statearr_23012_23063[(2)] = inst_22901);

(statearr_23012_23063[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (37))){
var state_22959__$1 = state_22959;
var statearr_23013_23064 = state_22959__$1;
(statearr_23013_23064[(2)] = null);

(statearr_23013_23064[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22960 === (8))){
var inst_22861 = (state_22959[(8)]);
var inst_22879 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22861);
var state_22959__$1 = state_22959;
var statearr_23014_23065 = state_22959__$1;
(statearr_23014_23065[(2)] = inst_22879);

(statearr_23014_23065[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__21958__auto___23019,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21856__auto__,c__21958__auto___23019,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21857__auto__ = null;
var cljs$core$async$mix_$_state_machine__21857__auto____0 = (function (){
var statearr_23015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23015[(0)] = cljs$core$async$mix_$_state_machine__21857__auto__);

(statearr_23015[(1)] = (1));

return statearr_23015;
});
var cljs$core$async$mix_$_state_machine__21857__auto____1 = (function (state_22959){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_22959);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e23016){if((e23016 instanceof Object)){
var ex__21860__auto__ = e23016;
var statearr_23017_23066 = state_22959;
(statearr_23017_23066[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22959);

return cljs.core.cst$kw$recur;
} else {
throw e23016;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__23067 = state_22959;
state_22959 = G__23067;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21857__auto__ = function(state_22959){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21857__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21857__auto____1.call(this,state_22959);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21857__auto____0;
cljs$core$async$mix_$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21857__auto____1;
return cljs$core$async$mix_$_state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto___23019,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21960__auto__ = (function (){var statearr_23018 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_23018[(6)] = c__21958__auto___23019);

return statearr_23018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto___23019,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__9541__auto__ = (((p == null))?null:p);
var m__9542__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$4 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__9542__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__9542__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__9542__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__9541__auto__ = (((p == null))?null:p);
var m__9542__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__9542__auto__.call(null,p,v,ch));
} else {
var m__9542__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__9542__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__23069 = arguments.length;
switch (G__23069) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__9541__auto__ = (((p == null))?null:p);
var m__9542__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__9542__auto__.call(null,p));
} else {
var m__9542__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__9542__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__9541__auto__ = (((p == null))?null:p);
var m__9542__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__9542__auto__.call(null,p,v));
} else {
var m__9542__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__9542__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__23073 = arguments.length;
switch (G__23073) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__8808__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__8808__auto__,mults){
return (function (p1__23071_SHARP_){
if(cljs.core.truth_((p1__23071_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23071_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__23071_SHARP_.call(null,topic)))){
return p1__23071_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23071_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__8808__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23074 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23074 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23075){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23075 = meta23075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23076,meta23075__$1){
var self__ = this;
var _23076__$1 = this;
return (new cljs.core.async.t_cljs$core$async23074(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23075__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23074.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23076){
var self__ = this;
var _23076__$1 = this;
return self__.meta23075;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23074.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23074.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23074.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23074.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23074.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23074.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23074.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23074.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta23075], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23074.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23074.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23074";

cljs.core.async.t_cljs$core$async23074.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.core.async/t_cljs$core$async23074");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23074 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23074(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23075){
return (new cljs.core.async.t_cljs$core$async23074(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23075));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23074(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21958__auto___23194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto___23194,mults,ensure_mult,p){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto___23194,mults,ensure_mult,p){
return (function (state_23148){
var state_val_23149 = (state_23148[(1)]);
if((state_val_23149 === (7))){
var inst_23144 = (state_23148[(2)]);
var state_23148__$1 = state_23148;
var statearr_23150_23195 = state_23148__$1;
(statearr_23150_23195[(2)] = inst_23144);

(statearr_23150_23195[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (20))){
var state_23148__$1 = state_23148;
var statearr_23151_23196 = state_23148__$1;
(statearr_23151_23196[(2)] = null);

(statearr_23151_23196[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (1))){
var state_23148__$1 = state_23148;
var statearr_23152_23197 = state_23148__$1;
(statearr_23152_23197[(2)] = null);

(statearr_23152_23197[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (24))){
var inst_23127 = (state_23148[(7)]);
var inst_23136 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_23127);
var state_23148__$1 = state_23148;
var statearr_23153_23198 = state_23148__$1;
(statearr_23153_23198[(2)] = inst_23136);

(statearr_23153_23198[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (4))){
var inst_23079 = (state_23148[(8)]);
var inst_23079__$1 = (state_23148[(2)]);
var inst_23080 = (inst_23079__$1 == null);
var state_23148__$1 = (function (){var statearr_23154 = state_23148;
(statearr_23154[(8)] = inst_23079__$1);

return statearr_23154;
})();
if(cljs.core.truth_(inst_23080)){
var statearr_23155_23199 = state_23148__$1;
(statearr_23155_23199[(1)] = (5));

} else {
var statearr_23156_23200 = state_23148__$1;
(statearr_23156_23200[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (15))){
var inst_23121 = (state_23148[(2)]);
var state_23148__$1 = state_23148;
var statearr_23157_23201 = state_23148__$1;
(statearr_23157_23201[(2)] = inst_23121);

(statearr_23157_23201[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (21))){
var inst_23141 = (state_23148[(2)]);
var state_23148__$1 = (function (){var statearr_23158 = state_23148;
(statearr_23158[(9)] = inst_23141);

return statearr_23158;
})();
var statearr_23159_23202 = state_23148__$1;
(statearr_23159_23202[(2)] = null);

(statearr_23159_23202[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (13))){
var inst_23103 = (state_23148[(10)]);
var inst_23105 = cljs.core.chunked_seq_QMARK_(inst_23103);
var state_23148__$1 = state_23148;
if(inst_23105){
var statearr_23160_23203 = state_23148__$1;
(statearr_23160_23203[(1)] = (16));

} else {
var statearr_23161_23204 = state_23148__$1;
(statearr_23161_23204[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (22))){
var inst_23133 = (state_23148[(2)]);
var state_23148__$1 = state_23148;
if(cljs.core.truth_(inst_23133)){
var statearr_23162_23205 = state_23148__$1;
(statearr_23162_23205[(1)] = (23));

} else {
var statearr_23163_23206 = state_23148__$1;
(statearr_23163_23206[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (6))){
var inst_23079 = (state_23148[(8)]);
var inst_23129 = (state_23148[(11)]);
var inst_23127 = (state_23148[(7)]);
var inst_23127__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_23079) : topic_fn.call(null,inst_23079));
var inst_23128 = cljs.core.deref(mults);
var inst_23129__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23128,inst_23127__$1);
var state_23148__$1 = (function (){var statearr_23164 = state_23148;
(statearr_23164[(11)] = inst_23129__$1);

(statearr_23164[(7)] = inst_23127__$1);

return statearr_23164;
})();
if(cljs.core.truth_(inst_23129__$1)){
var statearr_23165_23207 = state_23148__$1;
(statearr_23165_23207[(1)] = (19));

} else {
var statearr_23166_23208 = state_23148__$1;
(statearr_23166_23208[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (25))){
var inst_23138 = (state_23148[(2)]);
var state_23148__$1 = state_23148;
var statearr_23167_23209 = state_23148__$1;
(statearr_23167_23209[(2)] = inst_23138);

(statearr_23167_23209[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (17))){
var inst_23103 = (state_23148[(10)]);
var inst_23112 = cljs.core.first(inst_23103);
var inst_23113 = cljs.core.async.muxch_STAR_(inst_23112);
var inst_23114 = cljs.core.async.close_BANG_(inst_23113);
var inst_23115 = cljs.core.next(inst_23103);
var inst_23089 = inst_23115;
var inst_23090 = null;
var inst_23091 = (0);
var inst_23092 = (0);
var state_23148__$1 = (function (){var statearr_23168 = state_23148;
(statearr_23168[(12)] = inst_23089);

(statearr_23168[(13)] = inst_23091);

(statearr_23168[(14)] = inst_23092);

(statearr_23168[(15)] = inst_23090);

(statearr_23168[(16)] = inst_23114);

return statearr_23168;
})();
var statearr_23169_23210 = state_23148__$1;
(statearr_23169_23210[(2)] = null);

(statearr_23169_23210[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (3))){
var inst_23146 = (state_23148[(2)]);
var state_23148__$1 = state_23148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23148__$1,inst_23146);
} else {
if((state_val_23149 === (12))){
var inst_23123 = (state_23148[(2)]);
var state_23148__$1 = state_23148;
var statearr_23170_23211 = state_23148__$1;
(statearr_23170_23211[(2)] = inst_23123);

(statearr_23170_23211[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (2))){
var state_23148__$1 = state_23148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23148__$1,(4),ch);
} else {
if((state_val_23149 === (23))){
var state_23148__$1 = state_23148;
var statearr_23171_23212 = state_23148__$1;
(statearr_23171_23212[(2)] = null);

(statearr_23171_23212[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (19))){
var inst_23079 = (state_23148[(8)]);
var inst_23129 = (state_23148[(11)]);
var inst_23131 = cljs.core.async.muxch_STAR_(inst_23129);
var state_23148__$1 = state_23148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23148__$1,(22),inst_23131,inst_23079);
} else {
if((state_val_23149 === (11))){
var inst_23089 = (state_23148[(12)]);
var inst_23103 = (state_23148[(10)]);
var inst_23103__$1 = cljs.core.seq(inst_23089);
var state_23148__$1 = (function (){var statearr_23172 = state_23148;
(statearr_23172[(10)] = inst_23103__$1);

return statearr_23172;
})();
if(inst_23103__$1){
var statearr_23173_23213 = state_23148__$1;
(statearr_23173_23213[(1)] = (13));

} else {
var statearr_23174_23214 = state_23148__$1;
(statearr_23174_23214[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (9))){
var inst_23125 = (state_23148[(2)]);
var state_23148__$1 = state_23148;
var statearr_23175_23215 = state_23148__$1;
(statearr_23175_23215[(2)] = inst_23125);

(statearr_23175_23215[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (5))){
var inst_23086 = cljs.core.deref(mults);
var inst_23087 = cljs.core.vals(inst_23086);
var inst_23088 = cljs.core.seq(inst_23087);
var inst_23089 = inst_23088;
var inst_23090 = null;
var inst_23091 = (0);
var inst_23092 = (0);
var state_23148__$1 = (function (){var statearr_23176 = state_23148;
(statearr_23176[(12)] = inst_23089);

(statearr_23176[(13)] = inst_23091);

(statearr_23176[(14)] = inst_23092);

(statearr_23176[(15)] = inst_23090);

return statearr_23176;
})();
var statearr_23177_23216 = state_23148__$1;
(statearr_23177_23216[(2)] = null);

(statearr_23177_23216[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (14))){
var state_23148__$1 = state_23148;
var statearr_23181_23217 = state_23148__$1;
(statearr_23181_23217[(2)] = null);

(statearr_23181_23217[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (16))){
var inst_23103 = (state_23148[(10)]);
var inst_23107 = cljs.core.chunk_first(inst_23103);
var inst_23108 = cljs.core.chunk_rest(inst_23103);
var inst_23109 = cljs.core.count(inst_23107);
var inst_23089 = inst_23108;
var inst_23090 = inst_23107;
var inst_23091 = inst_23109;
var inst_23092 = (0);
var state_23148__$1 = (function (){var statearr_23182 = state_23148;
(statearr_23182[(12)] = inst_23089);

(statearr_23182[(13)] = inst_23091);

(statearr_23182[(14)] = inst_23092);

(statearr_23182[(15)] = inst_23090);

return statearr_23182;
})();
var statearr_23183_23218 = state_23148__$1;
(statearr_23183_23218[(2)] = null);

(statearr_23183_23218[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (10))){
var inst_23089 = (state_23148[(12)]);
var inst_23091 = (state_23148[(13)]);
var inst_23092 = (state_23148[(14)]);
var inst_23090 = (state_23148[(15)]);
var inst_23097 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23090,inst_23092);
var inst_23098 = cljs.core.async.muxch_STAR_(inst_23097);
var inst_23099 = cljs.core.async.close_BANG_(inst_23098);
var inst_23100 = (inst_23092 + (1));
var tmp23178 = inst_23089;
var tmp23179 = inst_23091;
var tmp23180 = inst_23090;
var inst_23089__$1 = tmp23178;
var inst_23090__$1 = tmp23180;
var inst_23091__$1 = tmp23179;
var inst_23092__$1 = inst_23100;
var state_23148__$1 = (function (){var statearr_23184 = state_23148;
(statearr_23184[(17)] = inst_23099);

(statearr_23184[(12)] = inst_23089__$1);

(statearr_23184[(13)] = inst_23091__$1);

(statearr_23184[(14)] = inst_23092__$1);

(statearr_23184[(15)] = inst_23090__$1);

return statearr_23184;
})();
var statearr_23185_23219 = state_23148__$1;
(statearr_23185_23219[(2)] = null);

(statearr_23185_23219[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (18))){
var inst_23118 = (state_23148[(2)]);
var state_23148__$1 = state_23148;
var statearr_23186_23220 = state_23148__$1;
(statearr_23186_23220[(2)] = inst_23118);

(statearr_23186_23220[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (8))){
var inst_23091 = (state_23148[(13)]);
var inst_23092 = (state_23148[(14)]);
var inst_23094 = (inst_23092 < inst_23091);
var inst_23095 = inst_23094;
var state_23148__$1 = state_23148;
if(cljs.core.truth_(inst_23095)){
var statearr_23187_23221 = state_23148__$1;
(statearr_23187_23221[(1)] = (10));

} else {
var statearr_23188_23222 = state_23148__$1;
(statearr_23188_23222[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__21958__auto___23194,mults,ensure_mult,p))
;
return ((function (switch__21856__auto__,c__21958__auto___23194,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21857__auto__ = null;
var cljs$core$async$state_machine__21857__auto____0 = (function (){
var statearr_23189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23189[(0)] = cljs$core$async$state_machine__21857__auto__);

(statearr_23189[(1)] = (1));

return statearr_23189;
});
var cljs$core$async$state_machine__21857__auto____1 = (function (state_23148){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_23148);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e23190){if((e23190 instanceof Object)){
var ex__21860__auto__ = e23190;
var statearr_23191_23223 = state_23148;
(statearr_23191_23223[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23148);

return cljs.core.cst$kw$recur;
} else {
throw e23190;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__23224 = state_23148;
state_23148 = G__23224;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
cljs$core$async$state_machine__21857__auto__ = function(state_23148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21857__auto____1.call(this,state_23148);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21857__auto____0;
cljs$core$async$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21857__auto____1;
return cljs$core$async$state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto___23194,mults,ensure_mult,p))
})();
var state__21960__auto__ = (function (){var statearr_23192 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_23192[(6)] = c__21958__auto___23194);

return statearr_23192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto___23194,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__23226 = arguments.length;
switch (G__23226) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

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
var G__23229 = arguments.length;
switch (G__23229) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__23232 = arguments.length;
switch (G__23232) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__21958__auto___23299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto___23299,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto___23299,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23271){
var state_val_23272 = (state_23271[(1)]);
if((state_val_23272 === (7))){
var state_23271__$1 = state_23271;
var statearr_23273_23300 = state_23271__$1;
(statearr_23273_23300[(2)] = null);

(statearr_23273_23300[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (1))){
var state_23271__$1 = state_23271;
var statearr_23274_23301 = state_23271__$1;
(statearr_23274_23301[(2)] = null);

(statearr_23274_23301[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (4))){
var inst_23235 = (state_23271[(7)]);
var inst_23237 = (inst_23235 < cnt);
var state_23271__$1 = state_23271;
if(cljs.core.truth_(inst_23237)){
var statearr_23275_23302 = state_23271__$1;
(statearr_23275_23302[(1)] = (6));

} else {
var statearr_23276_23303 = state_23271__$1;
(statearr_23276_23303[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (15))){
var inst_23267 = (state_23271[(2)]);
var state_23271__$1 = state_23271;
var statearr_23277_23304 = state_23271__$1;
(statearr_23277_23304[(2)] = inst_23267);

(statearr_23277_23304[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (13))){
var inst_23260 = cljs.core.async.close_BANG_(out);
var state_23271__$1 = state_23271;
var statearr_23278_23305 = state_23271__$1;
(statearr_23278_23305[(2)] = inst_23260);

(statearr_23278_23305[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (6))){
var state_23271__$1 = state_23271;
var statearr_23279_23306 = state_23271__$1;
(statearr_23279_23306[(2)] = null);

(statearr_23279_23306[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (3))){
var inst_23269 = (state_23271[(2)]);
var state_23271__$1 = state_23271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23271__$1,inst_23269);
} else {
if((state_val_23272 === (12))){
var inst_23257 = (state_23271[(8)]);
var inst_23257__$1 = (state_23271[(2)]);
var inst_23258 = cljs.core.some(cljs.core.nil_QMARK_,inst_23257__$1);
var state_23271__$1 = (function (){var statearr_23280 = state_23271;
(statearr_23280[(8)] = inst_23257__$1);

return statearr_23280;
})();
if(cljs.core.truth_(inst_23258)){
var statearr_23281_23307 = state_23271__$1;
(statearr_23281_23307[(1)] = (13));

} else {
var statearr_23282_23308 = state_23271__$1;
(statearr_23282_23308[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (2))){
var inst_23234 = cljs.core.reset_BANG_(dctr,cnt);
var inst_23235 = (0);
var state_23271__$1 = (function (){var statearr_23283 = state_23271;
(statearr_23283[(7)] = inst_23235);

(statearr_23283[(9)] = inst_23234);

return statearr_23283;
})();
var statearr_23284_23309 = state_23271__$1;
(statearr_23284_23309[(2)] = null);

(statearr_23284_23309[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (11))){
var inst_23235 = (state_23271[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23271,(10),Object,null,(9));
var inst_23244 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_23235) : chs__$1.call(null,inst_23235));
var inst_23245 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_23235) : done.call(null,inst_23235));
var inst_23246 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_23244,inst_23245);
var state_23271__$1 = state_23271;
var statearr_23285_23310 = state_23271__$1;
(statearr_23285_23310[(2)] = inst_23246);


cljs.core.async.impl.ioc_helpers.process_exception(state_23271__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (9))){
var inst_23235 = (state_23271[(7)]);
var inst_23248 = (state_23271[(2)]);
var inst_23249 = (inst_23235 + (1));
var inst_23235__$1 = inst_23249;
var state_23271__$1 = (function (){var statearr_23286 = state_23271;
(statearr_23286[(7)] = inst_23235__$1);

(statearr_23286[(10)] = inst_23248);

return statearr_23286;
})();
var statearr_23287_23311 = state_23271__$1;
(statearr_23287_23311[(2)] = null);

(statearr_23287_23311[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (5))){
var inst_23255 = (state_23271[(2)]);
var state_23271__$1 = (function (){var statearr_23288 = state_23271;
(statearr_23288[(11)] = inst_23255);

return statearr_23288;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23271__$1,(12),dchan);
} else {
if((state_val_23272 === (14))){
var inst_23257 = (state_23271[(8)]);
var inst_23262 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_23257);
var state_23271__$1 = state_23271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23271__$1,(16),out,inst_23262);
} else {
if((state_val_23272 === (16))){
var inst_23264 = (state_23271[(2)]);
var state_23271__$1 = (function (){var statearr_23289 = state_23271;
(statearr_23289[(12)] = inst_23264);

return statearr_23289;
})();
var statearr_23290_23312 = state_23271__$1;
(statearr_23290_23312[(2)] = null);

(statearr_23290_23312[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (10))){
var inst_23239 = (state_23271[(2)]);
var inst_23240 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_23271__$1 = (function (){var statearr_23291 = state_23271;
(statearr_23291[(13)] = inst_23239);

return statearr_23291;
})();
var statearr_23292_23313 = state_23271__$1;
(statearr_23292_23313[(2)] = inst_23240);


cljs.core.async.impl.ioc_helpers.process_exception(state_23271__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_23272 === (8))){
var inst_23253 = (state_23271[(2)]);
var state_23271__$1 = state_23271;
var statearr_23293_23314 = state_23271__$1;
(statearr_23293_23314[(2)] = inst_23253);

(statearr_23293_23314[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__21958__auto___23299,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21856__auto__,c__21958__auto___23299,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21857__auto__ = null;
var cljs$core$async$state_machine__21857__auto____0 = (function (){
var statearr_23294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23294[(0)] = cljs$core$async$state_machine__21857__auto__);

(statearr_23294[(1)] = (1));

return statearr_23294;
});
var cljs$core$async$state_machine__21857__auto____1 = (function (state_23271){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_23271);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e23295){if((e23295 instanceof Object)){
var ex__21860__auto__ = e23295;
var statearr_23296_23315 = state_23271;
(statearr_23296_23315[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23271);

return cljs.core.cst$kw$recur;
} else {
throw e23295;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__23316 = state_23271;
state_23271 = G__23316;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
cljs$core$async$state_machine__21857__auto__ = function(state_23271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21857__auto____1.call(this,state_23271);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21857__auto____0;
cljs$core$async$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21857__auto____1;
return cljs$core$async$state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto___23299,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21960__auto__ = (function (){var statearr_23297 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_23297[(6)] = c__21958__auto___23299);

return statearr_23297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto___23299,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__23319 = arguments.length;
switch (G__23319) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21958__auto___23373 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto___23373,out){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto___23373,out){
return (function (state_23351){
var state_val_23352 = (state_23351[(1)]);
if((state_val_23352 === (7))){
var inst_23330 = (state_23351[(7)]);
var inst_23331 = (state_23351[(8)]);
var inst_23330__$1 = (state_23351[(2)]);
var inst_23331__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23330__$1,(0),null);
var inst_23332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23330__$1,(1),null);
var inst_23333 = (inst_23331__$1 == null);
var state_23351__$1 = (function (){var statearr_23353 = state_23351;
(statearr_23353[(7)] = inst_23330__$1);

(statearr_23353[(9)] = inst_23332);

(statearr_23353[(8)] = inst_23331__$1);

return statearr_23353;
})();
if(cljs.core.truth_(inst_23333)){
var statearr_23354_23374 = state_23351__$1;
(statearr_23354_23374[(1)] = (8));

} else {
var statearr_23355_23375 = state_23351__$1;
(statearr_23355_23375[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23352 === (1))){
var inst_23320 = cljs.core.vec(chs);
var inst_23321 = inst_23320;
var state_23351__$1 = (function (){var statearr_23356 = state_23351;
(statearr_23356[(10)] = inst_23321);

return statearr_23356;
})();
var statearr_23357_23376 = state_23351__$1;
(statearr_23357_23376[(2)] = null);

(statearr_23357_23376[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23352 === (4))){
var inst_23321 = (state_23351[(10)]);
var state_23351__$1 = state_23351;
return cljs.core.async.ioc_alts_BANG_(state_23351__$1,(7),inst_23321);
} else {
if((state_val_23352 === (6))){
var inst_23347 = (state_23351[(2)]);
var state_23351__$1 = state_23351;
var statearr_23358_23377 = state_23351__$1;
(statearr_23358_23377[(2)] = inst_23347);

(statearr_23358_23377[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23352 === (3))){
var inst_23349 = (state_23351[(2)]);
var state_23351__$1 = state_23351;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23351__$1,inst_23349);
} else {
if((state_val_23352 === (2))){
var inst_23321 = (state_23351[(10)]);
var inst_23323 = cljs.core.count(inst_23321);
var inst_23324 = (inst_23323 > (0));
var state_23351__$1 = state_23351;
if(cljs.core.truth_(inst_23324)){
var statearr_23360_23378 = state_23351__$1;
(statearr_23360_23378[(1)] = (4));

} else {
var statearr_23361_23379 = state_23351__$1;
(statearr_23361_23379[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23352 === (11))){
var inst_23321 = (state_23351[(10)]);
var inst_23340 = (state_23351[(2)]);
var tmp23359 = inst_23321;
var inst_23321__$1 = tmp23359;
var state_23351__$1 = (function (){var statearr_23362 = state_23351;
(statearr_23362[(10)] = inst_23321__$1);

(statearr_23362[(11)] = inst_23340);

return statearr_23362;
})();
var statearr_23363_23380 = state_23351__$1;
(statearr_23363_23380[(2)] = null);

(statearr_23363_23380[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23352 === (9))){
var inst_23331 = (state_23351[(8)]);
var state_23351__$1 = state_23351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23351__$1,(11),out,inst_23331);
} else {
if((state_val_23352 === (5))){
var inst_23345 = cljs.core.async.close_BANG_(out);
var state_23351__$1 = state_23351;
var statearr_23364_23381 = state_23351__$1;
(statearr_23364_23381[(2)] = inst_23345);

(statearr_23364_23381[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23352 === (10))){
var inst_23343 = (state_23351[(2)]);
var state_23351__$1 = state_23351;
var statearr_23365_23382 = state_23351__$1;
(statearr_23365_23382[(2)] = inst_23343);

(statearr_23365_23382[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23352 === (8))){
var inst_23321 = (state_23351[(10)]);
var inst_23330 = (state_23351[(7)]);
var inst_23332 = (state_23351[(9)]);
var inst_23331 = (state_23351[(8)]);
var inst_23335 = (function (){var cs = inst_23321;
var vec__23326 = inst_23330;
var v = inst_23331;
var c = inst_23332;
return ((function (cs,vec__23326,v,c,inst_23321,inst_23330,inst_23332,inst_23331,state_val_23352,c__21958__auto___23373,out){
return (function (p1__23317_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__23317_SHARP_);
});
;})(cs,vec__23326,v,c,inst_23321,inst_23330,inst_23332,inst_23331,state_val_23352,c__21958__auto___23373,out))
})();
var inst_23336 = cljs.core.filterv(inst_23335,inst_23321);
var inst_23321__$1 = inst_23336;
var state_23351__$1 = (function (){var statearr_23366 = state_23351;
(statearr_23366[(10)] = inst_23321__$1);

return statearr_23366;
})();
var statearr_23367_23383 = state_23351__$1;
(statearr_23367_23383[(2)] = null);

(statearr_23367_23383[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__21958__auto___23373,out))
;
return ((function (switch__21856__auto__,c__21958__auto___23373,out){
return (function() {
var cljs$core$async$state_machine__21857__auto__ = null;
var cljs$core$async$state_machine__21857__auto____0 = (function (){
var statearr_23368 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23368[(0)] = cljs$core$async$state_machine__21857__auto__);

(statearr_23368[(1)] = (1));

return statearr_23368;
});
var cljs$core$async$state_machine__21857__auto____1 = (function (state_23351){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_23351);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e23369){if((e23369 instanceof Object)){
var ex__21860__auto__ = e23369;
var statearr_23370_23384 = state_23351;
(statearr_23370_23384[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23351);

return cljs.core.cst$kw$recur;
} else {
throw e23369;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__23385 = state_23351;
state_23351 = G__23385;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
cljs$core$async$state_machine__21857__auto__ = function(state_23351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21857__auto____1.call(this,state_23351);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21857__auto____0;
cljs$core$async$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21857__auto____1;
return cljs$core$async$state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto___23373,out))
})();
var state__21960__auto__ = (function (){var statearr_23371 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_23371[(6)] = c__21958__auto___23373);

return statearr_23371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto___23373,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

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
var G__23387 = arguments.length;
switch (G__23387) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21958__auto___23432 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto___23432,out){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto___23432,out){
return (function (state_23411){
var state_val_23412 = (state_23411[(1)]);
if((state_val_23412 === (7))){
var inst_23393 = (state_23411[(7)]);
var inst_23393__$1 = (state_23411[(2)]);
var inst_23394 = (inst_23393__$1 == null);
var inst_23395 = cljs.core.not(inst_23394);
var state_23411__$1 = (function (){var statearr_23413 = state_23411;
(statearr_23413[(7)] = inst_23393__$1);

return statearr_23413;
})();
if(inst_23395){
var statearr_23414_23433 = state_23411__$1;
(statearr_23414_23433[(1)] = (8));

} else {
var statearr_23415_23434 = state_23411__$1;
(statearr_23415_23434[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23412 === (1))){
var inst_23388 = (0);
var state_23411__$1 = (function (){var statearr_23416 = state_23411;
(statearr_23416[(8)] = inst_23388);

return statearr_23416;
})();
var statearr_23417_23435 = state_23411__$1;
(statearr_23417_23435[(2)] = null);

(statearr_23417_23435[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23412 === (4))){
var state_23411__$1 = state_23411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23411__$1,(7),ch);
} else {
if((state_val_23412 === (6))){
var inst_23406 = (state_23411[(2)]);
var state_23411__$1 = state_23411;
var statearr_23418_23436 = state_23411__$1;
(statearr_23418_23436[(2)] = inst_23406);

(statearr_23418_23436[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23412 === (3))){
var inst_23408 = (state_23411[(2)]);
var inst_23409 = cljs.core.async.close_BANG_(out);
var state_23411__$1 = (function (){var statearr_23419 = state_23411;
(statearr_23419[(9)] = inst_23408);

return statearr_23419;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23411__$1,inst_23409);
} else {
if((state_val_23412 === (2))){
var inst_23388 = (state_23411[(8)]);
var inst_23390 = (inst_23388 < n);
var state_23411__$1 = state_23411;
if(cljs.core.truth_(inst_23390)){
var statearr_23420_23437 = state_23411__$1;
(statearr_23420_23437[(1)] = (4));

} else {
var statearr_23421_23438 = state_23411__$1;
(statearr_23421_23438[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23412 === (11))){
var inst_23388 = (state_23411[(8)]);
var inst_23398 = (state_23411[(2)]);
var inst_23399 = (inst_23388 + (1));
var inst_23388__$1 = inst_23399;
var state_23411__$1 = (function (){var statearr_23422 = state_23411;
(statearr_23422[(8)] = inst_23388__$1);

(statearr_23422[(10)] = inst_23398);

return statearr_23422;
})();
var statearr_23423_23439 = state_23411__$1;
(statearr_23423_23439[(2)] = null);

(statearr_23423_23439[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23412 === (9))){
var state_23411__$1 = state_23411;
var statearr_23424_23440 = state_23411__$1;
(statearr_23424_23440[(2)] = null);

(statearr_23424_23440[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23412 === (5))){
var state_23411__$1 = state_23411;
var statearr_23425_23441 = state_23411__$1;
(statearr_23425_23441[(2)] = null);

(statearr_23425_23441[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23412 === (10))){
var inst_23403 = (state_23411[(2)]);
var state_23411__$1 = state_23411;
var statearr_23426_23442 = state_23411__$1;
(statearr_23426_23442[(2)] = inst_23403);

(statearr_23426_23442[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23412 === (8))){
var inst_23393 = (state_23411[(7)]);
var state_23411__$1 = state_23411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23411__$1,(11),out,inst_23393);
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
});})(c__21958__auto___23432,out))
;
return ((function (switch__21856__auto__,c__21958__auto___23432,out){
return (function() {
var cljs$core$async$state_machine__21857__auto__ = null;
var cljs$core$async$state_machine__21857__auto____0 = (function (){
var statearr_23427 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23427[(0)] = cljs$core$async$state_machine__21857__auto__);

(statearr_23427[(1)] = (1));

return statearr_23427;
});
var cljs$core$async$state_machine__21857__auto____1 = (function (state_23411){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_23411);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e23428){if((e23428 instanceof Object)){
var ex__21860__auto__ = e23428;
var statearr_23429_23443 = state_23411;
(statearr_23429_23443[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23411);

return cljs.core.cst$kw$recur;
} else {
throw e23428;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__23444 = state_23411;
state_23411 = G__23444;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
cljs$core$async$state_machine__21857__auto__ = function(state_23411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21857__auto____1.call(this,state_23411);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21857__auto____0;
cljs$core$async$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21857__auto____1;
return cljs$core$async$state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto___23432,out))
})();
var state__21960__auto__ = (function (){var statearr_23430 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_23430[(6)] = c__21958__auto___23432);

return statearr_23430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto___23432,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23446 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23446 = (function (f,ch,meta23447){
this.f = f;
this.ch = ch;
this.meta23447 = meta23447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23448,meta23447__$1){
var self__ = this;
var _23448__$1 = this;
return (new cljs.core.async.t_cljs$core$async23446(self__.f,self__.ch,meta23447__$1));
});

cljs.core.async.t_cljs$core$async23446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23448){
var self__ = this;
var _23448__$1 = this;
return self__.meta23447;
});

cljs.core.async.t_cljs$core$async23446.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23446.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async23446.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async23446.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23446.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23449 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23449 = (function (f,ch,meta23447,_,fn1,meta23450){
this.f = f;
this.ch = ch;
this.meta23447 = meta23447;
this._ = _;
this.fn1 = fn1;
this.meta23450 = meta23450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23451,meta23450__$1){
var self__ = this;
var _23451__$1 = this;
return (new cljs.core.async.t_cljs$core$async23449(self__.f,self__.ch,self__.meta23447,self__._,self__.fn1,meta23450__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23449.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23451){
var self__ = this;
var _23451__$1 = this;
return self__.meta23450;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23449.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23449.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23449.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23449.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23445_SHARP_){
var G__23452 = (((p1__23445_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23445_SHARP_) : self__.f.call(null,p1__23445_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__23452) : f1.call(null,G__23452));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23449.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta23447,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async23446], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta23450], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23449.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23449";

cljs.core.async.t_cljs$core$async23449.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.core.async/t_cljs$core$async23449");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23449 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23449(f__$1,ch__$1,meta23447__$1,___$2,fn1__$1,meta23450){
return (new cljs.core.async.t_cljs$core$async23449(f__$1,ch__$1,meta23447__$1,___$2,fn1__$1,meta23450));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23449(self__.f,self__.ch,self__.meta23447,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8796__auto__ = ret;
if(cljs.core.truth_(and__8796__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__8796__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__23453 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23453) : self__.f.call(null,G__23453));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23446.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23446.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta23447], null);
});

cljs.core.async.t_cljs$core$async23446.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23446";

cljs.core.async.t_cljs$core$async23446.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.core.async/t_cljs$core$async23446");
});

cljs.core.async.__GT_t_cljs$core$async23446 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23446(f__$1,ch__$1,meta23447){
return (new cljs.core.async.t_cljs$core$async23446(f__$1,ch__$1,meta23447));
});

}

return (new cljs.core.async.t_cljs$core$async23446(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23454 = (function (f,ch,meta23455){
this.f = f;
this.ch = ch;
this.meta23455 = meta23455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23456,meta23455__$1){
var self__ = this;
var _23456__$1 = this;
return (new cljs.core.async.t_cljs$core$async23454(self__.f,self__.ch,meta23455__$1));
});

cljs.core.async.t_cljs$core$async23454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23456){
var self__ = this;
var _23456__$1 = this;
return self__.meta23455;
});

cljs.core.async.t_cljs$core$async23454.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23454.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async23454.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23454.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23454.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23454.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async23454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta23455], null);
});

cljs.core.async.t_cljs$core$async23454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23454";

cljs.core.async.t_cljs$core$async23454.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.core.async/t_cljs$core$async23454");
});

cljs.core.async.__GT_t_cljs$core$async23454 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23454(f__$1,ch__$1,meta23455){
return (new cljs.core.async.t_cljs$core$async23454(f__$1,ch__$1,meta23455));
});

}

return (new cljs.core.async.t_cljs$core$async23454(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23457 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23457 = (function (p,ch,meta23458){
this.p = p;
this.ch = ch;
this.meta23458 = meta23458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23459,meta23458__$1){
var self__ = this;
var _23459__$1 = this;
return (new cljs.core.async.t_cljs$core$async23457(self__.p,self__.ch,meta23458__$1));
});

cljs.core.async.t_cljs$core$async23457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23459){
var self__ = this;
var _23459__$1 = this;
return self__.meta23458;
});

cljs.core.async.t_cljs$core$async23457.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23457.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async23457.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async23457.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23457.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23457.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23457.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23457.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta23458], null);
});

cljs.core.async.t_cljs$core$async23457.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23457";

cljs.core.async.t_cljs$core$async23457.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.core.async/t_cljs$core$async23457");
});

cljs.core.async.__GT_t_cljs$core$async23457 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23457(p__$1,ch__$1,meta23458){
return (new cljs.core.async.t_cljs$core$async23457(p__$1,ch__$1,meta23458));
});

}

return (new cljs.core.async.t_cljs$core$async23457(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__23461 = arguments.length;
switch (G__23461) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21958__auto___23501 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto___23501,out){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto___23501,out){
return (function (state_23482){
var state_val_23483 = (state_23482[(1)]);
if((state_val_23483 === (7))){
var inst_23478 = (state_23482[(2)]);
var state_23482__$1 = state_23482;
var statearr_23484_23502 = state_23482__$1;
(statearr_23484_23502[(2)] = inst_23478);

(statearr_23484_23502[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23483 === (1))){
var state_23482__$1 = state_23482;
var statearr_23485_23503 = state_23482__$1;
(statearr_23485_23503[(2)] = null);

(statearr_23485_23503[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23483 === (4))){
var inst_23464 = (state_23482[(7)]);
var inst_23464__$1 = (state_23482[(2)]);
var inst_23465 = (inst_23464__$1 == null);
var state_23482__$1 = (function (){var statearr_23486 = state_23482;
(statearr_23486[(7)] = inst_23464__$1);

return statearr_23486;
})();
if(cljs.core.truth_(inst_23465)){
var statearr_23487_23504 = state_23482__$1;
(statearr_23487_23504[(1)] = (5));

} else {
var statearr_23488_23505 = state_23482__$1;
(statearr_23488_23505[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23483 === (6))){
var inst_23464 = (state_23482[(7)]);
var inst_23469 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23464) : p.call(null,inst_23464));
var state_23482__$1 = state_23482;
if(cljs.core.truth_(inst_23469)){
var statearr_23489_23506 = state_23482__$1;
(statearr_23489_23506[(1)] = (8));

} else {
var statearr_23490_23507 = state_23482__$1;
(statearr_23490_23507[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23483 === (3))){
var inst_23480 = (state_23482[(2)]);
var state_23482__$1 = state_23482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23482__$1,inst_23480);
} else {
if((state_val_23483 === (2))){
var state_23482__$1 = state_23482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23482__$1,(4),ch);
} else {
if((state_val_23483 === (11))){
var inst_23472 = (state_23482[(2)]);
var state_23482__$1 = state_23482;
var statearr_23491_23508 = state_23482__$1;
(statearr_23491_23508[(2)] = inst_23472);

(statearr_23491_23508[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23483 === (9))){
var state_23482__$1 = state_23482;
var statearr_23492_23509 = state_23482__$1;
(statearr_23492_23509[(2)] = null);

(statearr_23492_23509[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23483 === (5))){
var inst_23467 = cljs.core.async.close_BANG_(out);
var state_23482__$1 = state_23482;
var statearr_23493_23510 = state_23482__$1;
(statearr_23493_23510[(2)] = inst_23467);

(statearr_23493_23510[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23483 === (10))){
var inst_23475 = (state_23482[(2)]);
var state_23482__$1 = (function (){var statearr_23494 = state_23482;
(statearr_23494[(8)] = inst_23475);

return statearr_23494;
})();
var statearr_23495_23511 = state_23482__$1;
(statearr_23495_23511[(2)] = null);

(statearr_23495_23511[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23483 === (8))){
var inst_23464 = (state_23482[(7)]);
var state_23482__$1 = state_23482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23482__$1,(11),out,inst_23464);
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
});})(c__21958__auto___23501,out))
;
return ((function (switch__21856__auto__,c__21958__auto___23501,out){
return (function() {
var cljs$core$async$state_machine__21857__auto__ = null;
var cljs$core$async$state_machine__21857__auto____0 = (function (){
var statearr_23496 = [null,null,null,null,null,null,null,null,null];
(statearr_23496[(0)] = cljs$core$async$state_machine__21857__auto__);

(statearr_23496[(1)] = (1));

return statearr_23496;
});
var cljs$core$async$state_machine__21857__auto____1 = (function (state_23482){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_23482);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e23497){if((e23497 instanceof Object)){
var ex__21860__auto__ = e23497;
var statearr_23498_23512 = state_23482;
(statearr_23498_23512[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23482);

return cljs.core.cst$kw$recur;
} else {
throw e23497;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__23513 = state_23482;
state_23482 = G__23513;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
cljs$core$async$state_machine__21857__auto__ = function(state_23482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21857__auto____1.call(this,state_23482);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21857__auto____0;
cljs$core$async$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21857__auto____1;
return cljs$core$async$state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto___23501,out))
})();
var state__21960__auto__ = (function (){var statearr_23499 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_23499[(6)] = c__21958__auto___23501);

return statearr_23499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto___23501,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__23515 = arguments.length;
switch (G__23515) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21958__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto__){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto__){
return (function (state_23578){
var state_val_23579 = (state_23578[(1)]);
if((state_val_23579 === (7))){
var inst_23574 = (state_23578[(2)]);
var state_23578__$1 = state_23578;
var statearr_23580_23618 = state_23578__$1;
(statearr_23580_23618[(2)] = inst_23574);

(statearr_23580_23618[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (20))){
var inst_23544 = (state_23578[(7)]);
var inst_23555 = (state_23578[(2)]);
var inst_23556 = cljs.core.next(inst_23544);
var inst_23530 = inst_23556;
var inst_23531 = null;
var inst_23532 = (0);
var inst_23533 = (0);
var state_23578__$1 = (function (){var statearr_23581 = state_23578;
(statearr_23581[(8)] = inst_23530);

(statearr_23581[(9)] = inst_23533);

(statearr_23581[(10)] = inst_23555);

(statearr_23581[(11)] = inst_23532);

(statearr_23581[(12)] = inst_23531);

return statearr_23581;
})();
var statearr_23582_23619 = state_23578__$1;
(statearr_23582_23619[(2)] = null);

(statearr_23582_23619[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (1))){
var state_23578__$1 = state_23578;
var statearr_23583_23620 = state_23578__$1;
(statearr_23583_23620[(2)] = null);

(statearr_23583_23620[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (4))){
var inst_23519 = (state_23578[(13)]);
var inst_23519__$1 = (state_23578[(2)]);
var inst_23520 = (inst_23519__$1 == null);
var state_23578__$1 = (function (){var statearr_23584 = state_23578;
(statearr_23584[(13)] = inst_23519__$1);

return statearr_23584;
})();
if(cljs.core.truth_(inst_23520)){
var statearr_23585_23621 = state_23578__$1;
(statearr_23585_23621[(1)] = (5));

} else {
var statearr_23586_23622 = state_23578__$1;
(statearr_23586_23622[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (15))){
var state_23578__$1 = state_23578;
var statearr_23590_23623 = state_23578__$1;
(statearr_23590_23623[(2)] = null);

(statearr_23590_23623[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (21))){
var state_23578__$1 = state_23578;
var statearr_23591_23624 = state_23578__$1;
(statearr_23591_23624[(2)] = null);

(statearr_23591_23624[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (13))){
var inst_23530 = (state_23578[(8)]);
var inst_23533 = (state_23578[(9)]);
var inst_23532 = (state_23578[(11)]);
var inst_23531 = (state_23578[(12)]);
var inst_23540 = (state_23578[(2)]);
var inst_23541 = (inst_23533 + (1));
var tmp23587 = inst_23530;
var tmp23588 = inst_23532;
var tmp23589 = inst_23531;
var inst_23530__$1 = tmp23587;
var inst_23531__$1 = tmp23589;
var inst_23532__$1 = tmp23588;
var inst_23533__$1 = inst_23541;
var state_23578__$1 = (function (){var statearr_23592 = state_23578;
(statearr_23592[(8)] = inst_23530__$1);

(statearr_23592[(9)] = inst_23533__$1);

(statearr_23592[(14)] = inst_23540);

(statearr_23592[(11)] = inst_23532__$1);

(statearr_23592[(12)] = inst_23531__$1);

return statearr_23592;
})();
var statearr_23593_23625 = state_23578__$1;
(statearr_23593_23625[(2)] = null);

(statearr_23593_23625[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (22))){
var state_23578__$1 = state_23578;
var statearr_23594_23626 = state_23578__$1;
(statearr_23594_23626[(2)] = null);

(statearr_23594_23626[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (6))){
var inst_23519 = (state_23578[(13)]);
var inst_23528 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23519) : f.call(null,inst_23519));
var inst_23529 = cljs.core.seq(inst_23528);
var inst_23530 = inst_23529;
var inst_23531 = null;
var inst_23532 = (0);
var inst_23533 = (0);
var state_23578__$1 = (function (){var statearr_23595 = state_23578;
(statearr_23595[(8)] = inst_23530);

(statearr_23595[(9)] = inst_23533);

(statearr_23595[(11)] = inst_23532);

(statearr_23595[(12)] = inst_23531);

return statearr_23595;
})();
var statearr_23596_23627 = state_23578__$1;
(statearr_23596_23627[(2)] = null);

(statearr_23596_23627[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (17))){
var inst_23544 = (state_23578[(7)]);
var inst_23548 = cljs.core.chunk_first(inst_23544);
var inst_23549 = cljs.core.chunk_rest(inst_23544);
var inst_23550 = cljs.core.count(inst_23548);
var inst_23530 = inst_23549;
var inst_23531 = inst_23548;
var inst_23532 = inst_23550;
var inst_23533 = (0);
var state_23578__$1 = (function (){var statearr_23597 = state_23578;
(statearr_23597[(8)] = inst_23530);

(statearr_23597[(9)] = inst_23533);

(statearr_23597[(11)] = inst_23532);

(statearr_23597[(12)] = inst_23531);

return statearr_23597;
})();
var statearr_23598_23628 = state_23578__$1;
(statearr_23598_23628[(2)] = null);

(statearr_23598_23628[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (3))){
var inst_23576 = (state_23578[(2)]);
var state_23578__$1 = state_23578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23578__$1,inst_23576);
} else {
if((state_val_23579 === (12))){
var inst_23564 = (state_23578[(2)]);
var state_23578__$1 = state_23578;
var statearr_23599_23629 = state_23578__$1;
(statearr_23599_23629[(2)] = inst_23564);

(statearr_23599_23629[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (2))){
var state_23578__$1 = state_23578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23578__$1,(4),in$);
} else {
if((state_val_23579 === (23))){
var inst_23572 = (state_23578[(2)]);
var state_23578__$1 = state_23578;
var statearr_23600_23630 = state_23578__$1;
(statearr_23600_23630[(2)] = inst_23572);

(statearr_23600_23630[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (19))){
var inst_23559 = (state_23578[(2)]);
var state_23578__$1 = state_23578;
var statearr_23601_23631 = state_23578__$1;
(statearr_23601_23631[(2)] = inst_23559);

(statearr_23601_23631[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (11))){
var inst_23530 = (state_23578[(8)]);
var inst_23544 = (state_23578[(7)]);
var inst_23544__$1 = cljs.core.seq(inst_23530);
var state_23578__$1 = (function (){var statearr_23602 = state_23578;
(statearr_23602[(7)] = inst_23544__$1);

return statearr_23602;
})();
if(inst_23544__$1){
var statearr_23603_23632 = state_23578__$1;
(statearr_23603_23632[(1)] = (14));

} else {
var statearr_23604_23633 = state_23578__$1;
(statearr_23604_23633[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (9))){
var inst_23566 = (state_23578[(2)]);
var inst_23567 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_23578__$1 = (function (){var statearr_23605 = state_23578;
(statearr_23605[(15)] = inst_23566);

return statearr_23605;
})();
if(cljs.core.truth_(inst_23567)){
var statearr_23606_23634 = state_23578__$1;
(statearr_23606_23634[(1)] = (21));

} else {
var statearr_23607_23635 = state_23578__$1;
(statearr_23607_23635[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (5))){
var inst_23522 = cljs.core.async.close_BANG_(out);
var state_23578__$1 = state_23578;
var statearr_23608_23636 = state_23578__$1;
(statearr_23608_23636[(2)] = inst_23522);

(statearr_23608_23636[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (14))){
var inst_23544 = (state_23578[(7)]);
var inst_23546 = cljs.core.chunked_seq_QMARK_(inst_23544);
var state_23578__$1 = state_23578;
if(inst_23546){
var statearr_23609_23637 = state_23578__$1;
(statearr_23609_23637[(1)] = (17));

} else {
var statearr_23610_23638 = state_23578__$1;
(statearr_23610_23638[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (16))){
var inst_23562 = (state_23578[(2)]);
var state_23578__$1 = state_23578;
var statearr_23611_23639 = state_23578__$1;
(statearr_23611_23639[(2)] = inst_23562);

(statearr_23611_23639[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (10))){
var inst_23533 = (state_23578[(9)]);
var inst_23531 = (state_23578[(12)]);
var inst_23538 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23531,inst_23533);
var state_23578__$1 = state_23578;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23578__$1,(13),out,inst_23538);
} else {
if((state_val_23579 === (18))){
var inst_23544 = (state_23578[(7)]);
var inst_23553 = cljs.core.first(inst_23544);
var state_23578__$1 = state_23578;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23578__$1,(20),out,inst_23553);
} else {
if((state_val_23579 === (8))){
var inst_23533 = (state_23578[(9)]);
var inst_23532 = (state_23578[(11)]);
var inst_23535 = (inst_23533 < inst_23532);
var inst_23536 = inst_23535;
var state_23578__$1 = state_23578;
if(cljs.core.truth_(inst_23536)){
var statearr_23612_23640 = state_23578__$1;
(statearr_23612_23640[(1)] = (10));

} else {
var statearr_23613_23641 = state_23578__$1;
(statearr_23613_23641[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__21958__auto__))
;
return ((function (switch__21856__auto__,c__21958__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21857__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21857__auto____0 = (function (){
var statearr_23614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23614[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21857__auto__);

(statearr_23614[(1)] = (1));

return statearr_23614;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21857__auto____1 = (function (state_23578){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_23578);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e23615){if((e23615 instanceof Object)){
var ex__21860__auto__ = e23615;
var statearr_23616_23642 = state_23578;
(statearr_23616_23642[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23578);

return cljs.core.cst$kw$recur;
} else {
throw e23615;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__23643 = state_23578;
state_23578 = G__23643;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21857__auto__ = function(state_23578){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21857__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21857__auto____1.call(this,state_23578);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21857__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21857__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto__))
})();
var state__21960__auto__ = (function (){var statearr_23617 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_23617[(6)] = c__21958__auto__);

return statearr_23617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto__))
);

return c__21958__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__23645 = arguments.length;
switch (G__23645) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__23648 = arguments.length;
switch (G__23648) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__23651 = arguments.length;
switch (G__23651) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21958__auto___23698 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto___23698,out){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto___23698,out){
return (function (state_23675){
var state_val_23676 = (state_23675[(1)]);
if((state_val_23676 === (7))){
var inst_23670 = (state_23675[(2)]);
var state_23675__$1 = state_23675;
var statearr_23677_23699 = state_23675__$1;
(statearr_23677_23699[(2)] = inst_23670);

(statearr_23677_23699[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23676 === (1))){
var inst_23652 = null;
var state_23675__$1 = (function (){var statearr_23678 = state_23675;
(statearr_23678[(7)] = inst_23652);

return statearr_23678;
})();
var statearr_23679_23700 = state_23675__$1;
(statearr_23679_23700[(2)] = null);

(statearr_23679_23700[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23676 === (4))){
var inst_23655 = (state_23675[(8)]);
var inst_23655__$1 = (state_23675[(2)]);
var inst_23656 = (inst_23655__$1 == null);
var inst_23657 = cljs.core.not(inst_23656);
var state_23675__$1 = (function (){var statearr_23680 = state_23675;
(statearr_23680[(8)] = inst_23655__$1);

return statearr_23680;
})();
if(inst_23657){
var statearr_23681_23701 = state_23675__$1;
(statearr_23681_23701[(1)] = (5));

} else {
var statearr_23682_23702 = state_23675__$1;
(statearr_23682_23702[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23676 === (6))){
var state_23675__$1 = state_23675;
var statearr_23683_23703 = state_23675__$1;
(statearr_23683_23703[(2)] = null);

(statearr_23683_23703[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23676 === (3))){
var inst_23672 = (state_23675[(2)]);
var inst_23673 = cljs.core.async.close_BANG_(out);
var state_23675__$1 = (function (){var statearr_23684 = state_23675;
(statearr_23684[(9)] = inst_23672);

return statearr_23684;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23675__$1,inst_23673);
} else {
if((state_val_23676 === (2))){
var state_23675__$1 = state_23675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23675__$1,(4),ch);
} else {
if((state_val_23676 === (11))){
var inst_23655 = (state_23675[(8)]);
var inst_23664 = (state_23675[(2)]);
var inst_23652 = inst_23655;
var state_23675__$1 = (function (){var statearr_23685 = state_23675;
(statearr_23685[(7)] = inst_23652);

(statearr_23685[(10)] = inst_23664);

return statearr_23685;
})();
var statearr_23686_23704 = state_23675__$1;
(statearr_23686_23704[(2)] = null);

(statearr_23686_23704[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23676 === (9))){
var inst_23655 = (state_23675[(8)]);
var state_23675__$1 = state_23675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23675__$1,(11),out,inst_23655);
} else {
if((state_val_23676 === (5))){
var inst_23652 = (state_23675[(7)]);
var inst_23655 = (state_23675[(8)]);
var inst_23659 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23655,inst_23652);
var state_23675__$1 = state_23675;
if(inst_23659){
var statearr_23688_23705 = state_23675__$1;
(statearr_23688_23705[(1)] = (8));

} else {
var statearr_23689_23706 = state_23675__$1;
(statearr_23689_23706[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23676 === (10))){
var inst_23667 = (state_23675[(2)]);
var state_23675__$1 = state_23675;
var statearr_23690_23707 = state_23675__$1;
(statearr_23690_23707[(2)] = inst_23667);

(statearr_23690_23707[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23676 === (8))){
var inst_23652 = (state_23675[(7)]);
var tmp23687 = inst_23652;
var inst_23652__$1 = tmp23687;
var state_23675__$1 = (function (){var statearr_23691 = state_23675;
(statearr_23691[(7)] = inst_23652__$1);

return statearr_23691;
})();
var statearr_23692_23708 = state_23675__$1;
(statearr_23692_23708[(2)] = null);

(statearr_23692_23708[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__21958__auto___23698,out))
;
return ((function (switch__21856__auto__,c__21958__auto___23698,out){
return (function() {
var cljs$core$async$state_machine__21857__auto__ = null;
var cljs$core$async$state_machine__21857__auto____0 = (function (){
var statearr_23693 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23693[(0)] = cljs$core$async$state_machine__21857__auto__);

(statearr_23693[(1)] = (1));

return statearr_23693;
});
var cljs$core$async$state_machine__21857__auto____1 = (function (state_23675){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_23675);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e23694){if((e23694 instanceof Object)){
var ex__21860__auto__ = e23694;
var statearr_23695_23709 = state_23675;
(statearr_23695_23709[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23675);

return cljs.core.cst$kw$recur;
} else {
throw e23694;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__23710 = state_23675;
state_23675 = G__23710;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
cljs$core$async$state_machine__21857__auto__ = function(state_23675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21857__auto____1.call(this,state_23675);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21857__auto____0;
cljs$core$async$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21857__auto____1;
return cljs$core$async$state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto___23698,out))
})();
var state__21960__auto__ = (function (){var statearr_23696 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_23696[(6)] = c__21958__auto___23698);

return statearr_23696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto___23698,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__23712 = arguments.length;
switch (G__23712) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21958__auto___23778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto___23778,out){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto___23778,out){
return (function (state_23750){
var state_val_23751 = (state_23750[(1)]);
if((state_val_23751 === (7))){
var inst_23746 = (state_23750[(2)]);
var state_23750__$1 = state_23750;
var statearr_23752_23779 = state_23750__$1;
(statearr_23752_23779[(2)] = inst_23746);

(statearr_23752_23779[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23751 === (1))){
var inst_23713 = (new Array(n));
var inst_23714 = inst_23713;
var inst_23715 = (0);
var state_23750__$1 = (function (){var statearr_23753 = state_23750;
(statearr_23753[(7)] = inst_23715);

(statearr_23753[(8)] = inst_23714);

return statearr_23753;
})();
var statearr_23754_23780 = state_23750__$1;
(statearr_23754_23780[(2)] = null);

(statearr_23754_23780[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23751 === (4))){
var inst_23718 = (state_23750[(9)]);
var inst_23718__$1 = (state_23750[(2)]);
var inst_23719 = (inst_23718__$1 == null);
var inst_23720 = cljs.core.not(inst_23719);
var state_23750__$1 = (function (){var statearr_23755 = state_23750;
(statearr_23755[(9)] = inst_23718__$1);

return statearr_23755;
})();
if(inst_23720){
var statearr_23756_23781 = state_23750__$1;
(statearr_23756_23781[(1)] = (5));

} else {
var statearr_23757_23782 = state_23750__$1;
(statearr_23757_23782[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23751 === (15))){
var inst_23740 = (state_23750[(2)]);
var state_23750__$1 = state_23750;
var statearr_23758_23783 = state_23750__$1;
(statearr_23758_23783[(2)] = inst_23740);

(statearr_23758_23783[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23751 === (13))){
var state_23750__$1 = state_23750;
var statearr_23759_23784 = state_23750__$1;
(statearr_23759_23784[(2)] = null);

(statearr_23759_23784[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23751 === (6))){
var inst_23715 = (state_23750[(7)]);
var inst_23736 = (inst_23715 > (0));
var state_23750__$1 = state_23750;
if(cljs.core.truth_(inst_23736)){
var statearr_23760_23785 = state_23750__$1;
(statearr_23760_23785[(1)] = (12));

} else {
var statearr_23761_23786 = state_23750__$1;
(statearr_23761_23786[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23751 === (3))){
var inst_23748 = (state_23750[(2)]);
var state_23750__$1 = state_23750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23750__$1,inst_23748);
} else {
if((state_val_23751 === (12))){
var inst_23714 = (state_23750[(8)]);
var inst_23738 = cljs.core.vec(inst_23714);
var state_23750__$1 = state_23750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23750__$1,(15),out,inst_23738);
} else {
if((state_val_23751 === (2))){
var state_23750__$1 = state_23750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23750__$1,(4),ch);
} else {
if((state_val_23751 === (11))){
var inst_23730 = (state_23750[(2)]);
var inst_23731 = (new Array(n));
var inst_23714 = inst_23731;
var inst_23715 = (0);
var state_23750__$1 = (function (){var statearr_23762 = state_23750;
(statearr_23762[(7)] = inst_23715);

(statearr_23762[(8)] = inst_23714);

(statearr_23762[(10)] = inst_23730);

return statearr_23762;
})();
var statearr_23763_23787 = state_23750__$1;
(statearr_23763_23787[(2)] = null);

(statearr_23763_23787[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23751 === (9))){
var inst_23714 = (state_23750[(8)]);
var inst_23728 = cljs.core.vec(inst_23714);
var state_23750__$1 = state_23750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23750__$1,(11),out,inst_23728);
} else {
if((state_val_23751 === (5))){
var inst_23715 = (state_23750[(7)]);
var inst_23714 = (state_23750[(8)]);
var inst_23723 = (state_23750[(11)]);
var inst_23718 = (state_23750[(9)]);
var inst_23722 = (inst_23714[inst_23715] = inst_23718);
var inst_23723__$1 = (inst_23715 + (1));
var inst_23724 = (inst_23723__$1 < n);
var state_23750__$1 = (function (){var statearr_23764 = state_23750;
(statearr_23764[(12)] = inst_23722);

(statearr_23764[(11)] = inst_23723__$1);

return statearr_23764;
})();
if(cljs.core.truth_(inst_23724)){
var statearr_23765_23788 = state_23750__$1;
(statearr_23765_23788[(1)] = (8));

} else {
var statearr_23766_23789 = state_23750__$1;
(statearr_23766_23789[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23751 === (14))){
var inst_23743 = (state_23750[(2)]);
var inst_23744 = cljs.core.async.close_BANG_(out);
var state_23750__$1 = (function (){var statearr_23768 = state_23750;
(statearr_23768[(13)] = inst_23743);

return statearr_23768;
})();
var statearr_23769_23790 = state_23750__$1;
(statearr_23769_23790[(2)] = inst_23744);

(statearr_23769_23790[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23751 === (10))){
var inst_23734 = (state_23750[(2)]);
var state_23750__$1 = state_23750;
var statearr_23770_23791 = state_23750__$1;
(statearr_23770_23791[(2)] = inst_23734);

(statearr_23770_23791[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23751 === (8))){
var inst_23714 = (state_23750[(8)]);
var inst_23723 = (state_23750[(11)]);
var tmp23767 = inst_23714;
var inst_23714__$1 = tmp23767;
var inst_23715 = inst_23723;
var state_23750__$1 = (function (){var statearr_23771 = state_23750;
(statearr_23771[(7)] = inst_23715);

(statearr_23771[(8)] = inst_23714__$1);

return statearr_23771;
})();
var statearr_23772_23792 = state_23750__$1;
(statearr_23772_23792[(2)] = null);

(statearr_23772_23792[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__21958__auto___23778,out))
;
return ((function (switch__21856__auto__,c__21958__auto___23778,out){
return (function() {
var cljs$core$async$state_machine__21857__auto__ = null;
var cljs$core$async$state_machine__21857__auto____0 = (function (){
var statearr_23773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23773[(0)] = cljs$core$async$state_machine__21857__auto__);

(statearr_23773[(1)] = (1));

return statearr_23773;
});
var cljs$core$async$state_machine__21857__auto____1 = (function (state_23750){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_23750);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e23774){if((e23774 instanceof Object)){
var ex__21860__auto__ = e23774;
var statearr_23775_23793 = state_23750;
(statearr_23775_23793[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23750);

return cljs.core.cst$kw$recur;
} else {
throw e23774;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__23794 = state_23750;
state_23750 = G__23794;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
cljs$core$async$state_machine__21857__auto__ = function(state_23750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21857__auto____1.call(this,state_23750);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21857__auto____0;
cljs$core$async$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21857__auto____1;
return cljs$core$async$state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto___23778,out))
})();
var state__21960__auto__ = (function (){var statearr_23776 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_23776[(6)] = c__21958__auto___23778);

return statearr_23776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto___23778,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__23796 = arguments.length;
switch (G__23796) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21958__auto___23866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto___23866,out){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto___23866,out){
return (function (state_23838){
var state_val_23839 = (state_23838[(1)]);
if((state_val_23839 === (7))){
var inst_23834 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
var statearr_23840_23867 = state_23838__$1;
(statearr_23840_23867[(2)] = inst_23834);

(statearr_23840_23867[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23839 === (1))){
var inst_23797 = [];
var inst_23798 = inst_23797;
var inst_23799 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_23838__$1 = (function (){var statearr_23841 = state_23838;
(statearr_23841[(7)] = inst_23799);

(statearr_23841[(8)] = inst_23798);

return statearr_23841;
})();
var statearr_23842_23868 = state_23838__$1;
(statearr_23842_23868[(2)] = null);

(statearr_23842_23868[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23839 === (4))){
var inst_23802 = (state_23838[(9)]);
var inst_23802__$1 = (state_23838[(2)]);
var inst_23803 = (inst_23802__$1 == null);
var inst_23804 = cljs.core.not(inst_23803);
var state_23838__$1 = (function (){var statearr_23843 = state_23838;
(statearr_23843[(9)] = inst_23802__$1);

return statearr_23843;
})();
if(inst_23804){
var statearr_23844_23869 = state_23838__$1;
(statearr_23844_23869[(1)] = (5));

} else {
var statearr_23845_23870 = state_23838__$1;
(statearr_23845_23870[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23839 === (15))){
var inst_23828 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
var statearr_23846_23871 = state_23838__$1;
(statearr_23846_23871[(2)] = inst_23828);

(statearr_23846_23871[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23839 === (13))){
var state_23838__$1 = state_23838;
var statearr_23847_23872 = state_23838__$1;
(statearr_23847_23872[(2)] = null);

(statearr_23847_23872[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23839 === (6))){
var inst_23798 = (state_23838[(8)]);
var inst_23823 = inst_23798.length;
var inst_23824 = (inst_23823 > (0));
var state_23838__$1 = state_23838;
if(cljs.core.truth_(inst_23824)){
var statearr_23848_23873 = state_23838__$1;
(statearr_23848_23873[(1)] = (12));

} else {
var statearr_23849_23874 = state_23838__$1;
(statearr_23849_23874[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23839 === (3))){
var inst_23836 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23838__$1,inst_23836);
} else {
if((state_val_23839 === (12))){
var inst_23798 = (state_23838[(8)]);
var inst_23826 = cljs.core.vec(inst_23798);
var state_23838__$1 = state_23838;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23838__$1,(15),out,inst_23826);
} else {
if((state_val_23839 === (2))){
var state_23838__$1 = state_23838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23838__$1,(4),ch);
} else {
if((state_val_23839 === (11))){
var inst_23802 = (state_23838[(9)]);
var inst_23806 = (state_23838[(10)]);
var inst_23816 = (state_23838[(2)]);
var inst_23817 = [];
var inst_23818 = inst_23817.push(inst_23802);
var inst_23798 = inst_23817;
var inst_23799 = inst_23806;
var state_23838__$1 = (function (){var statearr_23850 = state_23838;
(statearr_23850[(7)] = inst_23799);

(statearr_23850[(8)] = inst_23798);

(statearr_23850[(11)] = inst_23818);

(statearr_23850[(12)] = inst_23816);

return statearr_23850;
})();
var statearr_23851_23875 = state_23838__$1;
(statearr_23851_23875[(2)] = null);

(statearr_23851_23875[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23839 === (9))){
var inst_23798 = (state_23838[(8)]);
var inst_23814 = cljs.core.vec(inst_23798);
var state_23838__$1 = state_23838;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23838__$1,(11),out,inst_23814);
} else {
if((state_val_23839 === (5))){
var inst_23799 = (state_23838[(7)]);
var inst_23802 = (state_23838[(9)]);
var inst_23806 = (state_23838[(10)]);
var inst_23806__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23802) : f.call(null,inst_23802));
var inst_23807 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23806__$1,inst_23799);
var inst_23808 = cljs.core.keyword_identical_QMARK_(inst_23799,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_23809 = (inst_23807) || (inst_23808);
var state_23838__$1 = (function (){var statearr_23852 = state_23838;
(statearr_23852[(10)] = inst_23806__$1);

return statearr_23852;
})();
if(cljs.core.truth_(inst_23809)){
var statearr_23853_23876 = state_23838__$1;
(statearr_23853_23876[(1)] = (8));

} else {
var statearr_23854_23877 = state_23838__$1;
(statearr_23854_23877[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23839 === (14))){
var inst_23831 = (state_23838[(2)]);
var inst_23832 = cljs.core.async.close_BANG_(out);
var state_23838__$1 = (function (){var statearr_23856 = state_23838;
(statearr_23856[(13)] = inst_23831);

return statearr_23856;
})();
var statearr_23857_23878 = state_23838__$1;
(statearr_23857_23878[(2)] = inst_23832);

(statearr_23857_23878[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23839 === (10))){
var inst_23821 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
var statearr_23858_23879 = state_23838__$1;
(statearr_23858_23879[(2)] = inst_23821);

(statearr_23858_23879[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23839 === (8))){
var inst_23802 = (state_23838[(9)]);
var inst_23798 = (state_23838[(8)]);
var inst_23806 = (state_23838[(10)]);
var inst_23811 = inst_23798.push(inst_23802);
var tmp23855 = inst_23798;
var inst_23798__$1 = tmp23855;
var inst_23799 = inst_23806;
var state_23838__$1 = (function (){var statearr_23859 = state_23838;
(statearr_23859[(7)] = inst_23799);

(statearr_23859[(8)] = inst_23798__$1);

(statearr_23859[(14)] = inst_23811);

return statearr_23859;
})();
var statearr_23860_23880 = state_23838__$1;
(statearr_23860_23880[(2)] = null);

(statearr_23860_23880[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__21958__auto___23866,out))
;
return ((function (switch__21856__auto__,c__21958__auto___23866,out){
return (function() {
var cljs$core$async$state_machine__21857__auto__ = null;
var cljs$core$async$state_machine__21857__auto____0 = (function (){
var statearr_23861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23861[(0)] = cljs$core$async$state_machine__21857__auto__);

(statearr_23861[(1)] = (1));

return statearr_23861;
});
var cljs$core$async$state_machine__21857__auto____1 = (function (state_23838){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_23838);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e23862){if((e23862 instanceof Object)){
var ex__21860__auto__ = e23862;
var statearr_23863_23881 = state_23838;
(statearr_23863_23881[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23838);

return cljs.core.cst$kw$recur;
} else {
throw e23862;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__23882 = state_23838;
state_23838 = G__23882;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
cljs$core$async$state_machine__21857__auto__ = function(state_23838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21857__auto____1.call(this,state_23838);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21857__auto____0;
cljs$core$async$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21857__auto____1;
return cljs$core$async$state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto___23866,out))
})();
var state__21960__auto__ = (function (){var statearr_23864 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_23864[(6)] = c__21958__auto___23866);

return statearr_23864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto___23866,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

