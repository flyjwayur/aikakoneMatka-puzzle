// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs_bach.synthesis');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.core');
goog.require('ajax.protocols');
/**
 * Construct an audio context in a way that works even if it's prefixed.
 */
cljs_bach.synthesis.audio_context = (function cljs_bach$synthesis$audio_context(){
if(cljs.core.truth_(window.AudioContext)){
return (new window.AudioContext());
} else {
return (new window.webkitAudioContext());
}
});
goog.exportSymbol('cljs_bach.synthesis.audio_context', cljs_bach.synthesis.audio_context);
/**
 * Return the current time as recorded by the audio context.
 */
cljs_bach.synthesis.current_time = (function cljs_bach$synthesis$current_time(context){
return context.currentTime;
});
goog.exportSymbol('cljs_bach.synthesis.current_time', cljs_bach.synthesis.current_time);
cljs_bach.synthesis.subgraph = (function cljs_bach$synthesis$subgraph(var_args){
var G__27263 = arguments.length;
switch (G__27263) {
case 2:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2 = (function (input,output){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,input,cljs.core.cst$kw$output,output], null);
});

cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1 = (function (singleton){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(singleton,singleton);
});

cljs_bach.synthesis.subgraph.cljs$lang$maxFixedArity = 2;

/**
 * A graph of synthesis nodes without an input,
 *   so another graph can't connect to it.
 */
cljs_bach.synthesis.source = (function cljs_bach$synthesis$source(node){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(null,node);
});
/**
 * A graph of synthesis nodes without an output,
 *   so it can't connect to another graph.
 */
cljs_bach.synthesis.sink = (function cljs_bach$synthesis$sink(node){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(node,null);
});
/**
 * Convert a synth (actually a reader fn) into a concrete
 *   subgraph by supplying context and timing.
 */
cljs_bach.synthesis.run_with = (function cljs_bach$synthesis$run_with(synth,context,at,duration){
return (synth.cljs$core$IFn$_invoke$arity$3 ? synth.cljs$core$IFn$_invoke$arity$3(context,at,duration) : synth.call(null,context,at,duration));
});
goog.exportSymbol('cljs_bach.synthesis.run_with', cljs_bach.synthesis.run_with);
/**
 * The destination of the audio context i.e. the speakers.
 */
cljs_bach.synthesis.destination = (function cljs_bach$synthesis$destination(context,at,duration){
return cljs_bach.synthesis.sink(context.destination);
});
goog.exportSymbol('cljs_bach.synthesis.destination', cljs_bach.synthesis.destination);
cljs_bach.synthesis.plug = (function cljs_bach$synthesis$plug(param,input,context,at,duration){

if(typeof input === 'number'){
return param.setValueAtTime(input,at);
} else {
return cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(cljs_bach.synthesis.run_with(input,context,at,duration)).connect(param);
}
});
/**
 * Multiply the signal by level.
 */
cljs_bach.synthesis.gain = (function cljs_bach$synthesis$gain(level){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__27265 = context.createGain();
cljs_bach.synthesis.plug(G__27265.gain,level,context,at,duration);

return G__27265;
})());
});
});
goog.exportSymbol('cljs_bach.synthesis.gain', cljs_bach.synthesis.gain);
/**
 * Pass the signal through unaltered.
 */
cljs_bach.synthesis.pass_through = cljs_bach.synthesis.gain(1.0);
goog.exportSymbol('cljs_bach.synthesis.pass_through', cljs_bach.synthesis.pass_through);
/**
 * Build an envelope out of [segment-duration final-level] coordinates.
 */
