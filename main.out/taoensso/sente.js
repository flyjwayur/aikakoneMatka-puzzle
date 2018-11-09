// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
if(cljs.core.vector_QMARK_(taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(79),(1)], null));
} else {
taoensso.encore.assert_min_encore_version(2.79);
}
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(11),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
if(typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined'){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
taoensso.sente.expected = (function taoensso$sente$expected(expected,x){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$expected,expected,cljs.core.cst$kw$actual,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.type(x),cljs.core.cst$kw$value,x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_(x))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrong_DASH_type,taoensso.sente.expected(cljs.core.cst$kw$vector,x)], null);
} else {
if(cljs.core.not((function (){var G__43875 = cljs.core.count(x);
var fexpr__43874 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null);
return (fexpr__43874.cljs$core$IFn$_invoke$arity$1 ? fexpr__43874.cljs$core$IFn$_invoke$arity$1(G__43875) : fexpr__43874.call(null,G__43875));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrong_DASH_length,taoensso.sente.expected(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__43876 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43876,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43876,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrong_DASH_id_DASH_type,taoensso.sente.expected(cljs.core.cst$kw$keyword,ev_id)], null);
} else {
if(cljs.core.not(cljs.core.namespace(ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$unnamespaced_DASH_id,taoensso.sente.expected(cljs.core.cst$kw$namespaced_DASH_keyword,ev_id)], null);
} else {
return null;

}
}

}
}
});
/**
 * Returns given argument if it is a valid [ev-id ?ev-data] form. Otherwise
 *   throws a validation exception.
 */
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__5457__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5457__auto__)){
var errs = temp__5457__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid event",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$errors,errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event(x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__5455__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5455__auto__)){
var errs = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_bad_DASH_event,x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__8796__auto__ = cljs.core.map_QMARK_(x);
if(and__8796__auto__){
var and__8796__auto____$1 = taoensso.encore.ks_EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$ch_DASH_recv,null,cljs.core.cst$kw$state,null,cljs.core.cst$kw$event,null,cljs.core.cst$kw$id,null,cljs.core.cst$kw$_QMARK_data,null,cljs.core.cst$kw$send_DASH_fn,null], null), null),x);
if(and__8796__auto____$1){
var map__43883 = x;
var map__43883__$1 = ((((!((map__43883 == null)))?((((map__43883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43883.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43883):map__43883);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43883__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43883__$1,cljs.core.cst$kw$send_DASH_fn);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43883__$1,cljs.core.cst$kw$state);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43883__$1,cljs.core.cst$kw$event);
var and__8796__auto____$2 = taoensso.encore.chan_QMARK_(ch_recv);
if(and__8796__auto____$2){
var and__8796__auto____$3 = cljs.core.ifn_QMARK_(send_fn);
if(and__8796__auto____$3){
var and__8796__auto____$4 = taoensso.encore.atom_QMARK_(state);
if(and__8796__auto____$4){
return taoensso.sente.event_QMARK_(event);
} else {
return and__8796__auto____$4;
}
} else {
return and__8796__auto____$3;
}
} else {
return and__8796__auto____$2;
}
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__8796__auto__ = cljs.core.map_QMARK_(x);
if(and__8796__auto__){
var and__8796__auto____$1 = taoensso.encore.ks_EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$_QMARK_reply_DASH_fn,null,cljs.core.cst$kw$ch_DASH_recv,null,cljs.core.cst$kw$client_DASH_id,null,cljs.core.cst$kw$connected_DASH_uids,null,cljs.core.cst$kw$uid,null,cljs.core.cst$kw$event,null,cljs.core.cst$kw$id,null,cljs.core.cst$kw$ring_DASH_req,null,cljs.core.cst$kw$_QMARK_data,null,cljs.core.cst$kw$send_DASH_fn,null], null), null),x);
if(and__8796__auto____$1){
var map__43889 = x;
var map__43889__$1 = ((((!((map__43889 == null)))?((((map__43889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43889.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43889):map__43889);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43889__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43889__$1,cljs.core.cst$kw$send_DASH_fn);
var connected_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43889__$1,cljs.core.cst$kw$connected_DASH_uids);
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43889__$1,cljs.core.cst$kw$ring_DASH_req);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43889__$1,cljs.core.cst$kw$client_DASH_id);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43889__$1,cljs.core.cst$kw$event);
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43889__$1,cljs.core.cst$kw$_QMARK_reply_DASH_fn);
var and__8796__auto____$2 = taoensso.encore.chan_QMARK_(ch_recv);
if(and__8796__auto____$2){
var and__8796__auto____$3 = cljs.core.ifn_QMARK_(send_fn);
if(and__8796__auto____$3){
var and__8796__auto____$4 = taoensso.encore.atom_QMARK_(connected_uids);
if(and__8796__auto____$4){
var and__8796__auto____$5 = cljs.core.map_QMARK_(ring_req);
if(and__8796__auto____$5){
var and__8796__auto____$6 = taoensso.encore.nblank_str_QMARK_(client_id);
if(and__8796__auto____$6){
var and__8796__auto____$7 = taoensso.sente.event_QMARK_(event);
if(cljs.core.truth_(and__8796__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_(_QMARK_reply_fn));
} else {
return and__8796__auto____$7;
}
} else {
return and__8796__auto____$6;
}
} else {
return and__8796__auto____$5;
}
} else {
return and__8796__auto____$4;
}
} else {
return and__8796__auto____$3;
}
} else {
return and__8796__auto____$2;
}
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__43891){
var map__43892 = p__43891;
var map__43892__$1 = ((((!((map__43892 == null)))?((((map__43892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43892):map__43892);
var ev_msg = map__43892__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43892__$1,cljs.core.cst$kw$event);
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43892__$1,cljs.core.cst$kw$_QMARK_reply_DASH_fn);
var vec__43894 = taoensso.sente.as_event(event);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43894,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43894,(1),null);
var valid_event = vec__43894;
var ev_msg_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$event,valid_event,cljs.core.cst$kw$_QMARK_reply_DASH_fn,_QMARK_reply_fn,cljs.core.cst$kw$id,ev_id,cljs.core.cst$kw$_QMARK_data,ev__QMARK_data], null)], 0));
if(cljs.core.not(taoensso.sente.server_event_msg_QMARK_(ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente",null,187,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__43894,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__43892,map__43892__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__43894,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__43892,map__43892__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,-1752975330);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
var fexpr__43897 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$chsk_SLASH_closed,null,cljs.core.cst$kw$chsk_SLASH_error,null,cljs.core.cst$kw$chsk_SLASH_timeout,null], null), null);
return (fexpr__43897.cljs$core$IFn$_invoke$arity$1 ? fexpr__43897.cljs$core$IFn$_invoke$arity$1(cb_reply_clj) : fexpr__43897.call(null,cb_reply_clj));
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not(taoensso.sente.cb_error_QMARK_(cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",201,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_(prefixed_pstr,"+");
var pstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack(packer,pstr);
}catch (e43901){var t = e43901;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente",null,208,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,1160499599);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_bad_DASH_package,pstr], null);
}})();
var vec__43898 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43898,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43898,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?cljs.core.cst$kw$ajax_DASH_cb:_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,214,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__43898,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__43898,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,-905681373);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__43903 = arguments.length;
switch (G__43903) {
case 2:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2 = (function (packer,clj){
var pstr = ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,221,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",clj,pstr], null);
});})(pstr))
,null)),null,-377137146);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,cljs.core.cst$kw$ajax_DASH_cb))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,wrapped_clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,230,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",wrapped_clj,pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,-2034818156);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = 3;


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
});
taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1(x);
});

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(s);
});

taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.sente.EdnPacker.cljs$lang$type = true;

taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker";

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"taoensso.sente/EdnPacker");
});

taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$edn)){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if(cljs.core.truth_((function (){var fexpr__43908 = (function (p1__43905_SHARP_){
if(!((p1__43905_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__43905_SHARP_.taoensso$sente$interfaces$IPacker$))){
return true;
} else {
if((!p1__43905_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__43905_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__43905_SHARP_);
}
});
return fexpr__43908(x);
})())){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e43906){if((e43906 instanceof Error)){
var e = e43906;
return e;
} else {
throw e43906;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",243,"((fn* [p1__43905#] (satisfies? interfaces/IPacker p1__43905#)) x)",x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = taoensso.encore.idx_fn();


/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___44204 = arguments.length;
var i__10088__auto___44205 = (0);
while(true){
if((i__10088__auto___44205 < len__10087__auto___44204)){
args__10094__auto__.push((arguments[i__10088__auto___44205]));

var G__44206 = (i__10088__auto___44205 + (1));
i__10088__auto___44205 = G__44206;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__43913){
var vec__43914 = p__43913;
var map__43917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43914,(0),null);
var map__43917__$1 = ((((!((map__43917 == null)))?((((map__43917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43917.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43917):map__43917);
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43917__$1,cljs.core.cst$kw$recv_DASH_buf_DASH_or_DASH_n,cljs.core.async.sliding_buffer((1000)));
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43917__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$secs,(25)], 0)));
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43917__$1,cljs.core.cst$kw$lp_DASH_timeout_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$secs,(20)], 0)));
var send_buf_ms_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43917__$1,cljs.core.cst$kw$send_DASH_buf_DASH_ms_DASH_ajax,(100));
var send_buf_ms_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43917__$1,cljs.core.cst$kw$send_DASH_buf_DASH_ms_DASH_ws,(30));
var user_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43917__$1,cljs.core.cst$kw$user_DASH_id_DASH_fn,((function (vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$uid], null));
});})(vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43917__$1,cljs.core.cst$kw$csrf_DASH_token_DASH_fn,((function (vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__8808__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$csrf_DASH_token], null));
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$ring$middleware$anti_DASH_forgery_SLASH_anti_DASH_forgery_DASH_token], null));
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,"__anti-forgery-token"], null));
}
}
});})(vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43917__$1,cljs.core.cst$kw$handshake_DASH_data_DASH_fn,((function (vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43917__$1,cljs.core.cst$kw$packer,cljs.core.cst$kw$edn);
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e43919){if((e43919 instanceof Error)){
var e = e43919;
return e;
} else {
throw e43919;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",313,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e43920){if((e43920 instanceof Error)){
var e = e43920;
return e;
} else {
throw e43920;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",313,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_44207 = (function (){try{if(cljs.core.truth_((function (){var fexpr__43923 = ((function (vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__43910_SHARP_){
if(!((p1__43910_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__43910_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$))){
return true;
} else {
if((!p1__43910_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__43910_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__43910_SHARP_);
}
});})(vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return fexpr__43923(web_server_ch_adapter);
})())){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e43921){if((e43921 instanceof Error)){
var e = e43921;
return e;
} else {
throw e43921;

}
}})();
if((e_44207 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",314,"((fn* [p1__43910#] (satisfies? interfaces/IServerChanAdapter p1__43910#)) web-server-ch-adapter)",web_server_ch_adapter,e_44207,null);
}

var max_ms_44208 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_44208)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_44208)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lp_DASH_timeout_DASH_ms,lp_timeout_ms,cljs.core.cst$kw$default_DASH_client_DASH_side_DASH_ajax_DASH_timeout_DASH_ms,max_ms_44208], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var ch_recv = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__8808__auto__ = (function (){var G__43926 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ring_req,cljs.core.cst$kw$client_DASH_id,client_id);
return (user_id_fn.cljs$core$IFn$_invoke$arity$1 ? user_id_fn.cljs$core$IFn$_invoke$arity$1(G__43926) : user_id_fn.call(null,G__43926));
})();
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.cst$kw$taoensso$sente_SLASH_nil_DASH_uid;
}
});})(packer__$1,ch_recv,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var conns_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$any,cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var G__44209 = null;
var G__44209__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var vec__43927 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43927,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43927,(1),null);
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init_QMARK_,(_QMARK_v == null),cljs.core.cst$kw$udt,new_udt,cljs.core.cst$kw$_QMARK_sch,_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
var G__44209__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init_QMARK_,(_QMARK_v == null),cljs.core.cst$kw$udt,new_udt,cljs.core.cst$kw$_QMARK_sch,new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
G__44209 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__44209__3.call(this,conn_type,uid,client_id);
case 4:
return G__44209__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__44209.cljs$core$IFn$_invoke$arity$3 = G__44209__3;
G__44209.cljs$core$IFn$_invoke$arity$4 = G__44209__4;
return G__44209;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e43930){if((e43930 instanceof Error)){
var e = e43930;
return e;
} else {
throw e43930;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",358,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__43931){
var map__43932 = p__43931;
var map__43932__$1 = ((((!((map__43932 == null)))?((((map__43932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43932):map__43932);
var old_m = map__43932__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43932__$1,cljs.core.cst$kw$ws);
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43932__$1,cljs.core.cst$kw$ajax);
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43932__$1,cljs.core.cst$kw$any);
var new_m = (function (){var G__43934 = conn_type;
var G__43934__$1 = (((G__43934 instanceof cljs.core.Keyword))?G__43934.fqn:null);
switch (G__43934__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid),cljs.core.cst$kw$ajax,ajax__$1,cljs.core.cst$kw$any,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,ws,cljs.core.cst$kw$ajax,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid),cljs.core.cst$kw$any,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43934__$1)].join('')));

}
})();
return taoensso.encore.swapped(new_m,(function (){var old_any = cljs.core.cst$kw$any.cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = cljs.core.cst$kw$any.cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_(old_any,uid))) && (cljs.core.contains_QMARK_(new_any,uid))){
return cljs.core.cst$kw$newly_DASH_connected;
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e43935){if((e43935 instanceof Error)){
var e = e43935;
return e;
} else {
throw e43935;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",375,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__43936){
var map__43937 = p__43936;
var map__43937__$1 = ((((!((map__43937 == null)))?((((map__43937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43937.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43937):map__43937);
var old_m = map__43937__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43937__$1,cljs.core.cst$kw$ws);
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43937__$1,cljs.core.cst$kw$ajax);
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43937__$1,cljs.core.cst$kw$any);
var conns_SINGLEQUOTE_ = cljs.core.deref(conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_(cljs.core.cst$kw$ws.cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_(cljs.core.cst$kw$ajax.cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,((any_ws_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ws,uid)),cljs.core.cst$kw$ajax,((any_ajax_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid)),cljs.core.cst$kw$any,((any_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(any,uid))], null);
return taoensso.encore.swapped(new_m,(function (){var old_any = cljs.core.cst$kw$any.cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = cljs.core.cst$kw$any.cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_(old_any,uid)) && (!(cljs.core.contains_QMARK_(new_any,uid)))){
return cljs.core.cst$kw$newly_DASH_disconnected;
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__44211__delegate = function (user_id,ev,p__43939){
var vec__43940 = p__43939;
var map__43943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43940,(0),null);
var map__43943__$1 = ((((!((map__43943 == null)))?((((map__43943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43943.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43943):map__43943);
var opts = map__43943__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43943__$1,cljs.core.cst$kw$flush_QMARK_);
var uid_44212 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_id,cljs.core.cst$kw$sente_SLASH_all_DASH_users_DASH_without_DASH_uid))?cljs.core.cst$kw$taoensso$sente_SLASH_nil_DASH_uid:user_id);
var __44213 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,401,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (uid_44212,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_44212,ev], null);
});})(uid_44212,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1627665737);
var __44214__$1 = (cljs.core.truth_(uid_44212)?null:(function(){throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join('')),"\n","uid"].join('')))})());
var __44215__$2 = taoensso.sente.assert_event(ev);
var ev_uuid_44216 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var flush_buffer_BANG__44217 = ((function (uid_44212,__44213,__44214__$1,__44215__$2,ev_uuid_44216,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type){
var temp__5457__auto__ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_44212,__44213,__44214__$1,__44215__$2,ev_uuid_44216,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__43945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_44212);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43945,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43945,(1),null);
if(cljs.core.contains_QMARK_(ev_uuids,ev_uuid_44216)){
return taoensso.encore.swapped(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,uid_44212),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_44212));
} else {
return taoensso.encore.swapped(m,null);
}
});})(uid_44212,__44213,__44214__$1,__44215__$2,ev_uuid_44216,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__5457__auto__)){
var pulled = temp__5457__auto__;
var vec__43948 = pulled;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43948,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43948,(1),null);
if(cljs.core.vector_QMARK_(buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",428,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_(ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",429,"(set? ev-uuids)",ev_uuids,null,null);
}

var buffered_evs_ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,buffered_evs);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,432,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (buffered_evs_ppstr,vec__43948,buffered_evs,ev_uuids,pulled,temp__5457__auto__,uid_44212,__44213,__44214__$1,__44215__$2,ev_uuid_44216,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s",buffered_evs_ppstr], null);
});})(buffered_evs_ppstr,vec__43948,buffered_evs,ev_uuids,pulled,temp__5457__auto__,uid_44212,__44213,__44214__$1,__44215__$2,ev_uuid_44216,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,408008276);

var G__43951 = conn_type;
var G__43951__$1 = (((G__43951 instanceof cljs.core.Keyword))?G__43951.fqn:null);
switch (G__43951__$1) {
case "ws":
return (taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4 ? taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4(conns_,uid_44212,buffered_evs_ppstr,upd_conn_BANG_) : taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_44212,buffered_evs_ppstr,upd_conn_BANG_));

break;
case "ajax":
return (taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,uid_44212,buffered_evs_ppstr) : taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_44212,buffered_evs_ppstr));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43951__$1)].join('')));

}
} else {
return null;
}
});})(uid_44212,__44213,__44214__$1,__44215__$2,ev_uuid_44216,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_close], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente",null,441,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (uid_44212,__44213,__44214__$1,__44215__$2,ev_uuid_44216,flush_buffer_BANG__44217,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_44212], null);
});})(uid_44212,__44213,__44214__$1,__44215__$2,ev_uuid_44216,flush_buffer_BANG__44217,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-199100465);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__44217(cljs.core.cst$kw$ws);

flush_buffer_BANG__44217(cljs.core.cst$kw$ajax);
} else {
}

var seq__43952_44219 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,uid_44212], null))));
var chunk__43953_44220 = null;
var count__43954_44221 = (0);
var i__43955_44222 = (0);
while(true){
if((i__43955_44222 < count__43954_44221)){
var vec__43956_44223 = chunk__43953_44220.cljs$core$IIndexed$_nth$arity$2(null,i__43955_44222);
var _QMARK_sch_44224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43956_44223,(0),null);
var _udt_44225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43956_44223,(1),null);
var temp__5457__auto___44226 = _QMARK_sch_44224;
if(cljs.core.truth_(temp__5457__auto___44226)){
var sch_44227 = temp__5457__auto___44226;
taoensso.sente.interfaces.sch_close_BANG_(sch_44227);
} else {
}

