// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('aikakonematka.web_socket');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('taoensso.sente');
goog.require('aikakonematka.config');
goog.require('aikakonematka.util');
goog.require('aikakonematka.game');
goog.require('aikakonematka.sound');
/**
 * Connect to a configured server instead of the page host
 */
aikakonematka.web_socket.get_chsk_url = (function aikakonematka$web_socket$get_chsk_url(protocol,chsk_host,chsk_path,type){
var protocol__$1 = (function (){var G__44984 = type;
var G__44984__$1 = (((G__44984 instanceof cljs.core.Keyword))?G__44984.fqn:null);
switch (G__44984__$1) {
case "ajax":
return protocol;

break;
case "ws":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https:")){
return "wss:";
} else {
return "ws:";
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44984__$1)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(aikakonematka.config.backend_host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chsk_path)].join('');
});
if(typeof aikakonematka.web_socket.channel_socket !== 'undefined'){
} else {
aikakonematka.web_socket.channel_socket = (function (){var get_chsk_url44986 = taoensso.sente.get_chsk_url;
taoensso.sente.get_chsk_url = aikakonematka.web_socket.get_chsk_url;

try{var G__44987 = "/chsk";
var G__44988 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$auto], null);
return (taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$2 ? taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$2(G__44987,G__44988) : taoensso.sente.make_channel_socket_BANG_.call(null,G__44987,G__44988));
}finally {taoensso.sente.get_chsk_url = get_chsk_url44986;
}})();
}
if(typeof aikakonematka.web_socket.ch_chsk !== 'undefined'){
} else {
aikakonematka.web_socket.ch_chsk = cljs.core.cst$kw$ch_DASH_recv.cljs$core$IFn$_invoke$arity$1(aikakonematka.web_socket.channel_socket);
}
if(typeof aikakonematka.web_socket.chsk_send_BANG_ !== 'undefined'){
} else {
aikakonematka.web_socket.chsk_send_BANG_ = cljs.core.cst$kw$send_DASH_fn.cljs$core$IFn$_invoke$arity$1(aikakonematka.web_socket.channel_socket);
}
aikakonematka.web_socket.send_game_start_BANG_ = (function aikakonematka$web_socket$send_game_start_BANG_(){
var G__44989 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aikakone_SLASH_game_DASH_start], null);
return (aikakonematka.web_socket.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.web_socket.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__44989) : aikakonematka.web_socket.chsk_send_BANG_.call(null,G__44989));
});
aikakonematka.web_socket.send_sprites_state_BANG_ = (function aikakonematka$web_socket$send_sprites_state_BANG_(){
var G__44990 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aikakone_SLASH_sprites_DASH_state,cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state))], null);
return (aikakonematka.web_socket.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.web_socket.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__44990) : aikakonematka.web_socket.chsk_send_BANG_.call(null,G__44990));
});
aikakonematka.web_socket.send_start_timer_BANG_ = (function aikakonematka$web_socket$send_start_timer_BANG_(){
var G__44991 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aikakone_SLASH_start_DASH_timer,null], null);
return (aikakonematka.web_socket.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.web_socket.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__44991) : aikakonematka.web_socket.chsk_send_BANG_.call(null,G__44991));
});
aikakonematka.web_socket.send_reset_BANG_ = (function aikakonematka$web_socket$send_reset_BANG_(){
var G__44992 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aikakone_SLASH_reset,null], null);
return (aikakonematka.web_socket.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.web_socket.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__44992) : aikakonematka.web_socket.chsk_send_BANG_.call(null,G__44992));
});
aikakonematka.web_socket.send_puzzle_complete_BANG_ = (function aikakonematka$web_socket$send_puzzle_complete_BANG_(play_time){
var G__44993 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aikakone_SLASH_puzzle_DASH_complete_BANG_,play_time], null);
return (aikakonematka.web_socket.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.web_socket.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__44993) : aikakonematka.web_socket.chsk_send_BANG_.call(null,G__44993));
});
aikakonematka.web_socket.send_button_music_notes_BANG_ = (function aikakonematka$web_socket$send_button_music_notes_BANG_(note){
var G__44994 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aikakone_SLASH_music,note], null);
return (aikakonematka.web_socket.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.web_socket.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__44994) : aikakonematka.web_socket.chsk_send_BANG_.call(null,G__44994));
});
if(typeof aikakonematka.web_socket.event_msg_handler !== 'undefined'){
} else {
aikakonematka.web_socket.event_msg_handler = (function (){var method_table__9863__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9864__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9865__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9866__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9867__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("aikakonematka.web-socket","event-msg-handler"),cljs.core.cst$kw$id,cljs.core.cst$kw$default,hierarchy__9867__auto__,method_table__9863__auto__,prefer_table__9864__auto__,method_cache__9865__auto__,cached_hierarchy__9866__auto__));
})();
}
aikakonematka.web_socket.event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__44995){
var map__44996 = p__44995;
var map__44996__$1 = ((((!((map__44996 == null)))?((((map__44996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44996.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44996):map__44996);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44996__$1,cljs.core.cst$kw$event);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unhandled event: ",event], 0));
}));
aikakonematka.web_socket.event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$chsk_SLASH_state,(function (p__44998){
var map__44999 = p__44998;
var map__44999__$1 = ((((!((map__44999 == null)))?((((map__44999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44999.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44999):map__44999);
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44999__$1,cljs.core.cst$kw$_QMARK_data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$first_DASH_open_QMARK_,true], null))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Channel socket successfully established!"], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Channel socket state change:",_QMARK_data], 0));
}
}));
aikakonematka.web_socket.event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$chsk_SLASH_recv,(function (p__45001){
var map__45002 = p__45001;
var map__45002__$1 = ((((!((map__45002 == null)))?((((map__45002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45002.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45002):map__45002);
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45002__$1,cljs.core.cst$kw$_QMARK_data);
var vec__45004 = _QMARK_data;
var event_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45004,(0),null);
var event_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45004,(1),null);
var G__45007 = event_id;
var G__45007__$1 = (((G__45007 instanceof cljs.core.Keyword))?G__45007.fqn:null);
switch (G__45007__$1) {
case "aikakone/sprites-state":
aikakonematka.util.synchronize_puzzle_board_when_playing_BANG_(event_data);

return aikakonematka.util.congrats_finish_game_BANG_(aikakonematka.web_socket.send_puzzle_complete_BANG_);

break;
case "aikakone/game-start":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.assoc,cljs.core.cst$kw$sprites_DASH_state,event_data);

aikakonematka.util.set_game_play_state_BANG_(cljs.core.cst$kw$playing);

aikakonematka.game.display_puzzle_board_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$send_DASH_start_DASH_timer_DASH_fn_BANG_,aikakonematka.web_socket.send_start_timer_BANG_], null));

return aikakonematka.web_socket.send_sprites_state_BANG_();

break;
case "aikakone/current-time":
if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.core.cst$kw$play_DASH_time_DASH_text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state));
if(cljs.core.truth_(and__8796__auto__)){
return aikakonematka.util.currently_playing_game_QMARK_();
} else {
return and__8796__auto__;
}
})())){
return aikakonematka.util.update_play_time_to_current_time_BANG_(event_data);
} else {
return null;
}

