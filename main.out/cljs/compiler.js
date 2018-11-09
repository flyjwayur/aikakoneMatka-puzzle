// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ecmascript5,cljs.core.cst$kw$ecmascript5_DASH_strict,cljs.core.cst$kw$ecmascript6,cljs.core.cst$kw$ecmascript6_DASH_strict,cljs.core.cst$kw$ecmascript_DASH_2015,cljs.core.cst$kw$ecmascript6_DASH_typed,cljs.core.cst$kw$ecmascript_DASH_2016,cljs.core.cst$kw$ecmascript_DASH_2017,cljs.core.cst$kw$ecmascript_DASH_next], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__17374 = s;
var map__17374__$1 = ((((!((map__17374 == null)))?((((map__17374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17374.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17374):map__17374);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17374__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17374__$1,cljs.core.cst$kw$info);
var d = (0);
var G__17377 = info;
var map__17378 = G__17377;
var map__17378__$1 = ((((!((map__17378 == null)))?((((map__17378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17378.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17378):map__17378);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17378__$1,cljs.core.cst$kw$shadow);
var d__$1 = d;
var G__17377__$1 = G__17377;
while(true){
var d__$2 = d__$1;
var map__17380 = G__17377__$1;
var map__17380__$1 = ((((!((map__17380 == null)))?((((map__17380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17380):map__17380);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17380__$1,cljs.core.cst$kw$shadow);
if(cljs.core.truth_(shadow__$1)){
var G__17382 = (d__$2 + (1));
var G__17383 = shadow__$1;
d__$1 = G__17382;
G__17377__$1 = G__17383;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__17384){
var map__17385 = p__17384;
var map__17385__$1 = ((((!((map__17385 == null)))?((((map__17385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17385.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17385):map__17385);
var name_var = map__17385__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17385__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17385__$1,cljs.core.cst$kw$info);
var name__$1 = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__17387 = info;
var map__17387__$1 = ((((!((map__17387 == null)))?((((map__17387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17387):map__17387);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17387__$1,cljs.core.cst$kw$ns);
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17387__$1,cljs.core.cst$kw$fn_DASH_scope);
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.cst$kw$name),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__17389 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__17389) : cljs.compiler.munge.call(null,G__17389));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__17391 = arguments.length;
switch (G__17391) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(name_var);
var field = cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(name_var);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(name_var);
if(!((cljs.core.cst$kw$fn_DASH_self_DASH_name.cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = cljs.core.munge_str(ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__17393 = cp;
switch (G__17393) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__17395_17399 = cljs.core.seq(s);
var chunk__17396_17400 = null;
var count__17397_17401 = (0);
var i__17398_17402 = (0);
while(true){
if((i__17398_17402 < count__17397_17401)){
var c_17403 = chunk__17396_17400.cljs$core$IIndexed$_nth$arity$2(null,i__17398_17402);
sb.append(cljs.compiler.escape_char(c_17403));

var G__17404 = seq__17395_17399;
var G__17405 = chunk__17396_17400;
var G__17406 = count__17397_17401;
var G__17407 = (i__17398_17402 + (1));
seq__17395_17399 = G__17404;
chunk__17396_17400 = G__17405;
count__17397_17401 = G__17406;
i__17398_17402 = G__17407;
continue;
} else {
var temp__5457__auto___17408 = cljs.core.seq(seq__17395_17399);
if(temp__5457__auto___17408){
var seq__17395_17409__$1 = temp__5457__auto___17408;
if(cljs.core.chunked_seq_QMARK_(seq__17395_17409__$1)){
var c__9739__auto___17410 = cljs.core.chunk_first(seq__17395_17409__$1);
var G__17411 = cljs.core.chunk_rest(seq__17395_17409__$1);
var G__17412 = c__9739__auto___17410;
var G__17413 = cljs.core.count(c__9739__auto___17410);
var G__17414 = (0);
seq__17395_17399 = G__17411;
chunk__17396_17400 = G__17412;
count__17397_17401 = G__17413;
i__17398_17402 = G__17414;
continue;
} else {
var c_17415 = cljs.core.first(seq__17395_17409__$1);
sb.append(cljs.compiler.escape_char(c_17415));

var G__17416 = cljs.core.next(seq__17395_17409__$1);
var G__17417 = null;
var G__17418 = (0);
var G__17419 = (0);
seq__17395_17399 = G__17416;
chunk__17396_17400 = G__17417;
count__17397_17401 = G__17418;
i__17398_17402 = G__17419;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__9863__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9864__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9865__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9866__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9867__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),cljs.core.cst$kw$op,cljs.core.cst$kw$default,hierarchy__9867__auto__,method_table__9863__auto__,prefer_table__9864__auto__,method_cache__9865__auto__,cached_hierarchy__9866__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__15600__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__15600__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__17420_17425 = ast;
var map__17420_17426__$1 = ((((!((map__17420_17425 == null)))?((((map__17420_17425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17420_17425.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17420_17425):map__17420_17425);
var env_17427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17420_17426__$1,cljs.core.cst$kw$env);
if(cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env_17427))){
var map__17422_17428 = env_17427;
var map__17422_17429__$1 = ((((!((map__17422_17428 == null)))?((((map__17422_17428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17422_17428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17422_17428):map__17422_17428);
var line_17430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17422_17429__$1,cljs.core.cst$kw$line);
var column_17431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17422_17429__$1,cljs.core.cst$kw$column);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__17422_17428,map__17422_17429__$1,line_17430,column_17431,map__17420_17425,map__17420_17426__$1,env_17427,val__15600__auto__){
return (function (m){
var minfo = (function (){var G__17424 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gcol,cljs.core.cst$kw$gen_DASH_col.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$gline,cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$var)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17424,cljs.core.cst$kw$name,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__17424;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_map,(line_17430 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__17422_17428,map__17422_17429__$1,line_17430,column_17431,map__17420_17425,map__17420_17426__$1,env_17427,val__15600__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_17431)?(column_17431 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__17422_17428,map__17422_17429__$1,line_17430,column_17431,map__17420_17425,map__17420_17426__$1,env_17427,val__15600__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__17422_17428,map__17422_17429__$1,line_17430,column_17431,map__17420_17425,map__17420_17426__$1,env_17427,val__15600__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__17422_17428,map__17422_17429__$1,line_17430,column_17431,map__17420_17425,map__17420_17426__$1,env_17427,val__15600__auto__))
,cljs.core.sorted_map()));
});})(map__17422_17428,map__17422_17429__$1,line_17430,column_17431,map__17420_17425,map__17420_17426__$1,env_17427,val__15600__auto__))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
}finally {if((val__15600__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__10094__auto__ = [];
var len__10087__auto___17438 = arguments.length;
var i__10088__auto___17439 = (0);
while(true){
if((i__10088__auto___17439 < len__10087__auto___17438)){
args__10094__auto__.push((arguments[i__10088__auto___17439]));

var G__17440 = (i__10088__auto___17439 + (1));
i__10088__auto___17439 = G__17440;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__17434_17441 = cljs.core.seq(xs);
var chunk__17435_17442 = null;
var count__17436_17443 = (0);
var i__17437_17444 = (0);
while(true){
if((i__17437_17444 < count__17436_17443)){
var x_17445 = chunk__17435_17442.cljs$core$IIndexed$_nth$arity$2(null,i__17437_17444);
if((x_17445 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_17445)){
cljs.compiler.emit(x_17445);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_17445)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_17445);
} else {
if(goog.isFunction(x_17445)){
(x_17445.cljs$core$IFn$_invoke$arity$0 ? x_17445.cljs$core$IFn$_invoke$arity$0() : x_17445.call(null));
} else {
var s_17446 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_17445], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__17434_17441,chunk__17435_17442,count__17436_17443,i__17437_17444,s_17446,x_17445){
return (function (p1__17432_SHARP_){
return (p1__17432_SHARP_ + cljs.core.count(s_17446));
});})(seq__17434_17441,chunk__17435_17442,count__17436_17443,i__17437_17444,s_17446,x_17445))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_17446], 0));

}
}
}
}

var G__17447 = seq__17434_17441;
var G__17448 = chunk__17435_17442;
var G__17449 = count__17436_17443;
var G__17450 = (i__17437_17444 + (1));
seq__17434_17441 = G__17447;
chunk__17435_17442 = G__17448;
count__17436_17443 = G__17449;
i__17437_17444 = G__17450;
continue;
} else {
var temp__5457__auto___17451 = cljs.core.seq(seq__17434_17441);
if(temp__5457__auto___17451){
var seq__17434_17452__$1 = temp__5457__auto___17451;
if(cljs.core.chunked_seq_QMARK_(seq__17434_17452__$1)){
var c__9739__auto___17453 = cljs.core.chunk_first(seq__17434_17452__$1);
var G__17454 = cljs.core.chunk_rest(seq__17434_17452__$1);
var G__17455 = c__9739__auto___17453;
var G__17456 = cljs.core.count(c__9739__auto___17453);
var G__17457 = (0);
seq__17434_17441 = G__17454;
chunk__17435_17442 = G__17455;
count__17436_17443 = G__17456;
i__17437_17444 = G__17457;
continue;
} else {
var x_17458 = cljs.core.first(seq__17434_17452__$1);
if((x_17458 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_17458)){
cljs.compiler.emit(x_17458);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_17458)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_17458);
} else {
if(goog.isFunction(x_17458)){
(x_17458.cljs$core$IFn$_invoke$arity$0 ? x_17458.cljs$core$IFn$_invoke$arity$0() : x_17458.call(null));
} else {
var s_17459 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_17458], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__17434_17441,chunk__17435_17442,count__17436_17443,i__17437_17444,s_17459,x_17458,seq__17434_17452__$1,temp__5457__auto___17451){
return (function (p1__17432_SHARP_){
return (p1__17432_SHARP_ + cljs.core.count(s_17459));
});})(seq__17434_17441,chunk__17435_17442,count__17436_17443,i__17437_17444,s_17459,x_17458,seq__17434_17452__$1,temp__5457__auto___17451))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_17459], 0));

}
}
}
}

var G__17460 = cljs.core.next(seq__17434_17452__$1);
var G__17461 = null;
var G__17462 = (0);
var G__17463 = (0);
seq__17434_17441 = G__17460;
chunk__17435_17442 = G__17461;
count__17436_17443 = G__17462;
i__17437_17444 = G__17463;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq17433){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17433));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__10094__auto__ = [];
var len__10087__auto___17469 = arguments.length;
var i__10088__auto___17470 = (0);
while(true){
if((i__10088__auto___17470 < len__10087__auto___17469)){
args__10094__auto__.push((arguments[i__10088__auto___17470]));

var G__17471 = (i__10088__auto___17470 + (1));
i__10088__auto___17470 = G__17471;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_17465_17472 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println();
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_17465_17472;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__17466){
var map__17467 = p__17466;
var map__17467__$1 = ((((!((map__17467 == null)))?((((map__17467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17467.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17467):map__17467);
var m = map__17467__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17467__$1,cljs.core.cst$kw$gen_DASH_line);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$gen_DASH_line,(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$gen_DASH_col,(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq17464){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17464));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__9935__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_17473_17475 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_17474_17476 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_17473_17475,_STAR_print_fn_STAR_17474_17476,sb__9935__auto__){
return (function (x__9936__auto__){
return sb__9935__auto__.append(x__9936__auto__);
});})(_STAR_print_newline_STAR_17473_17475,_STAR_print_fn_STAR_17474_17476,sb__9935__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17474_17476;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_17473_17475;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9935__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__9863__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9864__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9865__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9866__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9867__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant"),cljs.core.type,cljs.core.cst$kw$default,hierarchy__9867__auto__,method_table__9863__auto__,prefer_table__9864__auto__,method_cache__9865__auto__,cached_hierarchy__9866__auto__));
})();
}
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$constant,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["null"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NaN"], 0));
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((x > (0)))?"Infinity":"-Infinity")], 0));
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",x,")"], 0));

}
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x))], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(x)?"true":"false")], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(new RegExp(\"\"))"], 0));
} else {
var vec__17477 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17477,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17477,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17477,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern], 0));
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Keyword("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__17480_17482 = (cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__17480_17482) : cljs.compiler.emit_constant.call(null,G__17480_17482));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__17481_17483 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__17481_17483) : cljs.compiler.emit_constant.call(null,G__17481_17483));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Symbol("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(symstr) : cljs.compiler.emit_constant.call(null,symstr));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__17484_17485 = cljs.core.hash(sym);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__17484_17485) : cljs.compiler.emit_constant.call(null,G__17484_17485));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(null) : cljs.compiler.emit_constant.call(null,null));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5455__auto__ = (function (){var and__8796__auto__ = cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__8796__auto__)){
var G__17486 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__17486) : x.call(null,G__17486));
} else {
return and__8796__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5455__auto__ = (function (){var and__8796__auto__ = cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__8796__auto__)){
var G__17487 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__17487) : x.call(null,G__17487));
} else {
return and__8796__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new Date(",date.getTime(),")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$no_DASH_op,(function (m){
return null;
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var,(function (p__17489){
var map__17490 = p__17489;
var map__17490__$1 = ((((!((map__17490 == null)))?((((map__17490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17490):map__17490);
var ast = map__17490__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490__$1,cljs.core.cst$kw$info);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490__$1,cljs.core.cst$kw$env);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490__$1,cljs.core.cst$kw$form);
var temp__5455__auto__ = cljs.core.cst$kw$const_DASH_expr.cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,cljs.core.cst$kw$env,env));
} else {
var map__17492 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__17492__$1 = ((((!((map__17492 == null)))?((((map__17492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17492):map__17492);
var cenv = map__17492__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17492__$1,cljs.core.cst$kw$options);
var var_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_module_DASH_index,cljs.core.name(var_name),cljs.core.cst$kw$name], null));
var or__8808__auto__ = js_module_name;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(cljs.core.cst$kw$binding_DASH_form_QMARK_.cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__17494 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__8796__auto__ = (function (){var G__17496 = cljs.core.cst$kw$language_DASH_out.cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__17496) : cljs.compiler.es5_GT__EQ_.call(null,G__17496));
})();
if(cljs.core.truth_(and__8796__auto__)){
return !((cljs.core.namespace(var_name) == null));
} else {
return and__8796__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__17494,cljs.analyzer.es5_allowed);
} else {
return G__17494;
}
})();
var env__17366__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__17497 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$sym$js_SLASH__DASH_Infinity)){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__17497,reserved);
} else {
return G__17497;
}
})()], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var_DASH_special,(function (p__17498){
var map__17499 = p__17498;
var map__17499__$1 = ((((!((map__17499 == null)))?((((map__17499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17499):map__17499);
var arg = map__17499__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17499__$1,cljs.core.cst$kw$env);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17499__$1,cljs.core.cst$kw$var);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17499__$1,cljs.core.cst$kw$sym);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17499__$1,cljs.core.cst$kw$meta);
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__17501 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(var$);
var map__17501__$1 = ((((!((map__17501 == null)))?((((map__17501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17501):map__17501);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17501__$1,cljs.core.cst$kw$name);
var env__17366__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$meta,(function (p__17503){
var map__17504 = p__17503;
var map__17504__$1 = ((((!((map__17504 == null)))?((((map__17504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17504):map__17504);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17504__$1,cljs.core.cst$kw$expr);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17504__$1,cljs.core.cst$kw$meta);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17504__$1,cljs.core.cst$kw$env);
var env__17366__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.with_meta(",expr,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_((function (p1__17506_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__17506_SHARP_),cljs.core.cst$kw$constant);
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (p__17507){
var map__17508 = p__17507;
var map__17508__$1 = ((((!((map__17508 == null)))?((((map__17508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17508):map__17508);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17508__$1,cljs.core.cst$kw$env);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17508__$1,cljs.core.cst$kw$keys);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17508__$1,cljs.core.cst$kw$vals);
var env__17366__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if((cljs.core.count(keys) === (0))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentArrayMap.EMPTY"], 0));
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_(keys))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"])"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep(keys),"],[",cljs.compiler.comma_sep(vals),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$list,(function (p__17510){
var map__17511 = p__17510;
var map__17511__$1 = ((((!((map__17511 == null)))?((((map__17511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17511.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17511):map__17511);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17511__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17511__$1,cljs.core.cst$kw$env);
var env__17366__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.List.EMPTY"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.list(",cljs.compiler.comma_sep(items),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (p__17513){
var map__17514 = p__17513;
var map__17514__$1 = ((((!((map__17514 == null)))?((((map__17514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17514.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17514):map__17514);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17514__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17514__$1,cljs.core.cst$kw$env);
var env__17366__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_17516 = cljs.core.count(items);
if((cnt_17516 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentVector(null, ",cnt_17516,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_((function (p1__17517_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__17517_SHARP_),cljs.core.cst$kw$constant);
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set,(function (p__17518){
var map__17519 = p__17518;
var map__17519__$1 = ((((!((map__17519 == null)))?((((map__17519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17519):map__17519);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17519__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17519__$1,cljs.core.cst$kw$env);
var env__17366__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashSet.EMPTY"], 0));
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_(items))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"))),"], null), null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep(items),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js_DASH_value,(function (p__17521){
var map__17522 = p__17521;
var map__17522__$1 = ((((!((map__17522 == null)))?((((map__17522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17522):map__17522);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17522__$1,cljs.core.cst$kw$items);
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17522__$1,cljs.core.cst$kw$js_DASH_type);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17522__$1,cljs.core.cst$kw$env);
var env__17366__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,cljs.core.cst$kw$object)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["({"], 0));

var temp__5457__auto___17540 = cljs.core.seq(items);
if(temp__5457__auto___17540){
var items_17541__$1 = temp__5457__auto___17540;
var vec__17524_17542 = items_17541__$1;
var seq__17525_17543 = cljs.core.seq(vec__17524_17542);
var first__17526_17544 = cljs.core.first(seq__17525_17543);
var seq__17525_17545__$1 = cljs.core.next(seq__17525_17543);
var vec__17527_17546 = first__17526_17544;
var k_17547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17527_17546,(0),null);
var v_17548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17527_17546,(1),null);
var r_17549 = seq__17525_17545__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\"",cljs.core.name(k_17547),"\": ",v_17548], 0));

var seq__17530_17550 = cljs.core.seq(r_17549);
var chunk__17531_17551 = null;
var count__17532_17552 = (0);
var i__17533_17553 = (0);
while(true){
if((i__17533_17553 < count__17532_17552)){
var vec__17534_17554 = chunk__17531_17551.cljs$core$IIndexed$_nth$arity$2(null,i__17533_17553);
var k_17555__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17534_17554,(0),null);
var v_17556__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17534_17554,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", \"",cljs.core.name(k_17555__$1),"\": ",v_17556__$1], 0));

var G__17557 = seq__17530_17550;
var G__17558 = chunk__17531_17551;
var G__17559 = count__17532_17552;
var G__17560 = (i__17533_17553 + (1));
seq__17530_17550 = G__17557;
chunk__17531_17551 = G__17558;
count__17532_17552 = G__17559;
i__17533_17553 = G__17560;
continue;
} else {
var temp__5457__auto___17561__$1 = cljs.core.seq(seq__17530_17550);
if(temp__5457__auto___17561__$1){
var seq__17530_17562__$1 = temp__5457__auto___17561__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17530_17562__$1)){
var c__9739__auto___17563 = cljs.core.chunk_first(seq__17530_17562__$1);
var G__17564 = cljs.core.chunk_rest(seq__17530_17562__$1);
var G__17565 = c__9739__auto___17563;
var G__17566 = cljs.core.count(c__9739__auto___17563);
var G__17567 = (0);
seq__17530_17550 = G__17564;
chunk__17531_17551 = G__17565;
count__17532_17552 = G__17566;
i__17533_17553 = G__17567;
continue;
} else {
var vec__17537_17568 = cljs.core.first(seq__17530_17562__$1);
var k_17569__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17537_17568,(0),null);
var v_17570__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17537_17568,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", \"",cljs.core.name(k_17569__$1),"\": ",v_17570__$1], 0));

var G__17571 = cljs.core.next(seq__17530_17562__$1);
var G__17572 = null;
var G__17573 = (0);
var G__17574 = (0);
seq__17530_17550 = G__17571;
chunk__17531_17551 = G__17572;
count__17532_17552 = G__17573;
i__17533_17553 = G__17574;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[",cljs.compiler.comma_sep(items),"]"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$record_DASH_value,(function (p__17575){
var map__17576 = p__17575;
var map__17576__$1 = ((((!((map__17576 == null)))?((((map__17576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17576.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17576):map__17576);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17576__$1,cljs.core.cst$kw$items);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17576__$1,cljs.core.cst$kw$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17576__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17576__$1,cljs.core.cst$kw$env);
var env__17366__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns,".map__GT_",name,"(",items,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$constant,(function (p__17578){
var map__17579 = p__17578;
var map__17579__$1 = ((((!((map__17579 == null)))?((((map__17579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17579):map__17579);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17579__$1,cljs.core.cst$kw$form);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17579__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__17366__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(form) : cljs.compiler.emit_constant.call(null,form));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__17581){
var map__17582 = p__17581;
var map__17582__$1 = ((((!((map__17582 == null)))?((((map__17582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17582.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17582):map__17582);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17582__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17582__$1,cljs.core.cst$kw$form);
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17582__$1,cljs.core.cst$kw$const_DASH_expr);
var or__8808__auto__ = (function (){var and__8796__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$constant);
if(and__8796__auto__){
var and__8796__auto____$1 = form;
if(cljs.core.truth_(and__8796__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})();
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var and__8796__auto__ = !((const_expr == null));
if(and__8796__auto__){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return and__8796__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__17584){
var map__17585 = p__17584;
var map__17585__$1 = ((((!((map__17585 == null)))?((((map__17585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17585.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17585):map__17585);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17585__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17585__$1,cljs.core.cst$kw$form);
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17585__$1,cljs.core.cst$kw$const_DASH_expr);
var or__8808__auto__ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$constant)) && ((form === false) || ((form == null)));
if(or__8808__auto__){
return or__8808__auto__;
} else {
var and__8796__auto__ = !((const_expr == null));
if(and__8796__auto__){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return and__8796__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__8808__auto__ = (function (){var fexpr__17588 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null);
return (fexpr__17588.cljs$core$IFn$_invoke$arity$1 ? fexpr__17588.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__17588.call(null,tag));
})();
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$if,(function (p__17589){
var map__17590 = p__17589;
var map__17590__$1 = ((((!((map__17590 == null)))?((((map__17590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17590.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17590):map__17590);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17590__$1,cljs.core.cst$kw$test);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17590__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17590__$1,cljs.core.cst$kw$else);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17590__$1,cljs.core.cst$kw$env);
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17590__$1,cljs.core.cst$kw$unchecked);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__8808__auto__ = unchecked;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then], 0));
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([else$], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(cljs.core.truth_(",test,")){"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(",test,"){"], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,"} else {"], 0));

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([else$,"}"], 0));
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$case_STAR_,(function (p__17592){
var map__17593 = p__17592;
var map__17593__$1 = ((((!((map__17593 == null)))?((((map__17593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17593):map__17593);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17593__$1,cljs.core.cst$kw$v);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17593__$1,cljs.core.cst$kw$tests);
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17593__$1,cljs.core.cst$kw$thens);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17593__$1,cljs.core.cst$kw$default);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17593__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env),cljs.core.cst$kw$expr)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function(){"], 0));
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",gs,";"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["switch (",v,") {"], 0));

var seq__17595_17613 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__17596_17614 = null;
var count__17597_17615 = (0);
var i__17598_17616 = (0);
while(true){
if((i__17598_17616 < count__17597_17615)){
var vec__17599_17617 = chunk__17596_17614.cljs$core$IIndexed$_nth$arity$2(null,i__17598_17616);
var ts_17618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17599_17617,(0),null);
var then_17619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17599_17617,(1),null);
var seq__17602_17620 = cljs.core.seq(ts_17618);
var chunk__17603_17621 = null;
var count__17604_17622 = (0);
var i__17605_17623 = (0);
while(true){
if((i__17605_17623 < count__17604_17622)){
var test_17624 = chunk__17603_17621.cljs$core$IIndexed$_nth$arity$2(null,i__17605_17623);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_17624,":"], 0));

var G__17625 = seq__17602_17620;
var G__17626 = chunk__17603_17621;
var G__17627 = count__17604_17622;
var G__17628 = (i__17605_17623 + (1));
seq__17602_17620 = G__17625;
chunk__17603_17621 = G__17626;
count__17604_17622 = G__17627;
i__17605_17623 = G__17628;
continue;
} else {
var temp__5457__auto___17629 = cljs.core.seq(seq__17602_17620);
if(temp__5457__auto___17629){
var seq__17602_17630__$1 = temp__5457__auto___17629;
if(cljs.core.chunked_seq_QMARK_(seq__17602_17630__$1)){
var c__9739__auto___17631 = cljs.core.chunk_first(seq__17602_17630__$1);
var G__17632 = cljs.core.chunk_rest(seq__17602_17630__$1);
var G__17633 = c__9739__auto___17631;
var G__17634 = cljs.core.count(c__9739__auto___17631);
var G__17635 = (0);
seq__17602_17620 = G__17632;
chunk__17603_17621 = G__17633;
count__17604_17622 = G__17634;
i__17605_17623 = G__17635;
continue;
} else {
var test_17636 = cljs.core.first(seq__17602_17630__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_17636,":"], 0));

var G__17637 = cljs.core.next(seq__17602_17630__$1);
var G__17638 = null;
var G__17639 = (0);
var G__17640 = (0);
seq__17602_17620 = G__17637;
chunk__17603_17621 = G__17638;
count__17604_17622 = G__17639;
i__17605_17623 = G__17640;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",then_17619], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then_17619], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

var G__17641 = seq__17595_17613;
var G__17642 = chunk__17596_17614;
var G__17643 = count__17597_17615;
var G__17644 = (i__17598_17616 + (1));
seq__17595_17613 = G__17641;
chunk__17596_17614 = G__17642;
count__17597_17615 = G__17643;
i__17598_17616 = G__17644;
continue;
} else {
var temp__5457__auto___17645 = cljs.core.seq(seq__17595_17613);
if(temp__5457__auto___17645){
var seq__17595_17646__$1 = temp__5457__auto___17645;
if(cljs.core.chunked_seq_QMARK_(seq__17595_17646__$1)){
var c__9739__auto___17647 = cljs.core.chunk_first(seq__17595_17646__$1);
var G__17648 = cljs.core.chunk_rest(seq__17595_17646__$1);
var G__17649 = c__9739__auto___17647;
var G__17650 = cljs.core.count(c__9739__auto___17647);
var G__17651 = (0);
seq__17595_17613 = G__17648;
chunk__17596_17614 = G__17649;
count__17597_17615 = G__17650;
i__17598_17616 = G__17651;
continue;
} else {
var vec__17606_17652 = cljs.core.first(seq__17595_17646__$1);
var ts_17653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17606_17652,(0),null);
var then_17654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17606_17652,(1),null);
var seq__17609_17655 = cljs.core.seq(ts_17653);
var chunk__17610_17656 = null;
var count__17611_17657 = (0);
var i__17612_17658 = (0);
while(true){
if((i__17612_17658 < count__17611_17657)){
var test_17659 = chunk__17610_17656.cljs$core$IIndexed$_nth$arity$2(null,i__17612_17658);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_17659,":"], 0));

var G__17660 = seq__17609_17655;
var G__17661 = chunk__17610_17656;
var G__17662 = count__17611_17657;
var G__17663 = (i__17612_17658 + (1));
seq__17609_17655 = G__17660;
chunk__17610_17656 = G__17661;
count__17611_17657 = G__17662;
i__17612_17658 = G__17663;
continue;
} else {
var temp__5457__auto___17664__$1 = cljs.core.seq(seq__17609_17655);
if(temp__5457__auto___17664__$1){
var seq__17609_17665__$1 = temp__5457__auto___17664__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17609_17665__$1)){
var c__9739__auto___17666 = cljs.core.chunk_first(seq__17609_17665__$1);
var G__17667 = cljs.core.chunk_rest(seq__17609_17665__$1);
var G__17668 = c__9739__auto___17666;
var G__17669 = cljs.core.count(c__9739__auto___17666);
var G__17670 = (0);
seq__17609_17655 = G__17667;
chunk__17610_17656 = G__17668;
count__17611_17657 = G__17669;
i__17612_17658 = G__17670;
continue;
} else {
var test_17671 = cljs.core.first(seq__17609_17665__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_17671,":"], 0));

var G__17672 = cljs.core.next(seq__17609_17665__$1);
var G__17673 = null;
var G__17674 = (0);
var G__17675 = (0);
seq__17609_17655 = G__17672;
chunk__17610_17656 = G__17673;
count__17611_17657 = G__17674;
i__17612_17658 = G__17675;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",then_17654], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then_17654], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

var G__17676 = cljs.core.next(seq__17595_17646__$1);
var G__17677 = null;
var G__17678 = (0);
var G__17679 = (0);
seq__17595_17613 = G__17676;
chunk__17596_17614 = G__17677;
count__17597_17615 = G__17678;
i__17598_17616 = G__17679;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",default$], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",gs,";})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$throw,(function (p__17680){
var map__17681 = p__17680;
var map__17681__$1 = ((((!((map__17681 == null)))?((((map__17681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17681):map__17681);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17681__$1,cljs.core.cst$kw$throw);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17681__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function(){throw ",throw$,"})()"], 0));
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["throw ",throw$,";"], 0));
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__17684 = env;
var G__17685 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__17684,G__17685) : cljs.compiler.resolve_type.call(null,G__17684,G__17685));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__17686 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17686,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17686,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__17686,fstr,rstr,ret_t,axstr){
return (function (p1__17683_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__17683_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__17683_SHARP_));
});})(idx,vec__17686,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__17689 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17689),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__17689;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__17690 = env;
var G__17691 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__17690,G__17691) : cljs.compiler.resolve_type.call(null,G__17690,G__17691));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ts__$1,xs){
return (function (p1__17692_SHARP_){
return cljs.compiler.resolve_type(env,p1__17692_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__17693 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__17694 = cljs.core.seq(vec__17693);
var first__17695 = cljs.core.first(seq__17694);
var seq__17694__$1 = cljs.core.next(seq__17694);
var p = first__17695;
var first__17695__$1 = cljs.core.first(seq__17694__$1);
var seq__17694__$2 = cljs.core.next(seq__17694__$1);
var ts = first__17695__$1;
var first__17695__$2 = cljs.core.first(seq__17694__$2);
var seq__17694__$3 = cljs.core.next(seq__17694__$2);
var n = first__17695__$2;
var xs = seq__17694__$3;
if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__8796__auto__){
var and__8796__auto____$1 = ts;
if(cljs.core.truth_(and__8796__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__17696 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__17697 = cljs.core.seq(vec__17696);
var first__17698 = cljs.core.first(seq__17697);
var seq__17697__$1 = cljs.core.next(seq__17697);
var p = first__17698;
var first__17698__$1 = cljs.core.first(seq__17697__$1);
var seq__17697__$2 = cljs.core.next(seq__17697__$1);
var ts = first__17698__$1;
var xs = seq__17697__$2;
if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__8796__auto__){
var and__8796__auto____$1 = ts;
if(cljs.core.truth_(and__8796__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__17700 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$closure_DASH_warnings,cljs.core.cst$kw$check_DASH_types], null));
var fexpr__17699 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$warning,null,cljs.core.cst$kw$error,null], null), null);
return (fexpr__17699.cljs$core$IFn$_invoke$arity$1 ? fexpr__17699.cljs$core$IFn$_invoke$arity$1(G__17700) : fexpr__17699.call(null,G__17700));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__17703 = arguments.length;
switch (G__17703) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__17711 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__17701_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__17701_SHARP_);
} else {
return p1__17701_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var seq__17712 = cljs.core.seq(vec__17711);
var first__17713 = cljs.core.first(seq__17712);
var seq__17712__$1 = cljs.core.next(seq__17712);
var x = first__17713;
var ys = seq__17712__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(x,"*/","* /")], 0));

var seq__17714 = cljs.core.seq(ys);
var chunk__17715 = null;
var count__17716 = (0);
var i__17717 = (0);
while(true){
if((i__17717 < count__17716)){
var next_line = chunk__17715.cljs$core$IIndexed$_nth$arity$2(null,i__17717);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__17723 = seq__17714;
var G__17724 = chunk__17715;
var G__17725 = count__17716;
var G__17726 = (i__17717 + (1));
seq__17714 = G__17723;
chunk__17715 = G__17724;
count__17716 = G__17725;
i__17717 = G__17726;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__17714);
if(temp__5457__auto__){
var seq__17714__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17714__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__17714__$1);
var G__17727 = cljs.core.chunk_rest(seq__17714__$1);
var G__17728 = c__9739__auto__;
var G__17729 = cljs.core.count(c__9739__auto__);
var G__17730 = (0);
seq__17714 = G__17727;
chunk__17715 = G__17728;
count__17716 = G__17729;
i__17717 = G__17730;
continue;
} else {
var next_line = cljs.core.first(seq__17714__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__17731 = cljs.core.next(seq__17714__$1);
var G__17732 = null;
var G__17733 = (0);
var G__17734 = (0);
seq__17714 = G__17731;
chunk__17715 = G__17732;
count__17716 = G__17733;
i__17717 = G__17734;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

var seq__17718_17735 = cljs.core.seq(docs__$2);
var chunk__17719_17736 = null;
var count__17720_17737 = (0);
var i__17721_17738 = (0);
while(true){
if((i__17721_17738 < count__17720_17737)){
var e_17739 = chunk__17719_17736.cljs$core$IIndexed$_nth$arity$2(null,i__17721_17738);
if(cljs.core.truth_(e_17739)){
print_comment_lines(e_17739);
} else {
}

var G__17740 = seq__17718_17735;
var G__17741 = chunk__17719_17736;
var G__17742 = count__17720_17737;
var G__17743 = (i__17721_17738 + (1));
seq__17718_17735 = G__17740;
chunk__17719_17736 = G__17741;
count__17720_17737 = G__17742;
i__17721_17738 = G__17743;
continue;
} else {
var temp__5457__auto___17744 = cljs.core.seq(seq__17718_17735);
if(temp__5457__auto___17744){
var seq__17718_17745__$1 = temp__5457__auto___17744;
if(cljs.core.chunked_seq_QMARK_(seq__17718_17745__$1)){
var c__9739__auto___17746 = cljs.core.chunk_first(seq__17718_17745__$1);
var G__17747 = cljs.core.chunk_rest(seq__17718_17745__$1);
var G__17748 = c__9739__auto___17746;
var G__17749 = cljs.core.count(c__9739__auto___17746);
var G__17750 = (0);
seq__17718_17735 = G__17747;
chunk__17719_17736 = G__17748;
count__17720_17737 = G__17749;
i__17721_17738 = G__17750;
continue;
} else {
var e_17751 = cljs.core.first(seq__17718_17745__$1);
if(cljs.core.truth_(e_17751)){
print_comment_lines(e_17751);
} else {
}

var G__17752 = cljs.core.next(seq__17718_17745__$1);
var G__17753 = null;
var G__17754 = (0);
var G__17755 = (0);
seq__17718_17735 = G__17752;
chunk__17719_17736 = G__17753;
count__17720_17737 = G__17754;
i__17721_17738 = G__17755;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" */"], 0));
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$options);
var and__8796__auto__ = cljs.core.some(((function (opts){
return (function (p1__17757_SHARP_){
return goog.string.startsWith(p1__17757_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__8796__auto__)){
var and__8796__auto____$1 = opts;
if(cljs.core.truth_(and__8796__auto____$1)){
var and__8796__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$optimizations.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$none);
if(and__8796__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$closure_DASH_defines,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_(define))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return and__8796__auto____$2;
}
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$def,(function (p__17758){
var map__17759 = p__17758;
var map__17759__$1 = ((((!((map__17759 == null)))?((((map__17759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17759):map__17759);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17759__$1,cljs.core.cst$kw$name);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17759__$1,cljs.core.cst$kw$var);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17759__$1,cljs.core.cst$kw$init);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17759__$1,cljs.core.cst$kw$env);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17759__$1,cljs.core.cst$kw$doc);
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17759__$1,cljs.core.cst$kw$jsdoc);
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17759__$1,cljs.core.cst$kw$export);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17759__$1,cljs.core.cst$kw$test);
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17759__$1,cljs.core.cst$kw$var_DASH_ast);
if(cljs.core.truth_((function (){var or__8808__auto__ = init;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jsdoc,cljs.core.cst$kw$jsdoc.cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ("], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var$], 0));

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",(function (){var temp__5455__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5455__auto__)){
var define = temp__5455__auto__;
return define;
} else {
return init;
}
})()], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["; return ("], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$var_DASH_special,cljs.core.cst$kw$env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr)], null),var_ast], 0))], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");})()"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");"], 0));
} else {
}

if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__8796__auto__){
return test;
} else {
return and__8796__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var$,".cljs$lang$test = ",test,";"], 0));
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__17761){
var map__17762 = p__17761;
var map__17762__$1 = ((((!((map__17762 == null)))?((((map__17762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17762.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17762):map__17762);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17762__$1,cljs.core.cst$kw$name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17762__$1,cljs.core.cst$kw$params);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17762__$1,cljs.core.cst$kw$env);
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (",arglist,"){"], 0));

var seq__17764_17782 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__17765_17783 = null;
var count__17766_17784 = (0);
var i__17767_17785 = (0);
while(true){
if((i__17767_17785 < count__17766_17784)){
var vec__17768_17786 = chunk__17765_17783.cljs$core$IIndexed$_nth$arity$2(null,i__17767_17785);
var i_17787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17768_17786,(0),null);
var param_17788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17768_17786,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(param_17788);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist," = cljs.core.next(",arglist,");"], 0));

var G__17789 = seq__17764_17782;
var G__17790 = chunk__17765_17783;
var G__17791 = count__17766_17784;
var G__17792 = (i__17767_17785 + (1));
seq__17764_17782 = G__17789;
chunk__17765_17783 = G__17790;
count__17766_17784 = G__17791;
i__17767_17785 = G__17792;
continue;
} else {
var temp__5457__auto___17793 = cljs.core.seq(seq__17764_17782);
if(temp__5457__auto___17793){
var seq__17764_17794__$1 = temp__5457__auto___17793;
if(cljs.core.chunked_seq_QMARK_(seq__17764_17794__$1)){
var c__9739__auto___17795 = cljs.core.chunk_first(seq__17764_17794__$1);
var G__17796 = cljs.core.chunk_rest(seq__17764_17794__$1);
var G__17797 = c__9739__auto___17795;
var G__17798 = cljs.core.count(c__9739__auto___17795);
var G__17799 = (0);
seq__17764_17782 = G__17796;
chunk__17765_17783 = G__17797;
count__17766_17784 = G__17798;
i__17767_17785 = G__17799;
continue;
} else {
var vec__17771_17800 = cljs.core.first(seq__17764_17794__$1);
var i_17801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17771_17800,(0),null);
var param_17802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17771_17800,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(param_17802);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist," = cljs.core.next(",arglist,");"], 0));

var G__17803 = cljs.core.next(seq__17764_17794__$1);
var G__17804 = null;
var G__17805 = (0);
var G__17806 = (0);
seq__17764_17782 = G__17803;
chunk__17765_17783 = G__17804;
count__17766_17784 = G__17805;
i__17767_17785 = G__17806;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.rest(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name,"("], 0));

var seq__17774_17807 = cljs.core.seq(params);
var chunk__17775_17808 = null;
var count__17776_17809 = (0);
var i__17777_17810 = (0);
while(true){
if((i__17777_17810 < count__17776_17809)){
var param_17811 = chunk__17775_17808.cljs$core$IIndexed$_nth$arity$2(null,i__17777_17810);
cljs.compiler.emit(param_17811);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17811,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__17812 = seq__17774_17807;
var G__17813 = chunk__17775_17808;
var G__17814 = count__17776_17809;
var G__17815 = (i__17777_17810 + (1));
seq__17774_17807 = G__17812;
chunk__17775_17808 = G__17813;
count__17776_17809 = G__17814;
i__17777_17810 = G__17815;
continue;
} else {
var temp__5457__auto___17816 = cljs.core.seq(seq__17774_17807);
if(temp__5457__auto___17816){
var seq__17774_17817__$1 = temp__5457__auto___17816;
if(cljs.core.chunked_seq_QMARK_(seq__17774_17817__$1)){
var c__9739__auto___17818 = cljs.core.chunk_first(seq__17774_17817__$1);
var G__17819 = cljs.core.chunk_rest(seq__17774_17817__$1);
var G__17820 = c__9739__auto___17818;
var G__17821 = cljs.core.count(c__9739__auto___17818);
var G__17822 = (0);
seq__17774_17807 = G__17819;
chunk__17775_17808 = G__17820;
count__17776_17809 = G__17821;
i__17777_17810 = G__17822;
continue;
} else {
var param_17823 = cljs.core.first(seq__17774_17817__$1);
cljs.compiler.emit(param_17823);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17823,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__17824 = cljs.core.next(seq__17774_17817__$1);
var G__17825 = null;
var G__17826 = (0);
var G__17827 = (0);
seq__17774_17807 = G__17824;
chunk__17775_17808 = G__17825;
count__17776_17809 = G__17826;
i__17777_17810 = G__17827;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.seq(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name,"("], 0));

var seq__17778_17828 = cljs.core.seq(params);
var chunk__17779_17829 = null;
var count__17780_17830 = (0);
var i__17781_17831 = (0);
while(true){
if((i__17781_17831 < count__17780_17830)){
var param_17832 = chunk__17779_17829.cljs$core$IIndexed$_nth$arity$2(null,i__17781_17831);
cljs.compiler.emit(param_17832);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17832,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__17833 = seq__17778_17828;
var G__17834 = chunk__17779_17829;
var G__17835 = count__17780_17830;
var G__17836 = (i__17781_17831 + (1));
seq__17778_17828 = G__17833;
chunk__17779_17829 = G__17834;
count__17780_17830 = G__17835;
i__17781_17831 = G__17836;
continue;
} else {
var temp__5457__auto___17837 = cljs.core.seq(seq__17778_17828);
if(temp__5457__auto___17837){
var seq__17778_17838__$1 = temp__5457__auto___17837;
if(cljs.core.chunked_seq_QMARK_(seq__17778_17838__$1)){
var c__9739__auto___17839 = cljs.core.chunk_first(seq__17778_17838__$1);
var G__17840 = cljs.core.chunk_rest(seq__17778_17838__$1);
var G__17841 = c__9739__auto___17839;
var G__17842 = cljs.core.count(c__9739__auto___17839);
var G__17843 = (0);
seq__17778_17828 = G__17840;
chunk__17779_17829 = G__17841;
count__17780_17830 = G__17842;
i__17781_17831 = G__17843;
continue;
} else {
var param_17844 = cljs.core.first(seq__17778_17838__$1);
cljs.compiler.emit(param_17844);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17844,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__17845 = cljs.core.next(seq__17778_17838__$1);
var G__17846 = null;
var G__17847 = (0);
var G__17848 = (0);
seq__17778_17828 = G__17845;
chunk__17779_17829 = G__17846;
count__17780_17830 = G__17847;
i__17781_17831 = G__17848;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__17849 = cljs.core.seq(params);
var chunk__17850 = null;
var count__17851 = (0);
var i__17852 = (0);
while(true){
if((i__17852 < count__17851)){
var param = chunk__17850.cljs$core$IIndexed$_nth$arity$2(null,i__17852);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__17853 = seq__17849;
var G__17854 = chunk__17850;
var G__17855 = count__17851;
var G__17856 = (i__17852 + (1));
seq__17849 = G__17853;
chunk__17850 = G__17854;
count__17851 = G__17855;
i__17852 = G__17856;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__17849);
if(temp__5457__auto__){
var seq__17849__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17849__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__17849__$1);
var G__17857 = cljs.core.chunk_rest(seq__17849__$1);
var G__17858 = c__9739__auto__;
var G__17859 = cljs.core.count(c__9739__auto__);
var G__17860 = (0);
seq__17849 = G__17857;
chunk__17850 = G__17858;
count__17851 = G__17859;
i__17852 = G__17860;
continue;
} else {
var param = cljs.core.first(seq__17849__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__17861 = cljs.core.next(seq__17849__$1);
var G__17862 = null;
var G__17863 = (0);
var G__17864 = (0);
seq__17849 = G__17861;
chunk__17850 = G__17862;
count__17851 = G__17863;
i__17852 = G__17864;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__17865){
var map__17866 = p__17865;
var map__17866__$1 = ((((!((map__17866 == null)))?((((map__17866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17866.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17866):map__17866);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17866__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17866__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17866__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17866__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17866__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17866__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17866__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17866__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__17366__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"("], 0));

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__17868){
var map__17869 = p__17868;
var map__17869__$1 = ((((!((map__17869 == null)))?((((map__17869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17869):map__17869);
var f = map__17869__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17869__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17869__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17869__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17869__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17869__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17869__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17869__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17869__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__17366__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

var name_17879__$1 = (function (){var or__8808__auto__ = name;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_17880 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_17879__$1);
var delegate_name_17881 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_17880),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",delegate_name_17881," = function ("], 0));

var seq__17871_17882 = cljs.core.seq(params);
var chunk__17872_17883 = null;
var count__17873_17884 = (0);
var i__17874_17885 = (0);
while(true){
if((i__17874_17885 < count__17873_17884)){
var param_17886 = chunk__17872_17883.cljs$core$IIndexed$_nth$arity$2(null,i__17874_17885);
cljs.compiler.emit(param_17886);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17886,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__17887 = seq__17871_17882;
var G__17888 = chunk__17872_17883;
var G__17889 = count__17873_17884;
var G__17890 = (i__17874_17885 + (1));
seq__17871_17882 = G__17887;
chunk__17872_17883 = G__17888;
count__17873_17884 = G__17889;
i__17874_17885 = G__17890;
continue;
} else {
var temp__5457__auto___17891 = cljs.core.seq(seq__17871_17882);
if(temp__5457__auto___17891){
var seq__17871_17892__$1 = temp__5457__auto___17891;
if(cljs.core.chunked_seq_QMARK_(seq__17871_17892__$1)){
var c__9739__auto___17893 = cljs.core.chunk_first(seq__17871_17892__$1);
var G__17894 = cljs.core.chunk_rest(seq__17871_17892__$1);
var G__17895 = c__9739__auto___17893;
var G__17896 = cljs.core.count(c__9739__auto___17893);
var G__17897 = (0);
seq__17871_17882 = G__17894;
chunk__17872_17883 = G__17895;
count__17873_17884 = G__17896;
i__17874_17885 = G__17897;
continue;
} else {
var param_17898 = cljs.core.first(seq__17871_17892__$1);
cljs.compiler.emit(param_17898);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17898,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__17899 = cljs.core.next(seq__17871_17892__$1);
var G__17900 = null;
var G__17901 = (0);
var G__17902 = (0);
seq__17871_17882 = G__17899;
chunk__17872_17883 = G__17900;
count__17873_17884 = G__17901;
i__17874_17885 = G__17902;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",mname_17880," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_17903 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_17903,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name_17881,".call(this,"], 0));

var seq__17875_17904 = cljs.core.seq(params);
var chunk__17876_17905 = null;
var count__17877_17906 = (0);
var i__17878_17907 = (0);
while(true){
if((i__17878_17907 < count__17877_17906)){
var param_17908 = chunk__17876_17905.cljs$core$IIndexed$_nth$arity$2(null,i__17878_17907);
cljs.compiler.emit(param_17908);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17908,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__17909 = seq__17875_17904;
var G__17910 = chunk__17876_17905;
var G__17911 = count__17877_17906;
var G__17912 = (i__17878_17907 + (1));
seq__17875_17904 = G__17909;
chunk__17876_17905 = G__17910;
count__17877_17906 = G__17911;
i__17878_17907 = G__17912;
continue;
} else {
var temp__5457__auto___17913 = cljs.core.seq(seq__17875_17904);
if(temp__5457__auto___17913){
var seq__17875_17914__$1 = temp__5457__auto___17913;
if(cljs.core.chunked_seq_QMARK_(seq__17875_17914__$1)){
var c__9739__auto___17915 = cljs.core.chunk_first(seq__17875_17914__$1);
var G__17916 = cljs.core.chunk_rest(seq__17875_17914__$1);
var G__17917 = c__9739__auto___17915;
var G__17918 = cljs.core.count(c__9739__auto___17915);
var G__17919 = (0);
seq__17875_17904 = G__17916;
chunk__17876_17905 = G__17917;
count__17877_17906 = G__17918;
i__17878_17907 = G__17919;
continue;
} else {
var param_17920 = cljs.core.first(seq__17875_17914__$1);
cljs.compiler.emit(param_17920);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17920,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__17921 = cljs.core.next(seq__17875_17914__$1);
var G__17922 = null;
var G__17923 = (0);
var G__17924 = (0);
seq__17875_17904 = G__17921;
chunk__17876_17905 = G__17922;
count__17877_17906 = G__17923;
i__17878_17907 = G__17924;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_17880,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_17880,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cst$kw$name,name_17879__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_17880,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_17881,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",mname_17880,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn,(function (p__17928){
var map__17929 = p__17928;
var map__17929__$1 = ((((!((map__17929 == null)))?((((map__17929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17929.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17929):map__17929);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17929__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17929__$1,cljs.core.cst$kw$env);
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17929__$1,cljs.core.cst$kw$methods);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17929__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17929__$1,cljs.core.cst$kw$variadic);
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17929__$1,cljs.core.cst$kw$recur_DASH_frames);
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17929__$1,cljs.core.cst$kw$loop_DASH_lets);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__17929,map__17929__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__17925_SHARP_){
var and__8796__auto__ = p1__17925_SHARP_;
if(cljs.core.truth_(and__8796__auto__)){
return cljs.core.deref(cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(p1__17925_SHARP_));
} else {
return and__8796__auto__;
}
});})(map__17929,map__17929__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
}
} else {
var name_17964__$1 = (function (){var or__8808__auto__ = name;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_17965 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_17964__$1);
var maxparams_17966 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,methods$));
var mmap_17967 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_17964__$1,mname_17965,maxparams_17966,loop_locals,map__17929,map__17929__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_17965),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_17964__$1,mname_17965,maxparams_17966,loop_locals,map__17929,map__17929__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_17968 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_17964__$1,mname_17965,maxparams_17966,mmap_17967,loop_locals,map__17929,map__17929__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__17926_SHARP_){
return cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__17926_SHARP_)));
});})(name_17964__$1,mname_17965,maxparams_17966,mmap_17967,loop_locals,map__17929,map__17929__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_17967));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",mname_17965," = null;"], 0));

var seq__17931_17969 = cljs.core.seq(ms_17968);
var chunk__17932_17970 = null;
var count__17933_17971 = (0);
var i__17934_17972 = (0);
while(true){
if((i__17934_17972 < count__17933_17971)){
var vec__17935_17973 = chunk__17932_17970.cljs$core$IIndexed$_nth$arity$2(null,i__17934_17972);
var n_17974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17935_17973,(0),null);
var meth_17975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17935_17973,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",n_17974," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_17975))){
cljs.compiler.emit_variadic_fn_method(meth_17975);
} else {
cljs.compiler.emit_fn_method(meth_17975);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

var G__17976 = seq__17931_17969;
var G__17977 = chunk__17932_17970;
var G__17978 = count__17933_17971;
var G__17979 = (i__17934_17972 + (1));
seq__17931_17969 = G__17976;
chunk__17932_17970 = G__17977;
count__17933_17971 = G__17978;
i__17934_17972 = G__17979;
continue;
} else {
var temp__5457__auto___17980 = cljs.core.seq(seq__17931_17969);
if(temp__5457__auto___17980){
var seq__17931_17981__$1 = temp__5457__auto___17980;
if(cljs.core.chunked_seq_QMARK_(seq__17931_17981__$1)){
var c__9739__auto___17982 = cljs.core.chunk_first(seq__17931_17981__$1);
var G__17983 = cljs.core.chunk_rest(seq__17931_17981__$1);
var G__17984 = c__9739__auto___17982;
var G__17985 = cljs.core.count(c__9739__auto___17982);
var G__17986 = (0);
seq__17931_17969 = G__17983;
chunk__17932_17970 = G__17984;
count__17933_17971 = G__17985;
i__17934_17972 = G__17986;
continue;
} else {
var vec__17938_17987 = cljs.core.first(seq__17931_17981__$1);
var n_17988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17938_17987,(0),null);
var meth_17989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17938_17987,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",n_17988," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_17989))){
cljs.compiler.emit_variadic_fn_method(meth_17989);
} else {
cljs.compiler.emit_fn_method(meth_17989);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

var G__17990 = cljs.core.next(seq__17931_17981__$1);
var G__17991 = null;
var G__17992 = (0);
var G__17993 = (0);
seq__17931_17969 = G__17990;
chunk__17932_17970 = G__17991;
count__17933_17971 = G__17992;
i__17934_17972 = G__17993;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_17965," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_17966),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):maxparams_17966)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_17966));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["switch(arguments.length){"], 0));

var seq__17941_17994 = cljs.core.seq(ms_17968);
var chunk__17942_17995 = null;
var count__17943_17996 = (0);
var i__17944_17997 = (0);
while(true){
if((i__17944_17997 < count__17943_17996)){
var vec__17945_17998 = chunk__17942_17995.cljs$core$IIndexed$_nth$arity$2(null,i__17944_17997);
var n_17999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17945_17998,(0),null);
var meth_18000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17945_17998,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_18000))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

var restarg_18001 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",restarg_18001," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_18002 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_18001," = new cljs.core.IndexedSeq(",a_18002,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_17999,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_17966)),(((cljs.core.count(maxparams_17966) > (1)))?", ":null),restarg_18001,");"], 0));
} else {
var pcnt_18003 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_18000));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",pcnt_18003,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_17999,".call(this",(((pcnt_18003 === (0)))?null:cljs.core._conj((function (){var x__9762__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_18003,maxparams_17966));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),",")),");"], 0));
}

var G__18004 = seq__17941_17994;
var G__18005 = chunk__17942_17995;
var G__18006 = count__17943_17996;
var G__18007 = (i__17944_17997 + (1));
seq__17941_17994 = G__18004;
chunk__17942_17995 = G__18005;
count__17943_17996 = G__18006;
i__17944_17997 = G__18007;
continue;
} else {
var temp__5457__auto___18008 = cljs.core.seq(seq__17941_17994);
if(temp__5457__auto___18008){
var seq__17941_18009__$1 = temp__5457__auto___18008;
if(cljs.core.chunked_seq_QMARK_(seq__17941_18009__$1)){
var c__9739__auto___18010 = cljs.core.chunk_first(seq__17941_18009__$1);
var G__18011 = cljs.core.chunk_rest(seq__17941_18009__$1);
var G__18012 = c__9739__auto___18010;
var G__18013 = cljs.core.count(c__9739__auto___18010);
var G__18014 = (0);
seq__17941_17994 = G__18011;
chunk__17942_17995 = G__18012;
count__17943_17996 = G__18013;
i__17944_17997 = G__18014;
continue;
} else {
var vec__17948_18015 = cljs.core.first(seq__17941_18009__$1);
var n_18016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17948_18015,(0),null);
var meth_18017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17948_18015,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_18017))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

var restarg_18018 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",restarg_18018," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_18019 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_18018," = new cljs.core.IndexedSeq(",a_18019,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_18016,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_17966)),(((cljs.core.count(maxparams_17966) > (1)))?", ":null),restarg_18018,");"], 0));
} else {
var pcnt_18020 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_18017));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",pcnt_18020,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_18016,".call(this",(((pcnt_18020 === (0)))?null:cljs.core._conj((function (){var x__9762__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_18020,maxparams_17966));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),",")),");"], 0));
}

var G__18021 = cljs.core.next(seq__17941_18009__$1);
var G__18022 = null;
var G__18023 = (0);
var G__18024 = (0);
seq__17941_17994 = G__18021;
chunk__17942_17995 = G__18022;
count__17943_17996 = G__18023;
i__17944_17997 = G__18024;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["throw(new Error('Invalid arity: ' + (arguments.length - 1)));"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_17965,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_17965,".cljs$lang$applyTo = ",cljs.core.some(((function (name_17964__$1,mname_17965,maxparams_17966,mmap_17967,ms_17968,loop_locals,map__17929,map__17929__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__17927_SHARP_){
var vec__17951 = p1__17927_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17951,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17951,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_17964__$1,mname_17965,maxparams_17966,mmap_17967,ms_17968,loop_locals,map__17929,map__17929__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_17968),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__17954_18025 = cljs.core.seq(ms_17968);
var chunk__17955_18026 = null;
var count__17956_18027 = (0);
var i__17957_18028 = (0);
while(true){
if((i__17957_18028 < count__17956_18027)){
var vec__17958_18029 = chunk__17955_18026.cljs$core$IIndexed$_nth$arity$2(null,i__17957_18028);
var n_18030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17958_18029,(0),null);
var meth_18031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17958_18029,(1),null);
var c_18032 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_18031));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_18031))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_17965,".cljs$core$IFn$_invoke$arity$variadic = ",n_18030,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_17965,".cljs$core$IFn$_invoke$arity$",c_18032," = ",n_18030,";"], 0));
}

