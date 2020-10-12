<template>
    <v-dialog
        v-model="dialog"
        width="480px"
    >
        <v-card :loading="fetching">
            <v-card-title :style="{ backgroundColor: BarColor.color }" class="white--text">
                相關留言
            </v-card-title>
            <v-container class="pa-4">
                <div class="pa-4 mb-4 rounded-xl"
                     style=" min-height: 100px; background-color: #efefef;"
                >
                    <v-row>
                        <v-col cols="12"
                               class="py-1"
                               :class="{ 'text-right': c.created_by === UserInfo.id }"
                               v-for="(c, idx) in comments"
                               :key="idx"
                        >
                            <div class="primary white--text rounded-t-xl px-4 py-2"
                                 :class="{
                                     'rounded-bl-xl': c.created_by === UserInfo.id,
                                     'rounded-br-xl': c.created_by !== UserInfo.id,
                                 }"
                                 style="display: inline-block;"
                            >
                                {{ c.content }}
                            </div>
                        </v-col>
                    </v-row>
                </div>
                <v-divider />
                <div class="mt-4 d-flex align-end">
                    <v-textarea
                        v-model="comment"
                        label="請輸入訊息"
                        autoGrow
                        filled
                        rows="1"
                        rounded
                        dense
                        hideDetails
                    />
                    <v-btn
                        class="mx-2"
                        fab
                        dark
                        xl
                        color="primary"
                        :loading="sendFetching"
                        @click="sendComment"
                    >
                        <v-icon dark>
                            mdi-send
                        </v-icon>
                    </v-btn>
                </div>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
import bus from '@/bus';
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            fetching: false,
            sendFetching: false,
            dialog: false,
            comment: '',
            comments: [],
            replyTarget: {}
        };
    },
    computed: {
        ...mapGetters({
            UserInfo: 'getUserInfo',
            BarColor: 'getBarColor'
        })
    },
    watch: {
        dialog(bool) {
            if (bool === false) {
                this.comments = [];
                this.comment = '';
                this.replyTarget = {};
            }
        }
    },
    mounted() {
        bus.$on('showComments', (obj) => {
            this.dialog = true;
            this.replyTarget = obj;
            this.fetchComments();
        });
    },
    methods: {
        fetchComments() {
            if (this.fetching === true) return;

            this.fetching = true;
            let url = '';
            if (this.replyTarget.order_id) url = `by-order/${this.replyTarget.order_id}`;
            else if (this.replyTarget.material_id) url = `by-material/${this.replyTarget.material_id}`;
            else if (this.replyTarget.quotation_id) url = `by-quotation/${this.replyTarget.quotation_id}`;

            axios({
                method: 'GET',
                url: `api/comments/${url}`
            }).then((res) => {
                this.comments = res.data;
                this.fetching = false;
            });
        },
        sendComment() {
            if (this.sendFetching === true) return;

            this.sendFetching = true;
            axios({
                method: 'POST',
                url: 'api/comment',
                data: {
                    content: this.comment,
                    ...this.replyTarget
                }
            }).then(() => {
                this.sendFetching = false;
                this.comment = '';
                this.fetchComments();
            });
        }
    }
};
</script>
