webpackJsonp([18],{1034:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-menu"}),e._v(" 订单管理设置")]),e._v(" "),a("el-breadcrumb-item",[e._v("未支付订单")])],1)],1),e._v(" "),a("div",{staticClass:"form-box"},[a("el-form",{ref:"form",attrs:{inline:!0,model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"起始日期",prop:"startTime"}},[a("el-input",{attrs:{type:"date"},model:{value:e.form.startTime,callback:function(t){e.form.startTime=t},expression:"form.startTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"结束日期",prop:"endTime"}},[a("el-input",{attrs:{type:"date"},model:{value:e.form.endTime,callback:function(t){e.form.endTime=t},expression:"form.endTime"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{icon:"search",type:"info"},on:{click:e.onSubmit}},[e._v("查 询")]),e._v(" "),a("el-button",{attrs:{icon:"delete"},on:{click:function(t){e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:"","element-loading-text":"玩儿命加载中···"}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"序号"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"orderId",label:"订单号"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"productName",label:"产品名称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"custName",label:"分销商"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"supplier",label:"供应商"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"view",label:"所属景区"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"ispay",label:"支付方式"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"orderState",label:"订单状态"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"orderNumber",label:"数量"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"unitPrice",label:"单价"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"price",label:"金额"}})],1),e._v(" "),a("div",{staticClass:"grid-content bg-purple"},[a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,"page-sizes":[10,20],layout:"total, prev, pager, next",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)])],1)},staticRenderFns:[]}},1069:function(e,t,a){var n=a(714);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(195)("44148fc0",n,!0)},513:function(e,t,a){a(1069);var n=a(196)(a(598),a(1034),"data-v-40045c94",null);e.exports=n.exports},527:function(e,t,a){"use strict";t.a={apidomain:"http://test.elvmedia.cn:8080/Ticket"}},598:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(21),i=(a.n(n),a(197)),o=a.n(i),r=a(527);t.default={data:function(){return{form:{startTime:"",endTime:""},state:1,total:1,pagingNowNumberList:1,tableData:[],currentPage:1,pageCount:"",loading:!1,dialogFormVisible:!1,dialogFormVisible1:!1,editID:"",delID:"",formLabelWidth:"70px",powerId:1}},created:function(){this.getimgs()},methods:{handleChange1:function(e){this.form.logic=e},onSubmit:function(){var e=this;o.a.get(r.a.apidomain+"/order/stateOerder.action?startTime="+this.form.startTime+"&endTime="+this.form.endTime+"&state=1&power_id="+JSON.parse(window.sessionStorage.getItem("powerId"))+"&staff_id="+JSON.parse(window.sessionStorage.getItem("id"))+"&pageIndex="+this.pagingNowNumberList).then(function(t){if(0==t.data.code)return e.$message({message:"暂未查询到数据,请重新查询~",type:"warning"}),!1;e.$message.success("查询成功~~"),e.tableData=t.data.data.datas,e.total=t.data.data.allCount,e.pageCount=t.data.data.pageCount,e.pagingNowNumberList=t.data.data.currPage,e.loading=!1})},resetForm:function(e){this.$refs[e].resetFields()},handleDownload:function(){var e=this;a.e(28).then(function(){var t=a(537),n=t.export_json_to_excel,i=["分销商编号","分销商名称","分销商类别","分销商等级","电话","联系人","授信额度","预存现金","分销商状态"],o=["id","name","typeName","level","phone","linkMan","creditLimit","cashMoney","state"],r=e.tableData;n(i,e.formatJson(o,r),"未命名列表excel")}.bind(null,a)).catch(a.oe)},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return t[e]})})},getAddress:function(){var e=this;o.a.get(r.a.apidomain+"/custom/addUI.action").then(function(t){e.customType=t.data.data.customType,e.level=t.data.data.level})},getimgs:function(){var e=this;o.a.get(r.a.apidomain+"/order/stateOerder.action?pageIndex="+this.pagingNowNumberList+"&state=1&power_id="+JSON.parse(window.sessionStorage.getItem("powerId"))+"&staff_id="+JSON.parse(window.sessionStorage.getItem("id"))).then(function(t){console.log(t.data),e.tableData=t.data.data.datas,e.total=t.data.data.allCount,e.pageCount=t.data.data.pageCount,e.pagingNowNumberList=t.data.data.currPage,e.loading=!1})},handleSizeChange:function(e){console.log("每页 "+e+" 条"),this.pagingNowNumberList=""+e},handleCurrentChange:function(e){var t=this;o.a.get(r.a.apidomain+"/order/stateOerder.action?pageIndex="+e+"&startTime="+this.form.startTime+"&endTime="+this.form.endTime+"&state=1&power_id="+JSON.parse(window.sessionStorage.getItem("powerId"))+"&staff_id="+JSON.parse(window.sessionStorage.getItem("id"))).then(function(e){t.tableData=e.data.data.datas,t.total=e.data.data.allCount,t.pageCount=e.data.data.pageCount,t.pagingNowNumberList=e.data.data.currPage,t.loading=!1})},newAdd:function(){this.$router.push({path:"./ProductnewAdd"})},delUI:function(e,t){var a=this;this.delID=t.id,this.$confirm("此操作将永久删除该条数据, 是否继续?","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$message({type:"success",message:"删除成功!"}),o.a.post(r.a.apidomain+"/custom/delete.action?id="+a.delID).then(function(e){if(0===e.data.code)return a.$message({message:"删除失败，该产品存在订单无法删除,请联系系统管理员~",type:"warning"}),!1;a.getimgs()})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},del:function(){var e=this;this.$confirm("此操作将永久删除该条数据, 是否继续?","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message({type:"success",message:"删除成功!"})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})}}}},714:function(e,t,a){t=e.exports=a(86)(void 0),t.push([e.i,".form-box[data-v-40045c94]{width:100%}body[data-v-40045c94]{font-family:Segoe UI}li[data-v-40045c94]{list-style:none}a[data-v-40045c94]{text-decoration:none}.pagination[data-v-40045c94]{position:relative}.pagination li[data-v-40045c94]{display:inline-block;margin:0 5px}.pagination li a[data-v-40045c94]{padding:.5rem 1rem;display:inline-block;border:1px solid #ddd;background:#fff;color:#0e90d2}.pagination li a[data-v-40045c94]:hover{background:#eee}.pagination li.active a[data-v-40045c94]{background:#0e90d2;color:#fff}.el-pagination[data-v-40045c94]{margin-left:35%;margin-top:4rem}.el-pagination button[data-v-40045c94],.el-pagination span[data-v-40045c94]{display:inline-block;font-size:13px;min-width:48px;height:45px!important;line-height:48px;vertical-align:top;box-sizing:border-box}",""])}});