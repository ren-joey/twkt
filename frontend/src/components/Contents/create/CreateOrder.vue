<template>
    <div>
        <v-card
            class="mx-auto my-4"
            maxWidth="800"
        >
            <v-card-title class="headline d-flex justify-space-between align-center">
                <div class="d-flex align-center">
                    需求單資料
                </div>
            </v-card-title>
            <v-card-text>
                <v-divider />
                <v-form>
                    <v-container>
                        <v-row class="align-center">
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
                        </v-row>

                        <v-row>
                            <v-col
                                cols="12"
                                sm="12"
                            >
                                <v-textarea
                                    v-model="order.description"
                                    label="需求單描述"
                                    placeholder="請詳細敘述產品所要達到的功能"
                                    hideDetails
                                    autoGrow
                                    rounded
                                    dense
                                    filled
                                />
                            </v-col>

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
                                       @click="selectMaterialDialog = true"
                                >
                                    <v-icon>mdi-plus</v-icon> 新增一項產品原物料
                                </v-btn>
                            </v-col>
                        </v-row>

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
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left">原物料名稱</th>
                                    <th class="text-left">功能</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="material in publishedMaterials"
                                    :key="material.serial_number"
                                    @click="selectMaterial(material)"
                                >
                                    <td>{{ material.name }}</td>
                                    <td>{{ material.function }}</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>

                    <template v-if="selectedMaterial.material">
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
                            v-if="selectedMaterial.material"
                            color="success"
                            large
                            @click="selectMaterialConfirm"
                        >
                            新增
                        </v-btn>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: {
        publishedMaterials: {
            type: Array,
            default: () => ([])
        }
    },
    data: () => ({
        order: {
            name: '',
            description: ''
            // order_details: ''
        },
        selectedMaterial: {
            material: undefined,
            amount: 1
        },
        selectedMaterials: [],
        submitFetching: 'N',
        selectMaterialDialog: false
    }),
    computed: {
        inputAttributes() {
            return [
                { disabled: this.editMode === 'N' },
                { filled: true },
                { rounded: true },
                { dense: true }
            ];
        }
    },
    methods: {
        selectMaterial(material) {
            this.selectedMaterial.material = material;
            this.selectedMaterial.amount = 1;
        },
        selectMaterialCancel() {
            this.selectedMaterial.material = undefined;
            this.selectedMaterial.amount = 1;
            this.selectMaterialDialog = false;
        },
        selectMaterialConfirm() {
            this.selectedMaterials.push({
                ...this.selectedMaterial
            });
            this.selectMaterialDialog = false;
            this.selectedMaterial.material = undefined;
            this.selectedMaterial.amount = 1;
        },
        deleteMaterial(idx) {
            this.selectedMaterials.splice(idx, 1);
        },
        save() {
            if (this.selectedMaterials.lendth === 0) {
                alert('至少需選擇一項原物料');
                return;
            }

            let order_details = '';
            this.selectedMaterials.forEach((o, idx) => {
                if (idx !== 0) order_details += ',';
                order_details += `${o.material.id}:${o.amount}`;
            });

            axios({
                method: 'POST',
                url: '/api/order',
                params: {
                    ...this.order,
                    order_details
                }
            }).then(() => {
                this.$router.push({ name: 'order' });
            });
        },
        saveAndSend() {
            // [DEV]
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
