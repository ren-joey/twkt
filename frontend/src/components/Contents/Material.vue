<template>
    <v-main>
        <v-tabs v-model="activeTab"
                backgroundColor="grey lighten-3"
                style="position: sticky; top: 65px; z-index: 2;"
                v-if="!$route.params.material_id"
        >
            <v-tabs-slider color="grey lighten" />
            <v-tab>總覽</v-tab>
            <v-tab v-if="PermissionName !== 'user'
                && PermissionName !== 'guest'"
            >
                我的原物料
            </v-tab>
        </v-tabs>

        <v-container v-if="$route.params.material_id === '0'">
            <v-breadcrumbs :items="history">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>

            <CreateMaterial />
        </v-container>

        <v-container v-else-if="!$route.params.material_id">
            <template v-if="activeTab === 0">
                <MaterialTable :subtitle="'總覽'" :materials="Materials" />
            </template>
            <template v-else-if="activeTab === 1">
                <MaterialTable :subtitle="'上架中'" :materials="PublishedMaterials" />
                <MaterialTable :subtitle="'未上架'" :materials="UnpublishedMaterials" />
                <MaterialTable :subtitle="'未完成'" :materials="IncompleteMaterials" />
            </template>

            <v-btn
                bottom
                color="pink"
                dark
                fab
                fixed
                right
                @click="$router.push({ name: 'material', params: { material_id: '0' } })"
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
import { mapGetters } from 'vuex';
import DialogAddMaterial from '../Dialog/AddMaterial';
import MaterialTable from './tables/MaterialTable';
import MaterialDetail from './details/MaterialDetail';
import CreateMaterial from './create/CreateMaterial';

export default {
    components: {
        DialogAddMaterial, MaterialTable, MaterialDetail, CreateMaterial
    },
    data: () => ({
        bus,
        activeTab: 0
    }),
    computed: {
        history() {
            const history = [];

            if (this.activeTab === 0) history.push({ text: '原物料總覽' });
            else if (this.activeTab === 1) history.push({ text: '我的原物料' });
            if (this.$route.params.material_id) {
                history[0].href = '/#/material';
                if (this.$route.params.material_id === '0') {
                    history.push({
                        text: '創建原物料'
                    });
                } else {
                    history.push({
                        text: '原物料資料'
                    });
                }
            }

            return history;
        },
        ...mapGetters({
            PermissionName: 'getPermissionName',
            PublishedMaterials: 'getPublishedMaterials',
            UnpublishedMaterials: 'getUnpublishedMaterials',
            IncompleteMaterials: 'getIncompleteMaterials',
            Materials: 'getMaterials'
        })
    },
    mounted() {
        this.$store.dispatch('actionFetchMaterials');
    }
};
</script>
