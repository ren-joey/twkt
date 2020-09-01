import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        Layout: {
            menus: [],
            material_form_columns: [],
            material_categories: [],
            permission_groups: []
        },
        Page: undefined,
        Snack: {},
        UserInfo: undefined,
        Fetching: {
            actionCheckLogin: 'N',
            actionLogin: 'N',
            actionLogout: 'N',
            actionFetchMaterials: 'N',
            actionFetchUsers: 'N',
            actionFetchLayout: 'N',
            actionFetchQuotations: 'N'
        },
        Materials: [],
        Users: [],
        Orders: [],
        Quotations: []
    },
    getters: {
        getPage: (state) => state.Page,
        getOrders: (state) => state.Orders,

        getQuotations: (state) => state.Quotations,
        getQuotationById: (state) => (id) => state.Quotations.find((q) => q.id === id),
        getIncompleteQuotations: (state) => state.Quotations.filter((q) => q.status !== 'complete'),
        getCompleteQuotations: (state) => state.Quotations.filter((q) => q.status === 'complete'),

        getPermissionName: (state) => {
            if (state.UserInfo.is_login === 'N') return 'guest';
            return state.UserInfo.permission_group.col_name;
        },
        getUserInfo: (state) => state.UserInfo,
        getMaterialCategories: (state) => state.Layout.material_categories,
        getMaterialCategoryBySerialNumber: (state) => (serial_number) => state.Layout.material_categories.find((cate) => cate.serial_number === serial_number),
        getMaterialColumns: (state) => state.Layout.material_form_columns,
        getOrderColumns: (state) => state.Layout.order_form_columns,

        // Permission Groups 相關顏色
        getPermissionGroups: (state) => state.Layout.permission_groups
            .filter((group) => group.col_name !== 'guest')
            .map((group) => ({
                text: group.tw_name,
                value: group.id,
                ...group
            })),
        getPermissionGroupGuest: (state) => state.Layout.permission_groups
            .find((group) => group.col_name === 'guest'),
        getPermissionGroupUser: (state) => state.Layout.permission_groups
            .find((group) => group.col_name === 'user'),
        getPermissionGroupCompany: (state) => state.Layout.permission_groups
            .find((group) => group.col_name === 'company'),
        getPermissionGroupAgent: (state) => state.Layout.permission_groups
            .find((group) => group.col_name === 'agent'),
        getPermissionGroupAdmin: (state) => state.Layout.permission_groups
            .find((group) => group.col_name === 'admin'),
        getBarColor: (state, getters) => {
            const permissionName = getters.getPermissionName;
            if (permissionName === 'guest') return { color: getters.getPermissionGroupGuest.bg_color };
            if (permissionName === 'user') return { color: getters.getPermissionGroupUser.bg_color };
            if (permissionName === 'company') return { color: getters.getPermissionGroupCompany.bg_color };
            return { color: getters.getPermissionGroupAdmin.bg_color };
        },
        getOwnBadgeColor: (state, getters) => {
            const permissionName = getters.getPermissionName;
            if (permissionName === 'guest') return { textColor: 'white', color: getters.getPermissionGroupGuest.bg_color };
            if (permissionName === 'user') return { textColor: 'white', color: getters.getPermissionGroupUser.bg_color };
            if (permissionName === 'company') return { textColor: 'white', color: getters.getPermissionGroupCompany.bg_color };
            return { textColor: 'white', color: getters.getPermissionGroupAdmin.bg_color };
        },
        getBadgeColor: (state, getters) => (permissionName = 'guest') => {
            if (permissionName === 'guest') return { textColor: 'white', color: getters.getPermissionGroupGuest.bg_color };
            if (permissionName === 'user') return { textColor: 'white', color: getters.getPermissionGroupUser.bg_color };
            if (permissionName === 'company') return { textColor: 'white', color: getters.getPermissionGroupCompany.bg_color };
            return { textColor: 'white', color: getters.getPermissionGroupAdmin.bg_color };
        },

        // 所有原物料
        getMaterials: (state) => state.Materials,
        // 所有已上架的原物料
        getPublishedMaterials: (state) => state.Materials.filter((m) => m.status === 'published'),
        // 所有未上架的原物料
        getUnpublishedMaterials: (state) => state.Materials.filter((m) => m.status === 'unpublished'),
        // 所有已完成的原物料
        getCompleteMaterials: (state) => state.Materials.filter((m) => m.status === 'complete'),
        // 所有編輯中的原物料
        getEditMaterials: (state) => state.Materials.filter((m) => m.status === 'edit'),
        // 所有待「管理員」確認的原物料
        getVerifyMaterials: (state) => state.Materials.filter((m) => m.status === 'verify'),
        // 所有待「使用者」確認的原物料
        getConfirmMaterials: (state) => state.Materials.filter((m) => m.status === 'confirm'),
        // 所有編輯中的原物料，包含此步驟以前所有的步驟
        getIncompleteMaterials: (state) => state.Materials.filter((m) => m.status !== 'complete'
                && m.status !== 'published'
                && m.status !== 'unpublished'),
        getMaterialsByCategory: (state) => (cate) => state.Materials.filter((m) => m.serial_number.indexOf(cate) > -1),
        getMaterialById: (state) => (id) => state.Materials.find((m) => m.id === id),

        getOrderById: (state) => (id) => state.Orders.find((o) => o.id === id),
        getCompleteOrders: (state) => state.Orders.filter((m) => m.status === 'complete'),
        getIncompleteOrders: (state) => state.Orders.filter((m) => m.status !== 'complete'),
        getFetching: (state) => state.Fetching
    },
    mutations: {
        /* eslint-disable no-param-reassign */
        setUserInfo: (state, obj) => {
            if (obj === undefined
                || obj.message !== undefined) state.UserInfo = { is_login: 'N' };
            else state.UserInfo = obj;
            // else state.UserInfo = { ...state.UserInfo, ...obj };
        },
        setLayout: (state, obj) => {
            state.Layout = obj;
        },
        setPage: (state, str) => { state.Page = str; },
        setFetching: (state, obj) => { state.Fetching[obj.name] = obj.status; },
        setMaterials: (state, arr) => { state.Materials = arr; },
        setUsers: (state, arr) => { state.Users = arr; },
        setOrders: (state, arr) => { state.Orders = arr; },
        setQuotations: (state, arr) => { state.Quotations = arr; }
    },
    actions: {
        actionCheckLogin: ({ state, commit }) => new Promise((resolve, reject) => {
            const name = 'actionCheckLogin';
            if (state.Fetching[name] === 'Y') reject();
            commit('setFetching', { name, status: 'Y' });

            axios({
                method: 'GET',
                url: 'api/check-login'
            }).then((res) => {
                commit('setUserInfo', res.data);
                resolve(res.data);
            }).catch((e) => {
                alert(e);
                reject();
            }).finally(() => {
                commit('setFetching', { name, status: 'N' });
            });
        }),
        actionLogin: ({ state, commit }, obj) => new Promise((resolve, reject) => {
            const name = 'actionLogin';
            if (state.Fetching[name] === 'Y') reject();
            commit('setFetching', { name, status: 'Y' });

            axios({
                method: 'POST',
                url: 'api/login',
                params: obj
            }).then((res) => {
                commit('setUserInfo', res.data);
                resolve(res.data);
            }).catch((e) => {
                alert(e);
                reject();
            }).finally(() => {
                commit('setFetching', { name, status: 'N' });
            });
        }),
        actionLogout: ({ state, commit }) => new Promise((resolve, reject) => {
            const name = 'actionLogout';
            if (state.Fetching[name] === 'Y') reject();
            commit('setFetching', { name, status: 'Y' });

            axios({
                method: 'GET',
                url: 'api/logout'
            }).then((res) => {
                commit('setUserInfo', res.data);
                commit('setMaterials', []);
                commit('setUsers', []);
                commit('setOrders', []);
                resolve(res.data);
            }).catch((e) => {
                alert(e);
                reject();
            }).finally(() => {
                commit('setFetching', { name, status: 'N' });
            });
        }),
        actionFetchLayout: ({ state, commit }) => new Promise((resolve, reject) => {
            const name = 'actionFetchLayout';
            if (state.Fetching[name] === 'Y') reject();
            commit('setFetching', { name, status: 'Y' });

            axios({
                method: 'GET',
                url: 'api/layout'
            }).then((res) => {
                commit('setLayout', res.data);
                resolve(res.data);
            }).catch((e) => {
                alert(e);
                reject();
            }).finally(() => {
                commit('setFetching', { name, status: 'N' });
            });
        }),
        actionFetchMaterials: ({ state, commit }) => new Promise((resolve, reject) => {
            const name = 'actionFetchMaterials';
            if (state.Fetching[name] === 'Y') reject();
            commit('setFetching', { name, status: 'Y' });

            axios({
                method: 'GET',
                url: 'api/materials'
            }).then((res) => {
                commit('setMaterials', res.data);
                resolve(res.data);
            }).catch((e) => {
                alert(e);
                reject();
            }).finally(() => {
                commit('setFetching', { name, status: 'N' });
            });
        }),
        actionFetchUsers: ({ state, commit }) => new Promise((resolve, reject) => {
            const name = 'actionFetchUsers';
            if (state.Fetching[name] === 'Y') reject();
            commit('setFetching', { name, status: 'Y' });

            axios({
                method: 'GET',
                url: 'api/users'
            }).then((res) => {
                commit('setUsers', res.data);
                resolve(res.data);
            }).catch((e) => {
                alert(e);
                reject();
            }).finally(() => {
                commit('setFetching', { name, status: 'N' });
            });
        }),
        actionFetchOrders: ({ state, commit }) => new Promise((resolve, reject) => {
            const name = 'actionFetchOrders';
            if (state.Fetching[name] === 'Y') reject();
            commit('setFetching', { name, status: 'Y' });

            axios({
                method: 'GET',
                url: 'api/orders'
            }).then((res) => {
                commit('setOrders', res.data);
                resolve(res.data);
            }).catch((e) => {
                alert(e);
                reject();
            }).finally(() => {
                commit('setFetching', { name, status: 'N' });
            });
        }),
        actionFetchQuotations: ({ state, commit }) => new Promise((resolve, reject) => {
            const name = 'actionFetchQuotations';
            if (state.Fetching[name] === 'Y') reject();
            commit('setFetching', { name, status: 'Y' });

            axios({
                method: 'GET',
                url: 'api/quotations'
            }).then((res) => {
                commit('setQuotations', res.data);
                resolve(res.data);
            }).catch((e) => {
                alert(e);
                reject();
            }).finally(() => {
                commit('setFetching', { name, status: 'N' });
            });
        })
    },
    modules: {
    }
});
