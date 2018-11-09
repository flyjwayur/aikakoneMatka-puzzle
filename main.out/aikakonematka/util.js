// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('aikakonematka.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
cljs.core.enable_console_print_BANG_();
aikakonematka.util.puzzle_images = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$search_DASH_keyword,"tori",cljs.core.cst$kw$img_DASH_pos_DASH_in_DASH_puzzle_DASH_selection_DASH_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,"18.5%",cljs.core.cst$kw$top,"13.7%"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$search_DASH_keyword,"Mannerheimintie",cljs.core.cst$kw$img_DASH_pos_DASH_in_DASH_puzzle_DASH_selection_DASH_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,"39.3%",cljs.core.cst$kw$top,"13.7%"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$search_DASH_keyword,"Lapinlahdenkatu",cljs.core.cst$kw$img_DASH_pos_DASH_in_DASH_puzzle_DASH_selection_DASH_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,"60%",cljs.core.cst$kw$top,"13.7%"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$search_DASH_keyword,"kamppi",cljs.core.cst$kw$img_DASH_pos_DASH_in_DASH_puzzle_DASH_selection_DASH_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,"18.5%",cljs.core.cst$kw$top,"43.5%"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$search_DASH_keyword,"kirjasto",cljs.core.cst$kw$img_DASH_pos_DASH_in_DASH_puzzle_DASH_selection_DASH_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,"39.3%",cljs.core.cst$kw$top,"43.5%"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$search_DASH_keyword,"Rautatientori",cljs.core.cst$kw$img_DASH_pos_DASH_in_DASH_puzzle_DASH_selection_DASH_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,"60%",cljs.core.cst$kw$top,"43.5%"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$search_DASH_keyword,"Rovaniemi",cljs.core.cst$kw$img_DASH_pos_DASH_in_DASH_puzzle_DASH_selection_DASH_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,"18.5%",cljs.core.cst$kw$top,"73.2%"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$search_DASH_keyword,"suomenlinna",cljs.core.cst$kw$img_DASH_pos_DASH_in_DASH_puzzle_DASH_selection_DASH_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,"60%",cljs.core.cst$kw$top,"73.2%"], null)], null)], null);
aikakonematka.util.row_col_num = (6);
aikakonematka.util.parse_json = (function aikakonematka$util$parse_json(json_string){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(json_string));
});
aikakonematka.util.game = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
aikakonematka.util.initial_game_state = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$play_DASH_button,cljs.core.cst$kw$control_DASH_buttons,cljs.core.cst$kw$music_DASH_pitches,cljs.core.cst$kw$play_DASH_time_DASH_text,cljs.core.cst$kw$ranking_DASH_button,cljs.core.cst$kw$play_DASH_time,cljs.core.cst$kw$puzzle_DASH_selection_DASH_button,cljs.core.cst$kw$audio_DASH_on_QMARK_,cljs.core.cst$kw$puzzle_DASH_completion_DASH_text,cljs.core.cst$kw$sprites_DASH_state,cljs.core.cst$kw$puzzle_DASH_width_DASH_height,cljs.core.cst$kw$puzzle_DASH_game_DASH_intro_DASH_text,cljs.core.cst$kw$music_DASH_durations,cljs.core.cst$kw$control_DASH_button_DASH_tweens,cljs.core.cst$kw$game_DASH_play_DASH_state,cljs.core.cst$kw$sprites],[null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,null,null,0.0,null,true,null,cljs.core.PersistentArrayMap.EMPTY,(0),null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$before_DASH_started,cljs.core.PersistentArrayMap.EMPTY]);
if(typeof aikakonematka.util.game_state !== 'undefined'){
} else {
aikakonematka.util.game_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(aikakonematka.util.initial_game_state);
}
aikakonematka.util.set_game_play_state_BANG_ = (function aikakonematka$util$set_game_play_state_BANG_(play_state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.assoc,cljs.core.cst$kw$game_DASH_play_DASH_state,play_state);
});
aikakonematka.util.set_puzzle_width_height_in_relation_to_window_size_BANG_ = (function aikakonematka$util$set_puzzle_width_height_in_relation_to_window_size_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.assoc,cljs.core.cst$kw$puzzle_DASH_width_DASH_height,((0.7 * (function (){var x__9167__auto__ = window.innerWidth;
var y__9168__auto__ = window.innerHeight;
return ((x__9167__auto__ < y__9168__auto__) ? x__9167__auto__ : y__9168__auto__);
})()) | (0)));
});
aikakonematka.util.puzzle_image_width = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
aikakonematka.util.puzzle_image_height = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
aikakonematka.util.button_sprite_sheet_width = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
aikakonematka.util.button_sprite_sheet_height = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
aikakonematka.util.button_sprite_col_num = (2);
aikakonematka.util.button_sprite_row_num = (3);
aikakonematka.util.get_button_width = (function aikakonematka$util$get_button_width(btn_sprite_col_num){
return (cljs.core.deref(aikakonematka.util.button_sprite_sheet_width) / btn_sprite_col_num);
});
aikakonematka.util.get_button_height = (function aikakonematka$util$get_button_height(btn_sprite_row_num){
return (cljs.core.deref(aikakonematka.util.button_sprite_sheet_height) / btn_sprite_row_num);
});
aikakonematka.util.get_piece_width_height = (function aikakonematka$util$get_piece_width_height(puzzle_width_height){
return ((puzzle_width_height / aikakonematka.util.row_col_num) | (0));
});
aikakonematka.util.get_scale_for_same_size_as_piece_BANG_ = (function aikakonematka$util$get_scale_for_same_size_as_piece_BANG_(){
return (aikakonematka.util.get_piece_width_height(cljs.core.cst$kw$puzzle_DASH_width_DASH_height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state))) / aikakonematka.util.get_button_width(aikakonematka.util.button_sprite_col_num));
});
aikakonematka.util.set_play_button_size_in_portrait_landscape_mode_BANG_ = (function aikakonematka$util$set_play_button_size_in_portrait_landscape_mode_BANG_(){
var window_inner_width = window.innerWidth;
var window_inner_height = window.innerHeight;
var get_max_length = ((function (){var x__9160__auto__ = window_inner_width;
var y__9161__auto__ = window_inner_height;
return ((x__9160__auto__ > y__9161__auto__) ? x__9160__auto__ : y__9161__auto__);
})() | (0));
var is_landscape = ((window_inner_width / window_inner_height) > 1.3);
var is_landscape_in_phone = ((window_inner_width < (1366))) && ((window_inner_height < (800)));
if(is_landscape){
if(is_landscape_in_phone){
cljs.core.cst$kw$play_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).width = ((get_max_length / (3)) | (0));

return cljs.core.cst$kw$play_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).height = ((get_max_length / (5)) | (0));
} else {
cljs.core.cst$kw$play_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).width = ((get_max_length / (4)) | (0));

return cljs.core.cst$kw$play_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).height = ((get_max_length / (6)) | (0));

}
} else {
cljs.core.cst$kw$play_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).width = ((get_max_length / (3)) | (0));

