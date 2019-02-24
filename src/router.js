import Vue from 'vue'
import Router from 'vue-router'
import signInComponent from './pages/signIn'
import signUpComponent from './pages/signUp'
import homeComponent from './pages/home'
import allReceiverComponent from './pages/home/children/allReceiver'

Vue.use(Router)

let router = new Router({
  routes: [
    { path: '/', redirect: '/signIn' },
    { path: '/signIn', component: signInComponent },
    { path: '/signUp', component: signUpComponent },
    {
      path: '/home',
      component: homeComponent,
      redirect: '/home/allReceiver',
      children: [
        { path: 'allReceiver', component: allReceiverComponent }
      ]
    },
  ]
})

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
  if (token || to.path === '/signIn' || to.path === '/signUp') {
    next()
  } else {
    // 如果没有登录  就跳转回 /
    next('/')
  }
  // 一定要调用next函数进行路由传递
})

export default router