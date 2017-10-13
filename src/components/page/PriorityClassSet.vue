<template>
    <div class="table">
        <!-- 优先级类别设置 -->
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-menu"></i> 基础设置</el-breadcrumb-item>
                <el-breadcrumb-item>优先级类别设置</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips">
            <el-button icon="edit" type="primary" @click="dialogFormVisible=true">新 增</el-button>
            <el-dialog title="新 增" :visible.sync="dialogFormVisible" size="tiny">
                <el-form :model="form" ref="numberValidateForm">
                    <el-form-item label="优先级类别:" :label-width="formLabelWidth" prop="name" :rules="[{ required: true, message: '优先级类别不能为空'}]">
                        <el-input v-model="form.name" auto-complete="off" placeholder="请输入优先级类别"></el-input>
                    </el-form-item>
                    <el-form-item label="优先级:" :label-width="formLabelWidth" prop="priority" :rules="[{ required: true, message: '优先级不能为空'},{ type: 'number',min: 0, message: '优先级必须为不小于0的数字值'},]">
                        <el-input type="priority" v-model.number="form.priority" auto-complete="off" placeholder="0,1,2,3...,数值越小级别越高"></el-input>
                    </el-form-item>
                    <el-tag type="success">优先级为0,1,2,3...的数字值,数值越小级别越高</el-tag>
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
            <el-table-column align=center prop="name" label="优先级类别">
            </el-table-column>
            <el-table-column align=center prop="priority" label="优先级">
            </el-table-column>
            <el-table-column align=center label="操作">
                <template scope="scope">
                    <el-button type="success" size="small" @click="dialogFormVisible1=true,editUI(scope.$index, scope.row)">修 改</el-button>
                    <el-dialog title="修 改" :visible.sync="dialogFormVisible1" size="tiny">
                        <el-form :model="form" ref="numberValidateFormEditUI">
                            <el-form-item label="优先级类别:" :label-width="formLabelWidth" prop="name" :rules="[{ required: true, message: '优先级类别不能为空'}]">
                                <el-input v-model="form.name" auto-complete="off" placeholder="请输入优先级类别"></el-input>
                            </el-form-item>
                            <el-form-item label="优先级:" :label-width="formLabelWidth" prop="priority" :rules="[{ required: true, message: '优先级不能为空'},{ type: 'number',min: 0, message: '优先级必须为不小于0的数字值'},]">
                                <el-input type="priority" v-model.number="form.priority" auto-complete="off" placeholder="0,1,2,3...,数值越小级别越高"></el-input>
                            </el-form-item>
                            <el-tag type="success">优先级为0,1,2,3...的数字值,数值越小级别越高</el-tag>
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
            pageCount: 1,            //总的页码数
            loading: true,
            dialogFormVisible: false,   //新增
            dialogFormVisible1: false,  //修改
            editID: "",
            delID: "",
            codesID: "",
            form: {
                name: '',
                priority: '',
                type: [],
            },
            formLabelWidth: '110px',
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
            axios.get(common.apidomain + "/priority/findPageData.action?pageIndex=" + this.pagingNowNumberList).then((res) => {
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
            axios.get(common.apidomain + "/priority/findPageData.action?pageIndex=" + `${val}`).then((res) => {
                this.tableData = res.data.data.datas;   //表格数据
                this.total = res.data.data.allCount;    //条数
                this.pageCount = res.data.data.pageCount;   //总的页码数
                this.pagingNowNumberList = res.data.data.currPage;   //当前页码数
                this.loading = false;
            })
        },
        // 新增数据
        submitForm(formName) {
            this.getimgs();
            // this.$refs[formName].validate((valid) => {
            //     if (valid) {
            //         this.$message({
            //             showClose: true,
            //             message: '新增成功',
            //             type: 'success'
            //         });
            //         this.dialogFormVisible = false;
            //         this.getimgs();
            //     } else {
            //         this.$message({
            //             showClose: true,
            //             message: '新增失败,请重试',
            //             type: 'warning'
            //         });
            //         return false;
            //     }
            // });
            // 提交表单数据
            axios.post(common.apidomain + "/priority/add.action?name=" + this.form.name + "&priorty=" + this.form.priority + "&pageIndex=" + this.pageCount).then((res) => {
                this.tableData = res.data.data;   //表格数据
                this.currentPage = this.pageCount;
                this.codesID = res.data.code;
                // console.log(this.codesID)
                if (this.codesID === 0) {    //级别已存在
                    this.$message({
                        message: res.data.msg,
                        type: 'warning'
                    });
                    this.dialogFormVisible = false;
                    this.getimgs();
                    return;
                }
                this.dialogFormVisible = false;
            })
            this.getimgs();
            this.form.name = "";
            this.form.priority = "";
            this.dialogFormVisible = false;
        },
        //修改数据
        editUI(index, row) {
            // console.log(row.code)
            this.editID = row.id;
            this.code = row.id;
            this.form.name = row.name;
            this.form.priority = row.priority;
        },
        submitFormEditUI(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$message({
                        showClose: true,
                        message: '修改成功',
                        type: 'success'
                    });
                    this.dialogFormVisible1 = false;
                } else {
                    this.$message({
                        showClose: true,
                        message: '修改失败,请重试',
                        type: 'warning'
                    });
                    return false;
                }
            });
            // 提交修改的表单数据
            axios.post(common.apidomain + "/priority/edit.action?id=" + this.editID + "&name=" + this.form.name + "&priorty=" + this.form.priority).then((res) => {
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
                axios.post(common.apidomain + "/priority/delete.action?id=" + this.delID).then((res) => {
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
    computed: {
    },
    beforeMount() {
    }
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