var G__44228 = seq__43952_44219;
var G__44229 = chunk__43953_44220;
var G__44230 = count__43954_44221;
var G__44231 = (i__43955_44222 + (1));
seq__43952_44219 = G__44228;
chunk__43953_44220 = G__44229;
count__43954_44221 = G__44230;
i__43955_44222 = G__44231;
continue;
} else {
var temp__5457__auto___44232 = cljs.core.seq(seq__43952_44219);
if(temp__5457__auto___44232){
var seq__43952_44233__$1 = temp__5457__auto___44232;
if(cljs.core.chunked_seq_QMARK_(seq__43952_44233__$1)){
var c__9739__auto___44234 = cljs.core.chunk_first(seq__43952_44233__$1);
var G__44235 = cljs.core.chunk_rest(seq__43952_44233__$1);
var G__44236 = c__9739__auto___44234;
var G__44237 = cljs.core.count(c__9739__auto___44234);
var G__44238 = (0);
seq__43952_44219 = G__44235;
chunk__43953_44220 = G__44236;
count__43954_44221 = G__44237;
i__43955_44222 = G__44238;
continue;
} else {
var vec__43959_44239 = cljs.core.first(seq__43952_44233__$1);
var _QMARK_sch_44240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43959_44239,(0),null);
var _udt_44241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43959_44239,(1),null);
var temp__5457__auto___44242__$1 = _QMARK_sch_44240;
if(cljs.core.truth_(temp__5457__auto___44242__$1)){
var sch_44243 = temp__5457__auto___44242__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_44243);
} else {
}

var G__44244 = cljs.core.next(seq__43952_44233__$1);
var G__44245 = null;
var G__44246 = (0);
var G__44247 = (0);
seq__43952_44219 = G__44244;
chunk__43953_44220 = G__44245;
count__43954_44221 = G__44246;
i__43955_44222 = G__44247;
continue;
}
} else {
}
}
break;
}

var seq__43962_44248 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ajax,uid_44212], null))));
var chunk__43963_44249 = null;
var count__43964_44250 = (0);
var i__43965_44251 = (0);
while(true){
if((i__43965_44251 < count__43964_44250)){
var vec__43966_44252 = chunk__43963_44249.cljs$core$IIndexed$_nth$arity$2(null,i__43965_44251);
var _QMARK_sch_44253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43966_44252,(0),null);
var _udt_44254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43966_44252,(1),null);
var temp__5457__auto___44255 = _QMARK_sch_44253;
if(cljs.core.truth_(temp__5457__auto___44255)){
var sch_44256 = temp__5457__auto___44255;
taoensso.sente.interfaces.sch_close_BANG_(sch_44256);
} else {
}

var G__44257 = seq__43962_44248;
var G__44258 = chunk__43963_44249;
var G__44259 = count__43964_44250;
var G__44260 = (i__43965_44251 + (1));
seq__43962_44248 = G__44257;
chunk__43963_44249 = G__44258;
count__43964_44250 = G__44259;
i__43965_44251 = G__44260;
continue;
} else {
var temp__5457__auto___44261 = cljs.core.seq(seq__43962_44248);
if(temp__5457__auto___44261){
var seq__43962_44262__$1 = temp__5457__auto___44261;
if(cljs.core.chunked_seq_QMARK_(seq__43962_44262__$1)){
var c__9739__auto___44263 = cljs.core.chunk_first(seq__43962_44262__$1);
var G__44264 = cljs.core.chunk_rest(seq__43962_44262__$1);
var G__44265 = c__9739__auto___44263;
var G__44266 = cljs.core.count(c__9739__auto___44263);
var G__44267 = (0);
seq__43962_44248 = G__44264;
chunk__43963_44249 = G__44265;
count__43964_44250 = G__44266;
i__43965_44251 = G__44267;
continue;
} else {
var vec__43969_44268 = cljs.core.first(seq__43962_44262__$1);
var _QMARK_sch_44269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43969_44268,(0),null);
var _udt_44270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43969_44268,(1),null);
var temp__5457__auto___44271__$1 = _QMARK_sch_44269;
if(cljs.core.truth_(temp__5457__auto___44271__$1)){
var sch_44272 = temp__5457__auto___44271__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_44272);
} else {
}

var G__44273 = cljs.core.next(seq__43962_44262__$1);
var G__44274 = null;
var G__44275 = (0);
var G__44276 = (0);
seq__43962_44248 = G__44273;
chunk__43963_44249 = G__44274;
count__43964_44250 = G__44275;
i__43965_44251 = G__44276;
continue;
}
} else {
}
}
break;
}
} else {
var seq__43972_44277 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,cljs.core.cst$kw$ajax], null));
var chunk__43973_44278 = null;
var count__43974_44279 = (0);
var i__43975_44280 = (0);
while(true){
if((i__43975_44280 < count__43974_44279)){
var conn_type_44281 = chunk__43973_44278.cljs$core$IIndexed$_nth$arity$2(null,i__43975_44280);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_44281,uid_44212], null),((function (seq__43972_44277,chunk__43973_44278,count__43974_44279,i__43975_44280,conn_type_44281,uid_44212,__44213,__44214__$1,__44215__$2,ev_uuid_44216,flush_buffer_BANG__44217,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_44216])], null);
} else {
var vec__43976 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43976,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43976,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_44216)], null);
}
});})(seq__43972_44277,chunk__43973_44278,count__43974_44279,i__43975_44280,conn_type_44281,uid_44212,__44213,__44214__$1,__44215__$2,ev_uuid_44216,flush_buffer_BANG__44217,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__44282 = seq__43972_44277;
var G__44283 = chunk__43973_44278;
var G__44284 = count__43974_44279;
var G__44285 = (i__43975_44280 + (1));
seq__43972_44277 = G__44282;
chunk__43973_44278 = G__44283;
count__43974_44279 = G__44284;
i__43975_44280 = G__44285;
continue;
} else {
var temp__5457__auto___44286 = cljs.core.seq(seq__43972_44277);
if(temp__5457__auto___44286){
var seq__43972_44287__$1 = temp__5457__auto___44286;
if(cljs.core.chunked_seq_QMARK_(seq__43972_44287__$1)){
var c__9739__auto___44288 = cljs.core.chunk_first(seq__43972_44287__$1);
var G__44289 = cljs.core.chunk_rest(seq__43972_44287__$1);
var G__44290 = c__9739__auto___44288;
var G__44291 = cljs.core.count(c__9739__auto___44288);
var G__44292 = (0);
seq__43972_44277 = G__44289;
chunk__43973_44278 = G__44290;
count__43974_44279 = G__44291;
i__43975_44280 = G__44292;
continue;
} else {
var conn_type_44293 = cljs.core.first(seq__43972_44287__$1);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_44293,uid_44212], null),((function (seq__43972_44277,chunk__43973_44278,count__43974_44279,i__43975_44280,conn_type_44293,seq__43972_44287__$1,temp__5457__auto___44286,uid_44212,__44213,__44214__$1,__44215__$2,ev_uuid_44216,flush_buffer_BANG__44217,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_44216])], null);
} else {
var vec__43979 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43979,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43979,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_44216)], null);
}
});})(seq__43972_44277,chunk__43973_44278,count__43974_44279,i__43975_44280,conn_type_44293,seq__43972_44287__$1,temp__5457__auto___44286,uid_44212,__44213,__44214__$1,__44215__$2,ev_uuid_44216,flush_buffer_BANG__44217,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__44294 = cljs.core.next(seq__43972_44287__$1);
var G__44295 = null;
var G__44296 = (0);
var G__44297 = (0);
seq__43972_44277 = G__44294;
chunk__43973_44278 = G__44295;
count__43974_44279 = G__44296;
i__43975_44280 = G__44297;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__44217(cljs.core.cst$kw$ws);

flush_buffer_BANG__44217(cljs.core.cst$kw$ajax);
} else {
var ws_timeout_44298 = cljs.core.async.timeout(send_buf_ms_ws);
var ajax_timeout_44299 = cljs.core.async.timeout(send_buf_ms_ajax);
var c__21958__auto___44300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto___44300,ws_timeout_44298,ajax_timeout_44299,uid_44212,__44213,__44214__$1,__44215__$2,ev_uuid_44216,flush_buffer_BANG__44217,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto___44300,ws_timeout_44298,ajax_timeout_44299,uid_44212,__44213,__44214__$1,__44215__$2,ev_uuid_44216,flush_buffer_BANG__44217,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_43986){
var state_val_43987 = (state_43986[(1)]);
if((state_val_43987 === (1))){
var state_43986__$1 = state_43986;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43986__$1,(2),ws_timeout_44298);
} else {
if((state_val_43987 === (2))){
var inst_43983 = (state_43986[(2)]);
var inst_43984 = flush_buffer_BANG__44217(cljs.core.cst$kw$ws);
var state_43986__$1 = (function (){var statearr_43988 = state_43986;
(statearr_43988[(7)] = inst_43983);

return statearr_43988;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43986__$1,inst_43984);
} else {
return null;
}
}
});})(c__21958__auto___44300,ws_timeout_44298,ajax_timeout_44299,uid_44212,__44213,__44214__$1,__44215__$2,ev_uuid_44216,flush_buffer_BANG__44217,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__21856__auto__,c__21958__auto___44300,ws_timeout_44298,ajax_timeout_44299,uid_44212,__44213,__44214__$1,__44215__$2,ev_uuid_44216,flush_buffer_BANG__44217,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__21857__auto__ = null;
var taoensso$sente$state_machine__21857__auto____0 = (function (){
var statearr_43989 = [null,null,null,null,null,null,null,null];
(statearr_43989[(0)] = taoensso$sente$state_machine__21857__auto__);

(statearr_43989[(1)] = (1));

return statearr_43989;
});
var taoensso$sente$state_machine__21857__auto____1 = (function (state_43986){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_43986);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e43990){if((e43990 instanceof Object)){
var ex__21860__auto__ = e43990;
var statearr_43991_44301 = state_43986;
(statearr_43991_44301[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43986);

return cljs.core.cst$kw$recur;
} else {
throw e43990;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__44302 = state_43986;
state_43986 = G__44302;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
taoensso$sente$state_machine__21857__auto__ = function(state_43986){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__21857__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__21857__auto____1.call(this,state_43986);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__21857__auto____0;
taoensso$sente$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__21857__auto____1;
return taoensso$sente$state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto___44300,ws_timeout_44298,ajax_timeout_44299,uid_44212,__44213,__44214__$1,__44215__$2,ev_uuid_44216,flush_buffer_BANG__44217,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__21960__auto__ = (function (){var statearr_43992 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_43992[(6)] = c__21958__auto___44300);

return statearr_43992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto___44300,ws_timeout_44298,ajax_timeout_44299,uid_44212,__44213,__44214__$1,__44215__$2,ev_uuid_44216,flush_buffer_BANG__44217,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__21958__auto___44303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto___44303,ws_timeout_44298,ajax_timeout_44299,uid_44212,__44213,__44214__$1,__44215__$2,ev_uuid_44216,flush_buffer_BANG__44217,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto___44303,ws_timeout_44298,ajax_timeout_44299,uid_44212,__44213,__44214__$1,__44215__$2,ev_uuid_44216,flush_buffer_BANG__44217,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_43997){
var state_val_43998 = (state_43997[(1)]);
if((state_val_43998 === (1))){
var state_43997__$1 = state_43997;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43997__$1,(2),ajax_timeout_44299);
} else {
if((state_val_43998 === (2))){
var inst_43994 = (state_43997[(2)]);
var inst_43995 = flush_buffer_BANG__44217(cljs.core.cst$kw$ajax);
var state_43997__$1 = (function (){var statearr_43999 = state_43997;
(statearr_43999[(7)] = inst_43994);

return statearr_43999;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43997__$1,inst_43995);
} else {
return null;
}
}
});})(c__21958__auto___44303,ws_timeout_44298,ajax_timeout_44299,uid_44212,__44213,__44214__$1,__44215__$2,ev_uuid_44216,flush_buffer_BANG__44217,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__21856__auto__,c__21958__auto___44303,ws_timeout_44298,ajax_timeout_44299,uid_44212,__44213,__44214__$1,__44215__$2,ev_uuid_44216,flush_buffer_BANG__44217,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__21857__auto__ = null;
var taoensso$sente$state_machine__21857__auto____0 = (function (){
var statearr_44000 = [null,null,null,null,null,null,null,null];
(statearr_44000[(0)] = taoensso$sente$state_machine__21857__auto__);

(statearr_44000[(1)] = (1));

return statearr_44000;
});
var taoensso$sente$state_machine__21857__auto____1 = (function (state_43997){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_43997);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e44001){if((e44001 instanceof Object)){
var ex__21860__auto__ = e44001;
var statearr_44002_44304 = state_43997;
(statearr_44002_44304[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43997);

return cljs.core.cst$kw$recur;
} else {
throw e44001;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__44305 = state_43997;
state_43997 = G__44305;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
taoensso$sente$state_machine__21857__auto__ = function(state_43997){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__21857__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__21857__auto____1.call(this,state_43997);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__21857__auto____0;
taoensso$sente$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__21857__auto____1;
return taoensso$sente$state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto___44303,ws_timeout_44298,ajax_timeout_44299,uid_44212,__44213,__44214__$1,__44215__$2,ev_uuid_44216,flush_buffer_BANG__44217,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__21960__auto__ = (function (){var statearr_44003 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_44003[(6)] = c__21958__auto___44303);

return statearr_44003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto___44303,ws_timeout_44298,ajax_timeout_44299,uid_44212,__44213,__44214__$1,__44215__$2,ev_uuid_44216,flush_buffer_BANG__44217,vec__43940,map__43943,map__43943__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}
}

return null;
};
var G__44211 = function (user_id,ev,var_args){
var p__43939 = null;
if (arguments.length > 2) {
var G__44306__i = 0, G__44306__a = new Array(arguments.length -  2);
while (G__44306__i < G__44306__a.length) {G__44306__a[G__44306__i] = arguments[G__44306__i + 2]; ++G__44306__i;}
  p__43939 = new cljs.core.IndexedSeq(G__44306__a,0,null);
} 
return G__44211__delegate.call(this,user_id,ev,p__43939);};
G__44211.cljs$lang$maxFixedArity = 2;
G__44211.cljs$lang$applyTo = (function (arglist__44307){
var user_id = cljs.core.first(arglist__44307);
arglist__44307 = cljs.core.next(arglist__44307);
var ev = cljs.core.first(arglist__44307);
var p__43939 = cljs.core.rest(arglist__44307);
return G__44211__delegate(user_id,ev,p__43939);
});
G__44211.cljs$core$IFn$_invoke$arity$variadic = G__44211__delegate;
return G__44211;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ch_DASH_recv,ch_recv,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$connected_DASH_uids,connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ch_DASH_recv,ch_recv,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$connected_DASH_uids,connected_uids_,cljs.core.cst$kw$ajax_DASH_post_DASH_fn,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_open,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,cljs.core.cst$kw$params);
var ppstr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$ppstr);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$client_DASH_id);
var vec__44004 = taoensso.sente.unpack(packer__$1,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44004,(0),null);
var has_cb_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44004,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__44004,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (resp_clj){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(replied_QMARK__,false,true))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,510,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__44004,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__44004,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1167063465);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__44004,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$ring_DASH_req,ring_req,cljs.core.cst$kw$event,clj,cljs.core.cst$kw$uid,user_id_fn__$1(ring_req,client_id),cljs.core.cst$kw$_QMARK_reply_DASH_fn,(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)], 0)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__5457__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5457__auto__)){
var ms = temp__5457__auto__;
var c__21958__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto__,ms,temp__5457__auto__,params,ppstr,client_id,vec__44004,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto__,ms,temp__5457__auto__,params,ppstr,client_id,vec__44004,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_44012){
var state_val_44013 = (state_44012[(1)]);
if((state_val_44013 === (1))){
var inst_44007 = cljs.core.async.timeout(ms);
var state_44012__$1 = state_44012;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44012__$1,(2),inst_44007);
} else {
if((state_val_44013 === (2))){
var inst_44009 = (state_44012[(2)]);
var inst_44010 = (function (){var G__44014 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (reply_fn.cljs$core$IFn$_invoke$arity$1 ? reply_fn.cljs$core$IFn$_invoke$arity$1(G__44014) : reply_fn.call(null,G__44014));
})();
var state_44012__$1 = (function (){var statearr_44015 = state_44012;
(statearr_44015[(7)] = inst_44009);

return statearr_44015;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44012__$1,inst_44010);
} else {
return null;
}
}
});})(c__21958__auto__,ms,temp__5457__auto__,params,ppstr,client_id,vec__44004,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__21856__auto__,c__21958__auto__,ms,temp__5457__auto__,params,ppstr,client_id,vec__44004,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__21857__auto__ = null;
var taoensso$sente$state_machine__21857__auto____0 = (function (){
var statearr_44016 = [null,null,null,null,null,null,null,null];
(statearr_44016[(0)] = taoensso$sente$state_machine__21857__auto__);

(statearr_44016[(1)] = (1));

return statearr_44016;
});
var taoensso$sente$state_machine__21857__auto____1 = (function (state_44012){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_44012);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e44017){if((e44017 instanceof Object)){
var ex__21860__auto__ = e44017;
var statearr_44018_44308 = state_44012;
(statearr_44018_44308[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44012);

return cljs.core.cst$kw$recur;
} else {
throw e44017;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__44309 = state_44012;
state_44012 = G__44309;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
taoensso$sente$state_machine__21857__auto__ = function(state_44012){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__21857__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__21857__auto____1.call(this,state_44012);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__21857__auto____0;
taoensso$sente$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__21857__auto____1;
return taoensso$sente$state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto__,ms,temp__5457__auto__,params,ppstr,client_id,vec__44004,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__21960__auto__ = (function (){var statearr_44019 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_44019[(6)] = c__21958__auto__);

return statearr_44019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto__,ms,temp__5457__auto__,params,ppstr,client_id,vec__44004,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__21958__auto__;
} else {
return null;
}
} else {
var G__44020 = cljs.core.cst$kw$chsk_SLASH_dummy_DASH_cb_DASH_200;
return (reply_fn.cljs$core$IFn$_invoke$arity$1 ? reply_fn.cljs$core$IFn$_invoke$arity$1(G__44020) : reply_fn.call(null,G__44020));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,cljs.core.cst$kw$ajax_DASH_get_DASH_or_DASH_ws_DASH_handshake_DASH_fn,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,cljs.core.cst$kw$params);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$client_DASH_id);
var csrf_token = (csrf_token_fn.cljs$core$IFn$_invoke$arity$1 ? csrf_token_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : csrf_token_fn.call(null,ring_req));
var uid = user_id_fn__$1(ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.cljs$core$IFn$_invoke$arity$2(event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$ring_DASH_req,ring_req,cljs.core.cst$kw$event,event,cljs.core.cst$kw$_QMARK_reply_DASH_fn,_QMARK_reply_fn,cljs.core.cst$kw$uid,uid], null)], 0)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,555,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1649801923);

