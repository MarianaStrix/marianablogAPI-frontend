<template>
    <v-app>
        <app-navigation/>
        <home-logo/>
        <v-content transition="slide-x-transition">
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
    import AppNavigation from '@/components/AppNavigation';
    import HomeLogo from "@/components/HomeLogo";
    import { mapGetters } from 'vuex';



    export default {
        name: 'App',
        components: {
            HomeLogo,
            AppNavigation
        },
        // created: function () {
        //     this.$http.interceptors.response.use(undefined, function (err) {
        //         return new Promise(function (resolve, reject) {
        //             if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
        //                 this.$store.dispatch('auth/logout')
        //             }
        //             throw err;
        //         });
        //     });
        // },
        computed: mapGetters('auth', [
            'isAuthenticated',
        ]),

    };
</script>

<style>
    body {
        padding: 0;
    }
</style>
