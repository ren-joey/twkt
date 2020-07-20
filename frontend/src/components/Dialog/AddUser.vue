<template>
    <v-dialog
        v-model="dialog"
        width="480px"
    >
        <v-card>
            <v-card-title class="primary white--text">
                新增用戶
            </v-card-title>
            <v-container>
                <v-form lazyValidation>
                    <v-row class="mx-2 align-center">
                        <v-col cols="12" sm="6">
                            <v-select
                                v-model="userData.permission_group_id"
                                :items="PermissionGroups"
                                label="用戶類型"
                                rounded
                                filled
                                dense
                                required
                                :disabled="groupIdLock === 'Y'"
                            />
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="userData.serial_number"
                                label="流水號 (系統自動生成)"
                                dense
                                disabled
                                required
                            />
                        </v-col>
                    </v-row>
                    <v-row class="mx-2">
                        <v-col cols="12">
                            <v-text-field
                                v-model="userData.name"
                                :counter="32"
                                label="用戶名稱"
                                rounded
                                filled
                                dense
                                required
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                v-model="userData.email"
                                label="電子郵件"
                                rounded
                                filled
                                dense
                                required
                            />
                        </v-col>
                        <v-col cols="12">
                            <div class="d-flex" style="width: 100%;">
                                <div stlye="flex: 1;">
                                    <v-text-field
                                        v-model="userData.password"
                                        label="密碼"
                                        :type="passwordVisible === 'Y' ? 'text' : 'password'"
                                        rounded
                                        filled
                                        dense
                                        required
                                    />
                                </div>
                                <div class="ml-2" style="width: auto;">
                                    <v-btn icon
                                           :color="passwordVisible === 'Y' ? 'grey' : 'grey lighten-3'"
                                           @click="passwordVisible === 'Y' ? passwordVisible = 'N' : passwordVisible = 'Y'"
                                           large
                                    >
                                        <v-icon>mdi-eye</v-icon>
                                    </v-btn>
                                </div>
                            </div>
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
                                   @click="userDataValidator"
                                   large
                            >
                                <v-icon>mdi-check</v-icon>
                                確認
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
import bus from '@/bus';
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            dialog: false,
            passwordVisible: 'N',
            userData: {
                permission_group_id: '',
                serial_number: '',
                name: '',
                email: '',
                password: ''
            },
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
            },
            groupIdLock: 'N'
        };
    },
    computed: {
        ...mapGetters({
            PermissionGroups: 'getPermissionGroups'
        })
    },
    watch: {
        dialog(val) {
            if (val === false) this.groupIdLock = 'N';
        },
        'userData.permission_group_id'(id) {
            const userType = this.PermissionGroups.find((group) => group.id === id).col_name;
            this.getSerialNumber(userType);
        }
    },
    mounted() {
        bus.$on('addUser', (userType) => {
            this.dialog = true;
            if (userType) {
                this.getSerialNumber(userType);
                this.userData.permission_group_id = this.PermissionGroups.find((group) => group.col_name === userType).id;
                this.groupIdLock = 'Y';
            } else {
                this.userData.permission_group_id = this.PermissionGroups.find((group) => group.col_name === 'user').id;
            }
        });
    },
    methods: {
        userDataValidator() {
            this.fetchRegister();
        },
        getSerialNumber(userType) {
            axios({
                method: 'GET',
                url: 'api/get-serial-number',
                params: {
                    user_type: userType
                }
            }).then((res) => {
                this.userData.serial_number = res.data;
            }).catch((e) => {
                alert(e.data.message);
            });
        },
        fetchRegister() {
            axios({
                method: 'POST',
                url: 'api/create',
                params: {
                    ...this.userData,
                    password_confirmation: this.userData.password
                }
            }).then(() => {
                this.$store.dispatch('actionFetchUsers');
            }).catch((e) => {
                alert(e);
            }).finally(() => {
                this.dialog = false;
            });
        }
    }
};
</script>
