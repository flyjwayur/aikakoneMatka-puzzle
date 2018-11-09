// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__16746){
var vec__16747 = p__16746;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16747,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16747,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__16750 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16750,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16750,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16750,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16750,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16750,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$gcol,gcol,cljs.core.cst$kw$source,(goog.object.get(source_map,"sources")[source]),cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$name,(function (){var temp__5457__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5457__auto__)){
var name__$1 = temp__5457__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__16753 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16753,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16753,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16753,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16753,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16753,(4),null);
var vec__16756 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16756,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16756,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16756,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16756,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16756,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__8808__auto__ = source;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__8808__auto__ = line;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__8808__auto__ = col;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__8808__auto__ = name;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__16759 = segmap;
var map__16759__$1 = ((((!((map__16759 == null)))?((((map__16759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16759):map__16759);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16759__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16759__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16759__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16759__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16759__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gline,gline,cljs.core.cst$kw$gcol,gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16759,map__16759__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16759,map__16759__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16759,map__16759__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__16759,map__16759__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__16759,map__16759__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__16759,map__16759__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__16762 = arguments.length;
switch (G__16762) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__16763 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__16767 = cljs.core.next(segs__$1);
var G__16768 = nrelseg;
var G__16769 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__16767;
relseg__$1 = G__16768;
result__$1 = G__16769;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16763,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16763,(1),null);
var G__16770 = (gline + (1));
var G__16771 = cljs.core.next(lines__$1);
var G__16772 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__16773 = result__$1;
gline = G__16770;
lines__$1 = G__16771;
relseg = G__16772;
result = G__16773;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__16775 = segmap;
var map__16775__$1 = ((((!((map__16775 == null)))?((((map__16775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16775):map__16775);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16775__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16775__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16775__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16775__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16775__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$source,source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16775,map__16775__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16775,map__16775__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__16774_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__16774_SHARP_,d__$1);
});})(map__16775,map__16775__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__16775,map__16775__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__16778 = arguments.length;
switch (G__16778) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__16779 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__16783 = cljs.core.next(segs__$1);
var G__16784 = nrelseg;
var G__16785 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__16783;
relseg__$1 = G__16784;
result__$1 = G__16785;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16779,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16779,(1),null);
var G__16786 = (gline + (1));
var G__16787 = cljs.core.next(lines__$1);
var G__16788 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__16789 = result__$1;
gline = G__16786;
lines__$1 = G__16787;
relseg = G__16788;
result = G__16789;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (relseg){
return (function (p__16790){
var vec__16791 = p__16790;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16791,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16791,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16791,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16791,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16791,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__16794){
var vec__16795 = p__16794;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16795,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16795,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16795,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16795,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16795,(4),null);
var seg = vec__16795;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__16795,gcol,sidx,line,col,name,seg,relseg){
return (function (p__16798){
var vec__16799 = p__16798;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16799,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16799,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16799,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16799,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16799,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__8808__auto__ = name;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__16795,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__8808__auto__ = cljs.core.cst$kw$preamble_DASH_line_DASH_count.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gcol.cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5455__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
var idx = (function (){var temp__5455__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5455__auto____$1)){
var idx = temp__5455__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__16805 = cljs.core.seq(infos);
var chunk__16806 = null;
var count__16807 = (0);
var i__16808 = (0);
while(true){
if((i__16808 < count__16807)){
var info = chunk__16806.cljs$core$IIndexed$_nth$arity$2(null,i__16808);
var segv_16890 = info__GT_segv(info,source_idx,line,col);
var gline_16891 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_16892 = cljs.core.count(cljs.core.deref(lines));
if((gline_16891 > (lc_16892 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__16805,chunk__16806,count__16807,i__16808,segv_16890,gline_16891,lc_16892,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_16891 - (lc_16892 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_16890], null));
});})(seq__16805,chunk__16806,count__16807,i__16808,segv_16890,gline_16891,lc_16892,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__16805,chunk__16806,count__16807,i__16808,segv_16890,gline_16891,lc_16892,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16891], null),cljs.core.conj,segv_16890);
});})(seq__16805,chunk__16806,count__16807,i__16808,segv_16890,gline_16891,lc_16892,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__16893 = seq__16805;
var G__16894 = chunk__16806;
var G__16895 = count__16807;
var G__16896 = (i__16808 + (1));
seq__16805 = G__16893;
chunk__16806 = G__16894;
count__16807 = G__16895;
i__16808 = G__16896;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__16805);
if(temp__5457__auto__){
var seq__16805__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16805__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__16805__$1);
var G__16897 = cljs.core.chunk_rest(seq__16805__$1);
var G__16898 = c__9739__auto__;
var G__16899 = cljs.core.count(c__9739__auto__);
var G__16900 = (0);
seq__16805 = G__16897;
chunk__16806 = G__16898;
count__16807 = G__16899;
i__16808 = G__16900;
continue;
} else {
var info = cljs.core.first(seq__16805__$1);
var segv_16901 = info__GT_segv(info,source_idx,line,col);
var gline_16902 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_16903 = cljs.core.count(cljs.core.deref(lines));
if((gline_16902 > (lc_16903 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__16805,chunk__16806,count__16807,i__16808,segv_16901,gline_16902,lc_16903,info,seq__16805__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_16902 - (lc_16903 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_16901], null));
});})(seq__16805,chunk__16806,count__16807,i__16808,segv_16901,gline_16902,lc_16903,info,seq__16805__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__16805,chunk__16806,count__16807,i__16808,segv_16901,gline_16902,lc_16903,info,seq__16805__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16902], null),cljs.core.conj,segv_16901);
});})(seq__16805,chunk__16806,count__16807,i__16808,segv_16901,gline_16902,lc_16903,info,seq__16805__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__16904 = cljs.core.next(seq__16805__$1);
var G__16905 = null;
var G__16906 = (0);
var G__16907 = (0);
seq__16805 = G__16904;
chunk__16806 = G__16905;
count__16807 = G__16906;
i__16808 = G__16907;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__16809_16908 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__16810_16909 = null;
var count__16811_16910 = (0);
var i__16812_16911 = (0);
while(true){
if((i__16812_16911 < count__16811_16910)){
var vec__16813_16912 = chunk__16810_16909.cljs$core$IIndexed$_nth$arity$2(null,i__16812_16911);
var source_idx_16913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16813_16912,(0),null);
var vec__16816_16914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16813_16912,(1),null);
var __16915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16816_16914,(0),null);
var lines_16916__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16816_16914,(1),null);
var seq__16819_16917 = cljs.core.seq(lines_16916__$1);
var chunk__16820_16918 = null;
var count__16821_16919 = (0);
var i__16822_16920 = (0);
while(true){
if((i__16822_16920 < count__16821_16919)){
var vec__16823_16921 = chunk__16820_16918.cljs$core$IIndexed$_nth$arity$2(null,i__16822_16920);
var line_16922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16823_16921,(0),null);
var cols_16923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16823_16921,(1),null);
var seq__16826_16924 = cljs.core.seq(cols_16923);
var chunk__16827_16925 = null;
var count__16828_16926 = (0);
var i__16829_16927 = (0);
while(true){
if((i__16829_16927 < count__16828_16926)){
var vec__16830_16928 = chunk__16827_16925.cljs$core$IIndexed$_nth$arity$2(null,i__16829_16927);
var col_16929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16830_16928,(0),null);
var infos_16930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16830_16928,(1),null);
encode_cols(infos_16930,source_idx_16913,line_16922,col_16929);

