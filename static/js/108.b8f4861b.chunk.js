/*! For license information please see 108.b8f4861b.chunk.js.LICENSE.txt */
(self.webpackChunktweets_card=self.webpackChunktweets_card||[]).push([[108],{5153:function(t,e,r){"use strict";r.d(e,{F:function(){return i}});var n=r(1694),a=r.n(n),s=r(1087),c="ButtonNav_btn__UmLpQ",o=r(3329),i=function(t){var e=t.path,r=t.text,n=t.className,i=t.onClick;return(0,o.jsx)(s.rU,{onClick:i,to:e,className:a()(c,"".concat(n)),children:r})}},3108:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return C}});var n=function(t){return t.users.users},a=function(t){return t.users.page},s=function(t){return t.users.filter},c=r(9434),o=r(2791),i=r(266),l=r(1694),u=r.n(l),d={card:"Card_card__zQfcO",cardContent:"Card_cardContent__YZj9h",cardAvatar:"Card_cardAvatar__NtvmW",cardText:"Card_cardText__GqCkX",btn:"Card_btn__oVFX8",btnActive:"Card_btnActive__Xtgfv",btnNotActive:"Card_btnNotActive__9iEx2"},f=r(3329),v=function(t){var e,r=t.user,n=r.id,a=r.isFollow,s=r.avatar,o=r.tweets,l=r.followers,v=(0,c.I0)(),_=a?l-1:l+1,h=!a;return(0,f.jsx)("div",{className:d.card,children:(0,f.jsxs)("div",{className:d.cardContent,children:[(0,f.jsx)("img",{className:d.cardAvatar,src:s,alt:"avatar"}),(0,f.jsxs)("div",{className:d.cardText,children:[(0,f.jsx)("p",{className:d.cardTweeets,children:"".concat(o," tweets")}),(0,f.jsx)("p",{className:d.cardFollowers,children:"".concat((e=l,e.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,","))," followers")})]}),(0,f.jsx)("button",{className:u()(d.btn,h?d.btnNotActive:d.btnActive),onClick:function(){v((0,i.N)({id:n,updateData:{followers:_,isFollow:h}}))},children:h?"Follow":"Following"})]})})},_="CardList_cardList__6vgyO",h=function(){var t,e=(0,c.I0)(),r=(0,c.v9)(n),l=(0,c.v9)(a),u=(0,c.v9)(s);switch((0,o.useEffect)((function(){e((0,i.u)(l))}),[e,l,u]),u){case"followings":t=r.filter((function(t){return t.isFollow}));break;case"follow":t=r.filter((function(t){return!t.isFollow}));break;default:t=r}return(0,f.jsx)(f.Fragment,{children:t&&(0,f.jsx)("ul",{className:_,children:t.map((function(t){return(0,f.jsx)(v,{user:t},t.id)}))})})},p=r(5153),x=r(3808),w="Filter_filter__asygT",j="Filter_filterOption__nZy0L",g=function(){var t=(0,c.I0)();return(0,f.jsxs)("select",{className:w,onChange:function(e){t((0,x.Tv)(e.target.value))},children:[(0,f.jsx)("option",{className:j,value:"show all",children:"show all"}),(0,f.jsx)("option",{className:j,value:"follow",children:"follow"}),(0,f.jsx)("option",{className:j,value:"followings",children:"followings"})]})},m=function(){var t=(0,c.I0)();return(0,f.jsx)(p.F,{onClick:function(){t((0,x.uO)())},text:"Load more"})},N="Tweets_tweetsContainer__03Xqw",C=function(){var t=(0,c.v9)(a)<4;return(0,f.jsxs)("div",{className:N,children:[(0,f.jsx)(p.F,{path:"/",text:"Back"}),(0,f.jsx)(g,{}),(0,f.jsx)(h,{}),t&&(0,f.jsx)(m,{})]})}},1694:function(t,e){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var s=typeof r;if("string"===s||"number"===s)t.push(r);else if(Array.isArray(r)){if(r.length){var c=a.apply(null,r);c&&t.push(c)}}else if("object"===s){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){t.push(r.toString());continue}for(var o in r)n.call(r,o)&&r[o]&&t.push(o)}}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()}}]);
//# sourceMappingURL=108.b8f4861b.chunk.js.map