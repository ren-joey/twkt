(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);h&&h(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-ea670ca4":"416e4b66","chunk-051cff2e":"777d7e3e","chunk-3cbe6871":"2cef480d","chunk-8a7fc366":"7c37ae1c","chunk-3a53c8bc":"3617ccee","chunk-5047ca34":"d48bcdfc","chunk-7f615ca6":"5284f99b","chunk-0235ecca":"eb4d0717","chunk-47b947a0":"f7e91358","chunk-65c23998":"ebb4e48d","chunk-2d0c0d7f":"b2af46eb"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-ea670ca4":1,"chunk-051cff2e":1,"chunk-3cbe6871":1,"chunk-8a7fc366":1,"chunk-3a53c8bc":1,"chunk-5047ca34":1,"chunk-7f615ca6":1,"chunk-0235ecca":1,"chunk-47b947a0":1,"chunk-65c23998":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-ea670ca4":"5e82988f","chunk-051cff2e":"48937769","chunk-3cbe6871":"1afc60e3","chunk-8a7fc366":"8636c289","chunk-3a53c8bc":"417a2cff","chunk-5047ca34":"a0a22b67","chunk-7f615ca6":"dc733afb","chunk-0235ecca":"ca6df252","chunk-47b947a0":"14f7feb7","chunk-65c23998":"5bd57cdb","chunk-2d0c0d7f":"31d6cfe0"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],h.parentNode.removeChild(h),n(c)},h.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var h=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"49f8":function(e,t,n){var r={"./en.json":"edd4","./zh-TW.json":"9ea5"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="49f8"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],c={name:"App",data:function(){return{}}},i=c,u=n("2877"),s=Object(u["a"])(i,o,a,!1,null,null,null),l=s.exports,f=(n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),h=(n("4de4"),n("7db0"),n("d81d"),n("5530")),m=n("2f62"),d=n("bc3a"),g=n.n(d);r["a"].use(m["a"]);var p=new m["a"].Store({state:{Layout:{menus:[],material_form_columns:[],material_categories:[],permission_groups:[]},Page:void 0,Snack:{},UserInfo:void 0,Fetching:{actionCheckLogin:"N",actionLogin:"N",actionLogout:"N",actionFetchMaterials:"N",actionFetchUsers:"N",actionFetchLayout:"N"},Materials:[],Users:[],Orders:[]},getters:{getPage:function(e){return e.Page},getPermissionName:function(e){return"N"===e.UserInfo.is_login?"guest":e.UserInfo.permission_group.col_name},getUserInfo:function(e){return e.UserInfo},getMaterialCategories:function(e){return e.Layout.material_categories},getMaterialColumns:function(e){return e.Layout.material_form_columns},getPermissionGroups:function(e){return e.Layout.permission_groups.filter((function(e){return"guest"!==e.col_name})).map((function(e){return Object(h["a"])({text:e.tw_name,value:e.id},e)}))},getPermissionGroupGuest:function(e){return e.Layout.permission_groups.find((function(e){return"guest"===e.col_name}))},getPermissionGroupUser:function(e){return e.Layout.permission_groups.find((function(e){return"user"===e.col_name}))},getPermissionGroupCompany:function(e){return e.Layout.permission_groups.find((function(e){return"company"===e.col_name}))},getPermissionGroupAgent:function(e){return e.Layout.permission_groups.find((function(e){return"agent"===e.col_name}))},getPermissionGroupAdmin:function(e){return e.Layout.permission_groups.find((function(e){return"admin"===e.col_name}))},getBarColor:function(e,t){var n=t.getPermissionName;return"guest"===n?{color:t.getPermissionGroupGuest.bg_color}:"user"===n?{color:t.getPermissionGroupUser.bg_color}:"company"===n?{color:t.getPermissionGroupCompany.bg_color}:{color:t.getPermissionGroupAdmin.bg_color}},getOwnBadgeColor:function(e,t){var n=t.getPermissionName;return"guest"===n?{textColor:"white",color:t.getPermissionGroupGuest.bg_color}:"user"===n?{textColor:"white",color:t.getPermissionGroupUser.bg_color}:"company"===n?{textColor:"white",color:t.getPermissionGroupCompany.bg_color}:{textColor:"white",color:t.getPermissionGroupAdmin.bg_color}},getBadgeColor:function(e,t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"guest";return"guest"===e?{textColor:"white",color:t.getPermissionGroupGuest.bg_color}:"user"===e?{textColor:"white",color:t.getPermissionGroupUser.bg_color}:"company"===e?{textColor:"white",color:t.getPermissionGroupCompany.bg_color}:{textColor:"white",color:t.getPermissionGroupAdmin.bg_color}}},getMaterials:function(e){return e.Materials},getPublishedMaterials:function(e){return e.Materials.filter((function(e){return"published"===e.status}))},getUnpublishedMaterials:function(e){return e.Materials.filter((function(e){return"unpublished"===e.status}))},getCompleteMaterials:function(e){return e.Materials.filter((function(e){return"complete"===e.status}))},getEditMaterials:function(e){return e.Materials.filter((function(e){return"edit"===e.status}))},getVerifyMaterials:function(e){return e.Materials.filter((function(e){return"verify"===e.status}))},getConfirmMaterials:function(e){return e.Materials.filter((function(e){return"confirm"===e.status}))},getIncompleteMaterials:function(e){return e.Materials.filter((function(e){return"complete"!==e.status&&"published"!==e.status&&"unpublished"!==e.status}))},getCompleteOrders:function(e){return e.Orders.filter((function(e){return"complete"===e.status}))},getIncompleteOrders:function(e){return e.Orders.filter((function(e){return"complete"!==e.status}))},getFetching:function(e){return e.Fetching}},mutations:{setUserInfo:function(e,t){void 0===t||void 0!==t.message?e.UserInfo={is_login:"N"}:e.UserInfo=t},setLayout:function(e,t){e.Layout=t},setPage:function(e,t){e.Page=t},setFetching:function(e,t){e.Fetching[t.name]=t.status},setMaterials:function(e,t){e.Materials=t},setUsers:function(e,t){e.Users=t},setOrders:function(e,t){e.Orders=t}},actions:{actionCheckLogin:function(e){var t=e.state,n=e.commit;return new Promise((function(e,r){var o="actionCheckLogin";"Y"===t.Fetching[o]&&r(),n("setFetching",{name:o,status:"Y"}),g()({method:"GET",url:"api/check-login"}).then((function(t){n("setUserInfo",t.data),e(t.data)})).catch((function(e){alert(e),r()})).finally((function(){n("setFetching",{name:o,status:"N"})}))}))},actionLogin:function(e,t){var n=e.state,r=e.commit;return new Promise((function(e,o){var a="actionLogin";"Y"===n.Fetching[a]&&o(),r("setFetching",{name:a,status:"Y"}),g()({method:"POST",url:"api/login",params:t}).then((function(t){r("setUserInfo",t.data),e(t.data)})).catch((function(e){alert(e),o()})).finally((function(){r("setFetching",{name:a,status:"N"})}))}))},actionLogout:function(e){var t=e.state,n=e.commit;return new Promise((function(e,r){var o="actionLogout";"Y"===t.Fetching[o]&&r(),n("setFetching",{name:o,status:"Y"}),g()({method:"GET",url:"api/logout"}).then((function(t){n("setUserInfo",t.data),e(t.data)})).catch((function(e){alert(e),r()})).finally((function(){n("setFetching",{name:o,status:"N"})}))}))},actionFetchLayout:function(e){var t=e.state,n=e.commit;return new Promise((function(e,r){var o="actionFetchLayout";"Y"===t.Fetching[o]&&r(),n("setFetching",{name:o,status:"Y"}),g()({method:"GET",url:"api/layout"}).then((function(t){n("setLayout",t.data),e(t.data)})).catch((function(e){alert(e),r()})).finally((function(){n("setFetching",{name:o,status:"N"})}))}))},actionFetchMaterials:function(e){var t=e.state,n=e.commit;return new Promise((function(e,r){var o="actionFetchMaterials";"Y"===t.Fetching[o]&&r(),n("setFetching",{name:o,status:"Y"}),g()({method:"GET",url:"api/materials"}).then((function(t){n("setMaterials",t.data),e(t.data)})).catch((function(e){alert(e),r()})).finally((function(){n("setFetching",{name:o,status:"N"})}))}))},actionFetchUsers:function(e){var t=e.state,n=e.commit;return new Promise((function(e,r){var o="actionFetchUsers";"Y"===t.Fetching[o]&&r(),n("setFetching",{name:o,status:"Y"}),g()({method:"GET",url:"api/users"}).then((function(t){n("setUsers",t.data),e(t.data)})).catch((function(e){alert(e),r()})).finally((function(){n("setFetching",{name:o,status:"N"})}))}))},actionFetchOrders:function(e){var t=e.state,n=e.commit;return new Promise((function(e,r){var o="actionFetchOrders";"Y"===t.Fetching[o]&&r(),n("setFetching",{name:o,status:"Y"}),g()({method:"GET",url:"api/orders"}).then((function(t){n("setOrders",t.data),e(t.data)})).catch((function(e){alert(e),r()})).finally((function(){n("setFetching",{name:o,status:"N"})}))}))}},modules:{}});r["a"].use(f["a"]);var _=new f["a"]({scrollBehavior:function(){return window.scrollTo({top:0,behavior:"smooth"})},base:"/",routes:[{path:"/",name:"index",component:function(){return Promise.all([n.e("chunk-ea670ca4"),n.e("chunk-051cff2e"),n.e("chunk-8a7fc366"),n.e("chunk-3a53c8bc")]).then(n.bind(null,"7277"))}},{path:"/dashboard",name:"dashboard",component:function(){return Promise.all([n.e("chunk-ea670ca4"),n.e("chunk-051cff2e"),n.e("chunk-8a7fc366"),n.e("chunk-3a53c8bc")]).then(n.bind(null,"7277"))}},{path:"/login",name:"login",component:function(){return Promise.all([n.e("chunk-ea670ca4"),n.e("chunk-051cff2e"),n.e("chunk-3cbe6871")]).then(n.bind(null,"a55b"))}},{path:"/material/:material_id?",name:"material",component:function(){return Promise.all([n.e("chunk-ea670ca4"),n.e("chunk-051cff2e"),n.e("chunk-8a7fc366"),n.e("chunk-7f615ca6"),n.e("chunk-65c23998")]).then(n.bind(null,"3d2f"))}},{path:"/order/:method?/:order_id?",name:"order",component:function(){return Promise.all([n.e("chunk-ea670ca4"),n.e("chunk-051cff2e"),n.e("chunk-8a7fc366"),n.e("chunk-7f615ca6"),n.e("chunk-0235ecca")]).then(n.bind(null,"cf2a"))}},{path:"/user/:user_id?",name:"user",component:function(){return Promise.all([n.e("chunk-ea670ca4"),n.e("chunk-051cff2e"),n.e("chunk-8a7fc366"),n.e("chunk-7f615ca6"),n.e("chunk-47b947a0")]).then(n.bind(null,"1511"))}},{path:"/setting",name:"setting",component:function(){return Promise.all([n.e("chunk-ea670ca4"),n.e("chunk-051cff2e"),n.e("chunk-8a7fc366"),n.e("chunk-5047ca34")]).then(n.bind(null,"4ef5"))}},{path:"/dev",name:"dev",component:function(){return Promise.all([n.e("chunk-ea670ca4"),n.e("chunk-2d0c0d7f")]).then(n.bind(null,"4409"))}}]});_.beforeEach((function(e,t,n){var r=p.state.UserInfo;void 0===r?Promise.all([p.dispatch("actionCheckLogin"),p.dispatch("actionFetchLayout")]).then((function(t){"login"!==e.name&&"N"===t.is_login?n({name:"login"}):"login"===e.name&&"Y"===t.is_login?n({name:"index"}):n()})).catch((function(){n({name:"login"})})):"Y"===r.is_login?("login"===e.name&&n({name:"index"}),"user"===e.name&&"admin"!==p.getters.getPermissionName&&"agent"!==p.getters.getPermissionName?n({name:"index"}):n()):"N"===r.is_login&&("login"===e.name?n():n({name:"login"}))}));var b=_,L=(n("4160"),n("ac1f"),n("466d"),n("159b"),n("a925"));function k(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var r=n.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var o=r[1];t[o]=e(n)}})),t}r["a"].use(L["a"]);var v=new L["a"]({locale:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_I18N_LOCALE||"ez",fallbackLocale:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_I18N_FALLBACK_LOCALE||"en",messages:k()}),E=n("f309");r["a"].use(E["a"]);var P=new E["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:b,store:p,i18n:v,vuetify:P,render:function(e){return e(l)}}).$mount("#app")},"9ea5":function(e){e.exports=JSON.parse('{"COMPANY_TITLE":"台灣康田","LOGIN_SUBTITLE":"ODM of bio-supplement service","LOGIN_TITLE":"生醫保健食品整合服務平台","LOGIN_PLEASE_LOGIN":"請登入","LOGIN_REMEMBER_ME":"記住我","LOGIN_CONFIRM":"登入","CANCEL":"取消","LOGIN_REGISTER":"申請會員","LOGIN_ALERT_USER_INPUT_ERROR":"您輸入的資訊有誤，請重新確認","LOGIN_EMAIL_RULE_1":"E-mail 不可空白","LOGIN_EMAIL_RULE_2":"必須是有效的E-mail","LOGIN_PW_RULE_1":"Password 不可空白","LOGIN_PW_RULE_2":"Password 至少需6個字元","CONFIRM":"確定"}')},edd4:function(e){e.exports=JSON.parse('{"COMPANY_TITLE":"台灣康田","LOGIN_SUBTITLE":"ODM of bio-supplement service","LOGIN_TITLE":"生醫保健食品整合服務平台","LOGIN_PLEASE_LOGIN":"請登入","LOGIN_REMEMBER_ME":"記住我","LOGIN_CONFIRM":"登入","CANCEL":"取消","LOGIN_REGISTER":"申請會員","LOGIN_ALERT_USER_INPUT_ERROR":"您輸入的資訊有誤，請重新確認","LOGIN_EMAIL_RULE_1":"E-mail is required","LOGIN_EMAIL_RULE_2":"E-mail must be valid","LOGIN_PW_RULE_1":"Password is required","LOGIN_PW_RULE_2":"At least 6 characters","CONFIRM":"確定"}')}});
//# sourceMappingURL=app.2430ea4c.js.map