return cljs.core.cst$kw$play_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).height = ((get_max_length / (5)) | (0));
}
});
aikakonematka.util.set_button_size_in_portrait_landscape_mode_BANG_ = (function aikakonematka$util$set_button_size_in_portrait_landscape_mode_BANG_(){
var window_inner_width = window.innerWidth;
var window_inner_height = window.innerHeight;
var get_min_length = ((function (){var x__9167__auto__ = window_inner_width;
var y__9168__auto__ = window_inner_height;
return ((x__9167__auto__ < y__9168__auto__) ? x__9167__auto__ : y__9168__auto__);
})() | (0));
var is_landscape = ((window_inner_width / window_inner_height) > 1.3);
var is_landscape_in_phone = ((window_inner_width < (1366))) && ((window_inner_height < (800)));
if(is_landscape){
if(is_landscape_in_phone){
var seq__40376 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$puzzle_DASH_selection_DASH_button,cljs.core.cst$kw$reset_DASH_button,cljs.core.cst$kw$ranking_DASH_button,cljs.core.cst$kw$audio_DASH_button], null));
var chunk__40377 = null;
var count__40378 = (0);
var i__40379 = (0);
while(true){
if((i__40379 < count__40378)){
var ui_button_element = chunk__40377.cljs$core$IIndexed$_nth$arity$2(null,i__40379);
(function (){var G__40380 = cljs.core.deref(aikakonematka.util.game_state);
return (ui_button_element.cljs$core$IFn$_invoke$arity$1 ? ui_button_element.cljs$core$IFn$_invoke$arity$1(G__40380) : ui_button_element.call(null,G__40380));
})().width = ((get_min_length / (6)) | (0));

(function (){var G__40381 = cljs.core.deref(aikakonematka.util.game_state);
return (ui_button_element.cljs$core$IFn$_invoke$arity$1 ? ui_button_element.cljs$core$IFn$_invoke$arity$1(G__40381) : ui_button_element.call(null,G__40381));
})().height = ((get_min_length / (6)) | (0));

var G__40400 = seq__40376;
var G__40401 = chunk__40377;
var G__40402 = count__40378;
var G__40403 = (i__40379 + (1));
seq__40376 = G__40400;
chunk__40377 = G__40401;
count__40378 = G__40402;
i__40379 = G__40403;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__40376);
if(temp__5457__auto__){
var seq__40376__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40376__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__40376__$1);
var G__40404 = cljs.core.chunk_rest(seq__40376__$1);
var G__40405 = c__9739__auto__;
var G__40406 = cljs.core.count(c__9739__auto__);
var G__40407 = (0);
seq__40376 = G__40404;
chunk__40377 = G__40405;
count__40378 = G__40406;
i__40379 = G__40407;
continue;
} else {
var ui_button_element = cljs.core.first(seq__40376__$1);
(function (){var G__40382 = cljs.core.deref(aikakonematka.util.game_state);
return (ui_button_element.cljs$core$IFn$_invoke$arity$1 ? ui_button_element.cljs$core$IFn$_invoke$arity$1(G__40382) : ui_button_element.call(null,G__40382));
})().width = ((get_min_length / (6)) | (0));

(function (){var G__40383 = cljs.core.deref(aikakonematka.util.game_state);
return (ui_button_element.cljs$core$IFn$_invoke$arity$1 ? ui_button_element.cljs$core$IFn$_invoke$arity$1(G__40383) : ui_button_element.call(null,G__40383));
})().height = ((get_min_length / (6)) | (0));

var G__40408 = cljs.core.next(seq__40376__$1);
var G__40409 = null;
var G__40410 = (0);
var G__40411 = (0);
seq__40376 = G__40408;
chunk__40377 = G__40409;
count__40378 = G__40410;
i__40379 = G__40411;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var seq__40384 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$puzzle_DASH_selection_DASH_button,cljs.core.cst$kw$reset_DASH_button,cljs.core.cst$kw$ranking_DASH_button,cljs.core.cst$kw$audio_DASH_button], null));
var chunk__40385 = null;
var count__40386 = (0);
var i__40387 = (0);
while(true){
if((i__40387 < count__40386)){
var ui_button_element = chunk__40385.cljs$core$IIndexed$_nth$arity$2(null,i__40387);
(function (){var G__40388 = cljs.core.deref(aikakonematka.util.game_state);
return (ui_button_element.cljs$core$IFn$_invoke$arity$1 ? ui_button_element.cljs$core$IFn$_invoke$arity$1(G__40388) : ui_button_element.call(null,G__40388));
})().width = ((get_min_length / (10)) | (0));

(function (){var G__40389 = cljs.core.deref(aikakonematka.util.game_state);
return (ui_button_element.cljs$core$IFn$_invoke$arity$1 ? ui_button_element.cljs$core$IFn$_invoke$arity$1(G__40389) : ui_button_element.call(null,G__40389));
})().height = ((get_min_length / (10)) | (0));

var G__40412 = seq__40384;
var G__40413 = chunk__40385;
var G__40414 = count__40386;
var G__40415 = (i__40387 + (1));
seq__40384 = G__40412;
chunk__40385 = G__40413;
count__40386 = G__40414;
i__40387 = G__40415;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__40384);
if(temp__5457__auto__){
var seq__40384__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40384__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__40384__$1);
var G__40416 = cljs.core.chunk_rest(seq__40384__$1);
var G__40417 = c__9739__auto__;
var G__40418 = cljs.core.count(c__9739__auto__);
var G__40419 = (0);
seq__40384 = G__40416;
chunk__40385 = G__40417;
count__40386 = G__40418;
i__40387 = G__40419;
continue;
} else {
var ui_button_element = cljs.core.first(seq__40384__$1);
(function (){var G__40390 = cljs.core.deref(aikakonematka.util.game_state);
return (ui_button_element.cljs$core$IFn$_invoke$arity$1 ? ui_button_element.cljs$core$IFn$_invoke$arity$1(G__40390) : ui_button_element.call(null,G__40390));
})().width = ((get_min_length / (10)) | (0));

(function (){var G__40391 = cljs.core.deref(aikakonematka.util.game_state);
return (ui_button_element.cljs$core$IFn$_invoke$arity$1 ? ui_button_element.cljs$core$IFn$_invoke$arity$1(G__40391) : ui_button_element.call(null,G__40391));
})().height = ((get_min_length / (10)) | (0));

var G__40420 = cljs.core.next(seq__40384__$1);
var G__40421 = null;
var G__40422 = (0);
var G__40423 = (0);
seq__40384 = G__40420;
chunk__40385 = G__40421;
count__40386 = G__40422;
i__40387 = G__40423;
continue;
}
} else {
return null;
}
}
break;
}

}
} else {
var seq__40392 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$puzzle_DASH_selection_DASH_button,cljs.core.cst$kw$reset_DASH_button,cljs.core.cst$kw$ranking_DASH_button,cljs.core.cst$kw$audio_DASH_button], null));
var chunk__40393 = null;
var count__40394 = (0);
var i__40395 = (0);
while(true){
if((i__40395 < count__40394)){
var ui_button_element = chunk__40393.cljs$core$IIndexed$_nth$arity$2(null,i__40395);
(function (){var G__40396 = cljs.core.deref(aikakonematka.util.game_state);
return (ui_button_element.cljs$core$IFn$_invoke$arity$1 ? ui_button_element.cljs$core$IFn$_invoke$arity$1(G__40396) : ui_button_element.call(null,G__40396));
})().width = ((get_min_length / (6)) | (0));

(function (){var G__40397 = cljs.core.deref(aikakonematka.util.game_state);
return (ui_button_element.cljs$core$IFn$_invoke$arity$1 ? ui_button_element.cljs$core$IFn$_invoke$arity$1(G__40397) : ui_button_element.call(null,G__40397));
})().height = ((get_min_length / (6)) | (0));

var G__40424 = seq__40392;
var G__40425 = chunk__40393;
var G__40426 = count__40394;
var G__40427 = (i__40395 + (1));
seq__40392 = G__40424;
chunk__40393 = G__40425;
count__40394 = G__40426;
i__40395 = G__40427;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__40392);
if(temp__5457__auto__){
var seq__40392__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40392__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__40392__$1);
var G__40428 = cljs.core.chunk_rest(seq__40392__$1);
var G__40429 = c__9739__auto__;
var G__40430 = cljs.core.count(c__9739__auto__);
var G__40431 = (0);
seq__40392 = G__40428;
chunk__40393 = G__40429;
count__40394 = G__40430;
i__40395 = G__40431;
continue;
} else {
var ui_button_element = cljs.core.first(seq__40392__$1);
(function (){var G__40398 = cljs.core.deref(aikakonematka.util.game_state);
return (ui_button_element.cljs$core$IFn$_invoke$arity$1 ? ui_button_element.cljs$core$IFn$_invoke$arity$1(G__40398) : ui_button_element.call(null,G__40398));
})().width = ((get_min_length / (6)) | (0));

(function (){var G__40399 = cljs.core.deref(aikakonematka.util.game_state);
return (ui_button_element.cljs$core$IFn$_invoke$arity$1 ? ui_button_element.cljs$core$IFn$_invoke$arity$1(G__40399) : ui_button_element.call(null,G__40399));
})().height = ((get_min_length / (6)) | (0));

var G__40432 = cljs.core.next(seq__40392__$1);
var G__40433 = null;
var G__40434 = (0);
var G__40435 = (0);
seq__40392 = G__40432;
chunk__40393 = G__40433;
count__40394 = G__40434;
i__40395 = G__40435;
continue;
}
} else {
return null;
}
}
break;
}
}
});
aikakonematka.util.set_text_size_in_portrait_BANG_ = (function aikakonematka$util$set_text_size_in_portrait_BANG_(){
var window_inner_width = window.innerWidth;
var window_inner_height = window.innerHeight;
var is_landscape = ((window_inner_height / window_inner_width) < 1.3);
if(is_landscape){
return null;
} else {
cljs.core.cst$kw$puzzle_DASH_completion_DASH_text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).width = (0.9 * window_inner_width);

return cljs.core.cst$kw$puzzle_DASH_completion_DASH_text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).height = (0.2 * window_inner_height);
}
});
aikakonematka.util.get_left_margin = (function aikakonematka$util$get_left_margin(){
return (((window.innerWidth - cljs.core.cst$kw$puzzle_DASH_width_DASH_height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state))) / (2)) + (aikakonematka.util.get_button_width(aikakonematka.util.button_sprite_col_num) * aikakonematka.util.get_scale_for_same_size_as_piece_BANG_()));
});
aikakonematka.util.get_top_margin = (function aikakonematka$util$get_top_margin(){
return ((window.innerHeight - cljs.core.cst$kw$puzzle_DASH_width_DASH_height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state))) / (2));
});
aikakonematka.util.display_control_buttons_and_use_tween_scale_BANG_ = (function aikakonematka$util$display_control_buttons_and_use_tween_scale_BANG_(control_button){
var control_button_scale = aikakonematka.util.get_scale_for_same_size_as_piece_BANG_();
var tween = cljs.core.deref(aikakonematka.util.game).add.tween(control_button.scale);
control_button.scale.setTo((0.9 * control_button_scale),(0.9 * control_button_scale));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(aikakonematka.util.game_state,cljs.core.update,cljs.core.cst$kw$control_DASH_button_DASH_tweens,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tween], 0));

