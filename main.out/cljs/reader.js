// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.edn');
goog.require('goog.string.StringBuffer');
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.count(s))){
return s;
} else {
if((width < cljs.core.count(s))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__15488 = b.append("0");
b = G__15488;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod(num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return cljs.core.not(cljs.reader.divisible_QMARK_(num,div));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
var and__8796__auto__ = cljs.reader.divisible_QMARK_(year,(4));
if(cljs.core.truth_(and__8796__auto__)){
var or__8808__auto__ = cljs.reader.indivisible_QMARK_(year,(100));
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.reader.divisible_QMARK_(year,(400));
}
} else {
return and__8796__auto__;
}
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not(isNaN(n))){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if(((low <= n)) && ((n <= high))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," Failed:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(low),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(high)].join('')));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__15489 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15489,(0),null);
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15489,(1),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15489,(2),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15489,(3),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15489,(4),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15489,(5),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15489,(6),null);
var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15489,(7),null);
var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15489,(8),null);
var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15489,(9),null);
var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15489,(10),null);
var v = vec__15489;
if(cljs.core.not(v)){
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
} else {
var years__$1 = cljs.reader.parse_int(years);
var months__$1 = (function (){var or__8808__auto__ = cljs.reader.parse_int(months);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__8808__auto__ = cljs.reader.parse_int(days);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__8808__auto__ = cljs.reader.parse_int(hours);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__8808__auto__ = cljs.reader.parse_int(minutes);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__8808__auto__ = cljs.reader.parse_int(seconds);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__8808__auto__ = cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(fraction,(3)));
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__8808__auto__ = cljs.reader.parse_int(offset_hours);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__8808__auto__ = cljs.reader.parse_int(offset_minutes);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check((1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check((1),days__$1,(function (){var G__15492 = months__$1;
var G__15493 = cljs.reader.leap_year_QMARK_(years__$1);
return (cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2(G__15492,G__15493) : cljs.reader.days_in_month.call(null,G__15492,G__15493));
})(),"timestamp day field must be in range 1..last day in month"),cljs.reader.check((0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check((0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check((0),seconds__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check((0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__5455__auto__ = cljs.reader.parse_and_validate_timestamp(ts);
if(cljs.core.truth_(temp__5455__auto__)){
var vec__15494 = temp__5455__auto__;
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15494,(0),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15494,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15494,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15494,(3),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15494,(4),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15494,(5),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15494,(6),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15494,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('')));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp(s);
} else {
throw (new Error("Instance literal expects a string for its timestamp."));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,elems);
} else {
throw (new Error("Queue literal expects a vector for its elements."));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_(form)){
var arr = [];
var seq__15497_15519 = cljs.core.seq(form);
var chunk__15498_15520 = null;
var count__15499_15521 = (0);
var i__15500_15522 = (0);
while(true){
if((i__15500_15522 < count__15499_15521)){
var x_15523 = chunk__15498_15520.cljs$core$IIndexed$_nth$arity$2(null,i__15500_15522);
arr.push(x_15523);

var G__15524 = seq__15497_15519;
var G__15525 = chunk__15498_15520;
var G__15526 = count__15499_15521;
var G__15527 = (i__15500_15522 + (1));
seq__15497_15519 = G__15524;
chunk__15498_15520 = G__15525;
count__15499_15521 = G__15526;
i__15500_15522 = G__15527;
continue;
} else {
var temp__5457__auto___15528 = cljs.core.seq(seq__15497_15519);
if(temp__5457__auto___15528){
var seq__15497_15529__$1 = temp__5457__auto___15528;
if(cljs.core.chunked_seq_QMARK_(seq__15497_15529__$1)){
var c__9739__auto___15530 = cljs.core.chunk_first(seq__15497_15529__$1);
var G__15531 = cljs.core.chunk_rest(seq__15497_15529__$1);
var G__15532 = c__9739__auto___15530;
var G__15533 = cljs.core.count(c__9739__auto___15530);
var G__15534 = (0);
seq__15497_15519 = G__15531;
chunk__15498_15520 = G__15532;
count__15499_15521 = G__15533;
i__15500_15522 = G__15534;
continue;
} else {
var x_15535 = cljs.core.first(seq__15497_15529__$1);
arr.push(x_15535);

var G__15536 = cljs.core.next(seq__15497_15529__$1);
var G__15537 = null;
var G__15538 = (0);
var G__15539 = (0);
seq__15497_15519 = G__15536;
chunk__15498_15520 = G__15537;
count__15499_15521 = G__15538;
i__15500_15522 = G__15539;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_(form)){
var obj = {};
var seq__15503_15540 = cljs.core.seq(form);
var chunk__15504_15541 = null;
var count__15505_15542 = (0);
var i__15506_15543 = (0);
while(true){
if((i__15506_15543 < count__15505_15542)){
var vec__15507_15544 = chunk__15504_15541.cljs$core$IIndexed$_nth$arity$2(null,i__15506_15543);
var k_15545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15507_15544,(0),null);
var v_15546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15507_15544,(1),null);
var G__15510_15547 = obj;
var G__15511_15548 = cljs.core.name(k_15545);
var G__15512_15549 = v_15546;
goog.object.set(G__15510_15547,G__15511_15548,G__15512_15549);

var G__15550 = seq__15503_15540;
var G__15551 = chunk__15504_15541;
var G__15552 = count__15505_15542;
var G__15553 = (i__15506_15543 + (1));
seq__15503_15540 = G__15550;
chunk__15504_15541 = G__15551;
count__15505_15542 = G__15552;
i__15506_15543 = G__15553;
continue;
} else {
var temp__5457__auto___15554 = cljs.core.seq(seq__15503_15540);
if(temp__5457__auto___15554){
var seq__15503_15555__$1 = temp__5457__auto___15554;
if(cljs.core.chunked_seq_QMARK_(seq__15503_15555__$1)){
var c__9739__auto___15556 = cljs.core.chunk_first(seq__15503_15555__$1);
var G__15557 = cljs.core.chunk_rest(seq__15503_15555__$1);
var G__15558 = c__9739__auto___15556;
var G__15559 = cljs.core.count(c__9739__auto___15556);
var G__15560 = (0);
seq__15503_15540 = G__15557;
chunk__15504_15541 = G__15558;
count__15505_15542 = G__15559;
i__15506_15543 = G__15560;
continue;
} else {
var vec__15513_15561 = cljs.core.first(seq__15503_15555__$1);
var k_15562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15513_15561,(0),null);
var v_15563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15513_15561,(1),null);
var G__15516_15564 = obj;
var G__15517_15565 = cljs.core.name(k_15562);
var G__15518_15566 = v_15563;
goog.object.set(G__15516_15564,G__15517_15565,G__15518_15566);

var G__15567 = cljs.core.next(seq__15503_15555__$1);
var G__15568 = null;
var G__15569 = (0);
var G__15570 = (0);
seq__15503_15540 = G__15567;
chunk__15504_15541 = G__15568;
count__15505_15542 = G__15569;
i__15506_15543 = G__15570;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
throw (new Error(["JS literal expects a vector or map containing ","only string or unqualified keyword keys"].join('')));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid(uuid);
} else {
throw (new Error("UUID literal expects a string as its representation."));
}
});
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$sym$inst,cljs.reader.read_date,cljs.core.cst$sym$uuid,cljs.reader.read_uuid,cljs.core.cst$sym$queue,cljs.reader.read_queue,cljs.core.cst$sym$js,cljs.reader.read_js], null),cljs.core.PersistentArrayMap.EMPTY], 0)));
/**
 * Reads the first object from an cljs.tools.reader.reader-types/IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * cljs.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.reader.read = (function cljs$reader$read(var_args){
var G__15572 = arguments.length;
switch (G__15572) {
case 1:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$readers,cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),cljs.core.cst$kw$eof,null], null),reader);
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__15573,reader){
var map__15574 = p__15573;
var map__15574__$1 = ((((!((map__15574 == null)))?((((map__15574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15574):map__15574);
var opts = map__15574__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15574__$1,cljs.core.cst$kw$eof);
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),cljs.core.cst$kw$readers,((function (map__15574,map__15574__$1,opts,eof){
return (function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
});})(map__15574,map__15574__$1,opts,eof))
),reader);
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(reader,eof_error_QMARK_,eof,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),cljs.core.cst$kw$readers,(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})));
});

cljs.reader.read.cljs$lang$maxFixedArity = 4;

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per cljs.tools.reader.edn/read
 */
cljs.reader.read_string = (function cljs$reader$read_string(var_args){
var G__15578 = arguments.length;
switch (G__15578) {
case 1:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$readers,cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),cljs.core.cst$kw$eof,null], null),s);
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null),opts], 0)),cljs.core.cst$kw$readers,(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})),s);
});

cljs.reader.read_string.cljs$lang$maxFixedArity = 2;

cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return f;
});})(old_parser))
);

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return null;
});})(old_parser))
);

return old_parser;
});
