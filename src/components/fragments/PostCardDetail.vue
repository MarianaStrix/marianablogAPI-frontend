<template>
    <v-card flat color="while">
        <v-card-title>
            <div class="post-title">
                {{post.title}}
                <v-btn icon to="/edit_post">
                    <v-icon large
                            color="blue-grey lighten-1"
                    >edit</v-icon>
                </v-btn>
                <v-btn icon to="/delete_post">
                    <v-icon large
                            color="blue-grey lighten-1"
                    >delete_forever</v-icon>
                </v-btn>
            </div>
        </v-card-title>

        <div>
            <div class="info-post">
                <v-icon small color="blue-grey lighten-1">date_range</v-icon>
                <span>{{moment(post.published_date).format('LLLL')}}</span>
            </div>
            <div class="info-post">
                <v-icon small color="blue-grey lighten-1" id="icon-person">person</v-icon>
                <span>{{post.author}}</span>
            </div>
        </div>
        <v-card-text id="text-post" >
            <span class="post-text" v-html="post.text"></span>
        </v-card-text>
        <div  class="info-post" id="info-tags">
            <template v-for="(tag, index) in post.tags">
                <span :key="index">
                    #{{tag}}
                </span>
            </template>
        </div>
        <v-divider/>
    </v-card>
</template>

<script>
    import moment from 'moment/moment';
    export default {
        name: "PostCardDetail",
        props: ['post'],
        methods: {
            moment
        }
    }
</script>

<style scoped>
    #info-tags,
    .errored p {
        padding-bottom: 25px;
    }

    .info-post {
        display: inline-block;
        margin-left: 15px;
        margin-right: 5px;
        color: #607d8b;
        font-size: 14px;
    }

    .post-title {
        font-size: 30px;
        color: #323e4e;
        font-weight: bold;
    }

    .post-text {
        font-size: 16px;
    }

    a {
        text-decoration: none;
    }

    .v-divider {
        border-width: 2px;
        color: #b0bec5;
    }
</style>