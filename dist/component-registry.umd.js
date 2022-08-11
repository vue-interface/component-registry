(function(i,s){typeof exports=="object"&&typeof module!="undefined"?s(exports):typeof define=="function"&&define.amd?define(["exports"],s):(i=typeof globalThis!="undefined"?globalThis:i||self,s(i.ComponentRegistry={}))})(this,function(i){"use strict";/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var s=function(){return s=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s.apply(this,arguments)};function p(r){return r.toLowerCase()}var v=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],_=/[^A-Z0-9]+/gi;function R(r,e){e===void 0&&(e={});for(var t=e.splitRegexp,n=t===void 0?v:t,o=e.stripRegexp,a=o===void 0?_:o,l=e.transform,y=l===void 0?p:l,m=e.delimiter,E=m===void 0?" ":m,u=g(g(r,n,"$1\0$2"),a,"\0"),f=0,d=u.length;u.charAt(f)==="\0";)f++;for(;u.charAt(d-1)==="\0";)d--;return u.slice(f,d).split("\0").map(y).join(E)}function g(r,e,t){return e instanceof RegExp?r.replace(e,t):e.reduce(function(n,o){return n.replace(o,t)},r)}function b(r,e){return e===void 0&&(e={}),R(r,s({delimiter:"."},e))}function c(r,e){return e===void 0&&(e={}),b(r,s({delimiter:"-"},e))}class h{constructor(e={}){this.components=new Map,Object.entries(e).forEach(([t,n])=>{this.register(t,n)})}get(e){const t=this.components.get(e=c(e));if(t)return t;throw new Error(`"${e}" has not been registered yet!`)}register(e,t){return typeof e=="object"?(Object.entries(e).forEach(([n,o])=>{this.register(c(n),o)}),this):(this.components.set(c(e),t),this)}remove(e){return this.components.delete(c(e)),this}reset(){return this.components=new Map,this}}function w(...r){return new h(...r)}i.ComponentRegistry=h,i.factory=w,Object.defineProperty(i,"__esModule",{value:!0}),i[Symbol.toStringTag]="Module"});
