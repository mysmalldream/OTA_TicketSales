webpackJsonp([7],{1048:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"crumbs"},[s("el-breadcrumb",{attrs:{separator:"/"}},[s("el-breadcrumb-item",[s("i",{staticClass:"el-icon-share"}),t._v(" 分销商管理设置")]),t._v(" "),s("el-breadcrumb-item",[t._v("合同管理")])],1)],1),t._v(" "),s("div",{staticClass:"form-box"},[s("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px",enctype:"multipart/form-data"}},[s("el-form-item",{attrs:{label:"分销商名称",prop:"name"}},[s("el-select",{attrs:{placeholder:"请选择"},on:{change:t.handleChange1},model:{value:t.form.name,callback:function(e){t.form.name=e},expression:"form.name"}},t._l(t.names,function(t){return s("el-option",{key:t.id,attrs:{label:t.name,value:t}})}))],1),t._v(" "),s("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{accept:".doc,.docx,.txt,.pdf",action:t.urls,data:t.upLoadDatas,"on-preview":t.handlePreview,"on-success":t.handleSuccess,"on-error":t.handlEerror,"file-list":t.fileList,"auto-upload":!1,"show-file-list":!0}},[s("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")]),t._v(" "),s("el-form-item",[s("el-button",{staticStyle:{"margin-left":"10px"},attrs:{icon:"upload",size:"small",type:"success"},on:{click:t.submitUpload}},[t._v("开始上传")])],1),t._v(" "),s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传.doc,.docx,.txt,.pdf格式的文件")])],1),t._v(" "),t._l(t.strs,function(e){return s("div",{key:e.id,staticClass:"listsitem"},[t._v(t._s(e)+" \n                "),s("el-button",{attrs:{size:"small"},on:{click:function(s){t.del(e)}}},[t._v("删除")])],1)})],2)],1)])},staticRenderFns:[]}},1082:function(t,e,s){var a=s(724);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(196)("0c25cb5a",a,!0)},506:function(t,e,s){s(1082);var a=s(197)(s(585),s(1048),"data-v-590796f5",null);t.exports=a.exports},529:function(t,e,s){"use strict";e.a={apidomain:"http://test.elvmedia.cn:8080/Ticket"}},585:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(612),i=s.n(a),l=s(17),o=(s.n(l),s(198)),n=s.n(o),r=s(529);e.default={data:function(){var t;return t={urls:r.a.apidomain+"/custom/contractUpload.action",upLoadDatas:{id:"",url:""},form:{name:"",id:"",file:""},names:[],id:"",url:"",urlName:[],fileList:[],importFileUrl:"",upLoadData:"",strs:[]},i()(t,"names",{name:"",url:""}),i()(t,"dels",{id:"",url:""}),t},created:function(){this.getimgs()},methods:{submitUpload:function(){this.$refs.upload.submit(),this.upLoadDatas.url=null},del:function(t){var e=this;console.log("删除按钮显示的"),console.log(this.dels),console.log("fileName==="+t),console.log(this.dels.id),console.log(this.dels.url),n.a.get(r.a.apidomain+"/custom/delURL.action?id="+this.dels.id+"&fileName="+t+"&url="+this.dels.url).then(function(t){e.strs=t.data.data[1],e.dels.url=t.data.data[0]})},handlePreview:function(t){this.fileList.name=t.name,this.fileList=t.response},handleSuccess:function(t,e,s){this.strs=[],s[0].response.data.url.split(",").forEach(function(t,e){this.strs.push(t)},this),this.$message({showClose:!0,message:"恭喜你，上传成功!",type:"success"})},handlEerror:function(t,e,s){this.$message({showClose:!0,message:"上传失败,请重试~",type:"error"})},handleChange1:function(t){this.dels.id=t.id,this.dels.url=t.url,this.upLoadDatas.id=t.id,this.upLoadDatas.url=t.url,this.strs=[],null!=t.urlList&&t.urlList.forEach(function(t,e){this.strs.push(t)},this)},getimgs:function(){var t=this;n.a.get(r.a.apidomain+"/custom/contractUI.action").then(function(e){t.names=e.data.data})}}}},611:function(t,e,s){t.exports={default:s(621),__esModule:!0}},612:function(t,e,s){"use strict";e.__esModule=!0;var a=s(611),i=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default=function(t,e,s){return e in t?(0,i.default)(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}},621:function(t,e,s){s(622);var a=s(64).Object;t.exports=function(t,e,s){return a.defineProperty(t,e,s)}},622:function(t,e,s){var a=s(88);a(a.S+a.F*!s(50),"Object",{defineProperty:s(51).f})},724:function(t,e,s){e=t.exports=s(87)(void 0),e.push([t.i,".form-box[data-v-590796f5]{width:25%}.el-upload--text[data-v-590796f5]{height:10px}.listsitem[data-v-590796f5]{margin-top:10px}",""])}});