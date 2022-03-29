!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).EasyScrollBox=e()}(this,(function(){"use strict";
/*! *****************************************************************************
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
    ***************************************************************************** */function t(t,e,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(t):r?r.value:e.get(t)}function e(t,e,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(t,n):o?o.value=n:e.set(t,n),n}var n="object"==typeof global&&global&&global.Object===Object&&global,r="object"==typeof self&&self&&self.Object===Object&&self,o=n||r||Function("return this")(),i=o.Symbol,a=Object.prototype,l=a.hasOwnProperty,f=a.toString,c=i?i.toStringTag:void 0;var s=Object.prototype.toString;var u=i?i.toStringTag:void 0;function d(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?function(t){var e=l.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(t){}var o=f.call(t);return r&&(e?t[c]=n:delete t[c]),o}(t):function(t){return s.call(t)}(t)}var h=/\s/;var v=/^\s+/;function p(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&h.test(t.charAt(e)););return e}(t)+1).replace(v,""):t}function g(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var m=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,b=/^0o[0-7]+$/i,w=parseInt;function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==d(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=p(t);var n=y.test(t);return n||b.test(t)?w(t.slice(2),n?2:8):m.test(t)?NaN:+t}var j=function(){return o.Date.now()},S=Math.max,E=Math.min;function O(t,e,n){var r,o,i,a,l,f,c=0,s=!1,u=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(e){var n=r,i=o;return r=o=void 0,c=e,a=t.apply(i,n)}function v(t){return c=t,l=setTimeout(m,e),s?h(t):a}function p(t){var n=t-f;return void 0===f||n>=e||n<0||u&&t-c>=i}function m(){var t=j();if(p(t))return y(t);l=setTimeout(m,function(t){var n=e-(t-f);return u?E(n,i-(t-c)):n}(t))}function y(t){return l=void 0,d&&r?h(t):(r=o=void 0,a)}function b(){var t=j(),n=p(t);if(r=arguments,o=this,f=t,n){if(void 0===l)return v(f);if(u)return clearTimeout(l),l=setTimeout(m,e),h(f)}return void 0===l&&(l=setTimeout(m,e)),a}return e=T(e)||0,g(n)&&(s=!!n.leading,i=(u="maxWait"in n)?S(T(n.maxWait)||0,e):i,d="trailing"in n?!!n.trailing:d),b.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=f=o=l=void 0},b.flush=function(){return void 0===l?a:y(j())},b}var x,W,L;return x=new WeakMap,W=new WeakMap,L=new WeakMap,class{constructor(n){if(x.set(this,void 0),W.set(this,{throttleTime:500}),L.set(this,void 0),n.ele)if("string"==typeof n.ele){const t=window.document.querySelector(n.ele);if(!t)throw new Error("not found target element in document,plaease check your ele param");e(this,x,t,"f")}else e(this,x,n.ele,"f");else e(this,x,window.document.body,"f");n&&e(this,W,Object.assign(Object.assign({},t(this,W,"f")),n),"f"),this.addListener()}addListener(){e(this,L,function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),O(t,e,{leading:r,maxWait:e,trailing:o})}(this.onScroll.bind(this),t(this,W,"f").throttleTime),"f"),t(this,x,"f").addEventListener("scroll",t(this,L,"f"),!1)}onScroll(e){if(e&&e.target){t(this,W,"f").onScroll&&t(this,W,"f").onScroll(e);const n=e.target.scrollHeight-e.target.scrollTop;n===e.target.scrollHeight&&t(this,W,"f").onScrollTop&&t(this,W,"f").onScrollTop(e),n===e.target.clientHeight&&t(this,W,"f").onScrollBottom&&t(this,W,"f").onScrollBottom(e)}}removeEventListener(){t(this,L,"f")&&t(this,x,"f").removeEventListener("scroll",t(this,L,"f"),!1)}}}));
