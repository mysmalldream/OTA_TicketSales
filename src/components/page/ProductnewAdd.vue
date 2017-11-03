<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-time"></i> 产品信息管理设置</el-breadcrumb-item>
                <el-breadcrumb-item>新增</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="产品名称" prop="name" :rules="[{ required: true, message: '票名不能为空'}]">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="所属景区" prop="viewName" :rules="[{ required: true, message: '所属景区不能为空'}]">
                    <el-select v-model="form.viewName" placeholder="请选择" @change="handleChange1">
                        <el-option v-for="item in view" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="供应商" prop="supplierName" :rules="[{ required: true, message: '供应商不能为空'}]">
                    <el-select v-model="form.supplierName" placeholder="请选择" @change="handleChange2">
                        <el-option v-for="item in supplier" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="结算价" prop="endPrice" :rules="[{ required: true, message: '结算价不能为空'}]">
                    <el-input type="number" v-model="form.endPrice"></el-input>
                </el-form-item>
                <el-form-item label="门市价" prop="marketPrice" :rules="[{ required: true, message: '门市价不能为空'}]">
                    <el-input type="number" v-model="form.marketPrice"></el-input>
                </el-form-item>
                <el-form-item label="是否销售" prop="isSale">
                    <el-switch v-model="form.isSale" on-text="是" off-text="否" on-color="#13ce66" off-color="#ff4949" on-value="是" off-value="否" @change="switch1">
                    </el-switch>
                </el-form-item>
                <el-form-item label="门票类型" prop="type" :rules="[{ required: true, message: '门票类型不能为空'}]">
                    <el-select v-model="form.type" placeholder="请选择" @change="handleChange3">
                        <el-option v-for="item in typeList" :key="item.id" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="门票包含张数" prop="num" :rules="[{ required: true, message: '门票包含张数不能为空'}]">
                    <el-input type="number" v-model="form.num"></el-input>
                </el-form-item>
                <el-form-item label="票型" prop="ticketType" :rules="[{ required: true, message: '票型不能为空'}]">
                    <el-select v-model="form.ticketType" placeholder="请选择" @change="handleChange4">
                        <el-option v-for="item in ticketType" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="开始日期" prop="startTime" :rules="[{ required: true, message: '起止日期不能为空'}]">
                    <el-input type="date" v-model="form.startTime"></el-input>
                </el-form-item>
                <el-form-item label="结束日期" prop="endTime" :rules="[{ required: true, message: '起止日期不能为空'}]">
                    <el-input type="date" v-model="form.endTime"></el-input>
                </el-form-item>
                <el-form-item label="当天可售数量" prop="dailySale" :rules="[{ required: true, message: '当天可售数量不能为空'}]">
                    <el-input type="number" v-model="form.dailySale"></el-input>
                </el-form-item>
                <el-form-item label="提前购买(小时)" prop="orderTime" :rules="[{ required: true, message: '提前购买小时数不能为空'}]">
                    <el-input type="number" v-model="form.orderTime"></el-input>
                </el-form-item>
                <el-form-item label="入园方式" prop="method" :rules="[{ required: true, message: '入园方式不能为空'}]">
                    <el-input v-model="form.method"></el-input>
                </el-form-item>
                <el-form-item label="是否可退" prop="isCancel">
                    <el-switch v-model="form.isCancel" on-text="是" off-text="否" on-color="#13ce66" off-color="#ff4949" on-value="是" off-value="否" @change="switch2">
                    </el-switch>
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
                <el-form-item label="使用类别开关" prop="userType">
                    <el-switch v-model="form.userType" on-text="开启" off-text="禁用" on-color="#13ce66" off-color="#ff4949" on-value="1" off-value="0" @change="switch3">
                    </el-switch>
                </el-form-item>
                <el-form-item label="优先级类别" prop="priorityType" :rules="[{ required: true, message: '优先级类别不能为空'}]">
                    <el-select v-model="form.priorityType" placeholder="请选择" @change="handleChange5">
                        <el-option v-for="item in priority" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <!-- <el-form-item label="优先级" prop="priorityId">
                                <el-select v-model="form.priorityId"  disabled placeholder="请选择" @change="handleChange3">
                                    <el-option v-for="item in priority" :key="item.priority" :label="item.priority" :value="item.priority"></el-option>
                                </el-select>
                     </el-form-item> -->
                <el-form-item label="分销商列表" prop="customName" :rules="[{ required: true, message: '分销商列表不能为空'}]">
                    <el-select v-model="form.customName"  placeholder="请选择" @change="handleChange6">
                        <el-option v-for="item in custom" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>
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
import axios from 'axios';
import common from '../../kits/commonapi.js';   //公共域名文件
// var str = "";

