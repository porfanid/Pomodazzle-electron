(()=>{"use strict";var e,a,f,t,r,c={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var f=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(f.exports,f,f.exports,b),f.loaded=!0,f.exports}b.m=c,b.c=d,e=[],b.O=(a,f,t,r)=>{if(!f){var c=1/0;for(i=0;i<e.length;i++){f=e[i][0],t=e[i][1],r=e[i][2];for(var d=!0,o=0;o<f.length;o++)(!1&r||c>=r)&&Object.keys(b.O).every((e=>b.O[e](f[o])))?f.splice(o--,1):(d=!1,r<c&&(c=r));if(d){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[f,t,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var c={};a=a||[null,f({}),f([]),f(f)];for(var d=2&t&&e;"object"==typeof d&&!~a.indexOf(d);d=f(d))Object.getOwnPropertyNames(d).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,b.d(r,c),r},b.d=(e,a)=>{for(var f in a)b.o(a,f)&&!b.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,f)=>(b.f[f](e,a),a)),[])),b.u=e=>"assets/js/"+({470:"7899f974",867:"33fc5bb8",1235:"a7456010",1724:"dff1c289",1903:"acecf23e",1972:"73664a40",2634:"c4f5d8e4",2662:"ff21c7d0",2711:"9e4087bc",2748:"822bd8ab",3e3:"ca9568b9",3249:"ccc49370",3553:"92506f84",3566:"558ffbb3",3637:"f4f34a3a",3641:"f9718b87",3694:"8717b14a",3976:"0e384e19",4134:"393be207",4212:"621db11d",4658:"33ff654d",4736:"e44a2883",4813:"6875c492",5557:"d9f32620",5742:"aba21aa0",5990:"7bbee4c3",6061:"1f391b9e",6214:"2377d8a9",6379:"91ed408e",6969:"14eb3368",7098:"a7bd4aaa",7472:"814f3328",7643:"a6aa9e1f",7678:"725d5851",7730:"665d9236",7875:"dcda3ecc",7886:"10468aef",8209:"01a85c17",8275:"4b072edb",8401:"17896441",8609:"925b3f96",8737:"7661071f",8863:"f55d3e7a",9048:"a94703ab",9325:"59362658",9328:"e273c56f",9419:"ef0e522c",9632:"60e6f730",9647:"5e95c892",9858:"36994c47"}[e]||e)+"."+{470:"f853eb63",867:"4244ab00",1235:"5f9bbb01",1538:"2dd4ee2b",1724:"3ad42838",1903:"cc86648a",1972:"8687d8c1",2237:"fe867cfb",2634:"ced99fed",2662:"9cca8502",2711:"9b70b1ae",2748:"a3f8d732",3e3:"6435d3a6",3249:"d69d59d4",3347:"4968c350",3553:"6f0883c6",3566:"ec1ef47d",3637:"d4436c75",3641:"33a35c5d",3694:"dde027cd",3976:"5e2ccc40",4134:"dd0ecc30",4212:"b41e86d6",4658:"89c6c516",4736:"1c2076d5",4813:"b47275a3",5557:"bbe88317",5742:"ed09cce9",5990:"5be0b4d1",6061:"6f467a80",6214:"1d959da1",6379:"8f6cee08",6969:"b3f9dfc9",7098:"300507f7",7472:"ad0f400a",7643:"73727051",7678:"07922555",7730:"dc8b929d",7875:"9e216a05",7886:"9c2e8759",8209:"5c1a76a0",8275:"24df23ff",8401:"10fdb211",8609:"6b66c4a3",8737:"2dac3f17",8863:"fc0f3f6f",9048:"34ab1074",9325:"f422ba2e",9328:"11f3e6e2",9419:"4c0e2279",9632:"dd2631de",9647:"3d1fe17f",9858:"337a7516"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},r="docs:",b.l=(e,a,f,c)=>{if(t[e])t[e].push(a);else{var d,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==r+f){d=l;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",r+f),d.src=e),t[e]=[a];var u=(a,f)=>{d.onerror=d.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((e=>e(f))),a)return a(f)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/Pomodazzle-electron/",b.gca=function(e){return e={17896441:"8401",59362658:"9325","7899f974":"470","33fc5bb8":"867",a7456010:"1235",dff1c289:"1724",acecf23e:"1903","73664a40":"1972",c4f5d8e4:"2634",ff21c7d0:"2662","9e4087bc":"2711","822bd8ab":"2748",ca9568b9:"3000",ccc49370:"3249","92506f84":"3553","558ffbb3":"3566",f4f34a3a:"3637",f9718b87:"3641","8717b14a":"3694","0e384e19":"3976","393be207":"4134","621db11d":"4212","33ff654d":"4658",e44a2883:"4736","6875c492":"4813",d9f32620:"5557",aba21aa0:"5742","7bbee4c3":"5990","1f391b9e":"6061","2377d8a9":"6214","91ed408e":"6379","14eb3368":"6969",a7bd4aaa:"7098","814f3328":"7472",a6aa9e1f:"7643","725d5851":"7678","665d9236":"7730",dcda3ecc:"7875","10468aef":"7886","01a85c17":"8209","4b072edb":"8275","925b3f96":"8609","7661071f":"8737",f55d3e7a:"8863",a94703ab:"9048",e273c56f:"9328",ef0e522c:"9419","60e6f730":"9632","5e95c892":"9647","36994c47":"9858"}[e]||e,b.p+b.u(e)},(()=>{var e={5354:0,1869:0};b.f.j=(a,f)=>{var t=b.o(e,a)?e[a]:void 0;if(0!==t)if(t)f.push(t[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var r=new Promise(((f,r)=>t=e[a]=[f,r]));f.push(t[2]=r);var c=b.p+b.u(a),d=new Error;b.l(c,(f=>{if(b.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var r=f&&("load"===f.type?"missing":f.type),c=f&&f.target&&f.target.src;d.message="Loading chunk "+a+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,t[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,f)=>{var t,r,c=f[0],d=f[1],o=f[2],n=0;if(c.some((a=>0!==e[a]))){for(t in d)b.o(d,t)&&(b.m[t]=d[t]);if(o)var i=o(b)}for(a&&a(f);n<c.length;n++)r=c[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},f=self.webpackChunkdocs=self.webpackChunkdocs||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();