return tween.to(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,control_button_scale,cljs.core.cst$kw$y,control_button_scale], null)),(1000),Phaser.Easing.Linear.None,true,(0),(-1),true);
});
aikakonematka.util.get_puzzle_image_width = (function aikakonematka$util$get_puzzle_image_width(){
return cljs.core.deref(aikakonematka.util.game).cache.getImage("puzzle").width;
});
aikakonematka.util.get_puzzle_image_height = (function aikakonematka$util$get_puzzle_image_height(){
return cljs.core.deref(aikakonematka.util.game).cache.getImage("puzzle").height;
});
aikakonematka.util.get_piece_x_scale = (function aikakonematka$util$get_piece_x_scale(){
return (cljs.core.cst$kw$puzzle_DASH_width_DASH_height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)) / aikakonematka.util.get_puzzle_image_width());
});
aikakonematka.util.get_piece_y_scale = (function aikakonematka$util$get_piece_y_scale(){
return (cljs.core.cst$kw$puzzle_DASH_width_DASH_height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)) / aikakonematka.util.get_puzzle_image_height());
});
aikakonematka.util.currently_playing_game_QMARK_ = (function aikakonematka$util$currently_playing_game_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_DASH_play_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)),cljs.core.cst$kw$playing);
});
aikakonematka.util.puzzle_completed_QMARK_ = (function aikakonematka$util$puzzle_completed_QMARK_(){
var sprites_state = cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state));
var row_flipped_QMARK_ = cljs.core.cst$kw$row_DASH_flipped_QMARK_.cljs$core$IFn$_invoke$arity$1(sprites_state);
var col_flipped_QMARK_ = cljs.core.cst$kw$col_DASH_flipped_QMARK_.cljs$core$IFn$_invoke$arity$1(sprites_state);
var diagonal_flipped_QMARK_ = cljs.core.cst$kw$diagonal_DASH_flipped_QMARK_.cljs$core$IFn$_invoke$arity$1(sprites_state);
return ((cljs.core.every_QMARK_(((function (sprites_state,row_flipped_QMARK_,col_flipped_QMARK_,diagonal_flipped_QMARK_){
return (function (p1__40436_SHARP_){
return cljs.core.val(p1__40436_SHARP_) === false;
});})(sprites_state,row_flipped_QMARK_,col_flipped_QMARK_,diagonal_flipped_QMARK_))
,row_flipped_QMARK_)) && (cljs.core.every_QMARK_(((function (sprites_state,row_flipped_QMARK_,col_flipped_QMARK_,diagonal_flipped_QMARK_){
return (function (p1__40437_SHARP_){
return cljs.core.val(p1__40437_SHARP_) === false;
});})(sprites_state,row_flipped_QMARK_,col_flipped_QMARK_,diagonal_flipped_QMARK_))
,col_flipped_QMARK_)) && (diagonal_flipped_QMARK_ === false)) || ((cljs.core.every_QMARK_(((function (sprites_state,row_flipped_QMARK_,col_flipped_QMARK_,diagonal_flipped_QMARK_){
return (function (p1__40438_SHARP_){
return cljs.core.val(p1__40438_SHARP_) === true;
});})(sprites_state,row_flipped_QMARK_,col_flipped_QMARK_,diagonal_flipped_QMARK_))
,row_flipped_QMARK_)) && (cljs.core.every_QMARK_(((function (sprites_state,row_flipped_QMARK_,col_flipped_QMARK_,diagonal_flipped_QMARK_){
return (function (p1__40439_SHARP_){
return cljs.core.val(p1__40439_SHARP_) === true;
});})(sprites_state,row_flipped_QMARK_,col_flipped_QMARK_,diagonal_flipped_QMARK_))
,col_flipped_QMARK_)) && (diagonal_flipped_QMARK_ === false));
});
aikakonematka.util.display_play_button_BANG_ = (function aikakonematka$util$display_play_button_BANG_(){
return cljs.core.cst$kw$play_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).scale.setTo((1),(1));
});
aikakonematka.util.hide_play_button_BANG_ = (function aikakonematka$util$hide_play_button_BANG_(){
return cljs.core.cst$kw$play_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).scale.setTo((0),(0));
});
aikakonematka.util.initial_sprites_state_per_piece = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__40440_SHARP_,p2__40441_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40440_SHARP_,p2__40441_SHARP_,false);
}),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9690__auto__ = (function aikakonematka$util$iter__40442(s__40443){
return (new cljs.core.LazySeq(null,(function (){
var s__40443__$1 = s__40443;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__40443__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var row = cljs.core.first(xs__6012__auto__);
var iterys__9686__auto__ = ((function (s__40443__$1,row,xs__6012__auto__,temp__5457__auto__){
return (function aikakonematka$util$iter__40442_$_iter__40444(s__40445){
return (new cljs.core.LazySeq(null,((function (s__40443__$1,row,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__40445__$1 = s__40445;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__40445__$1);
if(temp__5457__auto____$1){
var s__40445__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40445__$2)){
var c__9688__auto__ = cljs.core.chunk_first(s__40445__$2);
var size__9689__auto__ = cljs.core.count(c__9688__auto__);
var b__40447 = cljs.core.chunk_buffer(size__9689__auto__);
if((function (){var i__40446 = (0);
while(true){
if((i__40446 < size__9689__auto__)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9688__auto__,i__40446);
cljs.core.chunk_append(b__40447,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));

var G__40448 = (i__40446 + (1));
i__40446 = G__40448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40447),aikakonematka$util$iter__40442_$_iter__40444(cljs.core.chunk_rest(s__40445__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40447),null);
}
} else {
var col = cljs.core.first(s__40445__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),aikakonematka$util$iter__40442_$_iter__40444(cljs.core.rest(s__40445__$2)));
}
} else {
return null;
}
break;
}
});})(s__40443__$1,row,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__40443__$1,row,xs__6012__auto__,temp__5457__auto__))
;
var fs__9687__auto__ = cljs.core.seq(iterys__9686__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(aikakonematka.util.row_col_num)));
if(fs__9687__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__9687__auto__,aikakonematka$util$iter__40442(cljs.core.rest(s__40443__$1)));
} else {
var G__40449 = cljs.core.rest(s__40443__$1);
s__40443__$1 = G__40449;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9690__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(aikakonematka.util.row_col_num));
})());
aikakonematka.util.synchronize_puzzle_board_BANG_ = (function aikakonematka$util$synchronize_puzzle_board_BANG_(sprites_state){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.assoc,cljs.core.cst$kw$sprites_DASH_state,sprites_state);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["synchronizing.... :)"], 0));

var derefed_state = cljs.core.deref(aikakonematka.util.game_state);
var sprites = cljs.core.cst$kw$sprites.cljs$core$IFn$_invoke$arity$1(derefed_state);
var piece_x_scale = aikakonematka.util.get_piece_x_scale();
var piece_y_scale = aikakonematka.util.get_piece_y_scale();
var row_flips_applied = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (derefed_state,sprites,piece_x_scale,piece_y_scale){
return (function (modified_sprites_state_per_piece,p__40450){
var vec__40451 = p__40450;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40451,(0),null);
var flipped_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40451,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__40451,row,flipped_QMARK_,derefed_state,sprites,piece_x_scale,piece_y_scale){
return (function (sprites_state_per_piece,col){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(sprites_state_per_piece,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),(cljs.core.truth_(flipped_QMARK_)?cljs.core.not:cljs.core.identity));
});})(vec__40451,row,flipped_QMARK_,derefed_state,sprites,piece_x_scale,piece_y_scale))
,modified_sprites_state_per_piece,cljs.core.range.cljs$core$IFn$_invoke$arity$1(aikakonematka.util.row_col_num));
});})(derefed_state,sprites,piece_x_scale,piece_y_scale))
,aikakonematka.util.initial_sprites_state_per_piece,cljs.core.cst$kw$row_DASH_flipped_QMARK_.cljs$core$IFn$_invoke$arity$1(sprites_state));
var col_flips_applied = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (derefed_state,sprites,piece_x_scale,piece_y_scale,row_flips_applied){
return (function (modified_sprites_state,p__40454){
var vec__40455 = p__40454;
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40455,(0),null);
var flipped_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40455,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__40455,col,flipped_QMARK_,derefed_state,sprites,piece_x_scale,piece_y_scale,row_flips_applied){
return (function (sprites_state_per_piece,row){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(sprites_state_per_piece,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),(cljs.core.truth_(flipped_QMARK_)?cljs.core.not:cljs.core.identity));
});})(vec__40455,col,flipped_QMARK_,derefed_state,sprites,piece_x_scale,piece_y_scale,row_flips_applied))
,modified_sprites_state,cljs.core.range.cljs$core$IFn$_invoke$arity$1(aikakonematka.util.row_col_num));
});})(derefed_state,sprites,piece_x_scale,piece_y_scale,row_flips_applied))
,row_flips_applied,cljs.core.cst$kw$col_DASH_flipped_QMARK_.cljs$core$IFn$_invoke$arity$1(sprites_state));
var diagonal_flip_applied = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (derefed_state,sprites,piece_x_scale,piece_y_scale,row_flips_applied,col_flips_applied){
return (function (modified_sprites_state,row_col){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(modified_sprites_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((aikakonematka.util.row_col_num - (1)) - row_col),row_col], null),(cljs.core.truth_(cljs.core.cst$kw$diagonal_DASH_flipped_QMARK_.cljs$core$IFn$_invoke$arity$1(sprites_state))?cljs.core.not:cljs.core.identity));
});})(derefed_state,sprites,piece_x_scale,piece_y_scale,row_flips_applied,col_flips_applied))
,col_flips_applied,cljs.core.range.cljs$core$IFn$_invoke$arity$1(aikakonematka.util.row_col_num));
var seq__40458 = cljs.core.seq(diagonal_flip_applied);
var chunk__40459 = null;
var count__40460 = (0);
var i__40461 = (0);
while(true){
if((i__40461 < count__40460)){
var vec__40462 = chunk__40459.cljs$core$IIndexed$_nth$arity$2(null,i__40461);
var vec__40465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40462,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40465,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40465,(1),null);
var sprite_flipped_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40462,(1),null);
var piece_scale_40476 = (function (){var G__40468 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null);
return (sprites.cljs$core$IFn$_invoke$arity$1 ? sprites.cljs$core$IFn$_invoke$arity$1(G__40468) : sprites.call(null,G__40468));
})().scale;
var game_object_factory_40477 = cljs.core.deref(aikakonematka.util.game).add;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,sprite_flipped_state)){
game_object_factory_40477.tween(piece_scale_40476).to(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,piece_x_scale,cljs.core.cst$kw$y,piece_y_scale], null)),(500),Phaser.Easing.Cubic.In,true);
} else {
game_object_factory_40477.tween(piece_scale_40476).to(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null)),(500),Phaser.Easing.Cubic.In,true);
}