var G__16931 = seq__16826_16924;
var G__16932 = chunk__16827_16925;
var G__16933 = count__16828_16926;
var G__16934 = (i__16829_16927 + (1));
seq__16826_16924 = G__16931;
chunk__16827_16925 = G__16932;
count__16828_16926 = G__16933;
i__16829_16927 = G__16934;
continue;
} else {
var temp__5457__auto___16935 = cljs.core.seq(seq__16826_16924);
if(temp__5457__auto___16935){
var seq__16826_16936__$1 = temp__5457__auto___16935;
if(cljs.core.chunked_seq_QMARK_(seq__16826_16936__$1)){
var c__9739__auto___16937 = cljs.core.chunk_first(seq__16826_16936__$1);
var G__16938 = cljs.core.chunk_rest(seq__16826_16936__$1);
var G__16939 = c__9739__auto___16937;
var G__16940 = cljs.core.count(c__9739__auto___16937);
var G__16941 = (0);
seq__16826_16924 = G__16938;
chunk__16827_16925 = G__16939;
count__16828_16926 = G__16940;
i__16829_16927 = G__16941;
continue;
} else {
var vec__16833_16942 = cljs.core.first(seq__16826_16936__$1);
var col_16943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16833_16942,(0),null);
var infos_16944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16833_16942,(1),null);
encode_cols(infos_16944,source_idx_16913,line_16922,col_16943);

var G__16945 = cljs.core.next(seq__16826_16936__$1);
var G__16946 = null;
var G__16947 = (0);
var G__16948 = (0);
seq__16826_16924 = G__16945;
chunk__16827_16925 = G__16946;
count__16828_16926 = G__16947;
i__16829_16927 = G__16948;
continue;
}
} else {
}
}
break;
}

var G__16949 = seq__16819_16917;
var G__16950 = chunk__16820_16918;
var G__16951 = count__16821_16919;
var G__16952 = (i__16822_16920 + (1));
seq__16819_16917 = G__16949;
chunk__16820_16918 = G__16950;
count__16821_16919 = G__16951;
i__16822_16920 = G__16952;
continue;
} else {
var temp__5457__auto___16953 = cljs.core.seq(seq__16819_16917);
if(temp__5457__auto___16953){
var seq__16819_16954__$1 = temp__5457__auto___16953;
if(cljs.core.chunked_seq_QMARK_(seq__16819_16954__$1)){
var c__9739__auto___16955 = cljs.core.chunk_first(seq__16819_16954__$1);
var G__16956 = cljs.core.chunk_rest(seq__16819_16954__$1);
var G__16957 = c__9739__auto___16955;
var G__16958 = cljs.core.count(c__9739__auto___16955);
var G__16959 = (0);
seq__16819_16917 = G__16956;
chunk__16820_16918 = G__16957;
count__16821_16919 = G__16958;
i__16822_16920 = G__16959;
continue;
} else {
var vec__16836_16960 = cljs.core.first(seq__16819_16954__$1);
var line_16961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16836_16960,(0),null);
var cols_16962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16836_16960,(1),null);
var seq__16839_16963 = cljs.core.seq(cols_16962);
var chunk__16840_16964 = null;
var count__16841_16965 = (0);
var i__16842_16966 = (0);
while(true){
if((i__16842_16966 < count__16841_16965)){
var vec__16843_16967 = chunk__16840_16964.cljs$core$IIndexed$_nth$arity$2(null,i__16842_16966);
var col_16968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16843_16967,(0),null);
var infos_16969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16843_16967,(1),null);
encode_cols(infos_16969,source_idx_16913,line_16961,col_16968);

var G__16970 = seq__16839_16963;
var G__16971 = chunk__16840_16964;
var G__16972 = count__16841_16965;
var G__16973 = (i__16842_16966 + (1));
seq__16839_16963 = G__16970;
chunk__16840_16964 = G__16971;
count__16841_16965 = G__16972;
i__16842_16966 = G__16973;
continue;
} else {
var temp__5457__auto___16974__$1 = cljs.core.seq(seq__16839_16963);
if(temp__5457__auto___16974__$1){
var seq__16839_16975__$1 = temp__5457__auto___16974__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16839_16975__$1)){
var c__9739__auto___16976 = cljs.core.chunk_first(seq__16839_16975__$1);
var G__16977 = cljs.core.chunk_rest(seq__16839_16975__$1);
var G__16978 = c__9739__auto___16976;
var G__16979 = cljs.core.count(c__9739__auto___16976);
var G__16980 = (0);
seq__16839_16963 = G__16977;
chunk__16840_16964 = G__16978;
count__16841_16965 = G__16979;
i__16842_16966 = G__16980;
continue;
} else {
var vec__16846_16981 = cljs.core.first(seq__16839_16975__$1);
var col_16982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16846_16981,(0),null);
var infos_16983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16846_16981,(1),null);
encode_cols(infos_16983,source_idx_16913,line_16961,col_16982);

