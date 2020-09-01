<template>
    <v-main>
        <v-container>
            <v-breadcrumbs :items="history">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>

            <template v-if="!$route.params.quotation_id">
                <QuotationTable :subtitle="'已完成的詢價單'" :orders="CompleteQuotations" />
                <QuotationTable :subtitle="'未完成的詢價單'" :orders="IncompleteQuotations" />
            </template>
            <template v-else>
                <QuotationDetail :quotation="$store.getters.getQuotationById(+$route.params.quotation_id)" />
            </template>
        </v-container>
    </v-main>
</template>

<script>
import { mapGetters } from 'vuex';
import bus from '@/bus';
import QuotationTable from './tables/QuotationTable';
import QuotationDetail from './details/QuotationDetail';

export default {
    components: {
        QuotationTable, QuotationDetail
    },
    data: () => ({
        bus
    }),
    computed: {
        history() {
            const history = [{ text: '詢價單' }];

            if (this.$route.params.quotation_id) {
                history[0].href = '/#/quotation';

                history.push({ text: '詢價單明細' });
            }

            return history;
        },
        ...mapGetters({
            CompleteQuotations: 'getCompleteQuotations',
            IncompleteQuotations: 'getIncompleteQuotations'
        })
    },
    mounted() {
        this.$store.dispatch('actionFetchQuotations');
    }
};
</script>
