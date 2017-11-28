<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-message"></i> 景区管理设置</el-breadcrumb-item>
                <el-breadcrumb-item>景区管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :inline="true" :model="form" label-width="90px">
                <el-form-item label="景区编号" prop="viewId">
                    <el-input v-model="form.viewId" placeholder="请同时选择相应的逻辑符号"></el-input>
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
                <el-form-item label="景区负责人" prop="staffName">
                    <el-input v-model="form.staffName"></el-input>
                </el-form-item>
                <el-form-item label="景区名称" prop="viewName">
                    <el-input v-model="form.viewName"></el-input>
                </el-form-item>
                <el-form-item label="景区等级" prop="level">
                    <el-select v-model="form.level" placeholder="请选择景区等级">
                        <el-option v-for="item in level" :key="item.id" :label="item.id" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="景区分类" prop="viewType">
                    <el-select v-model="form.viewType" placeholder="请选择景区分类">
                        <el-option v-for="item in viewType" :key="item.id" :label="item.id" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所属省份" prop="province">
                    <el-select v-model="form.province" placeholder="请选择所属省份">
                        <el-option v-for="item in viewProvince" :key="item.id" :label="item.id" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所属城市" prop="city">
                    <el-select v-model="form.city" placeholder="请选择所属城市">
                        <el-option v-for="item in viewCity" :key="item.id" :label="item.name" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button icon="search" type="info" @click="onSubmit">查 询</el-button>
                    <el-button icon="delete" @click="resetForm('form')">重 置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="plugins-tips">
            <el-button icon="edit" type="primary" @click="newAdd()" v-if="power">新 增</el-button>
            <el-button icon="check" type="success" @click="handleDownload()">导出为Excel</el-button>
        </div>
        <el-table :data="tableData" border stripe style="width: 100%" v-loading="loading" element-loading-text="玩儿命加载中···">
            <el-table-column align=center prop="id" label="景区编号">
            </el-table-column>
            <el-table-column align=center prop="name" label="景区名称">
            </el-table-column>
            <el-table-column align=center prop="level" label="景区等级">
            </el-table-column>
            <el-table-column align=center prop="viewType" label="景区分类">
            </el-table-column>
            <el-table-column align=center prop="number" label="景区产品数量">
            </el-table-column>
            <el-table-column align=center prop="sort" label="景区排序">
            </el-table-column>
            <el-table-column align=center prop="businessTime" label="营业时间">
            </el-table-column>
            <el-table-column align=center prop="staffName" label="景区负责人">
            </el-table-column>
            <el-table-column align=center label="操作" v-if="power">
                <template scope="scope">
                    <router-link :to="{path:'/SceneryEdit',query: { id: scope.row.id }}">
                        <el-button type="success" size="small">修 改</el-button>
                    </router-link>
                    <el-button type="danger" size="small" @click="del(),delUI(scope.$index, scope.row)">删 除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="grid-content bg-purple">
            <div class="block">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="10" :page-sizes="[10, 20]" layout="total, prev, pager, next" :total="total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";

import axios from 'axios';
import common from '../../kits/commonapi.js';   //公共域名文件

