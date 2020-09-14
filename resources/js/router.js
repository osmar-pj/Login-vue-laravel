import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './auth/Login.vue'
import Dashboard from './components/Dashboard.vue'

import store from './store'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Dashboard,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/login',
            component: Login
        }
    ]
})

router.beforeEach((to, from, next) => {
    const requireAuth = to.matched.some(record => record.meta.requireAuth)
    const currentUser = store.state.currentUser
    if(requireAuth && !currentUser) {
        next('/login')
    } else if (to.path == '/login' && currentUser) {
        next('/')
    } else {
        next()
    }
})

export default router