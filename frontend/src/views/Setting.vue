<template>
    <v-app v-if="UserInfo && UserInfo.is_login === 'Y'">
        <Navigation />
        <Header />
        <Setting />
        <DialogContact />
    </v-app>
</template>

<script>
import { mapState } from 'vuex';
import Header from '@/components/shared/Header';
import Navigation from '@/components/shared/Navigation';
import Setting from '@/components/Contents/Setting';
import DialogContact from '@/components/Dialog/Contact';

export default {
    components: {
        Navigation, Header, Setting, DialogContact
    },
    computed: {
        ...mapState(['UserInfo'])
    }
};
</script>
