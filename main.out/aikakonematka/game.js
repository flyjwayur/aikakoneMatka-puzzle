// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('aikakonematka.game');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('aikakonematka.util');
goog.require('aikakonematka.sound');
goog.require('re_frame.core');
aikakonematka.game.create_preload = (function aikakonematka$game$create_preload(image_src){
return (function (){
cljs.core.deref(aikakonematka.util.game).scale.scaleMode = Phaser.ScaleManager.RESIZE;

var phaser_loader = cljs.core.deref(aikakonematka.util.game).load;
phaser_loader.spritesheet("puzzle",image_src,aikakonematka.util.get_piece_width_height(cljs.core.deref(aikakonematka.util.puzzle_image_width)),aikakonematka.util.get_piece_width_height(cljs.core.deref(aikakonematka.util.puzzle_image_height)),(aikakonematka.util.row_col_num * aikakonematka.util.row_col_num));

phaser_loader.spritesheet("flip-buttons","images/control-buttons.png",aikakonematka.util.get_button_width(aikakonematka.util.button_sprite_col_num),aikakonematka.util.get_button_height(aikakonematka.util.button_sprite_row_num),(aikakonematka.util.button_sprite_row_num * aikakonematka.util.button_sprite_col_num));

phaser_loader.image("play-button","images/play-button.png");

phaser_loader.image("ranking-button","images/ranking-button.png");

phaser_loader.image("puzzle-selection-button","images/puzzle-selection-button.png");

phaser_loader.image("reset-button","images/reset-button.png");

phaser_loader.image("game-play-bg","images/puzzle-play-bg.jpg");

phaser_loader.image("intro-title","images/intro-title.png");

phaser_loader.image("lovely-baby-in-selection","images/lovely-baby-in-selection.png");

phaser_loader.image("lovely-baby-in-puzzle","images/lovely-baby-in-puzzle.png");

return phaser_loader.spritesheet("audio-onoff-toggle-button","images/audio-button.png",(150),(150));
});
});
aikakonematka.game.flip_diagonal_pieces_BANG_ = (function aikakonematka$game$flip_diagonal_pieces_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprites_DASH_state,cljs.core.cst$kw$diagonal_DASH_flipped_QMARK_], null),cljs.core.not);
});
aikakonematka.game.flip_row_BANG_ = (function aikakonematka$game$flip_row_BANG_(row){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprites_DASH_state,cljs.core.cst$kw$row_DASH_flipped_QMARK_,row], null),cljs.core.not);
});
aikakonematka.game.flip_col_BANG_ = (function aikakonematka$game$flip_col_BANG_(col){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprites_DASH_state,cljs.core.cst$kw$col_DASH_flipped_QMARK_,col], null),cljs.core.not);
});
aikakonematka.game.make_play_button_BANG_ = (function aikakonematka$game$make_play_button_BANG_(send_game_start_fn_BANG_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.assoc,cljs.core.cst$kw$play_DASH_button,(function (){var this$ = this;
return cljs.core.deref(aikakonematka.util.game).add.button((window.innerWidth / (2)),(0.7 * window.innerHeight),"play-button",((function (this$){
return (function (){
(send_game_start_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_game_start_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_game_start_fn_BANG_.call(null));

aikakonematka.util.hide_congrats_message_BANG_();

return aikakonematka.util.destroy_game_intro_text_BANG_();
});})(this$))
,this$);
})());

cljs.core.cst$kw$play_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).anchor.x = 0.5;

return cljs.core.cst$kw$play_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)).anchor.y = 0.5;
});
aikakonematka.game.store_control_button_and_return_it_BANG_ = (function aikakonematka$game$store_control_button_and_return_it_BANG_(key_for_control_button,control_button){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$control_DASH_buttons,key_for_control_button], null),control_button);

control_button.scale.setTo((0),(0));

control_button.anchor.x = 0.5;

control_button.anchor.y = 0.5;

return control_button;
});
aikakonematka.game.create_puzzle_piece_and_store_BANG_ = (function aikakonematka$game$create_puzzle_piece_and_store_BANG_(p__40737){
var map__40738 = p__40737;
var map__40738__$1 = ((((!((map__40738 == null)))?((((map__40738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40738.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40738):map__40738);
var frame_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40738__$1,cljs.core.cst$kw$frame_DASH_id);
var x_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40738__$1,cljs.core.cst$kw$x_DASH_pos);
var y_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40738__$1,cljs.core.cst$kw$y_DASH_pos);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40738__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40738__$1,cljs.core.cst$kw$col);
var piece = cljs.core.deref(aikakonematka.util.game).add.sprite(x_pos,y_pos,"puzzle",frame_id);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aikakonematka.util.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprites,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)], null),piece);

piece.scale.setTo((0),(0));

piece.anchor.x = 0.5;

return piece.anchor.y = 0.5;
});
aikakonematka.game.display_puzzle_board_BANG_ = (function aikakonematka$game$display_puzzle_board_BANG_(p__40740){
var map__40741 = p__40740;
var map__40741__$1 = ((((!((map__40741 == null)))?((((map__40741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40741.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40741):map__40741);
var send_start_timer_fn_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40741__$1,cljs.core.cst$kw$send_DASH_start_DASH_timer_DASH_fn_BANG_);

aikakonematka.util.show_reset_button_BANG_();

aikakonematka.util.show_control_buttons_BANG_();

aikakonematka.util.hide_play_button_BANG_();

aikakonematka.util.hide_ranking_button_BANG_();

aikakonematka.util.synchronize_puzzle_board_when_playing_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)));

(send_start_timer_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_start_timer_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_start_timer_fn_BANG_.call(null));

return aikakonematka.util.show_play_time_text_BANG_();
});
aikakonematka.game.display_puzzle_background = (function aikakonematka$game$display_puzzle_background(){
cljs.core.deref(aikakonematka.util.game).stage.backgroundColor = "#fff";

return cljs.core.deref(aikakonematka.util.game).add.image((0),(0),"game-play-bg");
});
aikakonematka.game.display_lovely_baby_in_bg = (function aikakonematka$game$display_lovely_baby_in_bg(){
var baby_image = cljs.core.deref(aikakonematka.util.game).add.image((0.2 * window.innerWidth),(0.3 * window.innerHeight),"lovely-baby-in-puzzle");
return baby_image.scale.setTo(0.9,0.9);
});
aikakonematka.game.on_resize = (function aikakonematka$game$on_resize(){
aikakonematka.util.set_puzzle_width_height_in_relation_to_window_size_BANG_();

if(cljs.core.truth_(aikakonematka.util.currently_playing_game_QMARK_())){
aikakonematka.util.hide_control_buttons_BANG_();

aikakonematka.util.show_control_buttons_BANG_();
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$before_DASH_started,cljs.core.cst$kw$game_DASH_play_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)))){
} else {
aikakonematka.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)));
}

