import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        Page: undefined,
        Snack: {},
        InitData: {
            is_login: 'N'
        }
    },
    getters: {
        getPage: state => state.Page,
        getInitData: state => state.InitData
    },
    mutations: {
        /* eslint-disable no-param-reassign */
        setInitData: (state, obj) => { state.InitData = { ...state.InitData, ...obj }; },
        setPage: (state, str) => { state.Page = str; }
    },
    actions: {
        actionSetInitData: ({ commit }, obj) => { commit('setInitData', obj); },
        actionSetPage: ({ commit }, str) => { commit('setPage', str); },
        // actionLogin: ({ commit }) => {
        //     // ..
        // },
        actionLogout: ({ commit }) => new Promise((resolve) => {
            localStorage.clear('is_login');
            commit('logout');
            resolve();
        })
    },
    modules: {
    }
});
