<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-share"></i> 分销商管理设置</el-breadcrumb-item>
                <el-breadcrumb-item>审核</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-table ref="multipleTable" @selection-change="handleSelectionChange" :data="tableData" border stripe style="width: 100%" v-loading="loading" element-loading-text="玩儿命加载中···">
            <el-table-column align=center prop="" label="" type="selection">
            </el-table-column>
            <el-table-column align=center prop="id" label="分销商编号">
            </el-table-column>
            <el-table-column align=center prop="name" label="分销商名称">
            </el-table-column>
            <el-table-column align=center prop="typeName" label="分销商类别">
            </el-table-column>
            <el-table-column align=center prop="level" label="分销商等级">
            </el-table-column>
            <el-table-column align=center prop="phone" label="电话">
            </el-table-column>
            <el-table-column align=center prop="linkMan" label="联系人">
            </el-table-column>
            <el-table-column align=center prop="creditLimit" label="授信额度">
            </el-table-column>
            <el-table-column align=center prop="cashMoney" label="预存现金">
            </el-table-column>
            <el-table-column align=center prop="state" label="分销商状态">
            </el-table-column>
        </el-table>
        <div class="grid-content bg-purple">
            <div class="block2">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="10" :page-sizes="[10, 20]" layout="total, prev, pager, next" :total="total">
                </el-pagination>
            </div>
        </div>
         <div class="grid-content bg-purple">
            <div class="block1">
                <el-button type="success" @click="check"> 审 核 通 过 </el-button>
                <el-button @click="checkNotPass"> 审 核 不 通 过 </el-button>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";

import axios from 'axios';
import common from '../../kits/commonapi.js';   //公共域名文件
            // let ids = []

export default {
    data: function() {
        return {
            total: 1,
            pagingNowNumberList: 1,   //当前显示页码数据
            tableData: [],            //当前表格数据
            currentPage: 1,           //当前页码数
            pageCount: "",            //总的页码数
            loading: false,
            formLabelWidth: '70px',
            powerId: 1,
            department: '运营部',
            role: '普通管理员',
            ids: "",    //修改id
            multipleSelection: [],
            indexs:[]
        }
    },
    created() {
        this.getimgs();
    },
    methods: {
        //数据的初次加载
        getimgs() {
            axios.get(common.apidomain + "/custom/checkUI.action?pageIndex=" + this.pagingNowNumberList).then((res) => {
                // console.log(res.data.data);
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
            axios.get(common.apidomain + "/product/findPageData.action?pageIndex=" + `${val}`).then((res) => {
                // console.log(res.data.data);
                this.tableData = res.data.data.datas;   //表格数据
                this.total = res.data.data.allCount;    //条数
                this.pageCount = res.data.data.pageCount;   //总的页码数
                this.pagingNowNumberList = res.data.data.currPage;   //当前页码数
                this.loading = false;
            })
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
            let ids = []
            this.multipleSelection.map((item) => {
                ids.push(item.id)
            })
            this.indexs=ids
            console.log(ids)
            return ids;
        },
        check(){
            console.log("审核通过"+this.indexs)
            
            //  axios.post(common.apidomain + "/custom/check.action?pageIndex=" + `${val}`).then((res) => {
            //     console.log(res.data.data);
            // })
        },
        checkNotPass(){

        },
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

.el-pagination,.block1 {
    margin-left: 35%;
    margin-top: 1rem;
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
