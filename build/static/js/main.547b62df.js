!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=3)}([function(t,e,n){"use strict";function r(){}function o(t){try{return t.then}catch(t){return v=t,m}}function i(t,e){try{return t(e)}catch(t){return v=t,m}}function u(t,e,n){try{t(e,n)}catch(t){return v=t,m}}function a(t){if("object"!==typeof this)throw new TypeError("Promises must be constructed via new");if("function"!==typeof t)throw new TypeError("Promise constructor's argument is not a function");this._75=0,this._83=0,this._18=null,this._38=null,t!==r&&y(t,this)}function c(t,e,n){return new t.constructor(function(o,i){var u=new a(r);u.then(o,i),s(t,new p(e,n,u))})}function s(t,e){for(;3===t._83;)t=t._18;if(a._47&&a._47(t),0===t._83)return 0===t._75?(t._75=1,void(t._38=e)):1===t._75?(t._75=2,void(t._38=[t._38,e])):void t._38.push(e);f(t,e)}function f(t,e){b(function(){var n=1===t._83?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._83?l(e.promise,t._18):d(e.promise,t._18));var r=i(n,t._18);r===m?d(e.promise,v):l(e.promise,r)})}function l(t,e){if(e===t)return d(t,new TypeError("A promise cannot be resolved with itself."));if(e&&("object"===typeof e||"function"===typeof e)){var n=o(e);if(n===m)return d(t,v);if(n===t.then&&e instanceof a)return t._83=3,t._18=e,void h(t);if("function"===typeof n)return void y(n.bind(e),t)}t._83=1,t._18=e,h(t)}function d(t,e){t._83=2,t._18=e,a._71&&a._71(t,e),h(t)}function h(t){if(1===t._75&&(s(t,t._38),t._38=null),2===t._75){for(var e=0;e<t._38.length;e++)s(t,t._38[e]);t._38=null}}function p(t,e,n){this.onFulfilled="function"===typeof t?t:null,this.onRejected="function"===typeof e?e:null,this.promise=n}function y(t,e){var n=!1,r=u(t,function(t){n||(n=!0,l(e,t))},function(t){n||(n=!0,d(e,t))});n||r!==m||(n=!0,d(e,v))}var b=n(6),v=null,m={};t.exports=a,a._47=null,a._71=null,a._44=r,a.prototype.then=function(t,e){if(this.constructor!==a)return c(this,t,e);var n=new a(r);return s(this,new p(t,e,n)),n}},function(t,e,n){"use strict";function r(t,e){var n,r={};for(n in t)r[n]=t[n];for(n in e)r[n]=e[n];return r}function o(t,e){var n={};return Object.keys(t).filter(function(t){return-1===e.indexOf(t)}).forEach(function(e){n[e]=t[e]}),n}e.a=r,e.b=o},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"e",function(){return o}),n.d(e,"c",function(){return i}),n.d(e,"l",function(){return u}),n.d(e,"i",function(){return a}),n.d(e,"f",function(){return c}),n.d(e,"d",function(){return s}),n.d(e,"g",function(){return f}),n.d(e,"h",function(){return l}),n.d(e,"j",function(){return d}),n.d(e,"b",function(){return h}),n.d(e,"k",function(){return p});var r="action",o="frame",i="delay",u="time",a="log",c="http",s="event",f="keydown",l="keyup",d="random",h="debounce",p="throttle"},function(t,e,n){n(4),t.exports=n(11)},function(t,e,n){"use strict";"undefined"===typeof Promise&&(n(5).enable(),window.Promise=n(8)),n(9),Object.assign=n(10)},function(t,e,n){"use strict";function r(){s=!1,a._47=null,a._71=null}function o(t){function e(e){(t.allRejections||u(l[e].error,t.whitelist||c))&&(l[e].displayId=f++,t.onUnhandled?(l[e].logged=!0,t.onUnhandled(l[e].displayId,l[e].error)):(l[e].logged=!0,i(l[e].displayId,l[e].error)))}function n(e){l[e].logged&&(t.onHandled?t.onHandled(l[e].displayId,l[e].error):l[e].onUnhandled||(console.warn("Promise Rejection Handled (id: "+l[e].displayId+"):"),console.warn('  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id '+l[e].displayId+".")))}t=t||{},s&&r(),s=!0;var o=0,f=0,l={};a._47=function(t){2===t._83&&l[t._56]&&(l[t._56].logged?n(t._56):clearTimeout(l[t._56].timeout),delete l[t._56])},a._71=function(t,n){0===t._75&&(t._56=o++,l[t._56]={displayId:null,error:n,timeout:setTimeout(e.bind(null,t._56),u(n,c)?100:2e3),logged:!1})}}function i(t,e){console.warn("Possible Unhandled Promise Rejection (id: "+t+"):"),((e&&(e.stack||e))+"").split("\n").forEach(function(t){console.warn("  "+t)})}function u(t,e){return e.some(function(e){return t instanceof e})}var a=n(0),c=[ReferenceError,TypeError,RangeError],s=!1;e.disable=r,e.enable=o},function(t,e,n){"use strict";(function(e){function n(t){u.length||(i(),a=!0),u[u.length]=t}function r(){for(;c<u.length;){var t=c;if(c+=1,u[t].call(),c>s){for(var e=0,n=u.length-c;e<n;e++)u[e]=u[e+c];u.length-=c,c=0}}u.length=0,c=0,a=!1}function o(t){return function(){function e(){clearTimeout(n),clearInterval(r),t()}var n=setTimeout(e,0),r=setInterval(e,50)}}t.exports=n;var i,u=[],a=!1,c=0,s=1024,f="undefined"!==typeof e?e:self,l=f.MutationObserver||f.WebKitMutationObserver;i="function"===typeof l?function(t){var e=1,n=new l(t),r=document.createTextNode("");return n.observe(r,{characterData:!0}),function(){e=-e,r.data=e}}(r):o(r),n.requestFlush=i,n.makeRequestCallFromTimer=o}).call(e,n(7))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"===typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";function r(t){var e=new o(o._44);return e._83=1,e._18=t,e}var o=n(0);t.exports=o;var i=r(!0),u=r(!1),a=r(null),c=r(void 0),s=r(0),f=r("");o.resolve=function(t){if(t instanceof o)return t;if(null===t)return a;if(void 0===t)return c;if(!0===t)return i;if(!1===t)return u;if(0===t)return s;if(""===t)return f;if("object"===typeof t||"function"===typeof t)try{var e=t.then;if("function"===typeof e)return new o(e.bind(t))}catch(t){return new o(function(e,n){n(t)})}return r(t)},o.all=function(t){var e=Array.prototype.slice.call(t);return new o(function(t,n){function r(u,a){if(a&&("object"===typeof a||"function"===typeof a)){if(a instanceof o&&a.then===o.prototype.then){for(;3===a._83;)a=a._18;return 1===a._83?r(u,a._18):(2===a._83&&n(a._18),void a.then(function(t){r(u,t)},n))}var c=a.then;if("function"===typeof c){return void new o(c.bind(a)).then(function(t){r(u,t)},n)}}e[u]=a,0===--i&&t(e)}if(0===e.length)return t([]);for(var i=e.length,u=0;u<e.length;u++)r(u,e[u])})},o.reject=function(t){return new o(function(e,n){n(t)})},o.race=function(t){return new o(function(e,n){t.forEach(function(t){o.resolve(t).then(e,n)})})},o.prototype.catch=function(t){return this.then(null,t)}},function(t,e){!function(t){"use strict";function e(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function n(t){return"string"!==typeof t&&(t=String(t)),t}function r(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return v.iterable&&(e[Symbol.iterator]=function(){return e}),e}function o(t){this.map={},t instanceof o?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function i(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function u(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function a(t){var e=new FileReader,n=u(e);return e.readAsArrayBuffer(t),n}function c(t){var e=new FileReader,n=u(e);return e.readAsText(t),n}function s(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}function f(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"===typeof t)this._bodyText=t;else if(v.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(v.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(v.arrayBuffer&&v.blob&&w(t))this._bodyArrayBuffer=f(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!v.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!g(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(t)}else this._bodyText="";this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},v.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return c(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(s(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},v.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function d(t){var e=t.toUpperCase();return _.indexOf(e)>-1?e:t}function h(t,e){e=e||{};var n=e.body;if(t instanceof h){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new o(e.headers)),this.method=d(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function p(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}}),e}function y(t){var e=new o;return t.split(/\r?\n/).forEach(function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}}),e}function b(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new o(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var v={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(v.arrayBuffer)var m=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],w=function(t){return t&&DataView.prototype.isPrototypeOf(t)},g=ArrayBuffer.isView||function(t){return t&&m.indexOf(Object.prototype.toString.call(t))>-1};o.prototype.append=function(t,r){t=e(t),r=n(r);var o=this.map[t];this.map[t]=o?o+","+r:r},o.prototype.delete=function(t){delete this.map[e(t)]},o.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},o.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},o.prototype.set=function(t,r){this.map[e(t)]=n(r)},o.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},o.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),r(t)},o.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),r(t)},o.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),r(t)},v.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];h.prototype.clone=function(){return new h(this,{body:this._bodyInit})},l.call(h.prototype),l.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},b.error=function(){var t=new b(null,{status:0,statusText:""});return t.type="error",t};var j=[301,302,303,307,308];b.redirect=function(t,e){if(-1===j.indexOf(e))throw new RangeError("Invalid status code");return new b(null,{status:e,headers:{location:t}})},t.Headers=o,t.Request=h,t.Response=b,t.fetch=function(t,e){return new Promise(function(n,r){var o=new h(t,e),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var e="response"in i?i.response:i.responseText;n(new b(e,t))},i.onerror=function(){r(new TypeError("Network request failed"))},i.ontimeout=function(){r(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&v.blob&&(i.responseType="blob"),o.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send("undefined"===typeof o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!==typeof self?self:this)},function(t,e,n){"use strict";function r(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,a,c=r(t),s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var f in n)i.call(n,f)&&(c[f]=n[f]);if(o){a=o(n);for(var l=0;l<a.length;l++)u.call(n,a[l])&&(c[a[l]]=n[a[l]])}}return c}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(12),o=n(13),i={goldie:""},u={fetchGoldie:function(){return Object(o.b)("https://dog.ceo/api/breed/retriever/golden/images/random","goldieFetched")},goldieFetched:function(t){return{goldie:t.message}}},a=function(t){return Object(r.b)("div",{className:"page"},Object(r.b)("div",{className:"header"},Object(r.b)("h2",null,"The Goldie Generator"),Object(r.b)("div",{class:"glitchButton"}),Object(r.b)("script",{src:"https://button.glitch.me/button.js"})),Object(r.b)("div",{className:"image"},Object(r.b)("img",{src:t.goldie,alt:"a majestic golden retriever"})),Object(r.b)("div",{className:"button"},Object(r.b)("button",{className:"button__goldie",onclick:Object(o.a)("fetchGoldie")},"New Goldie!")),Object(r.b)("div",{className:"footer"},Object(r.b)("p",null,"Goldies provided by ",Object(r.b)("a",{href:"https://dog.ceo/dog-api/"},"dog.ceo API"),". Code @",Object(r.b)("a",{href:"https://glitch.com/edit/#!/bubble-bun"},"Glitch"),", remixed from ",Object(r.b)("a",{href:"https://corgi-button.glitch.me"},"Corgi Button"))))};Object(o.c)(r.a)(i,u,a,document.body).fetchGoldie()},function(t,e,n){"use strict";function r(t,e){for(var n=[],r=[],o=arguments.length;o-- >2;)n.push(arguments[o]);for(;n.length;){var i=n.pop();if(i&&i.pop)for(o=i.length;o--;)n.push(i[o]);else null!=i&&!0!==i&&!1!==i&&r.push(i)}return"function"===typeof t?t(e||{},r):{nodeName:t,attributes:e||{},children:r,key:e&&e.key}}function o(t,e,n,r){function o(t){return{nodeName:t.nodeName.toLowerCase(),attributes:{},children:_.call(t.childNodes,function(t){return 3===t.nodeType?t.nodeValue:o(t)})}}function i(t){return"function"===typeof t?i(t(P,A)):null!=t?t:""}function u(){g=!g;var t=i(n);for(r&&!g&&(j=w(r,j,O,O=t)),E=!1;T.length;)T.pop()()}function a(){g||(g=!0,setTimeout(u))}function c(t,e){var n={};for(var r in t)n[r]=t[r];for(var r in e)n[r]=e[r];return n}function s(t,e,n){var r={};return t.length?(r[t[0]]=t.length>1?s(t.slice(1),e,n[t[0]]):e,c(n,r)):e}function f(t,e){for(var n=0;n<t.length;)e=e[t[n++]];return e}function l(t,e,n){for(var r in n)"function"===typeof n[r]?function(r,o){n[r]=function(r){var i=o(r);return"function"===typeof i&&(i=i(f(t,P),n)),i&&i!==(e=f(t,P))&&!i.then&&a(P=s(t,c(e,i),P)),i}}(r,n[r]):l(t.concat(r),e[r]=c(e[r]),n[r]=c(n[r]));return n}function d(t){return t?t.key:null}function h(t){return t.currentTarget.events[t.type](t)}function p(t,e,n,r,o){if("key"===e);else if("style"===e)for(var i in c(r,n)){var u=null==n||null==n[i]?"":n[i];"-"===i[0]?t[e].setProperty(i,u):t[e][i]=u}else"o"===e[0]&&"n"===e[1]?(e=e.slice(2),t.events?r||(r=t.events[e]):t.events={},t.events[e]=n,n?r||t.addEventListener(e,h):t.removeEventListener(e,h)):e in t&&"list"!==e&&!o?t[e]=null==n?"":n:null!=n&&!1!==n&&t.setAttribute(e,n),null!=n&&!1!==n||t.removeAttribute(e)}function y(t,e){var n="string"===typeof t||"number"===typeof t?document.createTextNode(t):(e=e||"svg"===t.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",t.nodeName):document.createElement(t.nodeName),r=t.attributes;if(r){r.oncreate&&T.push(function(){r.oncreate(n)});for(var o=0;o<t.children.length;o++)n.appendChild(y(t.children[o]=i(t.children[o]),e));for(var u in r)p(n,u,r[u],null,e)}return n}function b(t,e,n,r){for(var o in c(e,n))n[o]!==("value"===o||"checked"===o?t[o]:e[o])&&p(t,o,n[o],e[o],r);var i=E?n.oncreate:n.onupdate;i&&T.push(function(){i(t,e)})}function v(t,e){var n=e.attributes;if(n){for(var r=0;r<e.children.length;r++)v(t.childNodes[r],e.children[r]);n.ondestroy&&n.ondestroy(t)}return t}function m(t,e,n){function r(){t.removeChild(v(e,n))}var o=n.attributes&&n.attributes.onremove;o?o(e,r):r()}function w(t,e,n,r,o){if(r===n);else if(null==n||n.nodeName!==r.nodeName){var u=y(r,o);t.insertBefore(u,e),null!=n&&m(t,e,n),e=u}else if(null==n.nodeName)e.nodeValue=r;else{b(e,n.attributes,r.attributes,o=o||"svg"===r.nodeName);for(var a={},c={},s=[],f=n.children,l=r.children,h=0;h<f.length;h++){s[h]=e.childNodes[h];var p=d(f[h]);null!=p&&(a[p]=[s[h],f[h]])}for(var h=0,v=0;v<l.length;){var p=d(f[h]),g=d(l[v]=i(l[v]));if(c[p])h++;else if(null==g||g!==d(f[h+1]))if(null==g||E)null==p&&(w(e,s[h],f[h],l[v],o),v++),h++;else{var _=a[g]||[];p===g?(w(e,_[0],_[1],l[v],o),h++):_[0]?w(e,e.insertBefore(_[0],s[h]),_[1],l[v],o):w(e,s[h],null,l[v],o),c[g]=l[v],v++}else null==p&&m(e,s[h],f[h]),h++}for(;h<f.length;)null==d(f[h])&&m(e,s[h],f[h]),h++;for(var h in a)c[h]||m(e,a[h][0],a[h][1])}return e}var g,_=[].map,j=r&&r.children[0]||null,O=j&&o(j),T=[],E=!0,P=c(t),A=l([],P,c(e));return a(),A}e.b=r,e.a=o},function(t,e,n){"use strict";var r=n(14);n.d(e,"c",function(){return r.a});var o=n(16);n.d(e,"a",function(){return o.a}),n.d(e,"b",function(){return o.b});n(17)},function(t,e,n){"use strict";function r(t,e){function n(t,r){var o=t[r[0]];if(!o)throw new Error("couldn't find action: "+e);return 1===r.length?o:n(o,r.slice(1))}return n(t,e.split("."))}function o(t,e,n,i){if(!d(n))return n;if(d(n[0]))for(var u in n)o(t,e,n[u],i);else if(n.length){var a=r.bind(null,t),c=n[0],s=Object(f.a)(n[1],{event:e}),l=i[c];if(!h(l))throw new Error("no such fx type: "+c);l(s,a)}}function i(t,e){return Object.keys(t||{}).reduce(function(n,r){var u=t[r];return n[r]=h(u)?function(t){return function(n,r){var i=u(t);return i=h(i)?i(n,r):i,o(r,null,i,e)}}:i(u,e),n},{})}function u(t,e,n){return function(r){o(t,r,e,n)}}function a(t,e){function n(t,r){if("object"===typeof r){for(var o in r.attributes){var i=r.attributes[o];d(i)&&(r.attributes[o]=u(t,i,e))}for(var c in r.children)h(r.children[c])?r.children[c]=a(r.children[c],e):n(t,r.children[c],e)}}return function(r,o){var i=t(r,o);return n(o,i,e),i}}function c(t,e){return function(n,r,o,u){var c=i(r,t),s=a(o,t);return e(n,c,s,u)}}function s(t){var e=Object(l.a)();if("function"===typeof t)return c(e,t);for(var n in t)e[n]=t[n];return function(t){return c(e,t)}}e.a=s;var f=n(1),l=n(15),d=Array.isArray,h=function(t){return"function"===typeof t}},function(t,e,n){"use strict";function r(){var t={};t[o.a]=function(t,e){e(t.name)(t.data)},t[o.e]=function(t,e){requestAnimationFrame(function(n){e(t.action)(n)})},t[o.c]=function(t,e){setTimeout(function(){e(t.action)(t.data)},t.duration)},t[o.l]=function(t,e){e(t.action)(performance.now())},t[o.i]=function(t){console.log.apply(null,t.args)},t[o.f]=function(t,e){var n=Object(i.a)({response:"json",error:t.action},t.options),r=Object(i.b)(n,["response","error"]);fetch(t.url,r).then(function(t){if(!t.ok)throw t;return t}).then(function(t){return t[n.response]()}).then(function(n){e(t.action)(n)}).catch(function(t){e(n.error)(t)})},t[o.d]=function(t,e){e(t.action)(t.event)},t[o.g]=function(t,e){document.onkeydown=function(n){e(t.action)(n)}},t[o.h]=function(t,e){document.onkeyup=function(n){e(t.action)(n)}},t[o.j]=function(t,e){var n=Math.random()*(t.max-t.min)+t.min;e(t.action)(n)};var e={};t[o.b]=function(t,n){return function(t,n){clearTimeout(e[t.action]),e[t.action]=setTimeout(function(){n(t.action)(t.data)},t.wait)}(t,n)};var n={};return t[o.k]=function(t,e){return function(t,e){n[t.action]||(e(t.action)(t.data),n[t.action]=!0,setTimeout(function(){n[t.action]=!1},t.rate))}(t,e)},t}e.a=r;var o=n(2),i=n(1)},function(t,e,n){"use strict";function r(t,e){return[i.a,{name:t,data:e}]}function o(t,e,n){return[i.f,{url:t,action:e,options:n}]}e.a=r,e.b=o;var i=n(2)},function(t,e,n){"use strict"}]);
//# sourceMappingURL=main.547b62df.js.map