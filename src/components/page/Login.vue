<template>
    <div class="login-wrap">
        <div class="ms-title">易旅通后台管理系统</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="请输入您的用户名..."></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="请输入您的密码..." v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <!-- <p style="font-size:12px;line-height:30px;color:#999;"> 用户名和密码暂时随便填。</p> -->
            </el-form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import common from '../../kits/commonapi.js';   //公共域名文件

    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        localStorage.setItem('ms_username',self.ruleForm.username);
                        // console.log(this.ruleForm)
                        axios.post(common.apidomain + "/login/login.action?loginName="+this.ruleForm.username+"&password="+this.ruleForm.password).then((res) => {
                            console.log(res.data)
                            // console.log(res.data.data.id)
                            // console.log(res.data.data.powerId)
                            if(res.data.code==0){
                                this.$message({message: '登陆失败,请重试~~',type: 'warning'});
                                return false;
                            }else{
                                this.$router.push({path: "/readme",query: { id: res.data.data.id,powerId:res.data.data.powerId }});
                                this.$message({type: 'info',message: '登陆成功'});
                                var ids = JSON.stringify(res.data.data.id);
                                var powerIds = JSON.stringify(res.data.data.powerId);
                                window.sessionStorage["id"] = ids;
                                window.sessionStorage["powerId"] = powerIds;
                                // self.$router.push('/readme');
                        }
                    })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:160px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
        box-shadow: 0px 0px 23px 6px #0CC inset;    

    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>