cljs_bach.synthesis.envelope = (function cljs_bach$synthesis$envelope(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27273 = arguments.length;
var i__10088__auto___27274 = (0);
while(true){
if((i__10088__auto___27274 < len__10087__auto___27273)){
args__10094__auto__.push((arguments[i__10088__auto___27274]));

var G__27275 = (i__10088__auto___27274 + (1));
i__10088__auto___27274 = G__27275;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic = (function (corners){
return (function (context,at,duration){
var audio_node = context.createGain();
audio_node.gain.setValueAtTime((0),at);

var x_27276 = at;
var coordinates_27277 = corners;
while(true){
var temp__5457__auto___27278 = coordinates_27277;
if(cljs.core.truth_(temp__5457__auto___27278)){
var vec__27267_27279 = temp__5457__auto___27278;
var seq__27268_27280 = cljs.core.seq(vec__27267_27279);
var first__27269_27281 = cljs.core.first(seq__27268_27280);
var seq__27268_27282__$1 = cljs.core.next(seq__27268_27280);
var vec__27270_27283 = first__27269_27281;
var dx_27284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27270_27283,(0),null);
var y_27285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27270_27283,(1),null);
var remaining_27286 = seq__27268_27282__$1;
audio_node.gain.linearRampToValueAtTime(y_27285,(x_27276 + dx_27284));

var G__27287 = (dx_27284 + x_27276);
var G__27288 = remaining_27286;
x_27276 = G__27287;
coordinates_27277 = G__27288;
continue;
} else {
}
break;
}

return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1(audio_node);
});
});

cljs_bach.synthesis.envelope.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.envelope.cljs$lang$applyTo = (function (seq27266){
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27266));
});

/**
 * An ADSR envelope that also lets you specify the hold duration.
 */
cljs_bach.synthesis.adshr = (function cljs_bach$synthesis$adshr(attack,decay,sustain,hold,release){
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hold,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [release,(0)], null)], 0));
});
/**
 * A four-stage envelope.
 */
cljs_bach.synthesis.adsr = (function cljs_bach$synthesis$adsr(attack,decay,sustain,release){
return (function (context,at,duration){
var remainder = (((duration - attack) - decay) - release);
var hold = (function (){var x__9160__auto__ = 0.0;
var y__9161__auto__ = remainder;
return ((x__9160__auto__ > y__9161__auto__) ? x__9160__auto__ : y__9161__auto__);
})();
var node = cljs_bach.synthesis.adshr(attack,decay,sustain,hold,release);
return cljs_bach.synthesis.run_with(node,context,at,duration);
});
});
goog.exportSymbol('cljs_bach.synthesis.adsr', cljs_bach.synthesis.adsr);
/**
 * A simple envelope.
 */
cljs_bach.synthesis.percussive = (function cljs_bach$synthesis$percussive(attack,decay){
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,0.0], null)], 0));
});
goog.exportSymbol('cljs_bach.synthesis.percussive', cljs_bach.synthesis.percussive);
/**
 * Like apply, but for the node graphs synths produce.
 */
cljs_bach.synthesis.apply_to_graph = (function cljs_bach$synthesis$apply_to_graph(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27292 = arguments.length;
var i__10088__auto___27293 = (0);
while(true){
if((i__10088__auto___27293 < len__10087__auto___27292)){
args__10094__auto__.push((arguments[i__10088__auto___27293]));

var G__27294 = (i__10088__auto___27293 + (1));
i__10088__auto___27293 = G__27294;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return cljs_bach.synthesis.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

cljs_bach.synthesis.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic = (function (f,synths){
return (function (context,at,duration){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27289_SHARP_){
return cljs_bach.synthesis.run_with(p1__27289_SHARP_,context,at,duration);
}),synths));
});
});

cljs_bach.synthesis.apply_to_graph.cljs$lang$maxFixedArity = (1);

cljs_bach.synthesis.apply_to_graph.cljs$lang$applyTo = (function (seq27290){
var G__27291 = cljs.core.first(seq27290);
var seq27290__$1 = cljs.core.next(seq27290);
return cljs_bach.synthesis.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic(G__27291,seq27290__$1);
});

cljs_bach.synthesis.join_in_series = (function cljs_bach$synthesis$join_in_series(graph1,graph2){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph1).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph2));

