<template>
    <v-main>
        <v-container
            class="fill-height login-bg"
            fluid
        >
            <v-row
                class="mx-0"
                align="center"
                justify="center"
            >
                <v-col>
                    <v-card v-if="activeCard === 'login'"
                            class="mx-auto px-4"
                            maxWidth="100%"
                            width="400"
                            :loading="Fetching.actionLogin === 'Y'"
                    >
                        <v-card-text>
                            <div>
                                {{ $t('LOGIN_SUBTITLE') }}
                            </div>
                            <p class="display-1 text--primary">
                                {{ $t('LOGIN_TITLE') }}
                            </p>
                            <p>
                                {{ $t('LOGIN_PLEASE_LOGIN') }}
                            </p>
                            <v-form ref="form"
                                    v-model="userInput.valid"
                                    lazyValidation
                            >
                                <v-text-field
                                    v-model="userInput.email"
                                    :rules="rules.email"
                                    :counter="30"
                                    label="Email Address"
                                    required
                                />
                                <v-text-field
                                    v-model="userInput.password"
                                    :rules="rules.password"
                                    :counter="20"
                                    label="Password"
                                    type="password"
                                    required
                                />
                                <v-row justify="end">
                                    <v-switch v-model="userInput.rememberMe"
                                              :label="$t('LOGIN_REMEMBER_ME')"
                                    />
                                </v-row>
                                <transition name="fade">
                                    <v-alert
                                        dense
                                        outlined
                                        type="error"
                                        v-if="userInput.loginAlert"
                                    >
                                        {{ $t('LOGIN_ALERT_USER_INPUT_ERROR') }}
                                    </v-alert>
                                </transition>
                                <div class="my-2">
                                    <v-btn @click="login"
                                           block
                                           color="green darken-4"
                                           :loading="Fetching.actionLogin === 'Y'"
                                           dark
                                           large
                                    >
                                        {{ $t('LOGIN_CONFIRM') }}
                                    </v-btn>
                                </div>
                                <div class="my-2">
                                    <v-btn @click="setActiveCard('register')"
                                           block
                                           text
                                           color="primary"
                                    >
                                        {{ $t('LOGIN_REGISTER') }}
                                    </v-btn>
                                </div>
                            </v-form>
                        </v-card-text>
                    <!-- <v-card-actions>
                        <v-btn
                            text
                            color="deep-purple accent-4"
                        >
                            Learn More
                        </v-btn>
                    </v-card-actions> -->
                    </v-card>
                    <v-card v-else-if="activeCard === 'register'"
                            class="mx-auto px-4"
                            width="400"
                            :loading="fetchingRegister === 'Y'"
                    >
                        <v-card-text>
                            <div>
                                {{ $t('LOGIN_SUBTITLE') }}
                            </div>
                            <p class="display-1 text--primary">
                                {{ $t('LOGIN_TITLE') }}
                            </p>
                            <p>
                                {{ $t('REGISTER_PLEASE_ENTER') }}
                            </p>
                            <v-form ref="formRegister"
                                    v-model="registerValid"
                                    lazyValidation
                            >
                                <v-text-field
                                    v-model="registerData.name"
                                    :rules="rules.name"
                                    :counter="30"
                                    :label="$t('USERNAME')"
                                    required
                                />
                                <v-text-field
                                    v-model="registerData.email"
                                    :rules="rules.email"
                                    :counter="30"
                                    :label="$t('EMAIL_ADDRESS')"
                                    required
                                />
                                <v-text-field
                                    v-model="registerData.password"
                                    :rules="rules.password"
                                    :counter="20"
                                    :label="$t('PASSWORD')"
                                    type="password"
                                    required
                                />
                                <v-text-field
                                    v-model="registerData.password_confirmation"
                                    :rules="rules.password_confirmation"
                                    :counter="20"
                                    :label="$t('PASSWORD_CONFIRMATION')"
                                    type="password"
                                    required
                                />
                                <transition name="fade">
                                    <v-alert
                                        dense
                                        outlined
                                        type="error"
                                        v-if="registerAlert"
                                    >
                                        {{ $t('LOGIN_ALERT_USER_INPUT_ERROR') }}
                                    </v-alert>
                                </transition>
                                <div class="my-2">
                                    <v-btn @click="register"
                                           block
                                           color="primary"
                                           large
                                    >
                                        {{ $t('REGISTER_CONFIRM') }}
                                    </v-btn>
                                </div>
                                <div class="my-2">
                                    <v-btn @click="setActiveCard('login')"
                                           block
                                           text
                                    >
                                        {{ $t('CANCEL') }}
                                    </v-btn>
                                </div>
                            </v-form>
                        </v-card-text>
                    <!-- <v-card-actions>
                        <v-btn
                            text
                            color="deep-purple accent-4"
                        >
                            Learn More
                        </v-btn>
                    </v-card-actions> -->
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
import axios from 'axios';
import bus from '@/bus';
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
    props: {
        source: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            bus,
            activeCard: 'login',
            userInput: {
                email: '',
                password: '',
                rememberMe: false,
                loginAlert: false,
                valid: false
            },
            registerData: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            registerAlert: false,
            registerValid: false,
            fetchingRegister: 'N',
            rules: {
                name: [
                    (v) => !!v || this.$t('REGISTER_NAME_RULE_1'),
                    (v) => (v && v.length <= 30) || this.$t('REGISTER_NAME_RULE_2')
                ],
                email: [
                    (v) => !!v || this.$t('LOGIN_EMAIL_RULE_1'),
                    (v) => /.+@.+\..+/.test(v) || this.$t('LOGIN_EMAIL_RULE_2')
                ],
                password: [
                    (v) => !!v || this.$t('LOGIN_PW_RULE_1'),
                    (v) => (v && v.length >= 6) || this.$t('LOGIN_PW_RULE_2')
                ],
                password_confirmation: [
                    () => this.registerData.password === this.registerData.password_confirmation
                        || this.$t('REGISTER_PASSWORD_CONFIRMATION')
                ]
            }
        };
    },
    computed: {
        ...mapState(['Fetching', 'UserInfo']),
        ...mapGetters({
            PermissionGroupUser: 'getPermissionGroupUser'
        })
    },
    watch: {
        'userInput.valid'(next) {
            if (next === true) this.userInput.loginAlert = false;
        }
    },
    methods: {
        login() {
            if (this.Fetching.actionLogin === 'Y') return;
            if (this.$refs.form.validate()) {
                this.actionLogin({
                    email: this.userInput.email,
                    password: this.userInput.password
                }).then(() => {
                    if (this.UserInfo.is_login === 'Y') {
                        this.$router.push({
                            name: 'index'
                        });
                    }
                }).catch(() => {
                    this.userInput.loginAlert = true;
                });
            } else this.userInput.loginAlert = true;
        },
        register() {
            if (this.fetchingRegister === 'Y') return;

            if (this.$refs.formRegister.validate()) {
                this.fetchingRegister = 'Y';

                axios({
                    method: 'GET',
                    url: 'api/get-serial-number',
                    params: {
                        user_type: this.PermissionGroupUser.col_name
                    }
                }).then((res) => {
                    const serial_number = res.data;

                    axios({
                        method: 'POST',
                        url: 'api/register',
                        params: {
                            serial_number,
                            ...this.registerData
                        }
                    }).then((resRegister) => {
                        this.fetchingRegister = 'N';
                        // 建立成功

                        if (resRegister.data.is_login === 'Y') {
                            this.$store.commit('setUserInfo', resRegister.data);
                            this.$router.push({
                                name: 'index'
                            });
                        }
                    }).catch((e) => {
                        alert(e);
                    }).finally(() => {
                        this.dialog = false;
                    });
                }).catch((e) => {
                    alert(e.data.message);
                });
            } else this.registerAlert = true;
        },
        setActiveCard(str) {
            if (str === 'login') this.$refs.formRegister.reset();
            else if (str === 'register') this.$refs.form.reset();

            this.activeCard = str;
        },
        ...mapActions(['actionLogin'])
    }
};
</script>

<style lang="scss">
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }

    .fade-enter,
    .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>

<style lang="scss" scoped>
    .login-bg {
        background-image: url('../../assets/images/login_bg.jpg');
        background-position: top center;
    }
</style>
