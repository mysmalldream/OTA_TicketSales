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
            <el-form ref="form" :model="form" label-width="100px" enctype="multipart/form-data">
                <el-form-item label="分销商名称" prop="name">
                    <el-select v-model="form.name" placeholder="请选择" @change="handleChange1">
                        <el-option v-for="item in names" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="合同上传" prop="hetong">
                    <el-upload class="upload-demo" accept=".doc,.docx,.txt,.pdf" ref="upload" :action=urls :data="upLoadDatas" :on-preview="handlePreview"
                        :on-remove="handleRemove" :on-success="handleSuccess" :on-error="handlEerror" list-type="picture" :file-list="fileList"
                        :auto-upload="true" :show-file-list="true">
                        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                        <!--<el-form-item>
                        <el-button style="margin-left: 10px;" icon="upload" size="small" type="success" @click="submitUpload">开始上传</el-button>
                    </el-form-item>-->
                        <div slot="tip" class="el-upload__tip">只能上传.doc,.docx,.txt,.pdf格式的文件</div>
                    </el-upload>
                </el-form-item>

                <div v-for="item in strs" :key="item.id" class="listsitem">{{item}}
                    <el-button size="small" @click="del(item)">删除</el-button>
                    <!-- <el-button  size="small" @click="down(item)" type="success">下载</el-button> -->
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";

    import axios from "axios";
    import common from "../../kits/commonapi.js"; //公共域名文件

    export default {
        data: function () {
            return {
                power: false, //是否显示增删改的按钮权限
                urls: common.apidomain + "/custom/contractUpload.action", //上传合同文件地址
                upLoadDatas: {
                    id: '',
                    url: ''
                },
                form: {
                    name: '',
                    id: '',
                    file: ''
                },
                names: [],
                id: '',
                url: '',
                urlName: [],
                fileList: [],
                importFileUrl: '',
                upLoadData: '',
                strs: [],
                names: {
                    name: '',
                    url: ''
                },
                dels: {
                    id: '',
                    url: ''
                },
                nums:''   //下拉选择的id
            };
        },
        created() {
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
            submitUpload() {
                this.$refs.upload.submit();
                // this.upLoadDatas.url = null;
            },
            // ceshi(){
            //     console.log(upLoadDatas);
            //     console.log(432);
            // },
            del(item) {
                console.log("删除按钮显示的")
                console.log(this.dels)
                console.log("fileName===" + item)
                console.log(this.dels.id)
                console.log(this.dels.url)
                axios.get(common.apidomain + "/custom/delURL.action?id=" + this.dels.id + '&fileName=' + item + '&url=' +
                    this.dels.url).then((res) => {
                    // console.log(res.data);
                    this.strs = res.data.data[1]; //更新strs
                    this.dels.url = res.data.data[0];
                })
                
            },
            handlePreview(file) {
                // console.log("已上传文件的钩子");       
                // console.log(file);       
                this.fileList.name = file.name;
                this.fileList = file.response;
            },
            handleSuccess(response, file, fileList) {
                // console.log("上传成功钩子");
                // console.log(fileList[0].response.data.url);
                this.strs = [];
                // fileList[0].response.data.url.split(",").forEach(function (v, i) {
                //     this.strs.push(v);
                // }, this);
                // window.location.href=window.location.href;
                this.$message({
                    showClose: true,
                    message: '恭喜你，上传成功!',
                    type: 'success'
                });
                setTimeout(() => {
                    window.location.reload();
                }, 300);
            },
            handleRemove(file, fileList) {
                // console.log(file.name);
                // console.log(fileList);
                // console.log(this.upLoadDatas);
                axios.get(common.apidomain + "/custom/delURL.action?id=" + this.upLoadDatas.id + '&fileName=' + file.name +
                    '&url=' + this.upLoadDatas.url).then((res) => {
                    console.log(res.data);
                    // this.strs = res.data.data[1]; //更新strs
                    // this.dels.url = res.data.data[0];
                })
                this.$message({
                    showClose: true,
                    message: '删除成功',
                    type: 'success'
                });
                setTimeout(() => {
                    window.location.reload();
                    // this.handleChange1();
                }, 300);
            },
            handlEerror(err, file, fileList) {
                this.$message({
                    showClose: true,
                    message: '上传失败,请重试~',
                    type: 'error'
                });
            },
            handleChange1(val) {
                // console.log(val)
                //   console.log(val.id)
                //   console.log(val.url)
                // this.nums=val;
                axios.get(common.apidomain + "/custom/getUrlList.action?id=" + val).then((res) => { //下拉切换回显
                    // console.log(res.data.data);
                    this.upLoadDatas.id = res.data.data[0].id;
                    this.upLoadDatas.url = res.data.data[0].url;
                    if (res.data.data[0].urlList == null) {
                        res.data.data[0].urlList = [];
                    }
                    this.fileList = res.data.data[0].urlList; //分销商合同回显
                })
                this.dels.id = val.id;
                this.dels.url = val.url;
                this.upLoadDatas.id = val.id;
                this.upLoadDatas.url = val.url;
                this.strs = [];
                if (val.urlList == null) {
                    return;
                } else {
                    val.urlList.forEach(function (v, i) {
                        this.strs.push(v);
                    }, this);
                }
            },
            getimgs() {
                axios.get(common.apidomain + "/custom/contractUI.action").then((res) => {
                    // console.log(res.data.data);
                    this.names = res.data.data; //分销商名称
                })
            },
        }
    };

</script>
<style scoped>
    .form-box {
        width: 50%;
    }

    .el-upload {
        height: 40px !important;
    }

    .listsitem {
        margin-top: 10px;
    }

</style>