var _QMARK_handshake_data = (handshake_data_fn.cljs$core$IFn$_invoke$arity$1 ? handshake_data_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : handshake_data_fn.call(null,ring_req));
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_(client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente",null,566,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(err_msg),": %s"].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,966454101);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_msg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ring_DASH_req,ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_open,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,575,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1959394961);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$ws,uid,client_id,server_ch);
var udt_open = cljs.core.cst$kw$udt.cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_(cljs.core.cst$kw$ws,uid))){
receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_uidport_DASH_open,uid], null));
} else {
}

send_handshake_BANG_(server_ch,websocket_QMARK_);

var temp__5457__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__5457__auto__)){
var ms = temp__5457__auto__;
var c__21958__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_44056){
var state_val_44057 = (state_44056[(1)]);
if((state_val_44057 === (7))){
var inst_44052 = (state_44056[(2)]);
var state_44056__$1 = state_44056;
var statearr_44058_44310 = state_44056__$1;
(statearr_44058_44310[(2)] = inst_44052);

(statearr_44058_44310[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44057 === (1))){
var inst_44021 = udt_open;
var state_44056__$1 = (function (){var statearr_44059 = state_44056;
(statearr_44059[(7)] = inst_44021);

return statearr_44059;
})();
var statearr_44060_44311 = state_44056__$1;
(statearr_44060_44311[(2)] = null);

(statearr_44060_44311[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44057 === (4))){
var inst_44030 = (state_44056[(8)]);
var inst_44025 = (state_44056[(2)]);
var inst_44026 = cljs.core.deref(conns_);
var inst_44027 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44028 = [cljs.core.cst$kw$ws,uid,client_id];
var inst_44029 = (new cljs.core.PersistentVector(null,3,(5),inst_44027,inst_44028,null));
var inst_44030__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_44026,inst_44029);
var state_44056__$1 = (function (){var statearr_44061 = state_44056;
(statearr_44061[(9)] = inst_44025);

(statearr_44061[(8)] = inst_44030__$1);

return statearr_44061;
})();
if(cljs.core.truth_(inst_44030__$1)){
var statearr_44062_44312 = state_44056__$1;
(statearr_44062_44312[(1)] = (5));

} else {
var statearr_44063_44313 = state_44056__$1;
(statearr_44063_44313[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44057 === (13))){
var inst_44036 = (state_44056[(10)]);
var inst_44045 = (state_44056[(2)]);
var inst_44021 = inst_44036;
var state_44056__$1 = (function (){var statearr_44064 = state_44056;
(statearr_44064[(7)] = inst_44021);

(statearr_44064[(11)] = inst_44045);

return statearr_44064;
})();
var statearr_44065_44314 = state_44056__$1;
(statearr_44065_44314[(2)] = null);

(statearr_44065_44314[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44057 === (6))){
var state_44056__$1 = state_44056;
var statearr_44066_44315 = state_44056__$1;
(statearr_44066_44315[(2)] = null);

(statearr_44066_44315[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44057 === (3))){
var inst_44054 = (state_44056[(2)]);
var state_44056__$1 = state_44056;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44056__$1,inst_44054);
} else {
if((state_val_44057 === (12))){
var state_44056__$1 = state_44056;
var statearr_44067_44316 = state_44056__$1;
(statearr_44067_44316[(2)] = null);

(statearr_44067_44316[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44057 === (2))){
var inst_44023 = cljs.core.async.timeout(ms);
var state_44056__$1 = state_44056;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44056__$1,(4),inst_44023);
} else {
if((state_val_44057 === (11))){
var inst_44041 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping);
var inst_44042 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_44041);
var state_44056__$1 = state_44056;
var statearr_44068_44317 = state_44056__$1;
(statearr_44068_44317[(2)] = inst_44042);

(statearr_44068_44317[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44057 === (9))){
var state_44056__$1 = state_44056;
var statearr_44069_44318 = state_44056__$1;
(statearr_44069_44318[(2)] = null);

(statearr_44069_44318[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44057 === (5))){
var inst_44030 = (state_44056[(8)]);
var inst_44035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44030,(0),null);
var inst_44036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44030,(1),null);
var inst_44037 = taoensso.sente.interfaces.sch_open_QMARK_(server_ch);
var state_44056__$1 = (function (){var statearr_44070 = state_44056;
(statearr_44070[(12)] = inst_44035);

(statearr_44070[(10)] = inst_44036);

return statearr_44070;
})();
if(cljs.core.truth_(inst_44037)){
var statearr_44071_44319 = state_44056__$1;
(statearr_44071_44319[(1)] = (8));

} else {
var statearr_44072_44320 = state_44056__$1;
(statearr_44072_44320[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44057 === (10))){
var inst_44049 = (state_44056[(2)]);
var state_44056__$1 = state_44056;
var statearr_44073_44321 = state_44056__$1;
(statearr_44073_44321[(2)] = inst_44049);

(statearr_44073_44321[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44057 === (8))){
var inst_44021 = (state_44056[(7)]);
var inst_44036 = (state_44056[(10)]);
var inst_44039 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44036,inst_44021);
var state_44056__$1 = state_44056;
if(inst_44039){
var statearr_44074_44322 = state_44056__$1;
(statearr_44074_44322[(1)] = (11));

} else {
var statearr_44075_44323 = state_44056__$1;
(statearr_44075_44323[(1)] = (12));

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
});})(c__21958__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__21856__auto__,c__21958__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__21857__auto__ = null;
var taoensso$sente$state_machine__21857__auto____0 = (function (){
var statearr_44076 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44076[(0)] = taoensso$sente$state_machine__21857__auto__);

(statearr_44076[(1)] = (1));

return statearr_44076;
});
var taoensso$sente$state_machine__21857__auto____1 = (function (state_44056){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_44056);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e44077){if((e44077 instanceof Object)){
var ex__21860__auto__ = e44077;
var statearr_44078_44324 = state_44056;
(statearr_44078_44324[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44056);

return cljs.core.cst$kw$recur;
} else {
throw e44077;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__44325 = state_44056;
state_44056 = G__44325;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
taoensso$sente$state_machine__21857__auto__ = function(state_44056){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__21857__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__21857__auto____1.call(this,state_44056);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__21857__auto____0;
taoensso$sente$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__21857__auto____1;
return taoensso$sente$state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__21960__auto__ = (function (){var statearr_44079 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_44079[(6)] = c__21958__auto__);

return statearr_44079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__21958__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,604,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1784018267);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$ajax,uid,client_id,server_ch);
var udt_open = cljs.core.cst$kw$udt.cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__8808__auto__ = cljs.core.cst$kw$init_QMARK_.cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.cst$kw$handshake_QMARK_.cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_(cljs.core.cst$kw$ajax,uid))){
receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_uidport_DASH_open,uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_(server_ch,websocket_QMARK_);
} else {
var temp__5457__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5457__auto__)){
var ms = temp__5457__auto__;
var c__21958__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_44105){
var state_val_44106 = (state_44105[(1)]);
if((state_val_44106 === (1))){
var inst_44080 = cljs.core.async.timeout(ms);
var state_44105__$1 = state_44105;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44105__$1,(2),inst_44080);
} else {
if((state_val_44106 === (2))){
var inst_44087 = (state_44105[(7)]);
var inst_44082 = (state_44105[(2)]);
var inst_44083 = cljs.core.deref(conns_);
var inst_44084 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44085 = [cljs.core.cst$kw$ajax,uid,client_id];
var inst_44086 = (new cljs.core.PersistentVector(null,3,(5),inst_44084,inst_44085,null));
var inst_44087__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_44083,inst_44086);
var state_44105__$1 = (function (){var statearr_44107 = state_44105;
(statearr_44107[(7)] = inst_44087__$1);

(statearr_44107[(8)] = inst_44082);

return statearr_44107;
})();
if(cljs.core.truth_(inst_44087__$1)){
var statearr_44108_44326 = state_44105__$1;
(statearr_44108_44326[(1)] = (3));

} else {
var statearr_44109_44327 = state_44105__$1;
(statearr_44109_44327[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44106 === (3))){
var inst_44087 = (state_44105[(7)]);
var inst_44092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44087,(0),null);
var inst_44093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44087,(1),null);
var inst_44094 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44093,udt_open);
var state_44105__$1 = (function (){var statearr_44110 = state_44105;
(statearr_44110[(9)] = inst_44092);

return statearr_44110;
})();
if(inst_44094){
var statearr_44111_44328 = state_44105__$1;
(statearr_44111_44328[(1)] = (6));

} else {
var statearr_44112_44329 = state_44105__$1;
(statearr_44112_44329[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44106 === (4))){
var state_44105__$1 = state_44105;
var statearr_44113_44330 = state_44105__$1;
(statearr_44113_44330[(2)] = null);

(statearr_44113_44330[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44106 === (5))){
var inst_44103 = (state_44105[(2)]);
var state_44105__$1 = state_44105;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44105__$1,inst_44103);
} else {
if((state_val_44106 === (6))){
var inst_44096 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,cljs.core.cst$kw$chsk_SLASH_timeout);
var inst_44097 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_44096);
var state_44105__$1 = state_44105;
var statearr_44114_44331 = state_44105__$1;
(statearr_44114_44331[(2)] = inst_44097);

(statearr_44114_44331[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44106 === (7))){
var state_44105__$1 = state_44105;
var statearr_44115_44332 = state_44105__$1;
(statearr_44115_44332[(2)] = null);

(statearr_44115_44332[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44106 === (8))){
var inst_44100 = (state_44105[(2)]);
var state_44105__$1 = state_44105;
var statearr_44116_44333 = state_44105__$1;
(statearr_44116_44333[(2)] = inst_44100);

(statearr_44116_44333[(1)] = (5));


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
});})(c__21958__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__21856__auto__,c__21958__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__21857__auto__ = null;
var taoensso$sente$state_machine__21857__auto____0 = (function (){
var statearr_44117 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44117[(0)] = taoensso$sente$state_machine__21857__auto__);

(statearr_44117[(1)] = (1));

return statearr_44117;
});
var taoensso$sente$state_machine__21857__auto____1 = (function (state_44105){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_44105);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e44118){if((e44118 instanceof Object)){
var ex__21860__auto__ = e44118;
var statearr_44119_44334 = state_44105;
(statearr_44119_44334[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44105);

return cljs.core.cst$kw$recur;
} else {
throw e44118;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__44335 = state_44105;
state_44105 = G__44335;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
taoensso$sente$state_machine__21857__auto__ = function(state_44105){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__21857__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__21857__auto____1.call(this,state_44105);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__21857__auto____0;
taoensso$sente$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__21857__auto____1;
return taoensso$sente$state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__21960__auto__ = (function (){var statearr_44120 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_44120[(6)] = c__21958__auto__);

return statearr_44120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__21958__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,cljs.core.cst$kw$on_DASH_msg,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$ws,uid,client_id);

var vec__44121 = taoensso.sente.unpack(packer__$1,req_ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44121,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44121,(1),null);
return receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$2(clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__44121,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,634,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__44121,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__44121,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1532300106);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,resp_clj,_QMARK_cb_uuid));
});})(vec__44121,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,cljs.core.cst$kw$on_DASH_close,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?cljs.core.cst$kw$ws:cljs.core.cst$kw$ajax);
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,643,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,2138556296);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(conn_type,uid,client_id,null);
var udt_close = cljs.core.cst$kw$udt.cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__21958__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_44175){
var state_val_44176 = (state_44175[(1)]);
if((state_val_44176 === (7))){
var state_44175__$1 = state_44175;
var statearr_44177_44336 = state_44175__$1;
(statearr_44177_44336[(2)] = null);

(statearr_44177_44336[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44176 === (1))){
var inst_44124 = cljs.core.async.timeout((5000));
var state_44175__$1 = state_44175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44175__$1,(2),inst_44124);
} else {
if((state_val_44176 === (4))){
var state_44175__$1 = state_44175;
var statearr_44178_44337 = state_44175__$1;
(statearr_44178_44337[(2)] = null);

(statearr_44178_44337[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44176 === (13))){
var state_44175__$1 = state_44175;
var statearr_44179_44338 = state_44175__$1;
(statearr_44179_44338[(2)] = null);

(statearr_44179_44338[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44176 === (6))){
var inst_44136 = (state_44175[(7)]);
var inst_44135 = (state_44175[(8)]);
var inst_44134 = (state_44175[(9)]);
var inst_44152 = (state_44175[(10)]);
var inst_44147 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44148 = [conn_type,uid,client_id];
var inst_44149 = (new cljs.core.PersistentVector(null,3,(5),inst_44147,inst_44148,null));
var inst_44151 = (function (){var vec__44127 = inst_44134;
var __QMARK_sch = inst_44135;
var udt_t1 = inst_44136;
return ((function (vec__44127,__QMARK_sch,udt_t1,inst_44136,inst_44135,inst_44134,inst_44152,inst_44147,inst_44148,inst_44149,state_val_44176,c__21958__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__44150){
var vec__44180 = p__44150;
var _sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44180,(0),null);
var udt_t1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44180,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1__$1,udt_close)){
return taoensso.encore.swapped(cljs.core.cst$kw$swap_SLASH_dissoc,true);
} else {
return taoensso.encore.swapped(udt_t1__$1,false);
}
});
;})(vec__44127,__QMARK_sch,udt_t1,inst_44136,inst_44135,inst_44134,inst_44152,inst_44147,inst_44148,inst_44149,state_val_44176,c__21958__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_44152__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_44149,inst_44151);
var state_44175__$1 = (function (){var statearr_44183 = state_44175;
(statearr_44183[(10)] = inst_44152__$1);

return statearr_44183;
})();
if(cljs.core.truth_(inst_44152__$1)){
var statearr_44184_44339 = state_44175__$1;
(statearr_44184_44339[(1)] = (9));

} else {
var statearr_44185_44340 = state_44175__$1;
(statearr_44185_44340[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44176 === (3))){
var inst_44136 = (state_44175[(7)]);
var inst_44135 = (state_44175[(8)]);
var inst_44134 = (state_44175[(9)]);
var inst_44139 = (function (){var vec__44127 = inst_44134;
var __QMARK_sch = inst_44135;
var udt_t1 = inst_44136;
return ((function (vec__44127,__QMARK_sch,udt_t1,inst_44136,inst_44135,inst_44134,state_val_44176,c__21958__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__44127,__QMARK_sch,udt_t1,inst_44136,inst_44135,inst_44134,state_val_44176,c__21958__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_44140 = (new cljs.core.Delay(inst_44139,null));
var inst_44141 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente",null,657,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,inst_44140,null,949860983);
var state_44175__$1 = state_44175;
var statearr_44186_44341 = state_44175__$1;
(statearr_44186_44341[(2)] = inst_44141);

(statearr_44186_44341[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44176 === (12))){
var inst_44161 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44162 = [cljs.core.cst$kw$chsk_SLASH_uidport_DASH_close,uid];
var inst_44163 = (new cljs.core.PersistentVector(null,2,(5),inst_44161,inst_44162,null));
var inst_44164 = receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(inst_44163);
var state_44175__$1 = state_44175;
var statearr_44187_44342 = state_44175__$1;
(statearr_44187_44342[(2)] = inst_44164);

(statearr_44187_44342[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44176 === (2))){
var inst_44134 = (state_44175[(9)]);
var inst_44126 = (state_44175[(2)]);
var inst_44130 = cljs.core.deref(conns_);
var inst_44131 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44132 = [conn_type,uid,client_id];
var inst_44133 = (new cljs.core.PersistentVector(null,3,(5),inst_44131,inst_44132,null));
var inst_44134__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_44130,inst_44133);
var inst_44135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44134__$1,(0),null);
var inst_44136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44134__$1,(1),null);
var inst_44137 = cljs.core.deref(taoensso.sente.debug_mode_QMARK__);
var state_44175__$1 = (function (){var statearr_44188 = state_44175;
(statearr_44188[(7)] = inst_44136);

(statearr_44188[(8)] = inst_44135);

(statearr_44188[(9)] = inst_44134__$1);

(statearr_44188[(11)] = inst_44126);

return statearr_44188;
})();
if(cljs.core.truth_(inst_44137)){
var statearr_44189_44343 = state_44175__$1;
(statearr_44189_44343[(1)] = (3));

} else {
var statearr_44190_44344 = state_44175__$1;
(statearr_44190_44344[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44176 === (11))){
var inst_44170 = (state_44175[(2)]);
var state_44175__$1 = state_44175;
var statearr_44191_44345 = state_44175__$1;
(statearr_44191_44345[(2)] = inst_44170);

(statearr_44191_44345[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44176 === (9))){
var inst_44136 = (state_44175[(7)]);
var inst_44135 = (state_44175[(8)]);
var inst_44134 = (state_44175[(9)]);
var inst_44152 = (state_44175[(10)]);
var inst_44154 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44155 = [conn_type,uid];
var inst_44156 = (new cljs.core.PersistentVector(null,2,(5),inst_44154,inst_44155,null));
var inst_44157 = (function (){var vec__44127 = inst_44134;
var __QMARK_sch = inst_44135;
var udt_t1 = inst_44136;
var disconnect_QMARK_ = inst_44152;
return ((function (vec__44127,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_44136,inst_44135,inst_44134,inst_44152,inst_44154,inst_44155,inst_44156,state_val_44176,c__21958__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_(_QMARK_m)){
return cljs.core.cst$kw$swap_SLASH_dissoc;
} else {
return _QMARK_m;
}
});
;})(vec__44127,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_44136,inst_44135,inst_44134,inst_44152,inst_44154,inst_44155,inst_44156,state_val_44176,c__21958__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_44158 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_44156,inst_44157);
var inst_44159 = upd_connected_uid_BANG_(uid);
var state_44175__$1 = (function (){var statearr_44192 = state_44175;
(statearr_44192[(12)] = inst_44158);

return statearr_44192;
})();
if(cljs.core.truth_(inst_44159)){
var statearr_44193_44346 = state_44175__$1;
(statearr_44193_44346[(1)] = (12));

} else {
var statearr_44194_44347 = state_44175__$1;
(statearr_44194_44347[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44176 === (5))){
var inst_44136 = (state_44175[(7)]);
var inst_44144 = (state_44175[(2)]);
var inst_44145 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44136,udt_close);
var state_44175__$1 = (function (){var statearr_44195 = state_44175;
(statearr_44195[(13)] = inst_44144);

return statearr_44195;
})();
if(inst_44145){
var statearr_44196_44348 = state_44175__$1;
(statearr_44196_44348[(1)] = (6));

} else {
var statearr_44197_44349 = state_44175__$1;
(statearr_44197_44349[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44176 === (14))){
var inst_44167 = (state_44175[(2)]);
var state_44175__$1 = state_44175;
var statearr_44198_44350 = state_44175__$1;
(statearr_44198_44350[(2)] = inst_44167);

(statearr_44198_44350[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44176 === (10))){
var state_44175__$1 = state_44175;
var statearr_44199_44351 = state_44175__$1;
(statearr_44199_44351[(2)] = null);

(statearr_44199_44351[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44176 === (8))){
var inst_44173 = (state_44175[(2)]);
var state_44175__$1 = state_44175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44175__$1,inst_44173);
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
});})(c__21958__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__21856__auto__,c__21958__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__21857__auto__ = null;
var taoensso$sente$state_machine__21857__auto____0 = (function (){
var statearr_44200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44200[(0)] = taoensso$sente$state_machine__21857__auto__);

(statearr_44200[(1)] = (1));

return statearr_44200;
});
var taoensso$sente$state_machine__21857__auto____1 = (function (state_44175){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_44175);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e44201){if((e44201 instanceof Object)){
var ex__21860__auto__ = e44201;
var statearr_44202_44352 = state_44175;
(statearr_44202_44352[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44175);

return cljs.core.cst$kw$recur;
} else {
throw e44201;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__44353 = state_44175;
state_44175 = G__44353;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
taoensso$sente$state_machine__21857__auto__ = function(state_44175){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__21857__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__21857__auto____1.call(this,state_44175);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__21857__auto____0;
taoensso$sente$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__21857__auto____1;
return taoensso$sente$state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__21960__auto__ = (function (){var statearr_44203 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_44203[(6)] = c__21958__auto__);

return statearr_44203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__21958__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,cljs.core.cst$kw$on_DASH_error,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente",null,679,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1807063133);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43914,map__43917,map__43917__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq43911){
var G__43912 = cljs.core.first(seq43911);
var seq43911__$1 = cljs.core.next(seq43911);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43912,seq43911__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,685,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,837241056);

var seq__44354 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,uid], null)));
var chunk__44355 = null;
var count__44356 = (0);
var i__44357 = (0);
while(true){
if((i__44357 < count__44356)){
var vec__44358 = chunk__44355.cljs$core$IIndexed$_nth$arity$2(null,i__44357);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44358,(0),null);
var vec__44361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44358,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44361,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44361,(1),null);
var temp__5457__auto___44376 = _QMARK_sch;
if(cljs.core.truth_(temp__5457__auto___44376)){
var sch_44377 = temp__5457__auto___44376;
var G__44364_44378 = cljs.core.cst$kw$ws;
var G__44365_44379 = uid;
var G__44366_44380 = client_id;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(G__44364_44378,G__44365_44379,G__44366_44380) : upd_conn_BANG_.call(null,G__44364_44378,G__44365_44379,G__44366_44380));

taoensso.sente.interfaces.sch_send_BANG_(sch_44377,cljs.core.cst$kw$websocket,buffered_evs_pstr);
} else {
}

var G__44381 = seq__44354;
var G__44382 = chunk__44355;
var G__44383 = count__44356;
var G__44384 = (i__44357 + (1));
seq__44354 = G__44381;
chunk__44355 = G__44382;
count__44356 = G__44383;
i__44357 = G__44384;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__44354);
if(temp__5457__auto__){
var seq__44354__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44354__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__44354__$1);
var G__44385 = cljs.core.chunk_rest(seq__44354__$1);
var G__44386 = c__9739__auto__;
var G__44387 = cljs.core.count(c__9739__auto__);
var G__44388 = (0);
seq__44354 = G__44385;
chunk__44355 = G__44386;
count__44356 = G__44387;
i__44357 = G__44388;
continue;
} else {
var vec__44367 = cljs.core.first(seq__44354__$1);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44367,(0),null);
var vec__44370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44367,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44370,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44370,(1),null);
var temp__5457__auto___44389__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__5457__auto___44389__$1)){
var sch_44390 = temp__5457__auto___44389__$1;
var G__44373_44391 = cljs.core.cst$kw$ws;
var G__44374_44392 = uid;
var G__44375_44393 = client_id;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(G__44373_44391,G__44374_44392,G__44375_44393) : upd_conn_BANG_.call(null,G__44373_44391,G__44374_44392,G__44375_44393));

taoensso.sente.interfaces.sch_send_BANG_(sch_44390,cljs.core.cst$kw$websocket,buffered_evs_pstr);
} else {
}

var G__44394 = cljs.core.next(seq__44354__$1);
var G__44395 = null;
var G__44396 = (0);
var G__44397 = (0);
seq__44354 = G__44394;
chunk__44355 = G__44395;
count__44356 = G__44396;
i__44357 = G__44397;
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
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,695,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,1613877616);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ajax,uid], null)));
if(cljs.core.empty_QMARK_(client_ids_unsatisfied)){
return null;
} else {
var c__21958__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_44444){
var state_val_44445 = (state_44444[(1)]);
if((state_val_44445 === (7))){
var inst_44400 = (state_44444[(7)]);
var inst_44406 = (state_44444[(8)]);
var inst_44399 = (state_44444[(9)]);
var inst_44416 = (function (){var n = inst_44399;
var client_ids_satisfied = inst_44400;
var _QMARK_pulled = inst_44406;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_44400,inst_44406,inst_44399,state_val_44445,c__21958__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__44415){
var vec__44446 = p__44415;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44446,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44446,(1),null);
var sent_QMARK_ = (function (){var temp__5457__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__5457__auto__)){
var sch = temp__5457__auto__;
return taoensso.sente.interfaces.sch_send_BANG_(_QMARK_sch,cljs.core.not(cljs.core.cst$kw$websocket),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,client_id);
} else {
return s;
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_44400,inst_44406,inst_44399,state_val_44445,c__21958__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_44417 = cljs.core.PersistentHashSet.EMPTY;
var inst_44418 = cljs.core.reduce_kv(inst_44416,inst_44417,inst_44406);
var state_44444__$1 = state_44444;
var statearr_44449_44481 = state_44444__$1;
(statearr_44449_44481[(2)] = inst_44418);

(statearr_44449_44481[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44445 === (1))){
var inst_44398 = cljs.core.PersistentHashSet.EMPTY;
var inst_44399 = (0);
var inst_44400 = inst_44398;
var state_44444__$1 = (function (){var statearr_44450 = state_44444;
(statearr_44450[(7)] = inst_44400);

(statearr_44450[(9)] = inst_44399);

return statearr_44450;
})();
var statearr_44451_44482 = state_44444__$1;
(statearr_44451_44482[(2)] = null);

(statearr_44451_44482[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44445 === (4))){
var state_44444__$1 = state_44444;
var statearr_44452_44483 = state_44444__$1;
(statearr_44452_44483[(2)] = true);

(statearr_44452_44483[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44445 === (15))){
var inst_44437 = (state_44444[(2)]);
var state_44444__$1 = state_44444;
var statearr_44453_44484 = state_44444__$1;
(statearr_44453_44484[(2)] = inst_44437);

(statearr_44453_44484[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44445 === (13))){
var inst_44423 = (state_44444[(10)]);
var inst_44428 = cljs.core.rand_int(inst_44423);
var inst_44429 = (inst_44423 + inst_44428);
var inst_44430 = cljs.core.async.timeout(inst_44429);
var state_44444__$1 = state_44444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44444__$1,(16),inst_44430);
} else {
if((state_val_44445 === (6))){
var inst_44406 = (state_44444[(8)]);
var inst_44413 = (state_44444[(2)]);
var state_44444__$1 = (function (){var statearr_44454 = state_44444;
(statearr_44454[(11)] = inst_44413);

return statearr_44454;
})();
if(cljs.core.truth_(inst_44406)){
var statearr_44455_44485 = state_44444__$1;
(statearr_44455_44485[(1)] = (7));

} else {
var statearr_44456_44486 = state_44444__$1;
(statearr_44456_44486[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44445 === (3))){
var inst_44442 = (state_44444[(2)]);
var state_44444__$1 = state_44444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44444__$1,inst_44442);
} else {
if((state_val_44445 === (12))){
var inst_44440 = (state_44444[(2)]);
var state_44444__$1 = state_44444;
var statearr_44457_44487 = state_44444__$1;
(statearr_44457_44487[(2)] = inst_44440);

(statearr_44457_44487[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44445 === (2))){
var inst_44400 = (state_44444[(7)]);
var inst_44406 = (state_44444[(8)]);
var inst_44399 = (state_44444[(9)]);
var inst_44402 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44403 = [cljs.core.cst$kw$ajax,uid];
var inst_44404 = (new cljs.core.PersistentVector(null,2,(5),inst_44402,inst_44403,null));
var inst_44405 = (function (){var n = inst_44399;
var client_ids_satisfied = inst_44400;
return ((function (n,client_ids_satisfied,inst_44400,inst_44406,inst_44399,inst_44402,inst_44403,inst_44404,state_val_44445,c__21958__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(client_ids_satisfied,cljs.core.keys(m));
if(cljs.core.empty_QMARK_(ks_to_pull)){
return taoensso.encore.swapped(m,null);
} else {
return taoensso.encore.swapped(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks_to_pull,n,client_ids_satisfied,inst_44400,inst_44406,inst_44399,inst_44402,inst_44403,inst_44404,state_val_44445,c__21958__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__44458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44458,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44458,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_44400,inst_44406,inst_44399,inst_44402,inst_44403,inst_44404,state_val_44445,c__21958__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys(m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_44400,inst_44406,inst_44399,inst_44402,inst_44403,inst_44404,state_val_44445,c__21958__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_44406__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_44404,inst_44405);
var inst_44407 = (function (){var n = inst_44399;
var client_ids_satisfied = inst_44400;
var _QMARK_pulled = inst_44406__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_44400,inst_44406,inst_44399,inst_44402,inst_44403,inst_44404,inst_44405,inst_44406__$1,state_val_44445,c__21958__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__8808__auto__ = (x == null);
if(or__8808__auto__){
return or__8808__auto__;
} else {
var fexpr__44462 = taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_);
return (fexpr__44462.cljs$core$IFn$_invoke$arity$1 ? fexpr__44462.cljs$core$IFn$_invoke$arity$1(x) : fexpr__44462.call(null,x));
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_44400,inst_44406,inst_44399,inst_44402,inst_44403,inst_44404,inst_44405,inst_44406__$1,state_val_44445,c__21958__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_44408 = (inst_44407.cljs$core$IFn$_invoke$arity$1 ? inst_44407.cljs$core$IFn$_invoke$arity$1(inst_44406__$1) : inst_44407.call(null,inst_44406__$1));
var state_44444__$1 = (function (){var statearr_44463 = state_44444;
(statearr_44463[(8)] = inst_44406__$1);

return statearr_44463;
})();
if(cljs.core.truth_(inst_44408)){
var statearr_44464_44488 = state_44444__$1;
(statearr_44464_44488[(1)] = (4));

} else {
var statearr_44465_44489 = state_44444__$1;
(statearr_44465_44489[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44445 === (11))){
var state_44444__$1 = state_44444;
var statearr_44466_44490 = state_44444__$1;
(statearr_44466_44490[(2)] = null);

(statearr_44466_44490[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44445 === (9))){
var inst_44400 = (state_44444[(7)]);
var inst_44423 = (state_44444[(10)]);
var inst_44399 = (state_44444[(9)]);
var inst_44421 = (state_44444[(2)]);
var inst_44422 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_44400,inst_44421);
var inst_44423__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms_backoffs,inst_44399);
var state_44444__$1 = (function (){var statearr_44467 = state_44444;
(statearr_44467[(10)] = inst_44423__$1);

(statearr_44467[(12)] = inst_44422);

return statearr_44467;
})();
if(cljs.core.truth_(inst_44423__$1)){
var statearr_44468_44491 = state_44444__$1;
(statearr_44468_44491[(1)] = (10));

} else {
var statearr_44469_44492 = state_44444__$1;
(statearr_44469_44492[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44445 === (5))){
var inst_44406 = (state_44444[(8)]);
var inst_44411 = taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",722,"([:or nil? map?] ?pulled)",inst_44406,null,null);
var state_44444__$1 = state_44444;
var statearr_44470_44493 = state_44444__$1;
(statearr_44470_44493[(2)] = inst_44411);

(statearr_44470_44493[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44445 === (14))){
var state_44444__$1 = state_44444;
var statearr_44471_44494 = state_44444__$1;
(statearr_44471_44494[(2)] = null);

(statearr_44471_44494[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44445 === (16))){
var inst_44422 = (state_44444[(12)]);
var inst_44399 = (state_44444[(9)]);
var inst_44432 = (state_44444[(2)]);
var inst_44433 = (inst_44399 + (1));
var inst_44399__$1 = inst_44433;
var inst_44400 = inst_44422;
var state_44444__$1 = (function (){var statearr_44472 = state_44444;
(statearr_44472[(13)] = inst_44432);

(statearr_44472[(7)] = inst_44400);

(statearr_44472[(9)] = inst_44399__$1);

return statearr_44472;
})();
var statearr_44473_44495 = state_44444__$1;
(statearr_44473_44495[(2)] = null);

(statearr_44473_44495[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44445 === (10))){
var inst_44422 = (state_44444[(12)]);
var inst_44425 = cljs.core.complement(inst_44422);
var inst_44426 = taoensso.encore.rsome(inst_44425,client_ids_unsatisfied);
var state_44444__$1 = state_44444;
if(cljs.core.truth_(inst_44426)){
var statearr_44474_44496 = state_44444__$1;
(statearr_44474_44496[(1)] = (13));

} else {
var statearr_44475_44497 = state_44444__$1;
(statearr_44475_44497[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44445 === (8))){
var state_44444__$1 = state_44444;
var statearr_44476_44498 = state_44444__$1;
(statearr_44476_44498[(2)] = null);

(statearr_44476_44498[(1)] = (9));


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
});})(c__21958__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__21856__auto__,c__21958__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__21857__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__21857__auto____0 = (function (){
var statearr_44477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44477[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__21857__auto__);

(statearr_44477[(1)] = (1));

return statearr_44477;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__21857__auto____1 = (function (state_44444){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_44444);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e44478){if((e44478 instanceof Object)){
var ex__21860__auto__ = e44478;
var statearr_44479_44499 = state_44444;
(statearr_44479_44499[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44444);

return cljs.core.cst$kw$recur;
} else {
throw e44478;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__44500 = state_44444;
state_44444 = G__44500;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__21857__auto__ = function(state_44444){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__21857__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__21857__auto____1.call(this,state_44444);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__21857__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__21857__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__21960__auto__ = (function (){var statearr_44480 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_44480[(6)] = c__21958__auto__);

return statearr_44480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__21958__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__9541__auto__ = (((chsk == null))?null:chsk);
var m__9542__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__9542__auto__.call(null,chsk));
} else {
var m__9542__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1(chsk) : m__9542__auto____$1.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-connect!",chsk);
}
}
}
});

taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
var x__9541__auto__ = (((chsk == null))?null:chsk);
var m__9542__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__9542__auto__.call(null,chsk,reason));
} else {
var m__9542__auto____$1 = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__9542__auto____$1.call(null,chsk,reason));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-disconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__9541__auto__ = (((chsk == null))?null:chsk);
var m__9542__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__9542__auto__.call(null,chsk));
} else {
var m__9542__auto____$1 = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1(chsk) : m__9542__auto____$1.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-reconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__9541__auto__ = (((chsk == null))?null:chsk);
var m__9542__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__9542__auto__.call(null,chsk,ev,opts));
} else {
var m__9542__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__9542__auto____$1.call(null,chsk,ev,opts));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-send!",chsk);
}
}
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_(chsk);
});

taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_(chsk,cljs.core.cst$kw$requested_DASH_disconnect);
});

/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_(chsk);
});

/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = taoensso.sente.chsk_disconnect_BANG_;
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var G__44502 = arguments.length;
switch (G__44502) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$timeout_DASH_ms,_QMARK_timeout_ms,cljs.core.cst$kw$cb,_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,772,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$cb,cljs.core.boolean$(cljs.core.cst$kw$cb.cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,-739880705);

return taoensso.sente._chsk_send_BANG_(chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente",null,777,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,1979439908);

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__44504_44505 = cljs.core.cst$kw$chsk_SLASH_closed;
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__44504_44505) : _QMARK_cb_fn.call(null,G__44504_44505));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event(x);

if((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null))) || (taoensso.encore.nat_int_QMARK_(_QMARK_timeout_ms))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["cb requires a timeout; timeout-ms should be a +ive integer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_timeout_ms)].join('')),"\n","(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))"].join('')));
}

if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb)) || (taoensso.encore.chan_QMARK_(_QMARK_cb))){
return null;
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["cb should be nil, an ifn, or a channel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(_QMARK_cb))].join('')),"\n","(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))"].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__5457__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5457__auto__)){
var cb_uuid = temp__5457__auto__;
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__5457__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped(cljs.core.cst$kw$swap_SLASH_dissoc,_QMARK_f);
});})(cb_uuid,temp__5457__auto__))
);
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__44506 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_state) : f.call(null,old_state));
var new_state__$1 = (cljs.core.truth_(cljs.core.cst$kw$first_DASH_open_QMARK_.cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,cljs.core.cst$kw$first_DASH_open_QMARK_,false):new_state);
var new_state__$2 = (cljs.core.truth_(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_state__$1,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect):new_state__$1);
return taoensso.encore.swapped(new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44506,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44506,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chs,cljs.core.cst$kw$state], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_state,output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_44514 = (function (){try{if(cljs.core.map_QMARK_(state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44509){if((e44509 instanceof Error)){
var e = e44509;
return e;
} else {
throw e44509;

}
}})();
if((e_44514 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",824,"(map? state)",state,e_44514,null);
}

var e_44515 = (function (){try{if(cljs.core.truth_((function (){var fexpr__44512 = (function (x){
return cljs.core.contains_QMARK_((function (){var G__44513 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$requested_DASH_disconnect,null,cljs.core.cst$kw$downgrading_DASH_ws_DASH_to_DASH_ajax,null,cljs.core.cst$kw$unexpected,null,cljs.core.cst$kw$requested_DASH_reconnect,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__44513) : taoensso.truss.impl.set_STAR_.call(null,G__44513));
})(),x);
});
return fexpr__44512(reason);
})())){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44510){if((e44510 instanceof Error)){
var e = e44510;
return e;
} else {
throw e44510;

}
}})();
if((e_44515 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",825,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_44515,null);
}

if(cljs.core.truth_((function (){var or__8808__auto__ = cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(reason,cljs.core.cst$kw$unexpected);
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect),cljs.core.cst$kw$open_QMARK_,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$last_DASH_close,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$reason,reason], null)], 0));
} else {
return state;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb))){
return _QMARK_cb;
} else {
var e_44520 = (function (){try{if(taoensso.encore.chan_QMARK_(_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44516){if((e44516 instanceof Error)){
var e = e44516;
return e;
} else {
throw e44516;

}
}})();
if((e_44520 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",846,"(enc/chan? ?cb)",_QMARK_cb,e_44520,null);
}

taoensso.sente.assert_event(ev);

var vec__44517 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44517,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44517,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__44517,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.as_qname(ev_id)),".cb"].join('')),reply], null));
});
;})(vec__44517,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,857,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,449509413);