var G__16984 = cljs.core.next(seq__16839_16975__$1);
var G__16985 = null;
var G__16986 = (0);
var G__16987 = (0);
seq__16839_16963 = G__16984;
chunk__16840_16964 = G__16985;
count__16841_16965 = G__16986;
i__16842_16966 = G__16987;
continue;
}
} else {
}
}
break;
}

var G__16988 = cljs.core.next(seq__16819_16954__$1);
var G__16989 = null;
var G__16990 = (0);
var G__16991 = (0);
seq__16819_16917 = G__16988;
chunk__16820_16918 = G__16989;
count__16821_16919 = G__16990;
i__16822_16920 = G__16991;
continue;
}
} else {
}
}
break;
}

var G__16992 = seq__16809_16908;
var G__16993 = chunk__16810_16909;
var G__16994 = count__16811_16910;
var G__16995 = (i__16812_16911 + (1));
seq__16809_16908 = G__16992;
chunk__16810_16909 = G__16993;
count__16811_16910 = G__16994;
i__16812_16911 = G__16995;
continue;
} else {
var temp__5457__auto___16996 = cljs.core.seq(seq__16809_16908);
if(temp__5457__auto___16996){
var seq__16809_16997__$1 = temp__5457__auto___16996;
if(cljs.core.chunked_seq_QMARK_(seq__16809_16997__$1)){
var c__9739__auto___16998 = cljs.core.chunk_first(seq__16809_16997__$1);
var G__16999 = cljs.core.chunk_rest(seq__16809_16997__$1);
var G__17000 = c__9739__auto___16998;
var G__17001 = cljs.core.count(c__9739__auto___16998);
var G__17002 = (0);
seq__16809_16908 = G__16999;
chunk__16810_16909 = G__17000;
count__16811_16910 = G__17001;
i__16812_16911 = G__17002;
continue;
} else {
var vec__16849_17003 = cljs.core.first(seq__16809_16997__$1);
var source_idx_17004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16849_17003,(0),null);
var vec__16852_17005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16849_17003,(1),null);
var __17006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16852_17005,(0),null);
var lines_17007__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16852_17005,(1),null);
var seq__16855_17008 = cljs.core.seq(lines_17007__$1);
var chunk__16856_17009 = null;
var count__16857_17010 = (0);
var i__16858_17011 = (0);
while(true){
if((i__16858_17011 < count__16857_17010)){
var vec__16859_17012 = chunk__16856_17009.cljs$core$IIndexed$_nth$arity$2(null,i__16858_17011);
var line_17013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16859_17012,(0),null);
var cols_17014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16859_17012,(1),null);
var seq__16862_17015 = cljs.core.seq(cols_17014);
var chunk__16863_17016 = null;
var count__16864_17017 = (0);
var i__16865_17018 = (0);
while(true){
if((i__16865_17018 < count__16864_17017)){
var vec__16866_17019 = chunk__16863_17016.cljs$core$IIndexed$_nth$arity$2(null,i__16865_17018);
var col_17020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16866_17019,(0),null);
var infos_17021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16866_17019,(1),null);
encode_cols(infos_17021,source_idx_17004,line_17013,col_17020);

var G__17022 = seq__16862_17015;
var G__17023 = chunk__16863_17016;
var G__17024 = count__16864_17017;
var G__17025 = (i__16865_17018 + (1));
seq__16862_17015 = G__17022;
chunk__16863_17016 = G__17023;
count__16864_17017 = G__17024;
i__16865_17018 = G__17025;
continue;
} else {
var temp__5457__auto___17026__$1 = cljs.core.seq(seq__16862_17015);
if(temp__5457__auto___17026__$1){
var seq__16862_17027__$1 = temp__5457__auto___17026__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16862_17027__$1)){
var c__9739__auto___17028 = cljs.core.chunk_first(seq__16862_17027__$1);
var G__17029 = cljs.core.chunk_rest(seq__16862_17027__$1);
var G__17030 = c__9739__auto___17028;
var G__17031 = cljs.core.count(c__9739__auto___17028);
var G__17032 = (0);
seq__16862_17015 = G__17029;
chunk__16863_17016 = G__17030;
count__16864_17017 = G__17031;
i__16865_17018 = G__17032;
continue;
} else {
var vec__16869_17033 = cljs.core.first(seq__16862_17027__$1);
var col_17034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16869_17033,(0),null);
var infos_17035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16869_17033,(1),null);
encode_cols(infos_17035,source_idx_17004,line_17013,col_17034);

var G__17036 = cljs.core.next(seq__16862_17027__$1);
var G__17037 = null;
var G__17038 = (0);
var G__17039 = (0);
seq__16862_17015 = G__17036;
chunk__16863_17016 = G__17037;
count__16864_17017 = G__17038;
i__16865_17018 = G__17039;
continue;
}
} else {
}
}
break;
}

var G__17040 = seq__16855_17008;
var G__17041 = chunk__16856_17009;
var G__17042 = count__16857_17010;
var G__17043 = (i__16858_17011 + (1));
seq__16855_17008 = G__17040;
chunk__16856_17009 = G__17041;
count__16857_17010 = G__17042;
i__16858_17011 = G__17043;
continue;
} else {
var temp__5457__auto___17044__$1 = cljs.core.seq(seq__16855_17008);
if(temp__5457__auto___17044__$1){
var seq__16855_17045__$1 = temp__5457__auto___17044__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16855_17045__$1)){
var c__9739__auto___17046 = cljs.core.chunk_first(seq__16855_17045__$1);
var G__17047 = cljs.core.chunk_rest(seq__16855_17045__$1);
var G__17048 = c__9739__auto___17046;
var G__17049 = cljs.core.count(c__9739__auto___17046);
var G__17050 = (0);
seq__16855_17008 = G__17047;
chunk__16856_17009 = G__17048;
count__16857_17010 = G__17049;
i__16858_17011 = G__17050;
continue;
} else {
var vec__16872_17051 = cljs.core.first(seq__16855_17045__$1);
var line_17052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16872_17051,(0),null);
var cols_17053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16872_17051,(1),null);
var seq__16875_17054 = cljs.core.seq(cols_17053);
var chunk__16876_17055 = null;
var count__16877_17056 = (0);
var i__16878_17057 = (0);
while(true){
if((i__16878_17057 < count__16877_17056)){
var vec__16879_17058 = chunk__16876_17055.cljs$core$IIndexed$_nth$arity$2(null,i__16878_17057);
var col_17059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16879_17058,(0),null);
var infos_17060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16879_17058,(1),null);
encode_cols(infos_17060,source_idx_17004,line_17052,col_17059);

