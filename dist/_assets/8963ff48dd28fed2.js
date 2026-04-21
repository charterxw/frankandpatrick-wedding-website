(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[65297],{

/***/ 91988:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);__web_req__(644902);globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};(function(__c) {var Jwc,Kwc;Jwc=function(a,b,c){return __c.y(a.ui).X7(b,c)};Kwc=function(a,b){if(a===""||b.length===0)return[];const c=[];let d=0;for(const e of b)b=a.slice(d,d+e),c.push(b),d+=e;return c};
__c.vY=class{Yf({store:a,text:b,kb:c,textAlign:d,constraint:e}){var f=__c.Gwc(a,b);a={fontSize:a.fontSize,fontFamily:a.Tg,fontWeight:a.fontWeight,textAlign:d,textBaseline:"alphabetic"};if(c==null||b!==""&&c.length===0){switch(e.type){case "size":c=e.maxWidth;break;case "aspectRatio":c=this.Sa.measureText({text:b,...a});if(c.width/c.height<=e.$Tb)return{lines:[b],Yf:[c],lineHeight:c.fontBoundingBoxAscent+c.fontBoundingBoxDescent};c=Math.sqrt(c.width*c.height*e.q5b);break;default:throw new __c.z(e);
}c=Jwc(this,f,c)}f=c.length;if(f===0)return{lines:[],Yf:[],lineHeight:0};b=f>1?Kwc(b,c):[b];c=b.map(l=>l.trimEnd());d=this.Sa.bj({$r:c,...a});const g=d[0].fontBoundingBoxAscent+d[0].fontBoundingBoxDescent;if(e.type!=="size"||e.maxHeight==null||f===1||g*f<=e.maxHeight)return{lines:c,Yf:d,lineHeight:g};f=Math.max(0,Math.floor(e.maxHeight/g)-1);const {text:h,...k}=this.Sa.$f({text:`${b[f]}${c[f+1]}`,...a,maxWidth:e.maxWidth});return{lines:[...c.slice(0,f),h],Yf:[...d.slice(0,f),k],lineHeight:g}}constructor(a,
b){this.Sa=a;this.ui=b}};
}).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);}

}])
//# sourceMappingURL=sourcemaps/8963ff48dd28fed2.js.map