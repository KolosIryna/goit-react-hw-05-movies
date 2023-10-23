"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(r,t,n){n.r(t),n.d(t,{default:function(){return x}});var e,a,c=n(861),o=n(439),u=n(757),i=n.n(u),s=n(791),p=n(390),f=n(689),l=n(168),h=n(867),d=h.ZP.ul(e||(e=(0,l.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n  grid-gap: 40px;\n  margin-top: 60px;\n  margin-bottom: 0;\n  padding: 0 16px;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),v=h.ZP.li(a||(a=(0,l.Z)(["\n  padding: 8px;\n  border: 1px solid blue;\n  border-radius: 10px;\n  background-color: #b4bffb;\n"]))),m=n(184),x=function(){var r=(0,s.useState)([]),t=(0,o.Z)(r,2),n=t[0],e=t[1],a=(0,f.UO)().movieId;(0,s.useEffect)((function(){if(a){var r=function(){var r=(0,c.Z)(i().mark((function r(){var t;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,p.zv)(a);case 3:t=r.sent,e(t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0.message);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}}),[a]);return(0,m.jsx)("div",{children:(0,m.jsx)(d,{children:n.cast&&n.cast.length>0?n.cast.map((function(r){return(0,m.jsxs)(v,{children:[(0,m.jsx)("img",{src:r.profile_path?"https://image.tmdb.org/t/p/w200".concat(r.profile_path):"https://cdn-icons-png.flaticon.com/256/21/21104.png",alt:r.name}),(0,m.jsx)("h3",{children:r.name}),(0,m.jsxs)("p",{children:["Character: ",r.character]})]},r.id)})):(0,m.jsx)("p",{children:"Loading cast information..."})})})}},390:function(r,t,n){n.d(t,{C3:function(){return p},TP:function(){return f},hY:function(){return s},tx:function(){return h},zv:function(){return l}});var e=n(861),a=n(757),c=n.n(a),o=n(243),u="https://api.themoviedb.org/3/",i="19c3c1131366dcbffe75fc92ac012355",s=function(){var r=(0,e.Z)(c().mark((function r(){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("".concat(u,"trending/movie/day?api_key=").concat(i));case 3:return t=r.sent,n=t.data,r.abrupt("return",n.results);case 8:throw r.prev=8,r.t0=r.catch(0),new Error("Ooops Error. No movies to display");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(c().mark((function r(t,n){var e,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("".concat(u,"search/movie?api_key=").concat(i,"&query=").concat(t,"&page=").concat(n));case 3:return e=r.sent,a=e.data,r.abrupt("return",a.results);case 8:throw r.prev=8,r.t0=r.catch(0),new Error("Ooops Error.");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t,n){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(c().mark((function r(t){var n,e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("".concat(u,"movie/").concat(t,"?api_key=").concat(i));case 3:return n=r.sent,e=n.data,r.abrupt("return",e);case 8:throw r.prev=8,r.t0=r.catch(0),new Error("Ooops Error. No details");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}(),l=function(){var r=(0,e.Z)(c().mark((function r(t){var n,e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(i));case 3:return n=r.sent,e=n.data,r.abrupt("return",e);case 8:throw r.prev=8,r.t0=r.catch(0),new Error("Ooops Error.");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}(),h=function(){var r=(0,e.Z)(c().mark((function r(t){var n,e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(i));case 3:return n=r.sent,e=n.data,r.abrupt("return",e);case 8:throw r.prev=8,r.t0=r.catch(0),new Error("Ooops Error. ");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.ba11f06e.chunk.js.map