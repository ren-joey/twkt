<template>
    <v-app>
        <Header />
        <ContentDefault />
        <DialogContact />
    </v-app>
</template>

<script>
import { mapState } from 'vuex';
import Header from './shared/Header';
import ContentDefault from './Contents/Default';
import DialogContact from './Dialog/Contact';

export default {
    components: {
        Header, ContentDefault, DialogContact
    },
    computed: {
        ...mapState(['InitData'])
    }
};
</script>

<style lang="scss">
    @import './style/index';
</style>
