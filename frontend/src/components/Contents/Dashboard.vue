<template>
    <v-main>
        <v-container>
            <v-row v-if="false">
                <v-col col="12" md="4">
                    <v-card
                        color="grey"
                        class="text-center"
                        dark
                    >
                        <v-card-title class="headline justify-center">
                            未送出的需求單
                        </v-card-title>

                        <v-card-subtitle class="display-4 font-weight-black">0</v-card-subtitle>

                        <v-card-actions>
                            <v-btn text>前往我的需求單</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col col="12" md="4">
                    <v-card
                        color="primary"
                        class="text-center"
                        dark
                    >
                        <v-card-title class="headline justify-center">
                            處理中的需求單
                        </v-card-title>

                        <v-card-subtitle class="display-4 font-weight-black">0</v-card-subtitle>

                        <v-card-actions>
                            <v-btn text>前往我的需求單</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col col="12" md="4">
                    <v-card
                        color="success"
                        class="text-center"
                        dark
                    >
                        <v-card-title class="headline justify-center">
                            已完成需求單
                        </v-card-title>

                        <v-card-subtitle class="display-4 font-weight-black">0</v-card-subtitle>

                        <v-card-actions>
                            <v-btn text>前往我的需求單</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col col="12">
                    <DashboardCalendar />
                </v-col>
            </v-row>
        </v-container>

        <v-snackbar right
                    bottom
                    v-model="snackbar"
        >
            您有 1 筆新的原物料需求單
            <v-btn
                color="pink"
                @click="snackbar = false"
                dark
                small
            >
                Close
            </v-btn>
        </v-snackbar>
    </v-main>
</template>

<script>
import DashboardCalendar from './calendar/DashboardCalendar';

export default {
    components: {
        DashboardCalendar
    },
    data() {
        return {
            snackbar: false
        };
    },
    mounted() {
        this.snackbar = true;
    }
};
</script>
