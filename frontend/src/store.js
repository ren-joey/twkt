import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        Page: undefined,
        Snack: {},
        UserInfo: undefined,
        Fetching: {},
        Materials: [],
        Users: []
    },
    getters: {
        getPage: (state) => state.Page,
        getPermissionName: (state) => state.UserInfo.permission_group.col_name,
        getUserInfo: (state) => state.UserInfo,
        getCompleteMaterials: (state) => state.Materials.filter((m) => m.status === 'complete'),
        getEditMaterials: (state) => state.Materials.filter((m) => m.status === 'edit'),
        getVerifyMaterials: (state) => state.Materials.filter((m) => m.status === 'verify'),
        getConfirmMaterials: (state) => state.Materials.filter((m) => m.status === 'confirm'),
        getIncompleteMaterials: (state) => state.Materials.filter((m) => m.status !== 'complete')
    },
    mutations: {
        /* eslint-disable no-param-reassign */
        setUserInfo: (state, obj) => {
            if (obj === undefined) state.UserInfo = { is_login: 'N' };
            else state.UserInfo = obj;
            // else state.UserInfo = { ...state.UserInfo, ...obj };
        },
        setPage: (state, str) => { state.Page = str; },
        setFetching: (state, obj) => { state.Fetching[obj.name] = obj.status; },
        setMaterials: (state, arr) => { state.Materials = arr; },
        setUsers: (state, arr) => { state.Users = arr; }
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
        })
    },
    modules: {
    }
});