var G__18033 = seq__17954_18025;
var G__18034 = chunk__17955_18026;
var G__18035 = count__17956_18027;
var G__18036 = (i__17957_18028 + (1));
seq__17954_18025 = G__18033;
chunk__17955_18026 = G__18034;
count__17956_18027 = G__18035;
i__17957_18028 = G__18036;
continue;
} else {
var temp__5457__auto___18037 = cljs.core.seq(seq__17954_18025);
if(temp__5457__auto___18037){
var seq__17954_18038__$1 = temp__5457__auto___18037;
if(cljs.core.chunked_seq_QMARK_(seq__17954_18038__$1)){
var c__9739__auto___18039 = cljs.core.chunk_first(seq__17954_18038__$1);
var G__18040 = cljs.core.chunk_rest(seq__17954_18038__$1);
var G__18041 = c__9739__auto___18039;
var G__18042 = cljs.core.count(c__9739__auto___18039);
var G__18043 = (0);
seq__17954_18025 = G__18040;
chunk__17955_18026 = G__18041;
count__17956_18027 = G__18042;
i__17957_18028 = G__18043;
continue;
} else {
var vec__17961_18044 = cljs.core.first(seq__17954_18038__$1);
var n_18045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17961_18044,(0),null);
var meth_18046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17961_18044,(1),null);
var c_18047 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_18046));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_18046))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_17965,".cljs$core$IFn$_invoke$arity$variadic = ",n_18045,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_17965,".cljs$core$IFn$_invoke$arity$",c_18047," = ",n_18045,";"], 0));
}