if(cljs.core.truth_(aikakonematka.util.currently_playing_game_QMARK_())){
} else {
aikakonematka.util.set_play_button_size_in_portrait_landscape_mode_BANG_();
}

aikakonematka.util.positioning_ui_elements_BANG_();

aikakonematka.util.set_button_size_in_portrait_landscape_mode_BANG_();

return aikakonematka.util.set_text_size_in_portrait_BANG_();
});
aikakonematka.game.create_game = (function aikakonematka$game$create_game(p__40743){
var map__40744 = p__40743;
var map__40744__$1 = ((((!((map__40744 == null)))?((((map__40744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40744):map__40744);
var send_game_start_fn_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40744__$1,cljs.core.cst$kw$send_DASH_game_DASH_start_DASH_fn_BANG_);
var send_reset_fn_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40744__$1,cljs.core.cst$kw$send_DASH_reset_DASH_fn_BANG_);
var send_sprites_state_fn_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40744__$1,cljs.core.cst$kw$send_DASH_sprites_DASH_state_DASH_fn_BANG_);
var send_puzzle_complete_fn_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40744__$1,cljs.core.cst$kw$send_DASH_puzzle_DASH_complete_DASH_fn_BANG_);
var send_music_note_fn_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40744__$1,cljs.core.cst$kw$send_DASH_music_DASH_note_DASH_fn_BANG_);
return ((function (map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_){
return (function (){
var G__40746_40767 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading_QMARK_,false], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40746_40767) : re_frame.core.dispatch.call(null,G__40746_40767));

aikakonematka.game.display_puzzle_background();

aikakonematka.game.display_lovely_baby_in_bg();

if(cljs.core.empty_QMARK_(cljs.core.cst$kw$sprites.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)))){
var game_object_factory_40768 = cljs.core.deref(aikakonematka.util.game).add;
var piece_width_height_40769 = aikakonematka.util.get_piece_width_height(cljs.core.cst$kw$puzzle_DASH_width_DASH_height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)));
var left_margin_40770 = aikakonematka.util.get_left_margin();
var top_margin_40771 = aikakonematka.util.get_top_margin();
var seq__40747_40772 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(aikakonematka.util.row_col_num));
var chunk__40754_40773 = null;
var count__40755_40774 = (0);
var i__40756_40775 = (0);
while(true){
if((i__40756_40775 < count__40755_40774)){
var row_40776 = chunk__40754_40773.cljs$core$IIndexed$_nth$arity$2(null,i__40756_40775);
var seq__40757_40777 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(aikakonematka.util.row_col_num));
var chunk__40759_40778 = null;
var count__40760_40779 = (0);
var i__40761_40780 = (0);
while(true){
if((i__40761_40780 < count__40760_40779)){
var col_40781 = chunk__40759_40778.cljs$core$IIndexed$_nth$arity$2(null,i__40761_40780);
var frame_id_40782 = ((aikakonematka.util.row_col_num * row_40776) + col_40781);
var x_pos_40783 = (((piece_width_height_40769 * col_40781) + left_margin_40770) + ((2) + col_40781));
var y_pos_40784 = (((piece_width_height_40769 * row_40776) + top_margin_40771) + ((2) + row_40776));
aikakonematka.game.create_puzzle_piece_and_store_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$frame_DASH_id,frame_id_40782,cljs.core.cst$kw$x_DASH_pos,x_pos_40783,cljs.core.cst$kw$y_DASH_pos,y_pos_40784,cljs.core.cst$kw$row,row_40776,cljs.core.cst$kw$col,col_40781], null));

if(((col_40781 === (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_40776,(aikakonematka.util.row_col_num - (1))))){
var bottom_left_button_40785 = aikakonematka.game.store_control_button_and_return_it_BANG_(cljs.core.cst$kw$bottom_DASH_left,game_object_factory_40768.sprite((x_pos_40783 - piece_width_height_40769),(y_pos_40784 + piece_width_height_40769),"flip-buttons",(5)));
var frequency_40786 = (aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1(aikakonematka.util.row_col_num) : aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.call(null,aikakonematka.util.row_col_num));
aikakonematka.util.set_on_click_callback_BANG_(bottom_left_button_40785,((function (seq__40757_40777,chunk__40759_40778,count__40760_40779,i__40761_40780,seq__40747_40772,chunk__40754_40773,count__40755_40774,i__40756_40775,bottom_left_button_40785,frequency_40786,frame_id_40782,x_pos_40783,y_pos_40784,col_40781,row_40776,game_object_factory_40768,piece_width_height_40769,left_margin_40770,top_margin_40771,map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_){
return (function (){
if(cljs.core.truth_(aikakonematka.util.currently_playing_game_QMARK_())){
aikakonematka.sound.play_beep_BANG_(frequency_40786);

(send_music_note_fn_BANG_.cljs$core$IFn$_invoke$arity$1 ? send_music_note_fn_BANG_.cljs$core$IFn$_invoke$arity$1(frequency_40786) : send_music_note_fn_BANG_.call(null,frequency_40786));

aikakonematka.game.flip_diagonal_pieces_BANG_();

aikakonematka.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)));

(send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_sprites_state_fn_BANG_.call(null));

return aikakonematka.util.congrats_finish_game_BANG_(send_puzzle_complete_fn_BANG_);
} else {
return null;
}
});})(seq__40757_40777,chunk__40759_40778,count__40760_40779,i__40761_40780,seq__40747_40772,chunk__40754_40773,count__40755_40774,i__40756_40775,bottom_left_button_40785,frequency_40786,frame_id_40782,x_pos_40783,y_pos_40784,col_40781,row_40776,game_object_factory_40768,piece_width_height_40769,left_margin_40770,top_margin_40771,map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_))
);
} else {
}

