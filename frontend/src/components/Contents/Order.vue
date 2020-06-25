<template>
    <v-content>
        <v-container>
            <v-breadcrumbs :items="items">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
            <v-card
                class="mx-auto"
                width="100%"
            >
                <v-card-text>
                    <p class="headline text--primary">
                        原物料清單
                    </p>
                    <v-divider />
                    <v-data-table
                        v-model="selected"
                        :headers="headers"
                        :items="materials"
                        :singleSelect="singleSelect"
                        itemKey="name"
                        showSelect
                        class="elevation-1"
                    >
                        <template v-slot:top>
                            <div class="d-flex justify-space-between align-center">
                                <v-switch v-model="singleSelect"
                                          label="啟用單選"
                                          class="pa-3"
                                />
                                <div class="mr-4">
                                    <v-btn class="mr-4"
                                           icon
                                           small
                                           :disabled="selected.length === 0"
                                    >
                                        <v-icon>mdi-trash-can-outline</v-icon>
                                    </v-btn>
                                    <v-btn fab
                                           dark
                                           color="pink"
                                           small
                                           @click="bus.$emit('dialogAddMaterial')"
                                    >
                                        <v-icon>mdi-plus</v-icon>
                                    </v-btn>
                                </div>
                            </div>
                        </template>
                    </v-data-table>

                    <v-btn
                        bottom
                        color="pink"
                        dark
                        fab
                        fixed
                        right
                        @click="bus.$emit('dialogAddMaterial')"
                    >
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-container>

        <template v-slot:prepend>
            <v-list-item twoLine>
                <v-list-item-avatar>
                    <img src="https://randomuser.me/api/portraits/women/81.jpg" />
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>Jane Smith</v-list-item-title>
                    <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </template>

        <!--
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            right
        >
            <v-list dense>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-plus-box</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>新增原物料</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        -->
        <DialogAddMaterial />
    </v-content>
</template>

<script>
import bus from '@/bus';
import DialogAddMaterial from '../Dialog/AddMaterial';

export default {
    components: {
        DialogAddMaterial
    },
    data: () => ({
        bus,
        items: [
            {
                text: '原物料',
                disabled: true,
                href: 'breadcrumbs_dashboard'
            }
        ],
        singleSelect: false,
        selected: [],
        headers: [
            {
                text: 'Dessert (100g serving)',
                align: 'start',
                sortable: false,
                value: 'name'
            },
            { text: 'Calories', value: 'calories' },
            { text: 'Fat (g)', value: 'fat' },
            { text: 'Carbs (g)', value: 'carbs' },
            { text: 'Protein (g)', value: 'protein' },
            { text: 'Iron (%)', value: 'iron' }
        ],
        materials: [
            {
                name: 'Frozen Yogurt',
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                iron: '1%'
            },
            {
                name: 'Ice cream sandwich',
                calories: 237,
                fat: 9.0,
                carbs: 37,
                protein: 4.3,
                iron: '1%'
            },
            {
                name: 'Eclair',
                calories: 262,
                fat: 16.0,
                carbs: 23,
                protein: 6.0,
                iron: '7%'
            },
            {
                name: 'Cupcake',
                calories: 305,
                fat: 3.7,
                carbs: 67,
                protein: 4.3,
                iron: '8%'
            },
            {
                name: 'Gingerbread',
                calories: 356,
                fat: 16.0,
                carbs: 49,
                protein: 3.9,
                iron: '16%'
            },
            {
                name: 'Jelly bean',
                calories: 375,
                fat: 0.0,
                carbs: 94,
                protein: 0.0,
                iron: '0%'
            },
            {
                name: 'Lollipop',
                calories: 392,
                fat: 0.2,
                carbs: 98,
                protein: 0,
                iron: '2%'
            },
            {
                name: 'Honeycomb',
                calories: 408,
                fat: 3.2,
                carbs: 87,
                protein: 6.5,
                iron: '45%'
            },
            {
                name: 'Donut',
                calories: 452,
                fat: 25.0,
                carbs: 51,
                protein: 4.9,
                iron: '22%'
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: '6%'
            }
        ]
    })
};
</script>
