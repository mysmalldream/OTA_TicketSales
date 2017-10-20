import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login" //默认登录进去后显示欢迎页
    },
    {
      path: "/readme",
      component: resolve => require(["../components/common/Home.vue"], resolve),
      children: [
        {
          path: "/",
          component: resolve =>
            require(["../components/page/Readme.vue"], resolve)
        },
        {
          path: "/DistributorCategory",
          component: resolve =>
            require(["../components/page/DistributorCategory.vue"], resolve) //分销商类别设置
        },
        {
          path: "/TicketTypeSet",
          component: resolve =>
            require(["../components/page/TicketTypeSet.vue"], resolve) //票型类别设置
        },
        {
          path: "/PriorityClassSet",
          component: resolve =>
            require(["../components/page/PriorityClassSet.vue"], resolve) //优先级类别设置
        },
        {
          path: "/SceneryManage",
          component: resolve =>
            require(["../components/page/SceneryManage.vue"], resolve) //景区管理
        },
        {
          path: "/ScenerynewAdd",
          component: resolve =>
            require(["../components/page/ScenerynewAdd.vue"], resolve) //景区管理新增
        },
        {
          path: "/SceneryEdit",
          component: resolve =>
            require(["../components/page/SceneryEdit.vue"], resolve) //景区管理修改
        },
        {
          path: "/ProductManage",
          component: resolve =>
            require(["../components/page/ProductManage.vue"], resolve) //产品信息管理
        },
        {
          path: "/ProductnewAdd",
          component: resolve =>
            require(["../components/page/ProductnewAdd.vue"], resolve) //产品信息新增
        },
        {
          path: "/ProductEdit",
          component: resolve =>
            require(["../components/page/ProductEdit.vue"], resolve) //产品信息修改
        },
        {
          path: "/UserManagement",
          component: resolve =>
            require(["../components/page/UserManagement.vue"], resolve) // 用户管理
        },
        {
          path: "/DistributorManagement",
          component: resolve =>
            require(["../components/page/DistributorManagement.vue"], resolve) // 分销商管理
        },
        {
          path: "/DistributorEdit",
          component: resolve =>
            require(["../components/page/DistributorEdit.vue"], resolve) // 分销商修改
        },
        {
          path: "/Examine",
          component: resolve =>
            require(["../components/page/Examine.vue"], resolve) // 审核
        },
        {
          path: "/ContractManage",
          component: resolve =>
            require(["../components/page/ContractManage.vue"], resolve) // 合同管理
        },
        {
          path: "/basetable",
          component: resolve =>
            require(["../components/page/BaseTable.vue"], resolve)
        },
        {
          path: "/vuetable",
          component: resolve =>
            require(["../components/page/VueTable.vue"], resolve) // vue-datasource组件
        },
        {
          path: "/vueeditor",
          component: resolve =>
            require(["../components/page/VueEditor.vue"], resolve) // Vue-Quill-Editor组件
        },
        {
          path: "/markdown",
          component: resolve =>
            require(["../components/page/Markdown.vue"], resolve) // Vue-Quill-Editor组件
        },
        {
          path: "/upload",
          component: resolve =>
            require(["../components/page/Upload.vue"], resolve) // Vue-Core-Image-Upload组件
        },
        {
          path: "/basecharts",
          component: resolve =>
            require(["../components/page/BaseCharts.vue"], resolve) // vue-schart组件
        }
      ]
    },
    {
      path: "/login",
      component: resolve => require(["../components/page/Login.vue"], resolve)
    }
  ]
});
