webpackJsonp([2],{1038:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"crumbs"},[n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",[n("i",{staticClass:"el-icon-share"}),e._v(" 分销商管理设置")]),e._v(" "),n("el-breadcrumb-item",[e._v("修改")])],1)],1),e._v(" "),n("div",{staticClass:"form-box"},[n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"分销商编号",prop:"id",rules:[{required:!0,message:"景区编号不能为空"}]}},[n("el-input",{attrs:{disabled:!0},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"分销商名称",prop:"name",rules:[{required:!0,message:"景区名称不能为空"}]}},[n("el-input",{attrs:{disabled:!0},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"分销商类别",prop:"custType",rules:[{required:!0,message:"景区分类不能为空"}]}},[n("el-select",{attrs:{placeholder:"请重新选择"},on:{change:e.handleChange1},model:{value:e.form.custType1,callback:function(t){e.$set(e.form,"custType1",t)},expression:"form.custType1"}},e._l(e.custType,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"分销商等级",prop:"level",rules:[{required:!0,message:"景区等级不能为空"}]}},[n("el-select",{attrs:{placeholder:"请重新选择"},on:{change:e.handleChange2},model:{value:e.form.level1,callback:function(t){e.$set(e.form,"level1",t)},expression:"form.level1"}},e._l(e.level,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"电话",prop:"phone",rules:[{required:!0,message:"景区简介不能为空"}]}},[n("el-input",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"联系人",prop:"linkMan",rules:[{required:!0,message:"地址不能为空"}]}},[n("el-input",{model:{value:e.form.linkMan,callback:function(t){e.$set(e.form,"linkMan",t)},expression:"form.linkMan"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"用户名",prop:"userName",rules:[{required:!0,message:"营业时间不能为空"}]}},[n("el-input",{attrs:{disabled:!0},model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"分销商状态",prop:"state"}},[n("el-select",{attrs:{placeholder:"请重新选择"},on:{change:e.handleChange3},model:{value:e.form.stateName1,callback:function(t){e.$set(e.form,"stateName1",t)},expression:"form.stateName1"}},e._l(e.states,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"授信额度",prop:"creditLimit",rules:[{required:!0,message:"温馨提示不能为空"}]}},[n("el-input",{attrs:{type:"number"},model:{value:e.form.creditLimit,callback:function(t){e.$set(e.form,"creditLimit",t)},expression:"form.creditLimit"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"预存现金",prop:"cashMoney",rules:[{required:!0,message:"优惠政策不能为空"}]}},[n("el-input",{attrs:{disabled:!0},model:{value:e.form.cashMoney,callback:function(t){e.$set(e.form,"cashMoney",t)},expression:"form.cashMoney"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"",prop:"viewId"}},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSubmit("form")}}},[e._v("提 交")]),e._v(" "),n("el-button",{on:{click:function(t){e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1)])},staticRenderFns:[]}},1070:function(e,t,n){var r=n(727);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(197)("41b824f8",r,!0)},511:function(e,t,n){n(1070);var r=n(198)(n(610),n(1038),"data-v-20bf46a3",null);e.exports=r.exports},532:function(e,t,n){"use strict";t.a={apidomain:"http://test.elvmedia.cn:8080/Ticket"}},534:function(e,t,n){"use strict";function r(e){var t,n;this.promise=new e(function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r}),this.resolve=a(t),this.reject=a(n)}var a=n(200);e.exports.f=function(e){return new r(e)}},536:function(e,t,n){e.exports={default:n(546),__esModule:!0}},537:function(e,t,n){var r=n(136),a=n(49)("toStringTag"),o="Arguments"==r(function(){return arguments}()),i=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,n,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=i(t=Object(e),a))?n:o?r(t):"Object"==(s=r(t))&&"function"==typeof t.callee?"Arguments":s}},538:function(e,t){e.exports=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}}},539:function(e,t,n){var r=n(65),a=n(66),o=n(534);e.exports=function(e,t){if(r(e),a(t)&&t.constructor===e)return t;var n=o.f(e);return(0,n.resolve)(t),n.promise}},540:function(e,t,n){var r=n(65),a=n(200),o=n(49)("species");e.exports=function(e,t){var n,i=r(e).constructor;return void 0===i||void 0==(n=r(i)[o])?t:a(n)}},541:function(e,t,n){var r,a,o,i=n(201),s=n(549),c=n(203),u=n(137),l=n(33),f=l.process,m=l.setImmediate,d=l.clearImmediate,p=l.MessageChannel,h=l.Dispatch,v=0,y={},_=function(){var e=+this;if(y.hasOwnProperty(e)){var t=y[e];delete y[e],t()}},g=function(e){_.call(e.data)};m&&d||(m=function(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return y[++v]=function(){s("function"==typeof e?e:Function(e),t)},r(v),v},d=function(e){delete y[e]},"process"==n(136)(f)?r=function(e){f.nextTick(i(_,e,1))}:h&&h.now?r=function(e){h.now(i(_,e,1))}:p?(a=new p,o=a.port2,a.port1.onmessage=g,r=i(o.postMessage,o,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(r=function(e){l.postMessage(e+"","*")},l.addEventListener("message",g,!1)):r="onreadystatechange"in u("script")?function(e){c.appendChild(u("script")).onreadystatechange=function(){c.removeChild(this),_.call(e)}}:function(e){setTimeout(i(_,e,1),0)}),e.exports={set:m,clear:d}},543:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(536),a=n.n(r),o=n(545),i=n(544);t.default={props:["lat","lng"],data:function(){return{searchKey:"",placeSearch:null,dragStatus:!1,AMapUI:null,AMap:null}},watch:{searchKey:function(){""===this.searchKey&&this.placeSearch.clear()}},methods:{handleSearch:function(){this.searchKey&&this.placeSearch.search(this.searchKey)},initMap:function(){var e=this,t=this.AMapUI=window.AMapUI,n=this.AMap=window.AMap;t.loadUI(["misc/PositionPicker"],function(t){var r={zoom:16,cityName:i.a};e.lat&&e.lng&&(r.center=[e.lng,e.lat]);var a=new n.Map("js-container",r);n.service("AMap.PlaceSearch",function(){e.placeSearch=new n.PlaceSearch({pageSize:5,pageIndex:1,citylimit:!0,city:i.a,map:a,panel:"js-result"})}),n.plugin(["AMap.ToolBar"],function(){a.addControl(new n.ToolBar({position:"RB"}))});var o=new t({mode:"dragMap",map:a});o.on("success",function(t){e.dragStatus?e.$emit("drag",t):e.dragStatus=!0}),o.start()})}},created:function(){var e=this;window.AMap&&window.AMapUI?this.initMap():a.a.all([n.i(o.a)("http://webapi.amap.com/maps?v=1.3&key="+i.b),n.i(o.a)("http://webapi.amap.com/ui/1.0/main.js")]).then(function(){e.initMap()})}}},544:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r="cfd8da5cf010c5f7441834ff5e764f5b",a="西安"},545:function(e,t,n){"use strict";function r(e,t){function n(e){document.body.removeChild(e)}return function(e){var r=document.createElement("script");document.body.appendChild(r);var a=new o.a(function(e,a){r.addEventListener("load",function(a){n(r),t||e(a)},!1),r.addEventListener("error",function(e){n(r),a(e)},!1),t&&(window.____callback____=function(){e(),window.____callback____=null})});return t&&(e+="&callback=____callback____"),r.src=e,a}(e)}t.a=r;var a=n(536),o=n.n(a)},546:function(e,t,n){n(205),n(206),n(207),n(557),n(558),n(559),e.exports=n(64).Promise},547:function(e,t){e.exports=function(e,t,n,r){if(!(e instanceof t)||void 0!==r&&r in e)throw TypeError(n+": incorrect invocation!");return e}},548:function(e,t,n){var r=n(201),a=n(551),o=n(550),i=n(65),s=n(204),c=n(556),u={},l={},t=e.exports=function(e,t,n,f,m){var d,p,h,v,y=m?function(){return e}:c(e),_=r(n,f,t?2:1),g=0;if("function"!=typeof y)throw TypeError(e+" is not iterable!");if(o(y)){for(d=s(e.length);d>g;g++)if((v=t?_(i(p=e[g])[0],p[1]):_(e[g]))===u||v===l)return v}else for(h=y.call(e);!(p=h.next()).done;)if((v=a(h,_,p.value,t))===u||v===l)return v};t.BREAK=u,t.RETURN=l},549:function(e,t){e.exports=function(e,t,n){var r=void 0===n;switch(t.length){case 0:return r?e():e.call(n);case 1:return r?e(t[0]):e.call(n,t[0]);case 2:return r?e(t[0],t[1]):e.call(n,t[0],t[1]);case 3:return r?e(t[0],t[1],t[2]):e.call(n,t[0],t[1],t[2]);case 4:return r?e(t[0],t[1],t[2],t[3]):e.call(n,t[0],t[1],t[2],t[3])}return e.apply(n,t)}},550:function(e,t,n){var r=n(89),a=n(49)("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||o[a]===e)}},551:function(e,t,n){var r=n(65);e.exports=function(e,t,n,a){try{return a?t(r(n)[0],n[1]):t(n)}catch(t){var o=e.return;throw void 0!==o&&r(o.call(e)),t}}},552:function(e,t,n){var r=n(49)("iterator"),a=!1;try{var o=[7][r]();o.return=function(){a=!0},Array.from(o,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!a)return!1;var n=!1;try{var o=[7],i=o[r]();i.next=function(){return{done:n=!0}},o[r]=function(){return i},e(o)}catch(e){}return n}},553:function(e,t,n){var r=n(33),a=n(541).set,o=r.MutationObserver||r.WebKitMutationObserver,i=r.process,s=r.Promise,c="process"==n(136)(i);e.exports=function(){var e,t,n,u=function(){var r,a;for(c&&(r=i.domain)&&r.exit();e;){a=e.fn,e=e.next;try{a()}catch(r){throw e?n():t=void 0,r}}t=void 0,r&&r.enter()};if(c)n=function(){i.nextTick(u)};else if(o){var l=!0,f=document.createTextNode("");new o(u).observe(f,{characterData:!0}),n=function(){f.data=l=!l}}else if(s&&s.resolve){var m=s.resolve();n=function(){m.then(u)}}else n=function(){a.call(r,u)};return function(r){var a={fn:r,next:void 0};t&&(t.next=a),e||(e=a,n()),t=a}}},554:function(e,t,n){var r=n(52);e.exports=function(e,t,n){for(var a in t)n&&e[a]?e[a]=t[a]:r(e,a,t[a]);return e}},555:function(e,t,n){"use strict";var r=n(33),a=n(64),o=n(51),i=n(50),s=n(49)("species");e.exports=function(e){var t="function"==typeof a[e]?a[e]:r[e];i&&t&&!t[s]&&o.f(t,s,{configurable:!0,get:function(){return this}})}},556:function(e,t,n){var r=n(537),a=n(49)("iterator"),o=n(89);e.exports=n(64).getIteratorMethod=function(e){if(void 0!=e)return e[a]||e["@@iterator"]||o[r(e)]}},557:function(e,t,n){"use strict";var r,a,o,i,s=n(90),c=n(33),u=n(201),l=n(537),f=n(88),m=n(66),d=n(200),p=n(547),h=n(548),v=n(540),y=n(541).set,_=n(553)(),g=n(534),b=n(538),x=n(539),w=c.TypeError,M=c.process,k=c.Promise,T="process"==l(M),P=function(){},N=a=g.f,I=!!function(){try{var e=k.resolve(1),t=(e.constructor={})[n(49)("species")]=function(e){e(P,P)};return(T||"function"==typeof PromiseRejectionEvent)&&e.then(P)instanceof t}catch(e){}}(),j=function(e){var t;return!(!m(e)||"function"!=typeof(t=e.then))&&t},S=function(e,t){if(!e._n){e._n=!0;var n=e._c;_(function(){for(var r=e._v,a=1==e._s,o=0;n.length>o;)!function(t){var n,o,i=a?t.ok:t.fail,s=t.resolve,c=t.reject,u=t.domain;try{i?(a||(2==e._h&&A(e),e._h=1),!0===i?n=r:(u&&u.enter(),n=i(r),u&&u.exit()),n===t.promise?c(w("Promise-chain cycle")):(o=j(n))?o.call(n,s,c):s(n)):c(r)}catch(e){c(e)}}(n[o++]);e._c=[],e._n=!1,t&&!e._h&&$(e)})}},$=function(e){y.call(c,function(){var t,n,r,a=e._v,o=C(e);if(o&&(t=b(function(){T?M.emit("unhandledRejection",a,e):(n=c.onunhandledrejection)?n({promise:e,reason:a}):(r=c.console)&&r.error&&r.error("Unhandled promise rejection",a)}),e._h=T||C(e)?2:1),e._a=void 0,o&&t.e)throw t.v})},C=function(e){if(1==e._h)return!1;for(var t,n=e._a||e._c,r=0;n.length>r;)if(t=n[r++],t.fail||!C(t.promise))return!1;return!0},A=function(e){y.call(c,function(){var t;T?M.emit("rejectionHandled",e):(t=c.onrejectionhandled)&&t({promise:e,reason:e._v})})},E=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,t._v=e,t._s=2,t._a||(t._a=t._c.slice()),S(t,!0))},K=function(e){var t,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===e)throw w("Promise can't be resolved itself");(t=j(e))?_(function(){var r={_w:n,_d:!1};try{t.call(e,u(K,r,1),u(E,r,1))}catch(e){E.call(r,e)}}):(n._v=e,n._s=1,S(n,!1))}catch(e){E.call({_w:n,_d:!1},e)}}};I||(k=function(e){p(this,k,"Promise","_h"),d(e),r.call(this);try{e(u(K,this,1),u(E,this,1))}catch(e){E.call(this,e)}},r=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n(554)(k.prototype,{then:function(e,t){var n=N(v(this,k));return n.ok="function"!=typeof e||e,n.fail="function"==typeof t&&t,n.domain=T?M.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&S(this,!1),n.promise},catch:function(e){return this.then(void 0,e)}}),o=function(){var e=new r;this.promise=e,this.resolve=u(K,e,1),this.reject=u(E,e,1)},g.f=N=function(e){return e===k||e===i?new o(e):a(e)}),f(f.G+f.W+f.F*!I,{Promise:k}),n(91)(k,"Promise"),n(555)("Promise"),i=n(64).Promise,f(f.S+f.F*!I,"Promise",{reject:function(e){var t=N(this);return(0,t.reject)(e),t.promise}}),f(f.S+f.F*(s||!I),"Promise",{resolve:function(e){return x(s&&this===i?k:this,e)}}),f(f.S+f.F*!(I&&n(552)(function(e){k.all(e).catch(P)})),"Promise",{all:function(e){var t=this,n=N(t),r=n.resolve,a=n.reject,o=b(function(){var n=[],o=0,i=1;h(e,!1,function(e){var s=o++,c=!1;n.push(void 0),i++,t.resolve(e).then(function(e){c||(c=!0,n[s]=e,--i||r(n))},a)}),--i||r(n)});return o.e&&a(o.v),n.promise},race:function(e){var t=this,n=N(t),r=n.reject,a=b(function(){h(e,!1,function(e){t.resolve(e).then(n.resolve,r)})});return a.e&&r(a.v),n.promise}})},558:function(e,t,n){"use strict";var r=n(88),a=n(64),o=n(33),i=n(540),s=n(539);r(r.P+r.R,"Promise",{finally:function(e){var t=i(this,a.Promise||o.Promise),n="function"==typeof e;return this.then(n?function(n){return s(t,e()).then(function(){return n})}:e,n?function(n){return s(t,e()).then(function(){throw n})}:e)}})},559:function(e,t,n){"use strict";var r=n(88),a=n(534),o=n(538);r(r.S,"Promise",{try:function(e){var t=a.f(this),n=o(e);return(n.e?t.reject:t.resolve)(n.v),t.promise}})},560:function(e,t,n){t=e.exports=n(87)(void 0),t.push([e.i,".m-map{min-width:500px;min-height:300px;position:relative}.m-map .map{width:100%;height:100%}.m-map .search{position:absolute;top:10px;left:10px;width:285px;z-index:1}.m-map .search input{width:180px;border:1px solid #ccc;line-height:20px;padding:5px;outline:none}.m-map .search button{line-height:26px;background:#fff;border:1px solid #ccc;width:50px;text-align:center}.m-map .result{max-height:300px;overflow:auto;margin-top:10px}",""])},564:function(e,t,n){n(566);var r=n(198)(n(543),n(565),null,null);e.exports=r.exports},565:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"m-map"},[e.placeSearch?n("div",{staticClass:"search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchKey,expression:"searchKey"}],attrs:{type:"search",placeholder:"请输入景区名称"},domProps:{value:e.searchKey},on:{input:function(t){t.target.composing||(e.searchKey=t.target.value)}}}),e._v(" "),n("button",{attrs:{type:"button"},on:{click:e.handleSearch}},[e._v("搜索")]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.searchKey,expression:"searchKey"}],staticClass:"result",attrs:{id:"js-result"}})]):e._e(),e._v(" "),n("div",{staticClass:"map",attrs:{id:"js-container"}})])},staticRenderFns:[]}},566:function(e,t,n){var r=n(560);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(197)("580f123c",r,!0)},610:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(17),a=(n.n(r),n(199)),o=n.n(a),i=n(532),s=n(564),c=n.n(s);t.default={components:{mapDrag:c.a},data:function(){return{power:!1,val:"",currentPage:1,form:{id:"",name:"",custType1:"",level1:"",phone:"",linkMan:"",userName:"",state:"0",stateName1:"",creditLimit:"",cashMoney:""},custType:[],level:[],custTypes:"",custTypess:"",levels:"",statess:"",stateId:"",states:[{id:"0",name:"未审核"},{id:"2",name:"审核未通过"},{id:"1",name:"正常"},{id:"3",name:"停用"}]}},created:function(){this.getEdit(),this.getAddress(),this.getPowerId()},methods:{getPowerId:function(){var e=JSON.parse(window.sessionStorage.getItem("powerId"));0==e?this.power=!0:1==e?this.power=!1:2==e?this.power=!0:this.$router.push({path:"/login"})},resetForm:function(e){this.$refs[e].resetFields()},getEdit:function(){o.a.get(i.a.apidomain+"/custom/editUI.action?id="+this.$route.query.id).then(function(e){})},getAddress:function(){var e=this;o.a.get(i.a.apidomain+"/custom/editUI.action?id="+this.$route.query.id).then(function(t){e.custType=t.data.data.customType,e.level=t.data.data.level,e.custTypess=t.data.data.custom.custType,e.statess=t.data.data.custom.state,e.form.custType1=t.data.data.custom.custTypeName,e.form.level1=t.data.data.custom.level,e.form.stateName1=t.data.data.custom.stateName,e.form.id=t.data.data.custom.id,e.form.name=t.data.data.custom.name,e.form.level=t.data.data.custom.level,e.form.phone=t.data.data.custom.phone,e.form.custType=t.data.data.custom.custType,e.form.linkMan=t.data.data.custom.linkMan,e.form.userName=t.data.data.custom.userName,e.form.stateName=t.data.data.custom.stateName,e.form.creditLimit=t.data.data.custom.creditLimit,e.form.cashMoney=t.data.data.custom.cashMoney})},handleChange1:function(e){this.custTypes=e},handleChange2:function(e){this.levels=e},handleChange3:function(e){this.stateId=e},onSubmit:function(e){var t=this;"string"==typeof this.custTypes?this.custTypes=this.custTypess:this.custTypes,1!==this.stateId.length?this.stateId=this.statess:this.stateId,this.$refs[e].validate(function(e){if(!e)return t.$message({message:"参数错误,请检查后重新输入~~",type:"warning"}),!1;o.a.post(i.a.apidomain+"/custom/edit.action?id="+t.form.id+"&name="+t.form.name+"&custType="+t.custTypes+"&level="+t.levels+"&phone="+t.form.phone+"&linkMan="+t.form.linkMan+"&userName="+t.form.userName+"&creditLimit="+t.form.creditLimit+"&cashMoney="+t.form.cashMoney+"&state="+t.stateId).then(function(e){if(t.codesID=e.data.code,0===t.codesID)return void t.$message({message:"修改失败,请重试~",type:"warning"});t.$message({message:"修改成功!~~   ",type:"success"}),t.$router.push({path:"/DistributorManagement"})})})}}}},727:function(e,t,n){t=e.exports=n(87)(void 0),t.push([e.i,".form-box[data-v-20bf46a3]{width:50%}",""])}});