var G__40478 = seq__40458;
var G__40479 = chunk__40459;
var G__40480 = count__40460;
var G__40481 = (i__40461 + (1));
seq__40458 = G__40478;
chunk__40459 = G__40479;
count__40460 = G__40480;
i__40461 = G__40481;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__40458);
if(temp__5457__auto__){
var seq__40458__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40458__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__40458__$1);
var G__40482 = cljs.core.chunk_rest(seq__40458__$1);
var G__40483 = c__9739__auto__;
var G__40484 = cljs.core.count(c__9739__auto__);
var G__40485 = (0);
seq__40458 = G__40482;
chunk__40459 = G__40483;
count__40460 = G__40484;
i__40461 = G__40485;
continue;
} else {
var vec__40469 = cljs.core.first(seq__40458__$1);
var vec__40472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40469,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40472,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40472,(1),null);
var sprite_flipped_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40469,(1),null);
var piece_scale_40486 = (function (){var G__40475 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null);
return (sprites.cljs$core$IFn$_invoke$arity$1 ? sprites.cljs$core$IFn$_invoke$arity$1(G__40475) : sprites.call(null,G__40475));
})().scale;
var game_object_factory_40487 = cljs.core.deref(aikakonematka.util.game).add;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,sprite_flipped_state)){
game_object_factory_40487.tween(piece_scale_40486).to(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,piece_x_scale,cljs.core.cst$kw$y,piece_y_scale], null)),(500),Phaser.Easing.Cubic.In,true);
} else {
game_object_factory_40487.tween(piece_scale_40486).to(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null)),(500),Phaser.Easing.Cubic.In,true);
}

var G__40488 = cljs.core.next(seq__40458__$1);
var G__40489 = null;
var G__40490 = (0);
var G__40491 = (0);
seq__40458 = G__40488;
chunk__40459 = G__40489;
count__40460 = G__40490;
i__40461 = G__40491;
continue;
}
} else {
return null;
}
}
break;
}
});
aikakonematka.util.synchronize_puzzle_board_when_playing_BANG_ = (function aikakonematka$util$synchronize_puzzle_board_when_playing_BANG_(sprites_state){
if(cljs.core.truth_(aikakonematka.util.currently_playing_game_QMARK_())){
return aikakonematka.util.synchronize_puzzle_board_BANG_(sprites_state);
} else {
return null;
}
});
aikakonematka.util.display_ranking_button_BANG_ = (function aikakonematka$util$display_ranking_button_BANG_(){
return cljs.core.cst$kw$ranking_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).visible = true;
});
aikakonematka.util.hide_ranking_button_BANG_ = (function aikakonematka$util$hide_ranking_button_BANG_(){
return cljs.core.cst$kw$ranking_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).visible = false;
});
aikakonematka.util.make_ranking_button_BANG_ = (function aikakonematka$util$make_ranking_button_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.assoc,cljs.core.cst$kw$ranking_DASH_button,(function (){var this$ = this;
return cljs.core.deref(aikakonematka.util.game).add.button((0.9 * window.innerWidth),(0.03 * window.innerHeight),"ranking-button",((function (this$){
return (function (){
var G__40492 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen_DASH_change,cljs.core.cst$kw$ranking_DASH_dashboard], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40492) : re_frame.core.dispatch.call(null,G__40492));
});})(this$))
,this$);
})());

cljs.core.cst$kw$ranking_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).scale.setTo(0.5,0.5);

return aikakonematka.util.display_ranking_button_BANG_();
});
aikakonematka.util.set_on_click_callback_BANG_ = (function aikakonematka$util$set_on_click_callback_BANG_(sprite,callback_fn){
sprite.inputEnabled = true;

return sprite.events.onInputDown.add(callback_fn);
});
aikakonematka.util.show_game_BANG_ = (function aikakonematka$util$show_game_BANG_(search_word){
var G__40493_40495 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_game_DASH_img,search_word], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40493_40495) : re_frame.core.dispatch.call(null,G__40493_40495));

