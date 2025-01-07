(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();var ah={exports:{}},Jo={},lh={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function jv(){if(Pp)return we;Pp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),x=Symbol.iterator;function b(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,X={};function H(D,j,ae){this.props=D,this.context=j,this.refs=X,this.updater=ae||K}H.prototype.isReactComponent={},H.prototype.setState=function(D,j){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,j,"setState")},H.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function me(){}me.prototype=H.prototype;function pe(D,j,ae){this.props=D,this.context=j,this.refs=X,this.updater=ae||K}var ge=pe.prototype=new me;ge.constructor=pe,Q(ge,H.prototype),ge.isPureReactComponent=!0;var ye=Array.isArray,Oe=Object.prototype.hasOwnProperty,Ae={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function T(D,j,ae){var _e,Ee={},Re=null,De=null;if(j!=null)for(_e in j.ref!==void 0&&(De=j.ref),j.key!==void 0&&(Re=""+j.key),j)Oe.call(j,_e)&&!P.hasOwnProperty(_e)&&(Ee[_e]=j[_e]);var xe=arguments.length-2;if(xe===1)Ee.children=ae;else if(1<xe){for(var Ue=Array(xe),ct=0;ct<xe;ct++)Ue[ct]=arguments[ct+2];Ee.children=Ue}if(D&&D.defaultProps)for(_e in xe=D.defaultProps,xe)Ee[_e]===void 0&&(Ee[_e]=xe[_e]);return{$$typeof:i,type:D,key:Re,ref:De,props:Ee,_owner:Ae.current}}function S(D,j){return{$$typeof:i,type:D.type,key:j,ref:D.ref,props:D.props,_owner:D._owner}}function k(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function N(D){var j={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ae){return j[ae]})}var O=/\/+/g;function I(D,j){return typeof D=="object"&&D!==null&&D.key!=null?N(""+D.key):j.toString(36)}function Ze(D,j,ae,_e,Ee){var Re=typeof D;(Re==="undefined"||Re==="boolean")&&(D=null);var De=!1;if(D===null)De=!0;else switch(Re){case"string":case"number":De=!0;break;case"object":switch(D.$$typeof){case i:case e:De=!0}}if(De)return De=D,Ee=Ee(De),D=_e===""?"."+I(De,0):_e,ye(Ee)?(ae="",D!=null&&(ae=D.replace(O,"$&/")+"/"),Ze(Ee,j,ae,"",function(ct){return ct})):Ee!=null&&(k(Ee)&&(Ee=S(Ee,ae+(!Ee.key||De&&De.key===Ee.key?"":(""+Ee.key).replace(O,"$&/")+"/")+D)),j.push(Ee)),1;if(De=0,_e=_e===""?".":_e+":",ye(D))for(var xe=0;xe<D.length;xe++){Re=D[xe];var Ue=_e+I(Re,xe);De+=Ze(Re,j,ae,Ue,Ee)}else if(Ue=b(D),typeof Ue=="function")for(D=Ue.call(D),xe=0;!(Re=D.next()).done;)Re=Re.value,Ue=_e+I(Re,xe++),De+=Ze(Re,j,ae,Ue,Ee);else if(Re==="object")throw j=String(D),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return De}function Rt(D,j,ae){if(D==null)return D;var _e=[],Ee=0;return Ze(D,_e,"","",function(Re){return j.call(ae,Re,Ee++)}),_e}function kt(D){if(D._status===-1){var j=D._result;j=j(),j.then(function(ae){(D._status===0||D._status===-1)&&(D._status=1,D._result=ae)},function(ae){(D._status===0||D._status===-1)&&(D._status=2,D._result=ae)}),D._status===-1&&(D._status=0,D._result=j)}if(D._status===1)return D._result.default;throw D._result}var Me={current:null},J={transition:null},le={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:J,ReactCurrentOwner:Ae};function ee(){throw Error("act(...) is not supported in production builds of React.")}return we.Children={map:Rt,forEach:function(D,j,ae){Rt(D,function(){j.apply(this,arguments)},ae)},count:function(D){var j=0;return Rt(D,function(){j++}),j},toArray:function(D){return Rt(D,function(j){return j})||[]},only:function(D){if(!k(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},we.Component=H,we.Fragment=n,we.Profiler=a,we.PureComponent=pe,we.StrictMode=s,we.Suspense=y,we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,we.act=ee,we.cloneElement=function(D,j,ae){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var _e=Q({},D.props),Ee=D.key,Re=D.ref,De=D._owner;if(j!=null){if(j.ref!==void 0&&(Re=j.ref,De=Ae.current),j.key!==void 0&&(Ee=""+j.key),D.type&&D.type.defaultProps)var xe=D.type.defaultProps;for(Ue in j)Oe.call(j,Ue)&&!P.hasOwnProperty(Ue)&&(_e[Ue]=j[Ue]===void 0&&xe!==void 0?xe[Ue]:j[Ue])}var Ue=arguments.length-2;if(Ue===1)_e.children=ae;else if(1<Ue){xe=Array(Ue);for(var ct=0;ct<Ue;ct++)xe[ct]=arguments[ct+2];_e.children=xe}return{$$typeof:i,type:D.type,key:Ee,ref:Re,props:_e,_owner:De}},we.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:c,_context:D},D.Consumer=D},we.createElement=T,we.createFactory=function(D){var j=T.bind(null,D);return j.type=D,j},we.createRef=function(){return{current:null}},we.forwardRef=function(D){return{$$typeof:g,render:D}},we.isValidElement=k,we.lazy=function(D){return{$$typeof:R,_payload:{_status:-1,_result:D},_init:kt}},we.memo=function(D,j){return{$$typeof:E,type:D,compare:j===void 0?null:j}},we.startTransition=function(D){var j=J.transition;J.transition={};try{D()}finally{J.transition=j}},we.unstable_act=ee,we.useCallback=function(D,j){return Me.current.useCallback(D,j)},we.useContext=function(D){return Me.current.useContext(D)},we.useDebugValue=function(){},we.useDeferredValue=function(D){return Me.current.useDeferredValue(D)},we.useEffect=function(D,j){return Me.current.useEffect(D,j)},we.useId=function(){return Me.current.useId()},we.useImperativeHandle=function(D,j,ae){return Me.current.useImperativeHandle(D,j,ae)},we.useInsertionEffect=function(D,j){return Me.current.useInsertionEffect(D,j)},we.useLayoutEffect=function(D,j){return Me.current.useLayoutEffect(D,j)},we.useMemo=function(D,j){return Me.current.useMemo(D,j)},we.useReducer=function(D,j,ae){return Me.current.useReducer(D,j,ae)},we.useRef=function(D){return Me.current.useRef(D)},we.useState=function(D){return Me.current.useState(D)},we.useSyncExternalStore=function(D,j,ae){return Me.current.useSyncExternalStore(D,j,ae)},we.useTransition=function(){return Me.current.useTransition()},we.version="18.3.1",we}var Np;function jh(){return Np||(Np=1,lh.exports=jv()),lh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function zv(){if(Dp)return Jo;Dp=1;var i=jh(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(g,y,E){var R,x={},b=null,K=null;E!==void 0&&(b=""+E),y.key!==void 0&&(b=""+y.key),y.ref!==void 0&&(K=y.ref);for(R in y)s.call(y,R)&&!c.hasOwnProperty(R)&&(x[R]=y[R]);if(g&&g.defaultProps)for(R in y=g.defaultProps,y)x[R]===void 0&&(x[R]=y[R]);return{$$typeof:e,type:g,key:b,ref:K,props:x,_owner:a.current}}return Jo.Fragment=n,Jo.jsx=d,Jo.jsxs=d,Jo}var xp;function Bv(){return xp||(xp=1,ah.exports=zv()),ah.exports}var oe=Bv(),Ge=jh(),Ul={},uh={exports:{}},Gt={},ch={exports:{}},hh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function $v(){return Op||(Op=1,function(i){function e(J,le){var ee=J.length;J.push(le);e:for(;0<ee;){var D=ee-1>>>1,j=J[D];if(0<a(j,le))J[D]=le,J[ee]=j,ee=D;else break e}}function n(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var le=J[0],ee=J.pop();if(ee!==le){J[0]=ee;e:for(var D=0,j=J.length,ae=j>>>1;D<ae;){var _e=2*(D+1)-1,Ee=J[_e],Re=_e+1,De=J[Re];if(0>a(Ee,ee))Re<j&&0>a(De,Ee)?(J[D]=De,J[Re]=ee,D=Re):(J[D]=Ee,J[_e]=ee,D=_e);else if(Re<j&&0>a(De,ee))J[D]=De,J[Re]=ee,D=Re;else break e}}return le}function a(J,le){var ee=J.sortIndex-le.sortIndex;return ee!==0?ee:J.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var d=Date,g=d.now();i.unstable_now=function(){return d.now()-g}}var y=[],E=[],R=1,x=null,b=3,K=!1,Q=!1,X=!1,H=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,pe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ge(J){for(var le=n(E);le!==null;){if(le.callback===null)s(E);else if(le.startTime<=J)s(E),le.sortIndex=le.expirationTime,e(y,le);else break;le=n(E)}}function ye(J){if(X=!1,ge(J),!Q)if(n(y)!==null)Q=!0,kt(Oe);else{var le=n(E);le!==null&&Me(ye,le.startTime-J)}}function Oe(J,le){Q=!1,X&&(X=!1,me(T),T=-1),K=!0;var ee=b;try{for(ge(le),x=n(y);x!==null&&(!(x.expirationTime>le)||J&&!N());){var D=x.callback;if(typeof D=="function"){x.callback=null,b=x.priorityLevel;var j=D(x.expirationTime<=le);le=i.unstable_now(),typeof j=="function"?x.callback=j:x===n(y)&&s(y),ge(le)}else s(y);x=n(y)}if(x!==null)var ae=!0;else{var _e=n(E);_e!==null&&Me(ye,_e.startTime-le),ae=!1}return ae}finally{x=null,b=ee,K=!1}}var Ae=!1,P=null,T=-1,S=5,k=-1;function N(){return!(i.unstable_now()-k<S)}function O(){if(P!==null){var J=i.unstable_now();k=J;var le=!0;try{le=P(!0,J)}finally{le?I():(Ae=!1,P=null)}}else Ae=!1}var I;if(typeof pe=="function")I=function(){pe(O)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,Rt=Ze.port2;Ze.port1.onmessage=O,I=function(){Rt.postMessage(null)}}else I=function(){H(O,0)};function kt(J){P=J,Ae||(Ae=!0,I())}function Me(J,le){T=H(function(){J(i.unstable_now())},le)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(J){J.callback=null},i.unstable_continueExecution=function(){Q||K||(Q=!0,kt(Oe))},i.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<J?Math.floor(1e3/J):5},i.unstable_getCurrentPriorityLevel=function(){return b},i.unstable_getFirstCallbackNode=function(){return n(y)},i.unstable_next=function(J){switch(b){case 1:case 2:case 3:var le=3;break;default:le=b}var ee=b;b=le;try{return J()}finally{b=ee}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(J,le){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ee=b;b=J;try{return le()}finally{b=ee}},i.unstable_scheduleCallback=function(J,le,ee){var D=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?D+ee:D):ee=D,J){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=ee+j,J={id:R++,callback:le,priorityLevel:J,startTime:ee,expirationTime:j,sortIndex:-1},ee>D?(J.sortIndex=ee,e(E,J),n(y)===null&&J===n(E)&&(X?(me(T),T=-1):X=!0,Me(ye,ee-D))):(J.sortIndex=j,e(y,J),Q||K||(Q=!0,kt(Oe))),J},i.unstable_shouldYield=N,i.unstable_wrapCallback=function(J){var le=b;return function(){var ee=b;b=le;try{return J.apply(this,arguments)}finally{b=ee}}}}(hh)),hh}var Vp;function Hv(){return Vp||(Vp=1,ch.exports=$v()),ch.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function Wv(){if(Lp)return Gt;Lp=1;var i=jh(),e=Hv();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function c(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(a[t]=r,t=0;t<r.length;t++)s.add(r[t])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,R={},x={};function b(t){return y.call(x,t)?!0:y.call(R,t)?!1:E.test(t)?x[t]=!0:(R[t]=!0,!1)}function K(t,r,o,u){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Q(t,r,o,u){if(r===null||typeof r>"u"||K(t,r,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function X(t,r,o,u,h,p,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=p,this.removeEmptyString=v}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){H[t]=new X(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];H[r]=new X(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){H[t]=new X(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){H[t]=new X(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){H[t]=new X(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){H[t]=new X(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){H[t]=new X(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){H[t]=new X(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){H[t]=new X(t,5,!1,t.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function pe(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(me,pe);H[r]=new X(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(me,pe);H[r]=new X(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(me,pe);H[r]=new X(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){H[t]=new X(t,1,!1,t.toLowerCase(),null,!1,!1)}),H.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){H[t]=new X(t,1,!1,t.toLowerCase(),null,!0,!0)});function ge(t,r,o,u){var h=H.hasOwnProperty(r)?H[r]:null;(h!==null?h.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Q(r,o,h,u)&&(o=null),u||h===null?b(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):h.mustUseProperty?t[h.propertyName]=o===null?h.type===3?!1:"":o:(r=h.attributeName,u=h.attributeNamespace,o===null?t.removeAttribute(r):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?t.setAttributeNS(u,r,o):t.setAttribute(r,o))))}var ye=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oe=Symbol.for("react.element"),Ae=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),Ze=Symbol.for("react.suspense_list"),Rt=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),Me=Symbol.for("react.offscreen"),J=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=J&&t[J]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,D;function j(t){if(D===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);D=r&&r[1]||""}return`
`+D+t}var ae=!1;function _e(t,r){if(!t||ae)return"";ae=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var u=F}Reflect.construct(t,[],r)}else{try{r.call()}catch(F){u=F}t.call(r.prototype)}else{try{throw Error()}catch(F){u=F}t()}}catch(F){if(F&&u&&typeof F.stack=="string"){for(var h=F.stack.split(`
`),p=u.stack.split(`
`),v=h.length-1,w=p.length-1;1<=v&&0<=w&&h[v]!==p[w];)w--;for(;1<=v&&0<=w;v--,w--)if(h[v]!==p[w]){if(v!==1||w!==1)do if(v--,w--,0>w||h[v]!==p[w]){var A=`
`+h[v].replace(" at new "," at ");return t.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",t.displayName)),A}while(1<=v&&0<=w);break}}}finally{ae=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?j(t):""}function Ee(t){switch(t.tag){case 5:return j(t.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return t=_e(t.type,!1),t;case 11:return t=_e(t.type.render,!1),t;case 1:return t=_e(t.type,!0),t;default:return""}}function Re(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case P:return"Fragment";case Ae:return"Portal";case S:return"Profiler";case T:return"StrictMode";case I:return"Suspense";case Ze:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case N:return(t.displayName||"Context")+".Consumer";case k:return(t._context.displayName||"Context")+".Provider";case O:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rt:return r=t.displayName||null,r!==null?r:Re(t.type)||"Memo";case kt:r=t._payload,t=t._init;try{return Re(t(r))}catch{}}return null}function De(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Re(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function xe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ct(t){var r=Ue(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),u=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,p=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return h.call(this)},set:function(v){u=""+v,p.call(this,v)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(v){u=""+v},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Xn(t){t._valueTracker||(t._valueTracker=ct(t))}function Ki(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return t&&(u=Ue(t)?t.checked?"true":"false":t.value),t=u,t!==o?(r.setValue(t),!0):!1}function Tr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function li(t,r){var o=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Qi(t,r){var o=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;o=xe(r.value!=null?r.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ro(t,r){r=r.checked,r!=null&&ge(t,"checked",r,!1)}function io(t,r){ro(t,r);var o=xe(r.value),u=r.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Xi(t,r.type,o):r.hasOwnProperty("defaultValue")&&Xi(t,r.type,xe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Ia(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Xi(t,r,o){(r!=="number"||Tr(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Yn=Array.isArray;function Jn(t,r,o,u){if(t=t.options,r){r={};for(var h=0;h<o.length;h++)r["$"+o[h]]=!0;for(o=0;o<t.length;o++)h=r.hasOwnProperty("$"+t[o].value),t[o].selected!==h&&(t[o].selected=h),h&&u&&(t[o].defaultSelected=!0)}else{for(o=""+xe(o),r=null,h=0;h<t.length;h++){if(t[h].value===o){t[h].selected=!0,u&&(t[h].defaultSelected=!0);return}r!==null||t[h].disabled||(r=t[h])}r!==null&&(r.selected=!0)}}function so(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yi(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(Yn(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:xe(o)}}function Ji(t,r){var o=xe(r.value),u=xe(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function oo(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function st(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ot(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?st(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zn,ao=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,u,h){MSApp.execUnsafeLocalFunction(function(){return t(r,o,u,h)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Zn=Zn||document.createElement("div"),Zn.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Zn.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Ir(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var ui={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ci=["Webkit","ms","Moz","O"];Object.keys(ui).forEach(function(t){ci.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),ui[r]=ui[t]})});function lo(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||ui.hasOwnProperty(t)&&ui[t]?(""+r).trim():r+"px"}function uo(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=lo(o,r[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,h):t[o]=h}}var co=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ho(t,r){if(r){if(co[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function fo(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hi=null;function Zi(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var es=null,an=null,On=null;function ts(t){if(t=Fo(t)){if(typeof es!="function")throw Error(n(280));var r=t.stateNode;r&&(r=Za(r),es(t.stateNode,t.type,r))}}function Vn(t){an?On?On.push(t):On=[t]:an=t}function po(){if(an){var t=an,r=On;if(On=an=null,ts(t),r)for(t=0;t<r.length;t++)ts(r[t])}}function di(t,r){return t(r)}function mo(){}var er=!1;function go(t,r,o){if(er)return t(r,o);er=!0;try{return di(t,r,o)}finally{er=!1,(an!==null||On!==null)&&(mo(),po())}}function et(t,r){var o=t.stateNode;if(o===null)return null;var u=Za(o);if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var ns=!1;if(g)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){ns=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{ns=!1}function fi(t,r,o,u,h,p,v,w,A){var F=Array.prototype.slice.call(arguments,3);try{r.apply(o,F)}catch($){this.onError($)}}var pi=!1,rs=null,vn=!1,yo=null,Lu={onError:function(t){pi=!0,rs=t}};function is(t,r,o,u,h,p,v,w,A){pi=!1,rs=null,fi.apply(Lu,arguments)}function Sa(t,r,o,u,h,p,v,w,A){if(is.apply(this,arguments),pi){if(pi){var F=rs;pi=!1,rs=null}else throw Error(n(198));vn||(vn=!0,yo=F)}}function _n(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function mi(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function En(t){if(_n(t)!==t)throw Error(n(188))}function Aa(t){var r=t.alternate;if(!r){if(r=_n(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,u=r;;){var h=o.return;if(h===null)break;var p=h.alternate;if(p===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===p.child){for(p=h.child;p;){if(p===o)return En(h),t;if(p===u)return En(h),r;p=p.sibling}throw Error(n(188))}if(o.return!==u.return)o=h,u=p;else{for(var v=!1,w=h.child;w;){if(w===o){v=!0,o=h,u=p;break}if(w===u){v=!0,u=h,o=p;break}w=w.sibling}if(!v){for(w=p.child;w;){if(w===o){v=!0,o=p,u=h;break}if(w===u){v=!0,u=p,o=h;break}w=w.sibling}if(!v)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function vo(t){return t=Aa(t),t!==null?ss(t):null}function ss(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=ss(t);if(r!==null)return r;t=t.sibling}return null}var os=e.unstable_scheduleCallback,_o=e.unstable_cancelCallback,Ra=e.unstable_shouldYield,Mu=e.unstable_requestPaint,be=e.unstable_now,ka=e.unstable_getCurrentPriorityLevel,gi=e.unstable_ImmediatePriority,Sr=e.unstable_UserBlockingPriority,ln=e.unstable_NormalPriority,Eo=e.unstable_LowPriority,Ca=e.unstable_IdlePriority,yi=null,Yt=null;function Pa(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(yi,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:Da,wo=Math.log,Na=Math.LN2;function Da(t){return t>>>=0,t===0?32:31-(wo(t)/Na|0)|0}var as=64,ls=4194304;function Ar(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vi(t,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,p=t.pingedLanes,v=o&268435455;if(v!==0){var w=v&~h;w!==0?u=Ar(w):(p&=v,p!==0&&(u=Ar(p)))}else v=o&~h,v!==0?u=Ar(v):p!==0&&(u=Ar(p));if(u===0)return 0;if(r!==0&&r!==u&&!(r&h)&&(h=u&-u,p=r&-r,h>=p||h===16&&(p&4194240)!==0))return r;if(u&4&&(u|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=u;0<r;)o=31-Mt(r),h=1<<o,u|=t[o],r&=~h;return u}function Fu(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tr(t,r){for(var o=t.suspendedLanes,u=t.pingedLanes,h=t.expirationTimes,p=t.pendingLanes;0<p;){var v=31-Mt(p),w=1<<v,A=h[v];A===-1?(!(w&o)||w&u)&&(h[v]=Fu(w,r)):A<=r&&(t.expiredLanes|=w),p&=~w}}function Jt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _i(){var t=as;return as<<=1,!(as&4194240)&&(as=64),t}function Rr(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function kr(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Mt(r),t[r]=o}function Fe(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var h=31-Mt(o),p=1<<h;r[h]=0,u[h]=-1,t[h]=-1,o&=~p}}function Cr(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var u=31-Mt(o),h=1<<u;h&r|t[u]&r&&(t[u]|=r),o&=~h}}var Se=0;function Pr(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xa,us,Oa,Va,La,To=!1,Ln=[],vt=null,wn=null,Tn=null,Nr=new Map,un=new Map,Mn=[],Uu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ma(t,r){switch(t){case"focusin":case"focusout":vt=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":Nr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":un.delete(r.pointerId)}}function jt(t,r,o,u,h,p){return t===null||t.nativeEvent!==p?(t={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[h]},r!==null&&(r=Fo(r),r!==null&&us(r)),t):(t.eventSystemFlags|=u,r=t.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),t)}function bu(t,r,o,u,h){switch(r){case"focusin":return vt=jt(vt,t,r,o,u,h),!0;case"dragenter":return wn=jt(wn,t,r,o,u,h),!0;case"mouseover":return Tn=jt(Tn,t,r,o,u,h),!0;case"pointerover":var p=h.pointerId;return Nr.set(p,jt(Nr.get(p)||null,t,r,o,u,h)),!0;case"gotpointercapture":return p=h.pointerId,un.set(p,jt(un.get(p)||null,t,r,o,u,h)),!0}return!1}function Fa(t){var r=Si(t.target);if(r!==null){var o=_n(r);if(o!==null){if(r=o.tag,r===13){if(r=mi(o),r!==null){t.blockedOn=r,La(t.priority,function(){Oa(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nr(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=cs(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);hi=u,o.target.dispatchEvent(u),hi=null}else return r=Fo(o),r!==null&&us(r),t.blockedOn=o,!1;r.shift()}return!0}function Ei(t,r,o){nr(t)&&o.delete(r)}function Ua(){To=!1,vt!==null&&nr(vt)&&(vt=null),wn!==null&&nr(wn)&&(wn=null),Tn!==null&&nr(Tn)&&(Tn=null),Nr.forEach(Ei),un.forEach(Ei)}function In(t,r){t.blockedOn===r&&(t.blockedOn=null,To||(To=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ua)))}function Sn(t){function r(h){return In(h,t)}if(0<Ln.length){In(Ln[0],t);for(var o=1;o<Ln.length;o++){var u=Ln[o];u.blockedOn===t&&(u.blockedOn=null)}}for(vt!==null&&In(vt,t),wn!==null&&In(wn,t),Tn!==null&&In(Tn,t),Nr.forEach(r),un.forEach(r),o=0;o<Mn.length;o++)u=Mn[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<Mn.length&&(o=Mn[0],o.blockedOn===null);)Fa(o),o.blockedOn===null&&Mn.shift()}var rr=ye.ReactCurrentBatchConfig,Dr=!0;function He(t,r,o,u){var h=Se,p=rr.transition;rr.transition=null;try{Se=1,Io(t,r,o,u)}finally{Se=h,rr.transition=p}}function ju(t,r,o,u){var h=Se,p=rr.transition;rr.transition=null;try{Se=4,Io(t,r,o,u)}finally{Se=h,rr.transition=p}}function Io(t,r,o,u){if(Dr){var h=cs(t,r,o,u);if(h===null)Yu(t,r,u,wi,o),Ma(t,u);else if(bu(h,t,r,o,u))u.stopPropagation();else if(Ma(t,u),r&4&&-1<Uu.indexOf(t)){for(;h!==null;){var p=Fo(h);if(p!==null&&xa(p),p=cs(t,r,o,u),p===null&&Yu(t,r,u,wi,o),p===h)break;h=p}h!==null&&u.stopPropagation()}else Yu(t,r,u,null,o)}}var wi=null;function cs(t,r,o,u){if(wi=null,t=Zi(u),t=Si(t),t!==null)if(r=_n(t),r===null)t=null;else if(o=r.tag,o===13){if(t=mi(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return wi=t,null}function So(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ka()){case gi:return 1;case Sr:return 4;case ln:case Eo:return 16;case Ca:return 536870912;default:return 16}default:return 16}}var Zt=null,hs=null,zt=null;function Ao(){if(zt)return zt;var t,r=hs,o=r.length,u,h="value"in Zt?Zt.value:Zt.textContent,p=h.length;for(t=0;t<o&&r[t]===h[t];t++);var v=o-t;for(u=1;u<=v&&r[o-u]===h[p-u];u++);return zt=h.slice(t,1<u?1-u:void 0)}function ds(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Fn(){return!0}function Ro(){return!1}function _t(t){function r(o,u,h,p,v){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(o=t[w],this[w]=o?o(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Fn:Ro,this.isPropagationStopped=Ro,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Fn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Fn)},persist:function(){},isPersistent:Fn}),r}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fs=_t(An),Un=ee({},An,{view:0,detail:0}),zu=_t(Un),ps,ir,xr,Ti=ee({},Un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bn,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xr&&(xr&&t.type==="mousemove"?(ps=t.screenX-xr.screenX,ir=t.screenY-xr.screenY):ir=ps=0,xr=t),ps)},movementY:function(t){return"movementY"in t?t.movementY:ir}}),ms=_t(Ti),ko=ee({},Ti,{dataTransfer:0}),ba=_t(ko),gs=ee({},Un,{relatedTarget:0}),ys=_t(gs),ja=ee({},An,{animationName:0,elapsedTime:0,pseudoElement:0}),sr=_t(ja),za=ee({},An,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ba=_t(za),$a=ee({},An,{data:0}),Co=_t($a),vs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ft={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ha={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wa(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Ha[t])?!!r[t]:!1}function bn(){return Wa}var l=ee({},Un,{key:function(t){if(t.key){var r=vs[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=ds(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ft[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bn,charCode:function(t){return t.type==="keypress"?ds(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ds(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),f=_t(l),m=ee({},Ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_=_t(m),V=ee({},Un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bn}),U=_t(V),Y=ee({},An,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ve=_t(Y),at=ee({},Ti,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ke=_t(at),ht=[9,13,27,32],nt=g&&"CompositionEvent"in window,cn=null;g&&"documentMode"in document&&(cn=document.documentMode);var en=g&&"TextEvent"in window&&!cn,Ii=g&&(!nt||cn&&8<cn&&11>=cn),_s=" ",Td=!1;function Id(t,r){switch(t){case"keyup":return ht.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Es=!1;function Uy(t,r){switch(t){case"compositionend":return Sd(r);case"keypress":return r.which!==32?null:(Td=!0,_s);case"textInput":return t=r.data,t===_s&&Td?null:t;default:return null}}function by(t,r){if(Es)return t==="compositionend"||!nt&&Id(t,r)?(t=Ao(),zt=hs=Zt=null,Es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ii&&r.locale!=="ko"?null:r.data;default:return null}}var jy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ad(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!jy[t.type]:r==="textarea"}function Rd(t,r,o,u){Vn(u),r=Xa(r,"onChange"),0<r.length&&(o=new fs("onChange","change",null,o,u),t.push({event:o,listeners:r}))}var Po=null,No=null;function zy(t){Hd(t,0)}function qa(t){var r=As(t);if(Ki(r))return t}function By(t,r){if(t==="change")return r}var kd=!1;if(g){var Bu;if(g){var $u="oninput"in document;if(!$u){var Cd=document.createElement("div");Cd.setAttribute("oninput","return;"),$u=typeof Cd.oninput=="function"}Bu=$u}else Bu=!1;kd=Bu&&(!document.documentMode||9<document.documentMode)}function Pd(){Po&&(Po.detachEvent("onpropertychange",Nd),No=Po=null)}function Nd(t){if(t.propertyName==="value"&&qa(No)){var r=[];Rd(r,No,t,Zi(t)),go(zy,r)}}function $y(t,r,o){t==="focusin"?(Pd(),Po=r,No=o,Po.attachEvent("onpropertychange",Nd)):t==="focusout"&&Pd()}function Hy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qa(No)}function Wy(t,r){if(t==="click")return qa(r)}function qy(t,r){if(t==="input"||t==="change")return qa(r)}function Gy(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Rn=typeof Object.is=="function"?Object.is:Gy;function Do(t,r){if(Rn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!y.call(r,h)||!Rn(t[h],r[h]))return!1}return!0}function Dd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xd(t,r){var o=Dd(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=r&&u>=r)return{node:o,offset:r-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Dd(o)}}function Od(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Od(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Vd(){for(var t=window,r=Tr();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Tr(t.document)}return r}function Hu(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function Ky(t){var r=Vd(),o=t.focusedElem,u=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&Od(o.ownerDocument.documentElement,o)){if(u!==null&&Hu(o)){if(r=u.start,t=u.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var h=o.textContent.length,p=Math.min(u.start,h);u=u.end===void 0?p:Math.min(u.end,h),!t.extend&&p>u&&(h=u,u=p,p=h),h=xd(o,p);var v=xd(o,u);h&&v&&(t.rangeCount!==1||t.anchorNode!==h.node||t.anchorOffset!==h.offset||t.focusNode!==v.node||t.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),t.removeAllRanges(),p>u?(t.addRange(r),t.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Qy=g&&"documentMode"in document&&11>=document.documentMode,ws=null,Wu=null,xo=null,qu=!1;function Ld(t,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;qu||ws==null||ws!==Tr(u)||(u=ws,"selectionStart"in u&&Hu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),xo&&Do(xo,u)||(xo=u,u=Xa(Wu,"onSelect"),0<u.length&&(r=new fs("onSelect","select",null,r,o),t.push({event:r,listeners:u}),r.target=ws)))}function Ga(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var Ts={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},Gu={},Md={};g&&(Md=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function Ka(t){if(Gu[t])return Gu[t];if(!Ts[t])return t;var r=Ts[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in Md)return Gu[t]=r[o];return t}var Fd=Ka("animationend"),Ud=Ka("animationiteration"),bd=Ka("animationstart"),jd=Ka("transitionend"),zd=new Map,Bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,r){zd.set(t,r),c(r,[t])}for(var Ku=0;Ku<Bd.length;Ku++){var Qu=Bd[Ku],Xy=Qu.toLowerCase(),Yy=Qu[0].toUpperCase()+Qu.slice(1);Or(Xy,"on"+Yy)}Or(Fd,"onAnimationEnd"),Or(Ud,"onAnimationIteration"),Or(bd,"onAnimationStart"),Or("dblclick","onDoubleClick"),Or("focusin","onFocus"),Or("focusout","onBlur"),Or(jd,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function $d(t,r,o){var u=t.type||"unknown-event";t.currentTarget=o,Sa(u,r,void 0,t),t.currentTarget=null}function Hd(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],h=u.event;u=u.listeners;e:{var p=void 0;if(r)for(var v=u.length-1;0<=v;v--){var w=u[v],A=w.instance,F=w.currentTarget;if(w=w.listener,A!==p&&h.isPropagationStopped())break e;$d(h,w,F),p=A}else for(v=0;v<u.length;v++){if(w=u[v],A=w.instance,F=w.currentTarget,w=w.listener,A!==p&&h.isPropagationStopped())break e;$d(h,w,F),p=A}}}if(vn)throw t=yo,vn=!1,yo=null,t}function Be(t,r){var o=r[rc];o===void 0&&(o=r[rc]=new Set);var u=t+"__bubble";o.has(u)||(Wd(r,t,2,!1),o.add(u))}function Xu(t,r,o){var u=0;r&&(u|=4),Wd(o,t,u,r)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function Vo(t){if(!t[Qa]){t[Qa]=!0,s.forEach(function(o){o!=="selectionchange"&&(Jy.has(o)||Xu(o,!1,t),Xu(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[Qa]||(r[Qa]=!0,Xu("selectionchange",!1,r))}}function Wd(t,r,o,u){switch(So(r)){case 1:var h=He;break;case 4:h=ju;break;default:h=Io}o=h.bind(null,r,o,t),h=void 0,!ns||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?t.addEventListener(r,o,{capture:!0,passive:h}):t.addEventListener(r,o,!0):h!==void 0?t.addEventListener(r,o,{passive:h}):t.addEventListener(r,o,!1)}function Yu(t,r,o,u,h){var p=u;if(!(r&1)&&!(r&2)&&u!==null)e:for(;;){if(u===null)return;var v=u.tag;if(v===3||v===4){var w=u.stateNode.containerInfo;if(w===h||w.nodeType===8&&w.parentNode===h)break;if(v===4)for(v=u.return;v!==null;){var A=v.tag;if((A===3||A===4)&&(A=v.stateNode.containerInfo,A===h||A.nodeType===8&&A.parentNode===h))return;v=v.return}for(;w!==null;){if(v=Si(w),v===null)return;if(A=v.tag,A===5||A===6){u=p=v;continue e}w=w.parentNode}}u=u.return}go(function(){var F=p,$=Zi(o),W=[];e:{var B=zd.get(t);if(B!==void 0){var Z=fs,ne=t;switch(t){case"keypress":if(ds(o)===0)break e;case"keydown":case"keyup":Z=f;break;case"focusin":ne="focus",Z=ys;break;case"focusout":ne="blur",Z=ys;break;case"beforeblur":case"afterblur":Z=ys;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=ms;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=ba;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=U;break;case Fd:case Ud:case bd:Z=sr;break;case jd:Z=Ve;break;case"scroll":Z=zu;break;case"wheel":Z=ke;break;case"copy":case"cut":case"paste":Z=Ba;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=_}var re=(r&4)!==0,tt=!re&&t==="scroll",L=re?B!==null?B+"Capture":null:B;re=[];for(var C=F,M;C!==null;){M=C;var G=M.stateNode;if(M.tag===5&&G!==null&&(M=G,L!==null&&(G=et(C,L),G!=null&&re.push(Lo(C,G,M)))),tt)break;C=C.return}0<re.length&&(B=new Z(B,ne,null,o,$),W.push({event:B,listeners:re}))}}if(!(r&7)){e:{if(B=t==="mouseover"||t==="pointerover",Z=t==="mouseout"||t==="pointerout",B&&o!==hi&&(ne=o.relatedTarget||o.fromElement)&&(Si(ne)||ne[or]))break e;if((Z||B)&&(B=$.window===$?$:(B=$.ownerDocument)?B.defaultView||B.parentWindow:window,Z?(ne=o.relatedTarget||o.toElement,Z=F,ne=ne?Si(ne):null,ne!==null&&(tt=_n(ne),ne!==tt||ne.tag!==5&&ne.tag!==6)&&(ne=null)):(Z=null,ne=F),Z!==ne)){if(re=ms,G="onMouseLeave",L="onMouseEnter",C="mouse",(t==="pointerout"||t==="pointerover")&&(re=_,G="onPointerLeave",L="onPointerEnter",C="pointer"),tt=Z==null?B:As(Z),M=ne==null?B:As(ne),B=new re(G,C+"leave",Z,o,$),B.target=tt,B.relatedTarget=M,G=null,Si($)===F&&(re=new re(L,C+"enter",ne,o,$),re.target=M,re.relatedTarget=tt,G=re),tt=G,Z&&ne)t:{for(re=Z,L=ne,C=0,M=re;M;M=Is(M))C++;for(M=0,G=L;G;G=Is(G))M++;for(;0<C-M;)re=Is(re),C--;for(;0<M-C;)L=Is(L),M--;for(;C--;){if(re===L||L!==null&&re===L.alternate)break t;re=Is(re),L=Is(L)}re=null}else re=null;Z!==null&&qd(W,B,Z,re,!1),ne!==null&&tt!==null&&qd(W,tt,ne,re,!0)}}e:{if(B=F?As(F):window,Z=B.nodeName&&B.nodeName.toLowerCase(),Z==="select"||Z==="input"&&B.type==="file")var se=By;else if(Ad(B))if(kd)se=qy;else{se=Hy;var ue=$y}else(Z=B.nodeName)&&Z.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(se=Wy);if(se&&(se=se(t,F))){Rd(W,se,o,$);break e}ue&&ue(t,B,F),t==="focusout"&&(ue=B._wrapperState)&&ue.controlled&&B.type==="number"&&Xi(B,"number",B.value)}switch(ue=F?As(F):window,t){case"focusin":(Ad(ue)||ue.contentEditable==="true")&&(ws=ue,Wu=F,xo=null);break;case"focusout":xo=Wu=ws=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,Ld(W,o,$);break;case"selectionchange":if(Qy)break;case"keydown":case"keyup":Ld(W,o,$)}var ce;if(nt)e:{switch(t){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else Es?Id(t,o)&&(de="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(de="onCompositionStart");de&&(Ii&&o.locale!=="ko"&&(Es||de!=="onCompositionStart"?de==="onCompositionEnd"&&Es&&(ce=Ao()):(Zt=$,hs="value"in Zt?Zt.value:Zt.textContent,Es=!0)),ue=Xa(F,de),0<ue.length&&(de=new Co(de,t,null,o,$),W.push({event:de,listeners:ue}),ce?de.data=ce:(ce=Sd(o),ce!==null&&(de.data=ce)))),(ce=en?Uy(t,o):by(t,o))&&(F=Xa(F,"onBeforeInput"),0<F.length&&($=new Co("onBeforeInput","beforeinput",null,o,$),W.push({event:$,listeners:F}),$.data=ce))}Hd(W,r)})}function Lo(t,r,o){return{instance:t,listener:r,currentTarget:o}}function Xa(t,r){for(var o=r+"Capture",u=[];t!==null;){var h=t,p=h.stateNode;h.tag===5&&p!==null&&(h=p,p=et(t,o),p!=null&&u.unshift(Lo(t,p,h)),p=et(t,r),p!=null&&u.push(Lo(t,p,h))),t=t.return}return u}function Is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qd(t,r,o,u,h){for(var p=r._reactName,v=[];o!==null&&o!==u;){var w=o,A=w.alternate,F=w.stateNode;if(A!==null&&A===u)break;w.tag===5&&F!==null&&(w=F,h?(A=et(o,p),A!=null&&v.unshift(Lo(o,A,w))):h||(A=et(o,p),A!=null&&v.push(Lo(o,A,w)))),o=o.return}v.length!==0&&t.push({event:r,listeners:v})}var Zy=/\r\n?/g,ev=/\u0000|\uFFFD/g;function Gd(t){return(typeof t=="string"?t:""+t).replace(Zy,`
`).replace(ev,"")}function Ya(t,r,o){if(r=Gd(r),Gd(t)!==r&&o)throw Error(n(425))}function Ja(){}var Ju=null,Zu=null;function ec(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var tc=typeof setTimeout=="function"?setTimeout:void 0,tv=typeof clearTimeout=="function"?clearTimeout:void 0,Kd=typeof Promise=="function"?Promise:void 0,nv=typeof queueMicrotask=="function"?queueMicrotask:typeof Kd<"u"?function(t){return Kd.resolve(null).then(t).catch(rv)}:tc;function rv(t){setTimeout(function(){throw t})}function nc(t,r){var o=r,u=0;do{var h=o.nextSibling;if(t.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){t.removeChild(h),Sn(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);Sn(r)}function Vr(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Qd(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),jn="__reactFiber$"+Ss,Mo="__reactProps$"+Ss,or="__reactContainer$"+Ss,rc="__reactEvents$"+Ss,iv="__reactListeners$"+Ss,sv="__reactHandles$"+Ss;function Si(t){var r=t[jn];if(r)return r;for(var o=t.parentNode;o;){if(r=o[or]||o[jn]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=Qd(t);t!==null;){if(o=t[jn])return o;t=Qd(t)}return r}t=o,o=t.parentNode}return null}function Fo(t){return t=t[jn]||t[or],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function As(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Za(t){return t[Mo]||null}var ic=[],Rs=-1;function Lr(t){return{current:t}}function $e(t){0>Rs||(t.current=ic[Rs],ic[Rs]=null,Rs--)}function je(t,r){Rs++,ic[Rs]=t.current,t.current=r}var Mr={},Ct=Lr(Mr),Bt=Lr(!1),Ai=Mr;function ks(t,r){var o=t.type.contextTypes;if(!o)return Mr;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var h={},p;for(p in o)h[p]=r[p];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=h),h}function $t(t){return t=t.childContextTypes,t!=null}function el(){$e(Bt),$e(Ct)}function Xd(t,r,o){if(Ct.current!==Mr)throw Error(n(168));je(Ct,r),je(Bt,o)}function Yd(t,r,o){var u=t.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in r))throw Error(n(108,De(t)||"Unknown",h));return ee({},o,u)}function tl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,Ai=Ct.current,je(Ct,t),je(Bt,Bt.current),!0}function Jd(t,r,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=Yd(t,r,Ai),u.__reactInternalMemoizedMergedChildContext=t,$e(Bt),$e(Ct),je(Ct,t)):$e(Bt),je(Bt,o)}var ar=null,nl=!1,sc=!1;function Zd(t){ar===null?ar=[t]:ar.push(t)}function ov(t){nl=!0,Zd(t)}function Fr(){if(!sc&&ar!==null){sc=!0;var t=0,r=Se;try{var o=ar;for(Se=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}ar=null,nl=!1}catch(h){throw ar!==null&&(ar=ar.slice(t+1)),os(gi,Fr),h}finally{Se=r,sc=!1}}return null}var Cs=[],Ps=0,rl=null,il=0,hn=[],dn=0,Ri=null,lr=1,ur="";function ki(t,r){Cs[Ps++]=il,Cs[Ps++]=rl,rl=t,il=r}function ef(t,r,o){hn[dn++]=lr,hn[dn++]=ur,hn[dn++]=Ri,Ri=t;var u=lr;t=ur;var h=32-Mt(u)-1;u&=~(1<<h),o+=1;var p=32-Mt(r)+h;if(30<p){var v=h-h%5;p=(u&(1<<v)-1).toString(32),u>>=v,h-=v,lr=1<<32-Mt(r)+h|o<<h|u,ur=p+t}else lr=1<<p|o<<h|u,ur=t}function oc(t){t.return!==null&&(ki(t,1),ef(t,1,0))}function ac(t){for(;t===rl;)rl=Cs[--Ps],Cs[Ps]=null,il=Cs[--Ps],Cs[Ps]=null;for(;t===Ri;)Ri=hn[--dn],hn[dn]=null,ur=hn[--dn],hn[dn]=null,lr=hn[--dn],hn[dn]=null}var tn=null,nn=null,We=!1,kn=null;function tf(t,r){var o=gn(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function nf(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,tn=t,nn=Vr(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,tn=t,nn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Ri!==null?{id:lr,overflow:ur}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=gn(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,tn=t,nn=null,!0):!1;default:return!1}}function lc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uc(t){if(We){var r=nn;if(r){var o=r;if(!nf(t,r)){if(lc(t))throw Error(n(418));r=Vr(o.nextSibling);var u=tn;r&&nf(t,r)?tf(u,o):(t.flags=t.flags&-4097|2,We=!1,tn=t)}}else{if(lc(t))throw Error(n(418));t.flags=t.flags&-4097|2,We=!1,tn=t}}}function rf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tn=t}function sl(t){if(t!==tn)return!1;if(!We)return rf(t),We=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!ec(t.type,t.memoizedProps)),r&&(r=nn)){if(lc(t))throw sf(),Error(n(418));for(;r;)tf(t,r),r=Vr(r.nextSibling)}if(rf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){nn=Vr(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}nn=null}}else nn=tn?Vr(t.stateNode.nextSibling):null;return!0}function sf(){for(var t=nn;t;)t=Vr(t.nextSibling)}function Ns(){nn=tn=null,We=!1}function cc(t){kn===null?kn=[t]:kn.push(t)}var av=ye.ReactCurrentBatchConfig;function Uo(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var h=u,p=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(v){var w=h.refs;v===null?delete w[p]:w[p]=v},r._stringRef=p,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ol(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function of(t){var r=t._init;return r(t._payload)}function af(t){function r(L,C){if(t){var M=L.deletions;M===null?(L.deletions=[C],L.flags|=16):M.push(C)}}function o(L,C){if(!t)return null;for(;C!==null;)r(L,C),C=C.sibling;return null}function u(L,C){for(L=new Map;C!==null;)C.key!==null?L.set(C.key,C):L.set(C.index,C),C=C.sibling;return L}function h(L,C){return L=Wr(L,C),L.index=0,L.sibling=null,L}function p(L,C,M){return L.index=M,t?(M=L.alternate,M!==null?(M=M.index,M<C?(L.flags|=2,C):M):(L.flags|=2,C)):(L.flags|=1048576,C)}function v(L){return t&&L.alternate===null&&(L.flags|=2),L}function w(L,C,M,G){return C===null||C.tag!==6?(C=th(M,L.mode,G),C.return=L,C):(C=h(C,M),C.return=L,C)}function A(L,C,M,G){var se=M.type;return se===P?$(L,C,M.props.children,G,M.key):C!==null&&(C.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===kt&&of(se)===C.type)?(G=h(C,M.props),G.ref=Uo(L,C,M),G.return=L,G):(G=Nl(M.type,M.key,M.props,null,L.mode,G),G.ref=Uo(L,C,M),G.return=L,G)}function F(L,C,M,G){return C===null||C.tag!==4||C.stateNode.containerInfo!==M.containerInfo||C.stateNode.implementation!==M.implementation?(C=nh(M,L.mode,G),C.return=L,C):(C=h(C,M.children||[]),C.return=L,C)}function $(L,C,M,G,se){return C===null||C.tag!==7?(C=Li(M,L.mode,G,se),C.return=L,C):(C=h(C,M),C.return=L,C)}function W(L,C,M){if(typeof C=="string"&&C!==""||typeof C=="number")return C=th(""+C,L.mode,M),C.return=L,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Oe:return M=Nl(C.type,C.key,C.props,null,L.mode,M),M.ref=Uo(L,null,C),M.return=L,M;case Ae:return C=nh(C,L.mode,M),C.return=L,C;case kt:var G=C._init;return W(L,G(C._payload),M)}if(Yn(C)||le(C))return C=Li(C,L.mode,M,null),C.return=L,C;ol(L,C)}return null}function B(L,C,M,G){var se=C!==null?C.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return se!==null?null:w(L,C,""+M,G);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Oe:return M.key===se?A(L,C,M,G):null;case Ae:return M.key===se?F(L,C,M,G):null;case kt:return se=M._init,B(L,C,se(M._payload),G)}if(Yn(M)||le(M))return se!==null?null:$(L,C,M,G,null);ol(L,M)}return null}function Z(L,C,M,G,se){if(typeof G=="string"&&G!==""||typeof G=="number")return L=L.get(M)||null,w(C,L,""+G,se);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case Oe:return L=L.get(G.key===null?M:G.key)||null,A(C,L,G,se);case Ae:return L=L.get(G.key===null?M:G.key)||null,F(C,L,G,se);case kt:var ue=G._init;return Z(L,C,M,ue(G._payload),se)}if(Yn(G)||le(G))return L=L.get(M)||null,$(C,L,G,se,null);ol(C,G)}return null}function ne(L,C,M,G){for(var se=null,ue=null,ce=C,de=C=0,pt=null;ce!==null&&de<M.length;de++){ce.index>de?(pt=ce,ce=null):pt=ce.sibling;var Ne=B(L,ce,M[de],G);if(Ne===null){ce===null&&(ce=pt);break}t&&ce&&Ne.alternate===null&&r(L,ce),C=p(Ne,C,de),ue===null?se=Ne:ue.sibling=Ne,ue=Ne,ce=pt}if(de===M.length)return o(L,ce),We&&ki(L,de),se;if(ce===null){for(;de<M.length;de++)ce=W(L,M[de],G),ce!==null&&(C=p(ce,C,de),ue===null?se=ce:ue.sibling=ce,ue=ce);return We&&ki(L,de),se}for(ce=u(L,ce);de<M.length;de++)pt=Z(ce,L,de,M[de],G),pt!==null&&(t&&pt.alternate!==null&&ce.delete(pt.key===null?de:pt.key),C=p(pt,C,de),ue===null?se=pt:ue.sibling=pt,ue=pt);return t&&ce.forEach(function(qr){return r(L,qr)}),We&&ki(L,de),se}function re(L,C,M,G){var se=le(M);if(typeof se!="function")throw Error(n(150));if(M=se.call(M),M==null)throw Error(n(151));for(var ue=se=null,ce=C,de=C=0,pt=null,Ne=M.next();ce!==null&&!Ne.done;de++,Ne=M.next()){ce.index>de?(pt=ce,ce=null):pt=ce.sibling;var qr=B(L,ce,Ne.value,G);if(qr===null){ce===null&&(ce=pt);break}t&&ce&&qr.alternate===null&&r(L,ce),C=p(qr,C,de),ue===null?se=qr:ue.sibling=qr,ue=qr,ce=pt}if(Ne.done)return o(L,ce),We&&ki(L,de),se;if(ce===null){for(;!Ne.done;de++,Ne=M.next())Ne=W(L,Ne.value,G),Ne!==null&&(C=p(Ne,C,de),ue===null?se=Ne:ue.sibling=Ne,ue=Ne);return We&&ki(L,de),se}for(ce=u(L,ce);!Ne.done;de++,Ne=M.next())Ne=Z(ce,L,de,Ne.value,G),Ne!==null&&(t&&Ne.alternate!==null&&ce.delete(Ne.key===null?de:Ne.key),C=p(Ne,C,de),ue===null?se=Ne:ue.sibling=Ne,ue=Ne);return t&&ce.forEach(function(bv){return r(L,bv)}),We&&ki(L,de),se}function tt(L,C,M,G){if(typeof M=="object"&&M!==null&&M.type===P&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case Oe:e:{for(var se=M.key,ue=C;ue!==null;){if(ue.key===se){if(se=M.type,se===P){if(ue.tag===7){o(L,ue.sibling),C=h(ue,M.props.children),C.return=L,L=C;break e}}else if(ue.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===kt&&of(se)===ue.type){o(L,ue.sibling),C=h(ue,M.props),C.ref=Uo(L,ue,M),C.return=L,L=C;break e}o(L,ue);break}else r(L,ue);ue=ue.sibling}M.type===P?(C=Li(M.props.children,L.mode,G,M.key),C.return=L,L=C):(G=Nl(M.type,M.key,M.props,null,L.mode,G),G.ref=Uo(L,C,M),G.return=L,L=G)}return v(L);case Ae:e:{for(ue=M.key;C!==null;){if(C.key===ue)if(C.tag===4&&C.stateNode.containerInfo===M.containerInfo&&C.stateNode.implementation===M.implementation){o(L,C.sibling),C=h(C,M.children||[]),C.return=L,L=C;break e}else{o(L,C);break}else r(L,C);C=C.sibling}C=nh(M,L.mode,G),C.return=L,L=C}return v(L);case kt:return ue=M._init,tt(L,C,ue(M._payload),G)}if(Yn(M))return ne(L,C,M,G);if(le(M))return re(L,C,M,G);ol(L,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,C!==null&&C.tag===6?(o(L,C.sibling),C=h(C,M),C.return=L,L=C):(o(L,C),C=th(M,L.mode,G),C.return=L,L=C),v(L)):o(L,C)}return tt}var Ds=af(!0),lf=af(!1),al=Lr(null),ll=null,xs=null,hc=null;function dc(){hc=xs=ll=null}function fc(t){var r=al.current;$e(al),t._currentValue=r}function pc(t,r,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),t===o)break;t=t.return}}function Os(t,r){ll=t,hc=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(Ht=!0),t.firstContext=null)}function fn(t){var r=t._currentValue;if(hc!==t)if(t={context:t,memoizedValue:r,next:null},xs===null){if(ll===null)throw Error(n(308));xs=t,ll.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return r}var Ci=null;function mc(t){Ci===null?Ci=[t]:Ci.push(t)}function uf(t,r,o,u){var h=r.interleaved;return h===null?(o.next=o,mc(r)):(o.next=h.next,h.next=o),r.interleaved=o,cr(t,u)}function cr(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Ur=!1;function gc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cf(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hr(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function br(t,r,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,Pe&2){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,cr(t,o)}return h=u.interleaved,h===null?(r.next=r,mc(u)):(r.next=h.next,h.next=r),u.interleaved=r,cr(t,o)}function ul(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var u=r.lanes;u&=t.pendingLanes,o|=u,r.lanes=o,Cr(t,o)}}function hf(t,r){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var v={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?h=p=v:p=p.next=v,o=o.next}while(o!==null);p===null?h=p=r:p=p.next=r}else h=p=r;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:p,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function cl(t,r,o,u){var h=t.updateQueue;Ur=!1;var p=h.firstBaseUpdate,v=h.lastBaseUpdate,w=h.shared.pending;if(w!==null){h.shared.pending=null;var A=w,F=A.next;A.next=null,v===null?p=F:v.next=F,v=A;var $=t.alternate;$!==null&&($=$.updateQueue,w=$.lastBaseUpdate,w!==v&&(w===null?$.firstBaseUpdate=F:w.next=F,$.lastBaseUpdate=A))}if(p!==null){var W=h.baseState;v=0,$=F=A=null,w=p;do{var B=w.lane,Z=w.eventTime;if((u&B)===B){$!==null&&($=$.next={eventTime:Z,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var ne=t,re=w;switch(B=r,Z=o,re.tag){case 1:if(ne=re.payload,typeof ne=="function"){W=ne.call(Z,W,B);break e}W=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=re.payload,B=typeof ne=="function"?ne.call(Z,W,B):ne,B==null)break e;W=ee({},W,B);break e;case 2:Ur=!0}}w.callback!==null&&w.lane!==0&&(t.flags|=64,B=h.effects,B===null?h.effects=[w]:B.push(w))}else Z={eventTime:Z,lane:B,tag:w.tag,payload:w.payload,callback:w.callback,next:null},$===null?(F=$=Z,A=W):$=$.next=Z,v|=B;if(w=w.next,w===null){if(w=h.shared.pending,w===null)break;B=w,w=B.next,B.next=null,h.lastBaseUpdate=B,h.shared.pending=null}}while(!0);if($===null&&(A=W),h.baseState=A,h.firstBaseUpdate=F,h.lastBaseUpdate=$,r=h.shared.interleaved,r!==null){h=r;do v|=h.lane,h=h.next;while(h!==r)}else p===null&&(h.shared.lanes=0);Di|=v,t.lanes=v,t.memoizedState=W}}function df(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var u=t[r],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(n(191,h));h.call(u)}}}var bo={},zn=Lr(bo),jo=Lr(bo),zo=Lr(bo);function Pi(t){if(t===bo)throw Error(n(174));return t}function yc(t,r){switch(je(zo,r),je(jo,t),je(zn,bo),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ot(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=ot(r,t)}$e(zn),je(zn,r)}function Vs(){$e(zn),$e(jo),$e(zo)}function ff(t){Pi(zo.current);var r=Pi(zn.current),o=ot(r,t.type);r!==o&&(je(jo,t),je(zn,o))}function vc(t){jo.current===t&&($e(zn),$e(jo))}var Ke=Lr(0);function hl(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var _c=[];function Ec(){for(var t=0;t<_c.length;t++)_c[t]._workInProgressVersionPrimary=null;_c.length=0}var dl=ye.ReactCurrentDispatcher,wc=ye.ReactCurrentBatchConfig,Ni=0,Qe=null,lt=null,dt=null,fl=!1,Bo=!1,$o=0,lv=0;function Pt(){throw Error(n(321))}function Tc(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!Rn(t[o],r[o]))return!1;return!0}function Ic(t,r,o,u,h,p){if(Ni=p,Qe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,dl.current=t===null||t.memoizedState===null?dv:fv,t=o(u,h),Bo){p=0;do{if(Bo=!1,$o=0,25<=p)throw Error(n(301));p+=1,dt=lt=null,r.updateQueue=null,dl.current=pv,t=o(u,h)}while(Bo)}if(dl.current=gl,r=lt!==null&&lt.next!==null,Ni=0,dt=lt=Qe=null,fl=!1,r)throw Error(n(300));return t}function Sc(){var t=$o!==0;return $o=0,t}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Qe.memoizedState=dt=t:dt=dt.next=t,dt}function pn(){if(lt===null){var t=Qe.alternate;t=t!==null?t.memoizedState:null}else t=lt.next;var r=dt===null?Qe.memoizedState:dt.next;if(r!==null)dt=r,lt=t;else{if(t===null)throw Error(n(310));lt=t,t={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},dt===null?Qe.memoizedState=dt=t:dt=dt.next=t}return dt}function Ho(t,r){return typeof r=="function"?r(t):r}function Ac(t){var r=pn(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=lt,h=u.baseQueue,p=o.pending;if(p!==null){if(h!==null){var v=h.next;h.next=p.next,p.next=v}u.baseQueue=h=p,o.pending=null}if(h!==null){p=h.next,u=u.baseState;var w=v=null,A=null,F=p;do{var $=F.lane;if((Ni&$)===$)A!==null&&(A=A.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),u=F.hasEagerState?F.eagerState:t(u,F.action);else{var W={lane:$,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};A===null?(w=A=W,v=u):A=A.next=W,Qe.lanes|=$,Di|=$}F=F.next}while(F!==null&&F!==p);A===null?v=u:A.next=w,Rn(u,r.memoizedState)||(Ht=!0),r.memoizedState=u,r.baseState=v,r.baseQueue=A,o.lastRenderedState=u}if(t=o.interleaved,t!==null){h=t;do p=h.lane,Qe.lanes|=p,Di|=p,h=h.next;while(h!==t)}else h===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Rc(t){var r=pn(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,h=o.pending,p=r.memoizedState;if(h!==null){o.pending=null;var v=h=h.next;do p=t(p,v.action),v=v.next;while(v!==h);Rn(p,r.memoizedState)||(Ht=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),o.lastRenderedState=p}return[p,u]}function pf(){}function mf(t,r){var o=Qe,u=pn(),h=r(),p=!Rn(u.memoizedState,h);if(p&&(u.memoizedState=h,Ht=!0),u=u.queue,kc(vf.bind(null,o,u,t),[t]),u.getSnapshot!==r||p||dt!==null&&dt.memoizedState.tag&1){if(o.flags|=2048,Wo(9,yf.bind(null,o,u,h,r),void 0,null),ft===null)throw Error(n(349));Ni&30||gf(o,r,h)}return h}function gf(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=Qe.updateQueue,r===null?(r={lastEffect:null,stores:null},Qe.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function yf(t,r,o,u){r.value=o,r.getSnapshot=u,_f(r)&&Ef(t)}function vf(t,r,o){return o(function(){_f(r)&&Ef(t)})}function _f(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!Rn(t,o)}catch{return!0}}function Ef(t){var r=cr(t,1);r!==null&&Dn(r,t,1,-1)}function wf(t){var r=Bn();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:t},r.queue=t,t=t.dispatch=hv.bind(null,Qe,t),[r.memoizedState,t]}function Wo(t,r,o,u){return t={tag:t,create:r,destroy:o,deps:u,next:null},r=Qe.updateQueue,r===null?(r={lastEffect:null,stores:null},Qe.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,r.lastEffect=t)),t}function Tf(){return pn().memoizedState}function pl(t,r,o,u){var h=Bn();Qe.flags|=t,h.memoizedState=Wo(1|r,o,void 0,u===void 0?null:u)}function ml(t,r,o,u){var h=pn();u=u===void 0?null:u;var p=void 0;if(lt!==null){var v=lt.memoizedState;if(p=v.destroy,u!==null&&Tc(u,v.deps)){h.memoizedState=Wo(r,o,p,u);return}}Qe.flags|=t,h.memoizedState=Wo(1|r,o,p,u)}function If(t,r){return pl(8390656,8,t,r)}function kc(t,r){return ml(2048,8,t,r)}function Sf(t,r){return ml(4,2,t,r)}function Af(t,r){return ml(4,4,t,r)}function Rf(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function kf(t,r,o){return o=o!=null?o.concat([t]):null,ml(4,4,Rf.bind(null,r,t),o)}function Cc(){}function Cf(t,r){var o=pn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Tc(r,u[1])?u[0]:(o.memoizedState=[t,r],t)}function Pf(t,r){var o=pn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Tc(r,u[1])?u[0]:(t=t(),o.memoizedState=[t,r],t)}function Nf(t,r,o){return Ni&21?(Rn(o,r)||(o=_i(),Qe.lanes|=o,Di|=o,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,Ht=!0),t.memoizedState=o)}function uv(t,r){var o=Se;Se=o!==0&&4>o?o:4,t(!0);var u=wc.transition;wc.transition={};try{t(!1),r()}finally{Se=o,wc.transition=u}}function Df(){return pn().memoizedState}function cv(t,r,o){var u=$r(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},xf(t))Of(r,o);else if(o=uf(t,r,o,u),o!==null){var h=bt();Dn(o,t,u,h),Vf(o,r,u)}}function hv(t,r,o){var u=$r(t),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(xf(t))Of(r,h);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var v=r.lastRenderedState,w=p(v,o);if(h.hasEagerState=!0,h.eagerState=w,Rn(w,v)){var A=r.interleaved;A===null?(h.next=h,mc(r)):(h.next=A.next,A.next=h),r.interleaved=h;return}}catch{}finally{}o=uf(t,r,h,u),o!==null&&(h=bt(),Dn(o,t,u,h),Vf(o,r,u))}}function xf(t){var r=t.alternate;return t===Qe||r!==null&&r===Qe}function Of(t,r){Bo=fl=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Vf(t,r,o){if(o&4194240){var u=r.lanes;u&=t.pendingLanes,o|=u,r.lanes=o,Cr(t,o)}}var gl={readContext:fn,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},dv={readContext:fn,useCallback:function(t,r){return Bn().memoizedState=[t,r===void 0?null:r],t},useContext:fn,useEffect:If,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,pl(4194308,4,Rf.bind(null,r,t),o)},useLayoutEffect:function(t,r){return pl(4194308,4,t,r)},useInsertionEffect:function(t,r){return pl(4,2,t,r)},useMemo:function(t,r){var o=Bn();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var u=Bn();return r=o!==void 0?o(r):r,u.memoizedState=u.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},u.queue=t,t=t.dispatch=cv.bind(null,Qe,t),[u.memoizedState,t]},useRef:function(t){var r=Bn();return t={current:t},r.memoizedState=t},useState:wf,useDebugValue:Cc,useDeferredValue:function(t){return Bn().memoizedState=t},useTransition:function(){var t=wf(!1),r=t[0];return t=uv.bind(null,t[1]),Bn().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var u=Qe,h=Bn();if(We){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),ft===null)throw Error(n(349));Ni&30||gf(u,r,o)}h.memoizedState=o;var p={value:o,getSnapshot:r};return h.queue=p,If(vf.bind(null,u,p,t),[t]),u.flags|=2048,Wo(9,yf.bind(null,u,p,o,r),void 0,null),o},useId:function(){var t=Bn(),r=ft.identifierPrefix;if(We){var o=ur,u=lr;o=(u&~(1<<32-Mt(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=$o++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=lv++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},fv={readContext:fn,useCallback:Cf,useContext:fn,useEffect:kc,useImperativeHandle:kf,useInsertionEffect:Sf,useLayoutEffect:Af,useMemo:Pf,useReducer:Ac,useRef:Tf,useState:function(){return Ac(Ho)},useDebugValue:Cc,useDeferredValue:function(t){var r=pn();return Nf(r,lt.memoizedState,t)},useTransition:function(){var t=Ac(Ho)[0],r=pn().memoizedState;return[t,r]},useMutableSource:pf,useSyncExternalStore:mf,useId:Df,unstable_isNewReconciler:!1},pv={readContext:fn,useCallback:Cf,useContext:fn,useEffect:kc,useImperativeHandle:kf,useInsertionEffect:Sf,useLayoutEffect:Af,useMemo:Pf,useReducer:Rc,useRef:Tf,useState:function(){return Rc(Ho)},useDebugValue:Cc,useDeferredValue:function(t){var r=pn();return lt===null?r.memoizedState=t:Nf(r,lt.memoizedState,t)},useTransition:function(){var t=Rc(Ho)[0],r=pn().memoizedState;return[t,r]},useMutableSource:pf,useSyncExternalStore:mf,useId:Df,unstable_isNewReconciler:!1};function Cn(t,r){if(t&&t.defaultProps){r=ee({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function Pc(t,r,o,u){r=t.memoizedState,o=o(u,r),o=o==null?r:ee({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var yl={isMounted:function(t){return(t=t._reactInternals)?_n(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var u=bt(),h=$r(t),p=hr(u,h);p.payload=r,o!=null&&(p.callback=o),r=br(t,p,h),r!==null&&(Dn(r,t,h,u),ul(r,t,h))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var u=bt(),h=$r(t),p=hr(u,h);p.tag=1,p.payload=r,o!=null&&(p.callback=o),r=br(t,p,h),r!==null&&(Dn(r,t,h,u),ul(r,t,h))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=bt(),u=$r(t),h=hr(o,u);h.tag=2,r!=null&&(h.callback=r),r=br(t,h,u),r!==null&&(Dn(r,t,u,o),ul(r,t,u))}};function Lf(t,r,o,u,h,p,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,p,v):r.prototype&&r.prototype.isPureReactComponent?!Do(o,u)||!Do(h,p):!0}function Mf(t,r,o){var u=!1,h=Mr,p=r.contextType;return typeof p=="object"&&p!==null?p=fn(p):(h=$t(r)?Ai:Ct.current,u=r.contextTypes,p=(u=u!=null)?ks(t,h):Mr),r=new r(o,p),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=yl,t.stateNode=r,r._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=h,t.__reactInternalMemoizedMaskedChildContext=p),r}function Ff(t,r,o,u){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==t&&yl.enqueueReplaceState(r,r.state,null)}function Nc(t,r,o,u){var h=t.stateNode;h.props=o,h.state=t.memoizedState,h.refs={},gc(t);var p=r.contextType;typeof p=="object"&&p!==null?h.context=fn(p):(p=$t(r)?Ai:Ct.current,h.context=ks(t,p)),h.state=t.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(Pc(t,r,p,o),h.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&yl.enqueueReplaceState(h,h.state,null),cl(t,o,h,u),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308)}function Ls(t,r){try{var o="",u=r;do o+=Ee(u),u=u.return;while(u);var h=o}catch(p){h=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:r,stack:h,digest:null}}function Dc(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function xc(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var mv=typeof WeakMap=="function"?WeakMap:Map;function Uf(t,r,o){o=hr(-1,o),o.tag=3,o.payload={element:null};var u=r.value;return o.callback=function(){Sl||(Sl=!0,Gc=u),xc(t,r)},o}function bf(t,r,o){o=hr(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;o.payload=function(){return u(h)},o.callback=function(){xc(t,r)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){xc(t,r),typeof u!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),o}function jf(t,r,o){var u=t.pingCache;if(u===null){u=t.pingCache=new mv;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(o)||(h.add(o),t=Pv.bind(null,t,r,o),r.then(t,t))}function zf(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function Bf(t,r,o,u,h){return t.mode&1?(t.flags|=65536,t.lanes=h,t):(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=hr(-1,1),r.tag=2,br(o,r,1))),o.lanes|=1),t)}var gv=ye.ReactCurrentOwner,Ht=!1;function Ut(t,r,o,u){r.child=t===null?lf(r,null,o,u):Ds(r,t.child,o,u)}function $f(t,r,o,u,h){o=o.render;var p=r.ref;return Os(r,h),u=Ic(t,r,o,u,p,h),o=Sc(),t!==null&&!Ht?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~h,dr(t,r,h)):(We&&o&&oc(r),r.flags|=1,Ut(t,r,u,h),r.child)}function Hf(t,r,o,u,h){if(t===null){var p=o.type;return typeof p=="function"&&!eh(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=p,Wf(t,r,p,u,h)):(t=Nl(o.type,null,u,r,r.mode,h),t.ref=r.ref,t.return=r,r.child=t)}if(p=t.child,!(t.lanes&h)){var v=p.memoizedProps;if(o=o.compare,o=o!==null?o:Do,o(v,u)&&t.ref===r.ref)return dr(t,r,h)}return r.flags|=1,t=Wr(p,u),t.ref=r.ref,t.return=r,r.child=t}function Wf(t,r,o,u,h){if(t!==null){var p=t.memoizedProps;if(Do(p,u)&&t.ref===r.ref)if(Ht=!1,r.pendingProps=u=p,(t.lanes&h)!==0)t.flags&131072&&(Ht=!0);else return r.lanes=t.lanes,dr(t,r,h)}return Oc(t,r,o,u,h)}function qf(t,r,o){var u=r.pendingProps,h=u.children,p=t!==null?t.memoizedState:null;if(u.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(Fs,rn),rn|=o;else{if(!(o&1073741824))return t=p!==null?p.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,je(Fs,rn),rn|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,je(Fs,rn),rn|=u}else p!==null?(u=p.baseLanes|o,r.memoizedState=null):u=o,je(Fs,rn),rn|=u;return Ut(t,r,h,o),r.child}function Gf(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Oc(t,r,o,u,h){var p=$t(o)?Ai:Ct.current;return p=ks(r,p),Os(r,h),o=Ic(t,r,o,u,p,h),u=Sc(),t!==null&&!Ht?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~h,dr(t,r,h)):(We&&u&&oc(r),r.flags|=1,Ut(t,r,o,h),r.child)}function Kf(t,r,o,u,h){if($t(o)){var p=!0;tl(r)}else p=!1;if(Os(r,h),r.stateNode===null)_l(t,r),Mf(r,o,u),Nc(r,o,u,h),u=!0;else if(t===null){var v=r.stateNode,w=r.memoizedProps;v.props=w;var A=v.context,F=o.contextType;typeof F=="object"&&F!==null?F=fn(F):(F=$t(o)?Ai:Ct.current,F=ks(r,F));var $=o.getDerivedStateFromProps,W=typeof $=="function"||typeof v.getSnapshotBeforeUpdate=="function";W||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(w!==u||A!==F)&&Ff(r,v,u,F),Ur=!1;var B=r.memoizedState;v.state=B,cl(r,u,v,h),A=r.memoizedState,w!==u||B!==A||Bt.current||Ur?(typeof $=="function"&&(Pc(r,o,$,u),A=r.memoizedState),(w=Ur||Lf(r,o,w,u,B,A,F))?(W||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=A),v.props=u,v.state=A,v.context=F,u=w):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{v=r.stateNode,cf(t,r),w=r.memoizedProps,F=r.type===r.elementType?w:Cn(r.type,w),v.props=F,W=r.pendingProps,B=v.context,A=o.contextType,typeof A=="object"&&A!==null?A=fn(A):(A=$t(o)?Ai:Ct.current,A=ks(r,A));var Z=o.getDerivedStateFromProps;($=typeof Z=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(w!==W||B!==A)&&Ff(r,v,u,A),Ur=!1,B=r.memoizedState,v.state=B,cl(r,u,v,h);var ne=r.memoizedState;w!==W||B!==ne||Bt.current||Ur?(typeof Z=="function"&&(Pc(r,o,Z,u),ne=r.memoizedState),(F=Ur||Lf(r,o,F,u,B,ne,A)||!1)?($||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(u,ne,A),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(u,ne,A)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||w===t.memoizedProps&&B===t.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&B===t.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=ne),v.props=u,v.state=ne,v.context=A,u=F):(typeof v.componentDidUpdate!="function"||w===t.memoizedProps&&B===t.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&B===t.memoizedState||(r.flags|=1024),u=!1)}return Vc(t,r,o,u,p,h)}function Vc(t,r,o,u,h,p){Gf(t,r);var v=(r.flags&128)!==0;if(!u&&!v)return h&&Jd(r,o,!1),dr(t,r,p);u=r.stateNode,gv.current=r;var w=v&&typeof o.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,t!==null&&v?(r.child=Ds(r,t.child,null,p),r.child=Ds(r,null,w,p)):Ut(t,r,w,p),r.memoizedState=u.state,h&&Jd(r,o,!0),r.child}function Qf(t){var r=t.stateNode;r.pendingContext?Xd(t,r.pendingContext,r.pendingContext!==r.context):r.context&&Xd(t,r.context,!1),yc(t,r.containerInfo)}function Xf(t,r,o,u,h){return Ns(),cc(h),r.flags|=256,Ut(t,r,o,u),r.child}var Lc={dehydrated:null,treeContext:null,retryLane:0};function Mc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yf(t,r,o){var u=r.pendingProps,h=Ke.current,p=!1,v=(r.flags&128)!==0,w;if((w=v)||(w=t!==null&&t.memoizedState===null?!1:(h&2)!==0),w?(p=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(h|=1),je(Ke,h&1),t===null)return uc(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(v=u.children,t=u.fallback,p?(u=r.mode,p=r.child,v={mode:"hidden",children:v},!(u&1)&&p!==null?(p.childLanes=0,p.pendingProps=v):p=Dl(v,u,0,null),t=Li(t,u,o,null),p.return=r,t.return=r,p.sibling=t,r.child=p,r.child.memoizedState=Mc(o),r.memoizedState=Lc,t):Fc(r,v));if(h=t.memoizedState,h!==null&&(w=h.dehydrated,w!==null))return yv(t,r,v,u,w,h,o);if(p){p=u.fallback,v=r.mode,h=t.child,w=h.sibling;var A={mode:"hidden",children:u.children};return!(v&1)&&r.child!==h?(u=r.child,u.childLanes=0,u.pendingProps=A,r.deletions=null):(u=Wr(h,A),u.subtreeFlags=h.subtreeFlags&14680064),w!==null?p=Wr(w,p):(p=Li(p,v,o,null),p.flags|=2),p.return=r,u.return=r,u.sibling=p,r.child=u,u=p,p=r.child,v=t.child.memoizedState,v=v===null?Mc(o):{baseLanes:v.baseLanes|o,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=t.childLanes&~o,r.memoizedState=Lc,u}return p=t.child,t=p.sibling,u=Wr(p,{mode:"visible",children:u.children}),!(r.mode&1)&&(u.lanes=o),u.return=r,u.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=u,r.memoizedState=null,u}function Fc(t,r){return r=Dl({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function vl(t,r,o,u){return u!==null&&cc(u),Ds(r,t.child,null,o),t=Fc(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function yv(t,r,o,u,h,p,v){if(o)return r.flags&256?(r.flags&=-257,u=Dc(Error(n(422))),vl(t,r,v,u)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(p=u.fallback,h=r.mode,u=Dl({mode:"visible",children:u.children},h,0,null),p=Li(p,h,v,null),p.flags|=2,u.return=r,p.return=r,u.sibling=p,r.child=u,r.mode&1&&Ds(r,t.child,null,v),r.child.memoizedState=Mc(v),r.memoizedState=Lc,p);if(!(r.mode&1))return vl(t,r,v,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var w=u.dgst;return u=w,p=Error(n(419)),u=Dc(p,u,void 0),vl(t,r,v,u)}if(w=(v&t.childLanes)!==0,Ht||w){if(u=ft,u!==null){switch(v&-v){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=h&(u.suspendedLanes|v)?0:h,h!==0&&h!==p.retryLane&&(p.retryLane=h,cr(t,h),Dn(u,t,h,-1))}return Zc(),u=Dc(Error(n(421))),vl(t,r,v,u)}return h.data==="$?"?(r.flags|=128,r.child=t.child,r=Nv.bind(null,t),h._reactRetry=r,null):(t=p.treeContext,nn=Vr(h.nextSibling),tn=r,We=!0,kn=null,t!==null&&(hn[dn++]=lr,hn[dn++]=ur,hn[dn++]=Ri,lr=t.id,ur=t.overflow,Ri=r),r=Fc(r,u.children),r.flags|=4096,r)}function Jf(t,r,o){t.lanes|=r;var u=t.alternate;u!==null&&(u.lanes|=r),pc(t.return,r,o)}function Uc(t,r,o,u,h){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=h)}function Zf(t,r,o){var u=r.pendingProps,h=u.revealOrder,p=u.tail;if(Ut(t,r,u.children,o),u=Ke.current,u&2)u=u&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jf(t,o,r);else if(t.tag===19)Jf(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(je(Ke,u),!(r.mode&1))r.memoizedState=null;else switch(h){case"forwards":for(o=r.child,h=null;o!==null;)t=o.alternate,t!==null&&hl(t)===null&&(h=o),o=o.sibling;o=h,o===null?(h=r.child,r.child=null):(h=o.sibling,o.sibling=null),Uc(r,!1,h,o,p);break;case"backwards":for(o=null,h=r.child,r.child=null;h!==null;){if(t=h.alternate,t!==null&&hl(t)===null){r.child=h;break}t=h.sibling,h.sibling=o,o=h,h=t}Uc(r,!0,o,null,p);break;case"together":Uc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function _l(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function dr(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),Di|=r.lanes,!(o&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=Wr(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=Wr(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function vv(t,r,o){switch(r.tag){case 3:Qf(r),Ns();break;case 5:ff(r);break;case 1:$t(r.type)&&tl(r);break;case 4:yc(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,h=r.memoizedProps.value;je(al,u._currentValue),u._currentValue=h;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(je(Ke,Ke.current&1),r.flags|=128,null):o&r.child.childLanes?Yf(t,r,o):(je(Ke,Ke.current&1),t=dr(t,r,o),t!==null?t.sibling:null);je(Ke,Ke.current&1);break;case 19:if(u=(o&r.childLanes)!==0,t.flags&128){if(u)return Zf(t,r,o);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),je(Ke,Ke.current),u)break;return null;case 22:case 23:return r.lanes=0,qf(t,r,o)}return dr(t,r,o)}var ep,bc,tp,np;ep=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},bc=function(){},tp=function(t,r,o,u){var h=t.memoizedProps;if(h!==u){t=r.stateNode,Pi(zn.current);var p=null;switch(o){case"input":h=li(t,h),u=li(t,u),p=[];break;case"select":h=ee({},h,{value:void 0}),u=ee({},u,{value:void 0}),p=[];break;case"textarea":h=so(t,h),u=so(t,u),p=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=Ja)}ho(o,u);var v;o=null;for(F in h)if(!u.hasOwnProperty(F)&&h.hasOwnProperty(F)&&h[F]!=null)if(F==="style"){var w=h[F];for(v in w)w.hasOwnProperty(v)&&(o||(o={}),o[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(a.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in u){var A=u[F];if(w=h!=null?h[F]:void 0,u.hasOwnProperty(F)&&A!==w&&(A!=null||w!=null))if(F==="style")if(w){for(v in w)!w.hasOwnProperty(v)||A&&A.hasOwnProperty(v)||(o||(o={}),o[v]="");for(v in A)A.hasOwnProperty(v)&&w[v]!==A[v]&&(o||(o={}),o[v]=A[v])}else o||(p||(p=[]),p.push(F,o)),o=A;else F==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,w=w?w.__html:void 0,A!=null&&w!==A&&(p=p||[]).push(F,A)):F==="children"?typeof A!="string"&&typeof A!="number"||(p=p||[]).push(F,""+A):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(a.hasOwnProperty(F)?(A!=null&&F==="onScroll"&&Be("scroll",t),p||w===A||(p=[])):(p=p||[]).push(F,A))}o&&(p=p||[]).push("style",o);var F=p;(r.updateQueue=F)&&(r.flags|=4)}},np=function(t,r,o,u){o!==u&&(r.flags|=4)};function qo(t,r){if(!We)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function Nt(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(r)for(var h=t.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=u,t.childLanes=o,r}function _v(t,r,o){var u=r.pendingProps;switch(ac(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(r),null;case 1:return $t(r.type)&&el(),Nt(r),null;case 3:return u=r.stateNode,Vs(),$e(Bt),$e(Ct),Ec(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(sl(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,kn!==null&&(Xc(kn),kn=null))),bc(t,r),Nt(r),null;case 5:vc(r);var h=Pi(zo.current);if(o=r.type,t!==null&&r.stateNode!=null)tp(t,r,o,u,h),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(n(166));return Nt(r),null}if(t=Pi(zn.current),sl(r)){u=r.stateNode,o=r.type;var p=r.memoizedProps;switch(u[jn]=r,u[Mo]=p,t=(r.mode&1)!==0,o){case"dialog":Be("cancel",u),Be("close",u);break;case"iframe":case"object":case"embed":Be("load",u);break;case"video":case"audio":for(h=0;h<Oo.length;h++)Be(Oo[h],u);break;case"source":Be("error",u);break;case"img":case"image":case"link":Be("error",u),Be("load",u);break;case"details":Be("toggle",u);break;case"input":Qi(u,p),Be("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Be("invalid",u);break;case"textarea":Yi(u,p),Be("invalid",u)}ho(o,p),h=null;for(var v in p)if(p.hasOwnProperty(v)){var w=p[v];v==="children"?typeof w=="string"?u.textContent!==w&&(p.suppressHydrationWarning!==!0&&Ya(u.textContent,w,t),h=["children",w]):typeof w=="number"&&u.textContent!==""+w&&(p.suppressHydrationWarning!==!0&&Ya(u.textContent,w,t),h=["children",""+w]):a.hasOwnProperty(v)&&w!=null&&v==="onScroll"&&Be("scroll",u)}switch(o){case"input":Xn(u),Ia(u,p,!0);break;case"textarea":Xn(u),oo(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=Ja)}u=h,r.updateQueue=u,u!==null&&(r.flags|=4)}else{v=h.nodeType===9?h:h.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=st(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=v.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=v.createElement(o,{is:u.is}):(t=v.createElement(o),o==="select"&&(v=t,u.multiple?v.multiple=!0:u.size&&(v.size=u.size))):t=v.createElementNS(t,o),t[jn]=r,t[Mo]=u,ep(t,r,!1,!1),r.stateNode=t;e:{switch(v=fo(o,u),o){case"dialog":Be("cancel",t),Be("close",t),h=u;break;case"iframe":case"object":case"embed":Be("load",t),h=u;break;case"video":case"audio":for(h=0;h<Oo.length;h++)Be(Oo[h],t);h=u;break;case"source":Be("error",t),h=u;break;case"img":case"image":case"link":Be("error",t),Be("load",t),h=u;break;case"details":Be("toggle",t),h=u;break;case"input":Qi(t,u),h=li(t,u),Be("invalid",t);break;case"option":h=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},h=ee({},u,{value:void 0}),Be("invalid",t);break;case"textarea":Yi(t,u),h=so(t,u),Be("invalid",t);break;default:h=u}ho(o,h),w=h;for(p in w)if(w.hasOwnProperty(p)){var A=w[p];p==="style"?uo(t,A):p==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&ao(t,A)):p==="children"?typeof A=="string"?(o!=="textarea"||A!=="")&&Ir(t,A):typeof A=="number"&&Ir(t,""+A):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?A!=null&&p==="onScroll"&&Be("scroll",t):A!=null&&ge(t,p,A,v))}switch(o){case"input":Xn(t),Ia(t,u,!1);break;case"textarea":Xn(t),oo(t);break;case"option":u.value!=null&&t.setAttribute("value",""+xe(u.value));break;case"select":t.multiple=!!u.multiple,p=u.value,p!=null?Jn(t,!!u.multiple,p,!1):u.defaultValue!=null&&Jn(t,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(t.onclick=Ja)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Nt(r),null;case 6:if(t&&r.stateNode!=null)np(t,r,t.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(n(166));if(o=Pi(zo.current),Pi(zn.current),sl(r)){if(u=r.stateNode,o=r.memoizedProps,u[jn]=r,(p=u.nodeValue!==o)&&(t=tn,t!==null))switch(t.tag){case 3:Ya(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ya(u.nodeValue,o,(t.mode&1)!==0)}p&&(r.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[jn]=r,r.stateNode=u}return Nt(r),null;case 13:if($e(Ke),u=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(We&&nn!==null&&r.mode&1&&!(r.flags&128))sf(),Ns(),r.flags|=98560,p=!1;else if(p=sl(r),u!==null&&u.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[jn]=r}else Ns(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Nt(r),p=!1}else kn!==null&&(Xc(kn),kn=null),p=!0;if(!p)return r.flags&65536?r:null}return r.flags&128?(r.lanes=o,r):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(r.child.flags|=8192,r.mode&1&&(t===null||Ke.current&1?ut===0&&(ut=3):Zc())),r.updateQueue!==null&&(r.flags|=4),Nt(r),null);case 4:return Vs(),bc(t,r),t===null&&Vo(r.stateNode.containerInfo),Nt(r),null;case 10:return fc(r.type._context),Nt(r),null;case 17:return $t(r.type)&&el(),Nt(r),null;case 19:if($e(Ke),p=r.memoizedState,p===null)return Nt(r),null;if(u=(r.flags&128)!==0,v=p.rendering,v===null)if(u)qo(p,!1);else{if(ut!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(v=hl(t),v!==null){for(r.flags|=128,qo(p,!1),u=v.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=o,o=r.child;o!==null;)p=o,t=u,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,t=v.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return je(Ke,Ke.current&1|2),r.child}t=t.sibling}p.tail!==null&&be()>Us&&(r.flags|=128,u=!0,qo(p,!1),r.lanes=4194304)}else{if(!u)if(t=hl(v),t!==null){if(r.flags|=128,u=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),qo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!We)return Nt(r),null}else 2*be()-p.renderingStartTime>Us&&o!==1073741824&&(r.flags|=128,u=!0,qo(p,!1),r.lanes=4194304);p.isBackwards?(v.sibling=r.child,r.child=v):(o=p.last,o!==null?o.sibling=v:r.child=v,p.last=v)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=be(),r.sibling=null,o=Ke.current,je(Ke,u?o&1|2:o&1),r):(Nt(r),null);case 22:case 23:return Jc(),u=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(r.flags|=8192),u&&r.mode&1?rn&1073741824&&(Nt(r),r.subtreeFlags&6&&(r.flags|=8192)):Nt(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function Ev(t,r){switch(ac(r),r.tag){case 1:return $t(r.type)&&el(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Vs(),$e(Bt),$e(Ct),Ec(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return vc(r),null;case 13:if($e(Ke),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));Ns()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return $e(Ke),null;case 4:return Vs(),null;case 10:return fc(r.type._context),null;case 22:case 23:return Jc(),null;case 24:return null;default:return null}}var El=!1,Dt=!1,wv=typeof WeakSet=="function"?WeakSet:Set,te=null;function Ms(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Xe(t,r,u)}else o.current=null}function jc(t,r,o){try{o()}catch(u){Xe(t,r,u)}}var rp=!1;function Tv(t,r){if(Ju=Dr,t=Vd(),Hu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var v=0,w=-1,A=-1,F=0,$=0,W=t,B=null;t:for(;;){for(var Z;W!==o||h!==0&&W.nodeType!==3||(w=v+h),W!==p||u!==0&&W.nodeType!==3||(A=v+u),W.nodeType===3&&(v+=W.nodeValue.length),(Z=W.firstChild)!==null;)B=W,W=Z;for(;;){if(W===t)break t;if(B===o&&++F===h&&(w=v),B===p&&++$===u&&(A=v),(Z=W.nextSibling)!==null)break;W=B,B=W.parentNode}W=Z}o=w===-1||A===-1?null:{start:w,end:A}}else o=null}o=o||{start:0,end:0}}else o=null;for(Zu={focusedElem:t,selectionRange:o},Dr=!1,te=r;te!==null;)if(r=te,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,te=t;else for(;te!==null;){r=te;try{var ne=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ne!==null){var re=ne.memoizedProps,tt=ne.memoizedState,L=r.stateNode,C=L.getSnapshotBeforeUpdate(r.elementType===r.type?re:Cn(r.type,re),tt);L.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var M=r.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(G){Xe(r,r.return,G)}if(t=r.sibling,t!==null){t.return=r.return,te=t;break}te=r.return}return ne=rp,rp=!1,ne}function Go(t,r,o){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&t)===t){var p=h.destroy;h.destroy=void 0,p!==void 0&&jc(r,o,p)}h=h.next}while(h!==u)}}function wl(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==r)}}function zc(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function ip(t){var r=t.alternate;r!==null&&(t.alternate=null,ip(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[jn],delete r[Mo],delete r[rc],delete r[iv],delete r[sv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sp(t){return t.tag===5||t.tag===3||t.tag===4}function op(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bc(t,r,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Ja));else if(u!==4&&(t=t.child,t!==null))for(Bc(t,r,o),t=t.sibling;t!==null;)Bc(t,r,o),t=t.sibling}function $c(t,r,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for($c(t,r,o),t=t.sibling;t!==null;)$c(t,r,o),t=t.sibling}var Et=null,Pn=!1;function jr(t,r,o){for(o=o.child;o!==null;)ap(t,r,o),o=o.sibling}function ap(t,r,o){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(yi,o)}catch{}switch(o.tag){case 5:Dt||Ms(o,r);case 6:var u=Et,h=Pn;Et=null,jr(t,r,o),Et=u,Pn=h,Et!==null&&(Pn?(t=Et,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Et.removeChild(o.stateNode));break;case 18:Et!==null&&(Pn?(t=Et,o=o.stateNode,t.nodeType===8?nc(t.parentNode,o):t.nodeType===1&&nc(t,o),Sn(t)):nc(Et,o.stateNode));break;case 4:u=Et,h=Pn,Et=o.stateNode.containerInfo,Pn=!0,jr(t,r,o),Et=u,Pn=h;break;case 0:case 11:case 14:case 15:if(!Dt&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var p=h,v=p.destroy;p=p.tag,v!==void 0&&(p&2||p&4)&&jc(o,r,v),h=h.next}while(h!==u)}jr(t,r,o);break;case 1:if(!Dt&&(Ms(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(w){Xe(o,r,w)}jr(t,r,o);break;case 21:jr(t,r,o);break;case 22:o.mode&1?(Dt=(u=Dt)||o.memoizedState!==null,jr(t,r,o),Dt=u):jr(t,r,o);break;default:jr(t,r,o)}}function lp(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new wv),r.forEach(function(u){var h=Dv.bind(null,t,u);o.has(u)||(o.add(u),u.then(h,h))})}}function Nn(t,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var p=t,v=r,w=v;e:for(;w!==null;){switch(w.tag){case 5:Et=w.stateNode,Pn=!1;break e;case 3:Et=w.stateNode.containerInfo,Pn=!0;break e;case 4:Et=w.stateNode.containerInfo,Pn=!0;break e}w=w.return}if(Et===null)throw Error(n(160));ap(p,v,h),Et=null,Pn=!1;var A=h.alternate;A!==null&&(A.return=null),h.return=null}catch(F){Xe(h,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)up(r,t),r=r.sibling}function up(t,r){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(r,t),$n(t),u&4){try{Go(3,t,t.return),wl(3,t)}catch(re){Xe(t,t.return,re)}try{Go(5,t,t.return)}catch(re){Xe(t,t.return,re)}}break;case 1:Nn(r,t),$n(t),u&512&&o!==null&&Ms(o,o.return);break;case 5:if(Nn(r,t),$n(t),u&512&&o!==null&&Ms(o,o.return),t.flags&32){var h=t.stateNode;try{Ir(h,"")}catch(re){Xe(t,t.return,re)}}if(u&4&&(h=t.stateNode,h!=null)){var p=t.memoizedProps,v=o!==null?o.memoizedProps:p,w=t.type,A=t.updateQueue;if(t.updateQueue=null,A!==null)try{w==="input"&&p.type==="radio"&&p.name!=null&&ro(h,p),fo(w,v);var F=fo(w,p);for(v=0;v<A.length;v+=2){var $=A[v],W=A[v+1];$==="style"?uo(h,W):$==="dangerouslySetInnerHTML"?ao(h,W):$==="children"?Ir(h,W):ge(h,$,W,F)}switch(w){case"input":io(h,p);break;case"textarea":Ji(h,p);break;case"select":var B=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!p.multiple;var Z=p.value;Z!=null?Jn(h,!!p.multiple,Z,!1):B!==!!p.multiple&&(p.defaultValue!=null?Jn(h,!!p.multiple,p.defaultValue,!0):Jn(h,!!p.multiple,p.multiple?[]:"",!1))}h[Mo]=p}catch(re){Xe(t,t.return,re)}}break;case 6:if(Nn(r,t),$n(t),u&4){if(t.stateNode===null)throw Error(n(162));h=t.stateNode,p=t.memoizedProps;try{h.nodeValue=p}catch(re){Xe(t,t.return,re)}}break;case 3:if(Nn(r,t),$n(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Sn(r.containerInfo)}catch(re){Xe(t,t.return,re)}break;case 4:Nn(r,t),$n(t);break;case 13:Nn(r,t),$n(t),h=t.child,h.flags&8192&&(p=h.memoizedState!==null,h.stateNode.isHidden=p,!p||h.alternate!==null&&h.alternate.memoizedState!==null||(qc=be())),u&4&&lp(t);break;case 22:if($=o!==null&&o.memoizedState!==null,t.mode&1?(Dt=(F=Dt)||$,Nn(r,t),Dt=F):Nn(r,t),$n(t),u&8192){if(F=t.memoizedState!==null,(t.stateNode.isHidden=F)&&!$&&t.mode&1)for(te=t,$=t.child;$!==null;){for(W=te=$;te!==null;){switch(B=te,Z=B.child,B.tag){case 0:case 11:case 14:case 15:Go(4,B,B.return);break;case 1:Ms(B,B.return);var ne=B.stateNode;if(typeof ne.componentWillUnmount=="function"){u=B,o=B.return;try{r=u,ne.props=r.memoizedProps,ne.state=r.memoizedState,ne.componentWillUnmount()}catch(re){Xe(u,o,re)}}break;case 5:Ms(B,B.return);break;case 22:if(B.memoizedState!==null){dp(W);continue}}Z!==null?(Z.return=B,te=Z):dp(W)}$=$.sibling}e:for($=null,W=t;;){if(W.tag===5){if($===null){$=W;try{h=W.stateNode,F?(p=h.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(w=W.stateNode,A=W.memoizedProps.style,v=A!=null&&A.hasOwnProperty("display")?A.display:null,w.style.display=lo("display",v))}catch(re){Xe(t,t.return,re)}}}else if(W.tag===6){if($===null)try{W.stateNode.nodeValue=F?"":W.memoizedProps}catch(re){Xe(t,t.return,re)}}else if((W.tag!==22&&W.tag!==23||W.memoizedState===null||W===t)&&W.child!==null){W.child.return=W,W=W.child;continue}if(W===t)break e;for(;W.sibling===null;){if(W.return===null||W.return===t)break e;$===W&&($=null),W=W.return}$===W&&($=null),W.sibling.return=W.return,W=W.sibling}}break;case 19:Nn(r,t),$n(t),u&4&&lp(t);break;case 21:break;default:Nn(r,t),$n(t)}}function $n(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(sp(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(Ir(h,""),u.flags&=-33);var p=op(t);$c(t,p,h);break;case 3:case 4:var v=u.stateNode.containerInfo,w=op(t);Bc(t,w,v);break;default:throw Error(n(161))}}catch(A){Xe(t,t.return,A)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Iv(t,r,o){te=t,cp(t)}function cp(t,r,o){for(var u=(t.mode&1)!==0;te!==null;){var h=te,p=h.child;if(h.tag===22&&u){var v=h.memoizedState!==null||El;if(!v){var w=h.alternate,A=w!==null&&w.memoizedState!==null||Dt;w=El;var F=Dt;if(El=v,(Dt=A)&&!F)for(te=h;te!==null;)v=te,A=v.child,v.tag===22&&v.memoizedState!==null?fp(h):A!==null?(A.return=v,te=A):fp(h);for(;p!==null;)te=p,cp(p),p=p.sibling;te=h,El=w,Dt=F}hp(t)}else h.subtreeFlags&8772&&p!==null?(p.return=h,te=p):hp(t)}}function hp(t){for(;te!==null;){var r=te;if(r.flags&8772){var o=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Dt||wl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!Dt)if(o===null)u.componentDidMount();else{var h=r.elementType===r.type?o.memoizedProps:Cn(r.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&df(r,p,u);break;case 3:var v=r.updateQueue;if(v!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}df(r,v,o)}break;case 5:var w=r.stateNode;if(o===null&&r.flags&4){o=w;var A=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&o.focus();break;case"img":A.src&&(o.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var $=F.memoizedState;if($!==null){var W=$.dehydrated;W!==null&&Sn(W)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Dt||r.flags&512&&zc(r)}catch(B){Xe(r,r.return,B)}}if(r===t){te=null;break}if(o=r.sibling,o!==null){o.return=r.return,te=o;break}te=r.return}}function dp(t){for(;te!==null;){var r=te;if(r===t){te=null;break}var o=r.sibling;if(o!==null){o.return=r.return,te=o;break}te=r.return}}function fp(t){for(;te!==null;){var r=te;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{wl(4,r)}catch(A){Xe(r,o,A)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var h=r.return;try{u.componentDidMount()}catch(A){Xe(r,h,A)}}var p=r.return;try{zc(r)}catch(A){Xe(r,p,A)}break;case 5:var v=r.return;try{zc(r)}catch(A){Xe(r,v,A)}}}catch(A){Xe(r,r.return,A)}if(r===t){te=null;break}var w=r.sibling;if(w!==null){w.return=r.return,te=w;break}te=r.return}}var Sv=Math.ceil,Tl=ye.ReactCurrentDispatcher,Hc=ye.ReactCurrentOwner,mn=ye.ReactCurrentBatchConfig,Pe=0,ft=null,rt=null,wt=0,rn=0,Fs=Lr(0),ut=0,Ko=null,Di=0,Il=0,Wc=0,Qo=null,Wt=null,qc=0,Us=1/0,fr=null,Sl=!1,Gc=null,zr=null,Al=!1,Br=null,Rl=0,Xo=0,Kc=null,kl=-1,Cl=0;function bt(){return Pe&6?be():kl!==-1?kl:kl=be()}function $r(t){return t.mode&1?Pe&2&&wt!==0?wt&-wt:av.transition!==null?(Cl===0&&(Cl=_i()),Cl):(t=Se,t!==0||(t=window.event,t=t===void 0?16:So(t.type)),t):1}function Dn(t,r,o,u){if(50<Xo)throw Xo=0,Kc=null,Error(n(185));kr(t,o,u),(!(Pe&2)||t!==ft)&&(t===ft&&(!(Pe&2)&&(Il|=o),ut===4&&Hr(t,wt)),qt(t,u),o===1&&Pe===0&&!(r.mode&1)&&(Us=be()+500,nl&&Fr()))}function qt(t,r){var o=t.callbackNode;tr(t,r);var u=vi(t,t===ft?wt:0);if(u===0)o!==null&&_o(o),t.callbackNode=null,t.callbackPriority=0;else if(r=u&-u,t.callbackPriority!==r){if(o!=null&&_o(o),r===1)t.tag===0?ov(mp.bind(null,t)):Zd(mp.bind(null,t)),nv(function(){!(Pe&6)&&Fr()}),o=null;else{switch(Pr(u)){case 1:o=gi;break;case 4:o=Sr;break;case 16:o=ln;break;case 536870912:o=Ca;break;default:o=ln}o=Ip(o,pp.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function pp(t,r){if(kl=-1,Cl=0,Pe&6)throw Error(n(327));var o=t.callbackNode;if(bs()&&t.callbackNode!==o)return null;var u=vi(t,t===ft?wt:0);if(u===0)return null;if(u&30||u&t.expiredLanes||r)r=Pl(t,u);else{r=u;var h=Pe;Pe|=2;var p=yp();(ft!==t||wt!==r)&&(fr=null,Us=be()+500,Oi(t,r));do try{kv();break}catch(w){gp(t,w)}while(!0);dc(),Tl.current=p,Pe=h,rt!==null?r=0:(ft=null,wt=0,r=ut)}if(r!==0){if(r===2&&(h=Jt(t),h!==0&&(u=h,r=Qc(t,h))),r===1)throw o=Ko,Oi(t,0),Hr(t,u),qt(t,be()),o;if(r===6)Hr(t,u);else{if(h=t.current.alternate,!(u&30)&&!Av(h)&&(r=Pl(t,u),r===2&&(p=Jt(t),p!==0&&(u=p,r=Qc(t,p))),r===1))throw o=Ko,Oi(t,0),Hr(t,u),qt(t,be()),o;switch(t.finishedWork=h,t.finishedLanes=u,r){case 0:case 1:throw Error(n(345));case 2:Vi(t,Wt,fr);break;case 3:if(Hr(t,u),(u&130023424)===u&&(r=qc+500-be(),10<r)){if(vi(t,0)!==0)break;if(h=t.suspendedLanes,(h&u)!==u){bt(),t.pingedLanes|=t.suspendedLanes&h;break}t.timeoutHandle=tc(Vi.bind(null,t,Wt,fr),r);break}Vi(t,Wt,fr);break;case 4:if(Hr(t,u),(u&4194240)===u)break;for(r=t.eventTimes,h=-1;0<u;){var v=31-Mt(u);p=1<<v,v=r[v],v>h&&(h=v),u&=~p}if(u=h,u=be()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Sv(u/1960))-u,10<u){t.timeoutHandle=tc(Vi.bind(null,t,Wt,fr),u);break}Vi(t,Wt,fr);break;case 5:Vi(t,Wt,fr);break;default:throw Error(n(329))}}}return qt(t,be()),t.callbackNode===o?pp.bind(null,t):null}function Qc(t,r){var o=Qo;return t.current.memoizedState.isDehydrated&&(Oi(t,r).flags|=256),t=Pl(t,r),t!==2&&(r=Wt,Wt=o,r!==null&&Xc(r)),t}function Xc(t){Wt===null?Wt=t:Wt.push.apply(Wt,t)}function Av(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],p=h.getSnapshot;h=h.value;try{if(!Rn(p(),h))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Hr(t,r){for(r&=~Wc,r&=~Il,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-Mt(r),u=1<<o;t[o]=-1,r&=~u}}function mp(t){if(Pe&6)throw Error(n(327));bs();var r=vi(t,0);if(!(r&1))return qt(t,be()),null;var o=Pl(t,r);if(t.tag!==0&&o===2){var u=Jt(t);u!==0&&(r=u,o=Qc(t,u))}if(o===1)throw o=Ko,Oi(t,0),Hr(t,r),qt(t,be()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Vi(t,Wt,fr),qt(t,be()),null}function Yc(t,r){var o=Pe;Pe|=1;try{return t(r)}finally{Pe=o,Pe===0&&(Us=be()+500,nl&&Fr())}}function xi(t){Br!==null&&Br.tag===0&&!(Pe&6)&&bs();var r=Pe;Pe|=1;var o=mn.transition,u=Se;try{if(mn.transition=null,Se=1,t)return t()}finally{Se=u,mn.transition=o,Pe=r,!(Pe&6)&&Fr()}}function Jc(){rn=Fs.current,$e(Fs)}function Oi(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,tv(o)),rt!==null)for(o=rt.return;o!==null;){var u=o;switch(ac(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&el();break;case 3:Vs(),$e(Bt),$e(Ct),Ec();break;case 5:vc(u);break;case 4:Vs();break;case 13:$e(Ke);break;case 19:$e(Ke);break;case 10:fc(u.type._context);break;case 22:case 23:Jc()}o=o.return}if(ft=t,rt=t=Wr(t.current,null),wt=rn=r,ut=0,Ko=null,Wc=Il=Di=0,Wt=Qo=null,Ci!==null){for(r=0;r<Ci.length;r++)if(o=Ci[r],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,p=o.pending;if(p!==null){var v=p.next;p.next=h,u.next=v}o.pending=u}Ci=null}return t}function gp(t,r){do{var o=rt;try{if(dc(),dl.current=gl,fl){for(var u=Qe.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}fl=!1}if(Ni=0,dt=lt=Qe=null,Bo=!1,$o=0,Hc.current=null,o===null||o.return===null){ut=1,Ko=r,rt=null;break}e:{var p=t,v=o.return,w=o,A=r;if(r=wt,w.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var F=A,$=w,W=$.tag;if(!($.mode&1)&&(W===0||W===11||W===15)){var B=$.alternate;B?($.updateQueue=B.updateQueue,$.memoizedState=B.memoizedState,$.lanes=B.lanes):($.updateQueue=null,$.memoizedState=null)}var Z=zf(v);if(Z!==null){Z.flags&=-257,Bf(Z,v,w,p,r),Z.mode&1&&jf(p,F,r),r=Z,A=F;var ne=r.updateQueue;if(ne===null){var re=new Set;re.add(A),r.updateQueue=re}else ne.add(A);break e}else{if(!(r&1)){jf(p,F,r),Zc();break e}A=Error(n(426))}}else if(We&&w.mode&1){var tt=zf(v);if(tt!==null){!(tt.flags&65536)&&(tt.flags|=256),Bf(tt,v,w,p,r),cc(Ls(A,w));break e}}p=A=Ls(A,w),ut!==4&&(ut=2),Qo===null?Qo=[p]:Qo.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var L=Uf(p,A,r);hf(p,L);break e;case 1:w=A;var C=p.type,M=p.stateNode;if(!(p.flags&128)&&(typeof C.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(zr===null||!zr.has(M)))){p.flags|=65536,r&=-r,p.lanes|=r;var G=bf(p,w,r);hf(p,G);break e}}p=p.return}while(p!==null)}_p(o)}catch(se){r=se,rt===o&&o!==null&&(rt=o=o.return);continue}break}while(!0)}function yp(){var t=Tl.current;return Tl.current=gl,t===null?gl:t}function Zc(){(ut===0||ut===3||ut===2)&&(ut=4),ft===null||!(Di&268435455)&&!(Il&268435455)||Hr(ft,wt)}function Pl(t,r){var o=Pe;Pe|=2;var u=yp();(ft!==t||wt!==r)&&(fr=null,Oi(t,r));do try{Rv();break}catch(h){gp(t,h)}while(!0);if(dc(),Pe=o,Tl.current=u,rt!==null)throw Error(n(261));return ft=null,wt=0,ut}function Rv(){for(;rt!==null;)vp(rt)}function kv(){for(;rt!==null&&!Ra();)vp(rt)}function vp(t){var r=Tp(t.alternate,t,rn);t.memoizedProps=t.pendingProps,r===null?_p(t):rt=r,Hc.current=null}function _p(t){var r=t;do{var o=r.alternate;if(t=r.return,r.flags&32768){if(o=Ev(o,r),o!==null){o.flags&=32767,rt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ut=6,rt=null;return}}else if(o=_v(o,r,rn),o!==null){rt=o;return}if(r=r.sibling,r!==null){rt=r;return}rt=r=t}while(r!==null);ut===0&&(ut=5)}function Vi(t,r,o){var u=Se,h=mn.transition;try{mn.transition=null,Se=1,Cv(t,r,o,u)}finally{mn.transition=h,Se=u}return null}function Cv(t,r,o,u){do bs();while(Br!==null);if(Pe&6)throw Error(n(327));o=t.finishedWork;var h=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(Fe(t,p),t===ft&&(rt=ft=null,wt=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Al||(Al=!0,Ip(ln,function(){return bs(),null})),p=(o.flags&15990)!==0,o.subtreeFlags&15990||p){p=mn.transition,mn.transition=null;var v=Se;Se=1;var w=Pe;Pe|=4,Hc.current=null,Tv(t,o),up(o,t),Ky(Zu),Dr=!!Ju,Zu=Ju=null,t.current=o,Iv(o),Mu(),Pe=w,Se=v,mn.transition=p}else t.current=o;if(Al&&(Al=!1,Br=t,Rl=h),p=t.pendingLanes,p===0&&(zr=null),Pa(o.stateNode),qt(t,be()),r!==null)for(u=t.onRecoverableError,o=0;o<r.length;o++)h=r[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(Sl)throw Sl=!1,t=Gc,Gc=null,t;return Rl&1&&t.tag!==0&&bs(),p=t.pendingLanes,p&1?t===Kc?Xo++:(Xo=0,Kc=t):Xo=0,Fr(),null}function bs(){if(Br!==null){var t=Pr(Rl),r=mn.transition,o=Se;try{if(mn.transition=null,Se=16>t?16:t,Br===null)var u=!1;else{if(t=Br,Br=null,Rl=0,Pe&6)throw Error(n(331));var h=Pe;for(Pe|=4,te=t.current;te!==null;){var p=te,v=p.child;if(te.flags&16){var w=p.deletions;if(w!==null){for(var A=0;A<w.length;A++){var F=w[A];for(te=F;te!==null;){var $=te;switch($.tag){case 0:case 11:case 15:Go(8,$,p)}var W=$.child;if(W!==null)W.return=$,te=W;else for(;te!==null;){$=te;var B=$.sibling,Z=$.return;if(ip($),$===F){te=null;break}if(B!==null){B.return=Z,te=B;break}te=Z}}}var ne=p.alternate;if(ne!==null){var re=ne.child;if(re!==null){ne.child=null;do{var tt=re.sibling;re.sibling=null,re=tt}while(re!==null)}}te=p}}if(p.subtreeFlags&2064&&v!==null)v.return=p,te=v;else e:for(;te!==null;){if(p=te,p.flags&2048)switch(p.tag){case 0:case 11:case 15:Go(9,p,p.return)}var L=p.sibling;if(L!==null){L.return=p.return,te=L;break e}te=p.return}}var C=t.current;for(te=C;te!==null;){v=te;var M=v.child;if(v.subtreeFlags&2064&&M!==null)M.return=v,te=M;else e:for(v=C;te!==null;){if(w=te,w.flags&2048)try{switch(w.tag){case 0:case 11:case 15:wl(9,w)}}catch(se){Xe(w,w.return,se)}if(w===v){te=null;break e}var G=w.sibling;if(G!==null){G.return=w.return,te=G;break e}te=w.return}}if(Pe=h,Fr(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(yi,t)}catch{}u=!0}return u}finally{Se=o,mn.transition=r}}return!1}function Ep(t,r,o){r=Ls(o,r),r=Uf(t,r,1),t=br(t,r,1),r=bt(),t!==null&&(kr(t,1,r),qt(t,r))}function Xe(t,r,o){if(t.tag===3)Ep(t,t,o);else for(;r!==null;){if(r.tag===3){Ep(r,t,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(zr===null||!zr.has(u))){t=Ls(o,t),t=bf(r,t,1),r=br(r,t,1),t=bt(),r!==null&&(kr(r,1,t),qt(r,t));break}}r=r.return}}function Pv(t,r,o){var u=t.pingCache;u!==null&&u.delete(r),r=bt(),t.pingedLanes|=t.suspendedLanes&o,ft===t&&(wt&o)===o&&(ut===4||ut===3&&(wt&130023424)===wt&&500>be()-qc?Oi(t,0):Wc|=o),qt(t,r)}function wp(t,r){r===0&&(t.mode&1?(r=ls,ls<<=1,!(ls&130023424)&&(ls=4194304)):r=1);var o=bt();t=cr(t,r),t!==null&&(kr(t,r,o),qt(t,o))}function Nv(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),wp(t,o)}function Dv(t,r){var o=0;switch(t.tag){case 13:var u=t.stateNode,h=t.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(r),wp(t,o)}var Tp;Tp=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||Bt.current)Ht=!0;else{if(!(t.lanes&o)&&!(r.flags&128))return Ht=!1,vv(t,r,o);Ht=!!(t.flags&131072)}else Ht=!1,We&&r.flags&1048576&&ef(r,il,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;_l(t,r),t=r.pendingProps;var h=ks(r,Ct.current);Os(r,o),h=Ic(null,r,u,t,h,o);var p=Sc();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,$t(u)?(p=!0,tl(r)):p=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,gc(r),h.updater=yl,r.stateNode=h,h._reactInternals=r,Nc(r,u,t,o),r=Vc(null,r,u,!0,p,o)):(r.tag=0,We&&p&&oc(r),Ut(null,r,h,o),r=r.child),r;case 16:u=r.elementType;e:{switch(_l(t,r),t=r.pendingProps,h=u._init,u=h(u._payload),r.type=u,h=r.tag=Ov(u),t=Cn(u,t),h){case 0:r=Oc(null,r,u,t,o);break e;case 1:r=Kf(null,r,u,t,o);break e;case 11:r=$f(null,r,u,t,o);break e;case 14:r=Hf(null,r,u,Cn(u.type,t),o);break e}throw Error(n(306,u,""))}return r;case 0:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Cn(u,h),Oc(t,r,u,h,o);case 1:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Cn(u,h),Kf(t,r,u,h,o);case 3:e:{if(Qf(r),t===null)throw Error(n(387));u=r.pendingProps,p=r.memoizedState,h=p.element,cf(t,r),cl(r,u,null,o);var v=r.memoizedState;if(u=v.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){h=Ls(Error(n(423)),r),r=Xf(t,r,u,o,h);break e}else if(u!==h){h=Ls(Error(n(424)),r),r=Xf(t,r,u,o,h);break e}else for(nn=Vr(r.stateNode.containerInfo.firstChild),tn=r,We=!0,kn=null,o=lf(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ns(),u===h){r=dr(t,r,o);break e}Ut(t,r,u,o)}r=r.child}return r;case 5:return ff(r),t===null&&uc(r),u=r.type,h=r.pendingProps,p=t!==null?t.memoizedProps:null,v=h.children,ec(u,h)?v=null:p!==null&&ec(u,p)&&(r.flags|=32),Gf(t,r),Ut(t,r,v,o),r.child;case 6:return t===null&&uc(r),null;case 13:return Yf(t,r,o);case 4:return yc(r,r.stateNode.containerInfo),u=r.pendingProps,t===null?r.child=Ds(r,null,u,o):Ut(t,r,u,o),r.child;case 11:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Cn(u,h),$f(t,r,u,h,o);case 7:return Ut(t,r,r.pendingProps,o),r.child;case 8:return Ut(t,r,r.pendingProps.children,o),r.child;case 12:return Ut(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(u=r.type._context,h=r.pendingProps,p=r.memoizedProps,v=h.value,je(al,u._currentValue),u._currentValue=v,p!==null)if(Rn(p.value,v)){if(p.children===h.children&&!Bt.current){r=dr(t,r,o);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var w=p.dependencies;if(w!==null){v=p.child;for(var A=w.firstContext;A!==null;){if(A.context===u){if(p.tag===1){A=hr(-1,o&-o),A.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var $=F.pending;$===null?A.next=A:(A.next=$.next,$.next=A),F.pending=A}}p.lanes|=o,A=p.alternate,A!==null&&(A.lanes|=o),pc(p.return,o,r),w.lanes|=o;break}A=A.next}}else if(p.tag===10)v=p.type===r.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(n(341));v.lanes|=o,w=v.alternate,w!==null&&(w.lanes|=o),pc(v,o,r),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===r){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}Ut(t,r,h.children,o),r=r.child}return r;case 9:return h=r.type,u=r.pendingProps.children,Os(r,o),h=fn(h),u=u(h),r.flags|=1,Ut(t,r,u,o),r.child;case 14:return u=r.type,h=Cn(u,r.pendingProps),h=Cn(u.type,h),Hf(t,r,u,h,o);case 15:return Wf(t,r,r.type,r.pendingProps,o);case 17:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Cn(u,h),_l(t,r),r.tag=1,$t(u)?(t=!0,tl(r)):t=!1,Os(r,o),Mf(r,u,h),Nc(r,u,h,o),Vc(null,r,u,!0,t,o);case 19:return Zf(t,r,o);case 22:return qf(t,r,o)}throw Error(n(156,r.tag))};function Ip(t,r){return os(t,r)}function xv(t,r,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(t,r,o,u){return new xv(t,r,o,u)}function eh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ov(t){if(typeof t=="function")return eh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===O)return 11;if(t===Rt)return 14}return 2}function Wr(t,r){var o=t.alternate;return o===null?(o=gn(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Nl(t,r,o,u,h,p){var v=2;if(u=t,typeof t=="function")eh(t)&&(v=1);else if(typeof t=="string")v=5;else e:switch(t){case P:return Li(o.children,h,p,r);case T:v=8,h|=8;break;case S:return t=gn(12,o,r,h|2),t.elementType=S,t.lanes=p,t;case I:return t=gn(13,o,r,h),t.elementType=I,t.lanes=p,t;case Ze:return t=gn(19,o,r,h),t.elementType=Ze,t.lanes=p,t;case Me:return Dl(o,h,p,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k:v=10;break e;case N:v=9;break e;case O:v=11;break e;case Rt:v=14;break e;case kt:v=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=gn(v,o,r,h),r.elementType=t,r.type=u,r.lanes=p,r}function Li(t,r,o,u){return t=gn(7,t,u,r),t.lanes=o,t}function Dl(t,r,o,u){return t=gn(22,t,u,r),t.elementType=Me,t.lanes=o,t.stateNode={isHidden:!1},t}function th(t,r,o){return t=gn(6,t,null,r),t.lanes=o,t}function nh(t,r,o){return r=gn(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function Vv(t,r,o,u,h){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rr(0),this.expirationTimes=Rr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rr(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function rh(t,r,o,u,h,p,v,w,A){return t=new Vv(t,r,o,w,A),r===1?(r=1,p===!0&&(r|=8)):r=0,p=gn(3,null,null,r),t.current=p,p.stateNode=t,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},gc(p),t}function Lv(t,r,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ae,key:u==null?null:""+u,children:t,containerInfo:r,implementation:o}}function Sp(t){if(!t)return Mr;t=t._reactInternals;e:{if(_n(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if($t(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if($t(o))return Yd(t,o,r)}return r}function Ap(t,r,o,u,h,p,v,w,A){return t=rh(o,u,!0,t,h,p,v,w,A),t.context=Sp(null),o=t.current,u=bt(),h=$r(o),p=hr(u,h),p.callback=r??null,br(o,p,h),t.current.lanes=h,kr(t,h,u),qt(t,u),t}function xl(t,r,o,u){var h=r.current,p=bt(),v=$r(h);return o=Sp(o),r.context===null?r.context=o:r.pendingContext=o,r=hr(p,v),r.payload={element:t},u=u===void 0?null:u,u!==null&&(r.callback=u),t=br(h,r,v),t!==null&&(Dn(t,h,v,p),ul(t,h,v)),v}function Ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rp(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function ih(t,r){Rp(t,r),(t=t.alternate)&&Rp(t,r)}var kp=typeof reportError=="function"?reportError:function(t){console.error(t)};function sh(t){this._internalRoot=t}Vl.prototype.render=sh.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));xl(t,r,null,null)},Vl.prototype.unmount=sh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;xi(function(){xl(null,t,null,null)}),r[or]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var r=Va();t={blockedOn:null,target:t,priority:r};for(var o=0;o<Mn.length&&r!==0&&r<Mn[o].priority;o++);Mn.splice(o,0,t),o===0&&Fa(t)}};function oh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cp(){}function Mv(t,r,o,u,h){if(h){if(typeof u=="function"){var p=u;u=function(){var F=Ol(v);p.call(F)}}var v=Ap(r,u,t,0,null,!1,!1,"",Cp);return t._reactRootContainer=v,t[or]=v.current,Vo(t.nodeType===8?t.parentNode:t),xi(),v}for(;h=t.lastChild;)t.removeChild(h);if(typeof u=="function"){var w=u;u=function(){var F=Ol(A);w.call(F)}}var A=rh(t,0,!1,null,null,!1,!1,"",Cp);return t._reactRootContainer=A,t[or]=A.current,Vo(t.nodeType===8?t.parentNode:t),xi(function(){xl(r,A,o,u)}),A}function Ml(t,r,o,u,h){var p=o._reactRootContainer;if(p){var v=p;if(typeof h=="function"){var w=h;h=function(){var A=Ol(v);w.call(A)}}xl(r,v,t,h)}else v=Mv(o,r,t,h,u);return Ol(v)}xa=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=Ar(r.pendingLanes);o!==0&&(Cr(r,o|1),qt(r,be()),!(Pe&6)&&(Us=be()+500,Fr()))}break;case 13:xi(function(){var u=cr(t,1);if(u!==null){var h=bt();Dn(u,t,1,h)}}),ih(t,1)}},us=function(t){if(t.tag===13){var r=cr(t,134217728);if(r!==null){var o=bt();Dn(r,t,134217728,o)}ih(t,134217728)}},Oa=function(t){if(t.tag===13){var r=$r(t),o=cr(t,r);if(o!==null){var u=bt();Dn(o,t,r,u)}ih(t,r)}},Va=function(){return Se},La=function(t,r){var o=Se;try{return Se=t,r()}finally{Se=o}},es=function(t,r,o){switch(r){case"input":if(io(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==t&&u.form===t.form){var h=Za(u);if(!h)throw Error(n(90));Ki(u),io(u,h)}}}break;case"textarea":Ji(t,o);break;case"select":r=o.value,r!=null&&Jn(t,!!o.multiple,r,!1)}},di=Yc,mo=xi;var Fv={usingClientEntryPoint:!1,Events:[Fo,As,Za,Vn,po,Yc]},Yo={findFiberByHostInstance:Si,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uv={bundleType:Yo.bundleType,version:Yo.version,rendererPackageName:Yo.rendererPackageName,rendererConfig:Yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vo(t),t===null?null:t.stateNode},findFiberByHostInstance:Yo.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{yi=Fl.inject(Uv),Yt=Fl}catch{}}return Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fv,Gt.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oh(r))throw Error(n(200));return Lv(t,r,null,o)},Gt.createRoot=function(t,r){if(!oh(t))throw Error(n(299));var o=!1,u="",h=kp;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=rh(t,1,!1,null,null,o,!1,u,h),t[or]=r.current,Vo(t.nodeType===8?t.parentNode:t),new sh(r)},Gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=vo(r),t=t===null?null:t.stateNode,t},Gt.flushSync=function(t){return xi(t)},Gt.hydrate=function(t,r,o){if(!Ll(r))throw Error(n(200));return Ml(null,t,r,!0,o)},Gt.hydrateRoot=function(t,r,o){if(!oh(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,h=!1,p="",v=kp;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),r=Ap(r,null,t,1,o??null,h,!1,p,v),t[or]=r.current,Vo(t),u)for(t=0;t<u.length;t++)o=u[t],h=o._getVersion,h=h(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,h]:r.mutableSourceEagerHydrationData.push(o,h);return new Vl(r)},Gt.render=function(t,r,o){if(!Ll(r))throw Error(n(200));return Ml(null,t,r,!1,o)},Gt.unmountComponentAtNode=function(t){if(!Ll(t))throw Error(n(40));return t._reactRootContainer?(xi(function(){Ml(null,null,t,!1,function(){t._reactRootContainer=null,t[or]=null})}),!0):!1},Gt.unstable_batchedUpdates=Yc,Gt.unstable_renderSubtreeIntoContainer=function(t,r,o,u){if(!Ll(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ml(t,r,o,!1,u)},Gt.version="18.3.1-next-f1338f8080-20240426",Gt}var Mp;function qv(){if(Mp)return uh.exports;Mp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),uh.exports=Wv(),uh.exports}var Fp;function Gv(){if(Fp)return Ul;Fp=1;var i=qv();return Ul.createRoot=i.createRoot,Ul.hydrateRoot=i.hydrateRoot,Ul}var Kv=Gv();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wm=(...i)=>i.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=Ge.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:a="",children:c,iconNode:d,...g},y)=>Ge.createElement("svg",{ref:y,...Xv,width:e,height:e,stroke:i,strokeWidth:s?Number(n)*24/Number(e):n,className:Wm("lucide",a),...g},[...d.map(([E,R])=>Ge.createElement(E,R)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=(i,e)=>{const n=Ge.forwardRef(({className:s,...a},c)=>Ge.createElement(Yv,{ref:c,iconNode:e,className:Wm(`lucide-${Qv(i)}`,s),...a}));return n.displayName=`${i}`,n};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=zh("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=zh("Construction",[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=zh("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);var Up={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},t_=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const a=i[n++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const c=i[n++];e[s++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=i[n++],d=i[n++],g=i[n++],y=((a&7)<<18|(c&63)<<12|(d&63)<<6|g&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const c=i[n++],d=i[n++];e[s++]=String.fromCharCode((a&15)<<12|(c&63)<<6|d&63)}}return e.join("")},Gm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const c=i[a],d=a+1<i.length,g=d?i[a+1]:0,y=a+2<i.length,E=y?i[a+2]:0,R=c>>2,x=(c&3)<<4|g>>4;let b=(g&15)<<2|E>>6,K=E&63;y||(K=64,d||(b=64)),s.push(n[R],n[x],n[b],n[K])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(qm(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):t_(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const c=n[i.charAt(a++)],g=a<i.length?n[i.charAt(a)]:0;++a;const E=a<i.length?n[i.charAt(a)]:64;++a;const x=a<i.length?n[i.charAt(a)]:64;if(++a,c==null||g==null||E==null||x==null)throw new n_;const b=c<<2|g>>4;if(s.push(b),E!==64){const K=g<<4&240|E>>2;if(s.push(K),x!==64){const Q=E<<6&192|x;s.push(Q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class n_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const r_=function(i){const e=qm(i);return Gm.encodeByteArray(e,!0)},Zl=function(i){return r_(i).replace(/\./g,"")},Km=function(i){try{return Gm.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=()=>i_().__FIREBASE_DEFAULTS__,o_=()=>{if(typeof process>"u"||typeof Up>"u")return;const i=Up.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},a_=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Km(i[1]);return e&&JSON.parse(e)},_u=()=>{try{return s_()||o_()||a_()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Qm=i=>{var e,n;return(n=(e=_u())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},l_=i=>{const e=Qm(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Xm=()=>{var i;return(i=_u())===null||i===void 0?void 0:i.config},Ym=i=>{var e;return(e=_u())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Zl(JSON.stringify(n)),Zl(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function h_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Lt())}function d_(){var i;const e=(i=_u())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function f_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function p_(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function m_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function g_(){const i=Lt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function y_(){return!d_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function v_(){try{return typeof indexedDB=="object"}catch{return!1}}function __(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var c;e(((c=a.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="FirebaseError";class wr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=E_,Object.setPrototypeOf(this,wr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pa.prototype.create)}}class pa{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},a=`${this.service}/${e}`,c=this.errors[e],d=c?w_(c,s):"Error",g=`${this.serviceName}: ${d} (${a}).`;return new wr(a,g,s)}}function w_(i,e){return i.replace(T_,(n,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const T_=/\{\$([^}]+)}/g;function I_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function eu(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const a of n){if(!s.includes(a))return!1;const c=i[a],d=e[a];if(bp(c)&&bp(d)){if(!eu(c,d))return!1}else if(c!==d)return!1}for(const a of s)if(!n.includes(a))return!1;return!0}function bp(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function S_(i,e){const n=new A_(i,e);return n.subscribe.bind(n)}class A_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let a;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");R_(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:s},a.next===void 0&&(a.next=dh),a.error===void 0&&(a.error=dh),a.complete===void 0&&(a.complete=dh);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function R_(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function dh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(i){return i&&i._delegate?i._delegate:i}class ji{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new u_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(a)return null;throw c}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(P_(e))try{this.getOrInitializeService({instanceIdentifier:Mi})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:a});s.resolve(c)}catch{}}}}clearInstance(e=Mi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mi){return this.instances.has(e)}getOptions(e=Mi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,d]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);s===g&&d.resolve(a)}return a}onInit(e,n){var s;const a=this.normalizeInstanceIdentifier(n),c=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;c.add(e),this.onInitCallbacks.set(a,c);const d=this.instances.get(a);return d&&e(d,a),()=>{c.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const a of s)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:C_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Mi){return this.component?this.component.multipleInstances?e:Mi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function C_(i){return i===Mi?void 0:i}function P_(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new k_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Te||(Te={}));const D_={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},x_=Te.INFO,O_={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},V_=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=O_[e];if(a)console[a](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bh{constructor(e){this.name=e,this._logLevel=x_,this._logHandler=V_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?D_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const L_=(i,e)=>e.some(n=>i instanceof n);let jp,zp;function M_(){return jp||(jp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function F_(){return zp||(zp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jm=new WeakMap,Th=new WeakMap,Zm=new WeakMap,fh=new WeakMap,$h=new WeakMap;function U_(i){const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("success",c),i.removeEventListener("error",d)},c=()=>{n(Jr(i.result)),a()},d=()=>{s(i.error),a()};i.addEventListener("success",c),i.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&Jm.set(n,i)}).catch(()=>{}),$h.set(e,i),e}function b_(i){if(Th.has(i))return;const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",d),i.removeEventListener("abort",d)},c=()=>{n(),a()},d=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",c),i.addEventListener("error",d),i.addEventListener("abort",d)});Th.set(i,e)}let Ih={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return Th.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Zm.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jr(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function j_(i){Ih=i(Ih)}function z_(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(ph(this),e,...n);return Zm.set(s,e.sort?e.sort():[e]),Jr(s)}:F_().includes(i)?function(...e){return i.apply(ph(this),e),Jr(Jm.get(this))}:function(...e){return Jr(i.apply(ph(this),e))}}function B_(i){return typeof i=="function"?z_(i):(i instanceof IDBTransaction&&b_(i),L_(i,M_())?new Proxy(i,Ih):i)}function Jr(i){if(i instanceof IDBRequest)return U_(i);if(fh.has(i))return fh.get(i);const e=B_(i);return e!==i&&(fh.set(i,e),$h.set(e,i)),e}const ph=i=>$h.get(i);function $_(i,e,{blocked:n,upgrade:s,blocking:a,terminated:c}={}){const d=indexedDB.open(i,e),g=Jr(d);return s&&d.addEventListener("upgradeneeded",y=>{s(Jr(d.result),y.oldVersion,y.newVersion,Jr(d.transaction),y)}),n&&d.addEventListener("blocked",y=>n(y.oldVersion,y.newVersion,y)),g.then(y=>{c&&y.addEventListener("close",()=>c()),a&&y.addEventListener("versionchange",E=>a(E.oldVersion,E.newVersion,E))}).catch(()=>{}),g}const H_=["get","getKey","getAll","getAllKeys","count"],W_=["put","add","delete","clear"],mh=new Map;function Bp(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(mh.get(e))return mh.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,a=W_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(a||H_.includes(n)))return;const c=async function(d,...g){const y=this.transaction(d,a?"readwrite":"readonly");let E=y.store;return s&&(E=E.index(g.shift())),(await Promise.all([E[n](...g),a&&y.done]))[0]};return mh.set(e,c),c}j_(i=>({...i,get:(e,n,s)=>Bp(e,n)||i.get(e,n,s),has:(e,n)=>!!Bp(e,n)||i.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(G_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function G_(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sh="@firebase/app",$p="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new Bh("@firebase/app"),K_="@firebase/app-compat",Q_="@firebase/analytics-compat",X_="@firebase/analytics",Y_="@firebase/app-check-compat",J_="@firebase/app-check",Z_="@firebase/auth",e0="@firebase/auth-compat",t0="@firebase/database",n0="@firebase/data-connect",r0="@firebase/database-compat",i0="@firebase/functions",s0="@firebase/functions-compat",o0="@firebase/installations",a0="@firebase/installations-compat",l0="@firebase/messaging",u0="@firebase/messaging-compat",c0="@firebase/performance",h0="@firebase/performance-compat",d0="@firebase/remote-config",f0="@firebase/remote-config-compat",p0="@firebase/storage",m0="@firebase/storage-compat",g0="@firebase/firestore",y0="@firebase/vertexai",v0="@firebase/firestore-compat",_0="firebase",E0="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="[DEFAULT]",w0={[Sh]:"fire-core",[K_]:"fire-core-compat",[X_]:"fire-analytics",[Q_]:"fire-analytics-compat",[J_]:"fire-app-check",[Y_]:"fire-app-check-compat",[Z_]:"fire-auth",[e0]:"fire-auth-compat",[t0]:"fire-rtdb",[n0]:"fire-data-connect",[r0]:"fire-rtdb-compat",[i0]:"fire-fn",[s0]:"fire-fn-compat",[o0]:"fire-iid",[a0]:"fire-iid-compat",[l0]:"fire-fcm",[u0]:"fire-fcm-compat",[c0]:"fire-perf",[h0]:"fire-perf-compat",[d0]:"fire-rc",[f0]:"fire-rc-compat",[p0]:"fire-gcs",[m0]:"fire-gcs-compat",[g0]:"fire-fst",[v0]:"fire-fst-compat",[y0]:"fire-vertex","fire-js":"fire-js",[_0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=new Map,T0=new Map,Rh=new Map;function Hp(i,e){try{i.container.addComponent(e)}catch(n){vr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function Ks(i){const e=i.name;if(Rh.has(e))return vr.debug(`There were multiple attempts to register component ${e}.`),!1;Rh.set(e,i);for(const n of tu.values())Hp(n,i);for(const n of T0.values())Hp(n,i);return!0}function Hh(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function pr(i){return i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zr=new pa("app","Firebase",I0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ji("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=E0;function eg(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ah,automaticDataCollectionEnabled:!1},e),a=s.name;if(typeof a!="string"||!a)throw Zr.create("bad-app-name",{appName:String(a)});if(n||(n=Xm()),!n)throw Zr.create("no-options");const c=tu.get(a);if(c){if(eu(n,c.options)&&eu(s,c.config))return c;throw Zr.create("duplicate-app",{appName:a})}const d=new N_(a);for(const y of Rh.values())d.addComponent(y);const g=new S0(n,s,d);return tu.set(a,g),g}function tg(i=Ah){const e=tu.get(i);if(!e&&i===Ah&&Xm())return eg();if(!e)throw Zr.create("no-app",{appName:i});return e}function ei(i,e,n){var s;let a=(s=w0[i])!==null&&s!==void 0?s:i;n&&(a+=`-${n}`);const c=a.match(/\s|\//),d=e.match(/\s|\//);if(c||d){const g=[`Unable to register library "${a}" with version "${e}":`];c&&g.push(`library name "${a}" contains illegal characters (whitespace or "/")`),c&&d&&g.push("and"),d&&g.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vr.warn(g.join(" "));return}Ks(new ji(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0="firebase-heartbeat-database",R0=1,oa="firebase-heartbeat-store";let gh=null;function ng(){return gh||(gh=$_(A0,R0,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(oa)}catch(n){console.warn(n)}}}}).catch(i=>{throw Zr.create("idb-open",{originalErrorMessage:i.message})})),gh}async function k0(i){try{const n=(await ng()).transaction(oa),s=await n.objectStore(oa).get(rg(i));return await n.done,s}catch(e){if(e instanceof wr)vr.warn(e.message);else{const n=Zr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vr.warn(n.message)}}}async function Wp(i,e){try{const s=(await ng()).transaction(oa,"readwrite");await s.objectStore(oa).put(e,rg(i)),await s.done}catch(n){if(n instanceof wr)vr.warn(n.message);else{const s=Zr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vr.warn(s.message)}}}function rg(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=1024,P0=30*24*60*60*1e3;class N0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new x0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=qp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(d=>d.date===c)?void 0:(this._heartbeatsCache.heartbeats.push({date:c,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(d=>{const g=new Date(d.date).valueOf();return Date.now()-g<=P0}),this._storage.overwrite(this._heartbeatsCache))}catch(s){vr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qp(),{heartbeatsToSend:s,unsentEntries:a}=D0(this._heartbeatsCache.heartbeats),c=Zl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return vr.warn(n),""}}}function qp(){return new Date().toISOString().substring(0,10)}function D0(i,e=C0){const n=[];let s=i.slice();for(const a of i){const c=n.find(d=>d.agent===a.agent);if(c){if(c.dates.push(a.date),Gp(n)>e){c.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),Gp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class x0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return v_()?__().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await k0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return Wp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return Wp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function Gp(i){return Zl(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(i){Ks(new ji("platform-logger",e=>new q_(e),"PRIVATE")),Ks(new ji("heartbeat",e=>new N0(e),"PRIVATE")),ei(Sh,$p,i),ei(Sh,$p,"esm2017"),ei("fire-js","")}O0("");var Kp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ig;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,T){function S(){}S.prototype=T.prototype,P.D=T.prototype,P.prototype=new S,P.prototype.constructor=P,P.C=function(k,N,O){for(var I=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)I[Ze-2]=arguments[Ze];return T.prototype[N].apply(k,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(P,T,S){S||(S=0);var k=Array(16);if(typeof T=="string")for(var N=0;16>N;++N)k[N]=T.charCodeAt(S++)|T.charCodeAt(S++)<<8|T.charCodeAt(S++)<<16|T.charCodeAt(S++)<<24;else for(N=0;16>N;++N)k[N]=T[S++]|T[S++]<<8|T[S++]<<16|T[S++]<<24;T=P.g[0],S=P.g[1],N=P.g[2];var O=P.g[3],I=T+(O^S&(N^O))+k[0]+3614090360&4294967295;T=S+(I<<7&4294967295|I>>>25),I=O+(N^T&(S^N))+k[1]+3905402710&4294967295,O=T+(I<<12&4294967295|I>>>20),I=N+(S^O&(T^S))+k[2]+606105819&4294967295,N=O+(I<<17&4294967295|I>>>15),I=S+(T^N&(O^T))+k[3]+3250441966&4294967295,S=N+(I<<22&4294967295|I>>>10),I=T+(O^S&(N^O))+k[4]+4118548399&4294967295,T=S+(I<<7&4294967295|I>>>25),I=O+(N^T&(S^N))+k[5]+1200080426&4294967295,O=T+(I<<12&4294967295|I>>>20),I=N+(S^O&(T^S))+k[6]+2821735955&4294967295,N=O+(I<<17&4294967295|I>>>15),I=S+(T^N&(O^T))+k[7]+4249261313&4294967295,S=N+(I<<22&4294967295|I>>>10),I=T+(O^S&(N^O))+k[8]+1770035416&4294967295,T=S+(I<<7&4294967295|I>>>25),I=O+(N^T&(S^N))+k[9]+2336552879&4294967295,O=T+(I<<12&4294967295|I>>>20),I=N+(S^O&(T^S))+k[10]+4294925233&4294967295,N=O+(I<<17&4294967295|I>>>15),I=S+(T^N&(O^T))+k[11]+2304563134&4294967295,S=N+(I<<22&4294967295|I>>>10),I=T+(O^S&(N^O))+k[12]+1804603682&4294967295,T=S+(I<<7&4294967295|I>>>25),I=O+(N^T&(S^N))+k[13]+4254626195&4294967295,O=T+(I<<12&4294967295|I>>>20),I=N+(S^O&(T^S))+k[14]+2792965006&4294967295,N=O+(I<<17&4294967295|I>>>15),I=S+(T^N&(O^T))+k[15]+1236535329&4294967295,S=N+(I<<22&4294967295|I>>>10),I=T+(N^O&(S^N))+k[1]+4129170786&4294967295,T=S+(I<<5&4294967295|I>>>27),I=O+(S^N&(T^S))+k[6]+3225465664&4294967295,O=T+(I<<9&4294967295|I>>>23),I=N+(T^S&(O^T))+k[11]+643717713&4294967295,N=O+(I<<14&4294967295|I>>>18),I=S+(O^T&(N^O))+k[0]+3921069994&4294967295,S=N+(I<<20&4294967295|I>>>12),I=T+(N^O&(S^N))+k[5]+3593408605&4294967295,T=S+(I<<5&4294967295|I>>>27),I=O+(S^N&(T^S))+k[10]+38016083&4294967295,O=T+(I<<9&4294967295|I>>>23),I=N+(T^S&(O^T))+k[15]+3634488961&4294967295,N=O+(I<<14&4294967295|I>>>18),I=S+(O^T&(N^O))+k[4]+3889429448&4294967295,S=N+(I<<20&4294967295|I>>>12),I=T+(N^O&(S^N))+k[9]+568446438&4294967295,T=S+(I<<5&4294967295|I>>>27),I=O+(S^N&(T^S))+k[14]+3275163606&4294967295,O=T+(I<<9&4294967295|I>>>23),I=N+(T^S&(O^T))+k[3]+4107603335&4294967295,N=O+(I<<14&4294967295|I>>>18),I=S+(O^T&(N^O))+k[8]+1163531501&4294967295,S=N+(I<<20&4294967295|I>>>12),I=T+(N^O&(S^N))+k[13]+2850285829&4294967295,T=S+(I<<5&4294967295|I>>>27),I=O+(S^N&(T^S))+k[2]+4243563512&4294967295,O=T+(I<<9&4294967295|I>>>23),I=N+(T^S&(O^T))+k[7]+1735328473&4294967295,N=O+(I<<14&4294967295|I>>>18),I=S+(O^T&(N^O))+k[12]+2368359562&4294967295,S=N+(I<<20&4294967295|I>>>12),I=T+(S^N^O)+k[5]+4294588738&4294967295,T=S+(I<<4&4294967295|I>>>28),I=O+(T^S^N)+k[8]+2272392833&4294967295,O=T+(I<<11&4294967295|I>>>21),I=N+(O^T^S)+k[11]+1839030562&4294967295,N=O+(I<<16&4294967295|I>>>16),I=S+(N^O^T)+k[14]+4259657740&4294967295,S=N+(I<<23&4294967295|I>>>9),I=T+(S^N^O)+k[1]+2763975236&4294967295,T=S+(I<<4&4294967295|I>>>28),I=O+(T^S^N)+k[4]+1272893353&4294967295,O=T+(I<<11&4294967295|I>>>21),I=N+(O^T^S)+k[7]+4139469664&4294967295,N=O+(I<<16&4294967295|I>>>16),I=S+(N^O^T)+k[10]+3200236656&4294967295,S=N+(I<<23&4294967295|I>>>9),I=T+(S^N^O)+k[13]+681279174&4294967295,T=S+(I<<4&4294967295|I>>>28),I=O+(T^S^N)+k[0]+3936430074&4294967295,O=T+(I<<11&4294967295|I>>>21),I=N+(O^T^S)+k[3]+3572445317&4294967295,N=O+(I<<16&4294967295|I>>>16),I=S+(N^O^T)+k[6]+76029189&4294967295,S=N+(I<<23&4294967295|I>>>9),I=T+(S^N^O)+k[9]+3654602809&4294967295,T=S+(I<<4&4294967295|I>>>28),I=O+(T^S^N)+k[12]+3873151461&4294967295,O=T+(I<<11&4294967295|I>>>21),I=N+(O^T^S)+k[15]+530742520&4294967295,N=O+(I<<16&4294967295|I>>>16),I=S+(N^O^T)+k[2]+3299628645&4294967295,S=N+(I<<23&4294967295|I>>>9),I=T+(N^(S|~O))+k[0]+4096336452&4294967295,T=S+(I<<6&4294967295|I>>>26),I=O+(S^(T|~N))+k[7]+1126891415&4294967295,O=T+(I<<10&4294967295|I>>>22),I=N+(T^(O|~S))+k[14]+2878612391&4294967295,N=O+(I<<15&4294967295|I>>>17),I=S+(O^(N|~T))+k[5]+4237533241&4294967295,S=N+(I<<21&4294967295|I>>>11),I=T+(N^(S|~O))+k[12]+1700485571&4294967295,T=S+(I<<6&4294967295|I>>>26),I=O+(S^(T|~N))+k[3]+2399980690&4294967295,O=T+(I<<10&4294967295|I>>>22),I=N+(T^(O|~S))+k[10]+4293915773&4294967295,N=O+(I<<15&4294967295|I>>>17),I=S+(O^(N|~T))+k[1]+2240044497&4294967295,S=N+(I<<21&4294967295|I>>>11),I=T+(N^(S|~O))+k[8]+1873313359&4294967295,T=S+(I<<6&4294967295|I>>>26),I=O+(S^(T|~N))+k[15]+4264355552&4294967295,O=T+(I<<10&4294967295|I>>>22),I=N+(T^(O|~S))+k[6]+2734768916&4294967295,N=O+(I<<15&4294967295|I>>>17),I=S+(O^(N|~T))+k[13]+1309151649&4294967295,S=N+(I<<21&4294967295|I>>>11),I=T+(N^(S|~O))+k[4]+4149444226&4294967295,T=S+(I<<6&4294967295|I>>>26),I=O+(S^(T|~N))+k[11]+3174756917&4294967295,O=T+(I<<10&4294967295|I>>>22),I=N+(T^(O|~S))+k[2]+718787259&4294967295,N=O+(I<<15&4294967295|I>>>17),I=S+(O^(N|~T))+k[9]+3951481745&4294967295,P.g[0]=P.g[0]+T&4294967295,P.g[1]=P.g[1]+(N+(I<<21&4294967295|I>>>11))&4294967295,P.g[2]=P.g[2]+N&4294967295,P.g[3]=P.g[3]+O&4294967295}s.prototype.u=function(P,T){T===void 0&&(T=P.length);for(var S=T-this.blockSize,k=this.B,N=this.h,O=0;O<T;){if(N==0)for(;O<=S;)a(this,P,O),O+=this.blockSize;if(typeof P=="string"){for(;O<T;)if(k[N++]=P.charCodeAt(O++),N==this.blockSize){a(this,k),N=0;break}}else for(;O<T;)if(k[N++]=P[O++],N==this.blockSize){a(this,k),N=0;break}}this.h=N,this.o+=T},s.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var T=1;T<P.length-8;++T)P[T]=0;var S=8*this.o;for(T=P.length-8;T<P.length;++T)P[T]=S&255,S/=256;for(this.u(P),P=Array(16),T=S=0;4>T;++T)for(var k=0;32>k;k+=8)P[S++]=this.g[T]>>>k&255;return P};function c(P,T){var S=g;return Object.prototype.hasOwnProperty.call(S,P)?S[P]:S[P]=T(P)}function d(P,T){this.h=T;for(var S=[],k=!0,N=P.length-1;0<=N;N--){var O=P[N]|0;k&&O==T||(S[N]=O,k=!1)}this.g=S}var g={};function y(P){return-128<=P&&128>P?c(P,function(T){return new d([T|0],0>T?-1:0)}):new d([P|0],0>P?-1:0)}function E(P){if(isNaN(P)||!isFinite(P))return x;if(0>P)return H(E(-P));for(var T=[],S=1,k=0;P>=S;k++)T[k]=P/S|0,S*=4294967296;return new d(T,0)}function R(P,T){if(P.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(P.charAt(0)=="-")return H(R(P.substring(1),T));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=E(Math.pow(T,8)),k=x,N=0;N<P.length;N+=8){var O=Math.min(8,P.length-N),I=parseInt(P.substring(N,N+O),T);8>O?(O=E(Math.pow(T,O)),k=k.j(O).add(E(I))):(k=k.j(S),k=k.add(E(I)))}return k}var x=y(0),b=y(1),K=y(16777216);i=d.prototype,i.m=function(){if(X(this))return-H(this).m();for(var P=0,T=1,S=0;S<this.g.length;S++){var k=this.i(S);P+=(0<=k?k:4294967296+k)*T,T*=4294967296}return P},i.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(Q(this))return"0";if(X(this))return"-"+H(this).toString(P);for(var T=E(Math.pow(P,6)),S=this,k="";;){var N=ye(S,T).g;S=me(S,N.j(T));var O=((0<S.g.length?S.g[0]:S.h)>>>0).toString(P);if(S=N,Q(S))return O+k;for(;6>O.length;)O="0"+O;k=O+k}},i.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function Q(P){if(P.h!=0)return!1;for(var T=0;T<P.g.length;T++)if(P.g[T]!=0)return!1;return!0}function X(P){return P.h==-1}i.l=function(P){return P=me(this,P),X(P)?-1:Q(P)?0:1};function H(P){for(var T=P.g.length,S=[],k=0;k<T;k++)S[k]=~P.g[k];return new d(S,~P.h).add(b)}i.abs=function(){return X(this)?H(this):this},i.add=function(P){for(var T=Math.max(this.g.length,P.g.length),S=[],k=0,N=0;N<=T;N++){var O=k+(this.i(N)&65535)+(P.i(N)&65535),I=(O>>>16)+(this.i(N)>>>16)+(P.i(N)>>>16);k=I>>>16,O&=65535,I&=65535,S[N]=I<<16|O}return new d(S,S[S.length-1]&-2147483648?-1:0)};function me(P,T){return P.add(H(T))}i.j=function(P){if(Q(this)||Q(P))return x;if(X(this))return X(P)?H(this).j(H(P)):H(H(this).j(P));if(X(P))return H(this.j(H(P)));if(0>this.l(K)&&0>P.l(K))return E(this.m()*P.m());for(var T=this.g.length+P.g.length,S=[],k=0;k<2*T;k++)S[k]=0;for(k=0;k<this.g.length;k++)for(var N=0;N<P.g.length;N++){var O=this.i(k)>>>16,I=this.i(k)&65535,Ze=P.i(N)>>>16,Rt=P.i(N)&65535;S[2*k+2*N]+=I*Rt,pe(S,2*k+2*N),S[2*k+2*N+1]+=O*Rt,pe(S,2*k+2*N+1),S[2*k+2*N+1]+=I*Ze,pe(S,2*k+2*N+1),S[2*k+2*N+2]+=O*Ze,pe(S,2*k+2*N+2)}for(k=0;k<T;k++)S[k]=S[2*k+1]<<16|S[2*k];for(k=T;k<2*T;k++)S[k]=0;return new d(S,0)};function pe(P,T){for(;(P[T]&65535)!=P[T];)P[T+1]+=P[T]>>>16,P[T]&=65535,T++}function ge(P,T){this.g=P,this.h=T}function ye(P,T){if(Q(T))throw Error("division by zero");if(Q(P))return new ge(x,x);if(X(P))return T=ye(H(P),T),new ge(H(T.g),H(T.h));if(X(T))return T=ye(P,H(T)),new ge(H(T.g),T.h);if(30<P.g.length){if(X(P)||X(T))throw Error("slowDivide_ only works with positive integers.");for(var S=b,k=T;0>=k.l(P);)S=Oe(S),k=Oe(k);var N=Ae(S,1),O=Ae(k,1);for(k=Ae(k,2),S=Ae(S,2);!Q(k);){var I=O.add(k);0>=I.l(P)&&(N=N.add(S),O=I),k=Ae(k,1),S=Ae(S,1)}return T=me(P,N.j(T)),new ge(N,T)}for(N=x;0<=P.l(T);){for(S=Math.max(1,Math.floor(P.m()/T.m())),k=Math.ceil(Math.log(S)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),O=E(S),I=O.j(T);X(I)||0<I.l(P);)S-=k,O=E(S),I=O.j(T);Q(O)&&(O=b),N=N.add(O),P=me(P,I)}return new ge(N,P)}i.A=function(P){return ye(this,P).h},i.and=function(P){for(var T=Math.max(this.g.length,P.g.length),S=[],k=0;k<T;k++)S[k]=this.i(k)&P.i(k);return new d(S,this.h&P.h)},i.or=function(P){for(var T=Math.max(this.g.length,P.g.length),S=[],k=0;k<T;k++)S[k]=this.i(k)|P.i(k);return new d(S,this.h|P.h)},i.xor=function(P){for(var T=Math.max(this.g.length,P.g.length),S=[],k=0;k<T;k++)S[k]=this.i(k)^P.i(k);return new d(S,this.h^P.h)};function Oe(P){for(var T=P.g.length+1,S=[],k=0;k<T;k++)S[k]=P.i(k)<<1|P.i(k-1)>>>31;return new d(S,P.h)}function Ae(P,T){var S=T>>5;T%=32;for(var k=P.g.length-S,N=[],O=0;O<k;O++)N[O]=0<T?P.i(O+S)>>>T|P.i(O+S+1)<<32-T:P.i(O+S);return new d(N,P.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=E,d.fromString=R,ig=d}).apply(typeof Kp<"u"?Kp:typeof self<"u"?self:typeof window<"u"?window:{});var bl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sg,ea,og,Wl,kh,ag,lg,ug;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,m){return l==Array.prototype||l==Object.prototype||(l[f]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof bl=="object"&&bl];for(var f=0;f<l.length;++f){var m=l[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var s=n(this);function a(l,f){if(f)e:{var m=s;l=l.split(".");for(var _=0;_<l.length-1;_++){var V=l[_];if(!(V in m))break e;m=m[V]}l=l[l.length-1],_=m[l],f=f(_),f!=_&&f!=null&&e(m,l,{configurable:!0,writable:!0,value:f})}}function c(l,f){l instanceof String&&(l+="");var m=0,_=!1,V={next:function(){if(!_&&m<l.length){var U=m++;return{value:f(U,l[U]),done:!1}}return _=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}a("Array.prototype.values",function(l){return l||function(){return c(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},g=this||self;function y(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function E(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function R(l,f,m){return l.call.apply(l.bind,arguments)}function x(l,f,m){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,_),l.apply(f,V)}}return function(){return l.apply(f,arguments)}}function b(l,f,m){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?R:x,b.apply(null,arguments)}function K(l,f){var m=Array.prototype.slice.call(arguments,1);return function(){var _=m.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function Q(l,f){function m(){}m.prototype=f.prototype,l.aa=f.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(_,V,U){for(var Y=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)Y[Ve-2]=arguments[Ve];return f.prototype[V].apply(_,Y)}}function X(l){const f=l.length;if(0<f){const m=Array(f);for(let _=0;_<f;_++)m[_]=l[_];return m}return[]}function H(l,f){for(let m=1;m<arguments.length;m++){const _=arguments[m];if(y(_)){const V=l.length||0,U=_.length||0;l.length=V+U;for(let Y=0;Y<U;Y++)l[V+Y]=_[Y]}else l.push(_)}}class me{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function pe(l){return/^[\s\xa0]*$/.test(l)}function ge(){var l=g.navigator;return l&&(l=l.userAgent)?l:""}function ye(l){return ye[" "](l),l}ye[" "]=function(){};var Oe=ge().indexOf("Gecko")!=-1&&!(ge().toLowerCase().indexOf("webkit")!=-1&&ge().indexOf("Edge")==-1)&&!(ge().indexOf("Trident")!=-1||ge().indexOf("MSIE")!=-1)&&ge().indexOf("Edge")==-1;function Ae(l,f,m){for(const _ in l)f.call(m,l[_],_,l)}function P(l,f){for(const m in l)f.call(void 0,l[m],m,l)}function T(l){const f={};for(const m in l)f[m]=l[m];return f}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,f){let m,_;for(let V=1;V<arguments.length;V++){_=arguments[V];for(m in _)l[m]=_[m];for(let U=0;U<S.length;U++)m=S[U],Object.prototype.hasOwnProperty.call(_,m)&&(l[m]=_[m])}}function N(l){var f=1;l=l.split(":");const m=[];for(;0<f&&l.length;)m.push(l.shift()),f--;return l.length&&m.push(l.join(":")),m}function O(l){g.setTimeout(()=>{throw l},0)}function I(){var l=le;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Ze{constructor(){this.h=this.g=null}add(f,m){const _=Rt.get();_.set(f,m),this.h?this.h.next=_:this.g=_,this.h=_}}var Rt=new me(()=>new kt,l=>l.reset());class kt{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Me,J=!1,le=new Ze,ee=()=>{const l=g.Promise.resolve(void 0);Me=()=>{l.then(D)}};var D=()=>{for(var l;l=I();){try{l.h.call(l.g)}catch(m){O(m)}var f=Rt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}J=!1};function j(){this.s=this.s,this.C=this.C}j.prototype.s=!1,j.prototype.ma=function(){this.s||(this.s=!0,this.N())},j.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var _e=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};g.addEventListener("test",m,f),g.removeEventListener("test",m,f)}catch{}return l}();function Ee(l,f){if(ae.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(Oe){e:{try{ye(f.nodeName);var V=!0;break e}catch{}V=!1}V||(f=null)}}else m=="mouseover"?f=l.fromElement:m=="mouseout"&&(f=l.toElement);this.relatedTarget=f,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Re[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ee.aa.h.call(this)}}Q(Ee,ae);var Re={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var De="closure_listenable_"+(1e6*Math.random()|0),xe=0;function Ue(l,f,m,_,V){this.listener=l,this.proxy=null,this.src=f,this.type=m,this.capture=!!_,this.ha=V,this.key=++xe,this.da=this.fa=!1}function ct(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Xn(l){this.src=l,this.g={},this.h=0}Xn.prototype.add=function(l,f,m,_,V){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var Y=Tr(l,f,_,V);return-1<Y?(f=l[Y],m||(f.fa=!1)):(f=new Ue(f,this.src,U,!!_,V),f.fa=m,l.push(f)),f};function Ki(l,f){var m=f.type;if(m in l.g){var _=l.g[m],V=Array.prototype.indexOf.call(_,f,void 0),U;(U=0<=V)&&Array.prototype.splice.call(_,V,1),U&&(ct(f),l.g[m].length==0&&(delete l.g[m],l.h--))}}function Tr(l,f,m,_){for(var V=0;V<l.length;++V){var U=l[V];if(!U.da&&U.listener==f&&U.capture==!!m&&U.ha==_)return V}return-1}var li="closure_lm_"+(1e6*Math.random()|0),Qi={};function ro(l,f,m,_,V){if(Array.isArray(f)){for(var U=0;U<f.length;U++)ro(l,f[U],m,_,V);return null}return m=oo(m),l&&l[De]?l.K(f,m,E(_)?!!_.capture:!!_,V):io(l,f,m,!1,_,V)}function io(l,f,m,_,V,U){if(!f)throw Error("Invalid event type");var Y=E(V)?!!V.capture:!!V,Ve=Yi(l);if(Ve||(l[li]=Ve=new Xn(l)),m=Ve.add(f,m,_,Y,U),m.proxy)return m;if(_=Ia(),m.proxy=_,_.src=l,_.listener=m,l.addEventListener)_e||(V=Y),V===void 0&&(V=!1),l.addEventListener(f.toString(),_,V);else if(l.attachEvent)l.attachEvent(Jn(f.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Ia(){function l(m){return f.call(l.src,l.listener,m)}const f=so;return l}function Xi(l,f,m,_,V){if(Array.isArray(f))for(var U=0;U<f.length;U++)Xi(l,f[U],m,_,V);else _=E(_)?!!_.capture:!!_,m=oo(m),l&&l[De]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],m=Tr(U,m,_,V),-1<m&&(ct(U[m]),Array.prototype.splice.call(U,m,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=Yi(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Tr(f,m,_,V)),(m=-1<l?f[l]:null)&&Yn(m))}function Yn(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[De])Ki(f.i,l);else{var m=l.type,_=l.proxy;f.removeEventListener?f.removeEventListener(m,_,l.capture):f.detachEvent?f.detachEvent(Jn(m),_):f.addListener&&f.removeListener&&f.removeListener(_),(m=Yi(f))?(Ki(m,l),m.h==0&&(m.src=null,f[li]=null)):ct(l)}}}function Jn(l){return l in Qi?Qi[l]:Qi[l]="on"+l}function so(l,f){if(l.da)l=!0;else{f=new Ee(f,this);var m=l.listener,_=l.ha||l.src;l.fa&&Yn(l),l=m.call(_,f)}return l}function Yi(l){return l=l[li],l instanceof Xn?l:null}var Ji="__closure_events_fn_"+(1e9*Math.random()>>>0);function oo(l){return typeof l=="function"?l:(l[Ji]||(l[Ji]=function(f){return l.handleEvent(f)}),l[Ji])}function st(){j.call(this),this.i=new Xn(this),this.M=this,this.F=null}Q(st,j),st.prototype[De]=!0,st.prototype.removeEventListener=function(l,f,m,_){Xi(this,l,f,m,_)};function ot(l,f){var m,_=l.F;if(_)for(m=[];_;_=_.F)m.push(_);if(l=l.M,_=f.type||f,typeof f=="string")f=new ae(f,l);else if(f instanceof ae)f.target=f.target||l;else{var V=f;f=new ae(_,l),k(f,V)}if(V=!0,m)for(var U=m.length-1;0<=U;U--){var Y=f.g=m[U];V=Zn(Y,_,!0,f)&&V}if(Y=f.g=l,V=Zn(Y,_,!0,f)&&V,V=Zn(Y,_,!1,f)&&V,m)for(U=0;U<m.length;U++)Y=f.g=m[U],V=Zn(Y,_,!1,f)&&V}st.prototype.N=function(){if(st.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var m=l.g[f],_=0;_<m.length;_++)ct(m[_]);delete l.g[f],l.h--}}this.F=null},st.prototype.K=function(l,f,m,_){return this.i.add(String(l),f,!1,m,_)},st.prototype.L=function(l,f,m,_){return this.i.add(String(l),f,!0,m,_)};function Zn(l,f,m,_){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var V=!0,U=0;U<f.length;++U){var Y=f[U];if(Y&&!Y.da&&Y.capture==m){var Ve=Y.listener,at=Y.ha||Y.src;Y.fa&&Ki(l.i,Y),V=Ve.call(at,_)!==!1&&V}}return V&&!_.defaultPrevented}function ao(l,f,m){if(typeof l=="function")m&&(l=b(l,m));else if(l&&typeof l.handleEvent=="function")l=b(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:g.setTimeout(l,f||0)}function Ir(l){l.g=ao(()=>{l.g=null,l.i&&(l.i=!1,Ir(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class ui extends j{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Ir(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ci(l){j.call(this),this.h=l,this.g={}}Q(ci,j);var lo=[];function uo(l){Ae(l.g,function(f,m){this.g.hasOwnProperty(m)&&Yn(f)},l),l.g={}}ci.prototype.N=function(){ci.aa.N.call(this),uo(this)},ci.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var co=g.JSON.stringify,ho=g.JSON.parse,fo=class{stringify(l){return g.JSON.stringify(l,void 0)}parse(l){return g.JSON.parse(l,void 0)}};function hi(){}hi.prototype.h=null;function Zi(l){return l.h||(l.h=l.i())}function es(){}var an={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function On(){ae.call(this,"d")}Q(On,ae);function ts(){ae.call(this,"c")}Q(ts,ae);var Vn={},po=null;function di(){return po=po||new st}Vn.La="serverreachability";function mo(l){ae.call(this,Vn.La,l)}Q(mo,ae);function er(l){const f=di();ot(f,new mo(f))}Vn.STAT_EVENT="statevent";function go(l,f){ae.call(this,Vn.STAT_EVENT,l),this.stat=f}Q(go,ae);function et(l){const f=di();ot(f,new go(f,l))}Vn.Ma="timingevent";function ns(l,f){ae.call(this,Vn.Ma,l),this.size=f}Q(ns,ae);function yn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){l()},f)}function fi(){this.g=!0}fi.prototype.xa=function(){this.g=!1};function pi(l,f,m,_,V,U){l.info(function(){if(l.g)if(U)for(var Y="",Ve=U.split("&"),at=0;at<Ve.length;at++){var ke=Ve[at].split("=");if(1<ke.length){var ht=ke[0];ke=ke[1];var nt=ht.split("_");Y=2<=nt.length&&nt[1]=="type"?Y+(ht+"="+ke+"&"):Y+(ht+"=redacted&")}}else Y=null;else Y=U;return"XMLHTTP REQ ("+_+") [attempt "+V+"]: "+f+`
`+m+`
`+Y})}function rs(l,f,m,_,V,U,Y){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+V+"]: "+f+`
`+m+`
`+U+" "+Y})}function vn(l,f,m,_){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Lu(l,m)+(_?" "+_:"")})}function yo(l,f){l.info(function(){return"TIMEOUT: "+f})}fi.prototype.info=function(){};function Lu(l,f){if(!l.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var _=m[l];if(!(2>_.length)){var V=_[1];if(Array.isArray(V)&&!(1>V.length)){var U=V[0];if(U!="noop"&&U!="stop"&&U!="close")for(var Y=1;Y<V.length;Y++)V[Y]=""}}}}return co(m)}catch{return f}}var is={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_n;function mi(){}Q(mi,hi),mi.prototype.g=function(){return new XMLHttpRequest},mi.prototype.i=function(){return{}},_n=new mi;function En(l,f,m,_){this.j=l,this.i=f,this.l=m,this.R=_||1,this.U=new ci(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Aa}function Aa(){this.i=null,this.g="",this.h=!1}var vo={},ss={};function os(l,f,m){l.L=1,l.v=Cr(Jt(f)),l.m=m,l.P=!0,_o(l,null)}function _o(l,f){l.F=Date.now(),be(l),l.A=Jt(l.v);var m=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),Nr(m.i,"t",_),l.C=0,m=l.j.J,l.h=new Aa,l.g=$a(l.j,m?f:null,!l.m),0<l.O&&(l.M=new ui(b(l.Y,l,l.g),l.O)),f=l.U,m=l.g,_=l.ca;var V="readystatechange";Array.isArray(V)||(V&&(lo[0]=V.toString()),V=lo);for(var U=0;U<V.length;U++){var Y=ro(m,V[U],_||f.handleEvent,!1,f.h||f);if(!Y)break;f.g[Y.key]=Y}f=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),er(),pi(l.i,l.u,l.A,l.l,l.R,l.m)}En.prototype.ca=function(l){l=l.target;const f=this.M;f&&zt(l)==3?f.j():this.Y(l)},En.prototype.Y=function(l){try{if(l==this.g)e:{const nt=zt(this.g);var f=this.g.Ba();const cn=this.g.Z();if(!(3>nt)&&(nt!=3||this.g&&(this.h.h||this.g.oa()||Ao(this.g)))){this.J||nt!=4||f==7||(f==8||0>=cn?er(3):er(2)),gi(this);var m=this.g.Z();this.X=m;t:if(Ra(this)){var _=Ao(this.g);l="";var V=_.length,U=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ln(this),Sr(this);var Y="";break t}this.h.i=new g.TextDecoder}for(f=0;f<V;f++)this.h.h=!0,l+=this.h.i.decode(_[f],{stream:!(U&&f==V-1)});_.length=0,this.h.g+=l,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=m==200,rs(this.i,this.u,this.A,this.l,this.R,nt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,at=this.g;if((Ve=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pe(Ve)){var ke=Ve;break t}}ke=null}if(m=ke)vn(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Eo(this,m);else{this.o=!1,this.s=3,et(12),ln(this),Sr(this);break e}}if(this.P){m=!0;let en;for(;!this.J&&this.C<Y.length;)if(en=Mu(this,Y),en==ss){nt==4&&(this.s=4,et(14),m=!1),vn(this.i,this.l,null,"[Incomplete Response]");break}else if(en==vo){this.s=4,et(15),vn(this.i,this.l,Y,"[Invalid Chunk]"),m=!1;break}else vn(this.i,this.l,en,null),Eo(this,en);if(Ra(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||Y.length!=0||this.h.h||(this.s=1,et(16),m=!1),this.o=this.o&&m,!m)vn(this.i,this.l,Y,"[Invalid Chunked Response]"),ln(this),Sr(this);else if(0<Y.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),ko(ht),ht.M=!0,et(11))}}else vn(this.i,this.l,Y,null),Eo(this,Y);nt==4&&ln(this),this.o&&!this.J&&(nt==4?ys(this.j,this):(this.o=!1,be(this)))}else ds(this.g),m==400&&0<Y.indexOf("Unknown SID")?(this.s=3,et(12)):(this.s=0,et(13)),ln(this),Sr(this)}}}catch{}finally{}};function Ra(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Mu(l,f){var m=l.C,_=f.indexOf(`
`,m);return _==-1?ss:(m=Number(f.substring(m,_)),isNaN(m)?vo:(_+=1,_+m>f.length?ss:(f=f.slice(_,_+m),l.C=_+m,f)))}En.prototype.cancel=function(){this.J=!0,ln(this)};function be(l){l.S=Date.now()+l.I,ka(l,l.I)}function ka(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=yn(b(l.ba,l),f)}function gi(l){l.B&&(g.clearTimeout(l.B),l.B=null)}En.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(yo(this.i,this.A),this.L!=2&&(er(),et(17)),ln(this),this.s=2,Sr(this)):ka(this,this.S-l)};function Sr(l){l.j.G==0||l.J||ys(l.j,l)}function ln(l){gi(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,uo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Eo(l,f){try{var m=l.j;if(m.G!=0&&(m.g==l||Mt(m.h,l))){if(!l.K&&Mt(m.h,l)&&m.G==3){try{var _=m.Da.g.parse(f)}catch{_=null}if(Array.isArray(_)&&_.length==3){var V=_;if(V[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)gs(m),An(m);else break e;ms(m),et(18)}}else m.za=V[1],0<m.za-m.T&&37500>V[2]&&m.F&&m.v==0&&!m.C&&(m.C=yn(b(m.Za,m),6e3));if(1>=Pa(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else sr(m,11)}else if((l.K||m.g==l)&&gs(m),!pe(f))for(V=m.Da.g.parse(f),f=0;f<V.length;f++){let ke=V[f];if(m.T=ke[0],ke=ke[1],m.G==2)if(ke[0]=="c"){m.K=ke[1],m.ia=ke[2];const ht=ke[3];ht!=null&&(m.la=ht,m.j.info("VER="+m.la));const nt=ke[4];nt!=null&&(m.Aa=nt,m.j.info("SVER="+m.Aa));const cn=ke[5];cn!=null&&typeof cn=="number"&&0<cn&&(_=1.5*cn,m.L=_,m.j.info("backChannelRequestTimeoutMs_="+_)),_=m;const en=l.g;if(en){const Ii=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ii){var U=_.h;U.g||Ii.indexOf("spdy")==-1&&Ii.indexOf("quic")==-1&&Ii.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(wo(U,U.h),U.h=null))}if(_.D){const _s=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;_s&&(_.ya=_s,Fe(_.I,_.D,_s))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),_=m;var Y=l;if(_.qa=Ba(_,_.J?_.ia:null,_.W),Y.K){Na(_.h,Y);var Ve=Y,at=_.L;at&&(Ve.I=at),Ve.B&&(gi(Ve),be(Ve)),_.g=Y}else Ti(_);0<m.i.length&&Un(m)}else ke[0]!="stop"&&ke[0]!="close"||sr(m,7);else m.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?sr(m,7):_t(m):ke[0]!="noop"&&m.l&&m.l.ta(ke),m.v=0)}}er(4)}catch{}}var Ca=class{constructor(l,f){this.g=l,this.map=f}};function yi(l){this.l=l||10,g.PerformanceNavigationTiming?(l=g.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Yt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Pa(l){return l.h?1:l.g?l.g.size:0}function Mt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function wo(l,f){l.g?l.g.add(f):l.h=f}function Na(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}yi.prototype.cancel=function(){if(this.i=Da(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Da(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const m of l.g.values())f=f.concat(m.D);return f}return X(l.i)}function as(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var f=[],m=l.length,_=0;_<m;_++)f.push(l[_]);return f}f=[],m=0;for(_ in l)f[m++]=l[_];return f}function ls(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var f=[];l=l.length;for(var m=0;m<l;m++)f.push(m);return f}f=[],m=0;for(const _ in l)f[m++]=_;return f}}}function Ar(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var m=ls(l),_=as(l),V=_.length,U=0;U<V;U++)f.call(void 0,_[U],m&&m[U],l)}var vi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fu(l,f){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var _=l[m].indexOf("="),V=null;if(0<=_){var U=l[m].substring(0,_);V=l[m].substring(_+1)}else U=l[m];f(U,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function tr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof tr){this.h=l.h,_i(this,l.j),this.o=l.o,this.g=l.g,Rr(this,l.s),this.l=l.l;var f=l.i,m=new Ln;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),kr(this,m),this.m=l.m}else l&&(f=String(l).match(vi))?(this.h=!1,_i(this,f[1]||"",!0),this.o=Se(f[2]||""),this.g=Se(f[3]||"",!0),Rr(this,f[4]),this.l=Se(f[5]||"",!0),kr(this,f[6]||"",!0),this.m=Se(f[7]||"")):(this.h=!1,this.i=new Ln(null,this.h))}tr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Pr(f,us,!0),":");var m=this.g;return(m||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Pr(f,us,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Pr(m,m.charAt(0)=="/"?Va:Oa,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Pr(m,To)),l.join("")};function Jt(l){return new tr(l)}function _i(l,f,m){l.j=m?Se(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Rr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function kr(l,f,m){f instanceof Ln?(l.i=f,Mn(l.i,l.h)):(m||(f=Pr(f,La)),l.i=new Ln(f,l.h))}function Fe(l,f,m){l.i.set(f,m)}function Cr(l){return Fe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Se(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Pr(l,f,m){return typeof l=="string"?(l=encodeURI(l).replace(f,xa),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function xa(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var us=/[#\/\?@]/g,Oa=/[#\?:]/g,Va=/[#\?]/g,La=/[#\?@]/g,To=/#/g;function Ln(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function vt(l){l.g||(l.g=new Map,l.h=0,l.i&&Fu(l.i,function(f,m){l.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}i=Ln.prototype,i.add=function(l,f){vt(this),this.i=null,l=un(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(f),this.h+=1,this};function wn(l,f){vt(l),f=un(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Tn(l,f){return vt(l),f=un(l,f),l.g.has(f)}i.forEach=function(l,f){vt(this),this.g.forEach(function(m,_){m.forEach(function(V){l.call(f,V,_,this)},this)},this)},i.na=function(){vt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let _=0;_<f.length;_++){const V=l[_];for(let U=0;U<V.length;U++)m.push(f[_])}return m},i.V=function(l){vt(this);let f=[];if(typeof l=="string")Tn(this,l)&&(f=f.concat(this.g.get(un(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)f=f.concat(l[m])}return f},i.set=function(l,f){return vt(this),this.i=null,l=un(this,l),Tn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Nr(l,f,m){wn(l,f),0<m.length&&(l.i=null,l.g.set(un(l,f),X(m)),l.h+=m.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var _=f[m];const U=encodeURIComponent(String(_)),Y=this.V(_);for(_=0;_<Y.length;_++){var V=U;Y[_]!==""&&(V+="="+encodeURIComponent(String(Y[_]))),l.push(V)}}return this.i=l.join("&")};function un(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Mn(l,f){f&&!l.j&&(vt(l),l.i=null,l.g.forEach(function(m,_){var V=_.toLowerCase();_!=V&&(wn(this,_),Nr(this,V,m))},l)),l.j=f}function Uu(l,f){const m=new fi;if(g.Image){const _=new Image;_.onload=K(jt,m,"TestLoadImage: loaded",!0,f,_),_.onerror=K(jt,m,"TestLoadImage: error",!1,f,_),_.onabort=K(jt,m,"TestLoadImage: abort",!1,f,_),_.ontimeout=K(jt,m,"TestLoadImage: timeout",!1,f,_),g.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else f(!1)}function Ma(l,f){const m=new fi,_=new AbortController,V=setTimeout(()=>{_.abort(),jt(m,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:_.signal}).then(U=>{clearTimeout(V),U.ok?jt(m,"TestPingServer: ok",!0,f):jt(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(V),jt(m,"TestPingServer: error",!1,f)})}function jt(l,f,m,_,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),_(m)}catch{}}function bu(){this.g=new fo}function Fa(l,f,m){const _=m||"";try{Ar(l,function(V,U){let Y=V;E(V)&&(Y=co(V)),f.push(_+U+"="+encodeURIComponent(Y))})}catch(V){throw f.push(_+"type="+encodeURIComponent("_badmap")),V}}function nr(l){this.l=l.Ub||null,this.j=l.eb||!1}Q(nr,hi),nr.prototype.g=function(){return new Ei(this.l,this.j)},nr.prototype.i=function(l){return function(){return l}}({});function Ei(l,f){st.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Q(Ei,st),i=Ei.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Sn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||g).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,In(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Sn(this)),this.g&&(this.readyState=3,Sn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof g.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ua(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ua(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?In(this):Sn(this),this.readyState==3&&Ua(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,In(this))},i.Qa=function(l){this.g&&(this.response=l,In(this))},i.ga=function(){this.g&&In(this)};function In(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Sn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=f.next();return l.join(`\r
`)};function Sn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ei.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function rr(l){let f="";return Ae(l,function(m,_){f+=_,f+=":",f+=m,f+=`\r
`}),f}function Dr(l,f,m){e:{for(_ in m){var _=!1;break e}_=!0}_||(m=rr(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Fe(l,f,m))}function He(l){st.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Q(He,st);var ju=/^https?$/i,Io=["POST","PUT"];i=He.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,m,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_n.g(),this.v=this.o?Zi(this.o):Zi(_n),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){wi(this,U);return}if(l=m||"",m=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var V in _)m.set(V,_[V]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const U of _.keys())m.set(U,_.get(U));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(m.keys()).find(U=>U.toLowerCase()=="content-type"),V=g.FormData&&l instanceof g.FormData,!(0<=Array.prototype.indexOf.call(Io,f,void 0))||_||V||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,Y]of m)this.g.setRequestHeader(U,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hs(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){wi(this,U)}};function wi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,cs(l),Zt(l)}function cs(l){l.A||(l.A=!0,ot(l,"complete"),ot(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ot(this,"complete"),ot(this,"abort"),Zt(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zt(this,!0)),He.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?So(this):this.bb())},i.bb=function(){So(this)};function So(l){if(l.h&&typeof d<"u"&&(!l.v[1]||zt(l)!=4||l.Z()!=2)){if(l.u&&zt(l)==4)ao(l.Ea,0,l);else if(ot(l,"readystatechange"),zt(l)==4){l.h=!1;try{const Y=l.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var _;if(_=Y===0){var V=String(l.D).match(vi)[1]||null;!V&&g.self&&g.self.location&&(V=g.self.location.protocol.slice(0,-1)),_=!ju.test(V?V.toLowerCase():"")}m=_}if(m)ot(l,"complete"),ot(l,"success");else{l.m=6;try{var U=2<zt(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",cs(l)}}finally{Zt(l)}}}}function Zt(l,f){if(l.g){hs(l);const m=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ot(l,"ready");try{m.onreadystatechange=_}catch{}}}function hs(l){l.I&&(g.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function zt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),ho(f)}};function Ao(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ds(l){const f={};l=(l.g&&2<=zt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(pe(l[_]))continue;var m=N(l[_]);const V=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const U=f[V]||[];f[V]=U,U.push(m)}P(f,function(_){return _.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fn(l,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||f}function Ro(l){this.Aa=0,this.i=[],this.j=new fi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fn("baseRetryDelayMs",5e3,l),this.cb=Fn("retryDelaySeedMs",1e4,l),this.Wa=Fn("forwardChannelMaxRetries",2,l),this.wa=Fn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new yi(l&&l.concurrentRequestLimit),this.Da=new bu,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Ro.prototype,i.la=8,i.G=1,i.connect=function(l,f,m,_){et(0),this.W=l,this.H=f||{},m&&_!==void 0&&(this.H.OSID=m,this.H.OAID=_),this.F=this.X,this.I=Ba(this,null,this.W),Un(this)};function _t(l){if(fs(l),l.G==3){var f=l.U++,m=Jt(l.I);if(Fe(m,"SID",l.K),Fe(m,"RID",f),Fe(m,"TYPE","terminate"),ir(l,m),f=new En(l,l.j,f),f.L=2,f.v=Cr(Jt(m)),m=!1,g.navigator&&g.navigator.sendBeacon)try{m=g.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&g.Image&&(new Image().src=f.v,m=!0),m||(f.g=$a(f.j,null),f.g.ea(f.v)),f.F=Date.now(),be(f)}za(l)}function An(l){l.g&&(ko(l),l.g.cancel(),l.g=null)}function fs(l){An(l),l.u&&(g.clearTimeout(l.u),l.u=null),gs(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&g.clearTimeout(l.s),l.s=null)}function Un(l){if(!Yt(l.h)&&!l.s){l.s=!0;var f=l.Ga;Me||ee(),J||(Me(),J=!0),le.add(f,l),l.B=0}}function zu(l,f){return Pa(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=yn(b(l.Ga,l,f),ja(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const V=new En(this,this.j,l);let U=this.o;if(this.S&&(U?(U=T(U),k(U,this.S)):U=this.S),this.m!==null||this.O||(V.H=U,U=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var _=this.i[m];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(f+=_,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=xr(this,V,f),m=Jt(this.I),Fe(m,"RID",l),Fe(m,"CVER",22),this.D&&Fe(m,"X-HTTP-Session-Id",this.D),ir(this,m),U&&(this.O?f="headers="+encodeURIComponent(String(rr(U)))+"&"+f:this.m&&Dr(m,this.m,U)),wo(this.h,V),this.Ua&&Fe(m,"TYPE","init"),this.P?(Fe(m,"$req",f),Fe(m,"SID","null"),V.T=!0,os(V,m,null)):os(V,m,f),this.G=2}}else this.G==3&&(l?ps(this,l):this.i.length==0||Yt(this.h)||ps(this))};function ps(l,f){var m;f?m=f.l:m=l.U++;const _=Jt(l.I);Fe(_,"SID",l.K),Fe(_,"RID",m),Fe(_,"AID",l.T),ir(l,_),l.m&&l.o&&Dr(_,l.m,l.o),m=new En(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),f&&(l.i=f.D.concat(l.i)),f=xr(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),wo(l.h,m),os(m,_,f)}function ir(l,f){l.H&&Ae(l.H,function(m,_){Fe(f,_,m)}),l.l&&Ar({},function(m,_){Fe(f,_,m)})}function xr(l,f,m){m=Math.min(l.i.length,m);var _=l.l?b(l.l.Na,l.l,l):null;e:{var V=l.i;let U=-1;for(;;){const Y=["count="+m];U==-1?0<m?(U=V[0].g,Y.push("ofs="+U)):U=0:Y.push("ofs="+U);let Ve=!0;for(let at=0;at<m;at++){let ke=V[at].g;const ht=V[at].map;if(ke-=U,0>ke)U=Math.max(0,V[at].g-100),Ve=!1;else try{Fa(ht,Y,"req"+ke+"_")}catch{_&&_(ht)}}if(Ve){_=Y.join("&");break e}}}return l=l.i.splice(0,m),f.D=l,_}function Ti(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Me||ee(),J||(Me(),J=!0),le.add(f,l),l.v=0}}function ms(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=yn(b(l.Fa,l),ja(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,ba(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=yn(b(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,et(10),An(this),ba(this))};function ko(l){l.A!=null&&(g.clearTimeout(l.A),l.A=null)}function ba(l){l.g=new En(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=Jt(l.qa);Fe(f,"RID","rpc"),Fe(f,"SID",l.K),Fe(f,"AID",l.T),Fe(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Fe(f,"TO",l.ja),Fe(f,"TYPE","xmlhttp"),ir(l,f),l.m&&l.o&&Dr(f,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Cr(Jt(f)),m.m=null,m.P=!0,_o(m,l)}i.Za=function(){this.C!=null&&(this.C=null,An(this),ms(this),et(19))};function gs(l){l.C!=null&&(g.clearTimeout(l.C),l.C=null)}function ys(l,f){var m=null;if(l.g==f){gs(l),ko(l),l.g=null;var _=2}else if(Mt(l.h,f))m=f.D,Na(l.h,f),_=1;else return;if(l.G!=0){if(f.o)if(_==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var V=l.B;_=di(),ot(_,new ns(_,m)),Un(l)}else Ti(l);else if(V=f.s,V==3||V==0&&0<f.X||!(_==1&&zu(l,f)||_==2&&ms(l)))switch(m&&0<m.length&&(f=l.h,f.i=f.i.concat(m)),V){case 1:sr(l,5);break;case 4:sr(l,10);break;case 3:sr(l,6);break;default:sr(l,2)}}}function ja(l,f){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*f}function sr(l,f){if(l.j.info("Error code "+f),f==2){var m=b(l.fb,l),_=l.Xa;const V=!_;_=new tr(_||"//www.google.com/images/cleardot.gif"),g.location&&g.location.protocol=="http"||_i(_,"https"),Cr(_),V?Uu(_.toString(),m):Ma(_.toString(),m)}else et(2);l.G=0,l.l&&l.l.sa(f),za(l),fs(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function za(l){if(l.G=0,l.ka=[],l.l){const f=Da(l.h);(f.length!=0||l.i.length!=0)&&(H(l.ka,f),H(l.ka,l.i),l.h.i.length=0,X(l.i),l.i.length=0),l.l.ra()}}function Ba(l,f,m){var _=m instanceof tr?Jt(m):new tr(m);if(_.g!="")f&&(_.g=f+"."+_.g),Rr(_,_.s);else{var V=g.location;_=V.protocol,f=f?f+"."+V.hostname:V.hostname,V=+V.port;var U=new tr(null);_&&_i(U,_),f&&(U.g=f),V&&Rr(U,V),m&&(U.l=m),_=U}return m=l.D,f=l.ya,m&&f&&Fe(_,m,f),Fe(_,"VER",l.la),ir(l,_),_}function $a(l,f,m){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new He(new nr({eb:m})):new He(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Co(){}i=Co.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function vs(){}vs.prototype.g=function(l,f){return new Ft(l,f)};function Ft(l,f){st.call(this),this.g=new Ro(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!pe(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!pe(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new bn(this)}Q(Ft,st),Ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){_t(this.g)},Ft.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=co(l),l=m);f.i.push(new Ca(f.Ya++,l)),f.G==3&&Un(f)},Ft.prototype.N=function(){this.g.l=null,delete this.j,_t(this.g),delete this.g,Ft.aa.N.call(this)};function Ha(l){On.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const m in f){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}Q(Ha,On);function Wa(){ts.call(this),this.status=1}Q(Wa,ts);function bn(l){this.g=l}Q(bn,Co),bn.prototype.ua=function(){ot(this.g,"a")},bn.prototype.ta=function(l){ot(this.g,new Ha(l))},bn.prototype.sa=function(l){ot(this.g,new Wa)},bn.prototype.ra=function(){ot(this.g,"b")},vs.prototype.createWebChannel=vs.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,ug=function(){return new vs},lg=function(){return di()},ag=Vn,kh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},is.NO_ERROR=0,is.TIMEOUT=8,is.HTTP_ERROR=6,Wl=is,Sa.COMPLETE="complete",og=Sa,es.EventType=an,an.OPEN="a",an.CLOSE="b",an.ERROR="c",an.MESSAGE="d",st.prototype.listen=st.prototype.K,ea=es,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,sg=He}).apply(typeof bl<"u"?bl:typeof self<"u"?self:typeof window<"u"?window:{});const Qp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ot.UNAUTHENTICATED=new Ot(null),Ot.GOOGLE_CREDENTIALS=new Ot("google-credentials-uid"),Ot.FIRST_PARTY=new Ot("first-party-uid"),Ot.MOCK_USER=new Ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=new Bh("@firebase/firestore");function zs(){return zi.logLevel}function ie(i,...e){if(zi.logLevel<=Te.DEBUG){const n=e.map(Wh);zi.debug(`Firestore (${to}): ${i}`,...n)}}function Bi(i,...e){if(zi.logLevel<=Te.ERROR){const n=e.map(Wh);zi.error(`Firestore (${to}): ${i}`,...n)}}function nu(i,...e){if(zi.logLevel<=Te.WARN){const n=e.map(Wh);zi.warn(`Firestore (${to}): ${i}`,...n)}}function Wh(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(i="Unexpected state"){const e=`FIRESTORE (${to}) INTERNAL ASSERTION FAILED: `+i;throw Bi(e),new Error(e)}function Je(i,e){i||Ie()}function ze(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends wr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class V0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ot.UNAUTHENTICATED))}shutdown(){}}class L0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class M0{constructor(e){this.t=e,this.currentUser=Ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Je(this.o===void 0);let s=this.i;const a=y=>this.i!==s?(s=this.i,n(y)):Promise.resolve();let c=new Ui;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Ui,e.enqueueRetryable(()=>a(this.currentUser))};const d=()=>{const y=c;e.enqueueRetryable(async()=>{await y.promise,await a(this.currentUser)})},g=y=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit(y=>g(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?g(y):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Ui)}},0),d()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Je(typeof s.accessToken=="string"),new cg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Je(e===null||typeof e=="string"),new Ot(e)}}class F0{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Ot.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class U0{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new F0(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class b0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class j0{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Je(this.o===void 0);const s=c=>{c.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const d=c.token!==this.R;return this.R=c.token,ie("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>s(c))};const a=c=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>a(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?a(c):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Je(typeof n.token=="string"),this.R=n.token,new b0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<i;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const a=z0(40);for(let c=0;c<a.length;++c)s.length<20&&a[c]<n&&(s+=e.charAt(a[c]%e.length))}return s}}function Le(i,e){return i<e?-1:i>e?1:0}function Qs(i,e,n){return i.length===e.length&&i.every((s,a)=>n(s,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{static now(){return yt.fromMillis(Date.now())}static fromDate(e){return yt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new yt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new he(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new he(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new he(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{static fromTimestamp(e){return new qe(e)}static min(){return new qe(new yt(0,0))}static max(){return new qe(new yt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n,s){n===void 0?n=0:n>e.length&&Ie(),s===void 0?s=e.length-n:s>e.length-n&&Ie(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return aa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof aa?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let a=0;a<s;a++){const c=e.get(a),d=n.get(a);if(c<d)return-1;if(c>d)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ye extends aa{construct(e,n,s){return new Ye(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new he(q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(a=>a.length>0))}return new Ye(n)}static emptyPath(){return new Ye([])}}const B0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class St extends aa{construct(e,n,s){return new St(e,n,s)}static isValidIdentifier(e){return B0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),St.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new St(["__name__"])}static fromServerFormat(e){const n=[];let s="",a=0;const c=()=>{if(s.length===0)throw new he(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let d=!1;for(;a<e.length;){const g=e[a];if(g==="\\"){if(a+1===e.length)throw new he(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[a+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new he(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,a+=2}else g==="`"?(d=!d,a++):g!=="."||d?(s+=g,a++):(c(),a++)}if(c(),d)throw new he(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new St(n)}static emptyPath(){return new St([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(Ye.fromString(e))}static fromName(e){return new ve(Ye.fromString(e).popFirst(5))}static empty(){return new ve(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new Ye(e.slice()))}}function $0(i,e){const n=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=qe.fromTimestamp(s===1e9?new yt(n+1,0):new yt(n,s));return new ri(a,ve.empty(),e)}function H0(i){return new ri(i.readTime,i.key,-1)}class ri{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ri(qe.min(),ve.empty(),-1)}static max(){return new ri(qe.max(),ve.empty(),-1)}}function W0(i,e){let n=i.readTime.compareTo(e.readTime);return n!==0?n:(n=ve.comparator(i.documentKey,e.documentKey),n!==0?n:Le(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class G0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qh(i){if(i.code!==q.FAILED_PRECONDITION||i.message!==q0)throw i;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((s,a)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(s,a)},this.catchCallback=c=>{this.wrapFailure(n,c).next(s,a)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,s)=>{n(e)})}static reject(e){return new z((n,s)=>{s(e)})}static waitFor(e){return new z((n,s)=>{let a=0,c=0,d=!1;e.forEach(g=>{++a,g.next(()=>{++c,d&&c===a&&n()},y=>s(y))}),d=!0,c===a&&n()})}static or(e){let n=z.resolve(!1);for(const s of e)n=n.next(a=>a?z.resolve(a):s());return n}static forEach(e,n){const s=[];return e.forEach((a,c)=>{s.push(n.call(this,a,c))}),this.waitFor(s)}static mapArray(e,n){return new z((s,a)=>{const c=e.length,d=new Array(c);let g=0;for(let y=0;y<c;y++){const E=y;n(e[E]).next(R=>{d[E]=R,++g,g===c&&s(d)},R=>a(R))}})}static doWhile(e,n){return new z((s,a)=>{const c=()=>{e()===!0?n().next(()=>{c()},a):s()};c()})}}function K0(i){const e=i.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ga(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Gh.oe=-1;function Kh(i){return i==null}function ru(i){return i===0&&1/i==-1/0}function Q0(i){return typeof i=="number"&&Number.isInteger(i)&&!ru(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(i){let e="";for(let n=0;n<i.length;n++)e.length>0&&(e=Xp(e)),e=Y0(i.get(n),e);return Xp(e)}function Y0(i,e){let n=e;const s=i.length;for(let a=0;a<s;a++){const c=i.charAt(a);switch(c){case"\0":n+="";break;case"":n+="";break;default:n+=c}}return n}function Xp(i){return i+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(i){let e=0;for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e++;return e}function qi(i,e){for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e(n,i[n])}function dg(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n){this.comparator=e,this.root=n||Tt.EMPTY}insert(e,n){return new Xt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(e){return new Xt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return n+s.left.size;a<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jl(this.root,e,this.comparator,!1)}getReverseIterator(){return new jl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jl(this.root,e,this.comparator,!0)}}class jl{constructor(e,n,s,a){this.isReverse=a,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=n?s(e.key,n):1,n&&a&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Tt{constructor(e,n,s,a,c){this.key=e,this.value=n,this.color=s??Tt.RED,this.left=a??Tt.EMPTY,this.right=c??Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,a,c){return new Tt(e??this.key,n??this.value,s??this.color,a??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let a=this;const c=s(e,a.key);return a=c<0?a.copy(null,null,null,a.left.insert(e,n,s),null):c===0?a.copy(null,n,null,null,null):a.copy(null,null,null,null,a.right.insert(e,n,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,a=this;if(n(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,n),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),n(e,a.key)===0){if(a.right.isEmpty())return Tt.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,n))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ie();const e=this.left.check();if(e!==this.right.check())throw Ie();return e+(this.isRed()?0:1)}}Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie()}get value(){throw Ie()}get color(){throw Ie()}get left(){throw Ie()}get right(){throw Ie()}copy(e,n,s,a,c){return this}insert(e,n,s){return new Tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.comparator=e,this.data=new Xt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;n(a.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Jp(this.data.getIterator())}getIteratorFrom(e){return new Jp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof At)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const a=n.getNext().key,c=s.getNext().key;if(this.comparator(a,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new At(this.comparator);return n.data=e,n}}class Jp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.fields=e,e.sort(St.comparator)}static empty(){return new on([])}unionWith(e){let n=new At(St.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new on(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(a){try{return atob(a)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new J0("Invalid base64 string: "+c):c}}(e);return new Kn(n)}static fromUint8Array(e){const n=function(a){let c="";for(let d=0;d<a.length;++d)c+=String.fromCharCode(a[d]);return c}(e);return new Kn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let a=0;a<n.length;a++)s[a]=n.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Kn.EMPTY_BYTE_STRING=new Kn("");const Z0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $i(i){if(Je(!!i),typeof i=="string"){let e=0;const n=Z0.exec(i);if(Je(!!n),n[1]){let a=n[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:It(i.seconds),nanos:It(i.nanos)}}function It(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Xs(i){return typeof i=="string"?Kn.fromBase64String(i):Kn.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(i){var e,n;return((n=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xh(i){const e=i.mapValue.fields.__previous_value__;return Qh(e)?Xh(e):e}function iu(i){const e=$i(i.mapValue.fields.__local_write_time__.timestampValue);return new yt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,n,s,a,c,d,g,y,E){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=a,this.ssl=c,this.forceLongPolling=d,this.autoDetectLongPolling=g,this.longPollingOptions=y,this.useFetchStreams=E}}class su{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new su("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof su&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Hi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Qh(i)?4:nE(i)?9007199254740991:tE(i)?10:11:Ie()}function Qn(i,e){if(i===e)return!0;const n=Hi(i);if(n!==Hi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return iu(i).isEqual(iu(e));case 3:return function(a,c){if(typeof a.timestampValue=="string"&&typeof c.timestampValue=="string"&&a.timestampValue.length===c.timestampValue.length)return a.timestampValue===c.timestampValue;const d=$i(a.timestampValue),g=$i(c.timestampValue);return d.seconds===g.seconds&&d.nanos===g.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,c){return Xs(a.bytesValue).isEqual(Xs(c.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,c){return It(a.geoPointValue.latitude)===It(c.geoPointValue.latitude)&&It(a.geoPointValue.longitude)===It(c.geoPointValue.longitude)}(i,e);case 2:return function(a,c){if("integerValue"in a&&"integerValue"in c)return It(a.integerValue)===It(c.integerValue);if("doubleValue"in a&&"doubleValue"in c){const d=It(a.doubleValue),g=It(c.doubleValue);return d===g?ru(d)===ru(g):isNaN(d)&&isNaN(g)}return!1}(i,e);case 9:return Qs(i.arrayValue.values||[],e.arrayValue.values||[],Qn);case 10:case 11:return function(a,c){const d=a.mapValue.fields||{},g=c.mapValue.fields||{};if(Yp(d)!==Yp(g))return!1;for(const y in d)if(d.hasOwnProperty(y)&&(g[y]===void 0||!Qn(d[y],g[y])))return!1;return!0}(i,e);default:return Ie()}}function la(i,e){return(i.values||[]).find(n=>Qn(n,e))!==void 0}function Ys(i,e){if(i===e)return 0;const n=Hi(i),s=Hi(e);if(n!==s)return Le(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Le(i.booleanValue,e.booleanValue);case 2:return function(c,d){const g=It(c.integerValue||c.doubleValue),y=It(d.integerValue||d.doubleValue);return g<y?-1:g>y?1:g===y?0:isNaN(g)?isNaN(y)?0:-1:1}(i,e);case 3:return Zp(i.timestampValue,e.timestampValue);case 4:return Zp(iu(i),iu(e));case 5:return Le(i.stringValue,e.stringValue);case 6:return function(c,d){const g=Xs(c),y=Xs(d);return g.compareTo(y)}(i.bytesValue,e.bytesValue);case 7:return function(c,d){const g=c.split("/"),y=d.split("/");for(let E=0;E<g.length&&E<y.length;E++){const R=Le(g[E],y[E]);if(R!==0)return R}return Le(g.length,y.length)}(i.referenceValue,e.referenceValue);case 8:return function(c,d){const g=Le(It(c.latitude),It(d.latitude));return g!==0?g:Le(It(c.longitude),It(d.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return em(i.arrayValue,e.arrayValue);case 10:return function(c,d){var g,y,E,R;const x=c.fields||{},b=d.fields||{},K=(g=x.value)===null||g===void 0?void 0:g.arrayValue,Q=(y=b.value)===null||y===void 0?void 0:y.arrayValue,X=Le(((E=K==null?void 0:K.values)===null||E===void 0?void 0:E.length)||0,((R=Q==null?void 0:Q.values)===null||R===void 0?void 0:R.length)||0);return X!==0?X:em(K,Q)}(i.mapValue,e.mapValue);case 11:return function(c,d){if(c===zl.mapValue&&d===zl.mapValue)return 0;if(c===zl.mapValue)return 1;if(d===zl.mapValue)return-1;const g=c.fields||{},y=Object.keys(g),E=d.fields||{},R=Object.keys(E);y.sort(),R.sort();for(let x=0;x<y.length&&x<R.length;++x){const b=Le(y[x],R[x]);if(b!==0)return b;const K=Ys(g[y[x]],E[R[x]]);if(K!==0)return K}return Le(y.length,R.length)}(i.mapValue,e.mapValue);default:throw Ie()}}function Zp(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Le(i,e);const n=$i(i),s=$i(e),a=Le(n.seconds,s.seconds);return a!==0?a:Le(n.nanos,s.nanos)}function em(i,e){const n=i.values||[],s=e.values||[];for(let a=0;a<n.length&&a<s.length;++a){const c=Ys(n[a],s[a]);if(c)return c}return Le(n.length,s.length)}function Js(i){return Ch(i)}function Ch(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(n){const s=$i(n);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(n){return Xs(n).toBase64()}(i.bytesValue):"referenceValue"in i?function(n){return ve.fromName(n).toString()}(i.referenceValue):"geoPointValue"in i?function(n){return`geo(${n.latitude},${n.longitude})`}(i.geoPointValue):"arrayValue"in i?function(n){let s="[",a=!0;for(const c of n.values||[])a?a=!1:s+=",",s+=Ch(c);return s+"]"}(i.arrayValue):"mapValue"in i?function(n){const s=Object.keys(n.fields||{}).sort();let a="{",c=!0;for(const d of s)c?c=!1:a+=",",a+=`${d}:${Ch(n.fields[d])}`;return a+"}"}(i.mapValue):Ie()}function ql(i){switch(Hi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xh(i);return e?16+ql(e):16;case 5:return 2*i.stringValue.length;case 6:return Xs(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,c)=>a+ql(c),0)}(i.arrayValue);case 10:case 11:return function(s){let a=0;return qi(s.fields,(c,d)=>{a+=c.length+ql(d)}),a}(i.mapValue);default:throw Ie()}}function Ph(i){return!!i&&"integerValue"in i}function Yh(i){return!!i&&"arrayValue"in i}function Gl(i){return!!i&&"mapValue"in i}function tE(i){var e,n;return((n=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ta(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return qi(i.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ta(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(i.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ta(i.arrayValue.values[n]);return e}return Object.assign({},i)}function nE(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.value=e}static empty(){return new sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Gl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ta(n)}setAll(e){let n=St.emptyPath(),s={},a=[];e.forEach((d,g)=>{if(!n.isImmediateParentOf(g)){const y=this.getFieldsMap(n);this.applyChanges(y,s,a),s={},a=[],n=g.popLast()}d?s[g.lastSegment()]=ta(d):a.push(g.lastSegment())});const c=this.getFieldsMap(n);this.applyChanges(c,s,a)}delete(e){const n=this.field(e.popLast());Gl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=n.mapValue.fields[e.get(s)];Gl(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=a),n=a}return n.mapValue.fields}applyChanges(e,n,s){qi(n,(a,c)=>e[a]=c);for(const a of s)delete e[a]}clone(){return new sn(ta(this.value))}}function fg(i){const e=[];return qi(i.fields,(n,s)=>{const a=new St([n]);if(Gl(s)){const c=fg(s.mapValue).fields;if(c.length===0)e.push(a);else for(const d of c)e.push(a.child(d))}else e.push(a)}),new on(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n,s,a,c,d,g){this.key=e,this.documentType=n,this.version=s,this.readTime=a,this.createTime=c,this.data=d,this.documentState=g}static newInvalidDocument(e){return new xn(e,0,qe.min(),qe.min(),qe.min(),sn.empty(),0)}static newFoundDocument(e,n,s,a){return new xn(e,1,n,qe.min(),s,a,0)}static newNoDocument(e,n){return new xn(e,2,n,qe.min(),qe.min(),sn.empty(),0)}static newUnknownDocument(e,n){return new xn(e,3,n,qe.min(),qe.min(),sn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(qe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=qe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n){this.position=e,this.inclusive=n}}function tm(i,e,n){let s=0;for(let a=0;a<i.position.length;a++){const c=e[a],d=i.position[a];if(c.field.isKeyField()?s=ve.comparator(ve.fromName(d.referenceValue),n.key):s=Ys(d,n.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function nm(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let n=0;n<i.position.length;n++)if(!Qn(i.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n="asc"){this.field=e,this.dir=n}}function rE(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{}class gt extends pg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new sE(e,n,s):n==="array-contains"?new lE(e,s):n==="in"?new uE(e,s):n==="not-in"?new cE(e,s):n==="array-contains-any"?new hE(e,s):new gt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new oE(e,s):new aE(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ys(n,this.value)):n!==null&&Hi(this.value)===Hi(n)&&this.matchesComparison(Ys(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ii extends pg{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ii(e,n)}matches(e){return mg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function mg(i){return i.op==="and"}function gg(i){return iE(i)&&mg(i)}function iE(i){for(const e of i.filters)if(e instanceof ii)return!1;return!0}function Nh(i){if(i instanceof gt)return i.field.canonicalString()+i.op.toString()+Js(i.value);if(gg(i))return i.filters.map(e=>Nh(e)).join(",");{const e=i.filters.map(n=>Nh(n)).join(",");return`${i.op}(${e})`}}function yg(i,e){return i instanceof gt?function(s,a){return a instanceof gt&&s.op===a.op&&s.field.isEqual(a.field)&&Qn(s.value,a.value)}(i,e):i instanceof ii?function(s,a){return a instanceof ii&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((c,d,g)=>c&&yg(d,a.filters[g]),!0):!1}(i,e):void Ie()}function vg(i){return i instanceof gt?function(n){return`${n.field.canonicalString()} ${n.op} ${Js(n.value)}`}(i):i instanceof ii?function(n){return n.op.toString()+" {"+n.getFilters().map(vg).join(" ,")+"}"}(i):"Filter"}class sE extends gt{constructor(e,n,s){super(e,n,s),this.key=ve.fromName(s.referenceValue)}matches(e){const n=ve.comparator(e.key,this.key);return this.matchesComparison(n)}}class oE extends gt{constructor(e,n){super(e,"in",n),this.keys=_g("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class aE extends gt{constructor(e,n){super(e,"not-in",n),this.keys=_g("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _g(i,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ve.fromName(s.referenceValue))}class lE extends gt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Yh(n)&&la(n.arrayValue,this.value)}}class uE extends gt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&la(this.value.arrayValue,n)}}class cE extends gt{constructor(e,n){super(e,"not-in",n)}matches(e){if(la(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!la(this.value.arrayValue,n)}}class hE extends gt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Yh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>la(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,n=null,s=[],a=[],c=null,d=null,g=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=a,this.limit=c,this.startAt=d,this.endAt=g,this.ue=null}}function rm(i,e=null,n=[],s=[],a=null,c=null,d=null){return new dE(i,e,n,s,a,c,d)}function Jh(i){const e=ze(i);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Nh(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(c){return c.field.canonicalString()+c.dir}(s)).join(","),Kh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Js(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Js(s)).join(",")),e.ue=n}return e.ue}function Zh(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<i.orderBy.length;n++)if(!rE(i.orderBy[n],e.orderBy[n]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let n=0;n<i.filters.length;n++)if(!yg(i.filters[n],e.filters[n]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!nm(i.startAt,e.startAt)&&nm(i.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n=null,s=[],a=[],c=null,d="F",g=null,y=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=a,this.limit=c,this.limitType=d,this.startAt=g,this.endAt=y,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function fE(i,e,n,s,a,c,d,g){return new Eu(i,e,n,s,a,c,d,g)}function pE(i){return new Eu(i)}function im(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function mE(i){return i.collectionGroup!==null}function na(i){const e=ze(i);if(e.ce===null){e.ce=[];const n=new Set;for(const c of e.explicitOrderBy)e.ce.push(c),n.add(c.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(d){let g=new At(St.comparator);return d.filters.forEach(y=>{y.getFlattenedFilters().forEach(E=>{E.isInequality()&&(g=g.add(E.field))})}),g})(e).forEach(c=>{n.has(c.canonicalString())||c.isKeyField()||e.ce.push(new au(c,s))}),n.has(St.keyField().canonicalString())||e.ce.push(new au(St.keyField(),s))}return e.ce}function bi(i){const e=ze(i);return e.le||(e.le=gE(e,na(i))),e.le}function gE(i,e){if(i.limitType==="F")return rm(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const c=a.dir==="desc"?"asc":"desc";return new au(a.field,c)});const n=i.endAt?new ou(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new ou(i.startAt.position,i.startAt.inclusive):null;return rm(i.path,i.collectionGroup,e,i.filters,i.limit,n,s)}}function Dh(i,e,n){return new Eu(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,n,i.startAt,i.endAt)}function Eg(i,e){return Zh(bi(i),bi(e))&&i.limitType===e.limitType}function wg(i){return`${Jh(bi(i))}|lt:${i.limitType}`}function Zo(i){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(a=>vg(a)).join(", ")}]`),Kh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(a=>function(d){return`${d.field.canonicalString()} (${d.dir})`}(a)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(a=>Js(a)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(a=>Js(a)).join(",")),`Target(${s})`}(bi(i))}; limitType=${i.limitType})`}function ed(i,e){return e.isFoundDocument()&&function(s,a){const c=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):ve.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)}(i,e)&&function(s,a){for(const c of na(s))if(!c.field.isKeyField()&&a.data.field(c.field)===null)return!1;return!0}(i,e)&&function(s,a){for(const c of s.filters)if(!c.matches(a))return!1;return!0}(i,e)&&function(s,a){return!(s.startAt&&!function(d,g,y){const E=tm(d,g,y);return d.inclusive?E<=0:E<0}(s.startAt,na(s),a)||s.endAt&&!function(d,g,y){const E=tm(d,g,y);return d.inclusive?E>=0:E>0}(s.endAt,na(s),a))}(i,e)}function yE(i){return(e,n)=>{let s=!1;for(const a of na(i)){const c=vE(a,e,n);if(c!==0)return c;s=s||a.field.isKeyField()}return 0}}function vE(i,e,n){const s=i.field.isKeyField()?ve.comparator(e.key,n.key):function(c,d,g){const y=d.data.field(c),E=g.data.field(c);return y!==null&&E!==null?Ys(y,E):Ie()}(i.field,e,n);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Ie()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[a,c]of s)if(this.equalsFn(a,e))return c}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let c=0;c<a.length;c++)if(this.equalsFn(a[c][0],e))return void(a[c]=[e,n]);a.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[n]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){qi(this.inner,(n,s)=>{for(const[a,c]of s)e(a,c)})}isEmpty(){return dg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=new Xt(ve.comparator);function lu(){return _E}const Tg=new Xt(ve.comparator);function Bl(...i){let e=Tg;for(const n of i)e=e.insert(n.key,n);return e}function Ig(i){let e=Tg;return i.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Fi(){return ra()}function Sg(){return ra()}function ra(){return new Gi(i=>i.toString(),(i,e)=>i.isEqual(e))}const EE=new Xt(ve.comparator),wE=new At(ve.comparator);function Vt(...i){let e=wE;for(const n of i)e=e.add(n);return e}const TE=new At(Le);function IE(){return TE}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ru(e)?"-0":e}}function Ag(i){return{integerValue:""+i}}function SE(i,e){return Q0(e)?Ag(e):td(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(){this._=void 0}}function AE(i,e,n){return i instanceof ua?function(a,c){const d={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return c&&Qh(c)&&(c=Xh(c)),c&&(d.fields.__previous_value__=c),{mapValue:d}}(n,e):i instanceof ca?kg(i,e):i instanceof ha?Cg(i,e):function(a,c){const d=Rg(a,c),g=sm(d)+sm(a.Pe);return Ph(d)&&Ph(a.Pe)?Ag(g):td(a.serializer,g)}(i,e)}function RE(i,e,n){return i instanceof ca?kg(i,e):i instanceof ha?Cg(i,e):n}function Rg(i,e){return i instanceof uu?function(s){return Ph(s)||function(c){return!!c&&"doubleValue"in c}(s)}(e)?e:{integerValue:0}:null}class ua extends wu{}class ca extends wu{constructor(e){super(),this.elements=e}}function kg(i,e){const n=Pg(e);for(const s of i.elements)n.some(a=>Qn(a,s))||n.push(s);return{arrayValue:{values:n}}}class ha extends wu{constructor(e){super(),this.elements=e}}function Cg(i,e){let n=Pg(e);for(const s of i.elements)n=n.filter(a=>!Qn(a,s));return{arrayValue:{values:n}}}class uu extends wu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function sm(i){return It(i.integerValue||i.doubleValue)}function Pg(i){return Yh(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,n){this.field=e,this.transform=n}}function CE(i,e){return i.field.isEqual(e.field)&&function(s,a){return s instanceof ca&&a instanceof ca||s instanceof ha&&a instanceof ha?Qs(s.elements,a.elements,Qn):s instanceof uu&&a instanceof uu?Qn(s.Pe,a.Pe):s instanceof ua&&a instanceof ua}(i.transform,e.transform)}class PE{constructor(e,n){this.version=e,this.transformResults=n}}class Hn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Hn}static exists(e){return new Hn(void 0,e)}static updateTime(e){return new Hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kl(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Tu{}function Ng(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new xg(i.key,Hn.none()):new ya(i.key,i.data,Hn.none());{const n=i.data,s=sn.empty();let a=new At(St.comparator);for(let c of e.fields)if(!a.has(c)){let d=n.field(c);d===null&&c.length>1&&(c=c.popLast(),d=n.field(c)),d===null?s.delete(c):s.set(c,d),a=a.add(c)}return new ai(i.key,s,new on(a.toArray()),Hn.none())}}function NE(i,e,n){i instanceof ya?function(a,c,d){const g=a.value.clone(),y=am(a.fieldTransforms,c,d.transformResults);g.setAll(y),c.convertToFoundDocument(d.version,g).setHasCommittedMutations()}(i,e,n):i instanceof ai?function(a,c,d){if(!Kl(a.precondition,c))return void c.convertToUnknownDocument(d.version);const g=am(a.fieldTransforms,c,d.transformResults),y=c.data;y.setAll(Dg(a)),y.setAll(g),c.convertToFoundDocument(d.version,y).setHasCommittedMutations()}(i,e,n):function(a,c,d){c.convertToNoDocument(d.version).setHasCommittedMutations()}(0,e,n)}function ia(i,e,n,s){return i instanceof ya?function(c,d,g,y){if(!Kl(c.precondition,d))return g;const E=c.value.clone(),R=lm(c.fieldTransforms,y,d);return E.setAll(R),d.convertToFoundDocument(d.version,E).setHasLocalMutations(),null}(i,e,n,s):i instanceof ai?function(c,d,g,y){if(!Kl(c.precondition,d))return g;const E=lm(c.fieldTransforms,y,d),R=d.data;return R.setAll(Dg(c)),R.setAll(E),d.convertToFoundDocument(d.version,R).setHasLocalMutations(),g===null?null:g.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map(x=>x.field))}(i,e,n,s):function(c,d,g){return Kl(c.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):g}(i,e,n)}function DE(i,e){let n=null;for(const s of i.fieldTransforms){const a=e.data.field(s.field),c=Rg(s.transform,a||null);c!=null&&(n===null&&(n=sn.empty()),n.set(s.field,c))}return n||null}function om(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&Qs(s,a,(c,d)=>CE(c,d))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class ya extends Tu{constructor(e,n,s,a=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class ai extends Tu{constructor(e,n,s,a,c=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=a,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function Dg(i){const e=new Map;return i.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=i.data.field(n);e.set(n,s)}}),e}function am(i,e,n){const s=new Map;Je(i.length===n.length);for(let a=0;a<n.length;a++){const c=i[a],d=c.transform,g=e.data.field(c.field);s.set(c.field,RE(d,g,n[a]))}return s}function lm(i,e,n){const s=new Map;for(const a of i){const c=a.transform,d=n.data.field(a.field);s.set(a.field,AE(c,d,e))}return s}class xg extends Tu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xE extends Tu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,n,s,a){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let a=0;a<this.mutations.length;a++){const c=this.mutations[a];c.key.isEqual(e.key)&&NE(c,e,s[a])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ia(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ia(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Sg();return this.mutations.forEach(a=>{const c=e.get(a.key),d=c.overlayedDocument;let g=this.applyToLocalView(d,c.mutatedFields);g=n.has(a.key)?null:g;const y=Ng(d,g);y!==null&&s.set(a.key,y),d.isValidDocument()||d.convertToNoDocument(qe.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Vt())}isEqual(e){return this.batchId===e.batchId&&Qs(this.mutations,e.mutations,(n,s)=>om(n,s))&&Qs(this.baseMutations,e.baseMutations,(n,s)=>om(n,s))}}class nd{constructor(e,n,s,a){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=a}static from(e,n,s){Je(e.mutations.length===s.length);let a=function(){return EE}();const c=e.mutations;for(let d=0;d<c.length;d++)a=a.insert(c[d].key,s[d].version);return new nd(e,n,s,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it,Ce;function LE(i){switch(i){default:return Ie();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0}}function ME(i){if(i===void 0)return Bi("GRPC error has no .code"),q.UNKNOWN;switch(i){case it.OK:return q.OK;case it.CANCELLED:return q.CANCELLED;case it.UNKNOWN:return q.UNKNOWN;case it.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case it.INTERNAL:return q.INTERNAL;case it.UNAVAILABLE:return q.UNAVAILABLE;case it.UNAUTHENTICATED:return q.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case it.NOT_FOUND:return q.NOT_FOUND;case it.ALREADY_EXISTS:return q.ALREADY_EXISTS;case it.PERMISSION_DENIED:return q.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case it.ABORTED:return q.ABORTED;case it.OUT_OF_RANGE:return q.OUT_OF_RANGE;case it.UNIMPLEMENTED:return q.UNIMPLEMENTED;case it.DATA_LOSS:return q.DATA_LOSS;default:return Ie()}}(Ce=it||(it={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ig([4294967295,4294967295],0);class FE{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xh(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function UE(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function bE(i,e){return xh(i,e.toTimestamp())}function Hs(i){return Je(!!i),qe.fromTimestamp(function(n){const s=$i(n);return new yt(s.seconds,s.nanos)}(i))}function Og(i,e){return Oh(i,e).canonicalString()}function Oh(i,e){const n=function(a){return new Ye(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?n:n.child(e)}function jE(i){const e=Ye.fromString(i);return Je(KE(e)),e}function Vh(i,e){return Og(i.databaseId,e.path)}function zE(i){const e=jE(i);return e.length===4?Ye.emptyPath():$E(e)}function BE(i){return new Ye(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function $E(i){return Je(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function um(i,e,n){return{name:Vh(i,e),fields:n.value.mapValue.fields}}function HE(i,e){let n;if(e instanceof ya)n={update:um(i,e.key,e.value)};else if(e instanceof xg)n={delete:Vh(i,e.key)};else if(e instanceof ai)n={update:um(i,e.key,e.data),updateMask:GE(e.fieldMask)};else{if(!(e instanceof xE))return Ie();n={verify:Vh(i,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(c,d){const g=d.transform;if(g instanceof ua)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(g instanceof ca)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:g.elements}};if(g instanceof ha)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:g.elements}};if(g instanceof uu)return{fieldPath:d.field.canonicalString(),increment:g.Pe};throw Ie()}(0,s))),e.precondition.isNone||(n.currentDocument=function(a,c){return c.updateTime!==void 0?{updateTime:bE(a,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:Ie()}(i,e.precondition)),n}function WE(i,e){return i&&i.length>0?(Je(e!==void 0),i.map(n=>function(a,c){let d=a.updateTime?Hs(a.updateTime):Hs(c);return d.isEqual(qe.min())&&(d=Hs(c)),new PE(d,a.transformResults||[])}(n,e))):[]}function qE(i){let e=zE(i.parent);const n=i.structuredQuery,s=n.from?n.from.length:0;let a=null;if(s>0){Je(s===1);const R=n.from[0];R.allDescendants?a=R.collectionId:e=e.child(R.collectionId)}let c=[];n.where&&(c=function(x){const b=Vg(x);return b instanceof ii&&gg(b)?b.getFilters():[b]}(n.where));let d=[];n.orderBy&&(d=function(x){return x.map(b=>function(Q){return new au(Bs(Q.field),function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(Q.direction))}(b))}(n.orderBy));let g=null;n.limit&&(g=function(x){let b;return b=typeof x=="object"?x.value:x,Kh(b)?null:b}(n.limit));let y=null;n.startAt&&(y=function(x){const b=!!x.before,K=x.values||[];return new ou(K,b)}(n.startAt));let E=null;return n.endAt&&(E=function(x){const b=!x.before,K=x.values||[];return new ou(K,b)}(n.endAt)),fE(e,a,d,c,g,"F",y,E)}function Vg(i){return i.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Bs(n.unaryFilter.field);return gt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Bs(n.unaryFilter.field);return gt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=Bs(n.unaryFilter.field);return gt.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=Bs(n.unaryFilter.field);return gt.create(d,"!=",{nullValue:"NULL_VALUE"});default:return Ie()}}(i):i.fieldFilter!==void 0?function(n){return gt.create(Bs(n.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ie()}}(n.fieldFilter.op),n.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(n){return ii.create(n.compositeFilter.filters.map(s=>Vg(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Ie()}}(n.compositeFilter.op))}(i):Ie()}function Bs(i){return St.fromServerFormat(i.fieldPath)}function GE(i){const e=[];return i.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function KE(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e){this.ht=e}}function XE(i){const e=qE({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Dh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(){this.ln=new JE}addToCollectionParentIndex(e,n){return this.ln.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(ri.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(ri.min())}updateCollectionGroup(e,n,s){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class JE{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),a=this.index[n]||new At(Ye.comparator),c=!a.has(s);return this.index[n]=a.add(s),c}has(e){const n=e.lastSegment(),s=e.popLast(),a=this.index[n];return a&&a.has(s)}getEntries(e){return(this.index[e]||new At(Ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Kt{static withCacheSize(e){return new Kt(e,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt.DEFAULT_COLLECTION_PERCENTILE=10,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Kt.DEFAULT=new Kt(41943040,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Kt.DISABLED=new Kt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Zs(0)}static Qn(){return new Zs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm([i,e],[n,s]){const a=Le(i,n);return a===0?Le(e,s):a}class ZE{constructor(e){this.Gn=e,this.buffer=new At(hm),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();hm(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ew{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ie("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ga(n)?ie("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await qh(n)}await this.Yn(3e5)})}}class tw{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return z.resolve(Gh.oe);const s=new ZE(n);return this.Zn.forEachTarget(e,a=>s.Hn(a.sequenceNumber)).next(()=>this.Zn.er(e,a=>s.Hn(a))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.Zn.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(cm)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),cm):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let s,a,c,d,g,y,E;const R=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(x=>(x>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${x}`),a=this.params.maximumSequenceNumbersToCollect):a=x,d=Date.now(),this.nthSequenceNumber(e,a))).next(x=>(s=x,g=Date.now(),this.removeTargets(e,s,n))).next(x=>(c=x,y=Date.now(),this.removeOrphanedDocuments(e,s))).next(x=>(E=Date.now(),zs()<=Te.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-R}ms
	Determined least recently used ${a} in `+(g-d)+`ms
	Removed ${c} targets in `+(y-g)+`ms
	Removed ${x} documents in `+(E-y)+`ms
Total Duration: ${E-R}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:c,documentsRemoved:x})))}}function nw(i,e){return new tw(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(){this.changes=new Gi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?z.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,n,s,a){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,n))).next(a=>(s!==null&&ia(s.mutation,a,on.empty(),yt.now()),a))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Vt()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Vt()){const a=Fi();return this.populateOverlays(e,a,n).next(()=>this.computeViews(e,n,a,s).next(c=>{let d=Bl();return c.forEach((g,y)=>{d=d.insert(g,y.overlayedDocument)}),d}))}getOverlayedDocuments(e,n){const s=Fi();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Vt()))}populateOverlays(e,n,s){const a=[];return s.forEach(c=>{n.has(c)||a.push(c)}),this.documentOverlayCache.getOverlays(e,a).next(c=>{c.forEach((d,g)=>{n.set(d,g)})})}computeViews(e,n,s,a){let c=lu();const d=ra(),g=function(){return ra()}();return n.forEach((y,E)=>{const R=s.get(E.key);a.has(E.key)&&(R===void 0||R.mutation instanceof ai)?c=c.insert(E.key,E):R!==void 0?(d.set(E.key,R.mutation.getFieldMask()),ia(R.mutation,E,R.mutation.getFieldMask(),yt.now())):d.set(E.key,on.empty())}),this.recalculateAndSaveOverlays(e,c).next(y=>(y.forEach((E,R)=>d.set(E,R)),n.forEach((E,R)=>{var x;return g.set(E,new iw(R,(x=d.get(E))!==null&&x!==void 0?x:null))}),g))}recalculateAndSaveOverlays(e,n){const s=ra();let a=new Xt((d,g)=>d-g),c=Vt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(d=>{for(const g of d)g.keys().forEach(y=>{const E=n.get(y);if(E===null)return;let R=s.get(y)||on.empty();R=g.applyToLocalView(E,R),s.set(y,R);const x=(a.get(g.batchId)||Vt()).add(y);a=a.insert(g.batchId,x)})}).next(()=>{const d=[],g=a.getReverseIterator();for(;g.hasNext();){const y=g.getNext(),E=y.key,R=y.value,x=Sg();R.forEach(b=>{if(!c.has(b)){const K=Ng(n.get(b),s.get(b));K!==null&&x.set(b,K),c=c.add(b)}}),d.push(this.documentOverlayCache.saveOverlays(e,E,x))}return z.waitFor(d)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,a){return function(d){return ve.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):mE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,a):this.getDocumentsMatchingCollectionQuery(e,n,s,a)}getNextDocuments(e,n,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,a).next(c=>{const d=a-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,a-c.size):z.resolve(Fi());let g=-1,y=c;return d.next(E=>z.forEach(E,(R,x)=>(g<x.largestBatchId&&(g=x.largestBatchId),c.get(R)?z.resolve():this.remoteDocumentCache.getEntry(e,R).next(b=>{y=y.insert(R,b)}))).next(()=>this.populateOverlays(e,E,c)).next(()=>this.computeViews(e,y,E,Vt())).next(R=>({batchId:g,changes:Ig(R)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ve(n)).next(s=>{let a=Bl();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,n,s,a){const c=n.collectionGroup;let d=Bl();return this.indexManager.getCollectionParents(e,c).next(g=>z.forEach(g,y=>{const E=function(x,b){return new Eu(b,null,x.explicitOrderBy.slice(),x.filters.slice(),x.limit,x.limitType,x.startAt,x.endAt)}(n,y.child(c));return this.getDocumentsMatchingCollectionQuery(e,E,s,a).next(R=>{R.forEach((x,b)=>{d=d.insert(x,b)})})}).next(()=>d))}getDocumentsMatchingCollectionQuery(e,n,s,a){let c;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(d=>(c=d,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,c,a))).next(d=>{c.forEach((y,E)=>{const R=E.getKey();d.get(R)===null&&(d=d.insert(R,xn.newInvalidDocument(R)))});let g=Bl();return d.forEach((y,E)=>{const R=c.get(y);R!==void 0&&ia(R.mutation,E,on.empty(),yt.now()),ed(n,E)&&(g=g.insert(y,E))}),g})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return z.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(a){return{id:a.id,version:a.version,createTime:Hs(a.createTime)}}(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(a){return{name:a.name,query:XE(a.bundledQuery),readTime:Hs(a.readTime)}}(n)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(){this.overlays=new Xt(ve.comparator),this.Er=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Fi();return z.forEach(n,a=>this.getOverlay(e,a).next(c=>{c!==null&&s.set(a,c)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((a,c)=>{this.Tt(e,n,c)}),z.resolve()}removeOverlaysForBatchId(e,n,s){const a=this.Er.get(s);return a!==void 0&&(a.forEach(c=>this.overlays=this.overlays.remove(c)),this.Er.delete(s)),z.resolve()}getOverlaysForCollection(e,n,s){const a=Fi(),c=n.length+1,d=new ve(n.child("")),g=this.overlays.getIteratorFrom(d);for(;g.hasNext();){const y=g.getNext().value,E=y.getKey();if(!n.isPrefixOf(E.path))break;E.path.length===c&&y.largestBatchId>s&&a.set(y.getKey(),y)}return z.resolve(a)}getOverlaysForCollectionGroup(e,n,s,a){let c=new Xt((E,R)=>E-R);const d=this.overlays.getIterator();for(;d.hasNext();){const E=d.getNext().value;if(E.getKey().getCollectionGroup()===n&&E.largestBatchId>s){let R=c.get(E.largestBatchId);R===null&&(R=Fi(),c=c.insert(E.largestBatchId,R)),R.set(E.getKey(),E)}}const g=Fi(),y=c.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach((E,R)=>g.set(E,R)),!(g.size()>=a)););return z.resolve(g)}Tt(e,n,s){const a=this.overlays.get(s.key);if(a!==null){const d=this.Er.get(a.largestBatchId).delete(s.key);this.Er.set(a.largestBatchId,d)}this.overlays=this.overlays.insert(s.key,new VE(n,s));let c=this.Er.get(n);c===void 0&&(c=Vt(),this.Er.set(n,c)),this.Er.set(n,c.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(){this.sessionToken=Kn.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(){this.dr=new At(mt.Ar),this.Rr=new At(mt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const s=new mt(e,n);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.gr(new mt(e,n))}pr(e,n){e.forEach(s=>this.removeReference(s,n))}yr(e){const n=new ve(new Ye([])),s=new mt(n,e),a=new mt(n,e+1),c=[];return this.Rr.forEachInRange([s,a],d=>{this.gr(d),c.push(d.key)}),c}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new ve(new Ye([])),s=new mt(n,e),a=new mt(n,e+1);let c=Vt();return this.Rr.forEachInRange([s,a],d=>{c=c.add(d.key)}),c}containsKey(e){const n=new mt(e,0),s=this.dr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class mt{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return ve.comparator(e.key,n.key)||Le(e.br,n.br)}static Vr(e,n){return Le(e.br,n.br)||ve.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new At(mt.Ar)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,a){const c=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new OE(c,n,s,a);this.mutationQueue.push(d);for(const g of a)this.vr=this.vr.add(new mt(g.key,c)),this.indexManager.addToCollectionParentIndex(e,g.key.path.popLast());return z.resolve(d)}lookupMutationBatch(e,n){return z.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,a=this.Fr(s),c=a<0?0:a;return z.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new mt(n,0),a=new mt(n,Number.POSITIVE_INFINITY),c=[];return this.vr.forEachInRange([s,a],d=>{const g=this.Cr(d.br);c.push(g)}),z.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new At(Le);return n.forEach(a=>{const c=new mt(a,0),d=new mt(a,Number.POSITIVE_INFINITY);this.vr.forEachInRange([c,d],g=>{s=s.add(g.br)})}),z.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,a=s.length+1;let c=s;ve.isDocumentKey(c)||(c=c.child(""));const d=new mt(new ve(c),0);let g=new At(Le);return this.vr.forEachWhile(y=>{const E=y.key.path;return!!s.isPrefixOf(E)&&(E.length===a&&(g=g.add(y.br)),!0)},d),z.resolve(this.Mr(g))}Mr(e){const n=[];return e.forEach(s=>{const a=this.Cr(s);a!==null&&n.push(a)}),n}removeMutationBatch(e,n){Je(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return z.forEach(n.mutations,a=>{const c=new mt(a.key,n.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,n){const s=new mt(n,0),a=this.vr.firstAfterOrEqual(s);return z.resolve(n.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e){this.Nr=e,this.docs=function(){return new Xt(ve.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,a=this.docs.get(s),c=a?a.size:0,d=this.Nr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:d}),this.size+=d-c,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return z.resolve(s?s.document.mutableCopy():xn.newInvalidDocument(n))}getEntries(e,n){let s=lu();return n.forEach(a=>{const c=this.docs.get(a);s=s.insert(a,c?c.document.mutableCopy():xn.newInvalidDocument(a))}),z.resolve(s)}getDocumentsMatchingQuery(e,n,s,a){let c=lu();const d=n.path,g=new ve(d.child("")),y=this.docs.getIteratorFrom(g);for(;y.hasNext();){const{key:E,value:{document:R}}=y.getNext();if(!d.isPrefixOf(E.path))break;E.path.length>d.length+1||W0(H0(R),s)<=0||(a.has(R.key)||ed(n,R))&&(c=c.insert(R.key,R.mutableCopy()))}return z.resolve(c)}getAllFromCollectionGroup(e,n,s,a){Ie()}Lr(e,n){return z.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new hw(this)}getSize(e){return z.resolve(this.size)}}class hw extends rw{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?n.push(this.hr.addEntry(e,a)):this.hr.removeEntry(s)}),z.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.persistence=e,this.Br=new Gi(n=>Jh(n),Zh),this.lastRemoteSnapshotVersion=qe.min(),this.highestTargetId=0,this.kr=0,this.qr=new rd,this.targetCount=0,this.Qr=Zs.qn()}forEachTarget(e,n){return this.Br.forEach((s,a)=>n(a)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.kr&&(this.kr=n),z.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Zs(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.Un(n),z.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,s){let a=0;const c=[];return this.Br.forEach((d,g)=>{g.sequenceNumber<=n&&s.get(g.targetId)===null&&(this.Br.delete(d),c.push(this.removeMatchingKeysForTargetId(e,g.targetId)),a++)}),z.waitFor(c).next(()=>a)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const s=this.Br.get(n)||null;return z.resolve(s)}addMatchingKeys(e,n,s){return this.qr.mr(n,s),z.resolve()}removeMatchingKeys(e,n,s){this.qr.pr(n,s);const a=this.persistence.referenceDelegate,c=[];return a&&n.forEach(d=>{c.push(a.markPotentiallyOrphaned(e,d))}),z.waitFor(c)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const s=this.qr.Sr(n);return z.resolve(s)}containsKey(e,n){return z.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Gh(0),this.Ur=!1,this.Ur=!0,this.Wr=new lw,this.referenceDelegate=e(this),this.Gr=new dw(this),this.indexManager=new YE,this.remoteDocumentCache=function(a){return new cw(a)}(s=>this.referenceDelegate.zr(s)),this.serializer=new QE(n),this.jr=new ow(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new aw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Kr[e.toKey()];return s||(s=new uw(n,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,s){ie("MemoryPersistence","Starting transaction:",e);const a=new fw(this.$r.next());return this.referenceDelegate.Hr(),s(a).next(c=>this.referenceDelegate.Jr(a).next(()=>c)).toPromise().then(c=>(a.raiseOnCommittedEvent(),c))}Yr(e,n){return z.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,n)))}}class fw extends G0{constructor(e){super(),this.currentSequenceNumber=e}}class id{constructor(e){this.persistence=e,this.Zr=new rd,this.Xr=null}static ei(e){return new id(e)}get ti(){if(this.Xr)return this.Xr;throw Ie()}addReference(e,n,s){return this.Zr.addReference(s,n),this.ti.delete(s.toString()),z.resolve()}removeReference(e,n,s){return this.Zr.removeReference(s,n),this.ti.add(s.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),z.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(a=>this.ti.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(a=>{a.forEach(c=>this.ti.add(c.toString()))}).next(()=>s.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.ti,s=>{const a=ve.fromPath(s);return this.ni(e,a).next(c=>{c||n.removeEntry(a,qe.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(s=>{s?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return z.or([()=>z.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class cu{constructor(e,n){this.persistence=e,this.ri=new Gi(s=>X0(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=nw(this,n)}static ei(e,n){return new cu(e,n)}Hr(){}Jr(e){return z.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(a=>s+a))}nr(e){let n=0;return this.er(e,s=>{n++}).next(()=>n)}er(e,n){return z.forEach(this.ri,(s,a)=>this.ir(e,s,a).next(c=>c?z.resolve():n(a)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const a=this.persistence.getRemoteDocumentCache(),c=a.newChangeBuffer();return a.Lr(e,d=>this.ir(e,d,n).next(g=>{g||(s++,c.removeEntry(d,qe.min()))})).next(()=>c.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),z.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.ri.set(s,e.currentSequenceNumber),z.resolve()}removeReference(e,n,s){return this.ri.set(s,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),z.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ql(e.data.value)),n}ir(e,n,s){return z.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const a=this.ri.get(n);return z.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,n,s,a){this.targetId=e,this.fromCache=n,this.Wi=s,this.Gi=a}static zi(e,n){let s=Vt(),a=Vt();for(const c of n.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:a=a.add(c.doc.key)}return new sd(e,n.fromCache,s,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return y_()?8:K0(Lt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,s,a){const c={result:null};return this.Xi(e,n).next(d=>{c.result=d}).next(()=>{if(!c.result)return this.es(e,n,a,s).next(d=>{c.result=d})}).next(()=>{if(c.result)return;const d=new pw;return this.ts(e,n,d).next(g=>{if(c.result=g,this.Hi)return this.ns(e,n,d,g.size)})}).next(()=>c.result)}ns(e,n,s,a){return s.documentReadCount<this.Ji?(zs()<=Te.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",Zo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),z.resolve()):(zs()<=Te.DEBUG&&ie("QueryEngine","Query:",Zo(n),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.Yi*a?(zs()<=Te.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",Zo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bi(n))):z.resolve())}Xi(e,n){if(im(n))return z.resolve(null);let s=bi(n);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(n.limit!==null&&a===1&&(n=Dh(n,null,"F"),s=bi(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(c=>{const d=Vt(...c);return this.Zi.getDocuments(e,d).next(g=>this.indexManager.getMinOffset(e,s).next(y=>{const E=this.rs(n,g);return this.ss(n,E,d,y.readTime)?this.Xi(e,Dh(n,null,"F")):this.os(e,E,n,y)}))})))}es(e,n,s,a){return im(n)||a.isEqual(qe.min())?z.resolve(null):this.Zi.getDocuments(e,s).next(c=>{const d=this.rs(n,c);return this.ss(n,d,s,a)?z.resolve(null):(zs()<=Te.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Zo(n)),this.os(e,d,n,$0(a,-1)).next(g=>g))})}rs(e,n){let s=new At(yE(e));return n.forEach((a,c)=>{ed(e,c)&&(s=s.add(c))}),s}ss(e,n,s,a){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const c=e.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(a)>0)}ts(e,n,s){return zs()<=Te.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",Zo(n)),this.Zi.getDocumentsMatchingQuery(e,n,ri.min(),s)}os(e,n,s,a){return this.Zi.getDocumentsMatchingQuery(e,s,a).next(c=>(n.forEach(d=>{c=c.insert(d.key,d)}),c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,n,s,a){this.persistence=e,this._s=n,this.serializer=a,this.us=new Xt(Le),this.cs=new Gi(c=>Jh(c),Zh),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sw(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function yw(i,e,n,s){return new gw(i,e,n,s)}async function Mg(i,e){const n=ze(i);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let a;return n.mutationQueue.getAllMutationBatches(s).next(c=>(a=c,n.Ps(e),n.mutationQueue.getAllMutationBatches(s))).next(c=>{const d=[],g=[];let y=Vt();for(const E of a){d.push(E.batchId);for(const R of E.mutations)y=y.add(R.key)}for(const E of c){g.push(E.batchId);for(const R of E.mutations)y=y.add(R.key)}return n.localDocuments.getDocuments(s,y).next(E=>({Ts:E,removedBatchIds:d,addedBatchIds:g}))})})}function vw(i,e){const n=ze(i);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const a=e.batch.keys(),c=n.hs.newChangeBuffer({trackRemovals:!0});return function(g,y,E,R){const x=E.batch,b=x.keys();let K=z.resolve();return b.forEach(Q=>{K=K.next(()=>R.getEntry(y,Q)).next(X=>{const H=E.docVersions.get(Q);Je(H!==null),X.version.compareTo(H)<0&&(x.applyToRemoteDocument(X,E),X.isValidDocument()&&(X.setReadTime(E.commitVersion),R.addEntry(X)))})}),K.next(()=>g.mutationQueue.removeMutationBatch(y,x))}(n,s,e,c).next(()=>c.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(g){let y=Vt();for(let E=0;E<g.mutationResults.length;++E)g.mutationResults[E].transformResults.length>0&&(y=y.add(g.batch.mutations[E].key));return y}(e))).next(()=>n.localDocuments.getDocuments(s,a))})}function _w(i){const e=ze(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function Ew(i,e){const n=ze(i);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}class dm{constructor(){this.activeTargetIds=IE()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ww{constructor(){this._o=new dm,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,s){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new dm,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ie("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ie("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $l=null;function yh(){return $l===null?$l=function(){return 268435456+Math.round(2147483648*Math.random())}():$l++,"0x"+$l.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="WebChannelConnection";class Aw extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),c=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+n.host,this.Mo=`projects/${a}/databases/${c}`,this.xo=this.databaseId.database==="(default)"?`project_id=${a}`:`project_id=${a}&database_id=${c}`}Oo(n,s,a,c,d){const g=yh(),y=this.No(n,s.toUriEncodedString());ie("RestConnection",`Sending RPC '${n}' ${g}:`,y,a);const E={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(E,c,d),this.Bo(n,y,E,a).then(R=>(ie("RestConnection",`Received RPC '${n}' ${g}: `,R),R),R=>{throw nu("RestConnection",`RPC '${n}' ${g} failed with error: `,R,"url: ",y,"request:",a),R})}ko(n,s,a,c,d,g){return this.Oo(n,s,a,c,d)}Lo(n,s,a){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+to}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((c,d)=>n[d]=c),a&&a.headers.forEach((c,d)=>n[d]=c)}No(n,s){const a=Iw[n];return`${this.Fo}/v1/${s}:${a}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,s,a){const c=yh();return new Promise((d,g)=>{const y=new sg;y.setWithCredentials(!0),y.listenOnce(og.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case Wl.NO_ERROR:const R=y.getResponseJson();ie(xt,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(R)),d(R);break;case Wl.TIMEOUT:ie(xt,`RPC '${e}' ${c} timed out`),g(new he(q.DEADLINE_EXCEEDED,"Request time out"));break;case Wl.HTTP_ERROR:const x=y.getStatus();if(ie(xt,`RPC '${e}' ${c} failed with status:`,x,"response text:",y.getResponseText()),x>0){let b=y.getResponseJson();Array.isArray(b)&&(b=b[0]);const K=b==null?void 0:b.error;if(K&&K.status&&K.message){const Q=function(H){const me=H.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(me)>=0?me:q.UNKNOWN}(K.status);g(new he(Q,K.message))}else g(new he(q.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new he(q.UNAVAILABLE,"Connection failed."));break;default:Ie()}}finally{ie(xt,`RPC '${e}' ${c} completed.`)}});const E=JSON.stringify(a);ie(xt,`RPC '${e}' ${c} sending request:`,a),y.send(n,"POST",E,s,15)})}qo(e,n,s){const a=yh(),c=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],d=ug(),g=lg(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},E=this.longPollingOptions.timeoutSeconds;E!==void 0&&(y.longPollingTimeout=Math.round(1e3*E)),this.useFetchStreams&&(y.useFetchStreams=!0),this.Lo(y.initMessageHeaders,n,s),y.encodeInitMessageHeaders=!0;const R=c.join("");ie(xt,`Creating RPC '${e}' stream ${a}: ${R}`,y);const x=d.createWebChannel(R,y);let b=!1,K=!1;const Q=new Sw({Eo:H=>{K?ie(xt,`Not sending because RPC '${e}' stream ${a} is closed:`,H):(b||(ie(xt,`Opening RPC '${e}' stream ${a} transport.`),x.open(),b=!0),ie(xt,`RPC '${e}' stream ${a} sending:`,H),x.send(H))},Ao:()=>x.close()}),X=(H,me,pe)=>{H.listen(me,ge=>{try{pe(ge)}catch(ye){setTimeout(()=>{throw ye},0)}})};return X(x,ea.EventType.OPEN,()=>{K||(ie(xt,`RPC '${e}' stream ${a} transport opened.`),Q.So())}),X(x,ea.EventType.CLOSE,()=>{K||(K=!0,ie(xt,`RPC '${e}' stream ${a} transport closed`),Q.Do())}),X(x,ea.EventType.ERROR,H=>{K||(K=!0,nu(xt,`RPC '${e}' stream ${a} transport errored:`,H),Q.Do(new he(q.UNAVAILABLE,"The operation could not be completed")))}),X(x,ea.EventType.MESSAGE,H=>{var me;if(!K){const pe=H.data[0];Je(!!pe);const ge=pe,ye=(ge==null?void 0:ge.error)||((me=ge[0])===null||me===void 0?void 0:me.error);if(ye){ie(xt,`RPC '${e}' stream ${a} received error:`,ye);const Oe=ye.status;let Ae=function(S){const k=it[S];if(k!==void 0)return ME(k)}(Oe),P=ye.message;Ae===void 0&&(Ae=q.INTERNAL,P="Unknown error status: "+Oe+" with message "+ye.message),K=!0,Q.Do(new he(Ae,P)),x.close()}else ie(xt,`RPC '${e}' stream ${a} received:`,pe),Q.vo(pe)}}),X(g,ag.STAT_EVENT,H=>{H.stat===kh.PROXY?ie(xt,`RPC '${e}' stream ${a} detected buffering proxy`):H.stat===kh.NOPROXY&&ie(xt,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{Q.bo()},0),Q}}function vh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(i){return new FE(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,n,s=1e3,a=1.5,c=6e4){this.li=e,this.timerId=n,this.Qo=s,this.Ko=a,this.$o=c,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),a=Math.max(0,n-s);a>0&&ie("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,a,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,n,s,a,c,d,g,y){this.li=e,this.Yo=s,this.Zo=a,this.connection=c,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=g,this.listener=y,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Fg(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(Bi(n.toString()),Bi("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.Xo===n&&this.I_(s,a)},s=>{e(()=>{const a=new he(q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(a)})})}I_(e,n){const s=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(a=>{s(()=>this.E_(a))}),this.stream.onMessage(a=>{s(()=>++this.n_==1?this.A_(a):this.onNext(a))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ie("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(ie("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kw extends Rw{constructor(e,n,s,a,c,d){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,a,d),this.serializer=c}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Je(!!e.streamToken),this.lastStreamToken=e.streamToken,Je(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Je(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=WE(e.writeResults,e.commitTime),s=Hs(e.commitTime);return this.listener.y_(s,n)}w_(){const e={};e.database=BE(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>HE(this.serializer,s))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw extends class{}{constructor(e,n,s,a){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=a,this.S_=!1}b_(){if(this.S_)throw new he(q.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,s,a){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Oo(e,Oh(n,s),a,c,d)).catch(c=>{throw c.name==="FirebaseError"?(c.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new he(q.UNKNOWN,c.toString())})}ko(e,n,s,a,c){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,g])=>this.connection.ko(e,Oh(n,s),a,d,g,c)).catch(d=>{throw d.name==="FirebaseError"?(d.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new he(q.UNKNOWN,d.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Pw{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Bi(n),this.C_=!1):ie("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,n,s,a,c){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=c,this.Q_.uo(d=>{s.enqueueAndForget(async()=>{_a(this)&&(ie("RemoteStore","Restarting streams for network reachability change."),await async function(y){const E=ze(y);E.k_.add(4),await va(E),E.K_.set("Unknown"),E.k_.delete(4),await Su(E)}(this))})}),this.K_=new Pw(s,a)}}async function Su(i){if(_a(i))for(const e of i.q_)await e(!0)}async function va(i){for(const e of i.q_)await e(!1)}function _a(i){return ze(i).k_.size===0}async function Ug(i,e,n){if(!ga(e))throw e;i.k_.add(1),await va(i),i.K_.set("Offline"),n||(n=()=>_w(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{ie("RemoteStore","Retrying IndexedDB access"),await n(),i.k_.delete(1),await Su(i)})}function bg(i,e){return e().catch(n=>Ug(i,n,e))}async function Au(i){const e=ze(i),n=si(e);let s=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;Dw(e);)try{const a=await Ew(e.localStore,s);if(a===null){e.L_.length===0&&n.a_();break}s=a.batchId,xw(e,a)}catch(a){await Ug(e,a)}jg(e)&&zg(e)}function Dw(i){return _a(i)&&i.L_.length<10}function xw(i,e){i.L_.push(e);const n=si(i);n.s_()&&n.f_&&n.g_(e.mutations)}function jg(i){return _a(i)&&!si(i).i_()&&i.L_.length>0}function zg(i){si(i).start()}async function Ow(i){si(i).w_()}async function Vw(i){const e=si(i);for(const n of i.L_)e.g_(n.mutations)}async function Lw(i,e,n){const s=i.L_.shift(),a=nd.from(s,e,n);await bg(i,()=>i.remoteSyncer.applySuccessfulWrite(a)),await Au(i)}async function Mw(i,e){e&&si(i).f_&&await async function(s,a){if(function(d){return LE(d)&&d!==q.ABORTED}(a.code)){const c=s.L_.shift();si(s).__(),await bg(s,()=>s.remoteSyncer.rejectFailedWrite(c.batchId,a)),await Au(s)}}(i,e),jg(i)&&zg(i)}async function pm(i,e){const n=ze(i);n.asyncQueue.verifyOperationInProgress(),ie("RemoteStore","RemoteStore received new credentials");const s=_a(n);n.k_.add(3),await va(n),s&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Su(n)}async function Fw(i,e){const n=ze(i);e?(n.k_.delete(2),await Su(n)):e||(n.k_.add(2),await va(n),n.K_.set("Unknown"))}function si(i){return i.G_||(i.G_=function(n,s,a){const c=ze(n);return c.b_(),new kw(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,a)}(i.datastore,i.asyncQueue,{Ro:()=>Promise.resolve(),mo:Ow.bind(null,i),po:Mw.bind(null,i),p_:Vw.bind(null,i),y_:Lw.bind(null,i)}),i.q_.push(async e=>{e?(i.G_.__(),await Au(i)):(await i.G_.stop(),i.L_.length>0&&(ie("RemoteStore",`Stopping write stream with ${i.L_.length} pending writes`),i.L_=[]))})),i.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,n,s,a,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=a,this.removalCallback=c,this.deferred=new Ui,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,a,c){const d=Date.now()+s,g=new od(e,n,d,a,c);return g.start(s),g}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bg(i,e){if(Bi("AsyncQueue",`${e}: ${i}`),ga(i))return new he(q.UNAVAILABLE,`${e}: ${i}`);throw i}class Uw{constructor(){this.queries=mm(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,s){const a=ze(n),c=a.queries;a.queries=mm(),c.forEach((d,g)=>{for(const y of g.J_)y.onError(s)})})(this,new he(q.ABORTED,"Firestore shutting down"))}}function mm(){return new Gi(i=>wg(i),Eg)}function bw(i){i.X_.forEach(e=>{e.next()})}var gm,ym;(ym=gm||(gm={})).na="default",ym.Cache="cache";class jw{constructor(e,n,s,a,c,d){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=a,this.currentUser=c,this.maxConcurrentLimboResolutions=d,this.Ma={},this.xa=new Gi(g=>wg(g),Eg),this.Oa=new Map,this.Na=new Set,this.La=new Xt(ve.comparator),this.Ba=new Map,this.ka=new rd,this.qa={},this.Qa=new Map,this.Ka=Zs.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function zw(i,e,n){const s=Ww(i);try{const a=await function(d,g){const y=ze(d),E=yt.now(),R=g.reduce((K,Q)=>K.add(Q.key),Vt());let x,b;return y.persistence.runTransaction("Locally write mutations","readwrite",K=>{let Q=lu(),X=Vt();return y.hs.getEntries(K,R).next(H=>{Q=H,Q.forEach((me,pe)=>{pe.isValidDocument()||(X=X.add(me))})}).next(()=>y.localDocuments.getOverlayedDocuments(K,Q)).next(H=>{x=H;const me=[];for(const pe of g){const ge=DE(pe,x.get(pe.key).overlayedDocument);ge!=null&&me.push(new ai(pe.key,ge,fg(ge.value.mapValue),Hn.exists(!0)))}return y.mutationQueue.addMutationBatch(K,E,me,g)}).next(H=>{b=H;const me=H.applyToLocalDocumentSet(x,X);return y.documentOverlayCache.saveOverlays(K,H.batchId,me)})}).then(()=>({batchId:b.batchId,changes:Ig(x)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),function(d,g,y){let E=d.qa[d.currentUser.toKey()];E||(E=new Xt(Le)),E=E.insert(g,y),d.qa[d.currentUser.toKey()]=E}(s,a.batchId,n),await Ru(s,a.changes),await Au(s.remoteStore)}catch(a){const c=Bg(a,"Failed to persist write");n.reject(c)}}function vm(i,e,n){const s=ze(i);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const a=[];s.xa.forEach((c,d)=>{const g=d.view.ea(e);g.snapshot&&a.push(g.snapshot)}),function(d,g){const y=ze(d);y.onlineState=g;let E=!1;y.queries.forEach((R,x)=>{for(const b of x.J_)b.ea(g)&&(E=!0)}),E&&bw(y)}(s.eventManager,e),a.length&&s.Ma.R_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Bw(i,e){const n=ze(i),s=e.batch.batchId;try{const a=await vw(n.localStore,e);Hg(n,s,null),$g(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ru(n,a)}catch(a){await qh(a)}}async function $w(i,e,n){const s=ze(i);try{const a=await function(d,g){const y=ze(d);return y.persistence.runTransaction("Reject batch","readwrite-primary",E=>{let R;return y.mutationQueue.lookupMutationBatch(E,g).next(x=>(Je(x!==null),R=x.keys(),y.mutationQueue.removeMutationBatch(E,x))).next(()=>y.mutationQueue.performConsistencyCheck(E)).next(()=>y.documentOverlayCache.removeOverlaysForBatchId(E,R,g)).next(()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(E,R)).next(()=>y.localDocuments.getDocuments(E,R))})}(s.localStore,e);Hg(s,e,n),$g(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ru(s,a)}catch(a){await qh(a)}}function $g(i,e){(i.Qa.get(e)||[]).forEach(n=>{n.resolve()}),i.Qa.delete(e)}function Hg(i,e,n){const s=ze(i);let a=s.qa[s.currentUser.toKey()];if(a){const c=a.get(e);c&&(n?c.reject(n):c.resolve(),a=a.remove(e)),s.qa[s.currentUser.toKey()]=a}}async function Ru(i,e,n){const s=ze(i),a=[],c=[],d=[];s.xa.isEmpty()||(s.xa.forEach((g,y)=>{d.push(s.Ua(y,e,n).then(E=>{var R;if((E||n)&&s.isPrimaryClient){const x=E?!E.fromCache:(R=void 0)===null||R===void 0?void 0:R.current;s.sharedClientState.updateQueryState(y.targetId,x?"current":"not-current")}if(E){a.push(E);const x=sd.zi(y.targetId,E);c.push(x)}}))}),await Promise.all(d),s.Ma.R_(a),await async function(y,E){const R=ze(y);try{await R.persistence.runTransaction("notifyLocalViewChanges","readwrite",x=>z.forEach(E,b=>z.forEach(b.Wi,K=>R.persistence.referenceDelegate.addReference(x,b.targetId,K)).next(()=>z.forEach(b.Gi,K=>R.persistence.referenceDelegate.removeReference(x,b.targetId,K)))))}catch(x){if(!ga(x))throw x;ie("LocalStore","Failed to update sequence numbers: "+x)}for(const x of E){const b=x.targetId;if(!x.fromCache){const K=R.us.get(b),Q=K.snapshotVersion,X=K.withLastLimboFreeSnapshotVersion(Q);R.us=R.us.insert(b,X)}}}(s.localStore,c))}async function Hw(i,e){const n=ze(i);if(!n.currentUser.isEqual(e)){ie("SyncEngine","User change. New user:",e.toKey());const s=await Mg(n.localStore,e);n.currentUser=e,function(c,d){c.Qa.forEach(g=>{g.forEach(y=>{y.reject(new he(q.CANCELLED,d))})}),c.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ru(n,s.Ts)}}function Ww(i){const e=ze(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Bw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$w.bind(null,e),e}class hu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Iu(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return yw(this.persistence,new mw,e.initialUser,this.serializer)}ja(e){return new Lg(id.ei,this.serializer)}za(e){return new ww}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hu.provider={build:()=>new hu};class qw extends hu{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Je(this.persistence.referenceDelegate instanceof cu);const s=this.persistence.referenceDelegate.garbageCollector;return new ew(s,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Kt.withCacheSize(this.cacheSizeBytes):Kt.DEFAULT;return new Lg(s=>cu.ei(s,n),this.serializer)}}class Lh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>vm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hw.bind(null,this.syncEngine),await Fw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Uw}()}createDatastore(e){const n=Iu(e.databaseInfo.databaseId),s=function(c){return new Aw(c)}(e.databaseInfo);return function(c,d,g,y){return new Cw(c,d,g,y)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,a,c,d,g){return new Nw(s,a,c,d,g)}(this.localStore,this.datastore,e.asyncQueue,n=>vm(this.syncEngine,n,0),function(){return fm.p()?new fm:new Tw}())}createSyncEngine(e,n){return function(a,c,d,g,y,E,R){const x=new jw(a,c,d,g,y,E);return R&&(x.$a=!0),x}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(a){const c=ze(a);ie("RemoteStore","RemoteStore shutting down."),c.k_.add(5),await va(c),c.Q_.shutdown(),c.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Lh.provider={build:()=>new Lh};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,n,s,a,c){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=a,this.user=Ot.UNAUTHENTICATED,this.clientId=hg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,async d=>{ie("FirestoreClient","Received user=",d.uid),await this.authCredentialListener(d),this.user=d}),this.appCheckCredentials.start(s,d=>(ie("FirestoreClient","Received new app check token=",d),this.appCheckCredentialListener(d,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ui;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Bg(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function _h(i,e){i.asyncQueue.verifyOperationInProgress(),ie("FirestoreClient","Initializing OfflineComponentProvider");const n=i.configuration;await e.initialize(n);let s=n.initialUser;i.setCredentialChangeListener(async a=>{s.isEqual(a)||(await Mg(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function _m(i,e){i.asyncQueue.verifyOperationInProgress();const n=await Kw(i);ie("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,i.configuration),i.setCredentialChangeListener(s=>pm(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,a)=>pm(e.remoteStore,a)),i._onlineComponents=e}async function Kw(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ie("FirestoreClient","Using user provided OfflineComponentProvider");try{await _h(i,i._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(a){return a.name==="FirebaseError"?a.code===q.FAILED_PRECONDITION||a.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(n))throw n;nu("Error using user provided cache. Falling back to memory cache: "+n),await _h(i,new hu)}}else ie("FirestoreClient","Using default OfflineComponentProvider"),await _h(i,new qw(void 0));return i._offlineComponents}async function Qw(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ie("FirestoreClient","Using user provided OnlineComponentProvider"),await _m(i,i._uninitializedComponentsProvider._online)):(ie("FirestoreClient","Using default OnlineComponentProvider"),await _m(i,new Lh))),i._onlineComponents}function Xw(i){return Qw(i).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(i,e,n){if(!n)throw new he(q.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function Yw(i,e,n,s){if(e===!0&&s===!0)throw new he(q.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function wm(i){if(!ve.isDocumentKey(i))throw new he(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Tm(i){if(ve.isDocumentKey(i))throw new he(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function ad(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Ie()}function du(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new he(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ad(i);throw new he(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new he(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new he(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Yw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wg((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new he(q.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new he(q.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new he(q.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ku{constructor(e,n,s,a){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Im({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Im(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new V0;switch(s.type){case"firstParty":return new U0(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Em.get(n);s&&(ie("ComponentProvider","Removing Datastore"),Em.delete(n),s.terminate())}(this),Promise.resolve()}}function Jw(i,e,n,s={}){var a;const c=(i=du(i,ku))._getSettings(),d=`${e}:${n}`;if(c.host!=="firestore.googleapis.com"&&c.host!==d&&nu("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},c),{host:d,ssl:!1})),s.mockUserToken){let g,y;if(typeof s.mockUserToken=="string")g=s.mockUserToken,y=Ot.MOCK_USER;else{g=c_(s.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const E=s.mockUserToken.sub||s.mockUserToken.user_id;if(!E)throw new he(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Ot(E)}i._authCredentials=new L0(new cg(g,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ld(this.firestore,e,this._query)}}class Wn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wn(this.firestore,e,this._key)}}class ti extends ld{constructor(e,n,s){super(e,n,pE(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wn(this.firestore,null,new ve(e))}withConverter(e){return new ti(this.firestore,e,this._path)}}function Zw(i,e,...n){if(i=Qt(i),qg("collection","path",e),i instanceof ku){const s=Ye.fromString(e,...n);return Tm(s),new ti(i,null,s)}{if(!(i instanceof Wn||i instanceof ti))throw new he(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ye.fromString(e,...n));return Tm(s),new ti(i.firestore,null,s)}}function Gg(i,e,...n){if(i=Qt(i),arguments.length===1&&(e=hg.newId()),qg("doc","path",e),i instanceof ku){const s=Ye.fromString(e,...n);return wm(s),new Wn(i,null,new ve(s))}{if(!(i instanceof Wn||i instanceof ti))throw new he(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ye.fromString(e,...n));return wm(s),new Wn(i.firestore,i instanceof ti?i.converter:null,new ve(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Fg(this,"async_queue_retry"),this.fu=()=>{const s=vh();s&&ie("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const n=vh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=vh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Ui;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!ga(e))throw e;ie("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const a=function(d){let g=d.message||"";return d.stack&&(g=d.stack.includes(d.message)?d.stack:d.message+`
`+d.stack),g}(s);throw Bi("INTERNAL UNHANDLED ERROR: ",a),s}).then(s=>(this.Ru=!1,s))));return this.gu=n,n}enqueueAfterDelay(e,n,s){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const a=od.createAndSchedule(this,e,n,s,c=>this.Su(c));return this.du.push(a),a}pu(){this.Au&&Ie()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class ud extends ku{constructor(e,n,s,a){super(e,n,s,a),this.type="firestore",this._queue=new Sm,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sm(e),this._firestoreClient=void 0,await e}}}function eT(i,e){const n=typeof i=="object"?i:tg(),s=typeof i=="string"?i:"(default)",a=Hh(n,"firestore").getImmediate({identifier:s});if(!a._initialized){const c=l_("firestore");c&&Jw(a,...c)}return a}function tT(i){if(i._terminated)throw new he(q.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||nT(i),i._firestoreClient}function nT(i){var e,n,s;const a=i._freezeSettings(),c=function(g,y,E,R){return new eE(g,y,E,R.host,R.ssl,R.experimentalForceLongPolling,R.experimentalAutoDetectLongPolling,Wg(R.experimentalLongPollingOptions),R.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((n=a.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new Gw(i._authCredentials,i._appCheckCredentials,i._queue,c,i._componentsProvider&&function(g){const y=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(y),_online:y}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e){this._byteString=e}static fromBase64String(e){try{return new da(Kn.fromBase64String(e))}catch(n){throw new he(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new da(Kn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new he(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new St(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new he(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new he(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==a[c])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=/^__.*__$/;class iT{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ai(e,this.data,this.fieldMask,n,this.fieldTransforms):new ya(e,this.data,n,this.fieldTransforms)}}class Xg{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ai(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Yg(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie()}}class hd{constructor(e,n,s,a,c,d){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=a,c===void 0&&this.Fu(),this.fieldTransforms=c||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new hd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),a=this.xu({path:s,Nu:!1});return a.Lu(e),a}Bu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),a=this.xu({path:s,Nu:!1});return a.Fu(),a}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return fu(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Yg(this.Mu)&&rT.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class sT{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Iu(e)}$u(e,n,s,a=!1){return new hd({Mu:e,methodName:n,Ku:s,path:St.emptyPath(),Nu:!1,Qu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jg(i){const e=i._freezeSettings(),n=Iu(i._databaseId);return new sT(i._databaseId,!!e.ignoreUndefinedProperties,n)}function oT(i,e,n,s,a,c={}){const d=i.$u(c.merge||c.mergeFields?2:0,e,n,a);fd("Data must be an object, but it was:",d,s);const g=Zg(s,d);let y,E;if(c.merge)y=new on(d.fieldMask),E=d.fieldTransforms;else if(c.mergeFields){const R=[];for(const x of c.mergeFields){const b=Mh(e,x,n);if(!d.contains(b))throw new he(q.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);ny(R,b)||R.push(b)}y=new on(R),E=d.fieldTransforms.filter(x=>y.covers(x.field))}else y=null,E=d.fieldTransforms;return new iT(new sn(g),y,E)}class Pu extends Cu{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Pu}}class dd extends Cu{_toFieldTransform(e){return new kE(e.path,new ua)}isEqual(e){return e instanceof dd}}function aT(i,e,n,s){const a=i.$u(1,e,n);fd("Data must be an object, but it was:",a,s);const c=[],d=sn.empty();qi(s,(y,E)=>{const R=ty(e,y,n);E=Qt(E);const x=a.Bu(R);if(E instanceof Pu)c.push(R);else{const b=Nu(E,x);b!=null&&(c.push(R),d.set(R,b))}});const g=new on(c);return new Xg(d,g,a.fieldTransforms)}function lT(i,e,n,s,a,c){const d=i.$u(1,e,n),g=[Mh(e,s,n)],y=[a];if(c.length%2!=0)throw new he(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<c.length;b+=2)g.push(Mh(e,c[b])),y.push(c[b+1]);const E=[],R=sn.empty();for(let b=g.length-1;b>=0;--b)if(!ny(E,g[b])){const K=g[b];let Q=y[b];Q=Qt(Q);const X=d.Bu(K);if(Q instanceof Pu)E.push(K);else{const H=Nu(Q,X);H!=null&&(E.push(K),R.set(K,H))}}const x=new on(E);return new Xg(R,x,d.fieldTransforms)}function Nu(i,e){if(ey(i=Qt(i)))return fd("Unsupported field value:",e,i),Zg(i,e);if(i instanceof Cu)return function(s,a){if(!Yg(a.Mu))throw a.qu(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.qu(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(a);c&&a.fieldTransforms.push(c)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,a){const c=[];let d=0;for(const g of s){let y=Nu(g,a.ku(d));y==null&&(y={nullValue:"NULL_VALUE"}),c.push(y),d++}return{arrayValue:{values:c}}}(i,e)}return function(s,a){if((s=Qt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return SE(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=yt.fromDate(s);return{timestampValue:xh(a.serializer,c)}}if(s instanceof yt){const c=new yt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:xh(a.serializer,c)}}if(s instanceof Kg)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof da)return{bytesValue:UE(a.serializer,s._byteString)};if(s instanceof Wn){const c=a.databaseId,d=s.firestore._databaseId;if(!d.isEqual(c))throw a.qu(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:Og(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Qg)return function(d,g){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:d.toArray().map(y=>{if(typeof y!="number")throw g.qu("VectorValues must only contain numeric values.");return td(g.serializer,y)})}}}}}}(s,a);throw a.qu(`Unsupported field value: ${ad(s)}`)}(i,e)}function Zg(i,e){const n={};return dg(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qi(i,(s,a)=>{const c=Nu(a,e.Ou(s));c!=null&&(n[s]=c)}),{mapValue:{fields:n}}}function ey(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof yt||i instanceof Kg||i instanceof da||i instanceof Wn||i instanceof Cu||i instanceof Qg)}function fd(i,e,n){if(!ey(n)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(n)){const s=ad(n);throw s==="an object"?e.qu(i+" a custom object"):e.qu(i+" "+s)}}function Mh(i,e,n){if((e=Qt(e))instanceof cd)return e._internalPath;if(typeof e=="string")return ty(i,e);throw fu("Field path arguments must be of type string or ",i,!1,void 0,n)}const uT=new RegExp("[~\\*/\\[\\]]");function ty(i,e,n){if(e.search(uT)>=0)throw fu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,n);try{return new cd(...e.split("."))._internalPath}catch{throw fu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,n)}}function fu(i,e,n,s,a){const c=s&&!s.isEmpty(),d=a!==void 0;let g=`Function ${e}() called with invalid data`;n&&(g+=" (via `toFirestore()`)"),g+=". ";let y="";return(c||d)&&(y+=" (found",c&&(y+=` in field ${s}`),d&&(y+=` in document ${a}`),y+=")"),new he(q.INVALID_ARGUMENT,g+i+y)}function ny(i,e){return i.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(i,e,n){let s;return s=i?i.toFirestore(e):e,s}function hT(i,e,n,...s){i=du(i,Wn);const a=du(i.firestore,ud),c=Jg(a);let d;return d=typeof(e=Qt(e))=="string"||e instanceof cd?lT(c,"updateDoc",i._key,e,n,s):aT(c,"updateDoc",i._key,e),ry(a,[d.toMutation(i._key,Hn.exists(!0))])}function dT(i,e){const n=du(i.firestore,ud),s=Gg(i),a=cT(i.converter,e);return ry(n,[oT(Jg(i.firestore),"addDoc",s._key,a,i.converter!==null,{}).toMutation(s._key,Hn.exists(!1))]).then(()=>s)}function ry(i,e){return function(s,a){const c=new Ui;return s.asyncQueue.enqueueAndForget(async()=>zw(await Xw(s),a,c)),c.promise}(tT(i),e)}function Am(){return new dd("serverTimestamp")}(function(e,n=!0){(function(a){to=a})(eo),Ks(new ji("firestore",(s,{instanceIdentifier:a,options:c})=>{const d=s.getProvider("app").getImmediate(),g=new ud(new M0(s.getProvider("auth-internal")),new j0(s.getProvider("app-check-internal")),function(E,R){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new he(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new su(E.options.projectId,R)}(d,a),d);return c=Object.assign({useFetchStreams:n},c),g._setSettings(c),g},"PUBLIC").setMultipleInstances(!0)),ei(Qp,"4.7.5",e),ei(Qp,"4.7.5","esm2017")})();function pd(i,e){var n={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(n[s[a]]=i[s[a]]);return n}function iy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fT=iy,sy=new pa("auth","Firebase",iy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu=new Bh("@firebase/auth");function pT(i,...e){pu.logLevel<=Te.WARN&&pu.warn(`Auth (${eo}): ${i}`,...e)}function Ql(i,...e){pu.logLevel<=Te.ERROR&&pu.error(`Auth (${eo}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(i,...e){throw md(i,...e)}function qn(i,...e){return md(i,...e)}function oy(i,e,n){const s=Object.assign(Object.assign({},fT()),{[e]:n});return new pa("auth","Firebase",s).create(e,{appName:i.name})}function ni(i){return oy(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function md(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return sy.create(i,...e)}function fe(i,e,...n){if(!i)throw md(e,...n)}function mr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Ql(e),new Error(e)}function Er(i,e){i||mr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function mT(){return Rm()==="http:"||Rm()==="https:"}function Rm(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mT()||p_()||"connection"in navigator)?navigator.onLine:!0}function yT(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n){this.shortDelay=e,this.longDelay=n,Er(n>e,"Short delay should be less than long delay!"),this.isMobile=h_()||m_()}get(){return gT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(i,e){Er(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=new Ea(3e4,6e4);function Du(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function no(i,e,n,s,a={}){return ly(i,a,async()=>{let c={},d={};s&&(e==="GET"?d=s:c={body:JSON.stringify(s)});const g=ma(Object.assign({key:i.config.apiKey},d)).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const E=Object.assign({method:e,headers:y},c);return f_()||(E.referrerPolicy="no-referrer"),ay.fetch()(cy(i,i.config.apiHost,n,g),E)})}async function ly(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},vT),e);try{const a=new ET(i),c=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const d=await c.json();if("needConfirmation"in d)throw Hl(i,"account-exists-with-different-credential",d);if(c.ok&&!("errorMessage"in d))return d;{const g=c.ok?d.errorMessage:d.error.message,[y,E]=g.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hl(i,"credential-already-in-use",d);if(y==="EMAIL_EXISTS")throw Hl(i,"email-already-in-use",d);if(y==="USER_DISABLED")throw Hl(i,"user-disabled",d);const R=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw oy(i,R,E);_r(i,R)}}catch(a){if(a instanceof wr)throw a;_r(i,"network-request-failed",{message:String(a)})}}async function uy(i,e,n,s,a={}){const c=await no(i,e,n,s,a);return"mfaPendingCredential"in c&&_r(i,"multi-factor-auth-required",{_serverResponse:c}),c}function cy(i,e,n,s){const a=`${e}${n}?${s}`;return i.config.emulator?gd(i.config,a):`${i.config.apiScheme}://${a}`}class ET{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(qn(this.auth,"network-request-failed")),_T.get())})}}function Hl(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const a=qn(i,e,s);return a.customData._tokenResponse=n,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wT(i,e){return no(i,"POST","/v1/accounts:delete",e)}async function hy(i,e){return no(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TT(i,e=!1){const n=Qt(i),s=await n.getIdToken(e),a=yd(s);fe(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const c=typeof a.firebase=="object"?a.firebase:void 0,d=c==null?void 0:c.sign_in_provider;return{claims:a,token:s,authTime:sa(Eh(a.auth_time)),issuedAtTime:sa(Eh(a.iat)),expirationTime:sa(Eh(a.exp)),signInProvider:d||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function Eh(i){return Number(i)*1e3}function yd(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return Ql("JWT malformed, contained fewer than 3 sections"),null;try{const a=Km(n);return a?JSON.parse(a):(Ql("Failed to decode base64 JWT payload"),null)}catch(a){return Ql("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function km(i){const e=yd(i);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fa(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof wr&&IT(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function IT({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=sa(this.lastLoginAt),this.creationTime=sa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mu(i){var e;const n=i.auth,s=await i.getIdToken(),a=await fa(i,hy(n,{idToken:s}));fe(a==null?void 0:a.users.length,n,"internal-error");const c=a.users[0];i._notifyReloadListener(c);const d=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?dy(c.providerUserInfo):[],g=RT(i.providerData,d),y=i.isAnonymous,E=!(i.email&&c.passwordHash)&&!(g!=null&&g.length),R=y?E:!1,x={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:g,metadata:new Uh(c.createdAt,c.lastLoginAt),isAnonymous:R};Object.assign(i,x)}async function AT(i){const e=Qt(i);await mu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RT(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function dy(i){return i.map(e=>{var{providerId:n}=e,s=pd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kT(i,e){const n=await ly(i,{},async()=>{const s=ma({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:c}=i.config,d=cy(i,a,"/v1/token",`key=${c}`),g=await i._getAdditionalHeaders();return g["Content-Type"]="application/x-www-form-urlencoded",ay.fetch()(d,{method:"POST",headers:g,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function CT(i,e){return no(i,"POST","/v2/accounts:revokeToken",Du(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):km(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=km(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:a,expiresIn:c}=await kT(e,n);this.updateTokensAndExpiration(s,a,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:a,expirationTime:c}=n,d=new Ws;return s&&(fe(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),a&&(fe(typeof a=="string","internal-error",{appName:e}),d.accessToken=a),c&&(fe(typeof c=="number","internal-error",{appName:e}),d.expirationTime=c),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ws,this.toJSON())}_performRefresh(){return mr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(i,e){fe(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class gr{constructor(e){var{uid:n,auth:s,stsTokenManager:a}=e,c=pd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ST(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Uh(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const n=await fa(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TT(this,e)}reload(){return AT(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await mu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pr(this.auth.app))return Promise.reject(ni(this.auth));const e=await this.getIdToken();return await fa(this,wT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,a,c,d,g,y,E,R;const x=(s=n.displayName)!==null&&s!==void 0?s:void 0,b=(a=n.email)!==null&&a!==void 0?a:void 0,K=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,Q=(d=n.photoURL)!==null&&d!==void 0?d:void 0,X=(g=n.tenantId)!==null&&g!==void 0?g:void 0,H=(y=n._redirectEventId)!==null&&y!==void 0?y:void 0,me=(E=n.createdAt)!==null&&E!==void 0?E:void 0,pe=(R=n.lastLoginAt)!==null&&R!==void 0?R:void 0,{uid:ge,emailVerified:ye,isAnonymous:Oe,providerData:Ae,stsTokenManager:P}=n;fe(ge&&P,e,"internal-error");const T=Ws.fromJSON(this.name,P);fe(typeof ge=="string",e,"internal-error"),Gr(x,e.name),Gr(b,e.name),fe(typeof ye=="boolean",e,"internal-error"),fe(typeof Oe=="boolean",e,"internal-error"),Gr(K,e.name),Gr(Q,e.name),Gr(X,e.name),Gr(H,e.name),Gr(me,e.name),Gr(pe,e.name);const S=new gr({uid:ge,auth:e,email:b,emailVerified:ye,displayName:x,isAnonymous:Oe,photoURL:Q,phoneNumber:K,tenantId:X,stsTokenManager:T,createdAt:me,lastLoginAt:pe});return Ae&&Array.isArray(Ae)&&(S.providerData=Ae.map(k=>Object.assign({},k))),H&&(S._redirectEventId=H),S}static async _fromIdTokenResponse(e,n,s=!1){const a=new Ws;a.updateFromServerResponse(n);const c=new gr({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await mu(c),c}static async _fromGetAccountInfoResponse(e,n,s){const a=n.users[0];fe(a.localId!==void 0,"internal-error");const c=a.providerUserInfo!==void 0?dy(a.providerUserInfo):[],d=!(a.email&&a.passwordHash)&&!(c!=null&&c.length),g=new Ws;g.updateFromIdToken(s);const y=new gr({uid:a.localId,auth:e,stsTokenManager:g,isAnonymous:d}),E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Uh(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(c!=null&&c.length)};return Object.assign(y,E),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=new Map;function yr(i){Er(i instanceof Function,"Expected a class definition");let e=Cm.get(i);return e?(Er(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Cm.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fy.type="NONE";const Pm=fy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(i,e,n){return`firebase:${i}:${e}:${n}`}class qs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:a,name:c}=this.auth;this.fullUserKey=Xl(this.userKey,a.apiKey,c),this.fullPersistenceKey=Xl("persistence",a.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new qs(yr(Pm),e,s);const a=(await Promise.all(n.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let c=a[0]||yr(Pm);const d=Xl(s,e.config.apiKey,e.name);let g=null;for(const E of n)try{const R=await E._get(d);if(R){const x=gr._fromJSON(e,R);E!==c&&(g=x),c=E;break}}catch{}const y=a.filter(E=>E._shouldAllowMigration);return!c._shouldAllowMigration||!y.length?new qs(c,e,s):(c=y[0],g&&await c._set(d,g.toJSON()),await Promise.all(n.map(async E=>{if(E!==c)try{await E._remove(d)}catch{}})),new qs(c,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(py(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_y(e))return"Blackberry";if(Ey(e))return"Webos";if(my(e))return"Safari";if((e.includes("chrome/")||gy(e))&&!e.includes("edge/"))return"Chrome";if(vy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function py(i=Lt()){return/firefox\//i.test(i)}function my(i=Lt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gy(i=Lt()){return/crios\//i.test(i)}function yy(i=Lt()){return/iemobile/i.test(i)}function vy(i=Lt()){return/android/i.test(i)}function _y(i=Lt()){return/blackberry/i.test(i)}function Ey(i=Lt()){return/webos/i.test(i)}function vd(i=Lt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function PT(i=Lt()){var e;return vd(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NT(){return g_()&&document.documentMode===10}function wy(i=Lt()){return vd(i)||vy(i)||Ey(i)||_y(i)||/windows phone/i.test(i)||yy(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(i,e=[]){let n;switch(i){case"Browser":n=Nm(Lt());break;case"Worker":n=`${Nm(Lt())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${eo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((d,g)=>{try{const y=e(c);d(y)}catch(y){g(y)}});s.onAbort=n,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xT(i,e={}){return no(i,"GET","/v2/passwordPolicy",Du(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=6;class VT{constructor(e){var n,s,a,c;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:OT,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,a,c,d,g;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(n=y.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),y.isValid&&(y.isValid=(s=y.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),y.isValid&&(y.isValid=(a=y.containsLowercaseLetter)!==null&&a!==void 0?a:!0),y.isValid&&(y.isValid=(c=y.containsUppercaseLetter)!==null&&c!==void 0?c:!0),y.isValid&&(y.isValid=(d=y.containsNumericCharacter)!==null&&d!==void 0?d:!0),y.isValid&&(y.isValid=(g=y.containsNonAlphanumericCharacter)!==null&&g!==void 0?g:!0),y}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,a,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,n,s,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dm(this),this.idTokenSubscription=new Dm(this),this.beforeStateQueue=new DT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yr(n)),this._initializationPromise=this.queue(async()=>{var s,a;if(!this._deleted&&(this.persistenceManager=await qs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await hy(this,{idToken:e}),s=await gr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pr(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(g,g))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,g=a==null?void 0:a._redirectEventId,y=await this.tryRedirectSignIn(e);(!d||d===g)&&(y!=null&&y.user)&&(a=y.user,c=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(a)}catch(d){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pr(this.app))return Promise.reject(ni(this));const n=e?Qt(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pr(this.app)?Promise.reject(ni(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pr(this.app)?Promise.reject(ni(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xT(this),n=new VT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pa("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await CT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yr(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await qs.create(this,[yr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,a){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let d=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(g,this,"internal-error"),g.then(()=>{d||c(this.currentUser)}),typeof n=="function"){const y=e.addObserver(n,s,a);return()=>{d=!0,y()}}else{const y=e.addObserver(n);return()=>{d=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ty(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(n["X-Firebase-AppCheck"]=a),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&pT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xu(i){return Qt(i)}class Dm{constructor(e){this.auth=e,this.observer=null,this.addObserver=S_(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _d={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MT(i){_d=i}function FT(i){return _d.loadJS(i)}function UT(){return _d.gapiScript}function bT(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(i,e){const n=Hh(i,"auth");if(n.isInitialized()){const a=n.getImmediate(),c=n.getOptions();if(eu(c,e??{}))return a;_r(a,"already-initialized")}return n.initialize({options:e})}function zT(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(yr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function BT(i,e,n){const s=xu(i);fe(s._canInitEmulator,s,"emulator-config-failed"),fe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,c=Iy(e),{host:d,port:g}=$T(e),y=g===null?"":`:${g}`;s.config.emulator={url:`${c}//${d}${y}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:d,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:a})}),HT()}function Iy(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function $T(i){const e=Iy(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const c=a[1];return{host:c,port:xm(s.substr(c.length+1))}}else{const[c,d]=s.split(":");return{host:c,port:xm(d)}}}function xm(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function HT(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mr("not implemented")}_getIdTokenResponse(e){return mr("not implemented")}_linkToIdToken(e,n){return mr("not implemented")}_getReauthenticationResolver(e){return mr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gs(i,e){return uy(i,"POST","/v1/accounts:signInWithIdp",Du(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT="http://localhost";class Wi extends Sy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_r("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=n,c=pd(n,["providerId","signInMethod"]);if(!s||!a)return null;const d=new Wi(s,a);return d.idToken=c.idToken||void 0,d.accessToken=c.accessToken||void 0,d.secret=c.secret,d.nonce=c.nonce,d.pendingToken=c.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return Gs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Gs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gs(e,n)}buildRequest(){const e={requestUri:WT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ma(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa extends Ay{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends wa{constructor(){super("facebook.com")}static credential(e){return Wi._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kr.credential(e.oauthAccessToken)}catch{return null}}}Kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends wa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wi._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Qr.credential(n,s)}catch{return null}}}Qr.GOOGLE_SIGN_IN_METHOD="google.com";Qr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends wa{constructor(){super("github.com")}static credential(e){return Wi._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xr.credential(e.oauthAccessToken)}catch{return null}}}Xr.GITHUB_SIGN_IN_METHOD="github.com";Xr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends wa{constructor(){super("twitter.com")}static credential(e,n){return Wi._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Yr.credential(n,s)}catch{return null}}}Yr.TWITTER_SIGN_IN_METHOD="twitter.com";Yr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qT(i,e){return uy(i,"POST","/v1/accounts:signUp",Du(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,a=!1){const c=await gr._fromIdTokenResponse(e,s,a),d=Om(s);return new oi({user:c,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const a=Om(s);return new oi({user:e,providerId:a,_tokenResponse:s,operationType:n})}}function Om(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GT(i){var e;if(pr(i.app))return Promise.reject(ni(i));const n=xu(i);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new oi({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await qT(n,{returnSecureToken:!0}),a=await oi._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu extends wr{constructor(e,n,s,a){var c;super(n.code,n.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,gu.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,a){return new gu(e,n,s,a)}}function Ry(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?gu._fromErrorAndOperation(i,c,e,s):c})}async function KT(i,e,n=!1){const s=await fa(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return oi._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QT(i,e,n=!1){const{auth:s}=i;if(pr(s.app))return Promise.reject(ni(s));const a="reauthenticate";try{const c=await fa(i,Ry(s,a,e,i),n);fe(c.idToken,s,"internal-error");const d=yd(c.idToken);fe(d,s,"internal-error");const{sub:g}=d;return fe(i.uid===g,s,"user-mismatch"),oi._forOperation(i,a,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&_r(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XT(i,e,n=!1){if(pr(i.app))return Promise.reject(ni(i));const s="signIn",a=await Ry(i,s,e),c=await oi._fromIdTokenResponse(i,s,a);return n||await i._updateCurrentUser(c.user),c}function YT(i,e,n,s){return Qt(i).onIdTokenChanged(e,n,s)}function JT(i,e,n){return Qt(i).beforeAuthStateChanged(e,n)}const yu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yu,"1"),this.storage.removeItem(yu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=1e3,e1=10;class Cy extends ky{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),a=this.localCache[n];s!==a&&e(n,a,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,g,y)=>{this.notifyListeners(d,y)});return}const s=e.key;n?this.detachListener():this.stopPolling();const a=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},c=this.storage.getItem(s);NT()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,e1):a()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},ZT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cy.type="LOCAL";const t1=Cy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py extends ky{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Py.type="SESSION";const Ny=Py;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const s=new Ou(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:a,data:c}=n.data,d=this.handlersMap[a];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const g=Array.from(d).map(async E=>E(n.origin,c)),y=await n1(g);n.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:y})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ou.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let c,d;return new Promise((g,y)=>{const E=Ed("",20);a.port1.start();const R=setTimeout(()=>{y(new Error("unsupported_event"))},s);d={messageChannel:a,onMessage(x){const b=x;if(b.data.eventId===E)switch(b.data.status){case"ack":clearTimeout(R),c=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g(b.data.response);break;default:clearTimeout(R),clearTimeout(c),y(new Error("invalid_response"));break}}},this.handlers.add(d),a.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:E,data:n},[a.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(){return window}function i1(i){Gn().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(){return typeof Gn().WorkerGlobalScope<"u"&&typeof Gn().importScripts=="function"}async function s1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function o1(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function a1(){return Dy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy="firebaseLocalStorageDb",l1=1,vu="firebaseLocalStorage",Oy="fbase_key";class Ta{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vu(i,e){return i.transaction([vu],e?"readwrite":"readonly").objectStore(vu)}function u1(){const i=indexedDB.deleteDatabase(xy);return new Ta(i).toPromise()}function bh(){const i=indexedDB.open(xy,l1);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(vu,{keyPath:Oy})}catch(a){n(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(vu)?e(s):(s.close(),await u1(),e(await bh()))})})}async function Vm(i,e,n){const s=Vu(i,!0).put({[Oy]:e,value:n});return new Ta(s).toPromise()}async function c1(i,e){const n=Vu(i,!1).get(e),s=await new Ta(n).toPromise();return s===void 0?null:s.value}function Lm(i,e){const n=Vu(i,!0).delete(e);return new Ta(n).toPromise()}const h1=800,d1=3;class Vy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>d1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ou._getInstance(a1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await s1(),!this.activeServiceWorker)return;this.sender=new r1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||o1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bh();return await Vm(e,yu,"1"),await Lm(e,yu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Vm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>c1(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const c=Vu(a,!1).getAll();return new Ta(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:c}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(c)&&(this.notifyListeners(a,c),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),h1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vy.type="LOCAL";const f1=Vy;new Ea(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(i,e){return e?yr(e):(fe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd extends Sy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function m1(i){return XT(i.auth,new wd(i),i.bypassAuthState)}function g1(i){const{auth:e,user:n}=i;return fe(n,e,"internal-error"),QT(n,new wd(i),i.bypassAuthState)}async function y1(i){const{auth:e,user:n}=i;return fe(n,e,"internal-error"),KT(n,new wd(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,n,s,a,c=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:a,tenantId:c,error:d,type:g}=e;if(d){this.reject(d);return}const y={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(y))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return m1;case"linkViaPopup":case"linkViaRedirect":return y1;case"reauthViaPopup":case"reauthViaRedirect":return g1;default:_r(this.auth,"internal-error")}}resolve(e){Er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=new Ea(2e3,1e4);class $s extends Ly{constructor(e,n,s,a,c){super(e,n,a,c),this.provider=s,this.authWindow=null,this.pollId=null,$s.currentPopupAction&&$s.currentPopupAction.cancel(),$s.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Er(this.filter.length===1,"Popup operations only handle one event");const e=Ed();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$s.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,v1.get())};e()}}$s.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1="pendingRedirect",Yl=new Map;class E1 extends Ly{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Yl.get(this.auth._key());if(!e){try{const s=await w1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Yl.set(this.auth._key(),e)}return this.bypassAuthState||Yl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function w1(i,e){const n=S1(e),s=I1(i);if(!await s._isAvailable())return!1;const a=await s._get(n)==="true";return await s._remove(n),a}function T1(i,e){Yl.set(i._key(),e)}function I1(i){return yr(i._redirectPersistence)}function S1(i){return Xl(_1,i.config.apiKey,i.name)}async function A1(i,e,n=!1){if(pr(i.app))return Promise.reject(ni(i));const s=xu(i),a=p1(s,e),d=await new E1(s,a,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=10*60*1e3;class k1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!C1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!My(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(qn(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=R1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mm(e))}saveEventToCache(e){this.cachedEventUids.add(Mm(e)),this.lastProcessedEventTime=Date.now()}}function Mm(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function My({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function C1(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return My(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P1(i,e={}){return no(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,D1=/^https?/;async function x1(i){if(i.config.emulator)return;const{authorizedDomains:e}=await P1(i);for(const n of e)try{if(O1(n))return}catch{}_r(i,"unauthorized-domain")}function O1(i){const e=Fh(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!D1.test(n))return!1;if(N1.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1=new Ea(3e4,6e4);function Fm(){const i=Gn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function L1(i){return new Promise((e,n)=>{var s,a,c;function d(){Fm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fm(),n(qn(i,"network-request-failed"))},timeout:V1.get()})}if(!((a=(s=Gn().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((c=Gn().gapi)===null||c===void 0)&&c.load)d();else{const g=bT("iframefcb");return Gn()[g]=()=>{gapi.load?d():n(qn(i,"network-request-failed"))},FT(`${UT()}?onload=${g}`).catch(y=>n(y))}}).catch(e=>{throw Jl=null,e})}let Jl=null;function M1(i){return Jl=Jl||L1(i),Jl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1=new Ea(5e3,15e3),U1="__/auth/iframe",b1="emulator/auth/iframe",j1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},z1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function B1(i){const e=i.config;fe(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?gd(e,b1):`https://${i.config.authDomain}/${U1}`,s={apiKey:e.apiKey,appName:i.name,v:eo},a=z1.get(i.config.apiHost);a&&(s.eid=a);const c=i._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${ma(s).slice(1)}`}async function $1(i){const e=await M1(i),n=Gn().gapi;return fe(n,i,"internal-error"),e.open({where:document.body,url:B1(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:j1,dontclear:!0},s=>new Promise(async(a,c)=>{await s.restyle({setHideOnLeave:!1});const d=qn(i,"network-request-failed"),g=Gn().setTimeout(()=>{c(d)},F1.get());function y(){Gn().clearTimeout(g),a(s)}s.ping(y).then(y,()=>{c(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},W1=500,q1=600,G1="_blank",K1="http://localhost";class Um{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Q1(i,e,n,s=W1,a=q1){const c=Math.max((window.screen.availHeight-a)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let g="";const y=Object.assign(Object.assign({},H1),{width:s.toString(),height:a.toString(),top:c,left:d}),E=Lt().toLowerCase();n&&(g=gy(E)?G1:n),py(E)&&(e=e||K1,y.scrollbars="yes");const R=Object.entries(y).reduce((b,[K,Q])=>`${b}${K}=${Q},`,"");if(PT(E)&&g!=="_self")return X1(e||"",g),new Um(null);const x=window.open(e||"",g,R);fe(x,i,"popup-blocked");try{x.focus()}catch{}return new Um(x)}function X1(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1="__/auth/handler",J1="emulator/auth/handler",Z1=encodeURIComponent("fac");async function bm(i,e,n,s,a,c){fe(i.config.authDomain,i,"auth-domain-config-required"),fe(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:eo,eventId:a};if(e instanceof Ay){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",I_(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[R,x]of Object.entries({}))d[R]=x}if(e instanceof wa){const R=e.getScopes().filter(x=>x!=="");R.length>0&&(d.scopes=R.join(","))}i.tenantId&&(d.tid=i.tenantId);const g=d;for(const R of Object.keys(g))g[R]===void 0&&delete g[R];const y=await i._getAppCheckToken(),E=y?`#${Z1}=${encodeURIComponent(y)}`:"";return`${eI(i)}?${ma(g).slice(1)}${E}`}function eI({config:i}){return i.emulator?gd(i,J1):`https://${i.authDomain}/${Y1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="webStorageSupport";class tI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ny,this._completeRedirectFn=A1,this._overrideRedirectResult=T1}async _openPopup(e,n,s,a){var c;Er((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const d=await bm(e,n,s,Fh(),a);return Q1(e,d,Ed())}async _openRedirect(e,n,s,a){await this._originValidation(e);const c=await bm(e,n,s,Fh(),a);return i1(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:c}=this.eventManagers[n];return a?Promise.resolve(a):(Er(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await $1(e),s=new k1(e);return n.register("authEvent",a=>(fe(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wh,{type:wh},a=>{var c;const d=(c=a==null?void 0:a[0])===null||c===void 0?void 0:c[wh];d!==void 0&&n(!!d),_r(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=x1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return wy()||my()||vd()}}const nI=tI;var jm="@firebase/auth",zm="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sI(i){Ks(new ji("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:d,authDomain:g}=s.options;fe(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:d,authDomain:g,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ty(i)},E=new LT(s,a,c,y);return zT(E,n),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ks(new ji("auth-internal",e=>{const n=xu(e.getProvider("auth").getImmediate());return(s=>new rI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ei(jm,zm,iI(i)),ei(jm,zm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=5*60,aI=Ym("authIdTokenMaxAge")||oI;let Bm=null;const lI=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>aI)return;const a=n==null?void 0:n.token;Bm!==a&&(Bm=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function uI(i=tg()){const e=Hh(i,"auth");if(e.isInitialized())return e.getImmediate();const n=jT(i,{popupRedirectResolver:nI,persistence:[f1,t1,Ny]}),s=Ym("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const d=lI(c.toString());JT(n,d,()=>d(n.currentUser)),YT(n,g=>d(g))}}const a=Qm("auth");return a&&BT(n,`http://${a}`),n}function cI(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}MT({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const c=qn("internal-error");c.customData=a,n(c)},s.type="text/javascript",s.charset="UTF-8",cI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sI("Browser");const hI=()=>{const i=Ge.useRef(null),e=Ge.useRef(null),n=Ge.useRef(null),[s,a]=Ge.useState({x:0,y:0});return Ge.useEffect(()=>{const c=d=>{if(!i.current)return;const g=i.current.getBoundingClientRect(),y=g.left+g.width/2,E=g.top+g.height/2;a({x:d.clientX-y,y:d.clientY-E})};return window.addEventListener("mousemove",c),()=>window.removeEventListener("mousemove",c)},[]),Ge.useEffect(()=>{if(!e.current||!n.current)return;const c=10,d=Math.atan2(s.y,s.x),g=Math.min(Math.hypot(s.x,s.y)/100,1),y=Math.cos(d)*c*g,E=Math.sin(d)*c*g;e.current.style.transform=`translate(${y}px, ${E}px)`,n.current.style.transform=`translate(${y}px, ${E}px)`},[s]),oe.jsx("div",{className:"w-64 h-64 md:w-96 md:h-96",children:oe.jsxs("svg",{ref:i,viewBox:"0 0 400 400",className:"w-full h-full",children:[oe.jsx("defs",{children:oe.jsxs("linearGradient",{id:"faceGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[oe.jsx("stop",{offset:"0%",stopColor:"#FFE0B2"}),oe.jsx("stop",{offset:"100%",stopColor:"#FFCC80"})]})}),oe.jsx("path",{d:`M200 350 
             C 280 350, 350 280, 350 200
             C 350 120, 280 50, 200 50
             C 120 50, 50 120, 50 200
             C 50 280, 120 350, 200 350`,fill:"url(#faceGradient)",stroke:"#000000",strokeWidth:"2"}),oe.jsx("ellipse",{cx:"150",cy:"180",rx:"30",ry:"25",fill:"#FFFFFF",stroke:"#000000",strokeWidth:"2"}),oe.jsx("ellipse",{cx:"250",cy:"180",rx:"30",ry:"25",fill:"#FFFFFF",stroke:"#000000",strokeWidth:"2"}),oe.jsxs("g",{ref:e,children:[oe.jsx("circle",{cx:"150",cy:"180",r:"15",fill:"#FFFFFF"}),oe.jsx("circle",{cx:"150",cy:"180",r:"10",fill:"#4B89DC"}),oe.jsx("circle",{cx:"150",cy:"180",r:"5",fill:"#000000"}),oe.jsx("circle",{cx:"145",cy:"175",r:"3",fill:"#FFFFFF"})]}),oe.jsxs("g",{ref:n,children:[oe.jsx("circle",{cx:"250",cy:"180",r:"15",fill:"#FFFFFF"}),oe.jsx("circle",{cx:"250",cy:"180",r:"10",fill:"#4B89DC"}),oe.jsx("circle",{cx:"250",cy:"180",r:"5",fill:"#000000"}),oe.jsx("circle",{cx:"245",cy:"175",r:"3",fill:"#FFFFFF"})]}),oe.jsx("path",{d:`M200 200 
             C 205 220, 215 230, 200 240
             C 185 230, 195 220, 200 200`,fill:"#FFD0A1"}),oe.jsx("path",{d:`M160 280 
             C 180 300, 220 300, 240 280`,fill:"none",stroke:"#000000",strokeWidth:"2",strokeLinecap:"round"})]})})},dI="https://us-central1-my-portfolio-4ace3.cloudfunctions.net/chat",js=50,$m=({text:i,isUser:e,isLoading:n})=>{const[s,a]=Ge.useState(!e);return oe.jsx("div",{className:`flex ${e?"justify-end":"justify-start"} mb-4`,children:oe.jsx("div",{className:`rounded-2xl px-4 py-2 max-w-[80%] ${e?"bg-blue-500 text-white":"bg-gray-100"}`,children:n?oe.jsxs("div",{className:"flex space-x-2 justify-center",children:[oe.jsx("div",{className:"w-2 h-2 bg-gray-500 rounded-full animate-bounce"}),oe.jsx("div",{className:"w-2 h-2 bg-gray-500 rounded-full animate-bounce",style:{animationDelay:"0.2s"}}),oe.jsx("div",{className:"w-2 h-2 bg-gray-500 rounded-full animate-bounce",style:{animationDelay:"0.4s"}})]}):oe.jsx("p",{className:"text-sm md:text-base",children:e?i:s?oe.jsx(fI,{text:i,onComplete:()=>a(!1)}):i})})})},fI=({text:i,onComplete:e})=>{const[n,s]=Ge.useState(""),[a,c]=Ge.useState(0);return Ge.useEffect(()=>{if(a<i.length){const d=setTimeout(()=>{s(g=>g+i[a]),c(a+1)},20);return()=>clearTimeout(d)}else e&&e()},[a,i,e]),oe.jsx("span",{children:n})},pI=({text:i,onClick:e,disabled:n})=>oe.jsxs("button",{onClick:e,disabled:n,className:`px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors 
                text-sm whitespace-nowrap flex items-center gap-2 
                ${n?"opacity-50 cursor-not-allowed":""}`,children:[i,oe.jsx(Jv,{size:16})]}),mI=()=>oe.jsx("div",{className:"bg-gradient-to-r from-yellow-100 to-yellow-50 border-b border-yellow-200 p-6 mb-8 rounded-lg shadow-sm",children:oe.jsxs("div",{className:"max-w-4xl mx-auto",children:[oe.jsxs("div",{className:"flex items-center justify-center gap-3 mb-3",children:[oe.jsx(Zv,{className:"text-yellow-600",size:24}),oe.jsx("h1",{className:"text-2xl font-semibold text-yellow-800",children:"Website Under Construction"})]}),oe.jsx("p",{className:"text-center text-yellow-700",children:"Expected completion: February 5th, 2025"}),oe.jsx("p",{className:"text-center text-yellow-600 mt-2",children:"In the meantime, feel free to chat with my AI assistant below - they have all the information you need about my experience, projects, and skills!"})]})}),gI=()=>{const[i,e]=Ge.useState([{text:"👋 Hello! I'm Michael's AI assistant. I can tell you all about his experience at Meta, his work in full-stack development, and his projects. What would you like to know?",isUser:!1,timestamp:new Date().toISOString()}]),[n,s]=Ge.useState(""),[a,c]=Ge.useState(!1),[d,g]=Ge.useState(null),[y,E]=Ge.useState(0),[R,x]=Ge.useState(null),b=Ge.useRef(null),K=["Tell me about your experience","Show me your favorite project","What are your skills?","How can I contact you?"];Ge.useEffect(()=>{(async()=>{try{const H=await GT(wI);x(H.user.uid)}catch(H){console.error("Error initializing auth:",H)}})()},[]);const Q=async X=>{if(!X.trim()||a||!R)return;const H={text:X,isUser:!0,timestamp:new Date().toISOString()};e(me=>[...me,H]),s(""),c(!0);try{const me=i.concat(H).map(Oe=>({role:Oe.isUser?"user":"assistant",content:Oe.text})),pe=await fetch(dI,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:me})});if(!pe.ok)throw new Error(`HTTP error! status: ${pe.status}`);const ye={text:(await pe.json()).message,isUser:!1,timestamp:new Date().toISOString()};if(c(!1),e(Oe=>[...Oe,ye]),d)await hT(Gg(Hm,"conversations",d),{messages:[...i,H,ye],messageCount:y+1,lastUpdated:Am(),userId:R});else{const Oe=await dT(Zw(Hm,"conversations"),{userId:R,startedAt:Am(),messages:[H,ye],messageCount:1});g(Oe.id)}}catch(me){console.error("Error:",me),c(!1);const pe={text:"I apologize, but I'm having trouble connecting. Please try again later.",isUser:!1,timestamp:new Date().toISOString()};e(ge=>[...ge,pe])}};return oe.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4",children:oe.jsxs("div",{className:"max-w-4xl mx-auto",children:[oe.jsx(mI,{}),oe.jsx("div",{className:"flex justify-center mb-8",children:oe.jsx(hI,{})}),oe.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-4",children:[oe.jsxs("div",{className:"h-96 overflow-y-auto mb-4 p-4",children:[i.map((X,H)=>oe.jsx($m,{text:X.text,isUser:X.isUser},H)),a&&oe.jsx($m,{text:"",isUser:!1,isLoading:!0}),oe.jsx("div",{ref:b})]}),oe.jsx("div",{className:"flex gap-2 mb-4 overflow-x-auto pb-2",children:K.map((X,H)=>oe.jsx(pI,{text:X,onClick:()=>Q(X),disabled:a||y>=js},H))}),oe.jsxs("div",{className:"flex gap-2",children:[oe.jsx("input",{type:"text",value:n,onChange:X=>s(X.target.value),onKeyPress:X=>X.key==="Enter"&&Q(n),placeholder:y>=js?"Message limit reached":"Type your message...",className:"flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500",disabled:a||y>=js}),oe.jsx("button",{onClick:()=>Q(n),disabled:a||!n.trim()||y>=js,className:`p-2 rounded-full bg-blue-500 text-white transition-colors ${a||!n.trim()||y>=js?"opacity-50 cursor-not-allowed":"hover:bg-blue-600"}`,children:oe.jsx(e_,{size:20})})]}),y>0&&oe.jsxs("div",{className:"text-xs text-gray-500 mt-2 text-right",children:["Messages: ",y,"/",js]})]})]})})};function yI(){return oe.jsx(gI,{})}var vI="firebase",_I="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ei(vI,_I,"app");const EI={apiKey:"AIzaSyBoyReWueRMTIIbijTbsRBrqbb5t2uaa3I",authDomain:"my-portfolio-4ace3.firebaseapp.com",projectId:"my-portfolio-4ace3",storageBucket:"my-portfolio-4ace3.firebasestorage.app",messagingSenderId:"474958339655",appId:"1:474958339655:web:2a2c56a69ea4d682eddb62",measurementId:"G-QX3J7BJKWZ"},Fy=eg(EI),Hm=eT(Fy),wI=uI(Fy);Kv.createRoot(document.getElementById("root")).render(oe.jsx(Ge.StrictMode,{children:oe.jsx(yI,{})}));
