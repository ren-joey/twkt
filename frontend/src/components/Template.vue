<template>
    <v-app v-if="InitData.is_login === 'Y'">
        <Navigation />
        <Header />
        <ContentTemplate />
        <DialogContact />
    </v-app>
</template>

<script>
import { mapState } from 'vuex';
import Header from './shared/Header';
import Navigation from './shared/Navigation';
import ContentTemplate from './Contents/ContentTemplate';
import DialogContact from './Dialog/Contact';

export default {
    components: {
        Navigation, Header, ContentTemplate, DialogContact
    },
    computed: {
        ...mapState(['InitData'])
    }
};
</script>

<style lang="scss">
    @import './style/index';
</style>
