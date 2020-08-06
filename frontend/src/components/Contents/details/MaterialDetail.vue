<template>
    <div v-if="material">
        <v-card
            class="mx-auto my-4"
            maxWidth="800"
        >
            <v-card-title class="headline d-flex justify-space-between align-center">
                <div class="d-flex align-center">
                    原物料資料
                </div>
            </v-card-title>
            <v-card-text>
                <v-divider />
                <v-form>
                    <v-container>
                        <v-row align="center">
                            <v-col cols="6">
                                <v-select
                                    :items="categories"
                                    v-bind="inputAttributes"
                                    hideDetails
                                    label="分類"
                                    itemText="name"
                                    itemValue="serial_number"
                                    :value="material.serial_number.split('-')[0]"
                                    disabled
                                />
                            </v-col>

                            <v-col cols="6">
                                <v-text-field
                                    v-model="material.serial_number"
                                    label="流水號 (系統自動生成)"
                                    hideDetails
                                    disabled
                                    dense
                                />
                            </v-col>
                        </v-row>

                        <v-row v-for="(col, idx) in Columns" :key="`material_form_column_${idx}`">
                            <v-col cols="12"
                                   v-if="col.type === 'text'
                                       || col.type === 'text_array'"
                            >
                                <v-text-field
                                    v-model="material[col.col_name]"
                                    hideDetails
                                    :label="col.tw_name"
                                    :placeholder="col.description"
                                    dense
                                    v-bind="inputAttributes"
                                />
                            </v-col>

                            <v-col cols="12" v-else-if="col.type === 'checkbox'">
                                <div class="checkbox-group">
                                    <div class="text-subtitle-1">
                                        <div class="label-primary" />
                                        <span>{{ col.tw_name }}</span>
                                        <span v-if="editMode === 'N'" style="color: #999;">&nbsp;{{ material[col.col_name] || '未填寫' }}</span>
                                    </div>
                                    <template v-if="editMode === 'Y'">
                                        <v-divider class="mt-4" />
                                        <v-row class="px-4">
                                            <v-checkbox class="mr-4"
                                                        v-for="(option, optionIdx) in col.col_option.split(',')"
                                                        :key="`${option}_${optionIdx}`"
                                                        v-model="material[col.col_name]"
                                                        :label="option"
                                                        :value="option"
                                            />
                                        </v-row>
                                    </template>
                                </div>
                            </v-col>

                            <v-col cols="12" v-else-if="col.type === 'radio'">
                                <div class="radio-group">
                                    <div class="text-subtitle-1">
                                        {{ col.tw_name }}
                                        <span v-if="editMode === 'N'" style="color: #999;">&nbsp;{{ material[col.col_name] || '未填寫' }}</span>
                                    </div>
                                    <template v-if="editMode === 'Y'">
                                        <v-divider class="mt-4" />
                                        <v-row class="px-4">
                                            <v-radio-group v-model="material[col.col_name]">
                                                <v-radio
                                                    class="mr-4"
                                                    v-for="(option, optionIdx) in col.col_option.split(',')"
                                                    :key="`${option}_${optionIdx}`"
                                                    :label="option"
                                                    :value="option"
                                                />
                                            </v-radio-group>
                                        </v-row>
                                    </template>
                                </div>
                            </v-col>

                            <v-col cols="12" v-else-if="col.type === 'select'">
                                <v-row class="px-4">
                                    <v-select
                                        :items="col.col_option.split(',')"
                                        v-bind="inputAttributes"
                                        hideDetails
                                        :label="col.tw_name"
                                        v-model="material[col.col_name]"
                                    />
                                </v-row>
                            </v-col>
                        </v-row>

                        <template v-if="PermissionName !== 'user'">
                            <div v-if="editMode === 'N'" class="d-flex justify-center">
                                <v-btn class="ma-2"
                                       color="success"
                                       xLarge
                                       @click="editMode = 'Y'"
                                >
                                    <v-icon left>mdi-pencil</v-icon> 修改
                                </v-btn>
                            </div>
                            <div v-else class="d-flex justify-center">
                                <v-btn class="ma-2"
                                       text
                                       color="grey"
                                       xLarge
                                       @click="editCancel"
                                >
                                    取消
                                </v-btn>
                                <v-btn class="ma-2"
                                       color="primary"
                                       xLarge
                                       :loading="editUserFetching === 'Y'"
                                       @click="editSubmit"
                                >
                                    <v-icon left>mdi-check</v-icon> 確認修改
                                </v-btn>
                            </div>
                        </template>
                    </v-container>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import axios from 'axios';
import bus from '@/bus';
import { mapState, mapGetters } from 'vuex';

export default {
    data: () => ({
        bus,
        material: undefined,
        materialOrigin: undefined,
        editMode: 'N',
        editMaterialFetching: 'N'
    }),
    computed: {
        categories() {
            return this.Categories.map((cate) => ({
                name: `${cate.serial_number} ${cate.tw_name}`,
                serial_number: cate.serial_number
            }));
        },
        editable() {
            return this.PermissionName === 'agent'
                || this.PermissionName === 'admin'
                || this.UserInfo.id === this.material.created_by;
        },
        inputAttributes() {
            return [
                { disabled: this.editMode === 'N' },
                { filled: true },
                { rounded: true },
                { dense: true }
            ];
        },
        ...mapGetters({
            PermissionName: 'getPermissionName',
            UserInfo: 'getUserInfo',
            Categories: 'getMaterialCategories',
            Columns: 'getMaterialColumns'
        }),
        ...mapState(['Fetching', 'Users'])
    },
    watch: {
        dialog(val) {
            if (!val) this.close();
        }
    },
    mounted() {
        this.fetchMaterialData();
    },
    methods: {
        fetchMaterialData() {
            axios({
                method: 'GET',
                url: `api/material/${this.$route.params.material_id}`
            }).then((res) => {
                if (!res.data.id) this.$router.push({ name: 'material' });
                this.material = res.data;
                this.materialOrigin = JSON.parse(JSON.stringify(res.data));
            }).catch((e) => {
                alert(e);
            });
        },
        editCancel() {
            this.material = JSON.parse(JSON.stringify(this.materialOrigin));
            this.editMode = 'N';
        },
        editSubmit() {
            if (this.editUserFetching === 'Y') return;
            this.editUserFetching = 'Y';

            axios({
                method: 'PATCH',
                url: `api/user/${this.$route.params.user_id}`,
                params: this.user.user_information
            }).then((res) => {
                this.user = res.data;
                this.userOrigin = JSON.parse(JSON.stringify(res.data));
                this.$store.dispatch('actionFetchUsers');
            }).catch((e) => {
                alert(e);
            }).finally(() => {
                this.editUserFetching = 'N';
                this.editMode = 'N';
            });
        }
    }
};
</script>
