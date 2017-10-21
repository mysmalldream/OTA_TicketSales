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
            <el-form ref="form"  :model="form" label-width="100px">
                <el-form-item label="分销商名称" prop="name">
                    <el-select v-model="form.name" placeholder="请选择" @change="handleChange1">
                        <el-option v-for="item in names" :key="item.id" :label="item.name" :value="item.name"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="分销商名称" prop="name">
                    <el-select v-model="form.name" placeholder="请选择"  @change="handleChange2" :disabled="true">
                        <el-option  v-for="item in names" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <span v-for="item in names" :key="item.id">{{item.urlName}}<el-button icon="delete"  @click="deletes">删 除</el-button></span>
                <el-button icon="delete"  @click="deletes">删 除</el-button>
                <!-- <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload> -->
                <el-form-item>
                    <el-button icon="upload" type="info" @click="onSubmit">上 传</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import Vue from "vue";

import axios from "axios";
import common from "../../kits/commonapi.js"; //公共域名文件

export default {
  data: function() {
    return {
       form:{
           name:''
       },
       names:[],
       urlName:[],
       fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, ]
    };
  },
  created() {
      this.getimgs()
  },
  methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleChange1(val){
          console.log(val)
        //   axios.get(common.apidomain + "/custom/contractUI.action").then((res) => {
        //         console.log(res.data.data);
        //         // console.log(res.data.name);
        //         this.names = res.data.data;    //分销商名称
        //     })
      },
      handleChange2(val){
          console.log(val)
        //   axios.get(common.apidomain + "/custom/contractUI.action").then((res) => {
        //         console.log(res.data.data);
        //         // console.log(res.data.name);
        //         this.names = res.data.data;    //分销商名称
        //     })
      },
      getimgs(){
          axios.get(common.apidomain + "/custom/contractUI.action").then((res) => {
                // console.log(res.data.data);
                // console.log(res.data.name);
                this.names = res.data.data;    //分销商名称
            })
      },
      onSubmit(){

      },
      deletes(){

      }
  }
};
</script>
<style scoped>
.form-box {
  width: 50%;
}
</style>
