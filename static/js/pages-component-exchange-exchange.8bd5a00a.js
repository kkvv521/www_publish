(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-exchange-exchange"],{"09d2":function(e,t,n){"use strict";var i=n("722b"),a=n.n(i);a.a},2471:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".item[data-v-3b506e67]{border-color:#dcdcdc;border-width:1px;border-style:solid;padding:5px 10px 5px 10px;height:80px;font-size:17px;margin-bottom:3px}.item:hover .item-btns[data-v-3b506e67]{display:inline-block;position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;bottom:20px}.item-btns[data-v-3b506e67]{position:absolute;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;bottom:20px;display:none}.txt[data-v-3b506e67]{font-size:25px}",""]),e.exports=t},"2ef0":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uniCard:n("175b").default,uniRow:n("f33c").default,uniCol:n("71df").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-flex-1"},[n("uni-card",{attrs:{title:"交易所",mode:"basic","is-shadow":!0,extra:""}},[n("v-uni-view",[n("v-uni-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addExchange.apply(void 0,arguments)}}},[e._v("添加交易所")])],1),n("uni-row",{attrs:{gutter:10}},e._l(e.list,(function(t,i){return n("uni-col",{key:t.type+t.name,attrs:{xs:24,sm:12,md:8,lg:6,xl:6}},[n("v-uni-view",{staticClass:"item uni-center"},[n("v-uni-view",{staticClass:"txt"},[e._v(e._s(t.type))]),n("v-uni-view",[e._v(e._s(t.name))]),n("v-uni-view",{staticClass:"item-btns"},[n("v-uni-view",[n("v-uni-button",{attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.deletInfo(t.name)}}},[e._v("删除")])],1),n("v-uni-view",[n("v-uni-button",{attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.addExchange(t.name)}}},[e._v("修改")])],1)],1)],1)],1)})),1)],1)],1)},o=[]},"722b":function(e,t,n){var i=n("2471");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("425226fc",i,!0,{sourceMap:!1,shadowMode:!1})},ac12:function(e,t,n){"use strict";n.r(t);var i=n("2ef0"),a=n("f753");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("09d2");var c,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"3b506e67",null,!1,i["a"],c);t["default"]=u.exports},d1de:function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("5530")),o=n("2f62"),c=(i(n("e143")),{data:function(){return{list:[],acc:""}},methods:{deletInfo:function(e){var t=this,n=uni.getStorageSync("user_cookie");uni.showModal({title:"通知",content:"确定要删除["+e+"]",success:function(i){i.cancel||t.$request.get("/exchange/delete?name="+e+"&user_cookie="+n).then((function(e){"WRONG"!=e&&t.getMsgData()}))}})},addExchange:function(e){var t="/pages/component/exchange/add?exchangeName="+e;this.hasLeftWin?uni.reLaunch({url:t}):uni.navigateTo({url:t})},getMsgData:function(){var e=this,t=uni.getStorageSync("user_cookie");this.$request.get("/exchange/list?user_cookie="+t).then((function(t){"WRONG"!=t&&(e.list=t.result)}))}},computed:(0,a.default)({},(0,o.mapState)({hasLeftWin:function(e){return!e.noMatchLeftWindow}})),onLoad:function(){this.getMsgData()}});t.default=c},f753:function(e,t,n){"use strict";n.r(t);var i=n("d1de"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a}}]);