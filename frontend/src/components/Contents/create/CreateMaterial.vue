<template>
    <div v-if="dataPrepare === 'Y'">
        <v-card
            class="mx-auto my-4"
            maxWidth="800"
        >
            <v-card-title class="headline d-flex justify-space-between align-center">
                <div class="d-flex align-center">
                    新增原物料
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
                                    v-model="category"
                                    :loading="getSerialNumberFetching === 'Y'"
                                    :disabled="getSerialNumberFetching === 'Y'"
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
                                    :label="`${col.tw_name}${col.required === 'Y' ? '*' : ''}`"
                                    :placeholder="col.description"
                                    dense
                                    v-bind="inputAttributes"
                                />
                            </v-col>

                            <v-col cols="12" v-else-if="col.type === 'checkbox'">
                                <div class="checkbox-group">
                                    <div class="text-subtitle-1 mb-4">
                                        <div class="label-primary" />
                                        <span>{{ col.tw_name }}{{ col.required === 'Y' ? '*' : '' }}</span>
                                    </div>
                                    <v-divider />
                                    <v-row class="px-4">
                                        <v-checkbox class="mr-4"
                                                    v-for="(option, optionIdx) in col.col_option.split(',')"
                                                    :key="`${option}_${optionIdx}`"
                                                    v-model="material[col.col_name]"
                                                    :label="option"
                                                    :value="option"
                                        />
                                    </v-row>
                                </div>
                            </v-col>

                            <v-col cols="12" v-else-if="col.type === 'radio'">
                                <div class="radio-group">
                                    <div class="text-subtitle-1 mb-4">
                                        <span>{{ col.tw_name }}{{ col.required === 'Y' ? '*' : '' }}</span>
                                    </div>
                                    <v-divider />
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
                                </div>
                            </v-col>

                            <v-col cols="12" v-else-if="col.type === 'select'">
                                <v-row class="px-4">
                                    <v-select
                                        :items="col.col_option.split(',')"
                                        v-bind="inputAttributes"
                                        hideDetails
                                        :label="`${col.tw_name}${col.required === 'Y' ? '*' : ''}`"
                                        v-model="material[col.col_name]"
                                    />
                                </v-row>
                            </v-col>
                        </v-row>

                        <div class="d-flex justify-center">
                            <v-btn class="ma-2"
                                   text
                                   color="grey"
                                   xLarge
                                   @click="cancel"
                            >
                                取消
                            </v-btn>
                            <v-btn class="ma-2"
                                   color="primary"
                                   xLarge
                                   :loading="submitFetching === 'Y'"
                                   @click="submit"
                            >
                                <v-icon left>mdi-send</v-icon> 送出
                            </v-btn>
                        </div>
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
        dataPrepare: 'N',
        category: '',
        material: {
            serial_number: ''
        },
        submitFetching: 'N',
        getSerialNumberFetching: 'N'
    }),
    computed: {
        categories() {
            return this.Categories.map((cate) => ({
                name: `${cate.serial_number} ${cate.tw_name}`,
                serial_number: cate.serial_number
            }));
        },
        inputAttributes() {
            return [
                // { disabled: this.editMode === 'N' },
                { filled: true },
                { rounded: true },
                { dense: true }
            ];
        },
        badgeColor() {
            const permissionName = this.UserInfo.permission_group.col_name;
            if (['user', 'guest'].indexOf(permissionName) > -1) {
                return {
                    textColor: 'white',
                    color: 'success'
                };
            }
            if (permissionName === 'agent') {
                return {
                    textColor: 'indigo',
                    color: 'white'
                };
            }
            if (permissionName === 'company') {
                return {
                    textColor: 'white',
                    color: 'teal'
                };
            }
            return {
                textColor: 'white',
                color: 'indigo'
            };
        },
        ...mapGetters({
            PermissionName: 'getPermissionName',
            Categories: 'getMaterialCategories',
            Columns: 'getMaterialColumns'
        }),
        ...mapState(['Fetching', 'Users', 'UserInfo'])
    },
    watch: {
        dialog(val) {
            if (!val) this.close();
        },
        category: {
            handler(next) {
                if (next && next !== '') {
                    if (this.getSerialNumberFetching === 'Y') return;
                    this.getSerialNumberFetching = 'Y';

                    axios({
                        method: 'GET',
                        url: `api/material/get-serial-number/${this.category}`
                    }).then((res) => {
                        this.material.serial_number = res.data;
                    }).catch((e) => {
                        alert(e);
                    }).finally(() => {
                        this.getSerialNumberFetching = 'N';
                    });
                }
            },
            immediate: true
        }
    },
    mounted() {
        this.Columns.forEach((col) => {
            if (col.type === 'text'
                || col.type === 'select'
                || col.type === 'radio'
                || col.type === 'text_array') this.material[col.col_name] = '';
            else if (col.type === 'checkbox') this.material[col.col_name] = [];
        });

        this.$nextTick(() => { this.dataPrepare = 'Y'; });
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
        cancel() {
            this.$router.push({ name: 'material' });
        },
        submit() {
            if (this.material.serial_number === '') {
                alert('請選擇原物料分類，並取得流水號。');
                return;
            }

            for (let i = 0; i < this.Columns.length; i += 1) {
                const c = this.Columns[i];
                if (c.required === 'Y'
                    && (!this.material[c.col_name] || this.material[c.col_name].length === 0)) {
                    alert(`您輸入的資料有誤，${c.tw_name}為必填欄位。`);
                    return;
                }
            }

            if (this.submitFetching === 'Y') return;
            this.submitFetching = 'Y';

            const material = {};
            const keys = Object.keys(this.material);
            keys.forEach((key) => {
                if (Array.isArray(this.material[key])
                && this.material[key].length > 0) material[key] = this.material[key].join(',');
                else if (this.material[key] !== '') material[key] = this.material[key];
            });

            axios({
                method: 'POST',
                url: 'api/material',
                params: material
            }).then((res) => {
                this.user = res.data;
                this.userOrigin = JSON.parse(JSON.stringify(res.data));
                this.$store.dispatch('actionFetchMaterials');
                this.$router.push({ name: 'material' });
            }).catch((e) => {
                alert(e);
            }).finally(() => {
                this.submitFetching = 'N';
            });
        }
    }
};
</script>

<style lang="scss">
.checkbox-group,
.radio-group {
    padding: 12px 24px;
    background-color: rgba(0, 0, 0, 0.06);
    transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);

    &:hover {
        background-color: rgba(0, 0, 0, 0.12);
    }
}

.label-primary {
    display: inline-block;
    margin-right: 5px;
    width: 8px;
    height: 15px;
    background-color: #6495ed;
    border-radius: 5px;
    transform: translateY(3px);
}
</style>