var buffered_evs = ((cljs.core.vector_QMARK_(clj))?clj:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",858,"(vector? clj)",clj,null,null));
var seq__44521 = cljs.core.seq(buffered_evs);
var chunk__44522 = null;
var count__44523 = (0);
var i__44524 = (0);
while(true){
if((i__44524 < count__44523)){
var ev = chunk__44522.cljs$core$IIndexed$_nth$arity$2(null,i__44524);
taoensso.sente.assert_event(ev);

var vec__44525_44531 = ev;
var id_44532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44525_44531,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_44532),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__44533 = seq__44521;
var G__44534 = chunk__44522;
var G__44535 = count__44523;
var G__44536 = (i__44524 + (1));
seq__44521 = G__44533;
chunk__44522 = G__44534;
count__44523 = G__44535;
i__44524 = G__44536;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__44521);
if(temp__5457__auto__){
var seq__44521__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44521__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__44521__$1);
var G__44537 = cljs.core.chunk_rest(seq__44521__$1);
var G__44538 = c__9739__auto__;
var G__44539 = cljs.core.count(c__9739__auto__);
var G__44540 = (0);
seq__44521 = G__44537;
chunk__44522 = G__44538;
count__44523 = G__44539;
i__44524 = G__44540;
continue;
} else {
var ev = cljs.core.first(seq__44521__$1);
taoensso.sente.assert_event(ev);

var vec__44528_44541 = ev;
var id_44542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44528_44541,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_44542),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__44543 = cljs.core.next(seq__44521__$1);
var G__44544 = null;
var G__44545 = (0);
var G__44546 = (0);
seq__44521 = G__44543;
chunk__44522 = G__44544;
count__44523 = G__44545;
i__44524 = G__44546;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
var and__8796__auto__ = cljs.core.vector_QMARK_(x);
if(and__8796__auto__){
var vec__44550 = x;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44550,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,cljs.core.cst$kw$chsk_SLASH_handshake);
} else {
return and__8796__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_44567 = (function (){try{if(cljs.core.truth_((function (){var fexpr__44556 = (function (x){
return cljs.core.contains_QMARK_((function (){var G__44557 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,null,cljs.core.cst$kw$ajax,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__44557) : taoensso.truss.impl.set_STAR_.call(null,G__44557));
})(),x);
});
return fexpr__44556(chsk_type);
})())){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44554){if((e44554 instanceof Error)){
var e = e44554;
return e;
} else {
throw e44554;

}
}})();
if((e_44567 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",872,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_44567,null);
}

var e_44568 = (function (){try{if(cljs.core.truth_(taoensso.sente.handshake_QMARK_(clj))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44558){if((e44558 instanceof Error)){
var e = e44558;
return e;
} else {
throw e44558;

}
}})();
if((e_44568 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",873,"(handshake? clj)",clj,e_44568,null);
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,874,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,116946941);

var vec__44559 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44559,(0),null);
var vec__44562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44559,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44562,(0),null);
var _QMARK_csrf_token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44562,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44562,(2),null);
var map__44565 = chsk;
var map__44565__$1 = ((((!((map__44565 == null)))?((((map__44565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44565.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44565):map__44565);
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44565__$1,cljs.core.cst$kw$chs);
var ever_opened_QMARK__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44565__$1,cljs.core.cst$kw$ever_DASH_opened_QMARK__);
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_(ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,chsk_type,cljs.core.cst$kw$open_QMARK_,true,cljs.core.cst$kw$ever_DASH_opened_QMARK_,true,cljs.core.cst$kw$uid,_QMARK_uid,cljs.core.cst$kw$csrf_DASH_token,_QMARK_csrf_token,cljs.core.cst$kw$handshake_DASH_data,_QMARK_handshake_data,cljs.core.cst$kw$first_DASH_open_QMARK_,first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event(handshake_ev);

if(clojure.string.blank_QMARK_(_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente",null,893,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__44559,_,vec__44562,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__44565,map__44565__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__44559,_,vec__44562,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__44565,map__44565__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,1661331392);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk,((function (vec__44559,_,vec__44562,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__44565,map__44565__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__44553_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__44553_SHARP_,new_state], 0));
});})(vec__44559,_,vec__44562,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__44565,map__44565__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
);

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return cljs.core.cst$kw$handled;
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (new cljs.core.Delay((function (){
if((taoensso.sente.node_target_QMARK_) && (typeof require !== 'undefined')){
try{return require("websocket");
}catch (e44569){var e = e44569;
return null;
}} else {
return null;
}
}),null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.ws_kalive_ms = ws_kalive_ms;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9496__auto__,k__9497__auto__){
var self__ = this;
var this__9496__auto____$1 = this;
return this__9496__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9497__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9498__auto__,k44576,else__9499__auto__){
var self__ = this;
var this__9498__auto____$1 = this;
var G__44580 = k44576;
var G__44580__$1 = (((G__44580 instanceof cljs.core.Keyword))?G__44580.fqn:null);
switch (G__44580__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "socket_":
return self__.socket_;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44576,else__9499__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9510__auto__,writer__9511__auto__,opts__9512__auto__){
var self__ = this;
var this__9510__auto____$1 = this;
var pr_pair__9513__auto__ = ((function (this__9510__auto____$1){
return (function (keyval__9514__auto__){
return cljs.core.pr_sequential_writer(writer__9511__auto__,cljs.core.pr_writer,""," ","",opts__9512__auto__,keyval__9514__auto__);
});})(this__9510__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9511__auto__,pr_pair__9513__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__9512__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$client_DASH_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$packer,self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$instance_DASH_handle_,self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$retry_DASH_count_,self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ever_DASH_opened_QMARK__,self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$cbs_DASH_waiting_,self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$socket_,self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$udt_DASH_last_DASH_comms_,self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44575){
var self__ = this;
var G__44575__$1 = this;
return (new cljs.core.RecordIter((0),G__44575__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client_DASH_id,cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$retry_DASH_count_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$cbs_DASH_waiting_,cljs.core.cst$kw$socket_,cljs.core.cst$kw$udt_DASH_last_DASH_comms_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9494__auto__){
var self__ = this;
var this__9494__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9491__auto__){
var self__ = this;
var this__9491__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9500__auto__){
var self__ = this;
var this__9500__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9492__auto__){
var self__ = this;
var this__9492__auto____$1 = this;
var h__9264__auto__ = self__.__hash;
if(!((h__9264__auto__ == null))){
return h__9264__auto__;
} else {
var h__9264__auto____$1 = (function (){var fexpr__44581 = ((function (h__9264__auto__,this__9492__auto____$1){
return (function (coll__9493__auto__){
return (1998688700 ^ cljs.core.hash_unordered_coll(coll__9493__auto__));
});})(h__9264__auto__,this__9492__auto____$1))
;
return fexpr__44581(this__9492__auto____$1);
})();
self__.__hash = h__9264__auto____$1;

return h__9264__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44577,other44578){
var self__ = this;
var this44577__$1 = this;
return (!((other44578 == null))) && ((this44577__$1.constructor === other44578.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44577__$1.client_id,other44578.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44577__$1.chs,other44578.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44577__$1.params,other44578.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44577__$1.packer,other44578.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44577__$1.url,other44578.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44577__$1.ws_kalive_ms,other44578.ws_kalive_ms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44577__$1.state_,other44578.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44577__$1.instance_handle_,other44578.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44577__$1.retry_count_,other44578.retry_count_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44577__$1.ever_opened_QMARK__,other44578.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44577__$1.backoff_ms_fn,other44578.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44577__$1.cbs_waiting_,other44578.cbs_waiting_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44577__$1.socket_,other44578.socket_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44577__$1.udt_last_comms_,other44578.udt_last_comms_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44577__$1.__extmap,other44578.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9505__auto__,k__9506__auto__){
var self__ = this;
var this__9505__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,null,cljs.core.cst$kw$ever_DASH_opened_QMARK__,null,cljs.core.cst$kw$client_DASH_id,null,cljs.core.cst$kw$packer,null,cljs.core.cst$kw$chs,null,cljs.core.cst$kw$udt_DASH_last_DASH_comms_,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$retry_DASH_count_,null,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,null,cljs.core.cst$kw$socket_,null,cljs.core.cst$kw$url,null,cljs.core.cst$kw$instance_DASH_handle_,null,cljs.core.cst$kw$cbs_DASH_waiting_,null,cljs.core.cst$kw$state_,null], null), null),k__9506__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9505__auto____$1),self__.__meta),k__9506__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9506__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9503__auto__,k__9504__auto__,G__44575){
var self__ = this;
var this__9503__auto____$1 = this;
var pred__44582 = cljs.core.keyword_identical_QMARK_;
var expr__44583 = k__9504__auto__;
if(cljs.core.truth_((function (){var G__44585 = cljs.core.cst$kw$client_DASH_id;
var G__44586 = expr__44583;
return (pred__44582.cljs$core$IFn$_invoke$arity$2 ? pred__44582.cljs$core$IFn$_invoke$arity$2(G__44585,G__44586) : pred__44582.call(null,G__44585,G__44586));
})())){
return (new taoensso.sente.ChWebSocket(G__44575,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44587 = cljs.core.cst$kw$chs;
var G__44588 = expr__44583;
return (pred__44582.cljs$core$IFn$_invoke$arity$2 ? pred__44582.cljs$core$IFn$_invoke$arity$2(G__44587,G__44588) : pred__44582.call(null,G__44587,G__44588));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__44575,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44589 = cljs.core.cst$kw$params;
var G__44590 = expr__44583;
return (pred__44582.cljs$core$IFn$_invoke$arity$2 ? pred__44582.cljs$core$IFn$_invoke$arity$2(G__44589,G__44590) : pred__44582.call(null,G__44589,G__44590));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__44575,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44591 = cljs.core.cst$kw$packer;
var G__44592 = expr__44583;
return (pred__44582.cljs$core$IFn$_invoke$arity$2 ? pred__44582.cljs$core$IFn$_invoke$arity$2(G__44591,G__44592) : pred__44582.call(null,G__44591,G__44592));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__44575,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44593 = cljs.core.cst$kw$url;
var G__44594 = expr__44583;
return (pred__44582.cljs$core$IFn$_invoke$arity$2 ? pred__44582.cljs$core$IFn$_invoke$arity$2(G__44593,G__44594) : pred__44582.call(null,G__44593,G__44594));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__44575,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44595 = cljs.core.cst$kw$ws_DASH_kalive_DASH_ms;
var G__44596 = expr__44583;
return (pred__44582.cljs$core$IFn$_invoke$arity$2 ? pred__44582.cljs$core$IFn$_invoke$arity$2(G__44595,G__44596) : pred__44582.call(null,G__44595,G__44596));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__44575,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44597 = cljs.core.cst$kw$state_;
var G__44598 = expr__44583;
return (pred__44582.cljs$core$IFn$_invoke$arity$2 ? pred__44582.cljs$core$IFn$_invoke$arity$2(G__44597,G__44598) : pred__44582.call(null,G__44597,G__44598));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__44575,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44599 = cljs.core.cst$kw$instance_DASH_handle_;
var G__44600 = expr__44583;
return (pred__44582.cljs$core$IFn$_invoke$arity$2 ? pred__44582.cljs$core$IFn$_invoke$arity$2(G__44599,G__44600) : pred__44582.call(null,G__44599,G__44600));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__44575,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44601 = cljs.core.cst$kw$retry_DASH_count_;
var G__44602 = expr__44583;
return (pred__44582.cljs$core$IFn$_invoke$arity$2 ? pred__44582.cljs$core$IFn$_invoke$arity$2(G__44601,G__44602) : pred__44582.call(null,G__44601,G__44602));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__44575,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44603 = cljs.core.cst$kw$ever_DASH_opened_QMARK__;
var G__44604 = expr__44583;
return (pred__44582.cljs$core$IFn$_invoke$arity$2 ? pred__44582.cljs$core$IFn$_invoke$arity$2(G__44603,G__44604) : pred__44582.call(null,G__44603,G__44604));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__44575,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44605 = cljs.core.cst$kw$backoff_DASH_ms_DASH_fn;
var G__44606 = expr__44583;
return (pred__44582.cljs$core$IFn$_invoke$arity$2 ? pred__44582.cljs$core$IFn$_invoke$arity$2(G__44605,G__44606) : pred__44582.call(null,G__44605,G__44606));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__44575,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44607 = cljs.core.cst$kw$cbs_DASH_waiting_;
var G__44608 = expr__44583;
return (pred__44582.cljs$core$IFn$_invoke$arity$2 ? pred__44582.cljs$core$IFn$_invoke$arity$2(G__44607,G__44608) : pred__44582.call(null,G__44607,G__44608));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__44575,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44609 = cljs.core.cst$kw$socket_;
var G__44610 = expr__44583;
return (pred__44582.cljs$core$IFn$_invoke$arity$2 ? pred__44582.cljs$core$IFn$_invoke$arity$2(G__44609,G__44610) : pred__44582.call(null,G__44609,G__44610));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__44575,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44611 = cljs.core.cst$kw$udt_DASH_last_DASH_comms_;
var G__44612 = expr__44583;
return (pred__44582.cljs$core$IFn$_invoke$arity$2 ? pred__44582.cljs$core$IFn$_invoke$arity$2(G__44611,G__44612) : pred__44582.call(null,G__44611,G__44612));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__44575,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9504__auto__,G__44575),null));
}
}
}
}
}
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9508__auto__){
var self__ = this;
var this__9508__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$client_DASH_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$packer,self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$instance_DASH_handle_,self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$retry_DASH_count_,self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ever_DASH_opened_QMARK__,self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$cbs_DASH_waiting_,self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$socket_,self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$udt_DASH_last_DASH_comms_,self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9495__auto__,G__44575){
var self__ = this;
var this__9495__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__44575,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9501__auto__,entry__9502__auto__){
var self__ = this;
var this__9501__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9502__auto__)){
return this__9501__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9501__auto____$1,entry__9502__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (chsk__$1){
return (function (p1__44570_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__44570_SHARP_,reason);
});})(chsk__$1))
);

