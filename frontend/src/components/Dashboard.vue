<template>
    <div>
        <input v-model="email" type="email" />
        <input v-model="password" type="password" />
        <button type="submit" @click.prevent="submit">提交</button>
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
        password: ''
    }),
    mounted() {
        axios.get('/api/details')
            .then((res) => {
                console.log(res.data);
            }).catch((e) => {
                console.log(e);
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
                console.log(res);
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /* styles */
</style>
