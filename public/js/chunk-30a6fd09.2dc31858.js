(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30a6fd09"],{"2bfd":function(t,e,i){},8836:function(t,e,i){},"8a79":function(t,e,i){"use strict";var s=i("23e7"),n=i("06cf").f,a=i("50c4"),r=i("5a34"),l=i("1d80"),o=i("ab13"),c=i("c430"),u="".endsWith,h=Math.min,p=o("endsWith"),d=!c&&!p&&!!function(){var t=n(String.prototype,"endsWith");return t&&!t.writable}();s({target:"String",proto:!0,forced:!d&&!p},{endsWith:function(t){var e=String(l(this));r(t);var i=arguments.length>1?arguments[1]:void 0,s=a(e.length),n=void 0===i?s:h(a(i),s),o=String(t);return u?u.call(e,o,n):e.slice(n-o.length,n)===o}})},"9d01":function(t,e,i){},b694:function(t,e,i){"use strict";var s=function(){var t,e=this,i=e.$createElement,s=e._self._c||i;return s("v-dialog",{attrs:{width:"800px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",[s("v-card-title",{staticClass:"primary white--text"},[e._v(" 新增原物料 ")]),s("v-container",[s("v-stepper",{model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[s("v-stepper-header",[s("v-stepper-step",{attrs:{complete:e.e1>1,step:"1"}},[e._v("資本資訊")]),s("v-divider"),s("v-stepper-step",{attrs:{complete:e.e1>2,step:"2"}},[e._v("專利與描述")]),s("v-divider"),s("v-stepper-step",{attrs:{step:"3"}},[e._v("新增完成!")])],1),s("v-stepper-items",[s("v-form",{attrs:{lazyValidation:""}},[s("v-stepper-content",{attrs:{step:"1"}},[s("v-row",{staticClass:"mx-2"},[s("v-col",{staticClass:"align-center justify-space-between",attrs:{cols:"12",md:"6"}},[s("v-select",e._b({attrs:{items:e.items.order,label:"原料編號",outlined:"",dense:"",required:""},model:{value:e.input.material_id,callback:function(t){e.$set(e.input,"material_id",t)},expression:"input.material_id"}},"v-select",e.material_id_disable?(t={},t["disabled"]=!0,t):"",!1))],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{counter:30,label:"原料名稱",required:""},model:{value:e.input.material_name,callback:function(t){e.$set(e.input,"material_name",t)},expression:"input.material_name"}})],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{counter:30,label:"來源",required:""},model:{value:e.input.material_source,callback:function(t){e.$set(e.input,"material_source",t)},expression:"input.material_source"}})],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-select",{attrs:{items:e.items.origin,label:"產地",outlined:"",dense:"",required:""},model:{value:e.input.material_origin,callback:function(t){e.$set(e.input,"material_origin",t)},expression:"input.material_origin"}})],1),s("v-col",{attrs:{cols:"6"}},[s("v-text-field",{attrs:{counter:30,label:"規格1",required:""},model:{value:e.input.material_spec_1,callback:function(t){e.$set(e.input,"material_spec_1",t)},expression:"input.material_spec_1"}})],1),s("v-col",{attrs:{cols:"6"}},[s("v-combobox",{attrs:{items:e.items.spec_2,label:"規格2",required:"",multiple:"",outlined:"",smallChips:"",dense:""},model:{value:e.input.material_spec_2,callback:function(t){e.$set(e.input,"material_spec_2",t)},expression:"input.material_spec_2"}})],1),s("v-col",{staticClass:"d-flex justify-end"},[s("v-btn",{attrs:{color:"grey light-4 mr-4",text:"",large:""},on:{click:function(t){e.dialog=!1}}},[e._v(" 取消 ")]),s("v-btn",{staticClass:"mx-1",attrs:{color:"primary",large:""},on:{click:function(t){e.e1=2}}},[e._v(" 下一步 "),s("v-icon",[e._v("mdi-chevron-right")])],1)],1)],1)],1),s("v-stepper-content",{attrs:{step:"2"}},[s("v-row",{staticClass:"mx-2"},[s("v-col",{staticClass:"align-center justify-space-between",attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{counter:30,label:"專利"},model:{value:e.input.material_patent,callback:function(t){e.$set(e.input,"material_patent",t)},expression:"input.material_patent"}})],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-select",{attrs:{items:e.items.certification,label:"認證",multiple:"",outlined:"",smallChips:"",dense:""},model:{value:e.input.material_certification,callback:function(t){e.$set(e.input,"material_certification",t)},expression:"input.material_certification"}})],1),s("v-col",{staticClass:"align-center justify-space-between",attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{counter:100,label:"臨床研究/文獻"},model:{value:e.input.material_clinic,callback:function(t){e.$set(e.input,"material_clinic",t)},expression:"input.material_clinic"}})],1),s("v-col",{staticClass:"align-center justify-space-between",attrs:{cols:"12",md:"6"}},[s("v-combobox",{attrs:{items:e.items.fn,label:"功能",multiple:"",outlined:"",smallChips:"",dense:""},model:{value:e.input.material_fn,callback:function(t){e.$set(e.input,"material_fn",t)},expression:"input.material_fn"}})],1),s("v-col",{staticClass:"d-flex justify-end"},[s("v-btn",{attrs:{color:"grey light-4 mr-4",text:"",large:""},on:{click:function(t){e.dialog=!1}}},[e._v(" 取消 ")]),s("v-btn",{staticClass:"mx-1",attrs:{color:"primary lighten-2",outlined:"",large:""},on:{click:function(t){e.e1=1}}},[s("v-icon",[e._v("mdi-chevron-left")]),e._v(" 返回 ")],1),s("v-btn",{staticClass:"mx-1",attrs:{color:"primary",large:""},on:{click:function(t){e.e1=3}}},[e._v(" 下一步 "),s("v-icon",[e._v("mdi-chevron-right")])],1)],1)],1)],1),s("v-stepper-content",{attrs:{step:"3"}},[s("div",{staticClass:"headline text-center"},[e._v(" 新增完成 ")]),s("div",{staticClass:"body-1 grey--text mb-4 text-center"},[e._v(" 本視窗將於 5 秒鐘後自動關閉 ")]),s("v-btn",{attrs:{block:"",color:"primary",large:""},on:{click:function(t){e.dialog=!1}}},[e._v(" 確定 ")])],1)],1)],1)],1)],1)],1)],1)},n=[],a=i("f5ef"),r={data:function(){return{dialog:!1,e1:1,input:{material_id:"",material_name:"",material_source:"",material_spec_1:"",material_spec_2:"",material_origin:"",material_patent:"",material_certification:"",material_clinic:"",material_fn:""},material_id_disable:!1,items:{order:[{text:"R001 蝦紅素 (藻紅素)",value:"R001"},{text:"R002 鮭魚/魚精華素",value:"R002"},{text:"R003 神經醯胺(賽洛美)",value:"R003"},{text:"R029 維生素類",value:"R029"}],location:["Item 1","Item 2","Item 3","Item 4"],origin:["美國","台灣","日本","瑞士","中國"],spec_1:"",spec_2:["粉末","造粒","油狀","液狀","膏狀","其他"],certification:["Kosher","Halal","FSSC","MSC","GMP","NGMO","GRAS","HACCP","PDR","JECFA","ESCOP","BHMA","CE","ISO","素","有機"],fn:["頭髮","腦力","睡眠","視力","骨骼","口腔","肝臟功能","心臟功能","心血管","免疫","腸胃","排便","皮膚美容","美白","抗癌","抗發炎","調節血糖","調節血脂","調節血壓","抗憂鬱","抗過敏","控制體重","男性功能","女性泌尿道","經期/更年期","除臭","增加吸收率"]}}},watch:{e1:function(t){var e=this;3===t&&setTimeout((function(){e.dialog=!1,e.e1=1}),5e3)}},mounted:function(){var t=this;a["a"].$on("addMaterial",(function(e){t.dialog=!t.dialog,void 0!==e&&""!==e?(t.input.material_id=e,t.material_id_disable=!0):(t.input.material_id="",t.material_id_disable=!1)}))}},l=r,o=i("2877"),c=i("6544"),u=i.n(c),h=i("8336"),p=i("b0af"),d=i("99d9"),m=i("62ad"),f=(i("7db0"),i("c975"),i("fb6a"),i("a434"),i("b0c0"),i("d3b7"),i("25f0"),i("8a79"),i("5530")),v=(i("2bfd"),i("b974")),g=(i("4de4"),i("d81d"),i("45fc"),i("498a"),i("8654")),b=i("d9f7"),I=i("80d2"),S=Object(f["a"])(Object(f["a"])({},v["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1}),_=v["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,i){return i.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:v["a"].options.props.menuProps.type,default:function(){return S}},noFilter:Boolean,searchInput:{type:String,default:void 0}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(f["a"])(Object(f["a"])({},v["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var i=Object(I["q"])(e,t.itemText),s=null!=i?String(i):"";return t.filter(e,String(t.internalSearch),s)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=v["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(f["a"])(Object(f["a"])({},S),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=v["a"].options.computed.listData.call(this);return t.props=Object(f["a"])(Object(f["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=void 0)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},methods:{onFilteredItemsChanged:function(t,e){var i=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){i.internalSearch&&(1===t.length||i.autoSelectFirst)&&(i.$refs.menu.getTiles(),i.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===I["w"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===I["w"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==I["w"].backspace&&t!==I["w"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var i=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===i){var s=this.selectedItems.length,n=t!==s-1?t:t-1,a=this.selectedItems[n];a?this.selectItem(e):this.setValue(this.multiple?[]:void 0),this.selectedIndex=n}else this.selectedIndex=i}},clearableCallback:function(){this.internalSearch=void 0,v["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=g["a"].options.methods.genInput.call(this);return t.data=Object(b["a"])(t.data,{attrs:{"aria-activedescendant":Object(I["o"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(I["o"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=v["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?v["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,i=e.value;e.value&&this.activateMenu(),this.internalSearch=i,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;v["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){v["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){v["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){v["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){if(-1!==this.selectedIndex){var e=this.selectedItems[this.selectedIndex],i=this.getText(e);t.clipboardData.setData("text/plain",i),t.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}}}),x=_.extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return v["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)}},methods:{onInternalSearchChanged:function(t){if(t&&this.multiple&&this.delimiters.length){var e=this.delimiters.find((function(e){return t.endsWith(e)}));null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var t=_.options.methods.genInput.call(this);return delete t.data.attrs.name,t.data.on.paste=this.onPaste,t},genChipSelection:function(t,e){var i=this,s=v["a"].options.methods.genChipSelection.call(this,t,e);return this.multiple&&(s.componentOptions.listeners=Object(f["a"])(Object(f["a"])({},s.componentOptions.listeners),{},{dblclick:function(){i.editingIndex=e,i.internalSearch=i.getText(t),i.selectedIndex=-1}})),s},onChipInput:function(t){v["a"].options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown:function(t){t.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onFilteredItemsChanged:function(t,e){this.autoSelectFirst&&_.options.methods.onFilteredItemsChanged.call(this,t,e)},onKeyDown:function(t){var e=t.keyCode;v["a"].options.methods.onKeyDown.call(this,t),this.multiple&&e===I["w"].left&&0===this.$refs.input.selectionStart?this.updateSelf():e===I["w"].enter&&this.onEnterDown(t),this.changeSelectedIndex(e)},onTabDown:function(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();_.options.methods.onTabDown.call(this,t)},selectItem:function(t){this.editingIndex>-1?this.updateEditing():_.options.methods.selectItem.call(this,t)},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(t){v["a"].options.methods.setValue.call(this,null!=t?t:this.internalSearch)},updateEditing:function(){var t=this.internalValue.slice();t[this.editingIndex]=this.internalSearch,this.setValue(t),this.editingIndex=-1},updateCombobox:function(){var t=Boolean(this.$scopedSlots.selection)||this.hasChips;t&&!this.searchIsDirty||(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),t&&(this.internalSearch=void 0))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var t=this.getMenuIndex();if(!(t<0)||this.searchIsDirty){if(this.editingIndex>-1)return this.updateEditing();var e=this.selectedItems.indexOf(this.internalSearch);if(e>-1){var i=this.internalValue.slice();i.splice(e,1),this.setValue(i)}if(t>-1)return this.internalSearch=null;this.selectItem(this.internalSearch),this.internalSearch=null}},onPaste:function(t){if(this.multiple&&!this.searchIsDirty){var e=t.clipboardData.getData("text/vnd.vuetify.autocomplete.item+plain");e&&-1===this.findExistingIndex(e)&&(t.preventDefault(),v["a"].options.methods.selectItem.call(this,e))}}}}),C=i("a523"),y=i("169a"),V=i("ce7e"),w=i("4bd4"),D=i("132d"),k=i("0fd9"),$=(i("a9e3"),i("8836"),i("3206")),O=i("a452"),j=i("7560"),A=i("58df"),T=i("d9bd"),E=Object(A["a"])(Object($["b"])("stepper"),O["a"],j["a"]),M=E.extend({name:"v-stepper",provide:function(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{altLabels:Boolean,nonLinear:Boolean,vertical:Boolean},data:function(){var t={isBooted:!1,steps:[],content:[],isReverse:!1};return t.internalLazyValue=null!=this.value?this.value:(t[0]||{}).step||1,t},computed:{classes:function(){return Object(f["a"])({"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear},this.themeClasses)}},watch:{internalValue:function(t,e){this.isReverse=Number(t)<Number(e),e&&(this.isBooted=!0),this.updateView()}},created:function(){this.$listeners.input&&Object(T["a"])("@input","@change",this)},mounted:function(){this.updateView()},methods:{register:function(t){"v-stepper-step"===t.$options.name?this.steps.push(t):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content.push(t))},unregister:function(t){"v-stepper-step"===t.$options.name?this.steps=this.steps.filter((function(e){return e!==t})):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content=this.content.filter((function(e){return e!==t})))},stepClick:function(t){var e=this;this.$nextTick((function(){return e.internalValue=t}))},updateView:function(){for(var t=this.steps.length;--t>=0;)this.steps[t].toggle(this.internalValue);for(var e=this.content.length;--e>=0;)this.content[e].toggle(this.internalValue,this.isReverse)}},render:function(t){return t("div",{staticClass:"v-stepper",class:this.classes},this.$slots.default)}}),F=i("0789"),L=Object(A["a"])(Object($["a"])("stepper","v-stepper-content","v-stepper")),B=L.extend().extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data:function(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{computedTransition:function(){var t=this.$vuetify.rtl?!this.isReverse:this.isReverse;return t?F["f"]:F["g"]},styles:function(){return this.isVertical?{height:Object(I["g"])(this.height)}:{}}},watch:{isActive:function(t,e){t&&null==e?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted:function(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition:function(t){this.isActive&&"height"===t.propertyName&&(this.height="auto")},enter:function(){var t=this,e=0;requestAnimationFrame((function(){e=t.$refs.wrapper.scrollHeight})),this.height=0,setTimeout((function(){return t.isActive&&(t.height=e||"auto")}),450)},leave:function(){var t=this;this.height=this.$refs.wrapper.clientHeight,setTimeout((function(){return t.height=0}),10)},toggle:function(t,e){this.isActive=t.toString()===this.step.toString(),this.isReverse=e}},render:function(t){var e={staticClass:"v-stepper__content"},i={staticClass:"v-stepper__wrapper",style:this.styles,ref:"wrapper"};this.isVertical||(e.directives=[{name:"show",value:this.isActive}]);var s=t("div",i,[this.$slots.default]),n=t("div",e,[s]);return t(this.computedTransition,{on:this.$listeners},[n])}}),R=i("9d26"),P=i("a9ad"),N=i("5607"),z=Object(A["a"])(P["a"],Object($["a"])("stepper","v-stepper-step","v-stepper")),K=z.extend().extend({name:"v-stepper-step",directives:{ripple:N["a"]},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},errorIcon:{type:String,default:"$error"},rules:{type:Array,default:function(){return[]}},step:[Number,String]},data:function(){return{isActive:!1,isInactive:!0}},computed:{classes:function(){return{"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error error--text":this.hasError,"v-stepper__step--complete":this.complete}},hasError:function(){return this.rules.some((function(t){return!0!==t()}))}},mounted:function(){this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.stepper&&this.stepper.unregister(this)},methods:{click:function(t){t.stopPropagation(),this.$emit("click",t),this.editable&&this.stepClick(this.step)},genIcon:function(t){return this.$createElement(R["a"],t)},genLabel:function(){return this.$createElement("div",{staticClass:"v-stepper__label"},this.$slots.default)},genStep:function(){var t=!(this.hasError||!this.complete&&!this.isActive)&&this.color;return this.$createElement("span",this.setBackgroundColor(t,{staticClass:"v-stepper__step__step"}),this.genStepContent())},genStepContent:function(){var t=[];return this.hasError?t.push(this.genIcon(this.errorIcon)):this.complete?this.editable?t.push(this.genIcon(this.editIcon)):t.push(this.genIcon(this.completeIcon)):t.push(String(this.step)),t},toggle:function(t){this.isActive=t.toString()===this.step.toString(),this.isInactive=Number(t)<Number(this.step)}},render:function(t){return t("div",{staticClass:"v-stepper__step",class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click}},[this.genStep(),this.genLabel()])}}),q=Object(I["h"])("v-stepper__header"),H=Object(I["h"])("v-stepper__items"),J=Object(o["a"])(l,s,n,!1,null,null,null);e["a"]=J.exports;u()(J,{VBtn:h["a"],VCard:p["a"],VCardTitle:d["d"],VCol:m["a"],VCombobox:x,VContainer:C["a"],VDialog:y["a"],VDivider:V["a"],VForm:w["a"],VIcon:D["a"],VRow:k["a"],VSelect:v["a"],VStepper:M,VStepperContent:B,VStepperHeader:q,VStepperItems:H,VStepperStep:K,VTextField:g["a"]})},b73d:function(t,e,i){"use strict";i("0481"),i("4069");var s=i("5530"),n=(i("ec29"),i("9d01"),i("4de4"),i("45fc"),i("d3b7"),i("25f0"),i("c37a")),a=i("5607"),r=i("a026"),l=r["a"].extend({name:"rippleable",directives:{ripple:a["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}}),o=i("8547"),c=i("58df"),u=Object(c["a"])(n["a"],l,o["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,e=n["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:function(e){e.preventDefault(),t.onChange()}},e):e},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var s=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===s&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),h=i("c3f0"),p=i("0789"),d=i("490a"),m=i("80d2");e["a"]=u.extend({name:"v-switch",directives:{Touch:h["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(s["a"])(Object(s["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(s["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(s["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(p["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(d["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===m["w"].left&&this.isActive||t.keyCode===m["w"].right&&!this.isActive)&&this.onChange()}}})},cf2a:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.UserInfo&&"Y"===t.UserInfo.is_login?i("v-app",[i("Navigation"),i("Header"),i("Order"),i("DialogContact")],1):t._e()},n=[],a=i("5530"),r=i("2f62"),l=i("ad1b"),o=i("608b"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-main",{scopedSlots:t._u([{key:"prepend",fn:function(){return[i("v-list-item",{attrs:{twoLine:""}},[i("v-list-item-avatar",[i("img",{attrs:{src:"https://randomuser.me/api/portraits/women/81.jpg"}})]),i("v-list-item-content",[i("v-list-item-title",[t._v("Jane Smith")]),i("v-list-item-subtitle",[t._v("Logged In")])],1)],1)]},proxy:!0}])},[i("v-container",[i("v-breadcrumbs",{attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[i("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])}),i("v-card",{staticClass:"mx-auto",attrs:{width:"100%"}},[i("v-card-text",[i("p",{staticClass:"headline text--primary"},[t._v(" 原物料清單 ")]),i("v-divider"),i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.materials,singleSelect:t.singleSelect,itemKey:"name",showSelect:""},scopedSlots:t._u([{key:"top",fn:function(){return[i("div",{staticClass:"d-flex justify-space-between align-center"},[i("v-switch",{staticClass:"pa-3",attrs:{label:"啟用單選"},model:{value:t.singleSelect,callback:function(e){t.singleSelect=e},expression:"singleSelect"}}),i("div",{staticClass:"mr-4"},[i("v-btn",{staticClass:"mr-4",attrs:{icon:"",small:"",disabled:0===t.selected.length}},[i("v-icon",[t._v("mdi-trash-can-outline")])],1),i("v-btn",{attrs:{fab:"",dark:"",color:"pink",small:""},on:{click:function(e){return t.bus.$emit("addMaterial")}}},[i("v-icon",[t._v("mdi-plus")])],1)],1)],1)]},proxy:!0}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),i("v-btn",{attrs:{bottom:"",color:"pink",dark:"",fab:"",fixed:"",right:""},on:{click:function(e){return t.bus.$emit("addMaterial")}}},[i("v-icon",[t._v("mdi-plus")])],1)],1)],1)],1),i("DialogAddMaterial")],1)},u=[],h=i("f5ef"),p=i("b694"),d={components:{DialogAddMaterial:p["a"]},data:function(){return{bus:h["a"],items:[{text:"原物料",disabled:!0,href:"breadcrumbs_dashboard"}],singleSelect:!1,selected:[],headers:[{text:"Dessert (100g serving)",align:"start",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Iron (%)",value:"iron"}],materials:[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,iron:"1%"},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,iron:"1%"},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,iron:"7%"},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,iron:"8%"},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,iron:"16%"},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,iron:"0%"},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,iron:"2%"},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,iron:"45%"},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,iron:"22%"},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,iron:"6%"}]}}},m=d,f=i("2877"),v=i("6544"),g=i.n(v),b=i("2bc5"),I=i("8336"),S=i("b0af"),_=i("99d9"),x=i("a523"),C=i("8fea"),y=i("ce7e"),V=i("132d"),w=i("da13"),D=i("8270"),k=i("5d23"),$=i("f6c4"),O=i("b73d"),j=Object(f["a"])(m,c,u,!1,null,null,null),A=j.exports;g()(j,{VBreadcrumbs:b["a"],VBtn:I["a"],VCard:S["a"],VCardText:_["c"],VContainer:x["a"],VDataTable:C["a"],VDivider:y["a"],VIcon:V["a"],VListItem:w["a"],VListItemAvatar:D["a"],VListItemContent:k["a"],VListItemSubtitle:k["b"],VListItemTitle:k["c"],VMain:$["a"],VSwitch:O["a"]});var T=i("dc50"),E={components:{Navigation:o["a"],Header:l["a"],Order:A,DialogContact:T["a"]},computed:Object(a["a"])({},Object(r["d"])(["UserInfo"]))},M=E,F=i("7496"),L=Object(f["a"])(M,s,n,!1,null,null,null);e["default"]=L.exports;g()(L,{VApp:F["a"]})},ec29:function(t,e,i){}}]);
//# sourceMappingURL=chunk-30a6fd09.2dc31858.js.map