webpackJsonp([17],{1070:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-picture-outline"}),e._v(" 特价商品管理设置")]),e._v(" "),a("el-breadcrumb-item",[e._v("新增")])],1)],1),e._v(" "),a("div",{staticClass:"form-box"},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px",enctype:"multipart/form-data",method:"post"}},[a("el-form-item",{attrs:{label:"景区名称",prop:"viewName",rules:[{required:!0,message:"景区名称不能为空"}]}},[a("el-input",{model:{value:e.form.viewName,callback:function(t){e.$set(e.form,"viewName",t)},expression:"form.viewName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"产品名称",prop:"name",rules:[{required:!0,message:"产品名称不能为空"}]}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"原价(元)",prop:"salePrice",rules:[{required:!0,message:"原价不能为空"}]}},[a("el-input",{attrs:{type:"number"},model:{value:e.form.salePrice,callback:function(t){e.$set(e.form,"salePrice",t)},expression:"form.salePrice"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"销售价(元)",prop:"marketPrice",rules:[{required:!0,message:"销售价不能为空"}]}},[a("el-input",{attrs:{type:"number"},model:{value:e.form.marketPrice,callback:function(t){e.$set(e.form,"marketPrice",t)},expression:"form.marketPrice"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"开始/结束日期",prop:"time"}},[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:e.dates},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:"总数量",prop:"num",rules:[{required:!0,message:"总数量不能为空"}]}},[a("el-input",{attrs:{type:"number"},model:{value:e.form.num,callback:function(t){e.$set(e.form,"num",t)},expression:"form.num"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"入园须知",prop:"notice",rules:[{required:!0,message:"入园须知不能为空"}]}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.notice,callback:function(t){e.$set(e.form,"notice",t)},expression:"form.notice"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"费用包含",prop:"costInside",rules:[{required:!0,message:"费用包含不能为空"}]}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.costInside,callback:function(t){e.$set(e.form,"costInside",t)},expression:"form.costInside"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"费用不包含",prop:"costOutside",rules:[{required:!0,message:"费用不包含不能为空"}]}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.costOutside,callback:function(t){e.$set(e.form,"costOutside",t)},expression:"form.costOutside"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"remark",rules:[{required:!0,message:"备注不能为空"}]}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"产品介绍",prop:"introduce",rules:[{required:!0,message:"产品介绍不能为空"}]}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.introduce,callback:function(t){e.$set(e.form,"introduce",t)},expression:"form.introduce"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"入园方式",prop:"method",rules:[{required:!0,message:"入园方式不能为空"}]}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.method,callback:function(t){e.$set(e.form,"method",t)},expression:"form.method"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"上传照片",prop:"file"}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:e.urls,"on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove,data:e.lists,"list-type":"picture-card","file-list":e.fileList,"auto-upload":!0,accept:".jpg,.png,.jpeg,.gif,.bmp"}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传.jpg,.png,.jpeg,.gif,.bmp文件，且不超过500kb")])],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),e._v(" "),a("el-form-item",{attrs:{label:"",prop:"viewId"}},[a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(t){e.onSubmit("form")}}},[e._v("提 交")]),e._v(" "),a("el-button",{on:{click:function(t){e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1)])},staticRenderFns:[]}},1106:function(e,t,a){var r=a(753);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(199)("3946ec38",r,!0)},532:function(e,t,a){a(1106);var r=a(200)(a(648),a(1070),"data-v-362e78d2",null);e.exports=r.exports},538:function(e,t,a){"use strict";t.a={apidomain:"http://service.nvinfo.cn:8080/TicketSales"}},648:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(201),i=a.n(r),o=a(538);t.default={data:function(){return{value3:[],dialogImageUrl:"",dialogVisible:!1,urls:o.a.apidomain+"/hotProduct/addImages.action",fileList:[],currentPage:1,dragData:{lng:null,lat:null,address:null},form:{viewName:"",name:"",salePrice:"",marketPrice:"",num:"",notice:"",costInside:"",costOutside:"",remark:"",introduce:"",method:""},startTime:"",endtTime:"",lists:{random_no:"",logic:0}}},created:function(){this.getAddress(),this.random_no()},methods:{random_no:function(){window.sessionStorage.random_no=Math.random(),this.lists.random_no=window.sessionStorage.getItem("random_no")},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},dates:function(e){this.startTime=new Date(e[0]).getTime(),this.endTime=new Date(e[1]).getTime()},resetForm:function(e){this.$refs[e].resetFields()},getAddress:function(){var e=this;i.a.get(o.a.apidomain+"/view/addUI.action").then(function(t){e.viewType=t.data.data.viewType,e.viewLevel=t.data.data.viewLevel,e.staff=t.data.data.staff,e.province=t.data.data.viewProvince,e.city=t.data.data.viewCity})},handleChange1:function(e){this.form.type=e},handleChange2:function(e){this.form.level=e},handleChange3:function(e){this.form.staffId=e.id,this.form.staffName=e.name},handleChange4:function(e){this.form.province=e},handleChange5:function(e){this.form.city=e},onSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message({message:"参数错误,请检查后重新输入~~",type:"warning"}),!1;i.a.post(o.a.apidomain+"/hotProduct/add.action?name="+t.form.name+"&viewName="+t.form.viewName+"&salePrice="+t.form.salePrice+"&marketPrice="+t.form.marketPrice+"&num="+t.form.num+"&notice="+t.form.notice+"&costInside="+t.form.costInside+"&costOutside="+t.form.costOutside+"&remark="+t.form.remark+"&introduce="+t.form.introduce+"&method="+t.form.method+"&startTime="+t.startTime+"&endTime="+t.endTime+"&random_no="+window.sessionStorage.getItem("random_no")).then(function(e){if(console.log(e.data),0===t.codesID)return t.$message({message:"参数错误,请重试~",type:"warning"}),void t.getimgs();t.$message({message:"添加成功!,请点击最后一页查看新增数据~~",type:"success"}),t.$router.push({path:"./Sparpreis",params:{currentPage:t.currentPage}})})})}}}},753:function(e,t,a){t=e.exports=a(87)(void 0),t.push([e.i,".form-box[data-v-362e78d2]{width:50%}.map[data-v-362e78d2]{width:100%;height:60px;border:1px solid #ccc}.dizhi[data-v-362e78d2]{line-height:100%}.m-part .mapbox[data-v-362e78d2]{border:1px solid #ccc;width:100%;height:300px;margin-bottom:10px;float:left}",""])}});