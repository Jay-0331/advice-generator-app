var app=function(){"use strict";function t(){}const n=t=>t;function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let s;function l(t,n){return s||(s=document.createElement("a")),s.href=n,t===s.href}const u="undefined"!=typeof window;let a=u?()=>window.performance.now():()=>Date.now(),f=u?t=>requestAnimationFrame(t):t;const d=new Set;function h(t){d.forEach((n=>{n.c(t)||(d.delete(n),n.f())})),0!==d.size&&f(h)}function m(t,n){t.appendChild(n)}function p(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function g(t){const n=y("style");return function(t,n){m(t.head||t,n)}(p(t),n),n.sheet}function $(t,n,e){t.insertBefore(n,e||null)}function v(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function w(){return b(" ")}function k(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function x(t){return function(n){return n.preventDefault(),t.call(this,n)}}function _(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function E(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}const C=new Map;let A,j=0;function R(t,n,e,o,r,c,i,s=0){const l=16.666/o;let u="{\n";for(let t=0;t<=1;t+=l){const o=n+(e-n)*c(t);u+=100*t+`%{${i(o,1-o)}}\n`}const a=u+`100% {${i(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(a)}_${s}`,d=p(t),{stylesheet:h,rules:m}=C.get(d)||function(t,n){const e={stylesheet:g(n),rules:{}};return C.set(t,e),e}(d,t);m[f]||(m[f]=!0,h.insertRule(`@keyframes ${f} ${a}`,h.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${f} ${o}ms linear ${r}ms 1 both`,j+=1,f}function Z(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),j-=r,j||f((()=>{j||(C.forEach((t=>{const{stylesheet:n}=t;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.rules={}})),C.clear())})))}function D(t){A=t}function L(){if(!A)throw new Error("Function called outside component initialization");return A}const M=[],N=[],O=[],P=[],S=Promise.resolve();let q=!1;function z(t){O.push(t)}const T=new Set;let F,H=0;function V(){const t=A;do{for(;H<M.length;){const t=M[H];H++,D(t),B(t.$$)}for(D(null),M.length=0,H=0;N.length;)N.pop()();for(let t=0;t<O.length;t+=1){const n=O[t];T.has(n)||(T.add(n),n())}O.length=0}while(M.length);for(;P.length;)P.pop()();q=!1,T.clear(),D(t)}function B(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}function I(t,n,e){t.dispatchEvent(function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(`${n?"intro":"outro"}${e}`))}const G=new Set;let J;function K(){J={r:0,c:[],p:J}}function Q(){J.r||r(J.c),J=J.p}function U(t,n){t&&t.i&&(G.delete(t),t.i(n))}function W(t,n,e,o){if(t&&t.o){if(G.has(t))return;G.add(t),J.c.push((()=>{G.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const X={duration:0};function Y(e,o,r){let i,s,l=o(e,r),u=!1,m=0;function p(){i&&Z(e,i)}function g(){const{delay:o=0,duration:r=300,easing:c=n,tick:g=t,css:$}=l||X;$&&(i=R(e,0,1,r,o,c,$,m++)),g(0,1);const v=a()+o,y=v+r;s&&s.abort(),u=!0,z((()=>I(e,!0,"start"))),s=function(t){let n;return 0===d.size&&f(h),{promise:new Promise((e=>{d.add(n={c:t,f:e})})),abort(){d.delete(n)}}}((t=>{if(u){if(t>=y)return g(1,0),I(e,!0,"end"),p(),u=!1;if(t>=v){const n=c((t-v)/r);g(n,1-n)}}return u}))}let $=!1;return{start(){$||($=!0,Z(e),c(l)?(l=l(),(F||(F=Promise.resolve(),F.then((()=>{F=null}))),F).then(g)):g())},invalidate(){$=!1},end(){u&&(p(),u=!1)}}}function tt(t,n){const e=n.token={};function o(t,o,r,c){if(n.token!==e)return;n.resolved=c;let i=n.ctx;void 0!==r&&(i=i.slice(),i[r]=c);const s=t&&(n.current=t)(i);let l=!1;n.block&&(n.blocks?n.blocks.forEach(((t,e)=>{e!==o&&t&&(K(),W(t,1,1,(()=>{n.blocks[e]===t&&(n.blocks[e]=null)})),Q())})):n.block.d(1),s.c(),U(s,1),s.m(n.mount(),n.anchor),l=!0),n.block=s,n.blocks&&(n.blocks[o]=s),l&&V()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const e=L();if(t.then((t=>{D(e),o(n.then,1,n.value,t),D(null)}),(t=>{if(D(e),o(n.catch,2,n.error,t),D(null),!n.hasCatch)throw t})),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}var r}function nt(t,n){-1===t.$$.dirty[0]&&(M.push(t),q||(q=!0,S.then(V)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function et(n,i,s,l,u,a,f,d=[-1]){const h=A;D(n);const m=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(h?h.$$.context:[])),callbacks:o(),dirty:d,skip_bound:!1,root:i.target||h.$$.root};f&&f(m.root);let p=!1;if(m.ctx=s?s(n,i.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return m.ctx&&u(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),p&&nt(n,t)),e})):[],m.update(),p=!0,r(m.before_update),m.fragment=!!l&&l(m.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);m.fragment&&m.fragment.l(t),t.forEach(v)}else m.fragment&&m.fragment.c();i.intro&&U(n.$$.fragment),function(t,n,o,i){const{fragment:s,on_mount:l,on_destroy:u,after_update:a}=t.$$;s&&s.m(n,o),i||z((()=>{const n=l.map(e).filter(c);u?u.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(z)}(n,i.target,i.anchor,i.customElement),V()}D(h)}function ot(t){const n=2.5949095;return(t*=2)<1?t*t*((n+1)*t-n)*.5:.5*((t-=2)*t*((n+1)*t+n)+2)}function rt(t){const n=t-1;return n*n*n+1}function ct(t,{delay:n=0,duration:e=400,easing:o=rt,x:r=0,y:c=0,opacity:i=0}={}){const s=getComputedStyle(t),l=+s.opacity,u="none"===s.transform?"":s.transform,a=l*(1-i);return{delay:n,duration:e,easing:o,css:(t,n)=>`\n\t\t\ttransform: ${u} translate(${(1-t)*r}px, ${(1-t)*c}px);\n\t\t\topacity: ${l-a*n}`}}function it(n){let e,o,r;return{c(){e=y("img"),l(e.src,o=n[0]?mt:ht)||_(e,"src",o),_(e,"alt","mode")},m(t,n){$(t,e,n)},p(t,r){n=t,1&r&&!l(e.src,o=n[0]?mt:ht)&&_(e,"src",o)},i(t){r||z((()=>{r=Y(e,ct,{y:-20,x:-25,duration:1e3,easing:ot}),r.start()}))},o:t,d(t){t&&v(e)}}}function st(n){let e,o,r=n[6].message+"";return{c(){var t,n,c,i;e=y("h2"),o=b(r),t=e,n="color",i=!1,null===(c="red")?t.style.removeProperty(n):t.style.setProperty(n,c,i?"important":"")},m(t,n){$(t,e,n),m(e,o)},p(t,n){2&n&&r!==(r=t[6].message+"")&&E(o,r)},i:t,o:t,d(t){t&&v(e)}}}function lt(n){let e,o,r=n[5].slip.id,c=n[5].slip.advice,s=ut(n),l=at(n);return{c(){e=y("div"),s.c(),o=w(),l.c(),_(e,"class","advice svelte-90ch3i")},m(t,n){$(t,e,n),s.m(e,null),m(e,o),l.m(e,null)},p(n,u){2&u&&i(r,r=n[5].slip.id)?(K(),W(s,1,1,t),Q(),s=ut(n),s.c(),U(s),s.m(e,o)):s.p(n,u),2&u&&i(c,c=n[5].slip.advice)?(K(),W(l,1,1,t),Q(),l=at(n),l.c(),U(l),l.m(e,null)):l.p(n,u)},i(t){U(s),U(l)},o(t){W(s),W(l)},d(t){t&&v(e),s.d(t),l.d(t)}}}function ut(n){let e,o,r,c,i=n[5].slip.id+"";return{c(){e=y("p"),o=b("ADVICE # "),r=b(i),_(e,"class","svelte-90ch3i")},m(t,n){$(t,e,n),m(e,o),m(e,r)},p(t,e){n=t,2&e&&i!==(i=n[5].slip.id+"")&&E(r,i)},i(t){c||z((()=>{c=Y(e,ct,{y:-100,duration:1500,easing:ot}),c.start()}))},o:t,d(t){t&&v(e)}}}function at(n){let e,o,r,c,i=n[5].slip.advice+"";return{c(){e=y("h1"),o=y("q"),r=b(i),_(e,"class","svelte-90ch3i")},m(t,n){$(t,e,n),m(e,o),m(o,r)},p(t,e){n=t,2&e&&i!==(i=n[5].slip.advice+"")&&E(r,i)},i(t){c||z((()=>{c=Y(e,ct,{y:-50,duration:1500,easing:ot,delay:500}),c.start()}))},o:t,d(t){t&&v(e)}}}function ft(n){let e;return{c(){e=y("div"),e.textContent="Loading"},m(t,n){$(t,e,n)},p:t,i:t,o:t,d(t){t&&v(e)}}}function dt(n){let e,o,c,s,l,u,a,f,d,h,p,g=n[0],b=it(n),E={ctx:n,current:null,token:null,hasCatch:!0,pending:ft,then:lt,catch:st,value:5,error:6};return tt(l=n[1],E),{c(){e=y("main"),o=y("button"),b.c(),c=w(),s=y("div"),E.block.c(),u=w(),a=y("div"),f=w(),d=y("button"),d.innerHTML='<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="diceimg svelte-90ch3i"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"></path></svg>',_(o,"class","mode-toggle-switch svelte-90ch3i"),_(a,"class","dividerline svelte-90ch3i"),_(s,"class","wrapper svelte-90ch3i"),_(d,"class","refresh svelte-90ch3i"),_(e,"class","svelte-90ch3i")},m(t,r){$(t,e,r),m(e,o),b.m(o,null),m(e,c),m(e,s),E.block.m(s,E.anchor=null),E.mount=()=>s,E.anchor=u,m(s,u),m(s,a),m(e,f),m(e,d),h||(p=[k(o,"click",x(n[2])),k(d,"click",x(n[3]))],h=!0)},p(e,[r]){n=e,1&r&&i(g,g=n[0])?(K(),W(b,1,1,t),Q(),b=it(n),b.c(),U(b),b.m(o,null)):b.p(n,r),E.ctx=n,2&r&&l!==(l=n[1])&&tt(l,E)||function(t,n,e){const o=n.slice(),{resolved:r}=t;t.current===t.then&&(o[t.value]=r),t.current===t.catch&&(o[t.error]=r),t.block.p(o,e)}(E,n,r)},i(t){U(b),U(E.block)},o(t){W(b)},d(t){t&&v(e),b.d(t),E.block.d(),E.token=null,E=null,h=!1,r(p)}}}const ht="./images/sun.png",mt="./images/moon.png";function pt(t,n,e){let o=!1;const r=async()=>{let t=await fetch("https://api.adviceslip.com/advice");return await t.json()};let c=r();return[o,c,()=>{window.document.body.classList.toggle("dark"),e(0,o=!o)},async()=>{e(1,c=await r())}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),et(this,t,pt,dt,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
