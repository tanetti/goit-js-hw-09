function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function b(e,t,n){var o,i,r,f,a,u,c=0,l=!1,s=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,c=t,f=e.apply(r,n)}function j(e){return c=e,a=setTimeout(h,t),l?y(e):f}function O(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=r}function h(){var e=p();if(O(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-u);return s?v(n,r-(e-c)):n}(e))}function w(e){return a=void 0,b&&o?y(e):(o=i=void 0,f)}function T(){var e=p(),n=O(e);if(o=arguments,i=this,u=e,n){if(void 0===a)return j(u);if(s)return a=setTimeout(h,t),y(u)}return void 0===a&&(a=setTimeout(h,t)),f}return t=m(t)||0,g(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(m(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=i=a=void 0},T.flush=function(){return void 0===a?f:w(p())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form");var j;let O=null!==(j=JSON.parse(localStorage.getItem("feedback-form-state")))&&void 0!==j?j:{};(()=>{if(0!==Object.keys(O).length)for(const[e,t]of Object.entries(O))y[e].value=t})();y.addEventListener("input",e(t)((({target:e})=>{O[e.name]=e.value,localStorage.setItem("feedback-form-state",JSON.stringify(O))}),500)),y.addEventListener("submit",(e=>{e.preventDefault(),console.log(O),y.reset(),O={},localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.ffa9a50d.js.map
