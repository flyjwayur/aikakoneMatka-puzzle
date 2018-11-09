// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__14528__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__14528 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14529__i = 0, G__14529__a = new Array(arguments.length -  0);
while (G__14529__i < G__14529__a.length) {G__14529__a[G__14529__i] = arguments[G__14529__i + 0]; ++G__14529__i;}
  args = new cljs.core.IndexedSeq(G__14529__a,0,null);
} 
return G__14528__delegate.call(this,args);};
G__14528.cljs$lang$maxFixedArity = 0;
G__14528.cljs$lang$applyTo = (function (arglist__14530){
var args = cljs.core.seq(arglist__14530);
return G__14528__delegate(args);
});
G__14528.cljs$core$IFn$_invoke$arity$variadic = G__14528__delegate;
return G__14528;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__14531__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__14531 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14532__i = 0, G__14532__a = new Array(arguments.length -  0);
while (G__14532__i < G__14532__a.length) {G__14532__a[G__14532__i] = arguments[G__14532__i + 0]; ++G__14532__i;}
  args = new cljs.core.IndexedSeq(G__14532__a,0,null);
} 
return G__14531__delegate.call(this,args);};
G__14531.cljs$lang$maxFixedArity = 0;
G__14531.cljs$lang$applyTo = (function (arglist__14533){
var args = cljs.core.seq(arglist__14533);
return G__14531__delegate(args);
});
G__14531.cljs$core$IFn$_invoke$arity$variadic = G__14531__delegate;
return G__14531;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