var G__17061 = seq__16875_17054;
var G__17062 = chunk__16876_17055;
var G__17063 = count__16877_17056;
var G__17064 = (i__16878_17057 + (1));
seq__16875_17054 = G__17061;
chunk__16876_17055 = G__17062;
count__16877_17056 = G__17063;
i__16878_17057 = G__17064;
continue;
} else {
var temp__5457__auto___17065__$2 = cljs.core.seq(seq__16875_17054);
if(temp__5457__auto___17065__$2){
var seq__16875_17066__$1 = temp__5457__auto___17065__$2;
if(cljs.core.chunked_seq_QMARK_(seq__16875_17066__$1)){
var c__9739__auto___17067 = cljs.core.chunk_first(seq__16875_17066__$1);
var G__17068 = cljs.core.chunk_rest(seq__16875_17066__$1);
var G__17069 = c__9739__auto___17067;
var G__17070 = cljs.core.count(c__9739__auto___17067);
var G__17071 = (0);
seq__16875_17054 = G__17068;
chunk__16876_17055 = G__17069;
count__16877_17056 = G__17070;
i__16878_17057 = G__17071;
continue;
} else {
var vec__16882_17072 = cljs.core.first(seq__16875_17066__$1);
var col_17073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16882_17072,(0),null);
var infos_17074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16882_17072,(1),null);
encode_cols(infos_17074,source_idx_17004,line_17052,col_17073);

var G__17075 = cljs.core.next(seq__16875_17066__$1);
var G__17076 = null;
var G__17077 = (0);
var G__17078 = (0);
seq__16875_17054 = G__17075;
chunk__16876_17055 = G__17076;
count__16877_17056 = G__17077;
i__16878_17057 = G__17078;
continue;
}
} else {
}
}
break;
}

var G__17079 = cljs.core.next(seq__16855_17045__$1);
var G__17080 = null;
var G__17081 = (0);
var G__17082 = (0);
seq__16855_17008 = G__17079;
chunk__16856_17009 = G__17080;
count__16857_17010 = G__17081;
i__16858_17011 = G__17082;
continue;
}
} else {
}
}
break;
}

var G__17083 = cljs.core.next(seq__16809_16997__$1);
var G__17084 = null;
var G__17085 = (0);
var G__17086 = (0);
seq__16809_16908 = G__17083;
chunk__16810_16909 = G__17084;
count__16811_16910 = G__17085;
i__16812_16911 = G__17086;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__16885 = ({"version": (3), "file": cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((cljs.core.cst$kw$source_DASH_map_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__16802_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16802_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__16803_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__16803_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__16804_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__16804_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts))){
var G__16886 = G__16885;
var G__16887_17087 = G__16886;
var G__16888_17088 = "sourcesContent";
var G__16889_17089 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__16887_17087,G__16888_17088,G__16889_17089);

return G__16886;
} else {
return G__16885;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__17090 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17090,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17090,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__17093 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17093,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17093,(1),null);
var G__17099 = cljs.core.next(col_map_seq);
var G__17100 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__17093,col,infos,vec__17090,line,col_map){
return (function (v,p__17096){
var map__17097 = p__17096;
var map__17097__$1 = ((((!((map__17097 == null)))?((((map__17097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17097):map__17097);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17097__$1,cljs.core.cst$kw$gline);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17097__$1,cljs.core.cst$kw$gcol);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__17093,col,infos,vec__17090,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__17099;
new_cols = G__17100;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__17101 = cljs.core.next(line_map_seq);
var G__17102 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__17101;
new_lines = G__17102;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__17103_17165 = cljs.core.seq(reverse_map);
var chunk__17104_17166 = null;
var count__17105_17167 = (0);
var i__17106_17168 = (0);
while(true){
if((i__17106_17168 < count__17105_17167)){
var vec__17107_17169 = chunk__17104_17166.cljs$core$IIndexed$_nth$arity$2(null,i__17106_17168);
var line_17170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17107_17169,(0),null);
var columns_17171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17107_17169,(1),null);
var seq__17110_17172 = cljs.core.seq(columns_17171);
var chunk__17111_17173 = null;
var count__17112_17174 = (0);
var i__17113_17175 = (0);
while(true){
if((i__17113_17175 < count__17112_17174)){
var vec__17114_17176 = chunk__17111_17173.cljs$core$IIndexed$_nth$arity$2(null,i__17113_17175);
var column_17177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17114_17176,(0),null);
var column_info_17178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17114_17176,(1),null);
var seq__17117_17179 = cljs.core.seq(column_info_17178);
var chunk__17118_17180 = null;
var count__17119_17181 = (0);
var i__17120_17182 = (0);
while(true){
if((i__17120_17182 < count__17119_17181)){
var map__17121_17183 = chunk__17118_17180.cljs$core$IIndexed$_nth$arity$2(null,i__17120_17182);
var map__17121_17184__$1 = ((((!((map__17121_17183 == null)))?((((map__17121_17183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17121_17183.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17121_17183):map__17121_17183);
var gline_17185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17121_17184__$1,cljs.core.cst$kw$gline);
var gcol_17186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17121_17184__$1,cljs.core.cst$kw$gcol);
var name_17187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17121_17184__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17185], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17117_17179,chunk__17118_17180,count__17119_17181,i__17120_17182,seq__17110_17172,chunk__17111_17173,count__17112_17174,i__17113_17175,seq__17103_17165,chunk__17104_17166,count__17105_17167,i__17106_17168,map__17121_17183,map__17121_17184__$1,gline_17185,gcol_17186,name_17187,vec__17114_17176,column_17177,column_info_17178,vec__17107_17169,line_17170,columns_17171,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17186], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_17170,cljs.core.cst$kw$col,column_17177,cljs.core.cst$kw$name,name_17187], null));
});})(seq__17117_17179,chunk__17118_17180,count__17119_17181,i__17120_17182,seq__17110_17172,chunk__17111_17173,count__17112_17174,i__17113_17175,seq__17103_17165,chunk__17104_17166,count__17105_17167,i__17106_17168,map__17121_17183,map__17121_17184__$1,gline_17185,gcol_17186,name_17187,vec__17114_17176,column_17177,column_info_17178,vec__17107_17169,line_17170,columns_17171,inverted))
,cljs.core.sorted_map()));

