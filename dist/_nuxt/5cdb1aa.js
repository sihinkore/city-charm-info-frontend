(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{117:function(t,e,n){var content=n(324);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("1efdff74",content,!0,{sourceMap:!1})},161:function(t,e,n){"use strict";var r=n(117),o=n.n(r);n.d(e,"default",(function(){return o.a}))},164:function(t,e,n){"use strict";var r=n(0),o=n(247);r.a.use(o.a,{name:"Timeago",locale:"ja"})},165:function(t,e,n){"use strict";var r=n(249),o=n(126),c=n.n(o),l=(n(403),["user"]);e.a=function(t){var e=t.store,n=(t.req,t.isDev);Object(r.a)({key:"wonderful-editor-frontend",paths:l,storage:{getItem:function(t){return c.a.get(t)},setItem:function(t,e){return c.a.set(t,e,{expires:14,secure:!n,sameSite:"lax"})},removeItem:function(t){return c.a.remove(t)}}})(e)}},166:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(36),n(42),n(53);function r(t){var e=t.store;e.$axios.interceptors.request.use((function(t){var n;return n=e.getters["user/headers"],Object.keys(n).forEach((function(e){var r=n[e];t.headers[e]=r})),t}))}},167:function(t,e,n){"use strict";var r=n(0),o=n(158),c=n.n(o);console.log(c.a),r.a.use(c.a)},214:function(t,e,n){var content=n(299);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("6570a8f6",content,!0,{sourceMap:!1})},251:function(t,e,n){"use strict";n(35);var r=n(5),o={computed:{isSignedIn:function(){return this.$store.state.user.isSignedIn}},data:function(){return{clipped:!1,drawer:!1,fixed:!1,title:"City Charm Information"}},methods:{logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("user/logOut");case 2:case"end":return e.stop()}}),e)})))()}}},c=n(161),l=n(67),f=n(98),d=n.n(f),v=n(413),_=n(417),h=n(405),m=n(418),x=n(414),k=n(416),w=n(415),y=n(243);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}}),t._v(" "),n("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:"",color:"#f7cff6"}},[n("nuxt-link",{class:t.$style.header_link,attrs:{to:"/"}},[n("v-toolbar-title",{class:t.$style.app_title,domProps:{textContent:t._s(t.title)}})],1),t._v(" "),n("v-spacer"),t._v(" "),t.isSignedIn?n("div",[n("nuxt-link",{class:t.$style.link,attrs:{to:"/article"}},[n("v-btn",{class:t.$style.register_btn,attrs:{text:""}},[t._v("記事作成")])],1),t._v(" "),n("nuxt-link",{class:t.$style.link,attrs:{to:"/"}},[n("v-btn",{class:t.$style.log_in_btn,attrs:{text:""},on:{click:t.logout}},[t._v("ログアウト")])],1)],1):n("div",[n("nuxt-link",{class:t.$style.link,attrs:{to:"/sign_up"}},[n("v-btn",{class:t.$style.register_btn,attrs:{text:""}},[t._v("ユーザー登録")])],1),t._v(" "),n("nuxt-link",{class:t.$style.link,attrs:{to:"/sign_in"}},[n("v-btn",{class:t.$style.log_in_btn,attrs:{text:""}},[t._v("ログイン")])],1)],1)],1),t._v(" "),n("v-main",[n("v-container",[n("Nuxt")],1)],1)],1)}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.a=component.exports;d()(component,{VApp:v.a,VAppBar:_.a,VBtn:h.a,VContainer:m.a,VMain:x.a,VNavigationDrawer:k.a,VSpacer:w.a,VToolbarTitle:y.a})},267:function(t,e,n){n(268),n(269),t.exports=n(270)},282:function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.store,n=t.redirect;if(!e.getters["user/isSignedIn"])return n("/sign_in")}},298:function(t,e,n){"use strict";n(214)},299:function(t,e,n){(e=n(13)(!1)).push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),t.exports=e},324:function(t,e,n){(e=n(13)(!1)).push([t.i,".header_link_14c7u,.link_39DUE{text-decoration:none}.app_title_2P2Mv{color:#fff;font-weight:700}.register_btn_2uYLV{margin-right:5px}.log_in_btn_3Ywb8,.register_btn_2uYLV{border:2px solid #000;border-radius:5px;font-weight:700}",""]),e.locals={header_link:"header_link_14c7u",link:"link_39DUE",app_title:"app_title_2P2Mv",register_btn:"register_btn_2uYLV",log_in_btn:"log_in_btn_3Ywb8"},t.exports=e},363:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"getters",(function(){return c})),n.d(e,"mutations",(function(){return l})),n.d(e,"actions",(function(){return f}));n(35);var r=n(5),o=function(){return{articles:[],article:[]}},c={articles:function(t){return t.articles},article:function(t){return t.article}},l={setArticles:function(t,e){t.articles=e},setArticle:function(t,e){t.article=e}},f={fetchArticles:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,r.next=3,n.$axios.get("api/v1/articles",{params:e});case 3:c=r.sent,data=c.data,o("setArticles",data);case 6:case"end":return r.stop()}}),r)})))()},fetchArticle:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,r.next=3,n.$axios.get("api/v1/articles/".concat(e));case 3:c=r.sent,console.log(c),data=c.data,o("setArticle",data);case 7:case"end":return r.stop()}}),r)})))()}}},364:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"getters",(function(){return c})),n.d(e,"mutations",(function(){return l})),n.d(e,"actions",(function(){return f}));n(35);var r=n(5),o=function(){return{headers:{},isSignedIn:!1}},c={headers:function(t){return t.headers},isSignedIn:function(t){return t.isSignedIn}},l={setHeaders:function(t,e){t.headers=e},setSignInState:function(t,e){t.isSignedIn=e}},f={signUp:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,l,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,r.next=3,n.$axios.post("api/v1/auth",e);case 3:c=r.sent,l=c.headers,f={"access-token":l["access-token"],client:l.client,expiry:l.expiry,uid:l.uid,"token-type":l["token-type"]},o("setHeaders",f),o("setSignInState",!0);case 8:case"end":return r.stop()}}),r)})))()},signIn:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,l,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,r.next=3,n.$axios.post("api/v1/auth/sign_in",e);case 3:c=r.sent,l=c.headers,f={"access-token":l["access-token"],client:l.client,expiry:l.expiry,uid:l.uid,"token-type":l["token-type"]},o("setHeaders",f),o("setSignInState",!0);case 8:case"end":return r.stop()}}),r)})))()},logOut:function(t){var e=t.commit;e("setHeaders",{}),e("setSignInState",!1)}}},60:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(298),n(67)),c=n(98),l=n.n(c),f=n(413),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);e.a=component.exports;l()(component,{VApp:f.a})}},[[267,19,4,20]]]);