if((col_40781 === (0))){
var left_button_40787 = aikakonematka.game.store_control_button_and_return_it_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left,row_40776], null),game_object_factory_40768.sprite((x_pos_40783 - piece_width_height_40769),y_pos_40784,"flip-buttons",row_40776));
var frequency_40788 = (aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1(row_40776) : aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.call(null,row_40776));
aikakonematka.util.set_on_click_callback_BANG_(left_button_40787,((function (seq__40757_40777,chunk__40759_40778,count__40760_40779,i__40761_40780,seq__40747_40772,chunk__40754_40773,count__40755_40774,i__40756_40775,left_button_40787,frequency_40788,frame_id_40782,x_pos_40783,y_pos_40784,col_40781,row_40776,game_object_factory_40768,piece_width_height_40769,left_margin_40770,top_margin_40771,map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_){
return (function (){
if(cljs.core.truth_(aikakonematka.util.currently_playing_game_QMARK_())){
aikakonematka.sound.play_beep_BANG_(frequency_40788);

(send_music_note_fn_BANG_.cljs$core$IFn$_invoke$arity$1 ? send_music_note_fn_BANG_.cljs$core$IFn$_invoke$arity$1(frequency_40788) : send_music_note_fn_BANG_.call(null,frequency_40788));

aikakonematka.game.flip_row_BANG_(row_40776);

aikakonematka.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)));

(send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_sprites_state_fn_BANG_.call(null));

return aikakonematka.util.congrats_finish_game_BANG_(send_puzzle_complete_fn_BANG_);
} else {
return null;
}
});})(seq__40757_40777,chunk__40759_40778,count__40760_40779,i__40761_40780,seq__40747_40772,chunk__40754_40773,count__40755_40774,i__40756_40775,left_button_40787,frequency_40788,frame_id_40782,x_pos_40783,y_pos_40784,col_40781,row_40776,game_object_factory_40768,piece_width_height_40769,left_margin_40770,top_margin_40771,map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_))
);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_40776,(aikakonematka.util.row_col_num - (1)))){
var bottom_button_40789 = aikakonematka.game.store_control_button_and_return_it_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bottom,col_40781], null),game_object_factory_40768.sprite(x_pos_40783,(y_pos_40784 + piece_width_height_40769),"flip-buttons",col_40781));
var frequency_40790 = (function (){var G__40763 = cljs.core.mod((((1) + aikakonematka.util.row_col_num) + col_40781),cljs.core.count(aikakonematka.sound.frequencies_of_major_scale_in_4th_octave));
return (aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1(G__40763) : aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.call(null,G__40763));
})();
aikakonematka.util.set_on_click_callback_BANG_(bottom_button_40789,((function (seq__40757_40777,chunk__40759_40778,count__40760_40779,i__40761_40780,seq__40747_40772,chunk__40754_40773,count__40755_40774,i__40756_40775,bottom_button_40789,frequency_40790,frame_id_40782,x_pos_40783,y_pos_40784,col_40781,row_40776,game_object_factory_40768,piece_width_height_40769,left_margin_40770,top_margin_40771,map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_){
return (function (){
if(cljs.core.truth_(aikakonematka.util.currently_playing_game_QMARK_())){
aikakonematka.sound.play_beep_BANG_(frequency_40790);

(send_music_note_fn_BANG_.cljs$core$IFn$_invoke$arity$1 ? send_music_note_fn_BANG_.cljs$core$IFn$_invoke$arity$1(frequency_40790) : send_music_note_fn_BANG_.call(null,frequency_40790));

aikakonematka.game.flip_col_BANG_(col_40781);

aikakonematka.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)));

(send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_sprites_state_fn_BANG_.call(null));

return aikakonematka.util.congrats_finish_game_BANG_(send_puzzle_complete_fn_BANG_);
} else {
return null;
}
});})(seq__40757_40777,chunk__40759_40778,count__40760_40779,i__40761_40780,seq__40747_40772,chunk__40754_40773,count__40755_40774,i__40756_40775,bottom_button_40789,frequency_40790,frame_id_40782,x_pos_40783,y_pos_40784,col_40781,row_40776,game_object_factory_40768,piece_width_height_40769,left_margin_40770,top_margin_40771,map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_))
);
} else {
}