var temp__5457__auto__ = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,cljs.core.cst$kw$requested_DASH_reconnect);

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__44613 = opts;
var map__44613__$1 = ((((!((map__44613 == null)))?((((map__44613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44613.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44613):map__44613);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44613__$1,cljs.core.cst$kw$timeout_DASH_ms);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44613__$1,cljs.core.cst$kw$cb);
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44613__$1,cljs.core.cst$kw$flush_QMARK_);
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,_QMARK_cb_uuid);
var temp__5457__auto___44694 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5457__auto___44694)){
var cb_uuid_44695 = temp__5457__auto___44694;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_44695], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44615){if((e44615 instanceof Error)){
var e = e44615;
return e;
} else {
throw e44615;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",963,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__5457__auto___44696__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5457__auto___44696__$1)){
var timeout_ms_44697 = temp__5457__auto___44696__$1;
var c__21958__auto___44698 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto___44698,timeout_ms_44697,temp__5457__auto___44696__$1,cb_uuid_44695,temp__5457__auto___44694,_QMARK_cb_uuid,ppstr,map__44613,map__44613__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto___44698,timeout_ms_44697,temp__5457__auto___44696__$1,cb_uuid_44695,temp__5457__auto___44694,_QMARK_cb_uuid,ppstr,map__44613,map__44613__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_44626){
var state_val_44627 = (state_44626[(1)]);
if((state_val_44627 === (1))){
var inst_44616 = cljs.core.async.timeout(timeout_ms_44697);
var state_44626__$1 = state_44626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44626__$1,(2),inst_44616);
} else {
if((state_val_44627 === (2))){
var inst_44619 = (state_44626[(7)]);
var inst_44618 = (state_44626[(2)]);
var inst_44619__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_44626__$1 = (function (){var statearr_44628 = state_44626;
(statearr_44628[(7)] = inst_44619__$1);

(statearr_44628[(8)] = inst_44618);

return statearr_44628;
})();
if(cljs.core.truth_(inst_44619__$1)){
var statearr_44629_44699 = state_44626__$1;
(statearr_44629_44699[(1)] = (3));

} else {
var statearr_44630_44700 = state_44626__$1;
(statearr_44630_44700[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44627 === (3))){
var inst_44619 = (state_44626[(7)]);
var inst_44621 = (function (){var G__44631 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (inst_44619.cljs$core$IFn$_invoke$arity$1 ? inst_44619.cljs$core$IFn$_invoke$arity$1(G__44631) : inst_44619.call(null,G__44631));
})();
var state_44626__$1 = state_44626;
var statearr_44632_44701 = state_44626__$1;
(statearr_44632_44701[(2)] = inst_44621);

(statearr_44632_44701[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44627 === (4))){
var state_44626__$1 = state_44626;
var statearr_44633_44702 = state_44626__$1;
(statearr_44633_44702[(2)] = null);

(statearr_44633_44702[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44627 === (5))){
var inst_44624 = (state_44626[(2)]);
var state_44626__$1 = state_44626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44626__$1,inst_44624);
} else {
return null;
}
}
}
}
}
});})(c__21958__auto___44698,timeout_ms_44697,temp__5457__auto___44696__$1,cb_uuid_44695,temp__5457__auto___44694,_QMARK_cb_uuid,ppstr,map__44613,map__44613__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__21856__auto__,c__21958__auto___44698,timeout_ms_44697,temp__5457__auto___44696__$1,cb_uuid_44695,temp__5457__auto___44694,_QMARK_cb_uuid,ppstr,map__44613,map__44613__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__21857__auto__ = null;
var taoensso$sente$state_machine__21857__auto____0 = (function (){
var statearr_44634 = [null,null,null,null,null,null,null,null,null];
(statearr_44634[(0)] = taoensso$sente$state_machine__21857__auto__);

(statearr_44634[(1)] = (1));

return statearr_44634;
});
var taoensso$sente$state_machine__21857__auto____1 = (function (state_44626){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_44626);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e44635){if((e44635 instanceof Object)){
var ex__21860__auto__ = e44635;
var statearr_44636_44703 = state_44626;
(statearr_44636_44703[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44626);

return cljs.core.cst$kw$recur;
} else {
throw e44635;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__44704 = state_44626;
state_44626 = G__44704;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
taoensso$sente$state_machine__21857__auto__ = function(state_44626){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__21857__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__21857__auto____1.call(this,state_44626);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__21857__auto____0;
taoensso$sente$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__21857__auto____1;
return taoensso$sente$state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto___44698,timeout_ms_44697,temp__5457__auto___44696__$1,cb_uuid_44695,temp__5457__auto___44694,_QMARK_cb_uuid,ppstr,map__44613,map__44613__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__21960__auto__ = (function (){var statearr_44637 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_44637[(6)] = c__21958__auto___44698);

return statearr_44637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto___44698,timeout_ms_44697,temp__5457__auto___44696__$1,cb_uuid_44695,temp__5457__auto___44694,_QMARK_cb_uuid,ppstr,map__44613,map__44613__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref(self__.socket_).send(ppstr);

cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

return cljs.core.cst$kw$apparent_DASH_success;
}catch (e44638){var e = e44638;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente",null,975,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__44613,map__44613__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__44613,map__44613__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-1965950570);

var temp__5457__auto___44705 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5457__auto___44705)){
var cb_uuid_44706 = temp__5457__auto___44705;
var cb_fn_STAR__44707 = (function (){var or__8808__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_44706);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44639){if((e44639 instanceof Error)){
var e__$1 = e44639;
return e__$1;
} else {
throw e44639;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",978,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
var G__44640_44708 = cljs.core.cst$kw$chsk_SLASH_error;
(cb_fn_STAR__44707.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__44707.cljs$core$IFn$_invoke$arity$1(G__44640_44708) : cb_fn_STAR__44707.call(null,G__44640_44708));
} else {
}

return false;
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5457__auto__ = (function (){var or__8808__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"WebSocket");
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"MozWebSocket");
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var WebSocket = temp__5457__auto__;
var instance_handle = cljs.core.reset_BANG_(self__.instance_handle_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var have_handle_QMARK_ = ((function (instance_handle,WebSocket,temp__5457__auto__,chsk__$1){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.instance_handle_),instance_handle);
});})(instance_handle,WebSocket,temp__5457__auto__,chsk__$1))
;
var connect_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
if(cljs.core.truth_(have_handle_QMARK_())){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_())){
var retry_count_STAR_ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.retry_count_,cljs.core.inc);
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente",null,1000,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
,null)),null,316928152);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (p1__44571_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44571_SHARP_,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect,udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string(self__.url,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$client_DASH_id,self__.client_id], null)], 0)))));
}catch (e44641){var e = e44641;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente",null,1014,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
,null)),null,2133364109);