var G__17188 = seq__17117_17179;
var G__17189 = chunk__17118_17180;
var G__17190 = count__17119_17181;
var G__17191 = (i__17120_17182 + (1));
seq__17117_17179 = G__17188;
chunk__17118_17180 = G__17189;
count__17119_17181 = G__17190;
i__17120_17182 = G__17191;
continue;
} else {
var temp__5457__auto___17192 = cljs.core.seq(seq__17117_17179);
if(temp__5457__auto___17192){
var seq__17117_17193__$1 = temp__5457__auto___17192;
if(cljs.core.chunked_seq_QMARK_(seq__17117_17193__$1)){
var c__9739__auto___17194 = cljs.core.chunk_first(seq__17117_17193__$1);
var G__17195 = cljs.core.chunk_rest(seq__17117_17193__$1);
var G__17196 = c__9739__auto___17194;
var G__17197 = cljs.core.count(c__9739__auto___17194);
var G__17198 = (0);
seq__17117_17179 = G__17195;
chunk__17118_17180 = G__17196;
count__17119_17181 = G__17197;
i__17120_17182 = G__17198;
continue;
} else {
var map__17123_17199 = cljs.core.first(seq__17117_17193__$1);
var map__17123_17200__$1 = ((((!((map__17123_17199 == null)))?((((map__17123_17199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17123_17199.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17123_17199):map__17123_17199);
var gline_17201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17123_17200__$1,cljs.core.cst$kw$gline);
var gcol_17202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17123_17200__$1,cljs.core.cst$kw$gcol);
var name_17203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17123_17200__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17201], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17117_17179,chunk__17118_17180,count__17119_17181,i__17120_17182,seq__17110_17172,chunk__17111_17173,count__17112_17174,i__17113_17175,seq__17103_17165,chunk__17104_17166,count__17105_17167,i__17106_17168,map__17123_17199,map__17123_17200__$1,gline_17201,gcol_17202,name_17203,seq__17117_17193__$1,temp__5457__auto___17192,vec__17114_17176,column_17177,column_info_17178,vec__17107_17169,line_17170,columns_17171,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17202], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_17170,cljs.core.cst$kw$col,column_17177,cljs.core.cst$kw$name,name_17203], null));
});})(seq__17117_17179,chunk__17118_17180,count__17119_17181,i__17120_17182,seq__17110_17172,chunk__17111_17173,count__17112_17174,i__17113_17175,seq__17103_17165,chunk__17104_17166,count__17105_17167,i__17106_17168,map__17123_17199,map__17123_17200__$1,gline_17201,gcol_17202,name_17203,seq__17117_17193__$1,temp__5457__auto___17192,vec__17114_17176,column_17177,column_info_17178,vec__17107_17169,line_17170,columns_17171,inverted))
,cljs.core.sorted_map()));

var G__17204 = cljs.core.next(seq__17117_17193__$1);
var G__17205 = null;
var G__17206 = (0);
var G__17207 = (0);
seq__17117_17179 = G__17204;
chunk__17118_17180 = G__17205;
count__17119_17181 = G__17206;
i__17120_17182 = G__17207;
continue;
}
} else {
}
}
break;
}

var G__17208 = seq__17110_17172;
var G__17209 = chunk__17111_17173;
var G__17210 = count__17112_17174;
var G__17211 = (i__17113_17175 + (1));
seq__17110_17172 = G__17208;
chunk__17111_17173 = G__17209;
count__17112_17174 = G__17210;
i__17113_17175 = G__17211;
continue;
} else {
var temp__5457__auto___17212 = cljs.core.seq(seq__17110_17172);
if(temp__5457__auto___17212){
var seq__17110_17213__$1 = temp__5457__auto___17212;
if(cljs.core.chunked_seq_QMARK_(seq__17110_17213__$1)){
var c__9739__auto___17214 = cljs.core.chunk_first(seq__17110_17213__$1);
var G__17215 = cljs.core.chunk_rest(seq__17110_17213__$1);
var G__17216 = c__9739__auto___17214;
var G__17217 = cljs.core.count(c__9739__auto___17214);
var G__17218 = (0);
seq__17110_17172 = G__17215;
chunk__17111_17173 = G__17216;
count__17112_17174 = G__17217;
i__17113_17175 = G__17218;
continue;
} else {
var vec__17125_17219 = cljs.core.first(seq__17110_17213__$1);
var column_17220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17125_17219,(0),null);
var column_info_17221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17125_17219,(1),null);
var seq__17128_17222 = cljs.core.seq(column_info_17221);
var chunk__17129_17223 = null;
var count__17130_17224 = (0);
var i__17131_17225 = (0);
while(true){
if((i__17131_17225 < count__17130_17224)){
var map__17132_17226 = chunk__17129_17223.cljs$core$IIndexed$_nth$arity$2(null,i__17131_17225);
var map__17132_17227__$1 = ((((!((map__17132_17226 == null)))?((((map__17132_17226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17132_17226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17132_17226):map__17132_17226);
var gline_17228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17132_17227__$1,cljs.core.cst$kw$gline);
var gcol_17229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17132_17227__$1,cljs.core.cst$kw$gcol);
var name_17230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17132_17227__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17228], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17128_17222,chunk__17129_17223,count__17130_17224,i__17131_17225,seq__17110_17172,chunk__17111_17173,count__17112_17174,i__17113_17175,seq__17103_17165,chunk__17104_17166,count__17105_17167,i__17106_17168,map__17132_17226,map__17132_17227__$1,gline_17228,gcol_17229,name_17230,vec__17125_17219,column_17220,column_info_17221,seq__17110_17213__$1,temp__5457__auto___17212,vec__17107_17169,line_17170,columns_17171,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17229], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_17170,cljs.core.cst$kw$col,column_17220,cljs.core.cst$kw$name,name_17230], null));
});})(seq__17128_17222,chunk__17129_17223,count__17130_17224,i__17131_17225,seq__17110_17172,chunk__17111_17173,count__17112_17174,i__17113_17175,seq__17103_17165,chunk__17104_17166,count__17105_17167,i__17106_17168,map__17132_17226,map__17132_17227__$1,gline_17228,gcol_17229,name_17230,vec__17125_17219,column_17220,column_info_17221,seq__17110_17213__$1,temp__5457__auto___17212,vec__17107_17169,line_17170,columns_17171,inverted))
,cljs.core.sorted_map()));