var G__40791 = seq__40757_40777;
var G__40792 = chunk__40759_40778;
var G__40793 = count__40760_40779;
var G__40794 = (i__40761_40780 + (1));
seq__40757_40777 = G__40791;
chunk__40759_40778 = G__40792;
count__40760_40779 = G__40793;
i__40761_40780 = G__40794;
continue;
} else {
var temp__5457__auto___40795 = cljs.core.seq(seq__40757_40777);
if(temp__5457__auto___40795){
var seq__40757_40796__$1 = temp__5457__auto___40795;
if(cljs.core.chunked_seq_QMARK_(seq__40757_40796__$1)){
var c__9739__auto___40797 = cljs.core.chunk_first(seq__40757_40796__$1);
var G__40798 = cljs.core.chunk_rest(seq__40757_40796__$1);
var G__40799 = c__9739__auto___40797;
var G__40800 = cljs.core.count(c__9739__auto___40797);
var G__40801 = (0);
seq__40757_40777 = G__40798;
chunk__40759_40778 = G__40799;
count__40760_40779 = G__40800;
i__40761_40780 = G__40801;
continue;
} else {
var col_40802 = cljs.core.first(seq__40757_40796__$1);
var frame_id_40803 = ((aikakonematka.util.row_col_num * row_40776) + col_40802);
var x_pos_40804 = (((piece_width_height_40769 * col_40802) + left_margin_40770) + ((2) + col_40802));
var y_pos_40805 = (((piece_width_height_40769 * row_40776) + top_margin_40771) + ((2) + row_40776));
aikakonematka.game.create_puzzle_piece_and_store_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$frame_DASH_id,frame_id_40803,cljs.core.cst$kw$x_DASH_pos,x_pos_40804,cljs.core.cst$kw$y_DASH_pos,y_pos_40805,cljs.core.cst$kw$row,row_40776,cljs.core.cst$kw$col,col_40802], null));

if(((col_40802 === (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_40776,(aikakonematka.util.row_col_num - (1))))){
var bottom_left_button_40806 = aikakonematka.game.store_control_button_and_return_it_BANG_(cljs.core.cst$kw$bottom_DASH_left,game_object_factory_40768.sprite((x_pos_40804 - piece_width_height_40769),(y_pos_40805 + piece_width_height_40769),"flip-buttons",(5)));
var frequency_40807 = (aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1(aikakonematka.util.row_col_num) : aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.call(null,aikakonematka.util.row_col_num));
aikakonematka.util.set_on_click_callback_BANG_(bottom_left_button_40806,((function (seq__40757_40777,chunk__40759_40778,count__40760_40779,i__40761_40780,seq__40747_40772,chunk__40754_40773,count__40755_40774,i__40756_40775,bottom_left_button_40806,frequency_40807,frame_id_40803,x_pos_40804,y_pos_40805,col_40802,seq__40757_40796__$1,temp__5457__auto___40795,row_40776,game_object_factory_40768,piece_width_height_40769,left_margin_40770,top_margin_40771,map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_){
return (function (){
if(cljs.core.truth_(aikakonematka.util.currently_playing_game_QMARK_())){
aikakonematka.sound.play_beep_BANG_(frequency_40807);

(send_music_note_fn_BANG_.cljs$core$IFn$_invoke$arity$1 ? send_music_note_fn_BANG_.cljs$core$IFn$_invoke$arity$1(frequency_40807) : send_music_note_fn_BANG_.call(null,frequency_40807));

aikakonematka.game.flip_diagonal_pieces_BANG_();

aikakonematka.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)));

(send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_sprites_state_fn_BANG_.call(null));

return aikakonematka.util.congrats_finish_game_BANG_(send_puzzle_complete_fn_BANG_);
} else {
return null;
}
});})(seq__40757_40777,chunk__40759_40778,count__40760_40779,i__40761_40780,seq__40747_40772,chunk__40754_40773,count__40755_40774,i__40756_40775,bottom_left_button_40806,frequency_40807,frame_id_40803,x_pos_40804,y_pos_40805,col_40802,seq__40757_40796__$1,temp__5457__auto___40795,row_40776,game_object_factory_40768,piece_width_height_40769,left_margin_40770,top_margin_40771,map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_))
);
} else {
}

if((col_40802 === (0))){
var left_button_40808 = aikakonematka.game.store_control_button_and_return_it_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left,row_40776], null),game_object_factory_40768.sprite((x_pos_40804 - piece_width_height_40769),y_pos_40805,"flip-buttons",row_40776));
var frequency_40809 = (aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1(row_40776) : aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.call(null,row_40776));
aikakonematka.util.set_on_click_callback_BANG_(left_button_40808,((function (seq__40757_40777,chunk__40759_40778,count__40760_40779,i__40761_40780,seq__40747_40772,chunk__40754_40773,count__40755_40774,i__40756_40775,left_button_40808,frequency_40809,frame_id_40803,x_pos_40804,y_pos_40805,col_40802,seq__40757_40796__$1,temp__5457__auto___40795,row_40776,game_object_factory_40768,piece_width_height_40769,left_margin_40770,top_margin_40771,map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_){
return (function (){
if(cljs.core.truth_(aikakonematka.util.currently_playing_game_QMARK_())){
aikakonematka.sound.play_beep_BANG_(frequency_40809);

(send_music_note_fn_BANG_.cljs$core$IFn$_invoke$arity$1 ? send_music_note_fn_BANG_.cljs$core$IFn$_invoke$arity$1(frequency_40809) : send_music_note_fn_BANG_.call(null,frequency_40809));

aikakonematka.game.flip_row_BANG_(row_40776);

aikakonematka.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)));

(send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_sprites_state_fn_BANG_.call(null));

return aikakonematka.util.congrats_finish_game_BANG_(send_puzzle_complete_fn_BANG_);
} else {
return null;
}
});})(seq__40757_40777,chunk__40759_40778,count__40760_40779,i__40761_40780,seq__40747_40772,chunk__40754_40773,count__40755_40774,i__40756_40775,left_button_40808,frequency_40809,frame_id_40803,x_pos_40804,y_pos_40805,col_40802,seq__40757_40796__$1,temp__5457__auto___40795,row_40776,game_object_factory_40768,piece_width_height_40769,left_margin_40770,top_margin_40771,map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_))
);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_40776,(aikakonematka.util.row_col_num - (1)))){
var bottom_button_40810 = aikakonematka.game.store_control_button_and_return_it_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bottom,col_40802], null),game_object_factory_40768.sprite(x_pos_40804,(y_pos_40805 + piece_width_height_40769),"flip-buttons",col_40802));
var frequency_40811 = (function (){var G__40764 = cljs.core.mod((((1) + aikakonematka.util.row_col_num) + col_40802),cljs.core.count(aikakonematka.sound.frequencies_of_major_scale_in_4th_octave));
return (aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1(G__40764) : aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.call(null,G__40764));
})();
aikakonematka.util.set_on_click_callback_BANG_(bottom_button_40810,((function (seq__40757_40777,chunk__40759_40778,count__40760_40779,i__40761_40780,seq__40747_40772,chunk__40754_40773,count__40755_40774,i__40756_40775,bottom_button_40810,frequency_40811,frame_id_40803,x_pos_40804,y_pos_40805,col_40802,seq__40757_40796__$1,temp__5457__auto___40795,row_40776,game_object_factory_40768,piece_width_height_40769,left_margin_40770,top_margin_40771,map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_){
return (function (){
if(cljs.core.truth_(aikakonematka.util.currently_playing_game_QMARK_())){
aikakonematka.sound.play_beep_BANG_(frequency_40811);

(send_music_note_fn_BANG_.cljs$core$IFn$_invoke$arity$1 ? send_music_note_fn_BANG_.cljs$core$IFn$_invoke$arity$1(frequency_40811) : send_music_note_fn_BANG_.call(null,frequency_40811));

aikakonematka.game.flip_col_BANG_(col_40802);

aikakonematka.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)));

(send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_sprites_state_fn_BANG_.call(null));

return aikakonematka.util.congrats_finish_game_BANG_(send_puzzle_complete_fn_BANG_);
} else {
return null;
}
});})(seq__40757_40777,chunk__40759_40778,count__40760_40779,i__40761_40780,seq__40747_40772,chunk__40754_40773,count__40755_40774,i__40756_40775,bottom_button_40810,frequency_40811,frame_id_40803,x_pos_40804,y_pos_40805,col_40802,seq__40757_40796__$1,temp__5457__auto___40795,row_40776,game_object_factory_40768,piece_width_height_40769,left_margin_40770,top_margin_40771,map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_))
);
} else {
}

