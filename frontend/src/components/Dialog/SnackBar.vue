<template>
    <v-snackbar
        v-model="snackbar"
    >
        {{ text }}
        <v-btn
            color="pink"
            text
            @click="snackbar = false"
        >
            關閉
        </v-btn>
    </v-snackbar>
</template>

<script>
export default {

};
</script>
