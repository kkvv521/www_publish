(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-robot-add"],{"03f1":function(t,e,i){"use strict";i.r(e);var n=i("eba3"),a=i("54b9");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("ab16");var r,s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"03029f5b",null,!1,n["a"],r);e["default"]=l.exports},"068f":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniTable:i("9d7f").default,uniTr:i("5fe7").default,uniTh:i("c9dd").default,uniTd:i("f81f").default,uniPagination:i("1b53").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.show_progress&&t.logData?i("v-uni-progress",{attrs:{percent:t.logData.progress,"show-info":!0,"stroke-width":"5"}}):t._e(),t.logData?i("v-uni-button",{attrs:{size:"mini",type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearLog.apply(void 0,arguments)}}},[t._v("清除")]):t._e(),t.logData?i("uni-table",{attrs:{stripe:!0,emptyText:"暂无更多数据"}},[i("uni-tr",[i("uni-th",{attrs:{width:"300",align:"left"}},[t._v("时间")]),i("uni-th",{attrs:{align:"left"}},[t._v("日志")])],1),t._l(t.logData.list,(function(e,n){return i("uni-tr",{key:e+n},[i("uni-td",[t._v(t._s(e.create_at))]),i("uni-td",{style:t.log_type[e.type]},[t._v(t._s(e.log))])],1)}))],2):t._e(),t.logData?i("uni-pagination",{staticStyle:{"margin-top":"10px"},attrs:{title:"标题文字",pageSize:"10",total:t.logData.total,current:t.logData.page_index},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.logPageChange.apply(void 0,arguments)}}}):t._e()],1)},o=[]},"0c52":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-card uni-border",class:{"uni-card--full":!0===t.isFull||"true"===t.isFull,"uni-card--shadow":!0===t.isShadow||"true"===t.isShadow}},["basic"===t.mode&&t.title?i("v-uni-view",{staticClass:"uni-card__header uni-border-bottom",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.thumbnail?i("v-uni-view",{staticClass:"uni-card__header-extra-img-view"},[i("v-uni-image",{staticClass:"uni-card__header-extra-img",attrs:{src:t.thumbnail}})],1):t._e(),i("v-uni-text",{staticClass:"uni-card__header-title-text"},[t._v(t._s(t.title))]),t.extra?i("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))]):t._e()],1):t._e(),"title"===t.mode?i("v-uni-view",{staticClass:"uni-card__title uni-border-bottom",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-card__title-box"},[i("v-uni-view",{staticClass:"uni-card__title-header"},[i("v-uni-image",{staticClass:"uni-card__title-header-image",attrs:{src:t.thumbnail,mode:"scaleToFill"}})],1),i("v-uni-view",{staticClass:"uni-card__title-content"},[i("v-uni-text",{staticClass:"uni-card__title-content-title uni-ellipsis"},[t._v(t._s(t.title))]),i("v-uni-text",{staticClass:"uni-card__title-content-extra uni-ellipsis"},[t._v(t._s(t.subTitle))])],1)],1),t.extra?i("v-uni-view",[i("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1):t._e()],1):t._e(),"style"===t.mode?i("v-uni-view",{staticClass:"uni-card__thumbnailimage",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-card__thumbnailimage-box"},[i("v-uni-image",{staticClass:"uni-card__thumbnailimage-image",attrs:{src:t.thumbnail,mode:"aspectFill"}})],1),t.title?i("v-uni-view",{staticClass:"uni-card__thumbnailimage-title"},[i("v-uni-text",{staticClass:"uni-card__thumbnailimage-title-text"},[t._v(t._s(t.title))])],1):t._e()],1):t._e(),i("v-uni-view",{staticClass:"uni-card__content uni-card__content--pd",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},["style"===t.mode&&t.extra?i("v-uni-view",{},[i("v-uni-text",{staticClass:"uni-card__content-extra"},[t._v(t._s(t.extra))])],1):t._e(),t._t("default")],2),t.note?i("v-uni-view",{staticClass:"uni-card__footer uni-border-top"},[t._t("footer",[i("v-uni-text",{staticClass:"uni-card__footer-text"},[t._v(t._s(t.note))])])],2):t._e()],1)},o=[]},"0fcf":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniCard",props:{title:{type:String,default:""},subTitle:{type:String,default:""},extra:{type:String,default:""},note:{type:String,default:""},thumbnail:{type:String,default:""},mode:{type:String,default:"basic"},isFull:{type:Boolean,default:!1},isShadow:{type:[Boolean,String],default:!1}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},"175b":function(t,e,i){"use strict";i.r(e);var n=i("0c52"),a=i("cba4");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("fa9d");var r,s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"2d0b4842",null,!1,n["a"],r);e["default"]=l.exports},"20cd":function(t,e,i){"use strict";i.r(e);var n=i("068f"),a=i("b782");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);var r,s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"14a96d34",null,!1,n["a"],r);e["default"]=l.exports},"54b9":function(t,e,i){"use strict";i.r(e);var n=i("c7305"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"597e":function(t,e,i){var n=i("7abe");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("75a1502a",n,!0,{sourceMap:!1,shadowMode:!1})},"7abe":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".mcontainer[data-v-03029f5b]{padding:10px;background-color:#fff}.title[data-v-03029f5b]{margin-top:5px;margin-right:10px;text-align:right;font-weight:700;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column\n\t/* align-items: flex-end; */}.param-title[data-v-03029f5b]{color:#1380b1;border-color:#1380b1;border-width:1px;border-style:solid;width:-webkit-fit-content;width:fit-content;padding:0 3px 0 3px;border-radius:5px}.input[data-v-03029f5b]{\n\t/* margin-left: 10px; */border-color:#e6e6e6;border-width:1px;border-style:solid;max-width:400px;text-align:left}.item[data-v-03029f5b]{margin-bottom:10px}",""]),t.exports=e},"7db04":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"log-view",props:{show_progress:{type:Boolean,required:!1,default:!1}},data:function(){return{log_current_index:1,tickLog:null,logData:null,log_type:{log:"user-select:text",error:"color:#ff0000;user-select:text;"},portfolio_cookie:"",try_time:0}},methods:{logPageChange:function(t){this.log_current_index=t.current,this.backtestLogAction()},backtestLogAction:function(){var t=this,e={user_cookie:uni.getStorageSync("user_cookie"),portfolio_cookie:this.portfolio_cookie,page_index:this.log_current_index};this.$request.post("/strategy/log",e).then((function(e){"WRONG"!=e&&(t.logData=e.result,t.$emit("stateChange",e.result.state),"0"==e.result.state&&t.try_time++,t.try_time<10||t.stopTickLog())}))},startTickLog:function(){var t=this;null==this.tickLog&&(this.tickLog=setInterval((function(e){t.backtestLogAction()}),1e3))},stopTickLog:function(){null!=this.tickLog&&(clearInterval(this.tickLog),this.tickLog=null)},setPortfolioCookie:function(t){this.portfolio_cookie=t,this.try_time=0,this.backtestLogAction(),this.startTickLog()},clearLog:function(){var t=this,e={user_cookie:uni.getStorageSync("user_cookie"),portfolio_cookie:this.portfolio_cookie};this.$request.post("/strategy/clearlog",e).then((function(e){"WRONG"!=e&&(t.log_current_index=1,t.backtestLogAction())}))}},mounted:function(){},onUnload:function(){this.stopTickLog()}};e.default=n},ab16:function(t,e,i){"use strict";var n=i("597e"),a=i.n(n);a.a},b782:function(t,e,i){"use strict";i.r(e);var n=i("7db04"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},c7305:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{strategyList:[],strategyIndex:0,params:[],exchangeList:[],exchangeIndex:0,robot_name:"",panList:[{name:"模拟盘",type:1}],panIndex:0,robotInfo:null,robot_tag:""}},methods:{strategyChange:function(t){this.strategyIndex=t.detail.value,this.params=this.strategyList[this.strategyIndex].params},exchangeChange:function(t){this.exchangeIndex=t.detail.value},panChange:function(t){this.panIndex!=t.detail.value&&(this.panIndex=t.detail.value,this.getExchangeMsg())},createRobot:function(){var t=this,e=uni.getStorageSync("user_cookie"),i=this.strategyList[this.strategyIndex],n=this.exchangeList[this.exchangeIndex];if(null!=n)if(""!=this.robot_name){var a={user_cookie:e,name:this.robot_name,strategy_id:i.id,params:JSON.stringify(i.params),exchange_id:n.id,broker_type:this.panList[this.panIndex].type,tag:this.robot_tag},o=this.$route.query.id;null!=o&&(a["id"]=o),this.$request.post("/robot/add",a).then((function(e){"WRONG"!=e&&t.cancel()}))}else uni.showModal({title:"通知",content:"请输入名称",showCancel:!1});else uni.showModal({title:"通知",content:"请选择交易所",showCancel:!1})},cancel:function(){uni.redirectTo({url:"/pages/component/robot/robot"})},paramInputChange:function(t,e){for(var i=this.strategyList[this.strategyIndex].params,n=0;n<i.length;n++)i[n].name==t&&(i[n].value=e.detail.value)},getIndexByList:function(t,e){for(var i=-1,n=0;n<t.length;n++)if(t[n].id==e){i=n;break}return i},getExchangeMsg:function(){var t=this,e=uni.getStorageSync("user_cookie");this.$request.get("/exchange/list?user_cookie="+e+"&no_used="+(2==this.panList[this.panIndex].type)).then((function(i){if("WRONG"!=i&&(t.exchangeList=i.result,null==t.robotInfo)){var n=t.$route.query.id;if(null==n||""==n)return;t.$request.get("/robot/info?user_cookie="+e+"&id="+n).then((function(e){"WRONG"!=e&&(t.robotInfo=e.result,t.robot_name=e.result.name,t.strategyIndex=t.getIndexByList(t.strategyList,e.result.strategy_id),t.exchangeIndex=t.getIndexByList(t.exchangeList,e.result.exchange_id),t.strategyIndex>=0?t.params=JSON.parse(e.result.params):t.params=[],t.$refs.portfolioCookie.setPortfolioCookie(t.robotInfo.portfolio_cookie))}))}}))}},onLoad:function(){var t=this,e=uni.getStorageSync("user_cookie"),i={user_cookie:e};this.$request.post("/strategy/samplelist",i).then((function(e){"WRONG"!=e&&(t.strategyList=e.result,t.params=t.strategyList[t.strategyIndex].params,t.getExchangeMsg())}))},onUnload:function(){this.$refs.portfolioCookie.stopTickLog()}};e.default=n},cba4:function(t,e,i){"use strict";i.r(e);var n=i("0fcf"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},d3cd:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.uni-card[data-v-2d0b4842]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-shadow:0 0 0 transparent;box-shadow:0 0 0 transparent;\nmargin:12px 15px;background-color:#fff;position:relative;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;border-radius:5px;overflow:hidden;\ncursor:pointer\n}.uni-border[data-v-2d0b4842]{position:relative;\n\nz-index:1}\n.uni-border[data-v-2d0b4842]:after{content:"";position:absolute;bottom:0;left:0;top:0;right:0;border:1px solid #e5e5e5;border-radius:10px;-webkit-box-sizing:border-box;box-sizing:border-box;width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:left top;transform-origin:left top;z-index:-1}\n.uni-border-bottom[data-v-2d0b4842]{position:relative;\n\nz-index:1}\n.uni-border-bottom[data-v-2d0b4842]:after{content:"";position:absolute;bottom:0;left:0;top:0;right:0;border-bottom:1px solid #e5e5e5;-webkit-box-sizing:border-box;box-sizing:border-box;width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:left top;transform-origin:left top;z-index:-1}\n.uni-border-top[data-v-2d0b4842]{position:relative;\n\nz-index:1}\n.uni-border-top[data-v-2d0b4842]:after{content:"";position:absolute;bottom:0;left:0;top:0;right:0;border-top:1px solid #e5e5e5;-webkit-box-sizing:border-box;box-sizing:border-box;width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:left top;transform-origin:left top;z-index:-1}\n.uni-card__thumbnailimage[data-v-2d0b4842]{position:relative;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:150px;overflow:hidden}.uni-card__thumbnailimage-box[data-v-2d0b4842]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;overflow:hidden}.uni-card__thumbnailimage-image[data-v-2d0b4842]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-card__thumbnailimage-title[data-v-2d0b4842]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nposition:absolute;bottom:0;left:0;right:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding:8px 12px;background-color:rgba(0,0,0,.4)}.uni-card__thumbnailimage-title-text[data-v-2d0b4842]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:14px;color:#fff}.uni-card__title[data-v-2d0b4842]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:10px}.uni-card__title-box[data-v-2d0b4842]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden}.uni-card__title-header[data-v-2d0b4842]{width:40px;height:40px;overflow:hidden;border-radius:5px}.uni-card__title-header-image[data-v-2d0b4842]{width:40px;height:40px}.uni-card__title-content[data-v-2d0b4842]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:10px;height:40px;overflow:hidden}.uni-card__title-content-title[data-v-2d0b4842]{font-size:14px;line-height:22px}.uni-card__title-content-extra[data-v-2d0b4842]{font-size:12px;line-height:27px;color:#999}.uni-card__header[data-v-2d0b4842]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nposition:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding:12px;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-card__header-title[data-v-2d0b4842]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin-right:8px;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-card__header-title-text[data-v-2d0b4842]{font-size:16px;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-card__header-extra-img[data-v-2d0b4842]{height:20px;width:20px;margin-right:8px}.uni-card__header-extra-text[data-v-2d0b4842]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:8px;font-size:12px;text-align:right;color:#999}.uni-card__content[data-v-2d0b4842]{color:#333}.uni-card__content--pd[data-v-2d0b4842]{padding:12px}.uni-card__content-extra[data-v-2d0b4842]{font-size:14px;padding-bottom:10px;color:#999}.uni-card__footer[data-v-2d0b4842]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:12px}.uni-card__footer-text[data-v-2d0b4842]{color:#999;font-size:12px}.uni-card--shadow[data-v-2d0b4842]{position:relative;\n-webkit-box-shadow:0 0 5px 1px rgba(0,0,0,.1);box-shadow:0 0 5px 1px rgba(0,0,0,.1)\n}.uni-card--full[data-v-2d0b4842]{margin:0;border-radius:0}\n.uni-card--full[data-v-2d0b4842]:after{border-radius:0}\n.uni-ellipsis[data-v-2d0b4842]{\noverflow:hidden;white-space:nowrap;text-overflow:ellipsis;\n}',""]),t.exports=e},eba3:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniRow:i("f33c4").default,uniCol:i("71df").default,uniCard:i("175b").default,logView:i("20cd").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"mcontainer"},[i("uni-row",{staticClass:"item",attrs:{gutter:5}},[i("uni-col",{staticClass:"title",attrs:{span:4}},[t._v("名称")]),i("uni-col",{attrs:{span:19}},[i("v-uni-view",{staticStyle:{width:"402px"}},[i("v-uni-input",{staticClass:"uni-input input",attrs:{placeholder:"请输入名称"},model:{value:t.robot_name,callback:function(e){t.robot_name=e},expression:"robot_name"}})],1)],1)],1),i("uni-row",{staticClass:"item",attrs:{gutter:5}},[i("uni-col",{staticClass:"title",attrs:{span:4}},[t._v("策略")]),i("uni-col",{attrs:{span:19}},[i("v-uni-view",{staticClass:"uni-list-cell-db input"},[i("v-uni-picker",{attrs:{value:t.strategyIndex,range:t.strategyList,"range-key":"name"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.strategyChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.strategyList[t.strategyIndex]?t.strategyList[t.strategyIndex].name:""))])],1)],1)],1)],1),t.strategyList.length>0?i("uni-row",{staticClass:"item",attrs:{gutter:5}},[i("uni-col",{staticClass:"title",attrs:{span:4}},[t._v("策略参数")]),i("uni-col",{attrs:{span:19}},[i("uni-card",{staticStyle:{margin:"0px"},attrs:{title:"参数",mode:"basic","is-shadow":!1,extra:""}},t._l(t.params,(function(e,n){return i("uni-row",{key:e.value+e.name,staticClass:"item",attrs:{gutter:5}},[i("uni-col",{staticClass:"title",staticStyle:{"margin-right":"0px"},attrs:{xs:24,sm:24,md:24,lg:4,xl:4}},[i("v-uni-view",{staticClass:"param-title"},[t._v(t._s(e.des)+"("+t._s(e.type)+")")])],1),i("uni-col",{attrs:{xs:24,sm:24,md:24,lg:20,xl:20}},[i("v-uni-input",{staticClass:"uni-input input",attrs:{value:e.value?e.value:e.default},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),function(i){return t.paramInputChange(e.name,i)}.apply(void 0,arguments)}}})],1)],1)})),1)],1)],1):t._e(),i("uni-row",{staticClass:"item",attrs:{gutter:5}},[i("uni-col",{staticClass:"title",attrs:{span:4}},[t._v("交易盘")]),i("uni-col",{attrs:{span:19}},[i("v-uni-view",{staticClass:"uni-list-cell-db input"},[i("v-uni-picker",{attrs:{value:t.panIndex,range:t.panList,"range-key":"name"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.panChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.panList[t.panIndex]?t.panList[t.panIndex].name:""))])],1)],1)],1)],1),i("uni-row",{staticClass:"item",attrs:{gutter:5}},[i("uni-col",{staticClass:"title",attrs:{span:4}},[t._v("交易平台")]),i("uni-col",{attrs:{span:19}},[i("v-uni-view",{staticClass:"uni-list-cell-db input"},[i("v-uni-picker",{attrs:{value:t.exchangeIndex,range:t.exchangeList,"range-key":"name"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.exchangeChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.exchangeList[t.exchangeIndex]?t.exchangeList[t.exchangeIndex].name+"-"+t.exchangeList[t.exchangeIndex].type:""))])],1)],1)],1)],1),i("uni-row",{staticClass:"item",attrs:{gutter:5}},[i("uni-col",{staticClass:"title",attrs:{span:4}},[t._v("备注")]),i("uni-col",{attrs:{span:19}},[i("v-uni-view",{staticStyle:{width:"402px"}},[i("v-uni-input",{staticClass:"uni-input input",attrs:{placeholder:"请输入备注"},model:{value:t.robot_tag,callback:function(e){t.robot_tag=e},expression:"robot_tag"}})],1)],1)],1),i("v-uni-view",{staticClass:"uni-flex",staticStyle:{"justify-content":"center"}},[i("v-uni-view",[i("v-uni-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.createRobot.apply(void 0,arguments)}}},[t._v("创建机器人")])],1),i("v-uni-view",[i("v-uni-button",{attrs:{type:"default",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v("取消")])],1)],1),i("log-view",{ref:"portfolioCookie",attrs:{show_progress:!1}})],1)},o=[]},ee70:function(t,e,i){var n=i("d3cd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("257b5175",n,!0,{sourceMap:!1,shadowMode:!1})},fa9d:function(t,e,i){"use strict";var n=i("ee70"),a=i.n(n);a.a}}]);