return null;
}})();
if(cljs.core.not(_QMARK_socket)){
return retry_fn();
} else {
return cljs.core.reset_BANG_(self__.socket_,(function (){var G__44642 = _QMARK_socket;
(G__44642["onerror"] = ((function (G__44642,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente",null,1024,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (G__44642,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(ws_ev);
}catch (e44643){var _ = e44643;
return ws_ev;
}})()], null);
});})(G__44642,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
,null)),null,-2096149222);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$ev,ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (last_ws_error,G__44642,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (p1__44572_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44572_SHARP_,cljs.core.cst$kw$last_DASH_ws_DASH_error,last_ws_error);
});})(last_ws_error,G__44642,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
);
});})(G__44642,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
);

(G__44642["onmessage"] = ((function (G__44642,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"data");
var vec__44644 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44644,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44644,(1),null);
cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

var or__8808__auto__ = (cljs.core.truth_(taoensso.sente.handshake_QMARK_(clj))?(function (){
taoensso.sente.receive_handshake_BANG_(cljs.core.cst$kw$ws,chsk__$1,clj);

cljs.core.reset_BANG_(self__.retry_count_,(0));

return cljs.core.cst$kw$handshake;
})()
:null);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping))?(function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping], null));

return cljs.core.cst$kw$noop;
})()
:null);
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
var temp__5455__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5455__auto__)){
var cb_uuid = temp__5455__auto__;
var temp__5455__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__5455__auto____$1)){
var cb_fn = temp__5455__auto____$1;
return (cb_fn.cljs$core$IFn$_invoke$arity$1 ? cb_fn.cljs$core$IFn$_invoke$arity$1(clj) : cb_fn.call(null,clj));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente",null,1060,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__5455__auto____$1,cb_uuid,temp__5455__auto__,or__8808__auto____$1,or__8808__auto__,ppstr,vec__44644,clj,_QMARK_cb_uuid,G__44642,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__5455__auto____$1,cb_uuid,temp__5455__auto__,or__8808__auto____$1,or__8808__auto__,ppstr,vec__44644,clj,_QMARK_cb_uuid,G__44642,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
,null)),null,1272803743);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});})(G__44642,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
);

(G__44642["onclose"] = ((function (G__44642,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"wasClean");
var code = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"code");
var reason = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$ev,ws_ev,cljs.core.cst$kw$clean_QMARK_,clean_QMARK_,cljs.core.cst$kw$code,code,cljs.core.cst$kw$reason,reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente",null,1082,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__44642,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__44642,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
,null)),null,1049759927);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__44642,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (p1__44573_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44573_SHARP_,cljs.core.cst$kw$last_DASH_ws_DASH_close,last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__44642,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__44642,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (p1__44574_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.sente.chsk_state__GT_closed(p1__44574_SHARP_,cljs.core.cst$kw$unexpected),cljs.core.cst$kw$last_DASH_ws_DASH_close,last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__44642,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
);

return retry_fn();
}
});})(G__44642,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
);

return G__44642;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
;
var temp__5457__auto___44709__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__5457__auto___44709__$1)){
var ms_44710 = temp__5457__auto___44709__$1;
var c__21958__auto___44711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto___44711,ms_44710,temp__5457__auto___44709__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5457__auto__,chsk__$1){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto___44711,ms_44710,temp__5457__auto___44709__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5457__auto__,chsk__$1){
return (function (state_44674){
var state_val_44675 = (state_44674[(1)]);
if((state_val_44675 === (7))){
var inst_44670 = (state_44674[(2)]);
var state_44674__$1 = state_44674;
var statearr_44676_44712 = state_44674__$1;
(statearr_44676_44712[(2)] = inst_44670);

(statearr_44676_44712[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44675 === (1))){
var state_44674__$1 = state_44674;
var statearr_44677_44713 = state_44674__$1;
(statearr_44677_44713[(2)] = null);

(statearr_44677_44713[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44675 === (4))){
var inst_44651 = (state_44674[(2)]);
var inst_44652 = have_handle_QMARK_();
var state_44674__$1 = (function (){var statearr_44678 = state_44674;
(statearr_44678[(7)] = inst_44651);

return statearr_44678;
})();
if(cljs.core.truth_(inst_44652)){
var statearr_44679_44714 = state_44674__$1;
(statearr_44679_44714[(1)] = (5));

} else {
var statearr_44680_44715 = state_44674__$1;
(statearr_44680_44715[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44675 === (6))){
var state_44674__$1 = state_44674;
var statearr_44681_44716 = state_44674__$1;
(statearr_44681_44716[(2)] = null);

(statearr_44681_44716[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44675 === (3))){
var inst_44672 = (state_44674[(2)]);
var state_44674__$1 = state_44674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44674__$1,inst_44672);
} else {
if((state_val_44675 === (2))){
var inst_44648 = cljs.core.deref(self__.udt_last_comms_);
var inst_44649 = cljs.core.async.timeout(ms_44710);
var state_44674__$1 = (function (){var statearr_44682 = state_44674;
(statearr_44682[(8)] = inst_44648);

return statearr_44682;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44674__$1,(4),inst_44649);
} else {
if((state_val_44675 === (9))){
var state_44674__$1 = state_44674;
var statearr_44683_44717 = state_44674__$1;
(statearr_44683_44717[(2)] = null);

(statearr_44683_44717[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44675 === (5))){
var inst_44648 = (state_44674[(8)]);
var inst_44654 = cljs.core.deref(self__.udt_last_comms_);
var inst_44655 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44648,inst_44654);
var state_44674__$1 = state_44674;
if(inst_44655){
var statearr_44684_44718 = state_44674__$1;
(statearr_44684_44718[(1)] = (8));

} else {
var statearr_44685_44719 = state_44674__$1;
(statearr_44685_44719[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44675 === (10))){
var inst_44666 = (state_44674[(2)]);
var state_44674__$1 = (function (){var statearr_44686 = state_44674;
(statearr_44686[(9)] = inst_44666);

return statearr_44686;
})();
var statearr_44687_44720 = state_44674__$1;
(statearr_44687_44720[(2)] = null);

(statearr_44687_44720[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44675 === (8))){
var inst_44657 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44658 = [cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping];
var inst_44659 = (new cljs.core.PersistentVector(null,1,(5),inst_44657,inst_44658,null));
var inst_44660 = [cljs.core.cst$kw$flush_QMARK_];
var inst_44661 = [true];
var inst_44662 = cljs.core.PersistentHashMap.fromArrays(inst_44660,inst_44661);
var inst_44663 = chsk__$1.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(null,inst_44659,inst_44662);
var state_44674__$1 = state_44674;
var statearr_44688_44721 = state_44674__$1;
(statearr_44688_44721[(2)] = inst_44663);

(statearr_44688_44721[(1)] = (10));


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
});})(c__21958__auto___44711,ms_44710,temp__5457__auto___44709__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5457__auto__,chsk__$1))
;
return ((function (switch__21856__auto__,c__21958__auto___44711,ms_44710,temp__5457__auto___44709__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5457__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__21857__auto__ = null;
var taoensso$sente$state_machine__21857__auto____0 = (function (){
var statearr_44689 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44689[(0)] = taoensso$sente$state_machine__21857__auto__);

(statearr_44689[(1)] = (1));

return statearr_44689;
});
var taoensso$sente$state_machine__21857__auto____1 = (function (state_44674){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_44674);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e44690){if((e44690 instanceof Object)){
var ex__21860__auto__ = e44690;
var statearr_44691_44722 = state_44674;
(statearr_44691_44722[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44674);

return cljs.core.cst$kw$recur;
} else {
throw e44690;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__44723 = state_44674;
state_44674 = G__44723;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
taoensso$sente$state_machine__21857__auto__ = function(state_44674){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__21857__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__21857__auto____1.call(this,state_44674);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__21857__auto____0;
taoensso$sente$state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__21857__auto____1;
return taoensso$sente$state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto___44711,ms_44710,temp__5457__auto___44709__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5457__auto__,chsk__$1))
})();
var state__21960__auto__ = (function (){var statearr_44692 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_44692[(6)] = c__21958__auto___44711);

return statearr_44692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto___44711,ms_44710,temp__5457__auto___44709__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5457__auto__,chsk__$1))
);

} else {
}

cljs.core.reset_BANG_(self__.retry_count_,(0));

connect_fn();

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$client_DASH_id,cljs.core.cst$sym$chs,cljs.core.cst$sym$params,cljs.core.cst$sym$packer,cljs.core.cst$sym$url,cljs.core.cst$sym$ws_DASH_kalive_DASH_ms,cljs.core.cst$sym$state_,cljs.core.cst$sym$instance_DASH_handle_,cljs.core.cst$sym$retry_DASH_count_,cljs.core.cst$sym$ever_DASH_opened_QMARK__,cljs.core.cst$sym$backoff_DASH_ms_DASH_fn,cljs.core.cst$sym$cbs_DASH_waiting_,cljs.core.cst$sym$socket_,cljs.core.cst$sym$udt_DASH_last_DASH_comms_], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__9534__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__9534__auto__,writer__9535__auto__){
return cljs.core._write(writer__9535__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__44579){
return (new taoensso.sente.ChWebSocket(cljs.core.cst$kw$client_DASH_id.cljs$core$IFn$_invoke$arity$1(G__44579),cljs.core.cst$kw$chs.cljs$core$IFn$_invoke$arity$1(G__44579),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__44579),cljs.core.cst$kw$packer.cljs$core$IFn$_invoke$arity$1(G__44579),cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__44579),cljs.core.cst$kw$ws_DASH_kalive_DASH_ms.cljs$core$IFn$_invoke$arity$1(G__44579),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__44579),cljs.core.cst$kw$instance_DASH_handle_.cljs$core$IFn$_invoke$arity$1(G__44579),cljs.core.cst$kw$retry_DASH_count_.cljs$core$IFn$_invoke$arity$1(G__44579),cljs.core.cst$kw$ever_DASH_opened_QMARK__.cljs$core$IFn$_invoke$arity$1(G__44579),cljs.core.cst$kw$backoff_DASH_ms_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__44579),cljs.core.cst$kw$cbs_DASH_waiting_.cljs$core$IFn$_invoke$arity$1(G__44579),cljs.core.cst$kw$socket_.cljs$core$IFn$_invoke$arity$1(G__44579),cljs.core.cst$kw$udt_DASH_last_DASH_comms_.cljs$core$IFn$_invoke$arity$1(G__44579),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44579,cljs.core.cst$kw$client_DASH_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$retry_DASH_count_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$cbs_DASH_waiting_,cljs.core.cst$kw$socket_,cljs.core.cst$kw$udt_DASH_last_DASH_comms_], 0))),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts){
return taoensso.sente.map__GT_ChWebSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$state_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$ws,cljs.core.cst$kw$open_QMARK_,false,cljs.core.cst$kw$ever_DASH_opened_QMARK_,false], null)),cljs.core.cst$kw$instance_DASH_handle_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$retry_DASH_count_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.cst$kw$cbs_DASH_waiting_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$socket_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$udt_DASH_last_DASH_comms_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$secs,(60)], 0));

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9496__auto__,k__9497__auto__){
var self__ = this;
var this__9496__auto____$1 = this;
return this__9496__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9497__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9498__auto__,k44731,else__9499__auto__){
var self__ = this;
var this__9498__auto____$1 = this;
var G__44735 = k44731;
var G__44735__$1 = (((G__44735 instanceof cljs.core.Keyword))?G__44735.fqn:null);
switch (G__44735__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44731,else__9499__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9510__auto__,writer__9511__auto__,opts__9512__auto__){
var self__ = this;
var this__9510__auto____$1 = this;
var pr_pair__9513__auto__ = ((function (this__9510__auto____$1){
return (function (keyval__9514__auto__){
return cljs.core.pr_sequential_writer(writer__9511__auto__,cljs.core.pr_writer,""," ","",opts__9512__auto__,keyval__9514__auto__);
});})(this__9510__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9511__auto__,pr_pair__9513__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__9512__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$client_DASH_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$packer,self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$instance_DASH_handle_,self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ever_DASH_opened_QMARK__,self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ajax_DASH_opts,self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$curr_DASH_xhr_,self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44730){
var self__ = this;
var G__44730__$1 = this;
return (new cljs.core.RecordIter((0),G__44730__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client_DASH_id,cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$ajax_DASH_opts,cljs.core.cst$kw$curr_DASH_xhr_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9494__auto__){
var self__ = this;
var this__9494__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9491__auto__){
var self__ = this;
var this__9491__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9500__auto__){
var self__ = this;
var this__9500__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9492__auto__){
var self__ = this;
var this__9492__auto____$1 = this;
var h__9264__auto__ = self__.__hash;
if(!((h__9264__auto__ == null))){
return h__9264__auto__;
} else {
var h__9264__auto____$1 = (function (){var fexpr__44736 = ((function (h__9264__auto__,this__9492__auto____$1){
return (function (coll__9493__auto__){
return (-266770752 ^ cljs.core.hash_unordered_coll(coll__9493__auto__));
});})(h__9264__auto__,this__9492__auto____$1))
;
return fexpr__44736(this__9492__auto____$1);
})();
self__.__hash = h__9264__auto____$1;

return h__9264__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44732,other44733){
var self__ = this;
var this44732__$1 = this;
return (!((other44733 == null))) && ((this44732__$1.constructor === other44733.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44732__$1.client_id,other44733.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44732__$1.chs,other44733.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44732__$1.params,other44733.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44732__$1.packer,other44733.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44732__$1.url,other44733.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44732__$1.state_,other44733.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44732__$1.instance_handle_,other44733.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44732__$1.ever_opened_QMARK__,other44733.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44732__$1.backoff_ms_fn,other44733.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44732__$1.ajax_opts,other44733.ajax_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44732__$1.curr_xhr_,other44733.curr_xhr_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44732__$1.__extmap,other44733.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9505__auto__,k__9506__auto__){
var self__ = this;
var this__9505__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$kw$curr_DASH_xhr_,null,cljs.core.cst$kw$ever_DASH_opened_QMARK__,null,cljs.core.cst$kw$client_DASH_id,null,cljs.core.cst$kw$packer,null,cljs.core.cst$kw$chs,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,null,cljs.core.cst$kw$url,null,cljs.core.cst$kw$instance_DASH_handle_,null,cljs.core.cst$kw$ajax_DASH_opts,null,cljs.core.cst$kw$state_,null], null), null),k__9506__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9505__auto____$1),self__.__meta),k__9506__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9506__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9503__auto__,k__9504__auto__,G__44730){
var self__ = this;
var this__9503__auto____$1 = this;
var pred__44737 = cljs.core.keyword_identical_QMARK_;
var expr__44738 = k__9504__auto__;
if(cljs.core.truth_((function (){var G__44740 = cljs.core.cst$kw$client_DASH_id;
var G__44741 = expr__44738;
return (pred__44737.cljs$core$IFn$_invoke$arity$2 ? pred__44737.cljs$core$IFn$_invoke$arity$2(G__44740,G__44741) : pred__44737.call(null,G__44740,G__44741));
})())){
return (new taoensso.sente.ChAjaxSocket(G__44730,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44742 = cljs.core.cst$kw$chs;
var G__44743 = expr__44738;
return (pred__44737.cljs$core$IFn$_invoke$arity$2 ? pred__44737.cljs$core$IFn$_invoke$arity$2(G__44742,G__44743) : pred__44737.call(null,G__44742,G__44743));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__44730,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44744 = cljs.core.cst$kw$params;
var G__44745 = expr__44738;
return (pred__44737.cljs$core$IFn$_invoke$arity$2 ? pred__44737.cljs$core$IFn$_invoke$arity$2(G__44744,G__44745) : pred__44737.call(null,G__44744,G__44745));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__44730,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44746 = cljs.core.cst$kw$packer;
var G__44747 = expr__44738;
return (pred__44737.cljs$core$IFn$_invoke$arity$2 ? pred__44737.cljs$core$IFn$_invoke$arity$2(G__44746,G__44747) : pred__44737.call(null,G__44746,G__44747));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__44730,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44748 = cljs.core.cst$kw$url;
var G__44749 = expr__44738;
return (pred__44737.cljs$core$IFn$_invoke$arity$2 ? pred__44737.cljs$core$IFn$_invoke$arity$2(G__44748,G__44749) : pred__44737.call(null,G__44748,G__44749));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__44730,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44750 = cljs.core.cst$kw$state_;
var G__44751 = expr__44738;
return (pred__44737.cljs$core$IFn$_invoke$arity$2 ? pred__44737.cljs$core$IFn$_invoke$arity$2(G__44750,G__44751) : pred__44737.call(null,G__44750,G__44751));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__44730,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44752 = cljs.core.cst$kw$instance_DASH_handle_;
var G__44753 = expr__44738;
return (pred__44737.cljs$core$IFn$_invoke$arity$2 ? pred__44737.cljs$core$IFn$_invoke$arity$2(G__44752,G__44753) : pred__44737.call(null,G__44752,G__44753));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__44730,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44754 = cljs.core.cst$kw$ever_DASH_opened_QMARK__;
var G__44755 = expr__44738;
return (pred__44737.cljs$core$IFn$_invoke$arity$2 ? pred__44737.cljs$core$IFn$_invoke$arity$2(G__44754,G__44755) : pred__44737.call(null,G__44754,G__44755));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__44730,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44756 = cljs.core.cst$kw$backoff_DASH_ms_DASH_fn;
var G__44757 = expr__44738;
return (pred__44737.cljs$core$IFn$_invoke$arity$2 ? pred__44737.cljs$core$IFn$_invoke$arity$2(G__44756,G__44757) : pred__44737.call(null,G__44756,G__44757));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__44730,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44758 = cljs.core.cst$kw$ajax_DASH_opts;
var G__44759 = expr__44738;
return (pred__44737.cljs$core$IFn$_invoke$arity$2 ? pred__44737.cljs$core$IFn$_invoke$arity$2(G__44758,G__44759) : pred__44737.call(null,G__44758,G__44759));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__44730,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44760 = cljs.core.cst$kw$curr_DASH_xhr_;
var G__44761 = expr__44738;
return (pred__44737.cljs$core$IFn$_invoke$arity$2 ? pred__44737.cljs$core$IFn$_invoke$arity$2(G__44760,G__44761) : pred__44737.call(null,G__44760,G__44761));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__44730,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9504__auto__,G__44730),null));
}
}
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9508__auto__){
var self__ = this;
var this__9508__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$client_DASH_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$packer,self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$instance_DASH_handle_,self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ever_DASH_opened_QMARK__,self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ajax_DASH_opts,self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$curr_DASH_xhr_,self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9495__auto__,G__44730){
var self__ = this;
var this__9495__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__44730,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9501__auto__,entry__9502__auto__){
var self__ = this;
var this__9501__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9502__auto__)){
return this__9501__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9501__auto____$1,entry__9502__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (chsk__$1){
return (function (p1__44724_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__44724_SHARP_,reason);
});})(chsk__$1))
);

