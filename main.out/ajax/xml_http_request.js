// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__24160 = e.target.readyState;
var fexpr__24159 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__24159.cljs$core$IFn$_invoke$arity$1 ? fexpr__24159.cljs$core$IFn$_invoke$arity$1(G__24160) : fexpr__24159.call(null,G__24160));
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__24162,handler){
var map__24163 = p__24162;
var map__24163__$1 = ((((!((map__24163 == null)))?((((map__24163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24163):map__24163);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24163__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24163__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24163__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24163__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24163__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24163__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24163__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__24163,map__24163__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__24161_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__24161_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__24163,map__24163__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___24175 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___24175)){
var response_type_24176 = temp__5457__auto___24175;
this$__$1.responseType = cljs.core.name(response_type_24176);
} else {
}

var seq__24165_24177 = cljs.core.seq(headers);
var chunk__24166_24178 = null;
var count__24167_24179 = (0);
var i__24168_24180 = (0);
while(true){
if((i__24168_24180 < count__24167_24179)){
var vec__24169_24181 = chunk__24166_24178.cljs$core$IIndexed$_nth$arity$2(null,i__24168_24180);
var k_24182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24169_24181,(0),null);
var v_24183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24169_24181,(1),null);
this$__$1.setRequestHeader(k_24182,v_24183);

var G__24184 = seq__24165_24177;
var G__24185 = chunk__24166_24178;
var G__24186 = count__24167_24179;
var G__24187 = (i__24168_24180 + (1));
seq__24165_24177 = G__24184;
chunk__24166_24178 = G__24185;
count__24167_24179 = G__24186;
i__24168_24180 = G__24187;
continue;
} else {
var temp__5457__auto___24188 = cljs.core.seq(seq__24165_24177);
if(temp__5457__auto___24188){
var seq__24165_24189__$1 = temp__5457__auto___24188;
if(cljs.core.chunked_seq_QMARK_(seq__24165_24189__$1)){
var c__9739__auto___24190 = cljs.core.chunk_first(seq__24165_24189__$1);
var G__24191 = cljs.core.chunk_rest(seq__24165_24189__$1);
var G__24192 = c__9739__auto___24190;
var G__24193 = cljs.core.count(c__9739__auto___24190);
var G__24194 = (0);
seq__24165_24177 = G__24191;
chunk__24166_24178 = G__24192;
count__24167_24179 = G__24193;
i__24168_24180 = G__24194;
continue;
} else {
var vec__24172_24195 = cljs.core.first(seq__24165_24189__$1);
var k_24196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24172_24195,(0),null);
var v_24197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24172_24195,(1),null);
this$__$1.setRequestHeader(k_24196,v_24197);

var G__24198 = cljs.core.next(seq__24165_24189__$1);
var G__24199 = null;
var G__24200 = (0);
var G__24201 = (0);
seq__24165_24177 = G__24198;
chunk__24166_24178 = G__24199;
count__24167_24179 = G__24200;
i__24168_24180 = G__24201;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__8808__auto__ = body;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
