<template>
    <div class="container">
        <p class="title">{{title}}</p>
        <v-link href="/">· index</v-link>
        <v-link href="/about">· about</v-link>
        <button @click="go('/')">to index</button>
    </div>
</template>

<script>
import VLink from '../components/VLink.vue';
export default {
    data () {
        return {
            title: 'This is Page About!'
        }
    },
    components: {
        VLink
    },
    methods: {
        go(path) {
            this.$navigateTo(path);
        }
    }
}
</script>

<style scoped>
.title {
    color: #41B883;
}
</style>