<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-share"></i> 分销商管理设置</el-breadcrumb-item>
                <el-breadcrumb-item>合同管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :inline="true" :model="form" label-width="100px">
                <el-form-item label="分销商名称" prop="id">
                    <el-input v-model="form.id" ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button icon="upload" type="info" @click="onSubmit">上 传</el-button>
                </el-form-item>
            </el-form>
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
            form: {
                id: '',
            }
        }
    },
    created() {
    },
    methods: {
        onSubmit(){

        }
    }
}
</script>
<style scoped>
.form-box {
    width: 100%;
}
</style>
