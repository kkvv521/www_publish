(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-robot-robot"],{3752:function(t,n,e){"use strict";e.r(n);var i=e("b3c7"),a=e("d386");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("9186");var u,o=e("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"0471a7a3",null,!1,i["a"],u);n["default"]=c.exports},"84a4":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,".btn-group[data-v-0471a7a3]{margin-left:10px;margin-right:10px;border-color:#f0f0f0;border-width:1px;border-style:solid;padding:11px 8px 5px 8px}.btn-group-item[data-v-0471a7a3]{font-size:14px}",""]),t.exports=n},9186:function(t,n,e){"use strict";var i=e("fe72"),a=e.n(i);a.a},b3c7:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var i={vgtTab:e("96d6").default,uniTable:e("9d7f").default,uniTr:e("5fe7").default,uniTh:e("c9dd").default,uniTd:e("f81f").default,uniIcons:e("27b3").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"btn-group"},[e("v-uni-button",{staticClass:"btn-group-item",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.add("")}}},[t._v("创建机器人")])],1),e("vgt-tab",{staticStyle:{"z-index":"0"},attrs:{list:t.list},on:{onValueChange:function(n){arguments[0]=n=t.$handleEvent(n),t.tabChange.apply(void 0,arguments)}}}),t._l(t.list,(function(n,i){return e("v-uni-view",{key:n,staticClass:"content"},[t.current===n?e("v-uni-view",{staticStyle:{margin:"10px 10px 0px 10px"}},[e("uni-table",{attrs:{stripe:!0,emptyText:"暂无更多数据"}},[e("uni-tr",[e("uni-th",{attrs:{align:"center"}},[t._v("名称")]),e("uni-th",{attrs:{align:"center"}},[t._v("策略")]),e("uni-th",{attrs:{align:"center"}},[t._v("状态")]),e("uni-th",{attrs:{align:"center"}},[t._v("盈利")]),e("uni-th",{attrs:{align:"center"}},[t._v("创建时间")]),e("uni-th",{attrs:{align:"center"}},[t._v("操作")])],1),t._l(t.datas[i].list,(function(n,i){return e("uni-tr",{key:n+i},[e("uni-td",{attrs:{align:"center"}},[e("a",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add(n.id)}}},[t._v(t._s(n.name))])]),e("uni-td",{attrs:{align:"center"}},[e("a",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add(n.id)}}},[t._v(t._s(n.strategy_name))])]),e("uni-td",{attrs:{align:"center"}},[e("uni-icons",{attrs:{type:n.state?"loop":"close",size:"27",color:n.state?"#00ff00":"#ff0000"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add(n.id)}}})],1),e("uni-td",{attrs:{align:"center"}},[e("a",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add(n.id)}}},[t._v(t._s(n.profit))])]),e("uni-td",{attrs:{align:"center"}},[e("a",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add(n.id)}}},[t._v(t._s(n.create_at))])]),e("uni-td",{attrs:{align:"center"}},[e("v-uni-button",{staticStyle:{"margin-right":"10px"},attrs:{size:"mini",type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add(n.id)}}},[t._v("编辑")]),e("v-uni-button",{staticStyle:{"margin-right":"10px"},attrs:{size:"mini",type:"warn"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteRobot(n.name,n.id)}}},[t._v("删除")]),e("v-uni-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.restartAction(n.id)}}},[t._v(t._s(0==n.state?"启动":"停止"))])],1)],1)}))],2)],1):t._e()],1)}))],2)},r=[]},d06a:function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("5530")),r=e("2f62"),u={data:function(){return{list:[],datas:[],current:"默认",current_index:1}},methods:{tabChange:function(t){this.current=t.currentItem},add:function(t){var n="/pages/component/robot/add?id="+t;this.hasLeftWin?uni.reLaunch({url:n}):uni.navigateTo({url:n})},deleteRobot:function(t,n){var e=this;uni.showModal({title:"通知",content:"确定删除机器人[ "+t+" ]",success:function(t){t.cancel||e.$request.get("/robot/delete?id="+n).then((function(t){"WRONG"!=t&&e.getMsgData(e.current_index)}))}})},getMsgData:function(t){var n=this,e=uni.getStorageSync("user_cookie"),i={user_cookie:e,page_index:t};this.$request.post("/robot/list",i).then((function(t){"WRONG"!=t&&(n.list=t.result.list,n.datas=t.result.datas)}))},pageChange:function(t){this.current_index=t.current,this.getMsgData(t.current)},deleteStr:function(t,n){var e=this,i=this;uni.showModal({title:"通知",content:"确定删除["+t+"]",success:function(t){t.confirm&&e.$request.get("/robot/delete?id="+n).then((function(t){i.getMsgData(e.current_index)}))}})},restartAction:function(t){var n=this;this.$request.get("/robot/restart?id="+t).then((function(t){n.getMsgData(n.current_index)}))}},onLoad:function(){this.getMsgData(1)},computed:(0,a.default)({},(0,r.mapState)({hasLeftWin:function(t){return!t.noMatchLeftWindow}}))};n.default=u},d386:function(t,n,e){"use strict";e.r(n);var i=e("d06a"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},fe72:function(t,n,e){var i=e("84a4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("75c03fb1",i,!0,{sourceMap:!1,shadowMode:!1})}}]);