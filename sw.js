if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const f=e=>i(e,t),l={module:{uri:t},exports:o,require:f};s[t]=Promise.all(n.map((e=>l[e]||f(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-CVplUvOB.css",revision:null},{url:"assets/index-kM86fWyc.js",revision:null},{url:"index.html",revision:"e9ecbf6b068af16f80c41cdc4dddf430"},{url:"registerSW.js",revision:"5f081f2da882f5e44f5272984db4d416"},{url:"manifest.webmanifest",revision:"0588d06272991dfbd391c41e338c25af"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
