<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-message"></i> 景区管理设置</el-breadcrumb-item>
                <el-breadcrumb-item>新增</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <form id="forms" action=""  method="post" enctype="multipart/form-data" >
            <label for="name">景区名称:</label>
            <input type="text" name="name" id="name" required="required"/>
            <br>
            <label for="dizhi">景区位置:</label> <el-tag type="success">[★小贴士★]输入景区名称或拖动地图以选择景区位置~</el-tag>
                <div class="map">
                    <div>
                        <b>经度：</b><input type="text" name="lng"  id="lng" disabled required="required"/><b>纬度：</b><input type="text" name="lat" id="lat" disabled required="required"/>
                    </div>
                </div>
                        <div><b>详细地址:</b>{{ dragData.address }}</div>
                <div class="m-part">
                    <mapDrag @drag="dragMap" class="mapbox"></mapDrag>
                </div>
            <label for="type">景区分类:</label>
            <select id="type" name="type">
            <!-- <option>山西</option> -->
            </select>
            <br>
            <label for="level">景区等级:</label>
            <select id="level" name="level">
            <option>山西</option>
            </select>
            <br>
            <label for="remark">景区简介:</label>
            <textarea id="remark" cols="50" rows="4" name="remark" placeholder="在这里输入内容..." required="required"></textarea>
            <br>
            <label for="address">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址:</label>
            <textarea id="address" cols="50" rows="4" name="address" placeholder="在这里输入内容..." required="required"></textarea>
            <br>
            <label for="businessTime">营业时间:</label>
            <input  type="text" name="businessTime" id="businessTime" placeholder="格式为(9:00-17:00)" required="required"/>
            <br>
            <label for="phone">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话:</label>
            <input type="number" name="phone" id="phone" required="required"/>
            <br>
            <label for="reminder">温馨提示:</label>
            <textarea cols="50" rows="4" name="reminder" placeholder="在这里输入内容..." ></textarea>
            <br>
            <label for="discount">优惠政策:</label>
            <textarea id="discount" cols="50" rows="4" name="discount" placeholder="在这里输入内容..." required="required"></textarea>
            <br>
            <label for="busMessage">公交线路:</label>
            <textarea cols="50" rows="4" name="busMessage" placeholder="在这里输入内容..." ></textarea>
            <br>
            <label for="selfRoute">自驾线路:</label>
            <textarea cols="50" rows="4" name="selfRoute" placeholder="在这里输入内容..." ></textarea>
            <br>
            <hr>
            <label for="file">上传图片:</label>
            <input type="file" name="file" multiple="multiple" required="required" id="file"/>
            <br>
            <label for="staffId">业务人员:</label>
            <!-- staffId  staffName -->
            <select id="staff" name="staffId">
            <!-- <option>山西</option> -->
            </select>
            <br>
            <label for="province">所属省份:</label>
            <select id="province" name="province">
            <option>山西</option>
            </select>
            <br>
            <label for="city">所属城市:</label>
            <select id="city" name="city">
            <option>山西</option>
            </select>
            <br>
            <label for="sort">景区排序:</label>
            <input id="sort" type="number" name="sort" required="required" placeholder="请输入0,1,2...的数字值"/>
            <br>
            <input type="button" value="提 交"  id="button" @click="button">
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import common from '../../kits/commonapi.js';   //公共域名文件
import imgsUpload from '../../kits/imgUp.js';   //
import mapDrag from '../common/mapDrag'  // "vue-loader": "^11.3.4",
// import jQuery from '../common/jquery-3.2.1.js'  // "vue-loader": "^11.3.4",
import $ from 'jquery'



