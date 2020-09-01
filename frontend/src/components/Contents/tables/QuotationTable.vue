<template>
    <v-card
        class="mx-auto my-4"
        width="100%"
    >
        <v-card-text>
            <p class="headline text--primary">
                {{ subtitle }}
            </p>
            <v-divider />
            <v-data-table
                :headers="headers"
                :items="orders"
                itemKey="id"
                class="elevation-1"
                @click:row="rowClickHandler"
            >
                <template v-slot:item.status="{ item }">
                    <v-chip class="ma-2"
                            small
                            color="success"
                            v-if="item.status === 'complete'"
                    >
                        已完成
                    </v-chip>
                    <v-chip class="ma-2"
                            small
                            outlined
                            color="success"
                            v-if="item.status === 'quoting'"
                    >
                        報價中
                    </v-chip>
                    <v-chip class="ma-2"
                            small
                            color="red"
                            textColor="white"
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
            default: '未命名'
        },
        orders: {
            type: Array,
            default: () => ([])
        }
    },
    data: () => ({
        bus,
        dialog: false,
        singleSelect: false,
        selected: [],
        singleExpand: false
    }),
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
        },
        headers() {
            // if (this.PermissionName === 'user'
            //     || this.PermissionName === 'guest') {
            //     return [
            //         { text: '編號', align: 'start', value: 'serial_number' },
            //         { text: '原料名稱', value: 'name' },
            //         { text: '來源', value: 'origin_name' },
            //         { text: '規格1', value: 'spec_1' },
            //         { text: '規格2', value: 'spec_2' },
            //         { text: '產地', value: 'origin' },
            //         { text: '功能', value: 'function' },
            //         { text: '', value: 'data-table-expand' }
            //     ];
            // }
            return [
                { text: '狀態', align: 'start', value: 'status' },
                { text: '原物料', value: 'material.name' },
                { text: '建立日期', value: 'created_at' }
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
        rowClickHandler(quotation) {
            this.$router.push({
                name: 'quotation',
                params: {
                    quotation_id: quotation.id
                }
            });
        }
    }
};
</script>
