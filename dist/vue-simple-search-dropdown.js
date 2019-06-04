(function t(e,r){if(typeof exports==="object"&&typeof module==="object")module.exports=r();else if(typeof define==="function"&&define.amd)define("vue-simple-search-dropdown",[],r);else if(typeof exports==="object")exports["vue-simple-search-dropdown"]=r();else e["vue-simple-search-dropdown"]=r()})(window,function(){return function(t){var e={};function r(n){if(e[n]){return e[n].exports}var o=e[n]={i:n,l:false,exports:{}};t[n].call(o.exports,o,o.exports,r);o.l=true;return o.exports}r.m=t;r.c=e;r.d=function(t,e,n){if(!r.o(t,e)){Object.defineProperty(t,e,{enumerable:true,get:n})}};r.r=function(t){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(t,"__esModule",{value:true})};r.t=function(t,e){if(e&1)t=r(t);if(e&8)return t;if(e&4&&typeof t==="object"&&t&&t.__esModule)return t;var n=Object.create(null);r.r(n);Object.defineProperty(n,"default",{enumerable:true,value:t});if(e&2&&typeof t!="string")for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n};r.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};r.d(e,"a",e);return e};r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};r.p="";return r(r.s=29)}([function(t,e){var r=t.exports=typeof window!="undefined"&&window.Math==Math?window:typeof self!="undefined"&&self.Math==Math?self:Function("return this")();if(typeof __g=="number")__g=r},function(t,e,r){var n=r(24)("wks");var o=r(25);var i=r(0).Symbol;var a=typeof i=="function";var u=t.exports=function(t){return n[t]||(n[t]=a&&i[t]||(a?i:o)("Symbol."+t))};u.store=n},function(t,e,r){var n=r(13);var o=r(23);t.exports=r(6)?function(t,e,r){return n.f(t,e,o(1,r))}:function(t,e,r){t[e]=r;return t}},function(t,e){t.exports={}},function(t,e){var r=t.exports={version:"2.6.9"};if(typeof __e=="number")__e=r},function(t,e,r){var n=r(14);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,r){t.exports=!r(21)(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e,r){"use strict";r.r(e);var n=r(9);var o=r.n(n);for(var i in n)if(i!=="default")(function(t){r.d(e,t,function(){return n[t]})})(i);e["default"]=o.a},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:true});var n=r(30);var o=i(n);function i(t){return t&&t.__esModule?t:{default:t}}e.default={name:"Dropdown",template:"Dropdown",props:{name:{type:String,required:false,default:"dropdown",note:"Input name"},options:{type:Array,required:true,default:[],note:"Options of dropdown. An array of options with id and name"},placeholder:{type:String,required:false,default:"Please select an option",note:"Placeholder of dropdown"},disabled:{type:Boolean,required:false,default:false,note:"Disable the dropdown"},maxItem:{type:Number,required:false,default:6,note:"Max items showing"}},data:function t(){return{selected:{},optionsShown:false,searchFilter:""}},created:function t(){this.$emit("selected",this.selected)},computed:{filteredOptions:function t(){var e=[];var r=new RegExp(this.searchFilter,"ig");var n=true;var i=false;var a=undefined;try{for(var u=(0,o.default)(this.options),s;!(n=(s=u.next()).done);n=true){var f=s.value;if(this.searchFilter.length<1||f.name.match(r)){if(e.length<this.maxItem)e.push(f)}}}catch(t){i=true;a=t}finally{try{if(!n&&u.return){u.return()}}finally{if(i){throw a}}}return e}},methods:{selectOption:function t(e){this.selected=e;this.optionsShown=false;this.searchFilter=this.selected.name;this.$emit("selected",this.selected)},showOptions:function t(){if(!this.disabled){this.searchFilter="";this.optionsShown=true}},exit:function t(){if(!this.selected.id){this.selected={};this.searchFilter=""}else{this.searchFilter=this.selected.name}this.$emit("selected",this.selected);this.optionsShown=false},keyMonitor:function t(e){if(e.key==="Enter"&&this.filteredOptions[0])this.selectOption(this.filteredOptions[0])}},watch:{searchFilter:function t(){if(this.filteredOptions.length===0){this.selected={}}else{this.selected=this.filteredOptions[0]}this.$emit("filter",this.searchFilter)}}}},function(t,e,r){var n=r(60);if(typeof n==="string")n=[[t.i,n,""]];if(n.locals)t.exports=n.locals;var o=r(62).default;var i=o("7b6798ac",n,false,{});if(false){}},function(t,e,r){var n=r(36);var o=r(12);t.exports=function(t){return n(o(t))}},function(t,e){t.exports=function(t){if(t==undefined)throw TypeError("Can't call method on  "+t);return t}},function(t,e,r){var n=r(5);var o=r(40);var i=r(41);var a=Object.defineProperty;e.f=r(6)?Object.defineProperty:function t(e,r,u){n(e);r=i(r,true);n(u);if(o)try{return a(e,r,u)}catch(t){}if("get"in u||"set"in u)throw TypeError("Accessors not supported!");if("value"in u)e[r]=u.value;return e}},function(t,e){t.exports=function(t){return typeof t==="object"?t!==null:typeof t==="function"}},function(t,e){var r=Math.ceil;var n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e,r){var n=r(24)("keys");var o=r(25);t.exports=function(t){return n[t]||(n[t]=o(t))}},function(t,e,r){"use strict";var n=function(){var t=this;var e=t.$createElement;var r=t._self._c||e;return t.options?r("div",{staticClass:"dropdown"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchFilter,expression:"searchFilter"}],staticClass:"dropdown-input",attrs:{name:t.name,disabled:t.disabled,placeholder:t.placeholder,autocomplete:"off"},domProps:{value:t.searchFilter},on:{focus:function(e){return t.showOptions()},blur:function(e){return t.exit()},keyup:t.keyMonitor,input:function(e){if(e.target.composing){return}t.searchFilter=e.target.value}}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.optionsShown,expression:"optionsShown"}],staticClass:"dropdown-content"},t._l(t.filteredOptions,function(e,n){return r("div",{key:n,staticClass:"dropdown-item",on:{mousedown:function(r){return t.selectOption(e)}}},[t._v("\n        "+t._s(e.name||e.id||"-")+"\n    ")])}),0)]):t._e()};var o=[];n._withStripped=true;r.d(e,"a",function(){return n});r.d(e,"b",function(){return o})},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e,r){"use strict";var n=r(20);var o=r(37);var i=r(42);var a=r(2);var u=r(3);var s=r(43);var f=r(27);var c=r(52);var l=r(1)("iterator");var d=!([].keys&&"next"in[].keys());var v="@@iterator";var p="keys";var h="values";var y=function(){return this};t.exports=function(t,e,r,m,g,x,w){s(r,e,m);var b=function(t){if(!d&&t in j)return j[t];switch(t){case p:return function e(){return new r(this,t)};case h:return function e(){return new r(this,t)}}return function e(){return new r(this,t)}};var _=e+" Iterator";var S=g==h;var O=false;var j=t.prototype;var M=j[l]||j[v]||g&&j[g];var C=M||b(g);var T=g?!S?C:b("entries"):undefined;var L=e=="Array"?j.entries||M:M;var k,P,E;if(L){E=c(L.call(new t));if(E!==Object.prototype&&E.next){f(E,_,true);if(!n&&typeof E[l]!="function")a(E,l,y)}}if(S&&M&&M.name!==h){O=true;C=function t(){return M.call(this)}}if((!n||w)&&(d||O||!j[l])){a(j,l,C)}u[e]=C;u[_]=y;if(g){k={values:S?C:b(h),keys:x?C:b(p),entries:T};if(w)for(P in k){if(!(P in j))i(j,P,k[P])}else o(o.P+o.F*(d||O),e,k)}return k}},function(t,e){t.exports=true},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return true}}},function(t,e,r){var n=r(14);var o=r(0).document;var i=n(o)&&n(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){t.exports=function(t,e){return{enumerable:!(t&1),configurable:!(t&2),writable:!(t&4),value:e}}},function(t,e,r){var n=r(4);var o=r(0);var i="__core-js_shared__";var a=o[i]||(o[i]={});(t.exports=function(t,e){return a[t]||(a[t]=e!==undefined?e:{})})("versions",[]).push({version:n.version,mode:r(20)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){var r=0;var n=Math.random();t.exports=function(t){return"Symbol(".concat(t===undefined?"":t,")_",(++r+n).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,r){var n=r(13).f;var o=r(7);var i=r(1)("toStringTag");t.exports=function(t,e,r){if(t&&!o(t=r?t:t.prototype,i))n(t,i,{configurable:true,value:e})}},function(t,e,r){"use strict";r.d(e,"a",function(){return n});function n(t,e,r,n,o,i,a,u){var s=typeof t==="function"?t.options:t;if(e){s.render=e;s.staticRenderFns=r;s._compiled=true}if(n){s.functional=true}if(i){s._scopeId="data-v-"+i}var f;if(a){f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext;if(!t&&typeof __VUE_SSR_CONTEXT__!=="undefined"){t=__VUE_SSR_CONTEXT__}if(o){o.call(this,t)}if(t&&t._registeredComponents){t._registeredComponents.add(a)}};s._ssrRegister=f}else if(o){f=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o}if(f){if(s.functional){s._injectStyles=f;var c=s.render;s.render=function t(e,r){f.call(r);return c(e,r)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,f):[f]}}return{exports:t,options:s}}},function(t,e,r){"use strict";r.r(e);var n=r(17);var o=r(8);for(var i in o)if(i!=="default")(function(t){r.d(e,t,function(){return o[t]})})(i);var a=r(59);var u=r(28);var s=Object(u["a"])(o["default"],n["a"],n["b"],false,null,"6149e08a",null);if(false){var f}s.options.__file="src/Dropdown.vue";e["default"]=s.exports},function(t,e,r){t.exports={default:r(31),__esModule:true}},function(t,e,r){r(32);r(54);t.exports=r(56)},function(t,e,r){r(33);var n=r(0);var o=r(2);var i=r(3);var a=r(1)("toStringTag");var u=("CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,"+"DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,"+"MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,"+"SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,"+"TextTrackList,TouchList").split(",");for(var s=0;s<u.length;s++){var f=u[s];var c=n[f];var l=c&&c.prototype;if(l&&!l[a])o(l,a,f);i[f]=i.Array}},function(t,e,r){"use strict";var n=r(34);var o=r(35);var i=r(3);var a=r(11);t.exports=r(19)(Array,"Array",function(t,e){this._t=a(t);this._i=0;this._k=e},function(){var t=this._t;var e=this._k;var r=this._i++;if(!t||r>=t.length){this._t=undefined;return o(1)}if(e=="keys")return o(0,r);if(e=="values")return o(0,t[r]);return o(0,[r,t[r]])},"values");i.Arguments=i.Array;n("keys");n("values");n("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,r){var n=r(18);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return n(t)=="String"?t.split(""):Object(t)}},function(t,e,r){var n=r(0);var o=r(4);var i=r(38);var a=r(2);var u=r(7);var s="prototype";var f=function(t,e,r){var c=t&f.F;var l=t&f.G;var d=t&f.S;var v=t&f.P;var p=t&f.B;var h=t&f.W;var y=l?o:o[e]||(o[e]={});var m=y[s];var g=l?n:d?n[e]:(n[e]||{})[s];var x,w,b;if(l)r=e;for(x in r){w=!c&&g&&g[x]!==undefined;if(w&&u(y,x))continue;b=w?g[x]:r[x];y[x]=l&&typeof g[x]!="function"?r[x]:p&&w?i(b,n):h&&g[x]==b?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};e[s]=t[s];return e}(b):v&&typeof b=="function"?i(Function.call,b):b;if(v){(y.virtual||(y.virtual={}))[x]=b;if(t&f.R&&m&&!m[x])a(m,x,b)}}};f.F=1;f.G=2;f.S=4;f.P=8;f.B=16;f.W=32;f.U=64;f.R=128;t.exports=f},function(t,e,r){var n=r(39);t.exports=function(t,e,r){n(t);if(e===undefined)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if(typeof t!="function")throw TypeError(t+" is not a function!");return t}},function(t,e,r){t.exports=!r(6)&&!r(21)(function(){return Object.defineProperty(r(22)("div"),"a",{get:function(){return 7}}).a!=7})},function(t,e,r){var n=r(14);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&typeof(r=t.toString)=="function"&&!n(o=r.call(t)))return o;if(typeof(r=t.valueOf)=="function"&&!n(o=r.call(t)))return o;if(!e&&typeof(r=t.toString)=="function"&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){t.exports=r(2)},function(t,e,r){"use strict";var n=r(44);var o=r(23);var i=r(27);var a={};r(2)(a,r(1)("iterator"),function(){return this});t.exports=function(t,e,r){t.prototype=n(a,{next:o(1,r)});i(t,e+" Iterator")}},function(t,e,r){var n=r(5);var o=r(45);var i=r(26);var a=r(16)("IE_PROTO");var u=function(){};var s="prototype";var f=function(){var t=r(22)("iframe");var e=i.length;var n="<";var o=">";var a;t.style.display="none";r(51).appendChild(t);t.src="javascript:";a=t.contentWindow.document;a.open();a.write(n+"script"+o+"document.F=Object"+n+"/script"+o);a.close();f=a.F;while(e--)delete f[s][i[e]];return f()};t.exports=Object.create||function t(e,r){var i;if(e!==null){u[s]=n(e);i=new u;u[s]=null;i[a]=e}else i=f();return r===undefined?i:o(i,r)}},function(t,e,r){var n=r(13);var o=r(5);var i=r(46);t.exports=r(6)?Object.defineProperties:function t(e,r){o(e);var a=i(r);var u=a.length;var s=0;var f;while(u>s)n.f(e,f=a[s++],r[f]);return e}},function(t,e,r){var n=r(47);var o=r(26);t.exports=Object.keys||function t(e){return n(e,o)}},function(t,e,r){var n=r(7);var o=r(11);var i=r(48)(false);var a=r(16)("IE_PROTO");t.exports=function(t,e){var r=o(t);var u=0;var s=[];var f;for(f in r)if(f!=a)n(r,f)&&s.push(f);while(e.length>u)if(n(r,f=e[u++])){~i(s,f)||s.push(f)}return s}},function(t,e,r){var n=r(11);var o=r(49);var i=r(50);t.exports=function(t){return function(e,r,a){var u=n(e);var s=o(u.length);var f=i(a,s);var c;if(t&&r!=r)while(s>f){c=u[f++];if(c!=c)return true}else for(;s>f;f++)if(t||f in u){if(u[f]===r)return t||f||0}return!t&&-1}}},function(t,e,r){var n=r(15);var o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,r){var n=r(15);var o=Math.max;var i=Math.min;t.exports=function(t,e){t=n(t);return t<0?o(t+e,0):i(t,e)}},function(t,e,r){var n=r(0).document;t.exports=n&&n.documentElement},function(t,e,r){var n=r(7);var o=r(53);var i=r(16)("IE_PROTO");var a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){t=o(t);if(n(t,i))return t[i];if(typeof t.constructor=="function"&&t instanceof t.constructor){return t.constructor.prototype}return t instanceof Object?a:null}},function(t,e,r){var n=r(12);t.exports=function(t){return Object(n(t))}},function(t,e,r){"use strict";var n=r(55)(true);r(19)(String,"String",function(t){this._t=String(t);this._i=0},function(){var t=this._t;var e=this._i;var r;if(e>=t.length)return{value:undefined,done:true};r=n(t,e);this._i+=r.length;return{value:r,done:false}})},function(t,e,r){var n=r(15);var o=r(12);t.exports=function(t){return function(e,r){var i=String(o(e));var a=n(r);var u=i.length;var s,f;if(a<0||a>=u)return t?"":undefined;s=i.charCodeAt(a);return s<55296||s>56319||a+1===u||(f=i.charCodeAt(a+1))<56320||f>57343?t?i.charAt(a):s:t?i.slice(a,a+2):(s-55296<<10)+(f-56320)+65536}}},function(t,e,r){var n=r(5);var o=r(57);t.exports=r(4).getIterator=function(t){var e=o(t);if(typeof e!="function")throw TypeError(t+" is not iterable!");return n(e.call(t))}},function(t,e,r){var n=r(58);var o=r(1)("iterator");var i=r(3);t.exports=r(4).getIteratorMethod=function(t){if(t!=undefined)return t[o]||t["@@iterator"]||i[n(t)]}},function(t,e,r){var n=r(18);var o=r(1)("toStringTag");var i=n(function(){return arguments}())=="Arguments";var a=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,r,u;return t===undefined?"Undefined":t===null?"Null":typeof(r=a(e=Object(t),o))=="string"?r:i?n(e):(u=n(e))=="Object"&&typeof e.callee=="function"?"Arguments":u}},function(t,e,r){"use strict";var n=r(10);var o=r.n(n);var i=o.a},function(t,e,r){e=t.exports=r(61)(false);e.push([t.i,".dropdown[data-v-6149e08a] {\n  position: relative;\n  display: block;\n  margin: auto;\n}\n.dropdown .dropdown-input[data-v-6149e08a] {\n    background: #fff;\n    cursor: pointer;\n    border: 1px solid #e7ecf5;\n    border-radius: 3px;\n    color: #333;\n    display: block;\n    font-size: .8em;\n    padding: 6px;\n    min-width: 250px;\n    max-width: 250px;\n}\n.dropdown .dropdown-input[data-v-6149e08a]:hover {\n      background: #f8f8fa;\n}\n.dropdown .dropdown-content[data-v-6149e08a] {\n    position: absolute;\n    background-color: #fff;\n    min-width: 248px;\n    max-width: 248px;\n    max-height: 248px;\n    border: 1px solid #e7ecf5;\n    box-shadow: 0px -8px 34px 0px rgba(0, 0, 0, 0.05);\n    overflow: auto;\n    z-index: 1;\n}\n.dropdown .dropdown-content .dropdown-item[data-v-6149e08a] {\n      color: black;\n      font-size: .7em;\n      line-height: 1em;\n      padding: 8px;\n      text-decoration: none;\n      display: block;\n      cursor: pointer;\n}\n.dropdown .dropdown-content .dropdown-item[data-v-6149e08a]:hover {\n        background-color: #e7ecf5;\n}\n.dropdown .dropdown:hover .dropdowncontent[data-v-6149e08a] {\n    display: block;\n}\n",""])},function(t,e){t.exports=function(t){var e=[];e.toString=function e(){return this.map(function(e){var n=r(e,t);if(e[2]){return"@media "+e[2]+"{"+n+"}"}else{return n}}).join("")};e.i=function(t,r){if(typeof t==="string")t=[[null,t,""]];var n={};for(var o=0;o<this.length;o++){var i=this[o][0];if(typeof i==="number")n[i]=true}for(o=0;o<t.length;o++){var a=t[o];if(typeof a[0]!=="number"||!n[a[0]]){if(r&&!a[2]){a[2]=r}else if(r){a[2]="("+a[2]+") and ("+r+")"}e.push(a)}}};return e};function r(t,e){var r=t[1]||"";var o=t[3];if(!o){return r}if(e&&typeof btoa==="function"){var i=n(o);var a=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[r].concat(a).concat([i]).join("\n")}return[r].join("\n")}function n(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,"+e;return"/*# "+r+" */"}},function(t,e,r){"use strict";r.r(e);function n(t,e){var r=[];var n={};for(var o=0;o<e.length;o++){var i=e[o];var a=i[0];var u=i[1];var s=i[2];var f=i[3];var c={id:t+":"+o,css:u,media:s,sourceMap:f};if(!n[a]){r.push(n[a]={id:a,parts:[c]})}else{n[a].parts.push(c)}}return r}r.d(e,"default",function(){return p});var o=typeof document!=="undefined";if(typeof DEBUG!=="undefined"&&DEBUG){if(!o){throw new Error("vue-style-loader cannot be used in a non-browser environment. "+"Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.")}}var i={};var a=o&&(document.head||document.getElementsByTagName("head")[0]);var u=null;var s=0;var f=false;var c=function(){};var l=null;var d="data-vue-ssr-id";var v=typeof navigator!=="undefined"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,r,o){f=r;l=o||{};var a=n(t,e);h(a);return function e(r){var o=[];for(var u=0;u<a.length;u++){var s=a[u];var f=i[s.id];f.refs--;o.push(f)}if(r){a=n(t,r);h(a)}else{a=[]}for(var u=0;u<o.length;u++){var f=o[u];if(f.refs===0){for(var c=0;c<f.parts.length;c++){f.parts[c]()}delete i[f.id]}}}}function h(t){for(var e=0;e<t.length;e++){var r=t[e];var n=i[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++){n.parts[o](r.parts[o])}for(;o<r.parts.length;o++){n.parts.push(m(r.parts[o]))}if(n.parts.length>r.parts.length){n.parts.length=r.parts.length}}else{var a=[];for(var o=0;o<r.parts.length;o++){a.push(m(r.parts[o]))}i[r.id]={id:r.id,refs:1,parts:a}}}}function y(){var t=document.createElement("style");t.type="text/css";a.appendChild(t);return t}function m(t){var e,r;var n=document.querySelector("style["+d+'~="'+t.id+'"]');if(n){if(f){return c}else{n.parentNode.removeChild(n)}}if(v){var o=s++;n=u||(u=y());e=x.bind(null,n,o,false);r=x.bind(null,n,o,true)}else{n=y();e=w.bind(null,n);r=function(){n.parentNode.removeChild(n)}}e(t);return function n(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap){return}e(t=o)}else{r()}}}var g=function(){var t=[];return function(e,r){t[e]=r;return t.filter(Boolean).join("\n")}}();function x(t,e,r,n){var o=r?"":n.css;if(t.styleSheet){t.styleSheet.cssText=g(e,o)}else{var i=document.createTextNode(o);var a=t.childNodes;if(a[e])t.removeChild(a[e]);if(a.length){t.insertBefore(i,a[e])}else{t.appendChild(i)}}}function w(t,e){var r=e.css;var n=e.media;var o=e.sourceMap;if(n){t.setAttribute("media",n)}if(l.ssrId){t.setAttribute(d,e.id)}if(o){r+="\n/*# sourceURL="+o.sources[0]+" */";r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"}if(t.styleSheet){t.styleSheet.cssText=r}else{while(t.firstChild){t.removeChild(t.firstChild)}t.appendChild(document.createTextNode(r))}}}])});