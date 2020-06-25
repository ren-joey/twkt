<template>
    <div>
        <div v-if="user === undefined">
            <input v-model="email" type="email" />
            <input v-model="password" type="password" />
            <button type="submit" @click.prevent="submit">提交</button>
        </div>
        <div v-else-if="user.id">
            <button @click.prevent="logout">登出</button>
        </div>
        <br />
        <template v-if="layout.menus.length > 0 && user.id">
            <div v-for="menu in layout.menus"
                 :key="menu.col_name"
                 @click="activePage = menu.col_name"
            >
                {{ menu.tw_name }}
            </div>
        </template>
        <br />
        <template v-if="activePage === 'orders' && user.id">
            CREATE ORDER:
            <br />
            <input type="text" v-model="order.name" />
            <br />
            <textarea v-model="order.description" />
            <br />
            <template v-if="materials.length > 0">
                <div v-for="material in materials" :key="material.serial_number">
                    {{ material.name }}
                </div>
            </template>
        </template>
        <template v-else-if="activePage === 'materials'">
            MATERIAL LIST:
            <br />
            <div v-for="material in materials" :key="material.serial_number">
                {{ material }}
            </div>
        </template>
        <template v-else-if="activePage === 'settings'">
            {{ user }}
        </template>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: {
        msg: {
            type: String,
            default: ''
        }
    },
    data: () => ({
        activePage: 'index',
        email: '',
        password: '',
        user: undefined,
        order: {
            name: '',
            description: '',
            materials: []
        },
        layout: {
            menus: []
        },
        materials: []
    }),
    // watch: {
    //     user: {
    //         handler() {
    //             if (this.user !== undefined) {
    //                 this.fetchMaterials();
    //             }
    //         },
    //         immediate: true,
    //         deep: true
    //     }
    // },
    mounted() {
        axios.get('/api/details')
            .then((res) => {
                this.loginSuccessfulHandler();
                this.user = res.data;
            }).catch(() => {
                this.user = undefined;
            });
    },
    methods: {
        submit() {
            axios({
                method: 'POST',
                url: '/api/login',
                params: {
                    email: this.email,
                    password: this.password
                }
            }).then((res) => {
                this.loginSuccessfulHandler();
                this.user = res.data;
            });
        },
        loginSuccessfulHandler() {
            this.fetchLayout();
            this.fetchMaterials();
        },
        logout() {
            axios({
                method: 'GET',
                url: '/api/logout'
            }).then(() => {
                this.user = undefined;
            });
        },
        fetchLayout() {
            axios({
                method: 'GET',
                url: '/api/layout'
            }).then((res) => {
                this.layout = res.data;
            });
        },
        fetchMaterials() {
            axios({
                method: 'GET',
                url: '/api/materials'
            }).then((res) => {
                this.materials = res.data;
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /* styles */
</style>
