(function(c,f){typeof exports=="object"&&typeof module!="undefined"?f(exports):typeof define=="function"&&define.amd?define(["exports"],f):(c=typeof globalThis!="undefined"?globalThis:c||self,f(c.ComponentRegistry={}))})(this,function(c){"use strict";function f(t){return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(t)}function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function S(t,e,r){return e&&b(t.prototype,e),r&&b(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function v(t,e){return v=Object.setPrototypeOf||function(n,o){return n.__proto__=o,n},v(t,e)}function j(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function s(t,e,r){return j()?s=Reflect.construct:s=function(o,a,i){var u=[null];u.push.apply(u,a);var l=Function.bind.apply(o,u),h=new l;return i&&v(h,i.prototype),h},s.apply(null,arguments)}function _(t,e){return C(t)||E(t,e)||T(t,e)||P()}function C(t){if(Array.isArray(t))return t}function E(t,e){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n=[],o=!0,a=!1,i,u;try{for(r=r.call(t);!(o=(i=r.next()).done)&&(n.push(i.value),!(e&&n.length===e));o=!0);}catch(l){a=!0,u=l}finally{try{!o&&r.return!=null&&r.return()}finally{if(a)throw u}}return n}}function T(t,e){if(!!t){if(typeof t=="string")return w(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(t,e)}}function w(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var y=function(){return y=Object.assign||function(r){for(var n,o=1,a=arguments.length;o<a;o++){n=arguments[o];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])}return r},y.apply(this,arguments)};function I(t){return t.toLowerCase()}var k=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],x=/[^A-Z0-9]+/gi;function L(t,e){e===void 0&&(e={});for(var r=e.splitRegexp,n=r===void 0?k:r,o=e.stripRegexp,a=o===void 0?x:o,i=e.transform,u=i===void 0?I:i,l=e.delimiter,h=l===void 0?" ":l,m=A(A(t,n,"$1\0$2"),a,"\0"),d=0,g=m.length;m.charAt(d)==="\0";)d++;for(;m.charAt(g-1)==="\0";)g--;return m.slice(d,g).split("\0").map(u).join(h)}function A(t,e,r){return e instanceof RegExp?t.replace(e,r):e.reduce(function(n,o){return n.replace(o,r)},t)}function Z(t,e){return e===void 0&&(e={}),L(t,y({delimiter:"."},e))}function p(t,e){return e===void 0&&(e={}),Z(t,y({delimiter:"-"},e))}var R=function(){function t(){var e=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};O(this,t),this.components={},Object.entries(r).forEach(function(n){var o=_(n,2),a=o[0],i=o[1];e.register(a,i)})}return S(t,[{key:"validate",value:function(r){if(f(r)==="object"||typeof r=="function")return r;throw new Error("Invalid data type `".concat(f(r),"`. Should be type `object` or `function`."))}},{key:"get",value:function(r){var n=this.components[r=p(r)];if(n)return n;throw new Error('"'.concat(r,'" has not been registered yet!'))}},{key:"register",value:function(r,n){var o=this;return f(r)==="object"?(Object.entries(r).forEach(function(a){var i=_(a,2),u=i[0],l=i[1];o.register(p(u),l)}),this):(this.components[p(r)]=this.validate(n),this)}},{key:"remove",value:function(r){return delete this.components[p(r)],this}},{key:"reset",value:function(){return this.components={},this}}]),t}();function F(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return s(R,e)}c.ComponentRegistry=R,c.factory=F,Object.defineProperty(c,"__esModule",{value:!0}),c[Symbol.toStringTag]="Module"});