return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph1),cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph2));
});
/**
 * Use the output of one synth as the input to another.
 */
cljs_bach.synthesis.connect = (function cljs_bach$synthesis$connect(upstream_synth,downstream_synth){
return cljs_bach.synthesis.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic(cljs_bach.synthesis.join_in_series,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([upstream_synth,downstream_synth], 0));
});
goog.exportSymbol('cljs_bach.synthesis.connect', cljs_bach.synthesis.connect);
/**
 * Connect synths in series.
 */
cljs_bach.synthesis.connect__GT_ = (function cljs_bach$synthesis$connect__GT_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27296 = arguments.length;
var i__10088__auto___27297 = (0);
while(true){
if((i__10088__auto___27297 < len__10087__auto___27296)){
args__10094__auto__.push((arguments[i__10088__auto___27297]));

var G__27298 = (i__10088__auto___27297 + (1));
i__10088__auto___27297 = G__27298;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.connect,nodes);
});

cljs_bach.synthesis.connect__GT_.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq27295){
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27295));
});

cljs_bach.synthesis.join_in_parallel = (function cljs_bach$synthesis$join_in_parallel(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27306 = arguments.length;
var i__10088__auto___27307 = (0);
while(true){
if((i__10088__auto___27307 < len__10087__auto___27306)){
args__10094__auto__.push((arguments[i__10088__auto___27307]));

var G__27308 = (i__10088__auto___27307 + (1));
i__10088__auto___27307 = G__27308;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs_bach.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs_bach.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__27302_27309 = cljs.core.seq(graphs);
var chunk__27303_27310 = null;
var count__27304_27311 = (0);
var i__27305_27312 = (0);
while(true){
if((i__27305_27312 < count__27304_27311)){
var graph_27313 = chunk__27303_27310.cljs$core$IIndexed$_nth$arity$2(null,i__27305_27312);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_27313).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_27313))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_27313));
} else {
}

var G__27314 = seq__27302_27309;
var G__27315 = chunk__27303_27310;
var G__27316 = count__27304_27311;
var G__27317 = (i__27305_27312 + (1));
seq__27302_27309 = G__27314;
chunk__27303_27310 = G__27315;
count__27304_27311 = G__27316;
i__27305_27312 = G__27317;
continue;
} else {
var temp__5457__auto___27318 = cljs.core.seq(seq__27302_27309);
if(temp__5457__auto___27318){
var seq__27302_27319__$1 = temp__5457__auto___27318;
if(cljs.core.chunked_seq_QMARK_(seq__27302_27319__$1)){
var c__9739__auto___27320 = cljs.core.chunk_first(seq__27302_27319__$1);
var G__27321 = cljs.core.chunk_rest(seq__27302_27319__$1);
var G__27322 = c__9739__auto___27320;
var G__27323 = cljs.core.count(c__9739__auto___27320);
var G__27324 = (0);
seq__27302_27309 = G__27321;
chunk__27303_27310 = G__27322;
count__27304_27311 = G__27323;
i__27305_27312 = G__27324;
continue;
} else {
var graph_27325 = cljs.core.first(seq__27302_27319__$1);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_27325).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_27325))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_27325));
} else {
}

var G__27326 = cljs.core.next(seq__27302_27319__$1);
var G__27327 = null;
var G__27328 = (0);
var G__27329 = (0);
seq__27302_27309 = G__27326;
chunk__27303_27310 = G__27327;
count__27304_27311 = G__27328;
i__27305_27312 = G__27329;
continue;
}
} else {
}
}
break;
}

return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(upstream),cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(downstream));
});

cljs_bach.synthesis.join_in_parallel.cljs$lang$maxFixedArity = (2);

cljs_bach.synthesis.join_in_parallel.cljs$lang$applyTo = (function (seq27299){
var G__27300 = cljs.core.first(seq27299);
var seq27299__$1 = cljs.core.next(seq27299);
var G__27301 = cljs.core.first(seq27299__$1);
var seq27299__$2 = cljs.core.next(seq27299__$1);
return cljs_bach.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic(G__27300,G__27301,seq27299__$2);
});

