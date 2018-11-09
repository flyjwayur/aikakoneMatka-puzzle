// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('aikakonematka.components');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('aikakonematka.config');
goog.require('aikakonematka.util');
goog.require('aikakonematka.game');
goog.require('aikakonematka.web_socket');
goog.require('cljs_react_material_ui.core');
goog.require('cljs_react_material_ui.reagent');
goog.require('cljs_react_material_ui.icons');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('re_frame.core');
aikakonematka.components.table_header_style = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"4.5vw",cljs.core.cst$kw$font_DASH_weight,"700",cljs.core.cst$kw$color,"#fff",cljs.core.cst$kw$background_DASH_color,"rgba(238, 108, 77, 0.7)"], null)], null);
aikakonematka.components.table_body_style = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"3.5vw",cljs.core.cst$kw$color,"#696969"], null)], null);
aikakonematka.components.backend_url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(aikakonematka.config.protocol_to_backend),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(aikakonematka.config.backend_host)].join('');
aikakonematka.components.check_backend_health = (function aikakonematka$components$check_backend_health(){
var c__21958__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto__){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto__){
return (function (state_49202){
var state_val_49203 = (state_49202[(1)]);
if((state_val_49203 === (1))){
var inst_49195 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(aikakonematka.components.backend_url),"/health"].join('');
var inst_49196 = cljs_http.client.get(inst_49195);
var state_49202__$1 = state_49202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49202__$1,(2),inst_49196);
} else {
if((state_val_49203 === (2))){
var inst_49198 = (state_49202[(2)]);
var inst_49199 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_49198);
var inst_49200 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$backend_DASH_health_DASH_check_DASH_success,inst_49199], 0));
var state_49202__$1 = state_49202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49202__$1,inst_49200);
} else {
return null;
}
}
});})(c__21958__auto__))
;
return ((function (switch__21856__auto__,c__21958__auto__){
return (function() {
var aikakonematka$components$check_backend_health_$_state_machine__21857__auto__ = null;
var aikakonematka$components$check_backend_health_$_state_machine__21857__auto____0 = (function (){
var statearr_49204 = [null,null,null,null,null,null,null];
(statearr_49204[(0)] = aikakonematka$components$check_backend_health_$_state_machine__21857__auto__);

(statearr_49204[(1)] = (1));

return statearr_49204;
});
var aikakonematka$components$check_backend_health_$_state_machine__21857__auto____1 = (function (state_49202){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_49202);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e49205){if((e49205 instanceof Object)){
var ex__21860__auto__ = e49205;
var statearr_49206_49208 = state_49202;
(statearr_49206_49208[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49202);

return cljs.core.cst$kw$recur;
} else {
throw e49205;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__49209 = state_49202;
state_49202 = G__49209;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
aikakonematka$components$check_backend_health_$_state_machine__21857__auto__ = function(state_49202){
switch(arguments.length){
case 0:
return aikakonematka$components$check_backend_health_$_state_machine__21857__auto____0.call(this);
case 1:
return aikakonematka$components$check_backend_health_$_state_machine__21857__auto____1.call(this,state_49202);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
aikakonematka$components$check_backend_health_$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = aikakonematka$components$check_backend_health_$_state_machine__21857__auto____0;
aikakonematka$components$check_backend_health_$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = aikakonematka$components$check_backend_health_$_state_machine__21857__auto____1;
return aikakonematka$components$check_backend_health_$_state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto__))
})();
var state__21960__auto__ = (function (){var statearr_49207 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_49207[(6)] = c__21958__auto__);

return statearr_49207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto__))
);

return c__21958__auto__;
});
aikakonematka.components.go_back_to_game_button = (function aikakonematka$components$go_back_to_game_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$muiTheme,cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1((MaterialUIStyles["DarkRawTheme"]))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.raised_button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,"Play game",cljs.core.cst$kw$icon,cljs_react_material_ui.icons.navigation_arrow_back(),cljs.core.cst$kw$on_DASH_click,(function (){
var G__49210 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen_DASH_change,cljs.core.cst$kw$game], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49210) : re_frame.core.dispatch.call(null,G__49210));
})], null)], null)], null);
});
aikakonematka.components.ranking_dashboard = (function aikakonematka$components$ranking_dashboard(){
var c__21958__auto___49233 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto___49233){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto___49233){
return (function (state_49222){
var state_val_49223 = (state_49222[(1)]);
if((state_val_49223 === (1))){
var inst_49211 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(aikakonematka.components.backend_url),"/rankings"].join('');
var inst_49212 = cljs_http.client.get(inst_49211);
var state_49222__$1 = state_49222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49222__$1,(2),inst_49212);
} else {
if((state_val_49223 === (2))){
var inst_49214 = (state_49222[(2)]);
var inst_49215 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_49214);
var inst_49216 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49217 = aikakonematka.util.parse_json(inst_49215);
var inst_49218 = [cljs.core.cst$kw$ranking,inst_49217];
var inst_49219 = (new cljs.core.PersistentVector(null,2,(5),inst_49216,inst_49218,null));
var inst_49220 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_49219) : re_frame.core.dispatch.call(null,inst_49219));
var state_49222__$1 = state_49222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49222__$1,inst_49220);
} else {
return null;
}
}
});})(c__21958__auto___49233))
;
return ((function (switch__21856__auto__,c__21958__auto___49233){
return (function() {
var aikakonematka$components$ranking_dashboard_$_state_machine__21857__auto__ = null;
var aikakonematka$components$ranking_dashboard_$_state_machine__21857__auto____0 = (function (){
var statearr_49224 = [null,null,null,null,null,null,null];
(statearr_49224[(0)] = aikakonematka$components$ranking_dashboard_$_state_machine__21857__auto__);

(statearr_49224[(1)] = (1));

return statearr_49224;
});
var aikakonematka$components$ranking_dashboard_$_state_machine__21857__auto____1 = (function (state_49222){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_49222);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e49225){if((e49225 instanceof Object)){
var ex__21860__auto__ = e49225;
var statearr_49226_49234 = state_49222;
(statearr_49226_49234[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49222);

return cljs.core.cst$kw$recur;
} else {
throw e49225;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__49235 = state_49222;
state_49222 = G__49235;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
aikakonematka$components$ranking_dashboard_$_state_machine__21857__auto__ = function(state_49222){
switch(arguments.length){
case 0:
return aikakonematka$components$ranking_dashboard_$_state_machine__21857__auto____0.call(this);
case 1:
return aikakonematka$components$ranking_dashboard_$_state_machine__21857__auto____1.call(this,state_49222);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
aikakonematka$components$ranking_dashboard_$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = aikakonematka$components$ranking_dashboard_$_state_machine__21857__auto____0;
aikakonematka$components$ranking_dashboard_$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = aikakonematka$components$ranking_dashboard_$_state_machine__21857__auto____1;
return aikakonematka$components$ranking_dashboard_$_state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto___49233))
})();
var state__21960__auto__ = (function (){var statearr_49227 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_49227[(6)] = c__21958__auto___49233);

return statearr_49227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto___49233))
);


var ranking = cljs.core.deref((function (){var G__49228 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ranking], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49228) : re_frame.core.subscribe.call(null,G__49228));
})());
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$background_DASH_image,"url(\"images/ranking-board-bg.png\")",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"30px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$muiTheme,cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$palette,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_color,cljs_react_material_ui.core.color(cljs.core.cst$kw$grey600)], null)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"rgba(255, 255, 255, 0.5)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$displaySelectAll,false,cljs.core.cst$kw$adjustForCheckbox,false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,aikakonematka.components.table_header_style,"Ranking"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,aikakonematka.components.table_header_style,"Time Record"], null)], null)], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_body,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$displayRowCheckbox,false], null)], null),(function (){var iter__9690__auto__ = ((function (ranking){
return (function aikakonematka$components$ranking_dashboard_$_iter__49229(s__49230){
return (new cljs.core.LazySeq(null,((function (ranking){
return (function (){
var s__49230__$1 = s__49230;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__49230__$1);
if(temp__5457__auto__){
var s__49230__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49230__$2)){
var c__9688__auto__ = cljs.core.chunk_first(s__49230__$2);
var size__9689__auto__ = cljs.core.count(c__9688__auto__);
var b__49232 = cljs.core.chunk_buffer(size__9689__auto__);
if((function (){var i__49231 = (0);
while(true){
if((i__49231 < size__9689__auto__)){
var rank = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9688__auto__,i__49231);
cljs.core.chunk_append(b__49232,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,aikakonematka.components.table_body_style,(rank + (1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,aikakonematka.components.table_body_style,(ranking.cljs$core$IFn$_invoke$arity$1 ? ranking.cljs$core$IFn$_invoke$arity$1(rank) : ranking.call(null,rank))], null)], null));

var G__49236 = (i__49231 + (1));
i__49231 = G__49236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49232),aikakonematka$components$ranking_dashboard_$_iter__49229(cljs.core.chunk_rest(s__49230__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49232),null);
}
} else {
var rank = cljs.core.first(s__49230__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,aikakonematka.components.table_body_style,(rank + (1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,aikakonematka.components.table_body_style,(ranking.cljs$core$IFn$_invoke$arity$1 ? ranking.cljs$core$IFn$_invoke$arity$1(rank) : ranking.call(null,rank))], null)], null),aikakonematka$components$ranking_dashboard_$_iter__49229(cljs.core.rest(s__49230__$2)));
}
} else {
return null;
}
break;
}
});})(ranking))
,null,null));
});})(ranking))
;
return iter__9690__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ranking)));
})())], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$justify_DASH_content,"flex-end"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aikakonematka.components.go_back_to_game_button], null)], null)], null);
});
aikakonematka.components.puzzle_selection_view = (function aikakonematka$components$puzzle_selection_view(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$z_DASH_index,"0",cljs.core.cst$kw$display,"block"], null),cljs.core.cst$kw$src,"images/puzzle-selection-bg.png",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$z_DASH_index,"2",cljs.core.cst$kw$display,"block",cljs.core.cst$kw$right,"0.1%",cljs.core.cst$kw$bottom,"0.1%"], null),cljs.core.cst$kw$src,"images/lovely-baby-in-selection.png",cljs.core.cst$kw$width,"25%",cljs.core.cst$kw$height,"33.5%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$z_DASH_index,"2",cljs.core.cst$kw$display,"block",cljs.core.cst$kw$right,"38%",cljs.core.cst$kw$bottom,"0.1%"], null),cljs.core.cst$kw$src,"images/puzzle-selection-door.png",cljs.core.cst$kw$width,"25%",cljs.core.cst$kw$height,"33.5%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$z_DASH_index,"3",cljs.core.cst$kw$right,"3%",cljs.core.cst$kw$bottom,"37%",cljs.core.cst$kw$width,"16%"], null),cljs.core.cst$kw$src,"images/choose-image.png"], null)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49237){
var map__49238 = p__49237;
var map__49238__$1 = ((((!((map__49238 == null)))?((((map__49238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49238):map__49238);
var search_keyword = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49238__$1,cljs.core.cst$kw$search_DASH_keyword);
var img_pos_in_puzzle_selection_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49238__$1,cljs.core.cst$kw$img_DASH_pos_DASH_in_DASH_puzzle_DASH_selection_DASH_view);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,search_keyword,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$z_DASH_index,"1",cljs.core.cst$kw$box_DASH_shadow,"6px 6px 3px -3px rgb(119,136,153)",cljs.core.cst$kw$left,cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(img_pos_in_puzzle_selection_view),cljs.core.cst$kw$top,cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(img_pos_in_puzzle_selection_view)], null),cljs.core.cst$kw$src,(function (){var game_imgs = cljs.core.deref((function (){var G__49240 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_keyword_DASH__GT_game_DASH_img_DASH_url], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49240) : re_frame.core.subscribe.call(null,G__49240));
})());
if(cljs.core.truth_(game_imgs)){
return (game_imgs.cljs$core$IFn$_invoke$arity$2 ? game_imgs.cljs$core$IFn$_invoke$arity$2(search_keyword,"") : game_imgs.call(null,search_keyword,""));
} else {
return null;
}
})(),cljs.core.cst$kw$width,"20%",cljs.core.cst$kw$height,"27.5%",cljs.core.cst$kw$on_DASH_click,((function (map__49238,map__49238__$1,search_keyword,img_pos_in_puzzle_selection_view){
return (function (){
return aikakonematka.util.show_game_BANG_(search_keyword);
});})(map__49238,map__49238__$1,search_keyword,img_pos_in_puzzle_selection_view))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,search_keyword], null));
}),aikakonematka.util.puzzle_images));
});
aikakonematka.components.game_intro_view = (function (){
aikakonematka.components.check_backend_health();

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$animation_DASH_direction,cljs.core.cst$kw$width,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$animation_DASH_duration,cljs.core.cst$kw$right,cljs.core.cst$kw$position,cljs.core.cst$kw$animation_DASH_iteration_DASH_count,cljs.core.cst$kw$animation_DASH_name,cljs.core.cst$kw$height],["rotateX(40deg)","30%","alternate","60%","6","2s","30%","fixed","infinite","titleAnimation","55%"]),cljs.core.cst$kw$src,"images/intro-title.png",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$on_DASH_click,aikakonematka.util.show_puzzle_selection_BANG_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$animation_DASH_direction,cljs.core.cst$kw$width,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$animation_DASH_duration,cljs.core.cst$kw$right,cljs.core.cst$kw$position,cljs.core.cst$kw$animation_DASH_iteration_DASH_count,cljs.core.cst$kw$animation_DASH_name,cljs.core.cst$kw$height],["alternate","20%","5","2s","10%","fixed","infinite","clicktostart","20%"]),cljs.core.cst$kw$src,"images/click-to-start-button.png",cljs.core.cst$kw$on_DASH_click,aikakonematka.util.show_puzzle_selection_BANG_], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$picture,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$z_DASH_index,"4",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null),cljs.core.cst$kw$on_DASH_click,aikakonematka.util.show_puzzle_selection_BANG_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$media,"(min-width: 600px)",cljs.core.cst$kw$srcSet,"images/aikakone-intro.jpg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$src,"images/aikakone-intro-mobile.jpg",cljs.core.cst$kw$alt,"aikakone intro image",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"none"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aikakonematka.components.puzzle_selection_view], null)], null)], null);
})()
;
aikakonematka.components.game_screen = (function aikakonematka$components$game_screen(search_word__GT_game_img_url,game_img){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (){
return aikakonematka.game.start_game_BANG_((search_word__GT_game_img_url.cljs$core$IFn$_invoke$arity$1 ? search_word__GT_game_img_url.cljs$core$IFn$_invoke$arity$1(game_img) : search_word__GT_game_img_url.call(null,game_img)),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$send_DASH_game_DASH_start_DASH_fn_BANG_,aikakonematka.web_socket.send_game_start_BANG_,cljs.core.cst$kw$send_DASH_reset_DASH_fn_BANG_,aikakonematka.web_socket.send_reset_BANG_,cljs.core.cst$kw$send_DASH_sprites_DASH_state_DASH_fn_BANG_,aikakonematka.web_socket.send_sprites_state_BANG_,cljs.core.cst$kw$send_DASH_puzzle_DASH_complete_DASH_fn_BANG_,aikakonematka.web_socket.send_puzzle_complete_BANG_,cljs.core.cst$kw$send_DASH_music_DASH_note_DASH_fn_BANG_,aikakonematka.web_socket.send_button_music_notes_BANG_], null));
}),cljs.core.cst$kw$reagent_DASH_render,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_canvas], null);
})], null));
});
aikakonematka.components.app = (function aikakonematka$components$app(){
var search_word__GT_game_img_url = cljs.core.deref((function (){var G__49241 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_keyword_DASH__GT_game_DASH_img_DASH_url], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49241) : re_frame.core.subscribe.call(null,G__49241));
})());
var game_img = cljs.core.deref((function (){var G__49242 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_DASH_img], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49242) : re_frame.core.subscribe.call(null,G__49242));
})());
if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game,cljs.core.deref((function (){var G__49244 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49244) : re_frame.core.subscribe.call(null,G__49244));
})()));
if(and__8796__auto__){
var and__8796__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(aikakonematka.util.puzzle_images),cljs.core.count(search_word__GT_game_img_url));
if(and__8796__auto____$1){
if(cljs.core.truth_(search_word__GT_game_img_url)){
return typeof (search_word__GT_game_img_url.cljs$core$IFn$_invoke$arity$1 ? search_word__GT_game_img_url.cljs$core$IFn$_invoke$arity$1(game_img) : search_word__GT_game_img_url.call(null,game_img)) === 'string';
} else {
return null;
}
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [aikakonematka.components.game_screen,search_word__GT_game_img_url,game_img], null),(cljs.core.truth_(cljs.core.deref((function (){var G__49245 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49245) : re_frame.core.subscribe.call(null,G__49245));
})()))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_loader,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$align,"center"], null)], null),"Loading..."], null)], null):null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$intro,cljs.core.deref((function (){var G__49246 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49246) : re_frame.core.subscribe.call(null,G__49246));
})()))){
return aikakonematka.components.game_intro_view;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$puzzle_DASH_selection,cljs.core.deref((function (){var G__49247 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49247) : re_frame.core.subscribe.call(null,G__49247));
})()))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"block"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aikakonematka.components.puzzle_selection_view], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ranking_DASH_dashboard,cljs.core.deref((function (){var G__49248 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49248) : re_frame.core.subscribe.call(null,G__49248));
})()))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aikakonematka.components.ranking_dashboard], null);
} else {
return null;
}
}
}
}
});
