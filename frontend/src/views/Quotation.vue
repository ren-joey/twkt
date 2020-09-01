<template>
    <v-app v-if="UserInfo && UserInfo.is_login === 'Y'">
        <Navigation />
        <Header />
        <Quotation />
        <DialogContact />
    </v-app>
</template>

<script>
import { mapState } from 'vuex';
import Header from '@/components/shared/Header';
import Navigation from '@/components/shared/Navigation';
import Quotation from '@/components/Contents/Quotation';
import DialogContact from '@/components/Dialog/Contact';

export default {
    components: {
        Navigation, Header, Quotation, DialogContact
    },
    computed: {
        ...mapState(['UserInfo'])
    }
};
</script>
