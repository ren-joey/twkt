<template>
    <v-app v-if="UserInfo && UserInfo.is_login === 'Y'">
        <Navigation />
        <Header />
        <User />
        <DialogContact />
    </v-app>
</template>

<script>
import { mapState } from 'vuex';
import Header from '@/components/shared/Header';
import Navigation from '@/components/shared/Navigation';
import User from '@/components/Contents/User';
import DialogContact from '@/components/Dialog/Contact';

export default {
    components: {
        Navigation, Header, User, DialogContact
    },
    computed: {
        ...mapState(['UserInfo'])
    }
};
</script>