var G__18048 = cljs.core.next(seq__17954_18038__$1);
var G__18049 = null;
var G__18050 = (0);
var G__18051 = (0);
seq__17954_18025 = G__18048;
chunk__17955_18026 = G__18049;
count__17956_18027 = G__18050;
i__17957_18028 = G__18051;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",mname_17965,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$do,(function (p__18052){
var map__18053 = p__18052;
var map__18053__$1 = ((((!((map__18053 == null)))?((((map__18053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18053.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18053):map__18053);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18053__$1,cljs.core.cst$kw$statements);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18053__$1,cljs.core.cst$kw$ret);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18053__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__8796__auto__ = statements;
if(cljs.core.truth_(and__8796__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context);
} else {
return and__8796__auto__;
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var seq__18055_18059 = cljs.core.seq(statements);
var chunk__18056_18060 = null;
var count__18057_18061 = (0);
var i__18058_18062 = (0);
while(true){
if((i__18058_18062 < count__18057_18061)){
var s_18063 = chunk__18056_18060.cljs$core$IIndexed$_nth$arity$2(null,i__18058_18062);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_18063], 0));

var G__18064 = seq__18055_18059;
var G__18065 = chunk__18056_18060;
var G__18066 = count__18057_18061;
var G__18067 = (i__18058_18062 + (1));
seq__18055_18059 = G__18064;
chunk__18056_18060 = G__18065;
count__18057_18061 = G__18066;
i__18058_18062 = G__18067;
continue;
} else {
var temp__5457__auto___18068 = cljs.core.seq(seq__18055_18059);
if(temp__5457__auto___18068){
var seq__18055_18069__$1 = temp__5457__auto___18068;
if(cljs.core.chunked_seq_QMARK_(seq__18055_18069__$1)){
var c__9739__auto___18070 = cljs.core.chunk_first(seq__18055_18069__$1);
var G__18071 = cljs.core.chunk_rest(seq__18055_18069__$1);
var G__18072 = c__9739__auto___18070;
var G__18073 = cljs.core.count(c__9739__auto___18070);
var G__18074 = (0);
seq__18055_18059 = G__18071;
chunk__18056_18060 = G__18072;
count__18057_18061 = G__18073;
i__18058_18062 = G__18074;
continue;
} else {
var s_18075 = cljs.core.first(seq__18055_18069__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_18075], 0));

var G__18076 = cljs.core.next(seq__18055_18069__$1);
var G__18077 = null;
var G__18078 = (0);
var G__18079 = (0);
seq__18055_18059 = G__18076;
chunk__18056_18060 = G__18077;
count__18057_18061 = G__18078;
i__18058_18062 = G__18079;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(cljs.core.truth_((function (){var and__8796__auto__ = statements;
if(cljs.core.truth_(and__8796__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context);
} else {
return and__8796__auto__;
}
})())){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$try,(function (p__18080){
var map__18081 = p__18080;
var map__18081__$1 = ((((!((map__18081 == null)))?((((map__18081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18081.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18081):map__18081);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18081__$1,cljs.core.cst$kw$env);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18081__$1,cljs.core.cst$kw$try);
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18081__$1,cljs.core.cst$kw$catch);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18081__$1,cljs.core.cst$kw$name);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18081__$1,cljs.core.cst$kw$finally);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__8808__auto__ = name;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["try{",try$,"}"], 0));

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}"], 0));
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$constant,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :constant (:op finally))"].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["finally {",finally$,"}"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([try$], 0));
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__18083,is_loop){
var map__18084 = p__18083;
var map__18084__$1 = ((((!((map__18084 == null)))?((((map__18084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18084.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18084):map__18084);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18084__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18084__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18084__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_18086_18095 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_18086_18095,context,map__18084,map__18084__$1,bindings,expr,env){
return (function (binding){
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_18086_18095,context,map__18084,map__18084__$1,bindings,expr,env))
,bindings):null));

try{var seq__18087_18096 = cljs.core.seq(bindings);
var chunk__18088_18097 = null;
var count__18089_18098 = (0);
var i__18090_18099 = (0);
while(true){
if((i__18090_18099 < count__18089_18098)){
var map__18091_18100 = chunk__18088_18097.cljs$core$IIndexed$_nth$arity$2(null,i__18090_18099);
var map__18091_18101__$1 = ((((!((map__18091_18100 == null)))?((((map__18091_18100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18091_18100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18091_18100):map__18091_18100);
var binding_18102 = map__18091_18101__$1;
var init_18103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18091_18101__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(binding_18102);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",init_18103,";"], 0));

var G__18104 = seq__18087_18096;
var G__18105 = chunk__18088_18097;
var G__18106 = count__18089_18098;
var G__18107 = (i__18090_18099 + (1));
seq__18087_18096 = G__18104;
chunk__18088_18097 = G__18105;
count__18089_18098 = G__18106;
i__18090_18099 = G__18107;
continue;
} else {
var temp__5457__auto___18108 = cljs.core.seq(seq__18087_18096);
if(temp__5457__auto___18108){
var seq__18087_18109__$1 = temp__5457__auto___18108;
if(cljs.core.chunked_seq_QMARK_(seq__18087_18109__$1)){
var c__9739__auto___18110 = cljs.core.chunk_first(seq__18087_18109__$1);
var G__18111 = cljs.core.chunk_rest(seq__18087_18109__$1);
var G__18112 = c__9739__auto___18110;
var G__18113 = cljs.core.count(c__9739__auto___18110);
var G__18114 = (0);
seq__18087_18096 = G__18111;
chunk__18088_18097 = G__18112;
count__18089_18098 = G__18113;
i__18090_18099 = G__18114;
continue;
} else {
var map__18093_18115 = cljs.core.first(seq__18087_18109__$1);
var map__18093_18116__$1 = ((((!((map__18093_18115 == null)))?((((map__18093_18115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18093_18115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18093_18115):map__18093_18115);
var binding_18117 = map__18093_18116__$1;
var init_18118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18093_18116__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(binding_18117);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",init_18118,";"], 0));

var G__18119 = cljs.core.next(seq__18087_18109__$1);
var G__18120 = null;
var G__18121 = (0);
var G__18122 = (0);
seq__18087_18096 = G__18119;
chunk__18088_18097 = G__18120;
count__18089_18098 = G__18121;
i__18090_18099 = G__18122;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_18086_18095;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$let,(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$loop,(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$recur,(function (p__18123){
var map__18124 = p__18123;
var map__18124__$1 = ((((!((map__18124 == null)))?((((map__18124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18124):map__18124);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18124__$1,cljs.core.cst$kw$frame);
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18124__$1,cljs.core.cst$kw$exprs);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18124__$1,cljs.core.cst$kw$env);
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame);
var n__9853__auto___18126 = cljs.core.count(exprs);
var i_18127 = (0);
while(true){
if((i_18127 < n__9853__auto___18126)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_18127) : temps.call(null,i_18127))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_18127) : exprs.call(null,i_18127)),";"], 0));

var G__18128 = (i_18127 + (1));
i_18127 = G__18128;
continue;
} else {
}
break;
}

var n__9853__auto___18129 = cljs.core.count(exprs);
var i_18130 = (0);
while(true){
if((i_18130 < n__9853__auto___18129)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_18130) : params.call(null,i_18130)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_18130) : temps.call(null,i_18130)),";"], 0));

var G__18131 = (i_18130 + (1));
i_18130 = G__18131;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$letfn,(function (p__18132){
var map__18133 = p__18132;
var map__18133__$1 = ((((!((map__18133 == null)))?((((map__18133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18133):map__18133);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18133__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18133__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18133__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var seq__18135_18143 = cljs.core.seq(bindings);
var chunk__18136_18144 = null;
var count__18137_18145 = (0);
var i__18138_18146 = (0);
while(true){
if((i__18138_18146 < count__18137_18145)){
var map__18139_18147 = chunk__18136_18144.cljs$core$IIndexed$_nth$arity$2(null,i__18138_18146);
var map__18139_18148__$1 = ((((!((map__18139_18147 == null)))?((((map__18139_18147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18139_18147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18139_18147):map__18139_18147);
var binding_18149 = map__18139_18148__$1;
var init_18150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18139_18148__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_18149)," = ",init_18150,";"], 0));

var G__18151 = seq__18135_18143;
var G__18152 = chunk__18136_18144;
var G__18153 = count__18137_18145;
var G__18154 = (i__18138_18146 + (1));
seq__18135_18143 = G__18151;
chunk__18136_18144 = G__18152;
count__18137_18145 = G__18153;
i__18138_18146 = G__18154;
continue;
} else {
var temp__5457__auto___18155 = cljs.core.seq(seq__18135_18143);
if(temp__5457__auto___18155){
var seq__18135_18156__$1 = temp__5457__auto___18155;
if(cljs.core.chunked_seq_QMARK_(seq__18135_18156__$1)){
var c__9739__auto___18157 = cljs.core.chunk_first(seq__18135_18156__$1);
var G__18158 = cljs.core.chunk_rest(seq__18135_18156__$1);
var G__18159 = c__9739__auto___18157;
var G__18160 = cljs.core.count(c__9739__auto___18157);
var G__18161 = (0);
seq__18135_18143 = G__18158;
chunk__18136_18144 = G__18159;
count__18137_18145 = G__18160;
i__18138_18146 = G__18161;
continue;
} else {
var map__18141_18162 = cljs.core.first(seq__18135_18156__$1);
var map__18141_18163__$1 = ((((!((map__18141_18162 == null)))?((((map__18141_18162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18141_18162.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18141_18162):map__18141_18162);
var binding_18164 = map__18141_18163__$1;
var init_18165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18141_18163__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_18164)," = ",init_18165,";"], 0));

var G__18166 = cljs.core.next(seq__18135_18156__$1);
var G__18167 = null;
var G__18168 = (0);
var G__18169 = (0);
seq__18135_18143 = G__18166;
chunk__18136_18144 = G__18167;
count__18137_18145 = G__18168;
i__18138_18146 = G__18169;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invoke,(function (p__18172){
var map__18173 = p__18172;
var map__18173__$1 = ((((!((map__18173 == null)))?((((map__18173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18173.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18173):map__18173);
var expr = map__18173__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18173__$1,cljs.core.cst$kw$f);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18173__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18173__$1,cljs.core.cst$kw$env);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__8796__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__8796__auto__){
var and__8796__auto____$1 = cljs.core.not(cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(info));
if(and__8796__auto____$1){
return cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})();
var protocol = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__8796__auto__ = protocol;
if(cljs.core.truth_(and__8796__auto__)){
var and__8796__auto____$1 = tag;
if(cljs.core.truth_(and__8796__auto____$1)){
var or__8808__auto__ = (function (){var and__8796__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__8796__auto____$2){
var and__8796__auto____$3 = protocol;
if(cljs.core.truth_(and__8796__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$sym$not_DASH_native);
} else {
return and__8796__auto____$3;
}
} else {
return and__8796__auto____$2;
}
})();
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var and__8796__auto____$2 = (function (){var or__8808__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__8808__auto____$1){
return or__8808__auto____$1;
} else {
return cljs.core.cst$kw$protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__8796__auto____$2)){
var or__8808__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__8808__auto____$1){
return or__8808__auto____$1;
} else {
var and__8796__auto____$3 = !(cljs.core.set_QMARK_(tag));
if(and__8796__auto____$3){
var and__8796__auto____$4 = cljs.core.not((function (){var fexpr__18183 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$sym$clj,null,cljs.core.cst$sym$boolean,null,cljs.core.cst$sym$object,null,cljs.core.cst$sym$any,null,cljs.core.cst$sym$js,null,cljs.core.cst$sym$number,null,cljs.core.cst$sym$clj_DASH_or_DASH_nil,null,cljs.core.cst$sym$array,null,cljs.core.cst$sym$string,null,cljs.core.cst$sym$function,null,cljs.core.cst$sym$clj_DASH_nil,null], null), null);
return (fexpr__18183.cljs$core$IFn$_invoke$arity$1 ? fexpr__18183.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__18183.call(null,tag));
})());
if(and__8796__auto____$4){
var temp__5457__auto__ = cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,tag));
if(cljs.core.truth_(temp__5457__auto__)){
var ps = temp__5457__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__8796__auto____$4;
}
} else {
return and__8796__auto____$3;
}
}
} else {
return and__8796__auto____$2;
}
}
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info),cljs.core.cst$sym$cljs$core_SLASH_not)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr))),cljs.core.cst$sym$boolean));
var ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$js)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$Math));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__8808__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$goog);
if(or__8808__auto__){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = (function (){var temp__5457__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__5457__auto__)){
var ns_str = temp__5457__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
return !(cljs.core.contains_QMARK_(cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$core_SLASH_Keyword,cljs.analyzer.infer_tag(env,f))) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cst$kw$constant)) && ((cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)));
var vec__18175 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(info);
var mps = cljs.core.cst$kw$method_DASH_params.cljs$core$IFn$_invoke$arity$1(info);
var mfa = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__8796__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__8796__auto__)){
return (arity > mfa);
} else {
return and__8796__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__18173,map__18173__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__18173,map__18173__$1,expr,f,args,env){
return (function (p1__18170_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18170_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__18173,map__18173__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__18173,map__18173__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__18173,map__18173__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__18173,map__18173__$1,expr,f,args,env){
return (function (p1__18171_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18171_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__18173,map__18173__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__18173,map__18173__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18175,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18175,(1),null);
var env__17366__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_18184 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(args),".",pimpl_18184,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_18185 = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_18185,args)),(((mfa_18185 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_18185,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__8808__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = js_QMARK_;
if(or__8808__auto____$1){
return or__8808__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f__$1),cljs.core.cst$kw$var))){
var fprop_18186 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",f__$1,fprop_18186," ? ",f__$1,fprop_18186,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",f__$1,fprop_18186," ? ",f__$1,fprop_18186,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")"], 0));
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$new,(function (p__18187){
var map__18188 = p__18187;
var map__18188__$1 = ((((!((map__18188 == null)))?((((map__18188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18188):map__18188);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18188__$1,cljs.core.cst$kw$ctor);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18188__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18188__$1,cljs.core.cst$kw$env);
var env__17366__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(new ",ctor,"(",cljs.compiler.comma_sep(args),"))"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set_BANG_,(function (p__18190){
var map__18191 = p__18190;
var map__18191__$1 = ((((!((map__18191 == null)))?((((map__18191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18191):map__18191);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18191__$1,cljs.core.cst$kw$target);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18191__$1,cljs.core.cst$kw$val);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18191__$1,cljs.core.cst$kw$env);
var env__17366__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target," = ",val], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__18193 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__18193__$1 = ((((!((map__18193 == null)))?((((map__18193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18193):map__18193);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18193__$1,cljs.core.cst$kw$options);
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18193__$1,cljs.core.cst$kw$js_DASH_dependency_DASH_index);
var map__18194 = options;
var map__18194__$1 = ((((!((map__18194 == null)))?((((map__18194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18194.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18194):map__18194);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18194__$1,cljs.core.cst$kw$target);
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18194__$1,cljs.core.cst$kw$optimizations);
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_);
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_));
var vec__18195 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nodejs,target)){
var map__18201 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__18201__$1 = ((((!((map__18201 == null)))?((((map__18201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18201):map__18201);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18201__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18201__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18195,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18195,(1),null);
var map__18198 = cljs.core.group_by(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__18198__$1 = ((((!((map__18198 == null)))?((((map__18198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18198):map__18198);
var global_exports_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18198__$1,true);
var libs_to_load__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18198__$1,false);
if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);"], 0));
} else {
}

var seq__18204_18220 = cljs.core.seq(libs_to_load__$1);
var chunk__18205_18221 = null;
var count__18206_18222 = (0);
var i__18207_18223 = (0);
while(true){
if((i__18207_18223 < count__18206_18222)){
var lib_18224 = chunk__18205_18221.cljs$core$IIndexed$_nth$arity$2(null,i__18207_18223);
if((cljs.analyzer.foreign_dep_QMARK_(lib_18224)) && (!(cljs.core.keyword_identical_QMARK_(optimizations,cljs.core.cst$kw$none)))){
} else {
if(cljs.core.truth_((function (){var or__8808__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_18224),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_18224),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__8808__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_18224),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_18224),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_18224),"');"], 0));

}
}
}

var G__18225 = seq__18204_18220;
var G__18226 = chunk__18205_18221;
var G__18227 = count__18206_18222;
var G__18228 = (i__18207_18223 + (1));
seq__18204_18220 = G__18225;
chunk__18205_18221 = G__18226;
count__18206_18222 = G__18227;
i__18207_18223 = G__18228;
continue;
} else {
var temp__5457__auto___18229 = cljs.core.seq(seq__18204_18220);
if(temp__5457__auto___18229){
var seq__18204_18230__$1 = temp__5457__auto___18229;
if(cljs.core.chunked_seq_QMARK_(seq__18204_18230__$1)){
var c__9739__auto___18231 = cljs.core.chunk_first(seq__18204_18230__$1);
var G__18232 = cljs.core.chunk_rest(seq__18204_18230__$1);
var G__18233 = c__9739__auto___18231;
var G__18234 = cljs.core.count(c__9739__auto___18231);
var G__18235 = (0);
seq__18204_18220 = G__18232;
chunk__18205_18221 = G__18233;
count__18206_18222 = G__18234;
i__18207_18223 = G__18235;
continue;
} else {
var lib_18236 = cljs.core.first(seq__18204_18230__$1);
if((cljs.analyzer.foreign_dep_QMARK_(lib_18236)) && (!(cljs.core.keyword_identical_QMARK_(optimizations,cljs.core.cst$kw$none)))){
} else {
if(cljs.core.truth_((function (){var or__8808__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_18236),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_18236),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__8808__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_18236),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_18236),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_18236),"');"], 0));

}
}
}

var G__18237 = cljs.core.next(seq__18204_18230__$1);
var G__18238 = null;
var G__18239 = (0);
var G__18240 = (0);
seq__18204_18220 = G__18237;
chunk__18205_18221 = G__18238;
count__18206_18222 = G__18239;
i__18207_18223 = G__18240;
continue;
}
} else {
}
}
break;
}

var seq__18208_18241 = cljs.core.seq(node_libs);
var chunk__18209_18242 = null;
var count__18210_18243 = (0);
var i__18211_18244 = (0);
while(true){
if((i__18211_18244 < count__18210_18243)){
var lib_18245 = chunk__18209_18242.cljs$core$IIndexed$_nth$arity$2(null,i__18211_18244);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_18245)," = require('",lib_18245,"');"], 0));

var G__18246 = seq__18208_18241;
var G__18247 = chunk__18209_18242;
var G__18248 = count__18210_18243;
var G__18249 = (i__18211_18244 + (1));
seq__18208_18241 = G__18246;
chunk__18209_18242 = G__18247;
count__18210_18243 = G__18248;
i__18211_18244 = G__18249;
continue;
} else {
var temp__5457__auto___18250 = cljs.core.seq(seq__18208_18241);
if(temp__5457__auto___18250){
var seq__18208_18251__$1 = temp__5457__auto___18250;
if(cljs.core.chunked_seq_QMARK_(seq__18208_18251__$1)){
var c__9739__auto___18252 = cljs.core.chunk_first(seq__18208_18251__$1);
var G__18253 = cljs.core.chunk_rest(seq__18208_18251__$1);
var G__18254 = c__9739__auto___18252;
var G__18255 = cljs.core.count(c__9739__auto___18252);
var G__18256 = (0);
seq__18208_18241 = G__18253;
chunk__18209_18242 = G__18254;
count__18210_18243 = G__18255;
i__18211_18244 = G__18256;
continue;
} else {
var lib_18257 = cljs.core.first(seq__18208_18251__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_18257)," = require('",lib_18257,"');"], 0));

var G__18258 = cljs.core.next(seq__18208_18251__$1);
var G__18259 = null;
var G__18260 = (0);
var G__18261 = (0);
seq__18208_18241 = G__18258;
chunk__18209_18242 = G__18259;
count__18210_18243 = G__18260;
i__18211_18244 = G__18261;
continue;
}
} else {
}
}
break;
}

var seq__18212_18262 = cljs.core.seq(global_exports_libs);
var chunk__18213_18263 = null;
var count__18214_18264 = (0);
var i__18215_18265 = (0);
while(true){
if((i__18215_18265 < count__18214_18264)){
var lib_18266 = chunk__18213_18263.cljs$core$IIndexed$_nth$arity$2(null,i__18215_18265);
var map__18216_18267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_18266));
var map__18216_18268__$1 = ((((!((map__18216_18267 == null)))?((((map__18216_18267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18216_18267.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18216_18267):map__18216_18267);
var global_exports_18269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18216_18268__$1,cljs.core.cst$kw$global_DASH_exports);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib_18266)," = goog.global.",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_18269,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_18266)),";"], 0));

var G__18270 = seq__18212_18262;
var G__18271 = chunk__18213_18263;
var G__18272 = count__18214_18264;
var G__18273 = (i__18215_18265 + (1));
seq__18212_18262 = G__18270;
chunk__18213_18263 = G__18271;
count__18214_18264 = G__18272;
i__18215_18265 = G__18273;
continue;
} else {
var temp__5457__auto___18274 = cljs.core.seq(seq__18212_18262);
if(temp__5457__auto___18274){
var seq__18212_18275__$1 = temp__5457__auto___18274;
if(cljs.core.chunked_seq_QMARK_(seq__18212_18275__$1)){
var c__9739__auto___18276 = cljs.core.chunk_first(seq__18212_18275__$1);
var G__18277 = cljs.core.chunk_rest(seq__18212_18275__$1);
var G__18278 = c__9739__auto___18276;
var G__18279 = cljs.core.count(c__9739__auto___18276);
var G__18280 = (0);
seq__18212_18262 = G__18277;
chunk__18213_18263 = G__18278;
count__18214_18264 = G__18279;
i__18215_18265 = G__18280;
continue;
} else {
var lib_18281 = cljs.core.first(seq__18212_18275__$1);
var map__18218_18282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_18281));
var map__18218_18283__$1 = ((((!((map__18218_18282 == null)))?((((map__18218_18282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18218_18282.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18218_18282):map__18218_18282);
var global_exports_18284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18218_18283__$1,cljs.core.cst$kw$global_DASH_exports);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib_18281)," = goog.global.",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_18284,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_18281)),";"], 0));

var G__18285 = cljs.core.next(seq__18212_18275__$1);
var G__18286 = null;
var G__18287 = (0);
var G__18288 = (0);
seq__18212_18262 = G__18285;
chunk__18213_18263 = G__18286;
count__18214_18264 = G__18287;
i__18215_18265 = G__18288;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns_STAR_,(function (p__18289){
var map__18290 = p__18289;
var map__18290__$1 = ((((!((map__18290 == null)))?((((map__18290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18290):map__18290);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18290__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18290__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18290__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18290__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18290__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18290__$1,cljs.core.cst$kw$env);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18290__$1,cljs.core.cst$kw$deps);
cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_env.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["null;"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns,(function (p__18292){
var map__18293 = p__18292;
var map__18293__$1 = ((((!((map__18293 == null)))?((((map__18293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18293.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18293):map__18293);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18293__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18293__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18293__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18293__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18293__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18293__$1,cljs.core.cst$kw$env);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18293__$1,cljs.core.cst$kw$deps);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$sym$cljs$core)){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('cljs.core');"], 0));

if(cljs.core.truth_(cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');"], 0));
} else {
}
}

cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$deftype_STAR_,(function (p__18295){
var map__18296 = p__18295;
var map__18296__$1 = ((((!((map__18296 == null)))?((((map__18296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18296):map__18296);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18296__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18296__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18296__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18296__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18296__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* @constructor"], 0));

var seq__18298_18316 = cljs.core.seq(protocols);
var chunk__18299_18317 = null;
var count__18300_18318 = (0);
var i__18301_18319 = (0);
while(true){
if((i__18301_18319 < count__18300_18318)){
var protocol_18320 = chunk__18299_18317.cljs$core$IIndexed$_nth$arity$2(null,i__18301_18319);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_18320)].join('')),"}"], 0));

var G__18321 = seq__18298_18316;
var G__18322 = chunk__18299_18317;
var G__18323 = count__18300_18318;
var G__18324 = (i__18301_18319 + (1));
seq__18298_18316 = G__18321;
chunk__18299_18317 = G__18322;
count__18300_18318 = G__18323;
i__18301_18319 = G__18324;
continue;
} else {
var temp__5457__auto___18325 = cljs.core.seq(seq__18298_18316);
if(temp__5457__auto___18325){
var seq__18298_18326__$1 = temp__5457__auto___18325;
if(cljs.core.chunked_seq_QMARK_(seq__18298_18326__$1)){
var c__9739__auto___18327 = cljs.core.chunk_first(seq__18298_18326__$1);
var G__18328 = cljs.core.chunk_rest(seq__18298_18326__$1);
var G__18329 = c__9739__auto___18327;
var G__18330 = cljs.core.count(c__9739__auto___18327);
var G__18331 = (0);
seq__18298_18316 = G__18328;
chunk__18299_18317 = G__18329;
count__18300_18318 = G__18330;
i__18301_18319 = G__18331;
continue;
} else {
var protocol_18332 = cljs.core.first(seq__18298_18326__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_18332)].join('')),"}"], 0));

var G__18333 = cljs.core.next(seq__18298_18326__$1);
var G__18334 = null;
var G__18335 = (0);
var G__18336 = (0);
seq__18298_18316 = G__18333;
chunk__18299_18317 = G__18334;
count__18300_18318 = G__18335;
i__18301_18319 = G__18336;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__18302_18337 = cljs.core.seq(fields__$1);
var chunk__18303_18338 = null;
var count__18304_18339 = (0);
var i__18305_18340 = (0);
while(true){
if((i__18305_18340 < count__18304_18339)){
var fld_18341 = chunk__18303_18338.cljs$core$IIndexed$_nth$arity$2(null,i__18305_18340);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_18341," = ",fld_18341,";"], 0));

var G__18342 = seq__18302_18337;
var G__18343 = chunk__18303_18338;
var G__18344 = count__18304_18339;
var G__18345 = (i__18305_18340 + (1));
seq__18302_18337 = G__18342;
chunk__18303_18338 = G__18343;
count__18304_18339 = G__18344;
i__18305_18340 = G__18345;
continue;
} else {
var temp__5457__auto___18346 = cljs.core.seq(seq__18302_18337);
if(temp__5457__auto___18346){
var seq__18302_18347__$1 = temp__5457__auto___18346;
if(cljs.core.chunked_seq_QMARK_(seq__18302_18347__$1)){
var c__9739__auto___18348 = cljs.core.chunk_first(seq__18302_18347__$1);
var G__18349 = cljs.core.chunk_rest(seq__18302_18347__$1);
var G__18350 = c__9739__auto___18348;
var G__18351 = cljs.core.count(c__9739__auto___18348);
var G__18352 = (0);
seq__18302_18337 = G__18349;
chunk__18303_18338 = G__18350;
count__18304_18339 = G__18351;
i__18305_18340 = G__18352;
continue;
} else {
var fld_18353 = cljs.core.first(seq__18302_18347__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_18353," = ",fld_18353,";"], 0));

var G__18354 = cljs.core.next(seq__18302_18347__$1);
var G__18355 = null;
var G__18356 = (0);
var G__18357 = (0);
seq__18302_18337 = G__18354;
chunk__18303_18338 = G__18355;
count__18304_18339 = G__18356;
i__18305_18340 = G__18357;
continue;
}
} else {
}
}
break;
}

var seq__18306_18358 = cljs.core.seq(pmasks);
var chunk__18307_18359 = null;
var count__18308_18360 = (0);
var i__18309_18361 = (0);
while(true){
if((i__18309_18361 < count__18308_18360)){
var vec__18310_18362 = chunk__18307_18359.cljs$core$IIndexed$_nth$arity$2(null,i__18309_18361);
var pno_18363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18310_18362,(0),null);
var pmask_18364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18310_18362,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_18363,"$ = ",pmask_18364,";"], 0));

var G__18365 = seq__18306_18358;
var G__18366 = chunk__18307_18359;
var G__18367 = count__18308_18360;
var G__18368 = (i__18309_18361 + (1));
seq__18306_18358 = G__18365;
chunk__18307_18359 = G__18366;
count__18308_18360 = G__18367;
i__18309_18361 = G__18368;
continue;
} else {
var temp__5457__auto___18369 = cljs.core.seq(seq__18306_18358);
if(temp__5457__auto___18369){
var seq__18306_18370__$1 = temp__5457__auto___18369;
if(cljs.core.chunked_seq_QMARK_(seq__18306_18370__$1)){
var c__9739__auto___18371 = cljs.core.chunk_first(seq__18306_18370__$1);
var G__18372 = cljs.core.chunk_rest(seq__18306_18370__$1);
var G__18373 = c__9739__auto___18371;
var G__18374 = cljs.core.count(c__9739__auto___18371);
var G__18375 = (0);
seq__18306_18358 = G__18372;
chunk__18307_18359 = G__18373;
count__18308_18360 = G__18374;
i__18309_18361 = G__18375;
continue;
} else {
var vec__18313_18376 = cljs.core.first(seq__18306_18370__$1);
var pno_18377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18313_18376,(0),null);
var pmask_18378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18313_18376,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_18377,"$ = ",pmask_18378,";"], 0));

var G__18379 = cljs.core.next(seq__18306_18370__$1);
var G__18380 = null;
var G__18381 = (0);
var G__18382 = (0);
seq__18306_18358 = G__18379;
chunk__18307_18359 = G__18380;
count__18308_18360 = G__18381;
i__18309_18361 = G__18382;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["});"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$defrecord_STAR_,(function (p__18383){
var map__18384 = p__18383;
var map__18384__$1 = ((((!((map__18384 == null)))?((((map__18384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18384):map__18384);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18384__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18384__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18384__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18384__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18384__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.cst$sym$__hash], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* @constructor"], 0));

var seq__18386_18404 = cljs.core.seq(protocols);
var chunk__18387_18405 = null;
var count__18388_18406 = (0);
var i__18389_18407 = (0);
while(true){
if((i__18389_18407 < count__18388_18406)){
var protocol_18408 = chunk__18387_18405.cljs$core$IIndexed$_nth$arity$2(null,i__18389_18407);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_18408)].join('')),"}"], 0));

var G__18409 = seq__18386_18404;
var G__18410 = chunk__18387_18405;
var G__18411 = count__18388_18406;
var G__18412 = (i__18389_18407 + (1));
seq__18386_18404 = G__18409;
chunk__18387_18405 = G__18410;
count__18388_18406 = G__18411;
i__18389_18407 = G__18412;
continue;
} else {
var temp__5457__auto___18413 = cljs.core.seq(seq__18386_18404);
if(temp__5457__auto___18413){
var seq__18386_18414__$1 = temp__5457__auto___18413;
if(cljs.core.chunked_seq_QMARK_(seq__18386_18414__$1)){
var c__9739__auto___18415 = cljs.core.chunk_first(seq__18386_18414__$1);
var G__18416 = cljs.core.chunk_rest(seq__18386_18414__$1);
var G__18417 = c__9739__auto___18415;
var G__18418 = cljs.core.count(c__9739__auto___18415);
var G__18419 = (0);
seq__18386_18404 = G__18416;
chunk__18387_18405 = G__18417;
count__18388_18406 = G__18418;
i__18389_18407 = G__18419;
continue;
} else {
var protocol_18420 = cljs.core.first(seq__18386_18414__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_18420)].join('')),"}"], 0));

var G__18421 = cljs.core.next(seq__18386_18414__$1);
var G__18422 = null;
var G__18423 = (0);
var G__18424 = (0);
seq__18386_18404 = G__18421;
chunk__18387_18405 = G__18422;
count__18388_18406 = G__18423;
i__18389_18407 = G__18424;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__18390_18425 = cljs.core.seq(fields__$1);
var chunk__18391_18426 = null;
var count__18392_18427 = (0);
var i__18393_18428 = (0);
while(true){
if((i__18393_18428 < count__18392_18427)){
var fld_18429 = chunk__18391_18426.cljs$core$IIndexed$_nth$arity$2(null,i__18393_18428);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_18429," = ",fld_18429,";"], 0));

var G__18430 = seq__18390_18425;
var G__18431 = chunk__18391_18426;
var G__18432 = count__18392_18427;
var G__18433 = (i__18393_18428 + (1));
seq__18390_18425 = G__18430;
chunk__18391_18426 = G__18431;
count__18392_18427 = G__18432;
i__18393_18428 = G__18433;
continue;
} else {
var temp__5457__auto___18434 = cljs.core.seq(seq__18390_18425);
if(temp__5457__auto___18434){
var seq__18390_18435__$1 = temp__5457__auto___18434;
if(cljs.core.chunked_seq_QMARK_(seq__18390_18435__$1)){
var c__9739__auto___18436 = cljs.core.chunk_first(seq__18390_18435__$1);
var G__18437 = cljs.core.chunk_rest(seq__18390_18435__$1);
var G__18438 = c__9739__auto___18436;
var G__18439 = cljs.core.count(c__9739__auto___18436);
var G__18440 = (0);
seq__18390_18425 = G__18437;
chunk__18391_18426 = G__18438;
count__18392_18427 = G__18439;
i__18393_18428 = G__18440;
continue;
} else {
var fld_18441 = cljs.core.first(seq__18390_18435__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_18441," = ",fld_18441,";"], 0));

var G__18442 = cljs.core.next(seq__18390_18435__$1);
var G__18443 = null;
var G__18444 = (0);
var G__18445 = (0);
seq__18390_18425 = G__18442;
chunk__18391_18426 = G__18443;
count__18392_18427 = G__18444;
i__18393_18428 = G__18445;
continue;
}
} else {
}
}
break;
}

