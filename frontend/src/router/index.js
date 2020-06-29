import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

Vue.use(Router);

const router = new Router({
    // mode: 'history',
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('@/views/Dashboard')
            // beforeEnter: (to, from, next) => {}
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('@/views/Dashboard')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login')
        },
        {
            path: '/material/:material_id?',
            name: 'material',
            component: () => import('@/views/Material')
        },
        {
            path: '/order',
            name: 'order',
            component: () => import('@/views/Order')
        },
        {
            path: '/user/:user_id?',
            name: 'user',
            component: () => import('@/views/User')
        },
        {
            path: '/setting',
            name: 'setting',
            component: () => import('@/views/Setting')
        }
    ]
});

router.beforeEach((to, from, next) => {
    const { UserInfo } = store.state;
    if (UserInfo === undefined) {
        store.dispatch('actionCheckLogin')
            .then((data) => {
                if (to.name !== 'login'
                    && data.is_login === 'N') next({ name: 'login' });
                else if (to.name === 'login'
                    && data.is_login === 'Y') next({ name: 'index' });
                else next();
            }).catch(() => {
                next({ name: 'login' });
            });
    } else if (UserInfo.is_login === 'Y') {
        if (to.name === 'login') next({ name: 'index' });
        if (to.name === 'user'
            && store.getters.getPermissionName !== 'admin'
            && store.getters.getPermissionName !== 'agent') {
            next({ name: 'index' });
        } else next();
    } else if (UserInfo.is_login === 'N') {
        if (to.name === 'login') next();
        else next({ name: 'login' });
    }
});

export default router;