var G__17231 = seq__17128_17222;
var G__17232 = chunk__17129_17223;
var G__17233 = count__17130_17224;
var G__17234 = (i__17131_17225 + (1));
seq__17128_17222 = G__17231;
chunk__17129_17223 = G__17232;
count__17130_17224 = G__17233;
i__17131_17225 = G__17234;
continue;
} else {
var temp__5457__auto___17235__$1 = cljs.core.seq(seq__17128_17222);
if(temp__5457__auto___17235__$1){
var seq__17128_17236__$1 = temp__5457__auto___17235__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17128_17236__$1)){
var c__9739__auto___17237 = cljs.core.chunk_first(seq__17128_17236__$1);
var G__17238 = cljs.core.chunk_rest(seq__17128_17236__$1);
var G__17239 = c__9739__auto___17237;
var G__17240 = cljs.core.count(c__9739__auto___17237);
var G__17241 = (0);
seq__17128_17222 = G__17238;
chunk__17129_17223 = G__17239;
count__17130_17224 = G__17240;
i__17131_17225 = G__17241;
continue;
} else {
var map__17134_17242 = cljs.core.first(seq__17128_17236__$1);
var map__17134_17243__$1 = ((((!((map__17134_17242 == null)))?((((map__17134_17242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17134_17242.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17134_17242):map__17134_17242);
var gline_17244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17134_17243__$1,cljs.core.cst$kw$gline);
var gcol_17245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17134_17243__$1,cljs.core.cst$kw$gcol);
var name_17246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17134_17243__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17244], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17128_17222,chunk__17129_17223,count__17130_17224,i__17131_17225,seq__17110_17172,chunk__17111_17173,count__17112_17174,i__17113_17175,seq__17103_17165,chunk__17104_17166,count__17105_17167,i__17106_17168,map__17134_17242,map__17134_17243__$1,gline_17244,gcol_17245,name_17246,seq__17128_17236__$1,temp__5457__auto___17235__$1,vec__17125_17219,column_17220,column_info_17221,seq__17110_17213__$1,temp__5457__auto___17212,vec__17107_17169,line_17170,columns_17171,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17245], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_17170,cljs.core.cst$kw$col,column_17220,cljs.core.cst$kw$name,name_17246], null));
});})(seq__17128_17222,chunk__17129_17223,count__17130_17224,i__17131_17225,seq__17110_17172,chunk__17111_17173,count__17112_17174,i__17113_17175,seq__17103_17165,chunk__17104_17166,count__17105_17167,i__17106_17168,map__17134_17242,map__17134_17243__$1,gline_17244,gcol_17245,name_17246,seq__17128_17236__$1,temp__5457__auto___17235__$1,vec__17125_17219,column_17220,column_info_17221,seq__17110_17213__$1,temp__5457__auto___17212,vec__17107_17169,line_17170,columns_17171,inverted))
,cljs.core.sorted_map()));

var G__17247 = cljs.core.next(seq__17128_17236__$1);
var G__17248 = null;
var G__17249 = (0);
var G__17250 = (0);
seq__17128_17222 = G__17247;
chunk__17129_17223 = G__17248;
count__17130_17224 = G__17249;
i__17131_17225 = G__17250;
continue;
}
} else {
}
}
break;
}

var G__17251 = cljs.core.next(seq__17110_17213__$1);
var G__17252 = null;
var G__17253 = (0);
var G__17254 = (0);
seq__17110_17172 = G__17251;
chunk__17111_17173 = G__17252;
count__17112_17174 = G__17253;
i__17113_17175 = G__17254;
continue;
}
} else {
}
}
break;
}

var G__17255 = seq__17103_17165;
var G__17256 = chunk__17104_17166;
var G__17257 = count__17105_17167;
var G__17258 = (i__17106_17168 + (1));
seq__17103_17165 = G__17255;
chunk__17104_17166 = G__17256;
count__17105_17167 = G__17257;
i__17106_17168 = G__17258;
continue;
} else {
var temp__5457__auto___17259 = cljs.core.seq(seq__17103_17165);
if(temp__5457__auto___17259){
var seq__17103_17260__$1 = temp__5457__auto___17259;
if(cljs.core.chunked_seq_QMARK_(seq__17103_17260__$1)){
var c__9739__auto___17261 = cljs.core.chunk_first(seq__17103_17260__$1);
var G__17262 = cljs.core.chunk_rest(seq__17103_17260__$1);
var G__17263 = c__9739__auto___17261;
var G__17264 = cljs.core.count(c__9739__auto___17261);
var G__17265 = (0);
seq__17103_17165 = G__17262;
chunk__17104_17166 = G__17263;
count__17105_17167 = G__17264;
i__17106_17168 = G__17265;
continue;
} else {
var vec__17136_17266 = cljs.core.first(seq__17103_17260__$1);
var line_17267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17136_17266,(0),null);
var columns_17268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17136_17266,(1),null);
var seq__17139_17269 = cljs.core.seq(columns_17268);
var chunk__17140_17270 = null;
var count__17141_17271 = (0);
var i__17142_17272 = (0);
while(true){
if((i__17142_17272 < count__17141_17271)){
var vec__17143_17273 = chunk__17140_17270.cljs$core$IIndexed$_nth$arity$2(null,i__17142_17272);
var column_17274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17143_17273,(0),null);
var column_info_17275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17143_17273,(1),null);
var seq__17146_17276 = cljs.core.seq(column_info_17275);
var chunk__17147_17277 = null;
var count__17148_17278 = (0);
var i__17149_17279 = (0);
while(true){
if((i__17149_17279 < count__17148_17278)){
var map__17150_17280 = chunk__17147_17277.cljs$core$IIndexed$_nth$arity$2(null,i__17149_17279);
var map__17150_17281__$1 = ((((!((map__17150_17280 == null)))?((((map__17150_17280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17150_17280.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17150_17280):map__17150_17280);
var gline_17282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17150_17281__$1,cljs.core.cst$kw$gline);
var gcol_17283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17150_17281__$1,cljs.core.cst$kw$gcol);
var name_17284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17150_17281__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17282], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17146_17276,chunk__17147_17277,count__17148_17278,i__17149_17279,seq__17139_17269,chunk__17140_17270,count__17141_17271,i__17142_17272,seq__17103_17165,chunk__17104_17166,count__17105_17167,i__17106_17168,map__17150_17280,map__17150_17281__$1,gline_17282,gcol_17283,name_17284,vec__17143_17273,column_17274,column_info_17275,vec__17136_17266,line_17267,columns_17268,seq__17103_17260__$1,temp__5457__auto___17259,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17283], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_17267,cljs.core.cst$kw$col,column_17274,cljs.core.cst$kw$name,name_17284], null));
});})(seq__17146_17276,chunk__17147_17277,count__17148_17278,i__17149_17279,seq__17139_17269,chunk__17140_17270,count__17141_17271,i__17142_17272,seq__17103_17165,chunk__17104_17166,count__17105_17167,i__17106_17168,map__17150_17280,map__17150_17281__$1,gline_17282,gcol_17283,name_17284,vec__17143_17273,column_17274,column_info_17275,vec__17136_17266,line_17267,columns_17268,seq__17103_17260__$1,temp__5457__auto___17259,inverted))
,cljs.core.sorted_map()));

