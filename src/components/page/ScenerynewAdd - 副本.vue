<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-message"></i> 景区管理设置</el-breadcrumb-item>
                <el-breadcrumb-item>新增</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="90px" enctype="multipart/form-data"  method="post" >
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
                    <!-- :http-request="haha" -->
                    
                    <el-upload class="upload-demo"  accept=".jpg,.png,.jpeg,.gif,.bmp" ref="upload"  multiple
                    :action=urls :data="form"     type="drag" :thumbnail-mode="false"  name="file"
                    :on-preview="handlePreview"  :on-success="handleSuccess" :on-error="handlEerror" :on-change="handlChange" :before-upload="handlBefore"   
                    :file-list="fileList" :auto-upload="false" list-type="picture-card">
                    <el-button slot="trigger" size="small" type="primary">选取图片文件</el-button>
                    <el-form-item>
                    <!-- <el-button style="margin-left: 10px;" icon="upload" size="small" type="success" @click="submitUpload">开始上传</el-button> -->
                    </el-form-item>
                    <div slot="tip" class="el-upload__tip">只能上传.jpg,.png,.jpeg,.gif,.bmp格式的文件</div>
                    </el-upload>
                    <el-dialog v-model="dialogVisible" size="tiny">
                    <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                    
                </el-form-item>

                <upload 
                :action="upload.action"
                :headers="upload.headers"
                :data="upload.data"
                :name="upload.name"
                :limit="upload.limit"
                :accepts="upload.accepts"
                :multiple="upload.multiple"
                :queue="upload.queue"
                @change="upload.change"
                @progress="upload.progress"
                @success="upload.success"
                @error="upload.error">
                <button class="select">上传图片</button>
            </upload>

                <upload 
                ref="upload"
                :action="upload2.action"
                :headers="upload2.headers"
                :data="upload2.data"
                :auto="upload2.auto"
                :name="upload2.name"
                :limit="upload2.limit"
                :accepts="upload2.accepts"
                :multiple="upload2.multiple"
                :chunked="upload2.chunked"
                :queue="upload2.queue"
                @progress="upload2.progress"
                @success="upload2.success"
                @error="upload2.error">
                <button class="select">选择zip压缩包</button>
            </upload>
                <div>{{upload2.result}}</div>
    <button @click="submit" class="select">立即上传</button>

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
                    <el-input  v-model.number="form.sort" placeholder="优先级为0,1,2,3...的数字值,数值越小级别越高"></el-input>
                </el-form-item>
                <el-form-item label="" prop="viewId">
                    <!-- <el-button type="primary" @click="onSubmit('form')">提 交</el-button> -->
                    <!-- <el-button style="margin-left: 10px;"   type="primary" @click="submitUpload,onSubmit('form')">提 交</el-button> -->
                    <el-button style="margin-left: 10px;"    type="primary" @click="submitUpload">提 交</el-button>
                    <!-- <el-input style="margin-left: 10px;"   type="submit" value="提交"  @click="submitUpload">提 交</el-input> -->
                    <el-button @click="resetForm('form')">重 置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import common from '../../kits/commonapi.js';   //公共域名文件
import mapDrag from '../common/mapDrag'  // "vue-loader": "^11.3.4",
import upload from '../common/upload'  // "vue-loader": "^11.3.4",
// import upload from './upload.vue'



