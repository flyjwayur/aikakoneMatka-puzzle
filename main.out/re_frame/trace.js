// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__25298){
var map__25299 = p__25298;
var map__25299__$1 = ((((!((map__25299 == null)))?((((map__25299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25299):map__25299);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25299__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25299__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25299__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25299__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__8808__auto__ = child_of;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__25301_25315 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__25302_25316 = null;
var count__25303_25317 = (0);
var i__25304_25318 = (0);
while(true){
if((i__25304_25318 < count__25303_25317)){
var vec__25305_25319 = chunk__25302_25316.cljs$core$IIndexed$_nth$arity$2(null,i__25304_25318);
var k_25320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25305_25319,(0),null);
var cb_25321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25305_25319,(1),null);
try{var G__25309_25322 = cljs.core.deref(re_frame.trace.traces);
(cb_25321.cljs$core$IFn$_invoke$arity$1 ? cb_25321.cljs$core$IFn$_invoke$arity$1(G__25309_25322) : cb_25321.call(null,G__25309_25322));
}catch (e25308){var e_25323 = e25308;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_25320,"while storing",cljs.core.deref(re_frame.trace.traces),e_25323], 0));
}
var G__25324 = seq__25301_25315;
var G__25325 = chunk__25302_25316;
var G__25326 = count__25303_25317;
var G__25327 = (i__25304_25318 + (1));
seq__25301_25315 = G__25324;
chunk__25302_25316 = G__25325;
count__25303_25317 = G__25326;
i__25304_25318 = G__25327;
continue;
} else {
var temp__5457__auto___25328 = cljs.core.seq(seq__25301_25315);
if(temp__5457__auto___25328){
var seq__25301_25329__$1 = temp__5457__auto___25328;
if(cljs.core.chunked_seq_QMARK_(seq__25301_25329__$1)){
var c__9739__auto___25330 = cljs.core.chunk_first(seq__25301_25329__$1);
var G__25331 = cljs.core.chunk_rest(seq__25301_25329__$1);
var G__25332 = c__9739__auto___25330;
var G__25333 = cljs.core.count(c__9739__auto___25330);
var G__25334 = (0);
seq__25301_25315 = G__25331;
chunk__25302_25316 = G__25332;
count__25303_25317 = G__25333;
i__25304_25318 = G__25334;
continue;
} else {
var vec__25310_25335 = cljs.core.first(seq__25301_25329__$1);
var k_25336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25310_25335,(0),null);
var cb_25337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25310_25335,(1),null);
try{var G__25314_25338 = cljs.core.deref(re_frame.trace.traces);
(cb_25337.cljs$core$IFn$_invoke$arity$1 ? cb_25337.cljs$core$IFn$_invoke$arity$1(G__25314_25338) : cb_25337.call(null,G__25314_25338));
}catch (e25313){var e_25339 = e25313;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_25336,"while storing",cljs.core.deref(re_frame.trace.traces),e_25339], 0));
}
var G__25340 = cljs.core.next(seq__25301_25329__$1);
var G__25341 = null;
var G__25342 = (0);
var G__25343 = (0);
seq__25301_25315 = G__25340;
chunk__25302_25316 = G__25341;
count__25303_25317 = G__25342;
i__25304_25318 = G__25343;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (10)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
