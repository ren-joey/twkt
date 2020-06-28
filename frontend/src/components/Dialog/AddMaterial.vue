<template>
    <v-dialog
        v-model="dialog"
        width="800px"
    >
        <v-card>
            <v-card-title class="primary white--text">
                新增原物料
            </v-card-title>
            <v-container>
                <v-stepper v-model="e1">
                    <v-stepper-header>
                        <v-stepper-step :complete="e1 > 1" step="1">資本資訊</v-stepper-step>

                        <v-divider />

                        <v-stepper-step :complete="e1 > 2" step="2">專利與描述</v-stepper-step>

                        <v-divider />

                        <v-stepper-step step="3">新增完成!</v-stepper-step>
                    </v-stepper-header>

                    <v-stepper-items>
                        <v-form lazyValidation>
                            <v-stepper-content step="1">
                                <v-row class="mx-2">
                                    <v-col
                                        class="align-center justify-space-between"
                                        cols="12"
                                        md="6"
                                    >
                                        <v-select
                                            v-model="input.material_id"
                                            :items="items.order"
                                            label="原料編號"
                                            outlined
                                            dense
                                            required
                                            v-bind="material_id_disable ? {['disabled']: true} : ''"
                                        />
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            v-model="input.material_name"
                                            :counter="30"
                                            label="原料名稱"
                                            required
                                        />
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            v-model="input.material_source"
                                            :counter="30"
                                            label="來源"
                                            required
                                        />
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-select
                                            v-model="input.material_origin"
                                            :items="items.origin"
                                            label="產地"
                                            outlined
                                            dense
                                            required
                                        />
                                    </v-col>
                                    <v-col cols="6">
                                        <v-text-field
                                            v-model="input.material_spec_1"
                                            :counter="30"
                                            label="規格1"
                                            required
                                        />
                                    </v-col>
                                    <v-col cols="6">
                                        <v-combobox
                                            v-model="input.material_spec_2"
                                            :items="items.spec_2"
                                            label="規格2"
                                            required
                                            multiple
                                            outlined
                                            smallChips
                                            dense
                                        />
                                    </v-col>
                                    <v-col class="d-flex justify-end">
                                        <v-btn color="grey light-4 mr-4"
                                               text
                                               large
                                               @click="dialog = false"
                                        >
                                            取消
                                        </v-btn>
                                        <v-btn class="mx-1"
                                               color="primary"
                                               @click="e1 = 2"
                                               large
                                        >
                                            下一步
                                            <v-icon>mdi-chevron-right</v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-stepper-content>

                            <v-stepper-content step="2">
                                <v-row class="mx-2">
                                    <v-col
                                        class="align-center justify-space-between"
                                        cols="12"
                                        md="6"
                                    >
                                        <v-text-field
                                            v-model="input.material_patent"
                                            :counter="30"
                                            label="專利"
                                        />
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-select
                                            v-model="input.material_certification"
                                            :items="items.certification"
                                            label="認證"
                                            multiple
                                            outlined
                                            smallChips
                                            dense
                                        />
                                    </v-col>
                                    <v-col
                                        class="align-center justify-space-between"
                                        cols="12"
                                        md="6"
                                    >
                                        <v-text-field
                                            v-model="input.material_clinic"
                                            :counter="100"
                                            label="臨床研究/文獻"
                                        />
                                    </v-col>
                                    <v-col
                                        class="align-center justify-space-between"
                                        cols="12"
                                        md="6"
                                    >
                                        <v-combobox
                                            v-model="input.material_fn"
                                            :items="items.fn"
                                            label="功能"
                                            multiple
                                            outlined
                                            smallChips
                                            dense
                                        />
                                    </v-col>
                                    <v-col class="d-flex justify-end">
                                        <v-btn color="grey light-4 mr-4"
                                               text
                                               @click="dialog = false"
                                               large
                                        >
                                            取消
                                        </v-btn>
                                        <v-btn class="mx-1"
                                               color="primary lighten-2"
                                               @click="e1 = 1"
                                               outlined
                                               large
                                        >
                                            <v-icon>mdi-chevron-left</v-icon>
                                            返回
                                        </v-btn>
                                        <v-btn class="mx-1"
                                               color="primary"
                                               @click="e1 = 3"
                                               large
                                        >
                                            下一步
                                            <v-icon>mdi-chevron-right</v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-stepper-content>

                            <v-stepper-content step="3">
                                <div class="headline text-center">
                                    新增完成
                                </div>

                                <div class="body-1 grey--text mb-4 text-center">
                                    本視窗將於 5 秒鐘後自動關閉
                                </div>

                                <v-btn
                                    block
                                    color="primary"
                                    @click="dialog = false"
                                    large
                                >
                                    確定
                                </v-btn>
                            </v-stepper-content>
                        </v-form>
                    </v-stepper-items>
                </v-stepper>
            </v-container>
            <!--
            <v-card-actions>
                <v-btn
                    text
                    color="primary"
                >
                    More
                </v-btn>
                <v-spacer />
                <v-btn
                    text
                    color="primary"
                    @click="dialog = false"
                >
                    Cancel
                </v-btn>
                <v-btn
                    text
                    @click="dialog = false"
                >
                    Save
                </v-btn>
            </v-card-actions>
            -->
        </v-card>
    </v-dialog>
