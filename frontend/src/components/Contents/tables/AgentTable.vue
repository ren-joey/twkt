<template>
    <v-card
        class="mx-auto my-4"
        width="100%"
    >
        <v-card-title class="headline d-flex justify-space-between align-center">
            <div class="d-flex align-center">
                <v-icon class="mr-2">mdi-account</v-icon>
                {{ subtitle }}
            </div>
            <div class="mr-4"
                 v-if="PermissionName !== 'user'
                     && PermissionName !== 'guest'"
            >
                <!-- <v-btn class="mr-4"
                       icon
                       small
                       :disabled="selected.length === 0"
                >
                    <v-icon>mdi-trash-can-outline</v-icon>
                </v-btn> -->
                <v-btn fab
                       dark
                       color="pink"
                       small
                       @click="bus.$emit('addUser', 'agent')"
                >
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </div>
        </v-card-title>
        <v-card-text>
            <v-divider />
            <v-data-table
                :headers="headers"
                :items="users"
                itemKey="serial_number"
                @click:row="rowClickHandler"
            >
                <template v-slot:item.email="{item}">
                    {{ item.email }}
                    <v-chip
                        class="ma-1"
                        small=""
                        v-if="!item.email_verified_at"
                    >
                        <v-icon small>mdi-shield-remove</v-icon>
                        未驗證
                    </v-chip>
                    <v-chip
                        class="ma-1"
                        small=""
                        v-bind="{
                            textColor: 'white',
                            color: 'indigo'
                        }"
                        v-else
                    >
                        <v-icon small>mdi-shield-check</v-icon>
                        {{ item.permission_group.tw_name }}
                    </v-chip>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
import bus from '@/bus';
import { mapState, mapGetters } from 'vuex';

export default {
    props: {
        subtitle: {
            type: String,
            default: ''
        }
    },
    data: () => ({
        bus
    }),
    computed: {
        headers() {
            return [
                { text: '編號', value: 'user_information.serial_number' },
                { text: 'email', align: 'start', value: 'email' },
                { text: '名稱', value: 'name' },
                { text: '註冊日期', value: 'created_at' },
                { text: '', value: 'data-table-expand' }
            ];
        },
        users() {
            return this.Users.filter((user) => user.permission_group.col_name === 'agent');
        },
        ...mapGetters({
            PermissionName: 'getPermissionName'
        }),
        ...mapState(['Fetching', 'Users', 'UserInfo'])
    },
    methods: {
        rowClickHandler(user) {
            this.$router.push({ name: 'user', params: { user_id: user.id } });
        }
    }
};
</script>
