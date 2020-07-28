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
                :items="MaterialCategories"
                itemKey="serial_number"
                @click:row="rowClickHandler"
            >
                <template v-slot:item.total="{ item }">
                    {{ $store.getters.getMaterialsByCategory(item.serial_number).length }} 筆
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
        setCategorySelected: {
            type: Function,
            default: () => {}
        }
    },
    data: () => ({
        subtitle: '總覽',
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
            return [
                { text: '流水號', align: 'start', value: 'serial_number' },
                { text: '類別名稱', align: 'start', value: 'tw_name' },
                { text: '筆數', align: 'end', value: 'total' }
            ];
        },
        ...mapGetters({
            PermissionName: 'getPermissionName',
            MaterialCategories: 'getMaterialCategories'
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
        rowClickHandler(cate) {
            this.setCategorySelected(cate);
        }
    }
};
</script>