var G__40812 = cljs.core.next(seq__40757_40796__$1);
var G__40813 = null;
var G__40814 = (0);
var G__40815 = (0);
seq__40757_40777 = G__40812;
chunk__40759_40778 = G__40813;
count__40760_40779 = G__40814;
i__40761_40780 = G__40815;
continue;
}
} else {
}
}
break;
}

var G__40816 = seq__40747_40772;
var G__40817 = chunk__40754_40773;
var G__40818 = count__40755_40774;
var G__40819 = (i__40756_40775 + (1));
seq__40747_40772 = G__40816;
chunk__40754_40773 = G__40817;
count__40755_40774 = G__40818;
i__40756_40775 = G__40819;
continue;
} else {
var temp__5457__auto___40820 = cljs.core.seq(seq__40747_40772);
if(temp__5457__auto___40820){
var seq__40747_40821__$1 = temp__5457__auto___40820;
if(cljs.core.chunked_seq_QMARK_(seq__40747_40821__$1)){
var c__9739__auto___40822 = cljs.core.chunk_first(seq__40747_40821__$1);
var G__40823 = cljs.core.chunk_rest(seq__40747_40821__$1);
var G__40824 = c__9739__auto___40822;
var G__40825 = cljs.core.count(c__9739__auto___40822);
var G__40826 = (0);
seq__40747_40772 = G__40823;
chunk__40754_40773 = G__40824;
count__40755_40774 = G__40825;
i__40756_40775 = G__40826;
continue;
} else {
var row_40827 = cljs.core.first(seq__40747_40821__$1);
var seq__40748_40828 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(aikakonematka.util.row_col_num));
var chunk__40750_40829 = null;
var count__40751_40830 = (0);
var i__40752_40831 = (0);
while(true){
if((i__40752_40831 < count__40751_40830)){
var col_40832 = chunk__40750_40829.cljs$core$IIndexed$_nth$arity$2(null,i__40752_40831);
var frame_id_40833 = ((aikakonematka.util.row_col_num * row_40827) + col_40832);
var x_pos_40834 = (((piece_width_height_40769 * col_40832) + left_margin_40770) + ((2) + col_40832));
var y_pos_40835 = (((piece_width_height_40769 * row_40827) + top_margin_40771) + ((2) + row_40827));
aikakonematka.game.create_puzzle_piece_and_store_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$frame_DASH_id,frame_id_40833,cljs.core.cst$kw$x_DASH_pos,x_pos_40834,cljs.core.cst$kw$y_DASH_pos,y_pos_40835,cljs.core.cst$kw$row,row_40827,cljs.core.cst$kw$col,col_40832], null));

if(((col_40832 === (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_40827,(aikakonematka.util.row_col_num - (1))))){
var bottom_left_button_40836 = aikakonematka.game.store_control_button_and_return_it_BANG_(cljs.core.cst$kw$bottom_DASH_left,game_object_factory_40768.sprite((x_pos_40834 - piece_width_height_40769),(y_pos_40835 + piece_width_height_40769),"flip-buttons",(5)));
var frequency_40837 = (aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1(aikakonematka.util.row_col_num) : aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.call(null,aikakonematka.util.row_col_num));
aikakonematka.util.set_on_click_callback_BANG_(bottom_left_button_40836,((function (seq__40748_40828,chunk__40750_40829,count__40751_40830,i__40752_40831,seq__40747_40772,chunk__40754_40773,count__40755_40774,i__40756_40775,bottom_left_button_40836,frequency_40837,frame_id_40833,x_pos_40834,y_pos_40835,col_40832,row_40827,seq__40747_40821__$1,temp__5457__auto___40820,game_object_factory_40768,piece_width_height_40769,left_margin_40770,top_margin_40771,map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_){
return (function (){
if(cljs.core.truth_(aikakonematka.util.currently_playing_game_QMARK_())){
aikakonematka.sound.play_beep_BANG_(frequency_40837);

(send_music_note_fn_BANG_.cljs$core$IFn$_invoke$arity$1 ? send_music_note_fn_BANG_.cljs$core$IFn$_invoke$arity$1(frequency_40837) : send_music_note_fn_BANG_.call(null,frequency_40837));

aikakonematka.game.flip_diagonal_pieces_BANG_();

aikakonematka.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)));

(send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_sprites_state_fn_BANG_.call(null));

return aikakonematka.util.congrats_finish_game_BANG_(send_puzzle_complete_fn_BANG_);
} else {
return null;
}
});})(seq__40748_40828,chunk__40750_40829,count__40751_40830,i__40752_40831,seq__40747_40772,chunk__40754_40773,count__40755_40774,i__40756_40775,bottom_left_button_40836,frequency_40837,frame_id_40833,x_pos_40834,y_pos_40835,col_40832,row_40827,seq__40747_40821__$1,temp__5457__auto___40820,game_object_factory_40768,piece_width_height_40769,left_margin_40770,top_margin_40771,map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_))
);
} else {
}

