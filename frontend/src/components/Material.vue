<template>
    <v-app v-if="InitData.is_login === 'Y'">
        <Navigation />
        <Header />
        <Material />
        <DialogContact />
    </v-app>
</template>

<script>
import { mapState } from 'vuex';
import Header from './shared/Header';
import Navigation from './shared/Navigation';
import Material from './Contents/Material';
import DialogContact from './Dialog/Contact';

export default {
    components: {
        Navigation, Header, Material, DialogContact
    },
    computed: {
        ...mapState(['InitData'])
    }
};
</script>

<style lang="scss">
    @import './style/index';
</style>