var G__40494 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen_DASH_change,cljs.core.cst$kw$game], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40494) : re_frame.core.dispatch.call(null,G__40494));
});
aikakonematka.util.show_puzzle_selection_BANG_ = (function aikakonematka$util$show_puzzle_selection_BANG_(){
var G__40496 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen_DASH_change,cljs.core.cst$kw$puzzle_DASH_selection], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40496) : re_frame.core.dispatch.call(null,G__40496));
});
aikakonematka.util.hide_control_buttons_BANG_ = (function aikakonematka$util$hide_control_buttons_BANG_(){
var seq__40497_40511 = cljs.core.seq(cljs.core.cst$kw$control_DASH_button_DASH_tweens.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)));
var chunk__40498_40512 = null;
var count__40499_40513 = (0);
var i__40500_40514 = (0);
while(true){
if((i__40500_40514 < count__40499_40513)){
var control_button_tween_40515 = chunk__40498_40512.cljs$core$IIndexed$_nth$arity$2(null,i__40500_40514);
control_button_tween_40515.stop();

var G__40516 = seq__40497_40511;
var G__40517 = chunk__40498_40512;
var G__40518 = count__40499_40513;
var G__40519 = (i__40500_40514 + (1));
seq__40497_40511 = G__40516;
chunk__40498_40512 = G__40517;
count__40499_40513 = G__40518;
i__40500_40514 = G__40519;
continue;
} else {
var temp__5457__auto___40520 = cljs.core.seq(seq__40497_40511);
if(temp__5457__auto___40520){
var seq__40497_40521__$1 = temp__5457__auto___40520;
if(cljs.core.chunked_seq_QMARK_(seq__40497_40521__$1)){
var c__9739__auto___40522 = cljs.core.chunk_first(seq__40497_40521__$1);
var G__40523 = cljs.core.chunk_rest(seq__40497_40521__$1);
var G__40524 = c__9739__auto___40522;
var G__40525 = cljs.core.count(c__9739__auto___40522);
var G__40526 = (0);
seq__40497_40511 = G__40523;
chunk__40498_40512 = G__40524;
count__40499_40513 = G__40525;
i__40500_40514 = G__40526;
continue;
} else {
var control_button_tween_40527 = cljs.core.first(seq__40497_40521__$1);
control_button_tween_40527.stop();

var G__40528 = cljs.core.next(seq__40497_40521__$1);
var G__40529 = null;
var G__40530 = (0);
var G__40531 = (0);
seq__40497_40511 = G__40528;
chunk__40498_40512 = G__40529;
count__40499_40513 = G__40530;
i__40500_40514 = G__40531;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.assoc,cljs.core.cst$kw$control_DASH_button_DASH_tweens,cljs.core.PersistentVector.EMPTY);

var seq__40501 = cljs.core.seq(cljs.core.cst$kw$control_DASH_buttons.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)));
var chunk__40502 = null;
var count__40503 = (0);
var i__40504 = (0);
while(true){
if((i__40504 < count__40503)){
var vec__40505 = chunk__40502.cljs$core$IIndexed$_nth$arity$2(null,i__40504);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40505,(0),null);
var control_button = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40505,(1),null);
control_button.scale.setTo((0),(0));

var G__40532 = seq__40501;
var G__40533 = chunk__40502;
var G__40534 = count__40503;
var G__40535 = (i__40504 + (1));
seq__40501 = G__40532;
chunk__40502 = G__40533;
count__40503 = G__40534;
i__40504 = G__40535;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__40501);
if(temp__5457__auto__){
var seq__40501__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40501__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__40501__$1);
var G__40536 = cljs.core.chunk_rest(seq__40501__$1);
var G__40537 = c__9739__auto__;
var G__40538 = cljs.core.count(c__9739__auto__);
var G__40539 = (0);
seq__40501 = G__40536;
chunk__40502 = G__40537;
count__40503 = G__40538;
i__40504 = G__40539;
continue;
} else {
var vec__40508 = cljs.core.first(seq__40501__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40508,(0),null);
var control_button = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40508,(1),null);
control_button.scale.setTo((0),(0));

var G__40540 = cljs.core.next(seq__40501__$1);
var G__40541 = null;
var G__40542 = (0);
var G__40543 = (0);
seq__40501 = G__40540;
chunk__40502 = G__40541;
count__40503 = G__40542;
i__40504 = G__40543;
continue;
}
} else {
return null;
}
}
break;
}
});
aikakonematka.util.show_control_buttons_BANG_ = (function aikakonematka$util$show_control_buttons_BANG_(){
var seq__40544 = cljs.core.seq(cljs.core.cst$kw$control_DASH_buttons.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)));
var chunk__40545 = null;
var count__40546 = (0);
var i__40547 = (0);
while(true){
if((i__40547 < count__40546)){
var vec__40548 = chunk__40545.cljs$core$IIndexed$_nth$arity$2(null,i__40547);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40548,(0),null);
var control_button = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40548,(1),null);
aikakonematka.util.display_control_buttons_and_use_tween_scale_BANG_(control_button);

var G__40554 = seq__40544;
var G__40555 = chunk__40545;
var G__40556 = count__40546;
var G__40557 = (i__40547 + (1));
seq__40544 = G__40554;
chunk__40545 = G__40555;
count__40546 = G__40556;
i__40547 = G__40557;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__40544);
if(temp__5457__auto__){
var seq__40544__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40544__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__40544__$1);
var G__40558 = cljs.core.chunk_rest(seq__40544__$1);
var G__40559 = c__9739__auto__;
var G__40560 = cljs.core.count(c__9739__auto__);
var G__40561 = (0);
seq__40544 = G__40558;
chunk__40545 = G__40559;
count__40546 = G__40560;
i__40547 = G__40561;
continue;
} else {
var vec__40551 = cljs.core.first(seq__40544__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40551,(0),null);
var control_button = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40551,(1),null);
aikakonematka.util.display_control_buttons_and_use_tween_scale_BANG_(control_button);

var G__40562 = cljs.core.next(seq__40544__$1);
var G__40563 = null;
var G__40564 = (0);
var G__40565 = (0);
seq__40544 = G__40562;
chunk__40545 = G__40563;
count__40546 = G__40564;
i__40547 = G__40565;
continue;
}
} else {
return null;
}
}
break;
}
});
aikakonematka.util.hide_all_puzzle_pieces_BANG_ = (function aikakonematka$util$hide_all_puzzle_pieces_BANG_(){
aikakonematka.util.synchronize_puzzle_board_when_playing_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$row_DASH_flipped_QMARK_,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__40566_SHARP_,p2__40567_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40566_SHARP_,p2__40567_SHARP_,true);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1(aikakonematka.util.row_col_num)),cljs.core.cst$kw$col_DASH_flipped_QMARK_,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__40568_SHARP_,p2__40569_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40568_SHARP_,p2__40569_SHARP_,false);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1(aikakonematka.util.row_col_num)),cljs.core.cst$kw$diagonal_DASH_flipped_QMARK_,false], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.assoc,cljs.core.cst$kw$sprites_DASH_state,null);
});
aikakonematka.util.make_play_time_BANG_ = (function aikakonematka$util$make_play_time_BANG_(){
var play_time_text = cljs.core.deref(aikakonematka.util.game).add.text((window.innerHeight / (20)),(window.innerHeight / (20)),"0.000",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$font,"bold 30px Arial",cljs.core.cst$kw$fontVariant,"small-caps",cljs.core.cst$kw$fill,"#F6F4F3",cljs.core.cst$kw$align,"center",cljs.core.cst$kw$stroke,"#3D5A80",cljs.core.cst$kw$strokeThickness,"7"], null)));
if(cljs.core.truth_(cljs.core.cst$kw$play_DASH_time_DASH_text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.assoc,cljs.core.cst$kw$play_DASH_time_DASH_text,play_time_text);
}

return play_time_text.setShadow((3),(3),"rgba(0,0,0,0.5)",(3));
});
aikakonematka.util.show_play_time_text_BANG_ = (function aikakonematka$util$show_play_time_text_BANG_(){
return cljs.core.cst$kw$play_DASH_time_DASH_text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).visible = true;
});
aikakonematka.util.hide_play_time_text_BANG_ = (function aikakonematka$util$hide_play_time_text_BANG_(){
return cljs.core.cst$kw$play_DASH_time_DASH_text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).visible = false;
});
aikakonematka.util.update_play_time_to_current_time_BANG_ = (function aikakonematka$util$update_play_time_to_current_time_BANG_(play_time){
var derefed_state = cljs.core.deref(aikakonematka.util.game_state);
var play_time_in_sec = (play_time / (1000));
cljs.core.cst$kw$play_DASH_time_DASH_text.cljs$core$IFn$_invoke$arity$1(derefed_state).setText([cljs.core.str.cljs$core$IFn$_invoke$arity$1(play_time_in_sec)].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.assoc,cljs.core.cst$kw$play_DASH_time,play_time_in_sec);
});
aikakonematka.util.show_reset_button_BANG_ = (function aikakonematka$util$show_reset_button_BANG_(){
return cljs.core.cst$kw$reset_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).visible = true;
});
aikakonematka.util.hide_reset_button_BANG_ = (function aikakonematka$util$hide_reset_button_BANG_(){
return cljs.core.cst$kw$reset_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).visible = false;
});
aikakonematka.util.reset_game_BANG_ = (function aikakonematka$util$reset_game_BANG_(){
aikakonematka.util.hide_all_puzzle_pieces_BANG_();

aikakonematka.util.hide_control_buttons_BANG_();

aikakonematka.util.hide_play_time_text_BANG_();

aikakonematka.util.set_game_play_state_BANG_(cljs.core.cst$kw$before_DASH_started);

aikakonematka.util.display_play_button_BANG_();

return aikakonematka.util.display_ranking_button_BANG_();
});
aikakonematka.util.make_reset_button_BANG_ = (function aikakonematka$util$make_reset_button_BANG_(send_reset_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.assoc,cljs.core.cst$kw$reset_DASH_button,(function (){var this$ = this;
return cljs.core.deref(aikakonematka.util.game).add.button(((0.9 * window.innerWidth) - (270)),(0.03 * window.innerHeight),"reset-button",((function (this$){
return (function (){
aikakonematka.util.reset_game_BANG_();

return (send_reset_fn.cljs$core$IFn$_invoke$arity$0 ? send_reset_fn.cljs$core$IFn$_invoke$arity$0() : send_reset_fn.call(null));
});})(this$))
,this$);
})());

cljs.core.cst$kw$reset_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).scale.setTo(0.5,0.5);

