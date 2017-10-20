<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-message"></i> 景区管理设置</el-breadcrumb-item>
                <el-breadcrumb-item>修改</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="90px">
                <el-form-item label="景区编号" prop="id" :rules="[{ required: true, message: '景区编号不能为空'}]">
                    <el-input v-model="form.id" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="景区名称" prop="name" :rules="[{ required: true, message: '景区名称不能为空'}]">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="景区位置">
                    <div class="map">
                        <div>
                            <b>经度：</b>{{ dragData.lng }}
                            <b>纬度：</b>{{ dragData.lat }}
                            <div class="dizhi">
                                <b>详细地址:</b>{{ dragData.address }}
                            </div>
                            <el-input type="hidden" v-model="form.lng" :rules="[{ required: true, message: '景区名称不能为空'}]"></el-input>
                            <el-input type="hidden" v-model="form.lat"></el-input>
                        </div>
                    </div>
                    <div class="m-part">
                        <mapDrag @drag="dragMap" class="mapbox"></mapDrag>
                    </div>
                </el-form-item>
                <el-form-item label="景区分类" prop="type" :rules="[{ required: true, message: '景区分类不能为空'}]">
                    <el-select v-model="form.type" placeholder="请选择" @change="handleChange1">
                        <el-option v-for="item in viewType" :key="item.id" :label="item.id" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="景区等级" prop="level" :rules="[{ required: true, message: '景区等级不能为空'}]">
                    <el-select v-model="form.level" placeholder="请选择" @change="handleChange2">
                        <el-option v-for="item in viewLevel" :key="item.id" :label="item.id" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="景区简介" prop="remark" :rules="[{ required: true, message: '景区简介不能为空'}]">
                    <el-input type="textarea" v-model="form.remark"></el-input>
                </el-form-item>
                <el-form-item label="地址" prop="address" :rules="[{ required: true, message: '地址不能为空'}]">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="营业时间" prop="businessTime" :rules="[{ required: true, message: '营业时间不能为空'}]">
                    <el-input v-model="form.businessTime" placeholder="请输入起止时间,格式为 (8:00-17:00)"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="phone" :rules="[{ required: true, message: '电话不能为空'}]">
                    <el-input type="number" v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="温馨提示" prop="reminder" :rules="[{ required: true, message: '温馨提示不能为空'}]">
                    <el-input type="textarea" v-model="form.reminder"></el-input>
                </el-form-item>
                <el-form-item label="优惠政策" prop="discount" :rules="[{ required: true, message: '优惠政策不能为空'}]">
                    <el-input type="textarea" v-model="form.discount"></el-input>
                </el-form-item>
                <el-form-item label="公交线路" prop="busMessage" :rules="[{ required: true, message: '公交线路不能为空'}]">
                    <el-input type="textarea" v-model="form.busMessage"></el-input>
                </el-form-item>
                <el-form-item label="自驾线路" prop="selfRoute" :rules="[{ required: true, message: '自驾线路不能为空'}]">
                    <el-input type="textarea" v-model="form.selfRoute"></el-input>
                </el-form-item>
                <el-form-item label="上传照片" prop="file">
                    <!-- <el-input type="file" multiple="multiple" v-model="form.file"></el-input> multiple='true'  -->
                    <!-- <image-uploader @onChange='imgChange' :maxSize="maxSize" placeholder="+"></image-uploader> -->
                    <el-upload class="upload-demo"  list-type="picture-card" action="http://192.168.1.109:8080/TicketSales/view/add.action" :on-preview="handlePreview" :on-remove="handleRemove" :on-success="successUrl" :file-list="fileList2" name="file" >
                        <el-button size="small" type="primary">点击上传</el-button>&nbsp;&nbsp;<span slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</span>
                    </el-upload>
                </el-form-item>
                <el-form-item label="业务人员" prop="staff" :rules="[{ required: true, message: '业务人员不能为空'}]">
                    <el-select v-model="form.staff" placeholder="请选择" @change="handleChange3">
                        <el-option v-for="item in staff" :key="item.id" :label="item.name" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所属省份" prop="province" :rules="[{ required: true, message: '所属省份不能为空'}]">
                    <el-select v-model="form.province" placeholder="请选择所属省份" @change="handleChange4">
                        <el-option v-for="item in province" :key="item.id" :label="item.id" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所属城市" prop="city" :rules="[{ required: true, message: '所属城市不能为空'}]">
                    <el-select v-model="form.city" placeholder="请选择所属城市" @change="handleChange5">
                        <el-option v-for="item in city" :key="item.id" :label="item.name" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="景区排序" prop="sort" :rules="[{ required: true, message: '景区排序不能为空'},{ type: 'number',min:0, message: '景区排序必须为不小于0数字值'}]">
                    <el-input v-model.number="form.sort" placeholder="优先级为0,1,2,3...的数字值,数值越小级别越高"></el-input>
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
import ImageUploader from '../upImgs/ImageUploader'  // 上传图片组件

