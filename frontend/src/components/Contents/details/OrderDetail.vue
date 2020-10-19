<template>
    <div v-if="dataPrepare === 'Y'">
        <v-card
            class="mx-auto my-4"
            maxWidth="800"
        >
            <v-card-title class="headline d-flex justify-space-between align-center">
                <div class="d-flex align-center">
                    需求單明細
                    <v-chip class="ma-2"
                            small
                            color="success"
                            v-if="order.status === 'complete'"
                    >
                        已完成
                    </v-chip>
                    <v-chip class="ma-2"
                            small
                            outlined
                            color="success"
                            v-else-if="order.status === 'quoting'"
                    >
                        詢價中
                    </v-chip>
                    <v-chip class="ma-2"
                            small
                            color="red"
                            textColor="white"
                            v-else-if="order.status === 'confirm'"
                    >
                        待確認
                    </v-chip>
                    <v-chip class="ma-2"
                            small
                            outlined
                            color="red"
                            v-else-if="order.status === 'verify'"
                    >
                        審核中
                    </v-chip>
                    <v-chip class="ma-2"
                            small
                            v-if="order.status === 'edit'"
                    >
                        編輯
                    </v-chip>
                </div>
                <div class="ml-auto">
                    <v-icon
                        large
                        color="blue darken-2"
                        @click="showComments({ order_id: order.id })"
                    >
                        mdi-message-text
                    </v-icon>
                </div>
            </v-card-title>
            <v-card-text>
                <v-divider />
                <v-form>
                    <v-container>
                        <v-row v-for="(col, idx) in Columns" :key="`order_form_column_${idx}`">
                            <v-col cols="12"
                                   v-if="col.type === 'text'
                                       || col.type === 'text_array'"
                            >
                                <v-text-field
                                    v-model="order[col.col_name]"
                                    hideDetails
                                    :label="col.tw_name + (col.required === 'Y' ? '  (必填)': '')"
                                    :placeholder="col.description"
                                    dense
                                    v-bind="inputAttributes"
                                />
                            </v-col>

                            <v-col cols="12" v-else-if="col.type === 'checkbox'">
                                <div class="checkbox-group">
                                    <div class="text-subtitle-1 mb-4">
                                        <div class="label-primary" />
                                        <span>{{ col.tw_name }}</span>
                                        <span v-if="col.required === 'Y'" class="red--text">  (必填)</span>
                                    </div>
                                    <v-divider />
                                    <v-row class="px-4">
                                        <v-checkbox class="mr-4"
                                                    v-for="(option, optionIdx) in col.col_option.split(',')"
                                                    :key="`${option}_${optionIdx}`"
                                                    v-model="order[col.col_name]"
                                                    :label="option"
                                                    :value="option"
                                                    :disabled="inputDisabled"
                                        />
                                    </v-row>
                                </div>
                            </v-col>

                            <v-col cols="12" v-else-if="col.type === 'radio'">
                                <div class="radio-group">
                                    <div class="text-subtitle-1 mb-4">
                                        <span>{{ col.tw_name }}</span>
                                        <span v-if="col.required === 'Y'" class="red--text">  (必填)</span>
                                    </div>
                                    <v-divider />
                                    <v-row class="px-4">
                                        <v-radio-group v-model="order[col.col_name]">
                                            <v-radio
                                                class="mr-4"
                                                v-for="(option, optionIdx) in col.col_option.split(',')"
                                                :key="`${option}_${optionIdx}`"
                                                :label="option"
                                                :value="option"
                                                :disabled="inputDisabled"
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
                                        :label="col.tw_name + (col.required === 'Y' ? '  (必填)': '')"
                                        v-model="order[col.col_name]"
                                        :disabled="inputDisabled"
                                    />
                                </v-row>
                            </v-col>

                            <v-col
                                v-else-if="col.type === 'textarea'"
                                cols="12"
                                sm="12"
                            >
                                <v-textarea
                                    v-model="order[col.col_name]"
                                    :label="col.tw_name + (col.required === 'Y' ? '  (必填)': '')"
                                    :placeholder="col.description"
                                    hideDetails
                                    autoGrow
                                    rounded
                                    dense
                                    filled
                                    :disabled="inputDisabled"
                                />
                            </v-col>
                        </v-row>

                        <!-- <v-row class="align-center">
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="order.name"
                                    label="產品名稱"
                                    prependIcon="mdi-identifier"
                                    v-bind="inputAttributes"
                                    hideDetails
                                    dense
                                />
                            </v-col>
                        </v-row> -->

                        <v-row>
                            <v-col v-if="selectedMaterials.length > 0">
                                <v-simple-table>
                                    <template v-slot:default>
                                        <thead>
                                            <tr>
                                                <th class="text-left">原物料名稱</th>
                                                <th class="text-left">功能</th>
                                                <th class="text-left">數量</th>
                                                <!-- <th class="text-left" /> -->
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(o, idx) in selectedMaterials"
                                                :key="`selected_${idx}_${o.material.serial_number}`"
                                                @click="deleteMaterial(idx)"
                                            >
                                                <td>{{ o.material.name }}</td>
                                                <td>{{ o.material.function }}</td>
                                                <td>{{ o.amount }}</td>
                                                <!-- <td>
                                                    <v-btn icon color="secondary">
                                                        <v-icon>mdi-close</v-icon>
                                                    </v-btn>
                                                </td> -->
                                            </tr>
                                        </tbody>
                                    </template>
                                </v-simple-table>
                            </v-col>

                            <v-col cols="12" v-if="PermissionName === 'agent' || PermissionName === 'admin' && order.status === 'verify'">
                                <v-btn text
                                       xLarge
                                       block
                                       outlined
                                       color="primary"
                                       prependIcon="mdi-plus"
                                       @click="selectMaterialDialogOpen"
                                >
                                    <v-icon>mdi-plus</v-icon> 新增產品原物料
                                </v-btn>
                            </v-col>
                        </v-row>

                        <transition name="fade">
                            <v-alert
                                dense
                                outlined
                                type="error"
                                v-if="alert"
                            >
                                {{ $t('LOGIN_ALERT_USER_INPUT_ERROR') }}
                            </v-alert>
                        </transition>

                        <div class="d-flex justify-center">
                            <!-- <v-btn class="ma-2"
                                   color="primary"
                                   xLarge
                                   :loading="submitFetching === 'Y'"
                                   @click="save"
                            >
                                <v-icon left>mdi-content-save</v-icon> 儲存
                            </v-btn> -->

                            <v-btn class="ma-2"
                                   color="success"
                                   xLarge
                                   :loading="submitFetching === 'Y'"
                                   v-if="isSaveBtnVisible === 'Y'"
                                   @click="save"
                            >
                                <v-icon left>mdi-send</v-icon> 審核完成並詢價
                            </v-btn>
                            <v-btn class="ma-2"
                                   color="success"
                                   xLarge
                                   :loading="submitFetching === 'Y'"
                                   v-else-if="isQuotationAllCompleted === 'Y'"
                                   @click="complete"
                            >
                                <v-icon left>mdi-send</v-icon> 完成需求單
                            </v-btn>
                        </div>
                    </v-container>
                </v-form>
            </v-card-text>
        </v-card>

        <v-dialog
            v-model="selectMaterialDialog"
            maxWidth="800"
        >
            <v-card>
                <v-card-title class="headline">選擇原物料</v-card-title>

                <v-card-text>
                    <v-data-table v-model="selectedMaterialsTemp"
                                  :headers="headers"
                                  :items="publishedMaterials"
                                  showSelect
                    />

                    <template v-if="false">
                        <v-divider class="my-4" />
                        <v-row align="center" justify="center">
                            <v-col cols="auto">
                                <v-text-field disabled
                                              rounded
                                              hideDetails
                                              filled
                                              dense
                                              label="原物料名稱"
                                              v-model="selectedMaterial.material.name"
                                              style="flex: 1"
                                />
                            </v-col>
                            <v-col cols="2">
                                <v-text-field rounded
                                              hideDetails
                                              filled
                                              dense
                                              label="數量"
                                              v-model="selectedMaterial.amount"
                                              style="width: 100px;"
                                />
                            </v-col>
                            <v-col cols="2">
                                <v-btn icon
                                       color="grey"
                                       @click="selectedMaterial.material = undefined"
                                >
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </template>

                    <v-row justify="center" class="mt-4">
                        <v-btn
                            color="grey"
                            text
                            large
                            @click="selectMaterialCancel"
                        >
                            取消
                        </v-btn>
                        <v-btn
                            v-if="selectedMaterialsTemp.length > 0"
                            color="success"
                            large
                            @click="selectMaterialConfirm"
                        >
                            新增 {{ selectedMaterialsTemp.length }} 個項目
                        </v-btn>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>

        <v-card
            class="mx-auto my-4"
            maxWidth="800"
            v-for="(quotation, idx) in order.quotations"
            :key="idx"
        >
            <v-card-title class="headline d-flex justify-space-between align-center">
                <div class="d-flex align-center">
                    詢價單
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
                <div class="ml-auto" v-if="PermissionName === 'admin' || PermissionName === 'agent'">
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
                                    :value="getMaterialById(quotation.material_id).name"
                                    hideDetails
                                    label="原物料名稱"
                                    dense
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                            <v-col cols="12" sm="8">
                                <v-text-field
                                    :value="quotation.price"
                                    hideDetails
                                    :label="`報價 (${quotation.currency})`"
                                    dense
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                        </v-row>
                        <!-- <div class="d-flex justify-center">
                            <v-btn class="ma-2"
                                   color="success"
                                   xLarge
                                   :loading="submitFetching === 'Y'"
                                   v-if="order.status === 'verify'
                                       && (PermissionName === 'admin'
                                           || PermissionName === 'agent')"
                                   @click="save"
                            >
                                <v-icon left>mdi-send</v-icon> 審核完成並詢價
                            </v-btn>
                        </div> -->
                    </v-container>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import bus from '@/bus';

