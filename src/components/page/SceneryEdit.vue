<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-picture-outline"></i> 景区商品管理设置</el-breadcrumb-item>
                <el-breadcrumb-item>修改</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="100px" enctype="multipart/form-data" method="post">
                <el-form-item label="景区名称" prop="name" :rules="[{ required: true, message: '景区名称不能为空'}]">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="景区位置" prop="names">
                    <div class="map">
                        <div>
                            <span style="color:red;">*</span>
                            <b>经度：</b>
                            <input type="text" name="lng" id="lng" value="0" required="required" v-model="this.lat" />
                            <span style="color:red;">*</span>
                            <b>纬度：</b>
                            <input type="text" name="lat" id="lat" value="0" required="required" v-model="this.lng" />
                        </div>
                    </div>
                    <div>
                        <b>详细地址:</b>
                        {{ dragData.address }}</div>
                    <div class="m-part">
                        <mapDrag @drag="dragMap" class="mapbox"></mapDrag>
                    </div>
                </el-form-item>
                <el-form-item label="景区分类" prop="type" :rules="[{ required: true, message: '景区分类不能为空'}]">
                    <el-select v-model="form.type" placeholder="请选择" @change="handleChange1">
                        <el-option v-for="item in type" :key="item.id" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="景区等级" prop="level" :rules="[{ required: true, message: '景区等级不能为空'}]">
                    <el-select v-model="form.level" placeholder="请选择" @change="handleChange2">
                        <el-option v-for="item in level" :key="item.id" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="业务人员" prop="staffName" :rules="[{ required: true, message: '业务人员不能为空'}]">
                    <el-select v-model="form.staffName" placeholder="请选择" @change="handleChange3">
                        <el-option v-for="item in staffName" :key="item.id" :label="item.name" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所属省份" prop="province" :rules="[{ required: true, message: '所属省份不能为空'}]">
                    <el-select v-model="form.province" placeholder="请选择" @change="handleChange4">
                        <el-option v-for="item in province" :key="item.id" :label="item.name" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所属城市" prop="city" :rules="[{ required: true, message: '所属城市不能为空'}]">
                    <el-select v-model="form.city" placeholder="请选择" @change="handleChange5">
                        <el-option v-for="item in city" :key="item.id" :label="item.name" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="景区排序" prop="sort" :rules="[{ required: true, message: '景区排序不能为空'}]">
                    <el-input v-model="form.sort" placeholder="请输入0,1,2...的数字值" type="number"></el-input>
                </el-form-item>
                <el-form-item label="营业时间" prop="businessTime" :rules="[{ required: true, message: '营业时间不能为空'}]">
                    <el-input v-model="form.businessTime"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="phone" :rules="[{ required: true, message: '电话不能为空'}]">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="景区简介" prop="remark" :rules="[{ required: true, message: '景区简介不能为空'}]">
                    <el-input type="textarea" v-model="form.remark"></el-input>
                </el-form-item>
                <el-form-item label="地    址" prop="address" :rules="[{ required: true, message: '地    址不能为空'}]">
                    <el-input type="textarea" v-model="form.address"></el-input>
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
                <el-form-item label="景区图片" prop="file">
                    <el-upload class="upload-demo" ref="upload" :action=urls :on-preview="handlePictureCardPreview" :on-remove="handleRemove"
                        :on-success="success" :data=lists list-type="picture-card" :file-list="fileList" :auto-upload="true"
                        accept=".jpg,.png,.jpeg,.gif,.bmp">
                        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                        <!-- <el-button style="margin-left: 10px;" size="small" type="success" >开始上传图片</el-button> -->
                        <div slot="tip" class="el-upload__tip">只能上传.jpg,.png,.jpeg,.gif,.bmp文件，且不超过500kb</div>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible" width=50%>
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>

                </el-form-item>
                <el-form-item label="" prop="viewId">
                    <!-- <el-button style="margin-left: 10px;"   type="primary" @click="submitUpload,onSubmit('form')">提 交</el-button> -->
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
    // import jQuery from '../common/jquery-3.2.1.js'  // "vue-loader": "^11.3.4",
    import mapDrag from '../common/mapDrag' // 地图组件



    export default {
        components: { //地图 
            mapDrag
        },

        data: function () {
            return {
                value3: [], //开始时间,结束时间
                dialogImageUrl: '',
                dialogVisible: false,
                //上传图片文件地址
                //urls: common.apidomain + "/hotProduct/addImages.action?random_no="+window.sessionStorage.getItem("random_no")+"&logic=0", //上传图片文件地址
                urls: common.apidomain + "/view/addImages.action", //上传图片文件地址
                fileList: [],
                currentPage: 1, //当前页码数
                dragData: { //地图
                    lng: null,
                    lat: null,
                    address: null,
                },
                form: {
                    name: '',
                    type: '',
                    level: '',
                    staffName: '',
                    province: '',
                    city: '',
                    sort: '',
                    businessTime: '',
                    phone: '',
                    remark: '',
                    address: '',
                    reminder: '',
                    discount: '',
                    busMessage: '',
                    selfRoute: '',
                    staffId: '',
                },
                type: [],
                level: [],
                staffName: [],
                province: [],
                city: [],
                lat: '',
                lng: '',
                lists: {
                    random_no: '',
                    logic: 0,
                }
            }
        },
        created() {
            this.getAddress();
            this.random_no();
            this.getEdit();

            // $('.el-upload-list__item-delete').hide();
        },
        methods: {
            dragMap(data) { //地图
                // console.log(data)
                // $("#lng").val(data.position.lng)
                // $("#lat").val(data.position.lat)
                this.lat = data.position.lat;
                this.lng = data.position.lng;
                this.dragData = {
                    lng: data.position.lng,
                    lat: data.position.lat,
                    address: data.address,
                }
            },
            random_no() {
                // window.sessionStorage.removeItem("random_no");
                window.sessionStorage["random_no"] = Math.random();
                this.lists.random_no = window.sessionStorage.getItem("random_no");
            },

            handleRemove(file, fileList) {
                console.log(file, fileList);
                axios.get(common.apidomain + "/view/deleteImages.action?random_no=" + this.lists.random_no +
                    "&deleteURL=" + file.name, ).then((res) => {
                    console.log(res);
                })
            },
            success(response, file, fileList) {
                $('.el-upload-list__item-delete').hide();
            },
            handlePreview(file) {
                console.log(file);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },

            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            getAddress() { //下拉显示
                axios.get(common.apidomain + "/view/addUI.action").then((res) => {
                    console.log(res.data);
                    this.type = res.data.data.viewType; //景区分类
                    this.level = res.data.data.viewLevel; //景区等级
                    this.staffName = res.data.data.staff; //业务人员
                    this.province = res.data.data.viewProvince; //省份
                    this.city = res.data.data.viewCity; //城市
                })
            },
            //修改回显
            getEdit() { //修改详情的回显 
                axios.get(common.apidomain + "/view/editUI.action?id=" + this.$route.query.id).then((res) => {
                    console.log(res.data)
                    this.lat = res.data.data.lat; //经度
                    this.lng = res.data.data.lng; //纬度
                    this.form = res.data.data;
                    this.fileList = res.data.data.pic_img; //图片的回显 
                    this.lists.random_no = res.data.data.random_no; //随机数 // window.sessionStorage["random_no"]
                })
            },

            //下拉框里选择到的数据   
            handleChange1(value) {
                // console.log(value)
                this.form.type = value;
            },
            handleChange2(value) {
                // console.log(value)
                this.form.level = value;
            },
            handleChange3(value) {
                // console.log(value)
                this.form.staffId = value.id;
            },
            handleChange4(value) {
                // console.log(value)
                this.form.province = value;
            },
            handleChange5(value) {
                // console.log(value)
                this.form.city = value;
            },
            //新增
            onSubmit(formName) {
                // 提交表单数据
                console.log(this.form)

                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post(common.apidomain + "/view/addUpdate.action?name=" + this.form.name +
                            "&type=" + this.form.type + "&level=" + this.form.level +
                            "&staffId=" + this.form.staffId + "&province=" + this.form.province +
                            "&city=" + this.form.city + "&sort=" + this.form.sort +
                            "&businessTime=" + this.form.businessTime + "&phone=" + this.form.phone +
                            "&remark=" + this.form.remark + "&address=" + this.form.address +
                            "&reminder=" + this.form.reminder + "&discount=" + this.form.discount +
                            "&busMessage=" + this.form.busMessage + "&selfRoute=" + this.form.selfRoute +
                            "&lat=" + this.lat + "&lng=" + this.lng + "&random_no=" +
                            this.lists.random_no).then((res) => {
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
                                    path: './SceneryManage',
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
        height: 40px;
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

