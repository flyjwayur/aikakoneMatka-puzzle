// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('eval_soup.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.js');
goog.require('cljs.tools.reader');
goog.require('clojure.walk');
goog.require('goog.net.XhrIo');
eval_soup.core.fix_goog_path = (function eval_soup$core$fix_goog_path(path){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//);
var last_part = cljs.core.last(parts);
var new_parts = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(parts),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_part,clojure.string.lower_case(last_part)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_part,last_part], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case(last_part)], null)));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",new_parts);
});
eval_soup.core.custom_load_BANG_ = (function eval_soup$core$custom_load_BANG_(var_args){
var G__23932 = arguments.length;
switch (G__23932) {
case 2:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (opts,cb){
if(cljs.core.truth_(cljs.core.re_matches(/^goog\/.*/,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(opts)))){
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$path,eval_soup.core.fix_goog_path),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".js"], null),cb);
} else {
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3(opts,(cljs.core.truth_(cljs.core.cst$kw$macros.cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".clj",".cljc"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cljs",".cljc",".js"], null)),cb);
}
});

eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (opts,extensions,cb){
var temp__5455__auto__ = cljs.core.first(extensions);
if(cljs.core.truth_(temp__5455__auto__)){
var extension = temp__5455__auto__;
try{return goog.net.XhrIo.send([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(extension)].join(''),((function (extension,temp__5455__auto__){
return (function (e){
if(cljs.core.truth_(e.target.isSuccess())){
var G__23934 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lang,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(extension,".js"))?cljs.core.cst$kw$js:cljs.core.cst$kw$clj),cljs.core.cst$kw$source,e.target.getResponseText()], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__23934) : cb.call(null,G__23934));
} else {
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.rest(extensions),cb);
}
});})(extension,temp__5455__auto__))
);
}catch (e23933){if((e23933 instanceof Error)){
var _ = e23933;
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.rest(extensions),cb);
} else {
throw e23933;

}
}} else {
var G__23935 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lang,cljs.core.cst$kw$clj,cljs.core.cst$kw$source,""], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__23935) : cb.call(null,G__23935));
}
});

eval_soup.core.custom_load_BANG_.cljs$lang$maxFixedArity = 3;

