<template>
    <div v-if="dataPrepare === 'Y'">
        <v-card
            class="mx-auto my-4"
            maxWidth="800"
        >
            <v-card-title class="headline d-flex justify-space-between align-center">
                <div class="d-flex align-center">
                    新增需求單
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
                                                <th class="text-left" />
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
                                                <td>
                                                    <v-btn icon color="secondary">
                                                        <v-icon>mdi-close</v-icon>
                                                    </v-btn>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </template>
                                </v-simple-table>
                            </v-col>

                            <v-col cols="12">
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
                            <v-btn class="ma-2"
                                   color="primary"
                                   xLarge
                                   :loading="submitFetching === 'Y'"
                                   @click="save"
                            >
                                <v-icon left>mdi-content-save</v-icon> 儲存
                            </v-btn>

                            <!-- <v-btn class="ma-2"
                                   color="success"
                                   xLarge
                                   :loading="submitFetching === 'Y'"
                                   @click="saveAndSend"
                            >
                                <v-icon left>mdi-send</v-icon> 儲存並送出
                            </v-btn> -->
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
    </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
    props: {
        publishedMaterials: {
            type: Array,
            default: () => ([])
        }
    },
    data: () => ({
        dataPrepare: 'N',
        order: {},
        selectedMaterialsTemp: [],
        headers: [
            { text: '原物料名稱', value: 'name' },
            { text: '功能', value: 'function' }
        ],
        selectedMaterials: [],
        submitFetching: 'N',
        alert: false,
        selectMaterialDialog: false
    }),
    computed: {
        inputAttributes() {
            return [
                // { disabled: true },
                { filled: true },
                { rounded: true },
                { dense: true }
            ];
        },
        ...mapGetters({
            Columns: 'getOrderColumns'
        })
    },
    mounted() {
        this.Columns.forEach((col) => {
            if (col.type === 'text'
                || col.type === 'select'
                || col.type === 'radio'
                || col.type === 'text_array'
                || col.textarea) this.order[col.col_name] = '';
            else if (col.type === 'checkbox') this.order[col.col_name] = [];
        });

        this.$nextTick(() => { this.dataPrepare = 'Y'; });
    },
    methods: {
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
            if (this.selectedMaterials.lendth === 0) {
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
                method: 'POST',
                url: '/api/order',
                params: {
                    ...order,
                    order_details
                }
            }).then(() => {
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
