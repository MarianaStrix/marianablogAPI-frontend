<template>
    <v-flex xs12 sm12 md9 >
        <v-layout row column class="tape-posts">
            <v-flex xs12 sm12 md9 v-if="errored" class="api-error">
                <span>We're sorry, we're not able to retrieve this information at the moment, please try back later.</span>
            </v-flex>
            <post-card v-for="post in posts" :key="post.id"
                       :post="post">
            </post-card>
        </v-layout>
    </v-flex>
</template>

<script>
    import axios from 'axios/index';
    import PostCard from "@/components/fragments/PostCard";
    const BASE_URL = process.env.VUE_APP_BASEURL;

    export default {
        name: "PostsList",
        components: {PostCard},
        data() {
            return {
                posts: [],
                errored: false
            }
        },
        created() {
            axios.get(BASE_URL+'/posts/')
                .then(response => {
                    this.posts = response.data.results

                })
                .catch(error => {
                    this.errored = true;
                })
        }
    }

</script>

<style scoped>
    .api-error {
        color: black;
        font-size: 19px;
        margin-left: 15px;
    }
</style>