<template>
    <v-app-bar
        :clippedLeft="$vuetify.breakpoint.lgAndUp"
        app
        dark
        v-bind="BarColor"
    >
        <v-app-bar-nav-icon v-if="UserInfo && UserInfo.is_login === 'Y'" @click.stop="toggleNavigation" />
        <v-toolbar-title
            style="width: 300px"
            class="ml-0 pl-4"
        >
            <router-link tag="span"
                         :to="{ name: 'index' }"
                         style="cursor: pointer;"
            >
                {{ $t('COMPANY_TITLE') }}
            </router-link>
        </v-toolbar-title>
        <template v-if="UserInfo && UserInfo.is_login === 'Y'">
            <!-- <v-text-field
                flat
                soloInverted
                hideDetails
                prependInnerIcon="mdi-magnify"
                label="Search"
                class="hidden-sm-and-down"
            /> -->
            <v-spacer />
            <v-menu offsetY
                    origin="top center"
                    transition="scale-transition"
                    v-if="false"
            >
                <template v-slot:activator="{ on }">
                    <v-btn class="mr-2"
                           icon
                           v-on="on"
                    >
                        <v-icon>mdi-apps</v-icon>
                    </v-btn>
                </template>
                <v-list dense>
                    <v-list-item
                        v-for="n in 5"
                        :key="n"
                        @click="() => {}"
                    >
                        <v-list-item-title>Option {{ n }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-menu v-model="notificationsToggle"
                    offsetY
                    offsetX
                    origin="right top"
                    transition="scale-transition"
            >
                <template v-slot:activator="{ on }">
                    <v-btn class="mr-2"
                           icon
                           v-on="on"
                    >
                        <v-badge v-if="isAllNotificationsReaded === 'N'"
                                 color="red"
                                 dot
                        >
                            <v-icon>mdi-bell</v-icon>
                        </v-badge>
                        <v-icon v-else>mdi-bell</v-icon>
                    </v-btn>
                </template>
                <v-list dense>
                    <v-list-item
                        v-for="n in notifications"
                        :key="n.id"
                        :to="n.url"
                        @click="fetchReadNotification(n)"
                    >
                        <v-badge
                            v-if="n.read === 'N'"
                            inline
                            color="red"
                            dot
                        />
                        <v-list-item-title>
                            {{ n.content }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <!-- <v-btn
                icon
                large
            >
                <v-avatar
                    size="32px"
                    item
                >InitData
                    <v-img
                        src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
                        alt="Vuetify"
                    />
                </v-avatar>
            </v-btn> -->
        </template>
    </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';
import bus from '@/bus';
import axios from 'axios';

export default {
    data() {
        return {
            notificationsToggle: false,
            notifications: []
        };
    },
    computed: {
        isAllNotificationsReaded() {
            const n = this.notifications.filter((notification) => notification.read === 'N');
            if (n.length === 0) return 'Y';
            return 'N';
        },
        ...mapGetters({
            Materials: 'getMaterials',
            Orders: 'getOrders',
            Quotations: 'getQuotations',
            UserInfo: 'getUserInfo',
            BarColor: 'getBarColor'
        })
    },
    watch: {
        UserInfo: {
            handler(obj) {
                if (obj && obj.is_login === 'Y') this.fetchNotifications();
            },
            deep: true,
            immediate: true
        },
        Materials() {
            this.fetchNotifications();
        },
        Orders() {
            this.fetchNotifications();
        },
        Quotations() {
            this.fetchNotifications();
        },
        notificationsToggle(bool) {
            if (bool === true) this.fetchNotifications();
        }
    },
    methods: {
        toggleNavigation() {
            bus.$emit('toggleNavigation');
        },
        fetchNotifications() {
            axios({
                method: 'GET',
                url: 'api/user-notifications'
            }).then((res) => {
                this.notifications = res.data;
            });
        },
        fetchReadNotification(n) {
            if (n.read === 'Y') return;
            axios({
                method: 'GET',
                url: `api/user-notification/read/${n.id}`
            }).then((res) => {
                this.notifications = res.data;
            });
        }
    }
};
</script>
