(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{11:function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}},31:function(e,n){e.exports=function(){var e,n,t,o=document.querySelector("html");return o.className+=" "+r(),o.className+=" "+(-1!=(e=window.navigator.userAgent).indexOf("Safari")&&-1===e.indexOf("Chrome")&&-1===e.indexOf("Mobile")&&-1===e.indexOf("iPhone")?"safari":""),o.className+=" "+i(),o.className+=" "+("no-device"===i()&&"ontouchstart"in document.documentElement?"no-touch":"ontouchstart"in document.documentElement?"touch":"no-touch"),o.className+=" "+function(){var e=navigator.userAgent||navigator.vendor||window.opera,n="no-android";/android/i.test(e)&&(n=e.indexOf("Android 5.")>=0?"android-5":"android-4",e.indexOf("Chrome")>=0&&e.indexOf("Safari")&&(n+=" android-chrome"));return n}(),{websocket:"function"==typeof window.WebSocket,webgl:(n=document.createElement("canvas"),t=n.getContext("webgl")||n.getContext("experimental-webgl"),t&&t instanceof WebGLRenderingContext),touch:"ontouchstart"in document.documentElement,isIe:r()};function r(){var e,n,t=window.navigator.userAgent;if((e=t.indexOf("MSIE "))>0)return"ie"+parseInt(t.substring(e+5,t.indexOf(".",e)),10);if(t.indexOf("Trident/")>0){var o=t.indexOf("rv:");return"ie"+parseInt(t.substring(o+3,t.indexOf(".",o)),10)}return(n=t.indexOf("Edge/"))>0?"edge"+parseInt(t.substring(n+5,t.indexOf(".",n)),10):"not-ie"}function i(){var e=navigator.userAgent||navigator.vendor||window.opera;return/windows phone/i.test(e)?"Windows Phone":/android/i.test(e)?"Android":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?"iOS":"no-device"}}()},32:function(e,n){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},5:function(e,n,t){"use strict";t.r(n);var o=t(6),r=t.n(o),i={projectName:"jungles-site",env:"prod",baseUrl:"".concat(window.location.protocol,"//").concat(window.location.host),apiUrl:"".concat(window.location.protocol,"//").concat(window.location.host,"/"),shareUrl:"".concat(window.location.protocol,"//").concat(window.location.host,"/"),assetsUrl:"".concat(window.location.protocol,"//").concat(window.location.host,"/static/")},a=(t(31),t(32)),c=t.n(a),u=t(11),s=t.n(u),d=function(){function e(){r()(this,e)}return s()(e,null,[{key:"load",value:function(e,n){switch(e){case"editorial":Promise.all([t.e(0),t.e(2)]).then(t.bind(null,58)).then((function(e){return e.default.init(n)}));break;case"privacy":Promise.all([t.e(0),t.e(2)]).then(t.bind(null,59)).then((function(e){return e.default.init(n)}));break;default:Promise.all([t.e(0),t.e(7),t.e(3)]).then(t.bind(null,60)).then((function(e){return e.default.init(n)}))}}}]),e}();function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){c()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var w=function(e){var n=document.querySelector(e);return n?n.dataset.route:""},p=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r()(this,e);var t=n.el,o=void 0===t?".js-app":t,i=n.currentRoute;this.el=o,this.currentRoute=i||w(this.el);var a=f({},n,{el:this.el,currentRoute:this.currentRoute});d.load(this.currentRoute,a)};n.default=new function e(){r()(this,e),this.config=i,new p({config:this.config})}},6:function(e,n){e.exports=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}}}]);