export default {
    components: {    //地图
        mapDrag
    },
    data: function() {
        return {
            power:false,               //是否显示增删改的按钮权限
            dialogImageUrl: '',
            dialogVisible: false,
            // urls:"http://192.168.1.200:8080/interface/view/add.action",   //上传图片文件地址
            urls:common.apidomain+"/view/add.action",   //上传图片文件地址
            // fileList: [{ name: '图片11.jpeg', url:'blob:http://localhost:8080/3a8f19d4-ac5b-4cb9-9368-1936e6c71ff4'},{ name: '图片11.jpeg', url:'blob:http://localhost:8080/2f73418c-064a-4054-887c-c4a1552e2eb3'}],
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
        // this.getAddress();
        this.map();
        // this.button();
        this.getPowerId()   //根据用户权限加载相应的用户左侧菜单栏

    },
    methods: {
       getPowerId(){
            var powerId = JSON.parse(window.sessionStorage.getItem("powerId"));
                if(powerId==0){
                    this.power=true;
                }else if(powerId==1){
                    this.power=false;
                }else{  
                    this.$router.push({path:'/login'});
                }
        },
        map(){
            var type = '', level = '', staff = '', province = '', city = '';
                $(function () {
                    $.ajax({
                    type: "get",
                    url:common.apidomain+"/view/addUI.action",
                    dataType: "json",
                    success: function (data) {
                        // console.log(data)
                        // console.log(data.data.viewType)
                        data.data.viewType.forEach(function (el) {  //景区分类
                        type +=
                            '<option>' + el + '</option>'
                        }, this);
                        $("#type").html(type);

                        data.data.viewLevel.forEach(function (el) {  //景区等级
                        level +=
                            '<option>' + el + '</option>'
                        }, this);
                        $("#level").html(level);

                        data.data.staff.forEach(function (el) {  //业务人员
                        //   console.log(el)
                        staff +=
                            '<option value=' + el.id + '>' + el.name + '</option>'
                        }, this);
                        $("#staff").html(staff);

                        data.data.viewProvince.forEach(function (el) {    //省份
                        province +=
                            '<option>' + el + '</option>'
                        }, this);
                        $("#province").html(province);
                        data.data.viewCity.forEach(function (el) {      //城市
                        city +=
                            '<option>' + el + '</option>'
                        }, this);
                        $("#city").html(city);

                    }
                    })
                })    
        },
        button(){
            // console.log("开始提交")
            if($('#name').val()==''){
            this.$message({showClose: true,message: '景区名称不能有空',type: 'warning'});
            }else if($('#remark').val()==''){
            this.$message({showClose: true,message: '景区简介不能有空',type: 'warning'});
            }else if($('#address').val()==''){
            this.$message({showClose: true,message: '地址不能有空',type: 'warning'});
            }else if($('#businessTime').val()==''){
            this.$message({showClose: true,message: '营业时间不能有空',type: 'warning'});
            }else if($('#phone').val()==''){
            this.$message({showClose: true,message: '电话不能有空',type: 'warning'});
            }else if($('#discount').val()==''){
            this.$message({showClose: true,message: '优惠政策不能有空',type: 'warning'});
            }else if($('#sort').val()==''){
            this.$message({showClose: true,message: '景区排序不能有空',type: 'warning'});
            }
            else{
                var form = new FormData(document.getElementById("forms"));
             $.ajax({
                url:common.apidomain+"/view/add.action",
                type:"post",
                data:form,
                processData:false,
                contentType:false,
                success:function(data){
                    // console.log(data);
                },
                error:function(e){
                    console.log(e);
                }
            });        
            this.$message({showClose: true,message: '恭喜你，新增成功~,请点击最后一页查看新增数据~',type: 'success'});
            this.$router.push({ path: './SceneryManage' });
            }
        },


        dragMap(data) {   //地图
            // console.log(data)
            $("#lng").val(data.position.lng)
            $("#lat").val(data.position.lat)
            this.dragData = {
                lng: data.position.lng,
                lat: data.position.lat,
                address: data.address,
            }
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
    height: 33px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
}

.m-part .mapbox {
    border: 1px solid #ccc;
    width: 100%;
    height: 300px;
    margin-bottom: 10px;
    float: left;
}
label{
    width: 100px;
}
#button{
    width: 90px;
    background-color: #1FA0FF;
    height: 35px;
    color:#fff;
    border-radius: 5px;
    border: none;
    margin-top: 5px;
    cursor:pointer;
}
#forms{
    width: 60%;
}
input,select{
    width: 300px;
    height: 25px;
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>
