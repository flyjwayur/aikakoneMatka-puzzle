// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('aikakonematka.sound');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_bach.synthesis');
goog.require('leipzig.melody');
goog.require('aikakonematka.util');
if(typeof aikakonematka.sound.context !== 'undefined'){
} else {
aikakonematka.sound.context = cljs_bach.synthesis.audio_context();
}
aikakonematka.sound.frequencies_of_major_scale_in_4th_octave = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [261.63,293.66,329.63,349.23,392.0,(440),493.88,523.25], null);
aikakonematka.sound.C5 = ((2) * (aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1((0)) : aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.call(null,(0))));
aikakonematka.sound.D5 = ((2) * (aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1((1)) : aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.call(null,(1))));
aikakonematka.sound.E5 = ((2) * (aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1((2)) : aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.call(null,(2))));
aikakonematka.sound.F5 = ((2) * (aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1((3)) : aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.call(null,(3))));
aikakonematka.sound.G5 = ((2) * (aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1((4)) : aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.call(null,(4))));
aikakonematka.sound.C6 = ((4) * (aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.cljs$core$IFn$_invoke$arity$1((0)) : aikakonematka.sound.frequencies_of_major_scale_in_4th_octave.call(null,(0))));
aikakonematka.sound.play_beep_BANG_ = (function aikakonematka$sound$play_beep_BANG_(sq_freq){
if(cljs.core.truth_(cljs.core.cst$kw$audio_DASH_on_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)))){
return cljs_bach.synthesis.run_with(cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs_bach.synthesis.square.cljs$core$IFn$_invoke$arity$1 ? cljs_bach.synthesis.square.cljs$core$IFn$_invoke$arity$1(sq_freq) : cljs_bach.synthesis.square.call(null,sq_freq)),(cljs_bach.synthesis.low_pass.cljs$core$IFn$_invoke$arity$1 ? cljs_bach.synthesis.low_pass.cljs$core$IFn$_invoke$arity$1((600)) : cljs_bach.synthesis.low_pass.call(null,(600))),cljs_bach.synthesis.percussive(0.01,0.4),cljs_bach.synthesis.gain(0.3),cljs_bach.synthesis.destination], 0)),aikakonematka.sound.context,cljs_bach.synthesis.current_time(aikakonematka.sound.context),1.0);
} else {
return null;
}
});
aikakonematka.sound.make_melody_BANG_ = (function aikakonematka$sound$make_melody_BANG_(){
return leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$music_DASH_durations.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)),cljs.core.cst$kw$music_DASH_pitches.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)));
});
aikakonematka.sound.composition1 = leipzig.melody.then(leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.67,0.33,0.67,0.33,(2)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [aikakonematka.sound.G5,aikakonematka.sound.F5,aikakonematka.sound.E5,aikakonematka.sound.D5,aikakonematka.sound.C5], null)),leipzig.melody.then(leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((12),0.33),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat,(3)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [aikakonematka.sound.C6,aikakonematka.sound.G5,aikakonematka.sound.E5,aikakonematka.sound.C5], null)], 0))),leipzig.melody.then(leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.67,0.33,0.67,0.33,(1)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [aikakonematka.sound.E5,aikakonematka.sound.D5,aikakonematka.sound.E5,aikakonematka.sound.F5,aikakonematka.sound.G5], null)),leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),0.67,0.33,(1)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [aikakonematka.sound.C5,aikakonematka.sound.C5,aikakonematka.sound.C5,aikakonematka.sound.D5,aikakonematka.sound.E5], null)))));
aikakonematka.sound.marimba = (function aikakonematka$sound$marimba(p__40685){
var map__40686 = p__40685;
var map__40686__$1 = ((((!((map__40686 == null)))?((((map__40686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40686):map__40686);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40686__$1,cljs.core.cst$kw$pitch);
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs_bach.synthesis.sine.cljs$core$IFn$_invoke$arity$1 ? cljs_bach.synthesis.sine.cljs$core$IFn$_invoke$arity$1(pitch) : cljs_bach.synthesis.sine.call(null,pitch)),(function (){var G__40688 = (pitch + (1));
return (cljs_bach.synthesis.sine.cljs$core$IFn$_invoke$arity$1 ? cljs_bach.synthesis.sine.cljs$core$IFn$_invoke$arity$1(G__40688) : cljs_bach.synthesis.sine.call(null,G__40688));
})(),(function (){var G__40689 = ((2) * pitch);
return (cljs_bach.synthesis.sine.cljs$core$IFn$_invoke$arity$1 ? cljs_bach.synthesis.sine.cljs$core$IFn$_invoke$arity$1(G__40689) : cljs_bach.synthesis.sine.call(null,G__40689));
})()], 0)),cljs_bach.synthesis.adshr(0.01,0.2,0.2,0.2,0.3),cljs_bach.synthesis.gain(0.1)], 0));
});
/**
 * An imitation bell, made by adding together harmonics.
 */