export default {
    data: function() {
        return {
            power:false,               //是否显示增删改的按钮权限
            name: '',
            currentPage: 1,           //当前页码数
            form: {
                name: '',
                viewName: '',
                supplierName: '',
                endPrice: '',
                marketPrice: '',
                isSale: '',
                type: '',
                ticketType: '',
                startTime: '',
                endTime: '',
                dailySale: '',
                num: '',
                orderTime: '',
                method: '',
                isCancel: '',
                notice: '',
                costInside: '',
                costOutside: '',
                remark: '',
                userType: '',
                sort: '',
                priorityType: '',
                viewId: '',
                priorityId: '',
                supplierId: '',
                customName: '',
                customId:'',
            },
            view: [],
            supplier: [],
            typeList: [],
            ticketType: [],
            priority: [],
            custom: [],
            ticketId: '',
            customName: [],
            customer: '',
            customId: '',
        }
    },
    created() {
        this.getAddress();
        this.getPowerId()   //根据用户权限加载相应的用户左侧菜单栏
    },
    methods: {
        getPowerId(){
            var powerId = JSON.parse(window.sessionStorage.getItem("powerId"));
                if(powerId==0){
                    this.power=true;
                }else if(powerId==1){
                    this.power=false;
                }else if(powerId==2){  
                    this.power=true;
                }else{
                    this.$router.push({path:'/login'});
                }
        },
        switch1(val) {
            // console.log("是否销售 :" + val)
        },
        switch2(val) {
            // console.log("是否可退 :" + val)
        },
        switch3(val) {
            // console.log("使用类别开关 :" + val)
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        getAddress() {
            axios.get(common.apidomain + "/product/addUI.action").then((res) => {
                console.log(res.data);
                console.log(res.data.data.ticketType);
                this.view = res.data.data.view;    //所属景区
                this.supplier = res.data.data.supplier;    //供应商
                this.typeList = res.data.data.typeList;    //门票类型
                this.ticketType = res.data.data.ticketType;    //票型
                this.priority = res.data.data.priority;           //优先级类别
                this.custom = res.data.data.custom;    //分销商列表
            })
        },
        //新增数据
        handleChange1(value) {
            // console.log(value)
            this.form.viewId = value;
        },
        handleChange2(value) {
            this.form.supplierId = value;
        },
        handleChange3(value) {
            this.ticketId = value;
        },
        handleChange4(value) {
            console.log(value)
            this.form.ticketType = value;
        },
        handleChange5(value) {         //
            // console.log(value)
            this.form.priorityId = value;
        },
        handleChange6(value) {           //
            console.log(value)
            this.form.customId = value;
            // var strId = "";
            // var strName = "";
            // value.forEach(function(values, index, array) {
            //     strId += values.id + ',';
            //     strName += values.name + ',';
            // });
            // console.log(strId)
            // console.log(strName)
            // this.customId = strId; 
            // this.customer = strName; 
            // console.log(this.customId)
            
        },
        //新增提交
        onSubmit(formName) {
            console.log(this.form)
            // console.log(this.customer)
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    axios.post(common.apidomain + "/product/add.action?name=" + this.form.name + "&viewName=" + this.form.viewName + "&supplierName=" + this.form.supplierName + "&endPrice=" + this.form.endPrice + "&marketPrice=" + this.form.marketPrice + "&type=" + this.form.type + "&ticketType=" + this.form.ticketType + "&startTime=" + this.form.startTime + "&endTime=" + this.form.endTime + "&dailySale=" + this.form.dailySale + "&num=" + this.form.num + "&orderTime=" + this.form.orderTime + "&notice=" + this.form.notice + "&costInside=" + this.form.costInside + "&costOutside=" + this.form.costOutside + "&remark=" + this.form.remark + "&userType=" + this.form.userType + "&priorityId=" + this.form.priorityId + "&customPro=" + this.customer+ "&customId=" + this.form.customId + "&isSale=" + this.form.isSale + "&isCancel=" + this.form.isCancel + "&viewId=" + this.form.viewId + "&supplierId=" + this.form.supplierId + "&method=" + this.form.method).then((res) => {
                        // console.log(res.data)
                        // console.log(res.data.data.currPage)
                        this.tableData = res.data.data;   //表格数据
                        this.currentPage = res.data.data.currPage;
                        this.codesID = res.data.code;
                        if (this.codesID === 0) {    //参数错误
                            this.$message({
                                message: "参数错误,请重试~",
                                type: 'warning'
                            });
                            // this.getimgs();
                            return;
                        } else {
                            this.$message({
                                message: '添加成功!,请点击最后一页查看新增数据~~',
                                type: 'success'
                            });
                            this.$router.push({ path: './ProductManage', query: { currentPage: this.currentPage } });
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