export default {
    data: function() {
        return {
            power:false,               //是否显示增删改的按钮权限
            form: {
                viewId: '',
                staffName: '',
                viewName: '',
                level: '',
                viewType: '',
                province: '',
                city: '',
                logic: ''
            },
            level: [],
            viewType: [],
            viewProvince: [],
            viewCity: [],
            total: 1,
            pagingNowNumberList: 1,   //当前显示页码数据
            tableData: [],            //当前表格数据
            currentPage: 1,           //当前页码数
            pageCount: "",            //总的页码数
            loading: false,
            dialogFormVisible: false,   //新增
            dialogFormVisible1: false,  //修改
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
            ids: "",    //修改id
        }
    },
    created() {
        this.getAddress();
        this.getimgs();
        this.getPowerId()   //根据用户权限加载相应的用户左侧菜单栏
    },
    methods: {
        getPowerId(){
            var powerId = JSON.parse(window.sessionStorage.getItem("powerId"));
                if(powerId==0){
                    this.power=true;
                }else if(powerId==1){
                    this.power=false;
                }else if(powerId==2){  
                    this.power=false;
                }else{
                    this.$router.push({path:'/login'});
                }
        },
        //查询数据
        handleChange1(value) {   //logic
            this.form.logic = value;
        },
        onSubmit() {
            // console.log(this.$route.path)
            axios.get(common.apidomain + "/view/findPageData.action?viewId=" + this.form.viewId + '&staffName=' + this.form.staffName + '&viewName=' + this.form.viewName + '&level=' + this.form.level + '&viewType=' + this.form.viewType + '&province=' + this.form.province + '&city=' + this.form.city + '&logic=' + this.form.logic + '&pageIndex=' + this.pagingNowNumberList+"&power_id="+JSON.parse(window.sessionStorage.getItem("powerId"))+"&staff_id="+JSON.parse(window.sessionStorage.getItem("id"))).then((res) => {
                // console.log(res.data);
                if (res.data.code == 0) {
                    this.$message({
                        message: '暂未查询到数据,请重新查询~', type: 'warning'
                    });
                    this.tableData = res.data.data.datas;   //表格数据
                    return false;
                } {
                    this.$message.success('查询成功~~');
                    this.tableData = res.data.data.datas;   //表格数据
                    this.total = res.data.data.allCount;    //条数
                    this.pageCount = res.data.data.pageCount;   //总的页码数
                    this.pagingNowNumberList = res.data.data.currPage;   //当前页码数
                    this.loading = false;
                }
            })
        },
        resetForm(formName) {    //重置
            this.$refs[formName].resetFields();
        },
        handleDownload() {    //导出为Excel
            let vm = this;
            require.ensure([], () => {
                const { export_json_to_excel } = require('../../vendor/Export2Excel');
                const tHeader = ['景区编号', '景区名称', '景区等级', '景区分类', '景区产品数量', '景区排序', '营业时间', '景区业务人员'];
                const filterVal = ['id', 'name', 'level', 'viewType', 'number', 'sort', 'businessTime', 'staffName',];
                const list = this.tableData;
                const data = this.formatJson(filterVal, list);
                export_json_to_excel(tHeader, data, '未命名列表excel');
            })
        },
        formatJson(filterVal, jsonData) {
            return jsonData.map(v => filterVal.map(j => v[j]))
        },
        getAddress() {
            axios.get(common.apidomain + "/view/addUI.action").then((res) => {
                // console.log(res.data);
                this.level = res.data.data.viewLevel;    //等级
                this.viewType = res.data.data.viewType;    //分类
                this.viewProvince = res.data.data.viewProvince;    //省份
                this.viewCity = res.data.data.viewCity;    //城市
            })
        },
        //数据的初次加载
        getimgs() {
            // console.log(JSON.parse(window.sessionStorage.getItem("id")))    //3
            // console.log(JSON.parse(window.sessionStorage.getItem("powerId")))  //0
            axios.get(common.apidomain + "/view/findPageData.action?pageIndex=" + this.pagingNowNumberList+"&power_id="+JSON.parse(window.sessionStorage.getItem("powerId"))+"&staff_id="+JSON.parse(window.sessionStorage.getItem("id"))).then((res) => {
                    console.log(res.data);
                this.tableData = res.data.data.datas;   //表格数据
                this.total = res.data.data.allCount;    //条数
                this.pageCount = res.data.data.pageCount;   //总的页码数
                this.pagingNowNumberList = res.data.data.currPage;   //当前页码数
                this.loading = false;
            })
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pagingNowNumberList = `${val}`;
        },
        handleCurrentChange(val) {
            // console.log(`当前页: ${val}`);
            axios.get(common.apidomain + "/view/findPageData.action?pageIndex=" + `${val}` + "&viewId=" + this.form.viewId + '&staffName=' + this.form.staffName + '&viewName=' + this.form.viewName + '&level=' + this.form.level + '&viewType=' + this.form.viewType + '&province=' + this.form.province + '&city=' + this.form.city + '&logic=' + this.form.logic+"&power_id="+JSON.parse(window.sessionStorage.getItem("powerId"))+"&staff_id="+JSON.parse(window.sessionStorage.getItem("id"))).then((res) => {
                // console.log(res.data.data);
                this.tableData = res.data.data.datas;   //表格数据
                this.total = res.data.data.allCount;    //条数
                this.pageCount = res.data.data.pageCount;   //总的页码数
                this.pagingNowNumberList = res.data.data.currPage;   //当前页码数
                this.loading = false;
            })
        },
        //新增数据页面
        newAdd() {
            this.$router.push({ path: './ScenerynewAdd' });
        },
        //修改数据页面
        //删除数据
        delUI(index, row) {
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
                axios.post(common.apidomain + "/view/delete.action?id=" + this.delID).then((res) => {
                    if (res.data.code === 0) {
                        this.$message({
                            message: '当前用户有管理的景区,无法删除,请联系系统管理员~',
                            type: 'warning'
                        });
                        return false;
                    }
                    this.getimgs();   //自动刷新当前页面
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
