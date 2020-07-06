<template>
    <v-navigation-drawer
        v-if="UserInfo"
        v-model="drawer"
        :class="UserInfo.permission_group.col_name"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
        v-bind="navAttrs"
    >
        <v-list dense
                rounded=""
        >
            <v-list-item twoLine>
                <v-list-item-avatar :color="badgeColor.color" size="48">
                    <!-- <img src="https://randomuser.me/api/portraits/men/81.jpg" /> -->
                    <span :class="[`${badgeColor.textColor}--text`]" class="text-md">
                        {{ UserInfo.user_information.name.toUpperCase().substring(0, 2) }}
                    </span>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>
                        {{ UserInfo.user_information.name.substring(0, 4) }}
                        <v-chip
                            class="ma-1"
                            small=""
                            v-if="!UserInfo.email_verified_at"
                        >
                            <v-icon small>mdi-shield-remove</v-icon>
                            未驗證
                        </v-chip>
                        <v-chip
                            class="ma-1"
                            small=""
                            v-bind="badgeColor"
                            v-else
                        >
                            <v-icon small>mdi-shield-check</v-icon>
                            {{ UserInfo.permission_group.tw_name }}
                        </v-chip>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        {{ UserInfo.email }}
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider class="mb-4" />
            <template v-for="item in items">
                <template v-if="item.permission === 'Y'">
                    <v-row
                        v-if="item.heading"
                        :key="item.heading"
                        align="center"
                    >
                        <v-col cols="6">
                            <v-subheader v-if="item.heading">
                                {{ item.heading }}
                            </v-subheader>
                        </v-col>
                        <v-col
                            cols="6"
                            class="text-center"
                        >
                            <a
                                href="#!"
                                class="body-2 black--text"
                            >EDIT</a>
                        </v-col>
                    </v-row>
                    <v-list-group
                        v-else-if="item.children"
                        :key="item.text"
                        v-model="item.model"
                        :prependIcon="item.model ? item.icon : item['icon-alt']"
                        appendIcon=""
                        v-bind="navAppendAttrs"
                    >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ item.text }}1
                                </v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item
                            v-for="(child, i) in item.children"
                            :key="i"
                            link
                            @click="child.click()"
                        >
                            <v-list-item-action v-if="child.icon">
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ child.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                    <v-list-item
                        :key="item.text"
                        link
                        :to="item.to"
                    >
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </template>
        </v-list>
        <template v-slot:append>
            <div class="pa-2">
                <v-btn block
                       outlined
                       color="blue-grey lighten-2"
                       :loading="Fetching.actionLogout === 'Y'"
                       @click="logout"
                >
                    <v-icon left>mdi-logout</v-icon> 登出
                </v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<script>
import bus from '@/bus';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    props: {
        source: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            drawer: null
        };
    },
    computed: {
        ...mapState(['UserInfo', 'Fetching']),
        ...mapGetters({
            PermissionName: 'getPermissionName'
        }),
        items() {
            return [
                {
                    icon: 'mdi-desktop-mac-dashboard',
                    text: '主控版',
                    permission: 'Y',
                    to: {
                        name: 'dashboard'
                    },
                    click: () => {
                        this.$router.push({ name: 'index' });
                    }
                },
                {
                    icon: 'mdi-semantic-web',
                    'icon-alt': 'mdi-shape-plus',
                    text: '原物料',
                    permission: 'Y',
                    model: true,
                    to: {
                        name: 'material'
                    },
                    click: () => {
                        this.$router.push({ name: 'material' });
                    }
                },
                {
                    icon: 'mdi-clipboard-list',
                    text: '我的訂單',
                    permission: this.PermissionName !== 'company' ? 'Y' : 'N',
                    to: {
                        name: 'order'
                    },
                    click: () => {
                        this.$router.push({ name: 'order' });
                    }
                },
                {
                    icon: 'mdi-account',
                    text: '用戶管理',
                    permission: this.PermissionName === 'admin' || this.PermissionName === 'agent' ? 'Y' : 'N',
                    to: {
                        name: 'user'
                    },
                    click: () => {
                        this.$router.push({ name: 'user' });
                    }
                },
                {
                    icon: 'mdi-cog',
                    text: '設定',
                    permission: 'Y',
                    to: {
                        name: 'setting'
                    },
                    click: () => {
                        this.$router.push({ name: 'setting' });
                    }
                }
            // {
            //     icon: 'mdi-chevron-down',
            //     'icon-alt': 'mdi-shape-plus',
            //     text: '原物料新增',
            //     model: false,
            //     children: [
            //         { icon: 'mdi-subdirectory-arrow-right', text: 'Create label' }
            //     ]
            // }
            ];
        },
        navAttrs() {
            const permissionName = this.UserInfo.permission_group.col_name;
            if (['user', 'guest', 'company'].indexOf(permissionName) > -1) {
                return {
                    dark: '',
                    src: 'https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg'
                    // color: 'rgba(0, 0, 0, 0.5)'
                };
            }
            if (permissionName === 'agent') {
                return {
                    dark: '',
                    src: 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg'
                };
            } return {};
        },
        badgeColor() {
            const permissionName = this.UserInfo.permission_group.col_name;
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
        navAppendAttrs() {
            const permissionName = this.UserInfo.permission_group.col_name;

            // color="blue-grey lighten-2"
            if (['user', 'guest'].indexOf(permissionName) > -1) {
                return {
                    // activeClass: 'white--text primary'
                    activeClass: 'white--text success'
                };
            }
            if (permissionName === 'company') {
                return {
                    activeClass: 'white--text teal'
                };
            }
            return {
                color: 'blue-grey lighten-2'
            };
        }
    },
    mounted() {
        bus.$on('toggleNavigation', () => {
            this.drawer = !this.drawer;
        });
    },
    methods: {
        logout() {
            this.actionLogout().then(() => {
                this.$router.push({ name: 'login' });
            });
        },
        routeToAddMaterial() {
            this.$router.push({ name: 'material' });
        },
        ...mapActions(['actionLogout'])
    }
};
</script>

<style lang="scss">
.user,
.guest,
.company {
    .v-navigation-drawer__image .v-image__image {
        filter: brightness(0.35);
    }
}
</style>