if((col_40832 === (0))){
var left_button_40838 = aikakonematka.game.store_control_button_and_return_it_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left,row_40827], null),game_object_factory_40768.sprite((x_pos_40834 - piece_width_height_40769),y_pos_40835,"flip-buttons",row_40827));
var frequency_40839 = (aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1(row_40827) : aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.call(null,row_40827));
aikakonematka.util.set_on_click_callback_BANG_(left_button_40838,((function (seq__40748_40828,chunk__40750_40829,count__40751_40830,i__40752_40831,seq__40747_40772,chunk__40754_40773,count__40755_40774,i__40756_40775,left_button_40838,frequency_40839,frame_id_40833,x_pos_40834,y_pos_40835,col_40832,row_40827,seq__40747_40821__$1,temp__5457__auto___40820,game_object_factory_40768,piece_width_height_40769,left_margin_40770,top_margin_40771,map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_){
return (function (){
if(cljs.core.truth_(aikakonematka.util.currently_playing_game_QMARK_())){
aikakonematka.sound.play_beep_BANG_(frequency_40839);

(send_music_note_fn_BANG_.cljs$core$IFn$_invoke$arity$1 ? send_music_note_fn_BANG_.cljs$core$IFn$_invoke$arity$1(frequency_40839) : send_music_note_fn_BANG_.call(null,frequency_40839));

aikakonematka.game.flip_row_BANG_(row_40827);

aikakonematka.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)));

(send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_sprites_state_fn_BANG_.call(null));

return aikakonematka.util.congrats_finish_game_BANG_(send_puzzle_complete_fn_BANG_);
} else {
return null;
}
});})(seq__40748_40828,chunk__40750_40829,count__40751_40830,i__40752_40831,seq__40747_40772,chunk__40754_40773,count__40755_40774,i__40756_40775,left_button_40838,frequency_40839,frame_id_40833,x_pos_40834,y_pos_40835,col_40832,row_40827,seq__40747_40821__$1,temp__5457__auto___40820,game_object_factory_40768,piece_width_height_40769,left_margin_40770,top_margin_40771,map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_))
);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_40827,(aikakonematka.util.row_col_num - (1)))){
var bottom_button_40840 = aikakonematka.game.store_control_button_and_return_it_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bottom,col_40832], null),game_object_factory_40768.sprite(x_pos_40834,(y_pos_40835 + piece_width_height_40769),"flip-buttons",col_40832));
var frequency_40841 = (function (){var G__40765 = cljs.core.mod((((1) + aikakonematka.util.row_col_num) + col_40832),cljs.core.count(aikakonematka.sound.frequencies_of_major_scale_in_4th_octave));
return (aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1(G__40765) : aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.call(null,G__40765));
})();
aikakonematka.util.set_on_click_callback_BANG_(bottom_button_40840,((function (seq__40748_40828,chunk__40750_40829,count__40751_40830,i__40752_40831,seq__40747_40772,chunk__40754_40773,count__40755_40774,i__40756_40775,bottom_button_40840,frequency_40841,frame_id_40833,x_pos_40834,y_pos_40835,col_40832,row_40827,seq__40747_40821__$1,temp__5457__auto___40820,game_object_factory_40768,piece_width_height_40769,left_margin_40770,top_margin_40771,map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_){
return (function (){
if(cljs.core.truth_(aikakonematka.util.currently_playing_game_QMARK_())){
aikakonematka.sound.play_beep_BANG_(frequency_40841);

(send_music_note_fn_BANG_.cljs$core$IFn$_invoke$arity$1 ? send_music_note_fn_BANG_.cljs$core$IFn$_invoke$arity$1(frequency_40841) : send_music_note_fn_BANG_.call(null,frequency_40841));

aikakonematka.game.flip_col_BANG_(col_40832);

aikakonematka.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)));

(send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_sprites_state_fn_BANG_.call(null));

return aikakonematka.util.congrats_finish_game_BANG_(send_puzzle_complete_fn_BANG_);
} else {
return null;
}
});})(seq__40748_40828,chunk__40750_40829,count__40751_40830,i__40752_40831,seq__40747_40772,chunk__40754_40773,count__40755_40774,i__40756_40775,bottom_button_40840,frequency_40841,frame_id_40833,x_pos_40834,y_pos_40835,col_40832,row_40827,seq__40747_40821__$1,temp__5457__auto___40820,game_object_factory_40768,piece_width_height_40769,left_margin_40770,top_margin_40771,map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_))
);
} else {
}