break;
case "aikakone/reset":
return aikakonematka.util.reset_game_BANG_();

break;
case "aikakone/music":
if(cljs.core.truth_(cljs.core.cst$kw$audio_DASH_on_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)))){
return aikakonematka.util.update_music_notes_BANG_(event_data);
} else {
return null;
}

break;
default:
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_id," is unknown event type"], 0));

}
}));
aikakonematka.web_socket.send_uid = (function aikakonematka$web_socket$send_uid(){
var G__45009 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aikakone_SLASH_uid,cljs.core.cst$kw$uid.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state))], null);
return (aikakonematka.web_socket.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.web_socket.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__45009) : aikakonematka.web_socket.chsk_send_BANG_.call(null,G__45009));
});
aikakonematka.web_socket.event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$chsk_SLASH_handshake,(function (p__45010){
var map__45011 = p__45010;
var map__45011__$1 = ((((!((map__45011 == null)))?((((map__45011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45011.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45011):map__45011);
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45011__$1,cljs.core.cst$kw$_QMARK_data);
var vec__45013 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45013,(0),null);
var _QMARK_csrf_token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45013,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45013,(2),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Handshake:",_QMARK_data], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.assoc,cljs.core.cst$kw$uid,_QMARK_uid);

return aikakonematka.web_socket.send_uid();
}));
aikakonematka.web_socket.start_web_socket_BANG_ = (function aikakonematka$web_socket$start_web_socket_BANG_(){
return (taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$2 ? taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$2(aikakonematka.web_socket.ch_chsk,aikakonematka.web_socket.event_msg_handler) : taoensso.sente.start_chsk_router_BANG_.call(null,aikakonematka.web_socket.ch_chsk,aikakonematka.web_socket.event_msg_handler));
});
