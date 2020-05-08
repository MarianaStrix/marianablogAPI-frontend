<template>
  <v-card flat color="while">
    <v-card-title>
      <div class="post-title">
        {{post.title}}
        <v-btn flat icon color="teal darken-3" :to="'/post_edit/'+ post.id">

            <v-icon>edit</v-icon>
          </v-btn>
        <v-btn
            flat
            icon
            color="red lighten-2"
            @click.stop="dialog = true"

          >
            <v-icon>delete_forever</v-icon>
          </v-btn>
        <v-dialog
          v-model="dialog"
          max-width="290"
        >
          <v-card>
            <v-card-title class="headline">Delete post</v-card-title>
            <v-card-text>
                Are you sure you want to delete this post:
                <b>{{post.title}}</b>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="green darken-1"
                flat="flat"
                @click="dialog = false"
              >
                Cancel
              </v-btn>
              <v-btn
                color="green darken-1"
                flat="flat"
                @click="deletePost(post.id)"
              >
                Delete
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-card-title>

    <div>
      <div class="info-post">
        <v-icon small color="blue-grey lighten-1">date_range</v-icon>
        <span>{{moment(post.published_date).format("LLLL")}}</span>
      </div>
      <div class="info-post">
        <v-icon small color="blue-grey lighten-1">person</v-icon>
        <span>{{post.author}}</span>
      </div>
    </div>

    <v-card-text id="text-post">
      <span class="post-text" v-html="post.text"></span>
    </v-card-text>

    <div class="info-post" id="info-tags">
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
  import moment from "moment/moment";
  import posts from "../../api/posts";

  export default {
    name: "PostCardDetail",
    props: ["post"],
    data() {
      return {
        dialog: false
      }
    },
    methods: {
      moment,
      deletePost: function () {
        posts.deletePost(this.post.id)
        .then(() => this.$router.push("/"))
        .catch(() => this.$router.push("/"))
      },
    },
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