var G__40842 = seq__40748_40828;
var G__40843 = chunk__40750_40829;
var G__40844 = count__40751_40830;
var G__40845 = (i__40752_40831 + (1));
seq__40748_40828 = G__40842;
chunk__40750_40829 = G__40843;
count__40751_40830 = G__40844;
i__40752_40831 = G__40845;
continue;
} else {
var temp__5457__auto___40846__$1 = cljs.core.seq(seq__40748_40828);
if(temp__5457__auto___40846__$1){
var seq__40748_40847__$1 = temp__5457__auto___40846__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40748_40847__$1)){
var c__9739__auto___40848 = cljs.core.chunk_first(seq__40748_40847__$1);
var G__40849 = cljs.core.chunk_rest(seq__40748_40847__$1);
var G__40850 = c__9739__auto___40848;
var G__40851 = cljs.core.count(c__9739__auto___40848);
var G__40852 = (0);
seq__40748_40828 = G__40849;
chunk__40750_40829 = G__40850;
count__40751_40830 = G__40851;
i__40752_40831 = G__40852;
continue;
} else {
var col_40853 = cljs.core.first(seq__40748_40847__$1);
var frame_id_40854 = ((aikakonematka.util.row_col_num * row_40827) + col_40853);
var x_pos_40855 = (((piece_width_height_40769 * col_40853) + left_margin_40770) + ((2) + col_40853));
var y_pos_40856 = (((piece_width_height_40769 * row_40827) + top_margin_40771) + ((2) + row_40827));
aikakonematka.game.create_puzzle_piece_and_store_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$frame_DASH_id,frame_id_40854,cljs.core.cst$kw$x_DASH_pos,x_pos_40855,cljs.core.cst$kw$y_DASH_pos,y_pos_40856,cljs.core.cst$kw$row,row_40827,cljs.core.cst$kw$col,col_40853], null));

if(((col_40853 === (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_40827,(aikakonematka.util.row_col_num - (1))))){
var bottom_left_button_40857 = aikakonematka.game.store_control_button_and_return_it_BANG_(cljs.core.cst$kw$bottom_DASH_left,game_object_factory_40768.sprite((x_pos_40855 - piece_width_height_40769),(y_pos_40856 + piece_width_height_40769),"flip-buttons",(5)));
var frequency_40858 = (aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1(aikakonematka.util.row_col_num) : aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.call(null,aikakonematka.util.row_col_num));
aikakonematka.util.set_on_click_callback_BANG_(bottom_left_button_40857,((function (seq__40748_40828,chunk__40750_40829,count__40751_40830,i__40752_40831,seq__40747_40772,chunk__40754_40773,count__40755_40774,i__40756_40775,bottom_left_button_40857,frequency_40858,frame_id_40854,x_pos_40855,y_pos_40856,col_40853,seq__40748_40847__$1,temp__5457__auto___40846__$1,row_40827,seq__40747_40821__$1,temp__5457__auto___40820,game_object_factory_40768,piece_width_height_40769,left_margin_40770,top_margin_40771,map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_){
return (function (){
if(cljs.core.truth_(aikakonematka.util.currently_playing_game_QMARK_())){
aikakonematka.sound.play_beep_BANG_(frequency_40858);

(send_music_note_fn_BANG_.cljs$core$IFn$_invoke$arity$1 ? send_music_note_fn_BANG_.cljs$core$IFn$_invoke$arity$1(frequency_40858) : send_music_note_fn_BANG_.call(null,frequency_40858));

aikakonematka.game.flip_diagonal_pieces_BANG_();

aikakonematka.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)));

(send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_sprites_state_fn_BANG_.call(null));

return aikakonematka.util.congrats_finish_game_BANG_(send_puzzle_complete_fn_BANG_);
} else {
return null;
}
});})(seq__40748_40828,chunk__40750_40829,count__40751_40830,i__40752_40831,seq__40747_40772,chunk__40754_40773,count__40755_40774,i__40756_40775,bottom_left_button_40857,frequency_40858,frame_id_40854,x_pos_40855,y_pos_40856,col_40853,seq__40748_40847__$1,temp__5457__auto___40846__$1,row_40827,seq__40747_40821__$1,temp__5457__auto___40820,game_object_factory_40768,piece_width_height_40769,left_margin_40770,top_margin_40771,map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_))
);
} else {
}

