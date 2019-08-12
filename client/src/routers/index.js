import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/Index.vue'),
      children: [
          {
           path: '/home', name: 'home', component: () => import('../views/Home.vue')   
          }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
        path: '*',
        redirect: '/'
    }
  ]
})