return aikakonematka.util.hide_reset_button_BANG_();
});
aikakonematka.util.toggle_sound_on_off = (function aikakonematka$util$toggle_sound_on_off(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.update,cljs.core.cst$kw$audio_DASH_on_QMARK_,cljs.core.not);

if(cljs.core.truth_(cljs.core.cst$kw$audio_DASH_on_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)))){
return cljs.core.cst$kw$audio_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).frame = (0);
} else {
return cljs.core.cst$kw$audio_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).frame = (1);
}
});
aikakonematka.util.make_audio_button_BANG_ = (function aikakonematka$util$make_audio_button_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.assoc,cljs.core.cst$kw$audio_DASH_button,(function (){var this$ = this;
return cljs.core.deref(aikakonematka.util.game).add.button(((0.9 * window.innerWidth) - (180)),(0.03 * window.innerHeight),"audio-onoff-toggle-button",aikakonematka.util.toggle_sound_on_off,this$);
})());

cljs.core.cst$kw$audio_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).scale.setTo(0.5,0.5);

return cljs.core.cst$kw$audio_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).frame = (0);
});
aikakonematka.util.display_puzzle_selection_button_BANG_ = (function aikakonematka$util$display_puzzle_selection_button_BANG_(){
return cljs.core.cst$kw$puzzle_DASH_selection_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).visible = true;
});
aikakonematka.util.make_puzzle_selection_button_BANG_ = (function aikakonematka$util$make_puzzle_selection_button_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.assoc,cljs.core.cst$kw$puzzle_DASH_selection_DASH_button,(function (){var this$ = this;
return cljs.core.deref(aikakonematka.util.game).add.button(((0.9 * window.innerWidth) - (90)),(0.03 * window.innerHeight),"puzzle-selection-button",((function (this$){
return (function (){
var G__40570 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen_DASH_change,cljs.core.cst$kw$puzzle_DASH_selection], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40570) : re_frame.core.dispatch.call(null,G__40570));
});})(this$))
,this$);
})());

cljs.core.cst$kw$puzzle_DASH_selection_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).scale.setTo(0.5,0.5);

return aikakonematka.util.display_puzzle_selection_button_BANG_();
});
aikakonematka.util.display_game_intro_message_BANG_ = (function aikakonematka$util$display_game_intro_message_BANG_(){
var intro_text = cljs.core.deref(aikakonematka.util.game).add.text((window.innerWidth / (2)),(window.innerHeight / (4)),"Back to the Suomi past!\n                     Like our journey in our life,\n                     playing this game with companions,\n                     it might be more fun and enjoyable.\n                     Are you ready for beautiful discovery?",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$font,"bold 25px Arial",cljs.core.cst$kw$fontVariant,"small-caps",cljs.core.cst$kw$fill,"#F6F4F3",cljs.core.cst$kw$align,"center",cljs.core.cst$kw$boundsAlignH,"center",cljs.core.cst$kw$boundsAlignV,"center",cljs.core.cst$kw$stroke,"#3D5A80",cljs.core.cst$kw$strokeThickness,"7"], null)));
var is_landscape = ((window.innerHeight / window.innerWidth) < 1.3);
if(is_landscape){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.assoc,cljs.core.cst$kw$puzzle_DASH_game_DASH_intro_DASH_text,intro_text);

intro_text.anchor.x = 0.5;

intro_text.anchor.y = 0.5;

return intro_text.setShadow((3),(3),"rgba(0,0,0,0.5)",(3));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.assoc,cljs.core.cst$kw$puzzle_DASH_game_DASH_intro_DASH_text,intro_text);

return cljs.core.cst$kw$puzzle_DASH_game_DASH_intro_DASH_text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).visible = false;
}
});
aikakonematka.util.destroy_game_intro_text_BANG_ = (function aikakonematka$util$destroy_game_intro_text_BANG_(){
var temp__5457__auto___40571 = cljs.core.cst$kw$puzzle_DASH_game_DASH_intro_DASH_text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state));
if(cljs.core.truth_(temp__5457__auto___40571)){
var puzzle_intro_text_40572 = temp__5457__auto___40571;
puzzle_intro_text_40572.destroy();
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.assoc,cljs.core.cst$kw$puzzle_DASH_game_DASH_intro_DASH_text,null);
});
aikakonematka.util.make_congrats_message_BANG_ = (function aikakonematka$util$make_congrats_message_BANG_(){
var congrats_msg = cljs.core.deref(aikakonematka.util.game).add.text((0.5 * window.innerWidth),(0.3 * window.innerHeight),"Congrats! \n Awesome! You made it :D",cljs.core.clj__GT_js(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$boundsAlignH,cljs.core.cst$kw$fontVariant,cljs.core.cst$kw$align,cljs.core.cst$kw$stroke,cljs.core.cst$kw$fill,cljs.core.cst$kw$boundsAlignV,cljs.core.cst$kw$font,cljs.core.cst$kw$strokeThickness,cljs.core.cst$kw$backgroundColor],["center","small-caps","center","#EE6C4D","#F6F4F3","center","bold 60px Arial","10","rgba(242,242,242, 0.7)"])));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.assoc,cljs.core.cst$kw$puzzle_DASH_completion_DASH_text,congrats_msg);

congrats_msg.anchor.x = 0.5;

congrats_msg.anchor.y = 0.5;