export default {
    props: {
        publishedMaterials: {
            type: Array,
            default: () => ([])
        },
        order: {
            type: Object,
            default: () => ({})
        }
    },
    data: () => ({
        dataPrepare: 'N',
        orderAlias: {},
        selectedMaterialsTemp: [],
        headers: [
            { text: '原物料名稱', value: 'name' },
            { text: '功能', value: 'function' }
        ],
        selectedMaterials: [],
        submitFetching: 'N',
        editMode: 'N',
        alert: false,
        selectMaterialDialog: false
    }),
    computed: {
        isQuotationAllCompleted() {
            const { order } = this;
            let status = 'Y';
            if (order.status !== 'quoting') status = 'N';
            order.quotations.forEach((q) => { // eslint-disable-line
                if (q.status !== 'complete') status = 'N';
            });
            return status;
        },
        isSaveBtnVisible() {
            const { order, PermissionName } = this;
            if (order.status === 'verify'
                    && (PermissionName === 'admin'
                        || PermissionName === 'agent')) return 'Y';
            return 'N';
        },
        inputAttributes() {
            return [
                { disabled: this.inputDisabled },
                { filled: true },
                { rounded: true },
                { dense: true }
            ];
        },
        inputDisabled() {
            return this.editMode === 'N'
                        && !(this.order.status === 'verify'
                                && (this.PermissionName === 'admin'
                                    || this.PermissionName === 'agent'));
        },
        ...mapGetters({
            Columns: 'getOrderColumns',
            PermissionName: 'getPermissionName',
            getMaterialById: 'getMaterialById'
        })
    },
    mounted() {
        this.Columns.forEach((col) => {
            this.orderAlias[col.col_name] = this.order[col.col_name];
            // if (col.type === 'text'
            //     || col.type === 'select'
            //     || col.type === 'radio'
            //     || col.type === 'text_array'
            //     || col.textarea) this.orderAlias[col.col_name] = this.order[col.col_name];
            // else if (col.type === 'checkbox') this.order[col.col_name] = [];
        });

        if (this.order.order_details) {
            this.selectedMaterials = this.order.order_details.split(',').map((m) => ({
                material: this.$store.getters.getMaterialById(+m.split(':')[0]),
                amount: 1
            }));
        }

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
            if (this.order.status !== 'verify') return;
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
            if (this.selectedMaterials.length === 0) {
                alert('至少需選擇一項原物料');
                return;
            }
            if (this.validation() === 'N') return;

            let order_details = '';
            this.selectedMaterials.forEach((o, idx) => {
                if (idx !== 0) order_details += ',';
                order_details += `${o.material.id}:${o.amount}`;
            });
            const keys = Object.keys(this.order);
            const order = {};
            keys.forEach((key) => {
                if (Array.isArray(this.order[key]))order[key] = this.order[key].join(',');
                else order[key] = this.order[key];
            });

            axios({
                method: 'patch',
                url: `/api/order/${this.order.id}`,
                params: {
                    ...order,
                    order_details,
                    status: 'quoting'
                }
            }).then(() => {
                this.$store.dispatch('actionFetchOrders');
                this.$router.push({ name: 'order' });
            });
        },
        complete() {
            axios({
                method: 'patch',
                url: `/api/order/${this.order.id}`,
                params: { status: 'complete' }
            }).then(() => {
                this.$store.dispatch('actionFetchOrders');
                this.$router.push({ name: 'order' });
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
