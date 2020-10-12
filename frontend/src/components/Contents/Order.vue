<template>
    <v-main>
        <v-container>
            <v-breadcrumbs :items="history">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>

            <template v-if="!$route.params.order_id">
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
            </template>
            <template v-else>
                <OrderDetail :order="$store.getters.getOrderById(+$route.params.order_id)"
                             :publishedMaterials="publishedMaterials"
                />

                <Comment />
            </template>
        </v-container>
    </v-main>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapState } from 'vuex';
import bus from '@/bus';
import OrderTable from './tables/OrderTable';
import OrderDetail from './details/OrderDetail';
import CreateOrder from './create/CreateOrder';
import Comment from '../Dialog/Comment';

export default {
    components: {
        OrderTable, OrderDetail, CreateOrder, Comment
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
            } else if (this.$route.params.method === 'detail'
                && this.$route.params.order_id) {
                history[0].href = '/#/order';

                history.push({ text: '需求單明細' });
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
        this.$store.dispatch('actionFetchOrders');
        this.$store.dispatch('actionFetchMaterials');

        axios({
            method: 'GET',
            url: '/api/published-materials'
        }).then((res) => {
            this.publishedMaterials = res.data;
        });
    }
};
</script>
