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
                    path: '/home', name: 'home', component: () => import('../views/Fund/Home.vue')
                },
                {
                    path: '/fundFlow', name: 'fundFlow', component: () => import('../views/Fund/FundFlow.vue')
                },
                {
                    path: '/profile', name: 'profile', component: () => import('../views/Fund/Profile.vue')
                },
                // {
                //     path: '/', redirect: {name: 'home'}
                // },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/User/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/User/Register.vue')
        },
        {
            path: '/notFound',
            name: '404',
            component: () => import('../views/404.vue')
        },


        /*==================  test  ================= */
        {
            path: '/echart',
            name: 'echart',
            component: () => import('../views/Test/_echart.vue')
        },
        {
            path: '/editor',
            name: 'editor',
            component: () => import('../views/Test/quillEditor.vue')
        },

        {
            path: '*',
            redirect: '/notFound'
        },
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