var temp__5457__auto__ = cljs.core.deref(self__.curr_xhr_);
if(cljs.core.truth_(temp__5457__auto__)){
var x = temp__5457__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,cljs.core.cst$kw$requested_DASH_reconnect);

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__44762 = opts;
var map__44762__$1 = ((((!((map__44762 == null)))?((((map__44762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44762.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44762):map__44762);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44762__$1,cljs.core.cst$kw$timeout_DASH_ms);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44762__$1,cljs.core.cst$kw$cb);
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44762__$1,cljs.core.cst$kw$flush_QMARK_);
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var csrf_token = cljs.core.cst$kw$csrf_DASH_token.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_));
var G__44764_44785 = self__.url;
var G__44765_44786 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$timeout_DASH_ms,(function (){var or__8808__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = cljs.core.cst$kw$timeout_DASH_ms.cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$text,cljs.core.cst$kw$headers,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$X_DASH_CSRF_DASH_Token,csrf_token], null)], 0)),cljs.core.cst$kw$params,(function (){var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,(cljs.core.truth_(_QMARK_cb_fn)?cljs.core.cst$kw$ajax_DASH_cb:null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$csrf_DASH_token,csrf_token,cljs.core.cst$kw$client_DASH_id,self__.client_id,cljs.core.cst$kw$ppstr,ppstr], null)], 0));
})()], null)], 0));
var G__44766_44787 = ((function (G__44764_44785,G__44765_44786,csrf_token,map__44762,map__44762__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__44767){
var map__44768 = p__44767;
var map__44768__$1 = ((((!((map__44768 == null)))?((((map__44768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44768.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44768):map__44768);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44768__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44768__$1,cljs.core.cst$kw$_QMARK_content);
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,cljs.core.cst$kw$timeout)){
if(cljs.core.truth_(_QMARK_cb_fn)){
var G__44770 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__44770) : _QMARK_cb_fn.call(null,G__44770));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (map__44768,map__44768__$1,_QMARK_error,_QMARK_content,G__44764_44785,G__44765_44786,csrf_token,map__44762,map__44762__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__44725_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__44725_SHARP_,cljs.core.cst$kw$unexpected);
});})(map__44768,map__44768__$1,_QMARK_error,_QMARK_content,G__44764_44785,G__44765_44786,csrf_token,map__44762,map__44762__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__44771 = cljs.core.cst$kw$chsk_SLASH_error;
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__44771) : _QMARK_cb_fn.call(null,G__44771));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__44772 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44772,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44772,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(resp_clj) : _QMARK_cb_fn.call(null,resp_clj));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,cljs.core.cst$kw$chsk_SLASH_dummy_DASH_cb_DASH_200)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente",null,1202,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (content,resp_ppstr,vec__44772,resp_clj,___$1,map__44768,map__44768__$1,_QMARK_error,_QMARK_content,G__44764_44785,G__44765_44786,csrf_token,map__44762,map__44762__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__44772,resp_clj,___$1,map__44768,map__44768__$1,_QMARK_error,_QMARK_content,G__44764_44785,G__44765_44786,csrf_token,map__44762,map__44762__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-1172486676);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (content,resp_ppstr,vec__44772,resp_clj,___$1,map__44768,map__44768__$1,_QMARK_error,_QMARK_content,G__44764_44785,G__44765_44786,csrf_token,map__44762,map__44762__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__44726_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44726_SHARP_,cljs.core.cst$kw$open_QMARK_,true);
});})(content,resp_ppstr,vec__44772,resp_clj,___$1,map__44768,map__44768__$1,_QMARK_error,_QMARK_content,G__44764_44785,G__44765_44786,csrf_token,map__44762,map__44762__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(G__44764_44785,G__44765_44786,csrf_token,map__44762,map__44762__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
(taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__44764_44785,G__44765_44786,G__44766_44787) : taoensso.sente.ajax_lite.call(null,G__44764_44785,G__44765_44786,G__44766_44787));

return cljs.core.cst$kw$apparent_DASH_success;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_(self__.instance_handle_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var have_handle_QMARK_ = ((function (instance_handle,chsk__$1){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.instance_handle_),instance_handle);
});})(instance_handle,chsk__$1))
;
var poll_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,1212,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,340759461);

if(cljs.core.truth_(have_handle_QMARK_())){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_())){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente",null,1220,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-1562828453);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn(retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__44727_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44727_SHARP_,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect,udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
return cljs.core.reset_BANG_(self__.curr_xhr_,(function (){var G__44775 = self__.url;
var G__44776 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$timeout_DASH_ms,(function (){var or__8808__auto__ = cljs.core.cst$kw$timeout_DASH_ms.cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$text,cljs.core.cst$kw$params,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$client_DASH_id,self__.client_id], null),(cljs.core.truth_(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handshake_QMARK_,true], null))], 0))], null)], 0));
var G__44777 = ((function (G__44775,G__44776,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__44778){
var map__44779 = p__44778;
var map__44779__$1 = ((((!((map__44779 == null)))?((((map__44779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44779):map__44779);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44779__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44779__$1,cljs.core.cst$kw$_QMARK_content);
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,cljs.core.cst$kw$timeout)){
return taoensso$sente$poll_fn((0));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (map__44779,map__44779__$1,_QMARK_error,_QMARK_content,G__44775,G__44776,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__44728_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__44728_SHARP_,cljs.core.cst$kw$unexpected);
});})(map__44779,map__44779__$1,_QMARK_error,_QMARK_content,G__44775,G__44776,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__44781 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44781,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_(clj);
if(cljs.core.truth_(handshake_QMARK_)){
taoensso.sente.receive_handshake_BANG_(cljs.core.cst$kw$ajax,chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (content,ppstr,vec__44781,clj,handshake_QMARK_,map__44779,map__44779__$1,_QMARK_error,_QMARK_content,G__44775,G__44776,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__44729_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44729_SHARP_,cljs.core.cst$kw$open_QMARK_,true);
});})(content,ppstr,vec__44781,clj,handshake_QMARK_,map__44779,map__44779__$1,_QMARK_error,_QMARK_content,G__44775,G__44776,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

taoensso$sente$poll_fn((0));

if(cljs.core.truth_(handshake_QMARK_)){
return null;
} else {
var or__8808__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,cljs.core.cst$kw$chsk_SLASH_timeout))?(function (){
if(cljs.core.truth_(cljs.core.deref(taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_(self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$debug_SLASH_timeout], null)], null));
} else {
}

return cljs.core.cst$kw$noop;
})()
:null);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});})(G__44775,G__44776,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
;
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__44775,G__44776,G__44777) : taoensso.sente.ajax_lite.call(null,G__44775,G__44776,G__44777));
})());
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
poll_fn((0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$client_DASH_id,cljs.core.cst$sym$chs,cljs.core.cst$sym$params,cljs.core.cst$sym$packer,cljs.core.cst$sym$url,cljs.core.cst$sym$state_,cljs.core.cst$sym$instance_DASH_handle_,cljs.core.cst$sym$ever_DASH_opened_QMARK__,cljs.core.cst$sym$backoff_DASH_ms_DASH_fn,cljs.core.cst$sym$ajax_DASH_opts,cljs.core.cst$sym$curr_DASH_xhr_], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__9534__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__9534__auto__,writer__9535__auto__){
return cljs.core._write(writer__9535__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__44734){
return (new taoensso.sente.ChAjaxSocket(cljs.core.cst$kw$client_DASH_id.cljs$core$IFn$_invoke$arity$1(G__44734),cljs.core.cst$kw$chs.cljs$core$IFn$_invoke$arity$1(G__44734),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__44734),cljs.core.cst$kw$packer.cljs$core$IFn$_invoke$arity$1(G__44734),cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__44734),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__44734),cljs.core.cst$kw$instance_DASH_handle_.cljs$core$IFn$_invoke$arity$1(G__44734),cljs.core.cst$kw$ever_DASH_opened_QMARK__.cljs$core$IFn$_invoke$arity$1(G__44734),cljs.core.cst$kw$backoff_DASH_ms_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__44734),cljs.core.cst$kw$ajax_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__44734),cljs.core.cst$kw$curr_DASH_xhr_.cljs$core$IFn$_invoke$arity$1(G__44734),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44734,cljs.core.cst$kw$client_DASH_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$ajax_DASH_opts,cljs.core.cst$kw$curr_DASH_xhr_], 0))),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts){
return taoensso.sente.map__GT_ChAjaxSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$ajax,cljs.core.cst$kw$open_QMARK_,false,cljs.core.cst$kw$ever_DASH_opened_QMARK_,false], null)),cljs.core.cst$kw$instance_DASH_handle_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.cst$kw$curr_DASH_xhr_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9496__auto__,k__9497__auto__){
var self__ = this;
var this__9496__auto____$1 = this;
return this__9496__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9497__auto__,null);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9498__auto__,k44789,else__9499__auto__){
var self__ = this;
var this__9498__auto____$1 = this;
var G__44793 = k44789;
var G__44793__$1 = (((G__44793 instanceof cljs.core.Keyword))?G__44793.fqn:null);
switch (G__44793__$1) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44789,else__9499__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9510__auto__,writer__9511__auto__,opts__9512__auto__){
var self__ = this;
var this__9510__auto____$1 = this;
var pr_pair__9513__auto__ = ((function (this__9510__auto____$1){
return (function (keyval__9514__auto__){
return cljs.core.pr_sequential_writer(writer__9511__auto__,cljs.core.pr_writer,""," ","",opts__9512__auto__,keyval__9514__auto__);
});})(this__9510__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9511__auto__,pr_pair__9513__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__9512__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$impl_,self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44788){
var self__ = this;
var G__44788__$1 = this;
return (new cljs.core.RecordIter((0),G__44788__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,cljs.core.cst$kw$state_,cljs.core.cst$kw$impl_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9494__auto__){
var self__ = this;
var this__9494__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9491__auto__){
var self__ = this;
var this__9491__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9500__auto__){
var self__ = this;
var this__9500__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9492__auto__){
var self__ = this;
var this__9492__auto____$1 = this;
var h__9264__auto__ = self__.__hash;
if(!((h__9264__auto__ == null))){
return h__9264__auto__;
} else {
var h__9264__auto____$1 = (function (){var fexpr__44794 = ((function (h__9264__auto__,this__9492__auto____$1){
return (function (coll__9493__auto__){
return (-1193508708 ^ cljs.core.hash_unordered_coll(coll__9493__auto__));
});})(h__9264__auto__,this__9492__auto____$1))
;
return fexpr__44794(this__9492__auto____$1);
})();
self__.__hash = h__9264__auto____$1;

return h__9264__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44790,other44791){
var self__ = this;
var this44790__$1 = this;
return (!((other44791 == null))) && ((this44790__$1.constructor === other44791.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44790__$1.ws_chsk_opts,other44791.ws_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44790__$1.ajax_chsk_opts,other44791.ajax_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44790__$1.state_,other44791.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44790__$1.impl_,other44791.impl_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44790__$1.__extmap,other44791.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9505__auto__,k__9506__auto__){
var self__ = this;
var this__9505__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$impl_,null,cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,null,cljs.core.cst$kw$state_,null,cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,null], null), null),k__9506__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9505__auto____$1),self__.__meta),k__9506__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9506__auto__)),null));
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9503__auto__,k__9504__auto__,G__44788){
var self__ = this;
var this__9503__auto____$1 = this;
var pred__44795 = cljs.core.keyword_identical_QMARK_;
var expr__44796 = k__9504__auto__;
if(cljs.core.truth_((function (){var G__44798 = cljs.core.cst$kw$ws_DASH_chsk_DASH_opts;
var G__44799 = expr__44796;
return (pred__44795.cljs$core$IFn$_invoke$arity$2 ? pred__44795.cljs$core$IFn$_invoke$arity$2(G__44798,G__44799) : pred__44795.call(null,G__44798,G__44799));
})())){
return (new taoensso.sente.ChAutoSocket(G__44788,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44800 = cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts;
var G__44801 = expr__44796;
return (pred__44795.cljs$core$IFn$_invoke$arity$2 ? pred__44795.cljs$core$IFn$_invoke$arity$2(G__44800,G__44801) : pred__44795.call(null,G__44800,G__44801));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__44788,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44802 = cljs.core.cst$kw$state_;
var G__44803 = expr__44796;
return (pred__44795.cljs$core$IFn$_invoke$arity$2 ? pred__44795.cljs$core$IFn$_invoke$arity$2(G__44802,G__44803) : pred__44795.call(null,G__44802,G__44803));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__44788,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44804 = cljs.core.cst$kw$impl_;
var G__44805 = expr__44796;
return (pred__44795.cljs$core$IFn$_invoke$arity$2 ? pred__44795.cljs$core$IFn$_invoke$arity$2(G__44804,G__44805) : pred__44795.call(null,G__44804,G__44805));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__44788,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9504__auto__,G__44788),null));
}
}
}
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9508__auto__){
var self__ = this;
var this__9508__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$impl_,self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9495__auto__,G__44788){
var self__ = this;
var this__9495__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__44788,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9501__auto__,entry__9502__auto__){
var self__ = this;
var this__9501__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9502__auto__)){
return this__9501__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9501__auto____$1,entry__9502__auto__);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__5457__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5457__auto__)){
var impl = temp__5457__auto__;
return taoensso.sente._chsk_disconnect_BANG_(impl,reason);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5457__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5457__auto__)){
var impl = temp__5457__auto__;
taoensso.sente._chsk_disconnect_BANG_(impl,cljs.core.cst$kw$requested_DASH_reconnect);

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__5455__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5455__auto__)){
var impl = temp__5455__auto__;
return taoensso.sente._chsk_send_BANG_(impl,ev,opts);
} else {
var map__44806 = opts;
var map__44806__$1 = ((((!((map__44806 == null)))?((((map__44806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44806):map__44806);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44806__$1,cljs.core.cst$kw$cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ajax_chsk_opts,cljs.core.cst$kw$state_,self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ws_chsk_opts,cljs.core.cst$kw$state_,self__.state_);
var ajax_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1){
return (function (){
cljs.core.remove_watch(self__.state_,cljs.core.cst$kw$chsk_SLASH_auto_DASH_ajax_DASH_downgrade);

return taoensso.sente._chsk_connect_BANG_(taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1))
;
var ws_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
var downgraded_QMARK___44809 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.core.add_watch(self__.state_,cljs.core.cst$kw$chsk_SLASH_auto_DASH_ajax_DASH_downgrade,((function (downgraded_QMARK___44809,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (_,___$1,old_state,new_state){
var temp__5457__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5457__auto__)){
var impl = temp__5457__auto__;
var temp__5457__auto____$1 = cljs.core.cst$kw$ever_DASH_opened_QMARK__.cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ever_opened_QMARK__ = temp__5457__auto____$1;
if(cljs.core.truth_(cljs.core.deref(ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$last_DASH_error.cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(downgraded_QMARK___44809,false,true))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente",null,1348,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__5457__auto____$1,impl,temp__5457__auto__,downgraded_QMARK___44809,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__5457__auto____$1,impl,temp__5457__auto__,downgraded_QMARK___44809,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,-1632531256);

taoensso.sente._chsk_disconnect_BANG_(impl,cljs.core.cst$kw$downgrading_DASH_ws_DASH_to_DASH_ajax);

return cljs.core.reset_BANG_(self__.impl_,ajax_conn_BANG_());
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});})(downgraded_QMARK___44809,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
);

return taoensso.sente._chsk_connect_BANG_(taoensso.sente.new_ChWebSocket(ws_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
;
cljs.core.reset_BANG_(self__.impl_,(function (){var or__8808__auto__ = ws_conn_BANG_();
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return ajax_conn_BANG_();
}
})());

return chsk__$1;
});

taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ws_DASH_chsk_DASH_opts,cljs.core.cst$sym$ajax_DASH_chsk_DASH_opts,cljs.core.cst$sym$state_,cljs.core.cst$sym$impl_], null);
});

taoensso.sente.ChAutoSocket.cljs$lang$type = true;

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__9534__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__9534__auto__,writer__9535__auto__){
return cljs.core._write(writer__9535__auto__,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__44792){
return (new taoensso.sente.ChAutoSocket(cljs.core.cst$kw$ws_DASH_chsk_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__44792),cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__44792),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__44792),cljs.core.cst$kw$impl_.cljs$core$IFn$_invoke$arity$1(G__44792),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44792,cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,cljs.core.cst$kw$state_,cljs.core.cst$kw$impl_], 0))),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$auto,cljs.core.cst$kw$open_QMARK_,false,cljs.core.cst$kw$ever_DASH_opened_QMARK_,false], null)),cljs.core.cst$kw$impl_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__44810 = protocol;
var G__44810__$1 = (((G__44810 instanceof cljs.core.Keyword))?G__44810.fqn:null);
switch (G__44810__$1) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if(cljs.core.truth_((function (){var fexpr__44813 = ((function (protocol__$1){
return (function (x){
return cljs.core.contains_QMARK_((function (){var G__44814 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__44814) : taoensso.truss.impl.set_STAR_.call(null,G__44814));
})(),x);
});})(protocol__$1))
;
return fexpr__44813(protocol__$1);
})())){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44811){if((e44811 instanceof Error)){
var e = e44811;
return e;
} else {
throw e44811;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1368,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__44815 = type;
var G__44815__$1 = (((G__44815 instanceof cljs.core.Keyword))?G__44815.fqn:null);
switch (G__44815__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__44816 = protocol__$2;
switch (G__44816) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44816)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44815__$1)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$3),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([host,path], 0)))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *     :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___44846 = arguments.length;
var i__10088__auto___44847 = (0);
while(true){
if((i__10088__auto___44847 < len__10087__auto___44846)){
args__10094__auto__.push((arguments[i__10088__auto___44847]));

var G__44848 = (i__10088__auto___44847 + (1));
i__10088__auto___44847 = G__44848;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__44822){
var vec__44823 = p__44822;
var map__44826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44823,(0),null);
var map__44826__$1 = ((((!((map__44826 == null)))?((((map__44826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44826):map__44826);
var opts = map__44826__$1;
var ajax_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44826__$1,cljs.core.cst$kw$ajax_DASH_opts);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44826__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$secs,(20)], 0)));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44826__$1,cljs.core.cst$kw$client_DASH_id,(function (){var or__8808__auto__ = cljs.core.cst$kw$client_DASH_uuid.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44826__$1,cljs.core.cst$kw$protocol);
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44826__$1,cljs.core.cst$kw$packer,cljs.core.cst$kw$edn);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44826__$1,cljs.core.cst$kw$params);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44826__$1,cljs.core.cst$kw$type,cljs.core.cst$kw$auto);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44826__$1,cljs.core.cst$kw$host);
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44826__$1,cljs.core.cst$kw$recv_DASH_buf_DASH_or_DASH_n,cljs.core.async.sliding_buffer((2048)));
var backoff_ms_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44826__$1,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44826__$1,cljs.core.cst$kw$wrap_DASH_recv_DASH_evs_QMARK_,true);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44823,(1),null);
var e_44849 = (function (){try{if(cljs.core.truth_((function (){var fexpr__44830 = ((function (vec__44823,map__44826,map__44826__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_((function (){var G__44831 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,null,cljs.core.cst$kw$ajax,null,cljs.core.cst$kw$auto,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__44831) : taoensso.truss.impl.set_STAR_.call(null,G__44831));
})(),x);
});})(vec__44823,map__44826,map__44826__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
return fexpr__44830(type);
})())){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44828){if((e44828 instanceof Error)){
var e = e44828;
return e;
} else {
throw e44828;

}
}})();
if((e_44849 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1410,"([:in #{:ws :ajax :auto}] type)",type,e_44849,null);
}

