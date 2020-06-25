<template>
    <v-navigation-drawer
        v-model="drawer"
        :class="InitData.permission_group"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
        v-bind="navAttrs"
    >
        <v-list dense
                rounded=""
        >
            <v-list-item twoLine>
                <v-list-item-avatar>
                    <img src="https://randomuser.me/api/portraits/men/81.jpg" />
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>
                        {{ InitData.username }}
                        <v-chip
                            class="ma-1"
                            small=""
                            v-bind="badgeColor"
                        >
                            {{ InitData.permission_group_alias }}
                        </v-chip>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        {{ InitData.email }}
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider />
            <template v-for="item in items">
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
                    v-else
                    :key="item.text"
                    link
                    @click="item.click()"
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
        </v-list>
        <template v-slot:append>
            <div class="pa-2">
                <v-btn block
                       outlined
                       color="blue-grey lighten-2"
                       :loading="fetching.logout === 'Y'"
                       @click="logout"
                >
                    <v-icon left>mdi-logout</v-icon> 登出
                </v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<script>
import axios from 'axios';
import bus from '@/bus';
import { mapGetters, mapActions } from 'vuex';
import config from '../config';

export default {
    props: {
        source: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            ...config,
            drawer: null,
            items: [
                {
                    icon: 'mdi-desktop-mac-dashboard',
                    text: '主控版',
                    click: () => {
                        this.$router.push({ name: 'index' });
                    }
                    // click: this.routeToAddMaterial
                },
                {
                    icon: 'mdi-chevron-down',
                    'icon-alt': 'mdi-shape-plus',
                    text: '原物料',
                    model: true,
                    children: [
                        {
                            icon: 'mdi-all-inclusive',
                            text: '總覽',
                            click: () => {
                                this.$router.push({ name: 'material' });
                            }
                        },
                        {
                            icon: 'mdi-semantic-web',
                            text: 'R001 蝦紅素 (藻紅素)',
                            click: () => {
                                this.$router.push({ name: 'material', params: { material_id: 'R001' } });
                            }
                        },
                        {
                            icon: 'mdi-semantic-web',
                            text: 'R002 鮭魚/魚精華素',
                            click: () => {
                                this.$router.push({ name: 'material', params: { material_id: 'R002' } });
                            }
                        },
                        {
                            icon: 'mdi-semantic-web',
                            text: 'R003 神經醯胺(賽洛美)',
                            click: () => {
                                this.$router.push({ name: 'material', params: { material_id: 'R003' } });
                            }
                        },
                        {
                            icon: 'mdi-semantic-web',
                            text: 'R029 維生素類',
                            click: () => {
                                this.$router.push({ name: 'material', params: { material_id: 'R029' } });
                            }
                        }
                    ]
                    // click: this.routeToAddMaterial
                },
                {
                    icon: 'mdi-clipboard-list',
                    text: '我的訂單',
                    click: () => {
                        this.$router.push({ name: 'order' });
                    }
                    // click: this.routeToAddMaterial
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
            ]
        };
    },
    computed: {
        ...mapGetters({
            InitData: 'getInitData'
        }),
        navAttrs() {
            if (['user', 'guest', 'manufactory'].indexOf(this.InitData.permission_group) > -1) {
                return {
                    dark: '',
                    src: 'https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg'
                    // color: 'rgba(0, 0, 0, 0.5)'
                };
            }
            if (this.InitData.permission_group === 'agent') {
                return {
                    dark: '',
                    src: 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg'
                };
            } return {};
        },
        badgeColor() {
            const { permission_group } = this.InitData;
            if (['user', 'guest'].indexOf(permission_group) > -1) {
                return {
                    textColor: 'white',
                    color: 'success'
                };
            }
            if (permission_group === 'agent') {
                return {
                    textColor: 'indigo',
                    color: 'white'
                };
            }
            if (permission_group === 'manufactory') {
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
            // color="blue-grey lighten-2"
            const { permission_group } = this.InitData;
            if (['user', 'guest'].indexOf(permission_group) > -1) {
                return {
                    // activeClass: 'white--text primary'
                    activeClass: 'white--text success'
                };
            }
            if (permission_group === 'manufactory') {
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
            if (this.fetching.logout === 'Y') return;
            this.fetching.logout = 'Y';
            axios({
                url: 'api/logout/'
            }).then((res) => {
                this.fetching.logout = 'N';
                this.actionSetInitData(res.data);
                this.$router.push({ name: 'login' });
            });
        },
        routeToAddMaterial() {
            this.$router.push({ name: 'material' });
        },
        ...mapActions(['actionSetInitData'])
    }
};
</script>

<style lang="scss">
.user,
.guest,
.manufactory {
    .v-navigation-drawer__image .v-image__image {
        filter: brightness(0.35);
    }
}
</style>
