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
                <el-form-item label="产品编号" prop="id" :rules="[{ required: true, message: '产品编号不能为空'}]">
                    <el-input v-model="form.id" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="票名" prop="name" :rules="[{ required: true, message: '票名不能为空'}]">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="所属景区" prop="viewName" :rules="[{ required: true, message: '所属景区不能为空'}]">
                    <el-select v-model="form.viewName" placeholder="请选择" @change="handleChange1" :disabled="true">
                        <el-option v-for="item in view" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="供应商" prop="supplierName" :rules="[{ required: true, message: '供应商不能为空'}]">
                    <el-select v-model="form.supplierName" placeholder="请选择" @change="handleChange2" :disabled="true">
                        <el-option v-for="item in supplier" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="结算价" prop="endPrice" :rules="[{ required: true, message: '结算价不能为空'}]">
                    <el-input type="number" v-model="form.endPrice"></el-input>
                </el-form-item>
                <el-form-item label="门市价" prop="marketPrice" :rules="[{ required: true, message: '门市价不能为空'}]">
                    <el-input type="number" v-model="form.marketPrice"></el-input>
                </el-form-item>

                <el-form-item label="销售价修改" prop="marketPrice">
                    <el-tag>默认为全部修改,如需部分修改,请点击
                        <span class="el-icon-caret-right"></span>
                        <span class="el-icon-caret-right"></span>
                    </el-tag>
                    <el-switch v-model="value3" active-text="销售价全部修改" inactive-text="销售价部分修改" @change="switch5"></el-switch>
                    <div class="container" v-show='xianshi'></div>
                </el-form-item>

                <el-form-item label="销售价(全改)" class="jiage" prop="salePrice" :rules="[{ required: true, message: '销售价不能为空'}]" v-if=xiaoshou>
                    <el-input type="number" v-model="form.salePrice"></el-input>
                </el-form-item>
                <el-form-item label="是否销售" prop="isSale">
                    <el-switch v-model="form.isSale" active-text="" inactive-text="" active-color="#13ce66" inactive-color="#ccc" active-value="是"
                        inactive-value="否" @change="switch1">
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
                        <el-option v-for="item in ticketType" :key="item.name" :label="item.name" :value="item"></el-option>
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
                    <el-switch v-model="form.isCancel" active-text="" inactive-text="" active-color="#13ce66" inactive-color="#ccc" active-value="是"
                        inactive-value="否" @change="switch2">
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
                    <el-switch disabled v-model="form.userType" active-text="" inactive-text="" active-color="#13ce66" inactive-color="#ccc"
                        active-value="1" inactive-value="0" @change="switch3">
                    </el-switch>
                </el-form-item>
                <el-form-item label="优先级类别" prop="priorityType" :rules="[{ required: true, message: '优先级类别不能为空'}]">
                    <el-select v-model="form.priorityType" placeholder="请重新选择" @change="handleChange5">
                        <el-option v-for="item in priority" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <!-- <el-form-item label="优先级" prop="priorityId">
                                <el-select v-model="form.priorityId"  disabled placeholder="请选择" @change="handleChange3">
                                    <el-option v-for="item in priority" :key="item.priority" :label="item.priority" :value="item.priority"></el-option>
                                </el-select>
                     </el-form-item> -->
                <el-form-item label="分销商列表" prop="customName" :rules="[{ required: true, message: '分销商列表不能为空'}]">
                    <el-select v-model="form.customName" placeholder="请重新选择" @change="handleChange6">
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
    import common from '../../kits/commonapi.js'; //公共域名文件
    import '../../calenderPrice/src/js/calendar-price-jquery.js'; //价格日历
    // var str = "";

    export default {
        data: function () {
            return {
                value6: '', //修改日期销售价
                value4: true, //销售价修改按钮
                value3: true,
                dialogVisible: false,
                xianshi: false,
                xiaoshou: true,
                pickerOptions0: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                },
                power: false, //是否显示增删改的按钮权限
                name: '',
                currentPage: 1, //当前页码数
                form: {
                    id: '',
                    name: '',
                    viewName: '',
                    supplierName: '',
                    endPrice: '',
                    marketPrice: '',
                    salePrice: '',
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
                    customId: '',
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
                customIds: '',
                viewId: '',
                priorityId: '',
                priorityIds: '',
                supplierId: '',
                //价格日历
                mockData: [],
                startDate: '',
                endDate: '',
                partPrice: null, //修改后的价格日历字符串
                flag: true, //是否部分修改的标志符号
                random_calendar: '', //价格日历随机数
                datePrice: '', //原价格日历字符串

            }
        },
        created() {
            this.getEdit();
            this.getAddress();
            this.getPowerId() //根据用户权限加载相应的用户左侧菜单栏
        },
        methods: {
            //销售价格日历的修改
            button() {
                $('.jiage').stop().slideToggle()
                $('.container').stop().slideToggle();
                var _this = this;
                // $(function () {
                var mockData = _this.mockData;
                var startTime = _this.startDate;
                var endTime = _this.endDate;
                // console.log(startTime);
                // console.log(endTime);
                $.CalendarPrice({
                    el: '.container',
                    startDate: startTime,
                    endDate: endTime,
                    data: mockData,
                    // 配置需要设置的字段名称
                    config: [{
                        key: 'price',
                        name: '分销售价'
                    }, ],
                    // 配置在日历中要显示的字段
                    show: [{
                        key: 'price',
                        name: '销售价:￥'
                    }, ],
                    callback: function (data) { //确定按钮
                        // console.log(data);
                        // console.log(JSON.stringify(data));
                        _this.partPrice = JSON.stringify(data); //给价格日历字符串赋值
                        $('.container').slideUp();
                    },
                    cancel: function () {
                        console.log('取消设置 ....');
                        // 取消设置
                        // 这里可以触发关闭设置窗口
                        // ...
                    },
                    reset: function () {
                        console.log('数据重置成功！');
                    },
                    error: function (err) {
                        console.error(err.msg);
                        // alert(err.msg);
                    },
                    // 自定义颜色
                    style: {
                        // 头部背景色
                        headerBgColor: '#098cc2',
                        // 头部文字颜色
                        headerTextColor: '#fff',
                        // 周一至周日背景色，及文字颜色
                        weekBgColor: '#098cc2',
                        weekTextColor: '#fff',
                        // 周末背景色，及文字颜色
                        weekendBgColor: '#098cc2',
                        weekendTextColor: '#fff',
                        // 有效日期颜色
                        validDateTextColor: '#333',
                        validDateBgColor: '#fff',
                        validDateBorderColor: '#eee',
                        // Hover
                        validDateHoverBgColor: '#098cc2',
                        validDateHoverTextColor: '#fff',
                        // 无效日期颜色
                        invalidDateTextColor: '#ccc',
                        invalidDateBgColor: '#fff',
                        invalidDateBorderColor: '#eee',
                        // 底部背景颜色
                        footerBgColor: '#fff',
                        // 重置按钮颜色
                        resetBtnBgColor: '#77c351',
                        resetBtnTextColor: '#fff',
                        resetBtnHoverBgColor: '#55b526',
                        resetBtnHoverTextColor: '#fff',
                        // 确定按钮
                        confirmBtnBgColor: '#098cc2',
                        confirmBtnTextColor: '#fff',
                        confirmBtnHoverBgColor: '#00649a',
                        confirmBtnHoverTextColor: '#fff',
                        // 取消按钮
                        cancelBtnBgColor: '#fff',
                        cancelBtnBorderColor: '#bbb',
                        cancelBtnTextColor: '#999',
                        cancelBtnHoverBgColor: '#fff',
                        cancelBtnHoverBorderColor: '#bbb',
                        cancelBtnHoverTextColor: '#666'
                    }
                });
                // })
            },
            getPowerId() {
                var powerId = JSON.parse(window.sessionStorage.getItem("powerId"));
                if (powerId == 0) {
                    this.power = false;
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
            switch1(val) {
                // console.log("是否销售 :" + val)
            },
            switch2(val) {
                // console.log("是否可退 :" + val)
            },
            switch3(val) {
                // console.log("使用类别开关 :" + val)
            },
            switch4(val) { //销售价修改
                // console.log("销售价修改 :" + val)
            },
            switch5(val) { //销售价修改状态
                // console.log("销售价修改 :" + val)
                this.flag = val;
                if (this.flag) { //全部修改
                    this.button()
                } else { //部分修改
                    this.button()
                }
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            getEdit() {
                axios.get(common.apidomain + "/product/addUI.action").then((res) => {
                    // console.log(res.data);
                    this.view = res.data.data.view; //所属景区
                    this.supplier = res.data.data.supplier; //供应商
                    this.typeList = res.data.data.typeList; //门票类型
                    this.ticketType = res.data.data.ticketType; //票型
                    this.priority = res.data.data.priority; //优先级类别
                    this.custom = res.data.data.custom; //分销商列表
                })
            },
            getAddress() {
                axios.get(common.apidomain + "/product/editUI.action?id=" + this.$route.query.id).then((res) => {
                    console.log(res.data)
                    // console.log(res.data.data.random_calendar)
                    this.random_calendar = res.data.data.random_calendar; //价格日历随机数
                    this.datePrice = res.data.data.datePrice; //原价格日历字符串
                    console.log(res.data.data.calendar)
                    this.mockData = res.data.data.calendar; //日历价格数据
                    console.log(res.data.data.calendar[0])
                    this.startDate = res.data.data.calendar[0]; //日历价格开始日期
                    // console.log(res.data.data.calendar[res.data.data.calendar.length-1])
                    this.endDate = res.data.data.calendar[res.data.data.calendar.length - 1]; //日历价格结束日期
                    // console.log(res.data.data.priorityId)
                    // console.log(res.data.data.customId)
                    this.priorityIds = res.data.data.priorityId;
                    this.customIds = res.data.data.customId;

                    this.viewId = res.data.data.viewId;
                    this.supplierId = res.data.data.supplierId;
                    this.priorityId = res.data.data.priorityId;

                    this.form.id = res.data.data.id;
                    this.form.name = res.data.data.name;
                    this.form.viewName = res.data.data.viewName;
                    this.form.supplierName = res.data.data.supplierName;
                    this.form.endPrice = res.data.data.endPrice;
                    this.form.marketPrice = res.data.data.marketPrice;
                    this.form.salePrice = res.data.data.salePrice;
                    this.form.isSale = res.data.data.isSale;
                    this.form.type = res.data.data.type;
                    this.form.num = res.data.data.num;
                    this.form.ticketType = res.data.data.ticketType;
                    this.form.orderTime = res.data.data.orderTime;
                    this.form.method = res.data.data.method;
                    this.form.startTime = res.data.data.startTime;
                    this.form.endTime = res.data.data.endTime;
                    this.form.isCancel = res.data.data.isCancel;
                    this.form.notice = res.data.data.notice;
                    this.form.costInside = res.data.data.costInside;
                    this.form.costOutside = res.data.data.costOutside;
                    this.form.remark = res.data.data.remark;
                    this.form.userType = res.data.data.userType;
                    this.form.sort = res.data.data.sort;
                    this.form.dailySale = res.data.data.dailySale;

                    this.form.priorityType = res.data.data.priorityType;
                    this.form.customName = res.data.data.customName;
                })
            },
            //新增数据
            handleChange1(value) {
                // console.log(value)
                this.form.viewId = value;
            },
            handleChange2(value) {
                // console.log(value)
                this.form.supplierId = value;
            },
            handleChange3(value) {
                this.ticketId = value;
            },
            handleChange4(value) {
                // console.log(value)
                // this.form.priorityId = value;
            },
            handleChange5(value) {
                // console.log(value)
                this.form.priorityId = value;
            },
            handleChange6(value) {
                // console.log(value)
                this.form.customId = value;
                //    var strId = "";
                //     var strName = "";
                //     value.forEach(function(values, index, array) {
                //         strId += values.id + ',';
                //         strName += values.name + ',';
                //     });
                //     console.log(strId)
                //     this.customId = strId; 
                //     this.customer = strName;
            },
            //修改提交
            onSubmit(formName) {
                // console.log(this.form)
                // console.log(this.partPrice)
                // console.log(this.random_calendar)
                // console.log(this.datePrice)
                // console.log(this.form.viewId)   //  id
                // console.log(this.form.supplierId)   //  id 
                // console.log(this.form.priorityId)   //  id 
                // console.log(this.priorityIds)   //  id priorityIds
                if (typeof (this.form.priorityId) === 'string') {
                    this.form.priorityId = this.priorityIds;
                    // console.log(this.form.priorityId);
                } else {
                    this.form.priorityId;
                    // console.log(this.form.priorityId);

                }
                if (typeof (this.form.customId) === 'string') {
                    this.form.customId = this.customIds;
                    // console.log(this.form.customId);
                } else {
                    this.form.priorityId;
                    // console.log(this.form.customId);
                }
                // console.log("----------")   
                // console.log(this.viewId)   //  id
                // console.log(this.supplierId)   //  id 
                // console.log(this.priorityId)   //  id  
                //开始提交
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post(common.apidomain + "/product/edit.action?name=" + this.form.name +
                            "&viewName=" + this.form.viewName + "&supplierName=" + this.form.supplierName +
                            "&endPrice=" + this.form.endPrice + "&marketPrice=" + this.form.marketPrice +
                            "&salePrice=" + this.form.salePrice + "&type=" + this.form.type +
                            "&ticketType=" + this.form.ticketType + "&startTime=" + this.form.startTime +
                            "&endTime=" + this.form.endTime + "&dailySale=" + this.form.dailySale + "&num=" +
                            this.form.num + "&orderTime=" + this.form.orderTime + "&notice=" + this.form.notice +
                            "&costInside=" + this.form.costInside + "&costOutside=" + this.form.costOutside +
                            "&remark=" + this.form.remark + "&userType=" + this.form.userType +
                            "&customPro=" + this.customer + "&customId=" + this.form.customId + "&isSale=" +
                            this.form.isSale + "&isCancel=" + this.form.isCancel + "&viewId=" + this.viewId +
                            "&supplierId=" + this.supplierId + "&priorityId=" + this.form.priorityId +
                            "&method=" + this.form.method + "&id=" + this.form.id + "&partPrice=" + this.partPrice +
                            "&random_calendar=" + this.random_calendar + "&datePrice=" + this.datePrice).then(
                            (res) => {
                                // console.log(res.data)
                                this.tableData = res.data.data; //表格数据
                                // this.currentPage = res.data.data.currPage;
                                this.codesID = res.data.code;
                                if (this.codesID === 0) { //参数错误
                                    this.$message({
                                        message: "参数错误,请重试~",
                                        type: 'warning'
                                    });
                                    // this.getimgs();
                                    return;
                                } else {
                                    this.$message({
                                        message: '修改成功!,请点击相应页面查看修改数据~~',
                                        type: 'success'
                                    });
                                    this.$router.push({
                                        path: './ProductManage',
                                        query: {
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
    @import '../../calenderPrice/dist/css/calendar-price-jquery.min.css';
    /*价格日历 */

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

