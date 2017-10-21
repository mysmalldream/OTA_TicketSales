<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <!-- <template v-else>
                                    <el-menu-item :index="item.index">
                                        <i :class="item.icon"></i>{{ item.title }}
                                    </el-menu-item>
                                </template> -->
                <template v-else v-show="true">
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    icon: 'el-icon-setting',
                    index: 'readme',
                    title: '欢迎页'
                },
                {
                    icon: 'el-icon-date',
                    index: '3',
                    title: '基础设置',
                    subs: [
                        {
                            index: 'DistributorCategory',
                            title: '分销商类别设置'
                        },
                        {
                            index: 'TicketTypeSet',
                            title: '票型类别设置'
                        },
                        {
                            index: 'PriorityClassSet',
                            title: '优先级类别设置'
                        }
                    ]
                },
                {
                    icon: 'el-icon-message',
                    index: '4',
                    title: '景区管理设置',
                    subs: [
                        {
                            index: 'SceneryManage',
                            title: '景区管理'
                        },
                        {
                            index: 'ScenerynewAdd',
                            title: '新增'
                        },
                        // {
                        //     index: 'SceneryEdit',
                        //     title: '修改'
                        // },
                        // {
                        //     index: 'markdown',
                        //     title: 'markdown'
                        // },
                        // {
                        //     index: 'upload',
                        //     title: '文件上传'
                        // }
                    ]
                },
                {
                    icon: 'el-icon-time',
                    index: '5',
                    title: '产品信息管理设置',
                    subs: [
                        {
                            index: 'ProductManage',
                            title: '产品信息管理'
                        },
                        {
                            index: 'ProductnewAdd',
                            title: '新增'
                        },
                    ]
                },
                {
                    icon: 'el-icon-document',
                    index: '6',
                    title: '用户管理设置',
                    subs: [
                        {
                            index: 'UserManagement',
                            title: '用户管理'
                        },
                    ]
                }, {
                    icon: 'el-icon-share',
                    index: '7',
                    title: '分销商管理设置',
                    subs: [
                        {
                            index: 'DistributorManagement',
                            title: '分销商管理'
                        }, {
                            index: 'Examine',
                            title: '审核'
                        }, {
                            index: 'ContractManage',
                            title: '合同管理'
                        },
                    ]
                },{
                    icon: 'el-icon-menu',
                    index: '8',
                    title: '订单管理设置',
                    subs: [
                        {
                            index: 'OrderManagement',
                            title: '订单管理'
                        },
                         {
                            index: 'OrderPayment',
                            title: '未支付订单'
                        }, {
                            index: 'OrderOff',
                            title: '已核销订单'
                        },
                    ]
                },
                // {
                //     icon: 'el-icon-menu',
                //     index: '2',
                //     title: '测试测试',
                //     subs: [
                //         {
                //             index: 'basetable',
                //             title: '基础表格'
                //         },
                //         {
                //             index: 'vuetable',
                //             title: 'Vue表格组件'
                //         }
                //     ]
                // },
                {
                    icon: 'el-icon-star-on',
                    // index: 'basecharts',
                    index: '',
                    title: '统计'
                },
            ]
        }
    },
    methods: {
        // if(typeof 6 === "number") {

        // }
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    }
}
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    width: 250px;
    left: 0;
    top: 70px;
    bottom: 0;
    background: #2E363F;
}

.sidebar>ul {
    height: 100%;
}
</style>
