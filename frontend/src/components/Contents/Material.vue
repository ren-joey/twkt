<template>
    <v-content>
        <v-container>
            <v-breadcrumbs :items="items">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>

            <MaterialTable v-if="$route.params.material_id === undefined
                               || $route.params.material_id === 'R001'"
                           :id="'R001'"
                           :subtitle="subtitles.R001"
                           :materials="materials.R001"
            />
            <MaterialTable v-if="$route.params.material_id === undefined
                               || $route.params.material_id === 'R002'"
                           :id="'R002'"
                           :subtitle="subtitles.R002"
                           :materials="materials.R002"
            />
            <MaterialTable v-if="$route.params.material_id === undefined
                               || $route.params.material_id === 'R003'"
                           :id="'R003'"
                           :subtitle="subtitles.R003"
                           :materials="materials.R003"
            />
            <MaterialTable v-if="$route.params.material_id === undefined
                               || $route.params.material_id === 'R029'"
                           :id="'R029'"
                           :subtitle="subtitles.R029"
                           :materials="materials.R029"
            />

            <v-btn
                bottom
                color="pink"
                dark
                fab
                fixed
                right
                @click="bus.$emit('dialogAddMaterial');"
            >
                <v-icon>mdi-plus</v-icon>
            </v-btn>
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
    </v-content>
</template>

<script>
import bus from '@/bus';
import DialogAddMaterial from '../Dialog/AddMaterial';
import MaterialTable from './tables/MaterialTable';

export default {
    components: {
        DialogAddMaterial, MaterialTable
    },
    data: () => ({
        bus,
        subtitles: {
            R001: 'R001 蝦紅素 (藻紅素)',
            R002: 'R002 鮭魚/魚精華素',
            R003: 'R003 神經醯胺(賽洛美)',
            R029: 'R029 維生素類'
        },
        materials: {
            R001: [
                {
                    material_id: 'R001-01-01',
                    material_name: '專利紅藻萃取(含蝦紅素) 5%',
                    material_source: '紅藻',
                    material_spec_1: '5%',
                    material_spec_2: '油狀',
                    material_origin: '美國',
                    material_patent: '1',
                    material_certification: 'Kosher/Halal/HACCP',
                    material_clinic: '2',
                    material_fn: '視力/心血管/皮膚/美白/抗癌/抗發炎/血脂/抗氧化/更年期/男性功能'
                },
                {
                    material_id: 'R001-01-02',
                    material_name: '專利紅藻萃取(含蝦紅素) 2.5%',
                    material_source: '紅藻',
                    material_spec_1: '2.5%',
                    material_spec_2: '顆粒',
                    material_origin: '美國',
                    material_patent: '1',
                    material_certification: 'Kosher/Halal/HACCP',
                    material_clinic: '2',
                    material_fn: ''
                },
                {
                    material_id: 'R001-02',
                    material_name: '藻紅素 2%',
                    material_source: '紅藻',
                    material_spec_1: '2%',
                    material_spec_2: '粉末',
                    material_origin: '',
                    material_patent: '',
                    material_certification: 'Kosher/GMP/HACCP',
                    material_clinic: '',
                    material_fn: ''
                }
            ],
            R002: [
                {
                    material_id: 'R002-01',
                    material_name: 'SalmoPG鮭魚抽出物(蛋白聚醣)',
                    material_source: '鮭魚',
                    material_spec_1: '蛋白聚醣proteoglycan≧20%',
                    material_spec_2: '粉末',
                    material_origin: '日本',
                    material_patent: '1',
                    material_certification: '',
                    material_clinic: '1',
                    material_fn: '骨骼/皮膚'
                },
                {
                    material_id: 'R002-02-01',
                    material_name: '日本專利鮭魚精巢 (含核酸DNA)',
                    material_source: '鮭魚',
                    material_spec_1: 'DNA 30%、魚精蛋白 45%',
                    material_spec_2: '',
                    material_origin: '日本',
                    material_patent: '5',
                    material_certification: '',
                    material_clinic: '1',
                    material_fn: '皮膚'
                },
                {
                    material_id: 'R002-02-02',
                    material_name: '魚精蛋白',
                    material_source: '鮭魚',
                    material_spec_1: '2%',
                    material_spec_2: '',
                    material_origin: '',
                    material_patent: '',
                    material_certification: '',
                    material_clinic: '',
                    material_fn: ''
                }
            ],
            R003: [
                {
                    material_id: 'R003-01',
                    material_name: '牛奶神經醯胺 MC-5',
                    material_source: '乳清',
                    material_spec_1: 'Sphingomyeli(SPM) 5%',
                    material_spec_2: '粉末',
                    material_origin: '日本',
                    material_patent: '1',
                    material_certification: '',
                    material_clinic: '1',
                    material_fn: '皮膚/美白'
                },
                {
                    material_id: 'R003-02',
                    material_name: '日本神經醯胺酸 3%',
                    material_source: '玉米',
                    material_spec_1: '3%',
                    material_spec_2: '',
                    material_origin: '日本',
                    material_patent: '',
                    material_certification: '',
                    material_clinic: '',
                    material_fn: '皮膚/美白'
                }
            ],
            R029: [
                {
                    material_id: 'R029-01-01',
                    material_name: '維生素A',
                    material_source: '',
                    material_spec_1: '',
                    material_spec_2: '',
                    material_origin: '瑞士',
                    material_patent: '',
                    material_certification: '',
                    material_clinic: '',
                    material_fn: '抗氧化'
                },
                {
                    material_id: 'R029-01-02',
                    material_name: '維生素A',
                    material_source: '',
                    material_spec_1: '',
                    material_spec_2: '油狀/粉末',
                    material_origin: '瑞士',
                    material_patent: '',
                    material_certification: '',
                    material_clinic: '',
                    material_fn: '抗氧化'
                },
                {
                    material_id: 'R029-01-03',
                    material_name: '維生素A油溶液',
                    material_source: '',
                    material_spec_1: '',
                    material_spec_2: '油溶液',
                    material_origin: '中國',
                    material_patent: '',
                    material_certification: '',
                    material_clinic: '',
                    material_fn: '抗氧化'
                },
                {
                    material_id: 'R029-01-04',
                    material_name: '維生素A',
                    material_source: '',
                    material_spec_1: '≧250000 IU/g',
                    material_spec_2: '粉末',
                    material_origin: '中國',
                    material_patent: '',
                    material_certification: '',
                    material_clinic: '',
                    material_fn: '抗氧化'
                }
            ]
        }
    }),
    computed: {
        items() {
            const items = [
                {
                    text: '原物料'
                    // disabled: true,
                    // href: 'breadcrumbs_dashboard'
                },
                {
                    text: '總覽'
                    // disabled: true,
                    // href: '/#/material'
                    // to: { path: '/material' }
                }
            ];
            if (this.$route.params.material_id !== undefined) {
                items.push(
                    {
                        text: this.subtitles[this.$route.params.material_id]
                        // disabled: true,
                        // href: 'breadcrumbs_dashboard'
                    }
                );
            }
            return items;
        }
    }
};
</script>
