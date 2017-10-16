<template>
    <div class="table">
        <!-- 用户管理 -->
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-menu"></i> 用户管理设置</el-breadcrumb-item>
                <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips">
            <el-button icon="edit" type="primary" @click="dialogFormVisible=true,newAdd()">新 增</el-button>
            <el-dialog title="新 增" :visible.sync="dialogFormVisible" size="tiny">
                <el-form :model="form" ref="numberValidateForm">
                    <el-form-item label="用户名:" :label-width="formLabelWidth" prop="loginName" :rules="[{ required: true, message: '用户名不能为空'}]">
                        <el-input v-model="form.loginName" auto-complete="off" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名:" :label-width="formLabelWidth" prop="name" :rules="[{ required: true, message: '姓名不能为空'}]">
                        <el-input v-model="form.name" auto-complete="off" placeholder="请输入姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="部门:" :label-width="formLabelWidth" prop="department">
                        <el-select v-model="value1" placeholder="请选择" @change="handleChange1">
                            <el-option v-for="item in options1" :key="item.id" :label="item.name" :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="角色:" :label-width="formLabelWidth" prop="role">
                        <el-select v-model="value" placeholder="请选择" @change="handleChange">
                            <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div>拥有的权限如下 : </div>
                    <div> &nbsp; </div>
                    <el-button :plain="true" type="success" v-text="lists.remark"></el-button>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="submitForm('numberValidateForm')">提 交</el-button>
                </div>
            </el-dialog>
        </div>
        <el-table :data="tableData" border stripe style="width: 100%" v-loading="loading" element-loading-text="玩儿命加载中···">
            <el-table-column type="index" align=center label="编号" width="100">
            </el-table-column>
            <el-table-column align=center prop="loginName" label="用户名">
            </el-table-column>
            <el-table-column align=center prop="name" label="姓名">
            </el-table-column>
            <el-table-column align=center prop="department" label="部门">
            </el-table-column>
            <el-table-column align=center prop="role" label="角色">
            </el-table-column>
            <el-table-column align=center label="操作">
                <template scope="scope">
                    <el-button type="success" size="small" @click="dialogFormVisible1=true,editUI(scope.$index, scope.row)">修 改</el-button>
                    <el-dialog title="修 改" :visible.sync="dialogFormVisible1" size="tiny">
                        <el-form :model="form" ref="numberValidateForm">
                            <el-form-item label="用户名:" :label-width="formLabelWidth" prop="loginName" :rules="[{ required: true, message: '用户名不能为空'}]">
                                <el-input v-model="form.loginName" auto-complete="off" placeholder="请输入用户名"></el-input>
                            </el-form-item>
                            <el-form-item label="姓名:" :label-width="formLabelWidth" prop="name" :rules="[{ required: true, message: '姓名不能为空'}]">
                                <el-input v-model="form.name" auto-complete="off" placeholder="请输入姓名"></el-input>
                            </el-form-item>
                            <el-form-item label="部门:" :label-width="formLabelWidth" prop="department">
                                <el-select v-model="value1" placeholder="请选择" @change="handleChange1" >
                                    <el-option v-for="item in options1" :key="item.id" :label="item.name" :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="角色:" :label-width="formLabelWidth" prop="role">
                                <el-select v-model="value" placeholder="请选择" @change="handleChange">
                                    <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <div>拥有的权限如下 : </div>
                            <div> &nbsp; </div>
                            <el-button :plain="true" type="success" v-text="lists.remark"></el-button>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                            <el-button type="primary" @click="submitFormEditUI('numberValidateFormEditUI')">提 交</el-button>
                        </div>
                    </el-dialog>
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
import axios from 'axios';
import Datasource from 'vue-datasource';
// import Paginations from './Pagination.vue';     //分页组件
import common from '../../kits/commonapi.js';   //公共域名文件