var e_44850 = (function (){try{if(taoensso.encore.nblank_str_QMARK_(client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44832){if((e44832 instanceof Error)){
var e = e44832;
return e;
} else {
throw e44832;

}
}})();
if((e_44850 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1411,"(enc/nblank-str? client-id)",client_id,e_44850,null);
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente",null,1413,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__44823,map__44826,map__44826__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__44823,map__44826,map__44826__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-1742386523);
} else {
}

if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$lp_DASH_timeout)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente",null,1414,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__44823,map__44826,map__44826__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__44823,map__44826,map__44826__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-725699819);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var vec__44833 = (function (){var win_loc = taoensso.encore.get_win_loc();
var path__$1 = (function (){var or__8808__auto__ = path;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.cst$kw$pathname.cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__5455__auto__ = cljs.core.cst$kw$chsk_DASH_url_DASH_fn.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44836 = path__$1;
var G__44837 = win_loc;
var G__44838 = cljs.core.cst$kw$ws;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44836,G__44837,G__44838) : f.call(null,G__44836,G__44837,G__44838));
})(),(function (){var G__44839 = path__$1;
var G__44840 = win_loc;
var G__44841 = cljs.core.cst$kw$ajax;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44839,G__44840,G__44841) : f.call(null,G__44839,G__44840,G__44841));
})()], null);
} else {
var protocol__$1 = (function (){var or__8808__auto__ = protocol;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
return cljs.core.cst$kw$http;
}
}
})();
var host__$1 = (function (){var or__8808__auto__ = host;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,cljs.core.cst$kw$ws),taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,cljs.core.cst$kw$ajax)], null);
}
})();
var ws_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44833,(0),null);
var ajax_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44833,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$internal,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((128))),cljs.core.cst$kw$state,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),cljs.core.cst$kw$_LT_server,(function (){var buf = cljs.core.async.sliding_buffer((512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (buf,packer__$1,vec__44833,ws_url,ajax_url,vec__44823,map__44826,map__44826__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_recv,ev], null);
});})(buf,packer__$1,vec__44833,ws_url,ajax_url,vec__44823,map__44826,map__44826__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$chs,private_chs,cljs.core.cst$kw$params,params,cljs.core.cst$kw$packer,packer__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,ws_url,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,backoff_ms_fn], null)], 0));
var ajax_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,ajax_url,cljs.core.cst$kw$ajax_DASH_opts,ajax_opts,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,backoff_ms_fn], null)], 0));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,ws_chsk_opts,cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_((function (){var G__44842 = type;
var G__44842__$1 = (((G__44842 instanceof cljs.core.Keyword))?G__44842.fqn:null);
switch (G__44842__$1) {
case "ws":
return taoensso.sente.new_ChWebSocket(ws_chsk_opts);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket(auto_chsk_opts);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44842__$1)].join('')));

}
})());
var temp__5455__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__5455__auto__)){
var chsk = temp__5455__auto__;
var chsk_state_ = cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__5455__auto__,packer__$1,vec__44833,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__44823,map__44826,map__44826__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__44843 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44843,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44843,(1),null);
var ev__$1 = vec__44843;
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$ch_DASH_recv,internal_ch,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$state,chsk_state_,cljs.core.cst$kw$event,ev__$1,cljs.core.cst$kw$id,ev_id,cljs.core.cst$kw$_QMARK_data,ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__5455__auto__,packer__$1,vec__44833,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__44823,map__44826,map__44826__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$chsk,chsk,cljs.core.cst$kw$ch_DASH_recv,ev_msg_ch,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$state,cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente",null,1502,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__5455__auto__,packer__$1,vec__44833,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__44823,map__44826,map__44826__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__5455__auto__,packer__$1,vec__44833,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__44823,map__44826,map__44826__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-666831776);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq44820){
var G__44821 = cljs.core.first(seq44820);
var seq44820__$1 = cljs.core.next(seq44820);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44821,seq44820__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__44852 = opts;
var map__44852__$1 = ((((!((map__44852 == null)))?((((map__44852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44852):map__44852);
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44852__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44852__$1,cljs.core.cst$kw$error_DASH_handler);
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44852__$1,cljs.core.cst$kw$simple_DASH_auto_DASH_threading_QMARK_);
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var execute1 = ((function (map__44852,map__44852__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});})(map__44852,map__44852__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__21958__auto___44930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto___44930,map__44852,map__44852__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto___44930,map__44852,map__44852__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_44899){
var state_val_44900 = (state_44899[(1)]);
if((state_val_44900 === (7))){
var inst_44895 = (state_44899[(2)]);
var state_44899__$1 = state_44899;
var statearr_44901_44931 = state_44899__$1;
(statearr_44901_44931[(2)] = inst_44895);

(statearr_44901_44931[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (1))){
var state_44899__$1 = state_44899;
var statearr_44902_44932 = state_44899__$1;
(statearr_44902_44932[(2)] = null);

(statearr_44902_44932[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (4))){
var inst_44865 = (state_44899[(7)]);
var inst_44864 = (state_44899[(8)]);
var inst_44862 = (state_44899[(9)]);
var inst_44862__$1 = (state_44899[(2)]);
var inst_44863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44862__$1,(0),null);
var inst_44864__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44862__$1,(1),null);
var inst_44865__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44864__$1,ch_ctrl);
var state_44899__$1 = (function (){var statearr_44903 = state_44899;
(statearr_44903[(7)] = inst_44865__$1);

(statearr_44903[(8)] = inst_44864__$1);

(statearr_44903[(10)] = inst_44863);

(statearr_44903[(9)] = inst_44862__$1);

return statearr_44903;
})();
if(inst_44865__$1){
var statearr_44904_44933 = state_44899__$1;
(statearr_44904_44933[(1)] = (5));

} else {
var statearr_44905_44934 = state_44899__$1;
(statearr_44905_44934[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (15))){
var inst_44863 = (state_44899[(10)]);
var state_44899__$1 = state_44899;
var statearr_44906_44935 = state_44899__$1;
(statearr_44906_44935[(2)] = inst_44863);

(statearr_44906_44935[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (13))){
var inst_44881 = (state_44899[(2)]);
var state_44899__$1 = state_44899;
var statearr_44907_44936 = state_44899__$1;
(statearr_44907_44936[(2)] = inst_44881);

(statearr_44907_44936[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (6))){
var inst_44863 = (state_44899[(10)]);
var inst_44870 = (inst_44863 == null);
var inst_44871 = cljs.core.not(inst_44870);
var state_44899__$1 = state_44899;
if(inst_44871){
var statearr_44908_44937 = state_44899__$1;
(statearr_44908_44937[(1)] = (8));

} else {
var statearr_44909_44938 = state_44899__$1;
(statearr_44909_44938[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (3))){
var inst_44897 = (state_44899[(2)]);
var state_44899__$1 = state_44899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44899__$1,inst_44897);
} else {
if((state_val_44900 === (12))){
var state_44899__$1 = state_44899;
var statearr_44910_44939 = state_44899__$1;
(statearr_44910_44939[(2)] = false);

(statearr_44910_44939[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (2))){
var inst_44858 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44859 = [ch_recv,ch_ctrl];
var inst_44860 = (new cljs.core.PersistentVector(null,2,(5),inst_44858,inst_44859,null));
var state_44899__$1 = state_44899;
return cljs.core.async.ioc_alts_BANG_(state_44899__$1,(4),inst_44860);
} else {
if((state_val_44900 === (11))){
var state_44899__$1 = state_44899;
var statearr_44911_44940 = state_44899__$1;
(statearr_44911_44940[(2)] = true);

(statearr_44911_44940[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (9))){
var state_44899__$1 = state_44899;
var statearr_44912_44941 = state_44899__$1;
(statearr_44912_44941[(2)] = false);

(statearr_44912_44941[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (5))){
var state_44899__$1 = state_44899;
var statearr_44913_44942 = state_44899__$1;
(statearr_44913_44942[(2)] = null);

(statearr_44913_44942[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (14))){
var inst_44863 = (state_44899[(10)]);
var inst_44886 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44863);
var state_44899__$1 = state_44899;
var statearr_44914_44943 = state_44899__$1;
(statearr_44914_44943[(2)] = inst_44886);

(statearr_44914_44943[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (16))){
var inst_44865 = (state_44899[(7)]);
var inst_44864 = (state_44899[(8)]);
var inst_44863 = (state_44899[(10)]);
var inst_44862 = (state_44899[(9)]);
var inst_44889 = (state_44899[(2)]);
var inst_44890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44889,cljs.core.cst$kw$event);
var inst_44891 = (function (){var vec__44855 = inst_44862;
var v = inst_44863;
var p = inst_44864;
var stop_QMARK_ = inst_44865;
var map__44868 = inst_44889;
var event_msg = inst_44889;
var event = inst_44890;
return ((function (vec__44855,v,p,stop_QMARK_,map__44868,event_msg,event,inst_44865,inst_44864,inst_44863,inst_44862,inst_44889,inst_44890,state_val_44900,c__21958__auto___44930,map__44852,map__44852__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,1529,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__44855,v,p,stop_QMARK_,map__44868,event_msg,event,inst_44865,inst_44864,inst_44863,inst_44862,inst_44889,inst_44890,state_val_44900,c__21958__auto___44930,map__44852,map__44852__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__44855,v,p,stop_QMARK_,map__44868,event_msg,event,inst_44865,inst_44864,inst_44863,inst_44862,inst_44889,inst_44890,state_val_44900,c__21958__auto___44930,map__44852,map__44852__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-513193523);
} else {
}

var G__44917 = (cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.server_event_msg_QMARK_(event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44918){if((e44918 instanceof Error)){
var e = e44918;
return e;
} else {
throw e44918;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1532,"(server-event-msg? event-msg)",event_msg,e,null);
}
})():(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.client_event_msg_QMARK_(event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44919){if((e44919 instanceof Error)){
var e = e44919;
return e;
} else {
throw e44919;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1533,"(client-event-msg? event-msg)",event_msg,e,null);
}
})());
return (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(G__44917) : event_msg_handler.call(null,G__44917));
}catch (e44915){if((e44915 instanceof Error)){
var e1 = e44915;
try{var temp__5455__auto__ = error_handler;
if(cljs.core.truth_(temp__5455__auto__)){
var eh = temp__5455__auto__;
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(e1,event_msg) : error_handler.call(null,e1,event_msg));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente",null,1538,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__5455__auto__,e1,vec__44855,v,p,stop_QMARK_,map__44868,event_msg,event,inst_44865,inst_44864,inst_44863,inst_44862,inst_44889,inst_44890,state_val_44900,c__21958__auto___44930,map__44852,map__44852__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__5455__auto__,e1,vec__44855,v,p,stop_QMARK_,map__44868,event_msg,event,inst_44865,inst_44864,inst_44863,inst_44862,inst_44889,inst_44890,state_val_44900,c__21958__auto___44930,map__44852,map__44852__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,1203018106);
}
}catch (e44916){if((e44916 instanceof Error)){
var e2 = e44916;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente",null,1539,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e2,e1,vec__44855,v,p,stop_QMARK_,map__44868,event_msg,event,inst_44865,inst_44864,inst_44863,inst_44862,inst_44889,inst_44890,state_val_44900,c__21958__auto___44930,map__44852,map__44852__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__44855,v,p,stop_QMARK_,map__44868,event_msg,event,inst_44865,inst_44864,inst_44863,inst_44862,inst_44889,inst_44890,state_val_44900,c__21958__auto___44930,map__44852,map__44852__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,1610664126);
} else {
throw e44916;

}
}} else {
throw e44915;

}
}});
;})(vec__44855,v,p,stop_QMARK_,map__44868,event_msg,event,inst_44865,inst_44864,inst_44863,inst_44862,inst_44889,inst_44890,state_val_44900,c__21958__auto___44930,map__44852,map__44852__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_44892 = execute1(inst_44891);
var state_44899__$1 = (function (){var statearr_44920 = state_44899;
(statearr_44920[(11)] = inst_44892);

return statearr_44920;
})();
var statearr_44921_44944 = state_44899__$1;
(statearr_44921_44944[(2)] = null);

(statearr_44921_44944[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (10))){
var inst_44884 = (state_44899[(2)]);
var state_44899__$1 = state_44899;
if(cljs.core.truth_(inst_44884)){
var statearr_44922_44945 = state_44899__$1;
(statearr_44922_44945[(1)] = (14));

} else {
var statearr_44923_44946 = state_44899__$1;
(statearr_44923_44946[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (8))){
var inst_44863 = (state_44899[(10)]);
var inst_44873 = inst_44863.cljs$lang$protocol_mask$partition0$;
var inst_44874 = (inst_44873 & (64));
var inst_44875 = inst_44863.cljs$core$ISeq$;
var inst_44876 = (cljs.core.PROTOCOL_SENTINEL === inst_44875);
var inst_44877 = (inst_44874) || (inst_44876);
var state_44899__$1 = state_44899;
if(cljs.core.truth_(inst_44877)){
var statearr_44924_44947 = state_44899__$1;
(statearr_44924_44947[(1)] = (11));

} else {
var statearr_44925_44948 = state_44899__$1;
(statearr_44925_44948[(1)] = (12));

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
});})(c__21958__auto___44930,map__44852,map__44852__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__21856__auto__,c__21958__auto___44930,map__44852,map__44852__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__21857__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__21857__auto____0 = (function (){
var statearr_44926 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44926[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__21857__auto__);

(statearr_44926[(1)] = (1));

return statearr_44926;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__21857__auto____1 = (function (state_44899){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_44899);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e44927){if((e44927 instanceof Object)){
var ex__21860__auto__ = e44927;
var statearr_44928_44949 = state_44899;
(statearr_44928_44949[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44899);

return cljs.core.cst$kw$recur;
} else {
throw e44927;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__44950 = state_44899;
state_44899 = G__44950;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__21857__auto__ = function(state_44899){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__21857__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__21857__auto____1.call(this,state_44899);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__21857__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__21857__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto___44930,map__44852,map__44852__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__21960__auto__ = (function (){var statearr_44929 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_44929[(6)] = c__21958__auto___44930);

return statearr_44929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto___44930,map__44852,map__44852__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__44852,map__44852__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_(ch_ctrl);
});
;})(map__44852,map__44852__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___44960 = arguments.length;
var i__10088__auto___44961 = (0);
while(true){
if((i__10088__auto___44961 < len__10087__auto___44960)){
args__10094__auto__.push((arguments[i__10088__auto___44961]));

var G__44962 = (i__10088__auto___44961 + (1));
i__10088__auto___44961 = G__44962;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__44954){
var vec__44955 = p__44954;
var map__44958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44955,(0),null);
var map__44958__$1 = ((((!((map__44958 == null)))?((((map__44958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44958):map__44958);
var opts = map__44958__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44958__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44958__$1,cljs.core.cst$kw$error_DASH_handler);
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44958__$1,cljs.core.cst$kw$simple_DASH_auto_DASH_threading_QMARK_);
return taoensso.sente._start_chsk_router_BANG_(cljs.core.cst$kw$server,ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq44951){
var G__44952 = cljs.core.first(seq44951);
var seq44951__$1 = cljs.core.next(seq44951);
var G__44953 = cljs.core.first(seq44951__$1);
var seq44951__$2 = cljs.core.next(seq44951__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44952,G__44953,seq44951__$2);
});

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___44972 = arguments.length;
var i__10088__auto___44973 = (0);
while(true){
if((i__10088__auto___44973 < len__10087__auto___44972)){
args__10094__auto__.push((arguments[i__10088__auto___44973]));

var G__44974 = (i__10088__auto___44973 + (1));
i__10088__auto___44973 = G__44974;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__44966){
var vec__44967 = p__44966;
var map__44970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44967,(0),null);
var map__44970__$1 = ((((!((map__44970 == null)))?((((map__44970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44970):map__44970);
var opts = map__44970__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44970__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44970__$1,cljs.core.cst$kw$error_DASH_handler);
return taoensso.sente._start_chsk_router_BANG_(cljs.core.not(cljs.core.cst$kw$server),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq44963){
var G__44964 = cljs.core.first(seq44963);
var seq44963__$1 = cljs.core.next(seq44963);
var G__44965 = cljs.core.first(seq44963__$1);
var seq44963__$2 = cljs.core.next(seq44963__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44964,G__44965,seq44963__$2);
});

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_(ch_recv,(function (ev_msg){
var G__44975 = cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__44976 = cljs.core.cst$kw$ch_DASH_recv.cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__44975,G__44976) : event_handler.call(null,G__44975,G__44976));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;

/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__44977,websocket_QMARK_){
var map__44978 = p__44977;
var map__44978__$1 = ((((!((map__44978 == null)))?((((map__44978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44978):map__44978);
var location = map__44978__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44978__$1,cljs.core.cst$kw$protocol);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44978__$1,cljs.core.cst$kw$host);
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44978__$1,cljs.core.cst$kw$pathname);
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__8808__auto__ = path;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return pathname;
}
})())].join('');
});
