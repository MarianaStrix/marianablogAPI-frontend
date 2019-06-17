<template>
    <v-container grid-list-md class="total-tape">
        <v-layout row wrap>
            <post-card-detail :post="post"></post-card-detail>
        </v-layout>
    </v-container>
</template>

<script>
    import axios from 'axios';
    import PostCardDetail from "@/components/fragments/PostCardDetail";
    import moment from 'moment/moment';
    const BASE_URL = process.env.VUE_APP_BASEURL;

    export default {
        name: "PostDetail",
        components: {PostCardDetail},
        props: ['postId'],
        data() {
            return {
                post: [],
                errored: false
            }
        },
        created() {
            axios.get(BASE_URL + '/posts/' + this.postId)
                .then(response => {
                    this.post = response.data

                })
                .catch(error => {
                    this.errored = true;
                })
        },
        methods: {
            moment

        }


    }
</script>

<style scoped>

</style>