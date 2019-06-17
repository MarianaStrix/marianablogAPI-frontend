<template>
    <v-card-text>
        <template v-if="activationLoading">loading...</template>
        <template v-else-if="activationError">An error occured.</template>
        <template v-else-if="activationCompleted">
            Account activation successful.

        </template>
        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn v-if="!isAuthenticated"
                   to="/login"
                   dark
                   color="blue-grey darken-1"
            >Click here to login</v-btn>
        </v-card-actions>
    </v-card-text>
</template>

<script>
    import {
        mapActions,
        mapGetters,
        mapState,
    } from 'vuex';
    export default {
        name: "FormVerifyEmail",
        computed: {
            ...mapGetters('auth', ['isAuthenticated']),
            ...mapState('signup', [
                'activationCompleted',
                'activationError',
                'activationLoading',
            ]),
        },
        methods: mapActions('signup', [
            'activateAccount',
            'clearActivationStatus',
        ]),
        created() {
            this.activateAccount(this.$route.params);
        },
        beforeRouteLeave(to, from, next) {
            this.clearActivationStatus();
            next();
        },
    }

</script>

<style scoped>

</style>