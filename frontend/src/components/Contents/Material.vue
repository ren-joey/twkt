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
                <ul v-if="categorySelected !== null" class="v-breadcrumbs theme--light">
                    <li>
                        <a class="v-breadcrumbs__item" @click="categorySelected = null">原物料總覽</a>
                    </li>
                    <li class="v-breadcrumbs__divider">
                        <i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-right theme--light" />
                    </li>
                    <li>
                        <div class="v-breadcrumbs__item">原物料資料</div>
                    </li>
                </ul>

                <MaterialCategoryTable v-if="categorySelected === null" :setCategorySelected="setCategorySelected" />

                <MaterialTable v-else
                               :subtitle="`${categorySelected.serial_number} ${categorySelected.tw_name}`"
                               :materials="$store.getters.getMaterialsByCategory(categorySelected.serial_number)"
                />
            </template>
            <template v-else-if="activeTab === 1">
                <MaterialTable :subtitle="'上架中'" :materials="PublishedMaterials.filter(m => m.created_by === UserInfo.id)" />
                <MaterialTable :subtitle="'未上架'" :materials="UnpublishedMaterials.filter(m => m.created_by === UserInfo.id)" />
                <MaterialTable :subtitle="'未完成'" :materials="IncompleteMaterials.filter(m => m.created_by === UserInfo.id)" />
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

            <Comment />
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
import MaterialCategoryTable from './tables/MaterialCategoryTable';
import MaterialTable from './tables/MaterialTable';
import MaterialDetail from './details/MaterialDetail';
import CreateMaterial from './create/CreateMaterial';
import Comment from '../Dialog/Comment';

export default {
    components: {
        DialogAddMaterial, MaterialCategoryTable, MaterialTable, MaterialDetail, CreateMaterial, Comment
    },
    data: () => ({
        bus,
        activeTab: 0,
        categorySelected: null
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
            UserInfo: 'getUserInfo',
            PermissionName: 'getPermissionName',
            PublishedMaterials: 'getPublishedMaterials',
            UnpublishedMaterials: 'getUnpublishedMaterials',
            IncompleteMaterials: 'getIncompleteMaterials',
            Materials: 'getMaterials',
            MaterialCategories: 'getMaterialCategories'
        })
    },
    mounted() {
        this.$store.dispatch('actionFetchMaterials');
    },
    methods: {
        setCategorySelected(str) {
            this.categorySelected = str;
        }
    }
};
</script>
