<template>
    <v-app>
        <Header />
        <Login />
        <DialogContact />
    </v-app>
</template>

<script>
import { mapState } from 'vuex';
import Header from '@/components/shared/Header';
import Login from '@/components/Contents/Login';
import DialogContact from '@/components/Dialog/Contact';

export default {
    components: {
        Header, Login, DialogContact
    },
    computed: {
        ...mapState(['InitData'])
    }
};
</script>
