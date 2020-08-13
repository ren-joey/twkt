<template>
    <v-app v-if="UserInfo && UserInfo.is_login === 'Y'">
        <Navigation />
        <Header />
        <v-main>
            <v-container>
                <v-card
                    class="mx-auto my-4"
                    maxWidth="800"
                >
                    <v-card-title class="headline d-flex justify-space-between align-center">
                        <div class="d-flex align-center">
                            掃描QRCODE進行付款
                        </div>
                    </v-card-title>
                    <v-card-text>
                        <v-row justify="center">
                            <div>
                                <img src="../assets/images/payment_qrcode.jpg" alt="" />
                            </div>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from '@/components/shared/Header';
import Navigation from '@/components/shared/Navigation';

export default {
    name: 'Payment',
    components: {
        Navigation, Header
    },
    computed: {
        ...mapGetters({
            UserInfo: 'getUserInfo',
            BadgeColor: 'getBadgeColor'
        })
    }
};
</script>