/**
 * Add together synths by connecting them all to the same
 *   upstream and downstream gains.
 */
cljs_bach.synthesis.add = (function cljs_bach$synthesis$add(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27331 = arguments.length;
var i__10088__auto___27332 = (0);
while(true){
if((i__10088__auto___27332 < len__10087__auto___27331)){
args__10094__auto__.push((arguments[i__10088__auto___27332]));

var G__27333 = (i__10088__auto___27332 + (1));
i__10088__auto___27332 = G__27333;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});
goog.exportSymbol('cljs_bach.synthesis.add', cljs_bach.synthesis.add);

cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic = (function (synths){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs_bach.synthesis.apply_to_graph,cljs_bach.synthesis.join_in_parallel,cljs_bach.synthesis.pass_through,cljs_bach.synthesis.pass_through,synths);
});

cljs_bach.synthesis.add.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.add.cljs$lang$applyTo = (function (seq27330){
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27330));
});

cljs_bach.synthesis.raw_buffer = (function cljs_bach$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__27334_27338 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__27335_27339 = null;
var count__27336_27340 = (0);
var i__27337_27341 = (0);
while(true){
if((i__27337_27341 < count__27336_27340)){
var i_27342 = chunk__27335_27339.cljs$core$IIndexed$_nth$arity$2(null,i__27337_27341);
(data[i_27342] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_27342) : generate_bit_BANG_.call(null,i_27342)));

var G__27343 = seq__27334_27338;
var G__27344 = chunk__27335_27339;
var G__27345 = count__27336_27340;
var G__27346 = (i__27337_27341 + (1));
seq__27334_27338 = G__27343;
chunk__27335_27339 = G__27344;
count__27336_27340 = G__27345;
i__27337_27341 = G__27346;
continue;
} else {
var temp__5457__auto___27347 = cljs.core.seq(seq__27334_27338);
if(temp__5457__auto___27347){
var seq__27334_27348__$1 = temp__5457__auto___27347;
if(cljs.core.chunked_seq_QMARK_(seq__27334_27348__$1)){
var c__9739__auto___27349 = cljs.core.chunk_first(seq__27334_27348__$1);
var G__27350 = cljs.core.chunk_rest(seq__27334_27348__$1);
var G__27351 = c__9739__auto___27349;
var G__27352 = cljs.core.count(c__9739__auto___27349);
var G__27353 = (0);
seq__27334_27338 = G__27350;
chunk__27335_27339 = G__27351;
count__27336_27340 = G__27352;
i__27337_27341 = G__27353;
continue;
} else {
var i_27354 = cljs.core.first(seq__27334_27348__$1);
(data[i_27354] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_27354) : generate_bit_BANG_.call(null,i_27354)));

var G__27355 = cljs.core.next(seq__27334_27348__$1);
var G__27356 = null;
var G__27357 = (0);
var G__27358 = (0);
seq__27334_27338 = G__27355;
chunk__27335_27339 = G__27356;
count__27336_27340 = G__27357;
i__27337_27341 = G__27358;
continue;
}
} else {
}
}
break;
}

return buffer;
});
cljs_bach.synthesis.buffer = cljs.core.memoize(cljs_bach.synthesis.raw_buffer);
/**
 * Make noise according to the supplied strategy for creating bits.
 */
cljs_bach.synthesis.noise = (function cljs_bach$synthesis$noise(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.source((function (){var G__27359 = context.createBufferSource();
G__27359.buffer = (function (){var G__27360 = generate_bit_BANG_;
var G__27361 = context;
var G__27362 = (duration + 1.0);
return (cljs_bach.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? cljs_bach.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__27360,G__27361,G__27362) : cljs_bach.synthesis.buffer.call(null,G__27360,G__27361,G__27362));
})();

G__27359.start(at);

return G__27359;
})());
});
});
/**
 * Random noise.
 */
