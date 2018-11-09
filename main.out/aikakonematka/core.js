// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('aikakonematka.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('aikakonematka.components');
goog.require('aikakonematka.web_socket');
goog.require('aikakonematka.util');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('nightlight.repl_server');
cljs.core.enable_console_print_BANG_();
aikakonematka.core.add_game_img_url_to_DB_BANG_ = (function aikakonematka$core$add_game_img_url_to_DB_BANG_(search_keyword){
var c__21958__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto__){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto__){
return (function (state_49279){
var state_val_49280 = (state_49279[(1)]);
if((state_val_49280 === (1))){
var inst_49256 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_,cljs.core.cst$kw$query_DASH_params];
var inst_49257 = ["lookfor"];
var inst_49258 = [search_keyword];
var inst_49259 = cljs.core.PersistentHashMap.fromArrays(inst_49257,inst_49258);
var inst_49260 = [false,inst_49259];
var inst_49261 = cljs.core.PersistentHashMap.fromArrays(inst_49256,inst_49260);
var inst_49262 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("https://api.finna.fi/v1/search",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_49261], 0));
var state_49279__$1 = state_49279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49279__$1,(2),inst_49262);
} else {
if((state_val_49280 === (2))){
var inst_49264 = (state_49279[(2)]);
var inst_49265 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49266 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49267 = [cljs.core.cst$kw$body,cljs.core.cst$kw$records];
var inst_49268 = (new cljs.core.PersistentVector(null,2,(5),inst_49266,inst_49267,null));
var inst_49269 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_49264,inst_49268);
var inst_49270 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$images,inst_49269);
var inst_49271 = cljs.core.second(inst_49270);
var inst_49272 = cljs.core.cst$kw$images.cljs$core$IFn$_invoke$arity$1(inst_49271);
var inst_49273 = cljs.core.first(inst_49272);
var inst_49274 = ["http://api.finna.fi",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49273)].join('');
var inst_49275 = [cljs.core.cst$kw$add_DASH_game_DASH_img_DASH_url,search_keyword,inst_49274];
var inst_49276 = (new cljs.core.PersistentVector(null,3,(5),inst_49265,inst_49275,null));
var inst_49277 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_49276) : re_frame.core.dispatch.call(null,inst_49276));
var state_49279__$1 = state_49279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49279__$1,inst_49277);
} else {
return null;
}
}
});})(c__21958__auto__))
;
return ((function (switch__21856__auto__,c__21958__auto__){
return (function() {
var aikakonematka$core$add_game_img_url_to_DB_BANG__$_state_machine__21857__auto__ = null;
var aikakonematka$core$add_game_img_url_to_DB_BANG__$_state_machine__21857__auto____0 = (function (){
var statearr_49281 = [null,null,null,null,null,null,null];
(statearr_49281[(0)] = aikakonematka$core$add_game_img_url_to_DB_BANG__$_state_machine__21857__auto__);

(statearr_49281[(1)] = (1));

return statearr_49281;
});
var aikakonematka$core$add_game_img_url_to_DB_BANG__$_state_machine__21857__auto____1 = (function (state_49279){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_49279);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e49282){if((e49282 instanceof Object)){
var ex__21860__auto__ = e49282;
var statearr_49283_49285 = state_49279;
(statearr_49283_49285[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49279);

return cljs.core.cst$kw$recur;
} else {
throw e49282;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__49286 = state_49279;
state_49279 = G__49286;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
aikakonematka$core$add_game_img_url_to_DB_BANG__$_state_machine__21857__auto__ = function(state_49279){
switch(arguments.length){
case 0:
return aikakonematka$core$add_game_img_url_to_DB_BANG__$_state_machine__21857__auto____0.call(this);
case 1:
return aikakonematka$core$add_game_img_url_to_DB_BANG__$_state_machine__21857__auto____1.call(this,state_49279);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
aikakonematka$core$add_game_img_url_to_DB_BANG__$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = aikakonematka$core$add_game_img_url_to_DB_BANG__$_state_machine__21857__auto____0;
aikakonematka$core$add_game_img_url_to_DB_BANG__$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = aikakonematka$core$add_game_img_url_to_DB_BANG__$_state_machine__21857__auto____1;
return aikakonematka$core$add_game_img_url_to_DB_BANG__$_state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto__))
})();
var state__21960__auto__ = (function (){var statearr_49284 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_49284[(6)] = c__21958__auto__);

return statearr_49284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto__))
);

return c__21958__auto__;
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize,(function (_,___$1){
var seq__49287_49295 = cljs.core.seq(aikakonematka.util.puzzle_images);
var chunk__49288_49296 = null;
var count__49289_49297 = (0);
var i__49290_49298 = (0);
while(true){
if((i__49290_49298 < count__49289_49297)){
var map__49291_49299 = chunk__49288_49296.cljs$core$IIndexed$_nth$arity$2(null,i__49290_49298);
var map__49291_49300__$1 = ((((!((map__49291_49299 == null)))?((((map__49291_49299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49291_49299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49291_49299):map__49291_49299);
var search_keyword_49301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49291_49300__$1,cljs.core.cst$kw$search_DASH_keyword);
aikakonematka.core.add_game_img_url_to_DB_BANG_(search_keyword_49301);

var G__49302 = seq__49287_49295;
var G__49303 = chunk__49288_49296;
var G__49304 = count__49289_49297;
var G__49305 = (i__49290_49298 + (1));
seq__49287_49295 = G__49302;
chunk__49288_49296 = G__49303;
count__49289_49297 = G__49304;
i__49290_49298 = G__49305;
continue;
} else {
var temp__5457__auto___49306 = cljs.core.seq(seq__49287_49295);
if(temp__5457__auto___49306){
var seq__49287_49307__$1 = temp__5457__auto___49306;
if(cljs.core.chunked_seq_QMARK_(seq__49287_49307__$1)){
var c__9739__auto___49308 = cljs.core.chunk_first(seq__49287_49307__$1);
var G__49309 = cljs.core.chunk_rest(seq__49287_49307__$1);
var G__49310 = c__9739__auto___49308;
var G__49311 = cljs.core.count(c__9739__auto___49308);
var G__49312 = (0);
seq__49287_49295 = G__49309;
chunk__49288_49296 = G__49310;
count__49289_49297 = G__49311;
i__49290_49298 = G__49312;
continue;
} else {
var map__49293_49313 = cljs.core.first(seq__49287_49307__$1);
var map__49293_49314__$1 = ((((!((map__49293_49313 == null)))?((((map__49293_49313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49293_49313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49293_49313):map__49293_49313);
var search_keyword_49315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49293_49314__$1,cljs.core.cst$kw$search_DASH_keyword);
aikakonematka.core.add_game_img_url_to_DB_BANG_(search_keyword_49315);

var G__49316 = cljs.core.next(seq__49287_49307__$1);
var G__49317 = null;
var G__49318 = (0);
var G__49319 = (0);
seq__49287_49295 = G__49316;
chunk__49288_49296 = G__49317;
count__49289_49297 = G__49318;
i__49290_49298 = G__49319;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$screen,cljs.core.cst$kw$intro,cljs.core.cst$kw$ranking,cljs.core.PersistentVector.EMPTY], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ranking,(function (db,p__49320){
var vec__49321 = p__49320;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49321,(0),null);
var ranking = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49321,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$ranking,ranking);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$screen_DASH_change,(function (db,p__49324){
var vec__49325 = p__49324;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49325,(0),null);
var screen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49325,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$screen,screen);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_game_DASH_img,(function (db,p__49328){
var vec__49329 = p__49328;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49329,(0),null);
var search_keyword = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49329,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game_DASH_img,search_keyword);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add_DASH_game_DASH_img_DASH_url,(function (db,p__49332){
var vec__49333 = p__49332;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49333,(0),null);
var search_keyword = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49333,(1),null);
var image_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49333,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(db,cljs.core.cst$kw$search_DASH_keyword_DASH__GT_game_DASH_img_DASH_url,cljs.core.assoc,search_keyword,image_url);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$loading_QMARK_,(function (db,p__49336){
var vec__49337 = p__49336;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49337,(0),null);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49337,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading_QMARK_,loading_QMARK_);
}));
var G__49340_49342 = cljs.core.cst$kw$screen;
var G__49341_49343 = ((function (G__49340_49342){
return (function (db,_){
return cljs.core.cst$kw$screen.cljs$core$IFn$_invoke$arity$1(db);
});})(G__49340_49342))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49340_49342,G__49341_49343) : re_frame.core.reg_sub.call(null,G__49340_49342,G__49341_49343));
var G__49344_49346 = cljs.core.cst$kw$ranking;
var G__49345_49347 = ((function (G__49344_49346){
return (function (db,_){
return cljs.core.cst$kw$ranking.cljs$core$IFn$_invoke$arity$1(db);
});})(G__49344_49346))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49344_49346,G__49345_49347) : re_frame.core.reg_sub.call(null,G__49344_49346,G__49345_49347));
var G__49348_49350 = cljs.core.cst$kw$game_DASH_img;
var G__49349_49351 = ((function (G__49348_49350){
return (function (db,_){
return cljs.core.cst$kw$game_DASH_img.cljs$core$IFn$_invoke$arity$1(db);
});})(G__49348_49350))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49348_49350,G__49349_49351) : re_frame.core.reg_sub.call(null,G__49348_49350,G__49349_49351));
var G__49352_49354 = cljs.core.cst$kw$search_DASH_keyword_DASH__GT_game_DASH_img_DASH_url;
var G__49353_49355 = ((function (G__49352_49354){
return (function (db,_){
return cljs.core.cst$kw$search_DASH_keyword_DASH__GT_game_DASH_img_DASH_url.cljs$core$IFn$_invoke$arity$1(db);
});})(G__49352_49354))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49352_49354,G__49353_49355) : re_frame.core.reg_sub.call(null,G__49352_49354,G__49353_49355));
var G__49356_49358 = cljs.core.cst$kw$loading_QMARK_;
var G__49357_49359 = ((function (G__49356_49358){
return (function (db,_){
return cljs.core.cst$kw$loading_QMARK_.cljs$core$IFn$_invoke$arity$1(db);
});})(G__49356_49358))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49356_49358,G__49357_49359) : re_frame.core.reg_sub.call(null,G__49356_49358,G__49357_49359));
var G__49360_49361 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__49360_49361) : re_frame.core.dispatch_sync.call(null,G__49360_49361));
reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aikakonematka.components.app], null),document.getElementById("app"));
var buttons_img_49362 = (new Image());
buttons_img_49362.onload = cljs.core.clj__GT_js(((function (buttons_img_49362){
return (function (){
cljs.core.reset_BANG_(aikakonematka.util.button_sprite_sheet_width,buttons_img_49362.width);

cljs.core.reset_BANG_(aikakonematka.util.button_sprite_sheet_height,buttons_img_49362.height);

return aikakonematka.web_socket.start_web_socket_BANG_();
});})(buttons_img_49362))
);

buttons_img_49362.src = "images/control-buttons.png";
