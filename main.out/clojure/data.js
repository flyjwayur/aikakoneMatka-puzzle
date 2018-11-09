// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__40058){
var vec__40059 = p__40058;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40059,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40059,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__40062 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40062,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40062,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40062,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = (in_a) && (in_b) && ((!((ab == null))) || (((va == null)) && ((vb == null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((in_a) && ((!((a_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),(((in_b) && ((!((b_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__40066 = arguments.length;
switch (G__40066) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__9160__auto__ = cljs.core.count(a);
var y__9161__auto__ = cljs.core.count(b);
return ((x__9160__auto__ > y__9161__auto__) ? x__9160__auto__ : y__9161__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__9541__auto__ = (((x == null))?null:x);
var m__9542__auto__ = (clojure.data.equality_partition[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__9542__auto__.call(null,x));
} else {
var m__9542__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__9542__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null)))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__9541__auto__ = (((a == null))?null:a);
var m__9542__auto__ = (clojure.data.diff_similar[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__9542__auto__.call(null,a,b));
} else {
var m__9542__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__9542__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__40068_40092 = clojure.data.equality_partition;
var G__40069_40093 = "null";
var G__40070_40094 = ((function (G__40068_40092,G__40069_40093){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__40068_40092,G__40069_40093))
;
goog.object.set(G__40068_40092,G__40069_40093,G__40070_40094);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__40071_40095 = clojure.data.equality_partition;
var G__40072_40096 = "string";
var G__40073_40097 = ((function (G__40071_40095,G__40072_40096){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__40071_40095,G__40072_40096))
;
goog.object.set(G__40071_40095,G__40072_40096,G__40073_40097);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__40074_40098 = clojure.data.equality_partition;
var G__40075_40099 = "number";
var G__40076_40100 = ((function (G__40074_40098,G__40075_40099){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__40074_40098,G__40075_40099))
;
goog.object.set(G__40074_40098,G__40075_40099,G__40076_40100);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__40077_40101 = clojure.data.equality_partition;
var G__40078_40102 = "array";
var G__40079_40103 = ((function (G__40077_40101,G__40078_40102){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__40077_40101,G__40078_40102))
;
goog.object.set(G__40077_40101,G__40078_40102,G__40079_40103);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__40080_40104 = clojure.data.equality_partition;
var G__40081_40105 = "function";
var G__40082_40106 = ((function (G__40080_40104,G__40081_40105){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__40080_40104,G__40081_40105))
;
goog.object.set(G__40080_40104,G__40081_40105,G__40082_40106);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__40083_40107 = clojure.data.equality_partition;
var G__40084_40108 = "boolean";
var G__40085_40109 = ((function (G__40083_40107,G__40084_40108){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__40083_40107,G__40084_40108))
;
goog.object.set(G__40083_40107,G__40084_40108,G__40085_40109);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__40086_40110 = clojure.data.equality_partition;
var G__40087_40111 = "_";
var G__40088_40112 = ((function (G__40086_40110,G__40087_40111){
return (function (x){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__40086_40110,G__40087_40111))
;
goog.object.set(G__40086_40110,G__40087_40111,G__40088_40112);
goog.object.set(clojure.data.Diff,"null",true);

var G__40113_40137 = clojure.data.diff_similar;
var G__40114_40138 = "null";
var G__40115_40139 = ((function (G__40113_40137,G__40114_40138){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40113_40137,G__40114_40138))
;
goog.object.set(G__40113_40137,G__40114_40138,G__40115_40139);

goog.object.set(clojure.data.Diff,"string",true);

var G__40116_40140 = clojure.data.diff_similar;
var G__40117_40141 = "string";
var G__40118_40142 = ((function (G__40116_40140,G__40117_40141){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40116_40140,G__40117_40141))
;
goog.object.set(G__40116_40140,G__40117_40141,G__40118_40142);

goog.object.set(clojure.data.Diff,"number",true);

var G__40119_40143 = clojure.data.diff_similar;
var G__40120_40144 = "number";
var G__40121_40145 = ((function (G__40119_40143,G__40120_40144){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40119_40143,G__40120_40144))
;
goog.object.set(G__40119_40143,G__40120_40144,G__40121_40145);

goog.object.set(clojure.data.Diff,"array",true);

var G__40122_40146 = clojure.data.diff_similar;
var G__40123_40147 = "array";
var G__40124_40148 = ((function (G__40122_40146,G__40123_40147){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__40122_40146,G__40123_40147))
;
goog.object.set(G__40122_40146,G__40123_40147,G__40124_40148);

goog.object.set(clojure.data.Diff,"function",true);

var G__40125_40149 = clojure.data.diff_similar;
var G__40126_40150 = "function";
var G__40127_40151 = ((function (G__40125_40149,G__40126_40150){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40125_40149,G__40126_40150))
;
goog.object.set(G__40125_40149,G__40126_40150,G__40127_40151);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__40128_40152 = clojure.data.diff_similar;
var G__40129_40153 = "boolean";
var G__40130_40154 = ((function (G__40128_40152,G__40129_40153){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40128_40152,G__40129_40153))
;
goog.object.set(G__40128_40152,G__40129_40153,G__40130_40154);

goog.object.set(clojure.data.Diff,"_",true);

var G__40131_40155 = clojure.data.diff_similar;
var G__40132_40156 = "_";
var G__40133_40157 = ((function (G__40131_40155,G__40132_40156){
return (function (a,b){
var fexpr__40135 = (function (){var G__40136 = clojure.data.equality_partition(a);
var G__40136__$1 = (((G__40136 instanceof cljs.core.Keyword))?G__40136.fqn:null);
switch (G__40136__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40136__$1)].join('')));

}
})();
return (fexpr__40135.cljs$core$IFn$_invoke$arity$2 ? fexpr__40135.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__40135.call(null,a,b));
});})(G__40131_40155,G__40132_40156))
;
goog.object.set(G__40131_40155,G__40132_40156,G__40133_40157);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
