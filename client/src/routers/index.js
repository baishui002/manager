import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
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
            redirect: '/login'
        }
    ]
})

// 全局守卫
router.beforeEach((to, from, next) => {
    const isLogin = window.localStorage.getItem('eleToken') ? true : false
    if (to.path === '/login' || to.path === '/register') {
        next()
    } else {
        isLogin ? next() : next('/login')
    }
})

export default router