var seq__18394_18446 = cljs.core.seq(pmasks);
var chunk__18395_18447 = null;
var count__18396_18448 = (0);
var i__18397_18449 = (0);
while(true){
if((i__18397_18449 < count__18396_18448)){
var vec__18398_18450 = chunk__18395_18447.cljs$core$IIndexed$_nth$arity$2(null,i__18397_18449);
var pno_18451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18398_18450,(0),null);
var pmask_18452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18398_18450,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_18451,"$ = ",pmask_18452,";"], 0));

var G__18453 = seq__18394_18446;
var G__18454 = chunk__18395_18447;
var G__18455 = count__18396_18448;
var G__18456 = (i__18397_18449 + (1));
seq__18394_18446 = G__18453;
chunk__18395_18447 = G__18454;
count__18396_18448 = G__18455;
i__18397_18449 = G__18456;
continue;
} else {
var temp__5457__auto___18457 = cljs.core.seq(seq__18394_18446);
if(temp__5457__auto___18457){
var seq__18394_18458__$1 = temp__5457__auto___18457;
if(cljs.core.chunked_seq_QMARK_(seq__18394_18458__$1)){
var c__9739__auto___18459 = cljs.core.chunk_first(seq__18394_18458__$1);
var G__18460 = cljs.core.chunk_rest(seq__18394_18458__$1);
var G__18461 = c__9739__auto___18459;
var G__18462 = cljs.core.count(c__9739__auto___18459);
var G__18463 = (0);
seq__18394_18446 = G__18460;
chunk__18395_18447 = G__18461;
count__18396_18448 = G__18462;
i__18397_18449 = G__18463;
continue;
} else {
var vec__18401_18464 = cljs.core.first(seq__18394_18458__$1);
var pno_18465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18401_18464,(0),null);
var pmask_18466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18401_18464,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_18465,"$ = ",pmask_18466,";"], 0));

