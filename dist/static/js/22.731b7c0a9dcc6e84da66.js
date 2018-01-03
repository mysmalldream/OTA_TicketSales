webpackJsonp([22],{1088:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-time"}),e._v(" 产品信息管理设置")]),e._v(" "),a("el-breadcrumb-item",[e._v("产品信息管理")])],1)],1),e._v(" "),a("div",{staticClass:"form-box"},[a("el-form",{ref:"form",attrs:{inline:!0,model:e.form,"label-width":"90px"}},[a("el-form-item",{attrs:{label:"产品编号",prop:"id"}},[a("el-input",{attrs:{placeholder:"请同时选择相应的逻辑符号"},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"逻辑符号",prop:"logic"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handleChange1},model:{value:e.form.logic,callback:function(t){e.$set(e.form,"logic",t)},expression:"form.logic"}},[a("el-option",{key:"0",attrs:{label:">",value:"0"}}),e._v(" "),a("el-option",{key:"1",attrs:{label:"<",value:"1"}}),e._v(" "),a("el-option",{key:"2",attrs:{label:"=",value:"2"}}),e._v(" "),a("el-option",{key:"3",attrs:{label:">=",value:"3"}}),e._v(" "),a("el-option",{key:"4",attrs:{label:"<=",value:"4"}}),e._v(" "),a("el-option",{key:"5",attrs:{label:"<>",value:"5"}}),e._v(" "),a("el-option",{key:"6",attrs:{label:"模糊查找",value:"6"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"产品名称",prop:"name"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"所属景区",prop:"viewName"}},[a("el-input",{model:{value:e.form.viewName,callback:function(t){e.$set(e.form,"viewName",t)},expression:"form.viewName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"景区类别",prop:"viewType"}},[a("el-select",{attrs:{placeholder:"请选择景区类别"},model:{value:e.form.viewType,callback:function(t){e.$set(e.form,"viewType",t)},expression:"form.viewType"}},e._l(e.viewType,function(e){return a("el-option",{key:e.id,attrs:{label:e.id,value:e}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"票型",prop:"ticketType"}},[a("el-select",{attrs:{placeholder:"请选择票型"},on:{change:e.change1},model:{value:e.form.ticketType,callback:function(t){e.$set(e.form,"ticketType",t)},expression:"form.ticketType"}},e._l(e.ticketType,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"结算价",prop:"endPrice"}},[a("el-input",{model:{value:e.form.endPrice,callback:function(t){e.$set(e.form,"endPrice",t)},expression:"form.endPrice"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:e.onSubmit}},[e._v("查 询")]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-delete"},on:{click:function(t){e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1),e._v(" "),a("div",{staticClass:"plugins-tips"},[e.power?a("el-button",{attrs:{icon:"el-icon-edit",type:"primary"},on:{click:function(t){e.newAdd()}}},[e._v("新 增")]):e._e(),e._v(" "),a("el-button",{attrs:{icon:"el-icon-check",type:"success"},on:{click:function(t){e.handleDownload()}}},[e._v("导出为Excel")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:"",height:"500","element-loading-text":"玩儿命加载中···"}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"产品编号"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"name",label:"票名"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"viewName",label:"所属景区"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"supplierName",label:"供应商"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"endPrice",label:"结算价"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"marketPrice",label:"门市价"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"salePrice",label:"销售价"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"priorityType",label:"优先级分类"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"isSale",label:"是否销售"}}),e._v(" "),e.power?a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("router-link",{attrs:{to:{path:"/ProductEdit",query:{id:t.row.id}}}},[a("el-button",{attrs:{type:"success",size:"small"}},[e._v("修 改")])],1),e._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){e.del(),e.delUI(t.$index,t.row)}}},[e._v("删 除")])]}}])}):e._e()],1),e._v(" "),a("div",{staticClass:"grid-content bg-purple"},[a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-size":10,"page-sizes":[10,20],layout:"total, prev, pager, next",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)])],1)},staticRenderFns:[]}},1122:function(e,t,a){var i=a(769);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(199)("3eba8622",i,!0)},524:function(e,t,a){a(1122);var i=a(200)(a(640),a(1088),"data-v-6c782774",null);e.exports=i.exports},538:function(e,t,a){"use strict";t.a={apidomain:"http://service.nvinfo.cn:8080/TicketSales"}},640:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(17),n=(a.n(i),a(201)),o=a.n(n),r=a(538);t.default={data:function(){return{power:!1,form:{id:"",logic:"",name:"",viewName:"",viewType:"",ticketType:"",endPrice:""},viewType:[],ticketType:[],total:1,pagingNowNumberList:1,tableData:[],currentPage:1,pageCount:"",loading:!1,dialogFormVisible:!1,dialogFormVisible1:!1,editID:"",delID:"",formLabelWidth:"70px",lists:{remark:"",id:""},powerId:1,department:"运营部",role:"普通管理员",ids:""}},created:function(){this.getAddress(),this.getimgs(),this.getPowerId()},methods:{getPowerId:function(){var e=JSON.parse(window.sessionStorage.getItem("powerId"));0==e?this.power=!0:1==e?this.power=!1:2==e?this.power=!0:this.$router.push({path:"/login"})},change1:function(e){this.form.ticketType=e},handleChange1:function(e){this.form.logic=e},onSubmit:function(){var e=this;o.a.get(r.a.apidomain+"/product/findPageData.action?id="+this.form.id+"&name="+this.form.name+"&viewName="+this.form.viewName+"&viewType="+this.form.viewType+"&ticketType="+this.form.ticketType+"&endPrice="+this.form.endPrice+"&logic="+this.form.logic+"&pageIndex="+this.pagingNowNumberList+"&power_id="+JSON.parse(window.sessionStorage.getItem("powerId"))+"&staff_id="+JSON.parse(window.sessionStorage.getItem("id"))).then(function(t){if(0==t.data.code)return e.$message({message:"暂未查询到数据,请重新查询~",type:"warning"}),e.tableData=t.data.data.datas,!1;e.$message.success("查询成功~~"),e.tableData=t.data.data.datas,e.total=t.data.data.allCount,e.pageCount=t.data.data.pageCount,e.pagingNowNumberList=t.data.data.currPage,e.loading=!1})},resetForm:function(e){this.$refs[e].resetFields()},handleDownload:function(){var e=this;a.e(30).then(function(){var t=a(549),i=t.export_json_to_excel,n=["产品编号","票名","所属景区","供应商","结算价","门市价","优先级分类","是否销售"],o=["id","name","viewName","supplierName","endPrice","marketPrice","priorityType","isSale"],r=e.tableData;i(n,e.formatJson(o,r),"未命名列表excel")}.bind(null,a)).catch(a.oe)},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return t[e]})})},getAddress:function(){var e=this;o.a.get(r.a.apidomain+"/product/addUI.action").then(function(t){e.viewType=t.data.data.viewType,e.ticketType=t.data.data.ticketType})},getimgs:function(){var e=this;o.a.get(r.a.apidomain+"/product/findPageData.action?pageIndex="+this.pagingNowNumberList+"&power_id="+JSON.parse(window.sessionStorage.getItem("powerId"))+"&staff_id="+JSON.parse(window.sessionStorage.getItem("id"))).then(function(t){console.log(t.data.data),e.tableData=t.data.data.datas,e.total=t.data.data.allCount,e.pageCount=t.data.data.pageCount,e.pagingNowNumberList=t.data.data.currPage,e.loading=!1})},handleSizeChange:function(e){console.log("每页 "+e+" 条"),this.pagingNowNumberList=""+e},handleCurrentChange:function(e){var t=this;o.a.get(r.a.apidomain+"/product/findPageData.action?pageIndex="+e+"&id="+this.form.id+"&name="+this.form.name+"&viewName="+this.form.viewName+"&viewType="+this.form.viewType+"&ticketType="+this.form.ticketType+"&endPrice="+this.form.endPrice+"&logic="+this.form.logic+"&power_id="+JSON.parse(window.sessionStorage.getItem("powerId"))+"&staff_id="+JSON.parse(window.sessionStorage.getItem("id"))).then(function(e){t.tableData=e.data.data.datas,t.total=e.data.data.allCount,t.pageCount=e.data.data.pageCount,t.pagingNowNumberList=e.data.data.currPage,t.loading=!1})},newAdd:function(){this.$router.push({path:"./ProductnewAdd"})},delUI:function(e,t){var a=this;this.delID=t.id,this.$confirm("此操作将永久删除该条数据, 是否继续?","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$message({type:"success",message:"删除成功!"}),o.a.post(r.a.apidomain+"/product/delete.action?id="+a.delID).then(function(e){if(0===e.data.code)return a.$message({message:"删除失败，该产品存在订单无法删除,请联系系统管理员~",type:"warning"}),!1;a.getimgs()})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},del:function(){var e=this;this.$confirm("此操作将永久删除该条数据, 是否继续?","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message({type:"success",message:"删除成功!"})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})}}}},769:function(e,t,a){t=e.exports=a(87)(void 0),t.push([e.i,".form-box[data-v-6c782774]{width:100%}body[data-v-6c782774]{font-family:Segoe UI}li[data-v-6c782774]{list-style:none}a[data-v-6c782774]{text-decoration:none}.pagination[data-v-6c782774]{position:relative}.pagination li[data-v-6c782774]{display:inline-block;margin:0 5px}.pagination li a[data-v-6c782774]{padding:.5rem 1rem;display:inline-block;border:1px solid #ddd;background:#fff;color:#0e90d2}.pagination li a[data-v-6c782774]:hover{background:#eee}.pagination li.active a[data-v-6c782774]{background:#0e90d2;color:#fff}.el-pagination[data-v-6c782774]{margin-left:35%;margin-top:4rem}.el-pagination button[data-v-6c782774],.el-pagination span[data-v-6c782774]{display:inline-block;font-size:13px;min-width:48px;height:45px!important;line-height:48px;vertical-align:top;box-sizing:border-box}",""])}});