var G__17285 = seq__17146_17276;
var G__17286 = chunk__17147_17277;
var G__17287 = count__17148_17278;
var G__17288 = (i__17149_17279 + (1));
seq__17146_17276 = G__17285;
chunk__17147_17277 = G__17286;
count__17148_17278 = G__17287;
i__17149_17279 = G__17288;
continue;
} else {
var temp__5457__auto___17289__$1 = cljs.core.seq(seq__17146_17276);
if(temp__5457__auto___17289__$1){
var seq__17146_17290__$1 = temp__5457__auto___17289__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17146_17290__$1)){
var c__9739__auto___17291 = cljs.core.chunk_first(seq__17146_17290__$1);
var G__17292 = cljs.core.chunk_rest(seq__17146_17290__$1);
var G__17293 = c__9739__auto___17291;
var G__17294 = cljs.core.count(c__9739__auto___17291);
var G__17295 = (0);
seq__17146_17276 = G__17292;
chunk__17147_17277 = G__17293;
count__17148_17278 = G__17294;
i__17149_17279 = G__17295;
continue;
} else {
var map__17152_17296 = cljs.core.first(seq__17146_17290__$1);
var map__17152_17297__$1 = ((((!((map__17152_17296 == null)))?((((map__17152_17296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17152_17296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17152_17296):map__17152_17296);
var gline_17298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17152_17297__$1,cljs.core.cst$kw$gline);
var gcol_17299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17152_17297__$1,cljs.core.cst$kw$gcol);
var name_17300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17152_17297__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17298], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17146_17276,chunk__17147_17277,count__17148_17278,i__17149_17279,seq__17139_17269,chunk__17140_17270,count__17141_17271,i__17142_17272,seq__17103_17165,chunk__17104_17166,count__17105_17167,i__17106_17168,map__17152_17296,map__17152_17297__$1,gline_17298,gcol_17299,name_17300,seq__17146_17290__$1,temp__5457__auto___17289__$1,vec__17143_17273,column_17274,column_info_17275,vec__17136_17266,line_17267,columns_17268,seq__17103_17260__$1,temp__5457__auto___17259,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17299], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_17267,cljs.core.cst$kw$col,column_17274,cljs.core.cst$kw$name,name_17300], null));
});})(seq__17146_17276,chunk__17147_17277,count__17148_17278,i__17149_17279,seq__17139_17269,chunk__17140_17270,count__17141_17271,i__17142_17272,seq__17103_17165,chunk__17104_17166,count__17105_17167,i__17106_17168,map__17152_17296,map__17152_17297__$1,gline_17298,gcol_17299,name_17300,seq__17146_17290__$1,temp__5457__auto___17289__$1,vec__17143_17273,column_17274,column_info_17275,vec__17136_17266,line_17267,columns_17268,seq__17103_17260__$1,temp__5457__auto___17259,inverted))
,cljs.core.sorted_map()));

var G__17301 = cljs.core.next(seq__17146_17290__$1);
var G__17302 = null;
var G__17303 = (0);
var G__17304 = (0);
seq__17146_17276 = G__17301;
chunk__17147_17277 = G__17302;
count__17148_17278 = G__17303;
i__17149_17279 = G__17304;
continue;
}
} else {
}
}
break;
}