cljs_bach.synthesis.white_noise = (function (){var white = (function (_){
return ((Math.random() * 2.0) - 1.0);
});
return cljs_bach.synthesis.noise(white);
})();
goog.exportSymbol('cljs_bach.synthesis.white_noise', cljs_bach.synthesis.white_noise);
/**
 * Make a constant value by creating noise with a fixed value.
 */
cljs_bach.synthesis.constant = (function cljs_bach$synthesis$constant(x){
return cljs_bach.synthesis.noise(cljs.core.constantly(x));
});
goog.exportSymbol('cljs_bach.synthesis.constant', cljs_bach.synthesis.constant);
/**
 * A periodic wave.
 */
cljs_bach.synthesis.oscillator = (function cljs_bach$synthesis$oscillator(type,freq){
return (function (context,at,duration){
return cljs_bach.synthesis.source((function (){var G__27363 = context.createOscillator();
G__27363.frequency.value = (0);

cljs_bach.synthesis.plug(G__27363.frequency,freq,context,at,duration);

G__27363.type = type;

G__27363.start(at);

G__27363.stop(((at + duration) + 1.0));

return G__27363;
})());
});
});
cljs_bach.synthesis.sine = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.oscillator,"sine");
goog.exportSymbol('cljs_bach.synthesis.sine', cljs_bach.synthesis.sine);
cljs_bach.synthesis.sawtooth = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.oscillator,"sawtooth");
goog.exportSymbol('cljs_bach.synthesis.sawtooth', cljs_bach.synthesis.sawtooth);
cljs_bach.synthesis.square = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.oscillator,"square");
goog.exportSymbol('cljs_bach.synthesis.square', cljs_bach.synthesis.square);
cljs_bach.synthesis.triangle = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.oscillator,"triangle");
goog.exportSymbol('cljs_bach.synthesis.triangle', cljs_bach.synthesis.triangle);
/**
 * Attenuate frequencies beyond the cutoff, and intensify
 *   the cutoff frequency based on the value of q.
 */
cljs_bach.synthesis.biquad_filter = (function cljs_bach$synthesis$biquad_filter(var_args){
var G__27365 = arguments.length;
switch (G__27365) {
case 2:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2 = (function (type,freq){
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3(type,freq,1.0);
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3 = (function (type,freq,q){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__27366 = context.createBiquadFilter();
G__27366.frequency.value = (0);

cljs_bach.synthesis.plug(G__27366.frequency,freq,context,at,duration);

cljs_bach.synthesis.plug(G__27366.Q,q,context,at,duration);

G__27366.type = type;

return G__27366;
})());
});
});

cljs_bach.synthesis.biquad_filter.cljs$lang$maxFixedArity = 3;

cljs_bach.synthesis.low_pass = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.biquad_filter,"lowpass");
goog.exportSymbol('cljs_bach.synthesis.low_pass', cljs_bach.synthesis.low_pass);
cljs_bach.synthesis.high_pass = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.biquad_filter,"highpass");
goog.exportSymbol('cljs_bach.synthesis.high_pass', cljs_bach.synthesis.high_pass);
/**
 * Pan the signal left (-1) or right (1).
 */
cljs_bach.synthesis.stereo_panner = (function cljs_bach$synthesis$stereo_panner(pan){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__27368 = context.createStereoPanner();
cljs_bach.synthesis.plug(G__27368.pan,pan,context,at,duration);

return G__27368;
})());
});
});
goog.exportSymbol('cljs_bach.synthesis.stereo_panner', cljs_bach.synthesis.stereo_panner);
/**
 * Delay the signal.
 */
