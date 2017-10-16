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
                    <el-input v-model="form.viewId"></el-input>
                </el-form-item>
                <el-form-item label="景区负责人" prop="staffName">
                    <el-input v-model="form.staffName"></el-input>
                </el-form-item>
                <el-form-item label="景区名称" prop="viewName">
                    <el-input v-model="form.viewName"></el-input>
                </el-form-item>
                <el-form-item label="景区等级" prop="level">
                    <el-input v-model="form.level"></el-input>
                </el-form-item>
                <el-form-item label="景区分类" prop="viewType">
                    <el-input v-model="form.viewType"></el-input>
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
                <el-form-item label="逻辑符号" prop="logic">
                    <el-select v-model="form.logic" placeholder="请选择">
                        <el-option key="bbk" label="=" value="bbk"></el-option>
                        <el-option key="xtc" label=">" value="xtc"></el-option>
                        <el-option key="imoo1" label="<" value="imoo1"></el-option>
                        <el-option key="imoo2" label="<=" value="imoo2"></el-option>
                        <el-option key="imoo3" label="=>" value="imoo3"></el-option>
                        <el-option key="imoo4" label="<>" value="imoo4"></el-option>
                        <el-option key="imoo5" label="模糊查找" value="imoo5"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button icon="search" type="info" @click="onSubmit">查 询</el-button>
                    <el-button icon="delete" @click="resetForm('form')">重 置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="plugins-tips">
            <el-button icon="edit" type="primary" @click="newAdd()">新 增</el-button>
            <el-button icon="check" type="success">导出为Excel</el-button>
        </div>
        <el-table :data="tableData" border stripe style="width: 100%" v-loading="loading" element-loading-text="玩儿命加载中···">
            <!-- <el-table-column type="index" align=center label="编号" width="100">
                    </el-table-column> -->
            <el-table-column align=center prop="id" label="景区编号">
            </el-table-column>
            <el-table-column align=center prop="name" label="景区名称">
            </el-table-column>
            <el-table-column align=center prop="level" label="景区等级">
            </el-table-column>
            <el-table-column align=center prop="viewType" label="景区分类">
            </el-table-column>
            <el-table-column align=center prop="number" label="所景产品数量">
            </el-table-column>
            <el-table-column align=center prop="sort" label="景区排序">
            </el-table-column>
            <el-table-column align=center prop="businessTime" label="营业时间">
            </el-table-column>
            <el-table-column align=center prop="staffName" label="景区业务人员">
            </el-table-column>
            <el-table-column align=center label="操作">
                <template scope="scope">
                    <el-button type="success" size="small" @click="dialogFormVisible1=true,editUI(scope.$index, scope.row)">修 改</el-button>
                    <el-dialog title="修 改" :visible.sync="dialogFormVisible1" size="tiny">
                        <!-- <el-form :model="form" ref="numberValidateForm">
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
                                </el-form> -->
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
import common from '../../kits/commonapi.js';   //公共域名文件
export default {
    data: function() {
        return {
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
    },
    methods: {
        onSubmit() {
            this.$message.success('开始查询');
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        getAddress() {
            axios.get(common.apidomain + "/view/addUI.action").then((res) => {
                // console.log(res.data);
                this.viewProvince = res.data.data.viewProvince;    //省份
                this.viewCity = res.data.data.viewCity;    //城市
            })
        },
        //数据的初次加载
        getimgs() {
            axios.get(common.apidomain + "/view/findPageData.action?pageIndex=" + this.pagingNowNumberList).then((res) => {
                console.log(res.data.data);
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
            axios.get(common.apidomain + "/view/findPageData.action?pageIndex=" + `${val}`).then((res) => {
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
