webpackJsonp([23],{1043:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"crumbs"},[o("el-breadcrumb",{attrs:{separator:"/"}},[o("el-breadcrumb-item",[o("i",{staticClass:"el-icon-share"}),t._v(" 分销商管理设置")]),t._v(" "),o("el-breadcrumb-item",[t._v("合同管理")])],1)],1),t._v(" "),o("div",{staticClass:"form-box"},[o("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px",enctype:"multipart/form-data"}},[o("el-form-item",{attrs:{label:"分销商名称",prop:"name"}},[o("el-select",{attrs:{placeholder:"请选择"},on:{change:t.handleChange1},model:{value:t.form.name,callback:function(e){t.form.name=e},expression:"form.name"}},t._l(t.names,function(t){return o("el-option",{key:t.id,attrs:{label:t.name,value:t}})}))],1),t._v(" "),o("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{accept:".doc,.docx,.txt,.pdf",action:"http://192.168.1.109:8080/TicketSales/custom/contractUpload.action",data:t.upLoadDatas,"on-preview":t.handlePreview,"on-remove":t.handleRemove,"on-success":t.handleSuccess,"on-error":t.handlEerror,"file-list":t.fileList,"auto-upload":!1,"show-file-list":!0}},[o("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")]),t._v(" "),o("el-form-item",[o("el-button",{staticStyle:{"margin-left":"10px"},attrs:{icon:"upload",size:"small",type:"success"},on:{click:t.submitUpload}},[t._v("开始上传")])],1),t._v(" "),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传.doc,.docx,.txt,.pdf格式的文件")])],1),t._v(" "),t._l(t.strs,function(e){return o("div",{key:e.id},[t._v(t._s(e))])}),t._v(" "),o("el-form-item",[o("el-button",{attrs:{icon:"upload",type:"info"},on:{click:t.onSubmit}},[t._v("上 传")])],1)],2)],1)])},staticRenderFns:[]}},1076:function(t,e,o){var a=o(721);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o(195)("0c25cb5a",a,!0)},504:function(t,e,o){o(1076);var a=o(196)(o(589),o(1043),"data-v-590796f5",null);t.exports=a.exports},527:function(t,e,o){"use strict";e.a={apidomain:"http://test.elvmedia.cn:8080/Ticket"}},589:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(21),s=(o.n(a),o(197)),l=o.n(s),i=o(527);e.default={data:function(){return{upLoadDatas:{id:"",url:""},form:{name:"",id:"",file:""},names:[],id:"",url:"",urlName:[],fileList:[{name:"food.jpeg",url:"imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food1111.jpeg",url:"imageMogr2/thumbnail/360x360/format/webp/quality/100"}],importFileUrl:"",upLoadData:"",strs:[]}},created:function(){this.getimgs()},methods:{submitUpload:function(){this.$refs.upload.submit()},handleRemove:function(t,e){console.log("点击删除"),console.log(t.response.data)},handlePreview:function(t){console.log("已上传文件的钩子"),console.log(t),this.fileList.name=t.name,this.fileList=t.response},handleSuccess:function(t,e,o){console.log("上传成功钩子"),console.log(o),this.fileList=o,this.$message({showClose:!0,message:"恭喜你，上传成功!",type:"success"})},handlEerror:function(t,e,o){this.$message({showClose:!0,message:"上传失败,请重试~",type:"error"})},handleChange1:function(t){console.log(t.url),this.upLoadDatas.id=t.id,this.upLoadDatas.url=t.url,this.fileList.url=t.url,this.strs=t.url.split(",")},getimgs:function(){var t=this;l.a.get(i.a.apidomain+"/custom/contractUI.action").then(function(e){console.log(e.data.data),t.names=e.data.data})},onSubmit:function(){console.log(1111),console.log(this.fileList)},deletes:function(){}}}},721:function(t,e,o){e=t.exports=o(86)(void 0),e.push([t.i,".form-box[data-v-590796f5]{width:25%}.el-upload--text[data-v-590796f5]{height:10px}",""])}});