cljs_bach.synthesis.delay_line = (function cljs_bach$synthesis$delay_line(seconds){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var maximum = (5);
var G__27369 = context.createDelay(maximum);
cljs_bach.synthesis.plug(G__27369.delayTime,seconds,context,at,duration);

return G__27369;
})());
});
});
goog.exportSymbol('cljs_bach.synthesis.delay_line', cljs_bach.synthesis.delay_line);
/**
 * Linear convolution.
 */
cljs_bach.synthesis.convolver = (function cljs_bach$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__27370 = context.createConvolver();
G__27370.buffer = (function (){var G__27371 = generate_bit_BANG_;
var G__27372 = context;
var G__27373 = (duration + 1.0);
return (cljs_bach.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? cljs_bach.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__27371,G__27372,G__27373) : cljs_bach.synthesis.buffer.call(null,G__27371,G__27372,G__27373));
})();

return G__27370;
})());
});
});
/**
 * Crude reverb.
 */
cljs_bach.synthesis.reverb = (function (){var duration = (5);
var decay = (3);
var sample_rate = (44100);
var length = (sample_rate * (duration + 1.0));
var logarithmic_decay = ((function (duration,decay,sample_rate,length){
return (function (i){
return (((Math.random(i) * 2.0) - 1.0) * (function (){var G__27374 = ((1) - (i / length));
var G__27375 = decay;
return Math.pow(G__27374,G__27375);
})());
});})(duration,decay,sample_rate,length))
;
return cljs_bach.synthesis.convolver(logarithmic_decay);
})();
goog.exportSymbol('cljs_bach.synthesis.reverb', cljs_bach.synthesis.reverb);
/**
 * Mix the original signal with one with the effect applied.
 */
cljs_bach.synthesis.enhance = (function cljs_bach$synthesis$enhance(effect,level){
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_bach.synthesis.pass_through,cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([effect,cljs_bach.synthesis.gain(level)], 0))], 0));
});
goog.exportSymbol('cljs_bach.synthesis.enhance', cljs_bach.synthesis.enhance);
cljs_bach.synthesis.get_mp3 = (function cljs_bach$synthesis$get_mp3(uri,callback){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(uri,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$response_DASH_format,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$arraybuffer,cljs.core.cst$kw$read,ajax.protocols._body,cljs.core.cst$kw$description,"audio",cljs.core.cst$kw$content_DASH_type,"audio/mpeg"], null),cljs.core.cst$kw$handler,callback], null)], 0));
});
/**
 * Play a sample addressed via a URI. Until fetching and decoding is complete, it will play silence.
 */
cljs_bach.synthesis.raw_sample = (function cljs_bach$synthesis$raw_sample(uri){
var psuedo_promise = {};
cljs_bach.synthesis.get_mp3(uri,((function (psuedo_promise){
return (function (p1__27376_SHARP_){
return psuedo_promise.data = p1__27376_SHARP_;
});})(psuedo_promise))
);

return ((function (psuedo_promise){
return (function (context,at,duration){
return cljs_bach.synthesis.source((function (){var node = (function (){var G__27379 = context.createBufferSource();
G__27379.start(at);

G__27379.stop((at + duration));

return G__27379;
})();
var set_buffer = ((function (node,psuedo_promise){
return (function (buffer){
psuedo_promise.buffer = buffer;

return node.buffer = buffer;
});})(node,psuedo_promise))
;
var temp__5457__auto___27380 = psuedo_promise.data;
if(cljs.core.truth_(temp__5457__auto___27380)){
var data_27381 = temp__5457__auto___27380;
var temp__5455__auto___27382 = psuedo_promise.buffer;
if(cljs.core.truth_(temp__5455__auto___27382)){
var buffer_27383 = temp__5455__auto___27382;
set_buffer(buffer_27383);
} else {
context.decodeAudioData(data_27381,set_buffer);
}
} else {
}

return node;
})());
});
;})(psuedo_promise))
});
cljs_bach.synthesis.sample = cljs.core.memoize(cljs_bach.synthesis.raw_sample);
goog.exportSymbol('cljs_bach.synthesis.sample', cljs_bach.synthesis.sample);
