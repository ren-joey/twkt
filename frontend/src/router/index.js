import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import axios from 'axios';

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
            component: () => import('@/components/Template')
            // beforeEnter: (to, from, next) => {}
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/components/Login')
        },
        {
            path: '/material/:material_id?',
            name: 'material',
            component: () => import('@/components/Material')
        },
        {
            path: '/order',
            name: 'order',
            component: () => import('@/components/Order')
        }
    ]
});

router.beforeEach((to, from, next) => {
    // [DEV]
    // const res = { is_login: 'Y', username: 'Eden Stevens', email: 'admin@gmail.com', permission_group: 'manufactory', permission_group_alias: '管理員' };
    // store.dispatch('actionSetInitData', res);
    // if (res.is_login === 'N') next({ name: 'login' });
    // else if (res.is_login === 'Y' && to.name === 'login') next({ name: 'index' });
    // else next();
    axios({
        url: 'api/layout/'
    }).then((res) => {
        store.dispatch('actionSetInitData', res.data);

        if (res.data.is_login === 'N' && to.name !== 'login') next({ name: 'login' });
        else if (res.data.is_login === 'Y' && to.name === 'login') next({ name: 'index' });
        else next();
    });
});

export default router;
