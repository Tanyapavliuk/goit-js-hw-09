function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=l);var u=l("7Y9D8");l("iQIUW");const r={form:document.querySelector(".form"),button:document.querySelector('[type="submit"]'),amondInput:document.querySelector("[name='amount']"),deleyInput:document.querySelector("[name='delay']"),stepInput:document.querySelector("[name='step']")};let i=1,d=null,a=null,s=null;function p({position:e,delay:t}){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}r.form.addEventListener("submit",(function(t){t.preventDefault(),s=+r.amondInput.value,d=+r.deleyInput.value,a=+r.stepInput.value;for(let t=1;t<=s;t++)p({position:i,delay:d}).then((({position:t,delay:n})=>{e(u).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(u).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),i+=1,d+=a}));
//# sourceMappingURL=03-promises.41258b91.js.map
