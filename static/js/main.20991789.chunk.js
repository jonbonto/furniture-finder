(this["webpackJsonpfurniture-finder"]=this["webpackJsonpfurniture-finder"]||[]).push([[0],{125:function(e,t,n){e.exports=n(208)},130:function(e,t,n){},132:function(e,t,n){},208:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(3),i=n.n(l),c=(n(130),n(131),n(213)),o=(n(132),n(22)),u=n(47),s=n(210),d=n(214),m=n(209),v=s.a.Paragraph,f=s.a.Text,p={Classic:"gold",Midcentury:"volcano",Scandinavian:"magenta",Modern:"cyan",Contemporary:"geekblue"};function y(e){var t=e.product,n=t.furniture_style.map((function(e){return r.a.createElement(d.a,{color:p[e],key:e},e)})),a=r.a.createElement("div",{className:"product-title"},r.a.createElement("h3",null,t.name),r.a.createElement("span",null,t.price));return r.a.createElement(m.a,{title:a,headStyle:{border:"none"},bodyStyle:{paddingTop:0,minHeight:202}},r.a.createElement(v,null,t.description),r.a.createElement("div",{className:"product-styles"},n),r.a.createElement("div",{className:"product-delivery-time"},r.a.createElement(f,null,t.delivery_time," days")))}function h(e){var t=e.products.map((function(e){return r.a.createElement(o.a,{key:e.name,sm:24,md:12},r.a.createElement(y,{product:e}))}));return r.a.createElement(u.a,{gutter:[16,16]},t)}var E=n(212);function g(){return r.a.createElement(E.a,{placeholder:"Search Furniture",onChange:function(e){console.log("search: "+e.target.value)}})}var b=n(211),w=n(57),S=r.a.createContext();function k(e){var t=e.children,n=r.a.useState([]),a=Object(w.a)(n,2),l=a[0],i=a[1],c=r.a.useState([]),o=Object(w.a)(c,2),u={stylesSelected:l,deliveredTimeSelected:o[0],setStyles:i,setDeliveredTime:o[1]};return r.a.createElement(S.Provider,{value:u},t)}function x(){var e=r.a.useContext(S);if(void 0===e)throw new Error("useFilter must be used within a FilterProvider");return e}var C=b.a.Option,T=["Classic","Midcentury","Scandinavian","Modern","Contemporary"].map((function(e){return r.a.createElement(C,{key:e,value:e},e)})),j=[{id:1,start:1,end:8,label:"1 week"},{id:2,start:8,end:15,label:"2 week"},{id:3,start:15,end:30,label:"1 month"},{id:4,start:31,end:Number.MAX_SAFE_INTEGER,label:"& more"}],O=j.map((function(e){return r.a.createElement(C,{key:e.id,value:e.id},e.label)}));function _(){var e=x(),t=e.setStyles,n=e.setDeliveredTime;return r.a.createElement(u.a,{gutter:16},r.a.createElement(o.a,{sm:24,md:12},r.a.createElement(b.a,{mode:"multiple",style:{width:"100%"},placeholder:"Furniture Style",onChange:function(e){t(e)}},T)),r.a.createElement(o.a,{sm:24,md:12},r.a.createElement(b.a,{mode:"multiple",style:{width:"100%"},placeholder:"Delivery Time",onChange:function(e){n(e.map((function(e){return j.find((function(t){return t.id===e}))})))}},O)))}var F=n(90),M=n.n(F),N=n(122),I=n(39),D=n.n(I);function H(){var e=Object(a.useState)([]),t=Object(w.a)(e,2),n=t[0],l=t[1],i=x(),c=i.stylesSelected,o=i.deliveredTimeSelected;Object(a.useEffect)((function(){(function(){var e=Object(N.a)(M.a.mark((function e(){var t,n,a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://www.mocky.io/v2/5c9105cb330000112b649af8");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a=n.products,l(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var u=n;return D.a.isEmpty(c)||(u=u.filter((function(e){return t=c,n=e.furniture_style,!D.a.isEmpty(D.a.intersection(t,n));var t,n}))),D.a.isEmpty(o)||(u=u.filter((function(e){return function(e,t){var n=!0,a=!1,r=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done);n=!0){var c=l.value;if(D.a.inRange(t,c.start,c.end))return!0}}catch(o){a=!0,r=o}finally{try{n||null==i.return||i.return()}finally{if(a)throw r}}return!1}(o,parseInt(e.delivery_time))}))),r.a.createElement(h,{products:u})}var P=c.a.Header,A=c.a.Content;var B=function(){return r.a.createElement(k,null,r.a.createElement(c.a,null,r.a.createElement(P,{style:{position:"fixed",zIndex:1,width:"100%",background:"#106CC8",height:"unset"}},r.a.createElement("div",{style:{width:"50%"}},r.a.createElement(g,null)),r.a.createElement(_,null)),r.a.createElement(A,{style:{padding:"150px 50px 50px 50px",minHeight:"100vh"}},r.a.createElement(H,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[125,1,2]]]);
//# sourceMappingURL=main.20991789.chunk.js.map