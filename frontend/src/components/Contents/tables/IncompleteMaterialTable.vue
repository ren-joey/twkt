<template>
    <v-card
        class="mx-auto my-4"
        width="100%"
    >
        <v-card-title class="headline d-flex justify-space-between align-center">
            <div class="d-flex align-center">
                <v-icon class="mr-2">mdi-semantic-web</v-icon>
                {{ subtitle }}
            </div>
            <div class="mr-4"
                 v-if="PermissionName !== 'user'
                     && PermissionName !== 'guest'"
            >
                <!-- <v-btn class="mr-4"
                       icon
                       small
                       :disabled="selected.length === 0"
                >
                    <v-icon>mdi-trash-can-outline</v-icon>
                </v-btn> -->
                <v-btn fab
                       dark
                       color="pink"
                       small
                       @click="bus.$emit('addMaterial', id)"
                >
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </div>
        </v-card-title>
        <v-card-text>
            <v-divider />
            <v-data-table
                v-model="selected"
                :headers="headers"
                :items="Materials"
                itemKey="serial_number"
                @click:row="rowClickHandler"
            >
                <template v-slot:item.status="{ item }">
                    <v-chip class="ma-2"
                            small
                            v-if="item.status === 'edit'"
                    >
                        編輯
                    </v-chip>
                    <v-chip class="ma-2"
                            small
                            color="red"
                            textColor="white"
                            v-else-if="item.status === 'confirm'"
                    >
                        待確認
                    </v-chip>
                    <v-chip class="ma-2"
                            small
                            outlined
                            color="red"
                            v-else-if="item.status === 'verify'"
                    >
                        審核中
                    </v-chip>
                </template>
                <template v-if=" PermissionName !== 'user'
                              && PermissionName !== 'guest'"
                          v-slot:item.actions="{ item }"
                >
                    <v-icon
                        v-if="item.status === 'edit'"
                        small
                        @click="deleteItem(item)"
                    >
                        mdi-delete
                    </v-icon>
                </template>
                <template v-slot:expanded-item="{ item }">
                    <td :colspan="headers.length">
                        <v-row>
                            <v-col cols="4">
                                專利
                                <v-divider />
                                {{ item.patent }}
                            </v-col>
                            <v-col cols="4">
                                認證
                                <v-divider />
                                {{ item.certification }}
                            </v-col>
                            <v-col cols="4">
                                臨床研究/文獻
                                <v-divider />
                                {{ item.report }}
                            </v-col>
                        </v-row>
                    </td>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
import bus from '@/bus';
import { mapState, mapGetters } from 'vuex';

export default {
    props: {
        id: {
            type: String,
            default: ''
        },
        subtitle: {
            type: String,
            default: ''
        }
    },
    data: () => ({
        bus,
        dialog: false,
        // items: [
        //     {
        //         text: '原物料',
        //         disabled: true,
        //         href: 'breadcrumbs_dashboard'
        //     }
        // ],
        singleSelect: false,
        selected: [],
        singleExpand: false,
        expanded: [],
        editedIndex: -1,
        editedItem: {
            material_id: '',
            material_name: '',
            material_source: '',
            material_spec_1: '',
            material_spec_2: '',
            material_origin: '',
            material_patent: '',
            material_certification: '',
            material_clinic: '',
            material_fn: ''
        }
    }),
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
        },
        headers() {
            if (this.PermissionName === 'user'
                || this.PermissionName === 'guest') {
                return [
                    { text: '狀態', align: 'start', value: 'status' },
                    { text: '編號', align: 'start', value: 'serial_number' },
                    { text: '原料名稱', value: 'name' },
                    { text: '來源', value: 'origin_name' },
                    { text: '規格1', value: 'spec_1' },
                    { text: '規格2', value: 'spec_2' },
                    { text: '產地', value: 'origin' },
                    { text: '功能', value: 'function' }
                    // { text: '', value: 'data-table-expand' }
                ];
            }
            return [
                { text: '狀態', align: 'start', value: 'status' },
                { text: '編號', align: 'start', value: 'serial_number' },
                { text: '原料名稱', value: 'name' },
                { text: '來源', value: 'origin_name' },
                { text: '規格1', value: 'spec_1' },
                { text: '規格2', value: 'spec_2' },
                { text: '產地', value: 'origin' },
                // { text: '專利', value: 'material_patent' },
                // { text: '認證', value: 'material_certification' },
                // { text: '臨床研究/文獻', value: 'material_clinic' },
                { text: '功能', value: 'function' },
                { text: '操作', value: 'actions', sortable: false }
                // { text: '', value: 'data-table-expand' }
            ];
        },
        ...mapGetters({
            PermissionName: 'getPermissionName',
            Materials: 'getIncompleteMaterials'
        }),
        ...mapState(['Fetching', 'UserInfo'])
    },
    watch: {
        dialog(val) {
            if (!val) this.close();
        }
    },
    mounted() {
        if (this.Materials.length === 0) this.$store.dispatch('actionFetchMaterials');
    },
    methods: {
        editItem(item) {
            this.editedIndex = this.materials.indexOf(item);
            this.editedItem = { ...item };
            this.dialog = true;
        },
        deleteItem(item) { // eslint-disable-line
            const { confirm } = window;
            const index = this.materials.indexOf(item);
            if (confirm('Are you sure you want to delete this item?')) this.materials.splice(index, 1);
        },
        close() {
            this.dialog = false;
            setTimeout(() => {
                this.editedItem = { ...this.defaultItem };
                this.editedIndex = -1;
            }, 300);
        },
        save() {
            this.fetching.editMaterial = 'Y';

            setTimeout(() => {
                this.fetching.editMaterial = 'N';
                if (this.editedIndex > -1) {
                    Object.assign(this.materials[this.editedIndex], this.editedItem);
                } else {
                    this.materials.push(this.editedItem);
                }
                this.close();
            }, 2000);
        },
        rowClickHandler(material) {
            this.$router.push({ name: 'material', params: { material_id: material.id } });
        }
    }
};
</script>
