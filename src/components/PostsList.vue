<template>
  <v-flex xs12 sm12 md9>
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
  import PostCard from "@/components/fragments/PostCard";
  import posts from "../api/posts";

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
      posts.postList()
        .then(response => {
          this.posts = response.data.results
        })
        .catch(() => {
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