var G__17305 = seq__17139_17269;
var G__17306 = chunk__17140_17270;
var G__17307 = count__17141_17271;
var G__17308 = (i__17142_17272 + (1));
seq__17139_17269 = G__17305;
chunk__17140_17270 = G__17306;
count__17141_17271 = G__17307;
i__17142_17272 = G__17308;
continue;
} else {
var temp__5457__auto___17309__$1 = cljs.core.seq(seq__17139_17269);
if(temp__5457__auto___17309__$1){
var seq__17139_17310__$1 = temp__5457__auto___17309__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17139_17310__$1)){
var c__9739__auto___17311 = cljs.core.chunk_first(seq__17139_17310__$1);
var G__17312 = cljs.core.chunk_rest(seq__17139_17310__$1);
var G__17313 = c__9739__auto___17311;
var G__17314 = cljs.core.count(c__9739__auto___17311);
var G__17315 = (0);
seq__17139_17269 = G__17312;
chunk__17140_17270 = G__17313;
count__17141_17271 = G__17314;
i__17142_17272 = G__17315;
continue;
} else {
var vec__17154_17316 = cljs.core.first(seq__17139_17310__$1);
var column_17317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17154_17316,(0),null);
var column_info_17318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17154_17316,(1),null);
var seq__17157_17319 = cljs.core.seq(column_info_17318);
var chunk__17158_17320 = null;
var count__17159_17321 = (0);
var i__17160_17322 = (0);
while(true){
if((i__17160_17322 < count__17159_17321)){
var map__17161_17323 = chunk__17158_17320.cljs$core$IIndexed$_nth$arity$2(null,i__17160_17322);
var map__17161_17324__$1 = ((((!((map__17161_17323 == null)))?((((map__17161_17323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17161_17323.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17161_17323):map__17161_17323);
var gline_17325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17161_17324__$1,cljs.core.cst$kw$gline);
var gcol_17326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17161_17324__$1,cljs.core.cst$kw$gcol);
var name_17327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17161_17324__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17325], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17157_17319,chunk__17158_17320,count__17159_17321,i__17160_17322,seq__17139_17269,chunk__17140_17270,count__17141_17271,i__17142_17272,seq__17103_17165,chunk__17104_17166,count__17105_17167,i__17106_17168,map__17161_17323,map__17161_17324__$1,gline_17325,gcol_17326,name_17327,vec__17154_17316,column_17317,column_info_17318,seq__17139_17310__$1,temp__5457__auto___17309__$1,vec__17136_17266,line_17267,columns_17268,seq__17103_17260__$1,temp__5457__auto___17259,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17326], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_17267,cljs.core.cst$kw$col,column_17317,cljs.core.cst$kw$name,name_17327], null));
});})(seq__17157_17319,chunk__17158_17320,count__17159_17321,i__17160_17322,seq__17139_17269,chunk__17140_17270,count__17141_17271,i__17142_17272,seq__17103_17165,chunk__17104_17166,count__17105_17167,i__17106_17168,map__17161_17323,map__17161_17324__$1,gline_17325,gcol_17326,name_17327,vec__17154_17316,column_17317,column_info_17318,seq__17139_17310__$1,temp__5457__auto___17309__$1,vec__17136_17266,line_17267,columns_17268,seq__17103_17260__$1,temp__5457__auto___17259,inverted))
,cljs.core.sorted_map()));

var G__17328 = seq__17157_17319;
var G__17329 = chunk__17158_17320;
var G__17330 = count__17159_17321;
var G__17331 = (i__17160_17322 + (1));
seq__17157_17319 = G__17328;
chunk__17158_17320 = G__17329;
count__17159_17321 = G__17330;
i__17160_17322 = G__17331;
continue;
} else {
var temp__5457__auto___17332__$2 = cljs.core.seq(seq__17157_17319);
if(temp__5457__auto___17332__$2){
var seq__17157_17333__$1 = temp__5457__auto___17332__$2;
if(cljs.core.chunked_seq_QMARK_(seq__17157_17333__$1)){
var c__9739__auto___17334 = cljs.core.chunk_first(seq__17157_17333__$1);
var G__17335 = cljs.core.chunk_rest(seq__17157_17333__$1);
var G__17336 = c__9739__auto___17334;
var G__17337 = cljs.core.count(c__9739__auto___17334);
var G__17338 = (0);
seq__17157_17319 = G__17335;
chunk__17158_17320 = G__17336;
count__17159_17321 = G__17337;
i__17160_17322 = G__17338;
continue;
} else {
var map__17163_17339 = cljs.core.first(seq__17157_17333__$1);
var map__17163_17340__$1 = ((((!((map__17163_17339 == null)))?((((map__17163_17339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17163_17339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17163_17339):map__17163_17339);
var gline_17341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17163_17340__$1,cljs.core.cst$kw$gline);
var gcol_17342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17163_17340__$1,cljs.core.cst$kw$gcol);
var name_17343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17163_17340__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17341], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17157_17319,chunk__17158_17320,count__17159_17321,i__17160_17322,seq__17139_17269,chunk__17140_17270,count__17141_17271,i__17142_17272,seq__17103_17165,chunk__17104_17166,count__17105_17167,i__17106_17168,map__17163_17339,map__17163_17340__$1,gline_17341,gcol_17342,name_17343,seq__17157_17333__$1,temp__5457__auto___17332__$2,vec__17154_17316,column_17317,column_info_17318,seq__17139_17310__$1,temp__5457__auto___17309__$1,vec__17136_17266,line_17267,columns_17268,seq__17103_17260__$1,temp__5457__auto___17259,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17342], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_17267,cljs.core.cst$kw$col,column_17317,cljs.core.cst$kw$name,name_17343], null));
});})(seq__17157_17319,chunk__17158_17320,count__17159_17321,i__17160_17322,seq__17139_17269,chunk__17140_17270,count__17141_17271,i__17142_17272,seq__17103_17165,chunk__17104_17166,count__17105_17167,i__17106_17168,map__17163_17339,map__17163_17340__$1,gline_17341,gcol_17342,name_17343,seq__17157_17333__$1,temp__5457__auto___17332__$2,vec__17154_17316,column_17317,column_info_17318,seq__17139_17310__$1,temp__5457__auto___17309__$1,vec__17136_17266,line_17267,columns_17268,seq__17103_17260__$1,temp__5457__auto___17259,inverted))
,cljs.core.sorted_map()));

var G__17344 = cljs.core.next(seq__17157_17333__$1);
var G__17345 = null;
var G__17346 = (0);
var G__17347 = (0);
seq__17157_17319 = G__17344;
chunk__17158_17320 = G__17345;
count__17159_17321 = G__17346;
i__17160_17322 = G__17347;
continue;
}
} else {
}
}
break;
}

var G__17348 = cljs.core.next(seq__17139_17310__$1);
var G__17349 = null;
var G__17350 = (0);
var G__17351 = (0);
seq__17139_17269 = G__17348;
chunk__17140_17270 = G__17349;
count__17141_17271 = G__17350;
i__17142_17272 = G__17351;
continue;
}
} else {
}
}
break;
}

var G__17352 = cljs.core.next(seq__17103_17260__$1);
var G__17353 = null;
var G__17354 = (0);
var G__17355 = (0);
seq__17103_17165 = G__17352;
chunk__17104_17166 = G__17353;
count__17105_17167 = G__17354;
i__17106_17168 = G__17355;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
