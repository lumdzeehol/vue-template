<template>
    <div class="container">
        <p>Welcome!</p>
        <v-link href="/">· index</v-link>&nbsp;&nbsp;
        <v-link href="/about">· about</v-link>
    </div>
</template>

<script>
import VLink from '../components/VLink.vue';
export default {
    data () {
        return {
            title: 'this is page Index!'
        }
    },
    components: {
        VLink
    },
    methods: {
        go() {
            this.$navigateTo('/about');
            // this.$root.currentRoute = '/about'
            // // window.history.pushState(null,routes[this.sref],this.sref)
        }
    }
}
</script>

<style scoped>

</style>