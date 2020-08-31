<template>
    <v-app>
        <Header />
        <Verified />
        <!-- <DialogContact /> -->
    </v-app>
</template>

<script>
import { mapState } from 'vuex';
import Header from '@/components/shared/Header';
import Verified from '@/components/Contents/Verified';

export default {
    components: {
        Header, Verified
    },
    computed: {
        ...mapState(['InitData'])
    }
};
</script>