if((col_40853 === (0))){
var left_button_40859 = aikakonematka.game.store_control_button_and_return_it_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left,row_40827], null),game_object_factory_40768.sprite((x_pos_40855 - piece_width_height_40769),y_pos_40856,"flip-buttons",row_40827));
var frequency_40860 = (aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1(row_40827) : aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.call(null,row_40827));
aikakonematka.util.set_on_click_callback_BANG_(left_button_40859,((function (seq__40748_40828,chunk__40750_40829,count__40751_40830,i__40752_40831,seq__40747_40772,chunk__40754_40773,count__40755_40774,i__40756_40775,left_button_40859,frequency_40860,frame_id_40854,x_pos_40855,y_pos_40856,col_40853,seq__40748_40847__$1,temp__5457__auto___40846__$1,row_40827,seq__40747_40821__$1,temp__5457__auto___40820,game_object_factory_40768,piece_width_height_40769,left_margin_40770,top_margin_40771,map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_){
return (function (){
if(cljs.core.truth_(aikakonematka.util.currently_playing_game_QMARK_())){
aikakonematka.sound.play_beep_BANG_(frequency_40860);

(send_music_note_fn_BANG_.cljs$core$IFn$_invoke$arity$1 ? send_music_note_fn_BANG_.cljs$core$IFn$_invoke$arity$1(frequency_40860) : send_music_note_fn_BANG_.call(null,frequency_40860));

aikakonematka.game.flip_row_BANG_(row_40827);

aikakonematka.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)));

(send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_sprites_state_fn_BANG_.call(null));

return aikakonematka.util.congrats_finish_game_BANG_(send_puzzle_complete_fn_BANG_);
} else {
return null;
}
});})(seq__40748_40828,chunk__40750_40829,count__40751_40830,i__40752_40831,seq__40747_40772,chunk__40754_40773,count__40755_40774,i__40756_40775,left_button_40859,frequency_40860,frame_id_40854,x_pos_40855,y_pos_40856,col_40853,seq__40748_40847__$1,temp__5457__auto___40846__$1,row_40827,seq__40747_40821__$1,temp__5457__auto___40820,game_object_factory_40768,piece_width_height_40769,left_margin_40770,top_margin_40771,map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_))
);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_40827,(aikakonematka.util.row_col_num - (1)))){
var bottom_button_40861 = aikakonematka.game.store_control_button_and_return_it_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bottom,col_40853], null),game_object_factory_40768.sprite(x_pos_40855,(y_pos_40856 + piece_width_height_40769),"flip-buttons",col_40853));
var frequency_40862 = (function (){var G__40766 = cljs.core.mod((((1) + aikakonematka.util.row_col_num) + col_40853),cljs.core.count(aikakonematka.sound.frequencies_of_major_scale_in_4th_octave));
return (aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1(G__40766) : aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.call(null,G__40766));
})();
aikakonematka.util.set_on_click_callback_BANG_(bottom_button_40861,((function (seq__40748_40828,chunk__40750_40829,count__40751_40830,i__40752_40831,seq__40747_40772,chunk__40754_40773,count__40755_40774,i__40756_40775,bottom_button_40861,frequency_40862,frame_id_40854,x_pos_40855,y_pos_40856,col_40853,seq__40748_40847__$1,temp__5457__auto___40846__$1,row_40827,seq__40747_40821__$1,temp__5457__auto___40820,game_object_factory_40768,piece_width_height_40769,left_margin_40770,top_margin_40771,map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_){
return (function (){
if(cljs.core.truth_(aikakonematka.util.currently_playing_game_QMARK_())){
aikakonematka.sound.play_beep_BANG_(frequency_40862);

(send_music_note_fn_BANG_.cljs$core$IFn$_invoke$arity$1 ? send_music_note_fn_BANG_.cljs$core$IFn$_invoke$arity$1(frequency_40862) : send_music_note_fn_BANG_.call(null,frequency_40862));

aikakonematka.game.flip_col_BANG_(col_40853);

aikakonematka.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)));

(send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_sprites_state_fn_BANG_.call(null));

return aikakonematka.util.congrats_finish_game_BANG_(send_puzzle_complete_fn_BANG_);
} else {
return null;
}
});})(seq__40748_40828,chunk__40750_40829,count__40751_40830,i__40752_40831,seq__40747_40772,chunk__40754_40773,count__40755_40774,i__40756_40775,bottom_button_40861,frequency_40862,frame_id_40854,x_pos_40855,y_pos_40856,col_40853,seq__40748_40847__$1,temp__5457__auto___40846__$1,row_40827,seq__40747_40821__$1,temp__5457__auto___40820,game_object_factory_40768,piece_width_height_40769,left_margin_40770,top_margin_40771,map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_))
);
} else {
}

var G__40863 = cljs.core.next(seq__40748_40847__$1);
var G__40864 = null;
var G__40865 = (0);
var G__40866 = (0);
seq__40748_40828 = G__40863;
chunk__40750_40829 = G__40864;
count__40751_40830 = G__40865;
i__40752_40831 = G__40866;
continue;
}
} else {
}
}
break;
}

var G__40867 = cljs.core.next(seq__40747_40821__$1);
var G__40868 = null;
var G__40869 = (0);
var G__40870 = (0);
seq__40747_40772 = G__40867;
chunk__40754_40773 = G__40868;
count__40755_40774 = G__40869;
i__40756_40775 = G__40870;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$play_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)))){
} else {
aikakonematka.util.display_game_intro_message_BANG_();

aikakonematka.game.make_play_button_BANG_(send_game_start_fn_BANG_);

aikakonematka.util.make_ranking_button_BANG_();

aikakonematka.util.make_puzzle_selection_button_BANG_();

aikakonematka.util.make_play_time_BANG_();

aikakonematka.util.hide_play_time_text_BANG_();

aikakonematka.util.make_reset_button_BANG_(send_reset_fn_BANG_);

aikakonematka.util.make_audio_button_BANG_();

aikakonematka.util.make_congrats_message_BANG_();

aikakonematka.util.hide_congrats_message_BANG_();
}

return aikakonematka.game.on_resize();
});
;})(map__40744,map__40744__$1,send_game_start_fn_BANG_,send_reset_fn_BANG_,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_,send_music_note_fn_BANG_))
});
aikakonematka.game.game_update = (function aikakonematka$game$game_update(){
return null;
});
aikakonematka.game.start_game_BANG_ = (function aikakonematka$game$start_game_BANG_(image_src,websocket_msg_send_fns){
var G__40871_40872 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading_QMARK_,true], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40871_40872) : re_frame.core.dispatch.call(null,G__40871_40872));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(aikakonematka.util.game_state,cljs.core.merge,aikakonematka.util.initial_game_state);

var puzzle_img = (new Image());
puzzle_img.onload = cljs.core.clj__GT_js(((function (puzzle_img){
return (function (){
cljs.core.reset_BANG_(aikakonematka.util.puzzle_image_width,puzzle_img.width);

cljs.core.reset_BANG_(aikakonematka.util.puzzle_image_height,puzzle_img.height);

return cljs.core.reset_BANG_(aikakonematka.util.game,(new Phaser.Game(window.innerWidth,window.innerHeight,Phaser.Canvas,"canvas",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$preload,aikakonematka.game.create_preload(image_src),cljs.core.cst$kw$create,aikakonematka.game.create_game(websocket_msg_send_fns),cljs.core.cst$kw$update,aikakonematka.game.game_update,cljs.core.cst$kw$resize,aikakonematka.game.on_resize], null)))));
});})(puzzle_img))
);

aikakonematka.util.set_puzzle_width_height_in_relation_to_window_size_BANG_();

return puzzle_img.src = image_src;
});