aikakonematka.sound.bell = (function aikakonematka$sound$bell(p__40690){
var map__40691 = p__40690;
var map__40691__$1 = ((((!((map__40691 == null)))?((((map__40691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40691):map__40691);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40691__$1,cljs.core.cst$kw$pitch);
var harmonic = ((function (map__40691,map__40691__$1,pitch){
return (function (n,proportion){
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__40693 = (n * pitch);
return (cljs_bach.synthesis.sine.cljs$core$IFn$_invoke$arity$1 ? cljs_bach.synthesis.sine.cljs$core$IFn$_invoke$arity$1(G__40693) : cljs_bach.synthesis.sine.call(null,G__40693));
})(),cljs_bach.synthesis.percussive(0.01,proportion),cljs_bach.synthesis.gain(0.05)], 0));
});})(map__40691,map__40691__$1,pitch))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.add,cljs.core.map.cljs$core$IFn$_invoke$arity$3(harmonic,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,2.0,3.0,4.1,5.2], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,0.6,0.4,0.3,0.2], null)));
});
aikakonematka.sound.organ = (function aikakonematka$sound$organ(note){
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__40694 = (0.5 * cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(note));
return (cljs_bach.synthesis.sine.cljs$core$IFn$_invoke$arity$1 ? cljs_bach.synthesis.sine.cljs$core$IFn$_invoke$arity$1(G__40694) : cljs_bach.synthesis.sine.call(null,G__40694));
})(),(function (){var G__40695 = cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(note);
return (cljs_bach.synthesis.triangle.cljs$core$IFn$_invoke$arity$1 ? cljs_bach.synthesis.triangle.cljs$core$IFn$_invoke$arity$1(G__40695) : cljs_bach.synthesis.triangle.call(null,G__40695));
})()], 0)),(function (){var G__40696 = ((4) * cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(note));
var G__40697 = cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs_bach.synthesis.sine.cljs$core$IFn$_invoke$arity$1 ? cljs_bach.synthesis.sine.cljs$core$IFn$_invoke$arity$1((3)) : cljs_bach.synthesis.sine.call(null,(3))),cljs_bach.synthesis.gain((3))], 0));
return (cljs_bach.synthesis.low_pass.cljs$core$IFn$_invoke$arity$2 ? cljs_bach.synthesis.low_pass.cljs$core$IFn$_invoke$arity$2(G__40696,G__40697) : cljs_bach.synthesis.low_pass.call(null,G__40696,G__40697));
})(),cljs_bach.synthesis.adsr(0.1,(0),(1),0.3),cljs_bach.synthesis.gain(0.2)], 0));
});
aikakonematka.sound.wah = (function aikakonematka$sound$wah(p__40698){
var map__40699 = p__40698;
var map__40699__$1 = ((((!((map__40699 == null)))?((((map__40699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40699.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40699):map__40699);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40699__$1,cljs.core.cst$kw$pitch);
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs_bach.synthesis.sawtooth.cljs$core$IFn$_invoke$arity$1 ? cljs_bach.synthesis.sawtooth.cljs$core$IFn$_invoke$arity$1(pitch) : cljs_bach.synthesis.sawtooth.call(null,pitch)),(function (){var G__40701 = cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_bach.synthesis.constant(((4) * pitch)),cljs_bach.synthesis.adsr(0.1,0.2,0.4,0.3)], 0));
var G__40702 = (5);
return (cljs_bach.synthesis.low_pass.cljs$core$IFn$_invoke$arity$2 ? cljs_bach.synthesis.low_pass.cljs$core$IFn$_invoke$arity$2(G__40701,G__40702) : cljs_bach.synthesis.low_pass.call(null,G__40701,G__40702));
})(),cljs_bach.synthesis.adsr(0.3,0.5,0.8,0.3),cljs_bach.synthesis.gain(0.1)], 0));
});
aikakonematka.sound.music_instrument = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [aikakonematka.sound.bell,aikakonematka.sound.marimba,aikakonematka.sound.organ,aikakonematka.sound.wah], null);
/**
 * Take a sequence of notes and play them from a set point in an audiocontext.
 */
