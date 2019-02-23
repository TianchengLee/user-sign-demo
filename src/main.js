import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import './styles/common.css'
import axios from "axios";

// 将Axios挂载到Vue的原型中
Vue.prototype.$http = axios;
// 全局配置baseURL
axios.defaults.baseURL = 'http://litc.pro:9999/v1';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  let token = localStorage.getItem('token') || ''
  config.headers.Authorization = token
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // console.log('我是拦截器拦截到的response:', response)
  response = response.data
  return response;
}, function (error) {
  // 对响应错误做点什么
  // console.log('我是拦截器拦截到的error:', error)
  // console.dir(err);
  Vue.prototype.$message({
    showClose: true,
    type: "error",
    message: error.response.data.errMsg
  });
  return Promise.reject(error);
});

// 导航守卫效果看起来很像使用watch监视路由的变化
// 但是区别在于: watch是监视路由的变化, 无法阻止路由的导航
// 导航守卫是专门用来进行拦截导航或者新建导航等操作
router.beforeEach((to, from, next) => {
  // console.log(to, from)
  // 获取localStorage中的token
  let token = localStorage.getItem('token') || ''

  // 拦截已登录的状态
  if (token && to.path === '/signIn') {
    return next('/home')
  }

  // 拦截未登录的状态
  // 判断token是否存在
  // 存在表示已登录
  // 判断如果用户登录了就正常导航
  // 登录页面也不能进行拦截, 应当放行
  if (token || to.path === '/signIn') {
    next()
  } else {
    // 如果没有登录  就跳转回 /
    next('/')
  }
  // 一定要调用next函数进行路由传递
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
