!function(n){var e={};function t(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return n[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)t.d(r,a,function(e){return n[e]}.bind(null,a));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){n.exports=t(1)},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),t(2);const r=t(3);window.addEventListener("load",r.init)},function(n,e,t){},function(n,e,t){"use strict";var r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0}),e.StreamerRoot=e.init=void 0,e.init=function(){new o};const a=r(t(4));class o{constructor(){o.self=this,this.mainButton=document.getElementById("mainButton"),this.mainButton.style.background="#2B2D2F",this.mainButton.style.textAlign="center",this.mainButton.style.position="absolute",this.mainButton.addEventListener("click",this.mainClicked),this.starterTimeline=a.default.timeline({duration:function(){return a.default.random(0,1e3)},update:function(n){console.log("progress : "+Math.round(n.progress)+"%"),console.log("began : "+n.began),console.log("completed : "+n.completed)},begin:function(n){console.log("began : "+n.began)},complete:function(n){console.log("completed : "+n.completed),o.self.introDone()},targets:"#mainButton",direction:"alternate",easing:"easeOutQuad",autoplay:!0,loop:!1}),this.starterTimeline.add({scale:[1.1,1.3,1.8]}),this.starterTimeline.add({color:["#150485","#590995","#c62a88","#03c4a1","#000000"],scale:[1.9,1.5,2]})}mainClicked(){console.log("mainClicked")}initializa(){a.default({targets:"#mainButtonIn",bottom:0,right:0,delay:2e3,height:70,radius:30,scale:1,easing:"easeOutCirc",duration:1e3,update:function(n){console.log("progress : "+Math.round(n.progress)+"%")},complete:function(n){console.log("completed : "+n.completed),o.self.mainButton.children[0].innerHTML="Ahoy!"}})}introDone(){console.log("introDone"),this.mainButton.children[0].innerHTML="...",a.default({targets:"#mainButton",bottom:10,right:10,delay:2e3,width:70,height:70,scale:1,easing:"easeOutCirc",duration:1e3,loop:!1,update:function(n){console.log("progress : "+Math.round(n.progress)+"%"),console.log("began : "+n.began),console.log("completed : "+n.completed),Math.random()>.9&&(Math.random()>.7?o.self.mainButton.children[0].innerHTML="...":Math.random()<.3?o.self.mainButton.children[0].innerHTML="..":o.self.mainButton.children[0].innerHTML=".")},begin:function(n){console.log("began : "+n.began)},complete:function(n){console.log("completed : "+n.completed),o.self.mainButton.children[0].innerHTML="OK",o.self.mainButton.style.height="70px",o.self.initializa()}})}}e.StreamerRoot=o},function(n,e,t){"use strict";t.r(e);var r={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},a={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},o=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],i={CSS:{},springs:{}};function u(n,e,t){return Math.min(Math.max(n,e),t)}function c(n,e){return n.indexOf(e)>-1}function s(n,e){return n.apply(null,e)}var l={arr:function(n){return Array.isArray(n)},obj:function(n){return c(Object.prototype.toString.call(n),"Object")},pth:function(n){return l.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||l.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},nil:function(n){return l.und(n)||null===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return l.hex(n)||l.rgb(n)||l.hsl(n)},key:function(n){return!r.hasOwnProperty(n)&&!a.hasOwnProperty(n)&&"targets"!==n&&"keyframes"!==n}};function f(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map((function(n){return parseFloat(n)})):[]}function d(n,e){var t=f(n),r=u(l.und(t[0])?1:t[0],.1,100),a=u(l.und(t[1])?100:t[1],.1,100),o=u(l.und(t[2])?10:t[2],.1,100),c=u(l.und(t[3])?0:t[3],.1,100),s=Math.sqrt(a/r),d=o/(2*Math.sqrt(a*r)),p=d<1?s*Math.sqrt(1-d*d):0,g=d<1?(d*s-c)/p:-c+s;function h(n){var t=e?e*n/1e3:n;return t=d<1?Math.exp(-t*d*s)*(1*Math.cos(p*t)+g*Math.sin(p*t)):(1+g*t)*Math.exp(-t*s),0===n||1===n?n:1-t}return e?h:function(){var e=i.springs[n];if(e)return e;for(var t=0,r=0;;)if(1===h(t+=1/6)){if(++r>=16)break}else r=0;var a=t*(1/6)*1e3;return i.springs[n]=a,a}}function p(n){return void 0===n&&(n=10),function(e){return Math.ceil(u(e,1e-6,1)*n)*(1/n)}}var g,h,m=function(){function n(n,e){return 1-3*e+3*n}function e(n,e){return 3*e-6*n}function t(n){return 3*n}function r(r,a,o){return((n(a,o)*r+e(a,o))*r+t(a))*r}function a(r,a,o){return 3*n(a,o)*r*r+2*e(a,o)*r+t(a)}return function(n,e,t,o){if(0<=n&&n<=1&&0<=t&&t<=1){var i=new Float32Array(11);if(n!==e||t!==o)for(var u=0;u<11;++u)i[u]=r(.1*u,n,t);return function(a){return n===e&&t===o||0===a||1===a?a:r(c(a),e,o)}}function c(e){for(var o=0,u=1;10!==u&&i[u]<=e;++u)o+=.1;--u;var c=o+.1*((e-i[u])/(i[u+1]-i[u])),s=a(c,n,t);return s>=.001?function(n,e,t,o){for(var i=0;i<4;++i){var u=a(e,t,o);if(0===u)return e;e-=(r(e,t,o)-n)/u}return e}(e,c,n,t):0===s?c:function(n,e,t,a,o){var i,u,c=0;do{(i=r(u=e+(t-e)/2,a,o)-n)>0?t=u:e=u}while(Math.abs(i)>1e-7&&++c<10);return u}(e,o,o+.1,n,t)}}}(),v=(g={linear:function(){return function(n){return n}}},h={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,t=4;n<((e=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===n&&(n=1),void 0===e&&(e=.5);var t=u(n,1,10),r=u(e,.1,2);return function(n){return 0===n||1===n?n:-t*Math.pow(2,10*(n-1))*Math.sin((n-1-r/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(n,e){h[n]=function(){return function(n){return Math.pow(n,e+2)}}})),Object.keys(h).forEach((function(n){var e=h[n];g["easeIn"+n]=e,g["easeOut"+n]=function(n,t){return function(r){return 1-e(n,t)(1-r)}},g["easeInOut"+n]=function(n,t){return function(r){return r<.5?e(n,t)(2*r)/2:1-e(n,t)(-2*r+2)/2}},g["easeOutIn"+n]=function(n,t){return function(r){return r<.5?(1-e(n,t)(1-2*r))/2:(e(n,t)(2*r-1)+1)/2}}})),g);function y(n,e){if(l.fnc(n))return n;var t=n.split("(")[0],r=v[t],a=f(n);switch(t){case"spring":return d(n,e);case"cubicBezier":return s(m,a);case"steps":return s(p,a);default:return s(r,a)}}function b(n){try{return document.querySelectorAll(n)}catch(n){return}}function M(n,e){for(var t=n.length,r=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<t;o++)if(o in n){var i=n[o];e.call(r,i,o,n)&&a.push(i)}return a}function x(n){return n.reduce((function(n,e){return n.concat(l.arr(e)?x(e):e)}),[])}function w(n){return l.arr(n)?n:(l.str(n)&&(n=b(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function B(n,e){return n.some((function(n){return n===e}))}function O(n){var e={};for(var t in n)e[t]=n[t];return e}function P(n,e){var t=O(n);for(var r in n)t[r]=e.hasOwnProperty(r)?e[r]:n[r];return t}function T(n,e){var t=O(n);for(var r in e)t[r]=l.und(n[r])?e[r]:n[r];return t}function k(n){return l.rgb(n)?(t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=n))?"rgba("+t[1]+",1)":e:l.hex(n)?function(n){var e=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(n,e,t,r){return e+e+t+t+r+r})),t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+parseInt(t[1],16)+","+parseInt(t[2],16)+","+parseInt(t[3],16)+",1)"}(n):l.hsl(n)?function(n){var e,t,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),o=parseInt(a[1],10)/360,i=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100,c=a[4]||1;function s(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+(e-n)*(2/3-t)*6:n}if(0==i)e=t=r=u;else{var l=u<.5?u*(1+i):u+i-u*i,f=2*u-l;e=s(f,l,o+1/3),t=s(f,l,o),r=s(f,l,o-1/3)}return"rgba("+255*e+","+255*t+","+255*r+","+c+")"}(n):void 0;var e,t}function C(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function D(n,e){return l.fnc(n)?n(e.target,e.id,e.total):n}function I(n,e){return n.getAttribute(e)}function L(n,e,t){if(B([t,"deg","rad","turn"],C(e)))return e;var r=i.CSS[e+t];if(!l.und(r))return r;var a=document.createElement(n.tagName),o=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=100+t;var u=100/a.offsetWidth;o.removeChild(a);var c=u*parseFloat(e);return i.CSS[e+t]=c,c}function S(n,e,t){if(e in n.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[e]||getComputedStyle(n).getPropertyValue(r)||"0";return t?L(n,a,t):a}}function j(n,e){return l.dom(n)&&!l.inp(n)&&(!l.nil(I(n,e))||l.svg(n)&&n[e])?"attribute":l.dom(n)&&B(o,e)?"transform":l.dom(n)&&"transform"!==e&&S(n,e)?"css":null!=n[e]?"object":void 0}function E(n){if(l.dom(n)){for(var e,t=n.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;e=r.exec(t);)a.set(e[1],e[2]);return a}}function A(n,e,t,r){var a=c(e,"scale")?1:0+function(n){return c(n,"translate")||"perspective"===n?"px":c(n,"rotate")||c(n,"skew")?"deg":void 0}(e),o=E(n).get(e)||a;return t&&(t.transforms.list.set(e,o),t.transforms.last=e),r?L(n,o,r):o}function F(n,e,t,r){switch(j(n,e)){case"transform":return A(n,e,r,t);case"css":return S(n,e,t);case"attribute":return I(n,e);default:return n[e]||0}}function _(n,e){var t=/^(\*=|\+=|-=)/.exec(n);if(!t)return n;var r=C(n)||0,a=parseFloat(e),o=parseFloat(n.replace(t[0],""));switch(t[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function N(n,e){if(l.col(n))return k(n);if(/\s/g.test(n))return n;var t=C(n),r=t?n.substr(0,n.length-t.length):n;return e?r+e:r}function H(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function q(n){for(var e,t=n.points,r=0,a=0;a<t.numberOfItems;a++){var o=t.getItem(a);a>0&&(r+=H(e,o)),e=o}return r}function V(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return function(n){return 2*Math.PI*I(n,"r")}(n);case"rect":return function(n){return 2*I(n,"width")+2*I(n,"height")}(n);case"line":return function(n){return H({x:I(n,"x1"),y:I(n,"y1")},{x:I(n,"x2"),y:I(n,"y2")})}(n);case"polyline":return q(n);case"polygon":return function(n){var e=n.points;return q(n)+H(e.getItem(e.numberOfItems-1),e.getItem(0))}(n)}}function $(n,e){var t=e||{},r=t.el||function(n){for(var e=n.parentNode;l.svg(e)&&l.svg(e.parentNode);)e=e.parentNode;return e}(n),a=r.getBoundingClientRect(),o=I(r,"viewBox"),i=a.width,u=a.height,c=t.viewBox||(o?o.split(" "):[0,0,i,u]);return{el:r,viewBox:c,x:c[0]/1,y:c[1]/1,w:i,h:u,vW:c[2],vH:c[3]}}function W(n,e,t){function r(t){void 0===t&&(t=0);var r=e+t>=1?e+t:0;return n.el.getPointAtLength(r)}var a=$(n.el,n.svg),o=r(),i=r(-1),u=r(1),c=t?1:a.w/a.vW,s=t?1:a.h/a.vH;switch(n.property){case"x":return(o.x-a.x)*c;case"y":return(o.y-a.y)*s;case"angle":return 180*Math.atan2(u.y-i.y,u.x-i.x)/Math.PI}}function z(n,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=N(l.pth(n)?n.totalLength:n,e)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:l.str(n)||e?r.split(t):[]}}function Q(n){return M(n?x(l.arr(n)?n.map(w):w(n)):[],(function(n,e,t){return t.indexOf(n)===e}))}function X(n){var e=Q(n);return e.map((function(n,t){return{target:n,id:t,total:e.length,transforms:{list:E(n)}}}))}function Y(n,e){var t=O(e);if(/^spring/.test(t.easing)&&(t.duration=d(t.easing)),l.arr(n)){var r=n.length;2===r&&!l.obj(n[0])?n={value:n}:l.fnc(e.duration)||(t.duration=e.duration/r)}var a=l.arr(n)?n:[n];return a.map((function(n,t){var r=l.obj(n)&&!l.pth(n)?n:{value:n};return l.und(r.delay)&&(r.delay=t?0:e.delay),l.und(r.endDelay)&&(r.endDelay=t===a.length-1?e.endDelay:0),r})).map((function(n){return T(n,t)}))}function Z(n,e){var t=[],r=e.keyframes;for(var a in r&&(e=T(function(n){for(var e=M(x(n.map((function(n){return Object.keys(n)}))),(function(n){return l.key(n)})).reduce((function(n,e){return n.indexOf(e)<0&&n.push(e),n}),[]),t={},r=function(r){var a=e[r];t[a]=n.map((function(n){var e={};for(var t in n)l.key(t)?t==a&&(e.value=n[t]):e[t]=n[t];return e}))},a=0;a<e.length;a++)r(a);return t}(r),e)),e)l.key(a)&&t.push({name:a,tweens:Y(e[a],n)});return t}function G(n,e){var t;return n.tweens.map((function(r){var a=function(n,e){var t={};for(var r in n){var a=D(n[r],e);l.arr(a)&&1===(a=a.map((function(n){return D(n,e)}))).length&&(a=a[0]),t[r]=a}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}(r,e),o=a.value,i=l.arr(o)?o[1]:o,u=C(i),c=F(e.target,n.name,u,e),s=t?t.to.original:c,f=l.arr(o)?o[0]:s,d=C(f)||C(c),p=u||d;return l.und(i)&&(i=s),a.from=z(f,p),a.to=z(_(i,f),p),a.start=t?t.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=y(a.easing,a.duration),a.isPath=l.pth(o),a.isPathTargetInsideSVG=a.isPath&&l.svg(e.target),a.isColor=l.col(a.from.original),a.isColor&&(a.round=1),t=a,a}))}var R={css:function(n,e,t){return n.style[e]=t},attribute:function(n,e,t){return n.setAttribute(e,t)},object:function(n,e,t){return n[e]=t},transform:function(n,e,t,r,a){if(r.list.set(e,t),e===r.last||a){var o="";r.list.forEach((function(n,e){o+=e+"("+n+") "})),n.style.transform=o}}};function K(n,e){X(n).forEach((function(n){for(var t in e){var r=D(e[t],n),a=n.target,o=C(r),i=F(a,t,o,n),u=_(N(r,o||C(i)),i),c=j(a,t);R[c](a,t,u,n.transforms,!0)}}))}function J(n,e){return M(x(n.map((function(n){return e.map((function(e){return function(n,e){var t=j(n.target,e.name);if(t){var r=G(e,n),a=r[r.length-1];return{type:t,property:e.name,animatable:n,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(n,e)}))}))),(function(n){return!l.und(n)}))}function U(n,e){var t=n.length,r=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=t?Math.max.apply(Math,n.map((function(n){return r(n)+n.duration}))):e.duration,a.delay=t?Math.min.apply(Math,n.map((function(n){return r(n)+n.delay}))):e.delay,a.endDelay=t?a.duration-Math.max.apply(Math,n.map((function(n){return r(n)+n.duration-n.endDelay}))):e.endDelay,a}var nn=0;var en=[],tn=function(){var n;function e(t){for(var r=en.length,a=0;a<r;){var o=en[a];o.paused?(en.splice(a,1),r--):(o.tick(t),a++)}n=a>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){an.suspendWhenDocumentHidden&&(rn()?n=cancelAnimationFrame(n):(en.forEach((function(n){return n._onDocumentVisibility()})),tn()))})),function(){n||rn()&&an.suspendWhenDocumentHidden||!(en.length>0)||(n=requestAnimationFrame(e))}}();function rn(){return!!document&&document.hidden}function an(n){void 0===n&&(n={});var e,t=0,o=0,i=0,c=0,s=null;function l(n){var e=window.Promise&&new Promise((function(n){return s=n}));return n.finished=e,e}var f=function(n){var e=P(r,n),t=P(a,n),o=Z(t,n),i=X(n.targets),u=J(i,o),c=U(u,t),s=nn;return nn++,T(e,{id:s,children:[],animatables:i,animations:u,duration:c.duration,delay:c.delay,endDelay:c.endDelay})}(n);l(f);function d(){var n=f.direction;"alternate"!==n&&(f.direction="normal"!==n?"normal":"reverse"),f.reversed=!f.reversed,e.forEach((function(n){return n.reversed=f.reversed}))}function p(n){return f.reversed?f.duration-n:n}function g(){t=0,o=p(f.currentTime)*(1/an.speed)}function h(n,e){e&&e.seek(n-e.timelineOffset)}function m(n){for(var e=0,t=f.animations,r=t.length;e<r;){var a=t[e],o=a.animatable,i=a.tweens,c=i.length-1,s=i[c];c&&(s=M(i,(function(e){return n<e.end}))[0]||s);for(var l=u(n-s.start-s.delay,0,s.duration)/s.duration,d=isNaN(l)?1:s.easing(l),p=s.to.strings,g=s.round,h=[],m=s.to.numbers.length,v=void 0,y=0;y<m;y++){var b=void 0,x=s.to.numbers[y],w=s.from.numbers[y]||0;b=s.isPath?W(s.value,d*x,s.isPathTargetInsideSVG):w+d*(x-w),g&&(s.isColor&&y>2||(b=Math.round(b*g)/g)),h.push(b)}var B=p.length;if(B){v=p[0];for(var O=0;O<B;O++){p[O];var P=p[O+1],T=h[O];isNaN(T)||(v+=P?T+P:T+" ")}}else v=h[0];R[a.type](o.target,a.property,v,o.transforms),a.currentValue=v,e++}}function v(n){f[n]&&!f.passThrough&&f[n](f)}function y(n){var r=f.duration,a=f.delay,g=r-f.endDelay,y=p(n);f.progress=u(y/r*100,0,100),f.reversePlayback=y<f.currentTime,e&&function(n){if(f.reversePlayback)for(var t=c;t--;)h(n,e[t]);else for(var r=0;r<c;r++)h(n,e[r])}(y),!f.began&&f.currentTime>0&&(f.began=!0,v("begin")),!f.loopBegan&&f.currentTime>0&&(f.loopBegan=!0,v("loopBegin")),y<=a&&0!==f.currentTime&&m(0),(y>=g&&f.currentTime!==r||!r)&&m(r),y>a&&y<g?(f.changeBegan||(f.changeBegan=!0,f.changeCompleted=!1,v("changeBegin")),v("change"),m(y)):f.changeBegan&&(f.changeCompleted=!0,f.changeBegan=!1,v("changeComplete")),f.currentTime=u(y,0,r),f.began&&v("update"),n>=r&&(o=0,f.remaining&&!0!==f.remaining&&f.remaining--,f.remaining?(t=i,v("loopComplete"),f.loopBegan=!1,"alternate"===f.direction&&d()):(f.paused=!0,f.completed||(f.completed=!0,v("loopComplete"),v("complete"),!f.passThrough&&"Promise"in window&&(s(),l(f)))))}return f.reset=function(){var n=f.direction;f.passThrough=!1,f.currentTime=0,f.progress=0,f.paused=!0,f.began=!1,f.loopBegan=!1,f.changeBegan=!1,f.completed=!1,f.changeCompleted=!1,f.reversePlayback=!1,f.reversed="reverse"===n,f.remaining=f.loop,e=f.children;for(var t=c=e.length;t--;)f.children[t].reset();(f.reversed&&!0!==f.loop||"alternate"===n&&1===f.loop)&&f.remaining++,m(f.reversed?f.duration:0)},f._onDocumentVisibility=g,f.set=function(n,e){return K(n,e),f},f.tick=function(n){i=n,t||(t=i),y((i+(o-t))*an.speed)},f.seek=function(n){y(p(n))},f.pause=function(){f.paused=!0,g()},f.play=function(){f.paused&&(f.completed&&f.reset(),f.paused=!1,en.push(f),g(),tn())},f.reverse=function(){d(),f.completed=!f.reversed,g()},f.restart=function(){f.reset(),f.play()},f.remove=function(n){un(Q(n),f)},f.reset(),f.autoplay&&f.play(),f}function on(n,e){for(var t=e.length;t--;)B(n,e[t].animatable.target)&&e.splice(t,1)}function un(n,e){var t=e.animations,r=e.children;on(n,t);for(var a=r.length;a--;){var o=r[a],i=o.animations;on(n,i),i.length||o.children.length||r.splice(a,1)}t.length||r.length||e.pause()}an.version="3.2.1",an.speed=1,an.suspendWhenDocumentHidden=!0,an.running=en,an.remove=function(n){for(var e=Q(n),t=en.length;t--;){un(e,en[t])}},an.get=F,an.set=K,an.convertPx=L,an.path=function(n,e){var t=l.str(n)?b(n)[0]:n,r=e||100;return function(n){return{property:n,el:t,svg:$(t),totalLength:V(t)*(r/100)}}},an.setDashoffset=function(n){var e=V(n);return n.setAttribute("stroke-dasharray",e),e},an.stagger=function(n,e){void 0===e&&(e={});var t=e.direction||"normal",r=e.easing?y(e.easing):null,a=e.grid,o=e.axis,i=e.from||0,u="first"===i,c="center"===i,s="last"===i,f=l.arr(n),d=f?parseFloat(n[0]):parseFloat(n),p=f?parseFloat(n[1]):0,g=C(f?n[1]:n)||0,h=e.start||0+(f?d:0),m=[],v=0;return function(n,e,l){if(u&&(i=0),c&&(i=(l-1)/2),s&&(i=l-1),!m.length){for(var y=0;y<l;y++){if(a){var b=c?(a[0]-1)/2:i%a[0],M=c?(a[1]-1)/2:Math.floor(i/a[0]),x=b-y%a[0],w=M-Math.floor(y/a[0]),B=Math.sqrt(x*x+w*w);"x"===o&&(B=-x),"y"===o&&(B=-w),m.push(B)}else m.push(Math.abs(i-y));v=Math.max.apply(Math,m)}r&&(m=m.map((function(n){return r(n/v)*v}))),"reverse"===t&&(m=m.map((function(n){return o?n<0?-1*n:-n:Math.abs(v-n)})))}return h+(f?(p-d)/v:d)*(Math.round(100*m[e])/100)+g}},an.timeline=function(n){void 0===n&&(n={});var e=an(n);return e.duration=0,e.add=function(t,r){var o=en.indexOf(e),i=e.children;function u(n){n.passThrough=!0}o>-1&&en.splice(o,1);for(var c=0;c<i.length;c++)u(i[c]);var s=T(t,P(a,n));s.targets=s.targets||n.targets;var f=e.duration;s.autoplay=!1,s.direction=e.direction,s.timelineOffset=l.und(r)?f:_(r,f),u(e),e.seek(s.timelineOffset);var d=an(s);u(d),i.push(d);var p=U(i,n);return e.delay=p.delay,e.endDelay=p.endDelay,e.duration=p.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e},an.easing=y,an.penner=v,an.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n},e.default=an}]);
//# sourceMappingURL=bundle.js.map