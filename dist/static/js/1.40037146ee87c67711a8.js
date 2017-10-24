webpackJsonp([1],{1055:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-message"}),e._v(" 景区管理设置")]),e._v(" "),r("el-breadcrumb-item",[e._v("修改")])],1)],1),e._v(" "),r("div",{staticClass:"form-box"},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"90px"}},[r("el-form-item",{attrs:{label:"景区编号",prop:"id",rules:[{required:!0,message:"景区编号不能为空"}]}},[r("el-input",{attrs:{disabled:!0},model:{value:e.form.id,callback:function(t){e.form.id=t},expression:"form.id"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"景区名称",prop:"name",rules:[{required:!0,message:"景区名称不能为空"}]}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.form.name=t},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"景区位置"}},[r("div",{staticClass:"map"},[r("div",[r("b",[e._v("经度：")]),e._v(e._s(e.dragData.lng)+"\n                        "),r("b",[e._v("纬度：")]),e._v(e._s(e.dragData.lat)+"\n                        "),r("div",{staticClass:"dizhi"},[r("b",[e._v("详细地址:")]),e._v(e._s(e.dragData.address)+"\n                        ")]),e._v(" "),r("el-input",{attrs:{type:"hidden",rules:[{required:!0,message:"景区名称不能为空"}]},model:{value:e.form.lng,callback:function(t){e.form.lng=t},expression:"form.lng"}}),e._v(" "),r("el-input",{attrs:{type:"hidden"},model:{value:e.form.lat,callback:function(t){e.form.lat=t},expression:"form.lat"}})],1)]),e._v(" "),r("div",{staticClass:"m-part"},[r("mapDrag",{staticClass:"mapbox",on:{drag:e.dragMap}})],1)]),e._v(" "),r("el-form-item",{attrs:{label:"景区分类",prop:"type",rules:[{required:!0,message:"景区分类不能为空"}]}},[r("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handleChange1},model:{value:e.form.type,callback:function(t){e.form.type=t},expression:"form.type"}},e._l(e.viewType,function(e){return r("el-option",{key:e.id,attrs:{label:e.id,value:e}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"景区等级",prop:"level",rules:[{required:!0,message:"景区等级不能为空"}]}},[r("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handleChange2},model:{value:e.form.level,callback:function(t){e.form.level=t},expression:"form.level"}},e._l(e.viewLevel,function(e){return r("el-option",{key:e.id,attrs:{label:e.id,value:e}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"景区简介",prop:"remark",rules:[{required:!0,message:"景区简介不能为空"}]}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.remark,callback:function(t){e.form.remark=t},expression:"form.remark"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"地址",prop:"address",rules:[{required:!0,message:"地址不能为空"}]}},[r("el-input",{model:{value:e.form.address,callback:function(t){e.form.address=t},expression:"form.address"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"营业时间",prop:"businessTime",rules:[{required:!0,message:"营业时间不能为空"}]}},[r("el-input",{attrs:{placeholder:"请输入起止时间,格式为 (8:00-17:00)"},model:{value:e.form.businessTime,callback:function(t){e.form.businessTime=t},expression:"form.businessTime"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"电话",prop:"phone",rules:[{required:!0,message:"电话不能为空"}]}},[r("el-input",{attrs:{type:"number"},model:{value:e.form.phone,callback:function(t){e.form.phone=t},expression:"form.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"温馨提示",prop:"reminder",rules:[{required:!0,message:"温馨提示不能为空"}]}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.reminder,callback:function(t){e.form.reminder=t},expression:"form.reminder"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"优惠政策",prop:"discount",rules:[{required:!0,message:"优惠政策不能为空"}]}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.discount,callback:function(t){e.form.discount=t},expression:"form.discount"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"公交线路",prop:"busMessage",rules:[{required:!0,message:"公交线路不能为空"}]}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.busMessage,callback:function(t){e.form.busMessage=t},expression:"form.busMessage"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"自驾线路",prop:"selfRoute",rules:[{required:!0,message:"自驾线路不能为空"}]}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.selfRoute,callback:function(t){e.form.selfRoute=t},expression:"form.selfRoute"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"上传照片",prop:"file"}},[r("el-upload",{staticClass:"upload-demo",attrs:{"list-type":"picture-card",action:"http://192.168.1.109:8080/TicketSales/view/add.action","on-preview":e.handlePreview,"on-remove":e.handleRemove,"on-success":e.successUrl,"file-list":e.fileList2,name:"file"}},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v("  "),r("span",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"业务人员",prop:"staff",rules:[{required:!0,message:"业务人员不能为空"}]}},[r("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handleChange3},model:{value:e.form.staff,callback:function(t){e.form.staff=t},expression:"form.staff"}},e._l(e.staff,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"所属省份",prop:"province",rules:[{required:!0,message:"所属省份不能为空"}]}},[r("el-select",{attrs:{placeholder:"请选择所属省份"},on:{change:e.handleChange4},model:{value:e.form.province,callback:function(t){e.form.province=t},expression:"form.province"}},e._l(e.province,function(e){return r("el-option",{key:e.id,attrs:{label:e.id,value:e}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"所属城市",prop:"city",rules:[{required:!0,message:"所属城市不能为空"}]}},[r("el-select",{attrs:{placeholder:"请选择所属城市"},on:{change:e.handleChange5},model:{value:e.form.city,callback:function(t){e.form.city=t},expression:"form.city"}},e._l(e.city,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"景区排序",prop:"sort",rules:[{required:!0,message:"景区排序不能为空"},{type:"number",min:0,message:"景区排序必须为不小于0数字值"}]}},[r("el-input",{attrs:{placeholder:"优先级为0,1,2,3...的数字值,数值越小级别越高"},model:{value:e.form.sort,callback:function(t){e.form.sort=e._n(t)},expression:"form.sort"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"",prop:"viewId"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSubmit("form")}}},[e._v("提 交")]),e._v(" "),r("el-button",{on:{click:function(t){e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1)])},staticRenderFns:[]}},1088:function(e,t,r){var a=r(733);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(195)("3064925d",a,!0)},519:function(e,t,r){r(1088);var a=r(196)(r(604),r(1055),"data-v-fb8578e2",null);e.exports=a.exports},527:function(e,t,r){"use strict";t.a={apidomain:"http://test.elvmedia.cn:8080/Ticket"}},529:function(e,t,r){"use strict";function a(e){var t,r;this.promise=new e(function(e,a){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor");t=e,r=a}),this.resolve=i(t),this.reject=i(r)}var i=r(198);e.exports.f=function(e){return new a(e)}},531:function(e,t,r){e.exports={default:r(541),__esModule:!0}},532:function(e,t,r){var a=r(135),i=r(49)("toStringTag"),o="Arguments"==a(function(){return arguments}()),n=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,r,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=n(t=Object(e),i))?r:o?a(t):"Object"==(s=a(t))&&"function"==typeof t.callee?"Arguments":s}},533:function(e,t){e.exports=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}}},534:function(e,t,r){var a=r(64),i=r(65),o=r(529);e.exports=function(e,t){if(a(e),i(t)&&t.constructor===e)return t;var r=o.f(e);return(0,r.resolve)(t),r.promise}},535:function(e,t,r){var a=r(64),i=r(198),o=r(49)("species");e.exports=function(e,t){var r,n=a(e).constructor;return void 0===n||void 0==(r=a(n)[o])?t:i(r)}},536:function(e,t,r){var a,i,o,n=r(199),s=r(544),l=r(200),c=r(136),d=r(33),u=d.process,f=d.setImmediate,p=d.clearImmediate,m=d.MessageChannel,h=d.Dispatch,v=0,g={},b=function(){var e=+this;if(g.hasOwnProperty(e)){var t=g[e];delete g[e],t()}},x=function(e){b.call(e.data)};f&&p||(f=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return g[++v]=function(){s("function"==typeof e?e:Function(e),t)},a(v),v},p=function(e){delete g[e]},"process"==r(135)(u)?a=function(e){u.nextTick(n(b,e,1))}:h&&h.now?a=function(e){h.now(n(b,e,1))}:m?(i=new m,o=i.port2,i.port1.onmessage=x,a=n(o.postMessage,o,1)):d.addEventListener&&"function"==typeof postMessage&&!d.importScripts?(a=function(e){d.postMessage(e+"","*")},d.addEventListener("message",x,!1)):a="onreadystatechange"in c("script")?function(e){l.appendChild(c("script")).onreadystatechange=function(){l.removeChild(this),b.call(e)}}:function(e){setTimeout(n(b,e,1),0)}),e.exports={set:f,clear:p}},538:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(531),i=r.n(a),o=r(540),n=r(539);t.default={props:["lat","lng"],data:function(){return{searchKey:"",placeSearch:null,dragStatus:!1,AMapUI:null,AMap:null}},watch:{searchKey:function(){""===this.searchKey&&this.placeSearch.clear()}},methods:{handleSearch:function(){this.searchKey&&this.placeSearch.search(this.searchKey)},initMap:function(){var e=this,t=this.AMapUI=window.AMapUI,r=this.AMap=window.AMap;t.loadUI(["misc/PositionPicker"],function(t){var a={zoom:16,cityName:n.a};e.lat&&e.lng&&(a.center=[e.lng,e.lat]);var i=new r.Map("js-container",a);r.service("AMap.PlaceSearch",function(){e.placeSearch=new r.PlaceSearch({pageSize:5,pageIndex:1,citylimit:!0,city:n.a,map:i,panel:"js-result"})}),r.plugin(["AMap.ToolBar"],function(){i.addControl(new r.ToolBar({position:"RB"}))});var o=new t({mode:"dragMap",map:i});o.on("success",function(t){e.dragStatus?e.$emit("drag",t):e.dragStatus=!0}),o.start()})}},created:function(){var e=this;window.AMap&&window.AMapUI?this.initMap():i.a.all([r.i(o.a)("http://webapi.amap.com/maps?v=1.3&key="+n.b),r.i(o.a)("http://webapi.amap.com/ui/1.0/main.js")]).then(function(){e.initMap()})}}},539:function(e,t,r){"use strict";r.d(t,"b",function(){return a}),r.d(t,"a",function(){return i});var a="cfd8da5cf010c5f7441834ff5e764f5b",i="西安"},540:function(e,t,r){"use strict";function a(e,t){function r(e){document.body.removeChild(e)}return function(e){var a=document.createElement("script");document.body.appendChild(a);var i=new o.a(function(e,i){a.addEventListener("load",function(i){r(a),t||e(i)},!1),a.addEventListener("error",function(e){r(a),i(e)},!1),t&&(window.____callback____=function(){e(),window.____callback____=null})});return t&&(e+="&callback=____callback____"),a.src=e,i}(e)}t.a=a;var i=r(531),o=r.n(i)},541:function(e,t,r){r(202),r(203),r(204),r(552),r(553),r(554),e.exports=r(63).Promise},542:function(e,t){e.exports=function(e,t,r,a){if(!(e instanceof t)||void 0!==a&&a in e)throw TypeError(r+": incorrect invocation!");return e}},543:function(e,t,r){var a=r(199),i=r(546),o=r(545),n=r(64),s=r(201),l=r(551),c={},d={},t=e.exports=function(e,t,r,u,f){var p,m,h,v,g=f?function(){return e}:l(e),b=a(r,u,t?2:1),x=0;if("function"!=typeof g)throw TypeError(e+" is not iterable!");if(o(g)){for(p=s(e.length);p>x;x++)if((v=t?b(n(m=e[x])[0],m[1]):b(e[x]))===c||v===d)return v}else for(h=g.call(e);!(m=h.next()).done;)if((v=i(h,b,m.value,t))===c||v===d)return v};t.BREAK=c,t.RETURN=d},544:function(e,t){e.exports=function(e,t,r){var a=void 0===r;switch(t.length){case 0:return a?e():e.call(r);case 1:return a?e(t[0]):e.call(r,t[0]);case 2:return a?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return a?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return a?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},545:function(e,t,r){var a=r(88),i=r(49)("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(a.Array===e||o[i]===e)}},546:function(e,t,r){var a=r(64);e.exports=function(e,t,r,i){try{return i?t(a(r)[0],r[1]):t(r)}catch(t){var o=e.return;throw void 0!==o&&a(o.call(e)),t}}},547:function(e,t,r){var a=r(49)("iterator"),i=!1;try{var o=[7][a]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!i)return!1;var r=!1;try{var o=[7],n=o[a]();n.next=function(){return{done:r=!0}},o[a]=function(){return n},e(o)}catch(e){}return r}},548:function(e,t,r){var a=r(33),i=r(536).set,o=a.MutationObserver||a.WebKitMutationObserver,n=a.process,s=a.Promise,l="process"==r(135)(n);e.exports=function(){var e,t,r,c=function(){var a,i;for(l&&(a=n.domain)&&a.exit();e;){i=e.fn,e=e.next;try{i()}catch(a){throw e?r():t=void 0,a}}t=void 0,a&&a.enter()};if(l)r=function(){n.nextTick(c)};else if(o){var d=!0,u=document.createTextNode("");new o(c).observe(u,{characterData:!0}),r=function(){u.data=d=!d}}else if(s&&s.resolve){var f=s.resolve();r=function(){f.then(c)}}else r=function(){i.call(a,c)};return function(a){var i={fn:a,next:void 0};t&&(t.next=i),e||(e=i,r()),t=i}}},549:function(e,t,r){var a=r(51);e.exports=function(e,t,r){for(var i in t)r&&e[i]?e[i]=t[i]:a(e,i,t[i]);return e}},550:function(e,t,r){"use strict";var a=r(33),i=r(63),o=r(52),n=r(50),s=r(49)("species");e.exports=function(e){var t="function"==typeof i[e]?i[e]:a[e];n&&t&&!t[s]&&o.f(t,s,{configurable:!0,get:function(){return this}})}},551:function(e,t,r){var a=r(532),i=r(49)("iterator"),o=r(88);e.exports=r(63).getIteratorMethod=function(e){if(void 0!=e)return e[i]||e["@@iterator"]||o[a(e)]}},552:function(e,t,r){"use strict";var a,i,o,n,s=r(89),l=r(33),c=r(199),d=r(532),u=r(87),f=r(65),p=r(198),m=r(542),h=r(543),v=r(535),g=r(536).set,b=r(548)(),x=r(529),_=r(533),w=r(534),y=l.TypeError,k=l.process,C=l.Promise,P="process"==d(k),M=function(){},T=i=x.f,I=!!function(){try{var e=C.resolve(1),t=(e.constructor={})[r(49)("species")]=function(e){e(M,M)};return(P||"function"==typeof PromiseRejectionEvent)&&e.then(M)instanceof t}catch(e){}}(),S=function(e){var t;return!(!f(e)||"function"!=typeof(t=e.then))&&t},L=function(e,t){if(!e._n){e._n=!0;var r=e._c;b(function(){for(var a=e._v,i=1==e._s,o=0;r.length>o;)!function(t){var r,o,n=i?t.ok:t.fail,s=t.resolve,l=t.reject,c=t.domain;try{n?(i||(2==e._h&&D(e),e._h=1),!0===n?r=a:(c&&c.enter(),r=n(a),c&&c.exit()),r===t.promise?l(y("Promise-chain cycle")):(o=S(r))?o.call(r,s,l):s(r)):l(a)}catch(e){l(e)}}(r[o++]);e._c=[],e._n=!1,t&&!e._h&&j(e)})}},j=function(e){g.call(l,function(){var t,r,a,i=e._v,o=z(e);if(o&&(t=_(function(){P?k.emit("unhandledRejection",i,e):(r=l.onunhandledrejection)?r({promise:e,reason:i}):(a=l.console)&&a.error&&a.error("Unhandled promise rejection",i)}),e._h=P||z(e)?2:1),e._a=void 0,o&&t.e)throw t.v})},z=function(e){if(1==e._h)return!1;for(var t,r=e._a||e._c,a=0;r.length>a;)if(t=r[a++],t.fail||!z(t.promise))return!1;return!0},D=function(e){g.call(l,function(){var t;P?k.emit("rejectionHandled",e):(t=l.onrejectionhandled)&&t({promise:e,reason:e._v})})},R=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,t._v=e,t._s=2,t._a||(t._a=t._c.slice()),L(t,!0))},E=function(e){var t,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===e)throw y("Promise can't be resolved itself");(t=S(e))?b(function(){var a={_w:r,_d:!1};try{t.call(e,c(E,a,1),c(R,a,1))}catch(e){R.call(a,e)}}):(r._v=e,r._s=1,L(r,!1))}catch(e){R.call({_w:r,_d:!1},e)}}};I||(C=function(e){m(this,C,"Promise","_h"),p(e),a.call(this);try{e(c(E,this,1),c(R,this,1))}catch(e){R.call(this,e)}},a=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},a.prototype=r(549)(C.prototype,{then:function(e,t){var r=T(v(this,C));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=P?k.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&L(this,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),o=function(){var e=new a;this.promise=e,this.resolve=c(E,e,1),this.reject=c(R,e,1)},x.f=T=function(e){return e===C||e===n?new o(e):i(e)}),u(u.G+u.W+u.F*!I,{Promise:C}),r(90)(C,"Promise"),r(550)("Promise"),n=r(63).Promise,u(u.S+u.F*!I,"Promise",{reject:function(e){var t=T(this);return(0,t.reject)(e),t.promise}}),u(u.S+u.F*(s||!I),"Promise",{resolve:function(e){return w(s&&this===n?C:this,e)}}),u(u.S+u.F*!(I&&r(547)(function(e){C.all(e).catch(M)})),"Promise",{all:function(e){var t=this,r=T(t),a=r.resolve,i=r.reject,o=_(function(){var r=[],o=0,n=1;h(e,!1,function(e){var s=o++,l=!1;r.push(void 0),n++,t.resolve(e).then(function(e){l||(l=!0,r[s]=e,--n||a(r))},i)}),--n||a(r)});return o.e&&i(o.v),r.promise},race:function(e){var t=this,r=T(t),a=r.reject,i=_(function(){h(e,!1,function(e){t.resolve(e).then(r.resolve,a)})});return i.e&&a(i.v),r.promise}})},553:function(e,t,r){"use strict";var a=r(87),i=r(63),o=r(33),n=r(535),s=r(534);a(a.P+a.R,"Promise",{finally:function(e){var t=n(this,i.Promise||o.Promise),r="function"==typeof e;return this.then(r?function(r){return s(t,e()).then(function(){return r})}:e,r?function(r){return s(t,e()).then(function(){throw r})}:e)}})},554:function(e,t,r){"use strict";var a=r(87),i=r(529),o=r(533);a(a.S,"Promise",{try:function(e){var t=i.f(this),r=o(e);return(r.e?t.reject:t.resolve)(r.v),t.promise}})},555:function(e,t,r){t=e.exports=r(86)(void 0),t.push([e.i,".m-map{min-width:500px;min-height:300px;position:relative}.m-map .map{width:100%;height:100%}.m-map .search{position:absolute;top:10px;left:10px;width:285px;z-index:1}.m-map .search input{width:180px;border:1px solid #ccc;line-height:20px;padding:5px;outline:none}.m-map .search button{line-height:26px;background:#fff;border:1px solid #ccc;width:50px;text-align:center}.m-map .result{max-height:300px;overflow:auto;margin-top:10px}",""])},556:function(e,t,r){r(558);var a=r(196)(r(538),r(557),null,null);e.exports=a.exports},557:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"m-map"},[e.placeSearch?r("div",{staticClass:"search"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchKey,expression:"searchKey"}],attrs:{type:"search",placeholder:"请输入景区名称"},domProps:{value:e.searchKey},on:{input:function(t){t.target.composing||(e.searchKey=t.target.value)}}}),e._v(" "),r("button",{attrs:{type:"button"},on:{click:e.handleSearch}},[e._v("搜索")]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.searchKey,expression:"searchKey"}],staticClass:"result",attrs:{id:"js-result"}})]):e._e(),e._v(" "),r("div",{staticClass:"map",attrs:{id:"js-container"}})])},staticRenderFns:[]}},558:function(e,t,r){var a=r(555);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(195)("580f123c",a,!0)},559:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(560);t.default={props:{placeholder:{default:"+",type:String},onChange:{type:Function},maxSize:{default:3072,type:Number}},data:function(){return{inputId:"",largerDataList:[],imageDataList:[],fileNameList:[],errorText:"",countText:"",isShowLarger:!1,previewIndex:0}},computed:{sizeFormatted:function(){return this.maxSize<1024?this.maxSize+"K":(this.maxSize/1024).toFixed(this.maxSize%1024>0?2:0)+"M"}},methods:{handleFileChange:function(){var e=this.$refs.input,t=e.files;this.handleFile(t)},handleDrop:function(e){var t=e.dataTransfer.files;this.handleFile(t)},preventDefaultEvent:function(e){document.addEventListener(e,function(e){e.preventDefault()},!1)},deleteImg:function(e){this.imageDataList.splice(e,1),this.largerDataList.splice(e,1),this.countText=this.imageDataList.length+"张图片"},handleFile:function(e){for(var t=0;t<e.length;t++){var r=e[t];if(Math.floor(r.size/1024)>this.maxSize)return this.errorText="文件大小不能超过"+this.sizeFormatted,!1;this.fileNameList.push(r.name)}e&&e.length>0&&(this.countText=e.length+"张图片"),this.$emit("onChange",e),this.preview(e)},preview:function(e){var t=this;if(e&&window.FileReader)for(var i=0;i<e.length;i++){var o=e[i],n=new FileReader;n.readAsDataURL(o),n.onload=function(e){t.largerDataList.push(e.target.result),r.i(a.a)(e.target.result,110,110,function(e){t.imageDataList.push(e)})}}},showLargerPreview:function(e){this.isShowLarger=!0,this.previewIndex=e},closePreview:function(){this.isShowLarger=!1}},mounted:function(){var e=this;this.inputId=this.id||(new Date).getTime(),["drop","dragenter","dragover","dragleave"].forEach(function(t){e.preventDefaultEvent(t)});var t=document.body.clientWidth;this.$refs.largerPreview.style.left=(t-800)/2+"px"}}},560:function(e,t,r){"use strict";function a(e,t,r,a){var i=new Image;i.onload=function(e){console.info("resizeImage width:"+i.width),console.info("resizeImage height:"+i.height);var o=document.createElement("canvas");if(o.width=t,o.height=r,i.width===i.height)o.getContext("2d").drawImage(i,0,0,t,r);else{var n=Math.min(i.width,i.height);i.width>i.height?o.getContext("2d").drawImage(i,(i.width-n)/2,0,n,n,0,0,t,r):o.getContext("2d").drawImage(i,0,(i.height-n)/2,n,n,0,0,t,r)}a(o.toDataURL())},i.src=e}t.a=a},563:function(e,t,r){t=e.exports=r(86)(void 0),t.push([e.i,"svg[data-v-070ca9b7]{fill:#fff}.img-uploader[data-v-070ca9b7]{position:relative;width:100%;min-height:300px;border-radius:5px;background:#ebebeb;box-sizing:border-box;padding:20px}.img-uploader-placeholder[data-v-070ca9b7]{position:relative;margin:0;font-size:20px;width:110px;height:110px;box-sizing:border-box;padding:45px 0;color:#aaa;text-align:center;border-radius:4px;border:1px solid #c3c3c3;background-color:#fff}.img-uploader-preview-list[data-v-070ca9b7]{display:block;width:100%;height:100%;white-space:nowrap;overflow:hidden;text-align:center}.img-uploader-preview[data-v-070ca9b7]{position:relative;float:left;display:inline-block;z-index:2;height:110px;width:110px;margin-right:10px;margin-bottom:10px;border-radius:10px;overflow:hidden;background:#333}.img-uploader-preview .preview-img[data-v-070ca9b7]{width:100%;height:100%;overflow:hidden}.img-uploader-label[data-v-070ca9b7]{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0;cursor:pointer;margin-bottom:0}.img-uploader-mask[data-v-070ca9b7]{display:block;position:absolute;bottom:0;width:100%;border-radius:1px;text-align:center;background:rgba(0,0,0,.6)}.img-uploader-delete-btn[data-v-070ca9b7]{display:block;position:absolute;top:0;right:0;margin:5px;width:20px;height:20px;color:red;border:2px solid red;font-size:16px;line-height:20px;border-radius:100%;cursor:pointer}.img-uploader-file-name[data-v-070ca9b7]{color:#fff;font-size:5px;padding-top:10px;margin:0;display:inline-block;max-width:90%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;cursor:pointer}.img-uploader-error[data-v-070ca9b7]{color:#e55;font-size:12px;position:absolute;bottom:-28px;width:100%}.img-uploader-count[data-v-070ca9b7]{color:#573e51;font-size:12px;position:absolute;bottom:-28px;width:100%}.largerPreview[data-v-070ca9b7]{position:fixed;top:100px;left:0;border-radius:10px;width:800px;height:auto;overflow:hidden;z-index:10}.largerPreview .preview-close-btn[data-v-070ca9b7]{position:absolute;top:5px;right:5px;width:20px;height:20px;color:red;border:2px solid red;font-size:16px;line-height:20px;border-radius:100%;cursor:pointer;text-align:center}.largerPreview img[data-v-070ca9b7]{width:100%;height:auto}",""])},567:function(e,t,r){r(569);var a=r(196)(r(559),r(568),"data-v-070ca9b7",null);e.exports=a.exports},568:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"uploader",staticClass:"img-uploader",on:{drop:e.handleDrop}},[r("div",{staticClass:"img-uploader-preview-list"},[e._l(e.imageDataList,function(t,a){return r("div",{staticClass:"img-uploader-preview"},[r("div",{staticClass:"preview-img",on:{click:function(t){e.showLargerPreview(a)}}},[r("img",{attrs:{src:t}})]),e._v(" "),r("div",{staticClass:"img-uploader-mask"},[r("p",{staticClass:"img-uploader-file-name"},[e._v(e._s(e.fileNameList[a]))])]),e._v(" "),r("div",{staticClass:"img-uploader-delete-btn",on:{click:function(t){e.deleteImg(a)}}},[e._v("x")])])}),e._v(" "),r("div",{staticClass:"img-uploader-preview"},[r("p",{staticClass:"img-uploader-placeholder"},[e._v("\n        "+e._s(e.placeholder)+"\n        "),r("label",{staticClass:"img-uploader-label",attrs:{for:e.inputId}}),e._v(" "),r("input",{ref:"input",staticStyle:{display:"none"},attrs:{id:e.inputId,type:"file",accept:"image/gif,image/jpeg,image/jpg,image/png",multiple:"multiple"},on:{change:e.handleFileChange}})])])],2),e._v(" "),e.errorText.length?r("div",{staticClass:"img-uploader-error"},[e._v(e._s(e.errorText))]):e._e(),e._v(" "),e.countText.length?r("div",{staticClass:"img-uploader-count"},[e._v(e._s(e.countText))]):e._e(),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowLarger,expression:"isShowLarger"}],ref:"largerPreview",staticClass:"largerPreview"},[r("img",{attrs:{src:e.largerDataList[e.previewIndex],alt:""}}),e._v(" "),r("div",{staticClass:"preview-close-btn",on:{click:e.closePreview}},[e._v("x")])])])},staticRenderFns:[]}},569:function(e,t,r){var a=r(563);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(195)("5e4c51b1",a,!0)},604:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(21),i=(r.n(a),r(197)),o=r.n(i),n=r(527),s=r(556),l=r.n(s),c=r(567),d=r.n(c);t.default={components:{mapDrag:l.a,ImageUploader:d.a},data:function(){return{val:"",fileList2:[{name:"food.jpeg",url:"http://imgsrc.baidu.com/imgad/pic/item/3801213fb80e7beca9004ec5252eb9389b506b38.jpg"}],currentPage:1,dragData:{lng:null,lat:null,address:null},form:{lng:"",lat:"",id:"",name:"",type:"",level:"",remark:"",address:"",businessTime:"",phone:"",reminder:"",discount:"",busMessage:"",selfRoute:"",file:"",staff:"",staffId:"",staffName:"",province:"",city:"",sort:""},id:[],staffId:"",staffName:"",viewType:[],viewLevel:[],staff:[],province:[],city:[],maxSize:307200,files:[]}},created:function(){this.getEdit(),this.getAddress()},methods:{dragMap:function(e){this.dragData={lng:e.position.lng,lat:e.position.lat,address:e.address}},imgChange:function(e){e&&(console.log(e),console.log(e[0].name),this.form.file=e)},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e),console.log(e.name),console.log(e.url)},successUrl:function(e,t,r){console.log(t),console.log(t.name),console.log(t.url),this.files=t},resetForm:function(e){this.$refs[e].resetFields()},getEdit:function(){var e=this;o.a.get(n.a.apidomain+"/view/addUI.action").then(function(t){e.viewType=t.data.data.viewType,e.viewLevel=t.data.data.viewLevel,e.staff=t.data.data.staff,e.province=t.data.data.viewProvince,e.city=t.data.data.viewCity})},getAddress:function(){var e=this;o.a.get(n.a.apidomain+"/view/editUI.action?id="+this.$route.query.id).then(function(t){e.form.id=t.data.data.id,e.form.name=t.data.data.name,e.form.remark=t.data.data.remark,e.form.address=t.data.data.address,e.form.businessTime=t.data.data.businessTime,e.form.phone=t.data.data.phone,e.form.reminder=t.data.data.reminder,e.form.discount=t.data.data.discount,e.form.busMessage=t.data.data.busMessage,e.form.selfRoute=t.data.data.selfRoute,e.form.lng=t.data.data.lng,e.form.lat=t.data.data.lat,e.form.sort=t.data.data.sort,e.staffId=t.data.data.staffId,e.staffName=t.data.data.staffName,e.form.type=t.data.data.type,e.form.level=t.data.data.level,e.form.staff=t.data.data.staffName,e.form.province=t.data.data.province,e.form.city=t.data.data.city})},handleChange1:function(e){this.form.type=e},handleChange2:function(e){this.form.level=e},handleChange3:function(e){this.form.staffId=e.id,this.form.staffName=e.name},handleChange4:function(e){this.form.province=e},handleChange5:function(e){this.form.city=e},onSubmit:function(e){var t=this;console.log(1111),console.log(this.files),console.log(this.files.name),console.log(this.files.url),this.$refs[e].validate(function(e){if(!e)return t.$message({message:"参数错误,请检查后重新输入~~",type:"warning"}),!1;o.a.post(n.a.apidomain+"/view/edit.action?id="+t.form.id+"&name="+t.form.name+"&type="+t.form.type+"&level="+t.form.level+"&remark="+t.form.remark+"&address="+t.form.address+"&businessTime="+t.form.businessTime+"&phone="+t.form.phone+"&reminder="+t.form.reminder+"&discount="+t.form.discount+"&busMessage="+t.form.busMessage+"&selfRoute="+t.form.selfRoute+"&file="+t.form.file+"&staffId="+t.form.staffId+"&staffName="+t.form.staffName+"&province="+t.form.province+"&city="+t.form.city+"&sort="+t.form.sort+"&lng="+t.form.lng+"&lat="+t.form.lat).then(function(e){if(console.log(e.data),t.codesID=e.data.code,0===t.codesID)return void t.$message({message:"修改失败,请重试~",type:"warning"});t.$message({message:"修改成功!~~",type:"success"}),t.$router.push({path:"/SceneryManage"})})})}}}},733:function(e,t,r){t=e.exports=r(86)(void 0),t.push([e.i,".form-box[data-v-fb8578e2]{width:50%}.map[data-v-fb8578e2]{width:100%;height:60px;border:1px solid #ccc}.dizhi[data-v-fb8578e2]{line-height:100%}.m-part .mapbox[data-v-fb8578e2]{border:1px solid #ccc;width:100%;height:300px;margin-bottom:10px;float:left}",""])}});