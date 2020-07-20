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
                        <v-row class="align-center">
                            <v-col cols="4" md="2">
                                <v-text-field
                                    v-model="material.serial_number"
                                    label="流水號"
                                    disabled
                                    dense
                                />
                            </v-col>
                            <v-col cols="6" md="4">
                                <v-text-field
                                    v-model="material.name"
                                    :counter="editMode === 'N' ? false : 32"
                                    label="名稱"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col
                                cols="12"
                                sm="4"
                            >
                                <v-text-field
                                    v-model="material.moq"
                                    label="MOQ"
                                    prependIcon="mdi-identifier"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col
                                cols="12"
                                sm="8"
                            >
                                <v-text-field
                                    v-model="material.spec_1"
                                    label="規格一"
                                    prependIcon="mdi-email"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-text-field
                                    v-model="material.spec_2"
                                    label="規格二"
                                    prependIcon="mdi-phone"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-text-field
                                    v-model="material.origin_name"
                                    label="原廠名稱"
                                    prependIcon="mdi-fax"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="material.origin"
                                    label="原料產地"
                                    prependIcon="mdi-map-marker"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="material.patent"
                                    label="專利"
                                    prependIcon="mdi-web"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="6" sm="4">
                                <v-text-field
                                    v-model="material.certification"
                                    label="認證"
                                    prependIcon="mdi-card-account-phone"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="material.report"
                                    label="臨床研究/文獻報告"
                                    prependIcon="mdi-face-agent"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="6" sm="4">
                                <v-text-field
                                    v-model="material.function"
                                    label="功能"
                                    prependIcon="mdi-account-tie"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                            <v-col cols="6" sm="4">
                                <v-text-field
                                    v-model="material.allergen"
                                    label="原料來源含有過敏原"
                                    prependIcon="mdi-card-account-phone"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="6" sm="4">
                                <v-text-field
                                    v-model="material.feature"
                                    label="原料特性"
                                    prependIcon="mdi-account-tie"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                            <v-col cols="6" sm="4">
                                <v-text-field
                                    v-model="material.process"
                                    label="加工製程"
                                    prependIcon="mdi-card-account-phone"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="6" sm="4">
                                <v-text-field
                                    v-model="material.dosage_form"
                                    label="適用劑型"
                                    prependIcon="mdi-account-tie"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                            <v-col cols="6" sm="4">
                                <v-text-field
                                    v-model="material.list"
                                    label="可供食品使用原料彙整一覽表"
                                    prependIcon="mdi-card-account-phone"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="6" sm="4">
                                <v-text-field
                                    v-model="material.gov_limit"
                                    label="衛福部法規限制"
                                    prependIcon="mdi-account-tie"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                            <v-col cols="6" sm="4">
                                <v-text-field
                                    v-model="material.dosage_amount"
                                    label="建議劑量"
                                    prependIcon="mdi-card-account-phone"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="6" sm="4">
                                <v-text-field
                                    v-model="material.image_json"
                                    label="上傳產品資訊 (jpg./pdf.檔案)"
                                    prependIcon="mdi-account-tie"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                            <v-col cols="6" sm="4">
                                <v-text-field
                                    v-model="material.cuzo"
                                    label="常備庫存"
                                    prependIcon="mdi-card-account-phone"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                            <v-col cols="6" sm="4">
                                <v-text-field
                                    v-model="material.comment"
                                    label="其他"
                                    prependIcon="mdi-card-account-phone"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                        </v-row>

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
            UserInfo: 'getUserInfo'
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