return congrats_msg.setShadow((3),(3),"rgba(32,32,32, 0.8)",(1));
});
aikakonematka.util.display_congrats_message_BANG_ = (function aikakonematka$util$display_congrats_message_BANG_(){
return cljs.core.cst$kw$puzzle_DASH_completion_DASH_text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).visible = true;
});
aikakonematka.util.hide_congrats_message_BANG_ = (function aikakonematka$util$hide_congrats_message_BANG_(){
return cljs.core.cst$kw$puzzle_DASH_completion_DASH_text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).visible = false;
});
aikakonematka.util.congrats_finish_game_BANG_ = (function aikakonematka$util$congrats_finish_game_BANG_(send_puzzle_complete_fn_BANG_){
if(cljs.core.truth_((function (){var and__8796__auto__ = aikakonematka.util.puzzle_completed_QMARK_();
if(cljs.core.truth_(and__8796__auto__)){
var and__8796__auto____$1 = aikakonematka.util.currently_playing_game_QMARK_();
if(cljs.core.truth_(and__8796__auto____$1)){
return cljs.core.not(cljs.core.cst$kw$puzzle_DASH_completion_DASH_text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).visible);
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})())){
aikakonematka.util.set_game_play_state_BANG_(cljs.core.cst$kw$solved);

aikakonematka.util.hide_reset_button_BANG_();

aikakonematka.util.hide_control_buttons_BANG_();

aikakonematka.util.display_play_button_BANG_();

aikakonematka.util.display_ranking_button_BANG_();

aikakonematka.util.display_congrats_message_BANG_();

var G__40573_40574 = cljs.core.cst$kw$play_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state));
(send_puzzle_complete_fn_BANG_.cljs$core$IFn$_invoke$arity$1 ? send_puzzle_complete_fn_BANG_.cljs$core$IFn$_invoke$arity$1(G__40573_40574) : send_puzzle_complete_fn_BANG_.call(null,G__40573_40574));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.assoc,cljs.core.cst$kw$sprites_DASH_state,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
aikakonematka.util.update_music_notes_BANG_ = (function aikakonematka$util$update_music_notes_BANG_(music_pitches){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.assoc,cljs.core.cst$kw$music_DASH_pitches,music_pitches);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.assoc,cljs.core.cst$kw$music_DASH_durations,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (_){
return cljs.core.rand.cljs$core$IFn$_invoke$arity$1((1));
}),music_pitches));
});
aikakonematka.util.repositioning_puzzle_pieces_BANG_ = (function aikakonematka$util$repositioning_puzzle_pieces_BANG_(p__40575){
var map__40576 = p__40575;
var map__40576__$1 = ((((!((map__40576 == null)))?((((map__40576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40576.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40576):map__40576);
var x_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40576__$1,cljs.core.cst$kw$x_DASH_pos);
var y_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40576__$1,cljs.core.cst$kw$y_DASH_pos);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40576__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40576__$1,cljs.core.cst$kw$col);
var piece = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(aikakonematka.util.game_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprites,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)], null));
if(cljs.core.truth_(piece)){
piece.x = x_pos;

return piece.y = y_pos;
} else {
return null;
}
});
aikakonematka.util.repositioning_control_button_BANG_ = (function aikakonematka$util$repositioning_control_button_BANG_(p__40578){
var map__40579 = p__40578;
var map__40579__$1 = ((((!((map__40579 == null)))?((((map__40579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40579):map__40579);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40579__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40579__$1,cljs.core.cst$kw$col);
var x_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40579__$1,cljs.core.cst$kw$x_DASH_pos);
var y_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40579__$1,cljs.core.cst$kw$y_DASH_pos);
var piece_width_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40579__$1,cljs.core.cst$kw$piece_DASH_width_DASH_height);
if(((col === (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row,(aikakonematka.util.row_col_num - (1))))){
var control_button_40599 = (function (){var G__40584 = cljs.core.cst$kw$bottom_DASH_left;
var fexpr__40583 = (function (){var G__40586 = cljs.core.cst$kw$control_DASH_buttons;
var fexpr__40585 = cljs.core.deref(aikakonematka.util.game_state);
return (fexpr__40585.cljs$core$IFn$_invoke$arity$1 ? fexpr__40585.cljs$core$IFn$_invoke$arity$1(G__40586) : fexpr__40585.call(null,G__40586));
})();
return (fexpr__40583.cljs$core$IFn$_invoke$arity$1 ? fexpr__40583.cljs$core$IFn$_invoke$arity$1(G__40584) : fexpr__40583.call(null,G__40584));
})();
if(cljs.core.truth_(control_button_40599)){
control_button_40599.x = (x_pos - piece_width_height);

control_button_40599.y = (y_pos + piece_width_height);
} else {
}
} else {
}

if((col === (0))){
var control_button_40600 = (function (){var G__40590 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left,row], null);
var fexpr__40589 = (function (){var G__40592 = cljs.core.cst$kw$control_DASH_buttons;
var fexpr__40591 = cljs.core.deref(aikakonematka.util.game_state);
return (fexpr__40591.cljs$core$IFn$_invoke$arity$1 ? fexpr__40591.cljs$core$IFn$_invoke$arity$1(G__40592) : fexpr__40591.call(null,G__40592));
})();
return (fexpr__40589.cljs$core$IFn$_invoke$arity$1 ? fexpr__40589.cljs$core$IFn$_invoke$arity$1(G__40590) : fexpr__40589.call(null,G__40590));
})();
if(cljs.core.truth_(control_button_40600)){
control_button_40600.x = (x_pos - piece_width_height);

control_button_40600.y = y_pos;
} else {
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row,(aikakonematka.util.row_col_num - (1)))){
var control_button = (function (){var G__40596 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bottom,col], null);
var fexpr__40595 = (function (){var G__40598 = cljs.core.cst$kw$control_DASH_buttons;
var fexpr__40597 = cljs.core.deref(aikakonematka.util.game_state);
return (fexpr__40597.cljs$core$IFn$_invoke$arity$1 ? fexpr__40597.cljs$core$IFn$_invoke$arity$1(G__40598) : fexpr__40597.call(null,G__40598));
})();
return (fexpr__40595.cljs$core$IFn$_invoke$arity$1 ? fexpr__40595.cljs$core$IFn$_invoke$arity$1(G__40596) : fexpr__40595.call(null,G__40596));
})();
if(cljs.core.truth_(control_button)){
control_button.x = x_pos;

return control_button.y = (y_pos + piece_width_height);
} else {
return null;
}
} else {
return null;
}
});
aikakonematka.util.positioning_control_buttons_and_puzzle_pieces_BANG_ = (function aikakonematka$util$positioning_control_buttons_and_puzzle_pieces_BANG_(){
var seq__40601 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(aikakonematka.util.row_col_num));
var chunk__40608 = null;
var count__40609 = (0);
var i__40610 = (0);
while(true){
if((i__40610 < count__40609)){
var row = chunk__40608.cljs$core$IIndexed$_nth$arity$2(null,i__40610);
var seq__40611_40617 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(aikakonematka.util.row_col_num));
var chunk__40613_40618 = null;
var count__40614_40619 = (0);
var i__40615_40620 = (0);
while(true){
if((i__40615_40620 < count__40614_40619)){
var col_40621 = chunk__40613_40618.cljs$core$IIndexed$_nth$arity$2(null,i__40615_40620);
var piece_width_height_40622 = aikakonematka.util.get_piece_width_height(cljs.core.cst$kw$puzzle_DASH_width_DASH_height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)));
var x_pos_40623 = (((piece_width_height_40622 * col_40621) + aikakonematka.util.get_left_margin()) + ((2) + col_40621));
var y_pos_40624 = (((piece_width_height_40622 * row) + aikakonematka.util.get_top_margin()) + ((2) + row));
aikakonematka.util.repositioning_puzzle_pieces_BANG_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x_DASH_pos,x_pos_40623,cljs.core.cst$kw$y_DASH_pos,y_pos_40624,cljs.core.cst$kw$row,row,cljs.core.cst$kw$col,col_40621], null));

aikakonematka.util.repositioning_control_button_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$row,row,cljs.core.cst$kw$col,col_40621,cljs.core.cst$kw$x_DASH_pos,x_pos_40623,cljs.core.cst$kw$y_DASH_pos,y_pos_40624,cljs.core.cst$kw$piece_DASH_width_DASH_height,piece_width_height_40622], null));

var G__40625 = seq__40611_40617;
var G__40626 = chunk__40613_40618;
var G__40627 = count__40614_40619;
var G__40628 = (i__40615_40620 + (1));
seq__40611_40617 = G__40625;
chunk__40613_40618 = G__40626;
count__40614_40619 = G__40627;
i__40615_40620 = G__40628;
continue;
} else {
var temp__5457__auto___40629 = cljs.core.seq(seq__40611_40617);
if(temp__5457__auto___40629){
var seq__40611_40630__$1 = temp__5457__auto___40629;
if(cljs.core.chunked_seq_QMARK_(seq__40611_40630__$1)){
var c__9739__auto___40631 = cljs.core.chunk_first(seq__40611_40630__$1);
var G__40632 = cljs.core.chunk_rest(seq__40611_40630__$1);
var G__40633 = c__9739__auto___40631;
var G__40634 = cljs.core.count(c__9739__auto___40631);
var G__40635 = (0);
seq__40611_40617 = G__40632;
chunk__40613_40618 = G__40633;
count__40614_40619 = G__40634;
i__40615_40620 = G__40635;
continue;
} else {
var col_40636 = cljs.core.first(seq__40611_40630__$1);
var piece_width_height_40637 = aikakonematka.util.get_piece_width_height(cljs.core.cst$kw$puzzle_DASH_width_DASH_height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)));
var x_pos_40638 = (((piece_width_height_40637 * col_40636) + aikakonematka.util.get_left_margin()) + ((2) + col_40636));
var y_pos_40639 = (((piece_width_height_40637 * row) + aikakonematka.util.get_top_margin()) + ((2) + row));
aikakonematka.util.repositioning_puzzle_pieces_BANG_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x_DASH_pos,x_pos_40638,cljs.core.cst$kw$y_DASH_pos,y_pos_40639,cljs.core.cst$kw$row,row,cljs.core.cst$kw$col,col_40636], null));

aikakonematka.util.repositioning_control_button_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$row,row,cljs.core.cst$kw$col,col_40636,cljs.core.cst$kw$x_DASH_pos,x_pos_40638,cljs.core.cst$kw$y_DASH_pos,y_pos_40639,cljs.core.cst$kw$piece_DASH_width_DASH_height,piece_width_height_40637], null));

var G__40640 = cljs.core.next(seq__40611_40630__$1);
var G__40641 = null;
var G__40642 = (0);
var G__40643 = (0);
seq__40611_40617 = G__40640;
chunk__40613_40618 = G__40641;
count__40614_40619 = G__40642;
i__40615_40620 = G__40643;
continue;
}
} else {
}
}
break;
}

var G__40644 = seq__40601;
var G__40645 = chunk__40608;
var G__40646 = count__40609;
var G__40647 = (i__40610 + (1));
seq__40601 = G__40644;
chunk__40608 = G__40645;
count__40609 = G__40646;
i__40610 = G__40647;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__40601);
if(temp__5457__auto__){
var seq__40601__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40601__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__40601__$1);
var G__40648 = cljs.core.chunk_rest(seq__40601__$1);
var G__40649 = c__9739__auto__;
var G__40650 = cljs.core.count(c__9739__auto__);
var G__40651 = (0);
seq__40601 = G__40648;
chunk__40608 = G__40649;
count__40609 = G__40650;
i__40610 = G__40651;
continue;
} else {
var row = cljs.core.first(seq__40601__$1);
var seq__40602_40652 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(aikakonematka.util.row_col_num));
var chunk__40604_40653 = null;
var count__40605_40654 = (0);
var i__40606_40655 = (0);
while(true){
if((i__40606_40655 < count__40605_40654)){
var col_40656 = chunk__40604_40653.cljs$core$IIndexed$_nth$arity$2(null,i__40606_40655);
var piece_width_height_40657 = aikakonematka.util.get_piece_width_height(cljs.core.cst$kw$puzzle_DASH_width_DASH_height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)));
var x_pos_40658 = (((piece_width_height_40657 * col_40656) + aikakonematka.util.get_left_margin()) + ((2) + col_40656));
var y_pos_40659 = (((piece_width_height_40657 * row) + aikakonematka.util.get_top_margin()) + ((2) + row));
aikakonematka.util.repositioning_puzzle_pieces_BANG_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x_DASH_pos,x_pos_40658,cljs.core.cst$kw$y_DASH_pos,y_pos_40659,cljs.core.cst$kw$row,row,cljs.core.cst$kw$col,col_40656], null));

