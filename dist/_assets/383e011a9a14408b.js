(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[77828],{

/***/ 385379:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);__web_req__(822995);globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};(function(__c) {var xUc=async function(a,b,c){const d=wUc()();try{const e=__c.y(a.Vj.context),f=d.r(await d.s(a.fetch(b.url,{signal:c}))),g=d.r(await d.s(f.arrayBuffer()));return e.decodeAudioData(g)}finally{d.s()}},zUc=function(a,b,c,d){if(d){var e=a.cache.get(b);e||(e={buffer:c,A0:new Set},c.catch(yUc.wrap(()=>{a.cache.delete(b)})),a.cache.set(b,e));e.A0.add(d);d.addEventListener("abort",()=>{e?.A0.delete(d);e&&e.A0.size===0&&a.cache.delete(b);e=void 0},{once:!0})}},yUc=__webpack_require__(815703).F;var wUc=__webpack_require__(929846)._;var AUc;
AUc=class{async wc(a,b,c){const d=wUc()();try{__c.w(b.ba>=0&&b.K>=0);const m=__c.rs(this.zk,a);if(m){var e=this.cache.get(a)?.buffer||xUc(this,m,c);zUc(this,a,e,c);var f=d.r(await d.s(e)),g=b.K-f.duration*1E6;if(b.ba===0&&(g>=0||Math.abs(g)<=100))return f;var h=b.K/1E6*f.sampleRate;if(h<=0)return f;var k=new AudioBuffer({length:h,numberOfChannels:f.numberOfChannels,sampleRate:f.sampleRate}),l=Math.floor(f.sampleRate*b.ba/1E6);for(a=0;a<f.numberOfChannels;a++){const n=f.getChannelData(a).subarray(l,l+
h);k.copyToChannel(n,a)}return k}}finally{d.s()}}constructor(a,b,c=__c.fEc){this.Vj=a;this.zk=b;this.fetch=c;this.cache=new Map}};__c.xDa={};__c.xDa.mxb=AUc;
}).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);}

}])
//# sourceMappingURL=sourcemaps/383e011a9a14408b.js.map