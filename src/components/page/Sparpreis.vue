<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-picture-outline"></i> 特价商品管理设置</el-breadcrumb-item>
                <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- <div class="form-box">
            <el-form ref="form" :inline="true" :model="form" label-width="90px">
                <el-form-item label="产品编号" prop="id">
                    <el-input v-model="form.id" placeholder="请同时选择相应的逻辑符号"></el-input>
                </el-form-item>
                <el-form-item label="逻辑符号" prop="logic">
                    <el-select v-model="form.logic" placeholder="请选择" @change="handleChange1">
                        <el-option key="0" label=">" value="0"></el-option>
                        <el-option key="1" label="<" value="1"></el-option>
                        <el-option key="2" label="=" value="2"></el-option>
                        <el-option key="3" label=">=" value="3"></el-option>
                        <el-option key="4" label="<=" value="4"></el-option>
                        <el-option key="5" label="<>" value="5"></el-option>
                        <el-option key="6" label="模糊查找" value="6"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="产品名称" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="所属景区" prop="viewName">
                    <el-input v-model="form.viewName"></el-input>
                </el-form-item>
                <el-form-item label="景区类别" prop="viewType">
                    <el-select v-model="form.viewType" placeholder="请选择景区类别">
                        <el-option v-for="item in viewType" :key="item.id" :label="item.id" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="票型" prop="ticketType">
                    <el-select v-model="form.ticketType" placeholder="请选择票型" @change="change1">
                        <el-option v-for="item in ticketType" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="结算价" prop="endPrice">
                    <el-input v-model="form.endPrice"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button icon="el-icon-search" type="primary" @click="onSubmit">查 询</el-button>
                    <el-button icon="el-icon-delete" @click="resetForm('form')">重 置</el-button>
                </el-form-item>
            </el-form>
        </div>-->
        <div class="plugins-tips">
            <el-button icon="el-icon-edit" type="primary" @click="newAdd()" v-if="power">新 增</el-button>
            <el-button icon="el-icon-check" type="success" @click="handleDownload()">导出为Excel</el-button>
        </div>
        <el-table :data="tableData" border stripe style="width: 100%" height="500" v-loading="loading" element-loading-text="玩儿命加载中···">
            <el-table-column align=center prop="id" label="产品编号">
            </el-table-column>
            <el-table-column align=center prop="name" label="产品名称">
            </el-table-column>
            <el-table-column align=center prop="viewName" label="景区名称">
            </el-table-column>
            <el-table-column align=center prop="marketPrice" label="原价(元)">
            </el-table-column>
            <el-table-column align=center prop="salePrice" label="销售价(元)">
            </el-table-column>
            <el-table-column align=center prop="startTime" label="开始时间">
            </el-table-column>
            <el-table-column align=center prop="endTime" label="结束时间">
            </el-table-column>
            <el-table-column align=center prop="saledNum" label="已购数量">
            </el-table-column>
            <el-table-column align=center prop="num" label="总数量">
            </el-table-column>
            <el-table-column align=center label="操作" v-if="power">
                <template slot-scope="scope">
                    <router-link :to="{path:'/SparpreisEdit',query: { id: scope.row.id }}">
                        <el-button type="success" size="small">修 改</el-button>
                    </router-link>
                    <el-button type="danger" size="small" @click="del(),delUI(scope.$index, scope.row)">删 除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="grid-content bg-purple">
            <div class="block">
                <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage"
                    :page-size="10" :page-sizes="[10, 20]" layout="total, prev, pager, next" :total="total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";

    import axios from 'axios';
    import common from '../../kits/commonapi.js'; //公共域名文件

    export default {
        data: function () {
            return {
                power: false, //是否显示增删改的按钮权限
                form: {
                    id: '',
                    logic: '',
                    name: '',
                    viewName: '',
                    viewType: '',
                    ticketType: '',
                    endPrice: '',
                },
                viewType: [],
                ticketType: [],
                total: 1,
                pagingNowNumberList: 1, //当前显示页码数据
                tableData: [], //当前表格数据
                currentPage: 1, //当前页码数
                pageCount: "", //总的页码数
                loading: false,
                dialogFormVisible: false, //新增
                dialogFormVisible1: false, //修改
                editID: "",
                delID: "",
                formLabelWidth: '70px',
                lists: {
                    remark: "",
                    id: '',
                },
                powerId: 1,
                department: '运营部',
                role: '普通管理员',
                ids: "", //修改id
            }
        },
        created() {
            this.getAddress();
            this.getimgs();
            this.getPowerId() //根据用户权限加载相应的用户左侧菜单栏
        },
        methods: {
            getPowerId() {
                var powerId = JSON.parse(window.sessionStorage.getItem("powerId"));
                if (powerId == 0) {
                    this.power = true;
                } else if (powerId == 1) {
                    this.power = false;
                } else if (powerId == 2) {
                    this.power = true;
                } else {
                    this.$router.push({
                        path: '/login'
                    });
                }
            },
            change1(value) {
                // console.log(value)
                this.form.ticketType = value;
            },
            //查询数据
            handleChange1(value) { //logic
                this.form.logic = value;
            },
            onSubmit() {
                // console.log(this.form)
                axios.get(common.apidomain + "/product/findPageData.action?id=" + this.form.id + '&name=' + this.form.name +
                    '&viewName=' + this.form.viewName + '&viewType=' + this.form.viewType + '&ticketType=' + this.form
                    .ticketType + '&endPrice=' + this.form.endPrice + '&logic=' + this.form.logic + '&pageIndex=' +
                    this.pagingNowNumberList + "&power_id=" + JSON.parse(window.sessionStorage.getItem("powerId")) +
                    "&staff_id=" + JSON.parse(window.sessionStorage.getItem("id"))).then((res) => {
                    // console.log(res.data);
                    if (res.data.code == 0) {
                        this.$message({
                            message: '暂未查询到数据,请重新查询~',
                            type: 'warning'
                        });
                        this.tableData = res.data.data.datas; //表格数据
                        return false;
                    } {
                        this.$message.success('查询成功~~');
                        this.tableData = res.data.data.datas; //表格数据
                        this.total = res.data.data.allCount; //条数
                        this.pageCount = res.data.data.pageCount; //总的页码数
                        this.pagingNowNumberList = res.data.data.currPage; //当前页码数
                        this.loading = false;
                    }
                })
            },
            resetForm(formName) { //重置
                this.$refs[formName].resetFields();
            },
            handleDownload() { //导出为Excel
                let vm = this;
                require.ensure([], () => {
                    const {
                        export_json_to_excel
                    } = require('../../vendor/Export2Excel');
                    const tHeader = ['产品编号', '产品名称', '景区名称', '原价(元)', '销售价(元)', '开始时间', '结束时间', '已购数量', '总数量'];
                    const filterVal = ['id', 'name', 'viewName', 'marketPrice', 'salePrice', 'startTime',
                        'endTime', 'saleNum', 'num'
                    ];
                    const list = this.tableData;
                    const data = this.formatJson(filterVal, list);
                    export_json_to_excel(tHeader, data, '未命名列表excel');
                })
            },
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
            },
            getAddress() {
                axios.get(common.apidomain + "/product/addUI.action").then((res) => {
                    // console.log(res.data);
                    this.viewType = res.data.data.viewType; //景区类别
                    this.ticketType = res.data.data.ticketType; //票型
                })
            },
            //数据的初次加载
            getimgs() {
                axios.get(common.apidomain + "/hotProduct/findPageData.action?pageIndex=" + this.pagingNowNumberList).then(
                    (res) => {
                        // console.log(res.data.data);
                        this.tableData = res.data.data.datas; //表格数据
                        this.total = res.data.data.allCount; //条数
                        this.pageCount = res.data.data.pageCount; //总的页码数
                        this.pagingNowNumberList = res.data.data.currPage; //当前页码数
                        this.loading = false;
                    })
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.pagingNowNumberList = `${val}`;
            },
            handleCurrentChange(val) {
                // console.log(`当前页: ${val}`);
                axios.get(common.apidomain + "/hotProduct/findPageData.action?pageIndex=" + `${val}`).then((res) => {
                    // console.log(res.data.data);
                    this.tableData = res.data.data.datas; //表格数据
                    this.total = res.data.data.allCount; //条数
                    this.pageCount = res.data.data.pageCount; //总的页码数
                    this.pagingNowNumberList = res.data.data.currPage; //当前页码数
                    this.loading = false;
                })
            },
            //新增数据页面
            newAdd() {
                this.$router.push({
                    path: './SparpreisNewAdd'
                });
            },
            //修改数据页面
            //删除数据
            delUI(index, row) {
                // console.log(row);
                this.delID = row.id;
                this.$confirm('此操作将永久删除该条数据, 是否继续?', '删除', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!',
                    });
                    axios.post(common.apidomain + "/hotProduct/delete.action?id=" + this.delID+"&random_no="+row.random_no).then((res) => {
                        if (res.data.code === 0) {
                            this.$message({
                                message: '删除失败，该产品存在订单无法删除,请联系系统管理员~',
                                type: 'warning'
                            });
                            return false;
                        }
                        this.getimgs(); //自动刷新当前页面
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            del() {
                // console.log("当前id"+this.delID);
                this.$confirm('此操作将永久删除该条数据, 是否继续?', '删除', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        }
    }

</script>
<style scoped>
    .form-box {
        width: 100%;
    }

    body {
        font-family: "Segoe UI";
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    .pagination {
        position: relative;
    }

    .pagination li {
        display: inline-block;
        margin: 0 5px;
    }

    .pagination li a {
        padding: .5rem 1rem;
        display: inline-block;
        border: 1px solid #ddd;
        background: #fff;
        color: #0E90D2;
    }

    .pagination li a:hover {
        background: #eee;
    }

    .pagination li.active a {
        background: #0E90D2;
        color: #fff;
    }
    /* 分页组件层叠样式 */

    .el-pagination {
        margin-left: 35%;
        margin-top: 4rem;
    }

    .el-pagination button,
    .el-pagination span {
        display: inline-block;
        font-size: 13px;
        min-width: 48px;
        height: 45px !important;
        line-height: 48px;
        vertical-align: top;
        box-sizing: border-box;
    }

</style>

