<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'App',
    data: () => ({
    //
    }),
    mounted() {
        this.actionFetchLayout();
    },
    methods: {
        ...mapActions(['actionFetchLayout'])
    }
};
</script>
