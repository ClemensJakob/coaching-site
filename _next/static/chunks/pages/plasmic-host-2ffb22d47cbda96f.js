(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[258],{5365:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plasmic-host",function(){return r(2831)}])},2831:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),s=(r(7294),r(4298)),i=r(6983),o=r(4186),u=r(5988),l=r.n(u),a=function(){return(0,n.jsxs)("div",{className:"jsx-480ef3ee5bd557b6 wrapper",children:[(0,n.jsx)("p",{className:"jsx-480ef3ee5bd557b6",children:"Coding is"}),(0,n.jsxs)("div",{className:"jsx-480ef3ee5bd557b6 words",children:[(0,n.jsx)("span",{className:"jsx-480ef3ee5bd557b6",children:"Entdecke"}),(0,n.jsx)("span",{className:"jsx-480ef3ee5bd557b6",children:"Entwickle"}),(0,n.jsx)("span",{className:"jsx-480ef3ee5bd557b6",children:"St\xe4rke"})]}),(0,n.jsx)(l(),{id:"480ef3ee5bd557b6",children:'*.jsx-480ef3ee5bd557b6, *.jsx-480ef3ee5bd557b6:before, *.jsx-480ef3ee5bd557b6:after{padding:0;\nmargin:0;\nbox-sizing:border-box;\nfont-family:"Poppins", sans-serif;\nfont-size:45px;\nfont-weight:500}\n.wrapper.jsx-480ef3ee5bd557b6{box-sizing:content-box;\nbackground-color:#ffffff;\nheight:70px;\npadding:50px 30px;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\nborder-radius:8px;\nbox-shadow:0 20px 25px rgba(0, 0, 0, 0.2)}\n.words.jsx-480ef3ee5bd557b6{overflow:hidden}\nspan.jsx-480ef3ee5bd557b6{display:block;\nheight:100%;\npadding-left:10px;\ncolor:#0e6ffc;\n-webkit-animation:spin_words 6s infinite;\nanimation:spin_words 6s infinite}\n@keyframes spin_words {10% {transform:translateY(-112%)}25% {transform:translateY(-100%)}35% {transform:translateY(-212%)}50% {transform:translateY(-200%)}60% {transform:translateY(-312%)}75% {transform:translateY(-300%)}85% {transform:translateY(-412%)}100% {transform:translateY(-400%)}}'})]})};function c(){return o.p&&(0,n.jsxs)("div",{children:[(0,n.jsx)(s.default,{src:"https://static1.plasmic.app/preamble.js",strategy:"beforeInteractive"}),(0,n.jsx)(i.nh,{})]})}(0,r(8030).RM)(a,{name:"WordRotatorComp",props:{words:"words"},importPath:"./components/WordRotator"})},4186:function(e,t,r){"use strict";r.d(t,{p:function(){return n}});var n=(0,r(6983).fZ)({projects:[{id:"vbrD8fcueCZdEhPXReVTBH",token:"XQfQEP03fx1UsUwxZ3it9LLkJR8jgO2l59Xv4khASlkOsBSrBM31GSonzRXNPTN6K2Pj7t1JBZi1OuA"}],preview:!1})},4298:function(e,t,r){e.exports=r(699)},4207:function(e,t,r){var n=r(4155);!function(){"use strict";var t={583:function(e){e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},590:function(e,t,r){t.__esModule=!0,t.computeId=function(e,t){if(!t)return"jsx-"+e;var r=String(t),n=e+r;i[n]||(i[n]="jsx-"+(0,s.default)(e+"-"+r));return i[n]},t.computeSelector=function(e,t){"undefined"===typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var r=e+t;i[r]||(i[r]=t.replace(/__jsx-style-dynamic-selector/g,e));return i[r]};var n,s=(n=r(583))&&n.__esModule?n:{default:n};var i={}},503:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var s="undefined"!==typeof n&&n.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(e){var t=void 0===e?{}:e,r=t.name,n=void 0===r?"stylesheet":r,o=t.optimizeForSpeed,l=void 0===o?s:o,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;u(i(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",u("boolean"===typeof l,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=l,this._isBrowser=c,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,n,o,l=e.prototype;return l.setOptimizeForSpeed=function(e){u("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},l.isOptimizeForSpeed=function(){return this._optimizeForSpeed},l.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(s||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},l.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},l.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},l.insertRule=function(e,t){if(u(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(o){return s||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},l.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(i){s||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];u(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},l.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},l.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},l.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},l.makeStyleTag=function(e,t,r){t&&u(i(t),"makeStyleTag accepts only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return r?s.insertBefore(n,r):s.appendChild(n),n},t=e,(n=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,n),o&&r(t,o),e}();function u(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=o},449:function(e,t,r){t.__esModule=!0,t.default=a;var n,s=(n=r(522))&&n.__esModule?n:{default:n},i=r(147),o=r(590);var u=s.default.useInsertionEffect||s.default.useLayoutEffect,l="undefined"!==typeof window?(0,i.createStyleRegistry)():void 0;function a(e){var t=l||(0,i.useStyleRegistry)();return t?"undefined"===typeof window?(t.add(e),null):(u((function(){return t.add(e),function(){t.remove(e)}}),[e.id,String(e.dynamic)]),null):null}a.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return(0,o.computeId)(t,r)})).join(" ")}},147:function(e,t,r){t.__esModule=!0,t.createStyleRegistry=c,t.StyleRegistry=function(e){var t=e.registry,r=e.children,n=(0,s.useContext)(a),i=(0,s.useState)((function(){return n||t||c()}))[0];return s.default.createElement(a.Provider,{value:i},r)},t.useStyleRegistry=function(){return(0,s.useContext)(a)},t.StyleSheetContext=t.StyleSheetRegistry=void 0;var n,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var i=n?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(r,s,i):r[s]=e[s]}r.default=e,t&&t.set(e,r);return r}(r(522)),i=(n=r(503))&&n.__esModule?n:{default:n},o=r(590);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}var l=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,s=t.optimizeForSpeed,o=void 0!==s&&s,u=t.isBrowser,l=void 0===u?"undefined"!==typeof window:u;this._sheet=n||new i.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),n&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=l,this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,s=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var i=s.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=i,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.styles=function(e){return function(e,t){return void 0===t&&(t={}),e.map((function(e){var r=e[0],n=e[1];return s.default.createElement("style",{id:"__"+r,key:"__"+r,nonce:t.nonce?t.nonce:void 0,dangerouslySetInnerHTML:{__html:n}})}))}(this.cssRules(),e)},t.getIdAndRules=function(e){var t=e.children,r=e.dynamic,n=e.id;if(r){var s=(0,o.computeId)(n,r);return{styleId:s,rules:Array.isArray(t)?t.map((function(e){return(0,o.computeSelector)(s,e)})):[(0,o.computeSelector)(s,t)]}}return{styleId:(0,o.computeId)(n),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.StyleSheetRegistry=l;var a=(0,s.createContext)(null);function c(){return new l}t.StyleSheetContext=a},522:function(e){e.exports=r(7294)}},s={};function i(e){var r=s[e];if(void 0!==r)return r.exports;var n=s[e]={exports:{}},o=!0;try{t[e](n,n.exports,i),o=!1}finally{o&&delete s[e]}return n.exports}i.ab="//";var o={};!function(){var e=o;e.__esModule=!0,e.style=e.useStyleRegistry=e.createStyleRegistry=e.StyleRegistry=void 0;var t=i(147);e.StyleRegistry=t.StyleRegistry,e.createStyleRegistry=t.createStyleRegistry,e.useStyleRegistry=t.useStyleRegistry;var r,n=(r=i(449))&&r.__esModule?r:{default:r};e.style=n.default}(),e.exports=o}()},5988:function(e,t,r){e.exports=r(4207).style}},function(e){e.O(0,[774,983,888,179],(function(){return t=5365,e(e.s=t);var t}));var t=e.O();_N_E=t}]);