webpackJsonp([8],{1012:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-menu"}),e._v(" 用户管理设置")]),e._v(" "),a("el-breadcrumb-item",[e._v("用户管理")])],1)],1),e._v(" "),a("div",{staticClass:"plugins-tips"},[a("el-button",{attrs:{icon:"edit",type:"primary"},on:{click:function(t){e.dialogFormVisible=!0,e.newAdd()}}},[e._v("新 增")]),e._v(" "),a("el-dialog",{attrs:{title:"新 增",visible:e.dialogFormVisible,size:"tiny"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"numberValidateForm",attrs:{model:e.form}},[a("el-form-item",{attrs:{label:"用户名:","label-width":e.formLabelWidth,prop:"loginName",rules:[{required:!0,message:"用户名不能为空"}]}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入用户名"},model:{value:e.form.loginName,callback:function(t){e.form.loginName=t},expression:"form.loginName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名:","label-width":e.formLabelWidth,prop:"name",rules:[{required:!0,message:"姓名不能为空"}]}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(t){e.form.name=t},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"部门:","label-width":e.formLabelWidth,prop:"department"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handleChange1},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}},e._l(e.options1,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"角色:","label-width":e.formLabelWidth,prop:"role"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handleChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("div",[e._v("拥有的权限如下 : ")]),e._v(" "),a("div",[e._v("   ")]),e._v(" "),a("el-button",{attrs:{plain:!0,type:"success"},domProps:{textContent:e._s(e.lists.remark)}})],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("numberValidateForm")}}},[e._v("提 交")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:"","element-loading-text":"玩儿命加载中···"}},[a("el-table-column",{attrs:{type:"index",align:"center",label:"编号",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"loginName",label:"用户名"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"name",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"department",label:"部门"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"role",label:"角色"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(a){e.dialogFormVisible1=!0,e.editUI(t.$index,t.row)}}},[e._v("修 改")]),e._v(" "),a("el-dialog",{attrs:{title:"修 改",visible:e.dialogFormVisible1,size:"tiny"},on:{"update:visible":function(t){e.dialogFormVisible1=t}}},[a("el-form",{ref:"numberValidateForm",attrs:{model:e.form}},[a("el-form-item",{attrs:{label:"用户名:","label-width":e.formLabelWidth,prop:"loginName",rules:[{required:!0,message:"用户名不能为空"}]}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入用户名"},model:{value:e.form.loginName,callback:function(t){e.form.loginName=t},expression:"form.loginName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名:","label-width":e.formLabelWidth,prop:"name",rules:[{required:!0,message:"姓名不能为空"}]}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(t){e.form.name=t},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"部门:","label-width":e.formLabelWidth,prop:"department"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handleChange1},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}},e._l(e.options1,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"角色:","label-width":e.formLabelWidth,prop:"role"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handleChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("div",[e._v("拥有的权限如下 : ")]),e._v(" "),a("div",[e._v("   ")]),e._v(" "),a("el-button",{attrs:{plain:!0,type:"success"},domProps:{textContent:e._s(e.lists.remark)}})],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible1=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitFormEditUI("numberValidateFormEditUI")}}},[e._v("提 交")])],1)],1),e._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){e.del(),e.delUI(t.$index,t.row)}}},[e._v("删 除")])]}}])})],1),e._v(" "),a("div",{staticClass:"grid-content bg-purple"},[a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,"page-sizes":[10,20],layout:"total, prev, pager, next",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)])],1)},staticRenderFns:[]}},1045:function(e,t,a){var n=a(696);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(195)("080907a7",n,!0)},521:function(e,t,a){a(1045);var n=a(196)(a(603),a(1012),"data-v-07b84ccc",null);e.exports=n.exports},524:function(e,t,a){"use strict";t.a={apidomain:"http://192.168.1.109:8080/TicketSales"}},527:function(e,t,a){!function(t,a){e.exports=a()}(0,function(){return function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var a={};return t.m=e,t.c=a,t.p="/dist/",t(0)}([function(e,t,a){"use strict";e.exports=a(9)},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var a=this[t];a[2]?e.push("@media "+a[2]+"{"+a[1]+"}"):e.push(a[1])}return e.join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&n[s[0]]||(a&&!s[2]?s[2]=a:a&&(s[2]="("+s[2]+") and ("+a+")"),e.push(s))}},e}},function(e,t,a){function n(e,t){for(var a=0;a<e.length;a++){var n=e[a],i=u[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(l(n.parts[o],t))}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(l(n.parts[o],t));u[n.id]={id:n.id,refs:1,parts:s}}}}function i(e){for(var t=[],a={},n=0;n<e.length;n++){var i=e[n],o=i[0],s=i[1],r=i[2],l=i[3],c={css:s,media:r,sourceMap:l};a[o]?a[o].parts.push(c):t.push(a[o]={id:o,parts:[c]})}return t}function o(e,t){var a=g(),n=v[v.length-1];if("top"===e.insertAt)n?n.nextSibling?a.insertBefore(t,n.nextSibling):a.appendChild(t):a.insertBefore(t,a.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");a.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function r(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function l(e,t){var a,n,i;if(t.singleton){var o=h++;a=m||(m=r(t)),n=c.bind(null,a,o,!1),i=c.bind(null,a,o,!0)}else a=r(t),n=d.bind(null,a),i=function(){s(a)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}function c(e,t,a,n){var i=a?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function d(e,t){var a=t.css,n=t.media,i=t.sourceMap;if(n&&e.setAttribute("media",n),i&&(a+="\n/*# sourceURL="+i.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var u={},p=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},f=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=p(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,h=0,v=[];e.exports=function(e,t){t=t||{},void 0===t.singleton&&(t.singleton=f()),void 0===t.insertAt&&(t.insertAt="bottom");var a=i(e);return n(a,t),function(e){for(var o=[],s=0;s<a.length;s++){var r=a[s],l=u[r.id];l.refs--,o.push(l)}if(e){n(i(e),t)}for(var s=0;s<o.length;s++){var l=o[s];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete u[l.id]}}}};var b=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}()},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(6),o=n(i),s=a(5),r=n(s),l=a(10),c=n(l);t.default={components:{Pagination:c.default},props:{tableData:{type:Array,required:!0},language:{type:String,default:"es"},columns:{type:Array,required:!0},pagination:{type:Object,default:function(){return{total:0,to:0,from:0,per_page:15}}},actions:{type:Array,default:function(){return[]}}},data:function(){return{limits:[1,5,10,15,20],perpage:15,selected:null,indexSelected:-1,search:""}},computed:{translation:function(){return r.default.translations[this.language]},tableInfo:o.default.tableInfo},methods:{fetchFromObject:o.default.fetchFromObject,changePage:o.default.changePage,selectRow:o.default.selectRow,searching:function(){this.selected=null,this.indexSelected=-1,this.$emit("searching",this.search)}},watch:{perpage:function(){this.selected=null,this.indexSelected=-1,this.$emit("change",{perpage:this.perpage,page:1})},tableData:function(){this.selected=null,this.indexSelected=-1}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["pages","translation"],computed:{items:function(){var e=[],t=this.pages.current_page-2,a=this.pages.current_page+2,n=5;t<=0&&(t=1,a=5),a>=this.pages.last_page&&(t=this.pages.last_page-4,a=this.pages.last_page),this.pages.last_page<5&&(n=this.pages.last_page),t<=0&&(t=1),0!=this.pages.last_page&&1!=this.pages.last_page||(n=1);for(var i=0;i<n;i++)e[i]=i+t;return e}},methods:{firstPage:function(){1!=this.pages.current_page&&this.change(1)},previous:function(){1!=this.pages.current_page&&this.change(--this.pages.current_page)},change:function(e){this.$emit("change",e)},next:function(){this.pages.current_page!=this.pages.last_page&&this.change(++this.pages.current_page)},lastPage:function(e){this.pages.current_page!=this.pages.last_page&&this.change(e)},changePageWithKeyBoard:function(e){"ArrowLeft"===e?this.previous():"ArrowRight"===e&&this.next()}},created:function(){var e=this;window.addEventListener("keyup",function(t){var a=t.key;return e.changePageWithKeyBoard(a)})}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={translations:{en:{table:{label_limits:"Show",label_search:"Search",placeholder_search:"Type to search..",records_not_found:"No records found"},pagination:{label_show:"Showing",label_to:"to",label_of:"of",label_entries:"entries",btn_first:"First",btn_last:"Latest"}},es:{table:{label_limits:"Mostrar",label_search:"Buscar",placeholder_search:"Buscar ..",records_not_found:"No se encontraron registros."},pagination:{label_show:"Mostrando",label_to:"a",label_of:"de",label_entries:"registros",btn_first:"Primero",btn_last:"Último"}},fr:{table:{label_limits:"Afficher",label_search:"Recherche",placeholder_search:"Recherche par mot-clé..",records_not_found:"Aucun enregistrements trouvés"},pagination:{label_show:"Affichage de",label_to:"à",label_of:"de",label_entries:"entrées",btn_first:"Première",btn_last:"Dernière"}},"zh-CN":{table:{label_limits:"显示",label_search:"搜索",placeholder_search:"输入搜索..",records_not_found:"记录未找到"},pagination:{label_show:"正在显示",label_to:"到",label_of:"总共",label_entries:"条目",btn_first:"首页",btn_last:"未页"}},ca:{table:{label_limits:"Mostrar",label_search:"Buscar",placeholder_search:"Buscar ..",records_not_found:"No s'han trobat registres."},pagination:{label_show:"Mostrant",label_to:"a",label_of:"de",label_entries:"registres",btn_first:"Primer",btn_last:"Últim"}}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={fetchFromObject:function(e,t,a){if(void 0===e)return!1;var n=t.indexOf(".");return n>-1?this.fetchFromObject(e[t.substring(0,n)],t.substr(n+1)):void 0!==a?a(e[t]):e[t]},changePage:function(e){this.selected=null,this.indexSelected=-1,this.$emit("change",{perpage:this.perpage,page:e})},selectRow:function(e,t){this.indexSelected==t?(this.indexSelected=-1,this.selected=null):(this.indexSelected=t,this.selected={row:e,index:t})},tableInfo:function(){return this.translation.pagination.label_show+" "+(null==this.pagination.from?0:this.pagination.from)+" "+this.translation.pagination.label_to+" "+(null==this.pagination.to?0:this.pagination.to)+" "+this.translation.pagination.label_of+" "+this.pagination.total+" "+this.translation.pagination.label_entries}}},function(e,t,a){t=e.exports=a(1)(),t.push([e.id,"\n.vue-datasource .Vue__panel-body[data-v-0747af48] {\n  padding: 0;\n}\n.vue-datasource .Vue__panel-body .Vue__table[data-v-0747af48] {\n    margin-bottom: 0;\n}\n.vue-datasource .Vue__panel-footer .Vue__datasource_actions[data-v-0747af48] {\n  margin: 10px 0;\n}\n",""])},function(e,t,a){t=e.exports=a(1)(),t.push([e.id,"\n.Vue__pagination nav .pagination[data-v-741f57a8] {\n  margin: 10px 0 !important;\n}\n",""])},function(e,t,a){var n,i;a(13),n=a(3);var o=a(11);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-0747af48",e.exports=n},function(e,t,a){var n,i;a(14),n=a(4);var o=a(12);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-741f57a8",e.exports=n},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vue-datasource"},[a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[a("div",{staticClass:"form-inline"},[a("div",{staticClass:"form-group pull-left"},[a("label",{staticClass:"control-label pr2"},[e._v(e._s(e.translation.table.label_limits))]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.perpage,expression:"perpage"}],staticClass:"form-control",attrs:{number:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.perpage=t.target.multiple?a:a[0]}}},e._l(e.limits,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])}))]),e._v(" "),a("div",{staticClass:"form-group pull-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.translation.table.placeholder_search},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){t.preventDefault(),e.searching(t)}}},[e._v(e._s(e.translation.table.label_search)+"\n          ")])]),e._v(" "),a("div",{staticClass:"clearfix"})])]),e._v(" "),a("div",{staticClass:"panel-body Vue__panel-body"},[a("table",{staticClass:"table table-striped Vue__table"},[a("thead",[a("tr",e._l(e.columns,function(t){return a("th",[e._v(e._s(t.name))])}))]),e._v(" "),a("tbody",[0==e.pagination.total?a("tr",[a("td",{attrs:{colspan:e.columns.length}},[e._v(e._s(e.translation.table.records_not_found))])]):e._l(e.tableData,function(t,n){return a("tr",{class:{success:n==e.indexSelected},on:{click:function(a){a.preventDefault(),e.selectRow(t,n)}}},e._l(e.columns,function(n){return a("td",{domProps:{innerHTML:e._s(e.fetchFromObject(t,n.key,n.render))}})}))}),e._v(" "),a("tr",[a("td",{staticClass:"text-center",attrs:{colspan:e.columns.length}},[e._v("\n            "+e._s(e.tableInfo)+"\n          ")])])],2)])]),e._v(" "),a("div",{staticClass:"panel-footer Vue__panel-footer"},[a("div",{staticClass:"pull-left"},[a("div",{staticClass:"btn-group Vue__datasource_actions"},e._l(e.actions,function(t){return a("button",{staticClass:"btn btn-default",class:t.class,attrs:{type:"button"},on:{click:function(a){t.event(a,e.selected)}}},[t.icon?a("i",{staticClass:"pr1",class:t.icon}):e._e(),e._v("\n            "+e._s(t.text)+"\n          ")])}))]),e._v(" "),a("div",{staticClass:"pull-right"},[a("pagination",{attrs:{pages:e.pagination,translation:e.translation.pagination},on:{change:e.changePage}})],1),e._v(" "),a("div",{staticClass:"clearfix"})])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Vue__pagination"},[a("nav",{attrs:{"aria-label":"Page navigation"}},[a("ul",{staticClass:"pagination"},[a("li",{class:1==e.pages.current_page?"disabled":""},[a("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.firstPage(t)}}},[e._v(e._s(e.translation.btn_first))])]),e._v(" "),a("li",{class:1==e.pages.current_page?"disabled":""},[a("a",{attrs:{href:"#","aria-label":"Previous"},on:{click:function(t){t.preventDefault(),e.previous(t)}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("«")])])]),e._v(" "),e._l(e.items,function(t){return a("li",{class:e.pages.current_page==t?"active":""},[a("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),e.change(t)}}},[e._v(e._s(t))])])}),e._v(" "),a("li",{class:e.pages.current_page==e.pages.last_page?"disabled":""},[a("a",{attrs:{href:"#","aria-label":"Next"},on:{click:function(t){t.preventDefault(),e.next(t)}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("»")])])]),e._v(" "),a("li",{class:e.pages.current_page==e.pages.last_page?"disabled":""},[a("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.lastPage(e.pages.last_page)}}},[e._v(e._s(e.translation.btn_last))])])],2)])])},staticRenderFns:[]}},function(e,t,a){var n=a(7);"string"==typeof n&&(n=[[e.id,n,""]]);a(2)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,a){var n=a(8);"string"==typeof n&&(n=[[e.id,n,""]]);a(2)(n,{});n.locals&&(e.exports=n.locals)}])})},603:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(197),i=a.n(n),o=a(527),s=a.n(o),r=a(524);t.default={data:function(){return{total:1,pagingNowNumberList:1,tableData:[],currentPage:1,pageCount:"",loading:!1,dialogFormVisible:!1,dialogFormVisible1:!1,editID:"",delID:"",form:{loginName:"",name:"",department:"",role:"",id:"",type:[]},formLabelWidth:"70px",options1:[],value1:"运营部",options:[],value:"普通管理员",lists:{remark:"",id:""},powerId:1,department:"运营部",role:"普通管理员",ids:""}},components:{Datasource:s.a},created:function(){this.getimgs()},methods:{getimgs:function(){var e=this;i.a.get(r.a.apidomain+"/staff/findPageData.action?pageIndex="+this.pagingNowNumberList).then(function(t){e.tableData=t.data.data.datas,e.total=t.data.data.allCount,e.pageCount=t.data.data.pageCount,e.pagingNowNumberList=t.data.data.currPage,e.loading=!1})},handleSizeChange:function(e){this.pagingNowNumberList=""+e},handleCurrentChange:function(e){var t=this;i.a.get(r.a.apidomain+"/staff/findPageData.action?pageIndex="+e).then(function(e){t.tableData=e.data.data.datas,t.total=e.data.data.allCount,t.pageCount=e.data.data.pageCount,t.pagingNowNumberList=e.data.data.currPage,t.loading=!1})},handleChange1:function(e){var t=this;i.a.post(r.a.apidomain+"/staff/addUI.action").then(function(a){t.powerId=e,t.department=a.data.data.dept[e-29].name})},handleChange:function(e){var t=this;i.a.post(r.a.apidomain+"/staff/addUI.action").then(function(a){t.lists.remark=a.data.data.power[e].remark,t.powerId=e,t.options=a.data.data.power,t.role=t.options[e].name})},newAdd:function(){var e=this;i.a.post(r.a.apidomain+"/staff/addUI.action").then(function(t){e.options1=t.data.data.dept,e.options=t.data.data.power,e.lists.remark=t.data.data.power[1].remark})},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message({showClose:!0,message:"新增失败,请重试",type:"warning"}),!1;t.$message({showClose:!0,message:"新增成功",type:"success"}),t.dialogFormVisible=!1,t.getimgs()}),i.a.post(r.a.apidomain+"/staff/add.action?powerId="+this.powerId+"&loginName="+this.form.loginName+"&name="+this.form.name+"&department="+this.department+"&role="+this.role+"&pageIndex="+this.pageCount).then(function(e){if(t.tableData=e.data.data,t.currentPage=t.pageCount,t.codesID=e.data.code,0===t.codesID)return t.$message({message:e.data.msg,type:"warning"}),t.dialogFormVisible=!1,void t.getimgs()}),this.getimgs(),this.form.loginName="",this.form.name=""},editUI:function(e,t){var a=this;this.ids=t.id,i.a.post(r.a.apidomain+"/staff/addUI.action").then(function(e){a.options1=e.data.data.dept,a.options=e.data.data.power,a.lists.remark=e.data.data.power[1].remark}),this.editID=t.id,this.form.loginName=t.loginName,this.form.name=t.name,this.value1=t.department,this.value=t.role},submitFormEditUI:function(e){var t=this;this.$message({showClose:!0,message:"修改成功",type:"success"}),this.dialogFormVisible1=!1,i.a.post(r.a.apidomain+"/staff/edit.action?id="+this.ids+"&powerId="+this.powerId+"&loginName="+this.form.loginName+"&name="+this.form.name+"&department="+this.department+"&role="+this.role+"&pageIndex="+this.pageCount).then(function(e){t.getimgs()})},delUI:function(e,t){var a=this;this.delID=t.id,this.$confirm("此操作将永久删除该条数据, 是否继续?","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$message({type:"success",message:"删除成功!"}),i.a.post(r.a.apidomain+"/staff/delete.action?id="+a.delID).then(function(e){if(0===e.data.code)return a.$message({message:"当前用户有管理的景区,无法删除,请联系系统管理员~",type:"warning"}),!1;a.getimgs()})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},del:function(){var e=this;this.$confirm("此操作将永久删除该条数据, 是否继续?","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message({type:"success",message:"删除成功!"})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})}}}},696:function(e,t,a){t=e.exports=a(86)(void 0),t.push([e.i,"body[data-v-07b84ccc]{font-family:Segoe UI}li[data-v-07b84ccc]{list-style:none}a[data-v-07b84ccc]{text-decoration:none}.pagination[data-v-07b84ccc]{position:relative}.pagination li[data-v-07b84ccc]{display:inline-block;margin:0 5px}.pagination li a[data-v-07b84ccc]{padding:.5rem 1rem;display:inline-block;border:1px solid #ddd;background:#fff;color:#0e90d2}.pagination li a[data-v-07b84ccc]:hover{background:#eee}.pagination li.active a[data-v-07b84ccc]{background:#0e90d2;color:#fff}.el-pagination[data-v-07b84ccc]{margin-left:35%;margin-top:4rem}.el-pagination button[data-v-07b84ccc],.el-pagination span[data-v-07b84ccc]{display:inline-block;font-size:13px;min-width:48px;height:45px!important;line-height:48px;vertical-align:top;box-sizing:border-box}",""])}});