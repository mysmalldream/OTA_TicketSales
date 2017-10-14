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
                            index: 'vueeditor',
                            title: '新增'
                        },
                        {
                            index: 'markdown',
                            title: 'markdown'
                        },
                        {
                            index: 'upload',
                            title: '文件上传'
                        }
                    ]
                },
                {
                    icon: 'el-icon-document',
                    index: '5',
                    title: '用户管理设置',
                    subs: [
                        {
                            index: 'UserManagement',
                            title: '用户管理'
                        },
                    ]
                },
                {
                    icon: 'el-icon-menu',
                    index: '2',
                    title: '测试测试',
                    subs: [
                        {
                            index: 'basetable',
                            title: '基础表格'
                        },
                        {
                            index: 'vuetable',
                            title: 'Vue表格组件'
                        }
                    ]
                },
                {
                    icon: 'el-icon-star-on',
                    index: 'basecharts',
                    title: '图表'
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
