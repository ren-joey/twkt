(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bd388f0"],{1511:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.UserInfo&&"Y"===e.UserInfo.is_login?i("v-app",[i("Navigation"),i("Header"),i("User"),i("DialogContact")],1):e._e()},s=[],r=i("5530"),n=i("2f62"),l=i("ad1b"),o=i("608b"),c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-main",[e.$route.params.user_id?i("v-container",[i("v-breadcrumbs",{attrs:{items:e.history},scopedSlots:e._u([{key:"divider",fn:function(){return[i("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])}),i("UserDetail")],1):i("v-container",[i("v-breadcrumbs",{attrs:{items:e.history},scopedSlots:e._u([{key:"divider",fn:function(){return[i("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}],null,!1,3681283568)}),i("UserTable",{attrs:{subtitle:"一般用戶"}}),i("CompanyTable",{attrs:{subtitle:"廠商"}}),i("AgentTable",{attrs:{subtitle:"專員"}}),i("AdminTable",{attrs:{subtitle:"管理員"}}),"user"!==e.PermissionName&&"guest"!==e.PermissionName?i("v-btn",{attrs:{bottom:"",color:"pink",dark:"",fab:"",fixed:"",right:""},on:{click:function(t){return e.bus.$emit("addUser")}}},[i("v-icon",[e._v("mdi-plus")])],1):e._e()],1),i("DialogAddUser")],1)},d=[],u=i("f5ef"),m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-dialog",{attrs:{width:"480px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"primary white--text"},[e._v(" 新增用戶 ")]),i("v-container",[i("v-form",{attrs:{lazyValidation:""}},[i("v-row",{staticClass:"mx-2 align-center"},[i("v-col",{attrs:{cols:"12",sm:"6"}},[i("v-select",{attrs:{items:e.permissionGroups,label:"用戶類型",rounded:"",filled:"",dense:"",required:"",disabled:"Y"===e.groupIdLock},model:{value:e.userData.permission_group_id,callback:function(t){e.$set(e.userData,"permission_group_id",t)},expression:"userData.permission_group_id"}})],1),i("v-col",{attrs:{cols:"12",sm:"6"}},[i("v-text-field",{attrs:{label:"流水號 (系統自動生成)",dense:"",disabled:"",required:""},model:{value:e.userData.serial_number,callback:function(t){e.$set(e.userData,"serial_number",t)},expression:"userData.serial_number"}})],1)],1),i("v-row",{staticClass:"mx-2"},[i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{counter:32,label:"用戶名稱",rounded:"",filled:"",dense:"",required:""},model:{value:e.userData.name,callback:function(t){e.$set(e.userData,"name",t)},expression:"userData.name"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"電子郵件",rounded:"",filled:"",dense:"",required:""},model:{value:e.userData.email,callback:function(t){e.$set(e.userData,"email",t)},expression:"userData.email"}})],1),i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"d-flex",staticStyle:{width:"100%"}},[i("div",{attrs:{stlye:"flex: 1;"}},[i("v-text-field",{attrs:{label:"密碼",type:"Y"===e.passwordVisible?"text":"password",rounded:"",filled:"",dense:"",required:""},model:{value:e.userData.password,callback:function(t){e.$set(e.userData,"password",t)},expression:"userData.password"}})],1),i("div",{staticClass:"ml-2",staticStyle:{width:"auto"}},[i("v-btn",{attrs:{icon:"",color:"Y"===e.passwordVisible?"grey":"grey lighten-3",large:""},on:{click:function(t){"Y"===e.passwordVisible?e.passwordVisible="N":e.passwordVisible="Y"}}},[i("v-icon",[e._v("mdi-eye")])],1)],1)])]),i("v-col",{staticClass:"d-flex justify-end"},[i("v-btn",{attrs:{color:"grey light-4 mr-4",text:"",large:""},on:{click:function(t){e.dialog=!1}}},[e._v(" 取消 ")]),i("v-btn",{staticClass:"mx-1",attrs:{color:"primary",large:""},on:{click:e.userDataValidator}},[i("v-icon",[e._v("mdi-check")]),e._v(" 確認 ")],1)],1)],1)],1)],1)],1)],1)},v=[],f=(i("7db0"),i("d81d"),i("d3b7"),i("bc3a")),p=i.n(f),h={data:function(){return{dialog:!1,passwordVisible:"N",userData:{permission_group_id:"",serial_number:"",name:"",email:"",password:""},items:{order:[{text:"R001 蝦紅素 (藻紅素)",value:"R001"},{text:"R002 鮭魚/魚精華素",value:"R002"},{text:"R003 神經醯胺(賽洛美)",value:"R003"},{text:"R029 維生素類",value:"R029"}],location:["Item 1","Item 2","Item 3","Item 4"],origin:["美國","台灣","日本","瑞士","中國"],spec_1:"",spec_2:["粉末","造粒","油狀","液狀","膏狀","其他"],certification:["Kosher","Halal","FSSC","MSC","GMP","NGMO","GRAS","HACCP","PDR","JECFA","ESCOP","BHMA","CE","ISO","素","有機"],fn:["頭髮","腦力","睡眠","視力","骨骼","口腔","肝臟功能","心臟功能","心血管","免疫","腸胃","排便","皮膚美容","美白","抗癌","抗發炎","調節血糖","調節血脂","調節血壓","抗憂鬱","抗過敏","控制體重","男性功能","女性泌尿道","經期/更年期","除臭","增加吸收率"]},permissionGroups:[],groupIdLock:"N"}},watch:{dialog:function(e){!1===e&&(this.groupIdLock="N")},"userData.permission_group_id":function(e){var t=this.permissionGroups.find((function(t){return t.id===e})).col_name;this.getSerialNumber(t)}},mounted:function(){var e=this;p()({method:"GET",url:"api/permission-groups"}).then((function(t){e.permissionGroups=t.data.map((function(e){return Object(r["a"])({text:e.tw_name,value:e.id},e)}))})),u["a"].$on("addUser",(function(t){e.dialog=!0,t?(e.getSerialNumber(t),e.userData.permission_group_id=e.permissionGroups.find((function(e){return e.col_name===t})).id,e.groupIdLock="Y"):e.userData.permission_group_id=e.permissionGroups.find((function(e){return"user"===e.col_name})).id}))},methods:{userDataValidator:function(){this.fetchRegister()},getSerialNumber:function(e){var t=this;p()({method:"GET",url:"api/get-serial-number",params:{user_type:e}}).then((function(e){t.userData.serial_number=e.data})).catch((function(e){alert(e.data.message)}))},fetchRegister:function(){var e=this;p()({method:"POST",url:"api/create",params:Object(r["a"])(Object(r["a"])({},this.userData),{},{password_confirmation:this.userData.password})}).then((function(){e.$store.dispatch("actionFetchUsers")})).catch((function(e){alert(e)})).finally((function(){e.dialog=!1}))}}},b=h,_=i("2877"),g=i("6544"),x=i.n(g),C=i("8336"),w=i("b0af"),V=i("99d9"),k=i("62ad"),y=i("a523"),I=i("169a"),O=i("4bd4"),S=i("132d"),j=i("0fd9"),$=i("b974"),D=i("8654"),N=Object(_["a"])(b,m,v,!1,null,null,null),P=N.exports;x()(N,{VBtn:C["a"],VCard:w["a"],VCardTitle:V["d"],VCol:k["a"],VContainer:y["a"],VDialog:I["a"],VForm:O["a"],VIcon:S["a"],VRow:j["a"],VSelect:$["a"],VTextField:D["a"]});var U=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.user?i("div",[i("v-card",{staticClass:"mx-auto my-4",attrs:{maxWidth:"800"}},[i("v-card-title",{staticClass:"headline d-flex justify-space-between align-center"},[i("div",{staticClass:"d-flex align-center"},[i("v-list-item-avatar",{attrs:{color:e.badgeColor.color,size:"48"}},[i("span",{class:[e.badgeColor.textColor+"--text"],staticStyle:{"font-size":"0.75em"}},[e._v(" "+e._s(e.user.user_information.name.toUpperCase().substring(0,2))+" ")])]),e._v(" 基本資料 ")],1)]),i("v-card-text",[i("v-divider"),i("v-form",[i("v-container",[i("v-row",{staticClass:"align-center"},[i("v-col",{attrs:{cols:"4",md:"2"}},[i("v-text-field",{attrs:{label:"流水號",disabled:"",dense:""},model:{value:e.user.user_information.serial_number,callback:function(t){e.$set(e.user.user_information,"serial_number",t)},expression:"user.user_information.serial_number"}})],1),i("v-col",{attrs:{cols:"6",md:"4"}},[i("v-text-field",e._b({attrs:{counter:"N"!==e.editMode&&32,label:"名稱"},model:{value:e.user.user_information.name,callback:function(t){e.$set(e.user.user_information,"name",t)},expression:"user.user_information.name"}},"v-text-field",e.inputAttributes,!1))],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12",sm:"4"}},[i("v-text-field",e._b({attrs:{label:"統一編號",prependIcon:"mdi-identifier"},model:{value:e.user.user_information.tax_id,callback:function(t){e.$set(e.user.user_information,"tax_id",t)},expression:"user.user_information.tax_id"}},"v-text-field",e.inputAttributes,!1))],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12",sm:"8"}},[i("v-text-field",e._b({attrs:{label:"電子郵件",prependIcon:"mdi-email"},model:{value:e.user.user_information.email,callback:function(t){e.$set(e.user.user_information,"email",t)},expression:"user.user_information.email"}},"v-text-field",e.inputAttributes,!1))],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12",sm:"6"}},[i("v-text-field",e._b({attrs:{label:"公司電話",prependIcon:"mdi-phone"},model:{value:e.user.user_information.phone,callback:function(t){e.$set(e.user.user_information,"phone",t)},expression:"user.user_information.phone"}},"v-text-field",e.inputAttributes,!1))],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12",sm:"6"}},[i("v-text-field",e._b({attrs:{label:"傳真號碼",prependIcon:"mdi-fax"},model:{value:e.user.user_information.fax,callback:function(t){e.$set(e.user.user_information,"fax",t)},expression:"user.user_information.fax"}},"v-text-field",e.inputAttributes,!1))],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-text-field",e._b({attrs:{label:"地址",prependIcon:"mdi-map-marker"},model:{value:e.user.user_information.address,callback:function(t){e.$set(e.user.user_information,"address",t)},expression:"user.user_information.address"}},"v-text-field",e.inputAttributes,!1))],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-text-field",e._b({attrs:{label:"官方網站",prependIcon:"mdi-web"},model:{value:e.user.user_information.url,callback:function(t){e.$set(e.user.user_information,"url",t)},expression:"user.user_information.url"}},"v-text-field",e.inputAttributes,!1))],1)],1),i("v-row",[i("v-col",{attrs:{cols:"6",sm:"4"}},[i("v-text-field",e._b({attrs:{label:"聯絡人",prependIcon:"mdi-account-tie"},model:{value:e.user.user_information.liaison_name,callback:function(t){e.$set(e.user.user_information,"liaison_name",t)},expression:"user.user_information.liaison_name"}},"v-text-field",e.inputAttributes,!1))],1),i("v-col",{attrs:{cols:"6",sm:"4"}},[i("v-text-field",e._b({attrs:{label:"聯繫方式",prependIcon:"mdi-card-account-phone"},model:{value:e.user.user_information.liaison_phone,callback:function(t){e.$set(e.user.user_information,"liaison_phone",t)},expression:"user.user_information.liaison_phone"}},"v-text-field",e.inputAttributes,!1))],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-text-field",e._b({attrs:{label:"服務項目",prependIcon:"mdi-face-agent"},model:{value:e.user.user_information.service,callback:function(t){e.$set(e.user.user_information,"service",t)},expression:"user.user_information.service"}},"v-text-field",e.inputAttributes,!1))],1)],1),"N"===e.editMode?i("div",{staticClass:"d-flex justify-center"},[i("v-btn",{staticClass:"ma-2",attrs:{color:"success",xLarge:""},on:{click:function(t){e.editMode="Y"}}},[i("v-icon",{attrs:{left:""}},[e._v("mdi-pencil")]),e._v(" 修改 ")],1)],1):i("div",{staticClass:"d-flex justify-center"},[i("v-btn",{staticClass:"ma-2",attrs:{text:"",color:"grey",xLarge:""},on:{click:e.editCancel}},[e._v(" 取消 ")]),i("v-btn",{staticClass:"ma-2",attrs:{color:"primary",xLarge:"",loading:"Y"===e.editUserFetching},on:{click:e.editSubmit}},[i("v-icon",{attrs:{left:""}},[e._v("mdi-check")]),e._v(" 確認修改 ")],1)],1)],1)],1)],1)],1),i("v-card",{staticClass:"mx-auto my-4",attrs:{maxWidth:"800"}},[i("v-card-title",{staticClass:"headline d-flex justify-space-between align-center"},[i("div",[e.notificationEnable?i("v-icon",{staticClass:"mr-2"},[e._v("mdi-bell")]):i("v-icon",{staticClass:"mr-2"},[e._v("mdi-bell-off")]),e._v(" Notification Settings ")],1),i("div",{staticClass:"ml-auto"},[i("v-switch",{attrs:{label:e.notificationEnable?"啟用":"關閉"},model:{value:e.notificationEnable,callback:function(t){e.notificationEnable=t},expression:"notificationEnable"}})],1)]),i("v-card-text",[i("v-divider"),i("v-form",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"4"}},[i("v-text-field",{attrs:{label:"LINE ID",prependInnerIcon:"mdi-chat",filled:"",rounded:"",dense:""},model:{value:e.user.user_information.line_id,callback:function(t){e.$set(e.user.user_information,"line_id",t)},expression:"user.user_information.line_id"}})],1),i("v-col",{attrs:{cols:"12",sm:"4"}},[i("v-text-field",{attrs:{label:"WeChat ID",prependInnerIcon:"mdi-wechat",filled:"",rounded:"",dense:""},model:{value:e.user.user_information.wechat_id,callback:function(t){e.$set(e.user.user_information,"wechat_id",t)},expression:"user.user_information.wechat_id"}})],1),i("v-col",{attrs:{cols:"12",sm:"4"}},[i("v-text-field",{attrs:{label:"WhatsApp ID",prependInnerIcon:"mdi-whatsapp",filled:"",rounded:"",dense:""},model:{value:e.user.user_information.whatsapp_id,callback:function(t){e.$set(e.user.user_information,"whatsapp_id",t)},expression:"user.user_information.whatsapp_id"}})],1)],1),i("div",{staticClass:"d-flex justify-center"},[i("v-btn",{staticClass:"ma-2",attrs:{color:"primary",xLarge:"",loading:"Y"===e.editUserFetching},on:{click:e.editSubmit}},[i("v-icon",{attrs:{left:""}},[e._v("mdi-check")]),e._v(" 確認修改 ")],1)],1)],1)],1)],1)],1),i("v-card",{staticClass:"mx-auto my-4",attrs:{maxWidth:"800"}},[i("v-card-title",{staticClass:"headline d-flex justify-space-between align-center"},[i("div",{staticClass:"d-flex align-center"},[i("v-icon",{staticClass:"mr-2"},[e._v("mdi-lock-reset")]),e._v(" 重設密碼 ")],1)]),i("v-card-text",[i("v-divider"),i("v-form",[i("v-container",[i("div",{staticClass:"d-flex align-center"},[i("div",{staticStyle:{flex:"1"}},[i("v-text-field",{attrs:{type:"Y"===e.passwordVisible?"text":"password",counter:32,label:"請輸入新密碼",dense:"",rounded:"",filled:"",clearable:""},model:{value:e.resetPassword,callback:function(t){e.resetPassword=t},expression:"resetPassword"}})],1),i("div",{staticClass:"ml-2",staticStyle:{width:"auto"}},[i("v-btn",{attrs:{icon:"",color:"Y"===e.passwordVisible?"grey":"grey lighten-3",large:""},on:{click:function(t){"Y"===e.passwordVisible?e.passwordVisible="N":e.passwordVisible="Y"}}},[i("v-icon",[e._v("mdi-eye")])],1)],1)]),i("div",{staticClass:"d-flex justify-center"},[i("div",{staticClass:"mx-2"},[i("v-btn",{attrs:{color:"primary",dark:"",xLarge:"",loading:"Y"===e.resetPasswordFetching},on:{click:e.resetPasswordSubmit}},[e._v(" 重設密碼 ")])],1)])])],1)],1)],1)],1):e._e()},A=[],T=(i("c975"),{data:function(){return{bus:u["a"],user:void 0,userOrigin:void 0,editMode:"N",resetPassword:"",passwordVisible:"N",notificationEnable:!1,editUserFetching:"N",resetPasswordFetching:"N"}},computed:Object(r["a"])(Object(r["a"])({inputAttributes:function(){return[{disabled:"N"===this.editMode},{filled:!0},{rounded:!0},{dense:!0}]},badgeColor:function(){var e=this.user.permission_group.col_name;return["user","guest"].indexOf(e)>-1?{textColor:"white",color:"success"}:"agent"===e?{textColor:"indigo",color:"white"}:"company"===e?{textColor:"white",color:"teal"}:{textColor:"white",color:"indigo"}}},Object(n["c"])({PermissionName:"getPermissionName"})),Object(n["d"])(["Fetching","Users","UserInfo"])),watch:{dialog:function(e){e||this.close()}},mounted:function(){this.fetchUserData()},methods:{fetchUserData:function(){var e=this;p()({method:"GET",url:"api/user/".concat(this.$route.params.user_id)}).then((function(t){t.data.id||e.$router.push({name:"user"}),e.user=t.data,e.userOrigin=JSON.parse(JSON.stringify(t.data))})).catch((function(e){alert(e)}))},editCancel:function(){this.user=JSON.parse(JSON.stringify(this.userOrigin)),this.editMode="N"},editSubmit:function(){var e=this;"Y"!==this.editUserFetching&&(this.editUserFetching="Y",p()({method:"PATCH",url:"api/user/".concat(this.$route.params.user_id),params:this.user.user_information}).then((function(t){e.user=t.data,e.userOrigin=JSON.parse(JSON.stringify(t.data)),e.$store.dispatch("actionFetchUsers")})).catch((function(e){alert(e)})).finally((function(){e.editUserFetching="N",e.editMode="N"})))},resetPasswordSubmit:function(){var e=this;"Y"!==this.resetPasswordFetching&&(this.resetPasswordFetching="Y",p()({method:"POST",url:"api/user/".concat(this.$route.params.user_id),params:{password:this.resetPassword}}).then((function(){alert("密碼更新成功")})).catch((function(e){alert(e)})).finally((function(){e.resetPasswordFetching="N"})))}}}),E=T,F=i("ce7e"),Y=i("8270"),M=i("b73d"),R=Object(_["a"])(E,U,A,!1,null,null,null),B=R.exports;x()(R,{VBtn:C["a"],VCard:w["a"],VCardText:V["c"],VCardTitle:V["d"],VCol:k["a"],VContainer:y["a"],VDivider:F["a"],VForm:O["a"],VIcon:S["a"],VListItemAvatar:Y["a"],VRow:j["a"],VSwitch:M["a"],VTextField:D["a"]});var L=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{staticClass:"mx-auto my-4",attrs:{width:"100%"}},[i("v-card-title",{staticClass:"headline d-flex justify-space-between align-center"},[i("div",{staticClass:"d-flex align-center"},[i("v-icon",{staticClass:"mr-2"},[e._v("mdi-account")]),e._v(" "+e._s(e.subtitle)+" ")],1),"user"!==e.PermissionName&&"guest"!==e.PermissionName?i("div",{staticClass:"mr-4"},[i("v-btn",{attrs:{fab:"",dark:"",color:"pink",small:""},on:{click:function(t){return e.bus.$emit("addUser","user")}}},[i("v-icon",[e._v("mdi-plus")])],1)],1):e._e()]),i("v-card-text",[i("v-divider"),i("v-data-table",{attrs:{headers:e.headers,items:e.users,itemKey:"serial_number"},on:{"click:row":e.rowClickHandler},scopedSlots:e._u([{key:"top",fn:function(){return[i("v-dialog",{attrs:{maxWidth:"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",{attrs:{loading:"Y"===e.Fetching.actionEditMaterial}},[i("v-card-title",[i("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{label:"Dessert name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{label:"Calories"},model:{value:e.editedItem.calories,callback:function(t){e.$set(e.editedItem,"calories",t)},expression:"editedItem.calories"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{label:"Fat (g)"},model:{value:e.editedItem.fat,callback:function(t){e.$set(e.editedItem,"fat",t)},expression:"editedItem.fat"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{label:"Carbs (g)"},model:{value:e.editedItem.carbs,callback:function(t){e.$set(e.editedItem,"carbs",t)},expression:"editedItem.carbs"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{label:"Protein (g)"},model:{value:e.editedItem.protein,callback:function(t){e.$set(e.editedItem,"protein",t)},expression:"editedItem.protein"}})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1)]},proxy:!0},{key:"item.email",fn:function(t){var a=t.item;return[e._v(" "+e._s(a.email)+" "),a.email_verified_at?i("v-chip",e._b({staticClass:"ma-1",attrs:{small:""}},"v-chip",{textColor:"white",color:"success"},!1),[i("v-icon",{attrs:{small:""}},[e._v("mdi-shield-check")]),e._v(" "+e._s(a.permission_group.tw_name)+" ")],1):i("v-chip",{staticClass:"ma-1",attrs:{small:""}},[i("v-icon",{attrs:{small:""}},[e._v("mdi-shield-remove")]),e._v(" 未驗證 ")],1)]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)],1)},H=[],G=(i("4de4"),i("a434"),{props:{id:{type:String,default:""},subtitle:{type:String,default:""}},data:function(){return{bus:u["a"],dialog:!1,singleSelect:!1,selected:[],singleExpand:!1,expanded:[],editedIndex:-1,editedItem:{material_id:"",material_name:"",material_source:"",material_spec_1:"",material_spec_2:"",material_origin:"",material_patent:"",material_certification:"",material_clinic:"",material_fn:""}}},computed:Object(r["a"])(Object(r["a"])({formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"},headers:function(){return[{text:"編號",value:"user_information.serial_number"},{text:"email",align:"start",value:"email"},{text:"名稱",value:"name"},{text:"註冊日期",value:"created_at"},{text:"",value:"data-table-expand"}]},users:function(){return this.Users.filter((function(e){return"user"===e.permission_group.col_name||"guest"===e.permission_group.col_name}))}},Object(n["c"])({PermissionName:"getPermissionName"})),Object(n["d"])(["Fetching","Users","UserInfo"])),watch:{dialog:function(e){e||this.close()}},methods:{editItem:function(e){this.editedIndex=this.materials.indexOf(e),this.editedItem=Object(r["a"])({},e),this.dialog=!0},deleteItem:function(e){var t=window,i=t.confirm,a=this.materials.indexOf(e);i("Are you sure you want to delete this item?")&&this.materials.splice(a,1)},close:function(){var e=this;this.dialog=!1,setTimeout((function(){e.editedItem=Object(r["a"])({},e.defaultItem),e.editedIndex=-1}),300)},save:function(){var e=this;this.fetching.editMaterial="Y",setTimeout((function(){e.fetching.editMaterial="N",e.editedIndex>-1?Object.assign(e.materials[e.editedIndex],e.editedItem):e.materials.push(e.editedItem),e.close()}),2e3)},rowClickHandler:function(e){this.$router.push({name:"user",params:{user_id:e.id}})}}}),J=G,K=i("cc20"),z=i("8fea"),W=i("2fa4"),q=Object(_["a"])(J,L,H,!1,null,null,null),Q=q.exports;x()(q,{VBtn:C["a"],VCard:w["a"],VCardActions:V["a"],VCardText:V["c"],VCardTitle:V["d"],VChip:K["a"],VCol:k["a"],VContainer:y["a"],VDataTable:z["a"],VDialog:I["a"],VDivider:F["a"],VIcon:S["a"],VRow:j["a"],VSpacer:W["a"],VTextField:D["a"]});var X=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{staticClass:"mx-auto my-4",attrs:{width:"100%"}},[i("v-card-title",{staticClass:"headline d-flex justify-space-between align-center"},[i("div",{staticClass:"d-flex align-center"},[i("v-icon",{staticClass:"mr-2"},[e._v("mdi-account")]),e._v(" "+e._s(e.subtitle)+" ")],1),"user"!==e.PermissionName&&"guest"!==e.PermissionName?i("div",{staticClass:"mr-4"},[i("v-btn",{attrs:{fab:"",dark:"",color:"pink",small:""},on:{click:function(t){return e.bus.$emit("addUser","company")}}},[i("v-icon",[e._v("mdi-plus")])],1)],1):e._e()]),i("v-card-text",[i("v-divider"),i("v-data-table",{attrs:{headers:e.headers,items:e.users,itemKey:"serial_number"},on:{"click:row":e.rowClickHandler},scopedSlots:e._u([{key:"item.email",fn:function(t){var a=t.item;return[e._v(" "+e._s(a.email)+" "),a.email_verified_at?i("v-chip",e._b({staticClass:"ma-1",attrs:{small:""}},"v-chip",{textColor:"white",color:"indigo"},!1),[i("v-icon",{attrs:{small:""}},[e._v("mdi-shield-check")]),e._v(" "+e._s(a.permission_group.tw_name)+" ")],1):i("v-chip",{staticClass:"ma-1",attrs:{small:""}},[i("v-icon",{attrs:{small:""}},[e._v("mdi-shield-remove")]),e._v(" 未驗證 ")],1)]}}])})],1)],1)},Z=[],ee={props:{id:{type:String,default:""},subtitle:{type:String,default:""}},data:function(){return{bus:u["a"]}},computed:Object(r["a"])(Object(r["a"])({formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"},headers:function(){return[{text:"編號",value:"user_information.serial_number"},{text:"email",align:"start",value:"email"},{text:"名稱",value:"name"},{text:"註冊日期",value:"created_at"},{text:"",value:"data-table-expand"}]},users:function(){return this.Users.filter((function(e){return"company"===e.permission_group.col_name}))}},Object(n["c"])({PermissionName:"getPermissionName"})),Object(n["d"])(["Fetching","Users","UserInfo"])),watch:{dialog:function(e){e||this.close()}},methods:{rowClickHandler:function(e){this.$router.push({name:"user",params:{user_id:e.id}})}}},te=ee,ie=Object(_["a"])(te,X,Z,!1,null,null,null),ae=ie.exports;x()(ie,{VBtn:C["a"],VCard:w["a"],VCardText:V["c"],VCardTitle:V["d"],VChip:K["a"],VDataTable:z["a"],VDivider:F["a"],VIcon:S["a"]});var se=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{staticClass:"mx-auto my-4",attrs:{width:"100%"}},[i("v-card-title",{staticClass:"headline d-flex justify-space-between align-center"},[i("div",{staticClass:"d-flex align-center"},[i("v-icon",{staticClass:"mr-2"},[e._v("mdi-account")]),e._v(" "+e._s(e.subtitle)+" ")],1),"user"!==e.PermissionName&&"guest"!==e.PermissionName?i("div",{staticClass:"mr-4"},[i("v-btn",{attrs:{fab:"",dark:"",color:"pink",small:""},on:{click:function(t){return e.bus.$emit("addUser","agent")}}},[i("v-icon",[e._v("mdi-plus")])],1)],1):e._e()]),i("v-card-text",[i("v-divider"),i("v-data-table",{attrs:{headers:e.headers,items:e.users,itemKey:"serial_number"},on:{"click:row":e.rowClickHandler},scopedSlots:e._u([{key:"item.email",fn:function(t){var a=t.item;return[e._v(" "+e._s(a.email)+" "),a.email_verified_at?i("v-chip",e._b({staticClass:"ma-1",attrs:{small:""}},"v-chip",{textColor:"white",color:"indigo"},!1),[i("v-icon",{attrs:{small:""}},[e._v("mdi-shield-check")]),e._v(" "+e._s(a.permission_group.tw_name)+" ")],1):i("v-chip",{staticClass:"ma-1",attrs:{small:""}},[i("v-icon",{attrs:{small:""}},[e._v("mdi-shield-remove")]),e._v(" 未驗證 ")],1)]}}])})],1)],1)},re=[],ne={props:{subtitle:{type:String,default:""}},data:function(){return{bus:u["a"]}},computed:Object(r["a"])(Object(r["a"])({headers:function(){return[{text:"編號",value:"user_information.serial_number"},{text:"email",align:"start",value:"email"},{text:"名稱",value:"name"},{text:"註冊日期",value:"created_at"},{text:"",value:"data-table-expand"}]},users:function(){return this.Users.filter((function(e){return"agent"===e.permission_group.col_name}))}},Object(n["c"])({PermissionName:"getPermissionName"})),Object(n["d"])(["Fetching","Users","UserInfo"])),methods:{rowClickHandler:function(e){this.$router.push({name:"user",params:{user_id:e.id}})}}},le=ne,oe=Object(_["a"])(le,se,re,!1,null,null,null),ce=oe.exports;x()(oe,{VBtn:C["a"],VCard:w["a"],VCardText:V["c"],VCardTitle:V["d"],VChip:K["a"],VDataTable:z["a"],VDivider:F["a"],VIcon:S["a"]});var de=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{staticClass:"mx-auto my-4",attrs:{width:"100%"}},[i("v-card-title",{staticClass:"headline d-flex justify-space-between align-center"},[i("div",{staticClass:"d-flex align-center"},[i("v-icon",{staticClass:"mr-2"},[e._v("mdi-account")]),e._v(" "+e._s(e.subtitle)+" ")],1),"user"!==e.PermissionName&&"guest"!==e.PermissionName?i("div",{staticClass:"mr-4"},[i("v-btn",{attrs:{fab:"",dark:"",color:"pink",small:""},on:{click:function(t){return e.bus.$emit("addUser","admin")}}},[i("v-icon",[e._v("mdi-plus")])],1)],1):e._e()]),i("v-card-text",[i("v-divider"),i("v-data-table",{attrs:{headers:e.headers,items:e.users,itemKey:"serial_number"},on:{"click:row":e.rowClickHandler},scopedSlots:e._u([{key:"item.email",fn:function(t){var a=t.item;return[e._v(" "+e._s(a.email)+" "),a.email_verified_at?i("v-chip",e._b({staticClass:"ma-1",attrs:{small:""}},"v-chip",{textColor:"white",color:"indigo"},!1),[i("v-icon",{attrs:{small:""}},[e._v("mdi-shield-check")]),e._v(" "+e._s(a.permission_group.tw_name)+" ")],1):i("v-chip",{staticClass:"ma-1",attrs:{small:""}},[i("v-icon",{attrs:{small:""}},[e._v("mdi-shield-remove")]),e._v(" 未驗證 ")],1)]}}])})],1)],1)},ue=[],me={props:{subtitle:{type:String,default:""}},data:function(){return{bus:u["a"]}},computed:Object(r["a"])(Object(r["a"])({headers:function(){return[{text:"編號",value:"user_information.serial_number"},{text:"email",align:"start",value:"email"},{text:"名稱",value:"name"},{text:"註冊日期",value:"created_at"},{text:"",value:"data-table-expand"}]},users:function(){return this.Users.filter((function(e){return"admin"===e.permission_group.col_name}))}},Object(n["c"])({PermissionName:"getPermissionName"})),Object(n["d"])(["Fetching","Users","UserInfo"])),methods:{rowClickHandler:function(e){this.$router.push({name:"user",params:{user_id:e.id}})}}},ve=me,fe=Object(_["a"])(ve,de,ue,!1,null,null,null),pe=fe.exports;x()(fe,{VBtn:C["a"],VCard:w["a"],VCardText:V["c"],VCardTitle:V["d"],VChip:K["a"],VDataTable:z["a"],VDivider:F["a"],VIcon:S["a"]});var he={components:{DialogAddUser:P,UserDetail:B,UserTable:Q,CompanyTable:ae,AgentTable:ce,AdminTable:pe},data:function(){return{bus:u["a"]}},computed:Object(r["a"])(Object(r["a"])({history:function(){var e=[{text:"用戶管理"}];return this.$route.params.user_id&&(e[0].href="/#/user",0===this.$route.params.user_id?e.push({text:"創建用戶"}):e.push({text:"用戶資料"})),e}},Object(n["c"])({PermissionName:"getPermissionName"})),Object(n["d"])(["Materials","Users"])),mounted:function(){this.actionFetchUsers()},methods:Object(r["a"])({},Object(n["b"])(["actionFetchUsers"]))},be=he,_e=i("2bc5"),ge=i("f6c4"),xe=Object(_["a"])(be,c,d,!1,null,null,null),Ce=xe.exports;x()(xe,{VBreadcrumbs:_e["a"],VBtn:C["a"],VContainer:y["a"],VIcon:S["a"],VMain:ge["a"]});var we=i("dc50"),Ve={components:{Navigation:o["a"],Header:l["a"],User:Ce,DialogContact:we["a"]},computed:Object(r["a"])({},Object(n["d"])(["UserInfo"]))},ke=Ve,ye=i("7496"),Ie=Object(_["a"])(ke,a,s,!1,null,null,null);t["default"]=Ie.exports;x()(Ie,{VApp:ye["a"]})},"9d01":function(e,t,i){},b73d:function(e,t,i){"use strict";i("0481"),i("4069");var a=i("5530"),s=(i("ec29"),i("9d01"),i("4de4"),i("45fc"),i("d3b7"),i("25f0"),i("c37a")),r=i("5607"),n=i("a026"),l=n["a"].extend({name:"rippleable",directives:{ripple:r["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),e.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",e)):null},onChange:function(){}}}),o=i("8547"),c=i("58df"),d=Object(c["a"])(s["a"],l,o["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return e.valueComparator(i,t)})):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel:function(){var e=this,t=s["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:function(t){t.preventDefault(),e.onChange()}},t):t},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var e=this;if(this.isInteractive){var t=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var a=i.length;i=i.filter((function(i){return!e.valueComparator(i,t)})),i.length===a&&i.push(t)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(i,t)?null:t:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(e){}}}),u=i("c3f0"),m=i("0789"),v=i("490a"),f=i("80d2");t["a"]=d.extend({name:"v-switch",directives:{Touch:u["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(a["a"])(Object(a["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(m["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(v["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(e){(e.keyCode===f["w"].left&&this.isActive||e.keyCode===f["w"].right&&!this.isActive)&&this.onChange()}}})},ec29:function(e,t,i){}}]);
//# sourceMappingURL=chunk-0bd388f0.85ff472a.js.map