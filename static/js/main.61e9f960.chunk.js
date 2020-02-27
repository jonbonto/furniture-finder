(this["webpackJsonpfurniture-finder"]=this["webpackJsonpfurniture-finder"]||[]).push([[0],{125:function(e,t,n){e.exports=n(208)},130:function(e,t,n){},132:function(e,t,n){},208:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(3),c=n.n(i),l=(n(130),n(131),n(213)),o=(n(132),n(27)),u=n.n(o),s=n(212),d=n(39),m=a.a.createContext();function v(e){var t=e.children,n=a.a.useState(""),r=Object(d.a)(n,2),i={search:r[0],setSearch:r[1]};return a.a.createElement(m.Provider,{value:i},t)}function f(){var e=a.a.useContext(m);if(void 0===e)throw new Error("useSearch must be used within a SearchProvider");return e}var p=u.a.debounce((function(e,t){e(t)}),500);function h(){var e=f().setSearch;return a.a.createElement(s.a,{placeholder:"Search Furniture",onChange:function(t){p(e,t.target.value)}})}var E=n(211),y=n(48),w=n(22),b=a.a.createContext();function g(e){var t=e.children,n=a.a.useState([]),r=Object(d.a)(n,2),i=r[0],c=r[1],l=a.a.useState([]),o=Object(d.a)(l,2),u={stylesSelected:i,deliveredTimeSelected:o[0],setStyles:c,setDeliveredTime:o[1]};return a.a.createElement(b.Provider,{value:u},t)}function S(){var e=a.a.useContext(b);if(void 0===e)throw new Error("useFilter must be used within a FilterProvider");return e}var x=E.a.Option,C=["Classic","Midcentury","Scandinavian","Modern","Contemporary"].map((function(e){return a.a.createElement(x,{key:e,value:e},e)})),k=[{id:1,start:1,end:8,label:"1 week"},{id:2,start:8,end:15,label:"2 week"},{id:3,start:15,end:30,label:"1 month"},{id:4,start:31,end:Number.MAX_SAFE_INTEGER,label:"& more"}],j=k.map((function(e){return a.a.createElement(x,{key:e.id,value:e.id},e.label)}));function O(){var e=S(),t=e.setStyles,n=e.setDeliveredTime;return a.a.createElement(y.a,{gutter:16},a.a.createElement(w.a,{sm:24,md:12},a.a.createElement(E.a,{mode:"multiple",style:{width:"100%"},placeholder:"Furniture Style",onChange:function(e){t(e)}},C)),a.a.createElement(w.a,{sm:24,md:12},a.a.createElement(E.a,{mode:"multiple",style:{width:"100%"},placeholder:"Delivery Time",onChange:function(e){n(e.map((function(e){return k.find((function(t){return t.id===e}))})))}},j)))}var T=n(89),_=n.n(T),F=n(120),M=n(210),N=n(214),P=n(209),I=M.a.Paragraph,D=M.a.Text,H={Classic:"gold",Midcentury:"volcano",Scandinavian:"magenta",Modern:"cyan",Contemporary:"geekblue"};function A(e){var t=e.product,n=t.furniture_style.map((function(e){return a.a.createElement(N.a,{color:H[e],key:e},e)})),r=a.a.createElement("div",{className:"product-title"},a.a.createElement("h3",null,t.name),a.a.createElement("span",null,t.price));return a.a.createElement(P.a,{title:r,headStyle:{border:"none"},bodyStyle:{paddingTop:0,minHeight:202}},a.a.createElement(I,null,t.description),a.a.createElement("div",{className:"product-styles"},n),a.a.createElement("div",{className:"product-delivery-time"},a.a.createElement(D,null,t.delivery_time," days")))}function B(e){var t=e.products.map((function(e){return a.a.createElement(w.a,{key:e.name,sm:24,md:12},a.a.createElement(A,{product:e}))}));return a.a.createElement(y.a,{gutter:[16,16]},t)}function J(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],c=f().search,l=S(),o=l.stylesSelected,s=l.deliveredTimeSelected;Object(r.useEffect)((function(){(function(){var e=Object(F.a)(_.a.mark((function e(){var t,n,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.mocky.io/v2/5c9105cb330000112b649af8");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r=n.products,i(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=n;return c&&(m=m.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}))),u.a.isEmpty(o)||(m=m.filter((function(e){return t=o,n=e.furniture_style,!u.a.isEmpty(u.a.intersection(t,n));var t,n}))),u.a.isEmpty(s)||(m=m.filter((function(e){return function(e,t){var n=!0,r=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){var l=i.value;if(u.a.inRange(t,l.start,l.end))return!0}}catch(o){r=!0,a=o}finally{try{n||null==c.return||c.return()}finally{if(r)throw a}}return!1}(s,parseInt(e.delivery_time))}))),a.a.createElement(B,{products:m})}var L=l.a.Header,R=l.a.Content;var W=function(){return a.a.createElement(v,null,a.a.createElement(g,null,a.a.createElement(l.a,null,a.a.createElement(L,{style:{position:"fixed",zIndex:1,width:"100%",background:"#106CC8",height:"unset"}},a.a.createElement("div",{style:{width:"50%"}},a.a.createElement(h,null)),a.a.createElement(O,null)),a.a.createElement(R,{style:{padding:"150px 50px 50px 50px",minHeight:"100vh"}},a.a.createElement(J,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[125,1,2]]]);
//# sourceMappingURL=main.61e9f960.chunk.js.map