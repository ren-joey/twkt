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
                :singleExpand="singleExpand"
                :expanded.sync="expanded"
                showExpand
                itemKey="serial_number"
                @click:row="rowClickHandler"
                :showSelect="
                    PermissionName === 'agent'
                        || PermissionName === 'admin'"
            >
                <template v-slot:top>
                    <v-dialog v-model="dialog" maxWidth="500px">
                        <!-- <template v-slot:activator="{ on }">
                                    <v-btn color="primary"
                                           dark
                                           class="mb-2"
                                           v-on="on"
                                    >
                                        New Item
                                    </v-btn>
                                </template> -->
                        <v-card :loading="Fetching.actionEditMaterial === 'Y'">
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12"
                                               sm="6"
                                               md="4"
                                        >
                                            <v-text-field v-model="editedItem.name" label="Dessert name" />
                                        </v-col>
                                        <v-col cols="12"
                                               sm="6"
                                               md="4"
                                        >
                                            <v-text-field v-model="editedItem.calories" label="Calories" />
                                        </v-col>
                                        <v-col cols="12"
                                               sm="6"
                                               md="4"
                                        >
                                            <v-text-field v-model="editedItem.fat" label="Fat (g)" />
                                        </v-col>
                                        <v-col cols="12"
                                               sm="6"
                                               md="4"
                                        >
                                            <v-text-field v-model="editedItem.carbs" label="Carbs (g)" />
                                        </v-col>
                                        <v-col cols="12"
                                               sm="6"
                                               md="4"
                                        >
                                            <v-text-field v-model="editedItem.protein" label="Protein (g)" />
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer />
                                <v-btn color="blue darken-1"
                                       text
                                       @click="close"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn color="blue darken-1"
                                       text
                                       @click="save"
                                >
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </template>
                <template v-if="
                              PermissionName !== 'user'
                                  && PermissionName !== 'guest'"
                          v-slot:item.actions="{ item }"
                >
                    <v-icon
                        small
                        class="mr-2"
                        @click="editItem(item)"
                    >
                        mdi-pencil
                    </v-icon>
                    <v-icon
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
                    { text: '編號', align: 'start', value: 'serial_number' },
                    { text: '原料名稱', value: 'name' },
                    { text: '來源', value: 'origin_name' },
                    { text: '規格1', value: 'spec_1' },
                    { text: '規格2', value: 'spec_2' },
                    { text: '產地', value: 'origin' },
                    { text: '功能', value: 'function' },
                    { text: '', value: 'data-table-expand' }
                ];
            }
            return [
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
                { text: '操作', value: 'actions', sortable: false },
                { text: '', value: 'data-table-expand' }
            ];
        },
        ...mapGetters({
            PermissionName: 'getPermissionName'
        }),
        ...mapState(['Fetching', 'Materials', 'UserInfo'])
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
