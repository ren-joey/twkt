<template>
    <v-main>
        <v-container>
            <!-- <v-breadcrumbs :items="items">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs> -->

            <SettingDetail />
        </v-container>

        <DialogAddMaterial />
    </v-main>
</template>

<script>
import bus from '@/bus';
import { mapState, mapGetters } from 'vuex';
import DialogAddMaterial from '../Dialog/AddMaterial';
import SettingDetail from './details/SettingDetail';

export default {
    components: {
        DialogAddMaterial, SettingDetail
    },
    data: () => ({
        bus,
        subtitle: '總覽'
    }),
    computed: {
        ...mapGetters({
            PermissionName: 'getPermissionName'
        }),
        ...mapState(['Materials'])
    }
};
</script>
