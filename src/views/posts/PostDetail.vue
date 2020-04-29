<template>
    <v-container grid-list-md class="total-tape">
        <v-layout row wrap>
            <v-flex xs12 sm12 md9 >
                <post-card-detail :post="post"></post-card-detail>
            </v-flex>
            <side-panel></side-panel>
        </v-layout>
    </v-container>
</template>

<script>
    import axios from 'axios';
    import moment from 'moment/moment';

    const BASE_URL = process.env.VUE_APP_BASEURL;
    import PostCardDetail from "@/components/fragments/PostCardDetail";
    import SidePanel from "@/components/SidePanel";

    export default {
        name: "PostDetail",
        components: {
          SidePanel,
          PostCardDetail,
        },
        props: ['id'],
        data() {
            return {
                post: [],
                errored: false
            }
        },
        created() {
            axios.get(BASE_URL + '/posts/' + this.id)
                .then(response => {
                    this.post = response.data
                })
                .catch(error => {
                    this.$router.push({name: 'not_found', });
                })
        },
        methods: {
            moment
        }
    }
</script>

<style scoped>

</style>
