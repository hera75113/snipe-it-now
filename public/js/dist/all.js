!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=63)}([function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(n[s]=!0)}for(r=0;r<e.length;r++){var o=e[r];"number"==typeof o[0]&&n[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),t.push(o))}},t}},function(t,e){t.exports=function(t,e,i,n){var r,s=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(r=t,s=t.default);var a="function"==typeof s?s.options:s;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),i&&(a._scopeId=i),n){var l=Object.create(a.computed||null);Object.keys(n).forEach(function(t){var e=n[t];l[t]=function(){return e}}),a.computed=l}return{esModule:r,exports:s,options:a}}},function(t,e,i){function n(t){for(var e=0;e<t.length;e++){var i=t[e],n=c[i.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](i.parts[r]);for(;r<i.parts.length;r++)n.parts.push(s(i.parts[r]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var o=[],r=0;r<i.parts.length;r++)o.push(s(i.parts[r]));c[i.id]={id:i.id,refs:1,parts:o}}}}function r(){var t=document.createElement("style");return t.type="text/css",h.appendChild(t),t}function s(t){var e,i,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(f)return g;n.parentNode.removeChild(n)}if(m){var s=p++;n=d||(d=r()),e=o.bind(null,n,s,!1),i=o.bind(null,n,s,!0)}else n=r(),e=a.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function o(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=v(e,r);else{var s=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function a(t,e){var i=e.css,n=e.media,r=e.sourceMap;if(n&&t.setAttribute("media",n),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=i(58),c={},h=l&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,f=!1,g=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i){f=i;var r=u(t,e);return n(r),function(e){for(var i=[],s=0;s<r.length;s++){var o=r[s],a=c[o.id];a.refs--,i.push(a)}e?(r=u(t,e),n(r)):r=[];for(var s=0;s<i.length;s++){var a=i[s];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete c[a.id]}}}};var v=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e,i){var n,r;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
!function(e,i){"use strict";"object"==typeof t&&"object"==typeof t.exports?t.exports=e.document?i(e,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return i(t)}:i(e)}("undefined"!=typeof window?window:this,function(i,s){"use strict";function o(t,e){e=e||ot;var i=e.createElement("script");i.text=t,e.head.appendChild(i).parentNode.removeChild(i)}function a(t){var e=!!t&&"length"in t&&t.length,i=_t.type(t);return"function"!==i&&!_t.isWindow(t)&&("array"===i||0===e||"number"==typeof e&&e>0&&e-1 in t)}function l(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}function u(t,e,i){return _t.isFunction(e)?_t.grep(t,function(t,n){return!!e.call(t,n,t)!==i}):e.nodeType?_t.grep(t,function(t){return t===e!==i}):"string"!=typeof e?_t.grep(t,function(t){return ht.call(e,t)>-1!==i}):At.test(e)?_t.filter(e,t,i):(e=_t.filter(e,t),_t.grep(t,function(t){return ht.call(e,t)>-1!==i&&1===t.nodeType}))}function c(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}function h(t){var e={};return _t.each(t.match(Pt)||[],function(t,i){e[i]=!0}),e}function d(t){return t}function p(t){throw t}function f(t,e,i,n){var r;try{t&&_t.isFunction(r=t.promise)?r.call(t).done(e).fail(i):t&&_t.isFunction(r=t.then)?r.call(t,e,i):e.apply(void 0,[t].slice(n))}catch(t){i.apply(void 0,[t])}}function g(){ot.removeEventListener("DOMContentLoaded",g),i.removeEventListener("load",g),_t.ready()}function m(){this.expando=_t.expando+m.uid++}function v(t){return"true"===t||"false"!==t&&("null"===t?null:t===+t+""?+t:Ft.test(t)?JSON.parse(t):t)}function _(t,e,i){var n;if(void 0===i&&1===t.nodeType)if(n="data-"+e.replace(zt,"-$&").toLowerCase(),"string"==typeof(i=t.getAttribute(n))){try{i=v(i)}catch(t){}Lt.set(t,e,i)}else i=void 0;return i}function y(t,e,i,n){var r,s=1,o=20,a=n?function(){return n.cur()}:function(){return _t.css(t,e,"")},l=a(),u=i&&i[3]||(_t.cssNumber[e]?"":"px"),c=(_t.cssNumber[e]||"px"!==u&&+l)&&qt.exec(_t.css(t,e));if(c&&c[3]!==u){u=u||c[3],i=i||[],c=+l||1;do{s=s||".5",c/=s,_t.style(t,e,c+u)}while(s!==(s=a()/l)&&1!==s&&--o)}return i&&(c=+c||+l||0,r=i[1]?c+(i[1]+1)*i[2]:+i[2],n&&(n.unit=u,n.start=c,n.end=r)),r}function b(t){var e,i=t.ownerDocument,n=t.nodeName,r=Vt[n];return r||(e=i.body.appendChild(i.createElement(n)),r=_t.css(e,"display"),e.parentNode.removeChild(e),"none"===r&&(r="block"),Vt[n]=r,r)}function w(t,e){for(var i,n,r=[],s=0,o=t.length;s<o;s++)n=t[s],n.style&&(i=n.style.display,e?("none"===i&&(r[s]=Rt.get(n,"display")||null,r[s]||(n.style.display="")),""===n.style.display&&Bt(n)&&(r[s]=b(n))):"none"!==i&&(r[s]="none",Rt.set(n,"display",i)));for(s=0;s<o;s++)null!=r[s]&&(t[s].style.display=r[s]);return t}function x(t,e){var i;return i=void 0!==t.getElementsByTagName?t.getElementsByTagName(e||"*"):void 0!==t.querySelectorAll?t.querySelectorAll(e||"*"):[],void 0===e||e&&l(t,e)?_t.merge([t],i):i}function C(t,e){for(var i=0,n=t.length;i<n;i++)Rt.set(t[i],"globalEval",!e||Rt.get(e[i],"globalEval"))}function k(t,e,i,n,r){for(var s,o,a,l,u,c,h=e.createDocumentFragment(),d=[],p=0,f=t.length;p<f;p++)if((s=t[p])||0===s)if("object"===_t.type(s))_t.merge(d,s.nodeType?[s]:s);else if(Jt.test(s)){for(o=o||h.appendChild(e.createElement("div")),a=(Xt.exec(s)||["",""])[1].toLowerCase(),l=Zt[a]||Zt._default,o.innerHTML=l[1]+_t.htmlPrefilter(s)+l[2],c=l[0];c--;)o=o.lastChild;_t.merge(d,o.childNodes),o=h.firstChild,o.textContent=""}else d.push(e.createTextNode(s));for(h.textContent="",p=0;s=d[p++];)if(n&&_t.inArray(s,n)>-1)r&&r.push(s);else if(u=_t.contains(s.ownerDocument,s),o=x(h.appendChild(s),"script"),u&&C(o),i)for(c=0;s=o[c++];)Gt.test(s.type||"")&&i.push(s);return h}function T(){return!0}function D(){return!1}function S(){try{return ot.activeElement}catch(t){}}function A(t,e,i,n,r,s){var o,a;if("object"==typeof e){"string"!=typeof i&&(n=n||i,i=void 0);for(a in e)A(t,a,i,n,e[a],s);return t}if(null==n&&null==r?(r=i,n=i=void 0):null==r&&("string"==typeof i?(r=n,n=void 0):(r=n,n=i,i=void 0)),!1===r)r=D;else if(!r)return t;return 1===s&&(o=r,r=function(t){return _t().off(t),o.apply(this,arguments)},r.guid=o.guid||(o.guid=_t.guid++)),t.each(function(){_t.event.add(this,e,r,n,i)})}function E(t,e){return l(t,"table")&&l(11!==e.nodeType?e:e.firstChild,"tr")?_t(">tbody",t)[0]||t:t}function I(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function $(t){var e=oe.exec(t.type);return e?t.type=e[1]:t.removeAttribute("type"),t}function O(t,e){var i,n,r,s,o,a,l,u;if(1===e.nodeType){if(Rt.hasData(t)&&(s=Rt.access(t),o=Rt.set(e,s),u=s.events)){delete o.handle,o.events={};for(r in u)for(i=0,n=u[r].length;i<n;i++)_t.event.add(e,r,u[r][i])}Lt.hasData(t)&&(a=Lt.access(t),l=_t.extend({},a),Lt.set(e,l))}}function P(t,e){var i=e.nodeName.toLowerCase();"input"===i&&Kt.test(t.type)?e.checked=t.checked:"input"!==i&&"textarea"!==i||(e.defaultValue=t.defaultValue)}function N(t,e,i,n){e=ut.apply([],e);var r,s,a,l,u,c,h=0,d=t.length,p=d-1,f=e[0],g=_t.isFunction(f);if(g||d>1&&"string"==typeof f&&!vt.checkClone&&se.test(f))return t.each(function(r){var s=t.eq(r);g&&(e[0]=f.call(this,r,s.html())),N(s,e,i,n)});if(d&&(r=k(e,t[0].ownerDocument,!1,t,n),s=r.firstChild,1===r.childNodes.length&&(r=s),s||n)){for(a=_t.map(x(r,"script"),I),l=a.length;h<d;h++)u=r,h!==p&&(u=_t.clone(u,!0,!0),l&&_t.merge(a,x(u,"script"))),i.call(t[h],u,h);if(l)for(c=a[a.length-1].ownerDocument,_t.map(a,$),h=0;h<l;h++)u=a[h],Gt.test(u.type||"")&&!Rt.access(u,"globalEval")&&_t.contains(c,u)&&(u.src?_t._evalUrl&&_t._evalUrl(u.src):o(u.textContent.replace(ae,""),c))}return t}function M(t,e,i){for(var n,r=e?_t.filter(e,t):t,s=0;null!=(n=r[s]);s++)i||1!==n.nodeType||_t.cleanData(x(n)),n.parentNode&&(i&&_t.contains(n.ownerDocument,n)&&C(x(n,"script")),n.parentNode.removeChild(n));return t}function j(t,e,i){var n,r,s,o,a=t.style;return i=i||ce(t),i&&(o=i.getPropertyValue(e)||i[e],""!==o||_t.contains(t.ownerDocument,t)||(o=_t.style(t,e)),!vt.pixelMarginRight()&&ue.test(o)&&le.test(e)&&(n=a.width,r=a.minWidth,s=a.maxWidth,a.minWidth=a.maxWidth=a.width=o,o=i.width,a.width=n,a.minWidth=r,a.maxWidth=s)),void 0!==o?o+"":o}function H(t,e){return{get:function(){return t()?void delete this.get:(this.get=e).apply(this,arguments)}}}function R(t){if(t in me)return t;for(var e=t[0].toUpperCase()+t.slice(1),i=ge.length;i--;)if((t=ge[i]+e)in me)return t}function L(t){var e=_t.cssProps[t];return e||(e=_t.cssProps[t]=R(t)||t),e}function F(t,e,i){var n=qt.exec(e);return n?Math.max(0,n[2]-(i||0))+(n[3]||"px"):e}function z(t,e,i,n,r){var s,o=0;for(s=i===(n?"border":"content")?4:"width"===e?1:0;s<4;s+=2)"margin"===i&&(o+=_t.css(t,i+Ut[s],!0,r)),n?("content"===i&&(o-=_t.css(t,"padding"+Ut[s],!0,r)),"margin"!==i&&(o-=_t.css(t,"border"+Ut[s]+"Width",!0,r))):(o+=_t.css(t,"padding"+Ut[s],!0,r),"padding"!==i&&(o+=_t.css(t,"border"+Ut[s]+"Width",!0,r)));return o}function W(t,e,i){var n,r=ce(t),s=j(t,e,r),o="border-box"===_t.css(t,"boxSizing",!1,r);return ue.test(s)?s:(n=o&&(vt.boxSizingReliable()||s===t.style[e]),"auto"===s&&(s=t["offset"+e[0].toUpperCase()+e.slice(1)]),(s=parseFloat(s)||0)+z(t,e,i||(o?"border":"content"),n,r)+"px")}function q(t,e,i,n,r){return new q.prototype.init(t,e,i,n,r)}function U(){_e&&(!1===ot.hidden&&i.requestAnimationFrame?i.requestAnimationFrame(U):i.setTimeout(U,_t.fx.interval),_t.fx.tick())}function B(){return i.setTimeout(function(){ve=void 0}),ve=_t.now()}function Y(t,e){var i,n=0,r={height:t};for(e=e?1:0;n<4;n+=2-e)i=Ut[n],r["margin"+i]=r["padding"+i]=t;return e&&(r.opacity=r.width=t),r}function V(t,e,i){for(var n,r=(G.tweeners[e]||[]).concat(G.tweeners["*"]),s=0,o=r.length;s<o;s++)if(n=r[s].call(i,e,t))return n}function K(t,e,i){var n,r,s,o,a,l,u,c,h="width"in e||"height"in e,d=this,p={},f=t.style,g=t.nodeType&&Bt(t),m=Rt.get(t,"fxshow");i.queue||(o=_t._queueHooks(t,"fx"),null==o.unqueued&&(o.unqueued=0,a=o.empty.fire,o.empty.fire=function(){o.unqueued||a()}),o.unqueued++,d.always(function(){d.always(function(){o.unqueued--,_t.queue(t,"fx").length||o.empty.fire()})}));for(n in e)if(r=e[n],ye.test(r)){if(delete e[n],s=s||"toggle"===r,r===(g?"hide":"show")){if("show"!==r||!m||void 0===m[n])continue;g=!0}p[n]=m&&m[n]||_t.style(t,n)}if((l=!_t.isEmptyObject(e))||!_t.isEmptyObject(p)){h&&1===t.nodeType&&(i.overflow=[f.overflow,f.overflowX,f.overflowY],u=m&&m.display,null==u&&(u=Rt.get(t,"display")),c=_t.css(t,"display"),"none"===c&&(u?c=u:(w([t],!0),u=t.style.display||u,c=_t.css(t,"display"),w([t]))),("inline"===c||"inline-block"===c&&null!=u)&&"none"===_t.css(t,"float")&&(l||(d.done(function(){f.display=u}),null==u&&(c=f.display,u="none"===c?"":c)),f.display="inline-block")),i.overflow&&(f.overflow="hidden",d.always(function(){f.overflow=i.overflow[0],f.overflowX=i.overflow[1],f.overflowY=i.overflow[2]})),l=!1;for(n in p)l||(m?"hidden"in m&&(g=m.hidden):m=Rt.access(t,"fxshow",{display:u}),s&&(m.hidden=!g),g&&w([t],!0),d.done(function(){g||w([t]),Rt.remove(t,"fxshow");for(n in p)_t.style(t,n,p[n])})),l=V(g?m[n]:0,n,d),n in m||(m[n]=l.start,g&&(l.end=l.start,l.start=0))}}function X(t,e){var i,n,r,s,o;for(i in t)if(n=_t.camelCase(i),r=e[n],s=t[i],Array.isArray(s)&&(r=s[1],s=t[i]=s[0]),i!==n&&(t[n]=s,delete t[i]),(o=_t.cssHooks[n])&&"expand"in o){s=o.expand(s),delete t[n];for(i in s)i in t||(t[i]=s[i],e[i]=r)}else e[n]=r}function G(t,e,i){var n,r,s=0,o=G.prefilters.length,a=_t.Deferred().always(function(){delete l.elem}),l=function(){if(r)return!1;for(var e=ve||B(),i=Math.max(0,u.startTime+u.duration-e),n=i/u.duration||0,s=1-n,o=0,l=u.tweens.length;o<l;o++)u.tweens[o].run(s);return a.notifyWith(t,[u,s,i]),s<1&&l?i:(l||a.notifyWith(t,[u,1,0]),a.resolveWith(t,[u]),!1)},u=a.promise({elem:t,props:_t.extend({},e),opts:_t.extend(!0,{specialEasing:{},easing:_t.easing._default},i),originalProperties:e,originalOptions:i,startTime:ve||B(),duration:i.duration,tweens:[],createTween:function(e,i){var n=_t.Tween(t,u.opts,e,i,u.opts.specialEasing[e]||u.opts.easing);return u.tweens.push(n),n},stop:function(e){var i=0,n=e?u.tweens.length:0;if(r)return this;for(r=!0;i<n;i++)u.tweens[i].run(1);return e?(a.notifyWith(t,[u,1,0]),a.resolveWith(t,[u,e])):a.rejectWith(t,[u,e]),this}}),c=u.props;for(X(c,u.opts.specialEasing);s<o;s++)if(n=G.prefilters[s].call(u,t,c,u.opts))return _t.isFunction(n.stop)&&(_t._queueHooks(u.elem,u.opts.queue).stop=_t.proxy(n.stop,n)),n;return _t.map(c,V,u),_t.isFunction(u.opts.start)&&u.opts.start.call(t,u),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),_t.fx.timer(_t.extend(l,{elem:t,anim:u,queue:u.opts.queue})),u}function Z(t){return(t.match(Pt)||[]).join(" ")}function J(t){return t.getAttribute&&t.getAttribute("class")||""}function Q(t,e,i,n){var r;if(Array.isArray(e))_t.each(e,function(e,r){i||Ie.test(t)?n(t,r):Q(t+"["+("object"==typeof r&&null!=r?e:"")+"]",r,i,n)});else if(i||"object"!==_t.type(e))n(t,e);else for(r in e)Q(t+"["+r+"]",e[r],i,n)}function tt(t){return function(e,i){"string"!=typeof e&&(i=e,e="*");var n,r=0,s=e.toLowerCase().match(Pt)||[];if(_t.isFunction(i))for(;n=s[r++];)"+"===n[0]?(n=n.slice(1)||"*",(t[n]=t[n]||[]).unshift(i)):(t[n]=t[n]||[]).push(i)}}function et(t,e,i,n){function r(a){var l;return s[a]=!0,_t.each(t[a]||[],function(t,a){var u=a(e,i,n);return"string"!=typeof u||o||s[u]?o?!(l=u):void 0:(e.dataTypes.unshift(u),r(u),!1)}),l}var s={},o=t===We;return r(e.dataTypes[0])||!s["*"]&&r("*")}function it(t,e){var i,n,r=_t.ajaxSettings.flatOptions||{};for(i in e)void 0!==e[i]&&((r[i]?t:n||(n={}))[i]=e[i]);return n&&_t.extend(!0,t,n),t}function nt(t,e,i){for(var n,r,s,o,a=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===n&&(n=t.mimeType||e.getResponseHeader("Content-Type"));if(n)for(r in a)if(a[r]&&a[r].test(n)){l.unshift(r);break}if(l[0]in i)s=l[0];else{for(r in i){if(!l[0]||t.converters[r+" "+l[0]]){s=r;break}o||(o=r)}s=s||o}if(s)return s!==l[0]&&l.unshift(s),i[s]}function rt(t,e,i,n){var r,s,o,a,l,u={},c=t.dataTypes.slice();if(c[1])for(o in t.converters)u[o.toLowerCase()]=t.converters[o];for(s=c.shift();s;)if(t.responseFields[s]&&(i[t.responseFields[s]]=e),!l&&n&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=s,s=c.shift())if("*"===s)s=l;else if("*"!==l&&l!==s){if(!(o=u[l+" "+s]||u["* "+s]))for(r in u)if(a=r.split(" "),a[1]===s&&(o=u[l+" "+a[0]]||u["* "+a[0]])){!0===o?o=u[r]:!0!==u[r]&&(s=a[0],c.unshift(a[1]));break}if(!0!==o)if(o&&t.throws)e=o(e);else try{e=o(e)}catch(t){return{state:"parsererror",error:o?t:"No conversion from "+l+" to "+s}}}return{state:"success",data:e}}var st=[],ot=i.document,at=Object.getPrototypeOf,lt=st.slice,ut=st.concat,ct=st.push,ht=st.indexOf,dt={},pt=dt.toString,ft=dt.hasOwnProperty,gt=ft.toString,mt=gt.call(Object),vt={},_t=function(t,e){return new _t.fn.init(t,e)},yt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bt=/^-ms-/,wt=/-([a-z])/g,xt=function(t,e){return e.toUpperCase()};_t.fn=_t.prototype={jquery:"3.2.1",constructor:_t,length:0,toArray:function(){return lt.call(this)},get:function(t){return null==t?lt.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var e=_t.merge(this.constructor(),t);return e.prevObject=this,e},each:function(t){return _t.each(this,t)},map:function(t){return this.pushStack(_t.map(this,function(e,i){return t.call(e,i,e)}))},slice:function(){return this.pushStack(lt.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,i=+t+(t<0?e:0);return this.pushStack(i>=0&&i<e?[this[i]]:[])},end:function(){return this.prevObject||this.constructor()},push:ct,sort:st.sort,splice:st.splice},_t.extend=_t.fn.extend=function(){var t,e,i,n,r,s,o=arguments[0]||{},a=1,l=arguments.length,u=!1;for("boolean"==typeof o&&(u=o,o=arguments[a]||{},a++),"object"==typeof o||_t.isFunction(o)||(o={}),a===l&&(o=this,a--);a<l;a++)if(null!=(t=arguments[a]))for(e in t)i=o[e],n=t[e],o!==n&&(u&&n&&(_t.isPlainObject(n)||(r=Array.isArray(n)))?(r?(r=!1,s=i&&Array.isArray(i)?i:[]):s=i&&_t.isPlainObject(i)?i:{},o[e]=_t.extend(u,s,n)):void 0!==n&&(o[e]=n));return o},_t.extend({expando:"jQuery"+("3.2.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===_t.type(t)},isWindow:function(t){return null!=t&&t===t.window},isNumeric:function(t){var e=_t.type(t);return("number"===e||"string"===e)&&!isNaN(t-parseFloat(t))},isPlainObject:function(t){var e,i;return!(!t||"[object Object]"!==pt.call(t))&&(!(e=at(t))||"function"==typeof(i=ft.call(e,"constructor")&&e.constructor)&&gt.call(i)===mt)},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?dt[pt.call(t)]||"object":typeof t},globalEval:function(t){o(t)},camelCase:function(t){return t.replace(bt,"ms-").replace(wt,xt)},each:function(t,e){var i,n=0;if(a(t))for(i=t.length;n<i&&!1!==e.call(t[n],n,t[n]);n++);else for(n in t)if(!1===e.call(t[n],n,t[n]))break;return t},trim:function(t){return null==t?"":(t+"").replace(yt,"")},makeArray:function(t,e){var i=e||[];return null!=t&&(a(Object(t))?_t.merge(i,"string"==typeof t?[t]:t):ct.call(i,t)),i},inArray:function(t,e,i){return null==e?-1:ht.call(e,t,i)},merge:function(t,e){for(var i=+e.length,n=0,r=t.length;n<i;n++)t[r++]=e[n];return t.length=r,t},grep:function(t,e,i){for(var n=[],r=0,s=t.length,o=!i;r<s;r++)!e(t[r],r)!==o&&n.push(t[r]);return n},map:function(t,e,i){var n,r,s=0,o=[];if(a(t))for(n=t.length;s<n;s++)null!=(r=e(t[s],s,i))&&o.push(r);else for(s in t)null!=(r=e(t[s],s,i))&&o.push(r);return ut.apply([],o)},guid:1,proxy:function(t,e){var i,n,r;if("string"==typeof e&&(i=t[e],e=t,t=i),_t.isFunction(t))return n=lt.call(arguments,2),r=function(){return t.apply(e||this,n.concat(lt.call(arguments)))},r.guid=t.guid=t.guid||_t.guid++,r},now:Date.now,support:vt}),"function"==typeof Symbol&&(_t.fn[Symbol.iterator]=st[Symbol.iterator]),_t.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){dt["[object "+e+"]"]=e.toLowerCase()});var Ct=/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
function(t){function e(t,e,i,n){var r,s,o,a,l,c,d,p=e&&e.ownerDocument,f=e?e.nodeType:9;if(i=i||[],"string"!=typeof t||!t||1!==f&&9!==f&&11!==f)return i;if(!n&&((e?e.ownerDocument||e:L)!==$&&I(e),e=e||$,P)){if(11!==f&&(l=gt.exec(t)))if(r=l[1]){if(9===f){if(!(o=e.getElementById(r)))return i;if(o.id===r)return i.push(o),i}else if(p&&(o=p.getElementById(r))&&H(e,o)&&o.id===r)return i.push(o),i}else{if(l[2])return G.apply(i,e.getElementsByTagName(t)),i;if((r=l[3])&&b.getElementsByClassName&&e.getElementsByClassName)return G.apply(i,e.getElementsByClassName(r)),i}if(b.qsa&&!U[t+" "]&&(!N||!N.test(t))){if(1!==f)p=e,d=t;else if("object"!==e.nodeName.toLowerCase()){for((a=e.getAttribute("id"))?a=a.replace(yt,bt):e.setAttribute("id",a=R),c=k(t),s=c.length;s--;)c[s]="#"+a+" "+h(c[s]);d=c.join(","),p=mt.test(t)&&u(e.parentNode)||e}if(d)try{return G.apply(i,p.querySelectorAll(d)),i}catch(t){}finally{a===R&&e.removeAttribute("id")}}}return D(t.replace(st,"$1"),e,i,n)}function i(){function t(i,n){return e.push(i+" ")>w.cacheLength&&delete t[e.shift()],t[i+" "]=n}var e=[];return t}function n(t){return t[R]=!0,t}function r(t){var e=$.createElement("fieldset");try{return!!t(e)}catch(t){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function s(t,e){for(var i=t.split("|"),n=i.length;n--;)w.attrHandle[i[n]]=e}function o(t,e){var i=e&&t,n=i&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;if(n)return n;if(i)for(;i=i.nextSibling;)if(i===e)return-1;return t?1:-1}function a(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&xt(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function l(t){return n(function(e){return e=+e,n(function(i,n){for(var r,s=t([],i.length,e),o=s.length;o--;)i[r=s[o]]&&(i[r]=!(n[r]=i[r]))})})}function u(t){return t&&void 0!==t.getElementsByTagName&&t}function c(){}function h(t){for(var e=0,i=t.length,n="";e<i;e++)n+=t[e].value;return n}function d(t,e,i){var n=e.dir,r=e.next,s=r||n,o=i&&"parentNode"===s,a=z++;return e.first?function(e,i,r){for(;e=e[n];)if(1===e.nodeType||o)return t(e,i,r);return!1}:function(e,i,l){var u,c,h,d=[F,a];if(l){for(;e=e[n];)if((1===e.nodeType||o)&&t(e,i,l))return!0}else for(;e=e[n];)if(1===e.nodeType||o)if(h=e[R]||(e[R]={}),c=h[e.uniqueID]||(h[e.uniqueID]={}),r&&r===e.nodeName.toLowerCase())e=e[n]||e;else{if((u=c[s])&&u[0]===F&&u[1]===a)return d[2]=u[2];if(c[s]=d,d[2]=t(e,i,l))return!0}return!1}}function p(t){return t.length>1?function(e,i,n){for(var r=t.length;r--;)if(!t[r](e,i,n))return!1;return!0}:t[0]}function f(t,i,n){for(var r=0,s=i.length;r<s;r++)e(t,i[r],n);return n}function g(t,e,i,n,r){for(var s,o=[],a=0,l=t.length,u=null!=e;a<l;a++)(s=t[a])&&(i&&!i(s,n,r)||(o.push(s),u&&e.push(a)));return o}function m(t,e,i,r,s,o){return r&&!r[R]&&(r=m(r)),s&&!s[R]&&(s=m(s,o)),n(function(n,o,a,l){var u,c,h,d=[],p=[],m=o.length,v=n||f(e||"*",a.nodeType?[a]:a,[]),_=!t||!n&&e?v:g(v,d,t,a,l),y=i?s||(n?t:m||r)?[]:o:_;if(i&&i(_,y,a,l),r)for(u=g(y,p),r(u,[],a,l),c=u.length;c--;)(h=u[c])&&(y[p[c]]=!(_[p[c]]=h));if(n){if(s||t){if(s){for(u=[],c=y.length;c--;)(h=y[c])&&u.push(_[c]=h);s(null,y=[],u,l)}for(c=y.length;c--;)(h=y[c])&&(u=s?J(n,h):d[c])>-1&&(n[u]=!(o[u]=h))}}else y=g(y===o?y.splice(m,y.length):y),s?s(null,o,y,l):G.apply(o,y)})}function v(t){for(var e,i,n,r=t.length,s=w.relative[t[0].type],o=s||w.relative[" "],a=s?1:0,l=d(function(t){return t===e},o,!0),u=d(function(t){return J(e,t)>-1},o,!0),c=[function(t,i,n){var r=!s&&(n||i!==S)||((e=i).nodeType?l(t,i,n):u(t,i,n));return e=null,r}];a<r;a++)if(i=w.relative[t[a].type])c=[d(p(c),i)];else{if(i=w.filter[t[a].type].apply(null,t[a].matches),i[R]){for(n=++a;n<r&&!w.relative[t[n].type];n++);return m(a>1&&p(c),a>1&&h(t.slice(0,a-1).concat({value:" "===t[a-2].type?"*":""})).replace(st,"$1"),i,a<n&&v(t.slice(a,n)),n<r&&v(t=t.slice(n)),n<r&&h(t))}c.push(i)}return p(c)}function _(t,i){var r=i.length>0,s=t.length>0,o=function(n,o,a,l,u){var c,h,d,p=0,f="0",m=n&&[],v=[],_=S,y=n||s&&w.find.TAG("*",u),b=F+=null==_?1:Math.random()||.1,x=y.length;for(u&&(S=o===$||o||u);f!==x&&null!=(c=y[f]);f++){if(s&&c){for(h=0,o||c.ownerDocument===$||(I(c),a=!P);d=t[h++];)if(d(c,o||$,a)){l.push(c);break}u&&(F=b)}r&&((c=!d&&c)&&p--,n&&m.push(c))}if(p+=f,r&&f!==p){for(h=0;d=i[h++];)d(m,v,o,a);if(n){if(p>0)for(;f--;)m[f]||v[f]||(v[f]=K.call(l));v=g(v)}G.apply(l,v),u&&!n&&v.length>0&&p+i.length>1&&e.uniqueSort(l)}return u&&(F=b,S=_),m};return r?n(o):o}var y,b,w,x,C,k,T,D,S,A,E,I,$,O,P,N,M,j,H,R="sizzle"+1*new Date,L=t.document,F=0,z=0,W=i(),q=i(),U=i(),B=function(t,e){return t===e&&(E=!0),0},Y={}.hasOwnProperty,V=[],K=V.pop,X=V.push,G=V.push,Z=V.slice,J=function(t,e){for(var i=0,n=t.length;i<n;i++)if(t[i]===e)return i;return-1},Q="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",tt="[\\x20\\t\\r\\n\\f]",et="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",it="\\["+tt+"*("+et+")(?:"+tt+"*([*^$|!~]?=)"+tt+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+et+"))|)"+tt+"*\\]",nt=":("+et+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+it+")*)|.*)\\)|)",rt=new RegExp(tt+"+","g"),st=new RegExp("^"+tt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+tt+"+$","g"),ot=new RegExp("^"+tt+"*,"+tt+"*"),at=new RegExp("^"+tt+"*([>+~]|"+tt+")"+tt+"*"),lt=new RegExp("="+tt+"*([^\\]'\"]*?)"+tt+"*\\]","g"),ut=new RegExp(nt),ct=new RegExp("^"+et+"$"),ht={ID:new RegExp("^#("+et+")"),CLASS:new RegExp("^\\.("+et+")"),TAG:new RegExp("^("+et+"|[*])"),ATTR:new RegExp("^"+it),PSEUDO:new RegExp("^"+nt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+tt+"*(even|odd|(([+-]|)(\\d*)n|)"+tt+"*(?:([+-]|)"+tt+"*(\\d+)|))"+tt+"*\\)|)","i"),bool:new RegExp("^(?:"+Q+")$","i"),needsContext:new RegExp("^"+tt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+tt+"*((?:-\\d)?\\d*)"+tt+"*\\)|)(?=[^-]|$)","i")},dt=/^(?:input|select|textarea|button)$/i,pt=/^h\d$/i,ft=/^[^{]+\{\s*\[native \w/,gt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,mt=/[+~]/,vt=new RegExp("\\\\([\\da-f]{1,6}"+tt+"?|("+tt+")|.)","ig"),_t=function(t,e,i){var n="0x"+e-65536;return n!==n||i?e:n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320)},yt=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,bt=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},wt=function(){I()},xt=d(function(t){return!0===t.disabled&&("form"in t||"label"in t)},{dir:"parentNode",next:"legend"});try{G.apply(V=Z.call(L.childNodes),L.childNodes),V[L.childNodes.length].nodeType}catch(t){G={apply:V.length?function(t,e){X.apply(t,Z.call(e))}:function(t,e){for(var i=t.length,n=0;t[i++]=e[n++];);t.length=i-1}}}b=e.support={},C=e.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return!!e&&"HTML"!==e.nodeName},I=e.setDocument=function(t){var e,i,n=t?t.ownerDocument||t:L;return n!==$&&9===n.nodeType&&n.documentElement?($=n,O=$.documentElement,P=!C($),L!==$&&(i=$.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",wt,!1):i.attachEvent&&i.attachEvent("onunload",wt)),b.attributes=r(function(t){return t.className="i",!t.getAttribute("className")}),b.getElementsByTagName=r(function(t){return t.appendChild($.createComment("")),!t.getElementsByTagName("*").length}),b.getElementsByClassName=ft.test($.getElementsByClassName),b.getById=r(function(t){return O.appendChild(t).id=R,!$.getElementsByName||!$.getElementsByName(R).length}),b.getById?(w.filter.ID=function(t){var e=t.replace(vt,_t);return function(t){return t.getAttribute("id")===e}},w.find.ID=function(t,e){if(void 0!==e.getElementById&&P){var i=e.getElementById(t);return i?[i]:[]}}):(w.filter.ID=function(t){var e=t.replace(vt,_t);return function(t){var i=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return i&&i.value===e}},w.find.ID=function(t,e){if(void 0!==e.getElementById&&P){var i,n,r,s=e.getElementById(t);if(s){if((i=s.getAttributeNode("id"))&&i.value===t)return[s];for(r=e.getElementsByName(t),n=0;s=r[n++];)if((i=s.getAttributeNode("id"))&&i.value===t)return[s]}return[]}}),w.find.TAG=b.getElementsByTagName?function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):b.qsa?e.querySelectorAll(t):void 0}:function(t,e){var i,n=[],r=0,s=e.getElementsByTagName(t);if("*"===t){for(;i=s[r++];)1===i.nodeType&&n.push(i);return n}return s},w.find.CLASS=b.getElementsByClassName&&function(t,e){if(void 0!==e.getElementsByClassName&&P)return e.getElementsByClassName(t)},M=[],N=[],(b.qsa=ft.test($.querySelectorAll))&&(r(function(t){O.appendChild(t).innerHTML="<a id='"+R+"'></a><select id='"+R+"-\r\\' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&N.push("[*^$]="+tt+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||N.push("\\["+tt+"*(?:value|"+Q+")"),t.querySelectorAll("[id~="+R+"-]").length||N.push("~="),t.querySelectorAll(":checked").length||N.push(":checked"),t.querySelectorAll("a#"+R+"+*").length||N.push(".#.+[+~]")}),r(function(t){t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e=$.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&N.push("name"+tt+"*[*^$|!~]?="),2!==t.querySelectorAll(":enabled").length&&N.push(":enabled",":disabled"),O.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&N.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),N.push(",.*:")})),(b.matchesSelector=ft.test(j=O.matches||O.webkitMatchesSelector||O.mozMatchesSelector||O.oMatchesSelector||O.msMatchesSelector))&&r(function(t){b.disconnectedMatch=j.call(t,"*"),j.call(t,"[s!='']:x"),M.push("!=",nt)}),N=N.length&&new RegExp(N.join("|")),M=M.length&&new RegExp(M.join("|")),e=ft.test(O.compareDocumentPosition),H=e||ft.test(O.contains)?function(t,e){var i=9===t.nodeType?t.documentElement:t,n=e&&e.parentNode;return t===n||!(!n||1!==n.nodeType||!(i.contains?i.contains(n):t.compareDocumentPosition&&16&t.compareDocumentPosition(n)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},B=e?function(t,e){if(t===e)return E=!0,0;var i=!t.compareDocumentPosition-!e.compareDocumentPosition;return i||(i=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1,1&i||!b.sortDetached&&e.compareDocumentPosition(t)===i?t===$||t.ownerDocument===L&&H(L,t)?-1:e===$||e.ownerDocument===L&&H(L,e)?1:A?J(A,t)-J(A,e):0:4&i?-1:1)}:function(t,e){if(t===e)return E=!0,0;var i,n=0,r=t.parentNode,s=e.parentNode,a=[t],l=[e];if(!r||!s)return t===$?-1:e===$?1:r?-1:s?1:A?J(A,t)-J(A,e):0;if(r===s)return o(t,e);for(i=t;i=i.parentNode;)a.unshift(i);for(i=e;i=i.parentNode;)l.unshift(i);for(;a[n]===l[n];)n++;return n?o(a[n],l[n]):a[n]===L?-1:l[n]===L?1:0},$):$},e.matches=function(t,i){return e(t,null,null,i)},e.matchesSelector=function(t,i){if((t.ownerDocument||t)!==$&&I(t),i=i.replace(lt,"='$1']"),b.matchesSelector&&P&&!U[i+" "]&&(!M||!M.test(i))&&(!N||!N.test(i)))try{var n=j.call(t,i);if(n||b.disconnectedMatch||t.document&&11!==t.document.nodeType)return n}catch(t){}return e(i,$,null,[t]).length>0},e.contains=function(t,e){return(t.ownerDocument||t)!==$&&I(t),H(t,e)},e.attr=function(t,e){(t.ownerDocument||t)!==$&&I(t);var i=w.attrHandle[e.toLowerCase()],n=i&&Y.call(w.attrHandle,e.toLowerCase())?i(t,e,!P):void 0;return void 0!==n?n:b.attributes||!P?t.getAttribute(e):(n=t.getAttributeNode(e))&&n.specified?n.value:null},e.escape=function(t){return(t+"").replace(yt,bt)},e.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},e.uniqueSort=function(t){var e,i=[],n=0,r=0;if(E=!b.detectDuplicates,A=!b.sortStable&&t.slice(0),t.sort(B),E){for(;e=t[r++];)e===t[r]&&(n=i.push(r));for(;n--;)t.splice(i[n],1)}return A=null,t},x=e.getText=function(t){var e,i="",n=0,r=t.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)i+=x(t)}else if(3===r||4===r)return t.nodeValue}else for(;e=t[n++];)i+=x(e);return i},w=e.selectors={cacheLength:50,createPseudo:n,match:ht,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(vt,_t),t[3]=(t[3]||t[4]||t[5]||"").replace(vt,_t),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||e.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&e.error(t[0]),t},PSEUDO:function(t){var e,i=!t[6]&&t[2];return ht.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":i&&ut.test(i)&&(e=k(i,!0))&&(e=i.indexOf(")",i.length-e)-i.length)&&(t[0]=t[0].slice(0,e),t[2]=i.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(vt,_t).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=W[t+" "];return e||(e=new RegExp("(^|"+tt+")"+t+"("+tt+"|$)"))&&W(t,function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(t,i,n){return function(r){var s=e.attr(r,t);return null==s?"!="===i:!i||(s+="","="===i?s===n:"!="===i?s!==n:"^="===i?n&&0===s.indexOf(n):"*="===i?n&&s.indexOf(n)>-1:"$="===i?n&&s.slice(-n.length)===n:"~="===i?(" "+s.replace(rt," ")+" ").indexOf(n)>-1:"|="===i&&(s===n||s.slice(0,n.length+1)===n+"-"))}},CHILD:function(t,e,i,n,r){var s="nth"!==t.slice(0,3),o="last"!==t.slice(-4),a="of-type"===e;return 1===n&&0===r?function(t){return!!t.parentNode}:function(e,i,l){var u,c,h,d,p,f,g=s!==o?"nextSibling":"previousSibling",m=e.parentNode,v=a&&e.nodeName.toLowerCase(),_=!l&&!a,y=!1;if(m){if(s){for(;g;){for(d=e;d=d[g];)if(a?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;f=g="only"===t&&!f&&"nextSibling"}return!0}if(f=[o?m.firstChild:m.lastChild],o&&_){for(d=m,h=d[R]||(d[R]={}),c=h[d.uniqueID]||(h[d.uniqueID]={}),u=c[t]||[],p=u[0]===F&&u[1],y=p&&u[2],d=p&&m.childNodes[p];d=++p&&d&&d[g]||(y=p=0)||f.pop();)if(1===d.nodeType&&++y&&d===e){c[t]=[F,p,y];break}}else if(_&&(d=e,h=d[R]||(d[R]={}),c=h[d.uniqueID]||(h[d.uniqueID]={}),u=c[t]||[],p=u[0]===F&&u[1],y=p),!1===y)for(;(d=++p&&d&&d[g]||(y=p=0)||f.pop())&&((a?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++y||(_&&(h=d[R]||(d[R]={}),c=h[d.uniqueID]||(h[d.uniqueID]={}),c[t]=[F,y]),d!==e)););return(y-=r)===n||y%n==0&&y/n>=0}}},PSEUDO:function(t,i){var r,s=w.pseudos[t]||w.setFilters[t.toLowerCase()]||e.error("unsupported pseudo: "+t);return s[R]?s(i):s.length>1?(r=[t,t,"",i],w.setFilters.hasOwnProperty(t.toLowerCase())?n(function(t,e){for(var n,r=s(t,i),o=r.length;o--;)n=J(t,r[o]),t[n]=!(e[n]=r[o])}):function(t){return s(t,0,r)}):s}},pseudos:{not:n(function(t){var e=[],i=[],r=T(t.replace(st,"$1"));return r[R]?n(function(t,e,i,n){for(var s,o=r(t,null,n,[]),a=t.length;a--;)(s=o[a])&&(t[a]=!(e[a]=s))}):function(t,n,s){return e[0]=t,r(e,null,s,i),e[0]=null,!i.pop()}}),has:n(function(t){return function(i){return e(t,i).length>0}}),contains:n(function(t){return t=t.replace(vt,_t),function(e){return(e.textContent||e.innerText||x(e)).indexOf(t)>-1}}),lang:n(function(t){return ct.test(t||"")||e.error("unsupported lang: "+t),t=t.replace(vt,_t).toLowerCase(),function(e){var i;do{if(i=P?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(i=i.toLowerCase())===t||0===i.indexOf(t+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var i=t.location&&t.location.hash;return i&&i.slice(1)===e.id},root:function(t){return t===O},focus:function(t){return t===$.activeElement&&(!$.hasFocus||$.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:a(!1),disabled:a(!0),checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!w.pseudos.empty(t)},header:function(t){return pt.test(t.nodeName)},input:function(t){return dt.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:l(function(){return[0]}),last:l(function(t,e){return[e-1]}),eq:l(function(t,e,i){return[i<0?i+e:i]}),even:l(function(t,e){for(var i=0;i<e;i+=2)t.push(i);return t}),odd:l(function(t,e){for(var i=1;i<e;i+=2)t.push(i);return t}),lt:l(function(t,e,i){for(var n=i<0?i+e:i;--n>=0;)t.push(n);return t}),gt:l(function(t,e,i){for(var n=i<0?i+e:i;++n<e;)t.push(n);return t})}},w.pseudos.nth=w.pseudos.eq;for(y in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[y]=function(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}(y);for(y in{submit:!0,reset:!0})w.pseudos[y]=function(t){return function(e){var i=e.nodeName.toLowerCase();return("input"===i||"button"===i)&&e.type===t}}(y);return c.prototype=w.filters=w.pseudos,w.setFilters=new c,k=e.tokenize=function(t,i){var n,r,s,o,a,l,u,c=q[t+" "];if(c)return i?0:c.slice(0);for(a=t,l=[],u=w.preFilter;a;){n&&!(r=ot.exec(a))||(r&&(a=a.slice(r[0].length)||a),l.push(s=[])),n=!1,(r=at.exec(a))&&(n=r.shift(),s.push({value:n,type:r[0].replace(st," ")}),a=a.slice(n.length));for(o in w.filter)!(r=ht[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),s.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return i?a.length:a?e.error(t):q(t,l).slice(0)},T=e.compile=function(t,e){var i,n=[],r=[],s=U[t+" "];if(!s){for(e||(e=k(t)),i=e.length;i--;)s=v(e[i]),s[R]?n.push(s):r.push(s);s=U(t,_(r,n)),s.selector=t}return s},D=e.select=function(t,e,i,n){var r,s,o,a,l,c="function"==typeof t&&t,d=!n&&k(t=c.selector||t);if(i=i||[],1===d.length){if(s=d[0]=d[0].slice(0),s.length>2&&"ID"===(o=s[0]).type&&9===e.nodeType&&P&&w.relative[s[1].type]){if(!(e=(w.find.ID(o.matches[0].replace(vt,_t),e)||[])[0]))return i;c&&(e=e.parentNode),t=t.slice(s.shift().value.length)}for(r=ht.needsContext.test(t)?0:s.length;r--&&(o=s[r],!w.relative[a=o.type]);)if((l=w.find[a])&&(n=l(o.matches[0].replace(vt,_t),mt.test(s[0].type)&&u(e.parentNode)||e))){if(s.splice(r,1),!(t=n.length&&h(s)))return G.apply(i,n),i;break}}return(c||T(t,d))(n,e,!P,i,!e||mt.test(t)&&u(e.parentNode)||e),i},b.sortStable=R.split("").sort(B).join("")===R,b.detectDuplicates=!!E,I(),b.sortDetached=r(function(t){return 1&t.compareDocumentPosition($.createElement("fieldset"))}),r(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||s("type|href|height|width",function(t,e,i){if(!i)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),b.attributes&&r(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||s("value",function(t,e,i){if(!i&&"input"===t.nodeName.toLowerCase())return t.defaultValue}),r(function(t){return null==t.getAttribute("disabled")})||s(Q,function(t,e,i){var n;if(!i)return!0===t[e]?e.toLowerCase():(n=t.getAttributeNode(e))&&n.specified?n.value:null}),e}(i);_t.find=Ct,_t.expr=Ct.selectors,_t.expr[":"]=_t.expr.pseudos,_t.uniqueSort=_t.unique=Ct.uniqueSort,_t.text=Ct.getText,_t.isXMLDoc=Ct.isXML,_t.contains=Ct.contains,_t.escapeSelector=Ct.escape;var kt=function(t,e,i){for(var n=[],r=void 0!==i;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(r&&_t(t).is(i))break;n.push(t)}return n},Tt=function(t,e){for(var i=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&i.push(t);return i},Dt=_t.expr.match.needsContext,St=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,At=/^.[^:#\[\.,]*$/;_t.filter=function(t,e,i){var n=e[0];return i&&(t=":not("+t+")"),1===e.length&&1===n.nodeType?_t.find.matchesSelector(n,t)?[n]:[]:_t.find.matches(t,_t.grep(e,function(t){return 1===t.nodeType}))},_t.fn.extend({find:function(t){var e,i,n=this.length,r=this;if("string"!=typeof t)return this.pushStack(_t(t).filter(function(){for(e=0;e<n;e++)if(_t.contains(r[e],this))return!0}));for(i=this.pushStack([]),e=0;e<n;e++)_t.find(t,r[e],i);return n>1?_t.uniqueSort(i):i},filter:function(t){return this.pushStack(u(this,t||[],!1))},not:function(t){return this.pushStack(u(this,t||[],!0))},is:function(t){return!!u(this,"string"==typeof t&&Dt.test(t)?_t(t):t||[],!1).length}});var Et,It=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(_t.fn.init=function(t,e,i){var n,r;if(!t)return this;if(i=i||Et,"string"==typeof t){if(!(n="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:It.exec(t))||!n[1]&&e)return!e||e.jquery?(e||i).find(t):this.constructor(e).find(t);if(n[1]){if(e=e instanceof _t?e[0]:e,_t.merge(this,_t.parseHTML(n[1],e&&e.nodeType?e.ownerDocument||e:ot,!0)),St.test(n[1])&&_t.isPlainObject(e))for(n in e)_t.isFunction(this[n])?this[n](e[n]):this.attr(n,e[n]);return this}return r=ot.getElementById(n[2]),r&&(this[0]=r,this.length=1),this}return t.nodeType?(this[0]=t,this.length=1,this):_t.isFunction(t)?void 0!==i.ready?i.ready(t):t(_t):_t.makeArray(t,this)}).prototype=_t.fn,Et=_t(ot);var $t=/^(?:parents|prev(?:Until|All))/,Ot={children:!0,contents:!0,next:!0,prev:!0};_t.fn.extend({has:function(t){var e=_t(t,this),i=e.length;return this.filter(function(){for(var t=0;t<i;t++)if(_t.contains(this,e[t]))return!0})},closest:function(t,e){var i,n=0,r=this.length,s=[],o="string"!=typeof t&&_t(t);if(!Dt.test(t))for(;n<r;n++)for(i=this[n];i&&i!==e;i=i.parentNode)if(i.nodeType<11&&(o?o.index(i)>-1:1===i.nodeType&&_t.find.matchesSelector(i,t))){s.push(i);break}return this.pushStack(s.length>1?_t.uniqueSort(s):s)},index:function(t){return t?"string"==typeof t?ht.call(_t(t),this[0]):ht.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(_t.uniqueSort(_t.merge(this.get(),_t(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),_t.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return kt(t,"parentNode")},parentsUntil:function(t,e,i){return kt(t,"parentNode",i)},next:function(t){return c(t,"nextSibling")},prev:function(t){return c(t,"previousSibling")},nextAll:function(t){return kt(t,"nextSibling")},prevAll:function(t){return kt(t,"previousSibling")},nextUntil:function(t,e,i){return kt(t,"nextSibling",i)},prevUntil:function(t,e,i){return kt(t,"previousSibling",i)},siblings:function(t){return Tt((t.parentNode||{}).firstChild,t)},children:function(t){return Tt(t.firstChild)},contents:function(t){return l(t,"iframe")?t.contentDocument:(l(t,"template")&&(t=t.content||t),_t.merge([],t.childNodes))}},function(t,e){_t.fn[t]=function(i,n){var r=_t.map(this,e,i);return"Until"!==t.slice(-5)&&(n=i),n&&"string"==typeof n&&(r=_t.filter(n,r)),this.length>1&&(Ot[t]||_t.uniqueSort(r),$t.test(t)&&r.reverse()),this.pushStack(r)}});var Pt=/[^\x20\t\r\n\f]+/g;_t.Callbacks=function(t){t="string"==typeof t?h(t):_t.extend({},t);var e,i,n,r,s=[],o=[],a=-1,l=function(){for(r=r||t.once,n=e=!0;o.length;a=-1)for(i=o.shift();++a<s.length;)!1===s[a].apply(i[0],i[1])&&t.stopOnFalse&&(a=s.length,i=!1);t.memory||(i=!1),e=!1,r&&(s=i?[]:"")},u={add:function(){return s&&(i&&!e&&(a=s.length-1,o.push(i)),function e(i){_t.each(i,function(i,n){_t.isFunction(n)?t.unique&&u.has(n)||s.push(n):n&&n.length&&"string"!==_t.type(n)&&e(n)})}(arguments),i&&!e&&l()),this},remove:function(){return _t.each(arguments,function(t,e){for(var i;(i=_t.inArray(e,s,i))>-1;)s.splice(i,1),i<=a&&a--}),this},has:function(t){return t?_t.inArray(t,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return r=o=[],s=i="",this},disabled:function(){return!s},lock:function(){return r=o=[],i||e||(s=i=""),this},locked:function(){return!!r},fireWith:function(t,i){return r||(i=i||[],i=[t,i.slice?i.slice():i],o.push(i),e||l()),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return!!n}};return u},_t.extend({Deferred:function(t){var e=[["notify","progress",_t.Callbacks("memory"),_t.Callbacks("memory"),2],["resolve","done",_t.Callbacks("once memory"),_t.Callbacks("once memory"),0,"resolved"],["reject","fail",_t.Callbacks("once memory"),_t.Callbacks("once memory"),1,"rejected"]],n="pending",r={state:function(){return n},always:function(){return s.done(arguments).fail(arguments),this},catch:function(t){return r.then(null,t)},pipe:function(){var t=arguments;return _t.Deferred(function(i){_t.each(e,function(e,n){var r=_t.isFunction(t[n[4]])&&t[n[4]];s[n[1]](function(){var t=r&&r.apply(this,arguments);t&&_t.isFunction(t.promise)?t.promise().progress(i.notify).done(i.resolve).fail(i.reject):i[n[0]+"With"](this,r?[t]:arguments)})}),t=null}).promise()},then:function(t,n,r){function s(t,e,n,r){return function(){var a=this,l=arguments,u=function(){var i,u;if(!(t<o)){if((i=n.apply(a,l))===e.promise())throw new TypeError("Thenable self-resolution");u=i&&("object"==typeof i||"function"==typeof i)&&i.then,_t.isFunction(u)?r?u.call(i,s(o,e,d,r),s(o,e,p,r)):(o++,u.call(i,s(o,e,d,r),s(o,e,p,r),s(o,e,d,e.notifyWith))):(n!==d&&(a=void 0,l=[i]),(r||e.resolveWith)(a,l))}},c=r?u:function(){try{u()}catch(i){_t.Deferred.exceptionHook&&_t.Deferred.exceptionHook(i,c.stackTrace),t+1>=o&&(n!==p&&(a=void 0,l=[i]),e.rejectWith(a,l))}};t?c():(_t.Deferred.getStackHook&&(c.stackTrace=_t.Deferred.getStackHook()),i.setTimeout(c))}}var o=0;return _t.Deferred(function(i){e[0][3].add(s(0,i,_t.isFunction(r)?r:d,i.notifyWith)),e[1][3].add(s(0,i,_t.isFunction(t)?t:d)),e[2][3].add(s(0,i,_t.isFunction(n)?n:p))}).promise()},promise:function(t){return null!=t?_t.extend(t,r):r}},s={};return _t.each(e,function(t,i){var o=i[2],a=i[5];r[i[1]]=o.add,a&&o.add(function(){n=a},e[3-t][2].disable,e[0][2].lock),o.add(i[3].fire),s[i[0]]=function(){return s[i[0]+"With"](this===s?void 0:this,arguments),this},s[i[0]+"With"]=o.fireWith}),r.promise(s),t&&t.call(s,s),s},when:function(t){var e=arguments.length,i=e,n=Array(i),r=lt.call(arguments),s=_t.Deferred(),o=function(t){return function(i){n[t]=this,r[t]=arguments.length>1?lt.call(arguments):i,--e||s.resolveWith(n,r)}};if(e<=1&&(f(t,s.done(o(i)).resolve,s.reject,!e),"pending"===s.state()||_t.isFunction(r[i]&&r[i].then)))return s.then();for(;i--;)f(r[i],o(i),s.reject);return s.promise()}});var Nt=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;_t.Deferred.exceptionHook=function(t,e){i.console&&i.console.warn&&t&&Nt.test(t.name)&&i.console.warn("jQuery.Deferred exception: "+t.message,t.stack,e)},_t.readyException=function(t){i.setTimeout(function(){throw t})};var Mt=_t.Deferred();_t.fn.ready=function(t){return Mt.then(t).catch(function(t){_t.readyException(t)}),this},_t.extend({isReady:!1,readyWait:1,ready:function(t){(!0===t?--_t.readyWait:_t.isReady)||(_t.isReady=!0,!0!==t&&--_t.readyWait>0||Mt.resolveWith(ot,[_t]))}}),_t.ready.then=Mt.then,"complete"===ot.readyState||"loading"!==ot.readyState&&!ot.documentElement.doScroll?i.setTimeout(_t.ready):(ot.addEventListener("DOMContentLoaded",g),i.addEventListener("load",g));var jt=function(t,e,i,n,r,s,o){var a=0,l=t.length,u=null==i;if("object"===_t.type(i)){r=!0;for(a in i)jt(t,e,a,i[a],!0,s,o)}else if(void 0!==n&&(r=!0,_t.isFunction(n)||(o=!0),u&&(o?(e.call(t,n),e=null):(u=e,e=function(t,e,i){return u.call(_t(t),i)})),e))for(;a<l;a++)e(t[a],i,o?n:n.call(t[a],a,e(t[a],i)));return r?t:u?e.call(t):l?e(t[0],i):s},Ht=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType};m.uid=1,m.prototype={cache:function(t){var e=t[this.expando];return e||(e={},Ht(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,i){var n,r=this.cache(t);if("string"==typeof e)r[_t.camelCase(e)]=i;else for(n in e)r[_t.camelCase(n)]=e[n];return r},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][_t.camelCase(e)]},access:function(t,e,i){return void 0===e||e&&"string"==typeof e&&void 0===i?this.get(t,e):(this.set(t,e,i),void 0!==i?i:e)},remove:function(t,e){var i,n=t[this.expando];if(void 0!==n){if(void 0!==e){Array.isArray(e)?e=e.map(_t.camelCase):(e=_t.camelCase(e),e=e in n?[e]:e.match(Pt)||[]),i=e.length;for(;i--;)delete n[e[i]]}(void 0===e||_t.isEmptyObject(n))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!_t.isEmptyObject(e)}};var Rt=new m,Lt=new m,Ft=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,zt=/[A-Z]/g;_t.extend({hasData:function(t){return Lt.hasData(t)||Rt.hasData(t)},data:function(t,e,i){return Lt.access(t,e,i)},removeData:function(t,e){Lt.remove(t,e)},_data:function(t,e,i){return Rt.access(t,e,i)},_removeData:function(t,e){Rt.remove(t,e)}}),_t.fn.extend({data:function(t,e){var i,n,r,s=this[0],o=s&&s.attributes;if(void 0===t){if(this.length&&(r=Lt.get(s),1===s.nodeType&&!Rt.get(s,"hasDataAttrs"))){for(i=o.length;i--;)o[i]&&(n=o[i].name,0===n.indexOf("data-")&&(n=_t.camelCase(n.slice(5)),_(s,n,r[n])));Rt.set(s,"hasDataAttrs",!0)}return r}return"object"==typeof t?this.each(function(){Lt.set(this,t)}):jt(this,function(e){var i;if(s&&void 0===e){if(void 0!==(i=Lt.get(s,t)))return i;if(void 0!==(i=_(s,t)))return i}else this.each(function(){Lt.set(this,t,e)})},null,e,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){Lt.remove(this,t)})}}),_t.extend({queue:function(t,e,i){var n;if(t)return e=(e||"fx")+"queue",n=Rt.get(t,e),i&&(!n||Array.isArray(i)?n=Rt.access(t,e,_t.makeArray(i)):n.push(i)),n||[]},dequeue:function(t,e){e=e||"fx";var i=_t.queue(t,e),n=i.length,r=i.shift(),s=_t._queueHooks(t,e),o=function(){_t.dequeue(t,e)};"inprogress"===r&&(r=i.shift(),n--),r&&("fx"===e&&i.unshift("inprogress"),delete s.stop,r.call(t,o,s)),!n&&s&&s.empty.fire()},_queueHooks:function(t,e){var i=e+"queueHooks";return Rt.get(t,i)||Rt.access(t,i,{empty:_t.Callbacks("once memory").add(function(){Rt.remove(t,[e+"queue",i])})})}}),_t.fn.extend({queue:function(t,e){var i=2;return"string"!=typeof t&&(e=t,t="fx",i--),arguments.length<i?_t.queue(this[0],t):void 0===e?this:this.each(function(){var i=_t.queue(this,t,e);_t._queueHooks(this,t),"fx"===t&&"inprogress"!==i[0]&&_t.dequeue(this,t)})},dequeue:function(t){return this.each(function(){_t.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var i,n=1,r=_t.Deferred(),s=this,o=this.length,a=function(){--n||r.resolveWith(s,[s])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";o--;)(i=Rt.get(s[o],t+"queueHooks"))&&i.empty&&(n++,i.empty.add(a));return a(),r.promise(e)}});var Wt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,qt=new RegExp("^(?:([+-])=|)("+Wt+")([a-z%]*)$","i"),Ut=["Top","Right","Bottom","Left"],Bt=function(t,e){return t=e||t,"none"===t.style.display||""===t.style.display&&_t.contains(t.ownerDocument,t)&&"none"===_t.css(t,"display")},Yt=function(t,e,i,n){var r,s,o={};for(s in e)o[s]=t.style[s],t.style[s]=e[s];r=i.apply(t,n||[]);for(s in e)t.style[s]=o[s];return r},Vt={};_t.fn.extend({show:function(){return w(this,!0)},hide:function(){return w(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){Bt(this)?_t(this).show():_t(this).hide()})}});var Kt=/^(?:checkbox|radio)$/i,Xt=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,Gt=/^$|\/(?:java|ecma)script/i,Zt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Zt.optgroup=Zt.option,Zt.tbody=Zt.tfoot=Zt.colgroup=Zt.caption=Zt.thead,Zt.th=Zt.td;var Jt=/<|&#?\w+;/;!function(){var t=ot.createDocumentFragment(),e=t.appendChild(ot.createElement("div")),i=ot.createElement("input");i.setAttribute("type","radio"),i.setAttribute("checked","checked"),i.setAttribute("name","t"),e.appendChild(i),vt.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",vt.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var Qt=ot.documentElement,te=/^key/,ee=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ie=/^([^.]*)(?:\.(.+)|)/;_t.event={global:{},add:function(t,e,i,n,r){var s,o,a,l,u,c,h,d,p,f,g,m=Rt.get(t);if(m)for(i.handler&&(s=i,i=s.handler,r=s.selector),r&&_t.find.matchesSelector(Qt,r),i.guid||(i.guid=_t.guid++),(l=m.events)||(l=m.events={}),(o=m.handle)||(o=m.handle=function(e){return void 0!==_t&&_t.event.triggered!==e.type?_t.event.dispatch.apply(t,arguments):void 0}),e=(e||"").match(Pt)||[""],u=e.length;u--;)a=ie.exec(e[u])||[],p=g=a[1],f=(a[2]||"").split(".").sort(),p&&(h=_t.event.special[p]||{},p=(r?h.delegateType:h.bindType)||p,h=_t.event.special[p]||{},c=_t.extend({type:p,origType:g,data:n,handler:i,guid:i.guid,selector:r,needsContext:r&&_t.expr.match.needsContext.test(r),namespace:f.join(".")},s),(d=l[p])||(d=l[p]=[],d.delegateCount=0,h.setup&&!1!==h.setup.call(t,n,f,o)||t.addEventListener&&t.addEventListener(p,o)),h.add&&(h.add.call(t,c),c.handler.guid||(c.handler.guid=i.guid)),r?d.splice(d.delegateCount++,0,c):d.push(c),_t.event.global[p]=!0)},remove:function(t,e,i,n,r){var s,o,a,l,u,c,h,d,p,f,g,m=Rt.hasData(t)&&Rt.get(t);if(m&&(l=m.events)){for(e=(e||"").match(Pt)||[""],u=e.length;u--;)if(a=ie.exec(e[u])||[],p=g=a[1],f=(a[2]||"").split(".").sort(),p){for(h=_t.event.special[p]||{},p=(n?h.delegateType:h.bindType)||p,d=l[p]||[],a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),o=s=d.length;s--;)c=d[s],!r&&g!==c.origType||i&&i.guid!==c.guid||a&&!a.test(c.namespace)||n&&n!==c.selector&&("**"!==n||!c.selector)||(d.splice(s,1),c.selector&&d.delegateCount--,h.remove&&h.remove.call(t,c));o&&!d.length&&(h.teardown&&!1!==h.teardown.call(t,f,m.handle)||_t.removeEvent(t,p,m.handle),delete l[p])}else for(p in l)_t.event.remove(t,p+e[u],i,n,!0);_t.isEmptyObject(l)&&Rt.remove(t,"handle events")}},dispatch:function(t){var e,i,n,r,s,o,a=_t.event.fix(t),l=new Array(arguments.length),u=(Rt.get(this,"events")||{})[a.type]||[],c=_t.event.special[a.type]||{};for(l[0]=a,e=1;e<arguments.length;e++)l[e]=arguments[e];if(a.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,a)){for(o=_t.event.handlers.call(this,a,u),e=0;(r=o[e++])&&!a.isPropagationStopped();)for(a.currentTarget=r.elem,i=0;(s=r.handlers[i++])&&!a.isImmediatePropagationStopped();)a.rnamespace&&!a.rnamespace.test(s.namespace)||(a.handleObj=s,a.data=s.data,void 0!==(n=((_t.event.special[s.origType]||{}).handle||s.handler).apply(r.elem,l))&&!1===(a.result=n)&&(a.preventDefault(),a.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,a),a.result}},handlers:function(t,e){var i,n,r,s,o,a=[],l=e.delegateCount,u=t.target;if(l&&u.nodeType&&!("click"===t.type&&t.button>=1))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&("click"!==t.type||!0!==u.disabled)){for(s=[],o={},i=0;i<l;i++)n=e[i],r=n.selector+" ",void 0===o[r]&&(o[r]=n.needsContext?_t(r,this).index(u)>-1:_t.find(r,this,null,[u]).length),o[r]&&s.push(n);s.length&&a.push({elem:u,handlers:s})}return u=this,l<e.length&&a.push({elem:u,handlers:e.slice(l)}),a},addProp:function(t,e){Object.defineProperty(_t.Event.prototype,t,{enumerable:!0,configurable:!0,get:_t.isFunction(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(t){return t[_t.expando]?t:new _t.Event(t)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==S()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===S()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&l(this,"input"))return this.click(),!1},_default:function(t){return l(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},_t.removeEvent=function(t,e,i){t.removeEventListener&&t.removeEventListener(e,i)},_t.Event=function(t,e){if(!(this instanceof _t.Event))return new _t.Event(t,e);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?T:D,this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,e&&_t.extend(this,e),this.timeStamp=t&&t.timeStamp||_t.now(),this[_t.expando]=!0},_t.Event.prototype={constructor:_t.Event,isDefaultPrevented:D,isPropagationStopped:D,isImmediatePropagationStopped:D,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=T,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=T,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=T,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},_t.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(t){var e=t.button;return null==t.which&&te.test(t.type)?null!=t.charCode?t.charCode:t.keyCode:!t.which&&void 0!==e&&ee.test(t.type)?1&e?1:2&e?3:4&e?2:0:t.which}},_t.event.addProp),_t.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){_t.event.special[t]={delegateType:e,bindType:e,handle:function(t){var i,n=this,r=t.relatedTarget,s=t.handleObj;return r&&(r===n||_t.contains(n,r))||(t.type=s.origType,i=s.handler.apply(this,arguments),t.type=e),i}}}),_t.fn.extend({on:function(t,e,i,n){return A(this,t,e,i,n)},one:function(t,e,i,n){return A(this,t,e,i,n,1)},off:function(t,e,i){var n,r;if(t&&t.preventDefault&&t.handleObj)return n=t.handleObj,_t(t.delegateTarget).off(n.namespace?n.origType+"."+n.namespace:n.origType,n.selector,n.handler),this;if("object"==typeof t){for(r in t)this.off(r,e,t[r]);return this}return!1!==e&&"function"!=typeof e||(i=e,e=void 0),!1===i&&(i=D),this.each(function(){_t.event.remove(this,t,i,e)})}});var ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,re=/<script|<style|<link/i,se=/checked\s*(?:[^=]|=\s*.checked.)/i,oe=/^true\/(.*)/,ae=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;_t.extend({htmlPrefilter:function(t){return t.replace(ne,"<$1></$2>")},clone:function(t,e,i){var n,r,s,o,a=t.cloneNode(!0),l=_t.contains(t.ownerDocument,t);if(!(vt.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||_t.isXMLDoc(t)))for(o=x(a),s=x(t),n=0,r=s.length;n<r;n++)P(s[n],o[n]);if(e)if(i)for(s=s||x(t),o=o||x(a),n=0,r=s.length;n<r;n++)O(s[n],o[n]);else O(t,a);return o=x(a,"script"),o.length>0&&C(o,!l&&x(t,"script")),a},cleanData:function(t){for(var e,i,n,r=_t.event.special,s=0;void 0!==(i=t[s]);s++)if(Ht(i)){if(e=i[Rt.expando]){if(e.events)for(n in e.events)r[n]?_t.event.remove(i,n):_t.removeEvent(i,n,e.handle);i[Rt.expando]=void 0}i[Lt.expando]&&(i[Lt.expando]=void 0)}}}),_t.fn.extend({detach:function(t){return M(this,t,!0)},remove:function(t){return M(this,t)},text:function(t){return jt(this,function(t){return void 0===t?_t.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=t)})},null,t,arguments.length)},append:function(){return N(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){E(this,t).appendChild(t)}})},prepend:function(){return N(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=E(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return N(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return N(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(_t.cleanData(x(t,!1)),t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map(function(){return _t.clone(this,t,e)})},html:function(t){return jt(this,function(t){var e=this[0]||{},i=0,n=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;if("string"==typeof t&&!re.test(t)&&!Zt[(Xt.exec(t)||["",""])[1].toLowerCase()]){t=_t.htmlPrefilter(t);try{for(;i<n;i++)e=this[i]||{},1===e.nodeType&&(_t.cleanData(x(e,!1)),e.innerHTML=t);e=0}catch(t){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=[];return N(this,arguments,function(e){var i=this.parentNode;_t.inArray(this,t)<0&&(_t.cleanData(x(this)),i&&i.replaceChild(e,this))},t)}}),_t.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){_t.fn[t]=function(t){for(var i,n=[],r=_t(t),s=r.length-1,o=0;o<=s;o++)i=o===s?this:this.clone(!0),_t(r[o])[e](i),ct.apply(n,i.get());return this.pushStack(n)}});var le=/^margin/,ue=new RegExp("^("+Wt+")(?!px)[a-z%]+$","i"),ce=function(t){var e=t.ownerDocument.defaultView;return e&&e.opener||(e=i),e.getComputedStyle(t)};!function(){function t(){if(a){a.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",a.innerHTML="",Qt.appendChild(o);var t=i.getComputedStyle(a);e="1%"!==t.top,s="2px"===t.marginLeft,n="4px"===t.width,a.style.marginRight="50%",r="4px"===t.marginRight,Qt.removeChild(o),a=null}}var e,n,r,s,o=ot.createElement("div"),a=ot.createElement("div");a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",vt.clearCloneStyle="content-box"===a.style.backgroundClip,o.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",o.appendChild(a),_t.extend(vt,{pixelPosition:function(){return t(),e},boxSizingReliable:function(){return t(),n},pixelMarginRight:function(){return t(),r},reliableMarginLeft:function(){return t(),s}}))}();var he=/^(none|table(?!-c[ea]).+)/,de=/^--/,pe={position:"absolute",visibility:"hidden",display:"block"},fe={letterSpacing:"0",fontWeight:"400"},ge=["Webkit","Moz","ms"],me=ot.createElement("div").style;_t.extend({cssHooks:{opacity:{get:function(t,e){if(e){var i=j(t,"opacity");return""===i?"1":i}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(t,e,i,n){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var r,s,o,a=_t.camelCase(e),l=de.test(e),u=t.style;if(l||(e=L(a)),o=_t.cssHooks[e]||_t.cssHooks[a],void 0===i)return o&&"get"in o&&void 0!==(r=o.get(t,!1,n))?r:u[e];s=typeof i,"string"===s&&(r=qt.exec(i))&&r[1]&&(i=y(t,e,r),s="number"),null!=i&&i===i&&("number"===s&&(i+=r&&r[3]||(_t.cssNumber[a]?"":"px")),vt.clearCloneStyle||""!==i||0!==e.indexOf("background")||(u[e]="inherit"),o&&"set"in o&&void 0===(i=o.set(t,i,n))||(l?u.setProperty(e,i):u[e]=i))}},css:function(t,e,i,n){var r,s,o,a=_t.camelCase(e);return de.test(e)||(e=L(a)),o=_t.cssHooks[e]||_t.cssHooks[a],o&&"get"in o&&(r=o.get(t,!0,i)),void 0===r&&(r=j(t,e,n)),"normal"===r&&e in fe&&(r=fe[e]),""===i||i?(s=parseFloat(r),!0===i||isFinite(s)?s||0:r):r}}),_t.each(["height","width"],function(t,e){_t.cssHooks[e]={get:function(t,i,n){if(i)return!he.test(_t.css(t,"display"))||t.getClientRects().length&&t.getBoundingClientRect().width?W(t,e,n):Yt(t,pe,function(){return W(t,e,n)})},set:function(t,i,n){var r,s=n&&ce(t),o=n&&z(t,e,n,"border-box"===_t.css(t,"boxSizing",!1,s),s);return o&&(r=qt.exec(i))&&"px"!==(r[3]||"px")&&(t.style[e]=i,i=_t.css(t,e)),F(t,i,o)}}}),_t.cssHooks.marginLeft=H(vt.reliableMarginLeft,function(t,e){if(e)return(parseFloat(j(t,"marginLeft"))||t.getBoundingClientRect().left-Yt(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),_t.each({margin:"",padding:"",border:"Width"},function(t,e){_t.cssHooks[t+e]={expand:function(i){for(var n=0,r={},s="string"==typeof i?i.split(" "):[i];n<4;n++)r[t+Ut[n]+e]=s[n]||s[n-2]||s[0];return r}},le.test(t)||(_t.cssHooks[t+e].set=F)}),_t.fn.extend({css:function(t,e){return jt(this,function(t,e,i){var n,r,s={},o=0;if(Array.isArray(e)){for(n=ce(t),r=e.length;o<r;o++)s[e[o]]=_t.css(t,e[o],!1,n);return s}return void 0!==i?_t.style(t,e,i):_t.css(t,e)},t,e,arguments.length>1)}}),_t.Tween=q,q.prototype={constructor:q,init:function(t,e,i,n,r,s){this.elem=t,this.prop=i,this.easing=r||_t.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=n,this.unit=s||(_t.cssNumber[i]?"":"px")},cur:function(){var t=q.propHooks[this.prop];return t&&t.get?t.get(this):q.propHooks._default.get(this)},run:function(t){var e,i=q.propHooks[this.prop];return this.options.duration?this.pos=e=_t.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),i&&i.set?i.set(this):q.propHooks._default.set(this),this}},q.prototype.init.prototype=q.prototype,q.propHooks={_default:{get:function(t){var e;return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(e=_t.css(t.elem,t.prop,""),e&&"auto"!==e?e:0)},set:function(t){_t.fx.step[t.prop]?_t.fx.step[t.prop](t):1!==t.elem.nodeType||null==t.elem.style[_t.cssProps[t.prop]]&&!_t.cssHooks[t.prop]?t.elem[t.prop]=t.now:_t.style(t.elem,t.prop,t.now+t.unit)}}},q.propHooks.scrollTop=q.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},_t.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},_t.fx=q.prototype.init,_t.fx.step={};var ve,_e,ye=/^(?:toggle|show|hide)$/,be=/queueHooks$/;_t.Animation=_t.extend(G,{tweeners:{"*":[function(t,e){var i=this.createTween(t,e);return y(i.elem,t,qt.exec(e),i),i}]},tweener:function(t,e){_t.isFunction(t)?(e=t,t=["*"]):t=t.match(Pt);for(var i,n=0,r=t.length;n<r;n++)i=t[n],G.tweeners[i]=G.tweeners[i]||[],G.tweeners[i].unshift(e)},prefilters:[K],prefilter:function(t,e){e?G.prefilters.unshift(t):G.prefilters.push(t)}}),_t.speed=function(t,e,i){var n=t&&"object"==typeof t?_t.extend({},t):{complete:i||!i&&e||_t.isFunction(t)&&t,duration:t,easing:i&&e||e&&!_t.isFunction(e)&&e};return _t.fx.off?n.duration=0:"number"!=typeof n.duration&&(n.duration in _t.fx.speeds?n.duration=_t.fx.speeds[n.duration]:n.duration=_t.fx.speeds._default),null!=n.queue&&!0!==n.queue||(n.queue="fx"),n.old=n.complete,n.complete=function(){_t.isFunction(n.old)&&n.old.call(this),n.queue&&_t.dequeue(this,n.queue)},n},_t.fn.extend({fadeTo:function(t,e,i,n){return this.filter(Bt).css("opacity",0).show().end().animate({opacity:e},t,i,n)},animate:function(t,e,i,n){var r=_t.isEmptyObject(t),s=_t.speed(e,i,n),o=function(){var e=G(this,_t.extend({},t),s);(r||Rt.get(this,"finish"))&&e.stop(!0)};return o.finish=o,r||!1===s.queue?this.each(o):this.queue(s.queue,o)},stop:function(t,e,i){var n=function(t){var e=t.stop;delete t.stop,e(i)};return"string"!=typeof t&&(i=e,e=t,t=void 0),e&&!1!==t&&this.queue(t||"fx",[]),this.each(function(){var e=!0,r=null!=t&&t+"queueHooks",s=_t.timers,o=Rt.get(this);if(r)o[r]&&o[r].stop&&n(o[r]);else for(r in o)o[r]&&o[r].stop&&be.test(r)&&n(o[r]);for(r=s.length;r--;)s[r].elem!==this||null!=t&&s[r].queue!==t||(s[r].anim.stop(i),e=!1,s.splice(r,1));!e&&i||_t.dequeue(this,t)})},finish:function(t){return!1!==t&&(t=t||"fx"),this.each(function(){var e,i=Rt.get(this),n=i[t+"queue"],r=i[t+"queueHooks"],s=_t.timers,o=n?n.length:0;for(i.finish=!0,_t.queue(this,t,[]),r&&r.stop&&r.stop.call(this,!0),e=s.length;e--;)s[e].elem===this&&s[e].queue===t&&(s[e].anim.stop(!0),s.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete i.finish})}}),_t.each(["toggle","show","hide"],function(t,e){var i=_t.fn[e];_t.fn[e]=function(t,n,r){return null==t||"boolean"==typeof t?i.apply(this,arguments):this.animate(Y(e,!0),t,n,r)}}),_t.each({slideDown:Y("show"),slideUp:Y("hide"),slideToggle:Y("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){_t.fn[t]=function(t,i,n){return this.animate(e,t,i,n)}}),_t.timers=[],_t.fx.tick=function(){var t,e=0,i=_t.timers;for(ve=_t.now();e<i.length;e++)(t=i[e])()||i[e]!==t||i.splice(e--,1);i.length||_t.fx.stop(),ve=void 0},_t.fx.timer=function(t){_t.timers.push(t),_t.fx.start()},_t.fx.interval=13,_t.fx.start=function(){_e||(_e=!0,U())},_t.fx.stop=function(){_e=null},_t.fx.speeds={slow:600,fast:200,_default:400},_t.fn.delay=function(t,e){return t=_t.fx?_t.fx.speeds[t]||t:t,e=e||"fx",this.queue(e,function(e,n){var r=i.setTimeout(e,t);n.stop=function(){i.clearTimeout(r)}})},function(){var t=ot.createElement("input"),e=ot.createElement("select"),i=e.appendChild(ot.createElement("option"));t.type="checkbox",vt.checkOn=""!==t.value,vt.optSelected=i.selected,t=ot.createElement("input"),t.value="t",t.type="radio",vt.radioValue="t"===t.value}();var we,xe=_t.expr.attrHandle;_t.fn.extend({attr:function(t,e){return jt(this,_t.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){_t.removeAttr(this,t)})}}),_t.extend({attr:function(t,e,i){var n,r,s=t.nodeType;if(3!==s&&8!==s&&2!==s)return void 0===t.getAttribute?_t.prop(t,e,i):(1===s&&_t.isXMLDoc(t)||(r=_t.attrHooks[e.toLowerCase()]||(_t.expr.match.bool.test(e)?we:void 0)),void 0!==i?null===i?void _t.removeAttr(t,e):r&&"set"in r&&void 0!==(n=r.set(t,i,e))?n:(t.setAttribute(e,i+""),i):r&&"get"in r&&null!==(n=r.get(t,e))?n:(n=_t.find.attr(t,e),null==n?void 0:n))},attrHooks:{type:{set:function(t,e){if(!vt.radioValue&&"radio"===e&&l(t,"input")){var i=t.value;return t.setAttribute("type",e),i&&(t.value=i),e}}}},removeAttr:function(t,e){var i,n=0,r=e&&e.match(Pt);if(r&&1===t.nodeType)for(;i=r[n++];)t.removeAttribute(i)}}),we={set:function(t,e,i){return!1===e?_t.removeAttr(t,i):t.setAttribute(i,i),i}},_t.each(_t.expr.match.bool.source.match(/\w+/g),function(t,e){var i=xe[e]||_t.find.attr;xe[e]=function(t,e,n){var r,s,o=e.toLowerCase();return n||(s=xe[o],xe[o]=r,r=null!=i(t,e,n)?o:null,xe[o]=s),r}});var Ce=/^(?:input|select|textarea|button)$/i,ke=/^(?:a|area)$/i;_t.fn.extend({prop:function(t,e){return jt(this,_t.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[_t.propFix[t]||t]})}}),_t.extend({prop:function(t,e,i){var n,r,s=t.nodeType;if(3!==s&&8!==s&&2!==s)return 1===s&&_t.isXMLDoc(t)||(e=_t.propFix[e]||e,r=_t.propHooks[e]),void 0!==i?r&&"set"in r&&void 0!==(n=r.set(t,i,e))?n:t[e]=i:r&&"get"in r&&null!==(n=r.get(t,e))?n:t[e]},propHooks:{tabIndex:{get:function(t){var e=_t.find.attr(t,"tabindex");return e?parseInt(e,10):Ce.test(t.nodeName)||ke.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),vt.optSelected||(_t.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),_t.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){_t.propFix[this.toLowerCase()]=this}),_t.fn.extend({addClass:function(t){var e,i,n,r,s,o,a,l=0;if(_t.isFunction(t))return this.each(function(e){_t(this).addClass(t.call(this,e,J(this)))});if("string"==typeof t&&t)for(e=t.match(Pt)||[];i=this[l++];)if(r=J(i),n=1===i.nodeType&&" "+Z(r)+" "){for(o=0;s=e[o++];)n.indexOf(" "+s+" ")<0&&(n+=s+" ");a=Z(n),r!==a&&i.setAttribute("class",a)}return this},removeClass:function(t){var e,i,n,r,s,o,a,l=0;if(_t.isFunction(t))return this.each(function(e){_t(this).removeClass(t.call(this,e,J(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof t&&t)for(e=t.match(Pt)||[];i=this[l++];)if(r=J(i),n=1===i.nodeType&&" "+Z(r)+" "){for(o=0;s=e[o++];)for(;n.indexOf(" "+s+" ")>-1;)n=n.replace(" "+s+" "," ");a=Z(n),r!==a&&i.setAttribute("class",a)}return this},toggleClass:function(t,e){var i=typeof t;return"boolean"==typeof e&&"string"===i?e?this.addClass(t):this.removeClass(t):_t.isFunction(t)?this.each(function(i){_t(this).toggleClass(t.call(this,i,J(this),e),e)}):this.each(function(){var e,n,r,s;if("string"===i)for(n=0,r=_t(this),s=t.match(Pt)||[];e=s[n++];)r.hasClass(e)?r.removeClass(e):r.addClass(e);else void 0!==t&&"boolean"!==i||(e=J(this),e&&Rt.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===t?"":Rt.get(this,"__className__")||""))})},hasClass:function(t){var e,i,n=0;for(e=" "+t+" ";i=this[n++];)if(1===i.nodeType&&(" "+Z(J(i))+" ").indexOf(e)>-1)return!0;return!1}});var Te=/\r/g;_t.fn.extend({val:function(t){var e,i,n,r=this[0];{if(arguments.length)return n=_t.isFunction(t),this.each(function(i){var r;1===this.nodeType&&(r=n?t.call(this,i,_t(this).val()):t,null==r?r="":"number"==typeof r?r+="":Array.isArray(r)&&(r=_t.map(r,function(t){return null==t?"":t+""})),(e=_t.valHooks[this.type]||_t.valHooks[this.nodeName.toLowerCase()])&&"set"in e&&void 0!==e.set(this,r,"value")||(this.value=r))});if(r)return(e=_t.valHooks[r.type]||_t.valHooks[r.nodeName.toLowerCase()])&&"get"in e&&void 0!==(i=e.get(r,"value"))?i:(i=r.value,"string"==typeof i?i.replace(Te,""):null==i?"":i)}}}),_t.extend({valHooks:{option:{get:function(t){var e=_t.find.attr(t,"value");return null!=e?e:Z(_t.text(t))}},select:{get:function(t){var e,i,n,r=t.options,s=t.selectedIndex,o="select-one"===t.type,a=o?null:[],u=o?s+1:r.length;for(n=s<0?u:o?s:0;n<u;n++)if(i=r[n],(i.selected||n===s)&&!i.disabled&&(!i.parentNode.disabled||!l(i.parentNode,"optgroup"))){if(e=_t(i).val(),o)return e;a.push(e)}return a},set:function(t,e){for(var i,n,r=t.options,s=_t.makeArray(e),o=r.length;o--;)n=r[o],(n.selected=_t.inArray(_t.valHooks.option.get(n),s)>-1)&&(i=!0);return i||(t.selectedIndex=-1),s}}}}),_t.each(["radio","checkbox"],function(){_t.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=_t.inArray(_t(t).val(),e)>-1}},vt.checkOn||(_t.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})});var De=/^(?:focusinfocus|focusoutblur)$/;_t.extend(_t.event,{trigger:function(t,e,n,r){var s,o,a,l,u,c,h,d=[n||ot],p=ft.call(t,"type")?t.type:t,f=ft.call(t,"namespace")?t.namespace.split("."):[];if(o=a=n=n||ot,3!==n.nodeType&&8!==n.nodeType&&!De.test(p+_t.event.triggered)&&(p.indexOf(".")>-1&&(f=p.split("."),p=f.shift(),f.sort()),u=p.indexOf(":")<0&&"on"+p,t=t[_t.expando]?t:new _t.Event(p,"object"==typeof t&&t),t.isTrigger=r?2:3,t.namespace=f.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=n),e=null==e?[t]:_t.makeArray(e,[t]),h=_t.event.special[p]||{},r||!h.trigger||!1!==h.trigger.apply(n,e))){if(!r&&!h.noBubble&&!_t.isWindow(n)){for(l=h.delegateType||p,De.test(l+p)||(o=o.parentNode);o;o=o.parentNode)d.push(o),a=o;a===(n.ownerDocument||ot)&&d.push(a.defaultView||a.parentWindow||i)}for(s=0;(o=d[s++])&&!t.isPropagationStopped();)t.type=s>1?l:h.bindType||p,c=(Rt.get(o,"events")||{})[t.type]&&Rt.get(o,"handle"),c&&c.apply(o,e),(c=u&&o[u])&&c.apply&&Ht(o)&&(t.result=c.apply(o,e),!1===t.result&&t.preventDefault());return t.type=p,r||t.isDefaultPrevented()||h._default&&!1!==h._default.apply(d.pop(),e)||!Ht(n)||u&&_t.isFunction(n[p])&&!_t.isWindow(n)&&(a=n[u],a&&(n[u]=null),_t.event.triggered=p,n[p](),_t.event.triggered=void 0,a&&(n[u]=a)),t.result}},simulate:function(t,e,i){var n=_t.extend(new _t.Event,i,{type:t,isSimulated:!0});_t.event.trigger(n,null,e)}}),_t.fn.extend({trigger:function(t,e){return this.each(function(){_t.event.trigger(t,e,this)})},triggerHandler:function(t,e){var i=this[0];if(i)return _t.event.trigger(t,e,i,!0)}}),_t.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,e){_t.fn[e]=function(t,i){return arguments.length>0?this.on(e,null,t,i):this.trigger(e)}}),_t.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),vt.focusin="onfocusin"in i,vt.focusin||_t.each({focus:"focusin",blur:"focusout"},function(t,e){var i=function(t){_t.event.simulate(e,t.target,_t.event.fix(t))};_t.event.special[e]={setup:function(){var n=this.ownerDocument||this,r=Rt.access(n,e);r||n.addEventListener(t,i,!0),Rt.access(n,e,(r||0)+1)},teardown:function(){var n=this.ownerDocument||this,r=Rt.access(n,e)-1;r?Rt.access(n,e,r):(n.removeEventListener(t,i,!0),Rt.remove(n,e))}}});var Se=i.location,Ae=_t.now(),Ee=/\?/;_t.parseXML=function(t){var e;if(!t||"string"!=typeof t)return null;try{e=(new i.DOMParser).parseFromString(t,"text/xml")}catch(t){e=void 0}return e&&!e.getElementsByTagName("parsererror").length||_t.error("Invalid XML: "+t),e};var Ie=/\[\]$/,$e=/\r?\n/g,Oe=/^(?:submit|button|image|reset|file)$/i,Pe=/^(?:input|select|textarea|keygen)/i;_t.param=function(t,e){var i,n=[],r=function(t,e){var i=_t.isFunction(e)?e():e;n[n.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==i?"":i)};if(Array.isArray(t)||t.jquery&&!_t.isPlainObject(t))_t.each(t,function(){r(this.name,this.value)});else for(i in t)Q(i,t[i],e,r);return n.join("&")},_t.fn.extend({serialize:function(){return _t.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=_t.prop(this,"elements");return t?_t.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!_t(this).is(":disabled")&&Pe.test(this.nodeName)&&!Oe.test(t)&&(this.checked||!Kt.test(t))}).map(function(t,e){var i=_t(this).val();return null==i?null:Array.isArray(i)?_t.map(i,function(t){return{name:e.name,value:t.replace($e,"\r\n")}}):{name:e.name,value:i.replace($e,"\r\n")}}).get()}});var Ne=/%20/g,Me=/#.*$/,je=/([?&])_=[^&]*/,He=/^(.*?):[ \t]*([^\r\n]*)$/gm,Re=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Le=/^(?:GET|HEAD)$/,Fe=/^\/\//,ze={},We={},qe="*/".concat("*"),Ue=ot.createElement("a");Ue.href=Se.href,_t.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Se.href,type:"GET",isLocal:Re.test(Se.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":qe,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":_t.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?it(it(t,_t.ajaxSettings),e):it(_t.ajaxSettings,t)},ajaxPrefilter:tt(ze),ajaxTransport:tt(We),ajax:function(t,e){function n(t,e,n,a){var u,d,p,b,w,x=e;c||(c=!0,l&&i.clearTimeout(l),r=void 0,o=a||"",C.readyState=t>0?4:0,u=t>=200&&t<300||304===t,n&&(b=nt(f,C,n)),b=rt(f,b,C,u),u?(f.ifModified&&(w=C.getResponseHeader("Last-Modified"),w&&(_t.lastModified[s]=w),(w=C.getResponseHeader("etag"))&&(_t.etag[s]=w)),204===t||"HEAD"===f.type?x="nocontent":304===t?x="notmodified":(x=b.state,d=b.data,p=b.error,u=!p)):(p=x,!t&&x||(x="error",t<0&&(t=0))),C.status=t,C.statusText=(e||x)+"",u?v.resolveWith(g,[d,x,C]):v.rejectWith(g,[C,x,p]),C.statusCode(y),y=void 0,h&&m.trigger(u?"ajaxSuccess":"ajaxError",[C,f,u?d:p]),_.fireWith(g,[C,x]),h&&(m.trigger("ajaxComplete",[C,f]),--_t.active||_t.event.trigger("ajaxStop")))}"object"==typeof t&&(e=t,t=void 0),e=e||{};var r,s,o,a,l,u,c,h,d,p,f=_t.ajaxSetup({},e),g=f.context||f,m=f.context&&(g.nodeType||g.jquery)?_t(g):_t.event,v=_t.Deferred(),_=_t.Callbacks("once memory"),y=f.statusCode||{},b={},w={},x="canceled",C={readyState:0,getResponseHeader:function(t){var e;if(c){if(!a)for(a={};e=He.exec(o);)a[e[1].toLowerCase()]=e[2];e=a[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){return c?o:null},setRequestHeader:function(t,e){return null==c&&(t=w[t.toLowerCase()]=w[t.toLowerCase()]||t,b[t]=e),this},overrideMimeType:function(t){return null==c&&(f.mimeType=t),this},statusCode:function(t){var e;if(t)if(c)C.always(t[C.status]);else for(e in t)y[e]=[y[e],t[e]];return this},abort:function(t){var e=t||x;return r&&r.abort(e),n(0,e),this}};if(v.promise(C),f.url=((t||f.url||Se.href)+"").replace(Fe,Se.protocol+"//"),f.type=e.method||e.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(Pt)||[""],null==f.crossDomain){u=ot.createElement("a");try{u.href=f.url,u.href=u.href,f.crossDomain=Ue.protocol+"//"+Ue.host!=u.protocol+"//"+u.host}catch(t){f.crossDomain=!0}}if(f.data&&f.processData&&"string"!=typeof f.data&&(f.data=_t.param(f.data,f.traditional)),et(ze,f,e,C),c)return C;h=_t.event&&f.global,h&&0==_t.active++&&_t.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Le.test(f.type),s=f.url.replace(Me,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(Ne,"+")):(p=f.url.slice(s.length),f.data&&(s+=(Ee.test(s)?"&":"?")+f.data,delete f.data),!1===f.cache&&(s=s.replace(je,"$1"),p=(Ee.test(s)?"&":"?")+"_="+Ae+++p),f.url=s+p),f.ifModified&&(_t.lastModified[s]&&C.setRequestHeader("If-Modified-Since",_t.lastModified[s]),_t.etag[s]&&C.setRequestHeader("If-None-Match",_t.etag[s])),(f.data&&f.hasContent&&!1!==f.contentType||e.contentType)&&C.setRequestHeader("Content-Type",f.contentType),C.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+qe+"; q=0.01":""):f.accepts["*"]);for(d in f.headers)C.setRequestHeader(d,f.headers[d]);if(f.beforeSend&&(!1===f.beforeSend.call(g,C,f)||c))return C.abort();if(x="abort",_.add(f.complete),C.done(f.success),C.fail(f.error),r=et(We,f,e,C)){if(C.readyState=1,h&&m.trigger("ajaxSend",[C,f]),c)return C;f.async&&f.timeout>0&&(l=i.setTimeout(function(){C.abort("timeout")},f.timeout));try{c=!1,r.send(b,n)}catch(t){if(c)throw t;n(-1,t)}}else n(-1,"No Transport");return C},getJSON:function(t,e,i){return _t.get(t,e,i,"json")},getScript:function(t,e){return _t.get(t,void 0,e,"script")}}),_t.each(["get","post"],function(t,e){_t[e]=function(t,i,n,r){return _t.isFunction(i)&&(r=r||n,n=i,i=void 0),_t.ajax(_t.extend({url:t,type:e,dataType:r,data:i,success:n},_t.isPlainObject(t)&&t))}}),_t._evalUrl=function(t){return _t.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},_t.fn.extend({wrapAll:function(t){var e;return this[0]&&(_t.isFunction(t)&&(t=t.call(this[0])),e=_t(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(t){return _t.isFunction(t)?this.each(function(e){_t(this).wrapInner(t.call(this,e))}):this.each(function(){var e=_t(this),i=e.contents();i.length?i.wrapAll(t):e.append(t)})},wrap:function(t){var e=_t.isFunction(t);return this.each(function(i){_t(this).wrapAll(e?t.call(this,i):t)})},unwrap:function(t){return this.parent(t).not("body").each(function(){_t(this).replaceWith(this.childNodes)}),this}}),_t.expr.pseudos.hidden=function(t){return!_t.expr.pseudos.visible(t)},_t.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},_t.ajaxSettings.xhr=function(){try{return new i.XMLHttpRequest}catch(t){}};var Be={0:200,1223:204},Ye=_t.ajaxSettings.xhr();vt.cors=!!Ye&&"withCredentials"in Ye,vt.ajax=Ye=!!Ye,_t.ajaxTransport(function(t){var e,n;if(vt.cors||Ye&&!t.crossDomain)return{send:function(r,s){var o,a=t.xhr();if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(o in t.xhrFields)a[o]=t.xhrFields[o];t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest");for(o in r)a.setRequestHeader(o,r[o]);e=function(t){return function(){e&&(e=n=a.onload=a.onerror=a.onabort=a.onreadystatechange=null,"abort"===t?a.abort():"error"===t?"number"!=typeof a.status?s(0,"error"):s(a.status,a.statusText):s(Be[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=e(),n=a.onerror=e("error"),void 0!==a.onabort?a.onabort=n:a.onreadystatechange=function(){4===a.readyState&&i.setTimeout(function(){e&&n()})},e=e("abort");try{a.send(t.hasContent&&t.data||null)}catch(t){if(e)throw t}},abort:function(){e&&e()}}}),_t.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),_t.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return _t.globalEval(t),t}}}),_t.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),_t.ajaxTransport("script",function(t){if(t.crossDomain){var e,i;return{send:function(n,r){e=_t("<script>").prop({charset:t.scriptCharset,src:t.url}).on("load error",i=function(t){e.remove(),i=null,t&&r("error"===t.type?404:200,t.type)}),ot.head.appendChild(e[0])},abort:function(){i&&i()}}}});var Ve=[],Ke=/(=)\?(?=&|$)|\?\?/;_t.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=Ve.pop()||_t.expando+"_"+Ae++;return this[t]=!0,t}}),_t.ajaxPrefilter("json jsonp",function(t,e,n){var r,s,o,a=!1!==t.jsonp&&(Ke.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ke.test(t.data)&&"data");if(a||"jsonp"===t.dataTypes[0])return r=t.jsonpCallback=_t.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Ke,"$1"+r):!1!==t.jsonp&&(t.url+=(Ee.test(t.url)?"&":"?")+t.jsonp+"="+r),t.converters["script json"]=function(){return o||_t.error(r+" was not called"),o[0]},t.dataTypes[0]="json",s=i[r],i[r]=function(){o=arguments},n.always(function(){void 0===s?_t(i).removeProp(r):i[r]=s,t[r]&&(t.jsonpCallback=e.jsonpCallback,Ve.push(r)),o&&_t.isFunction(s)&&s(o[0]),o=s=void 0}),"script"}),vt.createHTMLDocument=function(){var t=ot.implementation.createHTMLDocument("").body;return t.innerHTML="<form></form><form></form>",2===t.childNodes.length}(),_t.parseHTML=function(t,e,i){if("string"!=typeof t)return[];"boolean"==typeof e&&(i=e,e=!1);var n,r,s;return e||(vt.createHTMLDocument?(e=ot.implementation.createHTMLDocument(""),n=e.createElement("base"),n.href=ot.location.href,e.head.appendChild(n)):e=ot),r=St.exec(t),s=!i&&[],r?[e.createElement(r[1])]:(r=k([t],e,s),s&&s.length&&_t(s).remove(),_t.merge([],r.childNodes))},_t.fn.load=function(t,e,i){var n,r,s,o=this,a=t.indexOf(" ");return a>-1&&(n=Z(t.slice(a)),t=t.slice(0,a)),_t.isFunction(e)?(i=e,e=void 0):e&&"object"==typeof e&&(r="POST"),o.length>0&&_t.ajax({url:t,type:r||"GET",dataType:"html",data:e}).done(function(t){s=arguments,o.html(n?_t("<div>").append(_t.parseHTML(t)).find(n):t)}).always(i&&function(t,e){o.each(function(){i.apply(this,s||[t.responseText,e,t])})}),this},_t.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){_t.fn[e]=function(t){return this.on(e,t)}}),_t.expr.pseudos.animated=function(t){return _t.grep(_t.timers,function(e){return t===e.elem}).length},_t.offset={setOffset:function(t,e,i){var n,r,s,o,a,l,u,c=_t.css(t,"position"),h=_t(t),d={};"static"===c&&(t.style.position="relative"),a=h.offset(),s=_t.css(t,"top"),l=_t.css(t,"left"),u=("absolute"===c||"fixed"===c)&&(s+l).indexOf("auto")>-1,u?(n=h.position(),o=n.top,r=n.left):(o=parseFloat(s)||0,r=parseFloat(l)||0),_t.isFunction(e)&&(e=e.call(t,i,_t.extend({},a))),null!=e.top&&(d.top=e.top-a.top+o),null!=e.left&&(d.left=e.left-a.left+r),"using"in e?e.using.call(t,d):h.css(d)}},_t.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){_t.offset.setOffset(this,t,e)});var e,i,n,r,s=this[0];if(s)return s.getClientRects().length?(n=s.getBoundingClientRect(),e=s.ownerDocument,i=e.documentElement,r=e.defaultView,{top:n.top+r.pageYOffset-i.clientTop,left:n.left+r.pageXOffset-i.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var t,e,i=this[0],n={top:0,left:0};return"fixed"===_t.css(i,"position")?e=i.getBoundingClientRect():(t=this.offsetParent(),e=this.offset(),l(t[0],"html")||(n=t.offset()),n={top:n.top+_t.css(t[0],"borderTopWidth",!0),left:n.left+_t.css(t[0],"borderLeftWidth",!0)}),{top:e.top-n.top-_t.css(i,"marginTop",!0),left:e.left-n.left-_t.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&"static"===_t.css(t,"position");)t=t.offsetParent;return t||Qt})}}),_t.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,e){var i="pageYOffset"===e;_t.fn[t]=function(n){return jt(this,function(t,n,r){var s;if(_t.isWindow(t)?s=t:9===t.nodeType&&(s=t.defaultView),void 0===r)return s?s[e]:t[n];s?s.scrollTo(i?s.pageXOffset:r,i?r:s.pageYOffset):t[n]=r},t,n,arguments.length)}}),_t.each(["top","left"],function(t,e){_t.cssHooks[e]=H(vt.pixelPosition,function(t,i){if(i)return i=j(t,e),ue.test(i)?_t(t).position()[e]+"px":i})}),_t.each({Height:"height",Width:"width"},function(t,e){_t.each({padding:"inner"+t,content:e,"":"outer"+t},function(i,n){_t.fn[n]=function(r,s){var o=arguments.length&&(i||"boolean"!=typeof r),a=i||(!0===r||!0===s?"margin":"border");return jt(this,function(e,i,r){var s;return _t.isWindow(e)?0===n.indexOf("outer")?e["inner"+t]:e.document.documentElement["client"+t]:9===e.nodeType?(s=e.documentElement,Math.max(e.body["scroll"+t],s["scroll"+t],e.body["offset"+t],s["offset"+t],s["client"+t])):void 0===r?_t.css(e,i,a):_t.style(e,i,r,a)},e,o?r:void 0,o)}})}),_t.fn.extend({bind:function(t,e,i){return this.on(t,null,e,i)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,i,n){return this.on(e,t,i,n)},undelegate:function(t,e,i){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",i)}}),_t.holdReady=function(t){t?_t.readyWait++:_t.ready(!0)},_t.isArray=Array.isArray,_t.parseJSON=JSON.parse,_t.nodeName=l,n=[],void 0!==(r=function(){return _t}.apply(e,n))&&(t.exports=r);var Xe=i.jQuery,Ge=i.$;return _t.noConflict=function(t){return i.$===_t&&(i.$=Ge),t&&i.jQuery===_t&&(i.jQuery=Xe),_t},s||(i.jQuery=i.$=_t),_t})},function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){i(29),i(18),Vue.component("passport-clients",i(39)),Vue.component("passport-authorized-clients",i(38)),Vue.component("passport-personal-access-tokens",i(40)),Vue.component("importer",i(37))},,,,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["alertType","title"],computed:{alertClassName:function(){return"alert-"+this.alertType}},methods:{hideEvent:function(){this.$emit("hide")}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["errors"]}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["file","customFields"],data:function(){return{activeFile:this.file,processDetail:!1,statusText:null,options:{importType:this.file.import_type,update:!1,importTypes:[{id:"asset",text:"Assets"},{id:"accessory",text:"Accessories"},{id:"consumable",text:"Consumables"},{id:"component",text:"Components"},{id:"license",text:"Licenses"},{id:"user",text:"Users"}],statusText:null},columnOptions:{general:[{id:"category",text:"Category"},{id:"company",text:"Company"},{id:"checkout_to",text:"Checked out to"},{id:"email",text:"Email"},{id:"first_name",text:"First Name"},{id:"item_name",text:"Item Name"},{id:"last_name",text:"Last Name"},{id:"location",text:"Location"},{id:"maintained",text:"Maintained"},{id:"manufacturer",text:"Manufacturer"},{id:"notes",text:"Notes"},{id:"order_number",text:"Order Number"},{id:"purchase_cost",text:"Purchase Cost"},{id:"purchase_date",text:"Purchase Date"},{id:"quantity",text:"Quantity"},{id:"requestable",text:"Requestable"},{id:"serial",text:"Serial Number"},{id:"supplier",text:"Supplier"},{id:"username",text:"Username"}],assets:[{id:"asset_tag",text:"Asset Tag"},{id:"asset_model",text:"Model Name"},{id:"image",text:"Image Filename"},{id:"model_number",text:"Model Number"},{id:"name",text:"Full Name"},{id:"status",text:"Status"},{id:"warranty_months",text:"Warranty Months"}],licenses:[{id:"expiration_date",text:"Expiration Date"},{id:"license_email",text:"Licensed To Email"},{id:"license_name",text:"Licensed To Name"},{id:"purchase_order",text:"Purchase Order"},{id:"reassignable",text:"Reassignable"},{id:"seats",text:"Seats"}],users:[{id:"employee_num",text:"Employee Number"},{id:"jobtitle",text:"Job Title"},{id:"phone_number",text:"Phone Number"}],customFields:this.customFields},columnMappings:this.file.field_map||{},activeColumn:null}},created:function(){window.eventHub.$on("showDetails",this.toggleExtendedDisplay),this.populateSelect2ActiveItems()},computed:{columns:function(){switch(this.options.importType){case"asset":return this.columnOptions.general.concat(this.columnOptions.assets).concat(this.columnOptions.customFields);case"license":return this.columnOptions.general.concat(this.columnOptions.licenses);case"user":return this.columnOptions.general.concat(this.columnOptions.users)}return this.columnOptions.general}},methods:{postSave:function(){var t=this;this.statusText="Processing...",this.$http.post(route("api.imports.importFile",this.file.id),{"import-update":this.options.update,"import-type":this.options.importType,"column-mappings":this.columnMappings}).then(function(e){var i=e.body;t.statusText="Success... Redirecting.",window.location.href=i.messages.redirect_url},function(e){var i=e.body;"import-errors"==i.status?(window.eventHub.$emit("importErrors",i.messages),t.statusText="Error"):t.$emit("alert",{message:i.messages,type:"danger",visible:!0}),t.displayImportModal=!1})},populateSelect2ActiveItems:function(){if(null==this.file.field_map){for(var t=0;t<this.file.header_row.length;t++)this.$set(this.columnMappings,this.file.header_row[t],null);for(var e=0;e<this.columns.length;e++){var i=this.columns[e],n=this.file.header_row.indexOf(i.text);-1!=n&&this.$set(this.columnMappings,this.file.header_row[n],i.id)}}},toggleExtendedDisplay:function(t){t==this.file.id&&(this.processDetail=!this.processDetail)},updateModel:function(t,e){this.columnMappings[t]=e}},components:{select2:i(41)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i(19),e.default={data:function(){return{files:[],displayImportModal:!1,activeFile:null,alert:{type:null,message:null,visible:!1},importErrors:null,progress:{currentClass:"progress-bar-warning",currentPercent:"0",statusText:"",visible:!1},customFields:[]}},mounted:function(){window.eventHub.$on("importErrors",this.updateImportErrors),this.fetchFiles(),this.fetchCustomFields();var t=this;$("#fileupload").fileupload({dataType:"json",done:function(e,i){t.progress.currentClass="progress-bar-success",t.progress.statusText="Success!",t.files=i.result.files.concat(t.files)},add:function(e,i){i.headers={"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":Laravel.csrfToken},i.process().done(function(){i.submit()}),t.progress.visible=!0},progress:function(e,i){var n=parseInt((i.loaded,i.total,10));t.progress.currentPercent=n,t.progress.statusText=n+"% Complete"},fail:function(e,i){t.progress.currentClass="progress-bar-danger",t.progress.statusText=i.jqXHR.responseJSON.messages}})},methods:{fetchFiles:function(){var t=this;this.$http.get(route("api.imports.index")).then(function(e){var i=e.data;return t.files=i},function(e){t.alert.type="danger",t.alert.visible=!0,t.alert.message="Something went wrong fetching files..."})},fetchCustomFields:function(){var t=this;this.$http.get(route("api.customfields.index")).then(function(e){var i=e.data;i=i.rows,i.forEach(function(e){t.customFields.push({id:e.db_column_name,text:e.name})})})},deleteFile:function(t,e){var i=this;this.$http.delete(route("api.imports.destroy",t.id)).then(function(t){return i.files.splice(e,1)},function(t){i.alert.type="danger",i.alert.visible=!0,i.alert.message=t.body.messages})},toggleEvent:function(t){window.eventHub.$emit("showDetails",t)},updateAlert:function(t){this.alert=t},updateImportErrors:function(t){this.importErrors=t}},computed:{progressWidth:function(){return"width: "+10*this.progress.currentPercent+"%"}},components:{alert:i(34),errors:i(35),importFile:i(36)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["clientsUrl","tokensUrl"],data:function(){return{tokens:[]}},ready:function(){this.prepareComponent()},mounted:function(){this.prepareComponent()},methods:{prepareComponent:function(){this.getTokens()},getTokens:function(){var t=this;this.$http.get(this.tokensUrl).then(function(e){t.tokens=e.data})},revoke:function(t){var e=this;this.$http.delete(this.tokensUrl+"/"+t.id).then(function(t){e.getTokens()})}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default={props:["clientsUrl"],data:function(){return{clients:[],createForm:{errors:[],name:"",redirect:""},editForm:{errors:[],name:"",redirect:""}}},ready:function(){this.prepareComponent()},mounted:function(){this.prepareComponent()},methods:{prepareComponent:function(){this.getClients(),$("#modal-create-client").on("shown.bs.modal",function(){$("#create-client-name").focus()}),$("#modal-edit-client").on("shown.bs.modal",function(){$("#edit-client-name").focus()})},getClients:function(){var t=this;this.$http.get(this.clientsUrl).then(function(e){t.clients=e.data})},showCreateClientForm:function(){$("#modal-create-client").modal("show")},store:function(){this.persistClient("post",this.clientsUrl,this.createForm,"#modal-create-client")},edit:function(t){this.editForm.id=t.id,this.editForm.name=t.name,this.editForm.redirect=t.redirect,$("#modal-edit-client").modal("show")},update:function(){this.persistClient("put",this.clientsUrl+"/"+this.editForm.id,this.editForm,"#modal-edit-client")},persistClient:function(t,e,i,r){var s=this;i.errors=[],this.$http[t](e,i).then(function(t){s.getClients(),i.name="",i.redirect="",i.errors=[],$(r).modal("hide")}).catch(function(t){"object"===n(t.data)?i.errors=_.flatten(_.toArray(t.data)):i.errors=["Something went wrong. Please try again."]})},destroy:function(t){var e=this;this.$http.delete(this.clientsUrl+"/"+t.id).then(function(t){e.getClients()})}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default={props:["tokenUrl","scopesUrl"],data:function(){return{accessToken:null,tokens:[],scopes:[],form:{name:"",scopes:[],errors:[]}}},ready:function(){this.prepareComponent()},mounted:function(){this.prepareComponent()},methods:{prepareComponent:function(){this.getTokens(),this.getScopes(),$("#modal-create-token").on("shown.bs.modal",function(){$("#create-token-name").focus()})},getTokens:function(){var t=this;this.$http.get(this.tokenUrl).then(function(e){t.tokens=e.data})},getScopes:function(){var t=this;this.$http.get(this.scopesUrl).then(function(e){t.scopes=e.data})},showCreateTokenForm:function(){$("#modal-create-token").modal("show")},store:function(){var t=this;this.accessToken=null,this.form.errors=[],this.$http.post(this.tokenUrl,this.form).then(function(e){t.form.name="",t.form.scopes=[],t.form.errors=[],t.tokens.push(e.data.token),t.showAccessToken(e.data.accessToken)}).catch(function(e){"object"===n(e.data)?t.form.errors=_.flatten(_.toArray(e.data)):t.form.errors=["Something went wrong. Please try again."]})},toggleScope:function(t){this.scopeIsAssigned(t)?this.form.scopes=_.reject(this.form.scopes,function(e){return e==t}):this.form.scopes.push(t)},scopeIsAssigned:function(t){return _.indexOf(this.form.scopes,t)>=0},showAccessToken:function(t){$("#modal-create-token").modal("hide"),this.accessToken=t,$("#modal-access-token").modal("show")},revoke:function(t){var e=this;this.$http.delete(this.tokenUrl+"/"+t.id).then(function(t){e.getTokens()})}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i(33),e.default={props:["options","value"],mounted:function(){var t=this;$(this.$el).select2({data:this.options}).on("change",function(){t.$emit("input",this.value)}).val(this.value).trigger("change")},watch:{value:function(t){$(this.$el).val(t)},options:function(t){var e=this;$(this.$el).select2("destroy").empty().select2({data:t}).on("change",function(){e.$emit("input",this.value)}).val(this.value).trigger("change")},destroyed:function(){$(this.$el).off().select2("destroy")}}}},function(t,e,i){window._=i(32),window.$=window.jQuery=i(3),i(20),window.Vue=i(59),window.eventHub=new Vue,i(49),Vue.http.interceptors.push(function(t,e){t.headers.set("X-CSRF-TOKEN",Laravel.csrfToken),e()})},function(t,e,i){var n,r,s;!function(o){"use strict";r=[i(3),i(31)],n=o,void 0!==(s="function"==typeof n?n.apply(e,r):n)&&(t.exports=s)}(function(t){"use strict";function e(e){var i="dragover"===e;return function(n){n.dataTransfer=n.originalEvent&&n.originalEvent.dataTransfer;var r=n.dataTransfer;r&&-1!==t.inArray("Files",r.types)&&!1!==this._trigger(e,t.Event(e,{delegatedEvent:n}))&&(n.preventDefault(),i&&(r.dropEffect="copy"))}}t.support.fileInput=!(new RegExp("(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent)||t('<input type="file">').prop("disabled")),t.support.xhrFileUpload=!(!window.ProgressEvent||!window.FileReader),t.support.xhrFormDataFileUpload=!!window.FormData,t.support.blobSlice=window.Blob&&(Blob.prototype.slice||Blob.prototype.webkitSlice||Blob.prototype.mozSlice),t.widget("blueimp.fileupload",{options:{dropZone:t(document),pasteZone:void 0,fileInput:void 0,replaceFileInput:!0,paramName:void 0,singleFileUploads:!0,limitMultiFileUploads:void 0,limitMultiFileUploadSize:void 0,limitMultiFileUploadSizeOverhead:512,sequentialUploads:!1,limitConcurrentUploads:void 0,forceIframeTransport:!1,redirect:void 0,redirectParamName:void 0,postMessage:void 0,multipart:!0,maxChunkSize:void 0,uploadedBytes:void 0,recalculateProgress:!0,progressInterval:100,bitrateInterval:500,autoUpload:!0,messages:{uploadedBytes:"Uploaded bytes exceed file size"},i18n:function(e,i){return e=this.messages[e]||e.toString(),i&&t.each(i,function(t,i){e=e.replace("{"+t+"}",i)}),e},formData:function(t){return t.serializeArray()},add:function(e,i){if(e.isDefaultPrevented())return!1;(i.autoUpload||!1!==i.autoUpload&&t(this).fileupload("option","autoUpload"))&&i.process().done(function(){i.submit()})},processData:!1,contentType:!1,cache:!1,timeout:0},_specialOptions:["fileInput","dropZone","pasteZone","multipart","forceIframeTransport"],_blobSlice:t.support.blobSlice&&function(){return(this.slice||this.webkitSlice||this.mozSlice).apply(this,arguments)},_BitrateTimer:function(){this.timestamp=Date.now?Date.now():(new Date).getTime(),this.loaded=0,this.bitrate=0,this.getBitrate=function(t,e,i){var n=t-this.timestamp;return(!this.bitrate||!i||n>i)&&(this.bitrate=(e-this.loaded)*(1e3/n)*8,this.loaded=e,this.timestamp=t),this.bitrate}},_isXHRUpload:function(e){return!e.forceIframeTransport&&(!e.multipart&&t.support.xhrFileUpload||t.support.xhrFormDataFileUpload)},_getFormData:function(e){var i;return"function"===t.type(e.formData)?e.formData(e.form):t.isArray(e.formData)?e.formData:"object"===t.type(e.formData)?(i=[],t.each(e.formData,function(t,e){i.push({name:t,value:e})}),i):[]},_getTotal:function(e){var i=0;return t.each(e,function(t,e){i+=e.size||1}),i},_initProgressObject:function(e){var i={loaded:0,total:0,bitrate:0};e._progress?t.extend(e._progress,i):e._progress=i},_initResponseObject:function(t){var e;if(t._response)for(e in t._response)t._response.hasOwnProperty(e)&&delete t._response[e];else t._response={}},_onProgress:function(e,i){if(e.lengthComputable){var n,r=Date.now?Date.now():(new Date).getTime();if(i._time&&i.progressInterval&&r-i._time<i.progressInterval&&e.loaded!==e.total)return;i._time=r,n=Math.floor(e.loaded/e.total*(i.chunkSize||i._progress.total))+(i.uploadedBytes||0),this._progress.loaded+=n-i._progress.loaded,this._progress.bitrate=this._bitrateTimer.getBitrate(r,this._progress.loaded,i.bitrateInterval),i._progress.loaded=i.loaded=n,i._progress.bitrate=i.bitrate=i._bitrateTimer.getBitrate(r,n,i.bitrateInterval),this._trigger("progress",t.Event("progress",{delegatedEvent:e}),i),this._trigger("progressall",t.Event("progressall",{delegatedEvent:e}),this._progress)}},_initProgressListener:function(e){var i=this,n=e.xhr?e.xhr():t.ajaxSettings.xhr();n.upload&&(t(n.upload).bind("progress",function(t){var n=t.originalEvent;t.lengthComputable=n.lengthComputable,t.loaded=n.loaded,t.total=n.total,i._onProgress(t,e)}),e.xhr=function(){return n})},_isInstanceOf:function(t,e){return Object.prototype.toString.call(e)==="[object "+t+"]"},_initXHRData:function(e){var i,n=this,r=e.files[0],s=e.multipart||!t.support.xhrFileUpload,o="array"===t.type(e.paramName)?e.paramName[0]:e.paramName;e.headers=t.extend({},e.headers),e.contentRange&&(e.headers["Content-Range"]=e.contentRange),s&&!e.blob&&this._isInstanceOf("File",r)||(e.headers["Content-Disposition"]='attachment; filename="'+encodeURI(r.name)+'"'),s?t.support.xhrFormDataFileUpload&&(e.postMessage?(i=this._getFormData(e),e.blob?i.push({name:o,value:e.blob}):t.each(e.files,function(n,r){i.push({name:"array"===t.type(e.paramName)&&e.paramName[n]||o,value:r})})):(n._isInstanceOf("FormData",e.formData)?i=e.formData:(i=new FormData,t.each(this._getFormData(e),function(t,e){i.append(e.name,e.value)})),e.blob?i.append(o,e.blob,r.name):t.each(e.files,function(r,s){(n._isInstanceOf("File",s)||n._isInstanceOf("Blob",s))&&i.append("array"===t.type(e.paramName)&&e.paramName[r]||o,s,s.uploadName||s.name)})),e.data=i):(e.contentType=r.type||"application/octet-stream",e.data=e.blob||r),e.blob=null},_initIframeSettings:function(e){var i=t("<a></a>").prop("href",e.url).prop("host");e.dataType="iframe "+(e.dataType||""),e.formData=this._getFormData(e),e.redirect&&i&&i!==location.host&&e.formData.push({name:e.redirectParamName||"redirect",value:e.redirect})},_initDataSettings:function(t){this._isXHRUpload(t)?(this._chunkedUpload(t,!0)||(t.data||this._initXHRData(t),this._initProgressListener(t)),t.postMessage&&(t.dataType="postmessage "+(t.dataType||""))):this._initIframeSettings(t)},_getParamName:function(e){var i=t(e.fileInput),n=e.paramName;return n?t.isArray(n)||(n=[n]):(n=[],i.each(function(){for(var e=t(this),i=e.prop("name")||"files[]",r=(e.prop("files")||[1]).length;r;)n.push(i),r-=1}),n.length||(n=[i.prop("name")||"files[]"])),n},_initFormSettings:function(e){e.form&&e.form.length||(e.form=t(e.fileInput.prop("form")),e.form.length||(e.form=t(this.options.fileInput.prop("form")))),e.paramName=this._getParamName(e),e.url||(e.url=e.form.prop("action")||location.href),e.type=(e.type||"string"===t.type(e.form.prop("method"))&&e.form.prop("method")||"").toUpperCase(),"POST"!==e.type&&"PUT"!==e.type&&"PATCH"!==e.type&&(e.type="POST"),e.formAcceptCharset||(e.formAcceptCharset=e.form.attr("accept-charset"))},_getAJAXSettings:function(e){var i=t.extend({},this.options,e);return this._initFormSettings(i),this._initDataSettings(i),i},_getDeferredState:function(t){return t.state?t.state():t.isResolved()?"resolved":t.isRejected()?"rejected":"pending"},_enhancePromise:function(t){return t.success=t.done,t.error=t.fail,t.complete=t.always,t},_getXHRPromise:function(e,i,n){var r=t.Deferred(),s=r.promise();return i=i||this.options.context||s,!0===e?r.resolveWith(i,n):!1===e&&r.rejectWith(i,n),s.abort=r.promise,this._enhancePromise(s)},_addConvenienceMethods:function(e,i){var n=this,r=function(e){return t.Deferred().resolveWith(n,e).promise()};i.process=function(e,s){return(e||s)&&(i._processQueue=this._processQueue=(this._processQueue||r([this])).then(function(){return i.errorThrown?t.Deferred().rejectWith(n,[i]).promise():r(arguments)}).then(e,s)),this._processQueue||r([this])},i.submit=function(){return"pending"!==this.state()&&(i.jqXHR=this.jqXHR=!1!==n._trigger("submit",t.Event("submit",{delegatedEvent:e}),this)&&n._onSend(e,this)),this.jqXHR||n._getXHRPromise()},i.abort=function(){return this.jqXHR?this.jqXHR.abort():(this.errorThrown="abort",n._trigger("fail",null,this),n._getXHRPromise(!1))},i.state=function(){return this.jqXHR?n._getDeferredState(this.jqXHR):this._processQueue?n._getDeferredState(this._processQueue):void 0},i.processing=function(){return!this.jqXHR&&this._processQueue&&"pending"===n._getDeferredState(this._processQueue)},i.progress=function(){return this._progress},i.response=function(){return this._response}},_getUploadedBytes:function(t){var e=t.getResponseHeader("Range"),i=e&&e.split("-"),n=i&&i.length>1&&parseInt(i[1],10);return n&&n+1},_chunkedUpload:function(e,i){e.uploadedBytes=e.uploadedBytes||0;var n,r,s=this,o=e.files[0],a=o.size,l=e.uploadedBytes,u=e.maxChunkSize||a,c=this._blobSlice,h=t.Deferred(),d=h.promise();return!(!(this._isXHRUpload(e)&&c&&(l||u<a))||e.data)&&(!!i||(l>=a?(o.error=e.i18n("uploadedBytes"),this._getXHRPromise(!1,e.context,[null,"error",o.error])):(r=function(){var i=t.extend({},e),d=i._progress.loaded;i.blob=c.call(o,l,l+u,o.type),i.chunkSize=i.blob.size,i.contentRange="bytes "+l+"-"+(l+i.chunkSize-1)+"/"+a,s._initXHRData(i),s._initProgressListener(i),n=(!1!==s._trigger("chunksend",null,i)&&t.ajax(i)||s._getXHRPromise(!1,i.context)).done(function(n,o,u){l=s._getUploadedBytes(u)||l+i.chunkSize,d+i.chunkSize-i._progress.loaded&&s._onProgress(t.Event("progress",{lengthComputable:!0,loaded:l-i.uploadedBytes,total:l-i.uploadedBytes}),i),e.uploadedBytes=i.uploadedBytes=l,i.result=n,i.textStatus=o,i.jqXHR=u,s._trigger("chunkdone",null,i),s._trigger("chunkalways",null,i),l<a?r():h.resolveWith(i.context,[n,o,u])}).fail(function(t,e,n){i.jqXHR=t,i.textStatus=e,i.errorThrown=n,s._trigger("chunkfail",null,i),s._trigger("chunkalways",null,i),h.rejectWith(i.context,[t,e,n])})},this._enhancePromise(d),d.abort=function(){return n.abort()},r(),d)))},_beforeSend:function(t,e){0===this._active&&(this._trigger("start"),this._bitrateTimer=new this._BitrateTimer,this._progress.loaded=this._progress.total=0,this._progress.bitrate=0),this._initResponseObject(e),this._initProgressObject(e),e._progress.loaded=e.loaded=e.uploadedBytes||0,e._progress.total=e.total=this._getTotal(e.files)||1,e._progress.bitrate=e.bitrate=0,this._active+=1,this._progress.loaded+=e.loaded,this._progress.total+=e.total},_onDone:function(e,i,n,r){var s=r._progress.total,o=r._response;r._progress.loaded<s&&this._onProgress(t.Event("progress",{lengthComputable:!0,loaded:s,total:s}),r),o.result=r.result=e,o.textStatus=r.textStatus=i,o.jqXHR=r.jqXHR=n,this._trigger("done",null,r)},_onFail:function(t,e,i,n){var r=n._response;n.recalculateProgress&&(this._progress.loaded-=n._progress.loaded,this._progress.total-=n._progress.total),r.jqXHR=n.jqXHR=t,r.textStatus=n.textStatus=e,r.errorThrown=n.errorThrown=i,this._trigger("fail",null,n)},_onAlways:function(t,e,i,n){this._trigger("always",null,n)},_onSend:function(e,i){i.submit||this._addConvenienceMethods(e,i);var n,r,s,o,a=this,l=a._getAJAXSettings(i),u=function(){return a._sending+=1,l._bitrateTimer=new a._BitrateTimer,n=n||((r||!1===a._trigger("send",t.Event("send",{delegatedEvent:e}),l))&&a._getXHRPromise(!1,l.context,r)||a._chunkedUpload(l)||t.ajax(l)).done(function(t,e,i){a._onDone(t,e,i,l)}).fail(function(t,e,i){a._onFail(t,e,i,l)}).always(function(t,e,i){if(a._onAlways(t,e,i,l),a._sending-=1,a._active-=1,l.limitConcurrentUploads&&l.limitConcurrentUploads>a._sending)for(var n=a._slots.shift();n;){if("pending"===a._getDeferredState(n)){n.resolve();break}n=a._slots.shift()}0===a._active&&a._trigger("stop")})};return this._beforeSend(e,l),this.options.sequentialUploads||this.options.limitConcurrentUploads&&this.options.limitConcurrentUploads<=this._sending?(this.options.limitConcurrentUploads>1?(s=t.Deferred(),this._slots.push(s),o=s.then(u)):(this._sequence=this._sequence.then(u,u),o=this._sequence),o.abort=function(){return r=[void 0,"abort","abort"],n?n.abort():(s&&s.rejectWith(l.context,r),u())},this._enhancePromise(o)):u()},_onAdd:function(e,i){var n,r,s,o,a=this,l=!0,u=t.extend({},this.options,i),c=i.files,h=c.length,d=u.limitMultiFileUploads,p=u.limitMultiFileUploadSize,f=u.limitMultiFileUploadSizeOverhead,g=0,m=this._getParamName(u),v=0;if(!h)return!1;if(p&&void 0===c[0].size&&(p=void 0),(u.singleFileUploads||d||p)&&this._isXHRUpload(u))if(u.singleFileUploads||p||!d)if(!u.singleFileUploads&&p)for(s=[],n=[],o=0;o<h;o+=1)g+=c[o].size+f,(o+1===h||g+c[o+1].size+f>p||d&&o+1-v>=d)&&(s.push(c.slice(v,o+1)),r=m.slice(v,o+1),r.length||(r=m),n.push(r),v=o+1,g=0);else n=m;else for(s=[],n=[],o=0;o<h;o+=d)s.push(c.slice(o,o+d)),r=m.slice(o,o+d),r.length||(r=m),n.push(r);else s=[c],n=[m];return i.originalFiles=c,t.each(s||c,function(r,o){var u=t.extend({},i);return u.files=s?o:[o],u.paramName=n[r],a._initResponseObject(u),a._initProgressObject(u),a._addConvenienceMethods(e,u),l=a._trigger("add",t.Event("add",{delegatedEvent:e}),u)}),l},_replaceFileInput:function(e){var i=e.fileInput,n=i.clone(!0),r=i.is(document.activeElement);e.fileInputClone=n,t("<form></form>").append(n)[0].reset(),i.after(n).detach(),r&&n.focus(),t.cleanData(i.unbind("remove")),this.options.fileInput=this.options.fileInput.map(function(t,e){return e===i[0]?n[0]:e}),i[0]===this.element[0]&&(this.element=n)},_handleFileTreeEntry:function(e,i){var n,r=this,s=t.Deferred(),o=[],a=function(t){t&&!t.entry&&(t.entry=e),s.resolve([t])},l=function(t){r._handleFileTreeEntries(t,i+e.name+"/").done(function(t){s.resolve(t)}).fail(a)},u=function(){n.readEntries(function(t){t.length?(o=o.concat(t),u()):l(o)},a)};return i=i||"",e.isFile?e._file?(e._file.relativePath=i,s.resolve(e._file)):e.file(function(t){t.relativePath=i,s.resolve(t)},a):e.isDirectory?(n=e.createReader(),u()):s.resolve([]),s.promise()},_handleFileTreeEntries:function(e,i){var n=this;return t.when.apply(t,t.map(e,function(t){return n._handleFileTreeEntry(t,i)})).then(function(){return Array.prototype.concat.apply([],arguments)})},_getDroppedFiles:function(e){e=e||{};var i=e.items;return i&&i.length&&(i[0].webkitGetAsEntry||i[0].getAsEntry)?this._handleFileTreeEntries(t.map(i,function(t){var e;return t.webkitGetAsEntry?(e=t.webkitGetAsEntry(),e&&(e._file=t.getAsFile()),e):t.getAsEntry()})):t.Deferred().resolve(t.makeArray(e.files)).promise()},_getSingleFileInputFiles:function(e){e=t(e);var i,n,r=e.prop("webkitEntries")||e.prop("entries");if(r&&r.length)return this._handleFileTreeEntries(r);if(i=t.makeArray(e.prop("files")),i.length)void 0===i[0].name&&i[0].fileName&&t.each(i,function(t,e){e.name=e.fileName,e.size=e.fileSize});else{if(!(n=e.prop("value")))return t.Deferred().resolve([]).promise();i=[{name:n.replace(/^.*\\/,"")}]}return t.Deferred().resolve(i).promise()},_getFileInputFiles:function(e){return e instanceof t&&1!==e.length?t.when.apply(t,t.map(e,this._getSingleFileInputFiles)).then(function(){return Array.prototype.concat.apply([],arguments)}):this._getSingleFileInputFiles(e)},_onChange:function(e){var i=this,n={fileInput:t(e.target),form:t(e.target.form)};this._getFileInputFiles(n.fileInput).always(function(r){n.files=r,i.options.replaceFileInput&&i._replaceFileInput(n),!1!==i._trigger("change",t.Event("change",{delegatedEvent:e}),n)&&i._onAdd(e,n)})},_onPaste:function(e){var i=e.originalEvent&&e.originalEvent.clipboardData&&e.originalEvent.clipboardData.items,n={files:[]};i&&i.length&&(t.each(i,function(t,e){var i=e.getAsFile&&e.getAsFile();i&&n.files.push(i)}),!1!==this._trigger("paste",t.Event("paste",{delegatedEvent:e}),n)&&this._onAdd(e,n))},_onDrop:function(e){e.dataTransfer=e.originalEvent&&e.originalEvent.dataTransfer;var i=this,n=e.dataTransfer,r={};n&&n.files&&n.files.length&&(e.preventDefault(),this._getDroppedFiles(n).always(function(n){r.files=n,!1!==i._trigger("drop",t.Event("drop",{delegatedEvent:e}),r)&&i._onAdd(e,r)}))},_onDragOver:e("dragover"),_onDragEnter:e("dragenter"),_onDragLeave:e("dragleave"),_initEventHandlers:function(){this._isXHRUpload(this.options)&&(this._on(this.options.dropZone,{dragover:this._onDragOver,drop:this._onDrop,dragenter:this._onDragEnter,dragleave:this._onDragLeave}),this._on(this.options.pasteZone,{paste:this._onPaste})),t.support.fileInput&&this._on(this.options.fileInput,{change:this._onChange})},_destroyEventHandlers:function(){this._off(this.options.dropZone,"dragenter dragleave dragover drop"),this._off(this.options.pasteZone,"paste"),this._off(this.options.fileInput,"change")},_destroy:function(){this._destroyEventHandlers()},_setOption:function(e,i){var n=-1!==t.inArray(e,this._specialOptions);n&&this._destroyEventHandlers(),this._super(e,i),n&&(this._initSpecialOptions(),this._initEventHandlers())},_initSpecialOptions:function(){var e=this.options;void 0===e.fileInput?e.fileInput=this.element.is('input[type="file"]')?this.element:this.element.find('input[type="file"]'):e.fileInput instanceof t||(e.fileInput=t(e.fileInput)),e.dropZone instanceof t||(e.dropZone=t(e.dropZone)),e.pasteZone instanceof t||(e.pasteZone=t(e.pasteZone))},_getRegExp:function(t){var e=t.split("/"),i=e.pop();return e.shift(),new RegExp(e.join("/"),i)},_isRegExpOption:function(e,i){return"url"!==e&&"string"===t.type(i)&&/^\/.*\/[igm]{0,3}$/.test(i)},_initDataAttributes:function(){var e=this,i=this.options,n=this.element.data();t.each(this.element[0].attributes,function(t,r){var s,o=r.name.toLowerCase();/^data-/.test(o)&&(o=o.slice(5).replace(/-[a-z]/g,function(t){return t.charAt(1).toUpperCase()}),s=n[o],e._isRegExpOption(o,s)&&(s=e._getRegExp(s)),i[o]=s)})},_create:function(){this._initDataAttributes(),this._initSpecialOptions(),this._slots=[],this._sequence=this._getXHRPromise(!0),this._sending=this._active=0,this._initProgressObject(this),this._initEventHandlers()},active:function(){return this._active},progress:function(){return this._progress},add:function(e){var i=this;e&&!this.options.disabled&&(e.fileInput&&!e.files?this._getFileInputFiles(e.fileInput).always(function(t){e.files=t,i._onAdd(null,e)}):(e.files=t.makeArray(e.files),this._onAdd(null,e)))},send:function(e){if(e&&!this.options.disabled){if(e.fileInput&&!e.files){var i,n,r=this,s=t.Deferred(),o=s.promise();return o.abort=function(){return n=!0,i?i.abort():(s.reject(null,"abort","abort"),o)},this._getFileInputFiles(e.fileInput).always(function(t){if(!n){if(!t.length)return void s.reject();e.files=t,i=r._onSend(null,e),i.then(function(t,e,i){s.resolve(t,e,i)},function(t,e,i){s.reject(t,e,i)})}}),this._enhancePromise(o)}if(e.files=t.makeArray(e.files),e.files.length)return this._onSend(null,e)}return this._getXHRPromise(!1,e&&e.context)}})})},function(t,e){"format global";"deps jquery";"exports $";/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,n=this;t(this).one("bsTransitionEnd",function(){i=!0});var r=function(){i||t(n).trigger(t.support.transition.end)};return setTimeout(r,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(t){"use strict";function e(e){return this.each(function(){var i=t(this),r=i.data("bs.alert");r||i.data("bs.alert",r=new n(this)),"string"==typeof e&&r[e].call(i)})}var i='[data-dismiss="alert"]',n=function(e){t(e).on("click",i,this.close)};n.VERSION="3.3.4",n.TRANSITION_DURATION=150,n.prototype.close=function(e){function i(){o.detach().trigger("closed.bs.alert").remove()}var r=t(this),s=r.attr("data-target");s||(s=r.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var o=t(s);e&&e.preventDefault(),o.length||(o=r.closest(".alert")),o.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(o.removeClass("in"),t.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",i).emulateTransitionEnd(n.TRANSITION_DURATION):i())};var r=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=n,t.fn.alert.noConflict=function(){return t.fn.alert=r,this},t(document).on("click.bs.alert.data-api",i,n.prototype.close)}(jQuery),function(t){"use strict";function e(e){return this.each(function(){var n=t(this),r=n.data("bs.button"),s="object"==typeof e&&e;r||n.data("bs.button",r=new i(this,s)),"toggle"==e?r.toggle():e&&r.setState(e)})}var i=function(e,n){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,n),this.isLoading=!1};i.VERSION="3.3.4",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(e){var i="disabled",n=this.$element,r=n.is("input")?"val":"html",s=n.data();e+="Text",null==s.resetText&&n.data("resetText",n[r]()),setTimeout(t.proxy(function(){n[r](null==s[e]?this.options[e]:s[e]),"loadingText"==e?(this.isLoading=!0,n.addClass(i).attr(i,i)):this.isLoading&&(this.isLoading=!1,n.removeClass(i).removeAttr(i))},this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")&&(i.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&i.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));t&&this.$element.toggleClass("active")};var n=t.fn.button;t.fn.button=e,t.fn.button.Constructor=i,t.fn.button.noConflict=function(){return t.fn.button=n,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var n=t(i.target);n.hasClass("btn")||(n=n.closest(".btn")),e.call(n,"toggle"),i.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),function(t){"use strict";function e(e){return this.each(function(){var n=t(this),r=n.data("bs.carousel"),s=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e),o="string"==typeof e?e:s.slide;r||n.data("bs.carousel",r=new i(this,s)),"number"==typeof e?r.to(e):o?r[o]():s.interval&&r.pause().cycle()})}var i=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};i.VERSION="3.3.4",i.TRANSITION_DURATION=600,i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},i.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},i.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},i.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e);if(("prev"==t&&0===i||"next"==t&&i==this.$items.length-1)&&!this.options.wrap)return e;var n="prev"==t?-1:1,r=(i+n)%this.$items.length;return this.$items.eq(r)},i.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},i.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){if(!this.sliding)return this.slide("next")},i.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},i.prototype.slide=function(e,n){var r=this.$element.find(".item.active"),s=n||this.getItemForDirection(e,r),o=this.interval,a="next"==e?"left":"right",l=this;if(s.hasClass("active"))return this.sliding=!1;var u=s[0],c=t.Event("slide.bs.carousel",{relatedTarget:u,direction:a});if(this.$element.trigger(c),!c.isDefaultPrevented()){if(this.sliding=!0,o&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=t(this.$indicators.children()[this.getItemIndex(s)]);h&&h.addClass("active")}var d=t.Event("slid.bs.carousel",{relatedTarget:u,direction:a});return t.support.transition&&this.$element.hasClass("slide")?(s.addClass(e),s[0].offsetWidth,r.addClass(a),s.addClass(a),r.one("bsTransitionEnd",function(){s.removeClass([e,a].join(" ")).addClass("active"),r.removeClass(["active",a].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(d)},0)}).emulateTransitionEnd(i.TRANSITION_DURATION)):(r.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(d)),o&&this.cycle(),this}};var n=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=i,t.fn.carousel.noConflict=function(){return t.fn.carousel=n,this};var r=function(i){var n,r=t(this),s=t(r.attr("data-target")||(n=r.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""));if(s.hasClass("carousel")){var o=t.extend({},s.data(),r.data()),a=r.attr("data-slide-to");a&&(o.interval=!1),e.call(s,o),a&&s.data("bs.carousel").to(a),i.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",r).on("click.bs.carousel.data-api","[data-slide-to]",r),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var i=t(this);e.call(i,i.data())})})}(jQuery),function(t){"use strict";function e(e){var i,n=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(n)}function i(e){return this.each(function(){var i=t(this),r=i.data("bs.collapse"),s=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e);!r&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),r||i.data("bs.collapse",r=new n(this,s)),"string"==typeof e&&r[e]()})}var n=function(e,i){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};n.VERSION="3.3.4",n.TRANSITION_DURATION=350,n.DEFAULTS={toggle:!0},n.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},n.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,r=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(r&&r.length&&(e=r.data("bs.collapse"))&&e.transitioning)){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){r&&r.length&&(i.call(r,"hide"),e||r.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var a=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return a.call(this);var l=t.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",t.proxy(a,this)).emulateTransitionEnd(n.TRANSITION_DURATION)[o](this.$element[0][l])}}}},n.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var r=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!t.support.transition)return r.call(this);this.$element[i](0).one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(n.TRANSITION_DURATION)}}},n.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},n.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,n){var r=t(n);this.addAriaAndCollapsedClass(e(r),r)},this)).end()},n.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var r=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=n,t.fn.collapse.noConflict=function(){return t.fn.collapse=r,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(n){var r=t(this);r.attr("data-target")||n.preventDefault();var s=e(r),o=s.data("bs.collapse"),a=o?"toggle":r.data();i.call(s,a)})}(jQuery),function(t){"use strict";function e(e){e&&3===e.which||(t(r).remove(),t(s).each(function(){var n=t(this),r=i(n),s={relatedTarget:this};r.hasClass("open")&&(r.trigger(e=t.Event("hide.bs.dropdown",s)),e.isDefaultPrevented()||(n.attr("aria-expanded","false"),r.removeClass("open").trigger("hidden.bs.dropdown",s)))}))}function i(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var n=i&&t(i);return n&&n.length?n:e.parent()}function n(e){return this.each(function(){var i=t(this),n=i.data("bs.dropdown");n||i.data("bs.dropdown",n=new o(this)),"string"==typeof e&&n[e].call(i)})}var r=".dropdown-backdrop",s='[data-toggle="dropdown"]',o=function(e){t(e).on("click.bs.dropdown",this.toggle)};o.VERSION="3.3.4",o.prototype.toggle=function(n){var r=t(this);if(!r.is(".disabled, :disabled")){var s=i(r),o=s.hasClass("open");if(e(),!o){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e);var a={relatedTarget:this};if(s.trigger(n=t.Event("show.bs.dropdown",a)),n.isDefaultPrevented())return;r.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger("shown.bs.dropdown",a)}return!1}},o.prototype.keydown=function(e){if(/(38|40|27|32)/.test(e.which)&&!/input|textarea/i.test(e.target.tagName)){var n=t(this);if(e.preventDefault(),e.stopPropagation(),!n.is(".disabled, :disabled")){var r=i(n),o=r.hasClass("open");if(!o&&27!=e.which||o&&27==e.which)return 27==e.which&&r.find(s).trigger("focus"),n.trigger("click");var a=" li:not(.disabled):visible a",l=r.find('[role="menu"]'+a+', [role="listbox"]'+a);if(l.length){var u=l.index(e.target);38==e.which&&u>0&&u--,40==e.which&&u<l.length-1&&u++,~u||(u=0),l.eq(u).trigger("focus")}}}};var a=t.fn.dropdown;t.fn.dropdown=n,t.fn.dropdown.Constructor=o,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,o.prototype.toggle).on("keydown.bs.dropdown.data-api",s,o.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',o.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',o.prototype.keydown)}(jQuery),function(t){"use strict";function e(e,n){return this.each(function(){var r=t(this),s=r.data("bs.modal"),o=t.extend({},i.DEFAULTS,r.data(),"object"==typeof e&&e);s||r.data("bs.modal",s=new i(this,o)),"string"==typeof e?s[e](n):o.show&&s.show(n)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.4",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var n=this,r=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(r),this.isShown||r.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){n.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(n.$element)&&(n.ignoreBackdropClick=!0)})}),this.backdrop(function(){var r=t.support.transition&&n.$element.hasClass("fade");n.$element.parent().length||n.$element.appendTo(n.$body),n.$element.show().scrollTop(0),n.adjustDialog(),r&&n.$element[0].offsetWidth,n.$element.addClass("in").attr("aria-hidden",!1),n.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});r?n.$dialog.one("bsTransitionEnd",function(){n.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(i.TRANSITION_DURATION):n.$element.trigger("focus").trigger(s)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var n=this,r=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&r;if(this.$backdrop=t('<div class="modal-backdrop '+r+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){if(this.ignoreBackdropClick)return void(this.ignoreBackdropClick=!1);t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var o=function(){n.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",o).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):o()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var n=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=n,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var n=t(this),r=n.attr("href"),s=t(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),o=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(r)&&r},s.data(),n.data());n.is("a")&&i.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){n.is(":visible")&&n.trigger("focus")})}),e.call(s,o,this)})}(jQuery),function(t){"use strict";function e(e){return this.each(function(){var n=t(this),r=n.data("bs.tooltip"),s="object"==typeof e&&e;!r&&/destroy|hide/.test(e)||(r||n.data("bs.tooltip",r=new i(this,s)),"string"==typeof e&&r[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.init("tooltip",t,e)};i.VERSION="3.3.4",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,n){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(n),this.$viewport=this.options.viewport&&t(this.options.viewport.selector||this.options.viewport),this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var r=this.options.trigger.split(" "),s=r.length;s--;){var o=r[s];if("click"==o)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=o){var a="hover"==o?"mouseenter":"focusin",l="hover"==o?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,n){i[t]!=n&&(e[t]=n)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i&&i.$tip&&i.$tip.is(":visible")?void(i.hoverState="in"):(i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="out",!i.options.delay||!i.options.delay.hide)return i.hide();i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var n=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!n)return;var r=this,s=this.tip(),o=this.getUID(this.type);this.setContent(),s.attr("id",o),this.$element.attr("aria-describedby",o),this.options.animation&&s.addClass("fade");var a="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,u=l.test(a);u&&(a=a.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element);var c=this.getPosition(),h=s[0].offsetWidth,d=s[0].offsetHeight;if(u){var p=a,f=this.options.container?t(this.options.container):this.$element.parent(),g=this.getPosition(f);a="bottom"==a&&c.bottom+d>g.bottom?"top":"top"==a&&c.top-d<g.top?"bottom":"right"==a&&c.right+h>g.width?"left":"left"==a&&c.left-h<g.left?"right":a,s.removeClass(p).addClass(a)}var m=this.getCalculatedOffset(a,c,h,d);this.applyPlacement(m,a);var v=function(){var t=r.hoverState;r.$element.trigger("shown.bs."+r.type),r.hoverState=null,"out"==t&&r.leave(r)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",v).emulateTransitionEnd(i.TRANSITION_DURATION):v()}},i.prototype.applyPlacement=function(e,i){var n=this.tip(),r=n[0].offsetWidth,s=n[0].offsetHeight,o=parseInt(n.css("margin-top"),10),a=parseInt(n.css("margin-left"),10);isNaN(o)&&(o=0),isNaN(a)&&(a=0),e.top=e.top+o,e.left=e.left+a,t.offset.setOffset(n[0],t.extend({using:function(t){n.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),n.addClass("in");var l=n[0].offsetWidth,u=n[0].offsetHeight;"top"==i&&u!=s&&(e.top=e.top+s-u);var c=this.getViewportAdjustedDelta(i,e,l,u);c.left?e.left+=c.left:e.top+=c.top;var h=/top|bottom/.test(i),d=h?2*c.left-r+l:2*c.top-s+u,p=h?"offsetWidth":"offsetHeight";n.offset(e),this.replaceArrow(d,n[0][p],h)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function n(){"in"!=r.hoverState&&s.detach(),r.$element.removeAttr("aria-describedby").trigger("hidden.bs."+r.type),e&&e()}var r=this,s=t(this.$tip),o=t.Event("hide.bs."+this.type);if(this.$element.trigger(o),!o.isDefaultPrevented())return s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",n).emulateTransitionEnd(i.TRANSITION_DURATION):n(),this.hoverState=null,this},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],n="BODY"==i.tagName,r=i.getBoundingClientRect();null==r.width&&(r=t.extend({},r,{width:r.right-r.left,height:r.bottom-r.top}));var s=n?{top:0,left:0}:e.offset(),o={scroll:n?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},a=n?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},r,o,a,s)},i.prototype.getCalculatedOffset=function(t,e,i,n){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-n,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-n/2,left:e.left-i}:{top:e.top+e.height/2-n/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,n){var r={top:0,left:0};if(!this.$viewport)return r;var s=this.options.viewport&&this.options.viewport.padding||0,o=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-s-o.scroll,l=e.top+s-o.scroll+n;a<o.top?r.top=o.top-a:l>o.top+o.height&&(r.top=o.top+o.height-l)}else{var u=e.left-s,c=e.left+s+i;u<o.left?r.left=o.left-u:c>o.width&&(r.left=o.left+o.width-c)}return r},i.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},i.prototype.getUID=function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},i.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&((i=t(e.currentTarget).data("bs."+this.type))||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type)})};var n=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=n,this}}(jQuery),function(t){"use strict";function e(e){return this.each(function(){var n=t(this),r=n.data("bs.popover"),s="object"==typeof e&&e;!r&&/destroy|hide/.test(e)||(r||n.data("bs.popover",r=new i(this,s)),"string"==typeof e&&r[e]())})}var i=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="3.3.4",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var n=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=i,t.fn.popover.noConflict=function(){return t.fn.popover=n,this}}(jQuery),function(t){"use strict";function e(i,n){this.$body=t(document.body),this.$scrollElement=t(t(i).is(document.body)?window:i),this.options=t.extend({},e.DEFAULTS,n),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function i(i){return this.each(function(){var n=t(this),r=n.data("bs.scrollspy"),s="object"==typeof i&&i;r||n.data("bs.scrollspy",r=new e(this,s)),"string"==typeof i&&r[i]()})}e.VERSION="3.3.4",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e=this,i="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(i="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var e=t(this),r=e.data("target")||e.attr("href"),s=/^#./.test(r)&&t(r);return s&&s.length&&s.is(":visible")&&[[s[i]().top+n,r]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),n=this.options.offset+i-this.$scrollElement.height(),r=this.offsets,s=this.targets,o=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),e>=n)return o!=(t=s[s.length-1])&&this.activate(t);if(o&&e<r[0])return this.activeTarget=null,this.clear();for(t=r.length;t--;)o!=s[t]&&e>=r[t]&&(void 0===r[t+1]||e<r[t+1])&&this.activate(s[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',n=t(i).parents("li").addClass("active");n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var n=t.fn.scrollspy;t.fn.scrollspy=i,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=n,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery),function(t){"use strict";function e(e){return this.each(function(){var n=t(this),r=n.data("bs.tab");r||n.data("bs.tab",r=new i(this)),"string"==typeof e&&r[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.3.4",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),n=e.data("target");if(n||(n=e.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var r=i.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),o=t.Event("show.bs.tab",{relatedTarget:r[0]});if(r.trigger(s),e.trigger(o),!o.isDefaultPrevented()&&!s.isDefaultPrevented()){var a=t(n);this.activate(e.closest("li"),i),this.activate(a,a.parent(),function(){r.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:r[0]})})}}},i.prototype.activate=function(e,n,r){function s(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),a?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),r&&r()}var o=n.find("> .active"),a=r&&t.support.transition&&(o.length&&o.hasClass("fade")||!!n.find("> .fade").length);o.length&&a?o.one("bsTransitionEnd",s).emulateTransitionEnd(i.TRANSITION_DURATION):s(),o.removeClass("in")};var n=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=n,this};var r=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',r).on("click.bs.tab.data-api",'[data-toggle="pill"]',r)}(jQuery),function(t){"use strict";function e(e){return this.each(function(){var n=t(this),r=n.data("bs.affix"),s="object"==typeof e&&e;r||n.data("bs.affix",r=new i(this,s)),"string"==typeof e&&r[e]()})}var i=function(e,n){this.options=t.extend({},i.DEFAULTS,n),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.3.4",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,e,i,n){var r=this.$target.scrollTop(),s=this.$element.offset(),o=this.$target.height();if(null!=i&&"top"==this.affixed)return r<i&&"top";if("bottom"==this.affixed)return null!=i?!(r+this.unpin<=s.top)&&"bottom":!(r+o<=t-n)&&"bottom";var a=null==this.affixed,l=a?r:s.top,u=a?o:e;return null!=i&&r<=i?"top":null!=n&&l+u>=t-n&&"bottom"},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),n=this.options.offset,r=n.top,s=n.bottom,o=t(document.body).height();"object"!=typeof n&&(s=r=n),"function"==typeof r&&(r=n.top(this.$element)),"function"==typeof s&&(s=n.bottom(this.$element));var a=this.getState(o,e,r,s);if(this.affixed!=a){null!=this.unpin&&this.$element.css("top","");var l="affix"+(a?"-"+a:""),u=t.Event(l+".bs.affix");if(this.$element.trigger(u),u.isDefaultPrevented())return;this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==a&&this.$element.offset({top:o-e-s})}};var n=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=n,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),n=i.data();n.offset=n.offset||{},null!=n.offsetBottom&&(n.offset.bottom=n.offsetBottom),null!=n.offsetTop&&(n.offset.top=n.offsetTop),e.call(i,n)})})}(jQuery)},function(t,e,i){e=t.exports=i(0)(),e.push([t.i,".action-link[data-v-225778c2]{cursor:pointer}.m-b-none[data-v-225778c2]{margin-bottom:0}",""])},function(t,e,i){e=t.exports=i(0)(),e.push([t.i,"",""])},function(t,e,i){e=t.exports=i(0)(),e.push([t.i,"td[data-v-5301a236],th[data-v-5301a236]{font-size:13px}",""])},function(t,e,i){e=t.exports=i(0)(),e.push([t.i,"",""])},function(t,e,i){e=t.exports=i(0)(),e.push([t.i,"tr{padding-left:30px}",""])},function(t,e,i){e=t.exports=i(0)(),e.push([t.i,".action-link[data-v-de0d0e4e]{cursor:pointer}.m-b-none[data-v-de0d0e4e]{margin-bottom:0}",""])},function(t,e,i){e=t.exports=i(0)(),e.push([t.i,".action-link[data-v-e9c80318]{cursor:pointer}.m-b-none[data-v-e9c80318]{margin-bottom:0}",""])},function(t,e,i){e=t.exports=i(0)(),e.push([t.i,".select2-dropdown[data-v-ff564a86]{z-index:9999}",""])},function(t,e,i){var n,r,s;/*! jQuery UI - v1.12.1 - 2017-03-19
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/selectable.js, widgets/sortable.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/selectmenu.js, widgets/slider.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
!function(o){r=[i(3)],n=o,void 0!==(s="function"==typeof n?n.apply(e,r):n)&&(t.exports=s)}(function(t){function e(t){for(var e=t.css("visibility");"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e}function i(t){for(var e,i;t.length&&t[0]!==document;){if(("absolute"===(e=t.css("position"))||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}function n(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=r(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function r(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout",i,function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",i,s)}function s(){t.datepicker._isDisabledDatepicker(p.inline?p.dpDiv.parent()[0]:p.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))}function o(e,i){t.extend(e,i);for(var n in i)null==i[n]&&(e[n]=i[n]);return e}function a(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.ui=t.ui||{},t.ui.version="1.12.1";var l=0,u=Array.prototype.slice;t.cleanData=function(e){return function(i){var n,r,s;for(s=0;null!=(r=i[s]);s++)try{(n=t._data(r,"events"))&&n.remove&&t(r).triggerHandler("remove")}catch(t){}e(i)}}(t.cleanData),t.widget=function(e,i,n){var r,s,o,a={},l=e.split(".")[0];e=e.split(".")[1];var u=l+"-"+e;return n||(n=i,i=t.Widget),t.isArray(n)&&(n=t.extend.apply(null,[{}].concat(n))),t.expr[":"][u.toLowerCase()]=function(e){return!!t.data(e,u)},t[l]=t[l]||{},r=t[l][e],s=t[l][e]=function(t,e){return this._createWidget?void(arguments.length&&this._createWidget(t,e)):new s(t,e)},t.extend(s,r,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),o=new i,o.options=t.widget.extend({},o.options),t.each(n,function(e,n){return t.isFunction(n)?void(a[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function r(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,s=this._superApply;return this._super=t,this._superApply=r,e=n.apply(this,arguments),this._super=i,this._superApply=s,e}}()):void(a[e]=n)}),s.prototype=t.widget.extend(o,{widgetEventPrefix:r?o.widgetEventPrefix||e:e},a,{constructor:s,namespace:l,widgetName:e,widgetFullName:u}),r?(t.each(r._childConstructors,function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,s,i._proto)}),delete r._childConstructors):i._childConstructors.push(s),t.widget.bridge(e,s),s},t.widget.extend=function(e){for(var i,n,r=u.call(arguments,1),s=0,o=r.length;o>s;s++)for(i in r[s])n=r[s][i],r[s].hasOwnProperty(i)&&void 0!==n&&(e[i]=t.isPlainObject(n)?t.isPlainObject(e[i])?t.widget.extend({},e[i],n):t.widget.extend({},n):n);return e},t.widget.bridge=function(e,i){var n=i.prototype.widgetFullName||e;t.fn[e]=function(r){var s="string"==typeof r,o=u.call(arguments,1),a=this;return s?this.length||"instance"!==r?this.each(function(){var i,s=t.data(this,n);return"instance"===r?(a=s,!1):s?t.isFunction(s[r])&&"_"!==r.charAt(0)?(i=s[r].apply(s,o),i!==s&&void 0!==i?(a=i&&i.jquery?a.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+r+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+r+"'")}):a=void 0:(o.length&&(r=t.widget.extend.apply(null,[r].concat(o))),this.each(function(){var e=t.data(this,n);e?(e.option(r||{}),e._init&&e._init()):t.data(this,n,new i(r,this))})),a}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=l++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var n,r,s,o=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(o={},n=e.split("."),e=n.shift(),n.length){for(r=o[e]=t.widget.extend({},this.options[e]),s=0;n.length-1>s;s++)r[n[s]]=r[n[s]]||{},r=r[n[s]];if(e=n.pop(),1===arguments.length)return void 0===r[e]?null:r[e];r[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];o[e]=i}return this._setOptions(o),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,n,r;for(i in e)r=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&r&&r.length&&(n=t(r.get()),this._removeClass(r,i),n.addClass(this._classes({element:n,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,s){var o,a;for(a=0;i.length>a;a++)o=r.classesElementLookup[i[a]]||t(),o=t(e.add?t.unique(o.get().concat(e.element.get())):o.not(e.element).get()),r.classesElementLookup[i[a]]=o,n.push(i[a]),s&&e.classes[i[a]]&&n.push(e.classes[i[a]])}var n=[],r=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),n.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(n,r){-1!==t.inArray(e.target,r)&&(i.classesElementLookup[n]=t(r.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,n){n="boolean"==typeof n?n:i;var r="string"==typeof t||null===t,s={extra:r?e:i,keys:r?t:e,element:r?this.element:t,add:n};return s.element.toggleClass(this._classes(s),n),this},_on:function(e,i,n){var r,s=this;"boolean"!=typeof e&&(n=i,i=e,e=!1),n?(i=r=t(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,r=this.widget()),t.each(n,function(n,o){function a(){return e||!0!==s.options.disabled&&!t(this).hasClass("ui-state-disabled")?("string"==typeof o?s[o]:o).apply(s,arguments):void 0}"string"!=typeof o&&(a.guid=o.guid=o.guid||a.guid||t.guid++);var l=n.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+s.eventNamespace,c=l[2];c?r.on(u,c,a):i.on(u,a)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,n){var r,s,o=this.options[e];if(n=n||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],s=i.originalEvent)for(r in s)r in i||(i[r]=s[r]);return this.element.trigger(i,n),!(t.isFunction(o)&&!1===o.apply(this.element[0],[i].concat(n))||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,r,s){"string"==typeof r&&(r={effect:r});var o,a=r?!0===r||"number"==typeof r?i:r.effect||i:e;r=r||{},"number"==typeof r&&(r={duration:r}),o=!t.isEmptyObject(r),r.complete=s,r.delay&&n.delay(r.delay),o&&t.effects&&t.effects.effect[a]?n[e](r):a!==e&&n[a]?n[a](r.duration,r.easing,s):n.queue(function(i){t(this)[e](),s&&s.call(n[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(h.test(t[0])?e/100:1),parseFloat(t[1])*(h.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var r,s=Math.max,o=Math.abs,a=/left|center|right/,l=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,h=/%$/,d=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==r)return r;var e,i,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),s=n.children()[0];return t("body").append(n),e=s.offsetWidth,n.css("overflow","scroll"),i=s.offsetWidth,e===i&&(i=n[0].clientWidth),n.remove(),r=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),n=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),r="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth;return{width:"scroll"===n||"auto"===n&&e.height<e.element[0].scrollHeight?t.position.scrollbarWidth():0,height:r?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),n=t.isWindow(i[0]),r=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:n,isDocument:r,offset:n||r?{left:0,top:0}:t(e).offset(),scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(r){if(!r||!r.of)return d.apply(this,arguments);r=t.extend({},r);var h,p,f,g,m,v,_=t(r.of),y=t.position.getWithinInfo(r.within),b=t.position.getScrollInfo(y),w=(r.collision||"flip").split(" "),x={};return v=n(_),_[0].preventDefault&&(r.at="left top"),p=v.width,f=v.height,g=v.offset,m=t.extend({},g),t.each(["my","at"],function(){var t,e,i=(r[this]||"").split(" ");1===i.length&&(i=a.test(i[0])?i.concat(["center"]):l.test(i[0])?["center"].concat(i):["center","center"]),i[0]=a.test(i[0])?i[0]:"center",i[1]=l.test(i[1])?i[1]:"center",t=u.exec(i[0]),e=u.exec(i[1]),x[this]=[t?t[0]:0,e?e[0]:0],r[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===r.at[0]?m.left+=p:"center"===r.at[0]&&(m.left+=p/2),"bottom"===r.at[1]?m.top+=f:"center"===r.at[1]&&(m.top+=f/2),h=e(x.at,p,f),m.left+=h[0],m.top+=h[1],this.each(function(){var n,a,l=t(this),u=l.outerWidth(),c=l.outerHeight(),d=i(this,"marginLeft"),v=i(this,"marginTop"),C=u+d+i(this,"marginRight")+b.width,k=c+v+i(this,"marginBottom")+b.height,T=t.extend({},m),D=e(x.my,l.outerWidth(),l.outerHeight());"right"===r.my[0]?T.left-=u:"center"===r.my[0]&&(T.left-=u/2),"bottom"===r.my[1]?T.top-=c:"center"===r.my[1]&&(T.top-=c/2),T.left+=D[0],T.top+=D[1],n={marginLeft:d,marginTop:v},t.each(["left","top"],function(e,i){t.ui.position[w[e]]&&t.ui.position[w[e]][i](T,{targetWidth:p,targetHeight:f,elemWidth:u,elemHeight:c,collisionPosition:n,collisionWidth:C,collisionHeight:k,offset:[h[0]+D[0],h[1]+D[1]],my:r.my,at:r.at,within:y,elem:l})}),r.using&&(a=function(t){var e=g.left-T.left,i=e+p-u,n=g.top-T.top,a=n+f-c,h={target:{element:_,left:g.left,top:g.top,width:p,height:f},element:{element:l,left:T.left,top:T.top,width:u,height:c},horizontal:0>i?"left":e>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>o(e+i)&&(h.horizontal="center"),c>f&&f>o(n+a)&&(h.vertical="middle"),h.important=s(o(e),o(i))>s(o(n),o(a))?"horizontal":"vertical",r.using.call(this,t,h)}),l.offset(t.extend(T,{using:a}))})},t.ui.position={fit:{left:function(t,e){var i,n=e.within,r=n.isWindow?n.scrollLeft:n.offset.left,o=n.width,a=t.left-e.collisionPosition.marginLeft,l=r-a,u=a+e.collisionWidth-o-r;e.collisionWidth>o?l>0&&0>=u?(i=t.left+l+e.collisionWidth-o-r,t.left+=l-i):t.left=u>0&&0>=l?r:l>u?r+o-e.collisionWidth:r:l>0?t.left+=l:u>0?t.left-=u:t.left=s(t.left-a,t.left)},top:function(t,e){var i,n=e.within,r=n.isWindow?n.scrollTop:n.offset.top,o=e.within.height,a=t.top-e.collisionPosition.marginTop,l=r-a,u=a+e.collisionHeight-o-r;e.collisionHeight>o?l>0&&0>=u?(i=t.top+l+e.collisionHeight-o-r,t.top+=l-i):t.top=u>0&&0>=l?r:l>u?r+o-e.collisionHeight:r:l>0?t.top+=l:u>0?t.top-=u:t.top=s(t.top-a,t.top)}},flip:{left:function(t,e){var i,n,r=e.within,s=r.offset.left+r.scrollLeft,a=r.width,l=r.isWindow?r.scrollLeft:r.offset.left,u=t.left-e.collisionPosition.marginLeft,c=u-l,h=u+e.collisionWidth-a-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(0>(i=t.left+d+p+f+e.collisionWidth-a-s)||o(c)>i)&&(t.left+=d+p+f):h>0&&((n=t.left-e.collisionPosition.marginLeft+d+p+f-l)>0||h>o(n))&&(t.left+=d+p+f)},top:function(t,e){var i,n,r=e.within,s=r.offset.top+r.scrollTop,a=r.height,l=r.isWindow?r.scrollTop:r.offset.top,u=t.top-e.collisionPosition.marginTop,c=u-l,h=u+e.collisionHeight-a-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(0>(n=t.top+p+f+g+e.collisionHeight-a-s)||o(c)>n)&&(t.top+=p+f+g):h>0&&((i=t.top-e.collisionPosition.marginTop+p+f+g-l)>0||h>o(i))&&(t.top+=p+f+g)}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,n){return!!t.data(e,n[3])}}),t.fn.extend({disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}}),t.ui.focusable=function(i,n){var r,s,o,a,l,u=i.nodeName.toLowerCase();return"area"===u?(r=i.parentNode,s=r.name,!(!i.href||!s||"map"!==r.nodeName.toLowerCase())&&(o=t("img[usemap='#"+s+"']"),o.length>0&&o.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(u)?(a=!i.disabled)&&(l=t(i).closest("fieldset")[0])&&(a=!l.disabled):a="a"===u?i.href||n:n,a&&t(i).is(":visible")&&e(t(i)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}}),t.ui.focusable,t.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)},t.ui.formResetMixin={_formResetHandler:function(){var e=t(this);setTimeout(function(){var i=e.data("ui-form-reset-instances");t.each(i,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var e=this.form.data("ui-form-reset-instances");e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-form-reset-instances",e):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}},"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],function(e,i){function n(e,i,n,s){return t.each(r,function(){i-=parseFloat(t.css(e,"padding"+this))||0,n&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),s&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var r="Width"===i?["Left","Right"]:["Top","Bottom"],s=i.toLowerCase(),o={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?o["inner"+i].call(this):this.each(function(){t(this).css(s,n(this,e)+"px")})},t.fn["outer"+i]=function(e,r){return"number"!=typeof e?o["outer"+i].call(this,e):this.each(function(){t(this).css(s,n(this,e,!0,r)+"px")})}}),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.escapeSelector=function(){var t=/([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;return function(e){return e.replace(t,"\\$1")}}(),t.fn.labels=function(){var e,i,n,r,s;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(r=this.eq(0).parents("label"),n=this.attr("id"),n&&(e=this.eq(0).parents().last(),s=e.add(e.length?e.siblings():this.siblings()),i="label[for='"+t.ui.escapeSelector(n)+"']",r=r.add(s.find(i).addBack(i))),this.pushStack(r))},t.fn.scrollParent=function(e){var i=this.css("position"),n="absolute"===i,r=e?/(auto|scroll|hidden)/:/(auto|scroll)/,s=this.parents().filter(function(){var e=t(this);return(!n||"static"!==e.css("position"))&&r.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&s.length?s:t(this[0].ownerDocument||document)},t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),n=null!=i;return(!n||i>=0)&&t.ui.focusable(e,n)}}),t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var c=!1;t(document).on("mouseup",function(){c=!1}),t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!c){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,n=1===e.which,r=!("string"!=typeof this.options.cancel||!e.target.nodeName)&&t(e.target).closest(this.options.cancel).length;return!(n&&!r&&this._mouseCapture(e))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(e),!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),c=!0,!0))}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,e),this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,c=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.ui.plugin={add:function(e,i,n){var r,s=t.ui[e].prototype;for(r in n)s.plugins[r]=s.plugins[r]||[],s.plugins[r].push([i,n[r]])},call:function(t,e,i,n){var r,s=t.plugins[e];if(s&&(n||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(r=0;s.length>r;r++)t.options[s[r][0]]&&s[r][1].apply(t.element,i)}},t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.ui.safeBlur=function(e){e&&"body"!==e.nodeName.toLowerCase()&&t(e).trigger("blur")},t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(e){var i=this.options;return!(this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0)&&(this.handle=this._getHandle(e),!!this.handle&&(this._blurActiveElement(e),this._blockFrames(!0===i.iframeFix?"iframe":i.iframeFix),!0))},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=t.ui.safeActiveElement(this.document[0]);t(e.target).closest(i).length||t.ui.safeBlur(i)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),!1===this._trigger("start",e)?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var n=this._uiHash();if(!1===this._trigger("drag",e,n))return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=n.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,n=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(n=t.ui.ddmanager.drop(this,e)),this.dropped&&(n=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!n||"valid"===this.options.revert&&n||!0===this.options.revert||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,n)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){!1!==i._trigger("stop",e)&&i._clear()}):!1!==this._trigger("stop",e)&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return!this.options.handle||!!t(e.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var i=this.options,n=t.isFunction(i.helper),r=n?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return r.parents("body").length||r.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),n&&r[0]===this.element[0]&&this._setPositionRelative(),r[0]===this.element[0]||/(fixed|absolute)/.test(r.css("position"))||r.css("position","absolute"),r},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,n,r=this.options,s=this.document[0];return this.relativeContainer=null,r.containment?"window"===r.containment?void(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||s.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===r.containment?void(this.containment=[0,0,t(s).width()-this.helperProportions.width-this.margins.left,(t(s).height()||s.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):r.containment.constructor===Array?void(this.containment=r.containment):("parent"===r.containment&&(r.containment=this.helper[0].parentNode),i=t(r.containment),void((n=i[0])&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(n.scrollWidth,n.offsetWidth):n.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(n.scrollHeight,n.offsetHeight):n.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i))):void(this.containment=null)},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,n=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:n?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:n?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,n,r,s,o=this.options,a=this._isRootNode(this.scrollParent[0]),l=t.pageX,u=t.pageY;return a&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(n=this.relativeContainer.offset(),i=[this.containment[0]+n.left,this.containment[1]+n.top,this.containment[2]+n.left,this.containment[3]+n.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(u=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(u=i[3]+this.offset.click.top)),o.grid&&(r=o.grid[1]?this.originalPageY+Math.round((u-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,u=i?r-this.offset.click.top>=i[1]||r-this.offset.click.top>i[3]?r:r-this.offset.click.top>=i[1]?r-o.grid[1]:r+o.grid[1]:r,s=o.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,l=i?s-this.offset.click.left>=i[0]||s-this.offset.click.left>i[2]?s:s-this.offset.click.left>=i[0]?s-o.grid[0]:s+o.grid[0]:s),"y"===o.axis&&(l=this.originalPageX),"x"===o.axis&&(u=this.originalPageY)),{top:u-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:a?0:this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:a?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,i,n){return n=n||this._uiHash(),t.ui.plugin.call(this,e,[i,n,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),n.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,n)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,n){var r=t.extend({},i,{item:n.element});n.sortables=[],t(n.options.connectToSortable).each(function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(n.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,r))})},stop:function(e,i,n){var r=t.extend({},i,{item:n.element});n.cancelHelperRemoval=!1,t.each(n.sortables,function(){var t=this;t.isOver?(t.isOver=0,n.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,r))})},drag:function(e,i,n){t.each(n.sortables,function(){var r=!1,s=this;s.positionAbs=n.positionAbs,s.helperProportions=n.helperProportions,s.offset.click=n.offset.click,s._intersectsWith(s.containerCache)&&(r=!0,t.each(n.sortables,function(){return this.positionAbs=n.positionAbs,this.helperProportions=n.helperProportions,this.offset.click=n.offset.click,this!==s&&this._intersectsWith(this.containerCache)&&t.contains(s.element[0],this.element[0])&&(r=!1),r})),r?(s.isOver||(s.isOver=1,n._parent=i.helper.parent(),s.currentItem=i.helper.appendTo(s.element).data("ui-sortable-item",!0),s.options._helper=s.options.helper,s.options.helper=function(){return i.helper[0]},e.target=s.currentItem[0],s._mouseCapture(e,!0),s._mouseStart(e,!0,!0),s.offset.click.top=n.offset.click.top,s.offset.click.left=n.offset.click.left,s.offset.parent.left-=n.offset.parent.left-s.offset.parent.left,s.offset.parent.top-=n.offset.parent.top-s.offset.parent.top,n._trigger("toSortable",e),n.dropped=s.element,t.each(n.sortables,function(){this.refreshPositions()}),n.currentItem=n.element,s.fromOutside=n),s.currentItem&&(s._mouseDrag(e),i.position=s.position)):s.isOver&&(s.isOver=0,s.cancelHelperRemoval=!0,s.options._revert=s.options.revert,s.options.revert=!1,s._trigger("out",e,s._uiHash(s)),s._mouseStop(e,!0),s.options.revert=s.options._revert,s.options.helper=s.options._helper,s.placeholder&&s.placeholder.remove(),i.helper.appendTo(n._parent),n._refreshOffsets(e),i.position=n._generatePosition(e,!0),n._trigger("fromSortable",e),n.dropped=!1,t.each(n.sortables,function(){this.refreshPositions()}))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,n){var r=t("body"),s=n.options;r.css("cursor")&&(s._cursor=r.css("cursor")),r.css("cursor",s.cursor)},stop:function(e,i,n){var r=n.options;r._cursor&&t("body").css("cursor",r._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,n){var r=t(i.helper),s=n.options;r.css("opacity")&&(s._opacity=r.css("opacity")),r.css("opacity",s.opacity)},stop:function(e,i,n){var r=n.options;r._opacity&&t(i.helper).css("opacity",r._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,n){var r=n.options,s=!1,o=n.scrollParentNotHidden[0],a=n.document[0];o!==a&&"HTML"!==o.tagName?(r.axis&&"x"===r.axis||(n.overflowOffset.top+o.offsetHeight-e.pageY<r.scrollSensitivity?o.scrollTop=s=o.scrollTop+r.scrollSpeed:e.pageY-n.overflowOffset.top<r.scrollSensitivity&&(o.scrollTop=s=o.scrollTop-r.scrollSpeed)),r.axis&&"y"===r.axis||(n.overflowOffset.left+o.offsetWidth-e.pageX<r.scrollSensitivity?o.scrollLeft=s=o.scrollLeft+r.scrollSpeed:e.pageX-n.overflowOffset.left<r.scrollSensitivity&&(o.scrollLeft=s=o.scrollLeft-r.scrollSpeed))):(r.axis&&"x"===r.axis||(e.pageY-t(a).scrollTop()<r.scrollSensitivity?s=t(a).scrollTop(t(a).scrollTop()-r.scrollSpeed):t(window).height()-(e.pageY-t(a).scrollTop())<r.scrollSensitivity&&(s=t(a).scrollTop(t(a).scrollTop()+r.scrollSpeed))),r.axis&&"y"===r.axis||(e.pageX-t(a).scrollLeft()<r.scrollSensitivity?s=t(a).scrollLeft(t(a).scrollLeft()-r.scrollSpeed):t(window).width()-(e.pageX-t(a).scrollLeft())<r.scrollSensitivity&&(s=t(a).scrollLeft(t(a).scrollLeft()+r.scrollSpeed)))),!1!==s&&t.ui.ddmanager&&!r.dropBehaviour&&t.ui.ddmanager.prepareOffsets(n,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,n){var r=n.options;n.snapElements=[],t(r.snap.constructor!==String?r.snap.items||":data(ui-draggable)":r.snap).each(function(){var e=t(this),i=e.offset();this!==n.element[0]&&n.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,n){var r,s,o,a,l,u,c,h,d,p,f=n.options,g=f.snapTolerance,m=i.offset.left,v=m+n.helperProportions.width,_=i.offset.top,y=_+n.helperProportions.height;for(d=n.snapElements.length-1;d>=0;d--)l=n.snapElements[d].left-n.margins.left,u=l+n.snapElements[d].width,c=n.snapElements[d].top-n.margins.top,h=c+n.snapElements[d].height,l-g>v||m>u+g||c-g>y||_>h+g||!t.contains(n.snapElements[d].item.ownerDocument,n.snapElements[d].item)?(n.snapElements[d].snapping&&n.options.snap.release&&n.options.snap.release.call(n.element,e,t.extend(n._uiHash(),{snapItem:n.snapElements[d].item})),n.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(r=g>=Math.abs(c-y),s=g>=Math.abs(h-_),o=g>=Math.abs(l-v),a=g>=Math.abs(u-m),r&&(i.position.top=n._convertPositionTo("relative",{top:c-n.helperProportions.height,left:0}).top),s&&(i.position.top=n._convertPositionTo("relative",{top:h,left:0}).top),o&&(i.position.left=n._convertPositionTo("relative",{top:0,left:l-n.helperProportions.width}).left),a&&(i.position.left=n._convertPositionTo("relative",{top:0,left:u}).left)),p=r||s||o||a,"outer"!==f.snapMode&&(r=g>=Math.abs(c-_),s=g>=Math.abs(h-y),o=g>=Math.abs(l-m),a=g>=Math.abs(u-v),r&&(i.position.top=n._convertPositionTo("relative",{top:c,left:0}).top),s&&(i.position.top=n._convertPositionTo("relative",{top:h-n.helperProportions.height,left:0}).top),o&&(i.position.left=n._convertPositionTo("relative",{top:0,left:l}).left),a&&(i.position.left=n._convertPositionTo("relative",{top:0,left:u-n.helperProportions.width}).left)),!n.snapElements[d].snapping&&(r||s||o||a||p)&&n.options.snap.snap&&n.options.snap.snap.call(n.element,e,t.extend(n._uiHash(),{snapItem:n.snapElements[d].item})),n.snapElements[d].snapping=r||s||o||a||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,n){var r,s=n.options,o=t.makeArray(t(s.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});o.length&&(r=parseInt(t(o[0]).css("zIndex"),10)||0,t(o).each(function(e){t(this).css("zIndex",r+e)}),this.css("zIndex",r+o.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,n){var r=t(i.helper),s=n.options;r.css("zIndex")&&(s._zIndex=r.css("zIndex")),r.css("zIndex",s.zIndex)},stop:function(e,i,n){var r=n.options;r._zIndex&&t(i.helper).css("zIndex",r._zIndex)}}),t.ui.draggable,t.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,n=i.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(n)?n:function(t){return t.is(n)},this.proportions=function(){return arguments.length?void(e=arguments[0]):e||(e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight})},this._addToManager(i.scope),i.addClasses&&this._addClass("ui-droppable")},_addToManager:function(e){t.ui.ddmanager.droppables[e]=t.ui.ddmanager.droppables[e]||[],t.ui.ddmanager.droppables[e].push(this)},_splice:function(t){for(var e=0;t.length>e;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var e=t.ui.ddmanager.droppables[this.options.scope];this._splice(e)},_setOption:function(e,i){if("accept"===e)this.accept=t.isFunction(i)?i:function(t){return t.is(i)};else if("scope"===e){var n=t.ui.ddmanager.droppables[this.options.scope];this._splice(n),this._addToManager(i)}this._super(e,i)},_activate:function(e){var i=t.ui.ddmanager.current;this._addActiveClass(),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this._removeActiveClass(),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._addHoverClass(),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._removeHoverClass(),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var n=i||t.ui.ddmanager.current,r=!1;return!(!n||(n.currentItem||n.element)[0]===this.element[0])&&(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=t(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===n.options.scope&&i.accept.call(i.element[0],n.currentItem||n.element)&&h(n,t.extend(i,{offset:i.element.offset()}),i.options.tolerance,e)?(r=!0,!1):void 0}),!r&&(!!this.accept.call(this.element[0],n.currentItem||n.element)&&(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",e,this.ui(n)),this.element)))},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}});var h=t.ui.intersect=function(){function t(t,e,i){return t>=e&&e+i>t}return function(e,i,n,r){if(!i.offset)return!1;var s=(e.positionAbs||e.position.absolute).left+e.margins.left,o=(e.positionAbs||e.position.absolute).top+e.margins.top,a=s+e.helperProportions.width,l=o+e.helperProportions.height,u=i.offset.left,c=i.offset.top,h=u+i.proportions().width,d=c+i.proportions().height;switch(n){case"fit":return s>=u&&h>=a&&o>=c&&d>=l;case"intersect":return s+e.helperProportions.width/2>u&&h>a-e.helperProportions.width/2&&o+e.helperProportions.height/2>c&&d>l-e.helperProportions.height/2;case"pointer":return t(r.pageY,c,i.proportions().height)&&t(r.pageX,u,i.proportions().width);case"touch":return(o>=c&&d>=o||l>=c&&d>=l||c>o&&l>d)&&(s>=u&&h>=s||a>=u&&h>=a||u>s&&a>h);default:return!1}}}();t.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(e,i){var n,r,s=t.ui.ddmanager.droppables[e.options.scope]||[],o=i?i.type:null,a=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(n=0;s.length>n;n++)if(!(s[n].options.disabled||e&&!s[n].accept.call(s[n].element[0],e.currentItem||e.element))){for(r=0;a.length>r;r++)if(a[r]===s[n].element[0]){s[n].proportions().height=0;continue t}s[n].visible="none"!==s[n].element.css("display"),s[n].visible&&("mousedown"===o&&s[n]._activate.call(s[n],i),s[n].offset=s[n].element.offset(),s[n].proportions({width:s[n].element[0].offsetWidth,height:s[n].element[0].offsetHeight}))}},drop:function(e,i){var n=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&h(e,this,this.options.tolerance,i)&&(n=this._drop.call(this,i)||n),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),n},dragStart:function(e,i){e.element.parentsUntil("body").on("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var n,r,s,o=h(e,this,this.options.tolerance,i),a=!o&&this.isover?"isout":o&&!this.isover?"isover":null;a&&(this.options.greedy&&(r=this.options.scope,s=this.element.parents(":data(ui-droppable)").filter(function(){return t(this).droppable("instance").options.scope===r}),s.length&&(n=t(s[0]).droppable("instance"),n.greedyChild="isover"===a)),n&&"isover"===a&&(n.isover=!1,n.isout=!0,n._out.call(n,i)),this[a]=!0,this["isout"===a?"isover":"isout"]=!1,this["isover"===a?"_over":"_out"].call(this,i),n&&"isout"===a&&(n.isout=!1,n.isover=!0,n._over.call(n,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").off("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}},!1!==t.uiBackCompat&&t.widget("ui.droppable",t.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}}),t.ui.droppable,t.widget("ui.resizable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var n=i&&"left"===i?"scrollLeft":"scrollTop",r=!1;return e[n]>0||(e[n]=1,r=e[n]>0,e[n]=0,r)},_create:function(){var e,i=this.options,n=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,e={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(e),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(e),this._proportionallyResize()),this._setupHandles(),i.autoHide&&t(this.element).on("mouseenter",function(){i.disabled||(n._removeClass("ui-resizable-autohide"),n._handles.show())}).on("mouseleave",function(){i.disabled||n.resizing||(n._addClass("ui-resizable-autohide"),n._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles()}},_setupHandles:function(){var e,i,n,r,s,o=this.options,a=this;if(this.handles=o.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),n=this.handles.split(","),this.handles={},i=0;n.length>i;i++)e=t.trim(n[i]),r="ui-resizable-"+e,s=t("<div>"),this._addClass(s,"ui-resizable-handle "+r),s.css({zIndex:o.zIndex}),this.handles[e]=".ui-resizable-"+e,this.element.append(s);this._renderAxis=function(e){var i,n,r,s;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=t(this.handles[i]),this._on(this.handles[i],{mousedown:a._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(n=t(this.handles[i],this.element),s=/sw|ne|nw|se|n|s/.test(i)?n.outerHeight():n.outerWidth(),r=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(r,s),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){a.resizing||(this.className&&(s=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),a.axis=s&&s[1]?s[1]:"se")}),o.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(e){var i,n,r=!1;for(i in this.handles)((n=t(this.handles[i])[0])===e.target||t.contains(n,e.target))&&(r=!0);return!this.options.disabled&&r},_mouseStart:function(e){var i,n,r,s=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),n=this._num(this.helper.css("top")),s.containment&&(i+=t(s.containment).scrollLeft()||0,n+=t(s.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:n},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:i,top:n},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof s.aspectRatio?s.aspectRatio:this.originalSize.width/this.originalSize.height||1,r=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===r?this.axis+"-resize":r),this._addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,n,r=this.originalMousePosition,s=this.axis,o=e.pageX-r.left||0,a=e.pageY-r.top||0,l=this._change[s];return this._updatePrevProperties(),!!l&&(i=l.apply(this,[e,o,a]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),n=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(n)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1)},_mouseStop:function(e){this.resizing=!1;var i,n,r,s,o,a,l,u=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,n=i.length&&/textarea/i.test(i[0].nodeName),r=n&&this._hasScroll(i[0],"left")?0:c.sizeDiff.height,s=n?0:c.sizeDiff.width,o={width:c.helper.width()-s,height:c.helper.height()-r},a=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,l=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null,u.animate||this.element.css(t.extend(o,{top:l,left:a})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!u.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,n,r,s,o=this.options;s={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||t)&&(e=s.minHeight*this.aspectRatio,n=s.minWidth/this.aspectRatio,i=s.maxHeight*this.aspectRatio,r=s.maxWidth/this.aspectRatio,e>s.minWidth&&(s.minWidth=e),n>s.minHeight&&(s.minHeight=n),s.maxWidth>i&&(s.maxWidth=i),s.maxHeight>r&&(s.maxHeight=r)),this._vBoundaries=s},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,n=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===n&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===n&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,n=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,r=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,s=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,o=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,a=this.originalPosition.left+this.originalSize.width,l=this.originalPosition.top+this.originalSize.height,u=/sw|nw|w/.test(i),c=/nw|ne|n/.test(i);return s&&(t.width=e.minWidth),o&&(t.height=e.minHeight),n&&(t.width=e.maxWidth),r&&(t.height=e.maxHeight),s&&u&&(t.left=a-e.minWidth),n&&u&&(t.left=a-e.maxWidth),o&&c&&(t.top=l-e.minHeight),r&&c&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],n=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],r=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];4>e;e++)i[e]=parseFloat(n[e])||0,i[e]+=parseFloat(r[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;this._proportionallyResizeElements.length>e;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize;return{left:this.originalPosition.left+e,width:i.width-e}},n:function(t,e,i){var n=this.originalSize;return{top:this.originalPosition.top+i,height:n.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,n){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,n]))},sw:function(e,i,n){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,n]))},ne:function(e,i,n){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,n]))},nw:function(e,i,n){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,n]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),n=i.options,r=i._proportionallyResizeElements,s=r.length&&/textarea/i.test(r[0].nodeName),o=s&&i._hasScroll(r[0],"left")?0:i.sizeDiff.height,a=s?0:i.sizeDiff.width,l={width:i.size.width-a,height:i.size.height-o},u=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,c=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(l,c&&u?{top:c,left:u}:{}),{duration:n.animateDuration,easing:n.animateEasing,step:function(){var n={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))};r&&r.length&&t(r[0]).css({width:n.width,height:n.height}),i._updateCache(n),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,n,r,s,o,a,l=t(this).resizable("instance"),u=l.options,c=l.element,h=u.containment,d=h instanceof t?h.get(0):/parent/.test(h)?c.parent().get(0):h;d&&(l.containerElement=t(d),/document/.test(h)||h===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(d),i=[],t(["Top","Right","Left","Bottom"]).each(function(t,n){i[t]=l._num(e.css("padding"+n))}),l.containerOffset=e.offset(),l.containerPosition=e.position(),l.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},n=l.containerOffset,r=l.containerSize.height,s=l.containerSize.width,o=l._hasScroll(d,"left")?d.scrollWidth:s,a=l._hasScroll(d)?d.scrollHeight:r,l.parentData={element:d,left:n.left,top:n.top,width:o,height:a}))},resize:function(e){var i,n,r,s,o=t(this).resizable("instance"),a=o.options,l=o.containerOffset,u=o.position,c=o._aspectRatio||e.shiftKey,h={top:0,left:0},d=o.containerElement,p=!0;d[0]!==document&&/static/.test(d.css("position"))&&(h=l),u.left<(o._helper?l.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-l.left:o.position.left-h.left),c&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=a.helper?l.left:0),u.top<(o._helper?l.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-l.top:o.position.top),c&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?l.top:0),r=o.containerElement.get(0)===o.element.parent().get(0),s=/relative|absolute/.test(o.containerElement.css("position")),r&&s?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),i=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-h.left:o.offset.left-l.left)),n=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-h.top:o.offset.top-l.top)),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,c&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),n+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-n,c&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,n=e.containerOffset,r=e.containerPosition,s=e.containerElement,o=t(e.helper),a=o.offset(),l=o.outerWidth()-e.sizeDiff.width,u=o.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(s.css("position"))&&t(this).css({left:a.left-r.left-n.left,width:l,height:u}),e._helper&&!i.animate&&/static/.test(s.css("position"))&&t(this).css({left:a.left-r.left-n.left,width:l,height:u})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance"),i=e.options;t(i.alsoResize).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseFloat(e.width()),height:parseFloat(e.height()),left:parseFloat(e.css("left")),top:parseFloat(e.css("top"))})})},resize:function(e,i){var n=t(this).resizable("instance"),r=n.options,s=n.originalSize,o=n.originalPosition,a={height:n.size.height-s.height||0,width:n.size.width-s.width||0,top:n.position.top-o.top||0,left:n.position.left-o.left||0};t(r.alsoResize).each(function(){var e=t(this),n=t(this).data("ui-resizable-alsoresize"),r={},s=e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(s,function(t,e){var i=(n[e]||0)+(a[e]||0);i&&i>=0&&(r[e]=i||null)}),e.css(r)})},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}),e._addClass(e.ghost,"ui-resizable-ghost"),!1!==t.uiBackCompat&&"string"==typeof e.options.ghost&&e.ghost.addClass(this.options.ghost),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),n=i.options,r=i.size,s=i.originalSize,o=i.originalPosition,a=i.axis,l="number"==typeof n.grid?[n.grid,n.grid]:n.grid,u=l[0]||1,c=l[1]||1,h=Math.round((r.width-s.width)/u)*u,d=Math.round((r.height-s.height)/c)*c,p=s.width+h,f=s.height+d,g=n.maxWidth&&p>n.maxWidth,m=n.maxHeight&&f>n.maxHeight,v=n.minWidth&&n.minWidth>p,_=n.minHeight&&n.minHeight>f;n.grid=l,v&&(p+=u),_&&(f+=c),g&&(p-=u),m&&(f-=c),/^(se|s|e)$/.test(a)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(a)?(i.size.width=p,i.size.height=f,i.position.top=o.top-d):/^(sw)$/.test(a)?(i.size.width=p,i.size.height=f,i.position.left=o.left-h):((0>=f-c||0>=p-u)&&(e=i._getPaddingPlusBorderDimensions(this)),f-c>0?(i.size.height=f,i.position.top=o.top-d):(f=c-e.height,i.size.height=f,i.position.top=o.top+s.height-f),p-u>0?(i.size.width=p,i.position.left=o.left-h):(p=u-e.width,i.size.width=p,i.position.left=o.left+s.width-p))}}),t.ui.resizable,t.widget("ui.selectable",t.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e=this;this._addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e.elementPos=t(e.element[0]).offset(),e.selectees=t(e.options.filter,e.element[0]),e._addClass(e.selectees,"ui-selectee"),e.selectees.each(function(){var i=t(this),n=i.offset(),r={left:n.left-e.elementPos.left,top:n.top-e.elementPos.top};t.data(this,"selectable-item",{element:this,$element:i,left:r.left,top:r.top,right:r.left+i.outerWidth(),bottom:r.top+i.outerHeight(),startselected:!1,selected:i.hasClass("ui-selected"),selecting:i.hasClass("ui-selecting"),unselecting:i.hasClass("ui-unselecting")})})},this.refresh(),this._mouseInit(),this.helper=t("<div>"),this._addClass(this.helper,"ui-selectable-helper")},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()},_mouseStart:function(e){var i=this,n=this.options;this.opos=[e.pageX,e.pageY],this.elementPos=t(this.element[0]).offset(),this.options.disabled||(this.selectees=t(n.filter,this.element[0]),this._trigger("start",e),t(n.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),n.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var n=t.data(this,"selectable-item");n.startselected=!0,e.metaKey||e.ctrlKey||(i._removeClass(n.$element,"ui-selected"),n.selected=!1,i._addClass(n.$element,"ui-unselecting"),n.unselecting=!0,i._trigger("unselecting",e,{unselecting:n.element}))}),t(e.target).parents().addBack().each(function(){var n,r=t.data(this,"selectable-item");return r?(n=!e.metaKey&&!e.ctrlKey||!r.$element.hasClass("ui-selected"),i._removeClass(r.$element,n?"ui-unselecting":"ui-selected")._addClass(r.$element,n?"ui-selecting":"ui-unselecting"),r.unselecting=!n,r.selecting=n,r.selected=n,n?i._trigger("selecting",e,{selecting:r.element}):i._trigger("unselecting",e,{unselecting:r.element}),!1):void 0}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,n=this,r=this.options,s=this.opos[0],o=this.opos[1],a=e.pageX,l=e.pageY;return s>a&&(i=a,a=s,s=i),o>l&&(i=l,l=o,o=i),this.helper.css({left:s,top:o,width:a-s,height:l-o}),this.selectees.each(function(){var i=t.data(this,"selectable-item"),u=!1,c={};i&&i.element!==n.element[0]&&(c.left=i.left+n.elementPos.left,c.right=i.right+n.elementPos.left,c.top=i.top+n.elementPos.top,c.bottom=i.bottom+n.elementPos.top,"touch"===r.tolerance?u=!(c.left>a||s>c.right||c.top>l||o>c.bottom):"fit"===r.tolerance&&(u=c.left>s&&a>c.right&&c.top>o&&l>c.bottom),u?(i.selected&&(n._removeClass(i.$element,"ui-selected"),i.selected=!1),i.unselecting&&(n._removeClass(i.$element,"ui-unselecting"),i.unselecting=!1),i.selecting||(n._addClass(i.$element,"ui-selecting"),i.selecting=!0,n._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(n._removeClass(i.$element,"ui-selecting"),i.selecting=!1,n._addClass(i.$element,"ui-selected"),i.selected=!0):(n._removeClass(i.$element,"ui-selecting"),i.selecting=!1,i.startselected&&(n._addClass(i.$element,"ui-unselecting"),i.unselecting=!0),n._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(n._removeClass(i.$element,"ui-selected"),i.selected=!1,n._addClass(i.$element,"ui-unselecting"),i.unselecting=!0,n._trigger("unselecting",e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var n=t.data(this,"selectable-item");i._removeClass(n.$element,"ui-unselecting"),n.unselecting=!1,n.startselected=!1,i._trigger("unselected",e,{unselected:n.element})}),t(".ui-selecting",this.element[0]).each(function(){var n=t.data(this,"selectable-item");i._removeClass(n.$element,"ui-selecting")._addClass(n.$element,"ui-selected"),n.selecting=!1,n.selected=!0,n.startselected=!0,i._trigger("selected",e,{selected:n.element})}),this._trigger("stop",e),this.helper.remove(),!1}}),t.widget("ui.sortable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return t>=e&&e+i>t},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){var e=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),t.each(this.items,function(){e._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(e,i){var n=null,r=!1,s=this;return!this.reverting&&(!this.options.disabled&&"static"!==this.options.type&&(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,s.widgetName+"-item")===s?(n=t(this),!1):void 0}),t.data(e.target,s.widgetName+"-item")===s&&(n=t(e.target)),!!n&&(!(this.options.handle&&!i&&(t(this.options.handle,n).find("*").addBack().each(function(){this===e.target&&(r=!0)}),!r))&&(this.currentItem=n,this._removeCurrentsFromItems(),!0))))},_mouseStart:function(e,i,n){var r,s,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(s=this.document.find("body"),this.storedCursor=s.css("cursor"),s.css("cursor",o.cursor),this.storedStylesheet=t("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(s)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!n)for(r=this.containers.length-1;r>=0;r--)this.containers[r]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,n,r,s,o=this.options,a=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=a=this.scrollParent[0].scrollTop+o.scrollSpeed:e.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=a=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=a=this.scrollParent[0].scrollLeft+o.scrollSpeed:e.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=a=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(e.pageY-this.document.scrollTop()<o.scrollSensitivity?a=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed):this.window.height()-(e.pageY-this.document.scrollTop())<o.scrollSensitivity&&(a=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed)),e.pageX-this.document.scrollLeft()<o.scrollSensitivity?a=this.document.scrollLeft(this.document.scrollLeft()-o.scrollSpeed):this.window.width()-(e.pageX-this.document.scrollLeft())<o.scrollSensitivity&&(a=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed))),!1!==a&&t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(n=this.items[i],r=n.item[0],(s=this._intersectsWithPointer(n))&&n.instance===this.currentContainer&&r!==this.currentItem[0]&&this.placeholder[1===s?"next":"prev"]()[0]!==r&&!t.contains(this.placeholder[0],r)&&("semi-dynamic"!==this.options.type||!t.contains(this.element[0],r))){if(this.direction=1===s?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(n))break;this._rearrange(e,n),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var n=this,r=this.placeholder.offset(),s=this.options.axis,o={};s&&"x"!==s||(o.left=r.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),s&&"y"!==s||(o.top=r.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){n._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp(new t.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),n=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&n.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!n.length&&e.key&&n.push(e.key+"="),n.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),n=[];return e=e||{},i.each(function(){n.push(t(e.item||this).attr(e.attribute||"id")||"")}),n},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,n=this.positionAbs.top,r=n+this.helperProportions.height,s=t.left,o=s+t.width,a=t.top,l=a+t.height,u=this.offset.click.top,c=this.offset.click.left,h="x"===this.options.axis||n+u>a&&l>n+u,d="y"===this.options.axis||e+c>s&&o>e+c,p=h&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>s&&o>i-this.helperProportions.width/2&&n+this.helperProportions.height/2>a&&l>r-this.helperProportions.height/2},_intersectsWithPointer:function(t){var e,i,n="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),r="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width);return!(!n||!r)&&(e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection(),this.floating?"right"===i||"down"===e?2:1:e&&("down"===e?2:1))},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),n=this._getDragVerticalDirection(),r=this._getDragHorizontalDirection();return this.floating&&r?"right"===r&&i||"left"===r&&!i:n&&("down"===n&&e||"up"===n&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){a.push(this)}var n,r,s,o,a=[],l=[],u=this._connectWith();if(u&&e)for(n=u.length-1;n>=0;n--)for(s=t(u[n],this.document[0]),r=s.length-1;r>=0;r--)(o=t.data(s[r],this.widgetFullName))&&o!==this&&!o.options.disabled&&l.push([t.isFunction(o.options.items)?o.options.items.call(o.element):t(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);for(l.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),n=l.length-1;n>=0;n--)l[n][0].each(i);return t(a)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,n,r,s,o,a,l,u,c=this.items,h=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(r=t(d[i],this.document[0]),n=r.length-1;n>=0;n--)(s=t.data(r[n],this.widgetFullName))&&s!==this&&!s.options.disabled&&(h.push([t.isFunction(s.options.items)?s.options.items.call(s.element[0],e,{item:this.currentItem}):t(s.options.items,s.element),s]),this.containers.push(s));for(i=h.length-1;i>=0;i--)for(o=h[i][1],a=h[i][0],n=0,u=a.length;u>n;n++)l=t(a[n]),l.data(this.widgetName+"-item",o),c.push({item:l,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.floating=!!this.items.length&&("x"===this.options.axis||this._isFloating(this.items[0].item)),this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,n,r,s;for(i=this.items.length-1;i>=0;i--)n=this.items[i],n.instance!==this.currentContainer&&this.currentContainer&&n.item[0]!==this.currentItem[0]||(r=this.options.toleranceElement?t(this.options.toleranceElement,n.item):n.item,e||(n.width=r.outerWidth(),n.height=r.outerHeight()),s=r.offset(),n.left=s.left,n.top=s.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)s=this.containers[i].element.offset(),this.containers[i].containerCache.left=s.left,this.containers[i].containerCache.top=s.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,n=e.options;n.placeholder&&n.placeholder.constructor!==String||(i=n.placeholder,n.placeholder={element:function(){var n=e.currentItem[0].nodeName.toLowerCase(),r=t("<"+n+">",e.document[0]);return e._addClass(r,"ui-sortable-placeholder",i||e.currentItem[0].className)._removeClass(r,"ui-sortable-helper"),"tbody"===n?e._createTrPlaceholder(e.currentItem.find("tr").eq(0),t("<tr>",e.document[0]).appendTo(r)):"tr"===n?e._createTrPlaceholder(e.currentItem,r):"img"===n&&r.attr("src",e.currentItem.attr("src")),i||r.css("visibility","hidden"),r},update:function(t,r){(!i||n.forcePlaceholderSize)&&(r.height()||r.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),r.width()||r.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(n.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),n.placeholder.update(e,e.placeholder)},_createTrPlaceholder:function(e,i){var n=this;e.children().each(function(){t("<td>&#160;</td>",n.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(e){var i,n,r,s,o,a,l,u,c,h,d=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!t.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(d&&t.contains(this.containers[i].element[0],d.element[0]))continue;d=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",e,this._uiHash(this)),this.containers[i].containerCache.over=0);if(d)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(r=1e4,s=null,c=d.floating||this._isFloating(this.currentItem),o=c?"left":"top",a=c?"width":"height",h=c?"pageX":"pageY",n=this.items.length-1;n>=0;n--)t.contains(this.containers[p].element[0],this.items[n].item[0])&&this.items[n].item[0]!==this.currentItem[0]&&(l=this.items[n].item.offset()[o],u=!1,e[h]-l>this.items[n][a]/2&&(u=!0),r>Math.abs(e[h]-l)&&(r=Math.abs(e[h]-l),s=this.items[n],this.direction=u?"up":"down"));if(!s&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return void(this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash()),this.currentContainer.containerCache.over=1));s?this._rearrange(e,s,null,!0):this._rearrange(e,null,this.containers[p].element,!0),this._trigger("change",e,this._uiHash()),this.containers[p]._trigger("change",e,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(e){var i=this.options,n=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return n.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(n[0]),n[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!n[0].style.width||i.forceHelperSize)&&n.width(this.currentItem.width()),(!n[0].style.height||i.forceHelperSize)&&n.height(this.currentItem.height()),n},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,n,r=this.options;"parent"===r.containment&&(r.containment=this.helper[0].parentNode),("document"===r.containment||"window"===r.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===r.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===r.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(r.containment)||(e=t(r.containment)[0],i=t(r.containment).offset(),n="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(n?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(n?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var n="absolute"===e?1:-1,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,s=/(html|body)/i.test(r[0].tagName);return{top:i.top+this.offset.relative.top*n+this.offset.parent.top*n-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():s?0:r.scrollTop())*n,left:i.left+this.offset.relative.left*n+this.offset.parent.left*n-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():s?0:r.scrollLeft())*n}},_generatePosition:function(e){var i,n,r=this.options,s=e.pageX,o=e.pageY,a="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,l=/(html|body)/i.test(a[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(s=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(s=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),r.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/r.grid[1])*r.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-r.grid[1]:i+r.grid[1]:i,n=this.originalPageX+Math.round((s-this.originalPageX)/r.grid[0])*r.grid[0],s=this.containment?n-this.offset.click.left>=this.containment[0]&&n-this.offset.click.left<=this.containment[2]?n:n-this.offset.click.left>=this.containment[0]?n-r.grid[0]:n+r.grid[0]:n)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():l?0:a.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():l?0:a.scrollLeft())}},_rearrange:function(t,e,i,n){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var r=this.counter;this._delay(function(){r===this.counter&&this.refreshPositions(!n)})},_clear:function(t,e){function i(t,e,i){return function(n){i._trigger(t,n,e._uiHash(e))}}this.reverting=!1;var n,r=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(n in this._storedCSS)("auto"===this._storedCSS[n]||"static"===this._storedCSS[n])&&(this._storedCSS[n]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&r.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||r.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(r.push(function(t){this._trigger("remove",t,this._uiHash())}),r.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),r.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),n=this.containers.length-1;n>=0;n--)e||r.push(i("deactivate",this,this.containers[n])),this.containers[n].containerCache.over&&(r.push(i("out",this,this.containers[n])),this.containers[n].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(n=0;r.length>n;n++)r[n].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){!1===t.Widget.prototype._trigger.apply(this,arguments)&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}}),t.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),e.collapsible||!1!==e.active&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t()}},_createIcons:function(){var e,i,n=this.options.icons;n&&(e=t("<span>"),this._addClass(e,"ui-accordion-header-icon","ui-icon "+n.header),e.prependTo(this.headers),i=this.active.children(".ui-accordion-header-icon"),this._removeClass(i,n.header)._addClass(i,null,n.activeHeader)._addClass(this.headers,"ui-accordion-icons"))},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?void this._activate(e):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||!1!==this.options.active||this._activate(0),void("icons"===t&&(this._destroyIcons(),e&&this._createIcons())))},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!t)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,n=this.headers.length,r=this.headers.index(e.target),s=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:s=this.headers[(r+1)%n];break;case i.LEFT:case i.UP:s=this.headers[(r-1+n)%n];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:s=this.headers[0];break;case i.END:s=this.headers[n-1]}s&&(t(e.target).attr("tabIndex",-1),t(s).attr("tabIndex",0),t(s).trigger("focus"),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().trigger("focus")},refresh:function(){var e=this.options;this._processPanels(),!1===e.active&&!0===e.collapsible||!this.headers.length?(e.active=!1,this.active=t()):!1===e.active?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var t=this.headers,e=this.panels;this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refresh:function(){var e,i=this.options,n=i.heightStyle,r=this.element.parent();this.active=this._findActive(i.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var e=t(this),i=e.uniqueId().attr("id"),n=e.next(),r=n.uniqueId().attr("id");e.attr("aria-controls",r),n.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===n?(e=r.height(),this.element.siblings(":visible").each(function(){var i=t(this),n=i.css("position");"absolute"!==n&&"fixed"!==n&&(e-=i.outerHeight(!0))}),this.headers.each(function(){e-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===n&&(e=0,this.headers.next().each(function(){var i=t(this).is(":visible");i||t(this).show(),e=Math.max(e,t(this).css("height","").height()),i||t(this).hide()}).height(e))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i,n,r=this.options,s=this.active,o=t(e.currentTarget),a=o[0]===s[0],l=a&&r.collapsible,u=l?t():o.next(),c=s.next(),h={oldHeader:s,oldPanel:c,newHeader:l?t():o,newPanel:u};e.preventDefault(),a&&!r.collapsible||!1===this._trigger("beforeActivate",e,h)||(r.active=!l&&this.headers.index(o),this.active=a?t():o,this._toggle(h),this._removeClass(s,"ui-accordion-header-active","ui-state-active"),r.icons&&(i=s.children(".ui-accordion-header-icon"),this._removeClass(i,null,r.icons.activeHeader)._addClass(i,null,r.icons.header)),a||(this._removeClass(o,"ui-accordion-header-collapsed")._addClass(o,"ui-accordion-header-active","ui-state-active"),r.icons&&(n=o.children(".ui-accordion-header-icon"),this._removeClass(n,null,r.icons.header)._addClass(n,null,r.icons.activeHeader)),this._addClass(o.next(),"ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,n=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=n,this.options.animate?this._animate(i,n,e):(n.hide(),i.show(),this._toggleComplete(e)),n.attr({"aria-hidden":"true"}),n.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&n.length?n.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(t(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(t,e,i){var n,r,s,o=this,a=0,l=t.css("box-sizing"),u=t.length&&(!e.length||t.index()<e.index()),c=this.options.animate||{},h=u&&c.down||c,d=function(){o._toggleComplete(i)};return"number"==typeof h&&(s=h),"string"==typeof h&&(r=h),r=r||h.easing||c.easing,s=s||h.duration||c.duration,e.length?t.length?(n=t.show().outerHeight(),e.animate(this.hideProps,{duration:s,easing:r,step:function(t,e){e.now=Math.round(t)}}),void t.hide().animate(this.showProps,{duration:s,easing:r,complete:d,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?"content-box"===l&&(a+=i.now):"content"!==o.options.heightStyle&&(i.now=Math.round(n-e.outerHeight()-a),a=0)}})):e.animate(this.hideProps,s,r,d):t.animate(this.showProps,s,r,d)},_toggleComplete:function(t){var e=t.oldPanel,i=e.prev();this._removeClass(e,"ui-accordion-content-active"),this._removeClass(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-collapsed"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}}),t.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var i=t(e.target),n=t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&n.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var i=t(e.target).closest(".ui-menu-item"),n=t(e.currentTarget);i[0]===n[0]&&(this._removeClass(n.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,n))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){!t.contains(this.element[0],t.ui.safeActiveElement(this.document[0]))&&this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),i=e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),i.children().each(function(){var e=t(this);e.data("ui-menu-submenu-caret")&&e.remove()})},_keydown:function(e){var i,n,r,s,o=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:o=!1,n=this.previousFilter||"",s=!1,r=e.keyCode>=96&&105>=e.keyCode?""+(e.keyCode-96):String.fromCharCode(e.keyCode),clearTimeout(this.filterTimer),r===n?s=!0:r=n+r,i=this._filterMenuItems(r),i=s&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(r=String.fromCharCode(e.keyCode),i=this._filterMenuItems(r)),i.length?(this.focus(e,i),this.previousFilter=r,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&e.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i,n,r,s,o=this,a=this.options.icons.submenu,l=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),n=l.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),i=e.prev(),n=t("<span>").data("ui-menu-submenu-caret",!0);o._addClass(n,"ui-menu-icon","ui-icon "+a),i.attr("aria-haspopup","true").prepend(n),e.attr("aria-labelledby",i.attr("id"))}),this._addClass(n,"ui-menu","ui-widget ui-widget-content ui-front"),e=l.add(this.element),i=e.find(this.options.items),i.not(".ui-menu-item").each(function(){var e=t(this);o._isDivider(e)&&o._addClass(e,"ui-menu-divider","ui-widget-content")}),r=i.not(".ui-menu-item, .ui-menu-divider"),s=r.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(r,"ui-menu-item")._addClass(s,"ui-menu-item-wrapper"),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t+""),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i,n,r;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),n=this.active.children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",n.attr("id")),r=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(r,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,n,r,s,o,a;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,n=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,r=e.offset().top-this.activeMenu.offset().top-i-n,s=this.activeMenu.scrollTop(),o=this.activeMenu.height(),a=e.outerHeight(),0>r?this.activeMenu.scrollTop(s+r):r+a>o&&this.activeMenu.scrollTop(s+r-o+a))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var n=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));n.length||(n=this.element),this._close(n),this.blur(e),this._removeClass(n.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=n},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var n;this.active&&(n="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),n&&n.length&&this.active||(n=this.activeMenu.find(this.options.items)[e]()),this.focus(i,n)},nextPage:function(e){var i,n,r;return this.active?void(this.isLastItem()||(this._hasScroll()?(n=this.active.offset().top,r=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-n-r}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]()))):void this.next(e)},previousPage:function(e){var i,n,r;return this.active?void(this.isFirstItem()||(this._hasScroll()?(n=this.active.offset().top,r=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-n+r>0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first()))):void this.next(e)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),n=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return n.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))})}}),t.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,n,r=this.element[0].nodeName.toLowerCase(),s="textarea"===r,o="input"===r;this.isMultiLine=s||!o&&this._isContentEditable(this.element),this.valueMethod=this.element[s||o?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(r){if(this.element.prop("readOnly"))return e=!0,n=!0,void(i=!0);e=!1,n=!1,i=!1;var s=t.ui.keyCode;switch(r.keyCode){case s.PAGE_UP:e=!0,this._move("previousPage",r);break;case s.PAGE_DOWN:e=!0,this._move("nextPage",r);break;case s.UP:e=!0,this._keyEvent("previous",r);break;case s.DOWN:e=!0,this._keyEvent("next",r);break;case s.ENTER:this.menu.active&&(e=!0,r.preventDefault(),this.menu.select(r));break;case s.TAB:this.menu.active&&this.menu.select(r);break;case s.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(r),r.preventDefault());break;default:i=!0,this._searchTimeout(r)}},keypress:function(n){if(e)return e=!1,void((!this.isMultiLine||this.menu.element.is(":visible"))&&n.preventDefault());if(!i){var r=t.ui.keyCode;switch(n.keyCode){case r.PAGE_UP:this._move("previousPage",n);break;case r.PAGE_DOWN:this._move("nextPage",n);break;case r.UP:this._keyEvent("previous",n);break;case r.DOWN:this._keyEvent("next",n)}}},input:function(t){return n?(n=!1,void t.preventDefault()):void this._searchTimeout(t)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?void delete this.cancelBlur:(clearTimeout(this.searching),this.close(t),void this._change(t))}}),this._initSource(),this.menu=t("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==t.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(e,i){var n,r;return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),void this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)})):(r=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:r})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(r.value),void((n=i.item.attr("aria-label")||r.value)&&t.trim(n).length&&(this.liveRegion.children().hide(),t("<div>").text(n).appendTo(this.liveRegion))))},menuselect:function(e,i){var n=i.item.data("ui-autocomplete-item"),r=this.previous;this.element[0]!==t.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=r,this._delay(function(){this.previous=r,this.selectedItem=n})),!1!==this._trigger("select",e,{item:n})&&this._value(n.value),this.term=this._value(),this.close(e),this.selectedItem=n}}),this.liveRegion=t("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(e){var i=this.menu.element[0];return e.target===this.element[0]||e.target===i||t.contains(i,e.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,n=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,n){n(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,r){n.xhr&&n.xhr.abort(),n.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){r(t)},error:function(){r([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),i=this.menu.element.is(":visible"),n=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&&!i&&!n)&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):!1!==this._trigger("search",e)?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),--this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var n=this;t.each(i,function(t,i){n._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<div>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[t](e):void this.search(null,e)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var n=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return n.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))}}),t.ui.autocomplete;var d=/ui-corner-([a-z]){2,6}/g;t.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var e=this,i=[];t.each(this.options.items,function(n,r){var s,o={};return r?"controlgroupLabel"===n?(s=e.element.find(r),s.each(function(){var e=t(this);e.children(".ui-controlgroup-label-contents").length||e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),e._addClass(s,null,"ui-widget ui-widget-content ui-state-default"),void(i=i.concat(s.get()))):void(t.fn[n]&&(o=e["_"+n+"Options"]?e["_"+n+"Options"]("middle"):{classes:{}},e.element.find(r).each(function(){var r=t(this),s=r[n]("instance"),a=t.widget.extend({},o);if("button"!==n||!r.parent(".ui-spinner").length){s||(s=r[n]()[n]("instance")),s&&(a.classes=e._resolveClassesValues(a.classes,s)),r[n](a);var l=r[n]("widget");t.data(l[0],"ui-controlgroup-data",s||r[n]("instance")),i.push(l[0])}}))):void 0}),this.childWidgets=t(t.unique(i)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each(function(){var i=t(this),n=i.data("ui-controlgroup-data");n&&n[e]&&n[e]()})},_updateCornerClass:function(t,e){var i=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,"ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"),this._addClass(t,null,i)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,n={classes:{}};return n.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],n},_spinnerOptions:function(t){var e=this._buildSimpleOptions(t,"ui-spinner");return e.classes["ui-spinner-up"]="",e.classes["ui-spinner-down"]="",e},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:!!e&&"auto",classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(e,i){var n={};return t.each(e,function(r){var s=i.options.classes[r]||"";s=t.trim(s.replace(d,"")),n[r]=(s+" "+e[r]).replace(/\s+/g," ")}),n},_setOption:function(t,e){return"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"===t?void this._callChildMethod(e?"disable":"enable"):void this.refresh()},refresh:function(){var e,i=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),e=this.childWidgets,this.options.onlyVisible&&(e=e.filter(":visible")),e.length&&(t.each(["first","last"],function(t,n){var r=e[n]().data("ui-controlgroup-data");if(r&&i["_"+r.widgetName+"Options"]){var s=i["_"+r.widgetName+"Options"](1===e.length?"only":n);s.classes=i._resolveClassesValues(s.classes,r),r.element[r.widgetName](s)}else i._updateCornerClass(e[n](),n)}),this._callChildMethod("refresh"))}}),t.widget("ui.checkboxradio",[t.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var e,i,n=this,r=this._super()||{};return this._readType(),i=this.element.labels(),this.label=t(i[i.length-1]),this.label.length||t.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){n.originalLabel+=3===this.nodeType?t(this).text():this.outerHTML}),this.originalLabel&&(r.label=this.originalLabel),e=this.element[0].disabled,null!=e&&(r.disabled=e),r},_create:function(){var t=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),t&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var e=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===e&&/radio|checkbox/.test(this.type)||t.error("Can't create checkboxradio on element.nodeName="+e+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var e,i=this.element[0].name,n="input[name='"+t.ui.escapeSelector(i)+"']";return i?(e=this.form.length?t(this.form[0].elements).filter(n):t(n).filter(function(){return 0===t(this).form().length}),e.not(this.element)):t([])},_toggleClasses:function(){var e=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",e),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",e)._toggleClass(this.icon,null,"ui-icon-blank",!e),"radio"===this.type&&this._getRadioGroup().each(function(){var e=t(this).checkboxradio("instance");e&&e._removeClass(e.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(t,e){return"label"!==t||e?(this._super(t,e),"disabled"===t?(this._toggleClass(this.label,null,"ui-state-disabled",e),void(this.element[0].disabled=e)):void this.refresh()):void 0},_updateIcon:function(e){var i="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=t("<span>"),this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(i+=e?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,e?"ui-icon-blank":"ui-icon-check")):i+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",i),e||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var t=this.label.contents().not(this.element[0]);this.icon&&(t=t.not(this.icon[0])),this.iconSpace&&(t=t.not(this.iconSpace[0])),t.remove(),this.label.append(this.options.label)},refresh:function(){var t=this.element[0].checked,e=this.element[0].disabled;this._updateIcon(t),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",t),null!==this.options.label&&this._updateLabel(),e!==this.options.disabled&&this._setOptions({disabled:e})}}]),t.ui.checkboxradio,t.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,e=this._super()||{};return this.isInput=this.element.is("input"),t=this.element[0].disabled,null!=t&&(e.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(e.label=this.originalLabel),e},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(e){e.keyCode===t.ui.keyCode.SPACE&&(e.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(e,i){var n="iconPosition"!==e,r=n?this.options.iconPosition:i,s="top"===r||"bottom"===r;this.icon?n&&this._removeClass(this.icon,null,this.options.icon):(this.icon=t("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),n&&this._addClass(this.icon,null,i),this._attachIcon(r),s?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(r))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var e=void 0===t.showLabel?this.options.showLabel:t.showLabel,i=void 0===t.icon?this.options.icon:t.icon;e||i||(t.showLabel=!0),this._super(t)},_setOption:function(t,e){"icon"===t&&(e?this._updateIcon(t,e):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,e),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!e),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(e):(this.element.html(e),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,e),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",e),this.element[0].disabled=e,e&&this.element.blur())},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),!1!==t.uiBackCompat&&(t.widget("ui.button",t.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,e){return"text"===t?void this._super("showLabel",e):("showLabel"===t&&(this.options.text=e),"icon"===t&&(this.options.icons.primary=e),"icons"===t&&(e.primary?(this._super("icon",e.primary),this._super("iconPosition","beginning")):e.secondary&&(this._super("icon",e.secondary),this._super("iconPosition","end"))),void this._superApply(arguments))}}),t.fn.button=function(e){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?e.apply(this,arguments):(t.ui.checkboxradio||t.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(t.fn.button),t.fn.buttonset=function(){return t.ui.controlgroup||t.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),t.ui.button,t.extend(t.ui,{datepicker:{version:"1.12.1"}});var p;t.extend(n.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return o(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var n,r,s;n=e.nodeName.toLowerCase(),r="div"===n||"span"===n,e.id||(this.uuid+=1,e.id="dp"+this.uuid),s=this._newInst(t(e),r),s.settings=t.extend({},i||{}),"input"===n?this._connectDatepicker(e,s):r&&this._inlineDatepicker(e,s)},_newInst:function(e,i){return{id:e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1"),input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?r(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var n=t(e);i.append=t([]),i.trigger=t([]),n.hasClass(this.markerClassName)||(this._attachments(n,i),n.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(i),t.data(e,"datepicker",i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var n,r,s,o=this._get(i,"appendText"),a=this._get(i,"isRTL");i.append&&i.append.remove(),o&&(i.append=t("<span class='"+this._appendClass+"'>"+o+"</span>"),e[a?"before":"after"](i.append)),e.off("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),n=this._get(i,"showOn"),("focus"===n||"both"===n)&&e.on("focus",this._showDatepicker),("button"===n||"both"===n)&&(r=this._get(i,"buttonText"),s=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:s,alt:r,title:r}):t("<button type='button'></button>").addClass(this._triggerClass).html(s?t("<img/>").attr({src:s,alt:r,title:r}):r)),e[a?"before":"after"](i.trigger),i.trigger.on("click",function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,n,r,s=new Date(2009,11,20),o=this._get(t,"dateFormat");o.match(/[DM]/)&&(e=function(t){for(i=0,n=0,r=0;t.length>r;r++)t[r].length>i&&(i=t[r].length,n=r);return n},s.setMonth(e(this._get(t,o.match(/MM/)?"monthNames":"monthNamesShort"))),s.setDate(e(this._get(t,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-s.getDay())),t.input.attr("size",this._formatDate(t,s).length)}},_inlineDatepicker:function(e,i){var n=t(e);n.hasClass(this.markerClassName)||(n.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,n,r,s){var a,l,u,c,h,d=this._dialogInst;return d||(this.uuid+=1,a="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+a+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),t("body").append(this._dialogInput),d=this._dialogInst=this._newInst(this._dialogInput,!1),d.settings={},t.data(this._dialogInput[0],"datepicker",d)),o(d.settings,r||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=s?s.length?s:[s.pageX,s.pageY]:null,this._pos||(l=document.documentElement.clientWidth,u=document.documentElement.clientHeight,c=document.documentElement.scrollLeft||document.body.scrollLeft,h=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+c,u/2-150+h]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=n,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),this},_destroyDatepicker:function(e){var i,n=t(e),r=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===i?(r.append.remove(),r.trigger.remove(),n.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"===i||"span"===i)&&n.removeClass(this.markerClassName).empty(),p===r&&(p=null))},_enableDatepicker:function(e){var i,n,r=t(e),s=t.data(e,"datepicker");r.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,s.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(n=r.children("."+this._inlineClass),n.children().removeClass("ui-state-disabled"),n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,n,r=t(e),s=t.data(e,"datepicker");r.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,s.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(n=r.children("."+this._inlineClass),n.children().addClass("ui-state-disabled"),n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,"datepicker")}catch(t){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,i,n){var r,s,a,l,u=this._getInst(e);return 2===arguments.length&&"string"==typeof i?"defaults"===i?t.extend({},t.datepicker._defaults):u?"all"===i?t.extend({},u.settings):this._get(u,i):null:(r=i||{},"string"==typeof i&&(r={},r[i]=n),void(u&&(this._curInst===u&&this._hideDatepicker(),s=this._getDateDatepicker(e,!0),a=this._getMinMaxDate(u,"min"),l=this._getMinMaxDate(u,"max"),o(u.settings,r),null!==a&&void 0!==r.dateFormat&&void 0===r.minDate&&(u.settings.minDate=this._formatDate(u,a)),null!==l&&void 0!==r.dateFormat&&void 0===r.maxDate&&(u.settings.maxDate=this._formatDate(u,l)),"disabled"in r&&(r.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),u),this._autoSize(u),this._setDate(u,s),this._updateAlternate(u),this._updateDatepicker(u))))},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,n,r,s=t.datepicker._getInst(e.target),o=!0,a=s.dpDiv.is(".ui-datepicker-rtl");if(s._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),o=!1;break;case 13:return r=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",s.dpDiv),r[0]&&t.datepicker._selectDay(e.target,s.selectedMonth,s.selectedYear,r[0]),i=t.datepicker._get(s,"onSelect"),i?(n=t.datepicker._formatDate(s),i.apply(s.input?s.input[0]:null,[n,s])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(s,"stepBigMonths"):-t.datepicker._get(s,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(s,"stepBigMonths"):+t.datepicker._get(s,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),o=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),o=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,a?1:-1,"D"),o=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(s,"stepBigMonths"):-t.datepicker._get(s,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),o=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,a?-1:1,"D"),o=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(s,"stepBigMonths"):+t.datepicker._get(s,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),o=e.ctrlKey||e.metaKey;break;default:o=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):o=!1;o&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var i,n,r=t.datepicker._getInst(e.target);return t.datepicker._get(r,"constrainInput")?(i=t.datepicker._possibleChars(t.datepicker._get(r,"dateFormat")),n=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||" ">n||!i||i.indexOf(n)>-1):void 0},_doKeyUp:function(e){var i=t.datepicker._getInst(e.target);if(i.input.val()!==i.lastVal)try{t.datepicker.parseDate(t.datepicker._get(i,"dateFormat"),i.input?i.input.val():null,t.datepicker._getFormatConfig(i))&&(t.datepicker._setDateFromField(i),t.datepicker._updateAlternate(i),t.datepicker._updateDatepicker(i))}catch(t){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var n,r,s,a,l,u,c;n=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==n&&(t.datepicker._curInst.dpDiv.stop(!0,!0),n&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),r=t.datepicker._get(n,"beforeShow"),!1!==(s=r?r.apply(e,[e,n]):{})&&(o(n.settings,s),n.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(n),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),a=!1,t(e).parents().each(function(){return!(a|="fixed"===t(this).css("position"))}),l={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,n.dpDiv.empty(),n.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(n),l=t.datepicker._checkOffset(n,l,a),n.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":a?"fixed":"absolute",display:"none",left:l.left+"px",top:l.top+"px"}),n.inline||(u=t.datepicker._get(n,"showAnim"),c=t.datepicker._get(n,"duration"),n.dpDiv.css("z-index",i(t(e))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[u]?n.dpDiv.show(u,t.datepicker._get(n,"showOptions"),c):n.dpDiv[u||"show"](u?c:null),t.datepicker._shouldFocusInput(n)&&n.input.trigger("focus"),t.datepicker._curInst=n))}},_updateDatepicker:function(e){this.maxRows=4,p=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,n=this._getNumberOfMonths(e),r=n[1],o=e.dpDiv.find("."+this._dayOverClass+" a");o.length>0&&s.apply(o.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),r>1&&e.dpDiv.addClass("ui-datepicker-multi-"+r).css("width",17*r+"em"),e.dpDiv[(1!==n[0]||1!==n[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,n){var r=e.dpDiv.outerWidth(),s=e.dpDiv.outerHeight(),o=e.input?e.input.outerWidth():0,a=e.input?e.input.outerHeight():0,l=document.documentElement.clientWidth+(n?0:t(document).scrollLeft()),u=document.documentElement.clientHeight+(n?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?r-o:0,i.left-=n&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=n&&i.top===e.input.offset().top+a?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+r>l&&l>r?Math.abs(i.left+r-l):0),i.top-=Math.min(i.top,i.top+s>u&&u>s?Math.abs(s+a):0),i},_findPos:function(e){for(var i,n=this._getInst(e),r=this._get(n,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[r?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,n,r,s,o=this._curInst;!o||e&&o!==t.data(e,"datepicker")||this._datepickerShowing&&(i=this._get(o,"showAnim"),n=this._get(o,"duration"),r=function(){t.datepicker._tidyDialog(o)},t.effects&&(t.effects.effect[i]||t.effects[i])?o.dpDiv.hide(i,t.datepicker._get(o,"showOptions"),n,r):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?n:null,r),i||r(),this._datepickerShowing=!1,s=this._get(o,"onClose"),s&&s.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),n=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==n)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,n){var r=t(e),s=this._getInst(r[0]);this._isDisabledDatepicker(r[0])||(this._adjustInstDate(s,i+("M"===n?this._get(s,"showCurrentAtPos"):0),n),this._updateDatepicker(s))},_gotoToday:function(e){var i,n=t(e),r=this._getInst(n[0]);this._get(r,"gotoCurrent")&&r.currentDay?(r.selectedDay=r.currentDay,r.drawMonth=r.selectedMonth=r.currentMonth,r.drawYear=r.selectedYear=r.currentYear):(i=new Date,r.selectedDay=i.getDate(),r.drawMonth=r.selectedMonth=i.getMonth(),r.drawYear=r.selectedYear=i.getFullYear()),this._notifyChange(r),this._adjustDate(n)},_selectMonthYear:function(e,i,n){var r=t(e),s=this._getInst(r[0]);s["selected"+("M"===n?"Month":"Year")]=s["draw"+("M"===n?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(s),this._adjustDate(r)},_selectDay:function(e,i,n,r){var s,o=t(e);t(r).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(s=this._getInst(o[0]),s.selectedDay=s.currentDay=t("a",r).html(),s.selectedMonth=s.currentMonth=i,s.selectedYear=s.currentYear=n,this._selectDate(e,this._formatDate(s,s.currentDay,s.currentMonth,s.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var n,r=t(e),s=this._getInst(r[0]);i=null!=i?i:this._formatDate(s),s.input&&s.input.val(i),this._updateAlternate(s),n=this._get(s,"onSelect"),n?n.apply(s.input?s.input[0]:null,[i,s]):s.input&&s.input.trigger("change"),s.inline?this._updateDatepicker(s):(this._hideDatepicker(),this._lastInput=s.input[0],"object"!=typeof s.input[0]&&s.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(e){var i,n,r,s=this._get(e,"altField");s&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),n=this._getDate(e),r=this.formatDate(i,n,this._getFormatConfig(e)),t(s).val(r))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(e,i,n){if(null==e||null==i)throw"Invalid arguments";if(""===(i="object"==typeof i?""+i:i+""))return null;var r,s,o,a,l=0,u=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff,c="string"!=typeof u?u:(new Date).getFullYear()%100+parseInt(u,10),h=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,d=(n?n.dayNames:null)||this._defaults.dayNames,p=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,f=(n?n.monthNames:null)||this._defaults.monthNames,g=-1,m=-1,v=-1,_=-1,y=!1,b=function(t){var i=e.length>r+1&&e.charAt(r+1)===t;return i&&r++,i},w=function(t){var e=b(t),n="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,r="y"===t?n:1,s=RegExp("^\\d{"+r+","+n+"}"),o=i.substring(l).match(s);if(!o)throw"Missing number at position "+l;return l+=o[0].length,parseInt(o[0],10)},x=function(e,n,r){var s=-1,o=t.map(b(e)?r:n,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(o,function(t,e){var n=e[1];return i.substr(l,n.length).toLowerCase()===n.toLowerCase()?(s=e[0],l+=n.length,!1):void 0}),-1!==s)return s+1;throw"Unknown name at position "+l},C=function(){if(i.charAt(l)!==e.charAt(r))throw"Unexpected literal at position "+l;l++};for(r=0;e.length>r;r++)if(y)"'"!==e.charAt(r)||b("'")?C():y=!1;else switch(e.charAt(r)){case"d":v=w("d");break;case"D":x("D",h,d);break;case"o":_=w("o");break;case"m":m=w("m");break;case"M":m=x("M",p,f);break;case"y":g=w("y");break;case"@":a=new Date(w("@")),g=a.getFullYear(),m=a.getMonth()+1,v=a.getDate();break;case"!":a=new Date((w("!")-this._ticksTo1970)/1e4),g=a.getFullYear(),m=a.getMonth()+1,v=a.getDate();break;case"'":b("'")?C():y=!0;break;default:C()}if(i.length>l&&(o=i.substr(l),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c>=g?0:-100)),_>-1)for(m=1,v=_;!((s=this._getDaysInMonth(g,m-1))>=v);)m++,v-=s;if(a=this._daylightSavingAdjust(new Date(g,m-1,v)),a.getFullYear()!==g||a.getMonth()+1!==m||a.getDate()!==v)throw"Invalid date";return a},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:864e9*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var n,r=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,s=(i?i.dayNames:null)||this._defaults.dayNames,o=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,a=(i?i.monthNames:null)||this._defaults.monthNames,l=function(e){var i=t.length>n+1&&t.charAt(n+1)===e;return i&&n++,i},u=function(t,e,i){var n=""+e;if(l(t))for(;i>n.length;)n="0"+n;return n},c=function(t,e,i,n){return l(t)?n[e]:i[e]},h="",d=!1;if(e)for(n=0;t.length>n;n++)if(d)"'"!==t.charAt(n)||l("'")?h+=t.charAt(n):d=!1;else switch(t.charAt(n)){case"d":h+=u("d",e.getDate(),2);break;case"D":h+=c("D",e.getDay(),r,s);break;case"o":h+=u("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":h+=u("m",e.getMonth()+1,2);break;case"M":h+=c("M",e.getMonth(),o,a);break;case"y":h+=l("y")?e.getFullYear():(10>e.getFullYear()%100?"0":"")+e.getFullYear()%100;break;case"@":h+=e.getTime();break;case"!":h+=1e4*e.getTime()+this._ticksTo1970;break;case"'":l("'")?h+="'":d=!0;break;default:h+=t.charAt(n)}return h},_possibleChars:function(t){var e,i="",n=!1,r=function(i){var n=t.length>e+1&&t.charAt(e+1)===i;return n&&e++,n};for(e=0;t.length>e;e++)if(n)"'"!==t.charAt(e)||r("'")?i+=t.charAt(e):n=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":r("'")?i+="'":n=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),n=t.lastVal=t.input?t.input.val():null,r=this._getDefaultDate(t),s=r,o=this._getFormatConfig(t);try{s=this.parseDate(i,n,o)||r}catch(t){n=e?"":n}t.selectedDay=s.getDate(),t.drawMonth=t.selectedMonth=s.getMonth(),t.drawYear=t.selectedYear=s.getFullYear(),t.currentDay=n?s.getDate():0,t.currentMonth=n?s.getMonth():0,t.currentYear=n?s.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,n){var r=null==i||""===i?n:"string"==typeof i?function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(t){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,r=n.getFullYear(),s=n.getMonth(),o=n.getDate(),a=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=a.exec(i);l;){switch(l[2]||"d"){case"d":case"D":o+=parseInt(l[1],10);break;case"w":case"W":o+=7*parseInt(l[1],10);break;case"m":case"M":s+=parseInt(l[1],10),o=Math.min(o,t.datepicker._getDaysInMonth(r,s));break;case"y":case"Y":r+=parseInt(l[1],10),o=Math.min(o,t.datepicker._getDaysInMonth(r,s))}l=a.exec(i)}return new Date(r,s,o)}(i):"number"==typeof i?isNaN(i)?n:function(t){var e=new Date;return e.setDate(e.getDate()+t),e}(i):new Date(i.getTime());return r=r&&"Invalid Date"==""+r?n:r,r&&(r.setHours(0),r.setMinutes(0),r.setSeconds(0),r.setMilliseconds(0)),this._daylightSavingAdjust(r)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var n=!e,r=t.selectedMonth,s=t.selectedYear,o=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=o.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=o.getMonth(),t.drawYear=t.selectedYear=t.currentYear=o.getFullYear(),r===t.selectedMonth&&s===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(n?"":this._formatDate(t))},_getDate:function(t){return!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay))},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),n="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(n,-i,"M")},next:function(){t.datepicker._adjustDate(n,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(n)},selectDay:function(){return t.datepicker._selectDay(n,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(n,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(n,this,"Y"),!1}};t(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,n,r,s,o,a,l,u,c,h,d,p,f,g,m,v,_,y,b,w,x,C,k,T,D,S,A,E,I,$,O,P,N,M,j,H,R,L,F=new Date,z=this._daylightSavingAdjust(new Date(F.getFullYear(),F.getMonth(),F.getDate())),W=this._get(t,"isRTL"),q=this._get(t,"showButtonPanel"),U=this._get(t,"hideIfNoPrevNext"),B=this._get(t,"navigationAsDateFormat"),Y=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),K=this._get(t,"stepMonths"),X=1!==Y[0]||1!==Y[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),Z=this._getMinMaxDate(t,"min"),J=this._getMinMaxDate(t,"max"),Q=t.drawMonth-V,tt=t.drawYear;if(0>Q&&(Q+=12,tt--),J)for(e=this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth()-Y[0]*Y[1]+1,J.getDate())),e=Z&&Z>e?Z:e;this._daylightSavingAdjust(new Date(tt,Q,1))>e;)0>--Q&&(Q=11,tt--);for(t.drawMonth=Q,t.drawYear=tt,i=this._get(t,"prevText"),i=B?this.formatDate(i,this._daylightSavingAdjust(new Date(tt,Q-K,1)),this._getFormatConfig(t)):i,n=this._canAdjustMonth(t,-1,tt,Q)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(W?"e":"w")+"'>"+i+"</span></a>":U?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(W?"e":"w")+"'>"+i+"</span></a>",r=this._get(t,"nextText"),r=B?this.formatDate(r,this._daylightSavingAdjust(new Date(tt,Q+K,1)),this._getFormatConfig(t)):r,s=this._canAdjustMonth(t,1,tt,Q)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+r+"'><span class='ui-icon ui-icon-circle-triangle-"+(W?"w":"e")+"'>"+r+"</span></a>":U?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+r+"'><span class='ui-icon ui-icon-circle-triangle-"+(W?"w":"e")+"'>"+r+"</span></a>",o=this._get(t,"currentText"),a=this._get(t,"gotoCurrent")&&t.currentDay?G:z,o=B?this.formatDate(o,a,this._getFormatConfig(t)):o,l=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",u=q?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(W?l:"")+(this._isInRange(t,a)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(W?"":l)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,h=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),v=this._get(t,"showOtherMonths"),_=this._get(t,"selectOtherMonths"),y=this._getDefaultDate(t),b="",x=0;Y[0]>x;x++){for(C="",this.maxRows=4,k=0;Y[1]>k;k++){if(T=this._daylightSavingAdjust(new Date(tt,Q,t.selectedDay)),D=" ui-corner-all",S="",X){if(S+="<div class='ui-datepicker-group",Y[1]>1)switch(k){case 0:S+=" ui-datepicker-group-first",D=" ui-corner-"+(W?"right":"left");break;case Y[1]-1:S+=" ui-datepicker-group-last",D=" ui-corner-"+(W?"left":"right");break;default:S+=" ui-datepicker-group-middle",D=""}S+="'>"}for(S+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+D+"'>"+(/all|left/.test(D)&&0===x?W?s:n:"")+(/all|right/.test(D)&&0===x?W?n:s:"")+this._generateMonthYearHeader(t,Q,tt,Z,J,x>0||k>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead><tr>",A=h?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)E=(w+c)%7,A+="<th scope='col'"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+d[E]+"'>"+p[E]+"</span></th>";for(S+=A+"</tr></thead><tbody>",I=this._getDaysInMonth(tt,Q),tt===t.selectedYear&&Q===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,I)),$=(this._getFirstDayOfMonth(tt,Q)-c+7)%7,O=Math.ceil(($+I)/7),P=X&&this.maxRows>O?this.maxRows:O,this.maxRows=P,N=this._daylightSavingAdjust(new Date(tt,Q,1-$)),M=0;P>M;M++){for(S+="<tr>",j=h?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(N)+"</td>":"",w=0;7>w;w++)H=m?m.apply(t.input?t.input[0]:null,[N]):[!0,""],R=N.getMonth()!==Q,L=R&&!_||!H[0]||Z&&Z>N||J&&N>J,j+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(R?" ui-datepicker-other-month":"")+(N.getTime()===T.getTime()&&Q===t.selectedMonth&&t._keyEvent||y.getTime()===N.getTime()&&y.getTime()===T.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(R&&!v?"":" "+H[1]+(N.getTime()===G.getTime()?" "+this._currentClass:"")+(N.getTime()===z.getTime()?" ui-datepicker-today":""))+"'"+(R&&!v||!H[2]?"":" title='"+H[2].replace(/'/g,"&#39;")+"'")+(L?"":" data-handler='selectDay' data-event='click' data-month='"+N.getMonth()+"' data-year='"+N.getFullYear()+"'")+">"+(R&&!v?"&#xa0;":L?"<span class='ui-state-default'>"+N.getDate()+"</span>":"<a class='ui-state-default"+(N.getTime()===z.getTime()?" ui-state-highlight":"")+(N.getTime()===G.getTime()?" ui-state-active":"")+(R?" ui-priority-secondary":"")+"' href='#'>"+N.getDate()+"</a>")+"</td>",N.setDate(N.getDate()+1),N=this._daylightSavingAdjust(N);S+=j+"</tr>"}Q++,Q>11&&(Q=0,tt++),S+="</tbody></table>"+(X?"</div>"+(Y[0]>0&&k===Y[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),C+=S}b+=C}return b+=u,t._keyEvent=!1,b},_generateMonthYearHeader:function(t,e,i,n,r,s,o,a){var l,u,c,h,d,p,f,g,m=this._get(t,"changeMonth"),v=this._get(t,"changeYear"),_=this._get(t,"showMonthAfterYear"),y="<div class='ui-datepicker-title'>",b="";if(s||!m)b+="<span class='ui-datepicker-month'>"+o[e]+"</span>";else{for(l=n&&n.getFullYear()===i,u=r&&r.getFullYear()===i,b+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!l||c>=n.getMonth())&&(!u||r.getMonth()>=c)&&(b+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+a[c]+"</option>");b+="</select>"}if(_||(y+=b+(!s&&m&&v?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",s||!v)y+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(h=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(h[0]),g=Math.max(f,p(h[1]||"")),f=n?Math.max(f,n.getFullYear()):f,g=r?Math.min(g,r.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",y+=t.yearshtml,t.yearshtml=null}return y+=this._get(t,"yearSuffix"),_&&(y+=(!s&&m&&v?"":"&#xa0;")+b),y+="</div>"},_adjustInstDate:function(t,e,i){var n=t.selectedYear+("Y"===i?e:0),r=t.selectedMonth+("M"===i?e:0),s=Math.min(t.selectedDay,this._getDaysInMonth(n,r))+("D"===i?e:0),o=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(n,r,s)));t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),n=this._getMinMaxDate(t,"max"),r=i&&i>e?i:e;return n&&r>n?n:r},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,n){var r=this._getNumberOfMonths(t),s=this._daylightSavingAdjust(new Date(i,n+(0>e?e:r[0]*r[1]),1));return 0>e&&s.setDate(this._getDaysInMonth(s.getFullYear(),s.getMonth())),this._isInRange(t,s)},_isInRange:function(t,e){var i,n,r=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),o=null,a=null,l=this._get(t,"yearRange");return l&&(i=l.split(":"),n=(new Date).getFullYear(),o=parseInt(i[0],10),a=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(o+=n),i[1].match(/[+\-].*/)&&(a+=n)),(!r||e.getTime()>=r.getTime())&&(!s||e.getTime()<=s.getTime())&&(!o||e.getFullYear()>=o)&&(!a||a>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,n){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var r=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(n,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),r,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).on("mousedown",t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new n,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.12.1",t.datepicker,t.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&!1!==this._trigger("beforeClose",e)&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,i){var n=!1,r=this.uiDialog.siblings(".ui-front:visible").map(function(){return+t(this).css("z-index")}).get(),s=Math.max.apply(null,r);return s>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",s+1),n=!0),n&&!i&&this._trigger("focus",e),n},open:function(){var e=this;return this._isOpen?void(this._moveToTop()&&this._focusTabbable()):(this._isOpen=!0,this.opener=t(t.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._makeFocusTarget(),void this._trigger("open"))},_focusTabbable:function(){var t=this._focusedElement;t||(t=this.element.find("[autofocus]")),t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).trigger("focus")},_keepFocus:function(e){function i(){var e=t.ui.safeActiveElement(this.document[0]);this.uiDialog[0]===e||t.contains(this.uiDialog[0],e)||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),void this.close(e);if(e.keyCode===t.ui.keyCode.TAB&&!e.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),n=i.filter(":first"),r=i.filter(":last");e.target!==r[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==n[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(this._delay(function(){r.trigger("focus")}),e.preventDefault()):(this._delay(function(){n.trigger("focus")}),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:t("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(e,"ui-dialog-title"),this._title(e),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title?t.text(this.options.title):t.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?void this._removeClass(this.uiDialog,"ui-dialog-buttons"):(t.each(i,function(i,n){var r,s;n=t.isFunction(n)?{click:n,text:i}:n,n=t.extend({type:"button"},n),r=n.click,s={icon:n.icon,iconPosition:n.iconPosition,showLabel:n.showLabel,icons:n.icons,text:n.text},delete n.click,delete n.icon,delete n.iconPosition,delete n.showLabel,delete n.icons,"boolean"==typeof n.text&&delete n.text,t("<button></button>",n).button(s).appendTo(e.uiButtonSet).on("click",function(){r.apply(e.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),void this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,n=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(n,r){i._addClass(t(this),"ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",n,e(r))},drag:function(t,n){i._trigger("drag",t,e(n))},stop:function(r,s){var o=s.offset.left-i.document.scrollLeft(),a=s.offset.top-i.document.scrollTop();n.position={my:"left top",at:"left"+(o>=0?"+":"")+o+" top"+(a>=0?"+":"")+a,of:i.window},i._removeClass(t(this),"ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",r,e(s))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,n=this.options,r=n.resizable,s=this.uiDialog.css("position"),o="string"==typeof r?r:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:n.maxWidth,maxHeight:n.maxHeight,minWidth:n.minWidth,minHeight:this._minHeight(),handles:o,start:function(n,r){i._addClass(t(this),"ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",n,e(r))},resize:function(t,n){i._trigger("resize",t,e(n))},stop:function(r,s){var o=i.uiDialog.offset(),a=o.left-i.document.scrollLeft(),l=o.top-i.document.scrollTop();n.height=i.uiDialog.height(),n.width=i.uiDialog.width(),n.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" top"+(l>=0?"+":"")+l,of:i.window},i._removeClass(t(this),"ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",r,e(s))}}).css("position",s)},_trackFocus:function(){this._on(this.widget(),{focusin:function(e){this._makeFocusTarget(),this._focusedElement=t(e.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var e=this._trackingInstances(),i=t.inArray(this,e);-1!==i&&e.splice(i,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances");return t||(t=[],this.document.data("ui-dialog-instances",t)),t},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(e){var i=this,n=!1,r={};t.each(e,function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(n=!0),t in i.resizableRelatedOptions&&(r[t]=e)}),n&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",r)},_setOption:function(e,i){var n,r,s=this.uiDialog;"disabled"!==e&&(this._super(e,i),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:t("<a>").text(""+this.options.closeText).html()}),"draggable"===e&&(n=s.is(":data(ui-draggable)"),n&&!i&&s.draggable("destroy"),!n&&i&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(r=s.is(":data(ui-resizable)"),r&&!i&&s.resizable("destroy"),r&&"string"==typeof i&&s.resizable("option","handles",i),r||!1===i||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,n=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),n.minWidth>n.width&&(n.width=n.minWidth),t=this.uiDialog.css({height:"auto",width:n.width}).outerHeight(),e=Math.max(0,n.minHeight-t),i="number"==typeof n.maxHeight?Math.max(0,n.maxHeight-t):"none","auto"===n.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,n.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return!!t(e.target).closest(".ui-dialog").length||!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=!0;this._delay(function(){e=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=t("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data("ui-dialog-overlays")-1;t?this.document.data("ui-dialog-overlays",t):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),!1!==t.uiBackCompat&&t.widget("ui.dialog",t.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(t,e){"dialogClass"===t&&this.uiDialog.removeClass(this.options.dialogClass).addClass(e),this._superApply(arguments)}}),t.ui.dialog,t.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=t("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()},value:function(t){return void 0===t?this.options.value:(this.options.value=this._constrainedValue(t),void this._refreshValue())},_constrainedValue:function(t){return void 0===t&&(t=this.options.value),this.indeterminate=!1===t,"number"!=typeof t&&(t=0),!this.indeterminate&&Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).width(i.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,e===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}}),t.widget("ui.selectmenu",[t.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=t()},_drawButton:function(){var e,i=this,n=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(t){this.button.focus(),t.preventDefault()}}),this.element.hide(),this.button=t("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),e=t("<span>").appendTo(this.button),this._addClass(e,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(n).appendTo(this.button),!1!==this.options.width&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){i._rendered||i._refreshMenu()})},_drawMenu:function(){var e=this;this.menu=t("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=t("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(t,i){t.preventDefault(),e._setSelection(),e._select(i.item.data("ui-selectmenu-item"),t)},focus:function(t,i){var n=i.item.data("ui-selectmenu-item");null!=e.focusIndex&&n.index!==e.focusIndex&&(e._trigger("focus",t,{item:n}),e.isOpen||e._select(n,t)),e.focusIndex=n.index,e.button.attr("aria-activedescendant",e.menuItems.eq(n.index).attr("id"))}}).menu("instance"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton()},_refreshMenu:function(){var t,e=this.element.find("option");this.menu.empty(),this._parseOptions(e),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,e.length&&(t=this._getSelectedItem(),this.menuInstance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(t){this.options.disabled||(this._rendered?(this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",t)))},_position:function(){this.menuWrap.position(t.extend({of:this.button},this.options.position))},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",t))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderButtonItem:function(e){var i=t("<span>");return this._setText(i,e.label),this._addClass(i,"ui-selectmenu-text"),i},_renderMenu:function(e,i){var n=this,r="";t.each(i,function(i,s){var o;s.optgroup!==r&&(o=t("<li>",{text:s.optgroup}),n._addClass(o,"ui-selectmenu-optgroup","ui-menu-divider"+(s.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),o.appendTo(e),r=s.optgroup),n._renderItemData(e,s)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-selectmenu-item",e)},_renderItem:function(e,i){var n=t("<li>"),r=t("<div>",{title:i.element.attr("title")});return i.disabled&&this._addClass(n,null,"ui-state-disabled"),this._setText(r,i.label),n.append(r).appendTo(e)},_setText:function(t,e){e?t.text(e):t.html("&#160;")},_move:function(t,e){var i,n,r=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex).parent("li"):(i=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),r+=":not(.ui-state-disabled)"),n="first"===t||"last"===t?i["first"===t?"prevAll":"nextAll"](r).eq(-1):i[t+"All"](r).eq(0),n.length&&this.menuInstance.focus(e,n)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")},_toggle:function(t){this[this.isOpen?"close":"open"](t)},_setSelection:function(){var t;this.range&&(window.getSelection?(t=window.getSelection(),t.removeAllRanges(),t.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(e){this.isOpen&&(t(e.target).closest(".ui-selectmenu-menu, #"+t.ui.escapeSelector(this.ids.button)).length||this.close(e))}},_buttonEvents:{mousedown:function(){var t;window.getSelection?(t=window.getSelection(),t.rangeCount&&(this.range=t.getRangeAt(0))):this.range=document.selection.createRange()},click:function(t){this._setSelection(),this._toggle(t)},keydown:function(e){var i=!0;switch(e.keyCode){case t.ui.keyCode.TAB:case t.ui.keyCode.ESCAPE:this.close(e),i=!1;break;case t.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(e);break;case t.ui.keyCode.UP:e.altKey?this._toggle(e):this._move("prev",e);break;case t.ui.keyCode.DOWN:e.altKey?this._toggle(e):this._move("next",e);break;case t.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(e):this._toggle(e);break;case t.ui.keyCode.LEFT:this._move("prev",e);break;case t.ui.keyCode.RIGHT:this._move("next",e);break;case t.ui.keyCode.HOME:case t.ui.keyCode.PAGE_UP:this._move("first",e);break;case t.ui.keyCode.END:case t.ui.keyCode.PAGE_DOWN:this._move("last",e);break;default:this.menu.trigger(e),i=!1}i&&e.preventDefault()}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex).parent("li");e.hasClass("ui-state-disabled")||this._select(e.data("ui-selectmenu-item"),t)},_select:function(t,e){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=t.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(t)),this._setAria(t),this._trigger("select",e,{item:t}),t.index!==i&&this._trigger("change",e,{item:t}),this.close(e)},_setAria:function(t){var e=this.menuItems.eq(t.index).attr("id");this.button.attr({"aria-labelledby":e,"aria-activedescendant":e}),this.menu.attr("aria-activedescendant",e)},_setOption:function(t,e){if("icons"===t){var i=this.button.find("span.ui-icon");this._removeClass(i,null,this.options.icons.button)._addClass(i,null,e.button)}this._super(t,e),"appendTo"===t&&this.menuWrap.appendTo(this._appendTo()),"width"===t&&this._resizeButton()},_setOptionDisabled:function(t){this._super(t),this.menuInstance.option("disabled",t),this.button.attr("aria-disabled",t),this._toggleClass(this.button,null,"ui-state-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var t=this.options.width;return!1===t?void this.button.css("width",""):(null===t&&(t=this.element.show().outerWidth(),this.element.hide()),void this.button.outerWidth(t))},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){var t=this._super();return t.disabled=this.element.prop("disabled"),t},_parseOptions:function(e){var i=this,n=[];e.each(function(e,r){n.push(i._parseOption(t(r),e))}),this.items=n},_parseOption:function(t,e){var i=t.parent("optgroup");return{element:t,index:e,value:t.val(),label:t.text(),optgroup:i.attr("label")||"",disabled:i.prop("disabled")||t.prop("disabled")}},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element)}}]),t.widget("ui.slider",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,n=this.options,r=this.element.find(".ui-slider-handle"),s=[];for(i=n.values&&n.values.length||1,r.length>i&&(r.slice(i).remove(),r=r.slice(0,i)),e=r.length;i>e;e++)s.push("<span tabindex='0'></span>");this.handles=r.add(t(s.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e).attr("tabIndex",0)})},_createRange:function(){var e=this.options;e.range?(!0===e.range&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=t("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),("min"===e.range||"max"===e.range)&&this._addClass(this.range,"ui-slider-range-"+e.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(e){var i,n,r,s,o,a,l,u=this,c=this.options;return!c.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(i),r=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(n-u.values(e));(r>i||r===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(r=i,s=t(this),o=e)}),!1!==this._start(e,o)&&(this._mouseSliding=!0,this._handleIndex=o,this._addClass(s,null,"ui-state-active"),s.trigger("focus"),a=s.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-a.left-s.width()/2,top:e.pageY-a.top-s.height()/2-(parseInt(s.css("borderTopWidth"),10)||0)-(parseInt(s.css("borderBottomWidth"),10)||0)+(parseInt(s.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,n),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,n,r,s;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),n=i/e,n>1&&(n=1),0>n&&(n=0),"vertical"===this.orientation&&(n=1-n),r=this._valueMax()-this._valueMin(),s=this._valueMin()+n*r,this._trimAlignValue(s)},_uiHash:function(t,e,i){var n={handle:this.handles[t],handleIndex:t,value:void 0!==e?e:this.value()};return this._hasMultipleValues()&&(n.value=void 0!==e?e:this.values(t),n.values=i||this.values()),n},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(t,e){return this._trigger("start",t,this._uiHash(e))},_slide:function(t,e,i){var n,r=this.value(),s=this.values();this._hasMultipleValues()&&(n=this.values(e?0:1),r=this.values(e),2===this.options.values.length&&!0===this.options.range&&(i=0===e?Math.min(n,i):Math.max(n,i)),s[e]=i),i!==r&&!1!==this._trigger("slide",t,this._uiHash(e,i,s))&&(this._hasMultipleValues()?this.values(e,i):this.value(i))},_stop:function(t,e){this._trigger("stop",t,this._uiHash(e))},_change:function(t,e){this._keySliding||this._mouseSliding||(this._lastChangedValue=e,this._trigger("change",t,this._uiHash(e)))},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),void this._change(null,0)):this._value()},values:function(e,i){var n,r,s;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),void this._change(null,e);if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this._hasMultipleValues()?this._values(e):this.value();for(n=this.options.values,r=arguments[0],s=0;n.length>s;s+=1)n[s]=this._trimAlignValue(r[s]),this._change(null,s);this._refreshValue()},_setOption:function(e,i){var n,r=0;switch("range"===e&&!0===this.options.range&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(r=this.options.values.length),this._super(e,i),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(i),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),n=r-1;n>=0;n--)this._change(null,n);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(t){this._super(t),this._toggleClass(null,"ui-state-disabled",!!t)},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,n;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this._hasMultipleValues()){for(i=this.options.values.slice(),n=0;i.length>n;n+=1)i[n]=this._trimAlignValue(i[n]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,n=t-i;return 2*Math.abs(i)>=e&&(n+=i>0?e:-e),parseFloat(n.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step;t=Math.round((t-e)/i)*i+e,t>this.options.max&&(t-=i),this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(t){"vertical"===t&&this.range.css({width:"",left:""}),"horizontal"===t&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var e,i,n,r,s,o=this.options.range,a=this.options,l=this,u=!this._animateOff&&a.animate,c={};this._hasMultipleValues()?this.handles.each(function(n){i=(l.values(n)-l._valueMin())/(l._valueMax()-l._valueMin())*100,c["horizontal"===l.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[u?"animate":"css"](c,a.animate),!0===l.options.range&&("horizontal"===l.orientation?(0===n&&l.range.stop(1,1)[u?"animate":"css"]({left:i+"%"},a.animate),1===n&&l.range[u?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:a.animate})):(0===n&&l.range.stop(1,1)[u?"animate":"css"]({bottom:i+"%"},a.animate),1===n&&l.range[u?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:a.animate}))),e=i}):(n=this.value(),r=this._valueMin(),s=this._valueMax(),i=s!==r?(n-r)/(s-r)*100:0,c["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[u?"animate":"css"](c,a.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[u?"animate":"css"]({width:i+"%"},a.animate),"max"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[u?"animate":"css"]({width:100-i+"%"},a.animate),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[u?"animate":"css"]({height:i+"%"},a.animate),"max"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[u?"animate":"css"]({height:100-i+"%"},a.animate))},_handleEvents:{keydown:function(e){var i,n,r,s=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(t(e.target),null,"ui-state-active"),!1===this._start(e,s)))return}switch(r=this.options.step,i=n=this._hasMultipleValues()?this.values(s):this.value(),e.keyCode){case t.ui.keyCode.HOME:n=this._valueMin();break;case t.ui.keyCode.END:n=this._valueMax();break;case t.ui.keyCode.PAGE_UP:n=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(i===this._valueMax())return;n=this._trimAlignValue(i+r);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i===this._valueMin())return;n=this._trimAlignValue(i-r)}this._slide(e,s,n)},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),this._removeClass(t(e.target),null,"ui-state-active"))}}}),t.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e=this._super(),i=this.element;return t.each(["min","max","step"],function(t,n){var r=i.attr(n);null!=r&&r.length&&(e[n]=r)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?void delete this.cancelBlur:(this._stop(),this._refresh(),void(this.previous!==this.element.val()&&this._trigger("change",t)))},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){this.element[0]===t.ui.safeActiveElement(this.document[0])||(this.element.trigger("focus"),this.previous=n,this._delay(function(){this.previous=n}))}var n;n=this.element[0]===t.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),!1!==this._start(e)&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?!1!==this._start(e)&&void this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e):void 0},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),this.buttons.height()>Math.ceil(.5*this.uiSpinner.height())&&this.uiSpinner.height()>0&&this.uiSpinner.height(this.uiSpinner.height())},_keydown:function(e){var i=this.options,n=t.ui.keyCode;switch(e.keyCode){case n.UP:return this._repeat(null,1,e),!0;case n.DOWN:return this._repeat(null,-1,e),!0;case n.PAGE_UP:return this._repeat(null,i.page,e),!0;case n.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_start:function(t){return!(!this.spinning&&!1===this._trigger("start",t))&&(this.counter||(this.counter=1),this.spinning=!0,!0)},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&!1===this._trigger("spin",e,{value:i})||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,n=this.options;return e=null!==n.min?n.min:0,i=t-e,i=Math.round(i/n.step)*n.step,t=e+i,t=parseFloat(t.toFixed(this._precision())),null!==n.max&&t>n.max?n.max:null!==n.min&&n.min>t?n.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){var i,n,r;return"culture"===t||"numberFormat"===t?(i=this._parse(this.element.val()),this.options[t]=e,void this.element.val(this._format(i))):(("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(n=this.buttons.first().find(".ui-icon"),this._removeClass(n,null,this.options.icons.up),this._addClass(n,null,e.up),r=this.buttons.last().find(".ui-icon"),this._removeClass(r,null,this.options.icons.down),this._addClass(r,null,e.down)),void this._super(t,e))},_setOptionDisabled:function(t){this._super(t),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable")},_setOptions:a(function(t){this._super(t)}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var t=this.value();return null!==t&&t===this._adjustValue(t)},_value:function(t,e){var i;""!==t&&null!==(i=this._parse(t))&&(e||(i=this._adjustValue(i)),t=this._format(i)),this.element.val(t),this._refresh()},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:a(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:a(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:a(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:a(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?void a(this._value).call(this,t):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),!1!==t.uiBackCompat&&t.widget("ui.spinner",t.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())},_uiSpinnerHtml:function(){return"<span>"},_buttonHtml:function(){return"<a></a><a></a>"}}),t.ui.spinner,t.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var t=/#.*$/;return function(e){var i,n;i=e.href.replace(t,""),n=location.href.replace(t,"");try{i=decodeURIComponent(i)}catch(t){}try{n=decodeURIComponent(n)}catch(t){}return e.hash.length>1&&i===n}}(),_create:function(){var e=this,i=this.options;this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,i.collapsible),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=!1!==this.options.active&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var e=this.options.active,i=this.options.collapsible,n=location.hash.substring(1);return null===e&&(n&&this.tabs.each(function(i,r){return t(r).attr("aria-controls")===n?(e=i,!1):void 0}),null===e&&(e=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===e||-1===e)&&(e=!!this.tabs.length&&0)),!1!==e&&-1===(e=this.tabs.index(this.tabs.eq(e)))&&(e=!i&&0),!i&&!1===e&&this.anchors.length&&(e=0),e},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(e){var i=t(t.ui.safeActiveElement(this.document[0])).closest("li"),n=this.tabs.index(i),r=!0;if(!this._handlePageNav(e)){switch(e.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:n++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:r=!1,n--;break;case t.ui.keyCode.END:n=this.anchors.length-1;break;case t.ui.keyCode.HOME:n=0;break;case t.ui.keyCode.SPACE:return e.preventDefault(),clearTimeout(this.activating),void this._activate(n);case t.ui.keyCode.ENTER:return e.preventDefault(),clearTimeout(this.activating),void this._activate(n!==this.options.active&&n);default:return}e.preventDefault(),clearTimeout(this.activating),n=this._focusNextTab(n,r),e.ctrlKey||e.metaKey||(i.attr("aria-selected","false"),this.tabs.eq(n).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",n)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.trigger("focus"))},_handlePageNav:function(e){return e.altKey&&e.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):e.altKey&&e.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(e,i){for(var n=this.tabs.length-1;-1!==t.inArray(function(){return e>n&&(e=0),0>e&&(e=n),e}(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).trigger("focus"),t},_setOption:function(t,e){return"active"===t?void this._activate(e):(this._super(t,e),"collapsible"===t&&(this._toggleClass("ui-tabs-collapsible",null,e),e||!1!==this.options.active||this._activate(0)),"event"===t&&this._setupEvents(e),void("heightStyle"===t&&this._setupHeightStyle(e)))},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),!1!==e.active&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this,i=this.tabs,n=this.anchors,r=this.panels;this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),this.tablist.on("mousedown"+this.eventNamespace,"> li",function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).attr({role:"presentation",tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=t(),this.anchors.each(function(i,n){var r,s,o,a=t(n).uniqueId().attr("id"),l=t(n).closest("li"),u=l.attr("aria-controls");e._isLocal(n)?(r=n.hash,o=r.substring(1),s=e.element.find(e._sanitizeSelector(r))):(o=l.attr("aria-controls")||t({}).uniqueId()[0].id,r="#"+o,s=e.element.find(r),s.length||(s=e._createPanel(o),s.insertAfter(e.panels[i-1]||e.tablist)),s.attr("aria-live","polite")),s.length&&(e.panels=e.panels.add(s)),u&&l.data("ui-tabs-aria-controls",u),l.attr({"aria-controls":o,"aria-labelledby":a}),s.attr("aria-labelledby",a)}),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),i&&(this._off(i.not(this.tabs)),this._off(n.not(this.anchors)),this._off(r.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).data("ui-tabs-destroy",!0)},_setOptionDisabled:function(e){var i,n,r;for(t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1),r=0;n=this.tabs[r];r++)i=t(n),!0===e||-1!==t.inArray(r,e)?(i.attr("aria-disabled","true"),this._addClass(i,null,"ui-state-disabled")):(i.removeAttr("aria-disabled"),this._removeClass(i,null,"ui-state-disabled"));this.options.disabled=e,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!0===e)},_setupEvents:function(e){var i={};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,n=this.element.parent();"fill"===e?(i=n.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),n=e.css("position");"absolute"!==n&&"fixed"!==n&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,n=this.active,r=t(e.currentTarget),s=r.closest("li"),o=s[0]===n[0],a=o&&i.collapsible,l=a?t():this._getPanelForTab(s),u=n.length?this._getPanelForTab(n):t(),c={oldTab:n,oldPanel:u,newTab:a?t():s,newPanel:l};e.preventDefault(),s.hasClass("ui-state-disabled")||s.hasClass("ui-tabs-loading")||this.running||o&&!i.collapsible||!1===this._trigger("beforeActivate",e,c)||(i.active=!a&&this.tabs.index(s),this.active=o?t():s,this.xhr&&this.xhr.abort(),u.length||l.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),l.length&&this.load(this.tabs.index(s),e),this._toggle(e,c))},_toggle:function(e,i){function n(){s.running=!1,s._trigger("activate",e,i)}function r(){s._addClass(i.newTab.closest("li"),"ui-tabs-active","ui-state-active"),o.length&&s.options.show?s._show(o,s.options.show,n):(o.show(),n())}var s=this,o=i.newPanel,a=i.oldPanel;this.running=!0,a.length&&this.options.hide?this._hide(a,this.options.hide,function(){s._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),r()}):(this._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),a.hide(),r()),a.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),o.length&&a.length?i.oldTab.attr("tabIndex",-1):o.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),o.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(e){var i,n=this._findActive(e);n[0]!==this.active[0]&&(n.length||(n=this.active),i=n.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return!1===e?t():this.tabs.eq(e)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+t.ui.escapeSelector(e)+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(e){var i=this.options.disabled;!1!==i&&(void 0===e?i=!1:(e=this._getIndex(e),i=t.isArray(i)?t.map(i,function(t){return t!==e?t:null}):t.map(this.tabs,function(t,i){return i!==e?i:null})),this._setOptionDisabled(i))},disable:function(e){var i=this.options.disabled;if(!0!==i){if(void 0===e)i=!0;else{if(e=this._getIndex(e),-1!==t.inArray(e,i))return;i=t.isArray(i)?t.merge([e],i).sort():[e]}this._setOptionDisabled(i)}},load:function(e,i){e=this._getIndex(e);var n=this,r=this.tabs.eq(e),s=r.find(".ui-tabs-anchor"),o=this._getPanelForTab(r),a={tab:r,panel:o},l=function(t,e){"abort"===e&&n.panels.stop(!1,!0),n._removeClass(r,"ui-tabs-loading"),o.removeAttr("aria-busy"),t===n.xhr&&delete n.xhr};this._isLocal(s[0])||(this.xhr=t.ajax(this._ajaxSettings(s,i,a)),this.xhr&&"canceled"!==this.xhr.statusText&&(this._addClass(r,"ui-tabs-loading"),o.attr("aria-busy","true"),this.xhr.done(function(t,e,r){setTimeout(function(){o.html(t),n._trigger("load",i,a),l(r,e)},1)}).fail(function(t,e){setTimeout(function(){l(t,e)},1)})))},_ajaxSettings:function(e,i,n){var r=this;return{url:e.attr("href").replace(/#.*$/,""),beforeSend:function(e,s){return r._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:s},n))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),!1!==t.uiBackCompat&&t.widget("ui.tabs",t.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab")}}),t.ui.tabs,t.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(e,i){var n=(e.attr("aria-describedby")||"").split(/\s+/);n.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(n.join(" ")))},_removeDescribedBy:function(e){var i=e.data("ui-tooltip-id"),n=(e.attr("aria-describedby")||"").split(/\s+/),r=t.inArray(i,n);-1!==r&&n.splice(r,1),e.removeData("ui-tooltip-id"),n=t.trim(n.join(" ")),n?e.attr("aria-describedby",n):e.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=t([])},_setOption:function(e,i){var n=this;this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){n._updateContent(e.element)})},_setOptionDisabled:function(t){this[t?"_disable":"_enable"]()},_disable:function(){var e=this;t.each(this.tooltips,function(i,n){var r=t.Event("blur");r.target=r.currentTarget=n.element[0],e.close(r,!0)}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var e=t(this);return e.is("[title]")?e.data("ui-tooltip-title",e.attr("title")).removeAttr("title"):void 0}))},_enable:function(){this.disabledTitles.each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))}),this.disabledTitles=t([])},open:function(e){var i=this,n=t(e?e.target:this.element).closest(this.options.items);n.length&&!n.data("ui-tooltip-id")&&(n.attr("title")&&n.data("ui-tooltip-title",n.attr("title")),n.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&n.parents().each(function(){var e,n=t(this);n.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),n.attr("title")&&(n.uniqueId(),i.parents[this.id]={element:this,title:n.attr("title")},n.attr("title",""))}),this._registerCloseHandlers(e,n),this._updateContent(n,e))},_updateContent:function(t,e){var i,n=this.options.content,r=this,s=e?e.type:null;return"string"==typeof n||n.nodeType||n.jquery?this._open(e,t,n):void((i=n.call(t[0],function(i){r._delay(function(){t.data("ui-tooltip-open")&&(e&&(e.type=s),this._open(e,t,i))})}))&&this._open(e,t,i))},_open:function(e,i,n){function r(t){u.of=t,o.is(":hidden")||o.position(u)}var s,o,a,l,u=t.extend({},this.options.position);if(n){if(s=this._find(i))return void s.tooltip.find(".ui-tooltip-content").html(n);i.is("[title]")&&(e&&"mouseover"===e.type?i.attr("title",""):i.removeAttr("title")),s=this._tooltip(i),o=s.tooltip,this._addDescribedBy(i,o.attr("id")),o.find(".ui-tooltip-content").html(n),this.liveRegion.children().hide(),l=t("<div>").html(o.find(".ui-tooltip-content").html()),l.removeAttr("name").find("[name]").removeAttr("name"),l.removeAttr("id").find("[id]").removeAttr("id"),l.appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:r}),r(e)):o.position(t.extend({of:i},this.options.position)),o.hide(),this._show(o,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(a=this.delayedShow=setInterval(function(){o.is(":visible")&&(r(u.of),clearInterval(a))},t.fx.interval)),this._trigger("open",e,{tooltip:o})}},_registerCloseHandlers:function(e,i){var n={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var n=t.Event(e);n.currentTarget=i[0],this.close(n,!0)}}};i[0]!==this.element[0]&&(n.remove=function(){this._removeTooltip(this._find(i).tooltip)}),e&&"mouseover"!==e.type||(n.mouseleave="close"),e&&"focusin"!==e.type||(n.focusout="close"),this._on(!0,i,n)},close:function(e){var i,n=this,r=t(e?e.currentTarget:this.element),s=this._find(r);return s?(i=s.tooltip,void(s.closing||(clearInterval(this.delayedShow),r.data("ui-tooltip-title")&&!r.attr("title")&&r.attr("title",r.data("ui-tooltip-title")),this._removeDescribedBy(r),s.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){n._removeTooltip(t(this))}),r.removeData("ui-tooltip-open"),this._off(r,"mouseleave focusout keyup"),r[0]!==this.element[0]&&this._off(r,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete n.parents[e]}),s.closing=!0,this._trigger("close",e,{tooltip:i}),s.hiding||(s.closing=!1)))):void r.removeData("ui-tooltip-open")},_tooltip:function(e){var i=t("<div>").attr("role","tooltip"),n=t("<div>").appendTo(i),r=i.uniqueId().attr("id");return this._addClass(n,"ui-tooltip-content"),this._addClass(i,"ui-tooltip","ui-widget ui-widget-content"),i.appendTo(this._appendTo(e)),this.tooltips[r]={element:e,tooltip:i}},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_appendTo:function(t){var e=t.closest(".ui-front, dialog");return e.length||(e=this.document[0].body),e},_destroy:function(){var e=this;t.each(this.tooltips,function(i,n){var r=t.Event("blur"),s=n.element;r.target=r.currentTarget=s[0],e.close(r,!0),t("#"+i).remove(),s.data("ui-tooltip-title")&&(s.attr("title")||s.attr("title",s.data("ui-tooltip-title")),s.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}}),!1!==t.uiBackCompat&&t.widget("ui.tooltip",t.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var t=this._superApply(arguments);return this.options.tooltipClass&&t.tooltip.addClass(this.options.tooltipClass),t}}),t.ui.tooltip;var f="ui-effects-",g="ui-effects-style",m="ui-effects-animated",v=t;t.effects={effect:{}},function(t,e){function i(t,e,i){var n=c[e.type]||{};return null==t?i||!e.def?null:e.def:(t=n.floor?~~t:parseFloat(t),isNaN(t)?e.def:n.mod?(t+n.mod)%n.mod:0>t?0:t>n.max?n.max:t)}function n(i){var n=l(),r=n._rgba=[];return i=i.toLowerCase(),p(a,function(t,s){var o,a=s.re.exec(i),l=a&&s.parse(a),c=s.space||"rgba";return l?(o=n[c](l),n[u[c].cache]=o[u[c].cache],r=n._rgba=o._rgba,!1):e}),r.length?("0,0,0,0"===r.join()&&t.extend(r,s.transparent),n):s[i]}function r(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var s,o=/^([\-+])=\s*(\d+\.?\d*)/,a=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,n,r){return new t.Color.fn.parse(e,i,n,r)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},c={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},h=l.support={},d=t("<p>")[0],p=t.each;d.style.cssText="background-color:rgba(1,1,1,.5)",h.rgba=d.style.backgroundColor.indexOf("rgba")>-1,p(u,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(r,o,a,c){if(r===e)return this._rgba=[null,null,null,null],this;(r.jquery||r.nodeType)&&(r=t(r).css(o),o=e);var h=this,d=t.type(r),f=this._rgba=[];return o!==e&&(r=[r,o,a,c],d="array"),"string"===d?this.parse(n(r)||s._default):"array"===d?(p(u.rgba.props,function(t,e){f[e.idx]=i(r[e.idx],e)}),this):"object"===d?(r instanceof l?p(u,function(t,e){r[e.cache]&&(h[e.cache]=r[e.cache].slice())}):p(u,function(e,n){var s=n.cache;p(n.props,function(t,e){if(!h[s]&&n.to){if("alpha"===t||null==r[t])return;h[s]=n.to(h._rgba)}h[s][e.idx]=i(r[t],e,!0)}),h[s]&&0>t.inArray(null,h[s].slice(0,3))&&(h[s][3]=1,n.from&&(h._rgba=n.from(h[s])))}),this):e},is:function(t){var i=l(t),n=!0,r=this;return p(u,function(t,s){var o,a=i[s.cache];return a&&(o=r[s.cache]||s.to&&s.to(r._rgba)||[],p(s.props,function(t,i){return null!=a[i.idx]?n=a[i.idx]===o[i.idx]:e})),n}),n},_space:function(){var t=[],e=this;return p(u,function(i,n){e[n.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var n=l(t),r=n._space(),s=u[r],o=0===this.alpha()?l("transparent"):this,a=o[s.cache]||s.to(o._rgba),h=a.slice();return n=n[s.cache],p(s.props,function(t,r){var s=r.idx,o=a[s],l=n[s],u=c[r.type]||{};null!==l&&(null===o?h[s]=l:(u.mod&&(l-o>u.mod/2?o+=u.mod:o-l>u.mod/2&&(o-=u.mod)),h[s]=i((l-o)*e+o,r)))}),this[r](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),n=i.pop(),r=l(e)._rgba;return l(t.map(i,function(t,e){return(1-n)*r[e]+n*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),n=i.pop();return e&&i.push(~~(255*n)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,u.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,n=t[0]/255,r=t[1]/255,s=t[2]/255,o=t[3],a=Math.max(n,r,s),l=Math.min(n,r,s),u=a-l,c=a+l,h=.5*c;return e=l===a?0:n===a?60*(r-s)/u+360:r===a?60*(s-n)/u+120:60*(n-r)/u+240,i=0===u?0:.5>=h?u/c:u/(2-c),[Math.round(e)%360,i,h,null==o?1:o]},u.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],n=t[2],s=t[3],o=.5>=n?n*(1+i):n+i-n*i,a=2*n-o;return[Math.round(255*r(a,o,e+1/3)),Math.round(255*r(a,o,e)),Math.round(255*r(a,o,e-1/3)),s]},p(u,function(n,r){var s=r.props,a=r.cache,u=r.to,c=r.from;l.fn[n]=function(n){if(u&&!this[a]&&(this[a]=u(this._rgba)),n===e)return this[a].slice();var r,o=t.type(n),h="array"===o||"object"===o?n:arguments,d=this[a].slice();return p(s,function(t,e){var n=h["object"===o?t:e.idx];null==n&&(n=d[e.idx]),d[e.idx]=i(n,e)}),c?(r=l(c(d)),r[a]=d,r):l(d)},p(s,function(e,i){l.fn[e]||(l.fn[e]=function(r){var s,a=t.type(r),l="alpha"===e?this._hsla?"hsla":"rgba":n,u=this[l](),c=u[i.idx];return"undefined"===a?c:("function"===a&&(r=r.call(this,c),a=t.type(r)),null==r&&i.empty?this:("string"===a&&(s=o.exec(r))&&(r=c+parseFloat(s[2])*("+"===s[1]?1:-1)),u[i.idx]=r,this[l](u)))})})}),l.hook=function(e){var i=e.split(" ");p(i,function(e,i){t.cssHooks[i]={set:function(e,r){var s,o,a="";if("transparent"!==r&&("string"!==t.type(r)||(s=n(r)))){if(r=l(s||r),!h.rgba&&1!==r._rgba[3]){for(o="backgroundColor"===i?e.parentNode:e;(""===a||"transparent"===a)&&o&&o.style;)try{a=t.css(o,"backgroundColor"),o=o.parentNode}catch(t){}r=r.blend(a&&"transparent"!==a?a:"_default")}r=r.toRgbaString()}try{e.style[i]=r}catch(t){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),t.cssHooks.borderColor={expand:function(t){var e={};return p(["Top","Right","Bottom","Left"],function(i,n){e["border"+n+"Color"]=t}),e}},s=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(v),function(){function e(e){var i,n,r=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,s={};if(r&&r.length&&r[0]&&r[r[0]])for(n=r.length;n--;)i=r[n],"string"==typeof r[i]&&(s[t.camelCase(i)]=r[i]);else for(i in r)"string"==typeof r[i]&&(s[i]=r[i]);return s}function i(e,i){var n,s,o={};for(n in i)s=i[n],e[n]!==s&&(r[n]||(t.fx.step[n]||!isNaN(parseFloat(s)))&&(o[n]=s));return o}var n=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(v.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(r,s,o,a){var l=t.speed(s,o,a);return this.queue(function(){var s,o=t(this),a=o.attr("class")||"",u=l.children?o.find("*").addBack():o;u=u.map(function(){return{el:t(this),start:e(this)}}),s=function(){t.each(n,function(t,e){r[e]&&o[e+"Class"](r[e])})},s(),u=u.map(function(){return this.end=e(this.el[0]),this.diff=i(this.start,this.end),this}),o.attr("class",a),u=u.map(function(){var e=this,i=t.Deferred(),n=t.extend({},l,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,n),i.promise()}),t.when.apply(t,u.get()).done(function(){s(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),l.complete.call(o[0])})})},t.fn.extend({addClass:function(e){return function(i,n,r,s){return n?t.effects.animateClass.call(this,{add:i},n,r,s):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,n,r,s){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},n,r,s):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(i,n,r,s,o){return"boolean"==typeof n||void 0===n?r?t.effects.animateClass.call(this,n?{add:i}:{remove:i},r,s,o):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},n,r,s)}}(t.fn.toggleClass),switchClass:function(e,i,n,r,s){return t.effects.animateClass.call(this,{add:i,remove:e},n,r,s)}})}(),function(){function e(e,i,n,r){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(r=i,n=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(r=n,n=i,i={}),t.isFunction(n)&&(r=n,n=null),i&&t.extend(e,i),n=n||i.duration,e.duration=t.fx.off?0:"number"==typeof n?n:n in t.fx.speeds?t.fx.speeds[n]:t.fx.speeds._default,e.complete=r||i.complete,e}function i(e){return!(e&&"number"!=typeof e&&!t.fx.speeds[e])||("string"==typeof e&&!t.effects.effect[e]||(!!t.isFunction(e)||"object"==typeof e&&!e.effect))}function n(t,e){var i=e.outerWidth(),n=e.outerHeight(),r=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,s=r.exec(t)||["",0,i,n,0];return{top:parseFloat(s[1])||0,right:"auto"===s[2]?i:parseFloat(s[2]),bottom:"auto"===s[3]?n:parseFloat(s[3]),left:parseFloat(s[4])||0}}t.expr&&t.expr.filters&&t.expr.filters.animated&&(t.expr.filters.animated=function(e){return function(i){return!!t(i).data(m)||e(i)}}(t.expr.filters.animated)),!1!==t.uiBackCompat&&t.extend(t.effects,{save:function(t,e){for(var i=0,n=e.length;n>i;i++)null!==e[i]&&t.data(f+e[i],t[0].style[e[i]])},restore:function(t,e){for(var i,n=0,r=e.length;r>n;n++)null!==e[n]&&(i=t.data(f+e[n]),t.css(e[n],i))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),float:e.css("float")},n=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),r={width:e.width(),height:e.height()},s=document.activeElement;try{s.id}catch(t){s=document.body}return e.wrap(n),(e[0]===s||t.contains(e[0],s))&&t(s).trigger("focus"),n=e.parent(),"static"===e.css("position")?(n.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,n){i[n]=e.css(n),isNaN(parseInt(i[n],10))&&(i[n]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(r),n.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).trigger("focus")),e}}),t.extend(t.effects,{version:"1.12.1",define:function(e,i,n){return n||(n=i,i="effect"),t.effects.effect[e]=n,t.effects.effect[e].mode=i,n},scaledDimensions:function(t,e,i){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var n="horizontal"!==i?(e||100)/100:1,r="vertical"!==i?(e||100)/100:1;return{height:t.height()*r,width:t.width()*n,outerHeight:t.outerHeight()*r,outerWidth:t.outerWidth()*n}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,i){var n=t.queue();e>1&&n.splice.apply(n,[1,0].concat(n.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data(g,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(g)||"",t.removeData(g)},mode:function(t,e){var i=t.is(":hidden");return"toggle"===e&&(e=i?"show":"hide"),(i?"hide"===e:"show"===e)&&(e="none"),e},getBaseline:function(t,e){var i,n;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":n=0;break;case"center":n=.5;break;case"right":n=1;break;default:n=t[1]/e.width}return{x:n,y:i}},createPlaceholder:function(e){var i,n=e.css("position"),r=e.position();return e.css({marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),/^(static|relative)/.test(n)&&(n="absolute",i=t("<"+e[0].nodeName+">").insertAfter(e).css({display:/^(inline|ruby)/.test(e.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight"),float:e.css("float")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"),e.data(f+"placeholder",i)),e.css({position:n,left:r.left,top:r.top}),i},removePlaceholder:function(t){var e=f+"placeholder",i=t.data(e);i&&(i.remove(),t.removeData(e))},cleanUp:function(e){t.effects.restoreStyle(e),t.effects.removePlaceholder(e)},setTransition:function(e,i,n,r){return r=r||{},t.each(i,function(t,i){var s=e.cssUnit(i);s[0]>0&&(r[i]=s[0]*n+s[1])}),r}}),t.fn.extend({effect:function(){function i(e){function i(){a.removeData(m),t.effects.cleanUp(a),"hide"===n.mode&&a.hide(),o()}function o(){t.isFunction(l)&&l.call(a[0]),t.isFunction(e)&&e()}var a=t(this);n.mode=c.shift(),!1===t.uiBackCompat||s?"none"===n.mode?(a[u](),o()):r.call(a[0],n,i):(a.is(":hidden")?"hide"===u:"show"===u)?(a[u](),o()):r.call(a[0],n,o)}var n=e.apply(this,arguments),r=t.effects.effect[n.effect],s=r.mode,o=n.queue,a=o||"fx",l=n.complete,u=n.mode,c=[],h=function(e){var i=t(this),n=t.effects.mode(i,u)||s;i.data(m,!0),c.push(n),s&&("show"===n||n===s&&"hide"===n)&&i.show(),s&&"none"===n||t.effects.saveStyle(i),t.isFunction(e)&&e()};return t.fx.off||!r?u?this[u](n.duration,l):this.each(function(){l&&l.call(this)}):!1===o?this.each(h).each(i):this.queue(a,h).queue(a,i)},show:function(t){return function(n){if(i(n))return t.apply(this,arguments);var r=e.apply(this,arguments);return r.mode="show",this.effect.call(this,r)}}(t.fn.show),hide:function(t){return function(n){if(i(n))return t.apply(this,arguments);var r=e.apply(this,arguments);return r.mode="hide",this.effect.call(this,r)}}(t.fn.hide),toggle:function(t){return function(n){if(i(n)||"boolean"==typeof n)return t.apply(this,arguments);var r=e.apply(this,arguments);return r.mode="toggle",this.effect.call(this,r)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),n=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(n=[parseFloat(i),e])}),n},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):n(this.css("clip"),this)},transfer:function(e,i){var n=t(this),r=t(e.to),s="fixed"===r.css("position"),o=t("body"),a=s?o.scrollTop():0,l=s?o.scrollLeft():0,u=r.offset(),c={top:u.top-a,left:u.left-l,height:r.innerHeight(),width:r.innerWidth()},h=n.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({top:h.top-a,left:h.left-l,height:n.innerHeight(),width:n.innerWidth(),position:s?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),t.isFunction(i)&&i()})}}),t.fx.step.clip=function(e){e.clipInit||(e.start=t(e.elem).cssClip(),"string"==typeof e.end&&(e.end=n(e.end,e.elem)),e.clipInit=!0),t(e.elem).cssClip({top:e.pos*(e.end.top-e.start.top)+e.start.top,right:e.pos*(e.end.right-e.start.right)+e.start.right,bottom:e.pos*(e.end.bottom-e.start.bottom)+e.start.bottom,left:e.pos*(e.end.left-e.start.left)+e.start.left})}}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}();t.effects;t.effects.define("blind","hide",function(e,i){var n={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},r=t(this),s=e.direction||"up",o=r.cssClip(),a={clip:t.extend({},o)},l=t.effects.createPlaceholder(r);a.clip[n[s][0]]=a.clip[n[s][1]],"show"===e.mode&&(r.cssClip(a.clip),l&&l.css(t.effects.clipToBox(a)),a.clip=o),l&&l.animate(t.effects.clipToBox(a),e.duration,e.easing),r.animate(a,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("bounce",function(e,i){var n,r,s,o=t(this),a=e.mode,l="hide"===a,u="show"===a,c=e.direction||"up",h=e.distance,d=e.times||5,p=2*d+(u||l?1:0),f=e.duration/p,g=e.easing,m="up"===c||"down"===c?"top":"left",v="up"===c||"left"===c,_=0,y=o.queue().length;for(t.effects.createPlaceholder(o),s=o.css(m),h||(h=o["top"===m?"outerHeight":"outerWidth"]()/3),u&&(r={opacity:1},r[m]=s,o.css("opacity",0).css(m,v?2*-h:2*h).animate(r,f,g)),l&&(h/=Math.pow(2,d-1)),r={},r[m]=s;d>_;_++)n={},n[m]=(v?"-=":"+=")+h,o.animate(n,f,g).animate(r,f,g),h=l?2*h:h/2;l&&(n={opacity:0},n[m]=(v?"-=":"+=")+h,o.animate(n,f,g)),o.queue(i),t.effects.unshift(o,y,p+1)}),t.effects.define("clip","hide",function(e,i){var n,r={},s=t(this),o=e.direction||"vertical",a="both"===o,l=a||"horizontal"===o,u=a||"vertical"===o;n=s.cssClip(),r.clip={top:u?(n.bottom-n.top)/2:n.top,right:l?(n.right-n.left)/2:n.right,bottom:u?(n.bottom-n.top)/2:n.bottom,left:l?(n.right-n.left)/2:n.left},t.effects.createPlaceholder(s),"show"===e.mode&&(s.cssClip(r.clip),r.clip=n),s.animate(r,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("drop","hide",function(e,i){var n,r=t(this),s=e.mode,o="show"===s,a=e.direction||"left",l="up"===a||"down"===a?"top":"left",u="up"===a||"left"===a?"-=":"+=",c="+="===u?"-=":"+=",h={opacity:0};t.effects.createPlaceholder(r),n=e.distance||r["top"===l?"outerHeight":"outerWidth"](!0)/2,h[l]=u+n,o&&(r.css(h),h[l]=c+n,h.opacity=1),r.animate(h,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("explode","hide",function(e,i){function n(){y.push(this),y.length===h*d&&r()}function r(){p.css({visibility:"visible"}),t(y).remove(),i()}var s,o,a,l,u,c,h=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=h,p=t(this),f=e.mode,g="show"===f,m=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/d),_=Math.ceil(p.outerHeight()/h),y=[];for(s=0;h>s;s++)for(l=m.top+s*_,c=s-(h-1)/2,o=0;d>o;o++)a=m.left+o*v,u=o-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*v,top:-s*_}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:_,left:a+(g?u*v:0),top:l+(g?c*_:0),opacity:g?0:1}).animate({left:a+(g?0:u*v),top:l+(g?0:c*_),opacity:g?1:0},e.duration||500,e.easing,n)}),t.effects.define("fade","toggle",function(e,i){var n="show"===e.mode;t(this).css("opacity",n?0:1).animate({opacity:n?1:0},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("fold","hide",function(e,i){var n=t(this),r=e.mode,s="show"===r,o="hide"===r,a=e.size||15,l=/([0-9]+)%/.exec(a),u=!!e.horizFirst,c=u?["right","bottom"]:["bottom","right"],h=e.duration/2,d=t.effects.createPlaceholder(n),p=n.cssClip(),f={clip:t.extend({},p)},g={clip:t.extend({},p)},m=[p[c[0]],p[c[1]]],v=n.queue().length;l&&(a=parseInt(l[1],10)/100*m[o?0:1]),f.clip[c[0]]=a,g.clip[c[0]]=a,g.clip[c[1]]=0,s&&(n.cssClip(g.clip),d&&d.css(t.effects.clipToBox(g)),g.clip=p),n.queue(function(i){d&&d.animate(t.effects.clipToBox(f),h,e.easing).animate(t.effects.clipToBox(g),h,e.easing),i()}).animate(f,h,e.easing).animate(g,h,e.easing).queue(i),t.effects.unshift(n,v,4)}),t.effects.define("highlight","show",function(e,i){var n=t(this),r={backgroundColor:n.css("backgroundColor")};"hide"===e.mode&&(r.opacity=0),t.effects.saveStyle(n),n.css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(r,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("size",function(e,i){var n,r,s,o=t(this),a=["fontSize"],l=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],u=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],c=e.mode,h="effect"!==c,d=e.scale||"both",p=e.origin||["middle","center"],f=o.css("position"),g=o.position(),m=t.effects.scaledDimensions(o),v=e.from||m,_=e.to||t.effects.scaledDimensions(o,0);t.effects.createPlaceholder(o),"show"===c&&(s=v,v=_,_=s),r={from:{y:v.height/m.height,x:v.width/m.width},to:{y:_.height/m.height,x:_.width/m.width}},("box"===d||"both"===d)&&(r.from.y!==r.to.y&&(v=t.effects.setTransition(o,l,r.from.y,v),_=t.effects.setTransition(o,l,r.to.y,_)),r.from.x!==r.to.x&&(v=t.effects.setTransition(o,u,r.from.x,v),_=t.effects.setTransition(o,u,r.to.x,_))),("content"===d||"both"===d)&&r.from.y!==r.to.y&&(v=t.effects.setTransition(o,a,r.from.y,v),_=t.effects.setTransition(o,a,r.to.y,_)),p&&(n=t.effects.getBaseline(p,m),v.top=(m.outerHeight-v.outerHeight)*n.y+g.top,v.left=(m.outerWidth-v.outerWidth)*n.x+g.left,_.top=(m.outerHeight-_.outerHeight)*n.y+g.top,_.left=(m.outerWidth-_.outerWidth)*n.x+g.left),o.css(v),("content"===d||"both"===d)&&(l=l.concat(["marginTop","marginBottom"]).concat(a),u=u.concat(["marginLeft","marginRight"]),o.find("*[width]").each(function(){var i=t(this),n=t.effects.scaledDimensions(i),s={height:n.height*r.from.y,width:n.width*r.from.x,outerHeight:n.outerHeight*r.from.y,outerWidth:n.outerWidth*r.from.x},o={height:n.height*r.to.y,width:n.width*r.to.x,outerHeight:n.height*r.to.y,outerWidth:n.width*r.to.x};r.from.y!==r.to.y&&(s=t.effects.setTransition(i,l,r.from.y,s),o=t.effects.setTransition(i,l,r.to.y,o)),r.from.x!==r.to.x&&(s=t.effects.setTransition(i,u,r.from.x,s),o=t.effects.setTransition(i,u,r.to.x,o)),h&&t.effects.saveStyle(i),i.css(s),i.animate(o,e.duration,e.easing,function(){h&&t.effects.restoreStyle(i)})})),o.animate(_,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){var e=o.offset();0===_.opacity&&o.css("opacity",v.opacity),h||(o.css("position","static"===f?"relative":f).offset(e),t.effects.saveStyle(o)),i()}})}),t.effects.define("scale",function(e,i){var n=t(this),r=e.mode,s=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"effect"!==r?0:100),o=t.extend(!0,{from:t.effects.scaledDimensions(n),to:t.effects.scaledDimensions(n,s,e.direction||"both"),origin:e.origin||["middle","center"]},e);e.fade&&(o.from.opacity=1,o.to.opacity=0),t.effects.effect.size.call(this,o,i)}),t.effects.define("puff","hide",function(e,i){var n=t.extend(!0,{},e,{fade:!0,percent:parseInt(e.percent,10)||150});t.effects.effect.scale.call(this,n,i)}),t.effects.define("pulsate","show",function(e,i){var n=t(this),r=e.mode,s="show"===r,o="hide"===r,a=s||o,l=2*(e.times||5)+(a?1:0),u=e.duration/l,c=0,h=1,d=n.queue().length;for((s||!n.is(":visible"))&&(n.css("opacity",0).show(),c=1);l>h;h++)n.animate({opacity:c},u,e.easing),c=1-c;n.animate({opacity:c},u,e.easing),n.queue(i),t.effects.unshift(n,d,l+1)}),t.effects.define("shake",function(e,i){var n=1,r=t(this),s=e.direction||"left",o=e.distance||20,a=e.times||3,l=2*a+1,u=Math.round(e.duration/l),c="up"===s||"down"===s?"top":"left",h="up"===s||"left"===s,d={},p={},f={},g=r.queue().length;for(t.effects.createPlaceholder(r),d[c]=(h?"-=":"+=")+o,p[c]=(h?"+=":"-=")+2*o,f[c]=(h?"-=":"+=")+2*o,r.animate(d,u,e.easing);a>n;n++)r.animate(p,u,e.easing).animate(f,u,e.easing);r.animate(p,u,e.easing).animate(d,u/2,e.easing).queue(i),t.effects.unshift(r,g,l+1)}),t.effects.define("slide","show",function(e,i){var n,r,s=t(this),o={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},a=e.mode,l=e.direction||"left",u="up"===l||"down"===l?"top":"left",c="up"===l||"left"===l,h=e.distance||s["top"===u?"outerHeight":"outerWidth"](!0),d={};t.effects.createPlaceholder(s),n=s.cssClip(),r=s.position()[u],d[u]=(c?-1:1)*h+r,d.clip=s.cssClip(),d.clip[o[l][1]]=d.clip[o[l][0]],"show"===a&&(s.cssClip(d.clip),s.css(u,d[u]),d.clip=n,d[u]=r),s.animate(d,{queue:!1,duration:e.duration,easing:e.easing,complete:i})});!1!==t.uiBackCompat&&t.effects.define("transfer",function(e,i){t(this).transfer(e,i)})})},function(t,e,i){var n,r,s;!function(o){r=[i(3)],n=o,void 0!==(s="function"==typeof n?n.apply(e,r):n)&&(t.exports=s)}(function(t){return t.ui=t.ui||{},t.ui.version="1.12.1"})},function(t,e,i){var n,r,s;/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(o){r=[i(3),i(30)],n=o,void 0!==(s="function"==typeof n?n.apply(e,r):n)&&(t.exports=s)}(function(t){var e=0,i=Array.prototype.slice;return t.cleanData=function(e){return function(i){var n,r,s;for(s=0;null!=(r=i[s]);s++)try{n=t._data(r,"events"),n&&n.remove&&t(r).triggerHandler("remove")}catch(t){}e(i)}}(t.cleanData),t.widget=function(e,i,n){var r,s,o,a={},l=e.split(".")[0];e=e.split(".")[1];var u=l+"-"+e;return n||(n=i,i=t.Widget),t.isArray(n)&&(n=t.extend.apply(null,[{}].concat(n))),t.expr[":"][u.toLowerCase()]=function(e){return!!t.data(e,u)},t[l]=t[l]||{},r=t[l][e],s=t[l][e]=function(t,e){if(!this._createWidget)return new s(t,e);arguments.length&&this._createWidget(t,e)},t.extend(s,r,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),o=new i,o.options=t.widget.extend({},o.options),t.each(n,function(e,n){if(!t.isFunction(n))return void(a[e]=n);a[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function r(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,s=this._superApply;return this._super=t,this._superApply=r,e=n.apply(this,arguments),this._super=i,this._superApply=s,e}}()}),s.prototype=t.widget.extend(o,{widgetEventPrefix:r?o.widgetEventPrefix||e:e},a,{constructor:s,namespace:l,widgetName:e,widgetFullName:u}),r?(t.each(r._childConstructors,function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,s,i._proto)}),delete r._childConstructors):i._childConstructors.push(s),t.widget.bridge(e,s),s},t.widget.extend=function(e){for(var n,r,s=i.call(arguments,1),o=0,a=s.length;o<a;o++)for(n in s[o])r=s[o][n],s[o].hasOwnProperty(n)&&void 0!==r&&(t.isPlainObject(r)?e[n]=t.isPlainObject(e[n])?t.widget.extend({},e[n],r):t.widget.extend({},r):e[n]=r);return e},t.widget.bridge=function(e,n){var r=n.prototype.widgetFullName||e;t.fn[e]=function(s){var o="string"==typeof s,a=i.call(arguments,1),l=this;return o?this.length||"instance"!==s?this.each(function(){var i,n=t.data(this,r);return"instance"===s?(l=n,!1):n?t.isFunction(n[s])&&"_"!==s.charAt(0)?(i=n[s].apply(n,a),i!==n&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+s+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+s+"'")}):l=void 0:(a.length&&(s=t.widget.extend.apply(null,[s].concat(a))),this.each(function(){var e=t.data(this,r);e?(e.option(s||{}),e._init&&e._init()):t.data(this,r,new n(s,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(i,n){n=t(n||this.defaultElement||this)[0],this.element=t(n),this.uuid=e++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},n!==this&&(t.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===n&&this.destroy()}}),this.document=t(n.style?n.ownerDocument:n.document||n),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var n,r,s,o=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(o={},n=e.split("."),e=n.shift(),n.length){for(r=o[e]=t.widget.extend({},this.options[e]),s=0;s<n.length-1;s++)r[n[s]]=r[n[s]]||{},r=r[n[s]];if(e=n.pop(),1===arguments.length)return void 0===r[e]?null:r[e];r[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];o[e]=i}return this._setOptions(o),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,n,r;for(i in e)r=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&r&&r.length&&(n=t(r.get()),this._removeClass(r,i),n.addClass(this._classes({element:n,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,s){var o,a;for(a=0;a<i.length;a++)o=r.classesElementLookup[i[a]]||t(),o=t(e.add?t.unique(o.get().concat(e.element.get())):o.not(e.element).get()),r.classesElementLookup[i[a]]=o,n.push(i[a]),s&&e.classes[i[a]]&&n.push(e.classes[i[a]])}var n=[],r=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),n.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(n,r){-1!==t.inArray(e.target,r)&&(i.classesElementLookup[n]=t(r.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,n){n="boolean"==typeof n?n:i;var r="string"==typeof t||null===t,s={extra:r?e:i,keys:r?t:e,element:r?this.element:t,add:n};return s.element.toggleClass(this._classes(s),n),this},_on:function(e,i,n){var r,s=this;"boolean"!=typeof e&&(n=i,i=e,e=!1),n?(i=r=t(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,r=this.widget()),t.each(n,function(n,o){function a(){if(e||!0!==s.options.disabled&&!t(this).hasClass("ui-state-disabled"))return("string"==typeof o?s[o]:o).apply(s,arguments)}"string"!=typeof o&&(a.guid=o.guid=o.guid||a.guid||t.guid++);var l=n.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+s.eventNamespace,c=l[2];c?r.on(u,c,a):i.on(u,a)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,n){var r,s,o=this.options[e];if(n=n||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],s=i.originalEvent)for(r in s)r in i||(i[r]=s[r]);return this.element.trigger(i,n),!(t.isFunction(o)&&!1===o.apply(this.element[0],[i].concat(n))||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,r,s){"string"==typeof r&&(r={effect:r});var o,a=r?!0===r||"number"==typeof r?i:r.effect||i:e;r=r||{},"number"==typeof r&&(r={duration:r}),o=!t.isEmptyObject(r),r.complete=s,r.delay&&n.delay(r.delay),o&&t.effects&&t.effects.effect[a]?n[e](r):a!==e&&n[a]?n[a](r.duration,r.easing,s):n.queue(function(i){t(this)[e](),s&&s.call(n[0]),i()})}}),t.widget})},function(t,e,i){(function(t,n){var r;(function(){function s(t,e){return t.set(e[0],e[1]),t}function o(t,e){return t.add(e),t}function a(t,e,i){switch(i.length){case 0:return t.call(e);case 1:return t.call(e,i[0]);case 2:return t.call(e,i[0],i[1]);case 3:return t.call(e,i[0],i[1],i[2])}return t.apply(e,i)}function l(t,e,i,n){for(var r=-1,s=null==t?0:t.length;++r<s;){var o=t[r];e(n,o,i(o),t)}return n}function u(t,e){for(var i=-1,n=null==t?0:t.length;++i<n&&!1!==e(t[i],i,t););return t}function c(t,e){for(var i=null==t?0:t.length;i--&&!1!==e(t[i],i,t););return t}function h(t,e){for(var i=-1,n=null==t?0:t.length;++i<n;)if(!e(t[i],i,t))return!1;return!0}function d(t,e){for(var i=-1,n=null==t?0:t.length,r=0,s=[];++i<n;){var o=t[i];e(o,i,t)&&(s[r++]=o)}return s}function p(t,e){return!!(null==t?0:t.length)&&k(t,e,0)>-1}function f(t,e,i){for(var n=-1,r=null==t?0:t.length;++n<r;)if(i(e,t[n]))return!0;return!1}function g(t,e){for(var i=-1,n=null==t?0:t.length,r=Array(n);++i<n;)r[i]=e(t[i],i,t);return r}function m(t,e){for(var i=-1,n=e.length,r=t.length;++i<n;)t[r+i]=e[i];return t}function v(t,e,i,n){var r=-1,s=null==t?0:t.length;for(n&&s&&(i=t[++r]);++r<s;)i=e(i,t[r],r,t);return i}function _(t,e,i,n){var r=null==t?0:t.length;for(n&&r&&(i=t[--r]);r--;)i=e(i,t[r],r,t);return i}function y(t,e){for(var i=-1,n=null==t?0:t.length;++i<n;)if(e(t[i],i,t))return!0;return!1}function b(t){return t.split("")}function w(t){return t.match(Fe)||[]}function x(t,e,i){var n;return i(t,function(t,i,r){if(e(t,i,r))return n=i,!1}),n}function C(t,e,i,n){for(var r=t.length,s=i+(n?1:-1);n?s--:++s<r;)if(e(t[s],s,t))return s;return-1}function k(t,e,i){return e===e?Z(t,e,i):C(t,D,i)}function T(t,e,i,n){for(var r=i-1,s=t.length;++r<s;)if(n(t[r],e))return r;return-1}function D(t){return t!==t}function S(t,e){var i=null==t?0:t.length;return i?O(t,e)/i:Mt}function A(t){return function(e){return null==e?rt:e[t]}}function E(t){return function(e){return null==t?rt:t[e]}}function I(t,e,i,n,r){return r(t,function(t,r,s){i=n?(n=!1,t):e(i,t,r,s)}),i}function $(t,e){var i=t.length;for(t.sort(e);i--;)t[i]=t[i].value;return t}function O(t,e){for(var i,n=-1,r=t.length;++n<r;){var s=e(t[n]);s!==rt&&(i=i===rt?s:i+s)}return i}function P(t,e){for(var i=-1,n=Array(t);++i<t;)n[i]=e(i);return n}function N(t,e){return g(e,function(e){return[e,t[e]]})}function M(t){return function(e){return t(e)}}function j(t,e){return g(e,function(e){return t[e]})}function H(t,e){return t.has(e)}function R(t,e){for(var i=-1,n=t.length;++i<n&&k(e,t[i],0)>-1;);return i}function L(t,e){for(var i=t.length;i--&&k(e,t[i],0)>-1;);return i}function F(t,e){for(var i=t.length,n=0;i--;)t[i]===e&&++n;return n}function z(t){return"\\"+Si[t]}function W(t,e){return null==t?rt:t[e]}function q(t){return _i.test(t)}function U(t){return yi.test(t)}function B(t){for(var e,i=[];!(e=t.next()).done;)i.push(e.value);return i}function Y(t){var e=-1,i=Array(t.size);return t.forEach(function(t,n){i[++e]=[n,t]}),i}function V(t,e){return function(i){return t(e(i))}}function K(t,e){for(var i=-1,n=t.length,r=0,s=[];++i<n;){var o=t[i];o!==e&&o!==ct||(t[i]=ct,s[r++]=i)}return s}function X(t){var e=-1,i=Array(t.size);return t.forEach(function(t){i[++e]=t}),i}function G(t){var e=-1,i=Array(t.size);return t.forEach(function(t){i[++e]=[t,t]}),i}function Z(t,e,i){for(var n=i-1,r=t.length;++n<r;)if(t[n]===e)return n;return-1}function J(t,e,i){for(var n=i+1;n--;)if(t[n]===e)return n;return n}function Q(t){return q(t)?et(t):Ui(t)}function tt(t){return q(t)?it(t):b(t)}function et(t){for(var e=mi.lastIndex=0;mi.test(t);)++e;return e}function it(t){return t.match(mi)||[]}function nt(t){return t.match(vi)||[]}var rt,st=200,ot="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",at="Expected a function",lt="__lodash_hash_undefined__",ut=500,ct="__lodash_placeholder__",ht=1,dt=2,pt=4,ft=1,gt=2,mt=1,vt=2,_t=4,yt=8,bt=16,wt=32,xt=64,Ct=128,kt=256,Tt=512,Dt=30,St="...",At=800,Et=16,It=1,$t=2,Ot=1/0,Pt=9007199254740991,Nt=1.7976931348623157e308,Mt=NaN,jt=4294967295,Ht=jt-1,Rt=jt>>>1,Lt=[["ary",Ct],["bind",mt],["bindKey",vt],["curry",yt],["curryRight",bt],["flip",Tt],["partial",wt],["partialRight",xt],["rearg",kt]],Ft="[object Arguments]",zt="[object Array]",Wt="[object AsyncFunction]",qt="[object Boolean]",Ut="[object Date]",Bt="[object DOMException]",Yt="[object Error]",Vt="[object Function]",Kt="[object GeneratorFunction]",Xt="[object Map]",Gt="[object Number]",Zt="[object Null]",Jt="[object Object]",Qt="[object Proxy]",te="[object RegExp]",ee="[object Set]",ie="[object String]",ne="[object Symbol]",re="[object Undefined]",se="[object WeakMap]",oe="[object WeakSet]",ae="[object ArrayBuffer]",le="[object DataView]",ue="[object Float32Array]",ce="[object Float64Array]",he="[object Int8Array]",de="[object Int16Array]",pe="[object Int32Array]",fe="[object Uint8Array]",ge="[object Uint8ClampedArray]",me="[object Uint16Array]",ve="[object Uint32Array]",_e=/\b__p \+= '';/g,ye=/\b(__p \+=) '' \+/g,be=/(__e\(.*?\)|\b__t\)) \+\n'';/g,we=/&(?:amp|lt|gt|quot|#39);/g,xe=/[&<>"']/g,Ce=RegExp(we.source),ke=RegExp(xe.source),Te=/<%-([\s\S]+?)%>/g,De=/<%([\s\S]+?)%>/g,Se=/<%=([\s\S]+?)%>/g,Ae=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ee=/^\w*$/,Ie=/^\./,$e=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Oe=/[\\^$.*+?()[\]{}|]/g,Pe=RegExp(Oe.source),Ne=/^\s+|\s+$/g,Me=/^\s+/,je=/\s+$/,He=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Re=/\{\n\/\* \[wrapped with (.+)\] \*/,Le=/,? & /,Fe=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ze=/\\(\\)?/g,We=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,qe=/\w*$/,Ue=/^[-+]0x[0-9a-f]+$/i,Be=/^0b[01]+$/i,Ye=/^\[object .+?Constructor\]$/,Ve=/^0o[0-7]+$/i,Ke=/^(?:0|[1-9]\d*)$/,Xe=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ge=/($^)/,Ze=/['\n\r\u2028\u2029\\]/g,Je="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Qe="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ti="["+Qe+"]",ei="["+Je+"]",ii="[a-z\\xdf-\\xf6\\xf8-\\xff]",ni="[^\\ud800-\\udfff"+Qe+"\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",ri="\\ud83c[\\udffb-\\udfff]",si="(?:\\ud83c[\\udde6-\\uddff]){2}",oi="[\\ud800-\\udbff][\\udc00-\\udfff]",ai="[A-Z\\xc0-\\xd6\\xd8-\\xde]",li="(?:"+ii+"|"+ni+")",ui="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",ci="(?:\\u200d(?:"+["[^\\ud800-\\udfff]",si,oi].join("|")+")[\\ufe0e\\ufe0f]?"+ui+")*",hi="[\\ufe0e\\ufe0f]?"+ui+ci,di="(?:"+["[\\u2700-\\u27bf]",si,oi].join("|")+")"+hi,pi="(?:"+["[^\\ud800-\\udfff]"+ei+"?",ei,si,oi,"[\\ud800-\\udfff]"].join("|")+")",fi=RegExp("['’]","g"),gi=RegExp(ei,"g"),mi=RegExp(ri+"(?="+ri+")|"+pi+hi,"g"),vi=RegExp([ai+"?"+ii+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[ti,ai,"$"].join("|")+")","(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[ti,ai+li,"$"].join("|")+")",ai+"?"+li+"+(?:['’](?:d|ll|m|re|s|t|ve))?",ai+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)","\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)","\\d+",di].join("|"),"g"),_i=RegExp("[\\u200d\\ud800-\\udfff"+Je+"\\ufe0e\\ufe0f]"),yi=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,bi=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],wi=-1,xi={};xi[ue]=xi[ce]=xi[he]=xi[de]=xi[pe]=xi[fe]=xi[ge]=xi[me]=xi[ve]=!0,xi[Ft]=xi[zt]=xi[ae]=xi[qt]=xi[le]=xi[Ut]=xi[Yt]=xi[Vt]=xi[Xt]=xi[Gt]=xi[Jt]=xi[te]=xi[ee]=xi[ie]=xi[se]=!1;var Ci={};Ci[Ft]=Ci[zt]=Ci[ae]=Ci[le]=Ci[qt]=Ci[Ut]=Ci[ue]=Ci[ce]=Ci[he]=Ci[de]=Ci[pe]=Ci[Xt]=Ci[Gt]=Ci[Jt]=Ci[te]=Ci[ee]=Ci[ie]=Ci[ne]=Ci[fe]=Ci[ge]=Ci[me]=Ci[ve]=!0,Ci[Yt]=Ci[Vt]=Ci[se]=!1;var ki={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},Ti={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Di={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Si={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Ai=parseFloat,Ei=parseInt,Ii="object"==typeof t&&t&&t.Object===Object&&t,$i="object"==typeof self&&self&&self.Object===Object&&self,Oi=Ii||$i||Function("return this")(),Pi="object"==typeof e&&e&&!e.nodeType&&e,Ni=Pi&&"object"==typeof n&&n&&!n.nodeType&&n,Mi=Ni&&Ni.exports===Pi,ji=Mi&&Ii.process,Hi=function(){try{return ji&&ji.binding&&ji.binding("util")}catch(t){}}(),Ri=Hi&&Hi.isArrayBuffer,Li=Hi&&Hi.isDate,Fi=Hi&&Hi.isMap,zi=Hi&&Hi.isRegExp,Wi=Hi&&Hi.isSet,qi=Hi&&Hi.isTypedArray,Ui=A("length"),Bi=E(ki),Yi=E(Ti),Vi=E(Di),Ki=function t(e){function i(t){if(sl(t)&&!md(t)&&!(t instanceof b)){if(t instanceof r)return t;if(mc.call(t,"__wrapped__"))return eo(t)}return new r(t)}function n(){}function r(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=rt}function b(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=jt,this.__views__=[]}function E(){var t=new b(this.__wrapped__);return t.__actions__=Hr(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=Hr(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=Hr(this.__views__),t}function Z(){if(this.__filtered__){var t=new b(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function et(){var t=this.__wrapped__.value(),e=this.__dir__,i=md(t),n=e<0,r=i?t.length:0,s=Ds(0,r,this.__views__),o=s.start,a=s.end,l=a-o,u=n?a:o-1,c=this.__iteratees__,h=c.length,d=0,p=Yc(l,this.__takeCount__);if(!i||!n&&r==l&&p==l)return _r(t,this.__actions__);var f=[];t:for(;l--&&d<p;){u+=e;for(var g=-1,m=t[u];++g<h;){var v=c[g],_=v.iteratee,y=v.type,b=_(m);if(y==$t)m=b;else if(!b){if(y==It)continue t;break t}}f[d++]=m}return f}function it(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}function Fe(){this.__data__=ih?ih(null):{},this.size=0}function Je(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}function Qe(t){var e=this.__data__;if(ih){var i=e[t];return i===lt?rt:i}return mc.call(e,t)?e[t]:rt}function ti(t){var e=this.__data__;return ih?e[t]!==rt:mc.call(e,t)}function ei(t,e){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=ih&&e===rt?lt:e,this}function ii(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}function ni(){this.__data__=[],this.size=0}function ri(t){var e=this.__data__,i=Xi(e,t);return!(i<0)&&(i==e.length-1?e.pop():Ic.call(e,i,1),--this.size,!0)}function si(t){var e=this.__data__,i=Xi(e,t);return i<0?rt:e[i][1]}function oi(t){return Xi(this.__data__,t)>-1}function ai(t,e){var i=this.__data__,n=Xi(i,t);return n<0?(++this.size,i.push([t,e])):i[n][1]=e,this}function li(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}function ui(){this.size=0,this.__data__={hash:new it,map:new(Jc||ii),string:new it}}function ci(t){var e=xs(this,t).delete(t);return this.size-=e?1:0,e}function hi(t){return xs(this,t).get(t)}function di(t){return xs(this,t).has(t)}function pi(t,e){var i=xs(this,t),n=i.size;return i.set(t,e),this.size+=i.size==n?0:1,this}function mi(t){var e=-1,i=null==t?0:t.length;for(this.__data__=new li;++e<i;)this.add(t[e])}function vi(t){return this.__data__.set(t,lt),this}function _i(t){return this.__data__.has(t)}function yi(t){var e=this.__data__=new ii(t);this.size=e.size}function ki(){this.__data__=new ii,this.size=0}function Ti(t){var e=this.__data__,i=e.delete(t);return this.size=e.size,i}function Di(t){return this.__data__.get(t)}function Si(t){return this.__data__.has(t)}function Ii(t,e){var i=this.__data__;if(i instanceof ii){var n=i.__data__;if(!Jc||n.length<st-1)return n.push([t,e]),this.size=++i.size,this;i=this.__data__=new li(n)}return i.set(t,e),this.size=i.size,this}function $i(t,e){var i=md(t),n=!i&&gd(t),r=!i&&!n&&_d(t),s=!i&&!n&&!r&&Cd(t),o=i||n||r||s,a=o?P(t.length,uc):[],l=a.length;for(var u in t)!e&&!mc.call(t,u)||o&&("length"==u||r&&("offset"==u||"parent"==u)||s&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||Ns(u,l))||a.push(u);return a}function Pi(t){var e=t.length;return e?t[Qn(0,e-1)]:rt}function Ni(t,e){return Zs(Hr(t),en(e,0,t.length))}function ji(t){return Zs(Hr(t))}function Hi(t,e,i){(i===rt||Ba(t[e],i))&&(i!==rt||e in t)||Qi(t,e,i)}function Ui(t,e,i){var n=t[e];mc.call(t,e)&&Ba(n,i)&&(i!==rt||e in t)||Qi(t,e,i)}function Xi(t,e){for(var i=t.length;i--;)if(Ba(t[i][0],e))return i;return-1}function Gi(t,e,i,n){return fh(t,function(t,r,s){e(n,t,i(t),s)}),n}function Zi(t,e){return t&&Rr(e,Fl(e),t)}function Ji(t,e){return t&&Rr(e,zl(e),t)}function Qi(t,e,i){"__proto__"==e&&Nc?Nc(t,e,{configurable:!0,enumerable:!0,value:i,writable:!0}):t[e]=i}function tn(t,e){for(var i=-1,n=e.length,r=ic(n),s=null==t;++i<n;)r[i]=s?rt:Hl(t,e[i]);return r}function en(t,e,i){return t===t&&(i!==rt&&(t=t<=i?t:i),e!==rt&&(t=t>=e?t:e)),t}function nn(t,e,i,n,r,s){var o,a=e&ht,l=e&dt,c=e&pt;if(i&&(o=r?i(t,n,r,s):i(t)),o!==rt)return o;if(!rl(t))return t;var h=md(t);if(h){if(o=Es(t),!a)return Hr(t,o)}else{var d=Dh(t),p=d==Vt||d==Kt;if(_d(t))return Tr(t,a);if(d==Jt||d==Ft||p&&!r){if(o=l||p?{}:Is(t),!a)return l?Fr(t,Ji(o,t)):Lr(t,Zi(o,t))}else{if(!Ci[d])return r?t:{};o=$s(t,d,nn,a)}}s||(s=new yi);var f=s.get(t);if(f)return f;s.set(t,o);var g=c?l?_s:vs:l?zl:Fl,m=h?rt:g(t);return u(m||t,function(n,r){m&&(r=n,n=t[r]),Ui(o,r,nn(n,e,i,r,t,s))}),o}function rn(t){var e=Fl(t);return function(i){return sn(i,t,e)}}function sn(t,e,i){var n=i.length;if(null==t)return!n;for(t=ac(t);n--;){var r=i[n],s=e[r],o=t[r];if(o===rt&&!(r in t)||!s(o))return!1}return!0}function on(t,e,i){if("function"!=typeof t)throw new cc(at);return Eh(function(){t.apply(rt,i)},e)}function an(t,e,i,n){var r=-1,s=p,o=!0,a=t.length,l=[],u=e.length;if(!a)return l;i&&(e=g(e,M(i))),n?(s=f,o=!1):e.length>=st&&(s=H,o=!1,e=new mi(e));t:for(;++r<a;){var c=t[r],h=null==i?c:i(c);if(c=n||0!==c?c:0,o&&h===h){for(var d=u;d--;)if(e[d]===h)continue t;l.push(c)}else s(e,h,n)||l.push(c)}return l}function ln(t,e){var i=!0;return fh(t,function(t,n,r){return i=!!e(t,n,r)}),i}function un(t,e,i){for(var n=-1,r=t.length;++n<r;){var s=t[n],o=e(s);if(null!=o&&(a===rt?o===o&&!ml(o):i(o,a)))var a=o,l=s}return l}function cn(t,e,i,n){var r=t.length;for(i=xl(i),i<0&&(i=-i>r?0:r+i),n=n===rt||n>r?r:xl(n),n<0&&(n+=r),n=i>n?0:Cl(n);i<n;)t[i++]=e;return t}function hn(t,e){var i=[];return fh(t,function(t,n,r){e(t,n,r)&&i.push(t)}),i}function dn(t,e,i,n,r){var s=-1,o=t.length;for(i||(i=Ps),r||(r=[]);++s<o;){var a=t[s];e>0&&i(a)?e>1?dn(a,e-1,i,n,r):m(r,a):n||(r[r.length]=a)}return r}function pn(t,e){return t&&mh(t,e,Fl)}function fn(t,e){return t&&vh(t,e,Fl)}function gn(t,e){return d(e,function(e){return el(t[e])})}function mn(t,e){e=Cr(e,t);for(var i=0,n=e.length;null!=t&&i<n;)t=t[Js(e[i++])];return i&&i==n?t:rt}function vn(t,e,i){var n=e(t);return md(t)?n:m(n,i(t))}function _n(t){return null==t?t===rt?re:Zt:Pc&&Pc in ac(t)?Ts(t):Bs(t)}function yn(t,e){return t>e}function bn(t,e){return null!=t&&mc.call(t,e)}function wn(t,e){return null!=t&&e in ac(t)}function xn(t,e,i){return t>=Yc(e,i)&&t<Bc(e,i)}function Cn(t,e,i){for(var n=i?f:p,r=t[0].length,s=t.length,o=s,a=ic(s),l=1/0,u=[];o--;){var c=t[o];o&&e&&(c=g(c,M(e))),l=Yc(c.length,l),a[o]=!i&&(e||r>=120&&c.length>=120)?new mi(o&&c):rt}c=t[0];var h=-1,d=a[0];t:for(;++h<r&&u.length<l;){var m=c[h],v=e?e(m):m;if(m=i||0!==m?m:0,!(d?H(d,v):n(u,v,i))){for(o=s;--o;){var _=a[o];if(!(_?H(_,v):n(t[o],v,i)))continue t}d&&d.push(v),u.push(m)}}return u}function kn(t,e,i,n){return pn(t,function(t,r,s){e(n,i(t),r,s)}),n}function Tn(t,e,i){e=Cr(e,t),t=Vs(t,e);var n=null==t?t:t[Js(wo(e))];return null==n?rt:a(n,t,i)}function Dn(t){return sl(t)&&_n(t)==Ft}function Sn(t){return sl(t)&&_n(t)==ae}function An(t){return sl(t)&&_n(t)==Ut}function En(t,e,i,n,r){return t===e||(null==t||null==e||!sl(t)&&!sl(e)?t!==t&&e!==e:In(t,e,i,n,En,r))}function In(t,e,i,n,r,s){var o=md(t),a=md(e),l=o?zt:Dh(t),u=a?zt:Dh(e);l=l==Ft?Jt:l,u=u==Ft?Jt:u;var c=l==Jt,h=u==Jt,d=l==u;if(d&&_d(t)){if(!_d(e))return!1;o=!0,c=!1}if(d&&!c)return s||(s=new yi),o||Cd(t)?ps(t,e,i,n,r,s):fs(t,e,l,i,n,r,s);if(!(i&ft)){var p=c&&mc.call(t,"__wrapped__"),f=h&&mc.call(e,"__wrapped__");if(p||f){var g=p?t.value():t,m=f?e.value():e;return s||(s=new yi),r(g,m,i,n,s)}}return!!d&&(s||(s=new yi),gs(t,e,i,n,r,s))}function $n(t){return sl(t)&&Dh(t)==Xt}function On(t,e,i,n){var r=i.length,s=r,o=!n;if(null==t)return!s;for(t=ac(t);r--;){var a=i[r];if(o&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++r<s;){a=i[r];var l=a[0],u=t[l],c=a[1];if(o&&a[2]){if(u===rt&&!(l in t))return!1}else{var h=new yi;if(n)var d=n(u,c,l,t,e,h);if(!(d===rt?En(c,u,ft|gt,n,h):d))return!1}}return!0}function Pn(t){return!(!rl(t)||Ls(t))&&(el(t)?xc:Ye).test(Qs(t))}function Nn(t){return sl(t)&&_n(t)==te}function Mn(t){return sl(t)&&Dh(t)==ee}function jn(t){return sl(t)&&nl(t.length)&&!!xi[_n(t)]}function Hn(t){return"function"==typeof t?t:null==t?Iu:"object"==typeof t?md(t)?qn(t[0],t[1]):Wn(t):Ru(t)}function Rn(t){if(!Fs(t))return Uc(t);var e=[];for(var i in ac(t))mc.call(t,i)&&"constructor"!=i&&e.push(i);return e}function Ln(t){if(!rl(t))return Us(t);var e=Fs(t),i=[];for(var n in t)("constructor"!=n||!e&&mc.call(t,n))&&i.push(n);return i}function Fn(t,e){return t<e}function zn(t,e){var i=-1,n=Ya(t)?ic(t.length):[];return fh(t,function(t,r,s){n[++i]=e(t,r,s)}),n}function Wn(t){var e=Cs(t);return 1==e.length&&e[0][2]?Ws(e[0][0],e[0][1]):function(i){return i===t||On(i,t,e)}}function qn(t,e){return js(t)&&zs(e)?Ws(Js(t),e):function(i){var n=Hl(i,t);return n===rt&&n===e?Ll(i,t):En(e,n,ft|gt)}}function Un(t,e,i,n,r){t!==e&&mh(e,function(s,o){if(rl(s))r||(r=new yi),Bn(t,e,o,i,Un,n,r);else{var a=n?n(t[o],s,o+"",t,e,r):rt;a===rt&&(a=s),Hi(t,o,a)}},zl)}function Bn(t,e,i,n,r,s,o){var a=t[i],l=e[i],u=o.get(l);if(u)return void Hi(t,i,u);var c=s?s(a,l,i+"",t,e,o):rt,h=c===rt;if(h){var d=md(l),p=!d&&_d(l),f=!d&&!p&&Cd(l);c=l,d||p||f?md(a)?c=a:Va(a)?c=Hr(a):p?(h=!1,c=Tr(l,!0)):f?(h=!1,c=Or(l,!0)):c=[]:pl(l)||gd(l)?(c=a,gd(a)?c=Tl(a):(!rl(a)||n&&el(a))&&(c=Is(l))):h=!1}h&&(o.set(l,c),r(c,l,n,s,o),o.delete(l)),Hi(t,i,c)}function Yn(t,e){var i=t.length;if(i)return e+=e<0?i:0,Ns(e,i)?t[e]:rt}function Vn(t,e,i){var n=-1;return e=g(e.length?e:[Iu],M(ws())),$(zn(t,function(t,i,r){return{criteria:g(e,function(e){return e(t)}),index:++n,value:t}}),function(t,e){return Nr(t,e,i)})}function Kn(t,e){return Xn(t,e,function(e,i){return Ll(t,i)})}function Xn(t,e,i){for(var n=-1,r=e.length,s={};++n<r;){var o=e[n],a=mn(t,o);i(a,o)&&sr(s,Cr(o,t),a)}return s}function Gn(t){return function(e){return mn(e,t)}}function Zn(t,e,i,n){var r=n?T:k,s=-1,o=e.length,a=t;for(t===e&&(e=Hr(e)),i&&(a=g(t,M(i)));++s<o;)for(var l=0,u=e[s],c=i?i(u):u;(l=r(a,c,l,n))>-1;)a!==t&&Ic.call(a,l,1),Ic.call(t,l,1);return t}function Jn(t,e){for(var i=t?e.length:0,n=i-1;i--;){var r=e[i];if(i==n||r!==s){var s=r;Ns(r)?Ic.call(t,r,1):gr(t,r)}}return t}function Qn(t,e){return t+Lc(Xc()*(e-t+1))}function tr(t,e,i,n){for(var r=-1,s=Bc(Rc((e-t)/(i||1)),0),o=ic(s);s--;)o[n?s:++r]=t,t+=i;return o}function er(t,e){var i="";if(!t||e<1||e>Pt)return i;do{e%2&&(i+=t),(e=Lc(e/2))&&(t+=t)}while(e);return i}function ir(t,e){return Ih(Ys(t,e,Iu),t+"")}function nr(t){return Pi(Ql(t))}function rr(t,e){var i=Ql(t);return Zs(i,en(e,0,i.length))}function sr(t,e,i,n){if(!rl(t))return t;e=Cr(e,t);for(var r=-1,s=e.length,o=s-1,a=t;null!=a&&++r<s;){var l=Js(e[r]),u=i;if(r!=o){var c=a[l];u=n?n(c,l,a):rt,u===rt&&(u=rl(c)?c:Ns(e[r+1])?[]:{})}Ui(a,l,u),a=a[l]}return t}function or(t){return Zs(Ql(t))}function ar(t,e,i){var n=-1,r=t.length;e<0&&(e=-e>r?0:r+e),i=i>r?r:i,i<0&&(i+=r),r=e>i?0:i-e>>>0,e>>>=0;for(var s=ic(r);++n<r;)s[n]=t[n+e];return s}function lr(t,e){var i;return fh(t,function(t,n,r){return!(i=e(t,n,r))}),!!i}function ur(t,e,i){var n=0,r=null==t?n:t.length;if("number"==typeof e&&e===e&&r<=Rt){for(;n<r;){var s=n+r>>>1,o=t[s];null!==o&&!ml(o)&&(i?o<=e:o<e)?n=s+1:r=s}return r}return cr(t,e,Iu,i)}function cr(t,e,i,n){e=i(e);for(var r=0,s=null==t?0:t.length,o=e!==e,a=null===e,l=ml(e),u=e===rt;r<s;){var c=Lc((r+s)/2),h=i(t[c]),d=h!==rt,p=null===h,f=h===h,g=ml(h);if(o)var m=n||f;else m=u?f&&(n||d):a?f&&d&&(n||!p):l?f&&d&&!p&&(n||!g):!p&&!g&&(n?h<=e:h<e);m?r=c+1:s=c}return Yc(s,Ht)}function hr(t,e){for(var i=-1,n=t.length,r=0,s=[];++i<n;){var o=t[i],a=e?e(o):o;if(!i||!Ba(a,l)){var l=a;s[r++]=0===o?0:o}}return s}function dr(t){return"number"==typeof t?t:ml(t)?Mt:+t}function pr(t){if("string"==typeof t)return t;if(md(t))return g(t,pr)+"";if(ml(t))return dh?dh.call(t):"";var e=t+"";return"0"==e&&1/t==-Ot?"-0":e}function fr(t,e,i){var n=-1,r=p,s=t.length,o=!0,a=[],l=a;if(i)o=!1,r=f;else if(s>=st){var u=e?null:xh(t);if(u)return X(u);o=!1,r=H,l=new mi}else l=e?[]:a;t:for(;++n<s;){var c=t[n],h=e?e(c):c;if(c=i||0!==c?c:0,o&&h===h){for(var d=l.length;d--;)if(l[d]===h)continue t;e&&l.push(h),a.push(c)}else r(l,h,i)||(l!==a&&l.push(h),a.push(c))}return a}function gr(t,e){return e=Cr(e,t),null==(t=Vs(t,e))||delete t[Js(wo(e))]}function mr(t,e,i,n){return sr(t,e,i(mn(t,e)),n)}function vr(t,e,i,n){for(var r=t.length,s=n?r:-1;(n?s--:++s<r)&&e(t[s],s,t););return i?ar(t,n?0:s,n?s+1:r):ar(t,n?s+1:0,n?r:s)}function _r(t,e){var i=t;return i instanceof b&&(i=i.value()),v(e,function(t,e){return e.func.apply(e.thisArg,m([t],e.args))},i)}function yr(t,e,i){var n=t.length;if(n<2)return n?fr(t[0]):[];for(var r=-1,s=ic(n);++r<n;)for(var o=t[r],a=-1;++a<n;)a!=r&&(s[r]=an(s[r]||o,t[a],e,i));return fr(dn(s,1),e,i)}function br(t,e,i){for(var n=-1,r=t.length,s=e.length,o={};++n<r;){var a=n<s?e[n]:rt;i(o,t[n],a)}return o}function wr(t){return Va(t)?t:[]}function xr(t){return"function"==typeof t?t:Iu}function Cr(t,e){return md(t)?t:js(t,e)?[t]:$h(Sl(t))}function kr(t,e,i){var n=t.length;return i=i===rt?n:i,!e&&i>=n?t:ar(t,e,i)}function Tr(t,e){if(e)return t.slice();var i=t.length,n=Dc?Dc(i):new t.constructor(i);return t.copy(n),n}function Dr(t){var e=new t.constructor(t.byteLength);return new Tc(e).set(new Tc(t)),e}function Sr(t,e){var i=e?Dr(t.buffer):t.buffer;return new t.constructor(i,t.byteOffset,t.byteLength)}function Ar(t,e,i){return v(e?i(Y(t),ht):Y(t),s,new t.constructor)}function Er(t){var e=new t.constructor(t.source,qe.exec(t));return e.lastIndex=t.lastIndex,e}function Ir(t,e,i){return v(e?i(X(t),ht):X(t),o,new t.constructor)}function $r(t){return hh?ac(hh.call(t)):{}}function Or(t,e){var i=e?Dr(t.buffer):t.buffer;return new t.constructor(i,t.byteOffset,t.length)}function Pr(t,e){if(t!==e){var i=t!==rt,n=null===t,r=t===t,s=ml(t),o=e!==rt,a=null===e,l=e===e,u=ml(e);if(!a&&!u&&!s&&t>e||s&&o&&l&&!a&&!u||n&&o&&l||!i&&l||!r)return 1;if(!n&&!s&&!u&&t<e||u&&i&&r&&!n&&!s||a&&i&&r||!o&&r||!l)return-1}return 0}function Nr(t,e,i){for(var n=-1,r=t.criteria,s=e.criteria,o=r.length,a=i.length;++n<o;){var l=Pr(r[n],s[n]);if(l){if(n>=a)return l;return l*("desc"==i[n]?-1:1)}}return t.index-e.index}function Mr(t,e,i,n){for(var r=-1,s=t.length,o=i.length,a=-1,l=e.length,u=Bc(s-o,0),c=ic(l+u),h=!n;++a<l;)c[a]=e[a];for(;++r<o;)(h||r<s)&&(c[i[r]]=t[r]);for(;u--;)c[a++]=t[r++];return c}function jr(t,e,i,n){for(var r=-1,s=t.length,o=-1,a=i.length,l=-1,u=e.length,c=Bc(s-a,0),h=ic(c+u),d=!n;++r<c;)h[r]=t[r];for(var p=r;++l<u;)h[p+l]=e[l];for(;++o<a;)(d||r<s)&&(h[p+i[o]]=t[r++]);return h}function Hr(t,e){var i=-1,n=t.length;for(e||(e=ic(n));++i<n;)e[i]=t[i];return e}function Rr(t,e,i,n){var r=!i;i||(i={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=n?n(i[a],t[a],a,i,t):rt;l===rt&&(l=t[a]),r?Qi(i,a,l):Ui(i,a,l)}return i}function Lr(t,e){return Rr(t,kh(t),e)}function Fr(t,e){return Rr(t,Th(t),e)}function zr(t,e){return function(i,n){var r=md(i)?l:Gi,s=e?e():{};return r(i,t,ws(n,2),s)}}function Wr(t){return ir(function(e,i){var n=-1,r=i.length,s=r>1?i[r-1]:rt,o=r>2?i[2]:rt;for(s=t.length>3&&"function"==typeof s?(r--,s):rt,o&&Ms(i[0],i[1],o)&&(s=r<3?rt:s,r=1),e=ac(e);++n<r;){var a=i[n];a&&t(e,a,n,s)}return e})}function qr(t,e){return function(i,n){if(null==i)return i;if(!Ya(i))return t(i,n);for(var r=i.length,s=e?r:-1,o=ac(i);(e?s--:++s<r)&&!1!==n(o[s],s,o););return i}}function Ur(t){return function(e,i,n){for(var r=-1,s=ac(e),o=n(e),a=o.length;a--;){var l=o[t?a:++r];if(!1===i(s[l],l,s))break}return e}}function Br(t,e,i){function n(){return(this&&this!==Oi&&this instanceof n?s:t).apply(r?i:this,arguments)}var r=e&mt,s=Kr(t);return n}function Yr(t){return function(e){e=Sl(e);var i=q(e)?tt(e):rt,n=i?i[0]:e.charAt(0),r=i?kr(i,1).join(""):e.slice(1);return n[t]()+r}}function Vr(t){return function(e){return v(Tu(su(e).replace(fi,"")),t,"")}}function Kr(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var i=ph(t.prototype),n=t.apply(i,e);return rl(n)?n:i}}function Xr(t,e,i){function n(){for(var s=arguments.length,o=ic(s),l=s,u=bs(n);l--;)o[l]=arguments[l];var c=s<3&&o[0]!==u&&o[s-1]!==u?[]:K(o,u);return(s-=c.length)<i?os(t,e,Jr,n.placeholder,rt,o,c,rt,rt,i-s):a(this&&this!==Oi&&this instanceof n?r:t,this,o)}var r=Kr(t);return n}function Gr(t){return function(e,i,n){var r=ac(e);if(!Ya(e)){var s=ws(i,3);e=Fl(e),i=function(t){return s(r[t],t,r)}}var o=t(e,i,n);return o>-1?r[s?e[o]:o]:rt}}function Zr(t){return ms(function(e){var i=e.length,n=i,s=r.prototype.thru;for(t&&e.reverse();n--;){var o=e[n];if("function"!=typeof o)throw new cc(at);if(s&&!a&&"wrapper"==ys(o))var a=new r([],!0)}for(n=a?n:i;++n<i;){o=e[n];var l=ys(o),u="wrapper"==l?Ch(o):rt;a=u&&Rs(u[0])&&u[1]==(Ct|yt|wt|kt)&&!u[4].length&&1==u[9]?a[ys(u[0])].apply(a,u[3]):1==o.length&&Rs(o)?a[l]():a.thru(o)}return function(){var t=arguments,n=t[0];if(a&&1==t.length&&md(n))return a.plant(n).value();for(var r=0,s=i?e[r].apply(this,t):n;++r<i;)s=e[r].call(this,s);return s}})}function Jr(t,e,i,n,r,s,o,a,l,u){function c(){for(var v=arguments.length,_=ic(v),y=v;y--;)_[y]=arguments[y];if(f)var b=bs(c),w=F(_,b);if(n&&(_=Mr(_,n,r,f)),s&&(_=jr(_,s,o,f)),v-=w,f&&v<u){var x=K(_,b);return os(t,e,Jr,c.placeholder,i,_,x,a,l,u-v)}var C=d?i:this,k=p?C[t]:t;return v=_.length,a?_=Ks(_,a):g&&v>1&&_.reverse(),h&&l<v&&(_.length=l),this&&this!==Oi&&this instanceof c&&(k=m||Kr(k)),k.apply(C,_)}var h=e&Ct,d=e&mt,p=e&vt,f=e&(yt|bt),g=e&Tt,m=p?rt:Kr(t);return c}function Qr(t,e){return function(i,n){return kn(i,t,e(n),{})}}function ts(t,e){return function(i,n){var r;if(i===rt&&n===rt)return e;if(i!==rt&&(r=i),n!==rt){if(r===rt)return n;"string"==typeof i||"string"==typeof n?(i=pr(i),n=pr(n)):(i=dr(i),n=dr(n)),r=t(i,n)}return r}}function es(t){return ms(function(e){return e=g(e,M(ws())),ir(function(i){var n=this;return t(e,function(t){return a(t,n,i)})})})}function is(t,e){e=e===rt?" ":pr(e);var i=e.length;if(i<2)return i?er(e,t):e;var n=er(e,Rc(t/Q(e)));return q(e)?kr(tt(n),0,t).join(""):n.slice(0,t)}function ns(t,e,i,n){function r(){for(var e=-1,l=arguments.length,u=-1,c=n.length,h=ic(c+l),d=this&&this!==Oi&&this instanceof r?o:t;++u<c;)h[u]=n[u];for(;l--;)h[u++]=arguments[++e];return a(d,s?i:this,h)}var s=e&mt,o=Kr(t);return r}function rs(t){return function(e,i,n){return n&&"number"!=typeof n&&Ms(e,i,n)&&(i=n=rt),e=wl(e),i===rt?(i=e,e=0):i=wl(i),n=n===rt?e<i?1:-1:wl(n),tr(e,i,n,t)}}function ss(t){return function(e,i){return"string"==typeof e&&"string"==typeof i||(e=kl(e),i=kl(i)),t(e,i)}}function os(t,e,i,n,r,s,o,a,l,u){var c=e&yt,h=c?o:rt,d=c?rt:o,p=c?s:rt,f=c?rt:s;e|=c?wt:xt,(e&=~(c?xt:wt))&_t||(e&=~(mt|vt));var g=[t,e,r,p,h,f,d,a,l,u],m=i.apply(rt,g);return Rs(t)&&Ah(m,g),m.placeholder=n,Xs(m,t,e)}function as(t){var e=oc[t];return function(t,i){if(t=kl(t),i=null==i?0:Yc(xl(i),292)){var n=(Sl(t)+"e").split("e");return n=(Sl(e(n[0]+"e"+(+n[1]+i)))+"e").split("e"),+(n[0]+"e"+(+n[1]-i))}return e(t)}}function ls(t){return function(e){var i=Dh(e);return i==Xt?Y(e):i==ee?G(e):N(e,t(e))}}function us(t,e,i,n,r,s,o,a){var l=e&vt;if(!l&&"function"!=typeof t)throw new cc(at);var u=n?n.length:0;if(u||(e&=~(wt|xt),n=r=rt),o=o===rt?o:Bc(xl(o),0),a=a===rt?a:xl(a),u-=r?r.length:0,e&xt){var c=n,h=r;n=r=rt}var d=l?rt:Ch(t),p=[t,e,i,n,r,c,h,s,o,a];if(d&&qs(p,d),t=p[0],e=p[1],i=p[2],n=p[3],r=p[4],a=p[9]=p[9]===rt?l?0:t.length:Bc(p[9]-u,0),!a&&e&(yt|bt)&&(e&=~(yt|bt)),e&&e!=mt)f=e==yt||e==bt?Xr(t,e,a):e!=wt&&e!=(mt|wt)||r.length?Jr.apply(rt,p):ns(t,e,i,n);else var f=Br(t,e,i);return Xs((d?_h:Ah)(f,p),t,e)}function cs(t,e,i,n){return t===rt||Ba(t,pc[i])&&!mc.call(n,i)?e:t}function hs(t,e,i,n,r,s){return rl(t)&&rl(e)&&(s.set(e,t),Un(t,e,rt,hs,s),s.delete(e)),t}function ds(t){return pl(t)?rt:t}function ps(t,e,i,n,r,s){var o=i&ft,a=t.length,l=e.length;if(a!=l&&!(o&&l>a))return!1;var u=s.get(t);if(u&&s.get(e))return u==e;var c=-1,h=!0,d=i&gt?new mi:rt;for(s.set(t,e),s.set(e,t);++c<a;){var p=t[c],f=e[c];if(n)var g=o?n(f,p,c,e,t,s):n(p,f,c,t,e,s);if(g!==rt){if(g)continue;h=!1;break}if(d){if(!y(e,function(t,e){if(!H(d,e)&&(p===t||r(p,t,i,n,s)))return d.push(e)})){h=!1;break}}else if(p!==f&&!r(p,f,i,n,s)){h=!1;break}}return s.delete(t),s.delete(e),h}function fs(t,e,i,n,r,s,o){switch(i){case le:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case ae:return!(t.byteLength!=e.byteLength||!s(new Tc(t),new Tc(e)));case qt:case Ut:case Gt:return Ba(+t,+e);case Yt:return t.name==e.name&&t.message==e.message;case te:case ie:return t==e+"";case Xt:var a=Y;case ee:var l=n&ft;if(a||(a=X),t.size!=e.size&&!l)return!1;var u=o.get(t);if(u)return u==e;n|=gt,o.set(t,e);var c=ps(a(t),a(e),n,r,s,o);return o.delete(t),c;case ne:if(hh)return hh.call(t)==hh.call(e)}return!1}function gs(t,e,i,n,r,s){var o=i&ft,a=vs(t),l=a.length;if(l!=vs(e).length&&!o)return!1;for(var u=l;u--;){var c=a[u];if(!(o?c in e:mc.call(e,c)))return!1}var h=s.get(t);if(h&&s.get(e))return h==e;var d=!0;s.set(t,e),s.set(e,t);for(var p=o;++u<l;){c=a[u];var f=t[c],g=e[c];if(n)var m=o?n(g,f,c,e,t,s):n(f,g,c,t,e,s);if(!(m===rt?f===g||r(f,g,i,n,s):m)){d=!1;break}p||(p="constructor"==c)}if(d&&!p){var v=t.constructor,_=e.constructor;v!=_&&"constructor"in t&&"constructor"in e&&!("function"==typeof v&&v instanceof v&&"function"==typeof _&&_ instanceof _)&&(d=!1)}return s.delete(t),s.delete(e),d}function ms(t){return Ih(Ys(t,rt,po),t+"")}function vs(t){return vn(t,Fl,kh)}function _s(t){return vn(t,zl,Th)}function ys(t){for(var e=t.name+"",i=rh[e],n=mc.call(rh,e)?i.length:0;n--;){var r=i[n],s=r.func;if(null==s||s==t)return r.name}return e}function bs(t){return(mc.call(i,"placeholder")?i:t).placeholder}function ws(){var t=i.iteratee||$u;return t=t===$u?Hn:t,arguments.length?t(arguments[0],arguments[1]):t}function xs(t,e){var i=t.__data__;return Hs(e)?i["string"==typeof e?"string":"hash"]:i.map}function Cs(t){for(var e=Fl(t),i=e.length;i--;){var n=e[i],r=t[n];e[i]=[n,r,zs(r)]}return e}function ks(t,e){var i=W(t,e);return Pn(i)?i:rt}function Ts(t){var e=mc.call(t,Pc),i=t[Pc];try{t[Pc]=rt;var n=!0}catch(t){}var r=yc.call(t);return n&&(e?t[Pc]=i:delete t[Pc]),r}function Ds(t,e,i){for(var n=-1,r=i.length;++n<r;){var s=i[n],o=s.size;switch(s.type){case"drop":t+=o;break;case"dropRight":e-=o;break;case"take":e=Yc(e,t+o);break;case"takeRight":t=Bc(t,e-o)}}return{start:t,end:e}}function Ss(t){var e=t.match(Re);return e?e[1].split(Le):[]}function As(t,e,i){e=Cr(e,t);for(var n=-1,r=e.length,s=!1;++n<r;){var o=Js(e[n]);if(!(s=null!=t&&i(t,o)))break;t=t[o]}return s||++n!=r?s:!!(r=null==t?0:t.length)&&nl(r)&&Ns(o,r)&&(md(t)||gd(t))}function Es(t){var e=t.length,i=t.constructor(e);return e&&"string"==typeof t[0]&&mc.call(t,"index")&&(i.index=t.index,i.input=t.input),i}function Is(t){return"function"!=typeof t.constructor||Fs(t)?{}:ph(Sc(t))}function $s(t,e,i,n){var r=t.constructor;switch(e){case ae:return Dr(t);case qt:case Ut:return new r(+t);case le:return Sr(t,n);case ue:case ce:case he:case de:case pe:case fe:case ge:case me:case ve:return Or(t,n);case Xt:return Ar(t,n,i);case Gt:case ie:return new r(t);case te:return Er(t);case ee:return Ir(t,n,i);case ne:return $r(t)}}function Os(t,e){var i=e.length;if(!i)return t;var n=i-1;return e[n]=(i>1?"& ":"")+e[n],e=e.join(i>2?", ":" "),t.replace(He,"{\n/* [wrapped with "+e+"] */\n")}function Ps(t){return md(t)||gd(t)||!!($c&&t&&t[$c])}function Ns(t,e){return!!(e=null==e?Pt:e)&&("number"==typeof t||Ke.test(t))&&t>-1&&t%1==0&&t<e}function Ms(t,e,i){if(!rl(i))return!1;var n=typeof e;return!!("number"==n?Ya(i)&&Ns(e,i.length):"string"==n&&e in i)&&Ba(i[e],t)}function js(t,e){if(md(t))return!1;var i=typeof t;return!("number"!=i&&"symbol"!=i&&"boolean"!=i&&null!=t&&!ml(t))||(Ee.test(t)||!Ae.test(t)||null!=e&&t in ac(e))}function Hs(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function Rs(t){var e=ys(t),n=i[e];if("function"!=typeof n||!(e in b.prototype))return!1;if(t===n)return!0;var r=Ch(n);return!!r&&t===r[0]}function Ls(t){return!!_c&&_c in t}function Fs(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||pc)}function zs(t){return t===t&&!rl(t)}function Ws(t,e){return function(i){return null!=i&&(i[t]===e&&(e!==rt||t in ac(i)))}}function qs(t,e){var i=t[1],n=e[1],r=i|n,s=r<(mt|vt|Ct),o=n==Ct&&i==yt||n==Ct&&i==kt&&t[7].length<=e[8]||n==(Ct|kt)&&e[7].length<=e[8]&&i==yt;if(!s&&!o)return t;n&mt&&(t[2]=e[2],r|=i&mt?0:_t);var a=e[3];if(a){var l=t[3];t[3]=l?Mr(l,a,e[4]):a,t[4]=l?K(t[3],ct):e[4]}return a=e[5],a&&(l=t[5],t[5]=l?jr(l,a,e[6]):a,t[6]=l?K(t[5],ct):e[6]),a=e[7],a&&(t[7]=a),n&Ct&&(t[8]=null==t[8]?e[8]:Yc(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=r,t}function Us(t){var e=[];if(null!=t)for(var i in ac(t))e.push(i);return e}function Bs(t){return yc.call(t)}function Ys(t,e,i){return e=Bc(e===rt?t.length-1:e,0),function(){for(var n=arguments,r=-1,s=Bc(n.length-e,0),o=ic(s);++r<s;)o[r]=n[e+r];r=-1;for(var l=ic(e+1);++r<e;)l[r]=n[r];return l[e]=i(o),a(t,this,l)}}function Vs(t,e){return e.length<2?t:mn(t,ar(e,0,-1))}function Ks(t,e){for(var i=t.length,n=Yc(e.length,i),r=Hr(t);n--;){var s=e[n];t[n]=Ns(s,i)?r[s]:rt}return t}function Xs(t,e,i){var n=e+"";return Ih(t,Os(n,to(Ss(n),i)))}function Gs(t){var e=0,i=0;return function(){var n=Vc(),r=Et-(n-i);if(i=n,r>0){if(++e>=At)return arguments[0]}else e=0;return t.apply(rt,arguments)}}function Zs(t,e){var i=-1,n=t.length,r=n-1;for(e=e===rt?n:e;++i<e;){var s=Qn(i,r),o=t[s];t[s]=t[i],t[i]=o}return t.length=e,t}function Js(t){if("string"==typeof t||ml(t))return t;var e=t+"";return"0"==e&&1/t==-Ot?"-0":e}function Qs(t){if(null!=t){try{return gc.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function to(t,e){return u(Lt,function(i){var n="_."+i[0];e&i[1]&&!p(t,n)&&t.push(n)}),t.sort()}function eo(t){if(t instanceof b)return t.clone();var e=new r(t.__wrapped__,t.__chain__);return e.__actions__=Hr(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}function io(t,e,i){e=(i?Ms(t,e,i):e===rt)?1:Bc(xl(e),0);var n=null==t?0:t.length;if(!n||e<1)return[];for(var r=0,s=0,o=ic(Rc(n/e));r<n;)o[s++]=ar(t,r,r+=e);return o}function no(t){for(var e=-1,i=null==t?0:t.length,n=0,r=[];++e<i;){var s=t[e];s&&(r[n++]=s)}return r}function ro(){var t=arguments.length;if(!t)return[];for(var e=ic(t-1),i=arguments[0],n=t;n--;)e[n-1]=arguments[n];return m(md(i)?Hr(i):[i],dn(e,1))}function so(t,e,i){var n=null==t?0:t.length;return n?(e=i||e===rt?1:xl(e),ar(t,e<0?0:e,n)):[]}function oo(t,e,i){var n=null==t?0:t.length;return n?(e=i||e===rt?1:xl(e),e=n-e,ar(t,0,e<0?0:e)):[]}function ao(t,e){return t&&t.length?vr(t,ws(e,3),!0,!0):[]}function lo(t,e){return t&&t.length?vr(t,ws(e,3),!0):[]}function uo(t,e,i,n){var r=null==t?0:t.length;return r?(i&&"number"!=typeof i&&Ms(t,e,i)&&(i=0,n=r),cn(t,e,i,n)):[]}function co(t,e,i){var n=null==t?0:t.length;if(!n)return-1;var r=null==i?0:xl(i);return r<0&&(r=Bc(n+r,0)),C(t,ws(e,3),r)}function ho(t,e,i){var n=null==t?0:t.length;if(!n)return-1;var r=n-1;return i!==rt&&(r=xl(i),r=i<0?Bc(n+r,0):Yc(r,n-1)),C(t,ws(e,3),r,!0)}function po(t){return(null==t?0:t.length)?dn(t,1):[]}function fo(t){return(null==t?0:t.length)?dn(t,Ot):[]}function go(t,e){return(null==t?0:t.length)?(e=e===rt?1:xl(e),dn(t,e)):[]}function mo(t){for(var e=-1,i=null==t?0:t.length,n={};++e<i;){var r=t[e];n[r[0]]=r[1]}return n}function vo(t){return t&&t.length?t[0]:rt}function _o(t,e,i){var n=null==t?0:t.length;if(!n)return-1;var r=null==i?0:xl(i);return r<0&&(r=Bc(n+r,0)),k(t,e,r)}function yo(t){return(null==t?0:t.length)?ar(t,0,-1):[]}function bo(t,e){return null==t?"":qc.call(t,e)}function wo(t){var e=null==t?0:t.length;return e?t[e-1]:rt}function xo(t,e,i){var n=null==t?0:t.length;if(!n)return-1;var r=n;return i!==rt&&(r=xl(i),r=r<0?Bc(n+r,0):Yc(r,n-1)),e===e?J(t,e,r):C(t,D,r,!0)}function Co(t,e){return t&&t.length?Yn(t,xl(e)):rt}function ko(t,e){return t&&t.length&&e&&e.length?Zn(t,e):t}function To(t,e,i){return t&&t.length&&e&&e.length?Zn(t,e,ws(i,2)):t}function Do(t,e,i){return t&&t.length&&e&&e.length?Zn(t,e,rt,i):t}function So(t,e){var i=[];if(!t||!t.length)return i;var n=-1,r=[],s=t.length;for(e=ws(e,3);++n<s;){var o=t[n];e(o,n,t)&&(i.push(o),r.push(n))}return Jn(t,r),i}function Ao(t){return null==t?t:Gc.call(t)}function Eo(t,e,i){var n=null==t?0:t.length;return n?(i&&"number"!=typeof i&&Ms(t,e,i)?(e=0,i=n):(e=null==e?0:xl(e),i=i===rt?n:xl(i)),ar(t,e,i)):[]}function Io(t,e){return ur(t,e)}function $o(t,e,i){return cr(t,e,ws(i,2))}function Oo(t,e){var i=null==t?0:t.length;if(i){var n=ur(t,e);if(n<i&&Ba(t[n],e))return n}return-1}function Po(t,e){return ur(t,e,!0)}function No(t,e,i){return cr(t,e,ws(i,2),!0)}function Mo(t,e){if(null==t?0:t.length){var i=ur(t,e,!0)-1;if(Ba(t[i],e))return i}return-1}function jo(t){return t&&t.length?hr(t):[]}function Ho(t,e){return t&&t.length?hr(t,ws(e,2)):[]}function Ro(t){var e=null==t?0:t.length;return e?ar(t,1,e):[]}function Lo(t,e,i){return t&&t.length?(e=i||e===rt?1:xl(e),ar(t,0,e<0?0:e)):[]}function Fo(t,e,i){var n=null==t?0:t.length;return n?(e=i||e===rt?1:xl(e),e=n-e,ar(t,e<0?0:e,n)):[]}function zo(t,e){return t&&t.length?vr(t,ws(e,3),!1,!0):[]}function Wo(t,e){return t&&t.length?vr(t,ws(e,3)):[]}function qo(t){return t&&t.length?fr(t):[]}function Uo(t,e){return t&&t.length?fr(t,ws(e,2)):[]}function Bo(t,e){return e="function"==typeof e?e:rt,t&&t.length?fr(t,rt,e):[]}function Yo(t){if(!t||!t.length)return[];var e=0;return t=d(t,function(t){if(Va(t))return e=Bc(t.length,e),!0}),P(e,function(e){return g(t,A(e))})}function Vo(t,e){if(!t||!t.length)return[];var i=Yo(t);return null==e?i:g(i,function(t){return a(e,rt,t)})}function Ko(t,e){return br(t||[],e||[],Ui)}function Xo(t,e){return br(t||[],e||[],sr)}function Go(t){var e=i(t);return e.__chain__=!0,e}function Zo(t,e){return e(t),t}function Jo(t,e){return e(t)}function Qo(){return Go(this)}function ta(){return new r(this.value(),this.__chain__)}function ea(){this.__values__===rt&&(this.__values__=bl(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?rt:this.__values__[this.__index__++]}}function ia(){return this}function na(t){for(var e,i=this;i instanceof n;){var r=eo(i);r.__index__=0,r.__values__=rt,e?s.__wrapped__=r:e=r;var s=r;i=i.__wrapped__}return s.__wrapped__=t,e}function ra(){var t=this.__wrapped__;if(t instanceof b){var e=t;return this.__actions__.length&&(e=new b(this)),e=e.reverse(),e.__actions__.push({func:Jo,args:[Ao],thisArg:rt}),new r(e,this.__chain__)}return this.thru(Ao)}function sa(){return _r(this.__wrapped__,this.__actions__)}function oa(t,e,i){var n=md(t)?h:ln;return i&&Ms(t,e,i)&&(e=rt),n(t,ws(e,3))}function aa(t,e){return(md(t)?d:hn)(t,ws(e,3))}function la(t,e){return dn(fa(t,e),1)}function ua(t,e){return dn(fa(t,e),Ot)}function ca(t,e,i){return i=i===rt?1:xl(i),dn(fa(t,e),i)}function ha(t,e){return(md(t)?u:fh)(t,ws(e,3))}function da(t,e){return(md(t)?c:gh)(t,ws(e,3))}function pa(t,e,i,n){t=Ya(t)?t:Ql(t),i=i&&!n?xl(i):0;var r=t.length;return i<0&&(i=Bc(r+i,0)),gl(t)?i<=r&&t.indexOf(e,i)>-1:!!r&&k(t,e,i)>-1}function fa(t,e){return(md(t)?g:zn)(t,ws(e,3))}function ga(t,e,i,n){return null==t?[]:(md(e)||(e=null==e?[]:[e]),i=n?rt:i,md(i)||(i=null==i?[]:[i]),Vn(t,e,i))}function ma(t,e,i){var n=md(t)?v:I,r=arguments.length<3;return n(t,ws(e,4),i,r,fh)}function va(t,e,i){var n=md(t)?_:I,r=arguments.length<3;return n(t,ws(e,4),i,r,gh)}function _a(t,e){return(md(t)?d:hn)(t,Oa(ws(e,3)))}function ya(t){return(md(t)?Pi:nr)(t)}function ba(t,e,i){return e=(i?Ms(t,e,i):e===rt)?1:xl(e),(md(t)?Ni:rr)(t,e)}function wa(t){return(md(t)?ji:or)(t)}function xa(t){if(null==t)return 0;if(Ya(t))return gl(t)?Q(t):t.length;var e=Dh(t);return e==Xt||e==ee?t.size:Rn(t).length}function Ca(t,e,i){var n=md(t)?y:lr;return i&&Ms(t,e,i)&&(e=rt),n(t,ws(e,3))}function ka(t,e){if("function"!=typeof e)throw new cc(at);return t=xl(t),function(){if(--t<1)return e.apply(this,arguments)}}function Ta(t,e,i){return e=i?rt:e,e=t&&null==e?t.length:e,us(t,Ct,rt,rt,rt,rt,e)}function Da(t,e){var i;if("function"!=typeof e)throw new cc(at);return t=xl(t),function(){return--t>0&&(i=e.apply(this,arguments)),t<=1&&(e=rt),i}}function Sa(t,e,i){e=i?rt:e;var n=us(t,yt,rt,rt,rt,rt,rt,e);return n.placeholder=Sa.placeholder,n}function Aa(t,e,i){e=i?rt:e;var n=us(t,bt,rt,rt,rt,rt,rt,e);return n.placeholder=Aa.placeholder,n}function Ea(t,e,i){function n(e){var i=d,n=p;return d=p=rt,_=e,g=t.apply(n,i)}function r(t){return _=t,m=Eh(a,e),y?n(t):g}function s(t){var i=t-v,n=t-_,r=e-i;return b?Yc(r,f-n):r}function o(t){var i=t-v,n=t-_;return v===rt||i>=e||i<0||b&&n>=f}function a(){var t=rd();if(o(t))return l(t);m=Eh(a,s(t))}function l(t){return m=rt,w&&d?n(t):(d=p=rt,g)}function u(){m!==rt&&wh(m),_=0,d=v=p=m=rt}function c(){return m===rt?g:l(rd())}function h(){var t=rd(),i=o(t);if(d=arguments,p=this,v=t,i){if(m===rt)return r(v);if(b)return m=Eh(a,e),n(v)}return m===rt&&(m=Eh(a,e)),g}var d,p,f,g,m,v,_=0,y=!1,b=!1,w=!0;if("function"!=typeof t)throw new cc(at);return e=kl(e)||0,rl(i)&&(y=!!i.leading,b="maxWait"in i,f=b?Bc(kl(i.maxWait)||0,e):f,w="trailing"in i?!!i.trailing:w),h.cancel=u,h.flush=c,h}function Ia(t){return us(t,Tt)}function $a(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new cc(at);var i=function(){var n=arguments,r=e?e.apply(this,n):n[0],s=i.cache;if(s.has(r))return s.get(r);var o=t.apply(this,n);return i.cache=s.set(r,o)||s,o};return i.cache=new($a.Cache||li),i}function Oa(t){if("function"!=typeof t)throw new cc(at);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function Pa(t){return Da(2,t)}function Na(t,e){if("function"!=typeof t)throw new cc(at);return e=e===rt?e:xl(e),ir(t,e)}function Ma(t,e){if("function"!=typeof t)throw new cc(at);return e=null==e?0:Bc(xl(e),0),ir(function(i){var n=i[e],r=kr(i,0,e);return n&&m(r,n),a(t,this,r)})}function ja(t,e,i){var n=!0,r=!0;if("function"!=typeof t)throw new cc(at);return rl(i)&&(n="leading"in i?!!i.leading:n,r="trailing"in i?!!i.trailing:r),Ea(t,e,{leading:n,maxWait:e,trailing:r})}function Ha(t){return Ta(t,1)}function Ra(t,e){return cd(xr(e),t)}function La(){if(!arguments.length)return[];var t=arguments[0];return md(t)?t:[t]}function Fa(t){return nn(t,pt)}function za(t,e){return e="function"==typeof e?e:rt,nn(t,pt,e)}function Wa(t){return nn(t,ht|pt)}function qa(t,e){return e="function"==typeof e?e:rt,nn(t,ht|pt,e)}function Ua(t,e){return null==e||sn(t,e,Fl(e))}function Ba(t,e){return t===e||t!==t&&e!==e}function Ya(t){return null!=t&&nl(t.length)&&!el(t)}function Va(t){return sl(t)&&Ya(t)}function Ka(t){return!0===t||!1===t||sl(t)&&_n(t)==qt}function Xa(t){return sl(t)&&1===t.nodeType&&!pl(t)}function Ga(t){if(null==t)return!0;if(Ya(t)&&(md(t)||"string"==typeof t||"function"==typeof t.splice||_d(t)||Cd(t)||gd(t)))return!t.length;var e=Dh(t);if(e==Xt||e==ee)return!t.size;if(Fs(t))return!Rn(t).length;for(var i in t)if(mc.call(t,i))return!1;return!0}function Za(t,e){return En(t,e)}function Ja(t,e,i){i="function"==typeof i?i:rt;var n=i?i(t,e):rt;return n===rt?En(t,e,rt,i):!!n}function Qa(t){if(!sl(t))return!1;var e=_n(t);return e==Yt||e==Bt||"string"==typeof t.message&&"string"==typeof t.name&&!pl(t)}function tl(t){return"number"==typeof t&&Wc(t)}function el(t){if(!rl(t))return!1;var e=_n(t);return e==Vt||e==Kt||e==Wt||e==Qt}function il(t){return"number"==typeof t&&t==xl(t)}function nl(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=Pt}function rl(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function sl(t){return null!=t&&"object"==typeof t}function ol(t,e){return t===e||On(t,e,Cs(e))}function al(t,e,i){return i="function"==typeof i?i:rt,On(t,e,Cs(e),i)}function ll(t){return dl(t)&&t!=+t}function ul(t){if(Sh(t))throw new rc(ot);return Pn(t)}function cl(t){return null===t}function hl(t){return null==t}function dl(t){return"number"==typeof t||sl(t)&&_n(t)==Gt}function pl(t){if(!sl(t)||_n(t)!=Jt)return!1;var e=Sc(t);if(null===e)return!0;var i=mc.call(e,"constructor")&&e.constructor;return"function"==typeof i&&i instanceof i&&gc.call(i)==bc}function fl(t){return il(t)&&t>=-Pt&&t<=Pt}function gl(t){return"string"==typeof t||!md(t)&&sl(t)&&_n(t)==ie}function ml(t){return"symbol"==typeof t||sl(t)&&_n(t)==ne}function vl(t){return t===rt}function _l(t){return sl(t)&&Dh(t)==se}function yl(t){return sl(t)&&_n(t)==oe}function bl(t){if(!t)return[];if(Ya(t))return gl(t)?tt(t):Hr(t);if(Oc&&t[Oc])return B(t[Oc]());var e=Dh(t);return(e==Xt?Y:e==ee?X:Ql)(t)}function wl(t){if(!t)return 0===t?t:0;if((t=kl(t))===Ot||t===-Ot){return(t<0?-1:1)*Nt}return t===t?t:0}function xl(t){var e=wl(t),i=e%1;return e===e?i?e-i:e:0}function Cl(t){return t?en(xl(t),0,jt):0}function kl(t){if("number"==typeof t)return t;if(ml(t))return Mt;if(rl(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=rl(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Ne,"");var i=Be.test(t);return i||Ve.test(t)?Ei(t.slice(2),i?2:8):Ue.test(t)?Mt:+t}function Tl(t){return Rr(t,zl(t))}function Dl(t){return t?en(xl(t),-Pt,Pt):0===t?t:0}function Sl(t){return null==t?"":pr(t)}function Al(t,e){var i=ph(t);return null==e?i:Zi(i,e)}function El(t,e){return x(t,ws(e,3),pn)}function Il(t,e){return x(t,ws(e,3),fn)}function $l(t,e){return null==t?t:mh(t,ws(e,3),zl)}function Ol(t,e){return null==t?t:vh(t,ws(e,3),zl)}function Pl(t,e){return t&&pn(t,ws(e,3))}function Nl(t,e){return t&&fn(t,ws(e,3))}function Ml(t){return null==t?[]:gn(t,Fl(t))}function jl(t){return null==t?[]:gn(t,zl(t))}function Hl(t,e,i){var n=null==t?rt:mn(t,e);return n===rt?i:n}function Rl(t,e){return null!=t&&As(t,e,bn)}function Ll(t,e){return null!=t&&As(t,e,wn)}function Fl(t){return Ya(t)?$i(t):Rn(t)}function zl(t){return Ya(t)?$i(t,!0):Ln(t)}function Wl(t,e){var i={};return e=ws(e,3),pn(t,function(t,n,r){Qi(i,e(t,n,r),t)}),i}function ql(t,e){var i={};return e=ws(e,3),pn(t,function(t,n,r){Qi(i,n,e(t,n,r))}),i}function Ul(t,e){return Bl(t,Oa(ws(e)))}function Bl(t,e){if(null==t)return{};var i=g(_s(t),function(t){return[t]});return e=ws(e),Xn(t,i,function(t,i){return e(t,i[0])})}function Yl(t,e,i){e=Cr(e,t);var n=-1,r=e.length;for(r||(r=1,t=rt);++n<r;){var s=null==t?rt:t[Js(e[n])];s===rt&&(n=r,s=i),t=el(s)?s.call(t):s}return t}function Vl(t,e,i){return null==t?t:sr(t,e,i)}function Kl(t,e,i,n){return n="function"==typeof n?n:rt,null==t?t:sr(t,e,i,n)}function Xl(t,e,i){var n=md(t),r=n||_d(t)||Cd(t);if(e=ws(e,4),null==i){var s=t&&t.constructor;i=r?n?new s:[]:rl(t)&&el(s)?ph(Sc(t)):{}}return(r?u:pn)(t,function(t,n,r){return e(i,t,n,r)}),i}function Gl(t,e){return null==t||gr(t,e)}function Zl(t,e,i){return null==t?t:mr(t,e,xr(i))}function Jl(t,e,i,n){return n="function"==typeof n?n:rt,null==t?t:mr(t,e,xr(i),n)}function Ql(t){return null==t?[]:j(t,Fl(t))}function tu(t){return null==t?[]:j(t,zl(t))}function eu(t,e,i){return i===rt&&(i=e,e=rt),i!==rt&&(i=kl(i),i=i===i?i:0),e!==rt&&(e=kl(e),e=e===e?e:0),en(kl(t),e,i)}function iu(t,e,i){return e=wl(e),i===rt?(i=e,e=0):i=wl(i),t=kl(t),xn(t,e,i)}function nu(t,e,i){if(i&&"boolean"!=typeof i&&Ms(t,e,i)&&(e=i=rt),i===rt&&("boolean"==typeof e?(i=e,e=rt):"boolean"==typeof t&&(i=t,t=rt)),t===rt&&e===rt?(t=0,e=1):(t=wl(t),e===rt?(e=t,t=0):e=wl(e)),t>e){var n=t;t=e,e=n}if(i||t%1||e%1){var r=Xc();return Yc(t+r*(e-t+Ai("1e-"+((r+"").length-1))),e)}return Qn(t,e)}function ru(t){return Xd(Sl(t).toLowerCase())}function su(t){return(t=Sl(t))&&t.replace(Xe,Bi).replace(gi,"")}function ou(t,e,i){t=Sl(t),e=pr(e);var n=t.length;i=i===rt?n:en(xl(i),0,n);var r=i;return(i-=e.length)>=0&&t.slice(i,r)==e}function au(t){return t=Sl(t),t&&ke.test(t)?t.replace(xe,Yi):t}function lu(t){return t=Sl(t),t&&Pe.test(t)?t.replace(Oe,"\\$&"):t}function uu(t,e,i){t=Sl(t),e=xl(e);var n=e?Q(t):0;if(!e||n>=e)return t;var r=(e-n)/2;return is(Lc(r),i)+t+is(Rc(r),i)}function cu(t,e,i){t=Sl(t),e=xl(e);var n=e?Q(t):0;return e&&n<e?t+is(e-n,i):t}function hu(t,e,i){t=Sl(t),e=xl(e);var n=e?Q(t):0;return e&&n<e?is(e-n,i)+t:t}function du(t,e,i){return i||null==e?e=0:e&&(e=+e),Kc(Sl(t).replace(Me,""),e||0)}function pu(t,e,i){return e=(i?Ms(t,e,i):e===rt)?1:xl(e),er(Sl(t),e)}function fu(){var t=arguments,e=Sl(t[0]);return t.length<3?e:e.replace(t[1],t[2])}function gu(t,e,i){return i&&"number"!=typeof i&&Ms(t,e,i)&&(e=i=rt),(i=i===rt?jt:i>>>0)?(t=Sl(t),t&&("string"==typeof e||null!=e&&!wd(e))&&!(e=pr(e))&&q(t)?kr(tt(t),0,i):t.split(e,i)):[]}function mu(t,e,i){return t=Sl(t),i=null==i?0:en(xl(i),0,t.length),e=pr(e),t.slice(i,i+e.length)==e}function vu(t,e,n){var r=i.templateSettings;n&&Ms(t,e,n)&&(e=rt),t=Sl(t),e=Ad({},e,r,cs);var s,o,a=Ad({},e.imports,r.imports,cs),l=Fl(a),u=j(a,l),c=0,h=e.interpolate||Ge,d="__p += '",p=lc((e.escape||Ge).source+"|"+h.source+"|"+(h===Se?We:Ge).source+"|"+(e.evaluate||Ge).source+"|$","g"),f="//# sourceURL="+("sourceURL"in e?e.sourceURL:"lodash.templateSources["+ ++wi+"]")+"\n";t.replace(p,function(e,i,n,r,a,l){return n||(n=r),d+=t.slice(c,l).replace(Ze,z),i&&(s=!0,d+="' +\n__e("+i+") +\n'"),a&&(o=!0,d+="';\n"+a+";\n__p += '"),n&&(d+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),c=l+e.length,e}),d+="';\n";var g=e.variable;g||(d="with (obj) {\n"+d+"\n}\n"),d=(o?d.replace(_e,""):d).replace(ye,"$1").replace(be,"$1;"),d="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(s?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+d+"return __p\n}";var m=Gd(function(){return sc(l,f+"return "+d).apply(rt,u)});if(m.source=d,Qa(m))throw m;return m}function _u(t){return Sl(t).toLowerCase()}function yu(t){return Sl(t).toUpperCase()}function bu(t,e,i){if((t=Sl(t))&&(i||e===rt))return t.replace(Ne,"");if(!t||!(e=pr(e)))return t;var n=tt(t),r=tt(e);return kr(n,R(n,r),L(n,r)+1).join("")}function wu(t,e,i){if((t=Sl(t))&&(i||e===rt))return t.replace(je,"");if(!t||!(e=pr(e)))return t;var n=tt(t);return kr(n,0,L(n,tt(e))+1).join("")}function xu(t,e,i){if((t=Sl(t))&&(i||e===rt))return t.replace(Me,"");if(!t||!(e=pr(e)))return t;var n=tt(t);return kr(n,R(n,tt(e))).join("")}function Cu(t,e){var i=Dt,n=St;if(rl(e)){var r="separator"in e?e.separator:r;i="length"in e?xl(e.length):i,n="omission"in e?pr(e.omission):n}t=Sl(t);var s=t.length;if(q(t)){var o=tt(t);s=o.length}if(i>=s)return t;var a=i-Q(n);if(a<1)return n;var l=o?kr(o,0,a).join(""):t.slice(0,a);if(r===rt)return l+n;if(o&&(a+=l.length-a),wd(r)){if(t.slice(a).search(r)){var u,c=l;for(r.global||(r=lc(r.source,Sl(qe.exec(r))+"g")),r.lastIndex=0;u=r.exec(c);)var h=u.index;l=l.slice(0,h===rt?a:h)}}else if(t.indexOf(pr(r),a)!=a){var d=l.lastIndexOf(r);d>-1&&(l=l.slice(0,d))}return l+n}function ku(t){return t=Sl(t),t&&Ce.test(t)?t.replace(we,Vi):t}function Tu(t,e,i){return t=Sl(t),e=i?rt:e,e===rt?U(t)?nt(t):w(t):t.match(e)||[]}function Du(t){var e=null==t?0:t.length,i=ws();return t=e?g(t,function(t){if("function"!=typeof t[1])throw new cc(at);return[i(t[0]),t[1]]}):[],ir(function(i){for(var n=-1;++n<e;){var r=t[n];if(a(r[0],this,i))return a(r[1],this,i)}})}function Su(t){return rn(nn(t,ht))}function Au(t){return function(){return t}}function Eu(t,e){return null==t||t!==t?e:t}function Iu(t){return t}function $u(t){return Hn("function"==typeof t?t:nn(t,ht))}function Ou(t){return Wn(nn(t,ht))}function Pu(t,e){return qn(t,nn(e,ht))}function Nu(t,e,i){var n=Fl(e),r=gn(e,n);null!=i||rl(e)&&(r.length||!n.length)||(i=e,e=t,t=this,r=gn(e,Fl(e)));var s=!(rl(i)&&"chain"in i&&!i.chain),o=el(t);return u(r,function(i){var n=e[i];t[i]=n,o&&(t.prototype[i]=function(){var e=this.__chain__;if(s||e){var i=t(this.__wrapped__);return(i.__actions__=Hr(this.__actions__)).push({func:n,args:arguments,thisArg:t}),i.__chain__=e,i}return n.apply(t,m([this.value()],arguments))})}),t}function Mu(){return Oi._===this&&(Oi._=wc),this}function ju(){}function Hu(t){return t=xl(t),ir(function(e){return Yn(e,t)})}function Ru(t){return js(t)?A(Js(t)):Gn(t)}function Lu(t){return function(e){return null==t?rt:mn(t,e)}}function Fu(){return[]}function zu(){return!1}function Wu(){return{}}function qu(){return""}function Uu(){return!0}function Bu(t,e){if((t=xl(t))<1||t>Pt)return[];var i=jt,n=Yc(t,jt);e=ws(e),t-=jt;for(var r=P(n,e);++i<t;)e(i);return r}function Yu(t){return md(t)?g(t,Js):ml(t)?[t]:Hr($h(Sl(t)))}function Vu(t){var e=++vc;return Sl(t)+e}function Ku(t){return t&&t.length?un(t,Iu,yn):rt}function Xu(t,e){return t&&t.length?un(t,ws(e,2),yn):rt}function Gu(t){return S(t,Iu)}function Zu(t,e){return S(t,ws(e,2))}function Ju(t){return t&&t.length?un(t,Iu,Fn):rt}function Qu(t,e){return t&&t.length?un(t,ws(e,2),Fn):rt}function tc(t){return t&&t.length?O(t,Iu):0}function ec(t,e){return t&&t.length?O(t,ws(e,2)):0}e=null==e?Oi:Ki.defaults(Oi.Object(),e,Ki.pick(Oi,bi));var ic=e.Array,nc=e.Date,rc=e.Error,sc=e.Function,oc=e.Math,ac=e.Object,lc=e.RegExp,uc=e.String,cc=e.TypeError,hc=ic.prototype,dc=sc.prototype,pc=ac.prototype,fc=e["__core-js_shared__"],gc=dc.toString,mc=pc.hasOwnProperty,vc=0,_c=function(){var t=/[^.]+$/.exec(fc&&fc.keys&&fc.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),yc=pc.toString,bc=gc.call(ac),wc=Oi._,xc=lc("^"+gc.call(mc).replace(Oe,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Cc=Mi?e.Buffer:rt,kc=e.Symbol,Tc=e.Uint8Array,Dc=Cc?Cc.allocUnsafe:rt,Sc=V(ac.getPrototypeOf,ac),Ac=ac.create,Ec=pc.propertyIsEnumerable,Ic=hc.splice,$c=kc?kc.isConcatSpreadable:rt,Oc=kc?kc.iterator:rt,Pc=kc?kc.toStringTag:rt,Nc=function(){try{var t=ks(ac,"defineProperty");return t({},"",{}),t}catch(t){}}(),Mc=e.clearTimeout!==Oi.clearTimeout&&e.clearTimeout,jc=nc&&nc.now!==Oi.Date.now&&nc.now,Hc=e.setTimeout!==Oi.setTimeout&&e.setTimeout,Rc=oc.ceil,Lc=oc.floor,Fc=ac.getOwnPropertySymbols,zc=Cc?Cc.isBuffer:rt,Wc=e.isFinite,qc=hc.join,Uc=V(ac.keys,ac),Bc=oc.max,Yc=oc.min,Vc=nc.now,Kc=e.parseInt,Xc=oc.random,Gc=hc.reverse,Zc=ks(e,"DataView"),Jc=ks(e,"Map"),Qc=ks(e,"Promise"),th=ks(e,"Set"),eh=ks(e,"WeakMap"),ih=ks(ac,"create"),nh=eh&&new eh,rh={},sh=Qs(Zc),oh=Qs(Jc),ah=Qs(Qc),lh=Qs(th),uh=Qs(eh),ch=kc?kc.prototype:rt,hh=ch?ch.valueOf:rt,dh=ch?ch.toString:rt,ph=function(){function t(){}return function(e){if(!rl(e))return{};if(Ac)return Ac(e);t.prototype=e;var i=new t;return t.prototype=rt,i}}();i.templateSettings={escape:Te,evaluate:De,interpolate:Se,variable:"",imports:{_:i}},i.prototype=n.prototype,i.prototype.constructor=i,r.prototype=ph(n.prototype),r.prototype.constructor=r,b.prototype=ph(n.prototype),b.prototype.constructor=b,it.prototype.clear=Fe,it.prototype.delete=Je,it.prototype.get=Qe,it.prototype.has=ti,it.prototype.set=ei,ii.prototype.clear=ni,ii.prototype.delete=ri,ii.prototype.get=si,ii.prototype.has=oi,ii.prototype.set=ai,li.prototype.clear=ui,li.prototype.delete=ci,li.prototype.get=hi,li.prototype.has=di,li.prototype.set=pi,mi.prototype.add=mi.prototype.push=vi,mi.prototype.has=_i,yi.prototype.clear=ki,yi.prototype.delete=Ti,yi.prototype.get=Di,yi.prototype.has=Si,yi.prototype.set=Ii;var fh=qr(pn),gh=qr(fn,!0),mh=Ur(),vh=Ur(!0),_h=nh?function(t,e){return nh.set(t,e),t}:Iu,yh=Nc?function(t,e){return Nc(t,"toString",{configurable:!0,enumerable:!1,value:Au(e),writable:!0})}:Iu,bh=ir,wh=Mc||function(t){return Oi.clearTimeout(t)},xh=th&&1/X(new th([,-0]))[1]==Ot?function(t){return new th(t)}:ju,Ch=nh?function(t){return nh.get(t)}:ju,kh=Fc?function(t){return null==t?[]:(t=ac(t),d(Fc(t),function(e){return Ec.call(t,e)}))}:Fu,Th=Fc?function(t){for(var e=[];t;)m(e,kh(t)),t=Sc(t);return e}:Fu,Dh=_n;(Zc&&Dh(new Zc(new ArrayBuffer(1)))!=le||Jc&&Dh(new Jc)!=Xt||Qc&&"[object Promise]"!=Dh(Qc.resolve())||th&&Dh(new th)!=ee||eh&&Dh(new eh)!=se)&&(Dh=function(t){var e=_n(t),i=e==Jt?t.constructor:rt,n=i?Qs(i):"";if(n)switch(n){case sh:return le;case oh:return Xt;case ah:return"[object Promise]";case lh:return ee;case uh:return se}return e});var Sh=fc?el:zu,Ah=Gs(_h),Eh=Hc||function(t,e){return Oi.setTimeout(t,e)},Ih=Gs(yh),$h=function(t){var e=$a(t,function(t){return i.size===ut&&i.clear(),t}),i=e.cache;return e}(function(t){var e=[];return Ie.test(t)&&e.push(""),t.replace($e,function(t,i,n,r){e.push(n?r.replace(ze,"$1"):i||t)}),e}),Oh=ir(function(t,e){return Va(t)?an(t,dn(e,1,Va,!0)):[]}),Ph=ir(function(t,e){var i=wo(e);return Va(i)&&(i=rt),Va(t)?an(t,dn(e,1,Va,!0),ws(i,2)):[]}),Nh=ir(function(t,e){var i=wo(e);return Va(i)&&(i=rt),Va(t)?an(t,dn(e,1,Va,!0),rt,i):[]}),Mh=ir(function(t){var e=g(t,wr);return e.length&&e[0]===t[0]?Cn(e):[]}),jh=ir(function(t){var e=wo(t),i=g(t,wr);return e===wo(i)?e=rt:i.pop(),i.length&&i[0]===t[0]?Cn(i,ws(e,2)):[]}),Hh=ir(function(t){var e=wo(t),i=g(t,wr);return e="function"==typeof e?e:rt,e&&i.pop(),i.length&&i[0]===t[0]?Cn(i,rt,e):[]}),Rh=ir(ko),Lh=ms(function(t,e){var i=null==t?0:t.length,n=tn(t,e);return Jn(t,g(e,function(t){return Ns(t,i)?+t:t}).sort(Pr)),n}),Fh=ir(function(t){return fr(dn(t,1,Va,!0))}),zh=ir(function(t){var e=wo(t);return Va(e)&&(e=rt),fr(dn(t,1,Va,!0),ws(e,2))}),Wh=ir(function(t){var e=wo(t);return e="function"==typeof e?e:rt,fr(dn(t,1,Va,!0),rt,e)}),qh=ir(function(t,e){return Va(t)?an(t,e):[]}),Uh=ir(function(t){return yr(d(t,Va))}),Bh=ir(function(t){var e=wo(t);return Va(e)&&(e=rt),yr(d(t,Va),ws(e,2))}),Yh=ir(function(t){var e=wo(t);return e="function"==typeof e?e:rt,yr(d(t,Va),rt,e)}),Vh=ir(Yo),Kh=ir(function(t){var e=t.length,i=e>1?t[e-1]:rt;return i="function"==typeof i?(t.pop(),i):rt,Vo(t,i)}),Xh=ms(function(t){var e=t.length,i=e?t[0]:0,n=this.__wrapped__,s=function(e){return tn(e,t)};return!(e>1||this.__actions__.length)&&n instanceof b&&Ns(i)?(n=n.slice(i,+i+(e?1:0)),n.__actions__.push({func:Jo,args:[s],thisArg:rt}),new r(n,this.__chain__).thru(function(t){return e&&!t.length&&t.push(rt),t})):this.thru(s)}),Gh=zr(function(t,e,i){mc.call(t,i)?++t[i]:Qi(t,i,1)}),Zh=Gr(co),Jh=Gr(ho),Qh=zr(function(t,e,i){mc.call(t,i)?t[i].push(e):Qi(t,i,[e])}),td=ir(function(t,e,i){var n=-1,r="function"==typeof e,s=Ya(t)?ic(t.length):[];return fh(t,function(t){s[++n]=r?a(e,t,i):Tn(t,e,i)}),s}),ed=zr(function(t,e,i){Qi(t,i,e)}),id=zr(function(t,e,i){t[i?0:1].push(e)},function(){return[[],[]]}),nd=ir(function(t,e){if(null==t)return[];var i=e.length;return i>1&&Ms(t,e[0],e[1])?e=[]:i>2&&Ms(e[0],e[1],e[2])&&(e=[e[0]]),Vn(t,dn(e,1),[])}),rd=jc||function(){return Oi.Date.now()},sd=ir(function(t,e,i){var n=mt;if(i.length){var r=K(i,bs(sd));n|=wt}return us(t,n,e,i,r)}),od=ir(function(t,e,i){var n=mt|vt;if(i.length){var r=K(i,bs(od));n|=wt}return us(e,n,t,i,r)}),ad=ir(function(t,e){return on(t,1,e)}),ld=ir(function(t,e,i){return on(t,kl(e)||0,i)});$a.Cache=li;var ud=bh(function(t,e){e=1==e.length&&md(e[0])?g(e[0],M(ws())):g(dn(e,1),M(ws()));var i=e.length;return ir(function(n){for(var r=-1,s=Yc(n.length,i);++r<s;)n[r]=e[r].call(this,n[r]);return a(t,this,n)})}),cd=ir(function(t,e){var i=K(e,bs(cd));return us(t,wt,rt,e,i)}),hd=ir(function(t,e){var i=K(e,bs(hd));return us(t,xt,rt,e,i)}),dd=ms(function(t,e){return us(t,kt,rt,rt,rt,e)}),pd=ss(yn),fd=ss(function(t,e){return t>=e}),gd=Dn(function(){return arguments}())?Dn:function(t){return sl(t)&&mc.call(t,"callee")&&!Ec.call(t,"callee")},md=ic.isArray,vd=Ri?M(Ri):Sn,_d=zc||zu,yd=Li?M(Li):An,bd=Fi?M(Fi):$n,wd=zi?M(zi):Nn,xd=Wi?M(Wi):Mn,Cd=qi?M(qi):jn,kd=ss(Fn),Td=ss(function(t,e){return t<=e}),Dd=Wr(function(t,e){if(Fs(e)||Ya(e))return void Rr(e,Fl(e),t);for(var i in e)mc.call(e,i)&&Ui(t,i,e[i])}),Sd=Wr(function(t,e){Rr(e,zl(e),t)}),Ad=Wr(function(t,e,i,n){Rr(e,zl(e),t,n)}),Ed=Wr(function(t,e,i,n){Rr(e,Fl(e),t,n)}),Id=ms(tn),$d=ir(function(t){return t.push(rt,cs),a(Ad,rt,t)}),Od=ir(function(t){return t.push(rt,hs),a(Hd,rt,t)}),Pd=Qr(function(t,e,i){t[e]=i},Au(Iu)),Nd=Qr(function(t,e,i){mc.call(t,e)?t[e].push(i):t[e]=[i]},ws),Md=ir(Tn),jd=Wr(function(t,e,i){Un(t,e,i)}),Hd=Wr(function(t,e,i,n){Un(t,e,i,n)}),Rd=ms(function(t,e){var i={};if(null==t)return i;var n=!1;e=g(e,function(e){return e=Cr(e,t),n||(n=e.length>1),e}),Rr(t,_s(t),i),n&&(i=nn(i,ht|dt|pt,ds));for(var r=e.length;r--;)gr(i,e[r]);return i}),Ld=ms(function(t,e){return null==t?{}:Kn(t,e)}),Fd=ls(Fl),zd=ls(zl),Wd=Vr(function(t,e,i){return e=e.toLowerCase(),t+(i?ru(e):e)}),qd=Vr(function(t,e,i){return t+(i?"-":"")+e.toLowerCase()}),Ud=Vr(function(t,e,i){return t+(i?" ":"")+e.toLowerCase()}),Bd=Yr("toLowerCase"),Yd=Vr(function(t,e,i){return t+(i?"_":"")+e.toLowerCase()}),Vd=Vr(function(t,e,i){return t+(i?" ":"")+Xd(e)}),Kd=Vr(function(t,e,i){return t+(i?" ":"")+e.toUpperCase()}),Xd=Yr("toUpperCase"),Gd=ir(function(t,e){try{return a(t,rt,e)}catch(t){return Qa(t)?t:new rc(t)}}),Zd=ms(function(t,e){return u(e,function(e){e=Js(e),Qi(t,e,sd(t[e],t))}),t}),Jd=Zr(),Qd=Zr(!0),tp=ir(function(t,e){return function(i){return Tn(i,t,e)}}),ep=ir(function(t,e){return function(i){return Tn(t,i,e)}}),ip=es(g),np=es(h),rp=es(y),sp=rs(),op=rs(!0),ap=ts(function(t,e){return t+e},0),lp=as("ceil"),up=ts(function(t,e){return t/e},1),cp=as("floor"),hp=ts(function(t,e){return t*e},1),dp=as("round"),pp=ts(function(t,e){return t-e},0);return i.after=ka,i.ary=Ta,i.assign=Dd,i.assignIn=Sd,i.assignInWith=Ad,i.assignWith=Ed,i.at=Id,i.before=Da,i.bind=sd,i.bindAll=Zd,i.bindKey=od,i.castArray=La,i.chain=Go,i.chunk=io,i.compact=no,i.concat=ro,i.cond=Du,i.conforms=Su,i.constant=Au,i.countBy=Gh,i.create=Al,i.curry=Sa,i.curryRight=Aa,i.debounce=Ea,i.defaults=$d,i.defaultsDeep=Od,i.defer=ad,i.delay=ld,i.difference=Oh,i.differenceBy=Ph,i.differenceWith=Nh,i.drop=so,i.dropRight=oo,i.dropRightWhile=ao,i.dropWhile=lo,i.fill=uo,i.filter=aa,i.flatMap=la,i.flatMapDeep=ua,i.flatMapDepth=ca,i.flatten=po,i.flattenDeep=fo,i.flattenDepth=go,i.flip=Ia,i.flow=Jd,i.flowRight=Qd,i.fromPairs=mo,i.functions=Ml,i.functionsIn=jl,i.groupBy=Qh,i.initial=yo,i.intersection=Mh,i.intersectionBy=jh,i.intersectionWith=Hh,i.invert=Pd,i.invertBy=Nd,i.invokeMap=td,i.iteratee=$u,i.keyBy=ed,i.keys=Fl,i.keysIn=zl,i.map=fa,i.mapKeys=Wl,i.mapValues=ql,i.matches=Ou,i.matchesProperty=Pu,i.memoize=$a,i.merge=jd,i.mergeWith=Hd,i.method=tp,i.methodOf=ep,i.mixin=Nu,i.negate=Oa,i.nthArg=Hu,i.omit=Rd,i.omitBy=Ul,i.once=Pa,i.orderBy=ga,i.over=ip,i.overArgs=ud,i.overEvery=np,i.overSome=rp,i.partial=cd,i.partialRight=hd,i.partition=id,i.pick=Ld,i.pickBy=Bl,i.property=Ru,i.propertyOf=Lu,i.pull=Rh,i.pullAll=ko,i.pullAllBy=To,i.pullAllWith=Do,i.pullAt=Lh,i.range=sp,i.rangeRight=op,i.rearg=dd,i.reject=_a,i.remove=So,i.rest=Na,i.reverse=Ao,i.sampleSize=ba,i.set=Vl,i.setWith=Kl,i.shuffle=wa,i.slice=Eo,i.sortBy=nd,i.sortedUniq=jo,i.sortedUniqBy=Ho,i.split=gu,i.spread=Ma,i.tail=Ro,i.take=Lo,i.takeRight=Fo,i.takeRightWhile=zo,i.takeWhile=Wo,i.tap=Zo,i.throttle=ja,i.thru=Jo,i.toArray=bl,i.toPairs=Fd,i.toPairsIn=zd,i.toPath=Yu,i.toPlainObject=Tl,i.transform=Xl,i.unary=Ha,i.union=Fh,i.unionBy=zh,i.unionWith=Wh,i.uniq=qo,i.uniqBy=Uo,i.uniqWith=Bo,i.unset=Gl,i.unzip=Yo,i.unzipWith=Vo,i.update=Zl,i.updateWith=Jl,i.values=Ql,i.valuesIn=tu,i.without=qh,i.words=Tu,i.wrap=Ra,i.xor=Uh,i.xorBy=Bh,i.xorWith=Yh,i.zip=Vh,i.zipObject=Ko,i.zipObjectDeep=Xo,i.zipWith=Kh,i.entries=Fd,i.entriesIn=zd,i.extend=Sd,i.extendWith=Ad,Nu(i,i),i.add=ap,i.attempt=Gd,i.camelCase=Wd,i.capitalize=ru,i.ceil=lp,i.clamp=eu,i.clone=Fa,i.cloneDeep=Wa,i.cloneDeepWith=qa,i.cloneWith=za,i.conformsTo=Ua,i.deburr=su,i.defaultTo=Eu,i.divide=up,i.endsWith=ou,i.eq=Ba,i.escape=au,i.escapeRegExp=lu,i.every=oa,i.find=Zh,i.findIndex=co,i.findKey=El,i.findLast=Jh,i.findLastIndex=ho,i.findLastKey=Il,i.floor=cp,i.forEach=ha,i.forEachRight=da,i.forIn=$l,i.forInRight=Ol,i.forOwn=Pl,i.forOwnRight=Nl,i.get=Hl,i.gt=pd,i.gte=fd,i.has=Rl,i.hasIn=Ll,i.head=vo,i.identity=Iu,i.includes=pa,i.indexOf=_o,i.inRange=iu,i.invoke=Md,i.isArguments=gd,i.isArray=md,i.isArrayBuffer=vd,i.isArrayLike=Ya,i.isArrayLikeObject=Va,i.isBoolean=Ka,i.isBuffer=_d,i.isDate=yd,i.isElement=Xa,i.isEmpty=Ga,i.isEqual=Za,i.isEqualWith=Ja,i.isError=Qa,i.isFinite=tl,i.isFunction=el,i.isInteger=il,i.isLength=nl,i.isMap=bd,i.isMatch=ol,i.isMatchWith=al,i.isNaN=ll,i.isNative=ul,i.isNil=hl,i.isNull=cl,i.isNumber=dl,i.isObject=rl,i.isObjectLike=sl,i.isPlainObject=pl,i.isRegExp=wd,i.isSafeInteger=fl,i.isSet=xd,i.isString=gl,i.isSymbol=ml,i.isTypedArray=Cd,i.isUndefined=vl,i.isWeakMap=_l,i.isWeakSet=yl,i.join=bo,i.kebabCase=qd,i.last=wo,i.lastIndexOf=xo,i.lowerCase=Ud,i.lowerFirst=Bd,i.lt=kd,i.lte=Td,i.max=Ku,i.maxBy=Xu,i.mean=Gu,i.meanBy=Zu,i.min=Ju,i.minBy=Qu,i.stubArray=Fu,i.stubFalse=zu,i.stubObject=Wu,i.stubString=qu,i.stubTrue=Uu,i.multiply=hp,i.nth=Co,i.noConflict=Mu,i.noop=ju,i.now=rd,i.pad=uu,i.padEnd=cu,i.padStart=hu,i.parseInt=du,i.random=nu,i.reduce=ma,i.reduceRight=va,i.repeat=pu,i.replace=fu,i.result=Yl,i.round=dp,i.runInContext=t,i.sample=ya,i.size=xa,i.snakeCase=Yd,i.some=Ca,i.sortedIndex=Io,i.sortedIndexBy=$o,i.sortedIndexOf=Oo,i.sortedLastIndex=Po,i.sortedLastIndexBy=No,i.sortedLastIndexOf=Mo,i.startCase=Vd,i.startsWith=mu,i.subtract=pp,i.sum=tc,i.sumBy=ec,i.template=vu,i.times=Bu,i.toFinite=wl,i.toInteger=xl,i.toLength=Cl,i.toLower=_u,i.toNumber=kl,i.toSafeInteger=Dl,i.toString=Sl,i.toUpper=yu,i.trim=bu,i.trimEnd=wu,i.trimStart=xu,i.truncate=Cu,i.unescape=ku,i.uniqueId=Vu,i.upperCase=Kd,i.upperFirst=Xd,i.each=ha,i.eachRight=da,i.first=vo,Nu(i,function(){var t={};return pn(i,function(e,n){mc.call(i.prototype,n)||(t[n]=e)}),t}(),{chain:!1}),i.VERSION="4.17.4",u(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){i[t].placeholder=i}),u(["drop","take"],function(t,e){b.prototype[t]=function(i){i=i===rt?1:Bc(xl(i),0);var n=this.__filtered__&&!e?new b(this):this.clone();return n.__filtered__?n.__takeCount__=Yc(i,n.__takeCount__):n.__views__.push({size:Yc(i,jt),type:t+(n.__dir__<0?"Right":"")}),n},b.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}}),u(["filter","map","takeWhile"],function(t,e){var i=e+1,n=i==It||3==i;b.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:ws(t,3),type:i}),e.__filtered__=e.__filtered__||n,e}}),u(["head","last"],function(t,e){var i="take"+(e?"Right":"");b.prototype[t]=function(){return this[i](1).value()[0]}}),u(["initial","tail"],function(t,e){var i="drop"+(e?"":"Right");b.prototype[t]=function(){return this.__filtered__?new b(this):this[i](1)}}),b.prototype.compact=function(){return this.filter(Iu)},b.prototype.find=function(t){return this.filter(t).head()},b.prototype.findLast=function(t){return this.reverse().find(t)},b.prototype.invokeMap=ir(function(t,e){return"function"==typeof t?new b(this):this.map(function(i){return Tn(i,t,e)})}),b.prototype.reject=function(t){return this.filter(Oa(ws(t)))},b.prototype.slice=function(t,e){t=xl(t);var i=this;return i.__filtered__&&(t>0||e<0)?new b(i):(t<0?i=i.takeRight(-t):t&&(i=i.drop(t)),e!==rt&&(e=xl(e),i=e<0?i.dropRight(-e):i.take(e-t)),i)},b.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},b.prototype.toArray=function(){return this.take(jt)},pn(b.prototype,function(t,e){var n=/^(?:filter|find|map|reject)|While$/.test(e),s=/^(?:head|last)$/.test(e),o=i[s?"take"+("last"==e?"Right":""):e],a=s||/^find/.test(e);o&&(i.prototype[e]=function(){var e=this.__wrapped__,l=s?[1]:arguments,u=e instanceof b,c=l[0],h=u||md(e),d=function(t){var e=o.apply(i,m([t],l));return s&&p?e[0]:e};h&&n&&"function"==typeof c&&1!=c.length&&(u=h=!1);var p=this.__chain__,f=!!this.__actions__.length,g=a&&!p,v=u&&!f;if(!a&&h){e=v?e:new b(this);var _=t.apply(e,l);return _.__actions__.push({func:Jo,args:[d],thisArg:rt}),new r(_,p)}return g&&v?t.apply(this,l):(_=this.thru(d),g?s?_.value()[0]:_.value():_)})}),u(["pop","push","shift","sort","splice","unshift"],function(t){var e=hc[t],n=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",r=/^(?:pop|shift)$/.test(t);i.prototype[t]=function(){var t=arguments;if(r&&!this.__chain__){var i=this.value();return e.apply(md(i)?i:[],t)}return this[n](function(i){return e.apply(md(i)?i:[],t)})}}),pn(b.prototype,function(t,e){var n=i[e];if(n){var r=n.name+"";(rh[r]||(rh[r]=[])).push({name:e,func:n})}}),rh[Jr(rt,vt).name]=[{name:"wrapper",func:rt}],b.prototype.clone=E,b.prototype.reverse=Z,b.prototype.value=et,i.prototype.at=Xh,i.prototype.chain=Qo,i.prototype.commit=ta,i.prototype.next=ea,i.prototype.plant=na,i.prototype.reverse=ra,i.prototype.toJSON=i.prototype.valueOf=i.prototype.value=sa,i.prototype.first=i.prototype.head,Oc&&(i.prototype[Oc]=ia),i}();Oi._=Ki,(r=function(){return Ki}.call(e,i,e,n))!==rt&&(n.exports=r)}).call(this)}).call(e,i(4),i(60)(t))},function(t,e,i){var n,r,s;/*!
 * Select2 4.0.3
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
!function(o){r=[i(3)],n=o,void 0!==(s="function"==typeof n?n.apply(e,r):n)&&(t.exports=s)}(function(t){var e=function(){if(t&&t.fn&&t.fn.select2&&t.fn.select2.amd)var e=t.fn.select2.amd;var e;return function(){if(!e||!e.requirejs){e?i=e:e={};/**
 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
var t,i,n;!function(e){function r(t,e){return b.call(t,e)}function s(t,e){var i,n,r,s,o,a,l,u,c,h,d,p=e&&e.split("/"),f=_.map,g=f&&f["*"]||{};if(t&&"."===t.charAt(0))if(e){for(t=t.split("/"),o=t.length-1,_.nodeIdCompat&&x.test(t[o])&&(t[o]=t[o].replace(x,"")),t=p.slice(0,p.length-1).concat(t),c=0;c<t.length;c+=1)if("."===(d=t[c]))t.splice(c,1),c-=1;else if(".."===d){if(1===c&&(".."===t[2]||".."===t[0]))break;c>0&&(t.splice(c-1,2),c-=2)}t=t.join("/")}else 0===t.indexOf("./")&&(t=t.substring(2));if((p||g)&&f){for(i=t.split("/"),c=i.length;c>0;c-=1){if(n=i.slice(0,c).join("/"),p)for(h=p.length;h>0;h-=1)if((r=f[p.slice(0,h).join("/")])&&(r=r[n])){s=r,a=c;break}if(s)break;!l&&g&&g[n]&&(l=g[n],u=c)}!s&&l&&(s=l,a=u),s&&(i.splice(0,a,s),t=i.join("/"))}return t}function o(t,i){return function(){var n=w.call(arguments,0);return"string"!=typeof n[0]&&1===n.length&&n.push(null),p.apply(e,n.concat([t,i]))}}function a(t){return function(e){return s(e,t)}}function l(t){return function(e){m[t]=e}}function u(t){if(r(v,t)){var i=v[t];delete v[t],y[t]=!0,d.apply(e,i)}if(!r(m,t)&&!r(y,t))throw new Error("No "+t);return m[t]}function c(t){var e,i=t?t.indexOf("!"):-1;return i>-1&&(e=t.substring(0,i),t=t.substring(i+1,t.length)),[e,t]}function h(t){return function(){return _&&_.config&&_.config[t]||{}}}var d,p,f,g,m={},v={},_={},y={},b=Object.prototype.hasOwnProperty,w=[].slice,x=/\.js$/;f=function(t,e){var i,n=c(t),r=n[0];return t=n[1],r&&(r=s(r,e),i=u(r)),r?t=i&&i.normalize?i.normalize(t,a(e)):s(t,e):(t=s(t,e),n=c(t),r=n[0],t=n[1],r&&(i=u(r))),{f:r?r+"!"+t:t,n:t,pr:r,p:i}},g={require:function(t){return o(t)},exports:function(t){var e=m[t];return void 0!==e?e:m[t]={}},module:function(t){return{id:t,uri:"",exports:m[t],config:h(t)}}},d=function(t,i,n,s){var a,c,h,d,p,_,b=[],w=typeof n;if(s=s||t,"undefined"===w||"function"===w){for(i=!i.length&&n.length?["require","exports","module"]:i,p=0;p<i.length;p+=1)if(d=f(i[p],s),"require"===(c=d.f))b[p]=g.require(t);else if("exports"===c)b[p]=g.exports(t),_=!0;else if("module"===c)a=b[p]=g.module(t);else if(r(m,c)||r(v,c)||r(y,c))b[p]=u(c);else{if(!d.p)throw new Error(t+" missing "+c);d.p.load(d.n,o(s,!0),l(c),{}),b[p]=m[c]}h=n?n.apply(m[t],b):void 0,t&&(a&&a.exports!==e&&a.exports!==m[t]?m[t]=a.exports:h===e&&_||(m[t]=h))}else t&&(m[t]=n)},t=i=p=function(t,i,n,r,s){if("string"==typeof t)return g[t]?g[t](i):u(f(t,i).f);if(!t.splice){if(_=t,_.deps&&p(_.deps,_.callback),!i)return;i.splice?(t=i,i=n,n=null):t=e}return i=i||function(){},"function"==typeof n&&(n=r,r=s),r?d(e,t,i,n):setTimeout(function(){d(e,t,i,n)},4),p},p.config=function(t){return p(t)},t._defined=m,n=function(t,e,i){if("string"!=typeof t)throw new Error("See almond README: incorrect module build, no module name");e.splice||(i=e,e=[]),r(m,t)||r(v,t)||(v[t]=[t,e,i])},n.amd={jQuery:!0}}(),e.requirejs=t,e.require=i,e.define=n}}(),e.define("almond",function(){}),e.define("jquery",[],function(){var e=t||$;return null==e&&console&&console.error,e}),e.define("select2/utils",["jquery"],function(t){function e(t){var e=t.prototype,i=[];for(var n in e){"function"==typeof e[n]&&("constructor"!==n&&i.push(n))}return i}var i={};i.Extend=function(t,e){function i(){this.constructor=t}var n={}.hasOwnProperty;for(var r in e)n.call(e,r)&&(t[r]=e[r]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},i.Decorate=function(t,i){function n(){var e=Array.prototype.unshift,n=i.prototype.constructor.length,r=t.prototype.constructor;n>0&&(e.call(arguments,t.prototype.constructor),r=i.prototype.constructor),r.apply(this,arguments)}function r(){this.constructor=n}var s=e(i),o=e(t);i.displayName=t.displayName,n.prototype=new r;for(var a=0;a<o.length;a++){var l=o[a];n.prototype[l]=t.prototype[l]}for(var u=0;u<s.length;u++){var c=s[u];n.prototype[c]=function(t){var e=function(){};t in n.prototype&&(e=n.prototype[t]);var r=i.prototype[t];return function(){return Array.prototype.unshift.call(arguments,e),r.apply(this,arguments)}}(c)}return n};var n=function(){this.listeners={}};return n.prototype.on=function(t,e){this.listeners=this.listeners||{},t in this.listeners?this.listeners[t].push(e):this.listeners[t]=[e]},n.prototype.trigger=function(t){var e=Array.prototype.slice,i=e.call(arguments,1);this.listeners=this.listeners||{},null==i&&(i=[]),0===i.length&&i.push({}),i[0]._type=t,t in this.listeners&&this.invoke(this.listeners[t],e.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},n.prototype.invoke=function(t,e){for(var i=0,n=t.length;i<n;i++)t[i].apply(this,e)},i.Observable=n,i.generateChars=function(t){for(var e="",i=0;i<t;i++){e+=Math.floor(36*Math.random()).toString(36)}return e},i.bind=function(t,e){return function(){t.apply(e,arguments)}},i._convertData=function(t){for(var e in t){var i=e.split("-"),n=t;if(1!==i.length){for(var r=0;r<i.length;r++){var s=i[r];s=s.substring(0,1).toLowerCase()+s.substring(1),s in n||(n[s]={}),r==i.length-1&&(n[s]=t[e]),n=n[s]}delete t[e]}}return t},i.hasScroll=function(e,i){var n=t(i),r=i.style.overflowX,s=i.style.overflowY;return(r!==s||"hidden"!==s&&"visible"!==s)&&("scroll"===r||"scroll"===s||(n.innerHeight()<i.scrollHeight||n.innerWidth()<i.scrollWidth))},i.escapeMarkup=function(t){var e={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof t?t:String(t).replace(/[&<>"'\/\\]/g,function(t){return e[t]})},i.appendMany=function(e,i){if("1.7"===t.fn.jquery.substr(0,3)){var n=t();t.map(i,function(t){n=n.add(t)}),i=n}e.append(i)},i}),e.define("select2/results",["jquery","./utils"],function(t,e){function i(t,e,n){this.$element=t,this.data=n,this.options=e,i.__super__.constructor.call(this)}return e.Extend(i,e.Observable),i.prototype.render=function(){var e=t('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&e.attr("aria-multiselectable","true"),this.$results=e,e},i.prototype.clear=function(){this.$results.empty()},i.prototype.displayMessage=function(e){var i=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var n=t('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),r=this.options.get("translations").get(e.message);n.append(i(r(e.args))),n[0].className+=" select2-results__message",this.$results.append(n)},i.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},i.prototype.append=function(t){this.hideLoading();var e=[];if(null==t.results||0===t.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));t.results=this.sort(t.results);for(var i=0;i<t.results.length;i++){var n=t.results[i],r=this.option(n);e.push(r)}this.$results.append(e)},i.prototype.position=function(t,e){e.find(".select2-results").append(t)},i.prototype.sort=function(t){return this.options.get("sorter")(t)},i.prototype.highlightFirstItem=function(){var t=this.$results.find(".select2-results__option[aria-selected]"),e=t.filter("[aria-selected=true]");e.length>0?e.first().trigger("mouseenter"):t.first().trigger("mouseenter"),this.ensureHighlightVisible()},i.prototype.setClasses=function(){var e=this;this.data.current(function(i){var n=t.map(i,function(t){return t.id.toString()});e.$results.find(".select2-results__option[aria-selected]").each(function(){var e=t(this),i=t.data(this,"data"),r=""+i.id;null!=i.element&&i.element.selected||null==i.element&&t.inArray(r,n)>-1?e.attr("aria-selected","true"):e.attr("aria-selected","false")})})},i.prototype.showLoading=function(t){this.hideLoading();var e=this.options.get("translations").get("searching"),i={disabled:!0,loading:!0,text:e(t)},n=this.option(i);n.className+=" loading-results",this.$results.prepend(n)},i.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},i.prototype.option=function(e){var i=document.createElement("li");i.className="select2-results__option";var n={role:"treeitem","aria-selected":"false"};e.disabled&&(delete n["aria-selected"],n["aria-disabled"]="true"),null==e.id&&delete n["aria-selected"],null!=e._resultId&&(i.id=e._resultId),e.title&&(i.title=e.title),e.children&&(n.role="group",n["aria-label"]=e.text,delete n["aria-selected"]);for(var r in n){var s=n[r];i.setAttribute(r,s)}if(e.children){var o=t(i),a=document.createElement("strong");a.className="select2-results__group";t(a);this.template(e,a);for(var l=[],u=0;u<e.children.length;u++){var c=e.children[u],h=this.option(c);l.push(h)}var d=t("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});d.append(l),o.append(a),o.append(d)}else this.template(e,i);return t.data(i,"data",e),i},i.prototype.bind=function(e,i){var n=this,r=e.id+"-results";this.$results.attr("id",r),e.on("results:all",function(t){n.clear(),n.append(t.data),e.isOpen()&&(n.setClasses(),n.highlightFirstItem())}),e.on("results:append",function(t){n.append(t.data),e.isOpen()&&n.setClasses()}),e.on("query",function(t){n.hideMessages(),n.showLoading(t)}),e.on("select",function(){e.isOpen()&&(n.setClasses(),n.highlightFirstItem())}),e.on("unselect",function(){e.isOpen()&&(n.setClasses(),n.highlightFirstItem())}),e.on("open",function(){n.$results.attr("aria-expanded","true"),n.$results.attr("aria-hidden","false"),n.setClasses(),n.ensureHighlightVisible()}),e.on("close",function(){n.$results.attr("aria-expanded","false"),n.$results.attr("aria-hidden","true"),n.$results.removeAttr("aria-activedescendant")}),e.on("results:toggle",function(){var t=n.getHighlightedResults();0!==t.length&&t.trigger("mouseup")}),e.on("results:select",function(){var t=n.getHighlightedResults();if(0!==t.length){var e=t.data("data");"true"==t.attr("aria-selected")?n.trigger("close",{}):n.trigger("select",{data:e})}}),e.on("results:previous",function(){var t=n.getHighlightedResults(),e=n.$results.find("[aria-selected]"),i=e.index(t);if(0!==i){var r=i-1;0===t.length&&(r=0);var s=e.eq(r);s.trigger("mouseenter");var o=n.$results.offset().top,a=s.offset().top,l=n.$results.scrollTop()+(a-o);0===r?n.$results.scrollTop(0):a-o<0&&n.$results.scrollTop(l)}}),e.on("results:next",function(){var t=n.getHighlightedResults(),e=n.$results.find("[aria-selected]"),i=e.index(t),r=i+1;if(!(r>=e.length)){var s=e.eq(r);s.trigger("mouseenter");var o=n.$results.offset().top+n.$results.outerHeight(!1),a=s.offset().top+s.outerHeight(!1),l=n.$results.scrollTop()+a-o;0===r?n.$results.scrollTop(0):a>o&&n.$results.scrollTop(l)}}),e.on("results:focus",function(t){t.element.addClass("select2-results__option--highlighted")}),e.on("results:message",function(t){n.displayMessage(t)}),t.fn.mousewheel&&this.$results.on("mousewheel",function(t){var e=n.$results.scrollTop(),i=n.$results.get(0).scrollHeight-e+t.deltaY,r=t.deltaY>0&&e-t.deltaY<=0,s=t.deltaY<0&&i<=n.$results.height();r?(n.$results.scrollTop(0),t.preventDefault(),t.stopPropagation()):s&&(n.$results.scrollTop(n.$results.get(0).scrollHeight-n.$results.height()),t.preventDefault(),t.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(e){var i=t(this),r=i.data("data");if("true"===i.attr("aria-selected"))return void(n.options.get("multiple")?n.trigger("unselect",{originalEvent:e,data:r}):n.trigger("close",{}));n.trigger("select",{originalEvent:e,data:r})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(e){var i=t(this).data("data");n.getHighlightedResults().removeClass("select2-results__option--highlighted"),n.trigger("results:focus",{data:i,element:t(this)})})},i.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},i.prototype.destroy=function(){this.$results.remove()},i.prototype.ensureHighlightVisible=function(){var t=this.getHighlightedResults();if(0!==t.length){var e=this.$results.find("[aria-selected]"),i=e.index(t),n=this.$results.offset().top,r=t.offset().top,s=this.$results.scrollTop()+(r-n),o=r-n;s-=2*t.outerHeight(!1),i<=2?this.$results.scrollTop(0):(o>this.$results.outerHeight()||o<0)&&this.$results.scrollTop(s)}},i.prototype.template=function(e,i){var n=this.options.get("templateResult"),r=this.options.get("escapeMarkup"),s=n(e,i);null==s?i.style.display="none":"string"==typeof s?i.innerHTML=r(s):t(i).append(s)},i}),e.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),e.define("select2/selection/base",["jquery","../utils","../keys"],function(t,e,i){function n(t,e){this.$element=t,this.options=e,n.__super__.constructor.call(this)}return e.Extend(n,e.Observable),n.prototype.render=function(){var e=t('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),e.attr("title",this.$element.attr("title")),e.attr("tabindex",this._tabindex),this.$selection=e,e},n.prototype.bind=function(t,e){var n=this,r=(t.id,t.id+"-results");this.container=t,this.$selection.on("focus",function(t){n.trigger("focus",t)}),this.$selection.on("blur",function(t){n._handleBlur(t)}),this.$selection.on("keydown",function(t){n.trigger("keypress",t),t.which===i.SPACE&&t.preventDefault()}),t.on("results:focus",function(t){n.$selection.attr("aria-activedescendant",t.data._resultId)}),t.on("selection:update",function(t){n.update(t.data)}),t.on("open",function(){n.$selection.attr("aria-expanded","true"),n.$selection.attr("aria-owns",r),n._attachCloseHandler(t)}),t.on("close",function(){n.$selection.attr("aria-expanded","false"),n.$selection.removeAttr("aria-activedescendant"),n.$selection.removeAttr("aria-owns"),n.$selection.focus(),n._detachCloseHandler(t)}),t.on("enable",function(){n.$selection.attr("tabindex",n._tabindex)}),t.on("disable",function(){n.$selection.attr("tabindex","-1")})},n.prototype._handleBlur=function(e){var i=this;window.setTimeout(function(){document.activeElement==i.$selection[0]||t.contains(i.$selection[0],document.activeElement)||i.trigger("blur",e)},1)},n.prototype._attachCloseHandler=function(e){t(document.body).on("mousedown.select2."+e.id,function(e){var i=t(e.target),n=i.closest(".select2");t(".select2.select2-container--open").each(function(){var e=t(this);this!=n[0]&&e.data("element").select2("close")})})},n.prototype._detachCloseHandler=function(e){t(document.body).off("mousedown.select2."+e.id)},n.prototype.position=function(t,e){e.find(".selection").append(t)},n.prototype.destroy=function(){this._detachCloseHandler(this.container)},n.prototype.update=function(t){throw new Error("The `update` method must be defined in child classes.")},n}),e.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(t,e,i,n){function r(){r.__super__.constructor.apply(this,arguments)}return i.Extend(r,e),r.prototype.render=function(){var t=r.__super__.render.call(this);return t.addClass("select2-selection--single"),t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),t},r.prototype.bind=function(t,e){var i=this;r.__super__.bind.apply(this,arguments);var n=t.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",n),this.$selection.attr("aria-labelledby",n),this.$selection.on("mousedown",function(t){1===t.which&&i.trigger("toggle",{originalEvent:t})}),this.$selection.on("focus",function(t){}),this.$selection.on("blur",function(t){}),t.on("focus",function(e){t.isOpen()||i.$selection.focus()}),t.on("selection:update",function(t){i.update(t.data)})},r.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},r.prototype.display=function(t,e){var i=this.options.get("templateSelection");return this.options.get("escapeMarkup")(i(t,e))},r.prototype.selectionContainer=function(){return t("<span></span>")},r.prototype.update=function(t){if(0===t.length)return void this.clear();var e=t[0],i=this.$selection.find(".select2-selection__rendered"),n=this.display(e,i);i.empty().append(n),i.prop("title",e.title||e.text)},r}),e.define("select2/selection/multiple",["jquery","./base","../utils"],function(t,e,i){function n(t,e){n.__super__.constructor.apply(this,arguments)}return i.Extend(n,e),n.prototype.render=function(){var t=n.__super__.render.call(this);return t.addClass("select2-selection--multiple"),t.html('<ul class="select2-selection__rendered"></ul>'),t},n.prototype.bind=function(e,i){var r=this;n.__super__.bind.apply(this,arguments),this.$selection.on("click",function(t){r.trigger("toggle",{originalEvent:t})}),this.$selection.on("click",".select2-selection__choice__remove",function(e){if(!r.options.get("disabled")){var i=t(this),n=i.parent(),s=n.data("data");r.trigger("unselect",{originalEvent:e,data:s})}})},n.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},n.prototype.display=function(t,e){var i=this.options.get("templateSelection");return this.options.get("escapeMarkup")(i(t,e))},n.prototype.selectionContainer=function(){return t('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},n.prototype.update=function(t){if(this.clear(),0!==t.length){for(var e=[],n=0;n<t.length;n++){var r=t[n],s=this.selectionContainer(),o=this.display(r,s);s.append(o),s.prop("title",r.title||r.text),s.data("data",r),e.push(s)}var a=this.$selection.find(".select2-selection__rendered");i.appendMany(a,e)}},n}),e.define("select2/selection/placeholder",["../utils"],function(t){function e(t,e,i){this.placeholder=this.normalizePlaceholder(i.get("placeholder")),t.call(this,e,i)}return e.prototype.normalizePlaceholder=function(t,e){return"string"==typeof e&&(e={id:"",text:e}),e},e.prototype.createPlaceholder=function(t,e){var i=this.selectionContainer();return i.html(this.display(e)),i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),i},e.prototype.update=function(t,e){var i=1==e.length&&e[0].id!=this.placeholder.id;if(e.length>1||i)return t.call(this,e);this.clear();var n=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(n)},e}),e.define("select2/selection/allowClear",["jquery","../keys"],function(t,e){function i(){}return i.prototype.bind=function(t,e,i){var n=this;t.call(this,e,i),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error,this.$selection.on("mousedown",".select2-selection__clear",function(t){n._handleClear(t)}),e.on("keypress",function(t){n._handleKeyboardClear(t,e)})},i.prototype._handleClear=function(t,e){if(!this.options.get("disabled")){var i=this.$selection.find(".select2-selection__clear");if(0!==i.length){e.stopPropagation();for(var n=i.data("data"),r=0;r<n.length;r++){var s={data:n[r]};if(this.trigger("unselect",s),s.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle",{})}}},i.prototype._handleKeyboardClear=function(t,i,n){n.isOpen()||i.which!=e.DELETE&&i.which!=e.BACKSPACE||this._handleClear(i)},i.prototype.update=function(e,i){if(e.call(this,i),!(this.$selection.find(".select2-selection__placeholder").length>0||0===i.length)){var n=t('<span class="select2-selection__clear">&times;</span>');n.data("data",i),this.$selection.find(".select2-selection__rendered").prepend(n)}},i}),e.define("select2/selection/search",["jquery","../utils","../keys"],function(t,e,i){function n(t,e,i){t.call(this,e,i)}return n.prototype.render=function(e){var i=t('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=i,this.$search=i.find("input");var n=e.call(this);return this._transferTabIndex(),n},n.prototype.bind=function(t,e,n){var r=this;t.call(this,e,n),e.on("open",function(){r.$search.trigger("focus")}),e.on("close",function(){r.$search.val(""),r.$search.removeAttr("aria-activedescendant"),r.$search.trigger("focus")}),e.on("enable",function(){r.$search.prop("disabled",!1),r._transferTabIndex()}),e.on("disable",function(){r.$search.prop("disabled",!0)}),e.on("focus",function(t){r.$search.trigger("focus")}),e.on("results:focus",function(t){r.$search.attr("aria-activedescendant",t.id)}),this.$selection.on("focusin",".select2-search--inline",function(t){r.trigger("focus",t)}),this.$selection.on("focusout",".select2-search--inline",function(t){r._handleBlur(t)}),this.$selection.on("keydown",".select2-search--inline",function(t){if(t.stopPropagation(),r.trigger("keypress",t),r._keyUpPrevented=t.isDefaultPrevented(),t.which===i.BACKSPACE&&""===r.$search.val()){var e=r.$searchContainer.prev(".select2-selection__choice");if(e.length>0){var n=e.data("data");r.searchRemoveChoice(n),t.preventDefault()}}});var s=document.documentMode,o=s&&s<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(t){if(o)return void r.$selection.off("input.search input.searchcheck");r.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(t){if(o&&"input"===t.type)return void r.$selection.off("input.search input.searchcheck");var e=t.which;e!=i.SHIFT&&e!=i.CTRL&&e!=i.ALT&&e!=i.TAB&&r.handleSearch(t)})},n.prototype._transferTabIndex=function(t){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},n.prototype.createPlaceholder=function(t,e){this.$search.attr("placeholder",e.text)},n.prototype.update=function(t,e){var i=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),t.call(this,e),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),i&&this.$search.focus()},n.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var t=this.$search.val();this.trigger("query",{term:t})}this._keyUpPrevented=!1},n.prototype.searchRemoveChoice=function(t,e){this.trigger("unselect",{data:e}),this.$search.val(e.text),this.handleSearch()},n.prototype.resizeSearch=function(){this.$search.css("width","25px");var t="";if(""!==this.$search.attr("placeholder"))t=this.$selection.find(".select2-selection__rendered").innerWidth();else{t=.75*(this.$search.val().length+1)+"em"}this.$search.css("width",t)},n}),e.define("select2/selection/eventRelay",["jquery"],function(t){function e(){}return e.prototype.bind=function(e,i,n){var r=this,s=["open","opening","close","closing","select","selecting","unselect","unselecting"],o=["opening","closing","selecting","unselecting"];e.call(this,i,n),i.on("*",function(e,i){if(-1!==t.inArray(e,s)){i=i||{};var n=t.Event("select2:"+e,{params:i});r.$element.trigger(n),-1!==t.inArray(e,o)&&(i.prevented=n.isDefaultPrevented())}})},e}),e.define("select2/translation",["jquery","require"],function(t,e){function i(t){this.dict=t||{}}return i.prototype.all=function(){return this.dict},i.prototype.get=function(t){return this.dict[t]},i.prototype.extend=function(e){this.dict=t.extend({},e.all(),this.dict)},i._cache={},i.loadPath=function(t){if(!(t in i._cache)){var n=e(t);i._cache[t]=n}return new i(i._cache[t])},i}),e.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"}}),e.define("select2/data/base",["../utils"],function(t){function e(t,i){e.__super__.constructor.call(this)}return t.Extend(e,t.Observable),e.prototype.current=function(t){throw new Error("The `current` method must be defined in child classes.")},e.prototype.query=function(t,e){throw new Error("The `query` method must be defined in child classes.")},e.prototype.bind=function(t,e){},e.prototype.destroy=function(){},e.prototype.generateResultId=function(e,i){var n=e.id+"-result-";return n+=t.generateChars(4),null!=i.id?n+="-"+i.id.toString():n+="-"+t.generateChars(4),n},e}),e.define("select2/data/select",["./base","../utils","jquery"],function(t,e,i){function n(t,e){this.$element=t,this.options=e,n.__super__.constructor.call(this)}return e.Extend(n,t),n.prototype.current=function(t){var e=[],n=this;this.$element.find(":selected").each(function(){var t=i(this),r=n.item(t);e.push(r)}),t(e)},n.prototype.select=function(t){var e=this;if(t.selected=!0,i(t.element).is("option"))return t.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(n){var r=[];t=[t],t.push.apply(t,n);for(var s=0;s<t.length;s++){var o=t[s].id;-1===i.inArray(o,r)&&r.push(o)}e.$element.val(r),e.$element.trigger("change")});else{var n=t.id;this.$element.val(n),this.$element.trigger("change")}},n.prototype.unselect=function(t){var e=this;if(this.$element.prop("multiple")){if(t.selected=!1,i(t.element).is("option"))return t.element.selected=!1,void this.$element.trigger("change");this.current(function(n){for(var r=[],s=0;s<n.length;s++){var o=n[s].id;o!==t.id&&-1===i.inArray(o,r)&&r.push(o)}e.$element.val(r),e.$element.trigger("change")})}},n.prototype.bind=function(t,e){var i=this;this.container=t,t.on("select",function(t){i.select(t.data)}),t.on("unselect",function(t){i.unselect(t.data)})},n.prototype.destroy=function(){this.$element.find("*").each(function(){i.removeData(this,"data")})},n.prototype.query=function(t,e){var n=[],r=this;this.$element.children().each(function(){var e=i(this);if(e.is("option")||e.is("optgroup")){var s=r.item(e),o=r.matches(t,s);null!==o&&n.push(o)}}),e({results:n})},n.prototype.addOptions=function(t){e.appendMany(this.$element,t)},n.prototype.option=function(t){var e;t.children?(e=document.createElement("optgroup"),e.label=t.text):(e=document.createElement("option"),void 0!==e.textContent?e.textContent=t.text:e.innerText=t.text),t.id&&(e.value=t.id),t.disabled&&(e.disabled=!0),t.selected&&(e.selected=!0),t.title&&(e.title=t.title);var n=i(e),r=this._normalizeItem(t);return r.element=e,i.data(e,"data",r),n},n.prototype.item=function(t){var e={};if(null!=(e=i.data(t[0],"data")))return e;if(t.is("option"))e={id:t.val(),text:t.text(),disabled:t.prop("disabled"),selected:t.prop("selected"),title:t.prop("title")};else if(t.is("optgroup")){e={text:t.prop("label"),children:[],title:t.prop("title")};for(var n=t.children("option"),r=[],s=0;s<n.length;s++){var o=i(n[s]),a=this.item(o);r.push(a)}e.children=r}return e=this._normalizeItem(e),e.element=t[0],i.data(t[0],"data",e),e},n.prototype._normalizeItem=function(t){i.isPlainObject(t)||(t={id:t,text:t}),t=i.extend({},{text:""},t);var e={selected:!1,disabled:!1};return null!=t.id&&(t.id=t.id.toString()),null!=t.text&&(t.text=t.text.toString()),null==t._resultId&&t.id&&null!=this.container&&(t._resultId=this.generateResultId(this.container,t)),i.extend({},e,t)},n.prototype.matches=function(t,e){return this.options.get("matcher")(t,e)},n}),e.define("select2/data/array",["./select","../utils","jquery"],function(t,e,i){function n(t,e){var i=e.get("data")||[];n.__super__.constructor.call(this,t,e),this.addOptions(this.convertToOptions(i))}return e.Extend(n,t),n.prototype.select=function(t){var e=this.$element.find("option").filter(function(e,i){return i.value==t.id.toString()});0===e.length&&(e=this.option(t),this.addOptions(e)),n.__super__.select.call(this,t)},n.prototype.convertToOptions=function(t){for(var n=this,r=this.$element.find("option"),s=r.map(function(){return n.item(i(this)).id}).get(),o=[],a=0;a<t.length;a++){var l=this._normalizeItem(t[a]);if(i.inArray(l.id,s)>=0){var u=r.filter(function(t){return function(){return i(this).val()==t.id}}(l)),c=this.item(u),h=i.extend(!0,{},l,c),d=this.option(h);u.replaceWith(d)}else{var p=this.option(l);if(l.children){var f=this.convertToOptions(l.children);e.appendMany(p,f)}o.push(p)}}return o},n}),e.define("select2/data/ajax",["./array","../utils","jquery"],function(t,e,i){function n(t,e){this.ajaxOptions=this._applyDefaults(e.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),n.__super__.constructor.call(this,t,e)}return e.Extend(n,t),n.prototype._applyDefaults=function(t){var e={data:function(t){return i.extend({},t,{q:t.term})},transport:function(t,e,n){var r=i.ajax(t);return r.then(e),r.fail(n),r}};return i.extend({},e,t,!0)},n.prototype.processResults=function(t){return t},n.prototype.query=function(t,e){function n(){var n=s.transport(s,function(n){var s=r.processResults(n,t);r.options.get("debug")&&window.console&&console.error&&(!s||!s.results||i.isArray(s.results)),e(s)},function(){n.status&&"0"===n.status||r.trigger("results:message",{message:"errorLoading"})});r._request=n}var r=this;null!=this._request&&(i.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var s=i.extend({type:"GET"},this.ajaxOptions);"function"==typeof s.url&&(s.url=s.url.call(this.$element,t)),"function"==typeof s.data&&(s.data=s.data.call(this.$element,t)),this.ajaxOptions.delay&&null!=t.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(n,this.ajaxOptions.delay)):n()},n}),e.define("select2/data/tags",["jquery"],function(t){function e(e,i,n){var r=n.get("tags"),s=n.get("createTag");void 0!==s&&(this.createTag=s);var o=n.get("insertTag");if(void 0!==o&&(this.insertTag=o),e.call(this,i,n),t.isArray(r))for(var a=0;a<r.length;a++){var l=r[a],u=this._normalizeItem(l),c=this.option(u);this.$element.append(c)}}return e.prototype.query=function(t,e,i){function n(t,s){for(var o=t.results,a=0;a<o.length;a++){var l=o[a],u=null!=l.children&&!n({results:l.children},!0);if(l.text===e.term||u)return!s&&(t.data=o,void i(t))}if(s)return!0;var c=r.createTag(e);if(null!=c){var h=r.option(c);h.attr("data-select2-tag",!0),r.addOptions([h]),r.insertTag(o,c)}t.results=o,i(t)}var r=this;if(this._removeOldTags(),null==e.term||null!=e.page)return void t.call(this,e,i);t.call(this,e,n)},e.prototype.createTag=function(e,i){var n=t.trim(i.term);return""===n?null:{id:n,text:n}},e.prototype.insertTag=function(t,e,i){e.unshift(i)},e.prototype._removeOldTags=function(e){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||t(this).remove()})},e}),e.define("select2/data/tokenizer",["jquery"],function(t){function e(t,e,i){var n=i.get("tokenizer");void 0!==n&&(this.tokenizer=n),t.call(this,e,i)}return e.prototype.bind=function(t,e,i){t.call(this,e,i),this.$search=e.dropdown.$search||e.selection.$search||i.find(".select2-search__field")},e.prototype.query=function(e,i,n){function r(e){var i=o._normalizeItem(e);if(!o.$element.find("option").filter(function(){return t(this).val()===i.id}).length){var n=o.option(i);n.attr("data-select2-tag",!0),o._removeOldTags(),o.addOptions([n])}s(i)}function s(t){o.trigger("select",{data:t})}var o=this;i.term=i.term||"";var a=this.tokenizer(i,this.options,r);a.term!==i.term&&(this.$search.length&&(this.$search.val(a.term),this.$search.focus()),i.term=a.term),e.call(this,i,n)},e.prototype.tokenizer=function(e,i,n,r){for(var s=n.get("tokenSeparators")||[],o=i.term,a=0,l=this.createTag||function(t){return{id:t.term,text:t.term}};a<o.length;){var u=o[a];if(-1!==t.inArray(u,s)){var c=o.substr(0,a),h=t.extend({},i,{term:c}),d=l(h);null!=d?(r(d),o=o.substr(a+1)||"",a=0):a++}else a++}return{term:o}},e}),e.define("select2/data/minimumInputLength",[],function(){function t(t,e,i){this.minimumInputLength=i.get("minimumInputLength"),t.call(this,e,i)}return t.prototype.query=function(t,e,i){if(e.term=e.term||"",e.term.length<this.minimumInputLength)return void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:e.term,params:e}});t.call(this,e,i)},t}),e.define("select2/data/maximumInputLength",[],function(){function t(t,e,i){this.maximumInputLength=i.get("maximumInputLength"),t.call(this,e,i)}return t.prototype.query=function(t,e,i){if(e.term=e.term||"",this.maximumInputLength>0&&e.term.length>this.maximumInputLength)return void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:e.term,params:e}});t.call(this,e,i)},t}),e.define("select2/data/maximumSelectionLength",[],function(){function t(t,e,i){this.maximumSelectionLength=i.get("maximumSelectionLength"),t.call(this,e,i)}return t.prototype.query=function(t,e,i){var n=this;this.current(function(r){var s=null!=r?r.length:0;if(n.maximumSelectionLength>0&&s>=n.maximumSelectionLength)return void n.trigger("results:message",{message:"maximumSelected",args:{maximum:n.maximumSelectionLength}});t.call(n,e,i)})},t}),e.define("select2/dropdown",["jquery","./utils"],function(t,e){function i(t,e){this.$element=t,this.options=e,i.__super__.constructor.call(this)}return e.Extend(i,e.Observable),i.prototype.render=function(){var e=t('<span class="select2-dropdown"><span class="select2-results"></span></span>');return e.attr("dir",this.options.get("dir")),this.$dropdown=e,e},i.prototype.bind=function(){},i.prototype.position=function(t,e){},i.prototype.destroy=function(){this.$dropdown.remove()},i}),e.define("select2/dropdown/search",["jquery","../utils"],function(t,e){function i(){}return i.prototype.render=function(e){var i=e.call(this),n=t('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=n,this.$search=n.find("input"),i.prepend(n),i},i.prototype.bind=function(e,i,n){var r=this;e.call(this,i,n),this.$search.on("keydown",function(t){r.trigger("keypress",t),r._keyUpPrevented=t.isDefaultPrevented()}),this.$search.on("input",function(e){t(this).off("keyup")}),this.$search.on("keyup input",function(t){r.handleSearch(t)}),i.on("open",function(){r.$search.attr("tabindex",0),r.$search.focus(),window.setTimeout(function(){r.$search.focus()},0)}),i.on("close",function(){r.$search.attr("tabindex",-1),r.$search.val("")}),i.on("focus",function(){i.isOpen()&&r.$search.focus()}),i.on("results:all",function(t){if(null==t.query.term||""===t.query.term){r.showSearch(t)?r.$searchContainer.removeClass("select2-search--hide"):r.$searchContainer.addClass("select2-search--hide")}})},i.prototype.handleSearch=function(t){if(!this._keyUpPrevented){var e=this.$search.val();this.trigger("query",{term:e})}this._keyUpPrevented=!1},i.prototype.showSearch=function(t,e){return!0},i}),e.define("select2/dropdown/hidePlaceholder",[],function(){function t(t,e,i,n){this.placeholder=this.normalizePlaceholder(i.get("placeholder")),t.call(this,e,i,n)}return t.prototype.append=function(t,e){e.results=this.removePlaceholder(e.results),t.call(this,e)},t.prototype.normalizePlaceholder=function(t,e){return"string"==typeof e&&(e={id:"",text:e}),e},t.prototype.removePlaceholder=function(t,e){for(var i=e.slice(0),n=e.length-1;n>=0;n--){var r=e[n];this.placeholder.id===r.id&&i.splice(n,1)}return i},t}),e.define("select2/dropdown/infiniteScroll",["jquery"],function(t){function e(t,e,i,n){this.lastParams={},t.call(this,e,i,n),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return e.prototype.append=function(t,e){this.$loadingMore.remove(),this.loading=!1,t.call(this,e),this.showLoadingMore(e)&&this.$results.append(this.$loadingMore)},e.prototype.bind=function(e,i,n){var r=this;e.call(this,i,n),i.on("query",function(t){r.lastParams=t,r.loading=!0}),i.on("query:append",function(t){r.lastParams=t,r.loading=!0}),this.$results.on("scroll",function(){var e=t.contains(document.documentElement,r.$loadingMore[0]);if(!r.loading&&e){r.$results.offset().top+r.$results.outerHeight(!1)+50>=r.$loadingMore.offset().top+r.$loadingMore.outerHeight(!1)&&r.loadMore()}})},e.prototype.loadMore=function(){this.loading=!0;var e=t.extend({},{page:1},this.lastParams);e.page++,this.trigger("query:append",e)},e.prototype.showLoadingMore=function(t,e){return e.pagination&&e.pagination.more},e.prototype.createLoadingMore=function(){var e=t('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),i=this.options.get("translations").get("loadingMore");return e.html(i(this.lastParams)),e},e}),e.define("select2/dropdown/attachBody",["jquery","../utils"],function(t,e){function i(e,i,n){this.$dropdownParent=n.get("dropdownParent")||t(document.body),e.call(this,i,n)}return i.prototype.bind=function(t,e,i){var n=this,r=!1;t.call(this,e,i),e.on("open",function(){n._showDropdown(),n._attachPositioningHandler(e),r||(r=!0,e.on("results:all",function(){n._positionDropdown(),n._resizeDropdown()}),e.on("results:append",function(){n._positionDropdown(),n._resizeDropdown()}))}),e.on("close",function(){n._hideDropdown(),n._detachPositioningHandler(e)}),this.$dropdownContainer.on("mousedown",function(t){t.stopPropagation()})},i.prototype.destroy=function(t){t.call(this),this.$dropdownContainer.remove()},i.prototype.position=function(t,e,i){e.attr("class",i.attr("class")),e.removeClass("select2"),e.addClass("select2-container--open"),e.css({position:"absolute",top:-999999}),this.$container=i},i.prototype.render=function(e){var i=t("<span></span>"),n=e.call(this);return i.append(n),this.$dropdownContainer=i,i},i.prototype._hideDropdown=function(t){this.$dropdownContainer.detach()},i.prototype._attachPositioningHandler=function(i,n){var r=this,s="scroll.select2."+n.id,o="resize.select2."+n.id,a="orientationchange.select2."+n.id,l=this.$container.parents().filter(e.hasScroll);l.each(function(){t(this).data("select2-scroll-position",{x:t(this).scrollLeft(),y:t(this).scrollTop()})}),l.on(s,function(e){var i=t(this).data("select2-scroll-position");t(this).scrollTop(i.y)}),t(window).on(s+" "+o+" "+a,function(t){r._positionDropdown(),r._resizeDropdown()})},i.prototype._detachPositioningHandler=function(i,n){var r="scroll.select2."+n.id,s="resize.select2."+n.id,o="orientationchange.select2."+n.id;this.$container.parents().filter(e.hasScroll).off(r),t(window).off(r+" "+s+" "+o)},i.prototype._positionDropdown=function(){var e=t(window),i=this.$dropdown.hasClass("select2-dropdown--above"),n=this.$dropdown.hasClass("select2-dropdown--below"),r=null,s=this.$container.offset();s.bottom=s.top+this.$container.outerHeight(!1);var o={height:this.$container.outerHeight(!1)};o.top=s.top,o.bottom=s.top+o.height;var a={height:this.$dropdown.outerHeight(!1)},l={top:e.scrollTop(),bottom:e.scrollTop()+e.height()},u=l.top<s.top-a.height,c=l.bottom>s.bottom+a.height,h={left:s.left,top:o.bottom},d=this.$dropdownParent;"static"===d.css("position")&&(d=d.offsetParent());var p=d.offset();h.top-=p.top,h.left-=p.left,i||n||(r="below"),c||!u||i?!u&&c&&i&&(r="below"):r="above",("above"==r||i&&"below"!==r)&&(h.top=o.top-p.top-a.height),null!=r&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+r),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+r)),this.$dropdownContainer.css(h)},i.prototype._resizeDropdown=function(){var t={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(t.minWidth=t.width,t.position="relative",t.width="auto"),this.$dropdown.css(t)},i.prototype._showDropdown=function(t){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},i}),e.define("select2/dropdown/minimumResultsForSearch",[],function(){function t(e){for(var i=0,n=0;n<e.length;n++){var r=e[n];r.children?i+=t(r.children):i++}return i}function e(t,e,i,n){this.minimumResultsForSearch=i.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),t.call(this,e,i,n)}return e.prototype.showSearch=function(e,i){return!(t(i.data.results)<this.minimumResultsForSearch)&&e.call(this,i)},e}),e.define("select2/dropdown/selectOnClose",[],function(){function t(){}return t.prototype.bind=function(t,e,i){var n=this;t.call(this,e,i),e.on("close",function(t){n._handleSelectOnClose(t)})},t.prototype._handleSelectOnClose=function(t,e){if(e&&null!=e.originalSelect2Event){var i=e.originalSelect2Event;if("select"===i._type||"unselect"===i._type)return}var n=this.getHighlightedResults();if(!(n.length<1)){var r=n.data("data");null!=r.element&&r.element.selected||null==r.element&&r.selected||this.trigger("select",{data:r})}},t}),e.define("select2/dropdown/closeOnSelect",[],function(){function t(){}return t.prototype.bind=function(t,e,i){var n=this;t.call(this,e,i),e.on("select",function(t){n._selectTriggered(t)}),e.on("unselect",function(t){n._selectTriggered(t)})},t.prototype._selectTriggered=function(t,e){var i=e.originalEvent;i&&i.ctrlKey||this.trigger("close",{originalEvent:i,originalSelect2Event:e})},t}),e.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(t){var e=t.input.length-t.maximum,i="Please delete "+e+" character";return 1!=e&&(i+="s"),i},inputTooShort:function(t){return"Please enter "+(t.minimum-t.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(t){var e="You can only select "+t.maximum+" item";return 1!=t.maximum&&(e+="s"),e},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),e.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(t,e,i,n,r,s,o,a,l,u,c,h,d,p,f,g,m,v,_,y,b,w,x,C,k,T,D,S,A){function E(){this.reset()}return E.prototype.apply=function(h){if(h=t.extend(!0,{},this.defaults,h),null==h.dataAdapter){if(null!=h.ajax?h.dataAdapter=f:null!=h.data?h.dataAdapter=p:h.dataAdapter=d,h.minimumInputLength>0&&(h.dataAdapter=u.Decorate(h.dataAdapter,v)),h.maximumInputLength>0&&(h.dataAdapter=u.Decorate(h.dataAdapter,_)),h.maximumSelectionLength>0&&(h.dataAdapter=u.Decorate(h.dataAdapter,y)),h.tags&&(h.dataAdapter=u.Decorate(h.dataAdapter,g)),null==h.tokenSeparators&&null==h.tokenizer||(h.dataAdapter=u.Decorate(h.dataAdapter,m)),null!=h.query){var A=e(h.amdBase+"compat/query");h.dataAdapter=u.Decorate(h.dataAdapter,A)}if(null!=h.initSelection){var E=e(h.amdBase+"compat/initSelection");h.dataAdapter=u.Decorate(h.dataAdapter,E)}}if(null==h.resultsAdapter&&(h.resultsAdapter=i,null!=h.ajax&&(h.resultsAdapter=u.Decorate(h.resultsAdapter,C)),null!=h.placeholder&&(h.resultsAdapter=u.Decorate(h.resultsAdapter,x)),h.selectOnClose&&(h.resultsAdapter=u.Decorate(h.resultsAdapter,D))),null==h.dropdownAdapter){if(h.multiple)h.dropdownAdapter=b;else{var I=u.Decorate(b,w);h.dropdownAdapter=I}if(0!==h.minimumResultsForSearch&&(h.dropdownAdapter=u.Decorate(h.dropdownAdapter,T)),h.closeOnSelect&&(h.dropdownAdapter=u.Decorate(h.dropdownAdapter,S)),null!=h.dropdownCssClass||null!=h.dropdownCss||null!=h.adaptDropdownCssClass){var $=e(h.amdBase+"compat/dropdownCss");h.dropdownAdapter=u.Decorate(h.dropdownAdapter,$)}h.dropdownAdapter=u.Decorate(h.dropdownAdapter,k)}if(null==h.selectionAdapter){if(h.multiple?h.selectionAdapter=r:h.selectionAdapter=n,null!=h.placeholder&&(h.selectionAdapter=u.Decorate(h.selectionAdapter,s)),h.allowClear&&(h.selectionAdapter=u.Decorate(h.selectionAdapter,o)),h.multiple&&(h.selectionAdapter=u.Decorate(h.selectionAdapter,a)),null!=h.containerCssClass||null!=h.containerCss||null!=h.adaptContainerCssClass){var O=e(h.amdBase+"compat/containerCss");h.selectionAdapter=u.Decorate(h.selectionAdapter,O)}h.selectionAdapter=u.Decorate(h.selectionAdapter,l)}if("string"==typeof h.language)if(h.language.indexOf("-")>0){var P=h.language.split("-"),N=P[0];h.language=[h.language,N]}else h.language=[h.language];if(t.isArray(h.language)){var M=new c;h.language.push("en");for(var j=h.language,H=0;H<j.length;H++){var R=j[H],L={};try{L=c.loadPath(R)}catch(t){try{R=this.defaults.amdLanguageBase+R,L=c.loadPath(R)}catch(t){h.debug&&window.console&&console.warn;continue}}M.extend(L)}h.translations=M}else{var F=c.loadPath(this.defaults.amdLanguageBase+"en"),z=new c(h.language);z.extend(F),h.translations=z}return h},E.prototype.reset=function(){function e(t){function e(t){return h[t]||t}return t.replace(/[^\u0000-\u007E]/g,e)}function i(n,r){if(""===t.trim(n.term))return r;if(r.children&&r.children.length>0){for(var s=t.extend(!0,{},r),o=r.children.length-1;o>=0;o--){null==i(n,r.children[o])&&s.children.splice(o,1)}return s.children.length>0?s:i(n,s)}var a=e(r.text).toUpperCase(),l=e(n.term).toUpperCase();return a.indexOf(l)>-1?r:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:u.escapeMarkup,language:A,matcher:i,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(t){return t},templateResult:function(t){return t.text},templateSelection:function(t){return t.text},theme:"default",width:"resolve"}},E.prototype.set=function(e,i){var n=t.camelCase(e),r={};r[n]=i;var s=u._convertData(r);t.extend(this.defaults,s)},new E}),e.define("select2/options",["require","jquery","./defaults","./utils"],function(t,e,i,n){function r(e,r){if(this.options=e,null!=r&&this.fromElement(r),this.options=i.apply(this.options),r&&r.is("input")){var s=t(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=n.Decorate(this.options.dataAdapter,s)}}return r.prototype.fromElement=function(t){var i=["select2"];null==this.options.multiple&&(this.options.multiple=t.prop("multiple")),null==this.options.disabled&&(this.options.disabled=t.prop("disabled")),null==this.options.language&&(t.prop("lang")?this.options.language=t.prop("lang").toLowerCase():t.closest("[lang]").prop("lang")&&(this.options.language=t.closest("[lang]").prop("lang"))),null==this.options.dir&&(t.prop("dir")?this.options.dir=t.prop("dir"):t.closest("[dir]").prop("dir")?this.options.dir=t.closest("[dir]").prop("dir"):this.options.dir="ltr"),t.prop("disabled",this.options.disabled),t.prop("multiple",this.options.multiple),t.data("select2Tags")&&(this.options.debug&&window.console&&console.warn,t.data("data",t.data("select2Tags")),t.data("tags",!0)),t.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn,t.attr("ajax--url",t.data("ajaxUrl")),t.data("ajax--url",t.data("ajaxUrl")));var r={};r=e.fn.jquery&&"1."==e.fn.jquery.substr(0,2)&&t[0].dataset?e.extend(!0,{},t[0].dataset,t.data()):t.data();var s=e.extend(!0,{},r);s=n._convertData(s);for(var o in s)e.inArray(o,i)>-1||(e.isPlainObject(this.options[o])?e.extend(this.options[o],s[o]):this.options[o]=s[o]);return this},r.prototype.get=function(t){return this.options[t]},r.prototype.set=function(t,e){this.options[t]=e},r}),e.define("select2/core",["jquery","./options","./utils","./keys"],function(t,e,i,n){var r=function(t,i){null!=t.data("select2")&&t.data("select2").destroy(),this.$element=t,this.id=this._generateId(t),i=i||{},this.options=new e(i,t),r.__super__.constructor.call(this);var n=t.attr("tabindex")||0;t.data("old-tabindex",n),t.attr("tabindex","-1");var s=this.options.get("dataAdapter");this.dataAdapter=new s(t,this.options);var o=this.render();this._placeContainer(o);var a=this.options.get("selectionAdapter");this.selection=new a(t,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,o);var l=this.options.get("dropdownAdapter");this.dropdown=new l(t,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,o);var u=this.options.get("resultsAdapter");this.results=new u(t,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var c=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(t){c.trigger("selection:update",{data:t})}),t.addClass("select2-hidden-accessible"),t.attr("aria-hidden","true"),this._syncAttributes(),t.data("select2",this)};return i.Extend(r,i.Observable),r.prototype._generateId=function(t){var e="";return e=null!=t.attr("id")?t.attr("id"):null!=t.attr("name")?t.attr("name")+"-"+i.generateChars(2):i.generateChars(4),e=e.replace(/(:|\.|\[|\]|,)/g,""),e="select2-"+e},r.prototype._placeContainer=function(t){t.insertAfter(this.$element);var e=this._resolveWidth(this.$element,this.options.get("width"));null!=e&&t.css("width",e)},r.prototype._resolveWidth=function(t,e){var i=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==e){var n=this._resolveWidth(t,"style");return null!=n?n:this._resolveWidth(t,"element")}if("element"==e){var r=t.outerWidth(!1);return r<=0?"auto":r+"px"}if("style"==e){var s=t.attr("style");if("string"!=typeof s)return null;for(var o=s.split(";"),a=0,l=o.length;a<l;a+=1){var u=o[a].replace(/\s/g,""),c=u.match(i);if(null!==c&&c.length>=1)return c[1]}return null}return e},r.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},r.prototype._registerDomEvents=function(){var e=this;this.$element.on("change.select2",function(){e.dataAdapter.current(function(t){e.trigger("selection:update",{data:t})})}),this.$element.on("focus.select2",function(t){e.trigger("focus",t)}),this._syncA=i.bind(this._syncAttributes,this),this._syncS=i.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var n=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=n?(this._observer=new n(function(i){t.each(i,e._syncA),t.each(i,e._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",e._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",e._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",e._syncS,!1))},r.prototype._registerDataEvents=function(){var t=this;this.dataAdapter.on("*",function(e,i){t.trigger(e,i)})},r.prototype._registerSelectionEvents=function(){var e=this,i=["toggle","focus"];this.selection.on("toggle",function(){e.toggleDropdown()}),this.selection.on("focus",function(t){e.focus(t)}),this.selection.on("*",function(n,r){-1===t.inArray(n,i)&&e.trigger(n,r)})},r.prototype._registerDropdownEvents=function(){var t=this;this.dropdown.on("*",function(e,i){t.trigger(e,i)})},r.prototype._registerResultsEvents=function(){var t=this;this.results.on("*",function(e,i){t.trigger(e,i)})},r.prototype._registerEvents=function(){var t=this;this.on("open",function(){t.$container.addClass("select2-container--open")}),this.on("close",function(){t.$container.removeClass("select2-container--open")}),this.on("enable",function(){t.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){t.$container.addClass("select2-container--disabled")}),this.on("blur",function(){t.$container.removeClass("select2-container--focus")}),this.on("query",function(e){t.isOpen()||t.trigger("open",{}),this.dataAdapter.query(e,function(i){t.trigger("results:all",{data:i,query:e})})}),this.on("query:append",function(e){this.dataAdapter.query(e,function(i){t.trigger("results:append",{data:i,query:e})})}),this.on("keypress",function(e){var i=e.which;t.isOpen()?i===n.ESC||i===n.TAB||i===n.UP&&e.altKey?(t.close(),e.preventDefault()):i===n.ENTER?(t.trigger("results:select",{}),e.preventDefault()):i===n.SPACE&&e.ctrlKey?(t.trigger("results:toggle",{}),e.preventDefault()):i===n.UP?(t.trigger("results:previous",{}),e.preventDefault()):i===n.DOWN&&(t.trigger("results:next",{}),e.preventDefault()):(i===n.ENTER||i===n.SPACE||i===n.DOWN&&e.altKey)&&(t.open(),e.preventDefault())})},r.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},r.prototype._syncSubtree=function(t,e){var i=!1,n=this;if(!t||!t.target||"OPTION"===t.target.nodeName||"OPTGROUP"===t.target.nodeName){if(e)if(e.addedNodes&&e.addedNodes.length>0)for(var r=0;r<e.addedNodes.length;r++){var s=e.addedNodes[r];s.selected&&(i=!0)}else e.removedNodes&&e.removedNodes.length>0&&(i=!0);else i=!0;i&&this.dataAdapter.current(function(t){n.trigger("selection:update",{data:t})})}},r.prototype.trigger=function(t,e){var i=r.__super__.trigger,n={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(void 0===e&&(e={}),t in n){var s=n[t],o={prevented:!1,name:t,args:e};if(i.call(this,s,o),o.prevented)return void(e.prevented=!0)}i.call(this,t,e)},r.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},r.prototype.open=function(){this.isOpen()||this.trigger("query",{})},r.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},r.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},r.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},r.prototype.focus=function(t){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},r.prototype.enable=function(t){this.options.get("debug")&&window.console&&console.warn,null!=t&&0!==t.length||(t=[!0]);var e=!t[0];this.$element.prop("disabled",e)},r.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn;var t=[];return this.dataAdapter.current(function(e){t=e}),t},r.prototype.val=function(e){if(this.options.get("debug")&&window.console&&console.warn,null==e||0===e.length)return this.$element.val();var i=e[0];t.isArray(i)&&(i=t.map(i,function(t){return t.toString()})),this.$element.val(i).trigger("change")},r.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},r.prototype.render=function(){var e=t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return e.attr("dir",this.options.get("dir")),this.$container=e,this.$container.addClass("select2-container--"+this.options.get("theme")),e.data("element",this.$element),e},r}),e.define("jquery-mousewheel",["jquery"],function(t){return t}),e.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(t,e,i,n){if(null==t.fn.select2){var r=["open","close","destroy"];t.fn.select2=function(e){if("object"==typeof(e=e||{}))return this.each(function(){var n=t.extend(!0,{},e);new i(t(this),n)}),this;if("string"==typeof e){var n,s=Array.prototype.slice.call(arguments,1);return this.each(function(){var i=t(this).data("select2");null==i&&window.console&&console.error,n=i[e].apply(i,s)}),t.inArray(e,r)>-1?this:n}throw new Error("Invalid arguments for Select2: "+e)}}return null==t.fn.select2.defaults&&(t.fn.select2.defaults=n),i}),{define:e.define,require:e.require}}(),i=e.require("jquery.select2");return t.fn.select2.amd=e,i})},function(t,e,i){i(51);var n=i(1)(i(10),i(43),"data-v-3edef3ba",null);t.exports=n.exports},function(t,e,i){i(53);var n=i(1)(i(11),i(44),"data-v-5667c312",null);t.exports=n.exports},function(t,e,i){i(54);var n=i(1)(i(12),i(45),null,null);t.exports=n.exports},function(t,e,i){i(52);var n=i(1)(i(13),null,"data-v-5301a236",null);t.exports=n.exports},function(t,e,i){i(55);var n=i(1)(i(14),i(46),"data-v-de0d0e4e",null);t.exports=n.exports},function(t,e,i){i(56);var n=i(1)(i(15),i(47),"data-v-e9c80318",null);t.exports=n.exports},function(t,e,i){i(50);var n=i(1)(i(16),i(42),"data-v-225778c2",null);t.exports=n.exports},function(t,e,i){i(57);var n=i(1)(i(17),i(48),"data-v-ff564a86",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[i("div",{staticClass:"panel panel-default"},[i("div",{staticClass:"panel-heading"},[i("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[i("span",[t._v("\n                        Personal Access Tokens\n                    ")]),t._v(" "),i("a",{staticClass:"action-link",on:{click:t.showCreateTokenForm}},[t._v("\n                        Create New Token\n                    ")])])]),t._v(" "),i("div",{staticClass:"panel-body"},[0===t.tokens.length?i("p",{staticClass:"m-b-none"},[t._v("\n                    You have not created any personal access tokens.\n                ")]):t._e(),t._v(" "),t.tokens.length>0?i("table",{staticClass:"table table-borderless m-b-none"},[t._m(0),t._v(" "),i("tbody",t._l(t.tokens,function(e){return i("tr",[i("td",{staticStyle:{"vertical-align":"middle"}},[t._v("\n                                "+t._s(e.name)+"\n                            ")]),t._v(" "),i("td",{staticStyle:{"vertical-align":"middle"}},[i("a",{staticClass:"action-link text-danger",on:{click:function(i){t.revoke(e)}}},[t._v("\n                                    Delete\n                                ")])])])}))]):t._e()])])]),t._v(" "),i("div",{staticClass:"modal fade",attrs:{id:"modal-create-token",tabindex:"-1",role:"dialog"}},[i("div",{staticClass:"modal-dialog"},[i("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),i("div",{staticClass:"modal-body"},[t.form.errors.length>0?i("div",{staticClass:"alert alert-danger"},[t._m(2),t._v(" "),i("br"),t._v(" "),i("ul",t._l(t.form.errors,function(e){return i("li",[t._v("\n                                "+t._s(e)+"\n                            ")])}))]):t._e(),t._v(" "),i("form",{staticClass:"form-horizontal",attrs:{role:"form"},on:{submit:function(e){e.preventDefault(),t.store(e)}}},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-4 control-label"},[t._v("Name")]),t._v(" "),i("div",{staticClass:"col-md-6"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{id:"create-token-name",type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||(t.form.name=e.target.value)}}})])]),t._v(" "),t.scopes.length>0?i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-4 control-label"},[t._v("Scopes")]),t._v(" "),i("div",{staticClass:"col-md-6"},t._l(t.scopes,function(e){return i("div",[i("div",{staticClass:"checkbox"},[i("label",[i("input",{attrs:{type:"checkbox"},domProps:{checked:t.scopeIsAssigned(e.id)},on:{click:function(i){t.toggleScope(e.id)}}}),t._v("\n\n                                                "+t._s(e.id)+"\n                                        ")])])])}))]):t._e()])]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),i("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.store}},[t._v("\n                        Create\n                    ")])])])])]),t._v(" "),i("div",{staticClass:"modal fade",attrs:{id:"modal-access-token",tabindex:"-1",role:"dialog"}},[i("div",{staticClass:"modal-dialog"},[i("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),i("div",{staticClass:"modal-body"},[i("p",[t._v("\n                        Here is your new personal access token. This is the only time it will be shown so don't lose it!\n                        You may now use this token to make API requests.\n                    ")]),t._v(" "),i("pre",[i("code",[t._v(t._s(t.accessToken))])])]),t._v(" "),t._m(4)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("th",[t._v("Name")]),t._v(" "),i("th")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal-header"},[i("button",{staticClass:"close",attrs:{type:"button ","data-dismiss":"modal","aria-hidden":"true"}},[t._v("×")]),t._v(" "),i("h4",{staticClass:"modal-title"},[t._v("\n                        Create Token\n                    ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("strong",[t._v("Whoops!")]),t._v(" Something went wrong!")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal-header"},[i("button",{staticClass:"close",attrs:{type:"button ","data-dismiss":"modal","aria-hidden":"true"}},[t._v("×")]),t._v(" "),i("h4",{staticClass:"modal-title"},[t._v("\n                        Personal Access Token\n                    ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-md-12",class:t.alertType},[i("div",{staticClass:"alert",class:t.alertClassName},[i("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.hideEvent}},[t._v("×")]),t._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:"success"==t.alertType,expression:"alertType == 'success'"}],staticClass:"fa fa-check faa-pulse animated"}),t._v(" "),i("strong",[t._v(t._s(t.title)+" ")]),t._v(" "),t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.errors?i("div",{staticClass:"box"},[i("div",{staticClass:"box-body"},[t._m(0),t._v(" "),i("div",{staticClass:"errors-table"},[i("table",{staticClass:"table table-striped table-bordered",attrs:{id:"errors-table"}},[t._m(1),t._v(" "),i("tbody",t._l(t.errors,function(e,n){return i("tr",[i("td",[t._v(t._s(n))]),t._v(" "),t._l(e,function(e,n){return i("td",[i("b",[t._v(t._s(n)+":")]),t._v(" "),t._l(e,function(e){return i("span",[t._v(t._s(e[0]))])}),t._v(" "),i("br")],2)})],2)}))])])])]):t._e()},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"alert alert-warning"},[i("strong",[t._v("Warning")]),t._v(" Some Errors occured while importing\n    ")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("th",[t._v("Item")]),t._v(" "),i("th",[t._v("Errors")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",{directives:[{name:"show",rawName:"v-show",value:t.processDetail,expression:"processDetail"}]},[i("td",{attrs:{colspan:"3"}},[i("h4",{staticClass:"modal-title"},[t._v("Import File:")]),t._v(" "),i("div",{staticClass:"dynamic-form-row"},[t._m(0),t._v(" "),i("div",{staticClass:"col-md-4 col-xs-12"},[i("select2",{attrs:{options:t.options.importTypes},model:{value:t.options.importType,callback:function(e){t.options.importType=e},expression:"options.importType"}},[i("option",{attrs:{disabled:"",value:"0"}})])],1)]),t._v(" "),i("div",{staticClass:"dynamic-form-row"},[t._m(1),t._v(" "),i("div",{staticClass:"col-md-4 col-xs-12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.options.update,expression:"options.update"}],attrs:{type:"checkbox",name:"import-update"},domProps:{checked:Array.isArray(t.options.update)?t._i(t.options.update,null)>-1:t.options.update},on:{__c:function(e){var i=t.options.update,n=e.target,r=!!n.checked;if(Array.isArray(i)){var s=t._i(i,null);r?s<0&&(t.options.update=i.concat(null)):s>-1&&(t.options.update=i.slice(0,s).concat(i.slice(s+1)))}else t.options.update=r}}})])]),t._v(" "),i("div",{staticClass:"col-md-12",staticStyle:{"padding-top":"30px"}},[i("table",{staticClass:"table"},[t._m(2),t._v(" "),i("tbody",[t._l(t.file.header_row,function(e,n){return[i("tr",[i("td",[i("label",{staticClass:"controllabel",attrs:{for:e}},[t._v(t._s(e))])]),t._v(" "),i("td",[i("div",{attrs:{required:""}},[i("select2",{attrs:{options:t.columns},model:{value:t.columnMappings[e],callback:function(i){var n=t.columnMappings,r=e;Array.isArray(n)?n.splice(r,1,i):t.columnMappings[e]=i},expression:"columnMappings[header]"}},[i("option",{attrs:{value:"0"}},[t._v("Do Not Import")])])],1)]),t._v(" "),i("td",[i("div",[t._v(t._s(t.activeFile.first_row[n]))])])])]})],2)])])]),t._v(" "),i("td",[i("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){t.processDetail=!1}}},[t._v("Cancel")]),t._v(" "),i("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:t.postSave}},[t._v("Import")]),t._v(" "),t.statusText?i("div",{staticClass:"alert alert-success col-md-5 col-md-offset-1",staticStyle:{"text-align":"left"}},[t._v(t._s(this.statusText))]):t._e()])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-md-4 col-xs-12"},[i("label",{attrs:{for:"import-type"}},[t._v("Import Type:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-md-4 col-xs-12"},[i("label",{attrs:{for:"import-update"}},[t._v("Update Existing Values?:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("th",[t._v("Header Field")]),t._v(" "),i("th",[t._v("Import Field")]),t._v(" "),i("th",[t._v("Sample Value")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.tokens.length>0?i("div",[i("div",{staticClass:"panel panel-default"},[i("div",{staticClass:"panel-heading"},[t._v("Authorized Applications")]),t._v(" "),i("div",{staticClass:"panel-body"},[i("table",{staticClass:"table table-borderless m-b-none"},[t._m(0),t._v(" "),i("tbody",t._l(t.tokens,function(e){return i("tr",[i("td",{staticStyle:{"vertical-align":"middle"}},[t._v("\n                                "+t._s(e.client.name)+"\n                            ")]),t._v(" "),i("td",{staticStyle:{"vertical-align":"middle"}},[e.scopes.length>0?i("span",[t._v("\n                                    "+t._s(e.scopes.join(", "))+"\n                                ")]):t._e()]),t._v(" "),i("td",{staticStyle:{"vertical-align":"middle"}},[i("a",{staticClass:"action-link text-danger",on:{click:function(i){t.revoke(e)}}},[t._v("\n                                    Revoke\n                                ")])])])}))])])])]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("th",[t._v("Name")]),t._v(" "),i("th",[t._v("Scopes")]),t._v(" "),i("th")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"panel panel-default"},[i("div",{staticClass:"panel-heading"},[i("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[i("span",[t._v("\n                    OAuth Clients\n                ")]),t._v(" "),i("a",{staticClass:"action-link",on:{click:t.showCreateClientForm}},[t._v("\n                    Create New Client\n                ")])])]),t._v(" "),i("div",{staticClass:"panel-body"},[0===t.clients.length?i("p",{staticClass:"m-b-none"},[t._v("\n                You have not created any OAuth clients.\n            ")]):t._e(),t._v(" "),t.clients.length>0?i("table",{staticClass:"table table-borderless m-b-none"},[t._m(0),t._v(" "),i("tbody",t._l(t.clients,function(e){return i("tr",[i("td",{staticStyle:{"vertical-align":"middle"}},[t._v("\n                            "+t._s(e.id)+"\n                        ")]),t._v(" "),i("td",{staticStyle:{"vertical-align":"middle"}},[t._v("\n                            "+t._s(e.name)+"\n                        ")]),t._v(" "),i("td",{staticStyle:{"vertical-align":"middle"}},[i("code",[t._v(t._s(e.secret))])]),t._v(" "),i("td",{staticStyle:{"vertical-align":"middle"}},[i("a",{staticClass:"action-link",on:{click:function(i){t.edit(e)}}},[t._v("\n                                Edit\n                            ")])]),t._v(" "),i("td",{staticStyle:{"vertical-align":"middle"}},[i("a",{staticClass:"action-link text-danger",on:{click:function(i){t.destroy(e)}}},[t._v("\n                                Delete\n                            ")])])])}))]):t._e()])]),t._v(" "),i("div",{staticClass:"modal fade",attrs:{id:"modal-create-client",tabindex:"-1",role:"dialog"}},[i("div",{staticClass:"modal-dialog"},[i("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),i("div",{staticClass:"modal-body"},[t.createForm.errors.length>0?i("div",{staticClass:"alert alert-danger"},[t._m(2),t._v(" "),i("br"),t._v(" "),i("ul",t._l(t.createForm.errors,function(e){return i("li",[t._v("\n                                "+t._s(e)+"\n                            ")])}))]):t._e(),t._v(" "),i("form",{staticClass:"form-horizontal",attrs:{role:"form"}},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-3 control-label"},[t._v("Name")]),t._v(" "),i("div",{staticClass:"col-md-7"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.createForm.name,expression:"createForm.name"}],staticClass:"form-control",attrs:{id:"create-client-name",type:"text"},domProps:{value:t.createForm.name},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.store(e)},input:function(e){e.target.composing||(t.createForm.name=e.target.value)}}}),t._v(" "),i("span",{staticClass:"help-block"},[t._v("\n                                    Something your users will recognize and trust.\n                                ")])])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-3 control-label"},[t._v("Redirect URL")]),t._v(" "),i("div",{staticClass:"col-md-7"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.createForm.redirect,expression:"createForm.redirect"}],staticClass:"form-control",attrs:{type:"text",name:"redirect"},domProps:{value:t.createForm.redirect},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.store(e)},input:function(e){e.target.composing||(t.createForm.redirect=e.target.value)}}}),t._v(" "),i("span",{staticClass:"help-block"},[t._v("\n                                    Your application's authorization callback URL.\n                                ")])])])])]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),i("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.store}},[t._v("\n                        Create\n                    ")])])])])]),t._v(" "),i("div",{staticClass:"modal fade",attrs:{id:"modal-edit-client",tabindex:"-1",role:"dialog"}},[i("div",{staticClass:"modal-dialog"},[i("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),i("div",{staticClass:"modal-body"},[t.editForm.errors.length>0?i("div",{staticClass:"alert alert-danger"},[t._m(4),t._v(" "),i("br"),t._v(" "),i("ul",t._l(t.editForm.errors,function(e){return i("li",[t._v("\n                                "+t._s(e)+"\n                            ")])}))]):t._e(),t._v(" "),i("form",{staticClass:"form-horizontal",attrs:{role:"form"}},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-3 control-label"},[t._v("Name")]),t._v(" "),i("div",{staticClass:"col-md-7"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.editForm.name,expression:"editForm.name"}],staticClass:"form-control",attrs:{id:"edit-client-name",type:"text"},domProps:{value:t.editForm.name},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.update(e)},input:function(e){e.target.composing||(t.editForm.name=e.target.value)}}}),t._v(" "),i("span",{staticClass:"help-block"},[t._v("\n                                    Something your users will recognize and trust.\n                                ")])])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-3 control-label"},[t._v("Redirect URL")]),t._v(" "),i("div",{staticClass:"col-md-7"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.editForm.redirect,expression:"editForm.redirect"}],staticClass:"form-control",attrs:{type:"text",name:"redirect"},domProps:{value:t.editForm.redirect},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.update(e)},input:function(e){e.target.composing||(t.editForm.redirect=e.target.value)}}}),t._v(" "),i("span",{staticClass:"help-block"},[t._v("\n                                    Your application's authorization callback URL.\n                                ")])])])])]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),i("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.update}},[t._v("\n                        Save Changes\n                    ")])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("th",[t._v("Client ID")]),t._v(" "),i("th",[t._v("Name")]),t._v(" "),i("th",[t._v("Secret")]),t._v(" "),i("th"),t._v(" "),i("th")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal-header"},[i("button",{staticClass:"close",attrs:{type:"button ","data-dismiss":"modal","aria-hidden":"true"}},[t._v("×")]),t._v(" "),i("h4",{staticClass:"modal-title"},[t._v("\n                        Create Client\n                    ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("strong",[t._v("Whoops!")]),t._v(" Something went wrong!")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal-header"},[i("button",{staticClass:"close",attrs:{type:"button ","data-dismiss":"modal","aria-hidden":"true"}},[t._v("×")]),t._v(" "),i("h4",{staticClass:"modal-title"},[t._v("\n                        Edit Client\n                    ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("strong",[t._v("Whoops!")]),t._v(" Something went wrong!")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("select",{staticStyle:{width:"100%"}},[t._t("default")],2)},staticRenderFns:[]}},function(t,e,i){"use strict";function n(t){this.state=B,this.value=void 0,this.deferred=[];var e=this;try{t(function(t){e.resolve(t)},function(t){e.reject(t)})}catch(t){e.reject(t)}}function r(t,e){t instanceof Promise?this.promise=t:this.promise=new Promise(t.bind(e)),this.context=e}function s(t){}function o(t){}function a(t,e){return K(t,e)}function l(t){return t?t.replace(/^\s*|\s*$/g,""):""}function u(t,e){return t&&void 0===e?t.replace(/\s+$/,""):t&&e?t.replace(new RegExp("["+e+"]+$"),""):t}function c(t){return t?t.toLowerCase():""}function h(t){return t?t.toUpperCase():""}function d(t){return"string"==typeof t}function p(t){return"function"==typeof t}function f(t){return null!==t&&"object"==typeof t}function g(t){return f(t)&&Object.getPrototypeOf(t)==Object.prototype}function m(t){return"undefined"!=typeof Blob&&t instanceof Blob}function v(t){return"undefined"!=typeof FormData&&t instanceof FormData}function _(t,e,i){var n=r.resolve(t);return arguments.length<2?n:n.then(e,i)}function y(t,e,i){return i=i||{},p(i)&&(i=i.call(e)),w(t.bind({$vm:e,$options:i}),t,{$options:i})}function b(t,e){var i,n;if(it(t))for(i=0;i<t.length;i++)e.call(t[i],t[i],i);else if(f(t))for(n in t)G.call(t,n)&&e.call(t[n],t[n],n);return t}function w(t){return J.call(arguments,1).forEach(function(e){k(t,e,!0)}),t}function x(t){return J.call(arguments,1).forEach(function(e){for(var i in e)void 0===t[i]&&(t[i]=e[i])}),t}function C(t){return J.call(arguments,1).forEach(function(e){k(t,e)}),t}function k(t,e,i){for(var n in e)i&&(g(e[n])||it(e[n]))?(g(e[n])&&!g(t[n])&&(t[n]={}),it(e[n])&&!it(t[n])&&(t[n]=[]),k(t[n],e[n],i)):void 0!==e[n]&&(t[n]=e[n])}function T(t,e,i){var n=D(t),r=n.expand(e);return i&&i.push.apply(i,n.vars),r}function D(t){var e=["+","#",".","/",";","?","&"],i=[];return{vars:i,expand:function(n){return t.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(t,r,s){if(r){var o=null,a=[];if(-1!==e.indexOf(r.charAt(0))&&(o=r.charAt(0),r=r.substr(1)),r.split(/,/g).forEach(function(t){var e=/([^:\*]*)(?::(\d+)|(\*))?/.exec(t);a.push.apply(a,S(n,o,e[1],e[2]||e[3])),i.push(e[1])}),o&&"+"!==o){var l=",";return"?"===o?l="&":"#"!==o&&(l=o),(0!==a.length?o:"")+a.join(l)}return a.join(",")}return $(s)})}}}function S(t,e,i,n){var r=t[i],s=[];if(A(r)&&""!==r)if("string"==typeof r||"number"==typeof r||"boolean"==typeof r)r=r.toString(),n&&"*"!==n&&(r=r.substring(0,parseInt(n,10))),s.push(I(e,r,E(e)?i:null));else if("*"===n)Array.isArray(r)?r.filter(A).forEach(function(t){s.push(I(e,t,E(e)?i:null))}):Object.keys(r).forEach(function(t){A(r[t])&&s.push(I(e,r[t],t))});else{var o=[];Array.isArray(r)?r.filter(A).forEach(function(t){o.push(I(e,t))}):Object.keys(r).forEach(function(t){A(r[t])&&(o.push(encodeURIComponent(t)),o.push(I(e,r[t].toString())))}),E(e)?s.push(encodeURIComponent(i)+"="+o.join(",")):0!==o.length&&s.push(o.join(","))}else";"===e?s.push(encodeURIComponent(i)):""!==r||"&"!==e&&"?"!==e?""===r&&s.push(""):s.push(encodeURIComponent(i)+"=");return s}function A(t){return void 0!==t&&null!==t}function E(t){return";"===t||"&"===t||"?"===t}function I(t,e,i){return e="+"===t||"#"===t?$(e):encodeURIComponent(e),i?encodeURIComponent(i)+"="+e:e}function $(t){return t.split(/(%[0-9A-Fa-f]{2})/g).map(function(t){return/%[0-9A-Fa-f]/.test(t)||(t=encodeURI(t)),t}).join("")}function O(t,e){var i,n=this||{},r=t;return d(t)&&(r={url:t,params:e}),r=w({},O.options,n.$options,r),O.transforms.forEach(function(t){d(t)&&(t=O.transform[t]),p(t)&&(i=P(t,i,n.$vm))}),i(r)}function P(t,e,i){return function(n){return t.call(i,n,e)}}function N(t,e,i){var n,r=it(e),s=g(e);b(e,function(e,o){n=f(e)||it(e),i&&(o=i+"["+(s||n?o:"")+"]"),!i&&r?t.add(e.name,e.value):n?N(t,e,o):t.add(o,e)})}function M(t){var e=t.match(/^\[|^\{(?!\{)/),i={"[":/]$/,"{":/}$/};return e&&i[e[0]].test(t)}function j(t,e){e((t.client||(tt?vt:_t))(t))}function H(t,e){return Object.keys(t).reduce(function(t,i){return c(e)===c(i)?i:t},null)}function R(t){if(/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return l(t)}function L(t){return new r(function(e){var i=new FileReader;i.readAsText(t),i.onload=function(){e(i.result)}})}function F(t){return 0===t.type.indexOf("text")||-1!==t.type.indexOf("json")}function z(t){var e=this||{},i=yt(e.$vm);return x(t||{},e.$options,z.options),z.interceptors.forEach(function(t){d(t)&&(t=z.interceptor[t]),p(t)&&i.use(t)}),i(new xt(t)).then(function(t){return t.ok?t:r.reject(t)},function(t){return t instanceof Error&&o(t),r.reject(t)})}function W(t,e,i,n){var r=this||{},s={};return i=nt({},W.actions,i),b(i,function(i,o){i=w({url:t,params:nt({},e)},n,i),s[o]=function(){return(r.$http||z)(q(i,arguments))}}),s}function q(t,e){var i,n=nt({},t),r={};switch(e.length){case 2:r=e[0],i=e[1];break;case 1:/^(POST|PUT|PATCH)$/i.test(n.method)?i=e[0]:r=e[0];break;case 0:break;default:throw"Expected up to 2 arguments [params, body], got "+e.length+" arguments"}return n.body=i,n.params=nt({},n.params,r),n}function U(t){U.installed||(et(t),t.url=O,t.http=z,t.resource=W,t.Promise=r,Object.defineProperties(t.prototype,{$url:{get:function(){return y(t.url,this,this.$options.url)}},$http:{get:function(){return y(t.http,this,this.$options.http)}},$resource:{get:function(){return t.resource.bind(this)}},$promise:{get:function(){var e=this;return function(i){return new t.Promise(i,e)}}}}))}Object.defineProperty(e,"__esModule",{value:!0}),i.d(e,"Url",function(){return O}),i.d(e,"Http",function(){return z}),i.d(e,"Resource",function(){return W});/*!
 * vue-resource v1.3.3
 * https://github.com/pagekit/vue-resource
 * Released under the MIT License.
 */
var B=2;n.reject=function(t){return new n(function(e,i){i(t)})},n.resolve=function(t){return new n(function(e,i){e(t)})},n.all=function(t){return new n(function(e,i){var r=0,s=[];0===t.length&&e(s);for(var o=0;o<t.length;o+=1)n.resolve(t[o]).then(function(i){return function(n){s[i]=n,(r+=1)===t.length&&e(s)}}(o),i)})},n.race=function(t){return new n(function(e,i){for(var r=0;r<t.length;r+=1)n.resolve(t[r]).then(e,i)})};var Y=n.prototype;Y.resolve=function(t){var e=this;if(e.state===B){if(t===e)throw new TypeError("Promise settled with itself.");var i=!1;try{var n=t&&t.then;if(null!==t&&"object"==typeof t&&"function"==typeof n)return void n.call(t,function(t){i||e.resolve(t),i=!0},function(t){i||e.reject(t),i=!0})}catch(t){return void(i||e.reject(t))}e.state=0,e.value=t,e.notify()}},Y.reject=function(t){var e=this;if(e.state===B){if(t===e)throw new TypeError("Promise settled with itself.");e.state=1,e.value=t,e.notify()}},Y.notify=function(){var t=this;a(function(){if(t.state!==B)for(;t.deferred.length;){var e=t.deferred.shift(),i=e[0],n=e[1],r=e[2],s=e[3];try{0===t.state?r("function"==typeof i?i.call(void 0,t.value):t.value):1===t.state&&("function"==typeof n?r(n.call(void 0,t.value)):s(t.value))}catch(t){s(t)}}})},Y.then=function(t,e){var i=this;return new n(function(n,r){i.deferred.push([t,e,n,r]),i.notify()})},Y.catch=function(t){return this.then(void 0,t)},"undefined"==typeof Promise&&(window.Promise=n),r.all=function(t,e){return new r(Promise.all(t),e)},r.resolve=function(t,e){return new r(Promise.resolve(t),e)},r.reject=function(t,e){return new r(Promise.reject(t),e)},r.race=function(t,e){return new r(Promise.race(t),e)};var V=r.prototype;V.bind=function(t){return this.context=t,this},V.then=function(t,e){return t&&t.bind&&this.context&&(t=t.bind(this.context)),e&&e.bind&&this.context&&(e=e.bind(this.context)),new r(this.promise.then(t,e),this.context)},V.catch=function(t){return t&&t.bind&&this.context&&(t=t.bind(this.context)),new r(this.promise.catch(t),this.context)},V.finally=function(t){return this.then(function(e){return t.call(this),e},function(e){return t.call(this),Promise.reject(e)})};var K,X={},G=X.hasOwnProperty,Z=[],J=Z.slice,Q=!1,tt="undefined"!=typeof window,et=function(t){var e=t.config,i=t.nextTick;K=i,Q=e.debug||!e.silent},it=Array.isArray,nt=Object.assign||C,rt=function(t,e){var i=e(t);return d(t.root)&&!/^(https?:)?\//.test(i)&&(i=u(t.root,"/")+"/"+i),i},st=function(t,e){var i=Object.keys(O.options.params),n={},r=e(t);return b(t.params,function(t,e){-1===i.indexOf(e)&&(n[e]=t)}),n=O.params(n),n&&(r+=(-1==r.indexOf("?")?"?":"&")+n),r},ot=function(t){var e=[],i=T(t.url,t.params,e);return e.forEach(function(e){delete t.params[e]}),i};O.options={url:"",root:null,params:{}},O.transform={template:ot,query:st,root:rt},O.transforms=["template","query","root"],O.params=function(t){var e=[],i=encodeURIComponent;return e.add=function(t,e){p(e)&&(e=e()),null===e&&(e=""),this.push(i(t)+"="+i(e))},N(e,t),e.join("&").replace(/%20/g,"+")},O.parse=function(t){var e=document.createElement("a");return document.documentMode&&(e.href=t,t=e.href),e.href=t,{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",port:e.port,host:e.host,hostname:e.hostname,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):""}};var at=function(t){return new r(function(e){var i=new XDomainRequest,n=function(n){var r=n.type,s=0;"load"===r?s=200:"error"===r&&(s=500),e(t.respondWith(i.responseText,{status:s}))};t.abort=function(){return i.abort()},i.open(t.method,t.getUrl()),t.timeout&&(i.timeout=t.timeout),i.onload=n,i.onabort=n,i.onerror=n,i.ontimeout=n,i.onprogress=function(){},i.send(t.getBody())})},lt=tt&&"withCredentials"in new XMLHttpRequest,ut=function(t,e){if(tt){var i=O.parse(location.href),n=O.parse(t.getUrl());n.protocol===i.protocol&&n.host===i.host||(t.crossOrigin=!0,t.emulateHTTP=!1,lt||(t.client=at))}e()},ct=function(t,e){v(t.body)?t.headers.delete("Content-Type"):f(t.body)&&t.emulateJSON&&(t.body=O.params(t.body),t.headers.set("Content-Type","application/x-www-form-urlencoded")),e()},ht=function(t,e){var i=t.headers.get("Content-Type")||"";f(t.body)&&0===i.indexOf("application/json")&&(t.body=JSON.stringify(t.body)),e(function(t){return t.bodyText?_(t.text(),function(e){if(i=t.headers.get("Content-Type")||"",0===i.indexOf("application/json")||M(e))try{t.body=JSON.parse(e)}catch(e){t.body=null}else t.body=e;return t}):t})},dt=function(t){return new r(function(e){var i,n,r=t.jsonp||"callback",s=t.jsonpCallback||"_jsonp"+Math.random().toString(36).substr(2),o=null;i=function(i){var r=i.type,a=0;"load"===r&&null!==o?a=200:"error"===r&&(a=500),a&&window[s]&&(delete window[s],document.body.removeChild(n)),e(t.respondWith(o,{status:a}))},window[s]=function(t){o=JSON.stringify(t)},t.abort=function(){i({type:"abort"})},t.params[r]=s,t.timeout&&setTimeout(t.abort,t.timeout),n=document.createElement("script"),n.src=t.getUrl(),n.type="text/javascript",n.async=!0,n.onload=i,n.onerror=i,document.body.appendChild(n)})},pt=function(t,e){"JSONP"==t.method&&(t.client=dt),e()},ft=function(t,e){p(t.before)&&t.before.call(this,t),e()},gt=function(t,e){t.emulateHTTP&&/^(PUT|PATCH|DELETE)$/i.test(t.method)&&(t.headers.set("X-HTTP-Method-Override",t.method),t.method="POST"),e()},mt=function(t,e){b(nt({},z.headers.common,t.crossOrigin?{}:z.headers.custom,z.headers[c(t.method)]),function(e,i){t.headers.has(i)||t.headers.set(i,e)}),e()},vt=function(t){return new r(function(e){var i=new XMLHttpRequest,n=function(n){var r=t.respondWith("response"in i?i.response:i.responseText,{status:1223===i.status?204:i.status,statusText:1223===i.status?"No Content":l(i.statusText)});b(l(i.getAllResponseHeaders()).split("\n"),function(t){r.headers.append(t.slice(0,t.indexOf(":")),t.slice(t.indexOf(":")+1))}),e(r)};t.abort=function(){return i.abort()},t.progress&&("GET"===t.method?i.addEventListener("progress",t.progress):/^(POST|PUT)$/i.test(t.method)&&i.upload.addEventListener("progress",t.progress)),i.open(t.method,t.getUrl(),!0),t.timeout&&(i.timeout=t.timeout),t.responseType&&"responseType"in i&&(i.responseType=t.responseType),(t.withCredentials||t.credentials)&&(i.withCredentials=!0),t.crossOrigin||t.headers.set("X-Requested-With","XMLHttpRequest"),t.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.onload=n,i.onabort=n,i.onerror=n,i.ontimeout=n,i.send(t.getBody())})},_t=function(t){var e=i(61);return new r(function(i){var n,r=t.getUrl(),s=t.getBody(),o=t.method,a={};t.headers.forEach(function(t,e){a[e]=t}),e(r,{body:s,method:o,headers:a}).then(n=function(e){var n=t.respondWith(e.body,{status:e.statusCode,statusText:l(e.statusMessage)});b(e.headers,function(t,e){n.headers.set(e,t)}),i(n)},function(t){return n(t.response)})})},yt=function(t){function e(e){return new r(function(r){function a(){i=n.pop(),p(i)?i.call(t,e,l):(s("Invalid interceptor of type "+typeof i+", must be a function"),l())}function l(e){if(p(e))o.unshift(e);else if(f(e))return o.forEach(function(i){e=_(e,function(e){return i.call(t,e)||e})}),void _(e,r);a()}a()},t)}var i,n=[j],o=[];return f(t)||(t=null),e.use=function(t){n.push(t)},e},bt=function(t){var e=this;this.map={},b(t,function(t,i){return e.append(i,t)})};bt.prototype.has=function(t){return null!==H(this.map,t)},bt.prototype.get=function(t){var e=this.map[H(this.map,t)];return e?e.join():null},bt.prototype.getAll=function(t){return this.map[H(this.map,t)]||[]},bt.prototype.set=function(t,e){this.map[R(H(this.map,t)||t)]=[l(e)]},bt.prototype.append=function(t,e){var i=this.map[H(this.map,t)];i?i.push(l(e)):this.set(t,e)},bt.prototype.delete=function(t){delete this.map[H(this.map,t)]},bt.prototype.deleteAll=function(){this.map={}},bt.prototype.forEach=function(t,e){var i=this;b(this.map,function(n,r){b(n,function(n){return t.call(e,n,r,i)})})};var wt=function(t,e){var i=e.url,n=e.headers,r=e.status,s=e.statusText;this.url=i,this.ok=r>=200&&r<300,this.status=r||0,this.statusText=s||"",this.headers=new bt(n),this.body=t,d(t)?this.bodyText=t:m(t)&&(this.bodyBlob=t,F(t)&&(this.bodyText=L(t)))};wt.prototype.blob=function(){return _(this.bodyBlob)},wt.prototype.text=function(){return _(this.bodyText)},wt.prototype.json=function(){return _(this.text(),function(t){return JSON.parse(t)})},Object.defineProperty(wt.prototype,"data",{get:function(){return this.body},set:function(t){this.body=t}});var xt=function(t){this.body=null,this.params={},nt(this,t,{method:h(t.method||"GET")}),this.headers instanceof bt||(this.headers=new bt(this.headers))};xt.prototype.getUrl=function(){return O(this)},xt.prototype.getBody=function(){return this.body},xt.prototype.respondWith=function(t,e){return new wt(t,nt(e||{},{url:this.getUrl()}))};var Ct={Accept:"application/json, text/plain, */*"},kt={"Content-Type":"application/json;charset=utf-8"};z.options={},z.headers={put:kt,post:kt,patch:kt,delete:kt,common:Ct,custom:{}},z.interceptor={before:ft,method:gt,jsonp:pt,json:ht,form:ct,header:mt,cors:ut},z.interceptors=["before","method","jsonp","json","form","header","cors"],["get","delete","head","jsonp"].forEach(function(t){z[t]=function(e,i){return this(nt(i||{},{url:e,method:t}))}}),["post","put","patch"].forEach(function(t){z[t]=function(e,i,n){return this(nt(n||{},{url:e,method:t,body:i}))}}),W.actions={get:{method:"GET"},save:{method:"POST"},query:{method:"GET"},update:{method:"PUT"},remove:{method:"DELETE"},delete:{method:"DELETE"}},"undefined"!=typeof window&&window.Vue&&window.Vue.use(U),e.default=U},function(t,e,i){var n=i(21);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(2)("8f4ff93a",n,!0)},function(t,e,i){var n=i(22);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(2)("7c4ed951",n,!0)},function(t,e,i){var n=i(23);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(2)("717c9dce",n,!0)},function(t,e,i){var n=i(24);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(2)("1dd8eaae",n,!0)},function(t,e,i){var n=i(25);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(2)("26b4c516",n,!0)},function(t,e,i){var n=i(26);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(2)("1789f86f",n,!0)},function(t,e,i){var n=i(27);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(2)("73719aac",n,!0)},function(t,e,i){var n=i(28);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(2)("664d54ac",n,!0)},function(t,e){t.exports=function(t,e){for(var i=[],n={},r=0;r<e.length;r++){var s=e[r],o=s[0],a=s[1],l=s[2],u=s[3],c={id:t+":"+r,css:a,media:l,sourceMap:u};n[o]?n[o].parts.push(c):i.push(n[o]={id:o,parts:[c]})}return i}},function(t,e,i){"use strict";(function(e){/*!
 * Vue.js v2.3.3
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
function i(t){return void 0===t||null===t}function n(t){return void 0!==t&&null!==t}function r(t){return!0===t}function s(t){return!1===t}function o(t){return"string"==typeof t||"number"==typeof t}function a(t){return null!==t&&"object"==typeof t}function l(t){return"[object Object]"===$r.call(t)}function u(t){return"[object RegExp]"===$r.call(t)}function c(t){return null==t?"":"object"==typeof t?JSON.stringify(t,null,2):String(t)}function h(t){var e=parseFloat(t);return isNaN(e)?t:e}function d(t,e){for(var i=Object.create(null),n=t.split(","),r=0;r<n.length;r++)i[n[r]]=!0;return e?function(t){return i[t.toLowerCase()]}:function(t){return i[t]}}function p(t,e){if(t.length){var i=t.indexOf(e);if(i>-1)return t.splice(i,1)}}function f(t,e){return Pr.call(t,e)}function g(t){var e=Object.create(null);return function(i){return e[i]||(e[i]=t(i))}}function m(t,e){function i(i){var n=arguments.length;return n?n>1?t.apply(e,arguments):t.call(e,i):t.call(e)}return i._length=t.length,i}function v(t,e){e=e||0;for(var i=t.length-e,n=new Array(i);i--;)n[i]=t[i+e];return n}function _(t,e){for(var i in e)t[i]=e[i];return t}function y(t){for(var e={},i=0;i<t.length;i++)t[i]&&_(e,t[i]);return e}function b(){}function w(t,e){var i=a(t),n=a(e);if(!i||!n)return!i&&!n&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(i){return t===e}}function x(t,e){for(var i=0;i<t.length;i++)if(w(t[i],e))return i;return-1}function C(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function k(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function T(t,e,i,n){Object.defineProperty(t,e,{value:i,enumerable:!!n,writable:!0,configurable:!0})}function D(t){if(!Yr.test(t)){var e=t.split(".");return function(t){for(var i=0;i<e.length;i++){if(!t)return;t=t[e[i]]}return t}}}function S(t,e,i){if(Ur.errorHandler)Ur.errorHandler.call(null,t,e,i);else if(!Xr||"undefined"==typeof console)throw t}function A(t){return"function"==typeof t&&/native code/.test(t.toString())}function E(t){ds.target&&ps.push(ds.target),ds.target=t}function I(){ds.target=ps.pop()}function $(t,e){t.__proto__=e}function O(t,e,i){for(var n=0,r=i.length;n<r;n++){var s=i[n];T(t,s,e[s])}}function P(t,e){if(a(t)){var i;return f(t,"__ob__")&&t.__ob__ instanceof _s?i=t.__ob__:vs.shouldConvert&&!as()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(i=new _s(t)),e&&i&&i.vmCount++,i}}function N(t,e,i,n){var r=new ds,s=Object.getOwnPropertyDescriptor(t,e);if(!s||!1!==s.configurable){var o=s&&s.get,a=s&&s.set,l=P(i);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=o?o.call(t):i;return ds.target&&(r.depend(),l&&l.dep.depend(),Array.isArray(e)&&H(e)),e},set:function(e){var n=o?o.call(t):i;e===n||e!==e&&n!==n||(a?a.call(t,e):i=e,l=P(e),r.notify())}})}}function M(t,e,i){if(Array.isArray(t)&&"number"==typeof e)return t.length=Math.max(t.length,e),t.splice(e,1,i),i;if(f(t,e))return t[e]=i,i;var n=t.__ob__;return t._isVue||n&&n.vmCount?i:n?(N(n.value,e,i),n.dep.notify(),i):(t[e]=i,i)}function j(t,e){if(Array.isArray(t)&&"number"==typeof e)return void t.splice(e,1);var i=t.__ob__;t._isVue||i&&i.vmCount||f(t,e)&&(delete t[e],i&&i.dep.notify())}function H(t){for(var e=void 0,i=0,n=t.length;i<n;i++)e=t[i],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&H(e)}function R(t,e){if(!e)return t;for(var i,n,r,s=Object.keys(e),o=0;o<s.length;o++)i=s[o],n=t[i],r=e[i],f(t,i)?l(n)&&l(r)&&R(n,r):M(t,i,r);return t}function L(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function F(t,e){var i=Object.create(t||null);return e?_(i,e):i}function z(t){var e=t.props;if(e){var i,n,r,s={};if(Array.isArray(e))for(i=e.length;i--;)"string"==typeof(n=e[i])&&(r=Mr(n),s[r]={type:null});else if(l(e))for(var o in e)n=e[o],r=Mr(o),s[r]=l(n)?n:{type:n};t.props=s}}function W(t){var e=t.directives;if(e)for(var i in e){var n=e[i];"function"==typeof n&&(e[i]={bind:n,update:n})}}function q(t,e,i){function n(n){var r=ys[n]||bs;l[n]=r(t[n],e[n],i,n)}"function"==typeof e&&(e=e.options),z(e),W(e);var r=e.extends;if(r&&(t=q(t,r,i)),e.mixins)for(var s=0,o=e.mixins.length;s<o;s++)t=q(t,e.mixins[s],i);var a,l={};for(a in t)n(a);for(a in e)f(t,a)||n(a);return l}function U(t,e,i,n){if("string"==typeof i){var r=t[e];if(f(r,i))return r[i];var s=Mr(i);if(f(r,s))return r[s];var o=jr(s);if(f(r,o))return r[o];return r[i]||r[s]||r[o]}}function B(t,e,i,n){var r=e[t],s=!f(i,t),o=i[t];if(K(Boolean,r.type)&&(s&&!f(r,"default")?o=!1:K(String,r.type)||""!==o&&o!==Rr(t)||(o=!0)),void 0===o){o=Y(n,r,t);var a=vs.shouldConvert;vs.shouldConvert=!0,P(o),vs.shouldConvert=a}return o}function Y(t,e,i){if(f(e,"default")){var n=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[i]&&void 0!==t._props[i]?t._props[i]:"function"==typeof n&&"Function"!==V(e.type)?n.call(t):n}}function V(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function K(t,e){if(!Array.isArray(e))return V(e)===V(t);for(var i=0,n=e.length;i<n;i++)if(V(e[i])===V(t))return!0;return!1}function X(t){return new ws(void 0,void 0,void 0,String(t))}function G(t){var e=new ws(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function Z(t){for(var e=t.length,i=new Array(e),n=0;n<e;n++)i[n]=G(t[n]);return i}function J(t){function e(){var t=arguments,i=e.fns;if(!Array.isArray(i))return i.apply(null,arguments);for(var n=0;n<i.length;n++)i[n].apply(null,t)}return e.fns=t,e}function Q(t,e,n,r,s){var o,a,l,u;for(o in t)a=t[o],l=e[o],u=Ts(o),i(a)||(i(l)?(i(a.fns)&&(a=t[o]=J(a)),n(u.name,a,u.once,u.capture,u.passive)):a!==l&&(l.fns=a,t[o]=l));for(o in e)i(t[o])&&(u=Ts(o),r(u.name,e[o],u.capture))}function tt(t,e,s){function o(){s.apply(this,arguments),p(a.fns,o)}var a,l=t[e];i(l)?a=J([o]):n(l.fns)&&r(l.merged)?(a=l,a.fns.push(o)):a=J([l,o]),a.merged=!0,t[e]=a}function et(t,e,r){var s=e.options.props;if(!i(s)){var o={},a=t.attrs,l=t.props;if(n(a)||n(l))for(var u in s){var c=Rr(u);it(o,l,u,c,!0)||it(o,a,u,c,!1)}return o}}function it(t,e,i,r,s){if(n(e)){if(f(e,i))return t[i]=e[i],s||delete e[i],!0;if(f(e,r))return t[i]=e[r],s||delete e[r],!0}return!1}function nt(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function rt(t){return o(t)?[X(t)]:Array.isArray(t)?ot(t):void 0}function st(t){return n(t)&&n(t.text)&&s(t.isComment)}function ot(t,e){var s,a,l,u=[];for(s=0;s<t.length;s++)a=t[s],i(a)||"boolean"==typeof a||(l=u[u.length-1],Array.isArray(a)?u.push.apply(u,ot(a,(e||"")+"_"+s)):o(a)?st(l)?l.text+=String(a):""!==a&&u.push(X(a)):st(a)&&st(l)?u[u.length-1]=X(l.text+a.text):(r(t._isVList)&&n(a.tag)&&i(a.key)&&n(e)&&(a.key="__vlist"+e+"_"+s+"__"),u.push(a)));return u}function at(t,e){return a(t)?e.extend(t):t}function lt(t,e,s){if(r(t.error)&&n(t.errorComp))return t.errorComp;if(n(t.resolved))return t.resolved;if(r(t.loading)&&n(t.loadingComp))return t.loadingComp;if(!n(t.contexts)){var o=t.contexts=[s],l=!0,u=function(){for(var t=0,e=o.length;t<e;t++)o[t].$forceUpdate()},c=C(function(i){t.resolved=at(i,e),l||u()}),h=C(function(e){n(t.errorComp)&&(t.error=!0,u())}),d=t(c,h);return a(d)&&("function"==typeof d.then?i(t.resolved)&&d.then(c,h):n(d.component)&&"function"==typeof d.component.then&&(d.component.then(c,h),n(d.error)&&(t.errorComp=at(d.error,e)),n(d.loading)&&(t.loadingComp=at(d.loading,e),0===d.delay?t.loading=!0:setTimeout(function(){i(t.resolved)&&i(t.error)&&(t.loading=!0,u())},d.delay||200)),n(d.timeout)&&setTimeout(function(){i(t.resolved)&&h(null)},d.timeout))),l=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(s)}function ut(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var i=t[e];if(n(i)&&n(i.componentOptions))return i}}function ct(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&pt(t,e)}function ht(t,e,i){i?Cs.$once(t,e):Cs.$on(t,e)}function dt(t,e){Cs.$off(t,e)}function pt(t,e,i){Cs=t,Q(e,i||{},ht,dt,t)}function ft(t,e){var i={};if(!t)return i;for(var n=[],r=0,s=t.length;r<s;r++){var o=t[r];if(o.context!==e&&o.functionalContext!==e||!o.data||null==o.data.slot)n.push(o);else{var a=o.data.slot,l=i[a]||(i[a]=[]);"template"===o.tag?l.push.apply(l,o.children):l.push(o)}}return n.every(gt)||(i.default=n),i}function gt(t){return t.isComment||" "===t.text}function mt(t,e){e=e||{};for(var i=0;i<t.length;i++)Array.isArray(t[i])?mt(t[i],e):e[t[i].key]=t[i].fn;return e}function vt(t){var e=t.$options,i=e.parent;if(i&&!e.abstract){for(;i.$options.abstract&&i.$parent;)i=i.$parent;i.$children.push(t)}t.$parent=i,t.$root=i?i.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function _t(t,e,i){t.$el=e,t.$options.render||(t.$options.render=ks),Ct(t,"beforeMount");var n;return n=function(){t._update(t._render(),i)},t._watcher=new Ns(t,n,b),i=!1,null==t.$vnode&&(t._isMounted=!0,Ct(t,"mounted")),t}function yt(t,e,i,n,r){var s=!!(r||t.$options._renderChildren||n.data.scopedSlots||t.$scopedSlots!==Br);if(t.$options._parentVnode=n,t.$vnode=n,t._vnode&&(t._vnode.parent=n),t.$options._renderChildren=r,e&&t.$options.props){vs.shouldConvert=!1;for(var o=t._props,a=t.$options._propKeys||[],l=0;l<a.length;l++){var u=a[l];o[u]=B(u,t.$options.props,e,t)}vs.shouldConvert=!0,t.$options.propsData=e}if(i){var c=t.$options._parentListeners;t.$options._parentListeners=i,pt(t,i,c)}s&&(t.$slots=ft(r,n.context),t.$forceUpdate())}function bt(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function wt(t,e){if(e){if(t._directInactive=!1,bt(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var i=0;i<t.$children.length;i++)wt(t.$children[i]);Ct(t,"activated")}}function xt(t,e){if(!(e&&(t._directInactive=!0,bt(t))||t._inactive)){t._inactive=!0;for(var i=0;i<t.$children.length;i++)xt(t.$children[i]);Ct(t,"deactivated")}}function Ct(t,e){var i=t.$options[e];if(i)for(var n=0,r=i.length;n<r;n++)try{i[n].call(t)}catch(i){S(i,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}function kt(){Os=Ss.length=As.length=0,Es={},Is=$s=!1}function Tt(){$s=!0;var t,e;for(Ss.sort(function(t,e){return t.id-e.id}),Os=0;Os<Ss.length;Os++)t=Ss[Os],e=t.id,Es[e]=null,t.run();var i=As.slice(),n=Ss.slice();kt(),At(i),Dt(n),ls&&Ur.devtools&&ls.emit("flush")}function Dt(t){for(var e=t.length;e--;){var i=t[e],n=i.vm;n._watcher===i&&n._isMounted&&Ct(n,"updated")}}function St(t){t._inactive=!1,As.push(t)}function At(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,wt(t[e],!0)}function Et(t){var e=t.id;if(null==Es[e]){if(Es[e]=!0,$s){for(var i=Ss.length-1;i>Os&&Ss[i].id>t.id;)i--;Ss.splice(i+1,0,t)}else Ss.push(t);Is||(Is=!0,cs(Tt))}}function It(t){Ms.clear(),$t(t,Ms)}function $t(t,e){var i,n,r=Array.isArray(t);if((r||a(t))&&Object.isExtensible(t)){if(t.__ob__){var s=t.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(r)for(i=t.length;i--;)$t(t[i],e);else for(n=Object.keys(t),i=n.length;i--;)$t(t[n[i]],e)}}function Ot(t,e,i){js.get=function(){return this[e][i]},js.set=function(t){this[e][i]=t},Object.defineProperty(t,i,js)}function Pt(t){t._watchers=[];var e=t.$options;e.props&&Nt(t,e.props),e.methods&&Ft(t,e.methods),e.data?Mt(t):P(t._data={},!0),e.computed&&Ht(t,e.computed),e.watch&&zt(t,e.watch)}function Nt(t,e){var i=t.$options.propsData||{},n=t._props={},r=t.$options._propKeys=[],s=!t.$parent;vs.shouldConvert=s;for(var o in e)!function(s){r.push(s);var o=B(s,e,i,t);N(n,s,o),s in t||Ot(t,"_props",s)}(o);vs.shouldConvert=!0}function Mt(t){var e=t.$options.data;e=t._data="function"==typeof e?jt(e,t):e||{},l(e)||(e={});for(var i=Object.keys(e),n=t.$options.props,r=i.length;r--;)n&&f(n,i[r])||k(i[r])||Ot(t,"_data",i[r]);P(e,!0)}function jt(t,e){try{return t.call(e)}catch(t){return S(t,e,"data()"),{}}}function Ht(t,e){var i=t._computedWatchers=Object.create(null);for(var n in e){var r=e[n],s="function"==typeof r?r:r.get;i[n]=new Ns(t,s,b,Hs),n in t||Rt(t,n,r)}}function Rt(t,e,i){"function"==typeof i?(js.get=Lt(e),js.set=b):(js.get=i.get?!1!==i.cache?Lt(e):i.get:b,js.set=i.set?i.set:b),Object.defineProperty(t,e,js)}function Lt(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ds.target&&e.depend(),e.value}}function Ft(t,e){t.$options.props;for(var i in e)t[i]=null==e[i]?b:m(e[i],t)}function zt(t,e){for(var i in e){var n=e[i];if(Array.isArray(n))for(var r=0;r<n.length;r++)Wt(t,i,n[r]);else Wt(t,i,n)}}function Wt(t,e,i){var n;l(i)&&(n=i,i=i.handler),"string"==typeof i&&(i=t[i]),t.$watch(e,i,n)}function qt(t){var e=t.$options.provide;e&&(t._provided="function"==typeof e?e.call(t):e)}function Ut(t){var e=Bt(t.$options.inject,t);e&&Object.keys(e).forEach(function(i){N(t,i,e[i])})}function Bt(t,e){if(t){for(var i=Array.isArray(t),n=Object.create(null),r=i?t:us?Reflect.ownKeys(t):Object.keys(t),s=0;s<r.length;s++)for(var o=r[s],a=i?o:t[o],l=e;l;){if(l._provided&&a in l._provided){n[o]=l._provided[a];break}l=l.$parent}return n}}function Yt(t,e,i,r,s){var o={},a=t.options.props;if(n(a))for(var l in a)o[l]=B(l,a,e||{});else n(i.attrs)&&Vt(o,i.attrs),n(i.props)&&Vt(o,i.props);var u=Object.create(r),c=function(t,e,i,n){return Qt(u,t,e,i,n,!0)},h=t.options.render.call(null,c,{data:i,props:o,children:s,parent:r,listeners:i.on||{},injections:Bt(t.options.inject,r),slots:function(){return ft(s,r)}});return h instanceof ws&&(h.functionalContext=r,h.functionalOptions=t.options,i.slot&&((h.data||(h.data={})).slot=i.slot)),h}function Vt(t,e){for(var i in e)t[Mr(i)]=e[i]}function Kt(t,e,s,o,l){if(!i(t)){var u=s.$options._base;if(a(t)&&(t=u.extend(t)),"function"==typeof t&&(!i(t.cid)||void 0!==(t=lt(t,u,s)))){pe(t),e=e||{},n(e.model)&&Jt(t.options,e);var c=et(e,t,l);if(r(t.options.functional))return Yt(t,c,e,s,o);var h=e.on;e.on=e.nativeOn,r(t.options.abstract)&&(e={}),Gt(e);var d=t.options.name||l;return new ws("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,s,{Ctor:t,propsData:c,listeners:h,tag:l,children:o})}}}function Xt(t,e,i,r){var s=t.componentOptions,o={_isComponent:!0,parent:e,propsData:s.propsData,_componentTag:s.tag,_parentVnode:t,_parentListeners:s.listeners,_renderChildren:s.children,_parentElm:i||null,_refElm:r||null},a=t.data.inlineTemplate;return n(a)&&(o.render=a.render,o.staticRenderFns=a.staticRenderFns),new s.Ctor(o)}function Gt(t){t.hook||(t.hook={});for(var e=0;e<Ls.length;e++){var i=Ls[e],n=t.hook[i],r=Rs[i];t.hook[i]=n?Zt(r,n):r}}function Zt(t,e){return function(i,n,r,s){t(i,n,r,s),e(i,n,r,s)}}function Jt(t,e){var i=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.props||(e.props={}))[i]=e.model.value;var s=e.on||(e.on={});n(s[r])?s[r]=[e.model.callback].concat(s[r]):s[r]=e.model.callback}function Qt(t,e,i,n,s,a){return(Array.isArray(i)||o(i))&&(s=n,n=i,i=void 0),r(a)&&(s=zs),te(t,e,i,n,s)}function te(t,e,i,r,s){if(n(i)&&n(i.__ob__))return ks();if(!e)return ks();Array.isArray(r)&&"function"==typeof r[0]&&(i=i||{},i.scopedSlots={default:r[0]},r.length=0),s===zs?r=rt(r):s===Fs&&(r=nt(r));var o,a;if("string"==typeof e){var l;a=Ur.getTagNamespace(e),o=Ur.isReservedTag(e)?new ws(Ur.parsePlatformTagName(e),i,r,void 0,void 0,t):n(l=U(t.$options,"components",e))?Kt(l,i,t,r,e):new ws(e,i,r,void 0,void 0,t)}else o=Kt(e,i,t,r);return n(o)?(a&&ee(o,a),o):ks()}function ee(t,e){if(t.ns=e,"foreignObject"!==t.tag&&n(t.children))for(var r=0,s=t.children.length;r<s;r++){var o=t.children[r];n(o.tag)&&i(o.ns)&&ee(o,e)}}function ie(t,e){var i,r,s,o,l;if(Array.isArray(t)||"string"==typeof t)for(i=new Array(t.length),r=0,s=t.length;r<s;r++)i[r]=e(t[r],r);else if("number"==typeof t)for(i=new Array(t),r=0;r<t;r++)i[r]=e(r+1,r);else if(a(t))for(o=Object.keys(t),i=new Array(o.length),r=0,s=o.length;r<s;r++)l=o[r],i[r]=e(t[l],l,r);return n(i)&&(i._isVList=!0),i}function ne(t,e,i,n){var r=this.$scopedSlots[t];if(r)return i=i||{},n&&_(i,n),r(i)||e;var s=this.$slots[t];return s||e}function re(t){return U(this.$options,"filters",t,!0)||Fr}function se(t,e,i){var n=Ur.keyCodes[e]||i;return Array.isArray(n)?-1===n.indexOf(t):n!==t}function oe(t,e,i,n){if(i)if(a(i)){Array.isArray(i)&&(i=y(i));var r;for(var s in i){if("class"===s||"style"===s)r=t;else{var o=t.attrs&&t.attrs.type;r=n||Ur.mustUseProp(e,o,s)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}s in r||(r[s]=i[s])}}else;return t}function ae(t,e){var i=this._staticTrees[t];return i&&!e?Array.isArray(i)?Z(i):G(i):(i=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),ue(i,"__static__"+t,!1),i)}function le(t,e,i){return ue(t,"__once__"+e+(i?"_"+i:""),!0),t}function ue(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)t[n]&&"string"!=typeof t[n]&&ce(t[n],e+"_"+n,i);else ce(t,e,i)}function ce(t,e,i){t.isStatic=!0,t.key=e,t.isOnce=i}function he(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,i=e&&e.context;t.$slots=ft(t.$options._renderChildren,i),t.$scopedSlots=Br,t._c=function(e,i,n,r){return Qt(t,e,i,n,r,!1)},t.$createElement=function(e,i,n,r){return Qt(t,e,i,n,r,!0)}}function de(t,e){var i=t.$options=Object.create(t.constructor.options);i.parent=e.parent,i.propsData=e.propsData,i._parentVnode=e._parentVnode,i._parentListeners=e._parentListeners,i._renderChildren=e._renderChildren,i._componentTag=e._componentTag,i._parentElm=e._parentElm,i._refElm=e._refElm,e.render&&(i.render=e.render,i.staticRenderFns=e.staticRenderFns)}function pe(t){var e=t.options;if(t.super){var i=pe(t.super);if(i!==t.superOptions){t.superOptions=i;var n=fe(t);n&&_(t.extendOptions,n),e=t.options=q(i,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function fe(t){var e,i=t.options,n=t.extendOptions,r=t.sealedOptions;for(var s in i)i[s]!==r[s]&&(e||(e={}),e[s]=ge(i[s],n[s],r[s]));return e}function ge(t,e,i){if(Array.isArray(t)){var n=[];i=Array.isArray(i)?i:[i],e=Array.isArray(e)?e:[e];for(var r=0;r<t.length;r++)(e.indexOf(t[r])>=0||i.indexOf(t[r])<0)&&n.push(t[r]);return n}return t}function me(t){this._init(t)}function ve(t){t.use=function(t){if(t.installed)return this;var e=v(arguments,1);return e.unshift(this),"function"==typeof t.install?t.install.apply(t,e):"function"==typeof t&&t.apply(null,e),t.installed=!0,this}}function _e(t){t.mixin=function(t){return this.options=q(this.options,t),this}}function ye(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var i=this,n=i.cid,r=t._Ctor||(t._Ctor={});if(r[n])return r[n];var s=t.name||i.options.name,o=function(t){this._init(t)};return o.prototype=Object.create(i.prototype),o.prototype.constructor=o,o.cid=e++,o.options=q(i.options,t),o.super=i,o.options.props&&be(o),o.options.computed&&we(o),o.extend=i.extend,o.mixin=i.mixin,o.use=i.use,Wr.forEach(function(t){o[t]=i[t]}),s&&(o.options.components[s]=o),o.superOptions=i.options,o.extendOptions=t,o.sealedOptions=_({},o.options),r[n]=o,o}}function be(t){var e=t.options.props;for(var i in e)Ot(t.prototype,"_props",i)}function we(t){var e=t.options.computed;for(var i in e)Rt(t.prototype,i,e[i])}function xe(t){Wr.forEach(function(e){t[e]=function(t,i){return i?("component"===e&&l(i)&&(i.name=i.name||t,i=this.options._base.extend(i)),"directive"===e&&"function"==typeof i&&(i={bind:i,update:i}),this.options[e+"s"][t]=i,i):this.options[e+"s"][t]}})}function Ce(t){return t&&(t.Ctor.options.name||t.tag)}function ke(t,e){return"string"==typeof t?t.split(",").indexOf(e)>-1:!!u(t)&&t.test(e)}function Te(t,e,i){for(var n in t){var r=t[n];if(r){var s=Ce(r.componentOptions);s&&!i(s)&&(r!==e&&De(r),t[n]=null)}}}function De(t){t&&t.componentInstance.$destroy()}function Se(t){for(var e=t.data,i=t,r=t;n(r.componentInstance);)r=r.componentInstance._vnode,r.data&&(e=Ae(r.data,e));for(;n(i=i.parent);)i.data&&(e=Ae(e,i.data));return Ee(e)}function Ae(t,e){return{staticClass:Ie(t.staticClass,e.staticClass),class:n(t.class)?[t.class,e.class]:e.class}}function Ee(t){var e=t.class,i=t.staticClass;return n(i)||n(e)?Ie(i,$e(e)):""}function Ie(t,e){return t?e?t+" "+e:t:e||""}function $e(t){if(i(t))return"";if("string"==typeof t)return t;var e="";if(Array.isArray(t)){for(var r,s=0,o=t.length;s<o;s++)n(t[s])&&n(r=$e(t[s]))&&""!==r&&(e+=r+" ");return e.slice(0,-1)}if(a(t)){for(var l in t)t[l]&&(e+=l+" ");return e.slice(0,-1)}return e}function Oe(t){return po(t)?"svg":"math"===t?"math":void 0}function Pe(t){if(!Xr)return!0;if(go(t))return!1;if(t=t.toLowerCase(),null!=mo[t])return mo[t];var e=document.createElement(t);return t.indexOf("-")>-1?mo[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:mo[t]=/HTMLUnknownElement/.test(e.toString())}function Ne(t){if("string"==typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function Me(t,e){var i=document.createElement(t);return"select"!==t?i:(e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&i.setAttribute("multiple","multiple"),i)}function je(t,e){return document.createElementNS(co[t],e)}function He(t){return document.createTextNode(t)}function Re(t){return document.createComment(t)}function Le(t,e,i){t.insertBefore(e,i)}function Fe(t,e){t.removeChild(e)}function ze(t,e){t.appendChild(e)}function We(t){return t.parentNode}function qe(t){return t.nextSibling}function Ue(t){return t.tagName}function Be(t,e){t.textContent=e}function Ye(t,e,i){t.setAttribute(e,i)}function Ve(t,e){var i=t.data.ref;if(i){var n=t.context,r=t.componentInstance||t.elm,s=n.$refs;e?Array.isArray(s[i])?p(s[i],r):s[i]===r&&(s[i]=void 0):t.data.refInFor?Array.isArray(s[i])&&s[i].indexOf(r)<0?s[i].push(r):s[i]=[r]:s[i]=r}}function Ke(t,e){return t.key===e.key&&t.tag===e.tag&&t.isComment===e.isComment&&n(t.data)===n(e.data)&&Xe(t,e)}function Xe(t,e){if("input"!==t.tag)return!0;var i;return(n(i=t.data)&&n(i=i.attrs)&&i.type)===(n(i=e.data)&&n(i=i.attrs)&&i.type)}function Ge(t,e,i){var r,s,o={};for(r=e;r<=i;++r)s=t[r].key,n(s)&&(o[s]=r);return o}function Ze(t,e){(t.data.directives||e.data.directives)&&Je(t,e)}function Je(t,e){var i,n,r,s=t===yo,o=e===yo,a=Qe(t.data.directives,t.context),l=Qe(e.data.directives,e.context),u=[],c=[];for(i in l)n=a[i],r=l[i],n?(r.oldValue=n.value,ei(r,"update",e,t),r.def&&r.def.componentUpdated&&c.push(r)):(ei(r,"bind",e,t),r.def&&r.def.inserted&&u.push(r));if(u.length){var h=function(){for(var i=0;i<u.length;i++)ei(u[i],"inserted",e,t)};s?tt(e.data.hook||(e.data.hook={}),"insert",h):h()}if(c.length&&tt(e.data.hook||(e.data.hook={}),"postpatch",function(){for(var i=0;i<c.length;i++)ei(c[i],"componentUpdated",e,t)}),!s)for(i in a)l[i]||ei(a[i],"unbind",t,t,o)}function Qe(t,e){var i=Object.create(null);if(!t)return i;var n,r;for(n=0;n<t.length;n++)r=t[n],r.modifiers||(r.modifiers=xo),i[ti(r)]=r,r.def=U(e.$options,"directives",r.name,!0);return i}function ti(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function ei(t,e,i,n,r){var s=t.def&&t.def[e];if(s)try{s(i.elm,t,i,n,r)}catch(n){S(n,i.context,"directive "+t.name+" "+e+" hook")}}function ii(t,e){if(!i(t.data.attrs)||!i(e.data.attrs)){var r,s,o=e.elm,a=t.data.attrs||{},l=e.data.attrs||{};n(l.__ob__)&&(l=e.data.attrs=_({},l));for(r in l)s=l[r],a[r]!==s&&ni(o,r,s);Jr&&l.value!==a.value&&ni(o,"value",l.value);for(r in a)i(l[r])&&(ao(r)?o.removeAttributeNS(oo,lo(r)):ro(r)||o.removeAttribute(r))}}function ni(t,e,i){so(e)?uo(i)?t.removeAttribute(e):t.setAttribute(e,e):ro(e)?t.setAttribute(e,uo(i)||"false"===i?"false":"true"):ao(e)?uo(i)?t.removeAttributeNS(oo,lo(e)):t.setAttributeNS(oo,e,i):uo(i)?t.removeAttribute(e):t.setAttribute(e,i)}function ri(t,e){var r=e.elm,s=e.data,o=t.data;if(!(i(s.staticClass)&&i(s.class)&&(i(o)||i(o.staticClass)&&i(o.class)))){var a=Se(e),l=r._transitionClasses;n(l)&&(a=Ie(a,$e(l))),a!==r._prevClass&&(r.setAttribute("class",a),r._prevClass=a)}}function si(t){function e(){(o||(o=[])).push(t.slice(f,r).trim()),f=r+1}var i,n,r,s,o,a=!1,l=!1,u=!1,c=!1,h=0,d=0,p=0,f=0;for(r=0;r<t.length;r++)if(n=i,i=t.charCodeAt(r),a)39===i&&92!==n&&(a=!1);else if(l)34===i&&92!==n&&(l=!1);else if(u)96===i&&92!==n&&(u=!1);else if(c)47===i&&92!==n&&(c=!1);else if(124!==i||124===t.charCodeAt(r+1)||124===t.charCodeAt(r-1)||h||d||p){switch(i){case 34:l=!0;break;case 39:a=!0;break;case 96:u=!0;break;case 40:p++;break;case 41:p--;break;case 91:d++;break;case 93:d--;break;case 123:h++;break;case 125:h--}if(47===i){for(var g=r-1,m=void 0;g>=0&&" "===(m=t.charAt(g));g--);m&&Do.test(m)||(c=!0)}}else void 0===s?(f=r+1,s=t.slice(0,r).trim()):e();if(void 0===s?s=t.slice(0,r).trim():0!==f&&e(),o)for(r=0;r<o.length;r++)s=oi(s,o[r]);return s}function oi(t,e){var i=e.indexOf("(");return i<0?'_f("'+e+'")('+t+")":'_f("'+e.slice(0,i)+'")('+t+","+e.slice(i+1)}function ai(t){}function li(t,e){return t?t.map(function(t){return t[e]}).filter(function(t){return t}):[]}function ui(t,e,i){(t.props||(t.props=[])).push({name:e,value:i})}function ci(t,e,i){(t.attrs||(t.attrs=[])).push({name:e,value:i})}function hi(t,e,i,n,r,s){(t.directives||(t.directives=[])).push({name:e,rawName:i,value:n,arg:r,modifiers:s})}function di(t,e,i,n,r,s){n&&n.capture&&(delete n.capture,e="!"+e),n&&n.once&&(delete n.once,e="~"+e),n&&n.passive&&(delete n.passive,e="&"+e);var o;n&&n.native?(delete n.native,o=t.nativeEvents||(t.nativeEvents={})):o=t.events||(t.events={});var a={value:i,modifiers:n},l=o[e];Array.isArray(l)?r?l.unshift(a):l.push(a):o[e]=l?r?[a,l]:[l,a]:a}function pi(t,e,i){var n=fi(t,":"+e)||fi(t,"v-bind:"+e);if(null!=n)return si(n);if(!1!==i){var r=fi(t,e);if(null!=r)return JSON.stringify(r)}}function fi(t,e){var i;if(null!=(i=t.attrsMap[e]))for(var n=t.attrsList,r=0,s=n.length;r<s;r++)if(n[r].name===e){n.splice(r,1);break}return i}function gi(t,e,i){var n=i||{},r=n.number,s=n.trim,o="$$v";s&&(o="(typeof $$v === 'string'? $$v.trim(): $$v)"),r&&(o="_n("+o+")");var a=mi(e,o);t.model={value:"("+e+")",expression:'"'+e+'"',callback:"function ($$v) {"+a+"}"}}function mi(t,e){var i=vi(t);return null===i.idx?t+"="+e:"var $$exp = "+i.exp+", $$idx = "+i.idx+";if (!Array.isArray($$exp)){"+t+"="+e+"}else{$$exp.splice($$idx, 1, "+e+")}"}function vi(t){if(Vs=t,Ys=Vs.length,Xs=Gs=Zs=0,t.indexOf("[")<0||t.lastIndexOf("]")<Ys-1)return{exp:t,idx:null};for(;!yi();)Ks=_i(),bi(Ks)?xi(Ks):91===Ks&&wi(Ks);return{exp:t.substring(0,Gs),idx:t.substring(Gs+1,Zs)}}function _i(){return Vs.charCodeAt(++Xs)}function yi(){return Xs>=Ys}function bi(t){return 34===t||39===t}function wi(t){var e=1;for(Gs=Xs;!yi();)if(t=_i(),bi(t))xi(t);else if(91===t&&e++,93===t&&e--,0===e){Zs=Xs;break}}function xi(t){for(var e=t;!yi()&&(t=_i())!==e;);}function Ci(t,e,i){Js=i;var n=e.value,r=e.modifiers,s=t.tag,o=t.attrsMap.type;if("select"===s)Di(t,n,r);else if("input"===s&&"checkbox"===o)ki(t,n,r);else if("input"===s&&"radio"===o)Ti(t,n,r);else if("input"===s||"textarea"===s)Si(t,n,r);else if(!Ur.isReservedTag(s))return gi(t,n,r),!1;return!0}function ki(t,e,i){var n=i&&i.number,r=pi(t,"value")||"null",s=pi(t,"true-value")||"true",o=pi(t,"false-value")||"false";ui(t,"checked","Array.isArray("+e+")?_i("+e+","+r+")>-1"+("true"===s?":("+e+")":":_q("+e+","+s+")")),di(t,Ao,"var $$a="+e+",$$el=$event.target,$$c=$$el.checked?("+s+"):("+o+");if(Array.isArray($$a)){var $$v="+(n?"_n("+r+")":r)+",$$i=_i($$a,$$v);if($$c){$$i<0&&("+e+"=$$a.concat($$v))}else{$$i>-1&&("+e+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+mi(e,"$$c")+"}",null,!0)}function Ti(t,e,i){var n=i&&i.number,r=pi(t,"value")||"null";r=n?"_n("+r+")":r,ui(t,"checked","_q("+e+","+r+")"),di(t,Ao,mi(e,r),null,!0)}function Di(t,e,i){var n=i&&i.number,r='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(n?"_n(val)":"val")+"})",s="var $$selectedVal = "+r+";";s=s+" "+mi(e,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),di(t,"change",s,null,!0)}function Si(t,e,i){var n=t.attrsMap.type,r=i||{},s=r.lazy,o=r.number,a=r.trim,l=!s&&"range"!==n,u=s?"change":"range"===n?So:"input",c="$event.target.value";a&&(c="$event.target.value.trim()"),o&&(c="_n("+c+")");var h=mi(e,c);l&&(h="if($event.target.composing)return;"+h),ui(t,"value","("+e+")"),di(t,u,h,null,!0),(a||o||"number"===n)&&di(t,"blur","$forceUpdate()")}function Ai(t){var e;n(t[So])&&(e=Zr?"change":"input",t[e]=[].concat(t[So],t[e]||[]),delete t[So]),n(t[Ao])&&(e=is?"click":"change",t[e]=[].concat(t[Ao],t[e]||[]),delete t[Ao])}function Ei(t,e,i,n,r){if(i){var s=e,o=Qs;e=function(i){null!==(1===arguments.length?s(i):s.apply(null,arguments))&&Ii(t,e,n,o)}}Qs.addEventListener(t,e,ns?{capture:n,passive:r}:n)}function Ii(t,e,i,n){(n||Qs).removeEventListener(t,e,i)}function $i(t,e){if(!i(t.data.on)||!i(e.data.on)){var n=e.data.on||{},r=t.data.on||{};Qs=e.elm,Ai(n),Q(n,r,Ei,Ii,e.context)}}function Oi(t,e){if(!i(t.data.domProps)||!i(e.data.domProps)){var r,s,o=e.elm,a=t.data.domProps||{},l=e.data.domProps||{};n(l.__ob__)&&(l=e.data.domProps=_({},l));for(r in a)i(l[r])&&(o[r]="");for(r in l)if(s=l[r],"textContent"!==r&&"innerHTML"!==r||(e.children&&(e.children.length=0),s!==a[r]))if("value"===r){o._value=s;var u=i(s)?"":String(s);Pi(o,e,u)&&(o.value=u)}else o[r]=s}}function Pi(t,e,i){return!t.composing&&("option"===e.tag||Ni(t,i)||Mi(t,i))}function Ni(t,e){return document.activeElement!==t&&t.value!==e}function Mi(t,e){var i=t.value,r=t._vModifiers;return n(r)&&r.number||"number"===t.type?h(i)!==h(e):n(r)&&r.trim?i.trim()!==e.trim():i!==e}function ji(t){var e=Hi(t.style);return t.staticStyle?_(t.staticStyle,e):e}function Hi(t){return Array.isArray(t)?y(t):"string"==typeof t?$o(t):t}function Ri(t,e){var i,n={};if(e)for(var r=t;r.componentInstance;)r=r.componentInstance._vnode,r.data&&(i=ji(r.data))&&_(n,i);(i=ji(t.data))&&_(n,i);for(var s=t;s=s.parent;)s.data&&(i=ji(s.data))&&_(n,i);return n}function Li(t,e){var r=e.data,s=t.data;if(!(i(r.staticStyle)&&i(r.style)&&i(s.staticStyle)&&i(s.style))){var o,a,l=e.elm,u=s.staticStyle,c=s.normalizedStyle||s.style||{},h=u||c,d=Hi(e.data.style)||{};e.data.normalizedStyle=n(d.__ob__)?_({},d):d;var p=Ri(e,!0);for(a in h)i(p[a])&&No(l,a,"");for(a in p)(o=p[a])!==h[a]&&No(l,a,null==o?"":o)}}function Fi(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(/\s+/).forEach(function(e){return t.classList.add(e)}):t.classList.add(e);else{var i=" "+(t.getAttribute("class")||"")+" ";i.indexOf(" "+e+" ")<0&&t.setAttribute("class",(i+e).trim())}}function zi(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(/\s+/).forEach(function(e){return t.classList.remove(e)}):t.classList.remove(e);else{for(var i=" "+(t.getAttribute("class")||"")+" ",n=" "+e+" ";i.indexOf(n)>=0;)i=i.replace(n," ");t.setAttribute("class",i.trim())}}function Wi(t){if(t){if("object"==typeof t){var e={};return!1!==t.css&&_(e,Ro(t.name||"v")),_(e,t),e}return"string"==typeof t?Ro(t):void 0}}function qi(t){Yo(function(){Yo(t)})}function Ui(t,e){(t._transitionClasses||(t._transitionClasses=[])).push(e),Fi(t,e)}function Bi(t,e){t._transitionClasses&&p(t._transitionClasses,e),zi(t,e)}function Yi(t,e,i){var n=Vi(t,e),r=n.type,s=n.timeout,o=n.propCount;if(!r)return i();var a=r===Fo?qo:Bo,l=0,u=function(){t.removeEventListener(a,c),i()},c=function(e){e.target===t&&++l>=o&&u()};setTimeout(function(){l<o&&u()},s+1),t.addEventListener(a,c)}function Vi(t,e){var i,n=window.getComputedStyle(t),r=n[Wo+"Delay"].split(", "),s=n[Wo+"Duration"].split(", "),o=Ki(r,s),a=n[Uo+"Delay"].split(", "),l=n[Uo+"Duration"].split(", "),u=Ki(a,l),c=0,h=0;return e===Fo?o>0&&(i=Fo,c=o,h=s.length):e===zo?u>0&&(i=zo,c=u,h=l.length):(c=Math.max(o,u),i=c>0?o>u?Fo:zo:null,h=i?i===Fo?s.length:l.length:0),{type:i,timeout:c,propCount:h,hasTransform:i===Fo&&Vo.test(n[Wo+"Property"])}}function Ki(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map(function(e,i){return Xi(e)+Xi(t[i])}))}function Xi(t){return 1e3*Number(t.slice(0,-1))}function Gi(t,e){var r=t.elm;n(r._leaveCb)&&(r._leaveCb.cancelled=!0,r._leaveCb());var s=Wi(t.data.transition);if(!i(s)&&!n(r._enterCb)&&1===r.nodeType){for(var o=s.css,l=s.type,u=s.enterClass,c=s.enterToClass,d=s.enterActiveClass,p=s.appearClass,f=s.appearToClass,g=s.appearActiveClass,m=s.beforeEnter,v=s.enter,_=s.afterEnter,y=s.enterCancelled,b=s.beforeAppear,w=s.appear,x=s.afterAppear,k=s.appearCancelled,T=s.duration,D=Ds,S=Ds.$vnode;S&&S.parent;)S=S.parent,D=S.context;var A=!D._isMounted||!t.isRootInsert;if(!A||w||""===w){var E=A&&p?p:u,I=A&&g?g:d,$=A&&f?f:c,O=A?b||m:m,P=A&&"function"==typeof w?w:v,N=A?x||_:_,M=A?k||y:y,j=h(a(T)?T.enter:T),H=!1!==o&&!Jr,R=Qi(P),L=r._enterCb=C(function(){H&&(Bi(r,$),Bi(r,I)),L.cancelled?(H&&Bi(r,E),M&&M(r)):N&&N(r),r._enterCb=null});t.data.show||tt(t.data.hook||(t.data.hook={}),"insert",function(){var e=r.parentNode,i=e&&e._pending&&e._pending[t.key];i&&i.tag===t.tag&&i.elm._leaveCb&&i.elm._leaveCb(),P&&P(r,L)}),O&&O(r),H&&(Ui(r,E),Ui(r,I),qi(function(){Ui(r,$),Bi(r,E),L.cancelled||R||(Ji(j)?setTimeout(L,j):Yi(r,l,L))})),t.data.show&&(e&&e(),P&&P(r,L)),H||R||L()}}}function Zi(t,e){function r(){k.cancelled||(t.data.show||((s.parentNode._pending||(s.parentNode._pending={}))[t.key]=t),f&&f(s),b&&(Ui(s,c),Ui(s,p),qi(function(){Ui(s,d),Bi(s,c),k.cancelled||w||(Ji(x)?setTimeout(k,x):Yi(s,u,k))})),g&&g(s,k),b||w||k())}var s=t.elm;n(s._enterCb)&&(s._enterCb.cancelled=!0,s._enterCb());var o=Wi(t.data.transition);if(i(o))return e();if(!n(s._leaveCb)&&1===s.nodeType){var l=o.css,u=o.type,c=o.leaveClass,d=o.leaveToClass,p=o.leaveActiveClass,f=o.beforeLeave,g=o.leave,m=o.afterLeave,v=o.leaveCancelled,_=o.delayLeave,y=o.duration,b=!1!==l&&!Jr,w=Qi(g),x=h(a(y)?y.leave:y),k=s._leaveCb=C(function(){s.parentNode&&s.parentNode._pending&&(s.parentNode._pending[t.key]=null),b&&(Bi(s,d),Bi(s,p)),k.cancelled?(b&&Bi(s,c),v&&v(s)):(e(),m&&m(s)),s._leaveCb=null});_?_(r):r()}}function Ji(t){return"number"==typeof t&&!isNaN(t)}function Qi(t){if(i(t))return!1;var e=t.fns;return n(e)?Qi(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function tn(t,e){!0!==e.data.show&&Gi(e)}function en(t,e,i){var n=e.value,r=t.multiple;if(!r||Array.isArray(n)){for(var s,o,a=0,l=t.options.length;a<l;a++)if(o=t.options[a],r)s=x(n,rn(o))>-1,o.selected!==s&&(o.selected=s);else if(w(rn(o),n))return void(t.selectedIndex!==a&&(t.selectedIndex=a));r||(t.selectedIndex=-1)}}function nn(t,e){for(var i=0,n=e.length;i<n;i++)if(w(rn(e[i]),t))return!1;return!0}function rn(t){return"_value"in t?t._value:t.value}function sn(t){t.target.composing=!0}function on(t){t.target.composing&&(t.target.composing=!1,an(t.target,"input"))}function an(t,e){var i=document.createEvent("HTMLEvents");i.initEvent(e,!0,!0),t.dispatchEvent(i)}function ln(t){return!t.componentInstance||t.data&&t.data.transition?t:ln(t.componentInstance._vnode)}function un(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?un(ut(e.children)):t}function cn(t){var e={},i=t.$options;for(var n in i.propsData)e[n]=t[n];var r=i._parentListeners;for(var s in r)e[Mr(s)]=r[s];return e}function hn(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function dn(t){for(;t=t.parent;)if(t.data.transition)return!0}function pn(t,e){return e.key===t.key&&e.tag===t.tag}function fn(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function gn(t){t.data.newPos=t.elm.getBoundingClientRect()}function mn(t){var e=t.data.pos,i=t.data.newPos,n=e.left-i.left,r=e.top-i.top;if(n||r){t.data.moved=!0;var s=t.elm.style;s.transform=s.WebkitTransform="translate("+n+"px,"+r+"px)",s.transitionDuration="0s"}}function vn(t){return oa=oa||document.createElement("div"),oa.innerHTML=t,oa.textContent}function _n(t,e){var i=e?Ya:Ba;return t.replace(i,function(t){return Ua[t]})}function yn(t,e){function i(e){c+=e,t=t.substring(e)}function n(t,i,n){var r,a;if(null==i&&(i=c),null==n&&(n=c),t&&(a=t.toLowerCase()),t)for(r=o.length-1;r>=0&&o[r].lowerCasedTag!==a;r--);else r=0;if(r>=0){for(var l=o.length-1;l>=r;l--)e.end&&e.end(o[l].tag,i,n);o.length=r,s=r&&o[r-1].tag}else"br"===a?e.start&&e.start(t,[],!0,i,n):"p"===a&&(e.start&&e.start(t,[],!1,i,n),e.end&&e.end(t,i,n))}for(var r,s,o=[],a=e.expectHTML,l=e.isUnaryTag||Lr,u=e.canBeLeftOpenTag||Lr,c=0;t;){if(r=t,s&&Wa(s)){var h=s.toLowerCase(),d=qa[h]||(qa[h]=new RegExp("([\\s\\S]*?)(</"+h+"[^>]*>)","i")),p=0,f=t.replace(d,function(t,i,n){return p=n.length,Wa(h)||"noscript"===h||(i=i.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),e.chars&&e.chars(i),""});c+=t.length-f.length,t=f,n(h,c-p,c)}else{var g=t.indexOf("<");if(0===g){if(wa.test(t)){var m=t.indexOf("--\x3e");if(m>=0){i(m+3);continue}}if(xa.test(t)){var v=t.indexOf("]>");if(v>=0){i(v+2);continue}}var _=t.match(ba);if(_){i(_[0].length);continue}var y=t.match(ya);if(y){var b=c;i(y[0].length),n(y[1],b,c);continue}var w=function(){var e=t.match(va);if(e){var n={tagName:e[1],attrs:[],start:c};i(e[0].length);for(var r,s;!(r=t.match(_a))&&(s=t.match(fa));)i(s[0].length),n.attrs.push(s);if(r)return n.unarySlash=r[1],i(r[0].length),n.end=c,n}}();if(w){!function(t){var i=t.tagName,r=t.unarySlash;a&&("p"===s&&ca(i)&&n(s),u(i)&&s===i&&n(i));for(var c=l(i)||"html"===i&&"head"===s||!!r,h=t.attrs.length,d=new Array(h),p=0;p<h;p++){var f=t.attrs[p];Ca&&-1===f[0].indexOf('""')&&(""===f[3]&&delete f[3],""===f[4]&&delete f[4],""===f[5]&&delete f[5]);var g=f[3]||f[4]||f[5]||"";d[p]={name:f[1],value:_n(g,e.shouldDecodeNewlines)}}c||(o.push({tag:i,lowerCasedTag:i.toLowerCase(),attrs:d}),s=i),e.start&&e.start(i,d,c,t.start,t.end)}(w);continue}}var x=void 0,C=void 0,k=void 0;if(g>=0){for(C=t.slice(g);!(ya.test(C)||va.test(C)||wa.test(C)||xa.test(C)||(k=C.indexOf("<",1))<0);)g+=k,C=t.slice(g);x=t.substring(0,g),i(g)}g<0&&(x=t,t=""),e.chars&&x&&e.chars(x)}if(t===r){e.chars&&e.chars(t);break}}n()}function bn(t,e){var i=e?Xa(e):Va;if(i.test(t)){for(var n,r,s=[],o=i.lastIndex=0;n=i.exec(t);){r=n.index,r>o&&s.push(JSON.stringify(t.slice(o,r)));var a=si(n[1].trim());s.push("_s("+a+")"),o=r+n[0].length}return o<t.length&&s.push(JSON.stringify(t.slice(o))),s.join("+")}}function wn(t,e){function i(t){t.pre&&(a=!1),Ea(t.tag)&&(l=!1)}ka=e.warn||ai,$a=e.getTagNamespace||Lr,Ia=e.mustUseProp||Lr,Ea=e.isPreTag||Lr,Sa=li(e.modules,"preTransformNode"),Da=li(e.modules,"transformNode"),Aa=li(e.modules,"postTransformNode"),Ta=e.delimiters;var n,r,s=[],o=!1!==e.preserveWhitespace,a=!1,l=!1;return yn(t,{warn:ka,expectHTML:e.expectHTML,isUnaryTag:e.isUnaryTag,canBeLeftOpenTag:e.canBeLeftOpenTag,shouldDecodeNewlines:e.shouldDecodeNewlines,start:function(t,o,u){var c=r&&r.ns||$a(t);Zr&&"svg"===c&&(o=Fn(o));var h={type:1,tag:t,attrsList:o,attrsMap:Hn(o),parent:r,children:[]};c&&(h.ns=c),Ln(h)&&!as()&&(h.forbidden=!0);for(var d=0;d<Sa.length;d++)Sa[d](h,e);if(a||(xn(h),h.pre&&(a=!0)),Ea(h.tag)&&(l=!0),a)Cn(h);else{Dn(h),Sn(h),$n(h),kn(h),h.plain=!h.key&&!o.length,Tn(h),On(h),Pn(h);for(var p=0;p<Da.length;p++)Da[p](h,e);Nn(h)}if(n?s.length||n.if&&(h.elseif||h.else)&&In(n,{exp:h.elseif,block:h}):n=h,r&&!h.forbidden)if(h.elseif||h.else)An(h,r);else if(h.slotScope){r.plain=!1;var f=h.slotTarget||'"default"';(r.scopedSlots||(r.scopedSlots={}))[f]=h}else r.children.push(h),h.parent=r;u?i(h):(r=h,s.push(h));for(var g=0;g<Aa.length;g++)Aa[g](h,e)},end:function(){var t=s[s.length-1],e=t.children[t.children.length-1];e&&3===e.type&&" "===e.text&&!l&&t.children.pop(),s.length-=1,r=s[s.length-1],i(t)},chars:function(t){if(r&&(!Zr||"textarea"!==r.tag||r.attrsMap.placeholder!==t)){var e=r.children;if(t=l||t.trim()?Rn(r)?t:nl(t):o&&e.length?" ":""){var i;!a&&" "!==t&&(i=bn(t,Ta))?e.push({type:2,expression:i,text:t}):" "===t&&e.length&&" "===e[e.length-1].text||e.push({type:3,text:t})}}}}),n}function xn(t){null!=fi(t,"v-pre")&&(t.pre=!0)}function Cn(t){var e=t.attrsList.length;if(e)for(var i=t.attrs=new Array(e),n=0;n<e;n++)i[n]={name:t.attrsList[n].name,value:JSON.stringify(t.attrsList[n].value)};else t.pre||(t.plain=!0)}function kn(t){var e=pi(t,"key");e&&(t.key=e)}function Tn(t){var e=pi(t,"ref");e&&(t.ref=e,t.refInFor=Mn(t))}function Dn(t){var e;if(e=fi(t,"v-for")){var i=e.match(Ja);if(!i)return;t.for=i[2].trim();var n=i[1].trim(),r=n.match(Qa);r?(t.alias=r[1].trim(),t.iterator1=r[2].trim(),r[3]&&(t.iterator2=r[3].trim())):t.alias=n}}function Sn(t){var e=fi(t,"v-if");if(e)t.if=e,In(t,{exp:e,block:t});else{null!=fi(t,"v-else")&&(t.else=!0);var i=fi(t,"v-else-if");i&&(t.elseif=i)}}function An(t,e){var i=En(e.children);i&&i.if&&In(i,{exp:t.elseif,block:t})}function En(t){for(var e=t.length;e--;){if(1===t[e].type)return t[e];t.pop()}}function In(t,e){t.ifConditions||(t.ifConditions=[]),t.ifConditions.push(e)}function $n(t){null!=fi(t,"v-once")&&(t.once=!0)}function On(t){if("slot"===t.tag)t.slotName=pi(t,"name");else{var e=pi(t,"slot");e&&(t.slotTarget='""'===e?'"default"':e),"template"===t.tag&&(t.slotScope=fi(t,"scope"))}}function Pn(t){var e;(e=pi(t,"is"))&&(t.component=e),null!=fi(t,"inline-template")&&(t.inlineTemplate=!0)}function Nn(t){var e,i,n,r,s,o,a,l=t.attrsList;for(e=0,i=l.length;e<i;e++)if(n=r=l[e].name,s=l[e].value,Za.test(n))if(t.hasBindings=!0,o=jn(n),o&&(n=n.replace(il,"")),el.test(n))n=n.replace(el,""),s=si(s),a=!1,o&&(o.prop&&(a=!0,"innerHtml"===(n=Mr(n))&&(n="innerHTML")),o.camel&&(n=Mr(n)),o.sync&&di(t,"update:"+Mr(n),mi(s,"$event"))),a||Ia(t.tag,t.attrsMap.type,n)?ui(t,n,s):ci(t,n,s);else if(Ga.test(n))n=n.replace(Ga,""),di(t,n,s,o,!1,ka);else{n=n.replace(Za,"");var u=n.match(tl),c=u&&u[1];c&&(n=n.slice(0,-(c.length+1))),hi(t,n,r,s,c,o)}else{ci(t,n,JSON.stringify(s))}}function Mn(t){for(var e=t;e;){if(void 0!==e.for)return!0;e=e.parent}return!1}function jn(t){var e=t.match(il);if(e){var i={};return e.forEach(function(t){i[t.slice(1)]=!0}),i}}function Hn(t){for(var e={},i=0,n=t.length;i<n;i++)e[t[i].name]=t[i].value;return e}function Rn(t){return"script"===t.tag||"style"===t.tag}function Ln(t){return"style"===t.tag||"script"===t.tag&&(!t.attrsMap.type||"text/javascript"===t.attrsMap.type)}function Fn(t){for(var e=[],i=0;i<t.length;i++){var n=t[i];rl.test(n.name)||(n.name=n.name.replace(sl,""),e.push(n))}return e}function zn(t,e){t&&(Oa=ol(e.staticKeys||""),Pa=e.isReservedTag||Lr,qn(t),Un(t,!1))}function Wn(t){return d("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(t?","+t:""))}function qn(t){if(t.static=Yn(t),1===t.type){if(!Pa(t.tag)&&"slot"!==t.tag&&null==t.attrsMap["inline-template"])return;for(var e=0,i=t.children.length;e<i;e++){var n=t.children[e];qn(n),n.static||(t.static=!1)}}}function Un(t,e){if(1===t.type){if((t.static||t.once)&&(t.staticInFor=e),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return void(t.staticRoot=!0);if(t.staticRoot=!1,t.children)for(var i=0,n=t.children.length;i<n;i++)Un(t.children[i],e||!!t.for);t.ifConditions&&Bn(t.ifConditions,e)}}function Bn(t,e){for(var i=1,n=t.length;i<n;i++)Un(t[i].block,e)}function Yn(t){return 2!==t.type&&(3===t.type||!(!t.pre&&(t.hasBindings||t.if||t.for||Or(t.tag)||!Pa(t.tag)||Vn(t)||!Object.keys(t).every(Oa))))}function Vn(t){for(;t.parent;){if(t=t.parent,"template"!==t.tag)return!1;if(t.for)return!0}return!1}function Kn(t,e,i){var n=e?"nativeOn:{":"on:{";for(var r in t){n+='"'+r+'":'+Xn(r,t[r])+","}return n.slice(0,-1)+"}"}function Xn(t,e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map(function(e){return Xn(t,e)}).join(",")+"]";var i=ll.test(e.value),n=al.test(e.value);if(e.modifiers){var r="",s="",o=[];for(var a in e.modifiers)hl[a]?(s+=hl[a],ul[a]&&o.push(a)):o.push(a);o.length&&(r+=Gn(o)),s&&(r+=s);return"function($event){"+r+(i?e.value+"($event)":n?"("+e.value+")($event)":e.value)+"}"}return i||n?e.value:"function($event){"+e.value+"}"}function Gn(t){return"if(!('button' in $event)&&"+t.map(Zn).join("&&")+")return null;"}function Zn(t){var e=parseInt(t,10);if(e)return"$event.keyCode!=="+e;var i=ul[t];return"_k($event.keyCode,"+JSON.stringify(t)+(i?","+JSON.stringify(i):"")+")"}function Jn(t,e){t.wrapData=function(i){return"_b("+i+",'"+t.tag+"',"+e.value+(e.modifiers&&e.modifiers.prop?",true":"")+")"}}function Qn(t,e){var i=La,n=La=[],r=Fa;Fa=0,za=e,Na=e.warn||ai,Ma=li(e.modules,"transformCode"),ja=li(e.modules,"genData"),Ha=e.directives||{},Ra=e.isReservedTag||Lr;var s=t?tr(t):'_c("div")';return La=i,Fa=r,{render:"with(this){return "+s+"}",staticRenderFns:n}}function tr(t){if(t.staticRoot&&!t.staticProcessed)return er(t);if(t.once&&!t.onceProcessed)return ir(t);if(t.for&&!t.forProcessed)return sr(t);if(t.if&&!t.ifProcessed)return nr(t);if("template"!==t.tag||t.slotTarget){if("slot"===t.tag)return _r(t);var e;if(t.component)e=yr(t.component,t);else{var i=t.plain?void 0:or(t),n=t.inlineTemplate?null:dr(t,!0);e="_c('"+t.tag+"'"+(i?","+i:"")+(n?","+n:"")+")"}for(var r=0;r<Ma.length;r++)e=Ma[r](t,e);return e}return dr(t)||"void 0"}function er(t){return t.staticProcessed=!0,La.push("with(this){return "+tr(t)+"}"),"_m("+(La.length-1)+(t.staticInFor?",true":"")+")"}function ir(t){if(t.onceProcessed=!0,t.if&&!t.ifProcessed)return nr(t);if(t.staticInFor){for(var e="",i=t.parent;i;){if(i.for){e=i.key;break}i=i.parent}return e?"_o("+tr(t)+","+Fa+++(e?","+e:"")+")":tr(t)}return er(t)}function nr(t){return t.ifProcessed=!0,rr(t.ifConditions.slice())}function rr(t){function e(t){return t.once?ir(t):tr(t)}if(!t.length)return"_e()";var i=t.shift();return i.exp?"("+i.exp+")?"+e(i.block)+":"+rr(t):""+e(i.block)}function sr(t){var e=t.for,i=t.alias,n=t.iterator1?","+t.iterator1:"",r=t.iterator2?","+t.iterator2:"";return t.forProcessed=!0,"_l(("+e+"),function("+i+n+r+"){return "+tr(t)+"})"}function or(t){var e="{",i=ar(t);i&&(e+=i+","),t.key&&(e+="key:"+t.key+","),t.ref&&(e+="ref:"+t.ref+","),t.refInFor&&(e+="refInFor:true,"),t.pre&&(e+="pre:true,"),t.component&&(e+='tag:"'+t.tag+'",');for(var n=0;n<ja.length;n++)e+=ja[n](t);if(t.attrs&&(e+="attrs:{"+br(t.attrs)+"},"),t.props&&(e+="domProps:{"+br(t.props)+"},"),t.events&&(e+=Kn(t.events,!1,Na)+","),t.nativeEvents&&(e+=Kn(t.nativeEvents,!0,Na)+","),t.slotTarget&&(e+="slot:"+t.slotTarget+","),t.scopedSlots&&(e+=ur(t.scopedSlots)+","),t.model&&(e+="model:{value:"+t.model.value+",callback:"+t.model.callback+",expression:"+t.model.expression+"},"),t.inlineTemplate){var r=lr(t);r&&(e+=r+",")}return e=e.replace(/,$/,"")+"}",t.wrapData&&(e=t.wrapData(e)),e}function ar(t){var e=t.directives;if(e){var i,n,r,s,o="directives:[",a=!1;for(i=0,n=e.length;i<n;i++){r=e[i],s=!0;var l=Ha[r.name]||dl[r.name];l&&(s=!!l(t,r,Na)),s&&(a=!0,o+='{name:"'+r.name+'",rawName:"'+r.rawName+'"'+(r.value?",value:("+r.value+"),expression:"+JSON.stringify(r.value):"")+(r.arg?',arg:"'+r.arg+'"':"")+(r.modifiers?",modifiers:"+JSON.stringify(r.modifiers):"")+"},")}return a?o.slice(0,-1)+"]":void 0}}function lr(t){var e=t.children[0];if(1===e.type){var i=Qn(e,za);return"inlineTemplate:{render:function(){"+i.render+"},staticRenderFns:["+i.staticRenderFns.map(function(t){return"function(){"+t+"}"}).join(",")+"]}"}}function ur(t){return"scopedSlots:_u(["+Object.keys(t).map(function(e){return cr(e,t[e])}).join(",")+"])"}function cr(t,e){return e.for&&!e.forProcessed?hr(t,e):"{key:"+t+",fn:function("+String(e.attrsMap.scope)+"){return "+("template"===e.tag?dr(e)||"void 0":tr(e))+"}}"}function hr(t,e){var i=e.for,n=e.alias,r=e.iterator1?","+e.iterator1:"",s=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,"_l(("+i+"),function("+n+r+s+"){return "+cr(t,e)+"})"}function dr(t,e){var i=t.children;if(i.length){var n=i[0];if(1===i.length&&n.for&&"template"!==n.tag&&"slot"!==n.tag)return tr(n);var r=e?pr(i):0;return"["+i.map(mr).join(",")+"]"+(r?","+r:"")}}function pr(t){for(var e=0,i=0;i<t.length;i++){var n=t[i];if(1===n.type){if(fr(n)||n.ifConditions&&n.ifConditions.some(function(t){return fr(t.block)})){e=2;break}(gr(n)||n.ifConditions&&n.ifConditions.some(function(t){return gr(t.block)}))&&(e=1)}}return e}function fr(t){return void 0!==t.for||"template"===t.tag||"slot"===t.tag}function gr(t){return!Ra(t.tag)}function mr(t){return 1===t.type?tr(t):vr(t)}function vr(t){return"_v("+(2===t.type?t.expression:wr(JSON.stringify(t.text)))+")"}function _r(t){var e=t.slotName||'"default"',i=dr(t),n="_t("+e+(i?","+i:""),r=t.attrs&&"{"+t.attrs.map(function(t){return Mr(t.name)+":"+t.value}).join(",")+"}",s=t.attrsMap["v-bind"];return!r&&!s||i||(n+=",null"),r&&(n+=","+r),s&&(n+=(r?"":",null")+","+s),n+")"}function yr(t,e){var i=e.inlineTemplate?null:dr(e,!0);return"_c("+t+","+or(e)+(i?","+i:"")+")"}function br(t){for(var e="",i=0;i<t.length;i++){var n=t[i];e+='"'+n.name+'":'+wr(n.value)+","}return e.slice(0,-1)}function wr(t){return t.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function xr(t,e){var i=wn(t.trim(),e);zn(i,e);var n=Qn(i,e);return{ast:i,render:n.render,staticRenderFns:n.staticRenderFns}}function Cr(t,e){try{return new Function(t)}catch(i){return e.push({err:i,code:t}),b}}function kr(t,e){var i=(e.warn,fi(t,"class"));i&&(t.staticClass=JSON.stringify(i));var n=pi(t,"class",!1);n&&(t.classBinding=n)}function Tr(t){var e="";return t.staticClass&&(e+="staticClass:"+t.staticClass+","),t.classBinding&&(e+="class:"+t.classBinding+","),e}function Dr(t,e){var i=(e.warn,fi(t,"style"));if(i){t.staticStyle=JSON.stringify($o(i))}var n=pi(t,"style",!1);n&&(t.styleBinding=n)}function Sr(t){var e="";return t.staticStyle&&(e+="staticStyle:"+t.staticStyle+","),t.styleBinding&&(e+="style:("+t.styleBinding+"),"),e}function Ar(t,e){e.value&&ui(t,"textContent","_s("+e.value+")")}function Er(t,e){e.value&&ui(t,"innerHTML","_s("+e.value+")")}function Ir(t){if(t.outerHTML)return t.outerHTML;var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}var $r=Object.prototype.toString,Or=d("slot,component",!0),Pr=Object.prototype.hasOwnProperty,Nr=/-(\w)/g,Mr=g(function(t){return t.replace(Nr,function(t,e){return e?e.toUpperCase():""})}),jr=g(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),Hr=/([^-])([A-Z])/g,Rr=g(function(t){return t.replace(Hr,"$1-$2").replace(Hr,"$1-$2").toLowerCase()}),Lr=function(){return!1},Fr=function(t){return t},zr="data-server-rendered",Wr=["component","directive","filter"],qr=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],Ur={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:Lr,isReservedAttr:Lr,isUnknownElement:Lr,getTagNamespace:b,parsePlatformTagName:Fr,mustUseProp:Lr,_lifecycleHooks:qr},Br=Object.freeze({}),Yr=/[^\w.$]/,Vr=b,Kr="__proto__"in{},Xr="undefined"!=typeof window,Gr=Xr&&window.navigator.userAgent.toLowerCase(),Zr=Gr&&/msie|trident/.test(Gr),Jr=Gr&&Gr.indexOf("msie 9.0")>0,Qr=Gr&&Gr.indexOf("edge/")>0,ts=Gr&&Gr.indexOf("android")>0,es=Gr&&/iphone|ipad|ipod|ios/.test(Gr),is=Gr&&/chrome\/\d+/.test(Gr)&&!Qr,ns=!1;if(Xr)try{var rs={};Object.defineProperty(rs,"passive",{get:function(){ns=!0}}),window.addEventListener("test-passive",null,rs)}catch(t){}var ss,os,as=function(){return void 0===ss&&(ss=!Xr&&void 0!==e&&"server"===e.process.env.VUE_ENV),ss},ls=Xr&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,us="undefined"!=typeof Symbol&&A(Symbol)&&"undefined"!=typeof Reflect&&A(Reflect.ownKeys),cs=function(){function t(){n=!1;var t=i.slice(0);i.length=0;for(var e=0;e<t.length;e++)t[e]()}var e,i=[],n=!1;if("undefined"!=typeof Promise&&A(Promise)){var r=Promise.resolve(),s=function(t){};e=function(){r.then(t).catch(s),es&&setTimeout(b)}}else if("undefined"==typeof MutationObserver||!A(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())e=function(){setTimeout(t,0)};else{var o=1,a=new MutationObserver(t),l=document.createTextNode(String(o));a.observe(l,{characterData:!0}),e=function(){o=(o+1)%2,l.data=String(o)}}return function(t,r){var s;if(i.push(function(){if(t)try{t.call(r)}catch(t){S(t,r,"nextTick")}else s&&s(r)}),n||(n=!0,e()),!t&&"undefined"!=typeof Promise)return new Promise(function(t,e){s=t})}}();os="undefined"!=typeof Set&&A(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var hs=0,ds=function(){this.id=hs++,this.subs=[]};ds.prototype.addSub=function(t){this.subs.push(t)},ds.prototype.removeSub=function(t){p(this.subs,t)},ds.prototype.depend=function(){ds.target&&ds.target.addDep(this)},ds.prototype.notify=function(){for(var t=this.subs.slice(),e=0,i=t.length;e<i;e++)t[e].update()},ds.target=null;var ps=[],fs=Array.prototype,gs=Object.create(fs);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=fs[t];T(gs,t,function(){for(var i=arguments,n=arguments.length,r=new Array(n);n--;)r[n]=i[n];var s,o=e.apply(this,r),a=this.__ob__;switch(t){case"push":case"unshift":s=r;break;case"splice":s=r.slice(2)}return s&&a.observeArray(s),a.dep.notify(),o})});var ms=Object.getOwnPropertyNames(gs),vs={shouldConvert:!0,isSettingProps:!1},_s=function(t){if(this.value=t,this.dep=new ds,this.vmCount=0,T(t,"__ob__",this),Array.isArray(t)){(Kr?$:O)(t,gs,ms),this.observeArray(t)}else this.walk(t)};_s.prototype.walk=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)N(t,e[i],t[e[i]])},_s.prototype.observeArray=function(t){for(var e=0,i=t.length;e<i;e++)P(t[e])};var ys=Ur.optionMergeStrategies;ys.data=function(t,e,i){return i?t||e?function(){var n="function"==typeof e?e.call(i):e,r="function"==typeof t?t.call(i):void 0;return n?R(n,r):r}:void 0:e?"function"!=typeof e?t:t?function(){return R(e.call(this),t.call(this))}:e:t},qr.forEach(function(t){ys[t]=L}),Wr.forEach(function(t){ys[t+"s"]=F}),ys.watch=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var i={};_(i,t);for(var n in e){var r=i[n],s=e[n];r&&!Array.isArray(r)&&(r=[r]),i[n]=r?r.concat(s):[s]}return i},ys.props=ys.methods=ys.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var i=Object.create(null);return _(i,t),_(i,e),i};var bs=function(t,e){return void 0===e?t:e},ws=function(t,e,i,n,r,s,o){this.tag=t,this.data=e,this.children=i,this.text=n,this.elm=r,this.ns=void 0,this.context=s,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1},xs={child:{}};xs.child.get=function(){return this.componentInstance},Object.defineProperties(ws.prototype,xs);var Cs,ks=function(){var t=new ws;return t.text="",t.isComment=!0,t},Ts=g(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var i="~"===t.charAt(0);t=i?t.slice(1):t;var n="!"===t.charAt(0);return t=n?t.slice(1):t,{name:t,once:i,capture:n,passive:e}}),Ds=null,Ss=[],As=[],Es={},Is=!1,$s=!1,Os=0,Ps=0,Ns=function(t,e,i,n){this.vm=t,t._watchers.push(this),n?(this.deep=!!n.deep,this.user=!!n.user,this.lazy=!!n.lazy,this.sync=!!n.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=i,this.id=++Ps,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new os,this.newDepIds=new os,this.expression="","function"==typeof e?this.getter=e:(this.getter=D(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Ns.prototype.get=function(){E(this);var t,e=this.vm;if(this.user)try{t=this.getter.call(e,e)}catch(t){S(t,e,'getter for watcher "'+this.expression+'"')}else t=this.getter.call(e,e);return this.deep&&It(t),I(),this.cleanupDeps(),t},Ns.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Ns.prototype.cleanupDeps=function(){for(var t=this,e=this.deps.length;e--;){var i=t.deps[e];t.newDepIds.has(i.id)||i.removeSub(t)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Ns.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Et(this)},Ns.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||a(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(t){S(t,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Ns.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Ns.prototype.depend=function(){for(var t=this,e=this.deps.length;e--;)t.deps[e].depend()},Ns.prototype.teardown=function(){var t=this;if(this.active){this.vm._isBeingDestroyed||p(this.vm._watchers,this);for(var e=this.deps.length;e--;)t.deps[e].removeSub(t);this.active=!1}};var Ms=new os,js={enumerable:!0,configurable:!0,get:b,set:b},Hs={lazy:!0},Rs={init:function(t,e,i,n){if(!t.componentInstance||t.componentInstance._isDestroyed){(t.componentInstance=Xt(t,Ds,i,n)).$mount(e?t.elm:void 0,e)}else if(t.data.keepAlive){var r=t;Rs.prepatch(r,r)}},prepatch:function(t,e){var i=e.componentOptions;yt(e.componentInstance=t.componentInstance,i.propsData,i.listeners,e,i.children)},insert:function(t){var e=t.context,i=t.componentInstance;i._isMounted||(i._isMounted=!0,Ct(i,"mounted")),t.data.keepAlive&&(e._isMounted?St(i):wt(i,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?xt(e,!0):e.$destroy())}},Ls=Object.keys(Rs),Fs=1,zs=2,Ws=0;!function(t){t.prototype._init=function(t){var e=this;e._uid=Ws++,e._isVue=!0,t&&t._isComponent?de(e,t):e.$options=q(pe(e.constructor),t||{},e),e._renderProxy=e,e._self=e,vt(e),ct(e),he(e),Ct(e,"beforeCreate"),Ut(e),Pt(e),qt(e),Ct(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}(me),function(t){var e={};e.get=function(){return this._data};var i={};i.get=function(){return this._props},Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",i),t.prototype.$set=M,t.prototype.$delete=j,t.prototype.$watch=function(t,e,i){var n=this;i=i||{},i.user=!0;var r=new Ns(n,t,e,i);return i.immediate&&e.call(n,r.value),function(){r.teardown()}}}(me),function(t){var e=/^hook:/;t.prototype.$on=function(t,i){var n=this,r=this;if(Array.isArray(t))for(var s=0,o=t.length;s<o;s++)n.$on(t[s],i);else(r._events[t]||(r._events[t]=[])).push(i),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){function i(){n.$off(t,i),e.apply(n,arguments)}var n=this;return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var i=this,n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,s=t.length;r<s;r++)i.$off(t[r],e);return n}var o=n._events[t];if(!o)return n;if(1===arguments.length)return n._events[t]=null,n;for(var a,l=o.length;l--;)if((a=o[l])===e||a.fn===e){o.splice(l,1);break}return n},t.prototype.$emit=function(t){var e=this,i=e._events[t];if(i){i=i.length>1?v(i):i;for(var n=v(arguments,1),r=0,s=i.length;r<s;r++)i[r].apply(e,n)}return e}}(me),function(t){t.prototype._update=function(t,e){var i=this;i._isMounted&&Ct(i,"beforeUpdate");var n=i.$el,r=i._vnode,s=Ds;Ds=i,i._vnode=t,i.$el=r?i.__patch__(r,t):i.__patch__(i.$el,t,e,!1,i.$options._parentElm,i.$options._refElm),Ds=s,n&&(n.__vue__=null),i.$el&&(i.$el.__vue__=i),i.$vnode&&i.$parent&&i.$vnode===i.$parent._vnode&&(i.$parent.$el=i.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Ct(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||p(e.$children,t),t._watcher&&t._watcher.teardown();for(var i=t._watchers.length;i--;)t._watchers[i].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Ct(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$options._parentElm=t.$options._refElm=null}}}(me),function(t){t.prototype.$nextTick=function(t){return cs(t,this)},t.prototype._render=function(){var t=this,e=t.$options,i=e.render,n=e.staticRenderFns,r=e._parentVnode;if(t._isMounted)for(var s in t.$slots)t.$slots[s]=Z(t.$slots[s]);t.$scopedSlots=r&&r.data.scopedSlots||Br,n&&!t._staticTrees&&(t._staticTrees=[]),t.$vnode=r;var o;try{o=i.call(t._renderProxy,t.$createElement)}catch(e){S(e,t,"render function"),o=t._vnode}return o instanceof ws||(o=ks()),o.parent=r,o},t.prototype._o=le,t.prototype._n=h,t.prototype._s=c,t.prototype._l=ie,t.prototype._t=ne,t.prototype._q=w,t.prototype._i=x,t.prototype._m=ae,t.prototype._f=re,t.prototype._k=se,t.prototype._b=oe,t.prototype._v=X,t.prototype._e=ks,t.prototype._u=mt}(me);var qs=[String,RegExp],Us={name:"keep-alive",abstract:!0,props:{include:qs,exclude:qs},created:function(){this.cache=Object.create(null)},destroyed:function(){var t=this;for(var e in t.cache)De(t.cache[e])},watch:{include:function(t){Te(this.cache,this._vnode,function(e){return ke(t,e)})},exclude:function(t){Te(this.cache,this._vnode,function(e){return!ke(t,e)})}},render:function(){var t=ut(this.$slots.default),e=t&&t.componentOptions;if(e){var i=Ce(e);if(i&&(this.include&&!ke(this.include,i)||this.exclude&&ke(this.exclude,i)))return t;var n=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[n]?t.componentInstance=this.cache[n].componentInstance:this.cache[n]=t,t.data.keepAlive=!0}return t}},Bs={KeepAlive:Us};!function(t){var e={};e.get=function(){return Ur},Object.defineProperty(t,"config",e),t.util={warn:Vr,extend:_,mergeOptions:q,defineReactive:N},t.set=M,t.delete=j,t.nextTick=cs,t.options=Object.create(null),Wr.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,_(t.options.components,Bs),ve(t),_e(t),ye(t),xe(t)}(me),Object.defineProperty(me.prototype,"$isServer",{get:as}),Object.defineProperty(me.prototype,"$ssrContext",{get:function(){return this.$vnode.ssrContext}}),me.version="2.3.3";var Ys,Vs,Ks,Xs,Gs,Zs,Js,Qs,to,eo=d("style,class"),io=d("input,textarea,option,select"),no=function(t,e,i){return"value"===i&&io(t)&&"button"!==e||"selected"===i&&"option"===t||"checked"===i&&"input"===t||"muted"===i&&"video"===t},ro=d("contenteditable,draggable,spellcheck"),so=d("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),oo="http://www.w3.org/1999/xlink",ao=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},lo=function(t){return ao(t)?t.slice(6,t.length):""},uo=function(t){return null==t||!1===t},co={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ho=d("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),po=d("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),fo=function(t){return"pre"===t},go=function(t){return ho(t)||po(t)},mo=Object.create(null),vo=Object.freeze({createElement:Me,createElementNS:je,createTextNode:He,createComment:Re,insertBefore:Le,removeChild:Fe,appendChild:ze,parentNode:We,nextSibling:qe,tagName:Ue,setTextContent:Be,setAttribute:Ye}),_o={create:function(t,e){Ve(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Ve(t,!0),Ve(e))},destroy:function(t){Ve(t,!0)}},yo=new ws("",{},[]),bo=["create","activate","update","remove","destroy"],wo={create:Ze,update:Ze,destroy:function(t){Ze(t,yo)}},xo=Object.create(null),Co=[_o,wo],ko={create:ii,update:ii},To={create:ri,update:ri},Do=/[\w).+\-_$\]]/,So="__r",Ao="__c",Eo={create:$i,update:$i},Io={create:Oi,update:Oi},$o=g(function(t){var e={},i=/;(?![^(]*\))/g,n=/:(.+)/;return t.split(i).forEach(function(t){if(t){var i=t.split(n);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}),Oo=/^--/,Po=/\s*!important$/,No=function(t,e,i){if(Oo.test(e))t.style.setProperty(e,i);else if(Po.test(i))t.style.setProperty(e,i.replace(Po,""),"important");else{var n=jo(e);if(Array.isArray(i))for(var r=0,s=i.length;r<s;r++)t.style[n]=i[r];else t.style[n]=i}},Mo=["Webkit","Moz","ms"],jo=g(function(t){if(to=to||document.createElement("div"),"filter"!==(t=Mr(t))&&t in to.style)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<Mo.length;i++){var n=Mo[i]+e;if(n in to.style)return n}}),Ho={create:Li,update:Li},Ro=g(function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}}),Lo=Xr&&!Jr,Fo="transition",zo="animation",Wo="transition",qo="transitionend",Uo="animation",Bo="animationend";Lo&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Wo="WebkitTransition",qo="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Uo="WebkitAnimation",Bo="webkitAnimationEnd"));var Yo=Xr&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout,Vo=/\b(transform|all)(,|$)/,Ko=Xr?{create:tn,activate:tn,remove:function(t,e){!0!==t.data.show?Zi(t,e):e()}}:{},Xo=[ko,To,Eo,Io,Ho,Ko],Go=Xo.concat(Co),Zo=function(t){function e(t){return new ws(I.tagName(t).toLowerCase(),{},[],void 0,t)}function s(t,e){function i(){0==--i.listeners&&a(t)}return i.listeners=e,i}function a(t){var e=I.parentNode(t);n(e)&&I.removeChild(e,t)}function l(t,e,i,s,o){if(t.isRootInsert=!o,!u(t,e,i,s)){var a=t.data,l=t.children,c=t.tag;n(c)?(t.elm=t.ns?I.createElementNS(t.ns,c):I.createElement(c,t),v(t),f(t,l,e),n(a)&&m(t,e),p(i,t.elm,s)):r(t.isComment)?(t.elm=I.createComment(t.text),p(i,t.elm,s)):(t.elm=I.createTextNode(t.text),p(i,t.elm,s))}}function u(t,e,i,s){var o=t.data;if(n(o)){var a=n(t.componentInstance)&&o.keepAlive;if(n(o=o.hook)&&n(o=o.init)&&o(t,!1,i,s),n(t.componentInstance))return c(t,e),r(a)&&h(t,e,i,s),!0}}function c(t,e){n(t.data.pendingInsert)&&e.push.apply(e,t.data.pendingInsert),t.elm=t.componentInstance.$el,g(t)?(m(t,e),v(t)):(Ve(t),e.push(t))}function h(t,e,i,r){for(var s,o=t;o.componentInstance;)if(o=o.componentInstance._vnode,n(s=o.data)&&n(s=s.transition)){for(s=0;s<A.activate.length;++s)A.activate[s](yo,o);e.push(o);break}p(i,t.elm,r)}function p(t,e,i){n(t)&&(n(i)?i.parentNode===t&&I.insertBefore(t,e,i):I.appendChild(t,e))}function f(t,e,i){if(Array.isArray(e))for(var n=0;n<e.length;++n)l(e[n],i,t.elm,null,!0);else o(t.text)&&I.appendChild(t.elm,I.createTextNode(t.text))}function g(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return n(t.tag)}function m(t,e){for(var i=0;i<A.create.length;++i)A.create[i](yo,t);D=t.data.hook,n(D)&&(n(D.create)&&D.create(yo,t),n(D.insert)&&e.push(t))}function v(t){for(var e,i=t;i;)n(e=i.context)&&n(e=e.$options._scopeId)&&I.setAttribute(t.elm,e,""),i=i.parent;n(e=Ds)&&e!==t.context&&n(e=e.$options._scopeId)&&I.setAttribute(t.elm,e,"")}function _(t,e,i,n,r,s){for(;n<=r;++n)l(i[n],s,t,e)}function y(t){var e,i,r=t.data;if(n(r))for(n(e=r.hook)&&n(e=e.destroy)&&e(t),e=0;e<A.destroy.length;++e)A.destroy[e](t);if(n(e=t.children))for(i=0;i<t.children.length;++i)y(t.children[i])}function b(t,e,i,r){for(;i<=r;++i){var s=e[i];n(s)&&(n(s.tag)?(w(s),y(s)):a(s.elm))}}function w(t,e){if(n(e)||n(t.data)){var i,r=A.remove.length+1;for(n(e)?e.listeners+=r:e=s(t.elm,r),n(i=t.componentInstance)&&n(i=i._vnode)&&n(i.data)&&w(i,e),i=0;i<A.remove.length;++i)A.remove[i](t,e);n(i=t.data.hook)&&n(i=i.remove)?i(t,e):e()}else a(t.elm)}function x(t,e,r,s,o){for(var a,u,c,h,d=0,p=0,f=e.length-1,g=e[0],m=e[f],v=r.length-1,y=r[0],w=r[v],x=!o;d<=f&&p<=v;)i(g)?g=e[++d]:i(m)?m=e[--f]:Ke(g,y)?(C(g,y,s),g=e[++d],y=r[++p]):Ke(m,w)?(C(m,w,s),m=e[--f],w=r[--v]):Ke(g,w)?(C(g,w,s),x&&I.insertBefore(t,g.elm,I.nextSibling(m.elm)),g=e[++d],w=r[--v]):Ke(m,y)?(C(m,y,s),x&&I.insertBefore(t,m.elm,g.elm),m=e[--f],y=r[++p]):(i(a)&&(a=Ge(e,d,f)),u=n(y.key)?a[y.key]:null,i(u)?(l(y,s,t,g.elm),y=r[++p]):(c=e[u],Ke(c,y)?(C(c,y,s),e[u]=void 0,x&&I.insertBefore(t,y.elm,g.elm),y=r[++p]):(l(y,s,t,g.elm),y=r[++p])));d>f?(h=i(r[v+1])?null:r[v+1].elm,_(t,h,r,p,v,s)):p>v&&b(t,e,d,f)}function C(t,e,s,o){if(t!==e){if(r(e.isStatic)&&r(t.isStatic)&&e.key===t.key&&(r(e.isCloned)||r(e.isOnce)))return e.elm=t.elm,void(e.componentInstance=t.componentInstance);var a,l=e.data;n(l)&&n(a=l.hook)&&n(a=a.prepatch)&&a(t,e);var u=e.elm=t.elm,c=t.children,h=e.children;if(n(l)&&g(e)){for(a=0;a<A.update.length;++a)A.update[a](t,e);n(a=l.hook)&&n(a=a.update)&&a(t,e)}i(e.text)?n(c)&&n(h)?c!==h&&x(u,c,h,s,o):n(h)?(n(t.text)&&I.setTextContent(u,""),_(u,null,h,0,h.length-1,s)):n(c)?b(u,c,0,c.length-1):n(t.text)&&I.setTextContent(u,""):t.text!==e.text&&I.setTextContent(u,e.text),n(l)&&n(a=l.hook)&&n(a=a.postpatch)&&a(t,e)}}function k(t,e,i){if(r(i)&&n(t.parent))t.parent.data.pendingInsert=e;else for(var s=0;s<e.length;++s)e[s].data.hook.insert(e[s])}function T(t,e,i){e.elm=t;var r=e.tag,s=e.data,o=e.children;if(n(s)&&(n(D=s.hook)&&n(D=D.init)&&D(e,!0),n(D=e.componentInstance)))return c(e,i),!0;if(n(r)){if(n(o))if(t.hasChildNodes()){for(var a=!0,l=t.firstChild,u=0;u<o.length;u++){if(!l||!T(l,o[u],i)){a=!1;break}l=l.nextSibling}if(!a||l)return!1}else f(e,o,i);if(n(s))for(var h in s)if(!$(h)){m(e,i);break}}else t.data!==e.text&&(t.data=e.text);return!0}var D,S,A={},E=t.modules,I=t.nodeOps;for(D=0;D<bo.length;++D)for(A[bo[D]]=[],S=0;S<E.length;++S)n(E[S][bo[D]])&&A[bo[D]].push(E[S][bo[D]]);var $=d("attrs,style,class,staticClass,staticStyle,key");return function(t,s,o,a,u,c){if(i(s))return void(n(t)&&y(t));var h=!1,d=[];if(i(t))h=!0,l(s,d,u,c);else{var p=n(t.nodeType);if(!p&&Ke(t,s))C(t,s,d,a);else{if(p){if(1===t.nodeType&&t.hasAttribute(zr)&&(t.removeAttribute(zr),o=!0),r(o)&&T(t,s,d))return k(s,d,!0),t;t=e(t)}var f=t.elm,m=I.parentNode(f);if(l(s,d,f._leaveCb?null:m,I.nextSibling(f)),n(s.parent)){for(var v=s.parent;v;)v.elm=s.elm,v=v.parent;if(g(s))for(var _=0;_<A.create.length;++_)A.create[_](yo,s.parent)}n(m)?b(m,[t],0,0):n(t.tag)&&y(t)}}return k(s,d,h),s.elm}}({nodeOps:vo,modules:Go});Jr&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&an(t,"input")});var Jo={inserted:function(t,e,i){if("select"===i.tag){var n=function(){en(t,e,i.context)};n(),(Zr||Qr)&&setTimeout(n,0)}else"textarea"!==i.tag&&"text"!==t.type&&"password"!==t.type||(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("change",on),ts||(t.addEventListener("compositionstart",sn),t.addEventListener("compositionend",on)),Jr&&(t.vmodel=!0)))},componentUpdated:function(t,e,i){if("select"===i.tag){en(t,e,i.context);(t.multiple?e.value.some(function(e){return nn(e,t.options)}):e.value!==e.oldValue&&nn(e.value,t.options))&&an(t,"change")}}},Qo={bind:function(t,e,i){var n=e.value;i=ln(i);var r=i.data&&i.data.transition,s=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;n&&r&&!Jr?(i.data.show=!0,Gi(i,function(){t.style.display=s})):t.style.display=n?s:"none"},update:function(t,e,i){var n=e.value;n!==e.oldValue&&(i=ln(i),i.data&&i.data.transition&&!Jr?(i.data.show=!0,n?Gi(i,function(){t.style.display=t.__vOriginalDisplay}):Zi(i,function(){t.style.display="none"})):t.style.display=n?t.__vOriginalDisplay:"none")},unbind:function(t,e,i,n,r){r||(t.style.display=t.__vOriginalDisplay)}},ta={model:Jo,show:Qo},ea={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]},ia={name:"transition",props:ea,abstract:!0,render:function(t){var e=this,i=this.$slots.default;if(i&&(i=i.filter(function(t){return t.tag}),i.length)){var n=this.mode,r=i[0];if(dn(this.$vnode))return r;var s=un(r);if(!s)return r;if(this._leaving)return hn(t,r);var a="__transition-"+this._uid+"-";s.key=null==s.key?a+s.tag:o(s.key)?0===String(s.key).indexOf(a)?s.key:a+s.key:s.key;var l=(s.data||(s.data={})).transition=cn(this),u=this._vnode,c=un(u);if(s.data.directives&&s.data.directives.some(function(t){return"show"===t.name})&&(s.data.show=!0),c&&c.data&&!pn(s,c)){var h=c&&(c.data.transition=_({},l));if("out-in"===n)return this._leaving=!0,tt(h,"afterLeave",function(){e._leaving=!1,e.$forceUpdate()}),hn(t,r);if("in-out"===n){var d,p=function(){d()};tt(l,"afterEnter",p),tt(l,"enterCancelled",p),tt(h,"delayLeave",function(t){d=t})}}return r}}},na=_({tag:String,moveClass:String},ea);delete na.mode;var ra={props:na,render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",i=Object.create(null),n=this.prevChildren=this.children,r=this.$slots.default||[],s=this.children=[],o=cn(this),a=0;a<r.length;a++){var l=r[a];if(l.tag)if(null!=l.key&&0!==String(l.key).indexOf("__vlist"))s.push(l),i[l.key]=l,(l.data||(l.data={})).transition=o;else;}if(n){for(var u=[],c=[],h=0;h<n.length;h++){var d=n[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),i[d.key]?u.push(d):c.push(d)}this.kept=t(e,null,u),this.removed=c}return t(e,null,s)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";if(t.length&&this.hasMove(t[0].elm,e)){t.forEach(fn),t.forEach(gn),t.forEach(mn);var i=document.body;i.offsetHeight;t.forEach(function(t){if(t.data.moved){var i=t.elm,n=i.style;Ui(i,e),n.transform=n.WebkitTransform=n.transitionDuration="",i.addEventListener(qo,i._moveCb=function t(n){n&&!/transform$/.test(n.propertyName)||(i.removeEventListener(qo,t),i._moveCb=null,Bi(i,e))})}})}},methods:{hasMove:function(t,e){if(!Lo)return!1;if(null!=this._hasMove)return this._hasMove;var i=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach(function(t){zi(i,t)}),Fi(i,e),i.style.display="none",this.$el.appendChild(i);var n=Vi(i);return this.$el.removeChild(i),this._hasMove=n.hasTransform}}},sa={Transition:ia,TransitionGroup:ra};me.config.mustUseProp=no,me.config.isReservedTag=go,me.config.isReservedAttr=eo,me.config.getTagNamespace=Oe,me.config.isUnknownElement=Pe,_(me.options.directives,ta),_(me.options.components,sa),me.prototype.__patch__=Xr?Zo:b,me.prototype.$mount=function(t,e){return t=t&&Xr?Ne(t):void 0,_t(this,t,e)},setTimeout(function(){Ur.devtools&&ls&&ls.emit("init",me)},0);var oa,aa=!!Xr&&function(t,e){var i=document.createElement("div");return i.innerHTML='<div a="'+t+'">',i.innerHTML.indexOf(e)>0}("\n","&#10;"),la=d("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),ua=d("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),ca=d("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),ha=/([^\s"'<>\/=]+)/,da=/(?:=)/,pa=[/"([^"]*)"+/.source,/'([^']*)'+/.source,/([^\s"'=<>`]+)/.source],fa=new RegExp("^\\s*"+ha.source+"(?:\\s*("+da.source+")\\s*(?:"+pa.join("|")+"))?"),ga="[a-zA-Z_][\\w\\-\\.]*",ma="((?:"+ga+"\\:)?"+ga+")",va=new RegExp("^<"+ma),_a=/^\s*(\/?)>/,ya=new RegExp("^<\\/"+ma+"[^>]*>"),ba=/^<!DOCTYPE [^>]+>/i,wa=/^<!--/,xa=/^<!\[/,Ca=!1;"x".replace(/x(.)?/g,function(t,e){Ca=""===e});var ka,Ta,Da,Sa,Aa,Ea,Ia,$a,Oa,Pa,Na,Ma,ja,Ha,Ra,La,Fa,za,Wa=d("script,style,textarea",!0),qa={},Ua={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n"},Ba=/&(?:lt|gt|quot|amp);/g,Ya=/&(?:lt|gt|quot|amp|#10);/g,Va=/\{\{((?:.|\n)+?)\}\}/g,Ka=/[-.*+?^${}()|[\]\/\\]/g,Xa=g(function(t){var e=t[0].replace(Ka,"\\$&"),i=t[1].replace(Ka,"\\$&");return new RegExp(e+"((?:.|\\n)+?)"+i,"g")}),Ga=/^@|^v-on:/,Za=/^v-|^@|^:/,Ja=/(.*?)\s+(?:in|of)\s+(.*)/,Qa=/\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,tl=/:(.*)$/,el=/^:|^v-bind:/,il=/\.[^.]+/g,nl=g(vn),rl=/^xmlns:NS\d+/,sl=/^NS\d+:/,ol=g(Wn),al=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,ll=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,ul={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},cl=function(t){return"if("+t+")return null;"},hl={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:cl("$event.target !== $event.currentTarget"),ctrl:cl("!$event.ctrlKey"),shift:cl("!$event.shiftKey"),alt:cl("!$event.altKey"),meta:cl("!$event.metaKey"),left:cl("'button' in $event && $event.button !== 0"),middle:cl("'button' in $event && $event.button !== 1"),right:cl("'button' in $event && $event.button !== 2")},dl={bind:Jn,cloak:b},pl=(new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)"),{staticKeys:["staticClass"],transformNode:kr,genData:Tr}),fl={staticKeys:["staticStyle"],transformNode:Dr,genData:Sr},gl=[pl,fl],ml={model:Ci,text:Ar,html:Er},vl={expectHTML:!0,modules:gl,directives:ml,isPreTag:fo,isUnaryTag:la,mustUseProp:no,canBeLeftOpenTag:ua,isReservedTag:go,getTagNamespace:Oe,staticKeys:function(t){return t.reduce(function(t,e){return t.concat(e.staticKeys||[])},[]).join(",")}(gl)},_l=function(t){function e(e,i){var n=Object.create(t),r=[],s=[];if(n.warn=function(t,e){(e?s:r).push(t)},i){i.modules&&(n.modules=(t.modules||[]).concat(i.modules)),i.directives&&(n.directives=_(Object.create(t.directives),i.directives));for(var o in i)"modules"!==o&&"directives"!==o&&(n[o]=i[o])}var a=xr(e,n);return a.errors=r,a.tips=s,a}function i(t,i,r){i=i||{};var s=i.delimiters?String(i.delimiters)+t:t;if(n[s])return n[s];var o=e(t,i),a={},l=[];a.render=Cr(o.render,l);var u=o.staticRenderFns.length;a.staticRenderFns=new Array(u);for(var c=0;c<u;c++)a.staticRenderFns[c]=Cr(o.staticRenderFns[c],l);return n[s]=a}var n=Object.create(null);return{compile:e,compileToFunctions:i}}(vl),yl=_l.compileToFunctions,bl=g(function(t){var e=Ne(t);return e&&e.innerHTML}),wl=me.prototype.$mount;me.prototype.$mount=function(t,e){if((t=t&&Ne(t))===document.body||t===document.documentElement)return this;var i=this.$options;if(!i.render){var n=i.template;if(n)if("string"==typeof n)"#"===n.charAt(0)&&(n=bl(n));else{if(!n.nodeType)return this;n=n.innerHTML}else t&&(n=Ir(t));if(n){var r=yl(n,{shouldDecodeNewlines:aa,delimiters:i.delimiters},this),s=r.render,o=r.staticRenderFns;i.render=s,i.staticRenderFns=o}}return wl.call(this,t,e)},me.compile=yl,t.exports=me}).call(e,i(4))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){},,function(t,e,i){t.exports=i(5)}]);
//# sourceMappingURL=vue.js.map
!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e(require,exports,module):t.Tether=e()}(this,function(t,e,o){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t){var e=t.getBoundingClientRect(),o={};for(var i in e)o[i]=e[i];if(t.ownerDocument!==document){var r=t.ownerDocument.defaultView.frameElement;if(r){var s=n(r);o.top+=s.top,o.bottom+=s.top,o.left+=s.left,o.right+=s.left}}return o}function r(t){var e=getComputedStyle(t)||{},o=e.position,i=[];if("fixed"===o)return[t];for(var n=t;(n=n.parentNode)&&n&&1===n.nodeType;){var r=void 0;try{r=getComputedStyle(n)}catch(s){}if("undefined"==typeof r||null===r)return i.push(n),i;var a=r,f=a.overflow,l=a.overflowX,h=a.overflowY;/(auto|scroll)/.test(f+h+l)&&("absolute"!==o||["relative","absolute","fixed"].indexOf(r.position)>=0)&&i.push(n)}return i.push(t.ownerDocument.body),t.ownerDocument!==document&&i.push(t.ownerDocument.defaultView),i}function s(){A&&document.body.removeChild(A),A=null}function a(t){var e=void 0;t===document?(e=document,t=document.documentElement):e=t.ownerDocument;var o=e.documentElement,i=n(t),r=P();return i.top-=r.top,i.left-=r.left,"undefined"==typeof i.width&&(i.width=document.body.scrollWidth-i.left-i.right),"undefined"==typeof i.height&&(i.height=document.body.scrollHeight-i.top-i.bottom),i.top=i.top-o.clientTop,i.left=i.left-o.clientLeft,i.right=e.body.clientWidth-i.width-i.left,i.bottom=e.body.clientHeight-i.height-i.top,i}function f(t){return t.offsetParent||document.documentElement}function l(){if(M)return M;var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var e=document.createElement("div");h(e.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);var o=t.offsetWidth;e.style.overflow="scroll";var i=t.offsetWidth;o===i&&(i=e.clientWidth),document.body.removeChild(e);var n=o-i;return M={width:n,height:n}}function h(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=[];return Array.prototype.push.apply(e,arguments),e.slice(1).forEach(function(e){if(e)for(var o in e)({}).hasOwnProperty.call(e,o)&&(t[o]=e[o])}),t}function d(t,e){if("undefined"!=typeof t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.remove(e)});else{var o=new RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi"),i=c(t).replace(o," ");g(t,i)}}function p(t,e){if("undefined"!=typeof t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.add(e)});else{d(t,e);var o=c(t)+(" "+e);g(t,o)}}function u(t,e){if("undefined"!=typeof t.classList)return t.classList.contains(e);var o=c(t);return new RegExp("(^| )"+e+"( |$)","gi").test(o)}function c(t){return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString?t.className.baseVal:t.className}function g(t,e){t.setAttribute("class",e)}function m(t,e,o){o.forEach(function(o){e.indexOf(o)===-1&&u(t,o)&&d(t,o)}),e.forEach(function(e){u(t,e)||p(t,e)})}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function y(t,e){var o=arguments.length<=2||void 0===arguments[2]?1:arguments[2];return t+o>=e&&e>=t-o}function b(){return"undefined"!=typeof performance&&"undefined"!=typeof performance.now?performance.now():+new Date}function w(){for(var t={top:0,left:0},e=arguments.length,o=Array(e),i=0;i<e;i++)o[i]=arguments[i];return o.forEach(function(e){var o=e.top,i=e.left;"string"==typeof o&&(o=parseFloat(o,10)),"string"==typeof i&&(i=parseFloat(i,10)),t.top+=o,t.left+=i}),t}function C(t,e){return"string"==typeof t.left&&t.left.indexOf("%")!==-1&&(t.left=parseFloat(t.left,10)/100*e.width),"string"==typeof t.top&&t.top.indexOf("%")!==-1&&(t.top=parseFloat(t.top,10)/100*e.height),t}function O(t,e){return"scrollParent"===e?e=t.scrollParents[0]:"window"===e&&(e=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),e===document&&(e=e.documentElement),"undefined"!=typeof e.nodeType&&!function(){var t=e,o=a(e),i=o,n=getComputedStyle(e);if(e=[i.left,i.top,o.width+i.left,o.height+i.top],t.ownerDocument!==document){var r=t.ownerDocument.defaultView;e[0]+=r.pageXOffset,e[1]+=r.pageYOffset,e[2]+=r.pageXOffset,e[3]+=r.pageYOffset}G.forEach(function(t,o){t=t[0].toUpperCase()+t.substr(1),"Top"===t||"Left"===t?e[o]+=parseFloat(n["border"+t+"Width"]):e[o]-=parseFloat(n["border"+t+"Width"])})}(),e}var E=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),x=void 0;"undefined"==typeof x&&(x={modules:[]});var A=null,T=function(){var t=0;return function(){return++t}}(),S={},P=function(){var t=A;t&&document.body.contains(t)||(t=document.createElement("div"),t.setAttribute("data-tether-id",T()),h(t.style,{top:0,left:0,position:"absolute"}),document.body.appendChild(t),A=t);var e=t.getAttribute("data-tether-id");return"undefined"==typeof S[e]&&(S[e]=n(t),k(function(){delete S[e]})),S[e]},M=null,W=[],k=function(t){W.push(t)},_=function(){for(var t=void 0;t=W.pop();)t()},B=function(){function t(){i(this,t)}return E(t,[{key:"on",value:function(t,e,o){var i=!(arguments.length<=3||void 0===arguments[3])&&arguments[3];"undefined"==typeof this.bindings&&(this.bindings={}),"undefined"==typeof this.bindings[t]&&(this.bindings[t]=[]),this.bindings[t].push({handler:e,ctx:o,once:i})}},{key:"once",value:function(t,e,o){this.on(t,e,o,!0)}},{key:"off",value:function(t,e){if("undefined"!=typeof this.bindings&&"undefined"!=typeof this.bindings[t])if("undefined"==typeof e)delete this.bindings[t];else for(var o=0;o<this.bindings[t].length;)this.bindings[t][o].handler===e?this.bindings[t].splice(o,1):++o}},{key:"trigger",value:function(t){if("undefined"!=typeof this.bindings&&this.bindings[t]){for(var e=0,o=arguments.length,i=Array(o>1?o-1:0),n=1;n<o;n++)i[n-1]=arguments[n];for(;e<this.bindings[t].length;){var r=this.bindings[t][e],s=r.handler,a=r.ctx,f=r.once,l=a;"undefined"==typeof l&&(l=this),s.apply(l,i),f?this.bindings[t].splice(e,1):++e}}}}]),t}();x.Utils={getActualBoundingClientRect:n,getScrollParents:r,getBounds:a,getOffsetParent:f,extend:h,addClass:p,removeClass:d,hasClass:u,updateClasses:m,defer:k,flush:_,uniqueId:T,Evented:B,getScrollBarSize:l,removeUtilElements:s};var z=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),E=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),j=function(t,e,o){for(var i=!0;i;){var n=t,r=e,s=o;i=!1,null===n&&(n=Function.prototype);var a=Object.getOwnPropertyDescriptor(n,r);if(void 0!==a){if("value"in a)return a.value;var f=a.get;if(void 0===f)return;return f.call(s)}var l=Object.getPrototypeOf(n);if(null===l)return;t=l,e=r,o=s,i=!0,a=l=void 0}};if("undefined"==typeof x)throw new Error("You must include the utils.js file before tether.js");var Y=x.Utils,r=Y.getScrollParents,a=Y.getBounds,f=Y.getOffsetParent,h=Y.extend,p=Y.addClass,d=Y.removeClass,m=Y.updateClasses,k=Y.defer,_=Y.flush,l=Y.getScrollBarSize,s=Y.removeUtilElements,L=function(){if("undefined"==typeof document)return"";for(var t=document.createElement("div"),e=["transform","WebkitTransform","OTransform","MozTransform","msTransform"],o=0;o<e.length;++o){var i=e[o];if(void 0!==t.style[i])return i}}(),D=[],X=function(){D.forEach(function(t){t.position(!1)}),_()};!function(){var t=null,e=null,o=null,i=function n(){return"undefined"!=typeof e&&e>16?(e=Math.min(e-16,250),void(o=setTimeout(n,250))):void("undefined"!=typeof t&&b()-t<10||(null!=o&&(clearTimeout(o),o=null),t=b(),X(),e=b()-t))};"undefined"!=typeof window&&"undefined"!=typeof window.addEventListener&&["resize","scroll","touchmove"].forEach(function(t){window.addEventListener(t,i)})}();var F={center:"center",left:"right",right:"left"},H={middle:"middle",top:"bottom",bottom:"top"},N={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},U=function(t,e){var o=t.left,i=t.top;return"auto"===o&&(o=F[e.left]),"auto"===i&&(i=H[e.top]),{left:o,top:i}},V=function(t){var e=t.left,o=t.top;return"undefined"!=typeof N[t.left]&&(e=N[t.left]),"undefined"!=typeof N[t.top]&&(o=N[t.top]),{left:e,top:o}},R=function(t){var e=t.split(" "),o=z(e,2),i=o[0],n=o[1];return{top:i,left:n}},q=R,I=function(t){function e(t){var o=this;i(this,e),j(Object.getPrototypeOf(e.prototype),"constructor",this).call(this),this.position=this.position.bind(this),D.push(this),this.history=[],this.setOptions(t,!1),x.modules.forEach(function(t){"undefined"!=typeof t.initialize&&t.initialize.call(o)}),this.position()}return v(e,t),E(e,[{key:"getClass",value:function(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0],e=this.options.classes;return"undefined"!=typeof e&&e[t]?this.options.classes[t]:this.options.classPrefix?this.options.classPrefix+"-"+t:t}},{key:"setOptions",value:function(t){var e=this,o=arguments.length<=1||void 0===arguments[1]||arguments[1],i={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"};this.options=h(i,t);var n=this.options,s=n.element,a=n.target,f=n.targetModifier;if(this.element=s,this.target=a,this.targetModifier=f,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),["element","target"].forEach(function(t){if("undefined"==typeof e[t])throw new Error("Tether Error: Both element and target must be defined");"undefined"!=typeof e[t].jquery?e[t]=e[t][0]:"string"==typeof e[t]&&(e[t]=document.querySelector(e[t]))}),p(this.element,this.getClass("element")),this.options.addTargetClasses!==!1&&p(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");this.targetAttachment=q(this.options.targetAttachment),this.attachment=q(this.options.attachment),this.offset=R(this.options.offset),this.targetOffset=R(this.options.targetOffset),"undefined"!=typeof this.scrollParents&&this.disable(),"scroll-handle"===this.targetModifier?this.scrollParents=[this.target]:this.scrollParents=r(this.target),this.options.enabled!==!1&&this.enable(o)}},{key:"getTargetBounds",value:function(){if("undefined"==typeof this.targetModifier)return a(this.target);if("visible"===this.targetModifier){if(this.target===document.body)return{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth};var t=a(this.target),e={height:t.height,width:t.width,top:t.top,left:t.left};return e.height=Math.min(e.height,t.height-(pageYOffset-t.top)),e.height=Math.min(e.height,t.height-(t.top+t.height-(pageYOffset+innerHeight))),e.height=Math.min(innerHeight,e.height),e.height-=2,e.width=Math.min(e.width,t.width-(pageXOffset-t.left)),e.width=Math.min(e.width,t.width-(t.left+t.width-(pageXOffset+innerWidth))),e.width=Math.min(innerWidth,e.width),e.width-=2,e.top<pageYOffset&&(e.top=pageYOffset),e.left<pageXOffset&&(e.left=pageXOffset),e}if("scroll-handle"===this.targetModifier){var t=void 0,o=this.target;o===document.body?(o=document.documentElement,t={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):t=a(o);var i=getComputedStyle(o),n=o.scrollWidth>o.clientWidth||[i.overflow,i.overflowX].indexOf("scroll")>=0||this.target!==document.body,r=0;n&&(r=15);var s=t.height-parseFloat(i.borderTopWidth)-parseFloat(i.borderBottomWidth)-r,e={width:15,height:.975*s*(s/o.scrollHeight),left:t.left+t.width-parseFloat(i.borderLeftWidth)-15},f=0;s<408&&this.target===document.body&&(f=-11e-5*Math.pow(s,2)-.00727*s+22.58),this.target!==document.body&&(e.height=Math.max(e.height,24));var l=this.target.scrollTop/(o.scrollHeight-s);return e.top=l*(s-e.height-f)+t.top+parseFloat(i.borderTopWidth),this.target===document.body&&(e.height=Math.max(e.height,24)),e}}},{key:"clearCache",value:function(){this._cache={}}},{key:"cache",value:function(t,e){return"undefined"==typeof this._cache&&(this._cache={}),"undefined"==typeof this._cache[t]&&(this._cache[t]=e.call(this)),this._cache[t]}},{key:"enable",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]||arguments[0];this.options.addTargetClasses!==!1&&p(this.target,this.getClass("enabled")),p(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParents.forEach(function(e){e!==t.target.ownerDocument&&e.addEventListener("scroll",t.position)}),e&&this.position()}},{key:"disable",value:function(){var t=this;d(this.target,this.getClass("enabled")),d(this.element,this.getClass("enabled")),this.enabled=!1,"undefined"!=typeof this.scrollParents&&this.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.position)})}},{key:"destroy",value:function(){var t=this;this.disable(),D.forEach(function(e,o){e===t&&D.splice(o,1)}),0===D.length&&s()}},{key:"updateAttachClasses",value:function(t,e){var o=this;t=t||this.attachment,e=e||this.targetAttachment;var i=["left","top","bottom","right","middle","center"];"undefined"!=typeof this._addAttachClasses&&this._addAttachClasses.length&&this._addAttachClasses.splice(0,this._addAttachClasses.length),"undefined"==typeof this._addAttachClasses&&(this._addAttachClasses=[]);var n=this._addAttachClasses;t.top&&n.push(this.getClass("element-attached")+"-"+t.top),t.left&&n.push(this.getClass("element-attached")+"-"+t.left),e.top&&n.push(this.getClass("target-attached")+"-"+e.top),e.left&&n.push(this.getClass("target-attached")+"-"+e.left);var r=[];i.forEach(function(t){r.push(o.getClass("element-attached")+"-"+t),r.push(o.getClass("target-attached")+"-"+t)}),k(function(){"undefined"!=typeof o._addAttachClasses&&(m(o.element,o._addAttachClasses,r),o.options.addTargetClasses!==!1&&m(o.target,o._addAttachClasses,r),delete o._addAttachClasses)})}},{key:"position",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]||arguments[0];if(this.enabled){this.clearCache();var o=U(this.targetAttachment,this.attachment);this.updateAttachClasses(this.attachment,o);var i=this.cache("element-bounds",function(){return a(t.element)}),n=i.width,r=i.height;if(0===n&&0===r&&"undefined"!=typeof this.lastSize){var s=this.lastSize;n=s.width,r=s.height}else this.lastSize={width:n,height:r};var h=this.cache("target-bounds",function(){return t.getTargetBounds()}),d=h,p=C(V(this.attachment),{width:n,height:r}),u=C(V(o),d),c=C(this.offset,{width:n,height:r}),g=C(this.targetOffset,d);p=w(p,c),u=w(u,g);for(var m=h.left+u.left-p.left,v=h.top+u.top-p.top,y=0;y<x.modules.length;++y){var b=x.modules[y],O=b.position.call(this,{left:m,top:v,targetAttachment:o,targetPos:h,elementPos:i,offset:p,targetOffset:u,manualOffset:c,manualTargetOffset:g,scrollbarSize:S,attachment:this.attachment});if(O===!1)return!1;"undefined"!=typeof O&&"object"==typeof O&&(v=O.top,m=O.left)}var E={page:{top:v,left:m},viewport:{top:v-pageYOffset,bottom:pageYOffset-v-r+innerHeight,left:m-pageXOffset,right:pageXOffset-m-n+innerWidth}},A=this.target.ownerDocument,T=A.defaultView,S=void 0;return T.innerHeight>A.documentElement.clientHeight&&(S=this.cache("scrollbar-size",l),E.viewport.bottom-=S.height),T.innerWidth>A.documentElement.clientWidth&&(S=this.cache("scrollbar-size",l),E.viewport.right-=S.width),["","static"].indexOf(A.body.style.position)!==-1&&["","static"].indexOf(A.body.parentElement.style.position)!==-1||(E.page.bottom=A.body.scrollHeight-v-r,E.page.right=A.body.scrollWidth-m-n),"undefined"!=typeof this.options.optimizations&&this.options.optimizations.moveElement!==!1&&"undefined"==typeof this.targetModifier&&!function(){var e=t.cache("target-offsetparent",function(){return f(t.target)}),o=t.cache("target-offsetparent-bounds",function(){return a(e)}),i=getComputedStyle(e),n=o,r={};if(["Top","Left","Bottom","Right"].forEach(function(t){r[t.toLowerCase()]=parseFloat(i["border"+t+"Width"])}),o.right=A.body.scrollWidth-o.left-n.width+r.right,o.bottom=A.body.scrollHeight-o.top-n.height+r.bottom,E.page.top>=o.top+r.top&&E.page.bottom>=o.bottom&&E.page.left>=o.left+r.left&&E.page.right>=o.right){var s=e.scrollTop,l=e.scrollLeft;E.offset={top:E.page.top-o.top+s-r.top,left:E.page.left-o.left+l-r.left}}}(),this.move(E),this.history.unshift(E),this.history.length>3&&this.history.pop(),e&&_(),!0}}},{key:"move",value:function(t){var e=this;if("undefined"!=typeof this.element.parentNode){var o={};for(var i in t){o[i]={};for(var n in t[i]){for(var r=!1,s=0;s<this.history.length;++s){var a=this.history[s];if("undefined"!=typeof a[i]&&!y(a[i][n],t[i][n])){r=!0;break}}r||(o[i][n]=!0)}}var l={top:"",left:"",right:"",bottom:""},d=function(t,o){var i="undefined"!=typeof e.options.optimizations,n=i?e.options.optimizations.gpu:null;if(n!==!1){var r=void 0,s=void 0;if(t.top?(l.top=0,r=o.top):(l.bottom=0,r=-o.bottom),t.left?(l.left=0,s=o.left):(l.right=0,s=-o.right),window.matchMedia){var a=window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches||window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches;a||(s=Math.round(s),r=Math.round(r))}l[L]="translateX("+s+"px) translateY("+r+"px)","msTransform"!==L&&(l[L]+=" translateZ(0)")}else t.top?l.top=o.top+"px":l.bottom=o.bottom+"px",t.left?l.left=o.left+"px":l.right=o.right+"px"},p=!1;if((o.page.top||o.page.bottom)&&(o.page.left||o.page.right)?(l.position="absolute",d(o.page,t.page)):(o.viewport.top||o.viewport.bottom)&&(o.viewport.left||o.viewport.right)?(l.position="fixed",d(o.viewport,t.viewport)):"undefined"!=typeof o.offset&&o.offset.top&&o.offset.left?!function(){l.position="absolute";var i=e.cache("target-offsetparent",function(){return f(e.target)});f(e.element)!==i&&k(function(){e.element.parentNode.removeChild(e.element),i.appendChild(e.element)}),d(o.offset,t.offset),p=!0}():(l.position="absolute",d({top:!0,left:!0},t.page)),!p)if(this.options.bodyElement)this.options.bodyElement.appendChild(this.element);else{for(var u=!0,c=this.element.parentNode;c&&1===c.nodeType&&"BODY"!==c.tagName;){if("static"!==getComputedStyle(c).position){u=!1;break}c=c.parentNode}u||(this.element.parentNode.removeChild(this.element),this.element.ownerDocument.body.appendChild(this.element))}var g={},m=!1;for(var n in l){var v=l[n],b=this.element.style[n];b!==v&&(m=!0,g[n]=v)}m&&k(function(){h(e.element.style,g),e.trigger("repositioned")})}}}]),e}(B);I.modules=[],x.position=X;var $=h(I,x),z=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),Y=x.Utils,a=Y.getBounds,h=Y.extend,m=Y.updateClasses,k=Y.defer,G=["left","top","right","bottom"];x.modules.push({position:function(t){var e=this,o=t.top,i=t.left,n=t.targetAttachment;if(!this.options.constraints)return!0;var r=this.cache("element-bounds",function(){return a(e.element)}),s=r.height,f=r.width;if(0===f&&0===s&&"undefined"!=typeof this.lastSize){var l=this.lastSize;f=l.width,s=l.height}var d=this.cache("target-bounds",function(){return e.getTargetBounds()}),p=d.height,u=d.width,c=[this.getClass("pinned"),this.getClass("out-of-bounds")];this.options.constraints.forEach(function(t){var e=t.outOfBoundsClass,o=t.pinnedClass;e&&c.push(e),o&&c.push(o)}),c.forEach(function(t){["left","top","right","bottom"].forEach(function(e){c.push(t+"-"+e)})});var g=[],v=h({},n),y=h({},this.attachment);return this.options.constraints.forEach(function(t){var r=t.to,a=t.attachment,l=t.pin;"undefined"==typeof a&&(a="");var h=void 0,d=void 0;if(a.indexOf(" ")>=0){var c=a.split(" "),m=z(c,2);d=m[0],h=m[1]}else h=d=a;var b=O(e,r);"target"!==d&&"both"!==d||(o<b[1]&&"top"===v.top&&(o+=p,v.top="bottom"),o+s>b[3]&&"bottom"===v.top&&(o-=p,v.top="top")),"together"===d&&("top"===v.top&&("bottom"===y.top&&o<b[1]?(o+=p,v.top="bottom",o+=s,y.top="top"):"top"===y.top&&o+s>b[3]&&o-(s-p)>=b[1]&&(o-=s-p,v.top="bottom",y.top="bottom")),"bottom"===v.top&&("top"===y.top&&o+s>b[3]?(o-=p,v.top="top",o-=s,y.top="bottom"):"bottom"===y.top&&o<b[1]&&o+(2*s-p)<=b[3]&&(o+=s-p,v.top="top",y.top="top")),"middle"===v.top&&(o+s>b[3]&&"top"===y.top?(o-=s,y.top="bottom"):o<b[1]&&"bottom"===y.top&&(o+=s,y.top="top"))),"target"!==h&&"both"!==h||(i<b[0]&&"left"===v.left&&(i+=u,v.left="right"),i+f>b[2]&&"right"===v.left&&(i-=u,v.left="left")),"together"===h&&(i<b[0]&&"left"===v.left?"right"===y.left?(i+=u,v.left="right",i+=f,y.left="left"):"left"===y.left&&(i+=u,v.left="right",i-=f,y.left="right"):i+f>b[2]&&"right"===v.left?"left"===y.left?(i-=u,v.left="left",i-=f,y.left="right"):"right"===y.left&&(i-=u,v.left="left",i+=f,y.left="left"):"center"===v.left&&(i+f>b[2]&&"left"===y.left?(i-=f,y.left="right"):i<b[0]&&"right"===y.left&&(i+=f,y.left="left"))),"element"!==d&&"both"!==d||(o<b[1]&&"bottom"===y.top&&(o+=s,y.top="top"),o+s>b[3]&&"top"===y.top&&(o-=s,y.top="bottom")),"element"!==h&&"both"!==h||(i<b[0]&&("right"===y.left?(i+=f,y.left="left"):"center"===y.left&&(i+=f/2,y.left="left")),i+f>b[2]&&("left"===y.left?(i-=f,y.left="right"):"center"===y.left&&(i-=f/2,y.left="right"))),"string"==typeof l?l=l.split(",").map(function(t){return t.trim()}):l===!0&&(l=["top","left","right","bottom"]),l=l||[];var w=[],C=[];o<b[1]&&(l.indexOf("top")>=0?(o=b[1],w.push("top")):C.push("top")),o+s>b[3]&&(l.indexOf("bottom")>=0?(o=b[3]-s,w.push("bottom")):C.push("bottom")),i<b[0]&&(l.indexOf("left")>=0?(i=b[0],w.push("left")):C.push("left")),i+f>b[2]&&(l.indexOf("right")>=0?(i=b[2]-f,w.push("right")):C.push("right")),w.length&&!function(){var t=void 0;t="undefined"!=typeof e.options.pinnedClass?e.options.pinnedClass:e.getClass("pinned"),g.push(t),w.forEach(function(e){g.push(t+"-"+e)})}(),C.length&&!function(){var t=void 0;t="undefined"!=typeof e.options.outOfBoundsClass?e.options.outOfBoundsClass:e.getClass("out-of-bounds"),g.push(t),C.forEach(function(e){g.push(t+"-"+e)})}(),(w.indexOf("left")>=0||w.indexOf("right")>=0)&&(y.left=v.left=!1),(w.indexOf("top")>=0||w.indexOf("bottom")>=0)&&(y.top=v.top=!1),v.top===n.top&&v.left===n.left&&y.top===e.attachment.top&&y.left===e.attachment.left||(e.updateAttachClasses(y,v),e.trigger("update",{attachment:y,targetAttachment:v}))}),k(function(){e.options.addTargetClasses!==!1&&m(e.target,g,c),m(e.element,g,c)}),{top:o,left:i}}});var Y=x.Utils,a=Y.getBounds,m=Y.updateClasses,k=Y.defer;x.modules.push({position:function(t){var e=this,o=t.top,i=t.left,n=this.cache("element-bounds",function(){return a(e.element)}),r=n.height,s=n.width,f=this.getTargetBounds(),l=o+r,h=i+s,d=[];o<=f.bottom&&l>=f.top&&["left","right"].forEach(function(t){var e=f[t];e!==i&&e!==h||d.push(t)}),i<=f.right&&h>=f.left&&["top","bottom"].forEach(function(t){var e=f[t];e!==o&&e!==l||d.push(t)});var p=[],u=[],c=["left","top","right","bottom"];return p.push(this.getClass("abutted")),c.forEach(function(t){p.push(e.getClass("abutted")+"-"+t)}),d.length&&u.push(this.getClass("abutted")),d.forEach(function(t){u.push(e.getClass("abutted")+"-"+t)}),k(function(){e.options.addTargetClasses!==!1&&m(e.target,u,p),m(e.element,u,p)}),!0}});var z=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();return x.modules.push({position:function(t){var e=t.top,o=t.left;if(this.options.shift){var i=this.options.shift;"function"==typeof this.options.shift&&(i=this.options.shift.call(this,{top:e,left:o}));var n=void 0,r=void 0;if("string"==typeof i){i=i.split(" "),i[1]=i[1]||i[0];var s=i,a=z(s,2);n=a[0],r=a[1],n=parseFloat(n,10),r=parseFloat(r,10)}else n=i.top,r=i.left;return e+=n,o+=r,{top:e,left:o}}}}),$});
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function($) {

  $.fn.extend({
    slimScroll: function(options) {

      var defaults = {

        // width in pixels of the visible scroll area
        width : 'auto',

        // height in pixels of the visible scroll area
        height : '250px',

        // width in pixels of the scrollbar and rail
        size : '7px',

        // scrollbar color, accepts any hex/color value
        color: '#000',

        // scrollbar position - left/right
        position : 'right',

        // distance in pixels between the side edge and the scrollbar
        distance : '1px',

        // default scroll position on load - top / bottom / $('selector')
        start : 'top',

        // sets scrollbar opacity
        opacity : .4,

        // enables always-on mode for the scrollbar
        alwaysVisible : false,

        // check if we should hide the scrollbar when user is hovering over
        disableFadeOut : false,

        // sets visibility of the rail
        railVisible : false,

        // sets rail color
        railColor : '#333',

        // sets rail opacity
        railOpacity : .2,

        // whether  we should use jQuery UI Draggable to enable bar dragging
        railDraggable : true,

        // defautlt CSS class of the slimscroll rail
        railClass : 'slimScrollRail',

        // defautlt CSS class of the slimscroll bar
        barClass : 'slimScrollBar',

        // defautlt CSS class of the slimscroll wrapper
        wrapperClass : 'slimScrollDiv',

        // check if mousewheel should scroll the window if we reach top/bottom
        allowPageScroll : false,

        // scroll amount applied to each mouse wheel step
        wheelStep : 20,

        // scroll amount applied when user is using gestures
        touchScrollStep : 200,

        // sets border radius
        borderRadius: '7px',

        // sets border radius of the rail
        railBorderRadius : '7px'
      };

      var o = $.extend(defaults, options);

      // do it for every element that matches selector
      this.each(function(){

      var isOverPanel, isOverBar, isDragg, queueHide, touchDif,
        barHeight, percentScroll, lastScroll,
        divS = '<div></div>',
        minBarHeight = 30,
        releaseScroll = false;

        // used in event handlers and for better minification
        var me = $(this);

        // ensure we are not binding it again
        if (me.parent().hasClass(o.wrapperClass))
        {
            // start from last bar position
            var offset = me.scrollTop();

            // find bar and rail
            bar = me.siblings('.' + o.barClass);
            rail = me.siblings('.' + o.railClass);

            getBarHeight();

            // check if we should scroll existing instance
            if ($.isPlainObject(options))
            {
              // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
              if ( 'height' in options && options.height == 'auto' ) {
                me.parent().css('height', 'auto');
                me.css('height', 'auto');
                var height = me.parent().parent().height();
                me.parent().css('height', height);
                me.css('height', height);
              } else if ('height' in options) {
                var h = options.height;
                me.parent().css('height', h);
                me.css('height', h);
              }

              if ('scrollTo' in options)
              {
                // jump to a static point
                offset = parseInt(o.scrollTo);
              }
              else if ('scrollBy' in options)
              {
                // jump by value pixels
                offset += parseInt(o.scrollBy);
              }
              else if ('destroy' in options)
              {
                // remove slimscroll elements
                bar.remove();
                rail.remove();
                me.unwrap();
                return;
              }

              // scroll content by the given offset
              scrollContent(offset, false, true);
            }

            return;
        }
        else if ($.isPlainObject(options))
        {
            if ('destroy' in options)
            {
            	return;
            }
        }

        // optionally set height to the parent's height
        o.height = (o.height == 'auto') ? me.parent().height() : o.height;

        // wrap content
        var wrapper = $(divS)
          .addClass(o.wrapperClass)
          .css({
            position: 'relative',
            overflow: 'hidden',
            width: o.width,
            height: o.height
          });

        // update style for the div
        me.css({
          overflow: 'hidden',
          width: o.width,
          height: o.height
        });

        // create scrollbar rail
        var rail = $(divS)
          .addClass(o.railClass)
          .css({
            width: o.size,
            height: '100%',
            position: 'absolute',
            top: 0,
            display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none',
            'border-radius': o.railBorderRadius,
            background: o.railColor,
            opacity: o.railOpacity,
            zIndex: 90
          });

        // create scrollbar
        var bar = $(divS)
          .addClass(o.barClass)
          .css({
            background: o.color,
            width: o.size,
            position: 'absolute',
            top: 0,
            opacity: o.opacity,
            display: o.alwaysVisible ? 'block' : 'none',
            'border-radius' : o.borderRadius,
            BorderRadius: o.borderRadius,
            MozBorderRadius: o.borderRadius,
            WebkitBorderRadius: o.borderRadius,
            zIndex: 99
          });

        // set position
        var posCss = (o.position == 'right') ? { right: o.distance } : { left: o.distance };
        rail.css(posCss);
        bar.css(posCss);

        // wrap it
        me.wrap(wrapper);

        // append to parent div
        me.parent().append(bar);
        me.parent().append(rail);

        // make it draggable and no longer dependent on the jqueryUI
        if (o.railDraggable){
          bar.bind("mousedown", function(e) {
            var $doc = $(document);
            isDragg = true;
            t = parseFloat(bar.css('top'));
            pageY = e.pageY;

            $doc.bind("mousemove.slimscroll", function(e){
              currTop = t + e.pageY - pageY;
              bar.css('top', currTop);
              scrollContent(0, bar.position().top, false);// scroll content
            });

            $doc.bind("mouseup.slimscroll", function(e) {
              isDragg = false;hideBar();
              $doc.unbind('.slimscroll');
            });
            return false;
          }).bind("selectstart.slimscroll", function(e){
            e.stopPropagation();
            e.preventDefault();
            return false;
          });
        }

        // on rail over
        rail.hover(function(){
          showBar();
        }, function(){
          hideBar();
        });

        // on bar over
        bar.hover(function(){
          isOverBar = true;
        }, function(){
          isOverBar = false;
        });

        // show on parent mouseover
        me.hover(function(){
          isOverPanel = true;
          showBar();
          hideBar();
        }, function(){
          isOverPanel = false;
          hideBar();
        });

        // support for mobile
        me.bind('touchstart', function(e,b){
          if (e.originalEvent.touches.length)
          {
            // record where touch started
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        me.bind('touchmove', function(e){
          // prevent scrolling the page if necessary
          if(!releaseScroll)
          {
  		      e.originalEvent.preventDefault();
		      }
          if (e.originalEvent.touches.length)
          {
            // see how far user swiped
            var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep;
            // scroll content
            scrollContent(diff, true);
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        // set up initial height
        getBarHeight();

        // check start position
        if (o.start === 'bottom')
        {
          // scroll content to bottom
          bar.css({ top: me.outerHeight() - bar.outerHeight() });
          scrollContent(0, true);
        }
        else if (o.start !== 'top')
        {
          // assume jQuery selector
          scrollContent($(o.start).position().top, null, true);

          // make sure bar stays hidden
          if (!o.alwaysVisible) { bar.hide(); }
        }

        // attach scroll events
        attachWheel(this);

        function _onWheel(e)
        {
          // use mouse wheel only when mouse is over
          if (!isOverPanel) { return; }

          var e = e || window.event;

          var delta = 0;
          if (e.wheelDelta) { delta = -e.wheelDelta/120; }
          if (e.detail) { delta = e.detail / 3; }

          var target = e.target || e.srcTarget || e.srcElement;
          if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
            // scroll content
            scrollContent(delta, true);
          }

          // stop window scroll
          if (e.preventDefault && !releaseScroll) { e.preventDefault(); }
          if (!releaseScroll) { e.returnValue = false; }
        }

        function scrollContent(y, isWheel, isJump)
        {
          releaseScroll = false;
          var delta = y;
          var maxTop = me.outerHeight() - bar.outerHeight();

          if (isWheel)
          {
            // move bar with mouse wheel
            delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();

            // move bar, make sure it doesn't go out
            delta = Math.min(Math.max(delta, 0), maxTop);

            // if scrolling down, make sure a fractional change to the
            // scroll position isn't rounded away when the scrollbar's CSS is set
            // this flooring of delta would happened automatically when
            // bar.css is set below, but we floor here for clarity
            delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);

            // scroll the scrollbar
            bar.css({ top: delta + 'px' });
          }

          // calculate actual scroll amount
          percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
          delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

          if (isJump)
          {
            delta = y;
            var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
            offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
            bar.css({ top: offsetTop + 'px' });
          }

          // scroll content
          me.scrollTop(delta);

          // fire scrolling event
          me.trigger('slimscrolling', ~~delta);

          // ensure bar is visible
          showBar();

          // trigger hide when scroll is stopped
          hideBar();
        }

        function attachWheel(target)
        {
          if (window.addEventListener)
          {
            target.addEventListener('DOMMouseScroll', _onWheel, false );
            target.addEventListener('mousewheel', _onWheel, false );
          }
          else
          {
            document.attachEvent("onmousewheel", _onWheel)
          }
        }

        function getBarHeight()
        {
          // calculate scrollbar height and make sure it is not too small
          barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
          bar.css({ height: barHeight + 'px' });

          // hide scrollbar if content is not long enough
          var display = barHeight == me.outerHeight() ? 'none' : 'block';
          bar.css({ display: display });
        }

        function showBar()
        {
          // recalculate bar height
          getBarHeight();
          clearTimeout(queueHide);

          // when bar reached top or bottom
          if (percentScroll == ~~percentScroll)
          {
            //release wheel
            releaseScroll = o.allowPageScroll;

            // publish approporiate event
            if (lastScroll != percentScroll)
            {
                var msg = (~~percentScroll == 0) ? 'top' : 'bottom';
                me.trigger('slimscroll', msg);
            }
          }
          else
          {
            releaseScroll = false;
          }
          lastScroll = percentScroll;

          // show only when required
          if(barHeight >= me.outerHeight()) {
            //allow window scroll
            releaseScroll = true;
            return;
          }
          bar.stop(true,true).fadeIn('fast');
          if (o.railVisible) { rail.stop(true,true).fadeIn('fast'); }
        }

        function hideBar()
        {
          // only hide when options allow it
          if (!o.alwaysVisible)
          {
            queueHide = setTimeout(function(){
              if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg)
              {
                bar.fadeOut('slow');
                rail.fadeOut('slow');
              }
            }, 1000);
          }
        }

      });

      // maintain chainability
      return this;
    }
  });

  $.fn.extend({
    slimscroll: $.fn.slimScroll
  });

})(jQuery);

// This [jQuery](https://jquery.com/) plugin implements an `<iframe>`
// [transport](https://api.jquery.com/jQuery.ajax/#extending-ajax) so that
// `$.ajax()` calls support the uploading of files using standard HTML file
// input fields. This is done by switching the exchange from `XMLHttpRequest`
// to a hidden `iframe` element containing a form that is submitted.

// The [source for the plugin](https://github.com/cmlenz/jquery-iframe-transport)
// is available on [Github](https://github.com/) and licensed under the [MIT
// license](https://github.com/cmlenz/jquery-iframe-transport/blob/master/LICENSE).

// ## Usage

// To use this plugin, you simply add an `iframe` option with the value `true`
// to the Ajax settings an `$.ajax()` call, and specify the file fields to
// include in the submssion using the `files` option, which can be a selector,
// jQuery object, or a list of DOM elements containing one or more
// `<input type="file">` elements:

//     $("#myform").submit(function() {
//         $.ajax(this.action, {
//             files: $(":file", this),
//             iframe: true
//         }).complete(function(data) {
//             console.log(data);
//         });
//     });

// The plugin will construct hidden `<iframe>` and `<form>` elements, add the
// file field(s) to that form, submit the form, and process the response.

// If you want to include other form fields in the form submission, include
// them in the `data` option, and set the `processData` option to `false`:

//     $("#myform").submit(function() {
//         $.ajax(this.action, {
//             data: $(":text", this).serializeArray(),
//             files: $(":file", this),
//             iframe: true,
//             processData: false
//         }).complete(function(data) {
//             console.log(data);
//         });
//     });

// ### Response Data Types

// As the transport does not have access to the HTTP headers of the server
// response, it is not as simple to make use of the automatic content type
// detection provided by jQuery as with regular XHR. If you can't set the
// expected response data type (for example because it may vary depending on
// the outcome of processing by the server), you will need to employ a
// workaround on the server side: Send back an HTML document containing just a
// `<textarea>` element with a `data-type` attribute that specifies the MIME
// type, and put the actual payload in the textarea:

//     <textarea data-type="application/json">
//       {"ok": true, "message": "Thanks so much"}
//     </textarea>

// The iframe transport plugin will detect this and pass the value of the
// `data-type` attribute on to jQuery as if it was the "Content-Type" response
// header, thereby enabling the same kind of conversions that jQuery applies
// to regular responses. For the example above you should get a Javascript
// object as the `data` parameter of the `complete` callback, with the
// properties `ok: true` and `message: "Thanks so much"`.

// ### Handling Server Errors

// Another problem with using an `iframe` for file uploads is that it is
// impossible for the javascript code to determine the HTTP status code of the
// servers response. Effectively, all of the calls you make will look like they
// are getting successful responses, and thus invoke the `done()` or
// `complete()` callbacks. You can only communicate problems using the content
// of the response payload. For example, consider using a JSON response such as
// the following to indicate a problem with an uploaded file:

//     <textarea data-type="application/json">
//       {"ok": false, "message": "Please only upload reasonably sized files."}
//     </textarea>

// ### Compatibility

// This plugin has primarily been tested on Safari 5 (or later), Firefox 4 (or
// later), and Internet Explorer (all the way back to version 6). While I
// haven't found any issues with it so far, I'm fairly sure it still doesn't
// work around all the quirks in all different browsers. But the code is still
// pretty simple overall, so you should be able to fix it and contribute a
// patch :)

// ## Annotated Source

(function($, undefined) {
  "use strict";

  // Register a prefilter that checks whether the `iframe` option is set, and
  // switches to the "iframe" data type if it is `true`.
  $.ajaxPrefilter(function(options, origOptions, jqXHR) {
    if (options.iframe) {
      options.originalURL = options.url;
      return "iframe";
    }
  });

  // Register a transport for the "iframe" data type. It will only activate
  // when the "files" option has been set to a non-empty list of enabled file
  // inputs.
  $.ajaxTransport("iframe", function(options, origOptions, jqXHR) {
    var form = null,
        iframe = null,
        name = "iframe-" + $.now(),
        files = $(options.files).filter(":file:enabled"),
        markers = null,
        accepts = null;

    // This function gets called after a successful submission or an abortion
    // and should revert all changes made to the page to enable the
    // submission via this transport.
    function cleanUp() {
      files.each(function(i, file) {
        var $file = $(file);
        $file.data("clone").replaceWith($file);
      });
      form.remove();
      iframe.one("load", function() { iframe.remove(); });
      iframe.attr("src", "javascript:false;");
    }

    // Remove "iframe" from the data types list so that further processing is
    // based on the content type returned by the server, without attempting an
    // (unsupported) conversion from "iframe" to the actual type.
    options.dataTypes.shift();

    // Use the data from the original AJAX options, as it doesn't seem to be 
    // copied over since jQuery 1.7.
    // See https://github.com/cmlenz/jquery-iframe-transport/issues/6
    options.data = origOptions.data;

    if (files.length) {
      form = $("<form enctype='multipart/form-data' method='post'></form>").
        hide().attr({action: options.originalURL, target: name});

      // If there is any additional data specified via the `data` option,
      // we add it as hidden fields to the form. This (currently) requires
      // the `processData` option to be set to false so that the data doesn't
      // get serialized to a string.
      if (typeof(options.data) === "string" && options.data.length > 0) {
        $.error("data must not be serialized");
      }
      $.each(options.data || {}, function(name, value) {
        if ($.isPlainObject(value)) {
          name = value.name;
          value = value.value;
        }
        $("<input type='hidden' />").attr({name:  name, value: value}).
          appendTo(form);
      });

      // Add a hidden `X-Requested-With` field with the value `IFrame` to the
      // field, to help server-side code to determine that the upload happened
      // through this transport.
      $("<input type='hidden' value='IFrame' name='X-Requested-With' />").
        appendTo(form);

      // Borrowed straight from the JQuery source.
      // Provides a way of specifying the accepted data type similar to the
      // HTTP "Accept" header
      if (options.dataTypes[0] && options.accepts[options.dataTypes[0]]) {
        accepts = options.accepts[options.dataTypes[0]] +
                  (options.dataTypes[0] !== "*" ? ", */*; q=0.01" : "");
      } else {
        accepts = options.accepts["*"];
      }
      $("<input type='hidden' name='X-HTTP-Accept'>").
        attr("value", accepts).appendTo(form);

      // Move the file fields into the hidden form, but first remember their
      // original locations in the document by replacing them with disabled
      // clones. This should also avoid introducing unwanted changes to the
      // page layout during submission.
      markers = files.after(function(idx) {
        var $this = $(this),
            $clone = $this.clone().prop("disabled", true);
        $this.data("clone", $clone);
        return $clone;
      }).next();
      files.appendTo(form);

      return {

        // The `send` function is called by jQuery when the request should be
        // sent.
        send: function(headers, completeCallback) {
          iframe = $("<iframe src='javascript:false;' name='" + name +
            "' id='" + name + "' style='display:none'></iframe>");

          // The first load event gets fired after the iframe has been injected
          // into the DOM, and is used to prepare the actual submission.
          iframe.one("load", function() {

            // The second load event gets fired when the response to the form
            // submission is received. The implementation detects whether the
            // actual payload is embedded in a `<textarea>` element, and
            // prepares the required conversions to be made in that case.
            iframe.one("load", function() {
              var doc = this.contentWindow ? this.contentWindow.document :
                (this.contentDocument ? this.contentDocument : this.document),
                root = doc.documentElement ? doc.documentElement : doc.body,
                textarea = root.getElementsByTagName("textarea")[0],
                type = textarea && textarea.getAttribute("data-type") || null,
                status = textarea && textarea.getAttribute("data-status") || 200,
                statusText = textarea && textarea.getAttribute("data-statusText") || "OK",
                content = {
                  html: root.innerHTML,
                  text: type ?
                    textarea.value :
                    root ? (root.textContent || root.innerText) : null
                };
              cleanUp();
              completeCallback(status, statusText, content, type ?
                ("Content-Type: " + type) :
                null);
            });

            // Now that the load handler has been set up, submit the form.
            form[0].submit();
          });

          // After everything has been set up correctly, the form and iframe
          // get injected into the DOM so that the submission can be
          // initiated.
          $("body").append(form, iframe);
        },

        // The `abort` function is called by jQuery when the request should be
        // aborted.
        abort: function() {
          if (iframe !== null) {
            iframe.unbind("load").attr("src", "javascript:false;");
            cleanUp();
          }
        }

      };
    }
  });

})(jQuery);

/*
 * jQuery File Upload Plugin
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* jshint nomen:false */
/* global define, require, window, document, location, Blob, FormData */

;(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            'jquery-ui/ui/widget'
        ], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS:
        factory(
            require('jquery'),
            require('./vendor/jquery.ui.widget')
        );
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Detect file input support, based on
    // http://viljamis.com/blog/2012/file-upload-support-on-mobile/
    $.support.fileInput = !(new RegExp(
        // Handle devices which give false positives for the feature detection:
        '(Android (1\\.[0156]|2\\.[01]))' +
            '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)' +
            '|(w(eb)?OSBrowser)|(webOS)' +
            '|(Kindle/(1\\.0|2\\.[05]|3\\.0))'
    ).test(window.navigator.userAgent) ||
        // Feature detection for all other devices:
        $('<input type="file">').prop('disabled'));

    // The FileReader API is not actually used, but works as feature detection,
    // as some Safari versions (5?) support XHR file uploads via the FormData API,
    // but not non-multipart XHR file uploads.
    // window.XMLHttpRequestUpload is not available on IE10, so we check for
    // window.ProgressEvent instead to detect XHR2 file upload capability:
    $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
    $.support.xhrFormDataFileUpload = !!window.FormData;

    // Detect support for Blob slicing (required for chunked uploads):
    $.support.blobSlice = window.Blob && (Blob.prototype.slice ||
        Blob.prototype.webkitSlice || Blob.prototype.mozSlice);

    // Helper function to create drag handlers for dragover/dragenter/dragleave:
    function getDragHandler(type) {
        var isDragOver = type === 'dragover';
        return function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var dataTransfer = e.dataTransfer;
            if (dataTransfer && $.inArray('Files', dataTransfer.types) !== -1 &&
                    this._trigger(
                        type,
                        $.Event(type, {delegatedEvent: e})
                    ) !== false) {
                e.preventDefault();
                if (isDragOver) {
                    dataTransfer.dropEffect = 'copy';
                }
            }
        };
    }

    // The fileupload widget listens for change events on file input fields defined
    // via fileInput setting and paste or drop events of the given dropZone.
    // In addition to the default jQuery Widget methods, the fileupload widget
    // exposes the "add" and "send" methods, to add or directly send files using
    // the fileupload API.
    // By default, files added via file input selection, paste, drag & drop or
    // "add" method are uploaded immediately, but it is possible to override
    // the "add" callback option to queue file uploads.
    $.widget('blueimp.fileupload', {

        options: {
            // The drop target element(s), by the default the complete document.
            // Set to null to disable drag & drop support:
            dropZone: $(document),
            // The paste target element(s), by the default undefined.
            // Set to a DOM node or jQuery object to enable file pasting:
            pasteZone: undefined,
            // The file input field(s), that are listened to for change events.
            // If undefined, it is set to the file input fields inside
            // of the widget element on plugin initialization.
            // Set to null to disable the change listener.
            fileInput: undefined,
            // By default, the file input field is replaced with a clone after
            // each input field change event. This is required for iframe transport
            // queues and allows change events to be fired for the same file
            // selection, but can be disabled by setting the following option to false:
            replaceFileInput: true,
            // The parameter name for the file form data (the request argument name).
            // If undefined or empty, the name property of the file input field is
            // used, or "files[]" if the file input name property is also empty,
            // can be a string or an array of strings:
            paramName: undefined,
            // By default, each file of a selection is uploaded using an individual
            // request for XHR type uploads. Set to false to upload file
            // selections in one request each:
            singleFileUploads: true,
            // To limit the number of files uploaded with one XHR request,
            // set the following option to an integer greater than 0:
            limitMultiFileUploads: undefined,
            // The following option limits the number of files uploaded with one
            // XHR request to keep the request size under or equal to the defined
            // limit in bytes:
            limitMultiFileUploadSize: undefined,
            // Multipart file uploads add a number of bytes to each uploaded file,
            // therefore the following option adds an overhead for each file used
            // in the limitMultiFileUploadSize configuration:
            limitMultiFileUploadSizeOverhead: 512,
            // Set the following option to true to issue all file upload requests
            // in a sequential order:
            sequentialUploads: false,
            // To limit the number of concurrent uploads,
            // set the following option to an integer greater than 0:
            limitConcurrentUploads: undefined,
            // Set the following option to true to force iframe transport uploads:
            forceIframeTransport: false,
            // Set the following option to the location of a redirect url on the
            // origin server, for cross-domain iframe transport uploads:
            redirect: undefined,
            // The parameter name for the redirect url, sent as part of the form
            // data and set to 'redirect' if this option is empty:
            redirectParamName: undefined,
            // Set the following option to the location of a postMessage window,
            // to enable postMessage transport uploads:
            postMessage: undefined,
            // By default, XHR file uploads are sent as multipart/form-data.
            // The iframe transport is always using multipart/form-data.
            // Set to false to enable non-multipart XHR uploads:
            multipart: true,
            // To upload large files in smaller chunks, set the following option
            // to a preferred maximum chunk size. If set to 0, null or undefined,
            // or the browser does not support the required Blob API, files will
            // be uploaded as a whole.
            maxChunkSize: undefined,
            // When a non-multipart upload or a chunked multipart upload has been
            // aborted, this option can be used to resume the upload by setting
            // it to the size of the already uploaded bytes. This option is most
            // useful when modifying the options object inside of the "add" or
            // "send" callbacks, as the options are cloned for each file upload.
            uploadedBytes: undefined,
            // By default, failed (abort or error) file uploads are removed from the
            // global progress calculation. Set the following option to false to
            // prevent recalculating the global progress data:
            recalculateProgress: true,
            // Interval in milliseconds to calculate and trigger progress events:
            progressInterval: 100,
            // Interval in milliseconds to calculate progress bitrate:
            bitrateInterval: 500,
            // By default, uploads are started automatically when adding files:
            autoUpload: true,

            // Error and info messages:
            messages: {
                uploadedBytes: 'Uploaded bytes exceed file size'
            },

            // Translation function, gets the message key to be translated
            // and an object with context specific data as arguments:
            i18n: function (message, context) {
                message = this.messages[message] || message.toString();
                if (context) {
                    $.each(context, function (key, value) {
                        message = message.replace('{' + key + '}', value);
                    });
                }
                return message;
            },

            // Additional form data to be sent along with the file uploads can be set
            // using this option, which accepts an array of objects with name and
            // value properties, a function returning such an array, a FormData
            // object (for XHR file uploads), or a simple object.
            // The form of the first fileInput is given as parameter to the function:
            formData: function (form) {
                return form.serializeArray();
            },

            // The add callback is invoked as soon as files are added to the fileupload
            // widget (via file input selection, drag & drop, paste or add API call).
            // If the singleFileUploads option is enabled, this callback will be
            // called once for each file in the selection for XHR file uploads, else
            // once for each file selection.
            //
            // The upload starts when the submit method is invoked on the data parameter.
            // The data object contains a files property holding the added files
            // and allows you to override plugin options as well as define ajax settings.
            //
            // Listeners for this callback can also be bound the following way:
            // .bind('fileuploadadd', func);
            //
            // data.submit() returns a Promise object and allows to attach additional
            // handlers using jQuery's Deferred callbacks:
            // data.submit().done(func).fail(func).always(func);
            add: function (e, data) {
                if (e.isDefaultPrevented()) {
                    return false;
                }
                if (data.autoUpload || (data.autoUpload !== false &&
                        $(this).fileupload('option', 'autoUpload'))) {
                    data.process().done(function () {
                        data.submit();
                    });
                }
            },

            // Other callbacks:

            // Callback for the submit event of each file upload:
            // submit: function (e, data) {}, // .bind('fileuploadsubmit', func);

            // Callback for the start of each file upload request:
            // send: function (e, data) {}, // .bind('fileuploadsend', func);

            // Callback for successful uploads:
            // done: function (e, data) {}, // .bind('fileuploaddone', func);

            // Callback for failed (abort or error) uploads:
            // fail: function (e, data) {}, // .bind('fileuploadfail', func);

            // Callback for completed (success, abort or error) requests:
            // always: function (e, data) {}, // .bind('fileuploadalways', func);

            // Callback for upload progress events:
            // progress: function (e, data) {}, // .bind('fileuploadprogress', func);

            // Callback for global upload progress events:
            // progressall: function (e, data) {}, // .bind('fileuploadprogressall', func);

            // Callback for uploads start, equivalent to the global ajaxStart event:
            // start: function (e) {}, // .bind('fileuploadstart', func);

            // Callback for uploads stop, equivalent to the global ajaxStop event:
            // stop: function (e) {}, // .bind('fileuploadstop', func);

            // Callback for change events of the fileInput(s):
            // change: function (e, data) {}, // .bind('fileuploadchange', func);

            // Callback for paste events to the pasteZone(s):
            // paste: function (e, data) {}, // .bind('fileuploadpaste', func);

            // Callback for drop events of the dropZone(s):
            // drop: function (e, data) {}, // .bind('fileuploaddrop', func);

            // Callback for dragover events of the dropZone(s):
            // dragover: function (e) {}, // .bind('fileuploaddragover', func);

            // Callback for the start of each chunk upload request:
            // chunksend: function (e, data) {}, // .bind('fileuploadchunksend', func);

            // Callback for successful chunk uploads:
            // chunkdone: function (e, data) {}, // .bind('fileuploadchunkdone', func);

            // Callback for failed (abort or error) chunk uploads:
            // chunkfail: function (e, data) {}, // .bind('fileuploadchunkfail', func);

            // Callback for completed (success, abort or error) chunk upload requests:
            // chunkalways: function (e, data) {}, // .bind('fileuploadchunkalways', func);

            // The plugin options are used as settings object for the ajax calls.
            // The following are jQuery ajax settings required for the file uploads:
            processData: false,
            contentType: false,
            cache: false,
            timeout: 0
        },

        // A list of options that require reinitializing event listeners and/or
        // special initialization code:
        _specialOptions: [
            'fileInput',
            'dropZone',
            'pasteZone',
            'multipart',
            'forceIframeTransport'
        ],

        _blobSlice: $.support.blobSlice && function () {
            var slice = this.slice || this.webkitSlice || this.mozSlice;
            return slice.apply(this, arguments);
        },

        _BitrateTimer: function () {
            this.timestamp = ((Date.now) ? Date.now() : (new Date()).getTime());
            this.loaded = 0;
            this.bitrate = 0;
            this.getBitrate = function (now, loaded, interval) {
                var timeDiff = now - this.timestamp;
                if (!this.bitrate || !interval || timeDiff > interval) {
                    this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
                    this.loaded = loaded;
                    this.timestamp = now;
                }
                return this.bitrate;
            };
        },

        _isXHRUpload: function (options) {
            return !options.forceIframeTransport &&
                ((!options.multipart && $.support.xhrFileUpload) ||
                $.support.xhrFormDataFileUpload);
        },

        _getFormData: function (options) {
            var formData;
            if ($.type(options.formData) === 'function') {
                return options.formData(options.form);
            }
            if ($.isArray(options.formData)) {
                return options.formData;
            }
            if ($.type(options.formData) === 'object') {
                formData = [];
                $.each(options.formData, function (name, value) {
                    formData.push({name: name, value: value});
                });
                return formData;
            }
            return [];
        },

        _getTotal: function (files) {
            var total = 0;
            $.each(files, function (index, file) {
                total += file.size || 1;
            });
            return total;
        },

        _initProgressObject: function (obj) {
            var progress = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            if (obj._progress) {
                $.extend(obj._progress, progress);
            } else {
                obj._progress = progress;
            }
        },

        _initResponseObject: function (obj) {
            var prop;
            if (obj._response) {
                for (prop in obj._response) {
                    if (obj._response.hasOwnProperty(prop)) {
                        delete obj._response[prop];
                    }
                }
            } else {
                obj._response = {};
            }
        },

        _onProgress: function (e, data) {
            if (e.lengthComputable) {
                var now = ((Date.now) ? Date.now() : (new Date()).getTime()),
                    loaded;
                if (data._time && data.progressInterval &&
                        (now - data._time < data.progressInterval) &&
                        e.loaded !== e.total) {
                    return;
                }
                data._time = now;
                loaded = Math.floor(
                    e.loaded / e.total * (data.chunkSize || data._progress.total)
                ) + (data.uploadedBytes || 0);
                // Add the difference from the previously loaded state
                // to the global loaded counter:
                this._progress.loaded += (loaded - data._progress.loaded);
                this._progress.bitrate = this._bitrateTimer.getBitrate(
                    now,
                    this._progress.loaded,
                    data.bitrateInterval
                );
                data._progress.loaded = data.loaded = loaded;
                data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(
                    now,
                    loaded,
                    data.bitrateInterval
                );
                // Trigger a custom progress event with a total data property set
                // to the file size(s) of the current upload and a loaded data
                // property calculated accordingly:
                this._trigger(
                    'progress',
                    $.Event('progress', {delegatedEvent: e}),
                    data
                );
                // Trigger a global progress event for all current file uploads,
                // including ajax calls queued for sequential file uploads:
                this._trigger(
                    'progressall',
                    $.Event('progressall', {delegatedEvent: e}),
                    this._progress
                );
            }
        },

        _initProgressListener: function (options) {
            var that = this,
                xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
            // Accesss to the native XHR object is required to add event listeners
            // for the upload progress event:
            if (xhr.upload) {
                $(xhr.upload).bind('progress', function (e) {
                    var oe = e.originalEvent;
                    // Make sure the progress event properties get copied over:
                    e.lengthComputable = oe.lengthComputable;
                    e.loaded = oe.loaded;
                    e.total = oe.total;
                    that._onProgress(e, options);
                });
                options.xhr = function () {
                    return xhr;
                };
            }
        },

        _isInstanceOf: function (type, obj) {
            // Cross-frame instanceof check
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        },

        _initXHRData: function (options) {
            var that = this,
                formData,
                file = options.files[0],
                // Ignore non-multipart setting if not supported:
                multipart = options.multipart || !$.support.xhrFileUpload,
                paramName = $.type(options.paramName) === 'array' ?
                    options.paramName[0] : options.paramName;
            options.headers = $.extend({}, options.headers);
            if (options.contentRange) {
                options.headers['Content-Range'] = options.contentRange;
            }
            if (!multipart || options.blob || !this._isInstanceOf('File', file)) {
                options.headers['Content-Disposition'] = 'attachment; filename="' +
                    encodeURI(file.name) + '"';
            }
            if (!multipart) {
                options.contentType = file.type || 'application/octet-stream';
                options.data = options.blob || file;
            } else if ($.support.xhrFormDataFileUpload) {
                if (options.postMessage) {
                    // window.postMessage does not allow sending FormData
                    // objects, so we just add the File/Blob objects to
                    // the formData array and let the postMessage window
                    // create the FormData object out of this array:
                    formData = this._getFormData(options);
                    if (options.blob) {
                        formData.push({
                            name: paramName,
                            value: options.blob
                        });
                    } else {
                        $.each(options.files, function (index, file) {
                            formData.push({
                                name: ($.type(options.paramName) === 'array' &&
                                    options.paramName[index]) || paramName,
                                value: file
                            });
                        });
                    }
                } else {
                    if (that._isInstanceOf('FormData', options.formData)) {
                        formData = options.formData;
                    } else {
                        formData = new FormData();
                        $.each(this._getFormData(options), function (index, field) {
                            formData.append(field.name, field.value);
                        });
                    }
                    if (options.blob) {
                        formData.append(paramName, options.blob, file.name);
                    } else {
                        $.each(options.files, function (index, file) {
                            // This check allows the tests to run with
                            // dummy objects:
                            if (that._isInstanceOf('File', file) ||
                                    that._isInstanceOf('Blob', file)) {
                                formData.append(
                                    ($.type(options.paramName) === 'array' &&
                                        options.paramName[index]) || paramName,
                                    file,
                                    file.uploadName || file.name
                                );
                            }
                        });
                    }
                }
                options.data = formData;
            }
            // Blob reference is not needed anymore, free memory:
            options.blob = null;
        },

        _initIframeSettings: function (options) {
            var targetHost = $('<a></a>').prop('href', options.url).prop('host');
            // Setting the dataType to iframe enables the iframe transport:
            options.dataType = 'iframe ' + (options.dataType || '');
            // The iframe transport accepts a serialized array as form data:
            options.formData = this._getFormData(options);
            // Add redirect url to form data on cross-domain uploads:
            if (options.redirect && targetHost && targetHost !== location.host) {
                options.formData.push({
                    name: options.redirectParamName || 'redirect',
                    value: options.redirect
                });
            }
        },

        _initDataSettings: function (options) {
            if (this._isXHRUpload(options)) {
                if (!this._chunkedUpload(options, true)) {
                    if (!options.data) {
                        this._initXHRData(options);
                    }
                    this._initProgressListener(options);
                }
                if (options.postMessage) {
                    // Setting the dataType to postmessage enables the
                    // postMessage transport:
                    options.dataType = 'postmessage ' + (options.dataType || '');
                }
            } else {
                this._initIframeSettings(options);
            }
        },

        _getParamName: function (options) {
            var fileInput = $(options.fileInput),
                paramName = options.paramName;
            if (!paramName) {
                paramName = [];
                fileInput.each(function () {
                    var input = $(this),
                        name = input.prop('name') || 'files[]',
                        i = (input.prop('files') || [1]).length;
                    while (i) {
                        paramName.push(name);
                        i -= 1;
                    }
                });
                if (!paramName.length) {
                    paramName = [fileInput.prop('name') || 'files[]'];
                }
            } else if (!$.isArray(paramName)) {
                paramName = [paramName];
            }
            return paramName;
        },

        _initFormSettings: function (options) {
            // Retrieve missing options from the input field and the
            // associated form, if available:
            if (!options.form || !options.form.length) {
                options.form = $(options.fileInput.prop('form'));
                // If the given file input doesn't have an associated form,
                // use the default widget file input's form:
                if (!options.form.length) {
                    options.form = $(this.options.fileInput.prop('form'));
                }
            }
            options.paramName = this._getParamName(options);
            if (!options.url) {
                options.url = options.form.prop('action') || location.href;
            }
            // The HTTP request method must be "POST" or "PUT":
            options.type = (options.type ||
                ($.type(options.form.prop('method')) === 'string' &&
                    options.form.prop('method')) || ''
                ).toUpperCase();
            if (options.type !== 'POST' && options.type !== 'PUT' &&
                    options.type !== 'PATCH') {
                options.type = 'POST';
            }
            if (!options.formAcceptCharset) {
                options.formAcceptCharset = options.form.attr('accept-charset');
            }
        },

        _getAJAXSettings: function (data) {
            var options = $.extend({}, this.options, data);
            this._initFormSettings(options);
            this._initDataSettings(options);
            return options;
        },

        // jQuery 1.6 doesn't provide .state(),
        // while jQuery 1.8+ removed .isRejected() and .isResolved():
        _getDeferredState: function (deferred) {
            if (deferred.state) {
                return deferred.state();
            }
            if (deferred.isResolved()) {
                return 'resolved';
            }
            if (deferred.isRejected()) {
                return 'rejected';
            }
            return 'pending';
        },

        // Maps jqXHR callbacks to the equivalent
        // methods of the given Promise object:
        _enhancePromise: function (promise) {
            promise.success = promise.done;
            promise.error = promise.fail;
            promise.complete = promise.always;
            return promise;
        },

        // Creates and returns a Promise object enhanced with
        // the jqXHR methods abort, success, error and complete:
        _getXHRPromise: function (resolveOrReject, context, args) {
            var dfd = $.Deferred(),
                promise = dfd.promise();
            context = context || this.options.context || promise;
            if (resolveOrReject === true) {
                dfd.resolveWith(context, args);
            } else if (resolveOrReject === false) {
                dfd.rejectWith(context, args);
            }
            promise.abort = dfd.promise;
            return this._enhancePromise(promise);
        },

        // Adds convenience methods to the data callback argument:
        _addConvenienceMethods: function (e, data) {
            var that = this,
                getPromise = function (args) {
                    return $.Deferred().resolveWith(that, args).promise();
                };
            data.process = function (resolveFunc, rejectFunc) {
                if (resolveFunc || rejectFunc) {
                    data._processQueue = this._processQueue =
                        (this._processQueue || getPromise([this])).then(
                            function () {
                                if (data.errorThrown) {
                                    return $.Deferred()
                                        .rejectWith(that, [data]).promise();
                                }
                                return getPromise(arguments);
                            }
                        ).then(resolveFunc, rejectFunc);
                }
                return this._processQueue || getPromise([this]);
            };
            data.submit = function () {
                if (this.state() !== 'pending') {
                    data.jqXHR = this.jqXHR =
                        (that._trigger(
                            'submit',
                            $.Event('submit', {delegatedEvent: e}),
                            this
                        ) !== false) && that._onSend(e, this);
                }
                return this.jqXHR || that._getXHRPromise();
            };
            data.abort = function () {
                if (this.jqXHR) {
                    return this.jqXHR.abort();
                }
                this.errorThrown = 'abort';
                that._trigger('fail', null, this);
                return that._getXHRPromise(false);
            };
            data.state = function () {
                if (this.jqXHR) {
                    return that._getDeferredState(this.jqXHR);
                }
                if (this._processQueue) {
                    return that._getDeferredState(this._processQueue);
                }
            };
            data.processing = function () {
                return !this.jqXHR && this._processQueue && that
                    ._getDeferredState(this._processQueue) === 'pending';
            };
            data.progress = function () {
                return this._progress;
            };
            data.response = function () {
                return this._response;
            };
        },

        // Parses the Range header from the server response
        // and returns the uploaded bytes:
        _getUploadedBytes: function (jqXHR) {
            var range = jqXHR.getResponseHeader('Range'),
                parts = range && range.split('-'),
                upperBytesPos = parts && parts.length > 1 &&
                    parseInt(parts[1], 10);
            return upperBytesPos && upperBytesPos + 1;
        },

        // Uploads a file in multiple, sequential requests
        // by splitting the file up in multiple blob chunks.
        // If the second parameter is true, only tests if the file
        // should be uploaded in chunks, but does not invoke any
        // upload requests:
        _chunkedUpload: function (options, testOnly) {
            options.uploadedBytes = options.uploadedBytes || 0;
            var that = this,
                file = options.files[0],
                fs = file.size,
                ub = options.uploadedBytes,
                mcs = options.maxChunkSize || fs,
                slice = this._blobSlice,
                dfd = $.Deferred(),
                promise = dfd.promise(),
                jqXHR,
                upload;
            if (!(this._isXHRUpload(options) && slice && (ub || mcs < fs)) ||
                    options.data) {
                return false;
            }
            if (testOnly) {
                return true;
            }
            if (ub >= fs) {
                file.error = options.i18n('uploadedBytes');
                return this._getXHRPromise(
                    false,
                    options.context,
                    [null, 'error', file.error]
                );
            }
            // The chunk upload method:
            upload = function () {
                // Clone the options object for each chunk upload:
                var o = $.extend({}, options),
                    currentLoaded = o._progress.loaded;
                o.blob = slice.call(
                    file,
                    ub,
                    ub + mcs,
                    file.type
                );
                // Store the current chunk size, as the blob itself
                // will be dereferenced after data processing:
                o.chunkSize = o.blob.size;
                // Expose the chunk bytes position range:
                o.contentRange = 'bytes ' + ub + '-' +
                    (ub + o.chunkSize - 1) + '/' + fs;
                // Process the upload data (the blob and potential form data):
                that._initXHRData(o);
                // Add progress listeners for this chunk upload:
                that._initProgressListener(o);
                jqXHR = ((that._trigger('chunksend', null, o) !== false && $.ajax(o)) ||
                        that._getXHRPromise(false, o.context))
                    .done(function (result, textStatus, jqXHR) {
                        ub = that._getUploadedBytes(jqXHR) ||
                            (ub + o.chunkSize);
                        // Create a progress event if no final progress event
                        // with loaded equaling total has been triggered
                        // for this chunk:
                        if (currentLoaded + o.chunkSize - o._progress.loaded) {
                            that._onProgress($.Event('progress', {
                                lengthComputable: true,
                                loaded: ub - o.uploadedBytes,
                                total: ub - o.uploadedBytes
                            }), o);
                        }
                        options.uploadedBytes = o.uploadedBytes = ub;
                        o.result = result;
                        o.textStatus = textStatus;
                        o.jqXHR = jqXHR;
                        that._trigger('chunkdone', null, o);
                        that._trigger('chunkalways', null, o);
                        if (ub < fs) {
                            // File upload not yet complete,
                            // continue with the next chunk:
                            upload();
                        } else {
                            dfd.resolveWith(
                                o.context,
                                [result, textStatus, jqXHR]
                            );
                        }
                    })
                    .fail(function (jqXHR, textStatus, errorThrown) {
                        o.jqXHR = jqXHR;
                        o.textStatus = textStatus;
                        o.errorThrown = errorThrown;
                        that._trigger('chunkfail', null, o);
                        that._trigger('chunkalways', null, o);
                        dfd.rejectWith(
                            o.context,
                            [jqXHR, textStatus, errorThrown]
                        );
                    });
            };
            this._enhancePromise(promise);
            promise.abort = function () {
                return jqXHR.abort();
            };
            upload();
            return promise;
        },

        _beforeSend: function (e, data) {
            if (this._active === 0) {
                // the start callback is triggered when an upload starts
                // and no other uploads are currently running,
                // equivalent to the global ajaxStart event:
                this._trigger('start');
                // Set timer for global bitrate progress calculation:
                this._bitrateTimer = new this._BitrateTimer();
                // Reset the global progress values:
                this._progress.loaded = this._progress.total = 0;
                this._progress.bitrate = 0;
            }
            // Make sure the container objects for the .response() and
            // .progress() methods on the data object are available
            // and reset to their initial state:
            this._initResponseObject(data);
            this._initProgressObject(data);
            data._progress.loaded = data.loaded = data.uploadedBytes || 0;
            data._progress.total = data.total = this._getTotal(data.files) || 1;
            data._progress.bitrate = data.bitrate = 0;
            this._active += 1;
            // Initialize the global progress values:
            this._progress.loaded += data.loaded;
            this._progress.total += data.total;
        },

        _onDone: function (result, textStatus, jqXHR, options) {
            var total = options._progress.total,
                response = options._response;
            if (options._progress.loaded < total) {
                // Create a progress event if no final progress event
                // with loaded equaling total has been triggered:
                this._onProgress($.Event('progress', {
                    lengthComputable: true,
                    loaded: total,
                    total: total
                }), options);
            }
            response.result = options.result = result;
            response.textStatus = options.textStatus = textStatus;
            response.jqXHR = options.jqXHR = jqXHR;
            this._trigger('done', null, options);
        },

        _onFail: function (jqXHR, textStatus, errorThrown, options) {
            var response = options._response;
            if (options.recalculateProgress) {
                // Remove the failed (error or abort) file upload from
                // the global progress calculation:
                this._progress.loaded -= options._progress.loaded;
                this._progress.total -= options._progress.total;
            }
            response.jqXHR = options.jqXHR = jqXHR;
            response.textStatus = options.textStatus = textStatus;
            response.errorThrown = options.errorThrown = errorThrown;
            this._trigger('fail', null, options);
        },

        _onAlways: function (jqXHRorResult, textStatus, jqXHRorError, options) {
            // jqXHRorResult, textStatus and jqXHRorError are added to the
            // options object via done and fail callbacks
            this._trigger('always', null, options);
        },

        _onSend: function (e, data) {
            if (!data.submit) {
                this._addConvenienceMethods(e, data);
            }
            var that = this,
                jqXHR,
                aborted,
                slot,
                pipe,
                options = that._getAJAXSettings(data),
                send = function () {
                    that._sending += 1;
                    // Set timer for bitrate progress calculation:
                    options._bitrateTimer = new that._BitrateTimer();
                    jqXHR = jqXHR || (
                        ((aborted || that._trigger(
                            'send',
                            $.Event('send', {delegatedEvent: e}),
                            options
                        ) === false) &&
                        that._getXHRPromise(false, options.context, aborted)) ||
                        that._chunkedUpload(options) || $.ajax(options)
                    ).done(function (result, textStatus, jqXHR) {
                        that._onDone(result, textStatus, jqXHR, options);
                    }).fail(function (jqXHR, textStatus, errorThrown) {
                        that._onFail(jqXHR, textStatus, errorThrown, options);
                    }).always(function (jqXHRorResult, textStatus, jqXHRorError) {
                        that._onAlways(
                            jqXHRorResult,
                            textStatus,
                            jqXHRorError,
                            options
                        );
                        that._sending -= 1;
                        that._active -= 1;
                        if (options.limitConcurrentUploads &&
                                options.limitConcurrentUploads > that._sending) {
                            // Start the next queued upload,
                            // that has not been aborted:
                            var nextSlot = that._slots.shift();
                            while (nextSlot) {
                                if (that._getDeferredState(nextSlot) === 'pending') {
                                    nextSlot.resolve();
                                    break;
                                }
                                nextSlot = that._slots.shift();
                            }
                        }
                        if (that._active === 0) {
                            // The stop callback is triggered when all uploads have
                            // been completed, equivalent to the global ajaxStop event:
                            that._trigger('stop');
                        }
                    });
                    return jqXHR;
                };
            this._beforeSend(e, options);
            if (this.options.sequentialUploads ||
                    (this.options.limitConcurrentUploads &&
                    this.options.limitConcurrentUploads <= this._sending)) {
                if (this.options.limitConcurrentUploads > 1) {
                    slot = $.Deferred();
                    this._slots.push(slot);
                    pipe = slot.then(send);
                } else {
                    this._sequence = this._sequence.then(send, send);
                    pipe = this._sequence;
                }
                // Return the piped Promise object, enhanced with an abort method,
                // which is delegated to the jqXHR object of the current upload,
                // and jqXHR callbacks mapped to the equivalent Promise methods:
                pipe.abort = function () {
                    aborted = [undefined, 'abort', 'abort'];
                    if (!jqXHR) {
                        if (slot) {
                            slot.rejectWith(options.context, aborted);
                        }
                        return send();
                    }
                    return jqXHR.abort();
                };
                return this._enhancePromise(pipe);
            }
            return send();
        },

        _onAdd: function (e, data) {
            var that = this,
                result = true,
                options = $.extend({}, this.options, data),
                files = data.files,
                filesLength = files.length,
                limit = options.limitMultiFileUploads,
                limitSize = options.limitMultiFileUploadSize,
                overhead = options.limitMultiFileUploadSizeOverhead,
                batchSize = 0,
                paramName = this._getParamName(options),
                paramNameSet,
                paramNameSlice,
                fileSet,
                i,
                j = 0;
            if (!filesLength) {
                return false;
            }
            if (limitSize && files[0].size === undefined) {
                limitSize = undefined;
            }
            if (!(options.singleFileUploads || limit || limitSize) ||
                    !this._isXHRUpload(options)) {
                fileSet = [files];
                paramNameSet = [paramName];
            } else if (!(options.singleFileUploads || limitSize) && limit) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i += limit) {
                    fileSet.push(files.slice(i, i + limit));
                    paramNameSlice = paramName.slice(i, i + limit);
                    if (!paramNameSlice.length) {
                        paramNameSlice = paramName;
                    }
                    paramNameSet.push(paramNameSlice);
                }
            } else if (!options.singleFileUploads && limitSize) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i = i + 1) {
                    batchSize += files[i].size + overhead;
                    if (i + 1 === filesLength ||
                            ((batchSize + files[i + 1].size + overhead) > limitSize) ||
                            (limit && i + 1 - j >= limit)) {
                        fileSet.push(files.slice(j, i + 1));
                        paramNameSlice = paramName.slice(j, i + 1);
                        if (!paramNameSlice.length) {
                            paramNameSlice = paramName;
                        }
                        paramNameSet.push(paramNameSlice);
                        j = i + 1;
                        batchSize = 0;
                    }
                }
            } else {
                paramNameSet = paramName;
            }
            data.originalFiles = files;
            $.each(fileSet || files, function (index, element) {
                var newData = $.extend({}, data);
                newData.files = fileSet ? element : [element];
                newData.paramName = paramNameSet[index];
                that._initResponseObject(newData);
                that._initProgressObject(newData);
                that._addConvenienceMethods(e, newData);
                result = that._trigger(
                    'add',
                    $.Event('add', {delegatedEvent: e}),
                    newData
                );
                return result;
            });
            return result;
        },

        _replaceFileInput: function (data) {
            var input = data.fileInput,
                inputClone = input.clone(true),
                restoreFocus = input.is(document.activeElement);
            // Add a reference for the new cloned file input to the data argument:
            data.fileInputClone = inputClone;
            $('<form></form>').append(inputClone)[0].reset();
            // Detaching allows to insert the fileInput on another form
            // without loosing the file input value:
            input.after(inputClone).detach();
            // If the fileInput had focus before it was detached,
            // restore focus to the inputClone.
            if (restoreFocus) {
                inputClone.focus();
            }
            // Avoid memory leaks with the detached file input:
            $.cleanData(input.unbind('remove'));
            // Replace the original file input element in the fileInput
            // elements set with the clone, which has been copied including
            // event handlers:
            this.options.fileInput = this.options.fileInput.map(function (i, el) {
                if (el === input[0]) {
                    return inputClone[0];
                }
                return el;
            });
            // If the widget has been initialized on the file input itself,
            // override this.element with the file input clone:
            if (input[0] === this.element[0]) {
                this.element = inputClone;
            }
        },

        _handleFileTreeEntry: function (entry, path) {
            var that = this,
                dfd = $.Deferred(),
                entries = [],
                dirReader,
                errorHandler = function (e) {
                    if (e && !e.entry) {
                        e.entry = entry;
                    }
                    // Since $.when returns immediately if one
                    // Deferred is rejected, we use resolve instead.
                    // This allows valid files and invalid items
                    // to be returned together in one set:
                    dfd.resolve([e]);
                },
                successHandler = function (entries) {
                    that._handleFileTreeEntries(
                        entries,
                        path + entry.name + '/'
                    ).done(function (files) {
                        dfd.resolve(files);
                    }).fail(errorHandler);
                },
                readEntries = function () {
                    dirReader.readEntries(function (results) {
                        if (!results.length) {
                            successHandler(entries);
                        } else {
                            entries = entries.concat(results);
                            readEntries();
                        }
                    }, errorHandler);
                };
            path = path || '';
            if (entry.isFile) {
                if (entry._file) {
                    // Workaround for Chrome bug #149735
                    entry._file.relativePath = path;
                    dfd.resolve(entry._file);
                } else {
                    entry.file(function (file) {
                        file.relativePath = path;
                        dfd.resolve(file);
                    }, errorHandler);
                }
            } else if (entry.isDirectory) {
                dirReader = entry.createReader();
                readEntries();
            } else {
                // Return an empy list for file system items
                // other than files or directories:
                dfd.resolve([]);
            }
            return dfd.promise();
        },

        _handleFileTreeEntries: function (entries, path) {
            var that = this;
            return $.when.apply(
                $,
                $.map(entries, function (entry) {
                    return that._handleFileTreeEntry(entry, path);
                })
            ).then(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _getDroppedFiles: function (dataTransfer) {
            dataTransfer = dataTransfer || {};
            var items = dataTransfer.items;
            if (items && items.length && (items[0].webkitGetAsEntry ||
                    items[0].getAsEntry)) {
                return this._handleFileTreeEntries(
                    $.map(items, function (item) {
                        var entry;
                        if (item.webkitGetAsEntry) {
                            entry = item.webkitGetAsEntry();
                            if (entry) {
                                // Workaround for Chrome bug #149735:
                                entry._file = item.getAsFile();
                            }
                            return entry;
                        }
                        return item.getAsEntry();
                    })
                );
            }
            return $.Deferred().resolve(
                $.makeArray(dataTransfer.files)
            ).promise();
        },

        _getSingleFileInputFiles: function (fileInput) {
            fileInput = $(fileInput);
            var entries = fileInput.prop('webkitEntries') ||
                    fileInput.prop('entries'),
                files,
                value;
            if (entries && entries.length) {
                return this._handleFileTreeEntries(entries);
            }
            files = $.makeArray(fileInput.prop('files'));
            if (!files.length) {
                value = fileInput.prop('value');
                if (!value) {
                    return $.Deferred().resolve([]).promise();
                }
                // If the files property is not available, the browser does not
                // support the File API and we add a pseudo File object with
                // the input value as name with path information removed:
                files = [{name: value.replace(/^.*\\/, '')}];
            } else if (files[0].name === undefined && files[0].fileName) {
                // File normalization for Safari 4 and Firefox 3:
                $.each(files, function (index, file) {
                    file.name = file.fileName;
                    file.size = file.fileSize;
                });
            }
            return $.Deferred().resolve(files).promise();
        },

        _getFileInputFiles: function (fileInput) {
            if (!(fileInput instanceof $) || fileInput.length === 1) {
                return this._getSingleFileInputFiles(fileInput);
            }
            return $.when.apply(
                $,
                $.map(fileInput, this._getSingleFileInputFiles)
            ).then(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _onChange: function (e) {
            var that = this,
                data = {
                    fileInput: $(e.target),
                    form: $(e.target.form)
                };
            this._getFileInputFiles(data.fileInput).always(function (files) {
                data.files = files;
                if (that.options.replaceFileInput) {
                    that._replaceFileInput(data);
                }
                if (that._trigger(
                        'change',
                        $.Event('change', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    that._onAdd(e, data);
                }
            });
        },

        _onPaste: function (e) {
            var items = e.originalEvent && e.originalEvent.clipboardData &&
                    e.originalEvent.clipboardData.items,
                data = {files: []};
            if (items && items.length) {
                $.each(items, function (index, item) {
                    var file = item.getAsFile && item.getAsFile();
                    if (file) {
                        data.files.push(file);
                    }
                });
                if (this._trigger(
                        'paste',
                        $.Event('paste', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    this._onAdd(e, data);
                }
            }
        },

        _onDrop: function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var that = this,
                dataTransfer = e.dataTransfer,
                data = {};
            if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                e.preventDefault();
                this._getDroppedFiles(dataTransfer).always(function (files) {
                    data.files = files;
                    if (that._trigger(
                            'drop',
                            $.Event('drop', {delegatedEvent: e}),
                            data
                        ) !== false) {
                        that._onAdd(e, data);
                    }
                });
            }
        },

        _onDragOver: getDragHandler('dragover'),

        _onDragEnter: getDragHandler('dragenter'),

        _onDragLeave: getDragHandler('dragleave'),

        _initEventHandlers: function () {
            if (this._isXHRUpload(this.options)) {
                this._on(this.options.dropZone, {
                    dragover: this._onDragOver,
                    drop: this._onDrop,
                    // event.preventDefault() on dragenter is required for IE10+:
                    dragenter: this._onDragEnter,
                    // dragleave is not required, but added for completeness:
                    dragleave: this._onDragLeave
                });
                this._on(this.options.pasteZone, {
                    paste: this._onPaste
                });
            }
            if ($.support.fileInput) {
                this._on(this.options.fileInput, {
                    change: this._onChange
                });
            }
        },

        _destroyEventHandlers: function () {
            this._off(this.options.dropZone, 'dragenter dragleave dragover drop');
            this._off(this.options.pasteZone, 'paste');
            this._off(this.options.fileInput, 'change');
        },

        _destroy: function () {
            this._destroyEventHandlers();
        },

        _setOption: function (key, value) {
            var reinit = $.inArray(key, this._specialOptions) !== -1;
            if (reinit) {
                this._destroyEventHandlers();
            }
            this._super(key, value);
            if (reinit) {
                this._initSpecialOptions();
                this._initEventHandlers();
            }
        },

        _initSpecialOptions: function () {
            var options = this.options;
            if (options.fileInput === undefined) {
                options.fileInput = this.element.is('input[type="file"]') ?
                        this.element : this.element.find('input[type="file"]');
            } else if (!(options.fileInput instanceof $)) {
                options.fileInput = $(options.fileInput);
            }
            if (!(options.dropZone instanceof $)) {
                options.dropZone = $(options.dropZone);
            }
            if (!(options.pasteZone instanceof $)) {
                options.pasteZone = $(options.pasteZone);
            }
        },

        _getRegExp: function (str) {
            var parts = str.split('/'),
                modifiers = parts.pop();
            parts.shift();
            return new RegExp(parts.join('/'), modifiers);
        },

        _isRegExpOption: function (key, value) {
            return key !== 'url' && $.type(value) === 'string' &&
                /^\/.*\/[igm]{0,3}$/.test(value);
        },

        _initDataAttributes: function () {
            var that = this,
                options = this.options,
                data = this.element.data();
            // Initialize options set via HTML5 data-attributes:
            $.each(
                this.element[0].attributes,
                function (index, attr) {
                    var key = attr.name.toLowerCase(),
                        value;
                    if (/^data-/.test(key)) {
                        // Convert hyphen-ated key to camelCase:
                        key = key.slice(5).replace(/-[a-z]/g, function (str) {
                            return str.charAt(1).toUpperCase();
                        });
                        value = data[key];
                        if (that._isRegExpOption(key, value)) {
                            value = that._getRegExp(value);
                        }
                        options[key] = value;
                    }
                }
            );
        },

        _create: function () {
            this._initDataAttributes();
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(true);
            this._sending = this._active = 0;
            this._initProgressObject(this);
            this._initEventHandlers();
        },

        // This method is exposed to the widget API and allows to query
        // the number of active uploads:
        active: function () {
            return this._active;
        },

        // This method is exposed to the widget API and allows to query
        // the widget upload progress.
        // It returns an object with loaded, total and bitrate properties
        // for the running uploads:
        progress: function () {
            return this._progress;
        },

        // This method is exposed to the widget API and allows adding files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files property and can contain additional options:
        // .fileupload('add', {files: filesList});
        add: function (data) {
            var that = this;
            if (!data || this.options.disabled) {
                return;
            }
            if (data.fileInput && !data.files) {
                this._getFileInputFiles(data.fileInput).always(function (files) {
                    data.files = files;
                    that._onAdd(null, data);
                });
            } else {
                data.files = $.makeArray(data.files);
                this._onAdd(null, data);
            }
        },

        // This method is exposed to the widget API and allows sending files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files or fileInput property and can contain additional options:
        // .fileupload('send', {files: filesList});
        // The method returns a Promise object for the file upload call.
        send: function (data) {
            if (data && !this.options.disabled) {
                if (data.fileInput && !data.files) {
                    var that = this,
                        dfd = $.Deferred(),
                        promise = dfd.promise(),
                        jqXHR,
                        aborted;
                    promise.abort = function () {
                        aborted = true;
                        if (jqXHR) {
                            return jqXHR.abort();
                        }
                        dfd.reject(null, 'abort', 'abort');
                        return promise;
                    };
                    this._getFileInputFiles(data.fileInput).always(
                        function (files) {
                            if (aborted) {
                                return;
                            }
                            if (!files.length) {
                                dfd.reject();
                                return;
                            }
                            data.files = files;
                            jqXHR = that._onSend(null, data);
                            jqXHR.then(
                                function (result, textStatus, jqXHR) {
                                    dfd.resolve(result, textStatus, jqXHR);
                                },
                                function (jqXHR, textStatus, errorThrown) {
                                    dfd.reject(jqXHR, textStatus, errorThrown);
                                }
                            );
                        }
                    );
                    return this._enhancePromise(promise);
                }
                data.files = $.makeArray(data.files);
                if (data.files.length) {
                    return this._onSend(null, data);
                }
            }
            return this._getXHRPromise(false, data && data.context);
        }

    });

}));

;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());

/*!
 * Bootstrap Colorpicker v2.5.1
 * https://itsjavi.com/bootstrap-colorpicker/
 *
 * Originally written by (c) 2012 Stefan Petre
 * Licensed under the Apache License v2.0
 * http://www.apache.org/licenses/LICENSE-2.0.txt
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["jquery"], function(jq) {
      return (factory(jq));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else if (jQuery && !jQuery.fn.colorpicker) {
    factory(jQuery);
  }
}(this, function($) {
  'use strict';
  /**
   * Color manipulation helper class
   *
   * @param {Object|String} [val]
   * @param {Object} [predefinedColors]
   * @param {String|null} [fallbackColor]
   * @param {String|null} [fallbackFormat]
   * @param {Boolean} [hexNumberSignPrefix]
   * @constructor
   */
  var Color = function(
    val, predefinedColors, fallbackColor, fallbackFormat, hexNumberSignPrefix) {
    this.fallbackValue = fallbackColor ?
      (
        fallbackColor && (typeof fallbackColor.h !== 'undefined') ?
        fallbackColor :
        this.value = {
          h: 0,
          s: 0,
          b: 0,
          a: 1
        }
      ) :
      null;

    this.fallbackFormat = fallbackFormat ? fallbackFormat : 'rgba';

    this.hexNumberSignPrefix = hexNumberSignPrefix === true;

    this.value = this.fallbackValue;

    this.origFormat = null; // original string format

    this.predefinedColors = predefinedColors ? predefinedColors : {};

    // We don't want to share aliases across instances so we extend new object
    this.colors = $.extend({}, Color.webColors, this.predefinedColors);

    if (val) {
      if (typeof val.h !== 'undefined') {
        this.value = val;
      } else {
        this.setColor(String(val));
      }
    }

    if (!this.value) {
      // Initial value is always black if no arguments are passed or val is empty
      this.value = {
        h: 0,
        s: 0,
        b: 0,
        a: 1
      };
    }
  };

  Color.webColors = { // 140 predefined colors from the HTML Colors spec
    "aliceblue": "f0f8ff",
    "antiquewhite": "faebd7",
    "aqua": "00ffff",
    "aquamarine": "7fffd4",
    "azure": "f0ffff",
    "beige": "f5f5dc",
    "bisque": "ffe4c4",
    "black": "000000",
    "blanchedalmond": "ffebcd",
    "blue": "0000ff",
    "blueviolet": "8a2be2",
    "brown": "a52a2a",
    "burlywood": "deb887",
    "cadetblue": "5f9ea0",
    "chartreuse": "7fff00",
    "chocolate": "d2691e",
    "coral": "ff7f50",
    "cornflowerblue": "6495ed",
    "cornsilk": "fff8dc",
    "crimson": "dc143c",
    "cyan": "00ffff",
    "darkblue": "00008b",
    "darkcyan": "008b8b",
    "darkgoldenrod": "b8860b",
    "darkgray": "a9a9a9",
    "darkgreen": "006400",
    "darkkhaki": "bdb76b",
    "darkmagenta": "8b008b",
    "darkolivegreen": "556b2f",
    "darkorange": "ff8c00",
    "darkorchid": "9932cc",
    "darkred": "8b0000",
    "darksalmon": "e9967a",
    "darkseagreen": "8fbc8f",
    "darkslateblue": "483d8b",
    "darkslategray": "2f4f4f",
    "darkturquoise": "00ced1",
    "darkviolet": "9400d3",
    "deeppink": "ff1493",
    "deepskyblue": "00bfff",
    "dimgray": "696969",
    "dodgerblue": "1e90ff",
    "firebrick": "b22222",
    "floralwhite": "fffaf0",
    "forestgreen": "228b22",
    "fuchsia": "ff00ff",
    "gainsboro": "dcdcdc",
    "ghostwhite": "f8f8ff",
    "gold": "ffd700",
    "goldenrod": "daa520",
    "gray": "808080",
    "green": "008000",
    "greenyellow": "adff2f",
    "honeydew": "f0fff0",
    "hotpink": "ff69b4",
    "indianred": "cd5c5c",
    "indigo": "4b0082",
    "ivory": "fffff0",
    "khaki": "f0e68c",
    "lavender": "e6e6fa",
    "lavenderblush": "fff0f5",
    "lawngreen": "7cfc00",
    "lemonchiffon": "fffacd",
    "lightblue": "add8e6",
    "lightcoral": "f08080",
    "lightcyan": "e0ffff",
    "lightgoldenrodyellow": "fafad2",
    "lightgrey": "d3d3d3",
    "lightgreen": "90ee90",
    "lightpink": "ffb6c1",
    "lightsalmon": "ffa07a",
    "lightseagreen": "20b2aa",
    "lightskyblue": "87cefa",
    "lightslategray": "778899",
    "lightsteelblue": "b0c4de",
    "lightyellow": "ffffe0",
    "lime": "00ff00",
    "limegreen": "32cd32",
    "linen": "faf0e6",
    "magenta": "ff00ff",
    "maroon": "800000",
    "mediumaquamarine": "66cdaa",
    "mediumblue": "0000cd",
    "mediumorchid": "ba55d3",
    "mediumpurple": "9370d8",
    "mediumseagreen": "3cb371",
    "mediumslateblue": "7b68ee",
    "mediumspringgreen": "00fa9a",
    "mediumturquoise": "48d1cc",
    "mediumvioletred": "c71585",
    "midnightblue": "191970",
    "mintcream": "f5fffa",
    "mistyrose": "ffe4e1",
    "moccasin": "ffe4b5",
    "navajowhite": "ffdead",
    "navy": "000080",
    "oldlace": "fdf5e6",
    "olive": "808000",
    "olivedrab": "6b8e23",
    "orange": "ffa500",
    "orangered": "ff4500",
    "orchid": "da70d6",
    "palegoldenrod": "eee8aa",
    "palegreen": "98fb98",
    "paleturquoise": "afeeee",
    "palevioletred": "d87093",
    "papayawhip": "ffefd5",
    "peachpuff": "ffdab9",
    "peru": "cd853f",
    "pink": "ffc0cb",
    "plum": "dda0dd",
    "powderblue": "b0e0e6",
    "purple": "800080",
    "red": "ff0000",
    "rosybrown": "bc8f8f",
    "royalblue": "4169e1",
    "saddlebrown": "8b4513",
    "salmon": "fa8072",
    "sandybrown": "f4a460",
    "seagreen": "2e8b57",
    "seashell": "fff5ee",
    "sienna": "a0522d",
    "silver": "c0c0c0",
    "skyblue": "87ceeb",
    "slateblue": "6a5acd",
    "slategray": "708090",
    "snow": "fffafa",
    "springgreen": "00ff7f",
    "steelblue": "4682b4",
    "tan": "d2b48c",
    "teal": "008080",
    "thistle": "d8bfd8",
    "tomato": "ff6347",
    "turquoise": "40e0d0",
    "violet": "ee82ee",
    "wheat": "f5deb3",
    "white": "ffffff",
    "whitesmoke": "f5f5f5",
    "yellow": "ffff00",
    "yellowgreen": "9acd32",
    "transparent": "transparent"
  };

  Color.prototype = {
    constructor: Color,
    colors: {}, // merged web and predefined colors
    predefinedColors: {},
    /**
     * @return {Object}
     */
    getValue: function() {
      return this.value;
    },
    /**
     * @param {Object} val
     */
    setValue: function(val) {
      this.value = val;
    },
    _sanitizeNumber: function(val) {
      if (typeof val === 'number') {
        return val;
      }
      if (isNaN(val) || (val === null) || (val === '') || (val === undefined)) {
        return 1;
      }
      if (val === '') {
        return 0;
      }
      if (typeof val.toLowerCase !== 'undefined') {
        if (val.match(/^\./)) {
          val = "0" + val;
        }
        return Math.ceil(parseFloat(val) * 100) / 100;
      }
      return 1;
    },
    isTransparent: function(strVal) {
      if (!strVal || !(typeof strVal === 'string' || strVal instanceof String)) {
        return false;
      }
      strVal = strVal.toLowerCase().trim();
      return (strVal === 'transparent') || (strVal.match(/#?00000000/)) || (strVal.match(/(rgba|hsla)\(0,0,0,0?\.?0\)/));
    },
    rgbaIsTransparent: function(rgba) {
      return ((rgba.r === 0) && (rgba.g === 0) && (rgba.b === 0) && (rgba.a === 0));
    },
    // parse a string to HSB
    /**
     * @protected
     * @param {String} strVal
     * @returns {boolean} Returns true if it could be parsed, false otherwise
     */
    setColor: function(strVal) {
      strVal = strVal.toLowerCase().trim();
      if (strVal) {
        if (this.isTransparent(strVal)) {
          this.value = {
            h: 0,
            s: 0,
            b: 0,
            a: 0
          };
          return true;
        } else {
          var parsedColor = this.parse(strVal);
          if (parsedColor) {
            this.value = this.value = {
              h: parsedColor.h,
              s: parsedColor.s,
              b: parsedColor.b,
              a: parsedColor.a
            };
            if (!this.origFormat) {
              this.origFormat = parsedColor.format;
            }
          } else if (this.fallbackValue) {
            // if parser fails, defaults to fallbackValue if defined, otherwise the value won't be changed
            this.value = this.fallbackValue;
          }
        }
      }
      return false;
    },
    setHue: function(h) {
      this.value.h = 1 - h;
    },
    setSaturation: function(s) {
      this.value.s = s;
    },
    setBrightness: function(b) {
      this.value.b = 1 - b;
    },
    setAlpha: function(a) {
      this.value.a = Math.round((parseInt((1 - a) * 100, 10) / 100) * 100) / 100;
    },
    toRGB: function(h, s, b, a) {
      if (arguments.length === 0) {
        h = this.value.h;
        s = this.value.s;
        b = this.value.b;
        a = this.value.a;
      }

      h *= 360;
      var R, G, B, X, C;
      h = (h % 360) / 60;
      C = b * s;
      X = C * (1 - Math.abs(h % 2 - 1));
      R = G = B = b - C;

      h = ~~h;
      R += [C, X, 0, 0, X, C][h];
      G += [X, C, C, X, 0, 0][h];
      B += [0, 0, X, C, C, X][h];

      return {
        r: Math.round(R * 255),
        g: Math.round(G * 255),
        b: Math.round(B * 255),
        a: a
      };
    },
    toHex: function(h, s, b, a) {
      if (arguments.length === 0) {
        h = this.value.h;
        s = this.value.s;
        b = this.value.b;
        a = this.value.a;
      }

      var rgb = this.toRGB(h, s, b, a);

      if (this.rgbaIsTransparent(rgb)) {
        return 'transparent';
      }

      var hexStr = (this.hexNumberSignPrefix ? '#' : '') + (
          (1 << 24) +
          (parseInt(rgb.r) << 16) +
          (parseInt(rgb.g) << 8) +
          parseInt(rgb.b))
        .toString(16)
        .slice(1);

      return hexStr;
    },
    toHSL: function(h, s, b, a) {
      if (arguments.length === 0) {
        h = this.value.h;
        s = this.value.s;
        b = this.value.b;
        a = this.value.a;
      }

      var H = h,
        L = (2 - s) * b,
        S = s * b;
      if (L > 0 && L <= 1) {
        S /= L;
      } else {
        S /= 2 - L;
      }
      L /= 2;
      if (S > 1) {
        S = 1;
      }
      return {
        h: isNaN(H) ? 0 : H,
        s: isNaN(S) ? 0 : S,
        l: isNaN(L) ? 0 : L,
        a: isNaN(a) ? 0 : a
      };
    },
    toAlias: function(r, g, b, a) {
      var c, rgb = (arguments.length === 0) ? this.toHex() : this.toHex(r, g, b, a);

      // support predef. colors in non-hex format too, as defined in the alias itself
      var original = this.origFormat === 'alias' ? rgb : this.toString(this.origFormat, false);

      for (var alias in this.colors) {
        c = this.colors[alias].toLowerCase().trim();
        if ((c === rgb) || (c === original)) {
          return alias;
        }
      }
      return false;
    },
    RGBtoHSB: function(r, g, b, a) {
      r /= 255;
      g /= 255;
      b /= 255;

      var H, S, V, C;
      V = Math.max(r, g, b);
      C = V - Math.min(r, g, b);
      H = (C === 0 ? null :
        V === r ? (g - b) / C :
        V === g ? (b - r) / C + 2 :
        (r - g) / C + 4
      );
      H = ((H + 360) % 6) * 60 / 360;
      S = C === 0 ? 0 : C / V;
      return {
        h: this._sanitizeNumber(H),
        s: S,
        b: V,
        a: this._sanitizeNumber(a)
      };
    },
    HueToRGB: function(p, q, h) {
      if (h < 0) {
        h += 1;
      } else if (h > 1) {
        h -= 1;
      }
      if ((h * 6) < 1) {
        return p + (q - p) * h * 6;
      } else if ((h * 2) < 1) {
        return q;
      } else if ((h * 3) < 2) {
        return p + (q - p) * ((2 / 3) - h) * 6;
      } else {
        return p;
      }
    },
    HSLtoRGB: function(h, s, l, a) {
      if (s < 0) {
        s = 0;
      }
      var q;
      if (l <= 0.5) {
        q = l * (1 + s);
      } else {
        q = l + s - (l * s);
      }

      var p = 2 * l - q;

      var tr = h + (1 / 3);
      var tg = h;
      var tb = h - (1 / 3);

      var r = Math.round(this.HueToRGB(p, q, tr) * 255);
      var g = Math.round(this.HueToRGB(p, q, tg) * 255);
      var b = Math.round(this.HueToRGB(p, q, tb) * 255);
      return [r, g, b, this._sanitizeNumber(a)];
    },
    /**
     * @param {String} strVal
     * @returns {Object} Object containing h,s,b,a,format properties or FALSE if failed to parse
     */
    parse: function(strVal) {
      if (arguments.length === 0) {
        return false;
      }

      var that = this,
        result = false,
        isAlias = (typeof this.colors[strVal] !== 'undefined'),
        values, format;

      if (isAlias) {
        strVal = this.colors[strVal].toLowerCase().trim();
      }

      $.each(this.stringParsers, function(i, parser) {
        var match = parser.re.exec(strVal);
        values = match && parser.parse.apply(that, [match]);
        if (values) {
          result = {};
          format = (isAlias ? 'alias' : (parser.format ? parser.format : that.getValidFallbackFormat()));
          if (format.match(/hsla?/)) {
            result = that.RGBtoHSB.apply(that, that.HSLtoRGB.apply(that, values));
          } else {
            result = that.RGBtoHSB.apply(that, values);
          }
          if (result instanceof Object) {
            result.format = format;
          }
          return false; // stop iterating
        }
        return true;
      });
      return result;
    },
    getValidFallbackFormat: function() {
      var formats = [
        'rgba', 'rgb', 'hex', 'hsla', 'hsl'
      ];
      if (this.origFormat && (formats.indexOf(this.origFormat) !== -1)) {
        return this.origFormat;
      }
      if (this.fallbackFormat && (formats.indexOf(this.fallbackFormat) !== -1)) {
        return this.fallbackFormat;
      }

      return 'rgba'; // By default, return a format that will not lose the alpha info
    },
    /**
     *
     * @param {string} [format] (default: rgba)
     * @param {boolean} [translateAlias] Return real color for pre-defined (non-standard) aliases (default: false)
     * @returns {String}
     */
    toString: function(format, translateAlias) {
      format = format || this.origFormat || this.fallbackFormat;
      translateAlias = translateAlias || false;

      var c = false;

      switch (format) {
        case 'rgb':
          {
            c = this.toRGB();
            if (this.rgbaIsTransparent(c)) {
              return 'transparent';
            }
            return 'rgb(' + c.r + ',' + c.g + ',' + c.b + ')';
          }
          break;
        case 'rgba':
          {
            c = this.toRGB();
            return 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + c.a + ')';
          }
          break;
        case 'hsl':
          {
            c = this.toHSL();
            return 'hsl(' + Math.round(c.h * 360) + ',' + Math.round(c.s * 100) + '%,' + Math.round(c.l * 100) + '%)';
          }
          break;
        case 'hsla':
          {
            c = this.toHSL();
            return 'hsla(' + Math.round(c.h * 360) + ',' + Math.round(c.s * 100) + '%,' + Math.round(c.l * 100) + '%,' + c.a + ')';
          }
          break;
        case 'hex':
          {
            return this.toHex();
          }
          break;
        case 'alias':
          {
            c = this.toAlias();

            if (c === false) {
              return this.toString(this.getValidFallbackFormat());
            }

            if (translateAlias && !(c in Color.webColors) && (c in this.predefinedColors)) {
              return this.predefinedColors[c];
            }

            return c;
          }
        default:
          {
            return c;
          }
          break;
      }
    },
    // a set of RE's that can match strings and generate color tuples.
    // from John Resig color plugin
    // https://github.com/jquery/jquery-color/
    stringParsers: [{
      re: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,
      format: 'rgb',
      parse: function(execResult) {
        return [
          execResult[1],
          execResult[2],
          execResult[3],
          1
        ];
      }
    }, {
      re: /rgb\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,
      format: 'rgb',
      parse: function(execResult) {
        return [
          2.55 * execResult[1],
          2.55 * execResult[2],
          2.55 * execResult[3],
          1
        ];
      }
    }, {
      re: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
      format: 'rgba',
      parse: function(execResult) {
        return [
          execResult[1],
          execResult[2],
          execResult[3],
          execResult[4]
        ];
      }
    }, {
      re: /rgba\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
      format: 'rgba',
      parse: function(execResult) {
        return [
          2.55 * execResult[1],
          2.55 * execResult[2],
          2.55 * execResult[3],
          execResult[4]
        ];
      }
    }, {
      re: /hsl\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,
      format: 'hsl',
      parse: function(execResult) {
        return [
          execResult[1] / 360,
          execResult[2] / 100,
          execResult[3] / 100,
          execResult[4]
        ];
      }
    }, {
      re: /hsla\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
      format: 'hsla',
      parse: function(execResult) {
        return [
          execResult[1] / 360,
          execResult[2] / 100,
          execResult[3] / 100,
          execResult[4]
        ];
      }
    }, {
      re: /#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
      format: 'hex',
      parse: function(execResult) {
        return [
          parseInt(execResult[1], 16),
          parseInt(execResult[2], 16),
          parseInt(execResult[3], 16),
          1
        ];
      }
    }, {
      re: /#?([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
      format: 'hex',
      parse: function(execResult) {
        return [
          parseInt(execResult[1] + execResult[1], 16),
          parseInt(execResult[2] + execResult[2], 16),
          parseInt(execResult[3] + execResult[3], 16),
          1
        ];
      }
    }],
    colorNameToHex: function(name) {
      if (typeof this.colors[name.toLowerCase()] !== 'undefined') {
        return this.colors[name.toLowerCase()];
      }
      return false;
    }
  };

  /*
   * Default plugin options
   */
  var defaults = {
    horizontal: false, // horizontal mode layout ?
    inline: false, //forces to show the colorpicker as an inline element
    color: false, //forces a color
    format: false, //forces a format
    input: 'input', // children input selector
    container: false, // container selector
    component: '.add-on, .input-group-addon', // children component selector
    fallbackColor: false, // fallback color value. null = keeps current color.
    fallbackFormat: 'hex', // fallback color format
    hexNumberSignPrefix: true, // put a '#' (number sign) before hex strings
    sliders: {
      saturation: {
        maxLeft: 100,
        maxTop: 100,
        callLeft: 'setSaturation',
        callTop: 'setBrightness'
      },
      hue: {
        maxLeft: 0,
        maxTop: 100,
        callLeft: false,
        callTop: 'setHue'
      },
      alpha: {
        maxLeft: 0,
        maxTop: 100,
        callLeft: false,
        callTop: 'setAlpha'
      }
    },
    slidersHorz: {
      saturation: {
        maxLeft: 100,
        maxTop: 100,
        callLeft: 'setSaturation',
        callTop: 'setBrightness'
      },
      hue: {
        maxLeft: 100,
        maxTop: 0,
        callLeft: 'setHue',
        callTop: false
      },
      alpha: {
        maxLeft: 100,
        maxTop: 0,
        callLeft: 'setAlpha',
        callTop: false
      }
    },
    template: '<div class="colorpicker dropdown-menu">' +
      '<div class="colorpicker-saturation"><i><b></b></i></div>' +
      '<div class="colorpicker-hue"><i></i></div>' +
      '<div class="colorpicker-alpha"><i></i></div>' +
      '<div class="colorpicker-color"><div /></div>' +
      '<div class="colorpicker-selectors"></div>' +
      '</div>',
    align: 'right',
    customClass: null, // custom class added to the colorpicker element
    colorSelectors: null // custom color aliases
  };

  /**
   * Colorpicker component class
   *
   * @param {Object|String} element
   * @param {Object} options
   * @constructor
   */
  var Colorpicker = function(element, options) {
    this.element = $(element).addClass('colorpicker-element');
    this.options = $.extend(true, {}, defaults, this.element.data(), options);
    this.component = this.options.component;
    this.component = (this.component !== false) ? this.element.find(this.component) : false;
    if (this.component && (this.component.length === 0)) {
      this.component = false;
    }
    this.container = (this.options.container === true) ? this.element : this.options.container;
    this.container = (this.container !== false) ? $(this.container) : false;

    // Is the element an input? Should we search inside for any input?
    this.input = this.element.is('input') ? this.element : (this.options.input ?
      this.element.find(this.options.input) : false);
    if (this.input && (this.input.length === 0)) {
      this.input = false;
    }
    // Set HSB color
    this.color = this.createColor(this.options.color !== false ? this.options.color : this.getValue());

    this.format = this.options.format !== false ? this.options.format : this.color.origFormat;

    if (this.options.color !== false) {
      this.updateInput(this.color);
      this.updateData(this.color);
    }

    // Setup picker
    var $picker = this.picker = $(this.options.template);
    if (this.options.customClass) {
      $picker.addClass(this.options.customClass);
    }
    if (this.options.inline) {
      $picker.addClass('colorpicker-inline colorpicker-visible');
    } else {
      $picker.addClass('colorpicker-hidden');
    }
    if (this.options.horizontal) {
      $picker.addClass('colorpicker-horizontal');
    }
    if (
      (['rgba', 'hsla', 'alias'].indexOf(this.format) !== -1) ||
      this.options.format === false ||
      this.getValue() === 'transparent'
    ) {
      $picker.addClass('colorpicker-with-alpha');
    }
    if (this.options.align === 'right') {
      $picker.addClass('colorpicker-right');
    }
    if (this.options.inline === true) {
      $picker.addClass('colorpicker-no-arrow');
    }
    if (this.options.colorSelectors) {
      var colorpicker = this,
        selectorsContainer = colorpicker.picker.find('.colorpicker-selectors');

      if (selectorsContainer.length > 0) {
        $.each(this.options.colorSelectors, function(name, color) {
          var $btn = $('<i />')
            .addClass('colorpicker-selectors-color')
            .css('background-color', color)
            .data('class', name).data('alias', name);

          $btn.on('mousedown.colorpicker touchstart.colorpicker', function(event) {
            event.preventDefault();
            colorpicker.setValue(
              colorpicker.format === 'alias' ? $(this).data('alias') : $(this).css('background-color')
            );
          });
          selectorsContainer.append($btn);
        });
        selectorsContainer.show().addClass('colorpicker-visible');
      }
    }

    // Prevent closing the colorpicker when clicking on itself
    $picker.on('mousedown.colorpicker touchstart.colorpicker', $.proxy(function(e) {
      if (e.target === e.currentTarget) {
        e.preventDefault();
      }
    }, this));

    // Bind click/tap events on the sliders
    $picker.find('.colorpicker-saturation, .colorpicker-hue, .colorpicker-alpha')
      .on('mousedown.colorpicker touchstart.colorpicker', $.proxy(this.mousedown, this));

    $picker.appendTo(this.container ? this.container : $('body'));

    // Bind other events
    if (this.input !== false) {
      this.input.on({
        'keyup.colorpicker': $.proxy(this.keyup, this)
      });
      this.input.on({
        'change.colorpicker': $.proxy(this.change, this)
      });
      if (this.component === false) {
        this.element.on({
          'focus.colorpicker': $.proxy(this.show, this)
        });
      }
      if (this.options.inline === false) {
        this.element.on({
          'focusout.colorpicker': $.proxy(this.hide, this)
        });
      }
    }

    if (this.component !== false) {
      this.component.on({
        'click.colorpicker': $.proxy(this.show, this)
      });
    }

    if ((this.input === false) && (this.component === false)) {
      this.element.on({
        'click.colorpicker': $.proxy(this.show, this)
      });
    }

    // for HTML5 input[type='color']
    if ((this.input !== false) && (this.component !== false) && (this.input.attr('type') === 'color')) {

      this.input.on({
        'click.colorpicker': $.proxy(this.show, this),
        'focus.colorpicker': $.proxy(this.show, this)
      });
    }
    this.update();

    $($.proxy(function() {
      this.element.trigger('create');
    }, this));
  };

  Colorpicker.Color = Color;

  Colorpicker.prototype = {
    constructor: Colorpicker,
    destroy: function() {
      this.picker.remove();
      this.element.removeData('colorpicker', 'color').off('.colorpicker');
      if (this.input !== false) {
        this.input.off('.colorpicker');
      }
      if (this.component !== false) {
        this.component.off('.colorpicker');
      }
      this.element.removeClass('colorpicker-element');
      this.element.trigger({
        type: 'destroy'
      });
    },
    reposition: function() {
      if (this.options.inline !== false || this.options.container) {
        return false;
      }
      var type = this.container && this.container[0] !== window.document.body ? 'position' : 'offset';
      var element = this.component || this.element;
      var offset = element[type]();
      if (this.options.align === 'right') {
        offset.left -= this.picker.outerWidth() - element.outerWidth();
      }
      this.picker.css({
        top: offset.top + element.outerHeight(),
        left: offset.left
      });
    },
    show: function(e) {
      if (this.isDisabled()) {
        // Don't show the widget if it's disabled (the input)
        return;
      }
      this.picker.addClass('colorpicker-visible').removeClass('colorpicker-hidden');
      this.reposition();
      $(window).on('resize.colorpicker', $.proxy(this.reposition, this));
      if (e && (!this.hasInput() || this.input.attr('type') === 'color')) {
        if (e.stopPropagation && e.preventDefault) {
          e.stopPropagation();
          e.preventDefault();
        }
      }
      if ((this.component || !this.input) && (this.options.inline === false)) {
        $(window.document).on({
          'mousedown.colorpicker': $.proxy(this.hide, this)
        });
      }
      this.element.trigger({
        type: 'showPicker',
        color: this.color
      });
    },
    hide: function(e) {
      if ((typeof e !== 'undefined') && e.target) {
        // Prevent hide if triggered by an event and an element inside the colorpicker has been clicked/touched
        if (
          $(e.currentTarget).parents('.colorpicker').length > 0 ||
          $(e.target).parents('.colorpicker').length > 0
        ) {
          return false;
        }
      }
      this.picker.addClass('colorpicker-hidden').removeClass('colorpicker-visible');
      $(window).off('resize.colorpicker', this.reposition);
      $(window.document).off({
        'mousedown.colorpicker': this.hide
      });
      this.update();
      this.element.trigger({
        type: 'hidePicker',
        color: this.color
      });
    },
    updateData: function(val) {
      val = val || this.color.toString(this.format, false);
      this.element.data('color', val);
      return val;
    },
    updateInput: function(val) {
      val = val || this.color.toString(this.format, false);
      if (this.input !== false) {
        this.input.prop('value', val);
        this.input.trigger('change');
      }
      return val;
    },
    updatePicker: function(val) {
      if (typeof val !== 'undefined') {
        this.color = this.createColor(val);
      }
      var sl = (this.options.horizontal === false) ? this.options.sliders : this.options.slidersHorz;
      var icns = this.picker.find('i');
      if (icns.length === 0) {
        return;
      }
      if (this.options.horizontal === false) {
        sl = this.options.sliders;
        icns.eq(1).css('top', sl.hue.maxTop * (1 - this.color.value.h)).end()
          .eq(2).css('top', sl.alpha.maxTop * (1 - this.color.value.a));
      } else {
        sl = this.options.slidersHorz;
        icns.eq(1).css('left', sl.hue.maxLeft * (1 - this.color.value.h)).end()
          .eq(2).css('left', sl.alpha.maxLeft * (1 - this.color.value.a));
      }
      icns.eq(0).css({
        'top': sl.saturation.maxTop - this.color.value.b * sl.saturation.maxTop,
        'left': this.color.value.s * sl.saturation.maxLeft
      });

      this.picker.find('.colorpicker-saturation')
        .css('backgroundColor', (this.options.hexNumberSignPrefix ? '' : '#') + this.color.toHex(this.color.value.h, 1, 1, 1));

      this.picker.find('.colorpicker-alpha')
        .css('backgroundColor', (this.options.hexNumberSignPrefix ? '' : '#') + this.color.toHex());

      this.picker.find('.colorpicker-color, .colorpicker-color div')
        .css('backgroundColor', this.color.toString(this.format, true));

      return val;
    },
    updateComponent: function(val) {
      var color;

      if (typeof val !== 'undefined') {
        color = this.createColor(val);
      } else {
        color = this.color;
      }

      if (this.component !== false) {
        var icn = this.component.find('i').eq(0);
        if (icn.length > 0) {
          icn.css({
            'backgroundColor': color.toString(this.format, true)
          });
        } else {
          this.component.css({
            'backgroundColor': color.toString(this.format, true)
          });
        }
      }

      return color.toString(this.format, false);
    },
    update: function(force) {
      var val;
      if ((this.getValue(false) !== false) || (force === true)) {
        // Update input/data only if the current value is not empty
        val = this.updateComponent();
        this.updateInput(val);
        this.updateData(val);
        this.updatePicker(); // only update picker if value is not empty
      }
      return val;

    },
    setValue: function(val) { // set color manually
      this.color = this.createColor(val);
      this.update(true);
      this.element.trigger({
        type: 'changeColor',
        color: this.color,
        value: val
      });
    },
    /**
     * Creates a new color using the instance options
     * @protected
     * @param {String} val
     * @returns {Color}
     */
    createColor: function(val) {
      return new Color(
        val ? val : null,
        this.options.colorSelectors,
        this.options.fallbackColor ? this.options.fallbackColor : this.color,
        this.options.fallbackFormat,
        this.options.hexNumberSignPrefix
      );
    },
    getValue: function(defaultValue) {
      defaultValue = (typeof defaultValue === 'undefined') ? this.options.fallbackColor : defaultValue;
      var val;
      if (this.hasInput()) {
        val = this.input.val();
      } else {
        val = this.element.data('color');
      }
      if ((val === undefined) || (val === '') || (val === null)) {
        // if not defined or empty, return default
        val = defaultValue;
      }
      return val;
    },
    hasInput: function() {
      return (this.input !== false);
    },
    isDisabled: function() {
      if (this.hasInput()) {
        return (this.input.prop('disabled') === true);
      }
      return false;
    },
    disable: function() {
      if (this.hasInput()) {
        this.input.prop('disabled', true);
        this.element.trigger({
          type: 'disable',
          color: this.color,
          value: this.getValue()
        });
        return true;
      }
      return false;
    },
    enable: function() {
      if (this.hasInput()) {
        this.input.prop('disabled', false);
        this.element.trigger({
          type: 'enable',
          color: this.color,
          value: this.getValue()
        });
        return true;
      }
      return false;
    },
    currentSlider: null,
    mousePointer: {
      left: 0,
      top: 0
    },
    mousedown: function(e) {
      if (!e.pageX && !e.pageY && e.originalEvent && e.originalEvent.touches) {
        e.pageX = e.originalEvent.touches[0].pageX;
        e.pageY = e.originalEvent.touches[0].pageY;
      }
      e.stopPropagation();
      e.preventDefault();

      var target = $(e.target);

      //detect the slider and set the limits and callbacks
      var zone = target.closest('div');
      var sl = this.options.horizontal ? this.options.slidersHorz : this.options.sliders;
      if (!zone.is('.colorpicker')) {
        if (zone.is('.colorpicker-saturation')) {
          this.currentSlider = $.extend({}, sl.saturation);
        } else if (zone.is('.colorpicker-hue')) {
          this.currentSlider = $.extend({}, sl.hue);
        } else if (zone.is('.colorpicker-alpha')) {
          this.currentSlider = $.extend({}, sl.alpha);
        } else {
          return false;
        }
        var offset = zone.offset();
        //reference to guide's style
        this.currentSlider.guide = zone.find('i')[0].style;
        this.currentSlider.left = e.pageX - offset.left;
        this.currentSlider.top = e.pageY - offset.top;
        this.mousePointer = {
          left: e.pageX,
          top: e.pageY
        };
        //trigger mousemove to move the guide to the current position
        $(window.document).on({
          'mousemove.colorpicker': $.proxy(this.mousemove, this),
          'touchmove.colorpicker': $.proxy(this.mousemove, this),
          'mouseup.colorpicker': $.proxy(this.mouseup, this),
          'touchend.colorpicker': $.proxy(this.mouseup, this)
        }).trigger('mousemove');
      }
      return false;
    },
    mousemove: function(e) {
      if (!e.pageX && !e.pageY && e.originalEvent && e.originalEvent.touches) {
        e.pageX = e.originalEvent.touches[0].pageX;
        e.pageY = e.originalEvent.touches[0].pageY;
      }
      e.stopPropagation();
      e.preventDefault();
      var left = Math.max(
        0,
        Math.min(
          this.currentSlider.maxLeft,
          this.currentSlider.left + ((e.pageX || this.mousePointer.left) - this.mousePointer.left)
        )
      );
      var top = Math.max(
        0,
        Math.min(
          this.currentSlider.maxTop,
          this.currentSlider.top + ((e.pageY || this.mousePointer.top) - this.mousePointer.top)
        )
      );
      this.currentSlider.guide.left = left + 'px';
      this.currentSlider.guide.top = top + 'px';
      if (this.currentSlider.callLeft) {
        this.color[this.currentSlider.callLeft].call(this.color, left / this.currentSlider.maxLeft);
      }
      if (this.currentSlider.callTop) {
        this.color[this.currentSlider.callTop].call(this.color, top / this.currentSlider.maxTop);
      }
      // Change format dynamically
      // Only occurs if user choose the dynamic format by
      // setting option format to false
      if (
        this.options.format === false &&
        (this.currentSlider.callTop === 'setAlpha' ||
          this.currentSlider.callLeft === 'setAlpha')
      ) {

        // Converting from hex / rgb to rgba
        if (this.color.value.a !== 1) {
          this.format = 'rgba';
          this.color.origFormat = 'rgba';
        }

        // Converting from rgba to hex
        else {
          this.format = 'hex';
          this.color.origFormat = 'hex';
        }
      }
      this.update(true);

      this.element.trigger({
        type: 'changeColor',
        color: this.color
      });
      return false;
    },
    mouseup: function(e) {
      e.stopPropagation();
      e.preventDefault();
      $(window.document).off({
        'mousemove.colorpicker': this.mousemove,
        'touchmove.colorpicker': this.mousemove,
        'mouseup.colorpicker': this.mouseup,
        'touchend.colorpicker': this.mouseup
      });
      return false;
    },
    change: function(e) {
      this.keyup(e);
    },
    keyup: function(e) {
      if ((e.keyCode === 38)) {
        if (this.color.value.a < 1) {
          this.color.value.a = Math.round((this.color.value.a + 0.01) * 100) / 100;
        }
        this.update(true);
      } else if ((e.keyCode === 40)) {
        if (this.color.value.a > 0) {
          this.color.value.a = Math.round((this.color.value.a - 0.01) * 100) / 100;
        }
        this.update(true);
      } else {
        this.color = this.createColor(this.input.val());
        // Change format dynamically
        // Only occurs if user choose the dynamic format by
        // setting option format to false
        if (this.color.origFormat && this.options.format === false) {
          this.format = this.color.origFormat;
        }
        if (this.getValue(false) !== false) {
          this.updateData();
          this.updateComponent();
          this.updatePicker();
        }
      }
      this.element.trigger({
        type: 'changeColor',
        color: this.color,
        value: this.input.val()
      });
    }
  };

  $.colorpicker = Colorpicker;

  $.fn.colorpicker = function(option) {
    var apiArgs = Array.prototype.slice.call(arguments, 1),
      isSingleElement = (this.length === 1),
      returnValue = null;

    var $jq = this.each(function() {
      var $this = $(this),
        inst = $this.data('colorpicker'),
        options = ((typeof option === 'object') ? option : {});

      if (!inst) {
        inst = new Colorpicker(this, options);
        $this.data('colorpicker', inst);
      }

      if (typeof option === 'string') {
        if ($.isFunction(inst[option])) {
          returnValue = inst[option].apply(inst, apiArgs);
        } else { // its a property ?
          if (apiArgs.length) {
            // set property
            inst[option] = apiArgs[0];
          }
          returnValue = inst[option];
        }
      } else {
        returnValue = $this;
      }
    });
    return isSingleElement ? returnValue : $jq;
  };

  $.fn.colorpicker.constructor = Colorpicker;

}));

/*!
 * Datepicker for Bootstrap v1.6.4 (https://github.com/eternicode/bootstrap-datepicker)
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */(function(factory){
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($, undefined){

	function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
	}
	function isUTCEquals(date1, date2) {
		return (
			date1.getUTCFullYear() === date2.getUTCFullYear() &&
			date1.getUTCMonth() === date2.getUTCMonth() &&
			date1.getUTCDate() === date2.getUTCDate()
		);
	}
	function alias(method){
		return function(){
			return this[method].apply(this, arguments);
		};
	}
	function isValidDate(d) {
		return d && !isNaN(d.getTime());
	}

	var DateArray = (function(){
		var extras = {
			get: function(i){
				return this.slice(i)[0];
			},
			contains: function(d){
				// Array.indexOf is not cross-browser;
				// $.inArray doesn't work with Dates
				var val = d && d.valueOf();
				for (var i=0, l=this.length; i < l; i++)
					if (this[i].valueOf() === val)
						return i;
				return -1;
			},
			remove: function(i){
				this.splice(i,1);
			},
			replace: function(new_array){
				if (!new_array)
					return;
				if (!$.isArray(new_array))
					new_array = [new_array];
				this.clear();
				this.push.apply(this, new_array);
			},
			clear: function(){
				this.length = 0;
			},
			copy: function(){
				var a = new DateArray();
				a.replace(this);
				return a;
			}
		};

		return function(){
			var a = [];
			a.push.apply(a, arguments);
			$.extend(a, extras);
			return a;
		};
	})();


	// Picker object

	var Datepicker = function(element, options){
		$(element).data('datepicker', this);
		this._process_options(options);

		this.dates = new DateArray();
		this.viewDate = this.o.defaultViewDate;
		this.focusDate = null;

		this.element = $(element);
		this.isInput = this.element.is('input');
		this.inputField = this.isInput ? this.element : this.element.find('input');
		this.component = this.element.hasClass('date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
		this.hasInput = this.component && this.inputField.length;
		if (this.component && this.component.length === 0)
			this.component = false;
		this.isInline = !this.component && this.element.is('div');

		this.picker = $(DPGlobal.template);

		// Checking templates and inserting
		if (this._check_template(this.o.templates.leftArrow)) {
			this.picker.find('.prev').html(this.o.templates.leftArrow);
		}
		if (this._check_template(this.o.templates.rightArrow)) {
			this.picker.find('.next').html(this.o.templates.rightArrow);
		}

		this._buildEvents();
		this._attachEvents();

		if (this.isInline){
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		}
		else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl){
			this.picker.addClass('datepicker-rtl');
		}

		this.viewMode = this.o.startView;

		if (this.o.calendarWeeks)
			this.picker.find('thead .datepicker-title, tfoot .today, tfoot .clear')
						.attr('colspan', function(i, val){
							return parseInt(val) + 1;
						});

		this._allow_update = false;

		this.setStartDate(this._o.startDate);
		this.setEndDate(this._o.endDate);
		this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
		this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted);
		this.setDatesDisabled(this.o.datesDisabled);

		this.fillDow();
		this.fillMonths();

		this._allow_update = true;

		this.update();
		this.showMode();

		if (this.isInline){
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_resolveViewName: function(view, default_value){
			if (view === 0 || view === 'days' || view === 'month') {
				return 0;
			}
			if (view === 1 || view === 'months' || view === 'year') {
				return 1;
			}
			if (view === 2 || view === 'years' || view === 'decade') {
				return 2;
			}
			if (view === 3 || view === 'decades' || view === 'century') {
				return 3;
			}
			if (view === 4 || view === 'centuries' || view === 'millennium') {
				return 4;
			}
			return default_value === undefined ? false : default_value;
		},

		_check_template: function(tmp){
			try {
				// If empty
				if (tmp === undefined || tmp === "") {
					return false;
				}
				// If no html, everything ok
				if ((tmp.match(/[<>]/g) || []).length <= 0) {
					return true;
				}
				// Checking if html is fine
				var jDom = $(tmp);
				return jDom.length > 0;
			}
			catch (ex) {
				return false;
			}
		},

		_process_options: function(opts){
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]){
				lang = lang.split('-')[0];
				if (!dates[lang])
					lang = defaults.language;
			}
			o.language = lang;

			// Retrieve view index from any aliases
			o.startView = this._resolveViewName(o.startView, 0);
			o.minViewMode = this._resolveViewName(o.minViewMode, 0);
			o.maxViewMode = this._resolveViewName(o.maxViewMode, 4);

			// Check that the start view is between min and max
			o.startView = Math.min(o.startView, o.maxViewMode);
			o.startView = Math.max(o.startView, o.minViewMode);

			// true, false, or Number > 0
			if (o.multidate !== true){
				o.multidate = Number(o.multidate) || false;
				if (o.multidate !== false)
					o.multidate = Math.max(0, o.multidate);
			}
			o.multidateSeparator = String(o.multidateSeparator);

			o.weekStart %= 7;
			o.weekEnd = (o.weekStart + 6) % 7;

			var format = DPGlobal.parseFormat(o.format);
			if (o.startDate !== -Infinity){
				if (!!o.startDate){
					if (o.startDate instanceof Date)
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));
					else
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language, o.assumeNearbyYear);
				}
				else {
					o.startDate = -Infinity;
				}
			}
			if (o.endDate !== Infinity){
				if (!!o.endDate){
					if (o.endDate instanceof Date)
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));
					else
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language, o.assumeNearbyYear);
				}
				else {
					o.endDate = Infinity;
				}
			}

			o.daysOfWeekDisabled = o.daysOfWeekDisabled||[];
			if (!$.isArray(o.daysOfWeekDisabled))
				o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
			o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function(d){
				return parseInt(d, 10);
			});

			o.daysOfWeekHighlighted = o.daysOfWeekHighlighted||[];
			if (!$.isArray(o.daysOfWeekHighlighted))
				o.daysOfWeekHighlighted = o.daysOfWeekHighlighted.split(/[,\s]*/);
			o.daysOfWeekHighlighted = $.map(o.daysOfWeekHighlighted, function(d){
				return parseInt(d, 10);
			});

			o.datesDisabled = o.datesDisabled||[];
			if (!$.isArray(o.datesDisabled)) {
				o.datesDisabled = [
					o.datesDisabled
				];
			}
			o.datesDisabled = $.map(o.datesDisabled,function(d){
				return DPGlobal.parseDate(d, format, o.language, o.assumeNearbyYear);
			});

			var plc = String(o.orientation).toLowerCase().split(/\s+/g),
				_plc = o.orientation.toLowerCase();
			plc = $.grep(plc, function(word){
				return /^auto|left|right|top|bottom$/.test(word);
			});
			o.orientation = {x: 'auto', y: 'auto'};
			if (!_plc || _plc === 'auto')
				; // no action
			else if (plc.length === 1){
				switch (plc[0]){
					case 'top':
					case 'bottom':
						o.orientation.y = plc[0];
						break;
					case 'left':
					case 'right':
						o.orientation.x = plc[0];
						break;
				}
			}
			else {
				_plc = $.grep(plc, function(word){
					return /^left|right$/.test(word);
				});
				o.orientation.x = _plc[0] || 'auto';

				_plc = $.grep(plc, function(word){
					return /^top|bottom$/.test(word);
				});
				o.orientation.y = _plc[0] || 'auto';
			}
			if (o.defaultViewDate) {
				var year = o.defaultViewDate.year || new Date().getFullYear();
				var month = o.defaultViewDate.month || 0;
				var day = o.defaultViewDate.day || 1;
				o.defaultViewDate = UTCDate(year, month, day);
			} else {
				o.defaultViewDate = UTCToday();
			}
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function(evs){
			for (var i=0, el, ch, ev; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.on(ev, ch);
			}
		},
		_unapplyEvents: function(evs){
			for (var i=0, el, ev, ch; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.off(ev, ch);
			}
		},
		_buildEvents: function(){
            var events = {
                keyup: $.proxy(function(e){
                    if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1)
                        this.update();
                }, this),
                keydown: $.proxy(this.keydown, this),
                paste: $.proxy(this.paste, this)
            };

            if (this.o.showOnFocus === true) {
                events.focus = $.proxy(this.show, this);
            }

            if (this.isInput) { // single input
                this._events = [
                    [this.element, events]
                ];
            }
            else if (this.component && this.hasInput) { // component: input + button
                this._events = [
                    // For components that are not readonly, allow keyboard nav
                    [this.inputField, events],
                    [this.component, {
                        click: $.proxy(this.show, this)
                    }]
                ];
            }
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			this._events.push(
				// Component: listen for blur on element descendants
				[this.element, '*', {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}],
				// Input: listen for blur on element
				[this.element, {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}]
			);

			if (this.o.immediateUpdates) {
				// Trigger input updates immediately on changed year/month
				this._events.push([this.element, {
					'changeYear changeMonth': $.proxy(function(e){
						this.update(e.date);
					}, this)
				}]);
			}

			this._secondaryEvents = [
				[this.picker, {
					click: $.proxy(this.click, this)
				}],
				[$(window), {
					resize: $.proxy(this.place, this)
				}],
				[$(document), {
					mousedown: $.proxy(function(e){
						// Clicked outside the datepicker, hide it
						if (!(
							this.element.is(e.target) ||
							this.element.find(e.target).length ||
							this.picker.is(e.target) ||
							this.picker.find(e.target).length ||
							this.isInline
						)){
							this.hide();
						}
					}, this)
				}]
			];
		},
		_attachEvents: function(){
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function(){
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function(){
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function(){
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function(event, altdate){
			var date = altdate || this.dates.get(-1),
				local_date = this._utc_to_local(date);

			this.element.trigger({
				type: event,
				date: local_date,
				dates: $.map(this.dates, this._utc_to_local),
				format: $.proxy(function(ix, format){
					if (arguments.length === 0){
						ix = this.dates.length - 1;
						format = this.o.format;
					}
					else if (typeof ix === 'string'){
						format = ix;
						ix = this.dates.length - 1;
					}
					format = format || this.o.format;
					var date = this.dates.get(ix);
					return DPGlobal.formatDate(date, format, this.o.language);
				}, this)
			});
		},

		show: function(){
			if (this.inputField.prop('disabled') || (this.inputField.prop('readonly') && this.o.enableOnReadonly === false))
				return;
			if (!this.isInline)
				this.picker.appendTo(this.o.container);
			this.place();
			this.picker.show();
			this._attachSecondaryEvents();
			this._trigger('show');
			if ((window.navigator.msMaxTouchPoints || 'ontouchstart' in document) && this.o.disableTouchKeyboard) {
				$(this.element).blur();
			}
			return this;
		},

		hide: function(){
			if (this.isInline || !this.picker.is(':visible'))
				return this;
			this.focusDate = null;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.viewMode = this.o.startView;
			this.showMode();

			if (this.o.forceParse && this.inputField.val())
				this.setValue();
			this._trigger('hide');
			return this;
		},

		destroy: function(){
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput){
				delete this.element.data().date;
			}
			return this;
		},

		paste: function(evt){
			var dateString;
			if (evt.originalEvent.clipboardData && evt.originalEvent.clipboardData.types
				&& $.inArray('text/plain', evt.originalEvent.clipboardData.types) !== -1) {
				dateString = evt.originalEvent.clipboardData.getData('text/plain');
			}
			else if (window.clipboardData) {
				dateString = window.clipboardData.getData('Text');
			}
			else {
				return;
			}
			this.setDate(dateString);
			this.update();
			evt.preventDefault();
		},

		_utc_to_local: function(utc){
			return utc && new Date(utc.getTime() + (utc.getTimezoneOffset()*60000));
		},
		_local_to_utc: function(local){
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
		},
		_zero_time: function(local){
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function(utc){
			return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
		},

		getDates: function(){
			return $.map(this.dates, this._utc_to_local);
		},

		getUTCDates: function(){
			return $.map(this.dates, function(d){
				return new Date(d);
			});
		},

		getDate: function(){
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function(){
			var selected_date = this.dates.get(-1);
			if (typeof selected_date !== 'undefined') {
				return new Date(selected_date);
			} else {
				return null;
			}
		},

		clearDates: function(){
			if (this.inputField) {
				this.inputField.val('');
			}

			this.update();
			this._trigger('changeDate');

			if (this.o.autoclose) {
				this.hide();
			}
		},
		setDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, args);
			this._trigger('changeDate');
			this.setValue();
			return this;
		},

		setUTCDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, $.map(args, this._utc_to_local));
			this._trigger('changeDate');
			this.setValue();
			return this;
		},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),
		remove: alias('destroy'),

		setValue: function(){
			var formatted = this.getFormattedDate();
			this.inputField.val(formatted);
			return this;
		},

		getFormattedDate: function(format){
			if (format === undefined)
				format = this.o.format;

			var lang = this.o.language;
			return $.map(this.dates, function(d){
				return DPGlobal.formatDate(d, format, lang);
			}).join(this.o.multidateSeparator);
		},

		getStartDate: function(){
			return this.o.startDate;
		},

		setStartDate: function(startDate){
			this._process_options({startDate: startDate});
			this.update();
			this.updateNavArrows();
			return this;
		},

		getEndDate: function(){
			return this.o.endDate;
		},

		setEndDate: function(endDate){
			this._process_options({endDate: endDate});
			this.update();
			this.updateNavArrows();
			return this;
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
			this.update();
			this.updateNavArrows();
			return this;
		},

		setDaysOfWeekHighlighted: function(daysOfWeekHighlighted){
			this._process_options({daysOfWeekHighlighted: daysOfWeekHighlighted});
			this.update();
			return this;
		},

		setDatesDisabled: function(datesDisabled){
			this._process_options({datesDisabled: datesDisabled});
			this.update();
			this.updateNavArrows();
		},

		place: function(){
			if (this.isInline)
				return this;
			var calendarWidth = this.picker.outerWidth(),
				calendarHeight = this.picker.outerHeight(),
				visualPadding = 10,
				container = $(this.o.container),
				windowWidth = container.width(),
				scrollTop = this.o.container === 'body' ? $(document).scrollTop() : container.scrollTop(),
				appendOffset = container.offset();

			var parentsZindex = [];
			this.element.parents().each(function(){
				var itemZIndex = $(this).css('z-index');
				if (itemZIndex !== 'auto' && itemZIndex !== 0) parentsZindex.push(parseInt(itemZIndex));
			});
			var zIndex = Math.max.apply(Math, parentsZindex) + this.o.zIndexOffset;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left - appendOffset.left,
				top = offset.top - appendOffset.top;

			if (this.o.container !== 'body') {
				top += scrollTop;
			}

			this.picker.removeClass(
				'datepicker-orient-top datepicker-orient-bottom '+
				'datepicker-orient-right datepicker-orient-left'
			);

			if (this.o.orientation.x !== 'auto'){
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right')
					left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
				if (offset.left < 0) {
					// component is outside the window on the left side. Move it into visible range
					this.picker.addClass('datepicker-orient-left');
					left -= offset.left - visualPadding;
				} else if (left + calendarWidth > windowWidth) {
					// the calendar passes the widow right edge. Align it to component right side
					this.picker.addClass('datepicker-orient-right');
					left += width - calendarWidth;
				} else {
					// Default to left
					this.picker.addClass('datepicker-orient-left');
				}
			}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
				top_overflow;
			if (yorient === 'auto'){
				top_overflow = -scrollTop + top - calendarHeight;
				yorient = top_overflow < 0 ? 'bottom' : 'top';
			}

			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top')
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));
			else
				top += height;

			if (this.o.rtl) {
				var right = windowWidth - (left + width);
				this.picker.css({
					top: top,
					right: right,
					zIndex: zIndex
				});
			} else {
				this.picker.css({
					top: top,
					left: left,
					zIndex: zIndex
				});
			}
			return this;
		},

		_allow_update: true,
		update: function(){
			if (!this._allow_update)
				return this;

			var oldDates = this.dates.copy(),
				dates = [],
				fromArgs = false;
			if (arguments.length){
				$.each(arguments, $.proxy(function(i, date){
					if (date instanceof Date)
						date = this._local_to_utc(date);
					dates.push(date);
				}, this));
				fromArgs = true;
			}
			else {
				dates = this.isInput
						? this.element.val()
						: this.element.data('date') || this.inputField.val();
				if (dates && this.o.multidate)
					dates = dates.split(this.o.multidateSeparator);
				else
					dates = [dates];
				delete this.element.data().date;
			}

			dates = $.map(dates, $.proxy(function(date){
				return DPGlobal.parseDate(date, this.o.format, this.o.language, this.o.assumeNearbyYear);
			}, this));
			dates = $.grep(dates, $.proxy(function(date){
				return (
					!this.dateWithinRange(date) ||
					!date
				);
			}, this), true);
			this.dates.replace(dates);

			if (this.dates.length)
				this.viewDate = new Date(this.dates.get(-1));
			else if (this.viewDate < this.o.startDate)
				this.viewDate = new Date(this.o.startDate);
			else if (this.viewDate > this.o.endDate)
				this.viewDate = new Date(this.o.endDate);
			else
				this.viewDate = this.o.defaultViewDate;

			if (fromArgs){
				// setting date by clicking
				this.setValue();
			}
			else if (dates.length){
				// setting date by typing
				if (String(oldDates) !== String(this.dates))
					this._trigger('changeDate');
			}
			if (!this.dates.length && oldDates.length)
				this._trigger('clearDate');

			this.fill();
			this.element.change();
			return this;
		},

		fillDow: function(){
			var dowCnt = this.o.weekStart,
				html = '<tr>';
			if (this.o.calendarWeeks){
				this.picker.find('.datepicker-days .datepicker-switch')
					.attr('colspan', function(i, val){
						return parseInt(val) + 1;
					});
				html += '<th class="cw">&#160;</th>';
			}
			while (dowCnt < this.o.weekStart + 7){
				html += '<th class="dow';
        if ($.inArray(dowCnt, this.o.daysOfWeekDisabled) > -1)
          html += ' disabled';
        html += '">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},

		fillMonths: function(){
      var localDate = this._utc_to_local(this.viewDate);
			var html = '',
			i = 0;
			while (i < 12){
        var focused = localDate && localDate.getMonth() === i ? ' focused' : '';
				html += '<span class="month' + focused + '">' + dates[this.o.language].monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function(range){
			if (!range || !range.length)
				delete this.range;
			else
				this.range = $.map(range, function(d){
					return d.valueOf();
				});
			this.fill();
		},

		getClassNames: function(date){
			var cls = [],
				year = this.viewDate.getUTCFullYear(),
				month = this.viewDate.getUTCMonth(),
				today = new Date();
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
				cls.push('old');
			}
			else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
				cls.push('new');
			}
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
				cls.push('focused');
			// Compare internal UTC date with local today, not UTC today
			if (this.o.todayHighlight &&
				date.getUTCFullYear() === today.getFullYear() &&
				date.getUTCMonth() === today.getMonth() &&
				date.getUTCDate() === today.getDate()){
				cls.push('today');
			}
			if (this.dates.contains(date) !== -1)
				cls.push('active');
			if (!this.dateWithinRange(date)){
				cls.push('disabled');
			}
			if (this.dateIsDisabled(date)){
				cls.push('disabled', 'disabled-date');	
			} 
			if ($.inArray(date.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1){
				cls.push('highlighted');
			}

			if (this.range){
				if (date > this.range[0] && date < this.range[this.range.length-1]){
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) !== -1){
					cls.push('selected');
				}
				if (date.valueOf() === this.range[0]){
          cls.push('range-start');
        }
        if (date.valueOf() === this.range[this.range.length-1]){
          cls.push('range-end');
        }
			}
			return cls;
		},

		_fill_yearsView: function(selector, cssClass, factor, step, currentYear, startYear, endYear, callback){
			var html, view, year, steps, startStep, endStep, thisYear, i, classes, tooltip, before;

			html      = '';
			view      = this.picker.find(selector);
			year      = parseInt(currentYear / factor, 10) * factor;
			startStep = parseInt(startYear / step, 10) * step;
			endStep   = parseInt(endYear / step, 10) * step;
			steps     = $.map(this.dates, function(d){
				return parseInt(d.getUTCFullYear() / step, 10) * step;
			});

			view.find('.datepicker-switch').text(year + '-' + (year + step * 9));

			thisYear = year - step;
			for (i = -1; i < 11; i += 1) {
				classes = [cssClass];
				tooltip = null;

				if (i === -1) {
					classes.push('old');
				} else if (i === 10) {
					classes.push('new');
				}
				if ($.inArray(thisYear, steps) !== -1) {
					classes.push('active');
				}
				if (thisYear < startStep || thisYear > endStep) {
					classes.push('disabled');
				}
        if (thisYear === this.viewDate.getFullYear()) {
				  classes.push('focused');
        }

				if (callback !== $.noop) {
					before = callback(new Date(thisYear, 0, 1));
					if (before === undefined) {
						before = {};
					} else if (typeof(before) === 'boolean') {
						before = {enabled: before};
					} else if (typeof(before) === 'string') {
						before = {classes: before};
					}
					if (before.enabled === false) {
						classes.push('disabled');
					}
					if (before.classes) {
						classes = classes.concat(before.classes.split(/\s+/));
					}
					if (before.tooltip) {
						tooltip = before.tooltip;
					}
				}

				html += '<span class="' + classes.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + thisYear + '</span>';
				thisYear += step;
			}
			view.find('td').html(html);
		},

		fill: function(){
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				todaytxt = dates[this.o.language].today || dates['en'].today || '',
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
				titleFormat = dates[this.o.language].titleFormat || dates['en'].titleFormat,
				tooltip,
				before;
			if (isNaN(year) || isNaN(month))
				return;
			this.picker.find('.datepicker-days .datepicker-switch')
						.text(DPGlobal.formatDate(d, titleFormat, this.o.language));
			this.picker.find('tfoot .today')
						.text(todaytxt)
						.toggle(this.o.todayBtn !== false);
			this.picker.find('tfoot .clear')
						.text(cleartxt)
						.toggle(this.o.clearBtn !== false);
			this.picker.find('thead .datepicker-title')
						.text(this.o.title)
						.toggle(this.o.title !== '');
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month-1, 28),
				day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
			prevMonth.setUTCDate(day);
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			if (prevMonth.getUTCFullYear() < 100){
        nextMonth.setUTCFullYear(prevMonth.getUTCFullYear());
      }
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName;
			while (prevMonth.valueOf() < nextMonth){
				if (prevMonth.getUTCDay() === this.o.weekStart){
					html.push('<tr>');
					if (this.o.calendarWeeks){
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek =  (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">'+ calWeek +'</td>');
					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				if (this.o.beforeShowDay !== $.noop){
					before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined)
						before = {};
					else if (typeof(before) === 'boolean')
						before = {enabled: before};
					else if (typeof(before) === 'string')
						before = {classes: before};
					if (before.enabled === false)
						clsName.push('disabled');
					if (before.classes)
						clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip)
						tooltip = before.tooltip;
				}

				//Check if uniqueSort exists (supported by jquery >=1.12 and >=2.2)
				//Fallback to unique function for older jquery versions
				if ($.isFunction($.uniqueSort)) {
					clsName = $.uniqueSort(clsName);
				} else {
					clsName = $.unique(clsName);
				}

				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + '>'+prevMonth.getUTCDate() + '</td>');
				tooltip = null;
				if (prevMonth.getUTCDay() === this.o.weekEnd){
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));

			var monthsTitle = dates[this.o.language].monthsTitle || dates['en'].monthsTitle || 'Months';
			var months = this.picker.find('.datepicker-months')
						.find('.datepicker-switch')
							.text(this.o.maxViewMode < 2 ? monthsTitle : year)
							.end()
						.find('span').removeClass('active');

			$.each(this.dates, function(i, d){
				if (d.getUTCFullYear() === year)
					months.eq(d.getUTCMonth()).addClass('active');
			});

			if (year < startYear || year > endYear){
				months.addClass('disabled');
			}
			if (year === startYear){
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year === endYear){
				months.slice(endMonth+1).addClass('disabled');
			}

			if (this.o.beforeShowMonth !== $.noop){
				var that = this;
				$.each(months, function(i, month){
          var moDate = new Date(year, i, 1);
          var before = that.o.beforeShowMonth(moDate);
					if (before === undefined)
						before = {};
					else if (typeof(before) === 'boolean')
						before = {enabled: before};
					else if (typeof(before) === 'string')
						before = {classes: before};
					if (before.enabled === false && !$(month).hasClass('disabled'))
					    $(month).addClass('disabled');
					if (before.classes)
					    $(month).addClass(before.classes);
					if (before.tooltip)
					    $(month).prop('title', before.tooltip);
				});
			}

			// Generating decade/years picker
			this._fill_yearsView(
				'.datepicker-years',
				'year',
				10,
				1,
				year,
				startYear,
				endYear,
				this.o.beforeShowYear
			);

			// Generating century/decades picker
			this._fill_yearsView(
				'.datepicker-decades',
				'decade',
				100,
				10,
				year,
				startYear,
				endYear,
				this.o.beforeShowDecade
			);

			// Generating millennium/centuries picker
			this._fill_yearsView(
				'.datepicker-centuries',
				'century',
				1000,
				100,
				year,
				startYear,
				endYear,
				this.o.beforeShowCentury
			);
		},

		updateNavArrows: function(){
			if (!this._allow_update)
				return;

			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth();
			switch (this.viewMode){
				case 0:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
				case 1:
				case 2:
				case 3:
				case 4:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() || this.o.maxViewMode < 2){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() || this.o.maxViewMode < 2){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
			}
		},

		click: function(e){
			e.preventDefault();
			e.stopPropagation();

			var target, dir, day, year, month, monthChanged, yearChanged;
			target = $(e.target);

			// Clicked on the switch
			if (target.hasClass('datepicker-switch')){
				this.showMode(1);
			}

			// Clicked on prev or next
			var navArrow = target.closest('.prev, .next');
			if (navArrow.length > 0) {
				dir = DPGlobal.modes[this.viewMode].navStep * (navArrow.hasClass('prev') ? -1 : 1);
				if (this.viewMode === 0){
					this.viewDate = this.moveMonth(this.viewDate, dir);
					this._trigger('changeMonth', this.viewDate);
				} else {
					this.viewDate = this.moveYear(this.viewDate, dir);
					if (this.viewMode === 1){
						this._trigger('changeYear', this.viewDate);
					}
				}
				this.fill();
			}

			// Clicked on today button
			if (target.hasClass('today') && !target.hasClass('day')){
				this.showMode(-2);
				this._setDate(UTCToday(), this.o.todayBtn === 'linked' ? null : 'view');
			}

			// Clicked on clear button
			if (target.hasClass('clear')){
				this.clearDates();
			}

			if (!target.hasClass('disabled')){
				// Clicked on a day
				if (target.hasClass('day')){
					day = parseInt(target.text(), 10) || 1;
					year = this.viewDate.getUTCFullYear();
					month = this.viewDate.getUTCMonth();

					// From last month
					if (target.hasClass('old')){
						if (month === 0) {
							month = 11;
							year = year - 1;
							monthChanged = true;
							yearChanged = true;
						} else {
							month = month - 1;
							monthChanged = true;
 						}
 					}

					// From next month
					if (target.hasClass('new')) {
						if (month === 11){
							month = 0;
							year = year + 1;
							monthChanged = true;
							yearChanged = true;
 						} else {
							month = month + 1;
							monthChanged = true;
 						}
					}
					this._setDate(UTCDate(year, month, day));
					if (yearChanged) {
						this._trigger('changeYear', this.viewDate);
					}
					if (monthChanged) {
						this._trigger('changeMonth', this.viewDate);
					}
				}

				// Clicked on a month
				if (target.hasClass('month')) {
					this.viewDate.setUTCDate(1);
					day = 1;
					month = target.parent().find('span').index(target);
					year = this.viewDate.getUTCFullYear();
					this.viewDate.setUTCMonth(month);
					this._trigger('changeMonth', this.viewDate);
					if (this.o.minViewMode === 1){
						this._setDate(UTCDate(year, month, day));
						this.showMode();
					} else {
						this.showMode(-1);
					}
					this.fill();
				}

				// Clicked on a year
				if (target.hasClass('year')
						|| target.hasClass('decade')
						|| target.hasClass('century')) {
					this.viewDate.setUTCDate(1);

					day = 1;
					month = 0;
					year = parseInt(target.text(), 10)||0;
					this.viewDate.setUTCFullYear(year);

					if (target.hasClass('year')){
						this._trigger('changeYear', this.viewDate);
						if (this.o.minViewMode === 2){
							this._setDate(UTCDate(year, month, day));
						}
					}
					if (target.hasClass('decade')){
						this._trigger('changeDecade', this.viewDate);
						if (this.o.minViewMode === 3){
							this._setDate(UTCDate(year, month, day));
						}
					}
					if (target.hasClass('century')){
						this._trigger('changeCentury', this.viewDate);
						if (this.o.minViewMode === 4){
							this._setDate(UTCDate(year, month, day));
						}
					}

					this.showMode(-1);
					this.fill();
				}
			}

			if (this.picker.is(':visible') && this._focused_from){
				$(this._focused_from).focus();
			}
			delete this._focused_from;
		},

		_toggle_multidate: function(date){
			var ix = this.dates.contains(date);
			if (!date){
				this.dates.clear();
			}

			if (ix !== -1){
				if (this.o.multidate === true || this.o.multidate > 1 || this.o.toggleActive){
					this.dates.remove(ix);
				}
			} else if (this.o.multidate === false) {
				this.dates.clear();
				this.dates.push(date);
			}
			else {
				this.dates.push(date);
			}

			if (typeof this.o.multidate === 'number')
				while (this.dates.length > this.o.multidate)
					this.dates.remove(0);
		},

		_setDate: function(date, which){
			if (!which || which === 'date')
				this._toggle_multidate(date && new Date(date));
			if (!which || which === 'view')
				this.viewDate = date && new Date(date);

			this.fill();
			this.setValue();
			if (!which || which !== 'view') {
				this._trigger('changeDate');
			}
			if (this.inputField){
				this.inputField.change();
			}
			if (this.o.autoclose && (!which || which === 'date')){
				this.hide();
			}
		},

		moveDay: function(date, dir){
			var newDate = new Date(date);
			newDate.setUTCDate(date.getUTCDate() + dir);

			return newDate;
		},

		moveWeek: function(date, dir){
			return this.moveDay(date, dir * 7);
		},

		moveMonth: function(date, dir){
			if (!isValidDate(date))
				return this.o.defaultViewDate;
			if (!dir)
				return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag === 1){
				test = dir === -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function(){
						return new_date.getUTCMonth() === month;
					}
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function(){
						return new_date.getUTCMonth() !== new_month;
					};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				if (new_month < 0 || new_month > 11)
					new_month = (new_month + 12) % 12;
			}
			else {
				// For magnitudes >1, move one month at a time...
				for (var i=0; i < mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){
					return new_month !== new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		moveAvailableDate: function(date, dir, fn){
			do {
				date = this[fn](date, dir);

				if (!this.dateWithinRange(date))
					return false;

				fn = 'moveDay';
			}
			while (this.dateIsDisabled(date));

			return date;
		},

		weekOfDateIsDisabled: function(date){
			return $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;
		},

		dateIsDisabled: function(date){
			return (
				this.weekOfDateIsDisabled(date) ||
				$.grep(this.o.datesDisabled, function(d){
					return isUTCEquals(date, d);
				}).length > 0
			);
		},

		dateWithinRange: function(date){
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function(e){
			if (!this.picker.is(':visible')){
				if (e.keyCode === 40 || e.keyCode === 27) { // allow down to re-show picker
					this.show();
					e.stopPropagation();
        }
				return;
			}
			var dateChanged = false,
				dir, newViewDate,
				focusDate = this.focusDate || this.viewDate;
			switch (e.keyCode){
				case 27: // escape
					if (this.focusDate){
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
					}
					else
						this.hide();
					e.preventDefault();
					e.stopPropagation();
					break;
				case 37: // left
				case 38: // up
				case 39: // right
				case 40: // down
					if (!this.o.keyboardNavigation || this.o.daysOfWeekDisabled.length === 7)
						break;
					dir = e.keyCode === 37 || e.keyCode === 38 ? -1 : 1;
          if (this.viewMode === 0) {
  					if (e.ctrlKey){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');

  						if (newViewDate)
  							this._trigger('changeYear', this.viewDate);
  					}
  					else if (e.shiftKey){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');

  						if (newViewDate)
  							this._trigger('changeMonth', this.viewDate);
  					}
  					else if (e.keyCode === 37 || e.keyCode === 39){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveDay');
  					}
  					else if (!this.weekOfDateIsDisabled(focusDate)){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveWeek');
  					}
          } else if (this.viewMode === 1) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');
          } else if (this.viewMode === 2) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');
          }
					if (newViewDate){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 13: // enter
					if (!this.o.forceParse)
						break;
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
					if (this.o.keyboardNavigation) {
						this._toggle_multidate(focusDate);
						dateChanged = true;
					}
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(':visible')){
						e.preventDefault();
						e.stopPropagation();
						if (this.o.autoclose)
							this.hide();
					}
					break;
				case 9: // tab
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break;
			}
			if (dateChanged){
				if (this.dates.length)
					this._trigger('changeDate');
				else
					this._trigger('clearDate');
				if (this.inputField){
					this.inputField.change();
				}
			}
		},

		showMode: function(dir){
			if (dir){
				this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + dir));
			}
			this.picker
				.children('div')
				.hide()
				.filter('.datepicker-' + DPGlobal.modes[this.viewMode].clsName)
					.show();
			this.updateNavArrows();
		}
	};

	var DateRangePicker = function(element, options){
		$(element).data('datepicker', this);
		this.element = $(element);
		this.inputs = $.map(options.inputs, function(i){
			return i.jquery ? i[0] : i;
		});
		delete options.inputs;

		datepickerPlugin.call($(this.inputs), options)
			.on('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function(i){
			return $(i).data('datepicker');
		});
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function(){
			this.dates = $.map(this.pickers, function(i){
				return i.getUTCDate();
			});
			this.updateRanges();
		},
		updateRanges: function(){
			var range = $.map(this.dates, function(d){
				return d.valueOf();
			});
			$.each(this.pickers, function(i, p){
				p.setRange(range);
			});
		},
		dateUpdated: function(e){
			// `this.updating` is a workaround for preventing infinite recursion
			// between `changeDate` triggering and `setUTCDate` calling.  Until
			// there is a better mechanism.
			if (this.updating)
				return;
			this.updating = true;

			var dp = $(e.target).data('datepicker');

			if (typeof(dp) === "undefined") {
				return;
			}

			var new_date = dp.getUTCDate(),
				i = $.inArray(e.target, this.inputs),
				j = i - 1,
				k = i + 1,
				l = this.inputs.length;
			if (i === -1)
				return;

			$.each(this.pickers, function(i, p){
				if (!p.getUTCDate())
					p.setUTCDate(new_date);
			});

			if (new_date < this.dates[j]){
				// Date being moved earlier/left
				while (j >= 0 && new_date < this.dates[j]){
					this.pickers[j--].setUTCDate(new_date);
				}
			}
			else if (new_date > this.dates[k]){
				// Date being moved later/right
				while (k < l && new_date > this.dates[k]){
					this.pickers[k++].setUTCDate(new_date);
				}
			}
			this.updateDates();

			delete this.updating;
		},
		remove: function(){
			$.map(this.pickers, function(p){ p.remove(); });
			delete this.element.data().datepicker;
		}
	};

	function opts_from_el(el, prefix){
		// Derive options from element data-attrs
		var data = $(el).data(),
			out = {}, inkey,
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
		prefix = new RegExp('^' + prefix.toLowerCase());
		function re_lower(_,a){
			return a.toLowerCase();
		}
		for (var key in data)
			if (prefix.test(key)){
				inkey = key.replace(replace, re_lower);
				out[inkey] = data[key];
			}
		return out;
	}

	function opts_from_locale(lang){
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]){
			lang = lang.split('-')[0];
			if (!dates[lang])
				return;
		}
		var d = dates[lang];
		$.each(locale_opts, function(i,k){
			if (k in d)
				out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	var datepickerPlugin = function(option){
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function(){
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data){
				var elopts = opts_from_el(this, 'date'),
					// Preliminary otions
					xopts = $.extend({}, defaults, elopts, options),
					locopts = opts_from_locale(xopts.language),
					// Options priority: js args, data-attrs, locales, defaults
					opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.hasClass('input-daterange') || opts.inputs){
					$.extend(opts, {
						inputs: opts.inputs || $this.find('input').toArray()
					});
					data = new DateRangePicker(this, opts);
				}
				else {
					data = new Datepicker(this, opts);
				}
				$this.data('datepicker', data);
			}
			if (typeof option === 'string' && typeof data[option] === 'function'){
				internal_return = data[option].apply(data, args);
			}
		});

		if (
			internal_return === undefined ||
			internal_return instanceof Datepicker ||
			internal_return instanceof DateRangePicker
		)
			return this;

		if (this.length > 1)
			throw new Error('Using only allowed for the collection of a single element (' + option + ' function)');
		else
			return internal_return;
	};
	$.fn.datepicker = datepickerPlugin;

	var defaults = $.fn.datepicker.defaults = {
		assumeNearbyYear: false,
		autoclose: false,
		beforeShowDay: $.noop,
		beforeShowMonth: $.noop,
		beforeShowYear: $.noop,
		beforeShowDecade: $.noop,
		beforeShowCentury: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		toggleActive: false,
		daysOfWeekDisabled: [],
		daysOfWeekHighlighted: [],
		datesDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		maxViewMode: 4,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		weekStart: 0,
		disableTouchKeyboard: false,
		enableOnReadonly: true,
		showOnFocus: true,
		zIndexOffset: 10,
		container: 'body',
		immediateUpdates: false,
		title: '',
		templates: {
			leftArrow: '&laquo;',
			rightArrow: '&raquo;'
		}
	};
	var locale_opts = $.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear",
			titleFormat: "MM yyyy"
		}
	};

	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
			},
			{
				clsName: 'decades',
				navFnc: 'FullDecade',
				navStep: 100
			},
			{
				clsName: 'centuries',
				navFnc: 'FullCentury',
				navStep: 1000
		}],
		isLeapYear: function(year){
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
		},
		getDaysInMonth: function(year, month){
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			if (typeof format.toValue === 'function' && typeof format.toDisplay === 'function')
                return format;
            // IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language, assumeNearby){
			if (!date)
				return undefined;
			if (date instanceof Date)
				return date;
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (format.toValue)
                return format.toValue(date, format, language);
            var part_re = /([\-+]\d+)([dmwy])/,
				parts = date.match(/([\-+]\d+)([dmwy])/g),
				fn_map = {
					d: 'moveDay',
					m: 'moveMonth',
					w: 'moveWeek',
					y: 'moveYear'
				},
				dateAliases = {
					yesterday: '-1d',
					today: '+0d',
					tomorrow: '+1d'
				},
				part, dir, i, fn;
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){
				date = new Date();
				for (i=0; i < parts.length; i++){
					part = part_re.exec(parts[i]);
					dir = parseInt(part[1]);
					fn = fn_map[part[2]];
					date = Datepicker.prototype[fn](date, dir);
				}
				return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
			}

			if (typeof dateAliases[date] !== 'undefined') {
				date = dateAliases[date];
				parts = date.match(/([\-+]\d+)([dmwy])/g);

				if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){
					date = new Date();
				  	for (i=0; i < parts.length; i++){
						part = part_re.exec(parts[i]);
						dir = parseInt(part[1]);
						fn = fn_map[part[2]];
						date = Datepicker.prototype[fn](date, dir);
				  	}

			  		return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
				}
			}

			parts = date && date.match(this.nonpunctuation) || [];
			date = new Date();

			function applyNearbyYear(year, threshold){
				if (threshold === true)
					threshold = 10;

				// if year is 2 digits or less, than the user most likely is trying to get a recent century
				if (year < 100){
					year += 2000;
					// if the new year is more than threshold years in advance, use last century
					if (year > ((new Date()).getFullYear()+threshold)){
						year -= 100;
					}
				}

				return year;
			}

			var parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function(d,v){
						return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
					},
					yy: function(d,v){
						return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
					},
					m: function(d,v){
						if (isNaN(d))
							return d;
						v -= 1;
						while (v < 0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() !== v)
							d.setUTCDate(d.getUTCDate()-1);
						return d;
					},
					d: function(d,v){
						return d.setUTCDate(v);
					}
				},
				val, filtered;
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCToday();
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length !== fparts.length){
				fparts = $(fparts).filter(function(i,p){
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			function match_part(){
				var m = this.slice(0, parts[i].length),
					p = parts[i].slice(0, m.length);
				return m.toLowerCase() === p.toLowerCase();
			}
			if (parts.length === fparts.length){
				var cnt;
				for (i=0, cnt = fparts.length; i < cnt; i++){
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)){
						switch (part){
							case 'MM':
								filtered = $(dates[language].months).filter(match_part);
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(match_part);
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				var _date, s;
				for (i=0; i < setters_order.length; i++){
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s])){
						_date = new Date(date);
						setters_map[s](_date, parsed[s]);
						if (!isNaN(_date))
							date = _date;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format, language){
			if (!date)
				return '';
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (format.toDisplay)
                return format.toDisplay(date, format, language);
            var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			date = [];
			var seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
			              '<tr>'+
			                '<th colspan="7" class="datepicker-title"></th>'+
			              '</tr>'+
							'<tr>'+
								'<th class="prev">&laquo;</th>'+
								'<th colspan="5" class="datepicker-switch"></th>'+
								'<th class="next">&raquo;</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>'+
							'<tr>'+
								'<th colspan="7" class="today"></th>'+
							'</tr>'+
							'<tr>'+
								'<th colspan="7" class="clear"></th>'+
							'</tr>'+
						'</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-decades">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-centuries">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;


	/* DATEPICKER NO CONFLICT
	* =================== */

	$.fn.datepicker.noConflict = function(){
		$.fn.datepicker = old;
		return this;
	};

	/* DATEPICKER VERSION
	 * =================== */
	$.fn.datepicker.version = '1.6.4';

	/* DATEPICKER DATA-API
	* ================== */

	$(document).on(
		'focus.datepicker.data-api click.datepicker.data-api',
		'[data-provide="datepicker"]',
		function(e){
			var $this = $(this);
			if ($this.data('datepicker'))
				return;
			e.preventDefault();
			// component click requires us to explicitly show it
			datepickerPlugin.call($this, 'show');
		}
	);
	$(function(){
		datepickerPlugin.call($('[data-provide="datepicker-inline"]'));
	});

}));

/*!
 * iCheck v1.0.2, http://git.io/arlzeA
 * ===================================
 * Powerful jQuery and Zepto plugin for checkboxes and radio buttons customization
 *
 * (c) 2013 Damir Sultanov, http://fronteed.com
 * MIT Licensed
 */

(function($) {

  // Cached vars
  var _iCheck = 'iCheck',
    _iCheckHelper = _iCheck + '-helper',
    _checkbox = 'checkbox',
    _radio = 'radio',
    _checked = 'checked',
    _unchecked = 'un' + _checked,
    _disabled = 'disabled',a
    _determinate = 'determinate',
    _indeterminate = 'in' + _determinate,
    _update = 'update',
    _type = 'type',
    _click = 'click',
    _touch = 'touchbegin.i touchend.i',
    _add = 'addClass',
    _remove = 'removeClass',
    _callback = 'trigger',
    _label = 'label',
    _cursor = 'cursor',
    _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);

  // Plugin init
  $.fn[_iCheck] = function(options, fire) {

    // Walker
    var handle = 'input[type="' + _checkbox + '"], input[type="' + _radio + '"]',
      stack = $(),
      walker = function(object) {
        object.each(function() {
          var self = $(this);

          if (self.is(handle)) {
            stack = stack.add(self);
          } else {
            stack = stack.add(self.find(handle));
          }
        });
      };

    // Check if we should operate with some method
    if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(options)) {

      // Normalize method's name
      options = options.toLowerCase();

      // Find checkboxes and radio buttons
      walker(this);

      return stack.each(function() {
        var self = $(this);

        if (options == 'destroy') {
          tidy(self, 'ifDestroyed');
        } else {
          operate(self, true, options);
        }

        // Fire method's callback
        if ($.isFunction(fire)) {
          fire();
        }
      });

    // Customization
    } else if (typeof options == 'object' || !options) {

      // Check if any options were passed
      var settings = $.extend({
          checkedClass: _checked,
          disabledClass: _disabled,
          indeterminateClass: _indeterminate,
          labelHover: true
        }, options),

        selector = settings.handle,
        hoverClass = settings.hoverClass || 'hover',
        focusClass = settings.focusClass || 'focus',
        activeClass = settings.activeClass || 'active',
        labelHover = !!settings.labelHover,
        labelHoverClass = settings.labelHoverClass || 'hover',

        // Setup clickable area
        area = ('' + settings.increaseArea).replace('%', '') | 0;

      // Selector limit
      if (selector == _checkbox || selector == _radio) {
        handle = 'input[type="' + selector + '"]';
      }

      // Clickable area limit
      if (area < -50) {
        area = -50;
      }

      // Walk around the selector
      walker(this);

      return stack.each(function() {
        var self = $(this);

        // If already customized
        tidy(self);

        var node = this,
          id = node.id,

          // Layer styles
          offset = -area + '%',
          size = 100 + (area * 2) + '%',
          layer = {
            position: 'absolute',
            top: offset,
            left: offset,
            display: 'block',
            width: size,
            height: size,
            margin: 0,
            padding: 0,
            background: '#fff',
            border: 0,
            opacity: 0
          },

          // Choose how to hide input
          hide = _mobile ? {
            position: 'absolute',
            visibility: 'hidden'
          } : area ? layer : {
            position: 'absolute',
            opacity: 0
          },

          // Get proper class
          className = node[_type] == _checkbox ? settings.checkboxClass || 'i' + _checkbox : settings.radioClass || 'i' + _radio,

          // Find assigned labels
          label = $(_label + '[for="' + id + '"]').add(self.closest(_label)),

          // Check ARIA option
          aria = !!settings.aria,

          // Set ARIA placeholder
          ariaID = _iCheck + '-' + Math.random().toString(36).substr(2,6),

          // Parent & helper
          parent = '<div class="' + className + '" ' + (aria ? 'role="' + node[_type] + '" ' : ''),
          helper;

        // Set ARIA "labelledby"
        if (aria) {
          label.each(function() {
            parent += 'aria-labelledby="';

            if (this.id) {
              parent += this.id;
            } else {
              this.id = ariaID;
              parent += ariaID;
            }

            parent += '"';
          });
        }

        // Wrap input
        parent = self.wrap(parent + '/>')[_callback]('ifCreated').parent().append(settings.insert);

        // Layer addition
        helper = $('<ins class="' + _iCheckHelper + '"/>').css(layer).appendTo(parent);

        // Finalize customization
        self.data(_iCheck, {o: settings, s: self.attr('style')}).css(hide);
        !!settings.inheritClass && parent[_add](node.className || '');
        !!settings.inheritID && id && parent.attr('id', _iCheck + '-' + id);
        parent.css('position') == 'static' && parent.css('position', 'relative');
        operate(self, true, _update);

        // Label events
        if (label.length) {
          label.on(_click + '.i mouseover.i mouseout.i ' + _touch, function(event) {
            var type = event[_type],
              item = $(this);

            // Do nothing if input is disabled
            if (!node[_disabled]) {

              // Click
              if (type == _click) {
                if ($(event.target).is('a')) {
                  return;
                }
                operate(self, false, true);

              // Hover state
              } else if (labelHover) {

                // mouseout|touchend
                if (/ut|nd/.test(type)) {
                  parent[_remove](hoverClass);
                  item[_remove](labelHoverClass);
                } else {
                  parent[_add](hoverClass);
                  item[_add](labelHoverClass);
                }
              }

              if (_mobile) {
                event.stopPropagation();
              } else {
                return false;
              }
            }
          });
        }

        // Input events
        self.on(_click + '.i focus.i blur.i keyup.i keydown.i keypress.i', function(event) {
          var type = event[_type],
            key = event.keyCode;

          // Click
          if (type == _click) {
            return false;

          // Keydown
          } else if (type == 'keydown' && key == 32) {
            if (!(node[_type] == _radio && node[_checked])) {
              if (node[_checked]) {
                off(self, _checked);
              } else {
                on(self, _checked);
              }
            }

            return false;

          // Keyup
          } else if (type == 'keyup' && node[_type] == _radio) {
            !node[_checked] && on(self, _checked);

          // Focus/blur
          } else if (/us|ur/.test(type)) {
            parent[type == 'blur' ? _remove : _add](focusClass);
          }
        });

        // Helper events
        helper.on(_click + ' mousedown mouseup mouseover mouseout ' + _touch, function(event) {
          var type = event[_type],

            // mousedown|mouseup
            toggle = /wn|up/.test(type) ? activeClass : hoverClass;

          // Do nothing if input is disabled
          if (!node[_disabled]) {

            // Click
            if (type == _click) {
              operate(self, false, true);

            // Active and hover states
            } else {

              // State is on
              if (/wn|er|in/.test(type)) {

                // mousedown|mouseover|touchbegin
                parent[_add](toggle);

              // State is off
              } else {
                parent[_remove](toggle + ' ' + activeClass);
              }

              // Label hover
              if (label.length && labelHover && toggle == hoverClass) {

                // mouseout|touchend
                label[/ut|nd/.test(type) ? _remove : _add](labelHoverClass);
              }
            }

            if (_mobile) {
              event.stopPropagation();
            } else {
              return false;
            }
          }
        });
      });
    } else {
      return this;
    }
  };

  // Do something with inputs
  function operate(input, direct, method) {
    var node = input[0],
      state = /er/.test(method) ? _indeterminate : /bl/.test(method) ? _disabled : _checked,
      active = method == _update ? {
        checked: node[_checked],
        disabled: node[_disabled],
        indeterminate: input.attr(_indeterminate) == 'true' || input.attr(_determinate) == 'false'
      } : node[state];

    // Check, disable or indeterminate
    if (/^(ch|di|in)/.test(method) && !active) {
      on(input, state);

    // Uncheck, enable or determinate
    } else if (/^(un|en|de)/.test(method) && active) {
      off(input, state);

    // Update
    } else if (method == _update) {

      // Handle states
      for (var each in active) {
        if (active[each]) {
          on(input, each, true);
        } else {
          off(input, each, true);
        }
      }

    } else if (!direct || method == 'toggle') {

      // Helper or label was clicked
      if (!direct) {
        input[_callback]('ifClicked');
      }

      // Toggle checked state
      if (active) {
        if (node[_type] !== _radio) {
          off(input, state);
        }
      } else {
        on(input, state);
      }
    }
  }

  // Add checked, disabled or indeterminate state
  function on(input, state, keep) {
    var node = input[0],
      parent = input.parent(),
      checked = state == _checked,
      indeterminate = state == _indeterminate,
      disabled = state == _disabled,
      callback = indeterminate ? _determinate : checked ? _unchecked : 'enabled',
      regular = option(input, callback + capitalize(node[_type])),
      specific = option(input, state + capitalize(node[_type]));

    // Prevent unnecessary actions
    if (node[state] !== true) {

      // Toggle assigned radio buttons
      if (!keep && state == _checked && node[_type] == _radio && node.name) {
        var form = input.closest('form'),
          inputs = 'input[name="' + node.name + '"]';

        inputs = form.length ? form.find(inputs) : $(inputs);

        inputs.each(function() {
          if (this !== node && $(this).data(_iCheck)) {
            off($(this), state);
          }
        });
      }

      // Indeterminate state
      if (indeterminate) {

        // Add indeterminate state
        node[state] = true;

        // Remove checked state
        if (node[_checked]) {
          off(input, _checked, 'force');
        }

      // Checked or disabled state
      } else {

        // Add checked or disabled state
        if (!keep) {
          node[state] = true;
        }

        // Remove indeterminate state
        if (checked && node[_indeterminate]) {
          off(input, _indeterminate, false);
        }
      }

      // Trigger callbacks
      callbacks(input, checked, state, keep);
    }

    // Add proper cursor
    if (node[_disabled] && !!option(input, _cursor, true)) {
      parent.find('.' + _iCheckHelper).css(_cursor, 'default');
    }

    // Add state class
    parent[_add](specific || option(input, state) || '');

    // Set ARIA attribute
    if (!!parent.attr('role') && !indeterminate) {
      parent.attr('aria-' + (disabled ? _disabled : _checked), 'true');
    }

    // Remove regular state class
    parent[_remove](regular || option(input, callback) || '');
  }

  // Remove checked, disabled or indeterminate state
  function off(input, state, keep) {
    var node = input[0],
      parent = input.parent(),
      checked = state == _checked,
      indeterminate = state == _indeterminate,
      disabled = state == _disabled,
      callback = indeterminate ? _determinate : checked ? _unchecked : 'enabled',
      regular = option(input, callback + capitalize(node[_type])),
      specific = option(input, state + capitalize(node[_type]));

    // Prevent unnecessary actions
    if (node[state] !== false) {

      // Toggle state
      if (indeterminate || !keep || keep == 'force') {
        node[state] = false;
      }

      // Trigger callbacks
      callbacks(input, checked, callback, keep);
    }

    // Add proper cursor
    if (!node[_disabled] && !!option(input, _cursor, true)) {
      parent.find('.' + _iCheckHelper).css(_cursor, 'pointer');
    }

    // Remove state class
    parent[_remove](specific || option(input, state) || '');

    // Set ARIA attribute
    if (!!parent.attr('role') && !indeterminate) {
      parent.attr('aria-' + (disabled ? _disabled : _checked), 'false');
    }

    // Add regular state class
    parent[_add](regular || option(input, callback) || '');
  }

  // Remove all traces
  function tidy(input, callback) {
    if (input.data(_iCheck)) {

      // Remove everything except input
      input.parent().html(input.attr('style', input.data(_iCheck).s || ''));

      // Callback
      if (callback) {
        input[_callback](callback);
      }

      // Unbind events
      input.off('.i').unwrap();
      $(_label + '[for="' + input[0].id + '"]').add(input.closest(_label)).off('.i');
    }
  }

  // Get some option
  function option(input, state, regular) {
    if (input.data(_iCheck)) {
      return input.data(_iCheck).o[state + (regular ? '' : 'Class')];
    }
  }

  // Capitalize some string
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Executable handlers
  function callbacks(input, checked, callback, keep) {
    if (!keep) {
      if (checked) {
        input[_callback]('ifToggled');
      }

      input[_callback]('ifChanged')[_callback]('if' + capitalize(callback));
    }
  }
})(window.jQuery || window.Zepto);

/*!
 * Lightbox for Bootstrap by @ashleydw
 * https://github.com/ashleydw/lightbox
 *
 * License: https://github.com/ashleydw/lightbox/blob/master/LICENSE
 */
+function ($) {

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Lightbox = (function ($) {

	var NAME = 'ekkoLightbox';
	var JQUERY_NO_CONFLICT = $.fn[NAME];

	var Default = {
		title: '',
		footer: '',
		showArrows: true, //display the left / right arrows or not
		type: null, //force the lightbox into image / youtube mode. if null, or not image|youtube|vimeo; detect it
		alwaysShowClose: false, //always show the close button, even if there is no title
		loadingMessage: '<div class="ekko-lightbox-loader"><div><div></div><div></div></div></div>', // http://tobiasahlin.com/spinkit/
		leftArrow: '<span>&#10094;</span>',
		rightArrow: '<span>&#10095;</span>',
		strings: {
			close: 'Close',
			fail: 'Failed to load image:',
			type: 'Could not detect remote target type. Force the type using data-type'
		},
		doc: document, // if in an iframe can specify top.document
		onShow: function onShow() {},
		onShown: function onShown() {},
		onHide: function onHide() {},
		onHidden: function onHidden() {},
		onNavigate: function onNavigate() {},
		onContentLoaded: function onContentLoaded() {}
	};

	var Lightbox = (function () {
		_createClass(Lightbox, null, [{
			key: 'Default',

			/**
    
      Class properties:
    
    _$element: null -> the <a> element currently being displayed
    _$modal: The bootstrap modal generated
       _$modalDialog: The .modal-dialog
       _$modalContent: The .modal-content
       _$modalBody: The .modal-body
       _$modalHeader: The .modal-header
       _$modalFooter: The .modal-footer
    _$lightboxContainerOne: Container of the first lightbox element
    _$lightboxContainerTwo: Container of the second lightbox element
    _$lightboxBody: First element in the container
    _$modalArrows: The overlayed arrows container
   	 _$galleryItems: Other <a>'s available for this gallery
    _galleryName: Name of the current data('gallery') showing
    _galleryIndex: The current index of the _$galleryItems being shown
   	 _config: {} the options for the modal
    _modalId: unique id for the current lightbox
    _padding / _border: CSS properties for the modal container; these are used to calculate the available space for the content
   	 */

			get: function get() {
				return Default;
			}
		}]);

		function Lightbox($element, config) {
			var _this = this;

			_classCallCheck(this, Lightbox);

			this._config = $.extend({}, Default, config);
			this._$modalArrows = null;
			this._galleryIndex = 0;
			this._galleryName = null;
			this._padding = null;
			this._border = null;
			this._titleIsShown = false;
			this._footerIsShown = false;
			this._wantedWidth = 0;
			this._wantedHeight = 0;
			this._modalId = 'ekkoLightbox-' + Math.floor(Math.random() * 1000 + 1);
			this._$element = $element instanceof jQuery ? $element : $($element);

			this._isBootstrap3 = $.fn.modal.Constructor.VERSION[0] == 3;

			var h4 = '<h4 class="modal-title">' + (this._config.title || "&nbsp;") + '</h4>';
			var btn = '<button type="button" class="close" data-dismiss="modal" aria-label="' + this._config.strings.close + '"><span aria-hidden="true">&times;</span></button>';

			var header = '<div class="modal-header"' + (this._config.title || this._config.alwaysShowClose ? '' : ' style="display:none"') + '>' + (this._isBootstrap3 ? btn + h4 : h4 + btn) + '</div>';
			var footer = '<div class="modal-footer"' + (this._config.footer ? '' : ' style="display:none"') + '>' + (this._config.footer || "&nbsp;") + '</div>';
			var body = '<div class="modal-body"><div class="ekko-lightbox-container"><div class="ekko-lightbox-item fade in show"></div><div class="ekko-lightbox-item fade"></div></div></div>';
			var dialog = '<div class="modal-dialog" role="document"><div class="modal-content">' + header + body + footer + '</div></div>';
			$(this._config.doc.body).append('<div id="' + this._modalId + '" class="ekko-lightbox modal fade" tabindex="-1" tabindex="-1" role="dialog" aria-hidden="true">' + dialog + '</div>');

			this._$modal = $('#' + this._modalId, this._config.doc);
			this._$modalDialog = this._$modal.find('.modal-dialog').first();
			this._$modalContent = this._$modal.find('.modal-content').first();
			this._$modalBody = this._$modal.find('.modal-body').first();
			this._$modalHeader = this._$modal.find('.modal-header').first();
			this._$modalFooter = this._$modal.find('.modal-footer').first();

			this._$lightboxContainer = this._$modalBody.find('.ekko-lightbox-container').first();
			this._$lightboxBodyOne = this._$lightboxContainer.find('> div:first-child').first();
			this._$lightboxBodyTwo = this._$lightboxContainer.find('> div:last-child').first();

			this._border = this._calculateBorders();
			this._padding = this._calculatePadding();

			this._galleryName = this._$element.data('gallery');
			if (this._galleryName) {
				this._$galleryItems = $(document.body).find('*[data-gallery="' + this._galleryName + '"]');
				this._galleryIndex = this._$galleryItems.index(this._$element);
				$(document).on('keydown.ekkoLightbox', this._navigationalBinder.bind(this));

				// add the directional arrows to the modal
				if (this._config.showArrows && this._$galleryItems.length > 1) {
					this._$lightboxContainer.append('<div class="ekko-lightbox-nav-overlay"><a href="#">' + this._config.leftArrow + '</a><a href="#">' + this._config.rightArrow + '</a></div>');
					this._$modalArrows = this._$lightboxContainer.find('div.ekko-lightbox-nav-overlay').first();
					this._$lightboxContainer.on('click', 'a:first-child', function (event) {
						event.preventDefault();
						return _this.navigateLeft();
					});
					this._$lightboxContainer.on('click', 'a:last-child', function (event) {
						event.preventDefault();
						return _this.navigateRight();
					});
				}
			}

			this._$modal.on('show.bs.modal', this._config.onShow.bind(this)).on('shown.bs.modal', function () {
				_this._toggleLoading(true);
				_this._handle();
				return _this._config.onShown.call(_this);
			}).on('hide.bs.modal', this._config.onHide.bind(this)).on('hidden.bs.modal', function () {
				if (_this._galleryName) {
					$(document).off('keydown.ekkoLightbox');
					$(window).off('resize.ekkoLightbox');
				}
				_this._$modal.remove();
				return _this._config.onHidden.call(_this);
			}).modal(this._config);

			$(window).on('resize.ekkoLightbox', function () {
				_this._resize(_this._wantedWidth, _this._wantedHeight);
			});
		}

		_createClass(Lightbox, [{
			key: 'element',
			value: function element() {
				return this._$element;
			}
		}, {
			key: 'modal',
			value: function modal() {
				return this._$modal;
			}
		}, {
			key: 'navigateTo',
			value: function navigateTo(index) {

				if (index < 0 || index > this._$galleryItems.length - 1) return this;

				this._galleryIndex = index;

				this._$element = $(this._$galleryItems.get(this._galleryIndex));
				this._handle();
			}
		}, {
			key: 'navigateLeft',
			value: function navigateLeft() {

				if (this._$galleryItems.length === 1) return;

				if (this._galleryIndex === 0) this._galleryIndex = this._$galleryItems.length - 1;else //circular
					this._galleryIndex--;

				this._config.onNavigate.call(this, 'left', this._galleryIndex);
				return this.navigateTo(this._galleryIndex);
			}
		}, {
			key: 'navigateRight',
			value: function navigateRight() {

				if (this._$galleryItems.length === 1) return;

				if (this._galleryIndex === this._$galleryItems.length - 1) this._galleryIndex = 0;else //circular
					this._galleryIndex++;

				this._config.onNavigate.call(this, 'right', this._galleryIndex);
				return this.navigateTo(this._galleryIndex);
			}
		}, {
			key: 'close',
			value: function close() {
				return this._$modal.modal('hide');
			}

			// helper private methods
		}, {
			key: '_navigationalBinder',
			value: function _navigationalBinder(event) {
				event = event || window.event;
				if (event.keyCode === 39) return this.navigateRight();
				if (event.keyCode === 37) return this.navigateLeft();
			}

			// type detection private methods
		}, {
			key: '_detectRemoteType',
			value: function _detectRemoteType(src, type) {

				type = type || false;

				if (!type && this._isImage(src)) type = 'image';
				if (!type && this._getYoutubeId(src)) type = 'youtube';
				if (!type && this._getVimeoId(src)) type = 'vimeo';
				if (!type && this._getInstagramId(src)) type = 'instagram';

				if (!type || ['image', 'youtube', 'vimeo', 'instagram', 'video', 'url'].indexOf(type) < 0) type = 'url';

				return type;
			}
		}, {
			key: '_isImage',
			value: function _isImage(string) {
				return string && string.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
			}
		}, {
			key: '_containerToUse',
			value: function _containerToUse() {
				var _this2 = this;

				// if currently showing an image, fade it out and remove
				var $toUse = this._$lightboxBodyTwo;
				var $current = this._$lightboxBodyOne;

				if (this._$lightboxBodyTwo.hasClass('in')) {
					$toUse = this._$lightboxBodyOne;
					$current = this._$lightboxBodyTwo;
				}

				$current.removeClass('in show');
				setTimeout(function () {
					if (!_this2._$lightboxBodyTwo.hasClass('in')) _this2._$lightboxBodyTwo.empty();
					if (!_this2._$lightboxBodyOne.hasClass('in')) _this2._$lightboxBodyOne.empty();
				}, 500);

				$toUse.addClass('in show');
				return $toUse;
			}
		}, {
			key: '_handle',
			value: function _handle() {

				var $toUse = this._containerToUse();
				this._updateTitleAndFooter();

				var currentRemote = this._$element.attr('data-remote') || this._$element.attr('href');
				var currentType = this._detectRemoteType(currentRemote, this._$element.attr('data-type') || false);

				if (['image', 'youtube', 'vimeo', 'instagram', 'video', 'url'].indexOf(currentType) < 0) return this._error(this._config.strings.type);

				switch (currentType) {
					case 'image':
						this._preloadImage(currentRemote, $toUse);
						this._preloadImageByIndex(this._galleryIndex, 3);
						break;
					case 'youtube':
						this._showYoutubeVideo(currentRemote, $toUse);
						break;
					case 'vimeo':
						this._showVimeoVideo(this._getVimeoId(currentRemote), $toUse);
						break;
					case 'instagram':
						this._showInstagramVideo(this._getInstagramId(currentRemote), $toUse);
						break;
					case 'video':
						this._showHtml5Video(currentRemote, $toUse);
						break;
					default:
						// url
						this._loadRemoteContent(currentRemote, $toUse);
						break;
				}

				return this;
			}
		}, {
			key: '_getYoutubeId',
			value: function _getYoutubeId(string) {
				if (!string) return false;
				var matches = string.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
				return matches && matches[2].length === 11 ? matches[2] : false;
			}
		}, {
			key: '_getVimeoId',
			value: function _getVimeoId(string) {
				return string && string.indexOf('vimeo') > 0 ? string : false;
			}
		}, {
			key: '_getInstagramId',
			value: function _getInstagramId(string) {
				return string && string.indexOf('instagram') > 0 ? string : false;
			}

			// layout private methods
		}, {
			key: '_toggleLoading',
			value: function _toggleLoading(show) {
				show = show || false;
				if (show) {
					this._$modalDialog.css('display', 'none');
					this._$modal.removeClass('in show');
					$('.modal-backdrop').append(this._config.loadingMessage);
				} else {
					this._$modalDialog.css('display', 'block');
					this._$modal.addClass('in show');
					$('.modal-backdrop').find('.ekko-lightbox-loader').remove();
				}
				return this;
			}
		}, {
			key: '_calculateBorders',
			value: function _calculateBorders() {
				return {
					top: this._totalCssByAttribute('border-top-width'),
					right: this._totalCssByAttribute('border-right-width'),
					bottom: this._totalCssByAttribute('border-bottom-width'),
					left: this._totalCssByAttribute('border-left-width')
				};
			}
		}, {
			key: '_calculatePadding',
			value: function _calculatePadding() {
				return {
					top: this._totalCssByAttribute('padding-top'),
					right: this._totalCssByAttribute('padding-right'),
					bottom: this._totalCssByAttribute('padding-bottom'),
					left: this._totalCssByAttribute('padding-left')
				};
			}
		}, {
			key: '_totalCssByAttribute',
			value: function _totalCssByAttribute(attribute) {
				return parseInt(this._$modalDialog.css(attribute), 10) + parseInt(this._$modalContent.css(attribute), 10) + parseInt(this._$modalBody.css(attribute), 10);
			}
		}, {
			key: '_updateTitleAndFooter',
			value: function _updateTitleAndFooter() {
				var title = this._$element.data('title') || "";
				var caption = this._$element.data('footer') || "";

				this._titleIsShown = false;
				if (title || this._config.alwaysShowClose) {
					this._titleIsShown = true;
					this._$modalHeader.css('display', '').find('.modal-title').html(title || "&nbsp;");
				} else this._$modalHeader.css('display', 'none');

				this._footerIsShown = false;
				if (caption) {
					this._footerIsShown = true;
					this._$modalFooter.css('display', '').html(caption);
				} else this._$modalFooter.css('display', 'none');

				return this;
			}
		}, {
			key: '_showYoutubeVideo',
			value: function _showYoutubeVideo(remote, $containerForElement) {
				var id = this._getYoutubeId(remote);
				var query = remote.indexOf('&') > 0 ? remote.substr(remote.indexOf('&')) : '';
				var width = this._$element.data('width') || 560;
				var height = this._$element.data('height') || width / (560 / 315);
				return this._showVideoIframe('//www.youtube.com/embed/' + id + '?badge=0&autoplay=1&html5=1' + query, width, height, $containerForElement);
			}
		}, {
			key: '_showVimeoVideo',
			value: function _showVimeoVideo(id, $containerForElement) {
				var width = 500;
				var height = this._$element.data('height') || width / (560 / 315);
				return this._showVideoIframe(id + '?autoplay=1', width, height, $containerForElement);
			}
		}, {
			key: '_showInstagramVideo',
			value: function _showInstagramVideo(id, $containerForElement) {
				// instagram load their content into iframe's so this can be put straight into the element
				var width = this._$element.data('width') || 612;
				var height = width + 80;
				id = id.substr(-1) !== '/' ? id + '/' : id; // ensure id has trailing slash
				$containerForElement.html('<iframe width="' + width + '" height="' + height + '" src="' + id + 'embed/" frameborder="0" allowfullscreen></iframe>');
				this._resize(width, height);
				this._config.onContentLoaded.call(this);
				if (this._$modalArrows) //hide the arrows when showing video
					this._$modalArrows.css('display', 'none');
				this._toggleLoading(false);
				return this;
			}
		}, {
			key: '_showVideoIframe',
			value: function _showVideoIframe(url, width, height, $containerForElement) {
				// should be used for videos only. for remote content use loadRemoteContent (data-type=url)
				height = height || width; // default to square
				$containerForElement.html('<div class="embed-responsive embed-responsive-16by9"><iframe width="' + width + '" height="' + height + '" src="' + url + '" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe></div>');
				this._resize(width, height);
				this._config.onContentLoaded.call(this);
				if (this._$modalArrows) this._$modalArrows.css('display', 'none'); //hide the arrows when showing video
				this._toggleLoading(false);
				return this;
			}
		}, {
			key: '_showHtml5Video',
			value: function _showHtml5Video(url, $containerForElement) {
				// should be used for videos only. for remote content use loadRemoteContent (data-type=url)
				var width = this._$element.data('width') || 560;
				var height = this._$element.data('height') || width / (560 / 315);
				$containerForElement.html('<div class="embed-responsive embed-responsive-16by9"><video width="' + width + '" height="' + height + '" src="' + url + '" preload="auto" autoplay controls class="embed-responsive-item"></video></div>');
				this._resize(width, height);
				this._config.onContentLoaded.call(this);
				if (this._$modalArrows) this._$modalArrows.css('display', 'none'); //hide the arrows when showing video
				this._toggleLoading(false);
				return this;
			}
		}, {
			key: '_loadRemoteContent',
			value: function _loadRemoteContent(url, $containerForElement) {
				var _this3 = this;

				var width = this._$element.data('width') || 560;
				var height = this._$element.data('height') || 560;

				var disableExternalCheck = this._$element.data('disableExternalCheck') || false;
				this._toggleLoading(false);

				// external urls are loading into an iframe
				// local ajax can be loaded into the container itself
				if (!disableExternalCheck && !this._isExternal(url)) {
					$containerForElement.load(url, $.proxy(function () {
						return _this3._$element.trigger('loaded.bs.modal');l;
					}));
				} else {
					$containerForElement.html('<iframe src="' + url + '" frameborder="0" allowfullscreen></iframe>');
					this._config.onContentLoaded.call(this);
				}

				if (this._$modalArrows) //hide the arrows when remote content
					this._$modalArrows.css('display', 'none');

				this._resize(width, height);
				return this;
			}
		}, {
			key: '_isExternal',
			value: function _isExternal(url) {
				var match = url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
				if (typeof match[1] === "string" && match[1].length > 0 && match[1].toLowerCase() !== location.protocol) return true;

				if (typeof match[2] === "string" && match[2].length > 0 && match[2].replace(new RegExp(':(' + ({
					"http:": 80,
					"https:": 443
				})[location.protocol] + ')?$'), "") !== location.host) return true;

				return false;
			}
		}, {
			key: '_error',
			value: function _error(message) {
				console.error(message);
				this._containerToUse().html(message);
				this._resize(300, 300);
				return this;
			}
		}, {
			key: '_preloadImageByIndex',
			value: function _preloadImageByIndex(startIndex, numberOfTimes) {

				if (!this._$galleryItems) return;

				var next = $(this._$galleryItems.get(startIndex), false);
				if (typeof next == 'undefined') return;

				var src = next.attr('data-remote') || next.attr('href');
				if (next.attr('data-type') === 'image' || this._isImage(src)) this._preloadImage(src, false);

				if (numberOfTimes > 0) return this._preloadImageByIndex(startIndex + 1, numberOfTimes - 1);
			}
		}, {
			key: '_preloadImage',
			value: function _preloadImage(src, $containerForImage) {
				var _this4 = this;

				$containerForImage = $containerForImage || false;

				var img = new Image();
				if ($containerForImage) {
					(function () {

						// if loading takes > 200ms show a loader
						var loadingTimeout = setTimeout(function () {
							$containerForImage.append(_this4._config.loadingMessage);
						}, 200);

						img.onload = function () {
							if (loadingTimeout) clearTimeout(loadingTimeout);
							loadingTimeout = null;
							var image = $('<img />');
							image.attr('src', img.src);
							image.addClass('img-fluid');

							// backward compatibility for bootstrap v3
							image.css('width', '100%');

							$containerForImage.html(image);
							if (_this4._$modalArrows) _this4._$modalArrows.css('display', ''); // remove display to default to css property

							_this4._resize(img.width, img.height);
							_this4._toggleLoading(false);
							return _this4._config.onContentLoaded.call(_this4);
						};
						img.onerror = function () {
							_this4._toggleLoading(false);
							return _this4._error(_this4._config.strings.fail + ('  ' + src));
						};
					})();
				}

				img.src = src;
				return img;
			}
		}, {
			key: '_resize',
			value: function _resize(width, height) {

				height = height || width;
				this._wantedWidth = width;
				this._wantedHeight = height;

				// if width > the available space, scale down the expected width and height
				var widthBorderAndPadding = this._padding.left + this._padding.right + this._border.left + this._border.right;
				var maxWidth = Math.min(width + widthBorderAndPadding, this._config.doc.body.clientWidth);
				if (width + widthBorderAndPadding > maxWidth) {
					height = (maxWidth - widthBorderAndPadding) / width * height;
					width = maxWidth;
				} else width = width + widthBorderAndPadding;

				var headerHeight = 0,
				    footerHeight = 0;

				// as the resize is performed the modal is show, the calculate might fail
				// if so, default to the default sizes
				if (this._footerIsShown) footerHeight = this._$modalFooter.outerHeight(true) || 55;

				if (this._titleIsShown) headerHeight = this._$modalHeader.outerHeight(true) || 67;

				var borderPadding = this._padding.top + this._padding.bottom + this._border.bottom + this._border.top;

				//calculated each time as resizing the window can cause them to change due to Bootstraps fluid margins
				var margins = parseFloat(this._$modalDialog.css('margin-top')) + parseFloat(this._$modalDialog.css('margin-bottom'));

				var maxHeight = Math.min(height, $(window).height() - borderPadding - margins - headerHeight - footerHeight);
				if (height > maxHeight) {
					// if height > the available height, scale down the width
					var factor = Math.min(maxHeight / height, 1);
					width = Math.ceil(factor * width);
				}

				this._$lightboxContainer.css('height', maxHeight);
				this._$modalDialog.css('width', 'auto').css('maxWidth', width);

				if (!this._isBootstrap3) {
					// v4 method is mistakenly protected
					var modal = this._$modal.data('bs.modal');
					if (modal) modal._handleUpdate();
				} else {
					var modal = this._$modal.data('bs.modal');
					if (modal) modal.handleUpdate();
				}
				return this;
			}
		}], [{
			key: '_jQueryInterface',
			value: function _jQueryInterface(config) {
				var _this5 = this;

				config = config || {};
				return this.each(function () {
					var $this = $(_this5);
					var _config = $.extend({}, Lightbox.Default, $this.data(), typeof config === 'object' && config);

					new Lightbox(_this5, _config);
				});
			}
		}]);

		return Lightbox;
	})();

	$.fn[NAME] = Lightbox._jQueryInterface;
	$.fn[NAME].Constructor = Lightbox;
	$.fn[NAME].noConflict = function () {
		$.fn[NAME] = JQUERY_NO_CONFLICT;
		return Lightbox._jQueryInterface;
	};

	return Lightbox;
})(jQuery);
//# sourceMappingURL=ekko-lightbox.js.map

}(jQuery);

/*! AdminLTE app.js
 * ================
 * Main JS application file for AdminLTE v2. This file
 * should be included in all pages. It controls some layout
 * options and implements exclusive AdminLTE plugins.
 *
 * @Author  Almsaeed Studio
 * @Support <http://www.almsaeedstudio.com>
 * @Email   <support@almsaeedstudio.com>
 * @version 2.3.0
 * @license MIT <http://opensource.org/licenses/MIT>
 */

//Make sure jQuery has been loaded before app.js
if (typeof jQuery === "undefined") {
  throw new Error("AdminLTE requires jQuery");
}


/* AdminLTE
 *
 * @type Object
 * @description $.AdminLTE is the main object for the template's app.
 *              It's used for implementing functions and options related
 *              to the template. Keeping everything wrapped in an object
 *              prevents conflict with other plugins and is a better
 *              way to organize our code.
 */
$.AdminLTE = {};

/* --------------------
 * - AdminLTE Options -
 * --------------------
 * Modify these options to suit your implementation
 */
$.AdminLTE.options = {
  //Add slimscroll to navbar menus
  //This requires you to load the slimscroll plugin
  //in every page before app.js
  navbarMenuSlimscroll: true,
  navbarMenuSlimscrollWidth: "3px", //The width of the scroll bar
  navbarMenuHeight: "200px", //The height of the inner menu
  //General animation speed for JS animated elements such as box collapse/expand and
  //sidebar treeview slide up/down. This options accepts an integer as milliseconds,
  //'fast', 'normal', or 'slow'
  animationSpeed: 500,
  //Sidebar push menu toggle button selector
  sidebarToggleSelector: "[data-toggle='offcanvas']",
  //Activate sidebar push menu
  sidebarPushMenu: true,
  //Activate sidebar slimscroll if the fixed layout is set (requires SlimScroll Plugin)
  sidebarSlimScroll: true,
  //Enable sidebar expand on hover effect for sidebar mini
  //This option is forced to true if both the fixed layout and sidebar mini
  //are used together
  sidebarExpandOnHover: false,
  //BoxRefresh Plugin
  enableBoxRefresh: true,
  //Bootstrap.js tooltip
  enableBSToppltip: true,
  BSTooltipSelector: "[data-toggle='tooltip']",
  //Enable Fast Click. Fastclick.js creates a more
  //native touch experience with touch devices. If you
  //choose to enable the plugin, make sure you load the script
  //before AdminLTE's app.js
  enableFastclick: true,
  //Control Sidebar Options
  enableControlSidebar: true,
  controlSidebarOptions: {
    //Which button should trigger the open/close event
    toggleBtnSelector: "[data-toggle='control-sidebar']",
    //The sidebar selector
    selector: ".control-sidebar",
    //Enable slide over content
    slide: true
  },
  //Box Widget Plugin. Enable this plugin
  //to allow boxes to be collapsed and/or removed
  enableBoxWidget: true,
  //Box Widget plugin options
  boxWidgetOptions: {
    boxWidgetIcons: {
      //Collapse icon
      collapse: 'fa-minus',
      //Open icon
      open: 'fa-plus',
      //Remove icon
      remove: 'fa-times'
    },
    boxWidgetSelectors: {
      //Remove button selector
      remove: '[data-widget="remove"]',
      //Collapse button selector
      collapse: '[data-widget="collapse"]'
    }
  },
  //Direct Chat plugin options
  directChat: {
    //Enable direct chat by default
    enable: true,
    //The button to open and close the chat contacts pane
    contactToggleSelector: '[data-widget="chat-pane-toggle"]'
  },
  //Define the set of colors to use globally around the website
  colors: {
    lightBlue: "#3c8dbc",
    red: "#f56954",
    green: "#00a65a",
    aqua: "#00c0ef",
    yellow: "#f39c12",
    blue: "#0073b7",
    navy: "#001F3F",
    teal: "#39CCCC",
    olive: "#3D9970",
    lime: "#01FF70",
    orange: "#FF851B",
    fuchsia: "#F012BE",
    purple: "#8E24AA",
    maroon: "#D81B60",
    black: "#222222",
    gray: "#d2d6de"
  },
  //The standard screen sizes that bootstrap uses.
  //If you change these in the variables.less file, change
  //them here too.
  screenSizes: {
    xs: 480,
    sm: 768,
    md: 992,
    lg: 1200
  }
};

/* ------------------
 * - Implementation -
 * ------------------
 * The next block of code implements AdminLTE's
 * functions and plugins as specified by the
 * options above.
 */
$(function () {
  "use strict";

  //Fix for IE page transitions
  $("body").removeClass("hold-transition");

  //Extend options if external options exist
  if (typeof AdminLTEOptions !== "undefined") {
    $.extend(true,
            $.AdminLTE.options,
            AdminLTEOptions);
  }

  //Easy access to options
  var o = $.AdminLTE.options;

  //Set up the object
  _init();

  //Activate the layout maker
  $.AdminLTE.layout.activate();

  //Enable sidebar tree view controls
  $.AdminLTE.tree('.sidebar');

  //Enable control sidebar
  if (o.enableControlSidebar) {
    $.AdminLTE.controlSidebar.activate();
  }

  //Add slimscroll to navbar dropdown
  if (o.navbarMenuSlimscroll && typeof $.fn.slimscroll != 'undefined') {
    $(".navbar .menu").slimscroll({
      height: o.navbarMenuHeight,
      alwaysVisible: false,
      size: o.navbarMenuSlimscrollWidth
    }).css("width", "100%");
  }

  //Activate sidebar push menu
  if (o.sidebarPushMenu) {
    $.AdminLTE.pushMenu.activate(o.sidebarToggleSelector);
  }

  //Activate Bootstrap tooltip
  if (o.enableBSToppltip) {
      $.widget.bridge('uitooltip', $.ui.tooltip);
    $('body').tooltip({
      selector: o.BSTooltipSelector
    });

  }

  //Activate box widget
  if (o.enableBoxWidget) {
    $.AdminLTE.boxWidget.activate();
  }

  //Activate fast click
  if (o.enableFastclick && typeof FastClick != 'undefined') {
    FastClick.attach(document.body);
  }

  //Activate direct chat widget
  if (o.directChat.enable) {
    $(document).on('click', o.directChat.contactToggleSelector, function () {
      var box = $(this).parents('.direct-chat').first();
      box.toggleClass('direct-chat-contacts-open');
    });
  }

  /*
   * INITIALIZE BUTTON TOGGLE
   * ------------------------
   */
  $('.btn-group[data-toggle="btn-toggle"]').each(function () {
    var group = $(this);
    $(this).find(".btn").on('click', function (e) {
      group.find(".btn.active").removeClass("active");
      $(this).addClass("active");
      e.preventDefault();
    });

  });
});

/* ----------------------------------
 * - Initialize the AdminLTE Object -
 * ----------------------------------
 * All AdminLTE functions are implemented below.
 */
function _init() {
  'use strict';
  /* Layout
   * ======
   * Fixes the layout height in case min-height fails.
   *
   * @type Object
   * @usage $.AdminLTE.layout.activate()
   *        $.AdminLTE.layout.fix()
   *        $.AdminLTE.layout.fixSidebar()
   */
  $.AdminLTE.layout = {
    activate: function () {
      var _this = this;
      _this.fix();
      _this.fixSidebar();
      $(window, ".wrapper").resize(function () {
        _this.fix();
        _this.fixSidebar();
      });
    },
    fix: function () {
      //Get window height and the wrapper height
      var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
      var window_height = $(window).height();
      var sidebar_height = $(".sidebar").height();
      //Set the min-height of the content and sidebar based on the
      //the height of the document.
      if ($("body").hasClass("fixed")) {
        $(".content-wrapper, .right-side").css('min-height', window_height - $('.main-footer').outerHeight());
      } else {
        var postSetWidth;
        if (window_height >= sidebar_height) {
          $(".content-wrapper, .right-side").css('min-height', window_height - neg);
          postSetWidth = window_height - neg;
        } else {
          $(".content-wrapper, .right-side").css('min-height', sidebar_height);
          postSetWidth = sidebar_height;
        }

        //Fix for the control sidebar height
        var controlSidebar = $($.AdminLTE.options.controlSidebarOptions.selector);
        if (typeof controlSidebar !== "undefined") {
          if (controlSidebar.height() > postSetWidth)
            $(".content-wrapper, .right-side").css('min-height', controlSidebar.height());
        }

      }
    },
    fixSidebar: function () {
      //Make sure the body tag has the .fixed class
      if (!$("body").hasClass("fixed")) {
        if (typeof $.fn.slimScroll != 'undefined') {
          $(".sidebar").slimScroll({destroy: true}).height("auto");
        }
        return;
      } else if (typeof $.fn.slimScroll == 'undefined' && window.console) {
        window.console.error("Error: the fixed layout requires the slimscroll plugin!");
      }
      //Enable slimscroll for fixed layout
      if ($.AdminLTE.options.sidebarSlimScroll) {
        if (typeof $.fn.slimScroll != 'undefined') {
          //Destroy if it exists
          $(".sidebar").slimScroll({destroy: true}).height("auto");
          //Add slimscroll
          $(".sidebar").slimscroll({
            height: ($(window).height() - $(".main-header").height()) + "px",
            color: "rgba(0,0,0,0.2)",
            size: "3px"
          });
        }
      }
    }
  };

  /* PushMenu()
   * ==========
   * Adds the push menu functionality to the sidebar.
   *
   * @type Function
   * @usage: $.AdminLTE.pushMenu("[data-toggle='offcanvas']")
   */
  $.AdminLTE.pushMenu = {
    activate: function (toggleBtn) {
      //Get the screen sizes
      var screenSizes = $.AdminLTE.options.screenSizes;

      //Enable sidebar toggle
      $(toggleBtn).on('click', function (e) {
        e.preventDefault();

        //Enable sidebar push menu
        if ($(window).width() > (screenSizes.sm - 1)) {
          if ($("body").hasClass('sidebar-collapse')) {
            $("body").removeClass('sidebar-collapse').trigger('expanded.pushMenu');
          } else {
            $("body").addClass('sidebar-collapse').trigger('collapsed.pushMenu');
          }
        }
        //Handle sidebar push menu for small screens
        else {
          if ($("body").hasClass('sidebar-open')) {
            $("body").removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
          } else {
            $("body").addClass('sidebar-open').trigger('expanded.pushMenu');
          }
        }
      });

      $(".content-wrapper").click(function () {
        //Enable hide menu when clicking on the content-wrapper on small screens
        if ($(window).width() <= (screenSizes.sm - 1) && $("body").hasClass("sidebar-open")) {
          $("body").removeClass('sidebar-open');
        }
      });

      //Enable expand on hover for sidebar mini
      if ($.AdminLTE.options.sidebarExpandOnHover
              || ($('body').hasClass('fixed')
                      && $('body').hasClass('sidebar-mini'))) {
        this.expandOnHover();
      }
    },
    expandOnHover: function () {
      var _this = this;
      var screenWidth = $.AdminLTE.options.screenSizes.sm - 1;
      //Expand sidebar on hover
      $('.main-sidebar').hover(function () {
        if ($('body').hasClass('sidebar-mini')
                && $("body").hasClass('sidebar-collapse')
                && $(window).width() > screenWidth) {
          _this.expand();
        }
      }, function () {
        if ($('body').hasClass('sidebar-mini')
                && $('body').hasClass('sidebar-expanded-on-hover')
                && $(window).width() > screenWidth) {
          _this.collapse();
        }
      });
    },
    expand: function () {
      $("body").removeClass('sidebar-collapse').addClass('sidebar-expanded-on-hover');
    },
    collapse: function () {
      if ($('body').hasClass('sidebar-expanded-on-hover')) {
        $('body').removeClass('sidebar-expanded-on-hover').addClass('sidebar-collapse');
      }
    }
  };

  /* Tree()
   * ======
   * Converts the sidebar into a multilevel
   * tree view menu.
   *
   * @type Function
   * @Usage: $.AdminLTE.tree('.sidebar')
   */
  $.AdminLTE.tree = function (menu) {
    var _this = this;
    var animationSpeed = $.AdminLTE.options.animationSpeed;
    $(document).on('click', menu + ' li a', function (e) {
      //Get the clicked link and the next element
      var $this = $(this);
      var checkElement = $this.next();

      //Check if the next element is a menu and is visible
      if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible'))) {
        //Close the menu
        checkElement.slideUp(animationSpeed, function () {
          checkElement.removeClass('menu-open');
          //Fix the layout in case the sidebar stretches over the height of the window
          //_this.layout.fix();
        });
        checkElement.parent("li").removeClass("active");
      }
      //If the menu is not visible
      else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
        //Get the parent menu
        var parent = $this.parents('ul').first();
        //Close all open menus within the parent
        var ul = parent.find('ul:visible').slideUp(animationSpeed);
        //Remove the menu-open class from the parent
        ul.removeClass('menu-open');
        //Get the parent li
        var parent_li = $this.parent("li");

        //Open the target menu and add the menu-open class
        checkElement.slideDown(animationSpeed, function () {
          //Add the class active to the parent li
          checkElement.addClass('menu-open');
          parent.find('li.active').removeClass('active');
          parent_li.addClass('active');
          //Fix the layout in case the sidebar stretches over the height of the window
          _this.layout.fix();
        });
      }
      //if this isn't a link, prevent the page from being redirected
      if (checkElement.is('.treeview-menu')) {
        e.preventDefault();
      }
    });
  };

  /* ControlSidebar
   * ==============
   * Adds functionality to the right sidebar
   *
   * @type Object
   * @usage $.AdminLTE.controlSidebar.activate(options)
   */
  $.AdminLTE.controlSidebar = {
    //instantiate the object
    activate: function () {
      //Get the object
      var _this = this;
      //Update options
      var o = $.AdminLTE.options.controlSidebarOptions;
      //Get the sidebar
      var sidebar = $(o.selector);
      //The toggle button
      var btn = $(o.toggleBtnSelector);

      //Listen to the click event
      btn.on('click', function (e) {
        e.preventDefault();
        //If the sidebar is not open
        if (!sidebar.hasClass('control-sidebar-open')
                && !$('body').hasClass('control-sidebar-open')) {
          //Open the sidebar
          _this.open(sidebar, o.slide);
        } else {
          _this.close(sidebar, o.slide);
        }
      });

      //If the body has a boxed layout, fix the sidebar bg position
      var bg = $(".control-sidebar-bg");
      _this._fix(bg);

      //If the body has a fixed layout, make the control sidebar fixed
      if ($('body').hasClass('fixed')) {
        _this._fixForFixed(sidebar);
      } else {
        //If the content height is less than the sidebar's height, force max height
        if ($('.content-wrapper, .right-side').height() < sidebar.height()) {
          _this._fixForContent(sidebar);
        }
      }
    },
    //Open the control sidebar
    open: function (sidebar, slide) {
      //Slide over content
      if (slide) {
        sidebar.addClass('control-sidebar-open');
      } else {
        //Push the content by adding the open class to the body instead
        //of the sidebar itself
        $('body').addClass('control-sidebar-open');
      }
    },
    //Close the control sidebar
    close: function (sidebar, slide) {
      if (slide) {
        sidebar.removeClass('control-sidebar-open');
      } else {
        $('body').removeClass('control-sidebar-open');
      }
    },
    _fix: function (sidebar) {
      var _this = this;
      if ($("body").hasClass('layout-boxed')) {
        sidebar.css('position', 'absolute');
        sidebar.height($(".wrapper").height());
        $(window).resize(function () {
          _this._fix(sidebar);
        });
      } else {
        sidebar.css({
          'position': 'fixed',
          'height': 'auto'
        });
      }
    },
    _fixForFixed: function (sidebar) {
      sidebar.css({
        'position': 'fixed',
        'max-height': '100%',
        'overflow': 'auto',
        'padding-bottom': '50px'
      });
    },
    _fixForContent: function (sidebar) {
      $(".content-wrapper, .right-side").css('min-height', sidebar.height());
    }
  };

  /* BoxWidget
   * =========
   * BoxWidget is a plugin to handle collapsing and
   * removing boxes from the screen.
   *
   * @type Object
   * @usage $.AdminLTE.boxWidget.activate()
   *        Set all your options in the main $.AdminLTE.options object
   */
  $.AdminLTE.boxWidget = {
    selectors: $.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors,
    icons: $.AdminLTE.options.boxWidgetOptions.boxWidgetIcons,
    animationSpeed: $.AdminLTE.options.animationSpeed,
    activate: function (_box) {
      var _this = this;
      if (!_box) {
        _box = document; // activate all boxes per default
      }
      //Listen for collapse event triggers
      $(_box).on('click', _this.selectors.collapse, function (e) {
        e.preventDefault();
        _this.collapse($(this));
      });

      //Listen for remove event triggers
      $(_box).on('click', _this.selectors.remove, function (e) {
        e.preventDefault();
        _this.remove($(this));
      });
    },
    collapse: function (element) {
      var _this = this;
      //Find the box parent
      var box = element.parents(".box").first();
      //Find the body and the footer
      var box_content = box.find("> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer");
      if (!box.hasClass("collapsed-box")) {
        //Convert minus into plus
        element.children(":first")
                .removeClass(_this.icons.collapse)
                .addClass(_this.icons.open);
        //Hide the content
        box_content.slideUp(_this.animationSpeed, function () {
          box.addClass("collapsed-box");
        });
      } else {
        //Convert plus into minus
        element.children(":first")
                .removeClass(_this.icons.open)
                .addClass(_this.icons.collapse);
        //Show the content
        box_content.slideDown(_this.animationSpeed, function () {
          box.removeClass("collapsed-box");
        });
      }
    },
    remove: function (element) {
      //Find the box parent
      var box = element.parents(".box").first();
      box.slideUp(this.animationSpeed);
    }
  };
}

/* ------------------
 * - Custom Plugins -
 * ------------------
 * All custom plugins are defined below.
 */

/*
 * BOX REFRESH BUTTON
 * ------------------
 * This is a custom plugin to use with the component BOX. It allows you to add
 * a refresh button to the box. It converts the box's state to a loading state.
 *
 * @type plugin
 * @usage $("#box-widget").boxRefresh( options );
 */
(function ($) {

  "use strict";

  $.fn.boxRefresh = function (options) {

    // Render options
    var settings = $.extend({
      //Refresh button selector
      trigger: ".refresh-btn",
      //File source to be loaded (e.g: ajax/src.php)
      source: "",
      //Callbacks
      onLoadStart: function (box) {
        return box;
      }, //Right after the button has been clicked
      onLoadDone: function (box) {
        return box;
      } //When the source has been loaded

    }, options);

    //The overlay
    var overlay = $('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');

    return this.each(function () {
      //if a source is specified
      if (settings.source === "") {
        if (window.console) {
          window.console.log("Please specify a source first - boxRefresh()");
        }
        return;
      }
      //the box
      var box = $(this);
      //the button
      var rBtn = box.find(settings.trigger).first();

      //On trigger click
      rBtn.on('click', function (e) {
        e.preventDefault();
        //Add loading overlay
        start(box);

        //Perform ajax call
        box.find(".box-body").load(settings.source, function () {
          done(box);
        });
      });
    });

    function start(box) {
      //Add overlay and loading img
      box.append(overlay);

      settings.onLoadStart.call(box);
    }

    function done(box) {
      //Remove overlay and loading img
      box.find(overlay).remove();

      settings.onLoadDone.call(box);
    }

  };

})(jQuery);

/*
 * EXPLICIT BOX ACTIVATION
 * -----------------------
 * This is a custom plugin to use with the component BOX. It allows you to activate
 * a box inserted in the DOM after the app.js was loaded.
 *
 * @type plugin
 * @usage $("#box-widget").activateBox();
 */
(function ($) {

  'use strict';

  $.fn.activateBox = function () {
    $.AdminLTE.boxWidget.activate(this);
  };

})(jQuery);


/**
 * Module containing core application logic.
 * @param  {jQuery} $        Insulated jQuery object
 * @param  {JSON} settings Insulated `window.snipeit.settings` object.
 * @return {IIFE}          Immediately invoked. Returns self.
 */

var lineOptions = {

        legend: {
            position: "bottom"
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                }
            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 20,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold"
                }
            }]
        }

};

var pieOptions = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke: true,
    //String - The colour of each segment stroke
    segmentStrokeColor: "#fff",
    //Number - The width of each segment stroke
    segmentStrokeWidth: 1,
    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout: 50, // This is 0 for Pie charts
    //Number - Amount of animation steps
    animationSteps: 100,
    //String - Animation easing effect
    animationEasing: "easeOutBounce",
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate: true,
    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale: false,
    //Boolean - whether to make the chart responsive to window resizing
    responsive: true,
    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: false,

    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li>" +
    "<i class='fa fa-circle-o' style='color: <%=segments[i].fillColor%>'></i>" +
    "<%if(segments[i].label){%><%=segments[i].label%><%}%> foo</li><%}%></ul>",
    //String - A tooltip template
    tooltipTemplate: "<%=value %> <%=label%> "
};

//-----------------
//- END PIE CHART -
//-----------------



(function($, settings) {
    var Components = {};
    Components.modals = {};

    // confirm delete modal
    Components.modals.confirmDelete = function() {
        var $el = $('table');

        var events = {
            'click': function(evnt) {
                var $context = $(this);
                var $dataConfirmModal = $('#dataConfirmModal');
                var href = $context.attr('href');
                var message = $context.attr('data-content');
                var title = $context.attr('data-title');

                $('#myModalLabel').text(title);
                $dataConfirmModal.find('.modal-body').text(message);
                $('#deleteForm').attr('action', href);
                $dataConfirmModal.modal({
                    show: true
                });
                return false;
            }
        };

        var render = function() {
            $el.on('click', '.delete-asset', events['click']);
        };

        return {
            render: render
        };
    };


    /**
     * Application start point
     * Component definition stays out of load event, execution only happens.
     */
    $(function() {
        new Components.modals.confirmDelete().render();
    });
}(jQuery, window.snipeit.settings));





$(document).ready(function () {

    /*
    * Slideout help menu
    */
     $('.slideout-menu-toggle').on('click', function(event){
       console.log('clicked');
        event.preventDefault();
        // create menu variables
        var slideoutMenu = $('.slideout-menu');
        var slideoutMenuWidth = $('.slideout-menu').width();

        // toggle open class
        slideoutMenu.toggleClass("open");

        // slide menu
        if (slideoutMenu.hasClass("open")) {
         slideoutMenu.show();
            slideoutMenu.animate({
                right: "0px"
            });
        } else {
            slideoutMenu.animate({
                right: -slideoutMenuWidth
            }, "-350px");
         slideoutMenu.fadeOut();
        }
     });

     /*
     * iCheck checkbox plugin
     */

     $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
         checkboxClass: 'icheckbox_minimal-blue',
         radioClass: 'iradio_minimal-blue'
     });


     /*
     * Select2
     */

     var iOS = /iPhone|iPad|iPod/.test(navigator.userAgent)  && !window.MSStream;
     if(!iOS)
     {
        // Vue collision: Avoid overriding a vue select2 instance
        // by checking to see if the item has already been select2'd.
        $('select.select2:not(".select2-hidden-accessible")').each(function (i,obj) {
            {
                $(obj).select2();
            }
        });
     }
     $('.datepicker').datepicker();



});

/* 
 * 
 * Snipe-IT Universal Modal support
 * 
 * Enables modal dialogs to create sub-resources throughout Snipe-IT
 * 
 */

 /* 
 HOW TO USE

 Create a Button looking like this:

 <a href='{{ route('modal.user') }}' data-toggle="modal"  data-target="#createModal" data-dependency="user" data-select='assigned_to' class="btn btn-sm btn-default">New</a>

 If you don't have access to Blade commands (like {{ and }}, etc), you can hard-code a URL as the 'href'

 data-toggle="modal" - required for Bootstrap Modals
 data-target="#createModal" - fixed ID for the modal, do not change
 data-dependency="user" - which Snipe-IT model you're going to be creating.
 data-select="assigned_to" - What is the *ID* of the select-dropdown that you're going to be adding to, if the modal-create was a success? Be on the lookout for duplicate ID's, it will confuse this library!
 class="btn btn-sm btn-default" - makes it look button-ey, feel free to change :)
 */

 $(function () {
  console.warn("Loading up Modal functionality.");

  //handle modal-add-interstitial calls
  var model, select;

  if($('#createModal').length == 0) {
    $('body').append('<div class="modal fade" id="createModal"></div><!-- /.modal -->');
  }

  $('#createModal').on("show.bs.modal", function (event) {
      var link = $(event.relatedTarget);
      model = link.data("dependency");
      select = link.data("select");
      $('#createModal').load(link.attr('href'),function () {
          //do we need to re-select2 this, after load? Probably.
          $('#createModal').find('select.select2').select2();                
      });
  });


  $('#createModal').on('click','#modal-save', function () {
    var data = {};
    console.warn("We are about to SAVE!!! for model: "+model+" and select ID: "+select);
    $('.modal-body input:visible').each(function (index, elem) {
        var bits = elem.id.split("-");
        if (bits[0] === "modal") {
            data[bits[1]] = $(elem).val();
        }
    });
    //this can probably get replaced with a normal 'serialize' instead
    $('.modal-body select:visible').each(function (index, elem) {
        var bits = elem.id.split("-");
        data[bits[1]] = $(elem).val();
    });

    data._token = Laravel.csrfToken;
    //console.log(data);

    $.ajax({
        type: 'POST',
        url: "../api/v1/" + model + "s",
        headers: {
            "X-Requested-With": 'XMLHttpRequest',
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr('content')
        },

        data: data,
        success: function (result) {
            // {"status":"error","messages":{"name":["The name field is required."]}}
            if(result.status == "error") {
                var error_message="";
                for(var field in result.messages) {
                    error_message+="Problem(s) with field '"+field+"': "+result.messages[field].join(", ");
                }
                //window.alert("Error adding "+model+": "+error_message);
                $('#modal_error_msg').html(error_message).show();
                return false;
            }
            var id = result.payload.id;
            var name = result.payload.name || (result.payload.first_name + " " + result.payload.last_name);
            if(!id || !name) {
                console.error("Could not find resulting name or ID from modal-create. Name: "+name+", id: "+id);
                return false;
            }
            $('#createModal').modal('hide');
            $('#createModal').html("");

            // "select" is the original drop-down menu that someone
            // clicked 'add' on to add a new 'thing'
            // this code adds the newly created object to that select
            var selector = document.getElementById(select);
            if(!selector) {
               // console.error("Could not find original <select> element with an id of: "+select);
                return false;
            }
            //console.log(document.getElementById(select));
            // console.dir(selector);
            selector.options[selector.length] = new Option(name, id);
            selector.selectedIndex = selector.length - 1;
            $(selector).trigger("change");
            if(window.fetchCustomFields) {
                fetchCustomFields();
            }

        },
        error: function (result) {
            // console.log('Error: ' + result.responseJSON.error.message );
            msg = result.responseJSON.messages || result.responseJSON.error;
            $('#modal_error_msg').html("Server Error: "+msg).show();
            //window.alert("Unable to add new " + model + " - error: " + msg);
        }



    });
  });
});
