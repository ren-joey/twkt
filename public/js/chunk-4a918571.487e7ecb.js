(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a918571"],{"0bc6":function(t,e,i){},"24e2":function(t,e,i){"use strict";var n=i("e0c7");e["a"]=n["a"]},"326d":function(t,e,i){"use strict";var n=i("e449");e["a"]=n["a"]},"34ef":function(t,e,i){"use strict";var n=i("cc20");e["a"]=n["a"]},"608b":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.UserInfo?i("v-navigation-drawer",t._b({class:t.UserInfo.permission_group.col_name,attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,app:""},scopedSlots:t._u([{key:"append",fn:function(){return[i("div",{staticClass:"pa-2"},[i("v-btn",{attrs:{block:"",outlined:"",color:"blue-grey lighten-2",loading:"Y"===t.Fetching.actionLogout},on:{click:t.logout}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-logout")]),t._v(" 登出 ")],1)],1)]},proxy:!0}],null,!1,3579480448),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},"v-navigation-drawer",t.navAttrs,!1),[i("v-list",{attrs:{dense:"",rounded:""}},[i("v-list-item",{attrs:{twoLine:""}},[i("v-list-item-avatar",{attrs:{color:t.badgeColor.color,size:"48"}},[i("span",{staticClass:"text-md",class:[t.badgeColor.textColor+"--text"]},[t._v(" "+t._s(t.UserInfo.user_information.name.toUpperCase().substring(0,2))+" ")])]),i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(t.UserInfo.user_information.name.substring(0,4))+" "),t.UserInfo.email_verified_at?i("v-chip",t._b({staticClass:"ma-1",attrs:{small:""}},"v-chip",t.badgeColor,!1),[i("v-icon",{attrs:{small:""}},[t._v("mdi-shield-check")]),t._v(" "+t._s(t.UserInfo.permission_group.tw_name)+" ")],1):i("v-chip",{staticClass:"ma-1",attrs:{small:""}},[i("v-icon",{attrs:{small:""}},[t._v("mdi-shield-remove")]),t._v(" 未驗證 ")],1)],1),i("v-list-item-subtitle",[t._v(" "+t._s(t.UserInfo.email)+" ")])],1)],1),i("v-divider",{staticClass:"mb-4"}),t._l(t.items,(function(e){return["Y"===e.permission?[e.heading?i("v-row",{key:e.heading,attrs:{align:"center"}},[i("v-col",{attrs:{cols:"6"}},[e.heading?i("v-subheader",[t._v(" "+t._s(e.heading)+" ")]):t._e()],1),i("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[i("a",{staticClass:"body-2 black--text",attrs:{href:"#!"}},[t._v("EDIT")])])],1):e.children?i("v-list-group",t._b({key:e.text,attrs:{prependIcon:e.model?e.icon:e["icon-alt"],appendIcon:""},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(e.text)+"1 ")])],1)]},proxy:!0}],null,!0),model:{value:e.model,callback:function(i){t.$set(e,"model",i)},expression:"item.model"}},"v-list-group",t.navAppendAttrs,!1),t._l(e.children,(function(e,n){return i("v-list-item",{key:n,attrs:{link:""},on:{click:function(t){return e.click()}}},[e.icon?i("v-list-item-action",[i("v-icon",[t._v(t._s(e.icon))])],1):t._e(),i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(e.text)+" ")])],1)],1)})),1):t._e(),i("v-list-item",{key:e.text,attrs:{link:"",to:e.to}},[i("v-list-item-action",[i("v-icon",[t._v(t._s(e.icon))])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(e.text)+" ")])],1)],1)]:t._e()]}))],2)],1):t._e()},s=[],a=(i("c975"),i("5530")),o=i("f5ef"),r=i("2f62"),c={props:{source:{type:String,default:""}},data:function(){return{drawer:null}},computed:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(r["d"])(["UserInfo","Fetching"])),Object(r["c"])({PermissionName:"getPermissionName"})),{},{items:function(){var t=this;return[{icon:"mdi-desktop-mac-dashboard",text:"主控版",permission:"Y",to:{name:"dashboard"},click:function(){t.$router.push({name:"index"})}},{icon:"mdi-semantic-web","icon-alt":"mdi-shape-plus",text:"原物料",permission:"Y",model:!0,to:{name:"material"},click:function(){t.$router.push({name:"material"})}},{icon:"mdi-clipboard-list",text:"我的訂單",permission:"company"!==this.PermissionName?"Y":"N",to:{name:"order"},click:function(){t.$router.push({name:"order"})}},{icon:"mdi-account",text:"用戶管理",permission:"admin"===this.PermissionName||"agent"===this.PermissionName?"Y":"N",to:{name:"user"},click:function(){t.$router.push({name:"user"})}},{icon:"mdi-cog",text:"設定",permission:"Y",to:{name:"setting"},click:function(){t.$router.push({name:"setting"})}}]},navAttrs:function(){var t=this.UserInfo.permission_group.col_name;return["user","guest","company"].indexOf(t)>-1?{dark:"",src:"https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg"}:"agent"===t?{dark:"",src:"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"}:{}},badgeColor:function(){var t=this.UserInfo.permission_group.col_name;return["user","guest"].indexOf(t)>-1?{textColor:"white",color:"success"}:"agent"===t?{textColor:"indigo",color:"white"}:"company"===t?{textColor:"white",color:"teal"}:{textColor:"white",color:"indigo"}},navAppendAttrs:function(){var t=this.UserInfo.permission_group.col_name;return["user","guest"].indexOf(t)>-1?{activeClass:"white--text success"}:"company"===t?{activeClass:"white--text teal"}:{color:"blue-grey lighten-2"}}}),mounted:function(){var t=this;o["a"].$on("toggleNavigation",(function(){t.drawer=!t.drawer}))},methods:Object(a["a"])({logout:function(){var t=this;this.actionLogout().then((function(){t.$router.push({name:"login"})}))},routeToAddMaterial:function(){this.$router.push({name:"material"})}},Object(r["b"])(["actionLogout"]))},l=c,u=(i("d520"),i("2877")),h=i("6544"),d=i.n(h),p=i("8336"),m=i("cc20"),v=i("62ad"),f=i("ce7e"),g=i("132d"),b=i("8860"),x=i("56b0"),$=i("da13"),C=i("1800"),I=i("8270"),y=i("5d23"),k=(i("99af"),i("a9e3"),i("c7cd"),i("7958"),i("adda")),O=i("3a66"),w=i("a9ad"),A=i("b848"),_=i("e4cd"),T=i("e707"),j=i("d10f"),M=i("7560"),S=i("a293"),B=i("dc22"),V=i("c3f0"),D=i("80d2"),L=i("58df"),E=Object(L["a"])(Object(O["a"])("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),w["a"],A["a"],_["a"],T["a"],j["a"],M["a"]),P=E.extend({name:"v-navigation-drawer",provide:function(){return{isInNav:"nav"===this.tag}},directives:{ClickOutside:S["a"],Resize:B["a"],Touch:V["a"]},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return Object(a["a"])({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&_["a"].options.computed.isMobile.call(this)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX",e={height:Object(D["g"])(this.height),top:this.isBottom?"auto":Object(D["g"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(D["g"])(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(D["g"])(this.computedTransform,"%"),")"),width:Object(D["g"])(this.computedWidth)};return e}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(k["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives:function(){var t=this,e=[{name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners:function(){var t=this,e={transitionend:function(e){if(e.target===e.currentTarget){t.$emit("transitionend",e);var i=document.createEvent("UIEvents");i.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(i)}}};return this.miniVariant&&(e.click=function(){return t.$emit("update:mini-variant",!1)}),this.expandOnHover&&(e.mouseenter=function(){return t.isMouseover=!0},e.mouseleave=function(){return t.isMouseover=!1}),e},genPosition:function(t){var e=Object(D["r"])(this,t);return e?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},e):e},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.computedWidth);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(D["r"])(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),N=i("0fd9"),F=i("e0c7"),H=Object(u["a"])(l,n,s,!1,null,null,null);e["a"]=H.exports;d()(H,{VBtn:p["a"],VChip:m["a"],VCol:v["a"],VDivider:f["a"],VIcon:g["a"],VList:b["a"],VListGroup:x["a"],VListItem:$["a"],VListItemAction:C["a"],VListItemAvatar:I["a"],VListItemContent:y["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VNavigationDrawer:P,VRow:N["a"],VSubheader:F["a"]})},"68dd":function(t,e,i){},7958:function(t,e,i){},"8adc":function(t,e,i){},"8ce9":function(t,e,i){},"9e88":function(t,e,i){"use strict";i("4160"),i("159b");var n=i("5530"),s=(i("cf36"),i("5607")),a=i("a026"),o=i("132d"),r=i("a9ad"),c=i("7560"),l=i("d9f7"),u=i("80d2");e["a"]=a["a"].extend({name:"v-simple-checkbox",functional:!0,directives:{ripple:s["a"]},props:Object(n["a"])(Object(n["a"])(Object(n["a"])({},r["a"].options.props),c["a"].options.props),{},{disabled:Boolean,ripple:{type:Boolean,default:!0},value:Boolean,indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},onIcon:{type:String,default:"$checkboxOn"},offIcon:{type:String,default:"$checkboxOff"}}),render:function(t,e){var i=e.props,s=e.data,a=e.listeners,c=[];if(i.ripple&&!i.disabled){var h=t("div",r["a"].options.methods.setTextColor(i.color,{staticClass:"v-input--selection-controls__ripple",directives:[{name:"ripple",value:{center:!0}}]}));c.push(h)}var d=i.offIcon;i.indeterminate?d=i.indeterminateIcon:i.value&&(d=i.onIcon),c.push(t(o["a"],r["a"].options.methods.setTextColor(i.value&&i.color,{props:{disabled:i.disabled,dark:i.dark,light:i.light}}),d));var p={"v-simple-checkbox":!0,"v-simple-checkbox--disabled":i.disabled};return t("div",Object(n["a"])(Object(n["a"])({},s),{},{class:p,on:Object(l["c"])({click:function(t){t.stopPropagation(),s.on&&s.on.input&&!i.disabled&&Object(u["E"])(s.on.input).forEach((function(t){return t(!i.value)}))}},a)}),c)}})},b810:function(t,e,i){"use strict";var n=i("ce7e");e["a"]=n["a"]},b974:function(t,e,i){"use strict";i.d(e,"b",(function(){return T}));i("99af"),i("4de4"),i("c740"),i("a630"),i("caad"),i("d81d"),i("13d5"),i("fb6a"),i("a434"),i("b0c0"),i("4ec9"),i("d3b7"),i("ac1f"),i("25f0"),i("2532"),i("3ca3"),i("1276"),i("2ca0"),i("498a"),i("ddb0");var n=i("b85c"),s=i("ade3"),a=i("5530"),o=(i("4ff9"),i("68dd"),i("34ef")),r=i("326d"),c=(i("c975"),i("a15b"),i("b64b"),i("9e88")),l=i("b810"),u=i("24e2"),h=i("da13"),d=i("1800"),p=i("5d23"),m=i("8860"),v=i("5607"),f=i("a9ad"),g=i("7560"),b=i("80d2"),x=i("58df"),$=Object(x["a"])(f["a"],g["a"]).extend({name:"v-select-list",directives:{ripple:v["a"]},props:{action:Boolean,dense:Boolean,hideSelected:Boolean,items:{type:Array,default:function(){return[]}},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},noDataText:String,noFilter:Boolean,searchInput:null,selectedItems:{type:Array,default:function(){return[]}}},computed:{parsedItems:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},tileActiveClass:function(){return Object.keys(this.setTextColor(this.color).class||{}).join(" ")},staticNoDataTile:function(){var t={attrs:{role:void 0},on:{mousedown:function(t){return t.preventDefault()}}};return this.$createElement(h["a"],t,[this.genTileContent(this.noDataText)])}},methods:{genAction:function(t,e){var i=this;return this.$createElement(d["a"],[this.$createElement(c["a"],{props:{color:this.color,value:e},on:{input:function(){return i.$emit("select",t)}}})])},genDivider:function(t){return this.$createElement(l["a"],{props:t})},genFilteredText:function(t){if(t=t||"",!this.searchInput||this.noFilter)return Object(b["k"])(t);var e=this.getMaskedCharacters(t),i=e.start,n=e.middle,s=e.end;return"".concat(Object(b["k"])(i)).concat(this.genHighlight(n)).concat(Object(b["k"])(s))},genHeader:function(t){return this.$createElement(u["a"],{props:t},t.header)},genHighlight:function(t){return'<span class="v-list-item__mask">'.concat(Object(b["k"])(t),"</span>")},getMaskedCharacters:function(t){var e=(this.searchInput||"").toString().toLocaleLowerCase(),i=t.toLocaleLowerCase().indexOf(e);if(i<0)return{start:"",middle:t,end:""};var n=t.slice(0,i),s=t.slice(i,i+e.length),a=t.slice(i+e.length);return{start:n,middle:s,end:a}},genTile:function(t){var e=this,i=t.item,n=t.index,s=t.disabled,o=void 0===s?null:s,r=t.value,c=void 0!==r&&r;c||(c=this.hasItem(i)),i===Object(i)&&(o=null!==o?o:this.getDisabled(i));var l={attrs:{"aria-selected":String(c),id:"list-item-".concat(this._uid,"-").concat(n),role:"option"},on:{mousedown:function(t){t.preventDefault()},click:function(){return o||e.$emit("select",i)}},props:{activeClass:this.tileActiveClass,disabled:o,ripple:!0,inputValue:c}};if(!this.$scopedSlots.item)return this.$createElement(h["a"],l,[this.action&&!this.hideSelected&&this.items.length>0?this.genAction(i,c):null,this.genTileContent(i,n)]);var u=this,d=this.$scopedSlots.item({parent:u,item:i,attrs:Object(a["a"])(Object(a["a"])({},l.attrs),l.props),on:l.on});return this.needsTile(d)?this.$createElement(h["a"],l,d):d},genTileContent:function(t){var e=this.genFilteredText(this.getText(t));return this.$createElement(p["a"],[this.$createElement(p["c"],{domProps:{innerHTML:e}})])},hasItem:function(t){return this.parsedItems.indexOf(this.getValue(t))>-1},needsTile:function(t){return 1!==t.length||null==t[0].componentOptions||"v-list-item"!==t[0].componentOptions.Ctor.options.name},getDisabled:function(t){return Boolean(Object(b["q"])(t,this.itemDisabled,!1))},getText:function(t){return String(Object(b["q"])(t,this.itemText,t))},getValue:function(t){return Object(b["q"])(t,this.itemValue,this.getText(t))}},render:function(){for(var t=[],e=this.items.length,i=0;i<e;i++){var n=this.items[i];this.hideSelected&&this.hasItem(n)||(null==n?t.push(this.genTile({item:n,index:i})):n.header?t.push(this.genHeader(n)):n.divider?t.push(this.genDivider(n)):t.push(this.genTile({item:n,index:i})))}return t.length||t.push(this.$slots["no-data"]||this.staticNoDataTile),this.$slots["prepend-item"]&&t.unshift(this.$slots["prepend-item"]),this.$slots["append-item"]&&t.push(this.$slots["append-item"]),this.$createElement(m["a"],{staticClass:"v-select-list",class:this.themeClasses,attrs:{role:"listbox",tabindex:-1},props:{dense:this.dense}},t)}}),C=i("c37a"),I=i("8654"),y=i("8547"),k=i("a026"),O=k["a"].extend({name:"filterable",props:{noDataText:{type:String,default:"$vuetify.noDataText"}}}),w=i("a293"),A=i("d9f7"),_=i("d9bd"),T={closeOnClick:!1,closeOnContentClick:!1,disableKeys:!0,openOnClick:!1,maxHeight:304},j=Object(x["a"])(I["a"],y["a"],O);e["a"]=j.extend().extend({name:"v-select",directives:{ClickOutside:w["a"]},props:{appendIcon:{type:String,default:"$dropdown"},attach:{type:null,default:!1},cacheItems:Boolean,chips:Boolean,clearable:Boolean,deletableChips:Boolean,disableLookup:Boolean,eager:Boolean,hideSelected:Boolean,items:{type:Array,default:function(){return[]}},itemColor:{type:String,default:"primary"},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},menuProps:{type:[String,Array,Object],default:function(){return T}},multiple:Boolean,openOnClear:Boolean,returnObject:Boolean,smallChips:Boolean},data:function(){return{cachedItems:this.cacheItems?this.items:[],menuIsBooted:!1,isMenuActive:!1,lastItem:20,lazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,selectedIndex:-1,selectedItems:[],keyboardLookupPrefix:"",keyboardLookupLastTime:0}},computed:{allItems:function(){return this.filterDuplicates(this.cachedItems.concat(this.items))},classes:function(){return Object(a["a"])(Object(a["a"])({},I["a"].options.computed.classes.call(this)),{},{"v-select":!0,"v-select--chips":this.hasChips,"v-select--chips--small":this.smallChips,"v-select--is-menu-active":this.isMenuActive,"v-select--is-multi":this.multiple})},computedItems:function(){return this.allItems},computedOwns:function(){return"list-".concat(this._uid)},computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.getText(this.selectedItems[0])||"").toString().length},directives:function(){return this.isFocused?[{name:"click-outside",value:{handler:this.blur,closeConditional:this.closeConditional}}]:void 0},dynamicHeight:function(){return"auto"},hasChips:function(){return this.chips||this.smallChips},hasSlot:function(){return Boolean(this.hasChips||this.$scopedSlots.selection)},isDirty:function(){return this.selectedItems.length>0},listData:function(){var t=this.$vnode&&this.$vnode.context.$options._scopeId,e=t?Object(s["a"])({},t,!0):{};return{attrs:Object(a["a"])(Object(a["a"])({},e),{},{id:this.computedOwns}),props:{action:this.multiple,color:this.itemColor,dense:this.dense,hideSelected:this.hideSelected,items:this.virtualizedItems,itemDisabled:this.itemDisabled,itemText:this.itemText,itemValue:this.itemValue,noDataText:this.$vuetify.lang.t(this.noDataText),selectedItems:this.selectedItems},on:{select:this.selectItem},scopedSlots:{item:this.$scopedSlots.item}}},staticList:function(){return(this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"])&&Object(_["b"])("assert: staticList should not be called if slots are used"),this.$createElement($,this.listData)},virtualizedItems:function(){return this.$_menuProps.auto?this.computedItems:this.computedItems.slice(0,this.lastItem)},menuCanShow:function(){return!0},$_menuProps:function(){var t="string"===typeof this.menuProps?this.menuProps.split(","):this.menuProps;return Array.isArray(t)&&(t=t.reduce((function(t,e){return t[e.trim()]=!0,t}),{})),Object(a["a"])(Object(a["a"])({},T),{},{eager:this.eager,value:this.menuCanShow&&this.isMenuActive,nudgeBottom:t.offsetY?1:0},t)}},watch:{internalValue:function(t){this.initialValue=t,this.setSelectedItems()},menuIsBooted:function(){var t=this;window.setTimeout((function(){t.getContent()&&t.getContent().addEventListener&&t.getContent().addEventListener("scroll",t.onScroll,!1)}))},isMenuActive:function(t){var e=this;window.setTimeout((function(){return e.onMenuActiveChange(t)})),t&&(this.menuIsBooted=!0)},items:{immediate:!0,handler:function(t){var e=this;this.cacheItems&&this.$nextTick((function(){e.cachedItems=e.filterDuplicates(e.cachedItems.concat(t))})),this.setSelectedItems()}}},methods:{blur:function(t){I["a"].options.methods.blur.call(this,t),this.isMenuActive=!1,this.isFocused=!1,this.selectedIndex=-1},activateMenu:function(){this.isInteractive&&!this.isMenuActive&&(this.isMenuActive=!0)},clearableCallback:function(){var t=this;this.setValue(this.multiple?[]:void 0),this.setMenuIndex(-1),this.$nextTick((function(){return t.$refs.input&&t.$refs.input.focus()})),this.openOnClear&&(this.isMenuActive=!0)},closeConditional:function(t){return!this.isMenuActive||!this._isDestroyed&&(!this.getContent()||!this.getContent().contains(t.target))&&this.$el&&!this.$el.contains(t.target)&&t.target!==this.$el},filterDuplicates:function(t){for(var e=new Map,i=0;i<t.length;++i){var n=t[i],s=this.getValue(n);!e.has(s)&&e.set(s,n)}return Array.from(e.values())},findExistingIndex:function(t){var e=this,i=this.getValue(t);return(this.internalValue||[]).findIndex((function(t){return e.valueComparator(e.getValue(t),i)}))},getContent:function(){return this.$refs.menu&&this.$refs.menu.$refs.content},genChipSelection:function(t,e){var i=this,n=!this.isInteractive||this.getDisabled(t);return this.$createElement(o["a"],{staticClass:"v-chip--select",attrs:{tabindex:-1},props:{close:this.deletableChips&&!n,disabled:n,inputValue:e===this.selectedIndex,small:this.smallChips},on:{click:function(t){n||(t.stopPropagation(),i.selectedIndex=e)},"click:close":function(){return i.onChipInput(t)}},key:JSON.stringify(this.getValue(t))},this.getText(t))},genCommaSelection:function(t,e,i){var n=e===this.selectedIndex&&this.computedColor,s=!this.isInteractive||this.getDisabled(t);return this.$createElement("div",this.setTextColor(n,{staticClass:"v-select__selection v-select__selection--comma",class:{"v-select__selection--disabled":s},key:JSON.stringify(this.getValue(t))}),"".concat(this.getText(t)).concat(i?"":", "))},genDefaultSlot:function(){var t=this.genSelections(),e=this.genInput();return Array.isArray(t)?t.push(e):(t.children=t.children||[],t.children.push(e)),[this.genFieldset(),this.$createElement("div",{staticClass:"v-select__slot",directives:this.directives},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,t,this.suffix?this.genAffix("suffix"):null,this.genClearIcon(),this.genIconSlot(),this.genHiddenInput()]),this.genMenu(),this.genProgress()]},genIcon:function(t,e,i){var n=C["a"].options.methods.genIcon.call(this,t,e,i);return"append"===t&&(n.children[0].data=Object(A["a"])(n.children[0].data,{attrs:{tabindex:n.children[0].componentOptions.listeners&&"-1","aria-hidden":"true","aria-label":void 0}})),n},genInput:function(){var t=I["a"].options.methods.genInput.call(this);return delete t.data.attrs.name,t.data=Object(A["a"])(t.data,{domProps:{value:null},attrs:{readonly:!0,type:"text","aria-readonly":String(this.isReadonly),"aria-activedescendant":Object(b["o"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(b["o"])(t.data,"attrs.autocomplete","off")},on:{keypress:this.onKeyPress}}),t},genHiddenInput:function(){return this.$createElement("input",{domProps:{value:this.lazyValue},attrs:{type:"hidden",name:this.attrs$.name}})},genInputSlot:function(){var t=I["a"].options.methods.genInputSlot.call(this);return t.data.attrs=Object(a["a"])(Object(a["a"])({},t.data.attrs),{},{role:"button","aria-haspopup":"listbox","aria-expanded":String(this.isMenuActive),"aria-owns":this.computedOwns}),t},genList:function(){return this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"]?this.genListWithSlot():this.staticList},genListWithSlot:function(){var t=this,e=["prepend-item","no-data","append-item"].filter((function(e){return t.$slots[e]})).map((function(e){return t.$createElement("template",{slot:e},t.$slots[e])}));return this.$createElement($,Object(a["a"])({},this.listData),e)},genMenu:function(){var t=this,e=this.$_menuProps;return e.activator=this.$refs["input-slot"],""===this.attach||!0===this.attach||"attach"===this.attach?e.attach=this.$el:e.attach=this.attach,this.$createElement(r["a"],{attrs:{role:void 0},props:e,on:{input:function(e){t.isMenuActive=e,t.isFocused=e}},ref:"menu"},[this.genList()])},genSelections:function(){var t,e=this.selectedItems.length,i=new Array(e);t=this.$scopedSlots.selection?this.genSlotSelection:this.hasChips?this.genChipSelection:this.genCommaSelection;while(e--)i[e]=t(this.selectedItems[e],e,e===i.length-1);return this.$createElement("div",{staticClass:"v-select__selections"},i)},genSlotSelection:function(t,e){var i=this;return this.$scopedSlots.selection({attrs:{class:"v-chip--select"},parent:this,item:t,index:e,select:function(t){t.stopPropagation(),i.selectedIndex=e},selected:e===this.selectedIndex,disabled:!this.isInteractive})},getMenuIndex:function(){return this.$refs.menu?this.$refs.menu.listIndex:-1},getDisabled:function(t){return Object(b["q"])(t,this.itemDisabled,!1)},getText:function(t){return Object(b["q"])(t,this.itemText,t)},getValue:function(t){return Object(b["q"])(t,this.itemValue,this.getText(t))},onBlur:function(t){t&&this.$emit("blur",t)},onChipInput:function(t){this.multiple?this.selectItem(t):this.setValue(null),0===this.selectedItems.length?this.isMenuActive=!0:this.isMenuActive=!1,this.selectedIndex=-1},onClick:function(t){this.isInteractive&&(this.isAppendInner(t.target)||(this.isMenuActive=!0),this.isFocused||(this.isFocused=!0,this.$emit("focus")),this.$emit("click",t))},onEscDown:function(t){t.preventDefault(),this.isMenuActive&&(t.stopPropagation(),this.isMenuActive=!1)},onKeyPress:function(t){var e=this;if(!this.multiple&&this.isInteractive&&!this.disableLookup){var i=1e3,n=performance.now();n-this.keyboardLookupLastTime>i&&(this.keyboardLookupPrefix=""),this.keyboardLookupPrefix+=t.key.toLowerCase(),this.keyboardLookupLastTime=n;var s=this.allItems.findIndex((function(t){var i=(e.getText(t)||"").toString();return i.toLowerCase().startsWith(e.keyboardLookupPrefix)})),a=this.allItems[s];-1!==s&&(this.lastItem=Math.max(this.lastItem,s+5),this.setValue(this.returnObject?a:this.getValue(a)),this.$nextTick((function(){return e.$refs.menu.getTiles()})),setTimeout((function(){return e.setMenuIndex(s)})))}},onKeyDown:function(t){var e=this;if(!this.isReadonly||t.keyCode===b["w"].tab){var i=t.keyCode,n=this.$refs.menu;if([b["w"].enter,b["w"].space].includes(i)&&this.activateMenu(),this.$emit("keydown",t),n)return this.isMenuActive&&i!==b["w"].tab&&this.$nextTick((function(){n.changeListIndex(t),e.$emit("update:list-index",n.listIndex)})),!this.isMenuActive&&[b["w"].up,b["w"].down].includes(i)?this.onUpDown(t):i===b["w"].esc?this.onEscDown(t):i===b["w"].tab?this.onTabDown(t):i===b["w"].space?this.onSpaceDown(t):void 0}},onMenuActiveChange:function(t){if(!(this.multiple&&!t||this.getMenuIndex()>-1)){var e=this.$refs.menu;if(e&&this.isDirty)for(var i=0;i<e.tiles.length;i++)if("true"===e.tiles[i].getAttribute("aria-selected")){this.setMenuIndex(i);break}}},onMouseUp:function(t){var e=this;this.hasMouseDown&&3!==t.which&&this.isInteractive&&(this.isAppendInner(t.target)?this.$nextTick((function(){return e.isMenuActive=!e.isMenuActive})):this.isEnclosed&&(this.isMenuActive=!0)),I["a"].options.methods.onMouseUp.call(this,t)},onScroll:function(){var t=this;if(this.isMenuActive){if(this.lastItem>=this.computedItems.length)return;var e=this.getContent().scrollHeight-(this.getContent().scrollTop+this.getContent().clientHeight)<200;e&&(this.lastItem+=20)}else requestAnimationFrame((function(){return t.getContent().scrollTop=0}))},onSpaceDown:function(t){t.preventDefault()},onTabDown:function(t){var e=this.$refs.menu;if(e){var i=e.activeTile;!this.multiple&&i&&this.isMenuActive?(t.preventDefault(),t.stopPropagation(),i.click()):this.blur(t)}},onUpDown:function(t){var e=this.$refs.menu;if(e){if(t.preventDefault(),this.multiple)return this.activateMenu();var i=t.keyCode;e.isBooted=!0,window.requestAnimationFrame((function(){e.getTiles(),b["w"].up===i?e.prevTile():e.nextTile(),e.activeTile&&e.activeTile.click()}))}},selectItem:function(t){var e=this;if(this.multiple){var i=(this.internalValue||[]).slice(),n=this.findExistingIndex(t);if(-1!==n?i.splice(n,1):i.push(t),this.setValue(i.map((function(t){return e.returnObject?t:e.getValue(t)}))),this.$nextTick((function(){e.$refs.menu&&e.$refs.menu.updateDimensions()})),!this.multiple)return;var s=this.getMenuIndex();if(this.setMenuIndex(-1),this.hideSelected)return;this.$nextTick((function(){return e.setMenuIndex(s)}))}else this.setValue(this.returnObject?t:this.getValue(t)),this.isMenuActive=!1},setMenuIndex:function(t){this.$refs.menu&&(this.$refs.menu.listIndex=t)},setSelectedItems:function(){var t,e=this,i=[],s=this.multiple&&Array.isArray(this.internalValue)?this.internalValue:[this.internalValue],a=Object(n["a"])(s);try{var o=function(){var n=t.value,s=e.allItems.findIndex((function(t){return e.valueComparator(e.getValue(t),e.getValue(n))}));s>-1&&i.push(e.allItems[s])};for(a.s();!(t=a.n()).done;)o()}catch(r){a.e(r)}finally{a.f()}this.selectedItems=i},setValue:function(t){var e=this.internalValue;this.internalValue=t,t!==e&&this.$emit("change",t)},isAppendInner:function(t){var e=this.$refs["append-inner"];return e&&(e===t||e.contains(t))}}})},cc20:function(t,e,i){"use strict";i("4de4"),i("4160");var n=i("3835"),s=i("5530"),a=(i("8adc"),i("58df")),o=i("0789"),r=i("9d26"),c=i("a9ad"),l=i("4e82"),u=i("7560"),h=i("f2e7"),d=i("1c87"),p=i("af2b"),m=i("d9bd");e["a"]=Object(a["a"])(c["a"],p["a"],d["a"],u["a"],Object(l["a"])("chipGroup"),Object(h["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({"v-chip":!0},d["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(d["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=Object(n["a"])(e,2),s=i[0],a=i[1];t.$attrs.hasOwnProperty(s)&&Object(m["a"])(s,a,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(r["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(o["b"],t)},genClose:function(){var t=this;return this.$createElement(r["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),n=i.tag,a=i.data;a.attrs=Object(s["a"])(Object(s["a"])({},a.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:a.attrs.tabindex}),a.directives.push({name:"show",value:this.active}),a=this.setBackgroundColor(this.color,a);var o=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(o,a),e)}})},ce7e:function(t,e,i){"use strict";var n=i("5530"),s=(i("8ce9"),i("7560"));e["a"]=s["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(n["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(n["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},cf36:function(t,e,i){},d520:function(t,e,i){"use strict";var n=i("ea37"),s=i.n(n);s.a},e0c7:function(t,e,i){"use strict";var n=i("5530"),s=(i("0bc6"),i("7560")),a=i("58df");e["a"]=Object(a["a"])(s["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object(n["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},e4cd:function(t,e,i){"use strict";i("caad"),i("b0c0"),i("a9e3");var n=i("d9bd"),s=i("a026");e["a"]=s["a"].extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default:function(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:function(t){return!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}}},computed:{isMobile:function(){var t=this.$vuetify.breakpoint,e=t.mobile,i=t.width,n=t.name,s=t.mobileBreakpoint;if(s===this.mobileBreakpoint)return e;var a=parseInt(this.mobileBreakpoint,10),o=!isNaN(a);return o?i<a:n===this.mobileBreakpoint}},created:function(){this.$attrs.hasOwnProperty("mobile-break-point")&&Object(n["d"])("mobile-break-point","mobile-breakpoint",this)}})},ea37:function(t,e,i){}}]);
//# sourceMappingURL=chunk-4a918571.487e7ecb.js.map