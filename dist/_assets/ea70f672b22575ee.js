(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[37329],{

/***/ 341086:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};(function(__c) {var w=__c.w;var kjd,mjd,ljd,Z7;kjd=function(a){return(Math.ceil(Math.sqrt(Math.max(1,Math.ceil(a/2))*4)/2)*2)**2};
mjd=function(a,b){const c=Math.ceil(b/1E6*200),d=Math.ceil(Math.ceil(b/1E6*a.sampleRate)/c),e=Array.from({length:a.numberOfChannels},(g,h)=>{g=Math.floor(0*a.sampleRate);const k=Math.min(Math.floor((0+b)/1E6*a.sampleRate),a.length);return a.getChannelData(h).subarray(g,k)}),f=new Float32Array(kjd(c));for(let g=0;g<c;g++){const h=ljd(e,g,d),k=g*2;f[k]=h.max;f[k+1]=h.min}return{buffer:f,a1:c}};
ljd=function(a,b,c){var d=Math.floor(b*c);b=Math.min(Math.floor((b+1)*c),a[0].length,d+500);c=Infinity;let e=-Infinity;for(;d<b;d++){let f=0;for(let g=0;g<a.length;++g)f+=a[g][d];c=Math.min(c,f);e=Math.max(e,f)}return{min:isFinite(c)?c/a.length:0,max:isFinite(e)?e/a.length:0}};
Z7=class{static ZLb(a){w(!0);w(!0);w(!0);const b=a.duration*1E6;w(a.duration*1E6>=b,"Duration of {}s exceeds audio length of {}s",b/1E6,a.duration);const {buffer:c,a1:d}=mjd(a,b);return new Z7(c,0,d,200)}trim(a,b){w(a>=0&&b>=0);a=Math.floor(a/1E6*this.wba);return new Z7(this.buffer,this.vta+a,Math.min(Math.ceil(b/1E6*this.wba),this.a1-a),this.wba)}split(a){w(a>0);if(a<=1)return[this];const b=Math.ceil(this.a1/a);return Array.from({length:Math.ceil(a)},(c,d)=>{c=this.vta+d*b;return new Z7(this.buffer,
c,Math.min(c+b,this.vta+this.a1)-c,this.wba)})}repeat(a){w(a>0);if(a<=1)return this;const b=this.a1*a,c=new Float32Array(kjd(b));var d=this.vta*2;d=this.buffer.subarray(d,d+this.a1*2);for(let e=0;e<a;e++)c.set(d,e*d.length);return new Z7(c,0,b,this.wba)}constructor(a,b,c,d){this.buffer=a;this.vta=b;this.a1=c;this.wba=d;w(c*2<=a.length)}};__c.qDa={};__c.qDa.Uyb=Z7;
}).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);}

}])
//# sourceMappingURL=sourcemaps/ea70f672b22575ee.js.map