import{n as c,s as h}from"./scheduler.b3c879a1.js";const e=[];function d(n,l=c){let i;const o=new Set;function r(t){if(h(n,t)&&(n=t,i)){const b=!e.length;for(const s of o)s[1](),e.push(s,n);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(n))}function _(t,b=c){const s=[t,b];return o.add(s),o.size===1&&(i=l(r,f)||c),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:_}}var a;const p=((a=globalThis.__sveltekit_z7vasf)==null?void 0:a.base)??"";var u;const z=((u=globalThis.__sveltekit_z7vasf)==null?void 0:u.assets)??p;export{z as a,p as b,d as w};
