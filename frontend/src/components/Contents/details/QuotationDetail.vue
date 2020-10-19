<template>
    <div>
        <v-card
            class="mx-auto my-4"
            maxWidth="800"
        >
            <v-card-title class="headline d-flex justify-space-between align-center">
                <div class="d-flex align-center">
                    詢價單明細
                    <v-chip class="ma-2"
                            small
                            color="success"
                            v-if="quotation.status === 'complete'"
                    >
                        已完成
                    </v-chip>
                    <v-chip class="ma-2"
                            small
                            outlined
                            color="success"
                            v-else-if="quotation.status === 'quoting'"
                    >
                        報價中
                    </v-chip>
                    <v-chip class="ma-2"
                            small
                            color="red"
                            textColor="white"
                            v-else-if="quotation.status === 'verify'"
                    >
                        審核中
                    </v-chip>
                </div>
                <div class="ml-auto"
                     v-if="PermissionName === 'agent' || PermissionName === 'admin'
                         || quotation.material.created_by === UserInfo.id
                     "
                >
                    <v-icon
                        large
                        color="blue darken-2"
                        @click="showComments({ quotation_id: quotation.id })"
                    >
                        mdi-message-text
                    </v-icon>
                </div>
            </v-card-title>
            <v-card-text>
                <v-divider />
                <v-form>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="8">
                                <v-text-field
                                    :value="quotation.material.name"
                                    hideDetails
                                    label="原物料名稱"
                                    dense
                                    v-bind="inputAttributes"
                                    disabled
                                />
                            </v-col>
                            <v-col cols="12" sm="8">
                                <v-text-field
                                    v-model="quotationPrice"
                                    hideDetails
                                    :label="`報價 (${quotation.currency})`"
                                    dense
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                        </v-row>
                        <div class="d-flex justify-center">
                            <v-btn class="ma-2"
                                   color="success"
                                   xLarge
                                   :loading="submitFetching === 'Y'"
                                   v-if="quotation.status === 'quoting' && quotation.material.created_by === UserInfo.id
                                       || quotation.status === 'verify' && (PermissionName === 'admin' || PermissionName === 'agent')"
                                   @click="save"
                            >
                                <v-icon left>mdi-send</v-icon> {{ quotation.status === 'quoting' ? '報價完成' : '審核完成' }}
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
import { mapGetters } from 'vuex';

export default {
    props: {
        quotation: {
            type: Object,
            default: () => ({})
        }
    },
    data: () => ({
        dataPrepare: 'N',
        quotationPrice: null,
        selectedMaterialsTemp: [],
        selectedMaterials: [],
        submitFetching: 'N',
        editMode: 'N',
        alert: false,
        selectMaterialDialog: false
    }),
    computed: {
        inputAttributes() {
            return [
                // { disabled: this.inputDisabled },
                { filled: true },
                { rounded: true },
                { dense: true }
            ];
        },
        inputDisabled() {
            return this.editMode === 'N'
                        && !(this.quotation.status === 'verify'
                                && (this.PermissionName === 'admin'
                                    || this.PermissionName === 'agent'));
        },
        ...mapGetters({
            UserInfo: 'getUserInfo',
            Columns: 'getOrderColumns',
            PermissionName: 'getPermissionName',
            getMaterialById: 'getMaterialById'
        })
    },
    mounted() {
        this.quotationPrice = this.quotation.price;
        this.$nextTick(() => { this.dataPrepare = 'Y'; });
    },
    methods: {
        showComments(obj) {
            bus.$emit('showComments', obj);
        },
        selectMaterialCancel() {
            this.selectedMaterialsTemp = [];
            this.selectMaterialDialog = false;
        },
        selectMaterialConfirm() {
            this.selectedMaterials = this.selectedMaterialsTemp.map((material) => ({ material, amount: 1 }));
            this.selectMaterialDialog = false;
        },
        deleteMaterial(idx) {
            this.selectedMaterials.splice(idx, 1);
        },
        validation() {
            let valid = 'Y';
            this.Columns.forEach((c) => {
                if (c.required === 'Y' && !this.order[c.col_name]) {
                    this.alert = true;
                    valid = 'N';
                }
            });

            if (valid === 'Y') this.alert = false;
            return valid;
        },
        save() {
            if (!this.quotationPrice || this.quotationPrice.length === 0) {
                alert('報價數字錯誤');
                return;
            }
            // if (this.validation() === 'N') return;

            axios({
                method: 'patch',
                url: `/api/quotation/${this.quotation.id}`,
                params: {
                    price: this.quotationPrice,
                    status: this.quotation.status === 'quoting' ? 'verify' : 'complete'
                }
            }).then(() => {
                this.$store.dispatch('actionFetchQuotations');
                this.$router.push({ name: 'quotation' });
            });
        },
        saveAndSend() {
            // [DEV]
        },
        selectMaterialDialogOpen() {
            this.selectMaterialDialog = true;
            this.selectedMaterialsTemp = this.selectedMaterials.map((m) => ({ ...m.material }));
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
