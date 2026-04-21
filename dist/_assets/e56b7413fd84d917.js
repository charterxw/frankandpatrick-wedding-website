(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[97668],{

/***/ 634217:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};(function(__c) {var vzc=__webpack_require__(186901).EW;__c.rZ=class{static G(a){__c.M(a,{step:vzc})}get kind(){return"point"}clone({kc:a=this.kc,wc:b=this.wc,Ri:c=this.Ri,Qd:d=this.Qd,inverse:e=this.inverse}){return new __c.rZ({kc:a,wc:b,Ri:c,Qd:d,inverse:e})}snapshot(){const a=this.kc(),b=this.wc();return new __c.rZ({kc:()=>a,wc:()=>b,Ri:this.Ri,Qd:this.Qd,inverse:this.inverse})}get(a){const b=this.kc();var c=b.indexOf(a);c=this.inverse?b.length-1-c:c;__c.w(c!==-1,`value ${a} must exist in domain`);const [d,e]=this.wc();a=b.length===1?.5:this.Ri();return d+
(a*this.step+c*this.step)*Math.sign(e-d)}get step(){const a=this.kc().length+2*this.Ri(),[b,c]=this.wc();return Math.abs(c-b)/Math.max(a-1,1)}aX(a,b,c){__c.w(a.index!==b.index);const d=this.Ri(),e=(b.center-a.center)/(b.index-a.index);return[a.center-(d+a.index)*e,b.center+(d+c-b.index-1)*e]}$W(a,b,c){const d=this.Ri();return[b,a.center+(a.center-b)/(a.index+d)*(d+c-a.index-1)]}ZW(a,b,c){const d=this.Ri();return[a.center-(b-a.center)/(c-a.index-1+d)*(d+a.index),b]}constructor({kc:a,wc:b,Ri:c,Qd:d,
inverse:e=!1}){__c.rZ.G(this);this.kc=a;this.wc=b;this.Ri=c;this.Qd=d;this.inverse=e}};
}).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);}

}])
//# sourceMappingURL=sourcemaps/e56b7413fd84d917.js.map