aikakonematka.sound.play_from_BANG_ = (function aikakonematka$sound$play_from_BANG_(audiocontext,from,notes){
var seq__40703 = cljs.core.seq(notes);
var chunk__40704 = null;
var count__40705 = (0);
var i__40706 = (0);
while(true){
if((i__40706 < count__40705)){
var map__40707 = chunk__40704.cljs$core$IIndexed$_nth$arity$2(null,i__40706);
var map__40707__$1 = ((((!((map__40707 == null)))?((((map__40707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40707.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40707):map__40707);
var note = map__40707__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40707__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40707__$1,cljs.core.cst$kw$duration);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40707__$1,cljs.core.cst$kw$instrument);
var at_40713 = (time + from);
var synth_instance_40714 = (function (){var G__40709 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(note,cljs.core.cst$kw$time);
return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(G__40709) : instrument.call(null,G__40709));
})();
var connected_instance_40715 = cljs_bach.synthesis.connect(synth_instance_40714,cljs_bach.synthesis.destination);
(connected_instance_40715.cljs$core$IFn$_invoke$arity$3 ? connected_instance_40715.cljs$core$IFn$_invoke$arity$3(audiocontext,at_40713,duration) : connected_instance_40715.call(null,audiocontext,at_40713,duration));

var G__40716 = seq__40703;
var G__40717 = chunk__40704;
var G__40718 = count__40705;
var G__40719 = (i__40706 + (1));
seq__40703 = G__40716;
chunk__40704 = G__40717;
count__40705 = G__40718;
i__40706 = G__40719;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__40703);
if(temp__5457__auto__){
var seq__40703__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40703__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__40703__$1);
var G__40720 = cljs.core.chunk_rest(seq__40703__$1);
var G__40721 = c__9739__auto__;
var G__40722 = cljs.core.count(c__9739__auto__);
var G__40723 = (0);
seq__40703 = G__40720;
chunk__40704 = G__40721;
count__40705 = G__40722;
i__40706 = G__40723;
continue;
} else {
var map__40710 = cljs.core.first(seq__40703__$1);
var map__40710__$1 = ((((!((map__40710 == null)))?((((map__40710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40710.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40710):map__40710);
var note = map__40710__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40710__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40710__$1,cljs.core.cst$kw$duration);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40710__$1,cljs.core.cst$kw$instrument);
var at_40724 = (time + from);
var synth_instance_40725 = (function (){var G__40712 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(note,cljs.core.cst$kw$time);
return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(G__40712) : instrument.call(null,G__40712));
})();
var connected_instance_40726 = cljs_bach.synthesis.connect(synth_instance_40725,cljs_bach.synthesis.destination);
(connected_instance_40726.cljs$core$IFn$_invoke$arity$3 ? connected_instance_40726.cljs$core$IFn$_invoke$arity$3(audiocontext,at_40724,duration) : connected_instance_40726.call(null,audiocontext,at_40724,duration));

var G__40727 = cljs.core.next(seq__40703__$1);
var G__40728 = null;
var G__40729 = (0);
var G__40730 = (0);
seq__40703 = G__40727;
chunk__40704 = G__40728;
count__40705 = G__40729;
i__40706 = G__40730;
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
 * Take a sequence of notes and play them in an audiocontext.
 */
aikakonematka.sound.play_BANG_ = (function aikakonematka$sound$play_BANG_(audiocontext,notes){
return aikakonematka.sound.play_from_BANG_(audiocontext,cljs_bach.synthesis.current_time(audiocontext),notes);
});
aikakonematka.sound.play_row_row_row_your_boat = (function aikakonematka$sound$play_row_row_row_your_boat(){
if(cljs.core.truth_(aikakonematka.util.currently_playing_game_QMARK_())){
return null;
} else {
return aikakonematka.sound.play_BANG_(aikakonematka.sound.context,leipzig.melody.wherever(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.cst$kw$instrument),cljs.core.cst$kw$instrument,(leipzig.melody.is.cljs$core$IFn$_invoke$arity$1 ? leipzig.melody.is.cljs$core$IFn$_invoke$arity$1(aikakonematka.sound.marimba) : leipzig.melody.is.call(null,aikakonematka.sound.marimba)),aikakonematka.sound.composition1));
}
});
aikakonematka.sound.play_row_row_row_your_boat();
aikakonematka.sound.play_song_with_instrument = (function aikakonematka$sound$play_song_with_instrument(){
return (
aikakonematka.sound.play_song_with_instrument = (function aikakonematka$sound$play_song_with_instrument_$_play_song_with_instrument(){
return aikakonematka.sound.play_BANG_(aikakonematka.sound.context,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (note){
var pitch = cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(note);
if((pitch < (300))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$instrument,(aikakonematka.sound.music_instrument.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.sound.music_instrument.cljs$core$IFn$_invoke$arity$1((0)) : aikakonematka.sound.music_instrument.call(null,(0))));
} else {
if((pitch < (350))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$instrument,(aikakonematka.sound.music_instrument.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.sound.music_instrument.cljs$core$IFn$_invoke$arity$1((1)) : aikakonematka.sound.music_instrument.call(null,(1))));
} else {
if((pitch <= (440))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$instrument,(aikakonematka.sound.music_instrument.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.sound.music_instrument.cljs$core$IFn$_invoke$arity$1((2)) : aikakonematka.sound.music_instrument.call(null,(2))));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$instrument,(aikakonematka.sound.music_instrument.cljs$core$IFn$_invoke$arity$1 ? aikakonematka.sound.music_instrument.cljs$core$IFn$_invoke$arity$1((3)) : aikakonematka.sound.music_instrument.call(null,(3))));

}
}
}
}),aikakonematka.sound.make_melody_BANG_()));
}))
;
});
aikakonematka.sound.song_from_players = (function aikakonematka$sound$song_from_players(){
if(cljs.core.truth_(cljs.core.cst$kw$audio_DASH_on_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)))){
aikakonematka.sound.play_song_with_instrument();
} else {
}

var G__40731 = aikakonematka.sound.song_from_players;
var G__40732 = ((1000) + ((1000) * cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.cst$kw$music_DASH_durations.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aikakonematka.util.game_state)))));
return setTimeout(G__40731,G__40732);
});
aikakonematka.sound.song_from_players();