export default {
    components: {    //地图
        mapDrag, ImageUploader
    },
    data: function() {
        return {
            val:'',
            fileList2: [{ name: 'food.jpeg', url:'http://imgsrc.baidu.com/imgad/pic/item/3801213fb80e7beca9004ec5252eb9389b506b38.jpg' }],
            currentPage: 1,           //当前页码数
            dragData: {   //地图
                lng: null,
                lat: null,
                address: null,
            },
            form: {
                lng:'',
                lat:'',
                id:'',
                name: '',
                type: '',
                level: '',
                remark: '',
                address: '',
                businessTime: '',
                phone: '',
                reminder: '',
                discount: '',
                busMessage: '',
                selfRoute: '',
                file: '',
                staff: '',
                staffId: '',
                staffName: '',
                province: '',
                city: '',
                sort: ''
            },
            id:[],
            staffId: '',
            staffName: '',
            viewType: [],
            viewLevel: [],
            staff: [],
            province: [],
            city: [],
            maxSize: 307200, // 最大限制 单位kb
            files:[]
        }
    },
    created() {
        this.getEdit();
        this.getAddress();
    },
    methods: {
        dragMap(data) {   //地图
            // console.log(data)
            this.dragData = {
                lng: data.position.lng,
                lat: data.position.lat,
                address: data.address,
            }
        },
        imgChange(files) {   //上传图片组件
            if (files) {
                console.log(files)
                console.log(files[0].name)
                this.form.file = files;
            }
        },


        handleRemove(file, fileList) {   //ele上传图片组件
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
            console.log(file.name);
            console.log(file.url); 
        },
        successUrl(response, file, fileList) {
            console.log(file);
            console.log(file.name);
            console.log(file.url); 
            this.files=file;
        },


        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        getEdit(){    //编辑下拉回显
             axios.get(common.apidomain + "/view/addUI.action").then((res) => {
                this.viewType = res.data.data.viewType;    //景区分类
                this.viewLevel = res.data.data.viewLevel;    //景区等级
                this.staff = res.data.data.staff;           //业务人员
                this.province = res.data.data.viewProvince;    //业务人员
                this.city = res.data.data.viewCity;           //业务人员
            })
        },
        getAddress() {
            axios.get(common.apidomain + "/view/editUI.action?id="+this.$route.query.id).then((res) => {
                this.form.id=res.data.data.id;
                this.form.name=res.data.data.name;
                this.form.remark=res.data.data.remark;
                this.form.address=res.data.data.address;
                this.form.businessTime=res.data.data.businessTime;
                this.form.phone=res.data.data.phone;
                this.form.reminder=res.data.data.reminder;
                this.form.discount=res.data.data.discount;
                this.form.busMessage=res.data.data.busMessage;
                this.form.selfRoute=res.data.data.selfRoute;
                this.form.lng=res.data.data.lng;
                this.form.lat=res.data.data.lat;
                this.form.sort=res.data.data.sort;
                this.staffId=res.data.data.staffId;
                this.staffName=res.data.data.staffName;
                this.form.type = res.data.data.type;    //景区分类
                this.form.level = res.data.data.level;    //景区等级
                this.form.staff = res.data.data.staffName;    //业务人员
                this.form.province = res.data.data.province;    //省份
                this.form.city = res.data.data.city;            //城市
            })
        },
        //修改数据
        handleChange1(value) {
            // console.log(value)
            this.form.type = value;
        },
        handleChange2(value) {
            this.form.level = value;
        },
        handleChange3(value) {
            this.form.staffId = value.id;
            this.form.staffName = value.name;
        },
        handleChange4(value) {
            this.form.province = value;
        },
        handleChange5(value) {           //业务人员
            this.form.city = value;
        },
        //修改数据提交
        onSubmit(formName) {
            console.log(1111)
            console.log(this.files)
            console.log(this.files.name)
            console.log(this.files.url)
            // 提交表单数据
            // console.log(this.form)
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    axios.post(common.apidomain + "/view/edit.action?id=" +this.form.id +  "&name="+this.form.name + "&type=" + this.form.type + "&level=" + this.form.level + "&remark=" + this.form.remark + "&address=" + this.form.address + "&businessTime=" + this.form.businessTime + "&phone=" + this.form.phone + "&reminder=" + this.form.reminder + "&discount=" + this.form.discount + "&busMessage=" + this.form.busMessage + "&selfRoute=" + this.form.selfRoute + "&file=" + this.form.file + "&staffId=" + this.form.staffId + "&staffName=" + this.form.staffName + "&province=" + this.form.province + "&city=" + this.form.city + "&sort=" + this.form.sort + "&lng=" + this.form.lng + "&lat=" + this.form.lat).then((res) => {
                        console.log(res.data)
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
                                message: '修改成功!~~',
                                type: 'success'
                            });
                            this.$router.push({ path: '/SceneryManage' });
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

.map {
    width: 100%;
    height: 60px;
    border: 1px solid #ccc;
}

.dizhi {
    line-height: 100%;
}

.m-part .mapbox {
    border: 1px solid #ccc;
    width: 100%;
    height: 300px;
    margin-bottom: 10px;
    float: left;
}
</style>
