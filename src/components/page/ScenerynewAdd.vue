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
            <el-form ref="form" :model="form" label-width="90px">
                <el-form-item label="景区名称" prop="name">
                    <el-input  v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="景区位置" prop="weizhi">
                    <div class="map">
                        <div>
                            <b>经度：</b>{{ dragData.lng }}
                            <b>纬度：</b>{{ dragData.lat }}
                            <div class="dizhi">
                                <b>详细地址:</b>{{ dragData.address }}
                            </div>
                            <el-input type="hidden"  v-model="form.lng"></el-input>
                            <el-input  type="hidden" v-model="form.lat"></el-input>
                        </div>
                    </div>
                    <div class="m-part">
                        <mapDrag @drag="dragMap" class="mapbox"></mapDrag>
                    </div>
                </el-form-item>
                <el-form-item label="景区分类" prop="type">
                    <el-select v-model="form.viewType" placeholder="请选择">
                        <el-option v-for="item in viewType" :key="item.id" :label="item.id" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="景区等级" prop="level">
                    <el-select v-model="form.viewLevel" placeholder="请选择">
                        <el-option v-for="item in viewLevel" :key="item.id" :label="item.id" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="景区简介" prop="remark">
                    <el-input type="textarea" v-model="form.viewId"></el-input>
                </el-form-item>
                <el-form-item label="地址" prop="address">
                    <el-input v-model="form.viewId"></el-input>
                </el-form-item>
                <el-form-item label="营业时间" prop="businessTime">
                    <label for="22"></label><el-input type="time" v-model="form.viewId"></el-input>
                    <el-input type="time" v-model="form.viewId"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="phone">
                    <el-input v-model="form.viewId"></el-input>
                </el-form-item>
                <el-form-item label="温馨提示" prop="reminer">
                    <el-input type="textarea"  v-model="form.viewId"></el-input>
                </el-form-item>
                <el-form-item label="优惠政策" prop="discount">
                    <el-input type="textarea"  v-model="form.viewId"></el-input>
                </el-form-item>
                <el-form-item label="公交线路" prop="busMessage">
                    <el-input type="textarea" v-model="form.viewId"></el-input>
                </el-form-item>
                <el-form-item label="自驾线路" prop="selfRoute">
                    <el-input type="textarea" v-model="form.viewId"></el-input>
                </el-form-item>
                <el-form-item label="上传照片" prop="file">
                    <!-- <el-input v-model="form.viewId"></el-input> -->
                </el-form-item>
                <el-form-item label="业务人员" prop="staffId">
                    <el-select v-model="form.staffId" placeholder="请选择">
                        <el-option v-for="item in staff" :key="item.id" :label="item.name" :value="item.name"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="景区排序" prop="sort">
                    <el-input v-model="form.viewId" placeholder="优先级为0,1,2,3...的数字值,数值越小级别越高"></el-input>
                </el-form-item>
                <el-form-item label="" prop="viewId">
                    <el-button type="primary">提 交</el-button>
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

export default {
    components: {    //地图
        mapDrag
    },
    data: function() {
        return {
            dragData: {   //地图
                lng: null,
                lat: null,
                address: null,
            },
            form: {
                viewId: '',
                viewType: '',
                viewLevel: '',
                staff: '',
                lng:'',
                lat:''
            },
            viewType: [],
            viewLevel: [],
            staff: [],
        }
    },
    created() {
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
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        getAddress() {
            axios.get(common.apidomain + "/view/addUI.action").then((res) => {
                // console.log(res.data);
                this.viewType = res.data.data.viewType;    //景区分类
                this.viewLevel = res.data.data.viewLevel;    //景区等级
                this.staff = res.data.data.staff;           //业务人员
            })
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
.dizhi{
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
