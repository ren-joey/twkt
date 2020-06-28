<template>
    <v-app v-if="UserInfo && UserInfo.is_login === 'Y'">
        <Navigation />
        <Header />
        <Order />
        <DialogContact />
    </v-app>
</template>

<script>
import { mapState } from 'vuex';
import Header from '@/components/shared/Header';
import Navigation from '@/components/shared/Navigation';
import Order from '@/components/Contents/Order';
import DialogContact from '@/components/Dialog/Contact';

export default {
    components: {
        Navigation, Header, Order, DialogContact
    },
    computed: {
        ...mapState(['UserInfo'])
    }
};
</script>
