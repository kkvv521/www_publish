(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-robot-add"],{"03f1":function(t,e,n){"use strict";n.r(e);var i=n("61ad"),a=n("54b9");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("f465");var o,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"6224cb32",null,!1,i["a"],o);e["default"]=c.exports},"092c":function(t,e,n){var i=n("3b02");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("ee4da472",i,!0,{sourceMap:!1,shadowMode:!1})},"3b02":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".mcontainer[data-v-6224cb32]{padding:10px;background-color:#fff}.title[data-v-6224cb32]{margin-top:5px;margin-right:10px;text-align:right;font-weight:700;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column\n\t/* align-items: flex-end; */}.param-title[data-v-6224cb32]{color:#1380b1;border-color:#1380b1;border-width:1px;border-style:solid;width:-webkit-fit-content;width:fit-content;padding:0 3px 0 3px;border-radius:5px}.input[data-v-6224cb32]{\n\t/* margin-left: 10px; */border-color:#e6e6e6;border-width:1px;border-style:solid;max-width:400px;text-align:left}.item[data-v-6224cb32]{margin-bottom:10px}",""]),t.exports=e},"54b9":function(t,e,n){"use strict";n.r(e);var i=n("c7305"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},"61ad":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var i={uniRow:n("f33c4").default,uniCol:n("71df").default,uniCard:n("175b").default,logView:n("20cd").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"mcontainer"},[n("uni-row",{staticClass:"item",attrs:{gutter:5}},[n("uni-col",{staticClass:"title",attrs:{span:4}},[t._v("名称")]),n("uni-col",{attrs:{span:19}},[n("v-uni-view",{staticStyle:{width:"402px"}},[n("v-uni-input",{staticClass:"uni-input input",attrs:{placeholder:"请输入名称"},model:{value:t.robot_name,callback:function(e){t.robot_name=e},expression:"robot_name"}})],1)],1)],1),n("uni-row",{staticClass:"item",attrs:{gutter:5}},[n("uni-col",{staticClass:"title",attrs:{span:4}},[t._v("策略")]),n("uni-col",{attrs:{span:19}},[n("v-uni-view",{staticClass:"uni-list-cell-db input"},[n("v-uni-picker",{attrs:{value:t.strategyIndex,range:t.strategyList,"range-key":"name"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.strategyChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.strategyList[t.strategyIndex]?t.strategyList[t.strategyIndex].name:""))])],1)],1)],1)],1),t.strategyList.length>0?n("uni-row",{staticClass:"item",attrs:{gutter:5}},[n("uni-col",{staticClass:"title",attrs:{span:4}},[t._v("策略参数")]),n("uni-col",{attrs:{span:19}},[n("uni-card",{staticStyle:{margin:"0px"},attrs:{title:"参数",mode:"basic","is-shadow":!1,extra:""}},t._l(t.params,(function(e,i){return n("uni-row",{key:e.value+e.name,staticClass:"item",attrs:{gutter:5}},[n("uni-col",{staticClass:"title",staticStyle:{"margin-right":"0px"},attrs:{xs:24,sm:24,md:24,lg:4,xl:4}},[n("v-uni-view",{staticClass:"param-title"},[t._v(t._s(e.des)+"("+t._s(e.type)+")")])],1),n("uni-col",{attrs:{xs:24,sm:24,md:24,lg:20,xl:20}},[n("v-uni-input",{staticClass:"uni-input input",attrs:{value:e.value?e.value:e.default},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),function(n){return t.paramInputChange(e.name,n)}.apply(void 0,arguments)}}})],1)],1)})),1)],1)],1):t._e(),n("uni-row",{staticClass:"item",attrs:{gutter:5}},[n("uni-col",{staticClass:"title",attrs:{span:4}},[t._v("交易盘")]),n("uni-col",{attrs:{span:19}},[n("v-uni-view",{staticClass:"uni-list-cell-db input"},[n("v-uni-picker",{attrs:{value:t.panIndex,range:t.panList,"range-key":"name"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.panChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.panList[t.panIndex]?t.panList[t.panIndex].name:""))])],1)],1)],1)],1),0!=t.panIndex?n("uni-row",{staticClass:"item",attrs:{gutter:5}},[n("uni-col",{staticClass:"title",attrs:{span:4}},[t._v("交易平台")]),n("uni-col",{attrs:{span:19}},[n("v-uni-view",{staticClass:"uni-list-cell-db input"},[n("v-uni-picker",{attrs:{value:t.exchangeIndex,range:t.exchangeList,"range-key":"name"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.exchangeChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.exchangeList[t.exchangeIndex]?t.exchangeList[t.exchangeIndex].name+"-"+t.exchangeList[t.exchangeIndex].type:""))])],1)],1)],1)],1):t._e(),n("uni-row",{staticClass:"item",attrs:{gutter:5}},[n("uni-col",{staticClass:"title",attrs:{span:4}},[t._v("当前账户")]),n("uni-col",{attrs:{span:19}},[n("v-uni-view",{staticClass:"uni-flex uni-row",staticStyle:{width:"402px","align-items":"center"}},[n("v-uni-input",{staticClass:"uni-input input",staticStyle:{color:"rgb(170,170,170)"},attrs:{disabled:"true",placeholder:""},model:{value:t.account_cookie,callback:function(e){t.account_cookie=e},expression:"account_cookie"}}),n("v-uni-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearAccount.apply(void 0,arguments)}}},[t._v("使用新账号")])],1)],1)],1),0==t.panIndex?n("uni-row",{staticClass:"item",attrs:{gutter:5}},[n("uni-col",{staticClass:"title",attrs:{span:4}},[t._v("初始资金")]),n("uni-col",{attrs:{span:19}},[n("v-uni-view",{staticStyle:{width:"402px"}},[n("v-uni-input",{staticClass:"uni-input input",attrs:{placeholder:"请输入备注"},model:{value:t.init_cash,callback:function(e){t.init_cash=e},expression:"init_cash"}})],1)],1)],1):t._e(),n("uni-row",{staticClass:"item",attrs:{gutter:5}},[n("uni-col",{staticClass:"title",attrs:{span:4}},[t._v("备注")]),n("uni-col",{attrs:{span:19}},[n("v-uni-view",{staticStyle:{width:"402px"}},[n("v-uni-input",{staticClass:"uni-input input",attrs:{placeholder:"请输入备注"},model:{value:t.robot_tag,callback:function(e){t.robot_tag=e},expression:"robot_tag"}})],1)],1)],1),n("v-uni-view",{staticClass:"uni-flex",staticStyle:{"justify-content":"center"}},[n("v-uni-view",[n("v-uni-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.createRobot.apply(void 0,arguments)}}},[t._v("创建机器人")])],1),n("v-uni-view",[n("v-uni-button",{attrs:{type:"default",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v("取消")])],1)],1),n("log-view",{ref:"portfolioCookie",attrs:{show_progress:!1}})],1)},s=[]},c7305:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{strategyList:[],strategyIndex:0,params:[],exchangeList:[],exchangeIndex:0,robot_name:"",panList:[{name:"模拟盘",type:1}],panIndex:0,robotInfo:null,robot_tag:"",account_cookie:"",init_cash:1e6}},methods:{clearAccount:function(){this.account_cookie=""},strategyChange:function(t){this.strategyIndex=t.detail.value,this.params=this.strategyList[this.strategyIndex].params},exchangeChange:function(t){this.exchangeIndex=t.detail.value},panChange:function(t){this.panIndex!=t.detail.value&&(this.panIndex=t.detail.value,this.getExchangeMsg())},createRobot:function(){var t=this,e=uni.getStorageSync("user_cookie"),n=this.strategyList[this.strategyIndex],i=this.exchangeList[this.exchangeIndex];if(null!=i)if(""!=this.robot_name){var a={user_cookie:e,name:this.robot_name,strategy_id:n.id,params:JSON.stringify(n.params),exchange_id:i.id,broker_type:this.panList[this.panIndex].type,tag:this.robot_tag,account_cookie:this.account_cookie,init_cash:this.init_cash},s=this.$route.query.id;null!=s&&(a["id"]=s),this.$request.post("/robot/add",a).then((function(e){"WRONG"!=e&&t.cancel()}))}else uni.showModal({title:"通知",content:"请输入名称",showCancel:!1});else uni.showModal({title:"通知",content:"请选择交易所",showCancel:!1})},cancel:function(){uni.redirectTo({url:"/pages/component/robot/robot"})},paramInputChange:function(t,e){for(var n=this.strategyList[this.strategyIndex].params,i=0;i<n.length;i++)n[i].name==t&&(n[i].value=e.detail.value)},getIndexByList:function(t,e){for(var n=-1,i=0;i<t.length;i++)if(t[i].id==e){n=i;break}return n},getExchangeMsg:function(){var t=this,e=uni.getStorageSync("user_cookie");this.$request.get("/exchange/list?user_cookie="+e+"&no_used="+(2==this.panList[this.panIndex].type)).then((function(n){if("WRONG"!=n&&(t.exchangeList=n.result,null==t.robotInfo)){var i=t.$route.query.id;if(null==i||""==i)return;t.$request.get("/robot/info?user_cookie="+e+"&id="+i).then((function(e){"WRONG"!=e&&(t.robotInfo=e.result,t.robot_name=e.result.name,t.account_cookie=e.result.account_cookie,t.init_cash=e.result.init_cash||1e6,t.strategyIndex=t.getIndexByList(t.strategyList,e.result.strategy_id),t.exchangeIndex=t.getIndexByList(t.exchangeList,e.result.exchange_id),t.strategyIndex>=0?t.params=JSON.parse(e.result.params):t.params=[],t.$refs.portfolioCookie.setPortfolioCookie(t.robotInfo.portfolio_cookie))}))}}))}},onLoad:function(){var t=this,e=uni.getStorageSync("user_cookie"),n={user_cookie:e};this.$request.post("/strategy/samplelist",n).then((function(e){"WRONG"!=e&&(t.strategyList=e.result,t.params=t.strategyList[t.strategyIndex].params,t.getExchangeMsg())}))},onUnload:function(){this.$refs.portfolioCookie.stopTickLog()}};e.default=i},f465:function(t,e,n){"use strict";var i=n("092c"),a=n.n(i);a.a}}]);