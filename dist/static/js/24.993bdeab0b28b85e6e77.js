webpackJsonp([24],{1053:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-share"}),e._v(" 分销商管理设置")]),e._v(" "),a("el-breadcrumb-item",[e._v("分销商管理")])],1)],1),e._v(" "),a("div",{staticClass:"form-box"},[a("el-form",{ref:"form",attrs:{inline:!0,model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"分销商编号",prop:"id"}},[a("el-input",{attrs:{placeholder:"请同时选择相应的逻辑符号"},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"逻辑符号",prop:"logic"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handleChange1},model:{value:e.form.logic,callback:function(t){e.$set(e.form,"logic",t)},expression:"form.logic"}},[a("el-option",{key:"0",attrs:{label:">",value:"0"}}),e._v(" "),a("el-option",{key:"1",attrs:{label:"<",value:"1"}}),e._v(" "),a("el-option",{key:"2",attrs:{label:"=",value:"2"}}),e._v(" "),a("el-option",{key:"3",attrs:{label:">=",value:"3"}}),e._v(" "),a("el-option",{key:"4",attrs:{label:"<=",value:"4"}}),e._v(" "),a("el-option",{key:"5",attrs:{label:"<>",value:"5"}}),e._v(" "),a("el-option",{key:"6",attrs:{label:"模糊查找",value:"6"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"分销商名称",prop:"name"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系人",prop:"linkName"}},[a("el-input",{model:{value:e.form.linkName,callback:function(t){e.$set(e.form,"linkName",t)},expression:"form.linkName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"分销商类别",prop:"custType"}},[a("el-select",{attrs:{placeholder:"请选择分销商类别"},model:{value:e.form.custType,callback:function(t){e.$set(e.form,"custType",t)},expression:"form.custType"}},e._l(e.customType,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"分销商等级",prop:"level"}},[a("el-select",{attrs:{placeholder:"请选择分销商等级"},on:{change:e.handleChange2},model:{value:e.form.level,callback:function(t){e.$set(e.form,"level",t)},expression:"form.level"}},e._l(e.level,function(e){return a("el-option",{key:e.id,attrs:{label:e.id,value:e}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{icon:"search",type:"info"},on:{click:e.onSubmit}},[e._v("查 询")]),e._v(" "),a("el-button",{attrs:{icon:"delete"},on:{click:function(t){e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1),e._v(" "),a("div",{staticClass:"plugins-tips"},[a("el-button",{attrs:{icon:"check",type:"success"},on:{click:function(t){e.handleDownload()}}},[e._v("导出为Excel")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:"","element-loading-text":"玩儿命加载中···"}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"分销商编号"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"name",label:"分销商名称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"typeName",label:"分销商类别"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"level",label:"分销商等级"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"phone",label:"电话"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"linkMan",label:"联系人"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"creditLimit",label:"授信额度"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"cashMoney",label:"预存现金"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"state",label:"分销商状态"}}),e._v(" "),e.power?a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("router-link",{attrs:{to:{path:"/DistributorEdit",query:{id:t.row.id}}}},[a("el-button",{attrs:{type:"success",size:"small"}},[e._v("修 改")])],1),e._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){e.del(),e.delUI(t.$index,t.row)}}},[e._v("删 除")])]}}])}):e._e()],1),e._v(" "),a("div",{staticClass:"grid-content bg-purple"},[a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,"page-sizes":[10,20],layout:"total, prev, pager, next",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)])],1)},staticRenderFns:[]}},1083:function(e,t,a){var n=a(741);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(197)("4c090530",n,!0)},512:function(e,t,a){a(1083);var n=a(198)(a(611),a(1053),"data-v-6422879c",null);e.exports=n.exports},532:function(e,t,a){"use strict";t.a={apidomain:"http://test.elvmedia.cn:8080/Ticket"}},611:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(17),o=(a.n(n),a(199)),l=a.n(o),i=a(532);t.default={data:function(){return{power:!1,form:{id:"",logic:"",name:"",linkName:"",custType:"",level:""},customType:[],level:[],numbers:"",total:1,pagingNowNumberList:1,tableData:[],currentPage:1,pageCount:"",loading:!1,dialogFormVisible:!1,dialogFormVisible1:!1,editID:"",delID:"",formLabelWidth:"70px",lists:{remark:"",id:""},powerId:1,department:"运营部",role:"普通管理员",ids:""}},created:function(){this.getAddress(),this.getimgs(),this.getPowerId()},methods:{getPowerId:function(){var e=JSON.parse(window.sessionStorage.getItem("powerId"));0==e?this.power=!0:1==e?this.power=!1:2==e?this.power=!1:this.$router.push({path:"/login"})},handleChange1:function(e){this.form.logic=e},handleChange2:function(e){this.numbers=e,console.log(this.numbers)},onSubmit:function(){var e=this;console.log(this.form),console.log(this.form.level),l.a.get(i.a.apidomain+"/custom/findPageData.action?id="+this.form.id+"&name="+this.form.name+"&linkName="+this.form.linkName+"&custType="+this.form.custType+"&level="+this.numbers+"&logic="+this.form.logic+"&pageIndex="+this.pagingNowNumberList).then(function(t){if(console.log(t.data),0==t.data.code)return e.$message({message:"暂未查询到数据,请重新查询~",type:"warning"}),e.tableData=t.data.data.datas,!1;e.$message.success("查询成功~~"),e.tableData=t.data.data.datas,e.total=t.data.data.allCount,e.pageCount=t.data.data.pageCount,e.pagingNowNumberList=t.data.data.currPage,e.loading=!1})},resetForm:function(e){this.$refs[e].resetFields()},handleDownload:function(){var e=this;a.e(27).then(function(){var t=a(542),n=t.export_json_to_excel,o=["分销商编号","分销商名称","分销商类别","分销商等级","电话","联系人","授信额度","预存现金","分销商状态"],l=["id","name","typeName","level","phone","linkMan","creditLimit","cashMoney","state"],i=e.tableData;n(o,e.formatJson(l,i),"未命名列表excel")}.bind(null,a)).catch(a.oe)},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return t[e]})})},getAddress:function(){var e=this;l.a.get(i.a.apidomain+"/custom/addUI.action").then(function(t){e.customType=t.data.data.customType,e.level=t.data.data.level})},getimgs:function(){var e=this;l.a.get(i.a.apidomain+"/custom/findPageData.action?pageIndex="+this.pagingNowNumberList).then(function(t){e.tableData=t.data.data.datas,e.total=t.data.data.allCount,e.pageCount=t.data.data.pageCount,e.pagingNowNumberList=t.data.data.currPage,e.loading=!1})},handleSizeChange:function(e){this.pagingNowNumberList=""+e},handleCurrentChange:function(e){var t=this;l.a.get(i.a.apidomain+"/custom/findPageData.action?pageIndex="+e+"&id="+this.form.id+"&name="+this.form.name+"&linkName="+this.form.linkName+"&custType="+this.form.custType+"&level="+this.form.level+"&logic="+this.form.logic).then(function(e){t.tableData=e.data.data.datas,t.total=e.data.data.allCount,t.pageCount=e.data.data.pageCount,t.pagingNowNumberList=e.data.data.currPage,t.loading=!1})},newAdd:function(){this.$router.push({path:"./ProductnewAdd"})},delUI:function(e,t){var a=this;this.delID=t.id,this.$confirm("此操作将永久删除该条数据, 是否继续?","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$message({type:"success",message:"删除成功!"}),l.a.post(i.a.apidomain+"/custom/delete.action?id="+a.delID).then(function(e){if(0===e.data.code)return a.$message({message:"删除失败，该产品存在订单无法删除,请联系系统管理员~",type:"warning"}),!1;a.getimgs()})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},del:function(){var e=this;this.$confirm("此操作将永久删除该条数据, 是否继续?","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message({type:"success",message:"删除成功!"})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})}}}},741:function(e,t,a){t=e.exports=a(87)(void 0),t.push([e.i,".form-box[data-v-6422879c]{width:100%}body[data-v-6422879c]{font-family:Segoe UI}li[data-v-6422879c]{list-style:none}a[data-v-6422879c]{text-decoration:none}.pagination[data-v-6422879c]{position:relative}.pagination li[data-v-6422879c]{display:inline-block;margin:0 5px}.pagination li a[data-v-6422879c]{padding:.5rem 1rem;display:inline-block;border:1px solid #ddd;background:#fff;color:#0e90d2}.pagination li a[data-v-6422879c]:hover{background:#eee}.pagination li.active a[data-v-6422879c]{background:#0e90d2;color:#fff}.el-pagination[data-v-6422879c]{margin-left:35%;margin-top:4rem}.el-pagination button[data-v-6422879c],.el-pagination span[data-v-6422879c]{display:inline-block;font-size:13px;min-width:48px;height:45px!important;line-height:48px;vertical-align:top;box-sizing:border-box}",""])}});