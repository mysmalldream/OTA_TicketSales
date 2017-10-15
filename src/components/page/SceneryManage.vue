<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 景区管理设置</el-breadcrumb-item>
                <el-breadcrumb-item>景区管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :inline="true" :model="form" label-width="80px">
                <el-form-item label="景区编号">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="景区业务">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="景区名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="景区等级">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="景区分类">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="所属省市">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="逻辑符">
                    <el-select v-model="form.region" placeholder="请选择">
                        <el-option key="bbk" label="=" value="bbk"></el-option>
                        <el-option key="xtc" label=">" value="xtc"></el-option>
                        <el-option key="imoo1" label="<" value="imoo1"></el-option>
                        <el-option key="imoo2" label="<=" value="imoo2"></el-option>
                        <el-option key="imoo3" label="=>" value="imoo3"></el-option>
                        <el-option key="imoo4" label="<>" value="imoo4"></el-option>
                        <el-option key="imoo5" label="模糊查找" value="imoo5"></el-option>
                        <el-option key="imoo6" label="模糊排除" value="imoo6"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查 询</el-button>
                    <el-button>重 置</el-button>
                </el-form-item>
                <!-- <el-form-item label="日期时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="选择开关">
                    <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="多选框">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="步步高" name="type"></el-checkbox>
                        <el-checkbox label="小天才" name="type"></el-checkbox>
                        <el-checkbox label="imoo" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="单选框">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="步步高"></el-radio>
                        <el-radio label="小天才"></el-radio>
                        <el-radio label="imoo"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="文本框">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button>取消</el-button>
                </el-form-item> -->
            </el-form>
        </div>

    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: true,
                    type: ['步步高'],
                    resource: '小天才',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                this.$message.success('开始查询');
            }
        }
    }
</script>
<style scoped>
    .form-box{
        width:865px;
    }
</style>
