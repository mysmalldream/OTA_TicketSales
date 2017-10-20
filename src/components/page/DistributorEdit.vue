<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-share"></i> 分销商管理设置</el-breadcrumb-item>
                <el-breadcrumb-item>修改</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="分销商编号" prop="id" :rules="[{ required: true, message: '景区编号不能为空'}]">
                    <el-input v-model="form.id" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="分销商名称" prop="name" :rules="[{ required: true, message: '景区名称不能为空'}]">
                    <el-input v-model="form.name" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="分销商类别" prop="custType" :rules="[{ required: true, message: '景区分类不能为空'}]">
                    <el-select v-model="form.custType" placeholder="请选择" @change="handleChange1">
                        <el-option v-for="item in custType" :key="item.id" :label="item.name" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="分销商等级" prop="level" :rules="[{ required: true, message: '景区等级不能为空'}]">
                    <el-select v-model="form.level" placeholder="请选择" @change="handleChange2">
                        <el-option v-for="item in level" :key="item.id" :label="item.name" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="电话" prop="phone" :rules="[{ required: true, message: '景区简介不能为空'}]">
                    <el-input   v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="联系人" prop="linkMan" :rules="[{ required: true, message: '地址不能为空'}]">
                    <el-input v-model="form.linkMan"></el-input>
                </el-form-item>
                <el-form-item label="用户名" prop="userName" :rules="[{ required: true, message: '营业时间不能为空'}]">
                    <el-input v-model="form.userName" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="分销商状态" prop="state" >
                    <el-select v-model="form.stateName" placeholder="请选择" @change="handleChange3">
                        <el-option v-for="item in states" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="授信额度" prop="creditLimit" :rules="[{ required: true, message: '温馨提示不能为空'}]">
                    <el-input type="number"  v-model="form.creditLimit"></el-input>
                </el-form-item>
                <el-form-item label="预存现金" prop="cashMoney" :rules="[{ required: true, message: '优惠政策不能为空'}]">
                    <el-input  v-model="form.cashMoney" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="" prop="viewId">
                    <el-button type="primary" @click="onSubmit('form')">提 交</el-button>
                    <el-button @click="resetForm('form')">重 置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import Vue from "vue";

import axios from 'axios';
import common from '../../kits/commonapi.js';   //公共域名文件
import mapDrag from '../common/mapDrag'  // "vue-loader": "^11.3.4",

export default {
    components: {    //地图
        mapDrag, 
    },
    data: function() {
        return {
            val:'',
            currentPage: 1,           //当前页码数
            form: {
                id:'',
                name: '',
                custType: '',
                level: '',
                phone: '',
                linkMan: '',
                userName: '',
                state: '0',
                stateName:'',
                creditLimit: '',
                cashMoney: '',
            },
            custType: [],
            level: [],
            custTypes: '',
            levels:'',
            states: [{
                value: '0',
                label: '未审核'
        },{
                value: '1',
                label: '正常'
        },{
                value: '3',
                label: '停用'
        }],
        }
    },
    created() {
        this.getEdit();
        this.getAddress();
    },
    methods: {

        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        getEdit(){    //修改下拉回显
             axios.get(common.apidomain + "/custom/editUI.action?id="+this.$route.query.id).then((res) => {
                //  console.log(res.data)
            })
        },
        getAddress() {
            axios.get(common.apidomain + "/custom/editUI.action?id="+this.$route.query.id).then((res) => {
                this.custType = res.data.data.customType;    //分销商类别
                this.level = res.data.data.level;    //分销商等级
                
                this.form.custType = res.data.data.custom.customType;    //分销商类别
                this.form.level = res.data.data.custom.level;    //分销商等级

                this.form.id=res.data.data.custom.id;
                this.form.name=res.data.data.custom.name;
                this.form.level=res.data.data.custom.level;
                this.form.phone=res.data.data.custom.phone;
                this.form.custType = res.data.data.custom.custType;    
                this.form.linkMan=res.data.data.custom.linkMan;
                this.form.userName=res.data.data.custom.userName;
                this.form.stateName=res.data.data.custom.stateName;
                this.form.creditLimit=res.data.data.custom.creditLimit;
                this.form.cashMoney=res.data.data.custom.cashMoney;
            })
        },
        //修改数据
        handleChange1(value) {
            console.log(value.name)
            this.custTypes = value.name;
        },
        handleChange2(value) {
            console.log(value)
            this.levels = value;
        },
        handleChange3(value) {
            console.log(value)
            this.form.state = value;
            
        },
        //修改数据提交
        onSubmit(formName) {
            // 提交表单数据
            console.log(this.form)
            console.log(this.custTypes)
            console.log(this.levels)
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    axios.post(common.apidomain + "/custom/edit.action?id=" +this.form.id +  "&name="+this.form.name + "&custType=" + this.custTypes + "&level=" + this.levels + "&phone=" + this.form.phone + "&linkMan=" + this.form.linkMan + "&userName=" + this.form.userName + "&creditLimit=" + this.form.creditLimit + "&cashMoney=" + this.form.cashMoney+ "&state=" + this.form.state ).then((res) => {
                        // console.log(res.data)
                        // console.log(res.data.data.currPage)
                        // this.tableData = res.data.data;   //表格数据
                        // this.currentPage = res.data.data.currPage;
                        this.codesID = res.data.code;
                        if (this.codesID === 0) {    //参数错误
                            this.$message({
                                message: "修改失败,请重试~",
                                type: 'warning'
                            });
                            // this.getimgs();
                            return;
                        } else {
                            this.$message({
                                message: '修改成功!~~   ',
                                type: 'success'
                            });
                            this.$router.push({ path: '/DistributorManagement' });
                        }
                    })
                } else {
                    this.$message({
                        message: '参数错误,请检查后重新输入~~',
                        type: 'warning'
                    });
                    return false;
                }
            });
        },
    }
}
</script>
<style scoped>
.form-box {
    width: 50%;
}


</style>