export default {
    data: function() {
        const self = this;
        return {
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
            form: {
                loginName: '',
                name: '',
                department: '',
                role: '',
                id: '',
                type: [],
            },
            formLabelWidth: '70px',
            options1: [],
            value1: '运营部',
            options: [],
            value: '普通管理员',
            lists: {
                remark: "",
                id: '',
            },
            powerId: 1,
            department: '运营部',
            role: '普通管理员',
            ids: "",    //修改id
        };
    },
    components: {
        Datasource,
        // Paginations,
    },
    created() {
        this.getimgs();
    },
    methods: {
        //数据的初次加载
        getimgs() {
            axios.get(common.apidomain + "/staff/findPageData.action?pageIndex=" + this.pagingNowNumberList).then((res) => {
                // console.log(res.data.data);
                this.tableData = res.data.data.datas;   //表格数据
                this.total = res.data.data.allCount;    //条数
                this.pageCount = res.data.data.pageCount;   //总的页码数
                this.pagingNowNumberList = res.data.data.currPage;   //当前页码数
                this.loading = false;
            })
        },
        handleSizeChange(val) {
            // console.log(`每页 ${val} 条`);
            this.pagingNowNumberList = `${val}`;
        },
        handleCurrentChange(val) {
            // console.log(`当前页: ${val}`);
            axios.get(common.apidomain + "/staff/findPageData.action?pageIndex=" + `${val}`).then((res) => {
                this.tableData = res.data.data.datas;   //表格数据
                this.total = res.data.data.allCount;    //条数
                this.pageCount = res.data.data.pageCount;   //总的页码数
                this.pagingNowNumberList = res.data.data.currPage;   //当前页码数
                this.loading = false;
            })
        },
        // 新增数据
        handleChange1(value) {           //部门
            axios.post(common.apidomain + "/staff/addUI.action").then((res) => {
                // this.lists.remark = res.data.data.power[value].remark;
                // console.log(res.data.data.power[value].id)
                // console.log(res.data.data.dept[value - 29].name)
                this.powerId = value
                this.department = res.data.data.dept[value - 29].name;
            })
        },
        handleChange(value) {           //角色,权限联动
            // console.log(value);
            axios.post(common.apidomain + "/staff/addUI.action").then((res) => {
                this.lists.remark = res.data.data.power[value].remark;
                // console.log(res.data.data.power[value].id)
                this.powerId = value
                this.options = res.data.data.power;
                this.role = this.options[value].name;
            })
        },
        newAdd() {       //新增表单默认值设置
            axios.post(common.apidomain + "/staff/addUI.action").then((res) => {
                // this.tableData = res.data.data;   //表格数据
                // this.currentPage = this.pageCount;
                // console.log(res.data.data.power)
                this.options1 = res.data.data.dept;
                this.options = res.data.data.power;
                this.lists.remark = res.data.data.power[1].remark;
            })
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$message({
                        showClose: true,
                        message: '新增成功',
                        type: 'success'
                    });
                    this.dialogFormVisible = false;
                    this.getimgs();
                } else {
                    this.$message({
                        showClose: true,
                        message: '新增失败,请重试',
                        type: 'warning'
                    });
                    return false;
                }
            });
            // 提交表单数据
            // name,loginName,department,role,powerId,pageIndex
            axios.post(common.apidomain + "/staff/add.action?powerId=" + this.powerId + "&loginName=" + this.form.loginName + "&name=" + this.form.name + "&department=" + this.department + "&role=" + this.role + "&pageIndex=" + this.pageCount).then((res) => {
                this.tableData = res.data.data;   //表格数据
                this.currentPage = this.pageCount;
                this.codesID = res.data.code;
                if (this.codesID === 0) {    //级别已存在
                    this.$message({
                        message: res.data.msg,
                        type: 'warning'
                    });
                    this.dialogFormVisible = false;
                    this.getimgs();
                    return;
                }
            })
            this.getimgs();
            this.form.loginName = "";
            this.form.name = "";
        },
        //修改数据
        editUI(index, row) {
            this.ids = row.id;
            axios.post(common.apidomain + "/staff/addUI.action").then((res) => {
                // this.tableData = res.data.data;   //表格数据
                // this.currentPage = this.pageCount;
                // console.log(res.data.data.power)
                this.options1 = res.data.data.dept;
                this.options = res.data.data.power;
                this.lists.remark = res.data.data.power[1].remark;
            })   //  修改按钮表单显示的默认值
            this.editID = row.id;
            this.form.loginName = row.loginName;
            this.form.name = row.name;
            this.value1 = row.department;
            this.value = row.role;
            // this.options = row.role;
            // console.log(111)
            // console.log(this.options1)
        },
        submitFormEditUI(formName) {
            // this.$refs[formName].validate((valid) => {
            //     if (valid) {
            //         this.$message({
            //             showClose: true,
            //             message: '修改成功',
            //             type: 'success'
            //         });
            //         this.dialogFormVisible1 = false;
            //     } else {
            //         this.$message({
            //             showClose: true,
            //             message: '修改失败,请重试',
            //             type: 'warning'
            //         });
            //         return false;
            //     }
            // });

            this.$message({
                showClose: true,
                message: '修改成功',
                type: 'success'
            });
            this.dialogFormVisible1 = false;
            // 提交修改的表单数据
            axios.post(common.apidomain + "/staff/edit.action?id=" + this.ids + "&powerId=" + this.powerId + "&loginName=" + this.form.loginName + "&name=" + this.form.name + "&department=" + this.department + "&role=" + this.role + "&pageIndex=" + this.pageCount).then((res) => {
                this.getimgs();   //自动刷新当前页面
            })
        },
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
                axios.post(common.apidomain + "/staff/delete.action?id=" + this.delID).then((res) => {
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
    },
}
</script>

<style scoped>
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