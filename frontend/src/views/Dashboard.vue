<template>
    <v-app v-if="UserInfo !== undefined">
        <Navigation />
        <Header />
        <Dashboard />
        <DialogContact />
    </v-app>
</template>

<script>
import { mapState } from 'vuex';
import Header from '@/components/shared/Header';
import Navigation from '@/components/shared/Navigation';
import Dashboard from '@/components/Contents/Dashboard';
import DialogContact from '@/components/Dialog/Contact';

export default {
    components: {
        Navigation, Header, Dashboard, DialogContact
    },
    computed: {
        ...mapState(['UserInfo'])
    }
};
</script>
