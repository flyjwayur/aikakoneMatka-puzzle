// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5457__auto__ = (function (){var fexpr__25468 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__25468.cljs$core$IFn$_invoke$arity$1 ? fexpr__25468.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__25468.call(null,channel));
})();
if(cljs.core.truth_(temp__5457__auto__)){
var req = temp__5457__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__25469){
var vec__25470 = p__25469;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25470,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25470,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__25473 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__25473)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__25473)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__25473)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__25473)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__25473)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__25473)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25473)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__25474){
var map__25475 = p__25474;
var map__25475__$1 = ((((!((map__25475 == null)))?((((map__25475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25475):map__25475);
var request = map__25475__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25475__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25475__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25475__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__8808__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__25477 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__25477,default_headers);

cljs_http.core.apply_response_type_BANG_(G__25477,response_type);

G__25477.setTimeoutInterval(timeout);

G__25477.setWithCredentials(send_credentials);

return G__25477;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__25478){
var map__25479 = p__25478;
var map__25479__$1 = ((((!((map__25479 == null)))?((((map__25479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25479):map__25479);
var request = map__25479__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25479__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25479__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25479__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25479__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25479__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25479__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__8808__auto__ = request_method;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__25479,map__25479__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__25481 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__25481) : cljs_http.core.error_kw.call(null,G__25481));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr,map__25479,map__25479__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_25504 = ((function (channel,request_url,method,headers__$1,xhr,map__25479,map__25479__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr,map__25479,map__25479__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__25482_25505 = xhr;
G__25482_25505.setProgressEventsEnabled(true);

G__25482_25505.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_25504,cljs.core.cst$kw$upload));

G__25482_25505.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_25504,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__21958__auto___25506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto___25506,channel,request_url,method,headers__$1,xhr,map__25479,map__25479__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto___25506,channel,request_url,method,headers__$1,xhr,map__25479,map__25479__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_25493){
var state_val_25494 = (state_25493[(1)]);
if((state_val_25494 === (1))){
var state_25493__$1 = state_25493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25493__$1,(2),cancel);
} else {
if((state_val_25494 === (2))){
var inst_25484 = (state_25493[(2)]);
var inst_25485 = xhr.isComplete();
var inst_25486 = cljs.core.not(inst_25485);
var state_25493__$1 = (function (){var statearr_25495 = state_25493;
(statearr_25495[(7)] = inst_25484);

return statearr_25495;
})();
if(inst_25486){
var statearr_25496_25507 = state_25493__$1;
(statearr_25496_25507[(1)] = (3));

} else {
var statearr_25497_25508 = state_25493__$1;
(statearr_25497_25508[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25494 === (3))){
var inst_25488 = xhr.abort();
var state_25493__$1 = state_25493;
var statearr_25498_25509 = state_25493__$1;
(statearr_25498_25509[(2)] = inst_25488);

(statearr_25498_25509[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25494 === (4))){
var state_25493__$1 = state_25493;
var statearr_25499_25510 = state_25493__$1;
(statearr_25499_25510[(2)] = null);

(statearr_25499_25510[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25494 === (5))){
var inst_25491 = (state_25493[(2)]);
var state_25493__$1 = state_25493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25493__$1,inst_25491);
} else {
return null;
}
}
}
}
}
});})(c__21958__auto___25506,channel,request_url,method,headers__$1,xhr,map__25479,map__25479__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__21856__auto__,c__21958__auto___25506,channel,request_url,method,headers__$1,xhr,map__25479,map__25479__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__21857__auto__ = null;
var cljs_http$core$xhr_$_state_machine__21857__auto____0 = (function (){
var statearr_25500 = [null,null,null,null,null,null,null,null];
(statearr_25500[(0)] = cljs_http$core$xhr_$_state_machine__21857__auto__);

(statearr_25500[(1)] = (1));

return statearr_25500;
});
var cljs_http$core$xhr_$_state_machine__21857__auto____1 = (function (state_25493){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_25493);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e25501){if((e25501 instanceof Object)){
var ex__21860__auto__ = e25501;
var statearr_25502_25511 = state_25493;
(statearr_25502_25511[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25493);

return cljs.core.cst$kw$recur;
} else {
throw e25501;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__25512 = state_25493;
state_25493 = G__25512;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__21857__auto__ = function(state_25493){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__21857__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__21857__auto____1.call(this,state_25493);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__21857__auto____0;
cljs_http$core$xhr_$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__21857__auto____1;
return cljs_http$core$xhr_$_state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto___25506,channel,request_url,method,headers__$1,xhr,map__25479,map__25479__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__21960__auto__ = (function (){var statearr_25503 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_25503[(6)] = c__21958__auto___25506);

return statearr_25503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto___25506,channel,request_url,method,headers__$1,xhr,map__25479,map__25479__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__25513){
var map__25514 = p__25513;
var map__25514__$1 = ((((!((map__25514 == null)))?((((map__25514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25514.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25514):map__25514);
var request = map__25514__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25514__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25514__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25514__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25514__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_25527 = jsonp.send(null,((function (channel,jsonp,map__25514,map__25514__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__25514,map__25514__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__25514,map__25514__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__25514,map__25514__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_25527], null));

if(cljs.core.truth_(cancel)){
var c__21958__auto___25528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21958__auto___25528,req_25527,channel,jsonp,map__25514,map__25514__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__21959__auto__ = (function (){var switch__21856__auto__ = ((function (c__21958__auto___25528,req_25527,channel,jsonp,map__25514,map__25514__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_25520){
var state_val_25521 = (state_25520[(1)]);
if((state_val_25521 === (1))){
var state_25520__$1 = state_25520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25520__$1,(2),cancel);
} else {
if((state_val_25521 === (2))){
var inst_25517 = (state_25520[(2)]);
var inst_25518 = jsonp.cancel(req_25527);
var state_25520__$1 = (function (){var statearr_25522 = state_25520;
(statearr_25522[(7)] = inst_25517);

return statearr_25522;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25520__$1,inst_25518);
} else {
return null;
}
}
});})(c__21958__auto___25528,req_25527,channel,jsonp,map__25514,map__25514__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__21856__auto__,c__21958__auto___25528,req_25527,channel,jsonp,map__25514,map__25514__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__21857__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__21857__auto____0 = (function (){
var statearr_25523 = [null,null,null,null,null,null,null,null];
(statearr_25523[(0)] = cljs_http$core$jsonp_$_state_machine__21857__auto__);

(statearr_25523[(1)] = (1));

return statearr_25523;
});
var cljs_http$core$jsonp_$_state_machine__21857__auto____1 = (function (state_25520){
while(true){
var ret_value__21858__auto__ = (function (){try{while(true){
var result__21859__auto__ = switch__21856__auto__(state_25520);
if(cljs.core.keyword_identical_QMARK_(result__21859__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21859__auto__;
}
break;
}
}catch (e25524){if((e25524 instanceof Object)){
var ex__21860__auto__ = e25524;
var statearr_25525_25529 = state_25520;
(statearr_25525_25529[(5)] = ex__21860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25520);

return cljs.core.cst$kw$recur;
} else {
throw e25524;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21858__auto__,cljs.core.cst$kw$recur)){
var G__25530 = state_25520;
state_25520 = G__25530;
continue;
} else {
return ret_value__21858__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__21857__auto__ = function(state_25520){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__21857__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__21857__auto____1.call(this,state_25520);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__21857__auto____0;
cljs_http$core$jsonp_$_state_machine__21857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__21857__auto____1;
return cljs_http$core$jsonp_$_state_machine__21857__auto__;
})()
;})(switch__21856__auto__,c__21958__auto___25528,req_25527,channel,jsonp,map__25514,map__25514__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__21960__auto__ = (function (){var statearr_25526 = (f__21959__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21959__auto__.cljs$core$IFn$_invoke$arity$0() : f__21959__auto__.call(null));
(statearr_25526[(6)] = c__21958__auto___25528);

return statearr_25526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21960__auto__);
});})(c__21958__auto___25528,req_25527,channel,jsonp,map__25514,map__25514__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__25531){
var map__25532 = p__25531;
var map__25532__$1 = ((((!((map__25532 == null)))?((((map__25532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25532.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25532):map__25532);
var request = map__25532__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25532__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
