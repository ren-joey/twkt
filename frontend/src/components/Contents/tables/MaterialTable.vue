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
        </v-card-title>
        <v-card-text>
            <v-divider />
            <v-data-table
                v-model="selected"
                :headers="headers"
                :items="materials"
                :search="search"
                itemKey="serial_number"
                @click:row="rowClickHandler"
            >
                <template v-slot:top>
                    <v-row justify="end">
                        <v-col cols="12"
                               sm="6"
                               lg="4"
                        >
                            <v-text-field
                                v-model="search"
                                appendIcon="mdi-magnify"
                                label="搜尋"
                                singleLine
                                hideDetails
                            />
                        </v-col>
                    </v-row>
                </template>
                <template v-slot:item.status="{ item }">
                    <v-chip class="ma-2"
                            small
                            color="success"
                            v-if="item.status === 'published'"
                    >
                        上架中
                    </v-chip>
                    <v-chip class="ma-2"
                            small
                            v-if="item.status === 'unpublished'"
                    >
                        未上架
                    </v-chip>
                    <v-chip class="ma-2"
                            small
                            v-if="item.status === 'complete'"
                    >
                        已完成
                    </v-chip>
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
        },
        materials: {
            type: Array,
            default: () => ([])
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
        search: '',
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
                    { text: '來源', value: 'origin_material' },
                    { text: '規格1', value: 'spec_1' },
                    { text: '規格2', value: 'spec_2' },
                    { text: '產地', value: 'origin' }
                ];
            }
            return [
                { text: '狀態', align: 'start', value: 'status' },
                { text: '編號', align: 'start', value: 'serial_number' },
                { text: '原料名稱', value: 'name' },
                { text: '來源', value: 'origin_material' },
                { text: '規格1', value: 'spec_1' },
                { text: '規格2', value: 'spec_2' },
                { text: '產地', value: 'origin' }
            ];
        },
        ...mapGetters({
            PermissionName: 'getPermissionName',
            Materials: 'getCompleteMaterials'
        }),
        ...mapState(['Fetching', 'UserInfo'])
    },
    watch: {
        dialog(val) {
            if (!val) this.close();
        }
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
