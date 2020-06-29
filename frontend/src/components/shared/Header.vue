<template>
    <v-app-bar
        :clippedLeft="$vuetify.breakpoint.lgAndUp"
        app
        dark
        v-bind="headerAttrs"
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
            <v-menu openOnHover
                    offsetY
                    origin="top center"
                    transition="scale-transition"
            >
                <template v-slot:activator="{ on }">
                    <v-btn class="mr-2"
                           icon
                           v-on="on"
                    >
                        <v-badge color="pink" dot>
                            <v-icon>mdi-bell</v-icon>
                        </v-badge>
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
import { mapState } from 'vuex';
import bus from '@/bus';

export default {
    computed: {
        ...mapState(['UserInfo']),
        headerAttrs() {
            const { is_login } = this.UserInfo;
            if (is_login === 'N') return { color: 'blue darken-3' };

            const permissionName = this.UserInfo.permission_group.col_name;
            if (permissionName === 'guest'
                || permissionName === 'user') return { color: 'green darken-1' };
            if (permissionName === 'company') return { color: 'teal darken-1' };
            return { color: 'blue darken-3' };
        }
    },
    methods: {
        toggleNavigation() {
            bus.$emit('toggleNavigation');
        }
    }
};
</script>