aikakonematka.util.repositioning_control_button_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$row,row,cljs.core.cst$kw$col,col_40656,cljs.core.cst$kw$x_DASH_pos,x_pos_40658,cljs.core.cst$kw$y_DASH_pos,y_pos_40659,cljs.core.cst$kw$piece_DASH_width_DASH_height,piece_width_height_40657], null));

var G__40660 = seq__40602_40652;
var G__40661 = chunk__40604_40653;
var G__40662 = count__40605_40654;
var G__40663 = (i__40606_40655 + (1));
seq__40602_40652 = G__40660;
chunk__40604_40653 = G__40661;
count__40605_40654 = G__40662;
i__40606_40655 = G__40663;
continue;
} else {
var temp__5457__auto___40664__$1 = cljs.core.seq(seq__40602_40652);
if(temp__5457__auto___40664__$1){
var seq__40602_40665__$1 = temp__5457__auto___40664__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40602_40665__$1)){
var c__9739__auto___40666 = cljs.core.chunk_first(seq__40602_40665__$1);
var G__40667 = cljs.core.chunk_rest(seq__40602_40665__$1);
var G__40668 = c__9739__auto___40666;
var G__40669 = cljs.core.count(c__9739__auto___40666);
var G__40670 = (0);
seq__40602_40652 = G__40667;
chunk__40604_40653 = G__40668;
count__40605_40654 = G__40669;
i__40606_40655 = G__40670;
continue;
} else {
var col_40671 = cljs.core.first(seq__40602_40665__$1);
var piece_width_height_40672 = aikakonematka.util.get_piece_width_height(cljs.core.cst$kw$puzzle_DASH_width_DASH_height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)));
var x_pos_40673 = (((piece_width_height_40672 * col_40671) + aikakonematka.util.get_left_margin()) + ((2) + col_40671));
var y_pos_40674 = (((piece_width_height_40672 * row) + aikakonematka.util.get_top_margin()) + ((2) + row));
aikakonematka.util.repositioning_puzzle_pieces_BANG_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x_DASH_pos,x_pos_40673,cljs.core.cst$kw$y_DASH_pos,y_pos_40674,cljs.core.cst$kw$row,row,cljs.core.cst$kw$col,col_40671], null));

aikakonematka.util.repositioning_control_button_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$row,row,cljs.core.cst$kw$col,col_40671,cljs.core.cst$kw$x_DASH_pos,x_pos_40673,cljs.core.cst$kw$y_DASH_pos,y_pos_40674,cljs.core.cst$kw$piece_DASH_width_DASH_height,piece_width_height_40672], null));

var G__40675 = cljs.core.next(seq__40602_40665__$1);
var G__40676 = null;
var G__40677 = (0);
var G__40678 = (0);
seq__40602_40652 = G__40675;
chunk__40604_40653 = G__40676;
count__40605_40654 = G__40677;
i__40606_40655 = G__40678;
continue;
}
} else {
}
}
break;
}

var G__40679 = cljs.core.next(seq__40601__$1);
var G__40680 = null;
var G__40681 = (0);
var G__40682 = (0);
seq__40601 = G__40679;
chunk__40608 = G__40680;
count__40609 = G__40681;
i__40610 = G__40682;
continue;
}
} else {
return null;
}
}
break;
}
});
aikakonematka.util.positioning_ui_elements_for_landscape_mode_BANG_ = (function aikakonematka$util$positioning_ui_elements_for_landscape_mode_BANG_(){
var derefed_stated = cljs.core.deref(aikakonematka.util.game_state);
var window_inner_width = window.innerWidth;
var window_inner_height = window.innerHeight;
cljs.core.cst$kw$play_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_stated).x = (0.5 * window_inner_width);

cljs.core.cst$kw$play_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_stated).y = (0.6 * window_inner_height);

cljs.core.cst$kw$ranking_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_stated).x = (0.85 * window_inner_width);

cljs.core.cst$kw$ranking_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_stated).y = (0.75 * window_inner_height);

cljs.core.cst$kw$reset_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_stated).x = (0.85 * window_inner_width);

cljs.core.cst$kw$reset_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_stated).y = (0.55 * window_inner_height);

cljs.core.cst$kw$audio_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_stated).x = (0.85 * window_inner_width);

cljs.core.cst$kw$audio_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_stated).y = (0.35 * window_inner_height);

cljs.core.cst$kw$puzzle_DASH_selection_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_stated).x = (0.85 * window_inner_width);

cljs.core.cst$kw$puzzle_DASH_selection_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_stated).y = (0.15 * window_inner_height);

cljs.core.cst$kw$play_DASH_time_DASH_text.cljs$core$IFn$_invoke$arity$1(derefed_stated).x = (window_inner_width / (20));

cljs.core.cst$kw$play_DASH_time_DASH_text.cljs$core$IFn$_invoke$arity$1(derefed_stated).y = (window_inner_height / (20));

cljs.core.cst$kw$puzzle_DASH_completion_DASH_text.cljs$core$IFn$_invoke$arity$1(derefed_stated).x = (0.5 * window_inner_width);

return cljs.core.cst$kw$puzzle_DASH_completion_DASH_text.cljs$core$IFn$_invoke$arity$1(derefed_stated).y = (0.3 * window_inner_height);
});
aikakonematka.util.positioning_ui_elements_for_portrait_mode_BANG_ = (function aikakonematka$util$positioning_ui_elements_for_portrait_mode_BANG_(){
var derefed_stated = cljs.core.deref(aikakonematka.util.game_state);
var window_inner_width = window.innerWidth;
var window_inner_height = window.innerHeight;
var is_landscape_in_phone = ((window_inner_width < (1366))) && ((window_inner_height < (800)));
cljs.core.cst$kw$play_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_stated).x = (0.5 * window_inner_width);

cljs.core.cst$kw$play_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_stated).y = (0.6 * window_inner_height);

cljs.core.cst$kw$ranking_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_stated).x = (0.75 * window_inner_width);

cljs.core.cst$kw$ranking_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_stated).y = (0.85 * window_inner_height);

cljs.core.cst$kw$reset_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_stated).x = (0.55 * window_inner_width);

cljs.core.cst$kw$reset_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_stated).y = (0.85 * window_inner_height);

cljs.core.cst$kw$audio_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_stated).x = (0.35 * window_inner_width);

cljs.core.cst$kw$audio_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_stated).y = (0.85 * window_inner_height);

cljs.core.cst$kw$puzzle_DASH_selection_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_stated).x = (0.1 * window_inner_width);

cljs.core.cst$kw$puzzle_DASH_selection_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_stated).y = (0.85 * window_inner_height);

cljs.core.cst$kw$play_DASH_time_DASH_text.cljs$core$IFn$_invoke$arity$1(derefed_stated).x = (window_inner_width / (20));

cljs.core.cst$kw$play_DASH_time_DASH_text.cljs$core$IFn$_invoke$arity$1(derefed_stated).y = (window_inner_height / (20));

cljs.core.cst$kw$puzzle_DASH_completion_DASH_text.cljs$core$IFn$_invoke$arity$1(derefed_stated).x = (0.5 * window_inner_width);

return cljs.core.cst$kw$puzzle_DASH_completion_DASH_text.cljs$core$IFn$_invoke$arity$1(derefed_stated).y = (0.3 * window_inner_height);
});
aikakonematka.util.positioning_ui_elements_BANG_ = (function aikakonematka$util$positioning_ui_elements_BANG_(){
var window_inner_width = window.innerWidth;
var window_inner_height = window.innerHeight;
var is_landscape = ((window_inner_height / window_inner_width) < 1.3);
aikakonematka.util.positioning_control_buttons_and_puzzle_pieces_BANG_();

if(is_landscape){
return aikakonematka.util.positioning_ui_elements_for_landscape_mode_BANG_();
} else {
return aikakonematka.util.positioning_ui_elements_for_portrait_mode_BANG_();
}
});
