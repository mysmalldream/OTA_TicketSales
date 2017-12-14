import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";    // 默认主题    //"element-ui": "2.0.7",
// import 'element-ui/lib/theme-default/index.css';    // 默认主题   //"element-ui": "1.4.8",
// import '../static/css/theme-green/index.css';       // 浅绿色主题
// import "../static/css/calendar-price-jquery.min.css";       // 价格日历
// import "../static/js/calendar-price-jquery.js";             // 价格日历

// import "./assets/calendar-price-jquery.min.css";             // 价格日历
// import "./assets/calendar-price-jquery.js";       // 价格日历

import "babel-polyfill";
import $ from 'jquery'
// import MenuUtils from './utils/MenuUtils'
// Vue.config.productionTip = false


Vue.use(ElementUI);
Vue.prototype.$axios = axios;

// let data = JSON.parse(window.sessionStorage.getItem('powerId'))
// if (data){
//   //这里是防止用户手动刷新页面，整个app要重新加载,动态新增的路由，会消失，所以我们重新add一次
//   let routes = []
//   MenuUtils(routes,data)
//   router.addRoutes(routes)
//   window.sessionStorage.removeItem('isLoadNodes')
// }
// router.beforeEach((route, redirect, next) => {
//   let data = JSON.parse(window.sessionStorage.getItem('powerId'))
//   if(data&&route.path === '/login'){
//     //这里不使用router进行跳转，是因为，跳转到登录页面的时候，是需要重新登录，获取数据的，这个时候，会再次向router实例里面add路由规则，
//     //而next()跳转过去之后，没有刷新页面，之前的规则还是存在的，但是使用location的话，可以刷新页面，当刷新页面的时候，整个app会重新加载
//     //而我们在刷新之前已经把sessionStorage里的powerId移除了，所以上面的添加路由也不行执行
//     window.sessionStorage.removeItem('powerId')
//     window.sessionStorage.removeItem('isLoadNodes')
//     window.location.href = '/'
//     return false
//   }
//   if (!data && route.path !== '/login') {
//     next({ path: '/login' })
//   } else {
//     if (route.path) {
//       next()
//     } else {
//       next({ path: '/nofound' })
//     }
//   }
// })


new Vue({
    router,
    render: h => h(App)
}).$mount('#app');