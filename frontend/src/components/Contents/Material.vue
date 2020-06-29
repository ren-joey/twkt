<template>
    <v-main>
        <v-tabs v-model="activeTab"
                backgroundColor="grey lighten-3"
                style="position: sticky; top: 65px"
        >
            <v-tabs-slider color="grey lighten" />
            <v-tab key="overview">總覽</v-tab>
            <v-tab key="">我的原物料</v-tab>
        </v-tabs>

        <v-container v-if="!$route.params.material_id">
            <v-breadcrumbs :items="history">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>

            <MaterialTable :subtitle="'上架中'" />
            <IncompleteMaterialTable :subtitle="'未上架'" />

            <v-btn
                bottom
                color="pink"
                dark
                fab
                fixed
                right
                @click="bus.$emit('addMaterial');"
                v-if="PermissionName !== 'user'
                    && PermissionName !== 'guest'"
            >
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-container>

        <v-container v-else>
            <v-breadcrumbs :items="history">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>

            <MaterialDetail />
        </v-container>

        <template v-slot:prepend>
            <v-list-item twoLine>
                <v-list-item-avatar>
                    <img src="https://randomuser.me/api/portraits/women/81.jpg" />
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>Jane Smith</v-list-item-title>
                    <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </template>

        <DialogAddMaterial />
    </v-main>
</template>

<script>
import bus from '@/bus';
import { mapState, mapGetters } from 'vuex';
import DialogAddMaterial from '../Dialog/AddMaterial';
import MaterialTable from './tables/MaterialTable';
import IncompleteMaterialTable from './tables/IncompleteMaterialTable';
import MaterialDetail from './details/MaterialDetail';

export default {
    components: {
        DialogAddMaterial, MaterialTable, IncompleteMaterialTable, MaterialDetail
    },
    data: () => ({
        bus,
        activeTab: 'all'
    }),
    computed: {
        history() {
            const history = [];

            if (this.activeTab === 'all') history.push({ text: '原物料' });
            else if (this.activeTab === 'own') {
                if (this.$route.params.material_id) {
                    history[0].href = '/#/material';
                    if (this.$route.params.material_id === 0) {
                        history.push({
                            text: '創建原物料'
                        });
                    } else {
                        history.push({
                            text: '原物料資料'
                        });
                    }
                }
            }
            return history;
        },
        ...mapGetters({
            PermissionName: 'getPermissionName'
        }),
        ...mapState(['Materials'])
    }
};
</script>
