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
                    <v-card class="mx-auto px-4"
                            maxWidth="100%"
                            width="400"
                    >
                        <v-card-text>
                            <div>
                                {{ $t('LOGIN_TITLE') }}
                            </div>
                            <p class="display-1 text--primary">
                                {{ $t('VERIFIED_EMAIL') }}
                            </p>
                            <div class="my-2">
                                <v-btn @click="$router.push({ name: 'login' })"
                                       block
                                       color="green darken-4"
                                       dark
                                       large
                                >
                                    {{ $t('CONFIRM') }}
                                </v-btn>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>

export default {
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
