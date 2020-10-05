<template>
    <div>
        <v-sheet
            tile
            height="54"
            :color="BadgeColor.color"
            class="d-flex"
        >
            <v-btn
                icon
                class="ma-2"
                :dark="isDarkTheme"
                @click="$refs.calendar.prev()"
            >
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-spacer />
            <v-select
                v-model="type"
                :items="types"
                :dark="isDarkTheme"
                dense
                outlined
                hideDetails
                class="ma-2"
                label="顯示模式"
            />
            <v-spacer />
            <!-- <v-select
                v-model="mode"
                :items="modes"
                dense
                outlined
                hideDetails
                label="event-overlap-mode"
                class="ma-2"
            />
            <v-select
                v-model="weekday"
                :items="weekdays"
                dense
                outlined
                hideDetails
                label="weekdays"
                class="ma-2"
            /> -->
            <v-btn
                icon
                class="ma-2"
                :dark="isDarkTheme"
                @click="$refs.calendar.next()"
            >
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </v-sheet>
        <v-sheet height="600">
            <v-calendar
                ref="calendar"
                v-model="value"
                :weekdays="weekday"
                :type="type"
                :events="events"
                :eventOverlapMode="mode"
                :eventOverlapThreshold="30"
                :eventColor="getEventColor"
                @change="getEvents"
            />
        </v-sheet>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data: () => ({
        type: 'month',
        types: [
            {
                text: '月份',
                value: 'month'
            },
            {
                text: '每周',
                value: 'week'
            },
            {
                text: '每天',
                value: 'day'
            }
        ],
        mode: 'stack',
        modes: ['stack', 'column'],
        weekday: [0, 1, 2, 3, 4, 5, 6],
        weekdays: [
            { text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
            { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
            { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
            { text: 'Mon, Wed, Fri', value: [1, 3, 5] }
        ],
        value: '',
        events: [],
        colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
        names: ['需求單']
    }),
    computed: {
        isDarkTheme() {
            return true;
            // const { PermissionName } = this;
            // if (PermissionName === 'guest'
            //     || PermissionName === 'user'
            //     || PermissionName === 'company') return true;
            // return false;
        },
        ...mapGetters({
            Orders: 'getOrders',
            Materials: 'getMaterials',
            PermissionName: 'getPermissionName',
            BadgeColor: 'getOwnBadgeColor'
        })
    },
    watch: {
        Orders() {
            this.getEvents();
        }
    },
    methods: {
        getEvents() {
            const events = [];

            this.Orders.forEach((order) => {
                events.push({
                    name: `[需求單] ${order.function}`,
                    start: new Date(order.created_at),
                    color: 'primary'
                });
            });

            this.Materials.forEach((materials) => {
                events.push({
                    name: `[原物料] ${materials.name}`,
                    start: new Date(materials.created_at),
                    color: 'success'
                });
            });

            // const min = new Date(`${start.date}T00:00:00`);
            // const max = new Date(`${end.date}T23:59:59`);
            // const days = (max.getTime() - min.getTime()) / 86400000;
            // const eventCount = this.rnd(days, days + 20);

            // for (let i = 0; i < eventCount; i += 5) {
            //     const allDay = this.rnd(0, 3) === 0;
            //     const firstTimestamp = this.rnd(min.getTime(), max.getTime());
            //     const first = new Date(firstTimestamp - (firstTimestamp % 900000));
            //     const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
            //     const second = new Date(first.getTime() + secondTimestamp);

            //     events.push({
            //         name: this.names[this.rnd(0, this.names.length - 1)],
            //         start: this.formatDate(first, !allDay),
            //         end: this.formatDate(second, !allDay),
            //         color: this.colors[this.rnd(0, this.colors.length - 1)]
            //     });
            // }

            this.events = events;
        },
        getEventColor(event) {
            return event.color;
        },
        rnd(a, b) {
            return Math.floor((b - a + 1) * Math.random()) + a;
        },
        formatDate(a, withTime) {
            return withTime
                ? `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}`
                : `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`;
        }
    }
};
</script>
