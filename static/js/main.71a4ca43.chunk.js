(window["webpackJsonpreact-reddit-viewer"]=window["webpackJsonpreact-reddit-viewer"]||[]).push([[0],{23:function(e,t,r){e.exports=r(35)},32:function(e,t,r){},35:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(11),o=r.n(c),s=r(6),u=r(14),l=r(22),i=(r(32),r(13)),p=function(e){return{type:"FETCH_POSTS",payload:{subreddit:e.target.value}}},d=function(e){var t=e.message;return a.a.createElement("div",null,a.a.createElement("h3",{className:"text-center color-light-gray"},t))},b=function(e){var t=e.onInput;return a.a.createElement("nav",null,a.a.createElement("span",{className:"brand"},a.a.createElement("i",{className:"fab fa-2x fa-reddit"})," React Reddit Viewer"),a.a.createElement("div",{className:"menu"},a.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},a.a.createElement("input",{type:"text",placeholder:"subreddit",onInput:t}))))},f=r(21),m=r.n(f),O=function(e){var t=e.name,r=e.title;return a.a.createElement("tr",{key:t},a.a.createElement("td",null,m.a.decode(r)))},E=function(e){var t=e.posts,r=e.subreddit;return a.a.createElement("div",null,a.a.createElement("table",{className:"width-full bg-white shadow-light"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"/r/",r))),a.a.createElement("tbody",null,t.map(O))))};function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var y=Object(u.b)(function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(r,!0).forEach(function(t){Object(i.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e)},function(e){return Object(s.b)({fetchPosts:p},e)})(function(e){var t=e.fetchPosts,r=e.message,n=e.posts,c=e.subreddit;return a.a.createElement("div",null,a.a.createElement(b,{onInput:t}),a.a.createElement("div",{className:"flex pt-4"},a.a.createElement("div",null),a.a.createElement("div",null,r&&a.a.createElement(d,{message:r}),n&&a.a.createElement(E,{posts:n,subreddit:c})),a.a.createElement("div",null)))});function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(r,!0).forEach(function(t){Object(i.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var j={message:"Please enter a subreddit to view posts."},g=r(10),P=r.n(g),S=r(9),T=function(e){return fetch("https://www.reddit.com/r/".concat(e,".json")).then(function(e){return e.json()}).then(function(e){return e.data.children.map(function(e){return e.data})})},x=P.a.mark(function e(t){var r,n,a;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.payload.subreddit){e.next=5;break}return e.next=4,Object(S.c)({type:"RESET"});case 4:return e.abrupt("return",e.sent);case 5:return e.prev=5,e.next=8,Object(S.a)(T,r);case 8:return n=e.sent,e.next=11,Object(S.c)({type:"FETCH_POSTS_SUCCESS",payload:{posts:n,subreddit:r}});case 11:e.next=18;break;case 13:return e.prev=13,e.t0=e.catch(5),a="The subreddit '".concat(r,"' is not valid."),e.next=18,Object(S.c)({type:"FETCH_POSTS_FAILED",payload:{message:a}});case 18:case"end":return e.stop()}},e,null,[[5,13]])}),D=P.a.mark(function e(){return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.b)(500,"FETCH_POSTS",x);case 2:case"end":return e.stop()}},e)}),C=Object(l.a)(),_=Object(s.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS_FAILED":return{message:t.payload.message};case"FETCH_POSTS_SUCCESS":return{posts:t.payload.posts,subreddit:t.payload.subreddit};case"RESET":return h({},j);default:return e}},Object(s.a)(C));C.run(D),o.a.render(a.a.createElement(u.a,{store:_},a.a.createElement(y,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.71a4ca43.chunk.js.map