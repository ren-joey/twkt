<template>
    <div>
        <div v-if="user === undefined">
            <input v-model="email" type="email" />
            <input v-model="password" type="password" />
            <button type="submit" @click.prevent="submit">提交</button>
        </div>
        <div v-else-if="user.id">
            {{ user }}
            <button @click.prevent="logout">登出</button>
        </div>
        <br />
        CREATE ORDER:
        <input type="text" v-model="order.name" />
        <textarea v-model="order.description" />
        <br />
        <template v-if="materials.length > 0">
            <div v-for="material in materials" :key="material.serial_number">
                {{ material.name }}
            </div>
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
        email: '',
        password: '',
        user: undefined,
        order: {
            name: '',
            description: '',
            materials: []
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
                this.fetchMaterials();
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
                this.fetchMaterials();
                this.user = res.data;
            });
        },
        logout() {
            axios({
                method: 'GET',
                url: '/api/logout'
            }).then(() => {
                this.fetchMaterials();
                this.user = undefined;
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