</template>

<script>
import bus from '@/bus';

export default {
    data() {
        return {
            dialog: false,
            e1: 1,
            input: {
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
            },
            material_id_disable: false,
            items: {
                order: [
                    {
                        text: 'R001 蝦紅素 (藻紅素)',
                        value: 'R001'
                    },
                    {
                        text: 'R002 鮭魚/魚精華素',
                        value: 'R002'
                    },
                    {
                        text: 'R003 神經醯胺(賽洛美)',
                        value: 'R003'
                    },
                    {
                        text: 'R029 維生素類',
                        value: 'R029'
                    }
                ],
                location: [
                    'Item 1',
                    'Item 2',
                    'Item 3',
                    'Item 4'
                ],
                origin: [
                    '美國',
                    '台灣',
                    '日本',
                    '瑞士',
                    '中國'
                ],
                // type: [
                //     '粉末',
                //     '造粒',
                //     '油狀',
                //     '液狀',
                //     '膏狀',
                //     '其他'
                // ],
                spec_1: '',
                spec_2: [
                    '粉末',
                    '造粒',
                    '油狀',
                    '液狀',
                    '膏狀',
                    '其他'
                ],
                certification: [
                    'Kosher', 'Halal', 'FSSC', 'MSC', 'GMP', 'NGMO', 'GRAS', 'HACCP', 'PDR', 'JECFA', 'ESCOP', 'BHMA', 'CE', 'ISO', '素', '有機'
                ],
                fn: [
                    '頭髮', '腦力', '睡眠', '視力', '骨骼', '口腔', '肝臟功能', '心臟功能', '心血管', '免疫', '腸胃', '排便', '皮膚美容', '美白', '抗癌', '抗發炎', '調節血糖', '調節血脂', '調節血壓', '抗憂鬱', '抗過敏', '控制體重', '男性功能', '女性泌尿道', '經期/更年期', '除臭', '增加吸收率'
                ]
            }
        };
    },
    watch: {
        e1(val) {
            if (val === 3) {
                setTimeout(() => {
                    this.dialog = false;
                    this.e1 = 1;
                }, 5000);
            }
        }
    },
    mounted() {
        bus.$on('addMaterial', (material_id) => {
            this.dialog = !this.dialog;

            if (material_id !== undefined && material_id !== '') {
                this.input.material_id = material_id;
                this.material_id_disable = true;
            } else {
                this.input.material_id = '';
                this.material_id_disable = false;
            }
        });
    }
};
</script>
