import Vue from 'vue'
import Router from 'vue-router'
import signInComponent from './pages/signIn'
import signUpComponent from './pages/signUp'
import homeComponent from './pages/home'
import allReceiverComponent from './pages/home/children/allReceiver'

Vue.use(Router)

export default new Router({
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