export default {
    components: {    //地图
        mapDrag,upload
    },
    data: function() {
        return {
             upload:{
                action:"http://192.168.1.109:8080/TicketSales/view/add.action",
                headers:{
                    "Accept":"application/json; charset=utf-8"
                },
                name:"file",
                limit:10, //10MB
                accepts:["image/jpeg","image/png","image/gif"],
                multiple:true,
                queue:true,
                // 选择文件后
                change:(files)=>{
                    console.log(files);
                },
               // 上传文件进度
                progress:(percent)=>{
                    console.log(percent)
                },
                // 成功上传一次文件
                success:(result)=>{
                    this.upload.result=result
                    console.log(JSON.parse(result));
                },
                // 错误
                error:(type,result)=>{
                    if(type=="limit"){
                        for (let file of result) {
                          console.log("超过上传上限",file["type"],file["name"],(file["size"]/1024/1024).toFixed(2)+"MB")  
                        }
                    }
                    if(type=="empty"){
                        alert("请选择文件")
                    }
                    if(type=="action"){
                        alert("没有指定上传接口api")
                    }
                    if(type=="server"){
                         alert("服务器繁忙")
                    }
                },
                result:""
            },
             upload2:{
                action:"http://192.168.1.109:8080/TicketSales/view/add.action",
                data:{
                    "time":Date.now(),
                },
                chunked:true,
                auto:false,
                accepts:["application/zip"],
                multiple:true,
                queue:true,
               // 当前上传文件进度
                progress:(percent)=>{
                    console.log(percent)
                },
                // 成功上传一次文件
                success:(result)=>{
                    this.upload2.result='/data/'+result
                    console.log(JSON.parse(result));
                },
                // 错误
                error:(type,result)=>{
                    if(type=="limit"){
                        for (let file of result) {
                          console.log("超过上传上限",file["type"],file["name"],(file["size"]/1024/1024).toFixed(2)+"MB")  
                        }
                    }
                    if(type=="empty"){
                        alert("请选择文件")
                    }
                    if(type=="action"){
                        alert("没有指定上传接口api")
                    }
                    if(type=="server"){
                        //  alert("服务器繁忙")
                    }
                },
                result:""
            },





            dialogImageUrl: '',
            dialogVisible: false,
            urls:"http://192.168.1.200:8080/interface/view/add.action",   //上传图片文件地址
            // urls:common.apidomain+"/view/add.action",   //上传图片文件地址
            // fileList: [{ name: '图片11.jpeg', url:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
            fileList: [],
            currentPage: 1,           //当前页码数
            dragData: {               //地图
                lng: null,
                lat: null,
                address: null,
            },
            form: {
                lng:'',
                lat:'',
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
                sort: '',
                fileList:[]
                    // "element-ui": "1.3.1",

            },
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
        this.getAddress();
    },
    methods: {

          // 手动上传
        submit(){
            // ...可以做一些逻辑判断
            this.$refs.upload.submit()
        },  




        dragMap(data) {   //地图
            // console.log(data)
            this.dragData = {
                lng: data.position.lng,
                lat: data.position.lat,
                address: data.address,
            }
        },

            //ele上传图片组件
        submitUpload() {            
            console.log("点击提交了")
            // console.log(this.form)
            // console.log(this.form.file)
            this.$refs.upload.submit();
        },
        handlePreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
            console.log(file);
            console.log(file.name);
            console.log(file.url); 
        },
        handleSuccess(response, file, fileList) {
            console.log("上传成功的回调");
            console.log(response);
            console.log(file);
            console.log(fileList);
            this.form.fileList=fileList;
        },
        handlEerror(err, file, fileList) {
            console.log(err);
            console.log(file);
            console.log(fileList);
        },
        handlChange(file, fileList) {
            // console.log("图片变化的函数");
            // console.log(file);
            // console.log(fileList);
            this.form.lng=this.dragData.lng;
            this.form.lat=this.dragData.lat;
        },
        handlBefore(file) {
            // console.log("图片上传之前");
            // console.log(file);
        },
        haha() {
            console.log("覆盖默认的上传行为，可以自定义上传的实现");
            // console.log(file);
            // this.submitUpload();
        },


        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        getAddress() {
            axios.get(common.apidomain + "/view/addUI.action").then((res) => {
                // console.log(res.data);
                this.viewType = res.data.data.viewType;    //景区分类
                this.viewLevel = res.data.data.viewLevel;    //景区等级
                this.staff = res.data.data.staff;           //业务人员
                this.province = res.data.data.viewProvince;    //省份
                this.city = res.data.data.viewCity;           //城市
            })
        },
        //新增数据
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
        //新增
        onSubmit(formName) {
            console.log(1111)
            // console.log(this.files)
            // console.log(this.files.name)
            // 提交表单数据
            console.log(this.form)
            console.log(this.form.file)
            
            // this.$refs[formName].validate((valid) => {
            //     if (valid) {
            //         axios.post(common.apidomain + "/view/add.action?name=" + this.form.name + "&type=" + this.form.type + "&level=" + this.form.level + "&remark=" + this.form.remark + "&address=" + this.form.address + "&businessTime=" + this.form.businessTime + "&phone=" + this.form.phone + "&reminder=" + this.form.reminder + "&discount=" + this.form.discount + "&busMessage=" + this.form.busMessage + "&selfRoute=" + this.form.selfRoute + "&file=" + this.form.file + "&staffId=" + this.form.staff.id + "&staffName=" + this.form.staff.name + "&province=" + this.form.province + "&city=" + this.form.city + "&sort=" + this.form.sort + "&lng=" + this.dragData.lng + "&lat=" + this.dragData.lat).then((res) => {
            //             // console.log(res.data)
            //             // console.log(res.data.data.currPage)
            //             // this.tableData = res.data.data;   //表格数据
            //             this.currentPage = res.data.data.currPage;
            //             this.codesID = res.data.code;
            //             if (this.codesID === 0) {    //参数错误
            //                 this.$message({
            //                     message: "参数错误,请重试~",
            //                     type: 'warning'
            //                 });
            //                 this.getimgs();
            //                 return;
            //             } else {
            //                 this.$message({
            //                     message: '添加成功!,请点击最后一页查看新增数据~~',
            //                     type: 'success'
            //                 });
            //                 this.$router.push({ path: './SceneryManage', params: { currentPage: this.currentPage } });
            //             }
            //         })
            //     } else {
            //         this.$message({
            //             message: '参数错误,请检查后重新输入~~',
            //             type: 'warning'
            //         });
            //         return false;
            //     }
            // });
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
