import Vue from 'vue'
import axios from "axios";
import config from './config'
import router from '../router'
// 将Axios挂载到Vue的原型中
Vue.prototype.$http = axios;
// 全局配置baseURL
// axios.defaults.baseURL = config.baseURL;

// 全局配置withCredentials
// axios.defaults.withCredentials = config.withCredentials;

// 循环获取config对象的所有属性
// 将所有属性赋值给axios.defaults对象
// 自动挂载config的配置到axios默认配置中
for (const k in config) {
  axios.defaults[k] = config[k]
}

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  let token = localStorage.getItem('token') || ''
  config.headers.Authorization = token
  // 拦截器的添加方式
  // config.withCredentials = true
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

  if (error.response.data.status === 401) {
    // 跳转到登录页
    // console.log('走你')
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
    router.push('/')
  }

  return Promise.reject(error);
});

export default axios