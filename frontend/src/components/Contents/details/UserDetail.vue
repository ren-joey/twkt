<template>
    <div v-if="user">
        <v-card
            class="mx-auto my-4"
            maxWidth="800"
        >
            <v-card-title class="headline d-flex justify-space-between align-center">
                <div class="d-flex align-center">
                    <v-list-item-avatar :color="badgeColor.color" size="48">
                        <span :class="[`${badgeColor.textColor}--text`]" style="font-size: 0.75em;">
                            {{ user.user_information.name.toUpperCase().substring(0, 2) }}
                        </span>
                    </v-list-item-avatar>
                    基本資料
                </div>
            </v-card-title>
            <v-card-text>
                <v-divider />
                <v-form>
                    <v-container>
                        <v-row class="align-center">
                            <v-col cols="4" md="2">
                                <v-text-field
                                    v-model="user.user_information.serial_number"
                                    label="流水號"
                                    disabled
                                    dense
                                />
                            </v-col>
                            <v-col cols="6" md="4">
                                <v-text-field
                                    v-model="user.user_information.name"
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
                                    v-model="user.user_information.tax_id"
                                    label="統一編號"
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
                                    v-model="user.user_information.email"
                                    label="電子郵件"
                                    prependIcon="mdi-email"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-text-field
                                    v-model="user.user_information.phone"
                                    label="公司電話"
                                    prependIcon="mdi-phone"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-text-field
                                    v-model="user.user_information.fax"
                                    label="傳真號碼"
                                    prependIcon="mdi-fax"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="user.user_information.address"
                                    label="地址"
                                    prependIcon="mdi-map-marker"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="user.user_information.url"
                                    label="官方網站"
                                    prependIcon="mdi-web"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="6" sm="4">
                                <v-text-field
                                    v-model="user.user_information.liaison_name"
                                    label="聯絡人"
                                    prependIcon="mdi-account-tie"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                            <v-col cols="6" sm="4">
                                <v-text-field
                                    v-model="user.user_information.liaison_phone"
                                    label="聯繫方式"
                                    prependIcon="mdi-card-account-phone"
                                    v-bind="inputAttributes"
                                />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="user.user_information.service"
                                    label="服務項目"
                                    prependIcon="mdi-face-agent"
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

        <v-card
            class="mx-auto my-4"
            maxWidth="800"
        >
            <v-card-title class="headline d-flex justify-space-between align-center">
                <div>
                    <v-icon v-if="notificationEnable" class="mr-2">mdi-bell</v-icon>
                    <v-icon v-else class="mr-2">mdi-bell-off</v-icon>
                    Notification Settings
                </div>
                <div class="ml-auto">
                    <v-switch
                        v-model="notificationEnable"
                        :label="notificationEnable ? '啟用' : '關閉'"
                    />
                </div>
            </v-card-title>
            <v-card-text>
                <v-divider />
                <v-form>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="4">
                                <v-text-field
                                    v-model="user.user_information.line_id"
                                    label="LINE ID"
                                    prependInnerIcon="mdi-chat"
                                    filled
                                    rounded
                                    dense
                                />
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-text-field
                                    v-model="user.user_information.wechat_id"
                                    label="WeChat ID"
                                    prependInnerIcon="mdi-wechat"
                                    filled
                                    rounded
                                    dense
                                />
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-text-field
                                    v-model="user.user_information.whatsapp_id"
                                    label="WhatsApp ID"
                                    prependInnerIcon="mdi-whatsapp"
                                    filled
                                    rounded
                                    dense
                                />
                            </v-col>
                        </v-row>

                        <div class="d-flex justify-center">
                            <v-btn class="ma-2"
                                   color="primary"
                                   xLarge
                                   @click="editSubmit"
                                   :loading="editUserFetching === 'Y'"
                            >
                                <v-icon left>mdi-check</v-icon> 確認修改
                            </v-btn>
                        </div>
                    </v-container>
                </v-form>
            </v-card-text>
        </v-card>

        <v-card
            class="mx-auto my-4"
            maxWidth="800"
        >
            <v-card-title class="headline d-flex justify-space-between align-center">
                <div class="d-flex align-center">
                    <v-icon class="mr-2">mdi-lock-reset</v-icon>
                    重設密碼
                </div>
            </v-card-title>
            <v-card-text>
                <v-divider />
                <v-form>
                    <v-container>
                        <div class="d-flex align-center">
                            <div style="flex: 1;">
                                <v-text-field
                                    :type="passwordVisible === 'Y' ? 'text' : 'password'"
                                    v-model="resetPassword"
                                    :counter="32"
                                    label="請輸入新密碼"
                                    dense
                                    rounded
                                    filled
                                    clearable
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

                        <div class="d-flex justify-center">
                            <div class="mx-2">
                                <v-btn color="primary"
                                       dark
                                       xLarge
                                       @click="resetPasswordSubmit"
                                       :loading="resetPasswordFetching === 'Y'"
                                >
                                    重設密碼
                                </v-btn>
                            </div>
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
        user: undefined,
        userOrigin: undefined,
        editMode: 'N',
        resetPassword: '',
        passwordVisible: 'N',
        notificationEnable: false,
        editUserFetching: 'N',
        resetPasswordFetching: 'N'
    }),
    computed: {
        inputAttributes() {
            return [
                { disabled: this.editMode === 'N' },
                { filled: true },
                { rounded: true },
                { dense: true }
            ];
        },
        badgeColor() {
            const permissionName = this.user.permission_group.col_name;
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
            PermissionName: 'getPermissionName'
        }),
        ...mapState(['Fetching', 'Users', 'UserInfo'])
    },
    watch: {
        dialog(val) {
            if (!val) this.close();
        }
    },
    mounted() {
        this.fetchUserData();
    },
    methods: {
        fetchUserData() {
            axios({
                method: 'GET',
                url: `api/user/${this.$route.params.user_id}`
            }).then((res) => {
                if (!res.data.id) this.$router.push({ name: 'user' });
                this.user = res.data;
                this.userOrigin = JSON.parse(JSON.stringify(res.data));
            }).catch((e) => {
                alert(e);
            });
        },
        editCancel() {
            this.user = JSON.parse(JSON.stringify(this.userOrigin));
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
        },
        resetPasswordSubmit() {
            if (this.resetPasswordFetching === 'Y') return;
            this.resetPasswordFetching = 'Y';

            axios({
                method: 'POST',
                url: `api/user/${this.$route.params.user_id}`,
                params: {
                    password: this.resetPassword
                }
            }).then(() => {
                alert('密碼更新成功');
            }).catch((e) => {
                alert(e);
            }).finally(() => {
                this.resetPasswordFetching = 'N';
            });
        }
    }
};
</script>