eval_soup.core.str__GT_form = (function eval_soup$core$str__GT_form(ns_sym,s){
try{var _STAR_ns_STAR_23938 = cljs.core._STAR_ns_STAR_;
cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns_sym);

try{return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$read_DASH_cond,cljs.core.cst$kw$allow], null),s);
}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_23938;
}}catch (e23937){if((e23937 instanceof Error)){
var _ = e23937;
return null;
} else {
throw e23937;

}
}});
eval_soup.core.eval_forms = (function eval_soup$core$eval_forms(forms,cb,_STAR_state,_STAR_current_ns,custom_load){
var opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$eval,cljs.js.js_eval,cljs.core.cst$kw$load,custom_load,cljs.core.cst$kw$context,cljs.core.cst$kw$expr,cljs.core.cst$kw$def_DASH_emits_DASH_var,true], null);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var _STAR_forms = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(forms);
var _STAR_results = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var c__21958__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (state_24032){
var state_val_24033 = (state_24032[(1)]);
if((state_val_24033 === (7))){
var inst_23983 = (state_24032[(2)]);
var inst_23984 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_forms,cljs.core.rest);
var state_24032__$1 = (function (){var statearr_24034 = state_24032;
(statearr_24034[(7)] = inst_23984);

(statearr_24034[(8)] = inst_23983);

return statearr_24034;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24032__$1,(19),channel);
} else {
if((state_val_24033 === (20))){
var inst_23987 = (state_24032[(9)]);
var inst_23992 = inst_23987.cljs$lang$protocol_mask$partition0$;
var inst_23993 = (inst_23992 & (64));
var inst_23994 = inst_23987.cljs$core$ISeq$;
var inst_23995 = (cljs.core.PROTOCOL_SENTINEL === inst_23994);
var inst_23996 = (inst_23993) || (inst_23995);
var state_24032__$1 = state_24032;
if(cljs.core.truth_(inst_23996)){
var statearr_24035_24083 = state_24032__$1;
(statearr_24035_24083[(1)] = (23));

} else {
var statearr_24036_24084 = state_24032__$1;
(statearr_24036_24084[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (27))){
var inst_23987 = (state_24032[(9)]);
var state_24032__$1 = state_24032;
var statearr_24037_24085 = state_24032__$1;
(statearr_24037_24085[(2)] = inst_23987);

(statearr_24037_24085[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (1))){
var state_24032__$1 = state_24032;
var statearr_24038_24086 = state_24032__$1;
(statearr_24038_24086[(2)] = null);

(statearr_24038_24086[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (24))){
var state_24032__$1 = state_24032;
var statearr_24039_24087 = state_24032__$1;
(statearr_24039_24087[(2)] = false);

(statearr_24039_24087[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (4))){
var state_24032__$1 = state_24032;
var statearr_24040_24088 = state_24032__$1;
(statearr_24040_24088[(2)] = null);

(statearr_24040_24088[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (15))){
var inst_23967 = (state_24032[(2)]);
var state_24032__$1 = state_24032;
var statearr_24041_24089 = state_24032__$1;
(statearr_24041_24089[(2)] = inst_23967);

(statearr_24041_24089[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (21))){
var state_24032__$1 = state_24032;
var statearr_24042_24090 = state_24032__$1;
(statearr_24042_24090[(2)] = false);

(statearr_24042_24090[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (31))){
var inst_24019 = (state_24032[(2)]);
var inst_24020 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_results,cljs.core.conj,inst_24019);
var state_24032__$1 = (function (){var statearr_24043 = state_24032;
(statearr_24043[(10)] = inst_24020);

return statearr_24043;
})();
var statearr_24044_24091 = state_24032__$1;
(statearr_24044_24091[(2)] = null);

(statearr_24044_24091[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (32))){
var inst_24012 = (state_24032[(11)]);
var inst_24014 = (state_24032[(2)]);
var inst_24015 = [inst_24014];
var inst_24016 = cljs.core.PersistentHashMap.fromArrays(inst_24012,inst_24015);
var state_24032__$1 = state_24032;
var statearr_24045_24092 = state_24032__$1;
(statearr_24045_24092[(2)] = inst_24016);

(statearr_24045_24092[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (13))){
var inst_23955 = (state_24032[(12)]);
var inst_23963 = cljs.core.second(inst_23955);
var inst_23964 = cljs.core.reset_BANG_(_STAR_current_ns,inst_23963);
var state_24032__$1 = state_24032;
var statearr_24046_24093 = state_24032__$1;
(statearr_24046_24093[(2)] = inst_23964);

(statearr_24046_24093[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (22))){
var inst_24003 = (state_24032[(2)]);
var state_24032__$1 = state_24032;
if(cljs.core.truth_(inst_24003)){
var statearr_24047_24094 = state_24032__$1;
(statearr_24047_24094[(1)] = (26));

} else {
var statearr_24048_24095 = state_24032__$1;
(statearr_24048_24095[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (29))){
var inst_24009 = (state_24032[(13)]);
var inst_24012 = [cljs.core.cst$kw$value];
var state_24032__$1 = (function (){var statearr_24049 = state_24032;
(statearr_24049[(11)] = inst_24012);

return statearr_24049;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24032__$1,(32),inst_24009);
} else {
if((state_val_24033 === (6))){
var inst_24024 = (state_24032[(2)]);
var state_24032__$1 = state_24032;
var statearr_24050_24096 = state_24032__$1;
(statearr_24050_24096[(2)] = inst_24024);

(statearr_24050_24096[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (28))){
var inst_24008 = (state_24032[(14)]);
var inst_24009 = (state_24032[(13)]);
var inst_24008__$1 = (state_24032[(2)]);
var inst_24009__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24008__$1,cljs.core.cst$kw$value);
var inst_24010 = (inst_24009__$1 instanceof cljs.core.async.impl.channels.ManyToManyChannel);
var state_24032__$1 = (function (){var statearr_24051 = state_24032;
(statearr_24051[(14)] = inst_24008__$1);

(statearr_24051[(13)] = inst_24009__$1);

return statearr_24051;
})();
if(cljs.core.truth_(inst_24010)){
var statearr_24052_24097 = state_24032__$1;
(statearr_24052_24097[(1)] = (29));

} else {
var statearr_24053_24098 = state_24032__$1;
(statearr_24053_24098[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (25))){
var inst_24000 = (state_24032[(2)]);
var state_24032__$1 = state_24032;
var statearr_24054_24099 = state_24032__$1;
(statearr_24054_24099[(2)] = inst_24000);

(statearr_24054_24099[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (17))){
var inst_23956 = (state_24032[(15)]);
var inst_23953 = (state_24032[(16)]);
var inst_23955 = (state_24032[(12)]);
var inst_23978 = (function (){var current_ns = inst_23953;
var form = inst_23955;
var opts__$1 = inst_23956;
return ((function (current_ns,form,opts__$1,inst_23956,inst_23953,inst_23955,state_val_24033,c__21958__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (p1__23939_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,p1__23939_SHARP_);
});
;})(current_ns,form,opts__$1,inst_23956,inst_23953,inst_23955,state_val_24033,c__21958__auto__,opts,channel,_STAR_forms,_STAR_results))
})();
var inst_23979 = cljs.js.eval.cljs$core$IFn$_invoke$arity$4(_STAR_state,inst_23955,inst_23956,inst_23978);
var state_24032__$1 = state_24032;
var statearr_24055_24100 = state_24032__$1;
(statearr_24055_24100[(2)] = inst_23979);

(statearr_24055_24100[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (3))){
var inst_24026 = (state_24032[(2)]);
var inst_24027 = (function (){return ((function (inst_24026,state_val_24033,c__21958__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (p1__23940_SHARP_){
var or__8808__auto__ = cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(p1__23940_SHARP_);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p1__23940_SHARP_);
}
});
;})(inst_24026,state_val_24033,c__21958__auto__,opts,channel,_STAR_forms,_STAR_results))
})();
var inst_24028 = cljs.core.deref(_STAR_results);
var inst_24029 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_24027,inst_24028);
var inst_24030 = (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(inst_24029) : cb.call(null,inst_24029));
var state_24032__$1 = (function (){var statearr_24056 = state_24032;
(statearr_24056[(17)] = inst_24026);

return statearr_24056;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24032__$1,inst_24030);
} else {
if((state_val_24033 === (12))){
var inst_23955 = (state_24032[(12)]);
var inst_23970 = (state_24032[(2)]);
var inst_23971 = (inst_23955 instanceof Error);
var state_24032__$1 = (function (){var statearr_24057 = state_24032;
(statearr_24057[(18)] = inst_23970);

return statearr_24057;
})();
if(cljs.core.truth_(inst_23971)){
var statearr_24058_24101 = state_24032__$1;
(statearr_24058_24101[(1)] = (16));

} else {
var statearr_24059_24102 = state_24032__$1;
(statearr_24059_24102[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (2))){
var inst_23942 = cljs.core.deref(_STAR_forms);
var inst_23943 = cljs.core.seq(inst_23942);
var state_24032__$1 = state_24032;
if(inst_23943){
var statearr_24060_24103 = state_24032__$1;
(statearr_24060_24103[(1)] = (4));

} else {
var statearr_24061_24104 = state_24032__$1;
(statearr_24061_24104[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (23))){
var state_24032__$1 = state_24032;
var statearr_24062_24105 = state_24032__$1;
(statearr_24062_24105[(2)] = true);

(statearr_24062_24105[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (19))){
var inst_23987 = (state_24032[(9)]);
var inst_23987__$1 = (state_24032[(2)]);
var inst_23989 = (inst_23987__$1 == null);
var inst_23990 = cljs.core.not(inst_23989);
var state_24032__$1 = (function (){var statearr_24063 = state_24032;
(statearr_24063[(9)] = inst_23987__$1);

return statearr_24063;
})();
if(inst_23990){
var statearr_24064_24106 = state_24032__$1;
(statearr_24064_24106[(1)] = (20));

} else {
var statearr_24065_24107 = state_24032__$1;
(statearr_24065_24107[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (11))){
var state_24032__$1 = state_24032;
var statearr_24066_24108 = state_24032__$1;
(statearr_24066_24108[(2)] = null);

(statearr_24066_24108[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (9))){
var inst_23953 = (state_24032[(16)]);
var inst_23955 = (state_24032[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24032,(8),Error,null,(7));
var inst_23953__$1 = cljs.core.deref(_STAR_current_ns);
var inst_23954 = cljs.core.deref(_STAR_forms);
var inst_23955__$1 = cljs.core.first(inst_23954);
var inst_23956 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$ns,inst_23953__$1);
var inst_23957 = cljs.core.list_QMARK_(inst_23955__$1);
var state_24032__$1 = (function (){var statearr_24067 = state_24032;
(statearr_24067[(15)] = inst_23956);

(statearr_24067[(16)] = inst_23953__$1);

(statearr_24067[(12)] = inst_23955__$1);

return statearr_24067;
})();
if(inst_23957){
var statearr_24068_24109 = state_24032__$1;
(statearr_24068_24109[(1)] = (10));

} else {
var statearr_24069_24110 = state_24032__$1;
(statearr_24069_24110[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (5))){
var state_24032__$1 = state_24032;
var statearr_24070_24111 = state_24032__$1;
(statearr_24070_24111[(2)] = null);

(statearr_24070_24111[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (14))){
var state_24032__$1 = state_24032;
var statearr_24071_24112 = state_24032__$1;
(statearr_24071_24112[(2)] = null);

(statearr_24071_24112[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (26))){
var inst_23987 = (state_24032[(9)]);
var inst_24005 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23987);
var state_24032__$1 = state_24032;
var statearr_24072_24113 = state_24032__$1;
(statearr_24072_24113[(2)] = inst_24005);

(statearr_24072_24113[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (16))){
var inst_23955 = (state_24032[(12)]);
var inst_23973 = [cljs.core.cst$kw$error];
var inst_23974 = [inst_23955];
var inst_23975 = cljs.core.PersistentHashMap.fromArrays(inst_23973,inst_23974);
var inst_23976 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_23975);
var state_24032__$1 = state_24032;
var statearr_24073_24114 = state_24032__$1;
(statearr_24073_24114[(2)] = inst_23976);

(statearr_24073_24114[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (30))){
var inst_24008 = (state_24032[(14)]);
var state_24032__$1 = state_24032;
var statearr_24074_24115 = state_24032__$1;
(statearr_24074_24115[(2)] = inst_24008);

(statearr_24074_24115[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (10))){
var inst_23955 = (state_24032[(12)]);
var inst_23959 = cljs.core.cst$sym$ns;
var inst_23960 = cljs.core.first(inst_23955);
var inst_23961 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23959,inst_23960);
var state_24032__$1 = state_24032;
if(inst_23961){
var statearr_24075_24116 = state_24032__$1;
(statearr_24075_24116[(1)] = (13));

} else {
var statearr_24076_24117 = state_24032__$1;
(statearr_24076_24117[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (18))){
var inst_23981 = (state_24032[(2)]);
var state_24032__$1 = state_24032;
var statearr_24077_24118 = state_24032__$1;
(statearr_24077_24118[(2)] = inst_23981);


cljs.core.async.impl.ioc_helpers.process_exception(state_24032__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_24033 === (8))){
var inst_23945 = (state_24032[(2)]);
var inst_23946 = [cljs.core.cst$kw$error];
var inst_23947 = [inst_23945];
var inst_23948 = cljs.core.PersistentHashMap.fromArrays(inst_23946,inst_23947);
var inst_23949 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_23948);
var state_24032__$1 = state_24032;
var statearr_24078_24119 = state_24032__$1;
(statearr_24078_24119[(2)] = inst_23949);


cljs.core.async.impl.ioc_helpers.process_exception(state_24032__$1);

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21958__auto__,opts,channel,_STAR_forms,_STAR_results))
;
return ((function (switch__21856__auto__,c__21958__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function() {
var eval_soup$core$eval_forms_$_state_machine__21857__auto__ = null;
var eval_soup$core$eval_forms_$_state_machine__21857__auto____0 = (function (){
var statearr_24079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24079[(0)] = eval_soup$core$eval_forms_$_state_machine__21857__auto__);

(statearr_24079[(1)] = (1));

return statearr_24079;
});
var eval_soup$core$eval_forms_$_state_machine__21857__auto____1 = (function (state_24032){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_24032);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e24080){if((e24080 instanceof Object)){
var ex__21860__auto__ = e24080;
var statearr_24081_24120 = state_24032;
(statearr_24081_24120[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24032);

return cljs.core.cst$kw$recur;
} else {
throw e24080;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__24121 = state_24032;
state_24032 = G__24121;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
eval_soup$core$eval_forms_$_state_machine__21857__auto__ = function(state_24032){
switch(arguments.length){
case 0:
return eval_soup$core$eval_forms_$_state_machine__21857__auto____0.call(this);
case 1:
return eval_soup$core$eval_forms_$_state_machine__21857__auto____1.call(this,state_24032);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
eval_soup$core$eval_forms_$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = eval_soup$core$eval_forms_$_state_machine__21857__auto____0;
eval_soup$core$eval_forms_$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = eval_soup$core$eval_forms_$_state_machine__21857__auto____1;
return eval_soup$core$eval_forms_$_state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto__,opts,channel,_STAR_forms,_STAR_results))
})();
var state__21960__auto__ = (function (){var statearr_24082 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_24082[(6)] = c__21958__auto__);

return statearr_24082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto__,opts,channel,_STAR_forms,_STAR_results))
);

return c__21958__auto__;
});
eval_soup.core.wrap_macroexpand = (function eval_soup$core$wrap_macroexpand(form){
if(cljs.core.coll_QMARK_(form)){
return cljs.core._conj((function (){var x__9762__auto__ = cljs.core._conj((function (){var x__9762__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.cst$sym$quote);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.cst$sym$macroexpand);
} else {
return form;
}
});
eval_soup.core.add_timeout_reset = (function eval_soup$core$add_timeout_reset(form){
return cljs.core._conj((function (){var x__9762__auto__ = cljs.core.list(cljs.core.cst$sym$cljs$user_SLASH_ps_DASH_reset_DASH_timeout_BANG_);
return cljs.core._conj((function (){var x__9762__auto____$1 = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),cljs.core.cst$sym$do);
});
eval_soup.core.add_timeout_checks = (function eval_soup$core$add_timeout_checks(timeout,form){
if((cljs.core.seq_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(form)))){
return form;
} else {
var form__$1 = clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(eval_soup.core.add_timeout_checks,timeout),cljs.core.identity,form);
if((cljs.core.seq_QMARK_(form__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$recur,cljs.core.first(form__$1)))){
return cljs.core._conj((function (){var x__9762__auto__ = cljs.core._conj((function (){var x__9762__auto__ = timeout;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.cst$sym$cljs$user_SLASH_ps_DASH_check_DASH_for_DASH_timeout_BANG_);
return cljs.core._conj((function (){var x__9762__auto____$1 = form__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),cljs.core.cst$sym$do);
} else {
return form__$1;
}
}
});
eval_soup.core.add_timeouts_if_necessary = (function eval_soup$core$add_timeouts_if_necessary(timeout,forms,expanded_forms){
var iter__9690__auto__ = (function eval_soup$core$add_timeouts_if_necessary_$_iter__24122(s__24123){
return (new cljs.core.LazySeq(null,(function (){
var s__24123__$1 = s__24123;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__24123__$1);
if(temp__5457__auto__){
var s__24123__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24123__$2)){
var c__9688__auto__ = cljs.core.chunk_first(s__24123__$2);
var size__9689__auto__ = cljs.core.count(c__9688__auto__);
var b__24125 = cljs.core.chunk_buffer(size__9689__auto__);
if((function (){var i__24124 = (0);
while(true){
if((i__24124 < size__9689__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9688__auto__,i__24124);
var expanded_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(expanded_forms,i);
cljs.core.chunk_append(b__24125,(((cljs.core.coll_QMARK_(expanded_form)) && (cljs.core.contains_QMARK_(cljs.core.set(cljs.core.flatten(expanded_form)),cljs.core.cst$sym$recur)))?eval_soup.core.add_timeout_reset(eval_soup.core.add_timeout_checks(timeout,expanded_form)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(forms,i)));

var G__24126 = (i__24124 + (1));
i__24124 = G__24126;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24125),eval_soup$core$add_timeouts_if_necessary_$_iter__24122(cljs.core.chunk_rest(s__24123__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24125),null);
}
} else {
var i = cljs.core.first(s__24123__$2);
var expanded_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(expanded_forms,i);
return cljs.core.cons((((cljs.core.coll_QMARK_(expanded_form)) && (cljs.core.contains_QMARK_(cljs.core.set(cljs.core.flatten(expanded_form)),cljs.core.cst$sym$recur)))?eval_soup.core.add_timeout_reset(eval_soup.core.add_timeout_checks(timeout,expanded_form)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(forms,i)),eval_soup$core$add_timeouts_if_necessary_$_iter__24122(cljs.core.rest(s__24123__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9690__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(forms)));
});
if(typeof eval_soup.core._STAR_cljs_state !== 'undefined'){
} else {
eval_soup.core._STAR_cljs_state = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
}
/**
 * Evaluates each form, providing the results in a callback.
 *   If any of the forms are strings, it will read them first.
 */
eval_soup.core.code__GT_results = (function eval_soup$core$code__GT_results(var_args){
var G__24129 = arguments.length;
switch (G__24129) {
case 2:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2 = (function (forms,cb){
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3(forms,cb,cljs.core.PersistentArrayMap.EMPTY);
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3 = (function (forms,cb,p__24130){
var map__24131 = p__24130;
var map__24131__$1 = ((((!((map__24131 == null)))?((((map__24131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24131):map__24131);
var opts = map__24131__$1;
var _STAR_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24131__$1,cljs.core.cst$kw$_STAR_current_DASH_ns,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$user));
var _STAR_state = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24131__$1,cljs.core.cst$kw$_STAR_state,eval_soup.core._STAR_cljs_state);
var custom_load = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24131__$1,cljs.core.cst$kw$custom_DASH_load,eval_soup.core.custom_load_BANG_);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24131__$1,cljs.core.cst$kw$timeout,(4000));
var disable_timeout_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24131__$1,cljs.core.cst$kw$disable_DASH_timeout_QMARK_,false);
var forms__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__24131,map__24131__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_){
return (function (p1__24127_SHARP_){
if(typeof p1__24127_SHARP_ === 'string'){
return eval_soup.core.str__GT_form(cljs.core.deref(_STAR_current_ns),p1__24127_SHARP_);
} else {
return p1__24127_SHARP_;
}
});})(map__24131,map__24131__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_))
,forms);
var init_forms = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$ns,cljs.core.cst$sym$cljs$user)], null),(cljs.core.truth_(disable_timeout_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$def,cljs.core.cst$sym$ps_DASH_last_DASH_time,cljs.core.list(cljs.core.cst$sym$atom,(0))),cljs.core.list(cljs.core.cst$sym$defn,cljs.core.cst$sym$ps_DASH_reset_DASH_timeout_BANG_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$reset_BANG_,cljs.core.cst$sym$ps_DASH_last_DASH_time,cljs.core.list(cljs.core.cst$sym$$getTime,cljs.core.list(cljs.core.cst$sym$js_SLASH_Date$)))),cljs.core.list(cljs.core.cst$sym$defn,cljs.core.cst$sym$ps_DASH_check_DASH_for_DASH_timeout_BANG_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$timeout], null),cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$_GT_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.list(cljs.core.cst$sym$$getTime,cljs.core.list(cljs.core.cst$sym$js_SLASH_Date$)),cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$ps_DASH_last_DASH_time)),cljs.core.cst$sym$timeout),cljs.core.list(cljs.core.cst$sym$throw,cljs.core.list(cljs.core.cst$sym$js_SLASH_Error$,"Execution timed out."))))], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$set_BANG_,cljs.core.cst$sym$_STAR_print_DASH_err_DASH_fn_STAR_,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_], null))),cljs.core._conj((function (){var x__9762__auto__ = cljs.core.deref(_STAR_current_ns);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.cst$sym$ns)], null)], 0)));
var timeout_cb = ((function (forms__$1,init_forms,map__24131,map__24131__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_){
return (function (results){
return eval_soup.core.eval_forms(eval_soup.core.add_timeouts_if_necessary(timeout,forms__$1,results),cb,_STAR_state,_STAR_current_ns,custom_load);
});})(forms__$1,init_forms,map__24131,map__24131__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_))
;
var init_cb = ((function (forms__$1,init_forms,timeout_cb,map__24131,map__24131__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_){
return (function (results){
return eval_soup.core.eval_forms((cljs.core.truth_(disable_timeout_QMARK_)?forms__$1:cljs.core.map.cljs$core$IFn$_invoke$arity$2(eval_soup.core.wrap_macroexpand,forms__$1)),(cljs.core.truth_(disable_timeout_QMARK_)?cb:timeout_cb),_STAR_state,_STAR_current_ns,custom_load);
});})(forms__$1,init_forms,timeout_cb,map__24131,map__24131__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_))
;
return eval_soup.core.eval_forms(init_forms,init_cb,_STAR_state,_STAR_current_ns,custom_load);
});

eval_soup.core.code__GT_results.cljs$lang$maxFixedArity = 3;

