(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{140:function(e,t,i){"use strict";var s=i(13),n=i(98)(!0);s(s.P,"Array",{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),i(97)("includes")},141:function(e,t,i){"use strict";var s=i(13),n=i(144);s(s.P+s.F*i(145)("includes"),"String",{includes:function(e){return!!~n(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},144:function(e,t,i){var s=i(68),n=i(20);e.exports=function(e,t,i){if(s(t))throw TypeError("String#"+i+" doesn't accept regex!");return String(n(e))}},145:function(e,t,i){var s=i(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(i){try{return t[s]=!1,!"/./"[e](t)}catch(e){}}return!0}},185:function(e,t,i){},186:function(e,t,i){},187:function(e,t,i){},464:function(e,t,i){"use strict";var s=i(185);i.n(s).a},465:function(e,t,i){"use strict";var s=i(186);i.n(s).a},466:function(e,t,i){"use strict";var s=i(187);i.n(s).a},538:function(e,t,i){"use strict";i.r(t);i(9);var s=i(12),n=i(0),a={name:"s-collapse",props:{value:{default:function(){return[]},type:[String,Array]},accordion:{type:Boolean}},data:function(){return{eventBus:new n.default}},provide:function(){return{eventBus:this.eventBus}},mounted:function(){var e=this;this.eventBus.$emit("update:selected",this.value),this.eventBus.$on("update:addSelected",(function(t){var i="string"==typeof e.value?[e.value]:Object(s.a)(e.value);e.accordion?i=[t]:i.push(t),e.$emit("input",e.accordion?t:i),e.eventBus.$emit("update:selected",i)})),this.eventBus.$on("update:removeSelected",(function(t){var i="string"==typeof e.value?[e.value]:Object(s.a)(e.value);if(e.accordion)t===e.value&&e.$emit("input","");else{var n=i.indexOf(t);i.splice(n,1),e.$emit("input",i),e.eventBus.$emit("update:selected",i)}}))}},l=(i(464),i(1)),c=Object(l.a)(a,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"collapse"},[this._t("default")],2)}),[],!1,null,"49782f49",null).exports,o=(i(16),i(140),i(141),i(150)),r={name:"s-collapse-item",props:{title:{type:String,required:!0},name:{type:String,required:!0}},components:{"s-icon":o.a},inject:["eventBus"],computed:{icoClass:function(){return{"ico-active":this.visible}}},data:function(){return{visible:!1}},mounted:function(){var e=this;this.eventBus.$on("update:selected",(function(t){t.includes(e.name)?e.visible=!0:e.visible=!1}))},methods:{addSelectItem:function(){this.eventBus.$emit("update:addSelected",this.name)},removeSelectItem:function(){this.eventBus.$emit("update:removeSelected",this.name)},showPane:function(){this.addSelectItem()},closePane:function(){this.removeSelectItem()},toggle:function(){this.visible=!this.visible,this.visible?this.showPane():this.closePane()}}},d=(i(465),{data:function(){return{selected1:["1","2"],selected2:"3",code1:'\n        <s-collapse v-model="selected1" style="width:600px">\n          <s-collapse-item title="香蕉 Banana" name="1">\n            <div>香蕉是淀粉质丰富的有益水果。</div>\n          </s-collapse-item>\n          <s-collapse-item title="菠萝 Pineapple" name="2">\n            <div>菠萝果实品质优良，营养丰富，含有大量的果糖，葡萄糖，维生素B、C，磷，柠檬酸和蛋白酶等物质。</div>\n          </s-collapse-item>\n          <s-collapse-item title="葡萄 Grape" name="3">\n            <div>成熟的浆果中葡萄含糖量高达10%-30%，以葡萄糖为主。</div>\n          </s-collapse-item>\n          <s-collapse-item title="柠檬 Lemon" name="4">\n            <div>柠檬富含维生素C、糖类、钙、磷、铁、维生素B1、维生素B2、烟酸、奎宁酸、柠檬酸、苹果酸、橙皮苷、柚皮苷、香豆精、高量钾元素和低量钠元素等，对人体十分有益。</div>\n          </s-collapse-item>\n        </s-collapse>\n       '.replace(/^ {8}/gm,"").trim(),code2:'\n        <s-collapse v-model="selected2" accordion style="width:600px;">\n          <s-collapse-item title="丰城秀吉" name="1">\n            <div>（1537年3月17日-1598年9月18日）日本战国时代、安土桃山时代大名、天下人，著名政治家，继室町幕府之后，首次以“天下人”的称号统一日本的战国三杰之一。本是足轻（下级步兵），后因侍奉织田信长而崛起。</div>\n          </s-collapse-item>\n          <s-collapse-item title="德川家康" name="2">\n            <div>（1543年1月31日-1616年6月1日）江户幕府第一代征夷大将军；丰臣秀吉死后，在关原合战中率领东军战胜西军，确定了霸权。庆长八年（1603年）受封为征夷大将军，在江户开创幕府。</div>\n          </s-collapse-item>\n          <s-collapse-item title="织田信长" name="3">\n            <div>（1534年6月23日-1582年6月21日）织田信长于永禄十一年（1568年）至天正十年（1582年）间推翻了名义上管治日本逾200年的室町幕府，并使从应仁之乱起持续百年以上的战国乱世步向终结。织田信长被日本民众评选为“2014年日本人最喜爱的历史人物第一名”。</div>\n          </s-collapse-item>\n        </s-collapse>\n       '.replace(/^ {8}/gm,"").trim()}},components:{"s-collapse":c,"s-collapse-item":Object(l.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"item"},[i("div",{staticClass:"header",on:{click:e.toggle}},[e._v("\n      "+e._s(e.title)+"\n      "),i("div",{staticClass:"ico",class:e.icoClass},[i("s-icon",{attrs:{name:"right"}})],1)]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"body"},[e._t("default")],2)])}),[],!1,null,"1d5adf0c",null).exports}}),u=(i(466),Object(l.a)(d,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h3",[e._v("基础用法")]),e._v(" "),i("simple-card",{scopedSlots:e._u([{key:"code",fn:function(){return[i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[i("code",{staticClass:"vue"},[e._v(e._s(e.code1))])])]},proxy:!0}])},[i("s-collapse",{staticStyle:{width:"850px"},model:{value:e.selected1,callback:function(t){e.selected1=t},expression:"selected1"}},[i("s-collapse-item",{attrs:{title:"香蕉 Banana",name:"1"}},[i("div",[e._v("香蕉是淀粉质丰富的有益水果。")])]),e._v(" "),i("s-collapse-item",{attrs:{title:"菠萝 Pineapple",name:"2"}},[i("div",[e._v("菠萝果实品质优良，营养丰富，含有大量的果糖，葡萄糖，维生素B、C，磷，柠檬酸和蛋白酶等物质。")])]),e._v(" "),i("s-collapse-item",{attrs:{title:"葡萄 Grape",name:"3"}},[i("div",[e._v("成熟的浆果中葡萄含糖量高达10%-30%，以葡萄糖为主。")])]),e._v(" "),i("s-collapse-item",{attrs:{title:"柠檬 Lemon",name:"4"}},[i("div",[e._v("柠檬富含维生素C、糖类、钙、磷、铁、维生素B1、维生素B2、烟酸、奎宁酸、柠檬酸、苹果酸、橙皮苷、柚皮苷、香豆精、高量钾元素和低量钠元素等，对人体十分有益。")])])],1),e._v(" "),i("p",[e._v("你当前选择了 "),i("span",{staticClass:"highlight"},[e._v(e._s(e.selected1))])])],1),e._v(" "),i("h3",{staticStyle:{"margin-top":"60px"}},[e._v("手风琴效果")]),e._v(" "),i("simple-card",{scopedSlots:e._u([{key:"code",fn:function(){return[i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[i("code",{staticClass:"vue"},[e._v(e._s(e.code2))])])]},proxy:!0}])},[i("s-collapse",{staticStyle:{width:"850px"},attrs:{accordion:""},model:{value:e.selected2,callback:function(t){e.selected2=t},expression:"selected2"}},[i("s-collapse-item",{attrs:{title:"丰城秀吉",name:"1"}},[i("div",[e._v("（1537年3月17日-1598年9月18日）日本战国时代、安土桃山时代大名、天下人，著名政治家，继室町幕府之后，首次以“天下人”的称号统一日本的战国三杰之一。本是足轻（下级步兵），后因侍奉织田信长而崛起。")])]),e._v(" "),i("s-collapse-item",{attrs:{title:"德川家康",name:"2"}},[i("div",[e._v("（1543年1月31日-1616年6月1日）江户幕府第一代征夷大将军；丰臣秀吉死后，在关原合战中率领东军战胜西军，确定了霸权。庆长八年（1603年）受封为征夷大将军，在江户开创幕府。")])]),e._v(" "),i("s-collapse-item",{attrs:{title:"织田信长",name:"3"}},[i("div",[e._v("（1534年6月23日-1582年6月21日）织田信长于永禄十一年（1568年）至天正十年（1582年）间推翻了名义上管治日本逾200年的室町幕府，并使从应仁之乱起持续百年以上的战国乱世步向终结。织田信长被日本民众评选为“2014年日本人最喜爱的历史人物第一名”。")])])],1),e._v(" "),i("p",[e._v("你当前选择了 "),i("span",{staticClass:"highlight"},[e._v(e._s(e.selected2))])])],1)],1)}),[],!1,null,"a1bbc182",null));t.default=u.exports}}]);