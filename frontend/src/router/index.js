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
            path: '/verified',
            name: 'verified',
            component: () => import('@/views/Verified')
        },
        {
            path: '/material/:material_id?',
            name: 'material',
            component: () => import('@/views/Material')
        },
        {
            path: '/order/:method?/:order_id?',
            name: 'order',
            component: () => import('@/views/Order')
        },
        {
            path: '/quotation/:quotation_id?',
            name: 'quotation',
            component: () => import('@/views/Quotation')
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
        },
        {
            path: '/payment',
            name: 'payment',
            component: () => import('@/views/Payment')
        },
        {
            path: '/dev',
            name: 'dev',
            component: () => import('@/views/Dev')
        }
    ]
});

router.beforeEach((to, from, next) => {
    const { UserInfo } = store.state;
    if (to.name === 'verified') next();
    else if (UserInfo === undefined) {
        Promise.all([
            store.dispatch('actionCheckLogin'),
            store.dispatch('actionFetchLayout')
        ]).then((data) => {
            const { is_login } = data[0];
            if (to.name === 'login') {
                if (is_login === 'Y') next({ name: 'index' });
                else if (is_login === 'N') next();
            } else if (to.name !== 'login') {
                if (is_login === 'Y') next();
                else if (is_login === 'N') next({ name: 'login' });
            }
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
