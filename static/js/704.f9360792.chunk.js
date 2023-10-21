"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[704],{918:function(n,e,t){t.d(e,{Z:function(){return x}});t(791);var r,i,a=t(87),o=t(168),c=t(867),s=c.ZP.li(r||(r=(0,o.Z)(["\n  padding: 10px;\n  border: 1px solid blue;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  background-color: white;\n\n  .link {\n    text-decoration: none;\n    color: black;\n    font-size: 20px;\n    text-align: center;\n  }\n  .image {\n    margin: 0 auto;\n    width: 100%;\n    height: 500px;\n    object-fit: cover;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &hover {\n      transform: scale(1.03);\n      cursor: zoom-in;\n    }\n\n    .title {\n      text-align: center;\n    }\n  }\n"]))),p=t(184),l=function(n){var e=n.id,t=n.image,r=n.title;return(0,p.jsx)(s,{children:(0,p.jsxs)(a.rU,{to:"/movies/".concat(e),className:"link",children:[(0,p.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w300/".concat(t):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:300,alt:"poster",className:"image"}),(0,p.jsx)("h2",{className:"title",children:r})]})})},u=c.ZP.ul(i||(i=(0,o.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 26px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),x=function(n){var e=n.movies;return(0,p.jsx)(u,{children:e.map((function(n){var e=n.id,t=n.poster_path,r=n.title;return(0,p.jsx)(l,{id:e,image:t,title:r},e)}))})}},704:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,i,a,o=t(861),c=t(439),s=t(757),p=t.n(s),l=t(791),u=t(87),x=t(787),d=t(168),m=t(867),g=m.ZP.form(r||(r=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  padding-top: 40px;\n  padding-bottom: 40px;\n\n  .input {\n    width: 300px;\n    height: 40px;\n    font-size: 20px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    border: 2px solid blue;\n  }\n  .button {\n    height: 45px;\n    padding: 8px;\n    color: black;\n    background: #b4bffb;\n    border-radius: 5px;\n  }\n"]))),b=t(184),f=function(n){var e=n.setSearchParams;return(0,b.jsxs)(g,{onSubmit:function(n){n.preventDefault();var t=n.currentTarget.elements.title.value;e({query:t})},children:[(0,b.jsx)("label",{children:(0,b.jsx)("input",{className:"input",name:"title",type:"text",autoComplete:"off",autoFocus:!0,required:!0,placeholder:"Enter the name of the movie"})}),(0,b.jsx)("button",{type:"submit",className:"button",children:"Search"})]})},h=t(918),v=t(219),k=m.ZP.button(i||(i=(0,d.Z)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #b4bffb;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  margin-top: 20px;\n  margin-bottom: 30px;\n  min-width: 180px;\n  border: 1px solid blue;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n"]))),j=function(n){var e=n.onClick,t=n.disabled;return(0,b.jsx)(k,{type:"button",onClick:e,disabled:t,children:"Load more"})},w=m.ZP.div(a||(a=(0,d.Z)(["\n  background-image: url(https://png.pngtree.com/thumb_back/fw800/background/20210327/pngtree-sky-petals-movie-film-powder-blue-dreamy-background-image_595553.jpg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: white;\n\n  .container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n"]))),Z=function(){var n=(0,l.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1],i=(0,l.useState)(1),a=(0,c.Z)(i,2),s=a[0],d=a[1],m=(0,l.useState)(!1),g=(0,c.Z)(m,2),k=g[0],Z=g[1],y=(0,l.useState)(null),S=(0,c.Z)(y,2),z=S[0],C=S[1],P=(0,u.lr)(),_=(0,c.Z)(P,2),N=_[0],q=_[1],E=N.get("query");(0,l.useEffect)((function(){if(E){var n=function(){var n=(0,o.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!0),n.next=4,(0,x.C3)(E,s);case 4:e=n.sent,r(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),C(n.t0.message);case 11:return n.prev=11,Z(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}}),[E,s]);return(0,b.jsxs)(w,{children:[(0,b.jsx)(f,{setSearchParams:q}),(0,b.jsxs)("div",{className:"container",children:[t.length>0&&(0,b.jsx)(h.Z,{movies:t}),t.length!==t&&!k&&(0,b.jsx)(j,{onClick:function(){d((function(n){return n+1}))}}),k&&(0,b.jsx)(v.Z,{}),z&&(0,b.jsx)("p",{children:z})]})]})}}}]);
//# sourceMappingURL=704.f9360792.chunk.js.map