<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-picture-outline"></i> 特价商品管理设置</el-breadcrumb-item>
                <el-breadcrumb-item>修改</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="100px" enctype="multipart/form-data" method="post">
                <el-form-item label="景区名称" prop="viewName" :rules="[{ required: true, message: '景区名称不能为空'}]">
                    <el-input v-model="form.viewName"></el-input>
                </el-form-item>
                <el-form-item label="产品名称" prop="name" :rules="[{ required: true, message: '产品名称不能为空'}]">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="原价(元)" prop="salePrice" :rules="[{ required: true, message: '原价不能为空'}]">
                    <el-input type="number" v-model="form.salePrice"></el-input>
                </el-form-item>
                <el-form-item label="销售价(元)" prop="marketPrice" :rules="[{ required: true, message: '销售价不能为空'}]">
                    <el-input type="number" v-model="form.marketPrice"></el-input>
                </el-form-item>
                <el-form-item label="开始/结束日期" prop="time">
                    <div class="block">
                        <el-date-picker v-model="birthday" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
                            @change="dates">
                            <!--@change="(date) => {this.birthday = date}"-->
                        </el-date-picker>
                    </div>
                </el-form-item>
                <el-form-item label="总数量" prop="num" :rules="[{ required: true, message: '总数量不能为空'}]">
                    <el-input type="number" v-model="form.num"></el-input>
                </el-form-item>
                <el-form-item label="入园须知" prop="notice" :rules="[{ required: true, message: '入园须知不能为空'}]">
                    <el-input type="textarea" v-model="form.notice"></el-input>
                </el-form-item>
                <el-form-item label="费用包含" prop="costInside" :rules="[{ required: true, message: '费用包含不能为空'}]">
                    <el-input type="textarea" v-model="form.costInside"></el-input>
                </el-form-item>
                <el-form-item label="费用不包含" prop="costOutside" :rules="[{ required: true, message: '费用不包含不能为空'}]">
                    <el-input type="textarea" v-model="form.costOutside"></el-input>
                </el-form-item>
                <el-form-item label="备注" prop="remark" :rules="[{ required: true, message: '备注不能为空'}]">
                    <el-input type="textarea" v-model="form.remark"></el-input>
                </el-form-item>
                <el-form-item label="产品介绍" prop="introduce" :rules="[{ required: true, message: '产品介绍不能为空'}]">
                    <el-input type="textarea" v-model="form.introduce"></el-input>
                </el-form-item>
                <el-form-item label="入园方式" prop="method" :rules="[{ required: true, message: '入园方式不能为空'}]">
                    <el-input type="textarea" v-model="form.method"></el-input>
                </el-form-item>

                <el-form-item label="上传照片" prop="file">
                    <el-upload class="upload-demo" ref="upload" :action=urls :on-preview="handlePictureCardPreview" :on-remove="handleRemove"
                        :before-upload="handlBefore" :data=lists list-type="picture-card" :file-list="fileList" :auto-upload="true"
                        accept=".jpg,.png,.jpeg,.gif,.bmp">
                        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                        <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">开始上传图片</el-button> -->
                        <div slot="tip" class="el-upload__tip">只能上传.jpg,.png,.jpeg,.gif,.bmp文件，且不超过500kb</div>
                    </el-upload>

                    <el-dialog :visible.sync="dialogVisible" width=50%>
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>

                </el-form-item>
                <el-form-item label="" prop="viewId">
                    <!--<el-button style="margin-left: 10px;"   type="primary" @click="submitUpload,onSubmit('form')">提 交</el-button> -->
                    <el-button style="margin-left: 10px;" type="primary" @click="onSubmit('form')">提 交</el-button>
                    <el-button @click="resetForm('form')">重 置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import common from '../../kits/commonapi.js'; //公共域名文件
    // import mapDrag from '../common/mapDrag'  // "vue-loader": "^11.3.4",
    // import jQuery from '../common/jquery-3.2.1.js'  // "vue-loader": "^11.3.4",



    export default {
        data: function () {
            return {
                // value3: [], //开始时间,结束时间
                dialogImageUrl: '',
                dialogVisible: false,
                //上传图片文件地址
                //urls: common.apidomain + "/hotProduct/addImages.action?random_no="+window.sessionStorage.getItem("random_no")+"&logic=0", //上传图片文件地址
                urls: common.apidomain + "/hotProduct/addImages.action",
                fileList: [],
                currentPage: 1, //当前页码数
                dragData: { //地图
                    lng: null,
                    lat: null,
                    address: null,
                },
                form: {
                    viewName: '',
                    name: '',
                    salePrice: '',
                    marketPrice: '',
                    // time: '',
                    num: '',
                    notice: '',
                    costInside: '',
                    costOutside: '',
                    remark: '',
                    introduce: '',
                    method: '',
                },
                startTime: '',
                endTime: '',
                // viewType: [],
                // viewLevel: [],
                // staff: [],
                // province: [],
                // city: [],
                // maxSize: 307200, // 最大限制 单位kb
                // files: [],
                lists: {
                    random_no: '',
                    logic: 0,
                },
                birthday: [new Date(), new Date()],
            }
        },
        created() {
            this.getAddress();
            // this.random_no();
            this.getEdit();

        },
        methods: {

            submitUpload() {
                this.$refs.upload.submit();
                // console.log(window.sessionStorage.getItem("random_no"));
            },
            random_no() {
                // window.sessionStorage.removeItem("random_no");
                // window.sessionStorage["random_no"] = this.random_nos;
                this.lists.random_no = window.sessionStorage.getItem("random_no");
                // alert(this.lists.random_no)

            },
            handleRemove(file, fileList) {//删除图片
                axios.get(common.apidomain + "/hotProduct/deleteImages.action?random_no="+this.lists.random_no+"&deleteURL="+file.name,).then((res) => {
                    console.log(res);
                })
            },
            handlePreview(file) {
                console.log(file);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            //开始/结束日期
            dates(val) {
                console.log(val);
                // console.log(this);
                this.startTime = new Date(val[0]).getTime();
                this.endTime = new Date(val[1]).getTime();
            },

            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            handlBefore(file) {    
                console.log(file);
                // this.lists.random_no = window.sessionStorage.getItem("random_no");
                //     console.log(res);
                // })
            },
            //修改回显
            getEdit() { //修改详情的回显
                axios.get(common.apidomain + "/hotProduct/editUI.action?id=" + this.$route.query.id).then((res) => {
                    // console.log(res.data.data)
                    this.startTime=res.data.data.start;
                    this.endTime=res.data.data.end;
                    // console.log(res.data.data.random_no)
                    this.fileList = res.data.data.images; //图片的回显
                    this.lists.random_no = res.data.data.random_no; //随机数
                   
                    //  window.sessionStorage["random_no"] = res.data.data.random_no;
                    // 年月日时分秒的转化
                    this.birthday[0] = new Date(res.data.data.startTime.slice(0, 4), res.data.data.startTime.slice(
                        4, 6) - 1, res.data.data.startTime.slice(6, 8), res.data.data.startTime.slice(8,
                        10), res.data.data.startTime.slice(10, 12), res.data.data.startTime.slice(12,
                        14))
                    this.birthday[1] = new Date(res.data.data.endTime.slice(0, 4), res.data.data.endTime.slice(
                            4, 6) - 1, res.data.data.endTime.slice(6, 8), res.data.data.endTime.slice(8, 10),
                        res.data.data.endTime.slice(10, 12), res.data.data.endTime.slice(12, 14))

                    this.form = res.data.data;
                })
            },
            getAddress() {
                axios.get(common.apidomain + "/view/addUI.action").then((res) => {
                    // console.log(res.data);
                    this.viewType = res.data.data.viewType; //景区分类
                    this.viewLevel = res.data.data.viewLevel; //景区等级
                    this.staff = res.data.data.staff; //业务人员
                    this.province = res.data.data.viewProvince; //省份
                    this.city = res.data.data.viewCity; //城市
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
            handleChange5(value) { //业务人员
                this.form.city = value;
            },
            //修改提交
            onSubmit(formName) {
                // 提交表单数据
                console.log(this.form)
                console.log(this.startTime)
                console.log(this.endTime)

                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post(common.apidomain + "/hotProduct/add.action?name=" + this.form.name +
                            "&viewName=" + this.form.viewName + "&salePrice=" + this.form.salePrice +
                            "&marketPrice=" + this.form.marketPrice + "&num=" + this.form.num + "&notice=" +
                            this.form.notice + "&costInside=" + this.form.costInside + "&costOutside=" +
                            this.form.costOutside + "&remark=" + this.form.remark + "&introduce=" + this.form
                            .introduce + "&method=" + this.form.method + "&startTime=" + this.startTime +
                            "&endTime=" + this.endTime + "&random_no=" + this.lists.random_no+ "&logic=" + this.lists.logic).then((res) => {
                            console.log(res.data)
                            // console.log(res.data.data.currPage)
                            // this.tableData = res.data.data;   //表格数据
                            // this.currentPage = res.data.data.currPage;
                            // this.codesID = res.data.code;
                            if (this.codesID === 0) { //参数错误
                                this.$message({
                                    message: "参数错误,请重试~",
                                    type: 'warning'
                                });
                                this.getimgs();
                                return;
                            } else {
                                this.$message({
                                    message: '添加成功!,请点击最后一页查看新增数据~~',
                                    type: 'success'
                                });
                                this.$router.push({
                                    path: './Sparpreis',
                                    params: {
                                        currentPage: this.currentPage
                                    }
                                });
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

