!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var a={};function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t,n){t&&u(e.prototype,t);n&&u(e,n);return e};var l=i("h6c0i"),f=document.querySelector("form.form");l.Notify.init({distance:"20px",clickToClose:!0,cssAnimationStyle:"from-right",fontSize:"14px",delay:4e3,failure:{background:"#ff4432"}});var s=new(function(){"use strict";function t(){e(r)(this,t),this.form=null,this.delay=null,this.step=null,this.amount=null}return e(a)(t,[{key:"start",value:function(e){this.form=e,this.form?(this.collectFormData(),this.delay?this.step?this.amount?(this.toggleSubmitButtonState(),this.createPromisesQueue()):l.Notify.failure("Amount value not found!"):l.Notify.failure("Step value not found!"):l.Notify.failure("Delay value not found!")):l.Notify.failure("Target Form not found!")}},{key:"collectFormData",value:function(){var e=this;new FormData(this.form).forEach((function(t,n){e[n]=Number(t)}))}},{key:"toggleSubmitButtonState",value:function(){this.form.querySelector('[type="submit"]').toggleAttribute("disabled")}},{key:"createPromisesQueue",value:function(){for(var e=this,t=function(t){var o=e;e.createPromise(t,n).then((function(e){var t=e.position,n=e.delay;l.Notify.success("Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;l.Notify.failure("Rejected promise ".concat(t," in ").concat(n,"ms"))})).finally((function(){t===o.amount&&o.toggleSubmitButtonState()})),n+=e.step},n=this.delay,o=1;o<=this.amount;o+=1)t(o)}},{key:"createPromise",value:function(e,t){return new Promise((function(n,o){var i=Math.random()>.3;setTimeout((function(){i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}}]),t}());f.addEventListener("submit",(function(e){e.preventDefault(),s.start(e.currentTarget)}))}();
//# sourceMappingURL=03-promises.da01a055.js.map