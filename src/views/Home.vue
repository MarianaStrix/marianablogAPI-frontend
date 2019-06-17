<template>
    <v-container grid-list-md class="total-tape">
        <v-layout row wrap>
            <posts-list></posts-list>
            <side-panel></side-panel>
        </v-layout>
    </v-container>
</template>

<script>

    import SidePanel from "@/components/SidePanel";
    import PostsList from "@/components/PostsList";

    export default {
        name: 'home',
        components: {
            PostsList,
            SidePanel
        },
    };
</script>

<style scoped>
    span {
        background-color: #fff;
    }

</style>