var G__18467 = cljs.core.next(seq__18394_18458__$1);
var G__18468 = null;
var G__18469 = (0);
var G__18470 = (0);
seq__18394_18446 = G__18467;
chunk__18395_18447 = G__18468;
count__18396_18448 = G__18469;
i__18397_18449 = G__18470;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["});"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dot,(function (p__18471){
var map__18472 = p__18471;
var map__18472__$1 = ((((!((map__18472 == null)))?((((map__18472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18472.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18472):map__18472);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18472__$1,cljs.core.cst$kw$target);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18472__$1,cljs.core.cst$kw$field);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18472__$1,cljs.core.cst$kw$method);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18472__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18472__$1,cljs.core.cst$kw$env);
var env__17366__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js,(function (p__18474){
var map__18475 = p__18474;
var map__18475__$1 = ((((!((map__18475 == null)))?((((map__18475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18475):map__18475);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18475__$1,cljs.core.cst$kw$op);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18475__$1,cljs.core.cst$kw$env);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18475__$1,cljs.core.cst$kw$code);
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18475__$1,cljs.core.cst$kw$segs);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18475__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_((function (){var and__8796__auto__ = code;
if(cljs.core.truth_(and__8796__auto__)){
var G__18477 = clojure.string.trim(code);
var G__18478 = "/*";
return goog.string.startsWith(G__18477,G__18478);
} else {
return and__8796__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
} else {
var env__17366__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__17366__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$static_DASH_fns,cljs.core.cst$kw$fn_DASH_invoke_DASH_direct,cljs.core.cst$kw$optimize_DASH_constants,cljs.core.cst$kw$elide_DASH_asserts,cljs.core.cst$kw$target,cljs.core.cst$kw$cache_DASH_key,cljs.core.cst$kw$checked_DASH_arrays,cljs.core.cst$kw$language_DASH_out], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('cljs.core');"], 0));

var seq__18482 = cljs.core.seq(table);
var chunk__18483 = null;
var count__18484 = (0);
var i__18485 = (0);
while(true){
if((i__18485 < count__18484)){
var vec__18486 = chunk__18483.cljs$core$IIndexed$_nth$arity$2(null,i__18485);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18486,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18486,(1),null);
var ns_18492 = cljs.core.namespace(sym);
var name_18493 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";\n"], 0));

var G__18494 = seq__18482;
var G__18495 = chunk__18483;
var G__18496 = count__18484;
var G__18497 = (i__18485 + (1));
seq__18482 = G__18494;
chunk__18483 = G__18495;
count__18484 = G__18496;
i__18485 = G__18497;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18482);
if(temp__5457__auto__){
var seq__18482__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18482__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__18482__$1);
var G__18498 = cljs.core.chunk_rest(seq__18482__$1);
var G__18499 = c__9739__auto__;
var G__18500 = cljs.core.count(c__9739__auto__);
var G__18501 = (0);
seq__18482 = G__18498;
chunk__18483 = G__18499;
count__18484 = G__18500;
i__18485 = G__18501;
continue;
} else {
var vec__18489 = cljs.core.first(seq__18482__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18489,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18489,(1),null);
var ns_18502 = cljs.core.namespace(sym);
var name_18503 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";\n"], 0));

var G__18504 = cljs.core.next(seq__18482__$1);
var G__18505 = null;
var G__18506 = (0);
var G__18507 = (0);
seq__18482 = G__18504;
chunk__18483 = G__18505;
count__18484 = G__18506;
i__18485 = G__18507;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__18509 = arguments.length;
switch (G__18509) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.core.cst$kw$cljs$analyzer_SLASH_externs.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_18514 = cljs.core.first(ks);
var vec__18510_18515 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_18514);
var top_18516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18510_18515,(0),null);
var prefix_SINGLEQUOTE__18517 = vec__18510_18515;
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$prototype,k_18514)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__18517) == null))){
if(!((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_18516)) || (cljs.core.contains_QMARK_(known_externs,top_18516)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__18517)),";"], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_18516);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__18517)),";"], 0));
}
} else {
}

var m_18518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_18514);
if(cljs.core.empty_QMARK_(m_18518)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__18517,m_18518,top_level,known_externs);
}

var G__18519 = cljs.core.next(ks);
ks = G__18519;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;

