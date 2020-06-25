<template>
    <v-app v-if="InitData.is_login === 'Y'">
        <Navigation />
        <Header />
        <Order />
        <DialogContact />
    </v-app>
</template>

<script>
import { mapState } from 'vuex';
import Header from './shared/Header';
import Navigation from './shared/Navigation';
import Order from './Contents/Order';
import DialogContact from './Dialog/Contact';

export default {
    components: {
        Navigation, Header, Order, DialogContact
    },
    computed: {
        ...mapState(['InitData'])
    }
};
</script>

<style lang="scss">
    @import './style/index';
</style>
