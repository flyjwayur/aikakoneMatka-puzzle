// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_27422 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__27423 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__27424 = null;
var count__27425 = (0);
var i__27426 = (0);
while(true){
if((i__27426 < count__27425)){
var vec__27427 = chunk__27424.cljs$core$IIndexed$_nth$arity$2(null,i__27426);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27427,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27427,(1),null);
var temp__5455__auto___27443 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___27443)){
var effect_fn_27444 = temp__5455__auto___27443;
(effect_fn_27444.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27444.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27444.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}

var G__27445 = seq__27423;
var G__27446 = chunk__27424;
var G__27447 = count__27425;
var G__27448 = (i__27426 + (1));
seq__27423 = G__27445;
chunk__27424 = G__27446;
count__27425 = G__27447;
i__27426 = G__27448;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27423);
if(temp__5457__auto__){
var seq__27423__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27423__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__27423__$1);
var G__27449 = cljs.core.chunk_rest(seq__27423__$1);
var G__27450 = c__9739__auto__;
var G__27451 = cljs.core.count(c__9739__auto__);
var G__27452 = (0);
seq__27423 = G__27449;
chunk__27424 = G__27450;
count__27425 = G__27451;
i__27426 = G__27452;
continue;
} else {
var vec__27430 = cljs.core.first(seq__27423__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27430,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27430,(1),null);
var temp__5455__auto___27453 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___27453)){
var effect_fn_27454 = temp__5455__auto___27453;
(effect_fn_27454.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27454.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27454.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}

var G__27455 = cljs.core.next(seq__27423__$1);
var G__27456 = null;
var G__27457 = (0);
var G__27458 = (0);
seq__27423 = G__27455;
chunk__27424 = G__27456;
count__27425 = G__27457;
i__27426 = G__27458;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__25276__auto___27459 = re_frame.interop.now();
var duration__25277__auto___27460 = (end__25276__auto___27459 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__25277__auto___27460,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__25276__auto___27459);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_27422;
}} else {
var seq__27433 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__27434 = null;
var count__27435 = (0);
var i__27436 = (0);
while(true){
if((i__27436 < count__27435)){
var vec__27437 = chunk__27434.cljs$core$IIndexed$_nth$arity$2(null,i__27436);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27437,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27437,(1),null);
var temp__5455__auto___27461 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___27461)){
var effect_fn_27462 = temp__5455__auto___27461;
(effect_fn_27462.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27462.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27462.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}

var G__27463 = seq__27433;
var G__27464 = chunk__27434;
var G__27465 = count__27435;
var G__27466 = (i__27436 + (1));
seq__27433 = G__27463;
chunk__27434 = G__27464;
count__27435 = G__27465;
i__27436 = G__27466;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27433);
if(temp__5457__auto__){
var seq__27433__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27433__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__27433__$1);
var G__27467 = cljs.core.chunk_rest(seq__27433__$1);
var G__27468 = c__9739__auto__;
var G__27469 = cljs.core.count(c__9739__auto__);
var G__27470 = (0);
seq__27433 = G__27467;
chunk__27434 = G__27468;
count__27435 = G__27469;
i__27436 = G__27470;
continue;
} else {
var vec__27440 = cljs.core.first(seq__27433__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27440,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27440,(1),null);
var temp__5455__auto___27471 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___27471)){
var effect_fn_27472 = temp__5455__auto___27471;
(effect_fn_27472.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27472.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27472.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}

var G__27473 = cljs.core.next(seq__27433__$1);
var G__27474 = null;
var G__27475 = (0);
var G__27476 = (0);
seq__27433 = G__27473;
chunk__27434 = G__27474;
count__27435 = G__27475;
i__27436 = G__27476;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__27477 = cljs.core.seq(value);
var chunk__27478 = null;
var count__27479 = (0);
var i__27480 = (0);
while(true){
if((i__27480 < count__27479)){
var map__27481 = chunk__27478.cljs$core$IIndexed$_nth$arity$2(null,i__27480);
var map__27481__$1 = ((((!((map__27481 == null)))?((((map__27481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27481.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27481):map__27481);
var effect = map__27481__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27481__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27481__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__27477,chunk__27478,count__27479,i__27480,map__27481,map__27481__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__27477,chunk__27478,count__27479,i__27480,map__27481,map__27481__$1,effect,ms,dispatch))
,ms);
}

var G__27485 = seq__27477;
var G__27486 = chunk__27478;
var G__27487 = count__27479;
var G__27488 = (i__27480 + (1));
seq__27477 = G__27485;
chunk__27478 = G__27486;
count__27479 = G__27487;
i__27480 = G__27488;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27477);
if(temp__5457__auto__){
var seq__27477__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27477__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__27477__$1);
var G__27489 = cljs.core.chunk_rest(seq__27477__$1);
var G__27490 = c__9739__auto__;
var G__27491 = cljs.core.count(c__9739__auto__);
var G__27492 = (0);
seq__27477 = G__27489;
chunk__27478 = G__27490;
count__27479 = G__27491;
i__27480 = G__27492;
continue;
} else {
var map__27483 = cljs.core.first(seq__27477__$1);
var map__27483__$1 = ((((!((map__27483 == null)))?((((map__27483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27483):map__27483);
var effect = map__27483__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27483__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27483__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__27477,chunk__27478,count__27479,i__27480,map__27483,map__27483__$1,effect,ms,dispatch,seq__27477__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__27477,chunk__27478,count__27479,i__27480,map__27483,map__27483__$1,effect,ms,dispatch,seq__27477__$1,temp__5457__auto__))
,ms);
}

var G__27493 = cljs.core.next(seq__27477__$1);
var G__27494 = null;
var G__27495 = (0);
var G__27496 = (0);
seq__27477 = G__27493;
chunk__27478 = G__27494;
count__27479 = G__27495;
i__27480 = G__27496;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__27497 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__27498 = null;
var count__27499 = (0);
var i__27500 = (0);
while(true){
if((i__27500 < count__27499)){
var event = chunk__27498.cljs$core$IIndexed$_nth$arity$2(null,i__27500);
re_frame.router.dispatch(event);

var G__27501 = seq__27497;
var G__27502 = chunk__27498;
var G__27503 = count__27499;
var G__27504 = (i__27500 + (1));
seq__27497 = G__27501;
chunk__27498 = G__27502;
count__27499 = G__27503;
i__27500 = G__27504;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27497);
if(temp__5457__auto__){
var seq__27497__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27497__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__27497__$1);
var G__27505 = cljs.core.chunk_rest(seq__27497__$1);
var G__27506 = c__9739__auto__;
var G__27507 = cljs.core.count(c__9739__auto__);
var G__27508 = (0);
seq__27497 = G__27505;
chunk__27498 = G__27506;
count__27499 = G__27507;
i__27500 = G__27508;
continue;
} else {
var event = cljs.core.first(seq__27497__$1);
re_frame.router.dispatch(event);

var G__27509 = cljs.core.next(seq__27497__$1);
var G__27510 = null;
var G__27511 = (0);
var G__27512 = (0);
seq__27497 = G__27509;
chunk__27498 = G__27510;
count__27499 = G__27511;
i__27500 = G__27512;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__27513 = cljs.core.seq(value);
var chunk__27514 = null;
var count__27515 = (0);
var i__27516 = (0);
while(true){
if((i__27516 < count__27515)){
var event = chunk__27514.cljs$core$IIndexed$_nth$arity$2(null,i__27516);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__27517 = seq__27513;
var G__27518 = chunk__27514;
var G__27519 = count__27515;
var G__27520 = (i__27516 + (1));
seq__27513 = G__27517;
chunk__27514 = G__27518;
count__27515 = G__27519;
i__27516 = G__27520;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27513);
if(temp__5457__auto__){
var seq__27513__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27513__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__27513__$1);
var G__27521 = cljs.core.chunk_rest(seq__27513__$1);
var G__27522 = c__9739__auto__;
var G__27523 = cljs.core.count(c__9739__auto__);
var G__27524 = (0);
seq__27513 = G__27521;
chunk__27514 = G__27522;
count__27515 = G__27523;
i__27516 = G__27524;
continue;
} else {
var event = cljs.core.first(seq__27513__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__27525 = cljs.core.next(seq__27513__$1);
var G__27526 = null;
var G__27527 = (0);
var G__27528 = (0);
seq__27513 = G__27525;
chunk__27514 = G__27526;
count__27515 = G__27527;
i__27516 = G__27528;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if(!((cljs.core.deref(re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
