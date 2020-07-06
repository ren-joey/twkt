<template>
    <v-main>
        <v-container>
            <v-breadcrumbs :items="history">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>

            <OrderTable v-if="!$route.params.method"
                        :subtitle="'已完成的需求單'"
                        :orders="CompleteOrders"
            />
            <OrderTable v-if="!$route.params.method"
                        :subtitle="'未完成的需求單'"
                        :orders="IncompleteOrders"
            />
            <CreateOrder v-else-if="$route.params.method === 'create'"
                         :publishedMaterials="publishedMaterials"
            />

            <v-btn
                bottom
                color="pink"
                dark
                fab
                fixed
                right
                v-if="!$route.params.method"
                @click="$router.push({ name: 'order', params: { method: 'create' } })"
            >
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-container>
    </v-main>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapState } from 'vuex';
import bus from '@/bus';
import OrderTable from './tables/OrderTable';
import CreateOrder from './create/CreateOrder';

export default {
    components: {
        OrderTable, CreateOrder
    },
    data: () => ({
        bus,
        publishedMaterials: []
    }),
    computed: {
        history() {
            const history = [{ text: '需求單' }];

            if (this.$route.params.method === 'create') {
                history[0].href = '/#/order';

                history.push({ text: '新增需求單' });
            }

            return history;
        },
        ...mapState(['Orders']),
        ...mapGetters({
            CompleteOrders: 'getCompleteOrders',
            IncompleteOrders: 'getIncompleteOrders'
        })
    },
    mounted() {
        if (this.Orders.length === 0) this.$store.dispatch('actionFetchOrders');

        axios({
            method: 'GET',
            url: '/api/published-materials'
        }).then((res) => {
            this.publishedMaterials = res.data;
        });
    }
};
</script>
