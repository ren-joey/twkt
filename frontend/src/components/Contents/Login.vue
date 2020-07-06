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
                                    <v-btn block
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
                            :loading="Fetching.actionLogin"
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
                                    <v-btn @click="register"
                                           block
                                           color="primary"
                                           large
                                    >
                                        {{ $t('CONFIRM') }}
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
import bus from '@/bus';
import { mapActions, mapState } from 'vuex';

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
            rules: {
                name: [
                    (v) => !!v || 'Name is required',
                    (v) => (v && v.length <= 30) || 'Name must be less than 10 characters'
                ],
                email: [
                    (v) => !!v || this.$t('LOGIN_EMAIL_RULE_1'),
                    (v) => /.+@.+\..+/.test(v) || this.$t('LOGIN_EMAIL_RULE_2')
                ],
                password: [
                    (v) => !!v || this.$t('LOGIN_PW_RULE_1'),
                    (v) => v.length >= 6 || this.$t('LOGIN_PW_RULE_2')
                ]
            }
        };
    },
    computed: {
        ...mapState(['Fetching', 'UserInfo'])
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
            } else {
                this.userInput.loginAlert = true;
            }
        },
        setActiveCard(str) {
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
