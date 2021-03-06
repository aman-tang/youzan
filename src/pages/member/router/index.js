// 1. 使用 vue-router 插件
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let routes = [{
  path: '/',
  component: require('../components/member.vue').default
},{
  path: '/address',
  component: require('../components/address.vue').default,
  children:[{
    path: '',
    // component: require('../components/all.vue')
    redirect: 'all'
  },{
    path: 'all',
    name: 'all',
    component: require('../components/all.vue').default
  },{
    path: 'form',
    name: 'form',
    component: require('../components/form.vue').default
  }]
}]

// 创建 router 实例
let router = new Router({
  routes
})

export default router