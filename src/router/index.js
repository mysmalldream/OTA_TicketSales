import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/readme",
      component: resolve => require(["../components/common/Home.vue"], resolve),
      children: [
        {
          path: "/",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/Readme.vue"], resolve) //默认登录进去后显示欢迎页,
        },
        {
          path: "/DistributorCategory",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/DistributorCategory.vue"], resolve) //分销商类别设置
        },
        {
          path: "/TicketTypeSet",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/TicketTypeSet.vue"], resolve) //票型类别设置
        },
        {
          path: "/PriorityClassSet",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/PriorityClassSet.vue"], resolve) //优先级类别设置
        },
        {
          path: "/SceneryManage",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/SceneryManage.vue"], resolve) //景区管理
        },
        {
          path: "/ScenerynewAdd",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/ScenerynewAdd.vue"], resolve) //景区管理新增
        },
        {
          path: "/SceneryEdit",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/SceneryEdit.vue"], resolve) //景区管理修改
        },
        {
          path: "/ProductManage",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/ProductManage.vue"], resolve) //产品信息管理
        },
        {
          path: "/ProductnewAdd",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/ProductnewAdd.vue"], resolve) //产品信息新增
        },
        {
          path: "/ProductEdit",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/ProductEdit.vue"], resolve) //产品信息修改
        },
        {
          path: "/UserManagement",
          meta: { requiresAuth: true }, // 添加该字段，表示进入这个路由是需要登录的
          component: resolve =>
            require(["../components/page/UserManagement.vue"], resolve) // 用户管理
        },
        {
          path: "/DistributorManagement",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/DistributorManagement.vue"], resolve) // 分销商管理
        },
        {
          path: "/DistributorEdit",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/DistributorEdit.vue"], resolve) // 分销商修改
        },
        {
          path: "/Examine",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/Examine.vue"], resolve) // 审核
        },
        {
          path: "/ContractManage",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/ContractManage.vue"], resolve) // 合同管理
        },
        {
          path: "/OrderManagement",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/OrderManagement.vue"], resolve) // 订单管理
        },
        {
          path: "/OrderPayment",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/OrderPayment.vue"], resolve) // 未支付订单
        },
        {
          path: "/OrderOff",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/OrderOff.vue"], resolve) // 已核销订单
        },
        {
          path: "/Sparpreis",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/Sparpreis.vue"], resolve) // 特价商品
        },
        {
          path: "/SparpreisNewAdd",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/SparpreisNewAdd.vue"], resolve) // 特价商品新增
        },
        {
          path: "/SparpreisEdit",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/SparpreisEdit.vue"], resolve) // 特价商品修改
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
      component: resolve => require(["../components/page/Login.vue"], resolve) //默认首页
    }
  ]
});



export default router;
