(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-backtest-backtest"],{"05b7":function(t,e,n){"use strict";n.r(e);var i=n("be9e"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"067b":function(t,e,n){var i=n("973f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("3d84a4cc",i,!0,{sourceMap:!1,shadowMode:!1})},"1aa4":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".segmented-control[data-v-5ae4d18a]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:36px;overflow:hidden;\ncursor:pointer\n}.segmented-control__item[data-v-5ae4d18a]{\ndisplay:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;box-sizing:border-box;\nposition:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.segmented-control__item--button[data-v-5ae4d18a]{border-style:solid;border-top-width:1px;border-bottom-width:1px;border-right-width:1px;border-left-width:0}.segmented-control__item--button--first[data-v-5ae4d18a]{border-left-width:1px;border-top-left-radius:5px;border-bottom-left-radius:5px}.segmented-control__item--button--last[data-v-5ae4d18a]{border-top-right-radius:5px;border-bottom-right-radius:5px}.segmented-control__item--text[data-v-5ae4d18a]{border-bottom-style:solid;border-bottom-width:3px}.segmented-control__text[data-v-5ae4d18a]{font-size:16px;line-height:20px;text-align:center}",""]),t.exports=e},"2e2a":function(t,e,n){"use strict";n.r(e);var i=n("da46"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"5aa5":function(t,e,n){var i=n("1aa4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("bec19f44",i,!0,{sourceMap:!1,shadowMode:!1})},"6de8":function(t,e,n){"use strict";n.r(e);var i=n("8a0e"),o=n("2e2a");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("fb64");var r,s=n("f0c5"),l=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"688652aa",null,!1,i["a"],r);e["default"]=l.exports},"71b3":function(t,e,n){"use strict";n.r(e);var i=n("dbbc"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},7751:function(t,e,n){var i=n("c201");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("61affe10",i,!0,{sourceMap:!1,shadowMode:!1})},"8a0e":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uniTable:n("9d7f").default,uniTr:n("5fe7").default,uniTh:n("c9dd").default,uniTd:n("f81f").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"uni-flex uni-row",staticStyle:{"justify-content":"flex-start",padding:"10px 0px 10px 0px",overflow:"auto"}},[n("v-uni-view",{staticClass:"detail"},[t._v("剩余资金比例："),n("v-uni-view",{style:t.getValueColorByDef(t.freecash_precent,35)},[t._v(t._s(t.freecash_precent))])],1),n("v-uni-view",{staticClass:"detail left"},[t._v("初始资金："+t._s(t.get_value("init_cash")))]),n("v-uni-view",{staticClass:"detail left"},[t._v("当前权益："),n("v-uni-view",{style:t.getValueColorByCurrentYQ()},[t._v(t._s(t.get_current_qy()))])],1),n("v-uni-view",{staticClass:"detail left"},[t._v("资金："+t._s(t.get_value("cash_available")))]),n("v-uni-view",{staticClass:"detail left"},[t._v("已实现盈亏："),n("v-uni-view",{style:t.getValueColorByDef(t.total_profit_loss,0)},[t._v(t._s(t.total_profit_loss))])],1)],1),n("uni-table",{staticClass:"acc-table",attrs:{stripe:!0,emptyText:"暂无更多数据",loading:t.loading}},[n("uni-tr",[n("uni-th",{attrs:{align:"center"}},[t._v("币种")]),n("uni-th",{attrs:{align:"center"}},[t._v("多空")]),n("uni-th",{attrs:{align:"center"}},[t._v("总仓")]),n("uni-th",{attrs:{align:"center"}},[t._v("可用")]),n("uni-th",{attrs:{align:"center"}},[t._v("今仓")]),n("uni-th",{attrs:{align:"center"}},[t._v("开仓均价")]),n("uni-th",{attrs:{align:"center"}},[t._v("盈利差价")]),n("uni-th",{attrs:{align:"center"}},[t._v("逐笔浮盈")]),n("uni-th",{attrs:{align:"center"}},[t._v("浮盈比例")]),n("uni-th",{attrs:{align:"center"}},[t._v("开仓成本")]),n("uni-th",{attrs:{align:"center"}},[t._v("价值")]),n("uni-th",{attrs:{align:"center"}},[t._v("手续费")]),n("uni-th",{attrs:{align:"center"}},[t._v("保证金")]),n("uni-th",{attrs:{align:"center"}},[t._v("资金占比")])],1),t._l(t.data_list,(function(e,i){return n("uni-tr",{key:e.instrument_id+i},t._l(t.acc_property_long,(function(i,o){return e["volume_long"]>0?n("uni-td",{key:1+i+o,attrs:{align:"center"}},["type"==i?n("v-uni-view",{staticStyle:{color:"#09BB07"}},[t._v("多")]):t._e(),"type"!=i?n("v-uni-view",{style:t.getValueColor(e[i],i),attrs:{st:!0}},[t._v(t._s(t.getValue(e,i)))]):t._e()],1):t._e()})),1)})),t._l(t.data_list,(function(e,i){return n("uni-tr",{key:e.instrument_id+i+e.volume_short},t._l(t.acc_property_short,(function(i,o){return e["volume_short"]>0?n("uni-td",{key:100+i+o,attrs:{align:"center"}},["type"==i?n("v-uni-view",{staticStyle:{color:"#FF3333"}},[t._v("空")]):t._e(),"type"!=i?n("v-uni-view",{style:t.getValueColor(e[i],i)},[t._v(t._s(t.getValue(e,i)))]):t._e()],1):t._e()})),1)})),n("uni-tr",t._l(t.total,(function(e,i){return n("uni-td",{key:e+i,attrs:{align:"center"}},[n("v-uni-view",{style:t.getValueColor(t.getTotal(e),e)},[t._v(t._s(t.getTotal(e)))])],1)})),1)],2)],1)},a=[]},9370:function(t,e,n){"use strict";n.r(e);var i=n("dc1e"),o=n("05b7");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("b887");var r,s=n("f0c5"),l=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"5ae4d18a",null,!1,i["a"],r);e["default"]=l.exports},"973f":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".rom-item[data-v-7e64cc57]{background-color:#fff;height:750px;font-size:17px;padding:10px;margin-bottom:5px;overflow:auto}.portfolio-item[data-v-7e64cc57]{color:#646464;cursor:pointer;margin-top:5px;padding:1px 5px 1px 5px}.portfolio-item-select[data-v-7e64cc57]{color:#646464;cursor:pointer;margin-top:5px;padding:1px 5px 1px 5px;background-color:#eaeaea}.risk-table[data-v-7e64cc57]{height:300px}.line[data-v-7e64cc57]{background-color:#e6e6e6;height:2px;width:100%}.account-title[data-v-7e64cc57]{min-width:100px;margin-left:30px}",""]),t.exports=e},adbb:function(t,e,n){"use strict";n.r(e);var i=n("c725"),o=n("71b3");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("fc84");var r,s=n("f0c5"),l=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"7e64cc57",null,!1,i["a"],r);e["default"]=l.exports},b887:function(t,e,n){"use strict";var i=n("5aa5"),o=n.n(i);o.a},be9e:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniSegmentedControl",props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#007aff"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:0}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},created:function(){this.currentIndex=this.current},methods:{_onClick:function(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",{currentIndex:t}))}}};e.default=i},c201:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".acc-table[data-v-688652aa]{min-height:300px;max-height:500px;overflow:auto}.detail[data-v-688652aa]{margin-top:10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.detail.left[data-v-688652aa]{margin-left:15px}",""]),t.exports=e},c725:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uniRow:n("f33c4").default,uniCol:n("71df").default,uniSwipeAction:n("4d31").default,uniSwipeActionItem:n("d2ac").default,uniTable:n("9d7f").default,uniTr:n("5fe7").default,uniTh:n("c9dd").default,backTestDetailTable:n("6de8").default,uniSegmentedControl:n("9370").default,uniTd:n("f81f").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{"max-width":"1600px"}},[n("uni-row",{staticStyle:{flex:"1"},attrs:{gutter:10}},[n("uni-col",{attrs:{xs:24,sm:8,md:8,lg:4,xl:4}},[n("v-uni-view",{staticClass:"rom-item uni-flex uni-column",staticStyle:{"justify-content":"space-between"}},[n("v-uni-view",[n("v-uni-view",{staticStyle:{"text-align":"center","font-weight":"bold","margin-bottom":"20px"}},[t._v("组合")]),n("uni-swipe-action",t._l(t.portfolio_list,(function(e,i){return n("uni-swipe-action-item",{key:e,attrs:{threshold:0,"right-options":t.right_btns},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.deletePortfolio(e)},change:function(e){arguments[0]=e=t.$handleEvent(e),t.editListChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"content-box",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.selectPortfolioChange(e)}}},[t.select_portfolio!=e?n("v-uni-view",{staticClass:"portfolio-item"},[t._v(t._s(e))]):t._e(),t.select_portfolio==e?n("v-uni-view",{staticClass:"portfolio-item-select"},[t._v(t._s(e))]):t._e()],1)],1)})),1)],1),n("v-uni-view",[n("v-uni-button",{attrs:{disabled:0==t.selects.length,type:"default",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteAccount.apply(void 0,arguments)}}},[t._v("删除")]),n("uni-table",{staticClass:"risk-table",attrs:{stripe:!0,emptyText:"暂无更多数据",loading:t.loading_account,border:!0,type:"selection"},on:{"selection-change":function(e){arguments[0]=e=t.$handleEvent(e),t.selectionChange.apply(void 0,arguments)}}},[n("uni-tr",[n("uni-th",{attrs:{align:"left"}},[t._v("account")])],1),t._l(t.risk_list,(function(e,i){return n("uni-tr",{key:e.portfolio_cookie+i,attrs:{keyValue:e["account_cookie"]}},[n("a",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickRiskItem(e.portfolio_cookie,e.account_cookie)}}},[t._v(t._s(e["account_cookie"]))])])}))],2)],1)],1)],1),n("uni-col",{attrs:{xs:24,sm:16,md:16,lg:20,xl:20}},[n("v-uni-view",{staticClass:"rom-item"},[n("v-uni-view",{staticClass:"uni-flex uni-row",staticStyle:{"justify-content":"flex-start",padding:"10px 0px 10px 0px"}},[n("v-uni-view",{staticClass:"account-title",staticStyle:{"margin-left":"0px"}},[t._v("当前账户："),t.risk_info&&t.risk_info.account_cookie?n("a",[t._v(t._s(t.risk_info.account_cookie))]):t._e()]),n("v-uni-view",{staticClass:"account-title"},[t._v("最大回撤："),n("a",[t._v(t._s(t.risk_info?t.risk_info.max_dropback:""))])]),n("v-uni-view",{staticClass:"account-title"},[t._v("启动时间："),n("a",[t._v(t._s(t.risk_info_detail?t.risk_info_detail.create_at:""))])])],1),n("v-uni-view",[t._v("参数："),n("a",[t._v(t._s(t.getParams()))])]),n("v-uni-view",{staticClass:"uni-flex uni-row",staticStyle:{"justify-content":"space-between",padding:"10px 0px 10px 0px"}},[n("v-uni-view",[t._v("年化："),t.risk_info&&t.risk_info.account_cookie?n("a",[t._v(t._s(t.risk_info.annualize_return))]):t._e()]),n("v-uni-view",[t._v("alpha："),t.risk_info&&t.risk_info.account_cookie?n("a",[t._v(t._s(t.risk_info.alpha))]):t._e()]),n("v-uni-view",[t._v("sharpe："),t.risk_info&&t.risk_info.account_cookie?n("a",[t._v(t._s(t.risk_info.sharpe))]):t._e()])],1),n("v-uni-view",{staticClass:"line"}),n("back-test-detail-table",{attrs:{hold_data:t.hold_info,performance_info:t.performance_info,loading:t.loading_hold}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt",staticStyle:{"margin-top":"30px"}},[n("uni-segmented-control",{attrs:{current:t.current,values:t.tabs,"style-type":t.styleType,"active-color":t.activeColor},on:{clickItem:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"content"},[0===t.current?n("v-uni-view",[n("uni-table",{staticStyle:{height:"950px"},attrs:{stripe:!0,emptyText:"暂无更多数据",loading:t.loading_hold}},[n("uni-tr",[n("uni-th",{attrs:{align:"center"}}),n("uni-th",{attrs:{align:"center"}},[t._v("总共")]),n("uni-th",{attrs:{align:"center"}},[t._v("买入开仓")]),n("uni-th",{attrs:{align:"center"}},[t._v("卖出开仓")])],1),t._l(t.performance_property,(function(e,i){return n("uni-tr",{key:i+e.key},[n("uni-td",{attrs:{align:"center"}},[t._v(t._s(e.name))]),n("uni-td",{attrs:{align:"center"}},[t._v(t._s(t.performance_info?t.performance_info[e.key]:0))]),n("uni-td",{attrs:{align:"center"}},[t._v(t._s(t.performance_info?t.performance_info.buyopen[e.key]:0))]),n("uni-td",{attrs:{align:"center"}},[t._v(t._s(t.performance_info?t.performance_info.sellopen[e.key]:0))])],1)}))],2)],1):t._e(),1===t.current?n("v-uni-view",[n("uni-table",{staticStyle:{height:"620px"},attrs:{stripe:!0,emptyText:"暂无更多数据",loading:t.loading_trade_his}},[n("uni-tr",[n("uni-th",{attrs:{align:"center"}},[t._v("时间")]),n("uni-th",{attrs:{align:"center"}},[t._v("方向")]),n("uni-th",{attrs:{align:"center"}},[t._v("交易对")]),n("uni-th",{attrs:{align:"center"}},[t._v("价格")]),n("uni-th",{attrs:{align:"center"}},[t._v("数量")]),n("uni-th",{attrs:{align:"center"}},[t._v("手续费")]),n("uni-th",{attrs:{align:"center"}},[t._v("平仓盈亏")])],1),t._l(t.trade_list,(function(e,i){return n("uni-tr",{key:e[0]+e[1]+i},[n("uni-td",{attrs:{align:"center"}},[t._v(t._s(e[0]))]),n("uni-th",{attrs:{align:"center"}},[t._v(t._s(t.trade_award[e[13]]))]),n("uni-td",{attrs:{align:"center"}},[t._v(t._s(e[1]))]),n("uni-td",{attrs:{align:"center"}},[t._v(t._s(e[2]))]),n("uni-td",{attrs:{align:"center"}},[t._v(t._s(e[3]))]),n("uni-td",{attrs:{align:"center"}},[t._v(t._s(t.roundValue(e[9])))]),n("uni-td",{attrs:{align:"center"}},[t._v(t._s(t.roundValue(e[15])))])],1)}))],2)],1):t._e()],1)],1)],1)],1)],1)},a=[]},da46:function(t,e,n){"use strict";n("c975"),n("a9e3"),n("ac1f"),n("5319"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"back-test-detail-table",props:{hold_data:{type:Object,required:!0,default:{}},performance_info:{type:Object,required:!1,default:{}},loading:{type:Boolean,required:!1,default:!1}},data:function(){return{acc_property_long:["instrument_id","type","volume_long_today,volume_long_his","volume_long","volume_long_today","open_price_long","profit_price_long","profit_long","rate_profit_long","open_cost_long","value_long","commission","margin_long","rate_long"],acc_property_short:["instrument_id","type","volume_short_today,volume_short_his","volume_short","volume_short_today","open_price_short","profit_price_short","profit_short","rate_profit_short","open_cost_short","value_short","commission","margin_short","rate_short"],total:["","","volume_long_today,volume_long_his,volume_short_today,volume_short_his","","","","","profit_long,profit_short","","","value_long,value_short","commission","margin_long,margin_short"],color_property:["profit_price","profit"]}},methods:{getValueColor:function(t,e){var n=e.split(",");for(var i in n){var o=n[i];return o=o.replace("_long","").replace("_short",""),this.color_property.indexOf(o)<0?"":t>=0?"color:#09BB07":"color:#FF3333"}},getValueColorByDef:function(t,e){return"string"==typeof t&&(t=t.replace("%","")),Number(t)>=e?"color:#09BB07":"color:#FF3333"},getValueColorByCurrentYQ:function(){return this.getValueColorByDef(this.get_current_qy(),this.get_value("init_cash"))},getValue:function(t,e){var n=e.split(",");if(1==n.length)return t[e];var i=0;for(var o in n)i+=Number(t[n[o]]);return i},getTotal:function(t){if(""==t)return"";var e=t.split(","),n=0;for(var i in this.data_list){var o=this.data_list[i];for(var a in e)e[a].indexOf("long")>=0?o["volume_long"]>0&&(n+=Number(o[e[a]])):e[a].indexOf("short")>=0?o["volume_short"]>0&&(n+=Number(o[e[a]])):(o["volume_long"]>0||o["volume_short"]>0)&&(n+=Number(o[e[a]]))}return this.roundValue(n)},isAvailable:function(){},get_value:function(t){return null==this.hold_data||null==this.hold_data[t]?0:this.roundValue(this.hold_data[t])},get_current_qy:function(){if(null==this.hold_data||null==this.hold_data["cash_available"])return 0;var t=0;for(var e in this.data_list){var n=this.data_list[e];t+=n["margin_long"]+n["margin_short"],n["volume_long"]>0&&(t+=Number(n["value_long"])),n["volume_short"]>0&&(t+=Number(n["value_short"])),(n["volume_long"]>0||n["volume_short"]>0)&&(t-=n["commission"])}return this.roundValue(t+this.hold_data["cash_available"])},roundValue:function(t){return Math.floor(1e4*t)/1e4}},computed:{freecash_precent:function(){for(var t=0,e=0;e<this.data_list.length;e++){var n=Number(this.data_list[e]["rate_long"].replace("%","")),i=Number(this.data_list[e]["rate_short"].replace("%",""));isNaN(n)&&(n=0),isNaN(i)&&(i=0),t+=n+i}return this.roundValue(100-t)+"%"},data_list:function(){return null==this.hold_data||null==this.hold_data.positions?[]:this.hold_data.positions},total_profit_loss:function(){return null==this.performance_info||null==this.performance_info.total_profit||null==this.performance_info.total_loss?0:this.roundValue(this.performance_info.total_profit+this.performance_info.total_loss)}}};e.default=i},dbbc:function(t,e,n){"use strict";n("a434"),n("a9e3"),n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{right_btns:[{text:"删除",style:{backgroundColor:"#007aff"}}],tabs:["绩效分析","买卖信号"],current:0,colors:["#007aff","#4cd964","#dd524d"],colorIndex:0,activeColor:"#007aff",styleType:"button",portfolio_list:[],select_portfolio:"a1",risk_list:[],risk_info:{},risk_info_detail:null,risk_property:["account_cookie","alpha","beta","sharpe","annualize_return","ir","max_dropback","profit_money","time_gap"],lineOption:{notMerge:!0,tooltip:{trigger:"axis",positionStatus:!0,formatterStatus:!0,formatterUnit:"",formatFloat2:!0,formatThousands:!0},legend:{data:["assets","benchmark"]},grid:{left:10,right:10,bottom:"0%",containLabel:!0},xAxis:[],yAxis:[{type:"value"}],series:[]},mouthOption:{notMerge:!0,tooltip:{trigger:"axis",positionStatus:!0,formatterStatus:!0,formatterUnit:"",formatFloat2:!0,formatThousands:!0},legend:{data:["monthProfit"]},grid:{left:10,right:10,bottom:"5%",containLabel:!0},xAxis:[],yAxis:[{type:"value"}],series:[]},config:{key:"name",fontSize:26,color:"#313131",activeColor:"#2c5df7",itemWidth:200,underLinePadding:10,underLineWidth:0,underLineHeight:4,underLineColor:"#2c5df7"},performance_property:[{name:"总收益",key:"total_profit"},{name:"总亏损",key:"total_loss"},{name:"总盈利/总亏损",key:"total_pnl"},{name:"交易笔数",key:"trading_amounts"},{name:"利润笔数",key:"profit_amounts"},{name:"亏损笔数",key:"loss_amounts"},{name:"持平笔数",key:"even_amounts"},{name:"利润单占比",key:"profit_precentage"},{name:"亏损单占比",key:"loss_precentage"},{name:"持平单占比",key:"even_precentage"},{name:"每单平均利润",key:"average_profit"},{name:"每单平均亏损",key:"average_loss"},{name:"均利润/均亏损",key:"average_pnl"},{name:"单笔最大利润",key:"max_profit"},{name:"单笔最大亏损",key:"max_loss"},{name:"单笔最大利润/亏损",key:"max_pnl"},{name:"净利润/总亏损",key:"netprofio_maxloss_ratio"},{name:"连续利润单数",key:"continue_profit_amount"},{name:"连续亏损单数",key:"continue_loss_amount"},{name:"平均持仓时间",key:"average_holdgap"},{name:"利润单平均持仓时间",key:"average_profitholdgap"},{name:"亏损单平均持仓时间",key:"average_losssholdgap"}],performance_info:null,hold_info:{},trade_list:[],trade_award:{1:"买","-1":"卖",2:"买开","-2":"卖开",3:"买平","-3":"卖平",4:"买平今","-4":"卖平今"},selects:[],showEditState:"none",editChangeTime:0,loading_account:!1,loading_hold:!1,loading_trade_his:!1,init_cash:0}},methods:{selectionChange:function(t){this.selects=t.detail.index},editListChange:function(t){this.editChangeTime=(new Date).getTime(),this.showEditState=t},deleteAccount:function(){if(0!=this.selects.length){var t=this;this.showDeleteDialog("选中账户",(function(e){for(var n={accounts:[],portfolio_cookie:t.select_portfolio,user_cookie:uni.getStorageSync("user_cookie")},i=0;i<t.selects.length;i++)n.accounts.push(t.risk_list[t.selects[i]].account_cookie);n.accounts=JSON.stringify(n.accounts),t.$request.post("/risk/delete",n).then((function(e){if("WRONG"!=e){for(var n=t.selects.length-1;n>=0;n--)t.risk_list.splice(t.selects[n],1);t.selects.splice(0,t.selects.length)}}))}))}},deletePortfolio:function(t){var e=this;this.showDeleteDialog(t,(function(n){var i=uni.getStorageSync("user_cookie");e.$request.get("/user?user_cookie="+i+"&portfolio_cookie="+t+"&action=delete_portfolio&model=cookie").then((function(n){"WRONG"!=n&&(t==e.select_portfolio&&(e.risk_list=[]),e.getMsg())}))}))},tabClick:function(t){this.current!==t.currentIndex&&(this.current=t.currentIndex)},selectPortfolioChange:function(t){var e=this;if(!("none"!=this.showEditState||(new Date).getTime()-this.editChangeTime<500)){this.loading_account=!0,this.select_portfolio=t;var n=uni.getStorageSync("user_cookie");this.$request.get("/risk?user_cookie="+n+"&portfolio_cookie="+t).then((function(t){e.loading_account=!1,"WRONG"!=t&&(e.risk_list=e.parseRiskmsg(t).result.list)}))}},clickRiskItem:function(t,e){var n=this;this.clearCashData(),this.loading_hold=!0,this.portfolio_cookie=t,this.account_cookie=e;var i=uni.getStorageSync("user_cookie");this.$request.get("/risk?user_cookie="+i+"&portfolio_cookie="+t+"&account_cookie="+e).then((function(t){if(n.loading_hold=!1,"WRONG"!=t){var e=n.parseRiskmsg(t).result,i=e.list;if(0==i.length)return n.risk_info=null,void(n.risk_info_detail=null);n.risk_info=i[0],n.risk_info_detail=e.info,n.lineOption.xAxis=[{type:"category",data:n.risk_info.totaltimeindex}],n.lineOption.series=[{name:"assets",type:"line",emphasis:{focus:"series"},data:n.risk_info.assets},{name:"benchmark",type:"line",emphasis:{focus:"series"},data:n.risk_info.benchmark_assets}];var o=[],a=[];for(var r in n.risk_info.month_profit)o.push(r),a.push(n.risk_info.month_profit[r]);n.mouthOption.xAxis=[{type:"category",data:o}],n.mouthOption.series=[{name:"monthProfit",type:"bar",data:a}]}})),this.$request.get("/account?action=query_performance&user_cookie="+i+"&portfolio_cookie="+t+"&account_cookie="+e).then((function(t){"WRONG"!=t&&(n.performance_info=t.result.message,n.hold_info=t.result.hold,n.trade_list=t.result.history)}))},parseRiskmsg:function(t){return"string"==typeof t?JSON.parse(t.replace(/NaN/g,0).replace(/Infinity/g,0)):t},getParams:function(){var t="";if(null==this.risk_info_detail)return t;var e=JSON.parse(this.risk_info_detail.params);for(var n in e)t+="[ "+e[n].name+"="+e[n].default+" ]",n<e.length-1&&(t+=" ，");return t},clearCashData:function(){this.hold_info={},this.performance_info=null,this.risk_info=null,this.risk_info_detail=null},getTradeData:function(){},getMsg:function(){var t=this,e=uni.getStorageSync("user_cookie");this.$request.get("/user?user_cookie="+e+"&action=query_portfolio&model=cookie").then((function(e){"WRONG"!=e&&(t.portfolio_list=e.result)}))},showDeleteDialog:function(t,e){uni.getStorageSync("user_cookie");uni.showModal({title:"通知",content:"确定要删除["+t+"]",success:function(t){t.cancel||null==e||e()}})},roundValue:function(t){return isNaN(Number(t))?t:Math.floor(1e4*t)/1e4}},onLoad:function(){this.getMsg()}};e.default=i},dc1e:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"segmented-control",class:["text"===t.styleType?"segmented-control--text":"segmented-control--button"],style:{borderColor:"text"===t.styleType?"":t.activeColor}},t._l(t.values,(function(e,i){return n("v-uni-view",{key:i,staticClass:"segmented-control__item",class:["text"===t.styleType?"segmented-control__item--text":"segmented-control__item--button",i===t.currentIndex&&"button"===t.styleType?"segmented-control__item--button--active":"",0===i&&"button"===t.styleType?"segmented-control__item--button--first":"",i===t.values.length-1&&"button"===t.styleType?"segmented-control__item--button--last":""],style:{backgroundColor:i===t.currentIndex&&"button"===t.styleType?t.activeColor:"",borderColor:i===t.currentIndex&&"text"===t.styleType||"button"===t.styleType?t.activeColor:"transparent"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick(i)}}},[n("v-uni-text",{staticClass:"segmented-control__text",style:{color:i===t.currentIndex?"text"===t.styleType?t.activeColor:"#fff":"text"===t.styleType?"#000":t.activeColor}},[t._v(t._s(e))])],1)})),1)},a=[]},fb64:function(t,e,n){"use strict";var i=n("7751"),o=n.n(i);o.a},fc84:function(t,e,n){"use strict";var i=n("067b"),o=n.n(i);o.a}}]);