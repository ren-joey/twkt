<template>
    <v-main>
        <v-container v-if="!$route.params.user_id">
            <v-breadcrumbs :items="history">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>

            <UserTable :subtitle="'一般用戶'" />
            <CompanyTable :subtitle="'廠商'" />
            <AgentTable :subtitle="'專員'" />
            <AdminTable :subtitle="'管理員'" />

            <v-btn
                bottom
                color="pink"
                dark
                fab
                fixed
                right
                @click="bus.$emit('addUser');"
                v-if="PermissionName !== 'user'
                    && PermissionName !== 'guest'"
            >
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-container>

        <v-container v-else>
            <v-breadcrumbs :items="history">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>

            <UserDetail />
        </v-container>

        <DialogAddUser />
    </v-main>
</template>

<script>
import bus from '@/bus';
import { mapState, mapGetters, mapActions } from 'vuex';
import DialogAddUser from '../Dialog/AddUser';
import UserDetail from './details/UserDetail';
import UserTable from './tables/UserTable';
import CompanyTable from './tables/CompanyTable';
import AgentTable from './tables/AgentTable';
import AdminTable from './tables/AdminTable';

export default {
    components: {
        DialogAddUser, UserDetail, UserTable, CompanyTable, AgentTable, AdminTable
    },
    data: () => ({
        bus
    }),
    computed: {
        history() {
            const history = [
                { text: '用戶管理' }
            ];
            if (this.$route.params.user_id) {
                history[0].href = '/#/user';

                if (this.$route.params.user_id === 0) {
                    history.push({
                        text: '創建用戶'
                    });
                } else {
                    history.push({
                        text: '用戶資料'
                    });
                }
            }
            return history;
        },
        ...mapGetters({
            PermissionName: 'getPermissionName'
        }),
        ...mapState(['Materials', 'Users'])
    },
    mounted() {
        this.actionFetchUsers();
    },
    methods: {
        ...mapActions(['actionFetchUsers'])
    }
};
</script>
