<template>
  <v-container grid-list-md class="total-tape">
    <v-layout row wrap>
      <v-flex xs12 sm12 md9>
          <post-card-detail :post="post"></post-card-detail>
      </v-flex>
      <side-panel></side-panel>
    </v-layout>
  </v-container>
</template>

<script>
  import moment from "moment/moment";

  import PostCardDetail from "@/components/fragments/PostCardDetail";
  import SidePanel from "@/components/SidePanel";
  import posts from "../../api/posts";

  export default {
    name: "PostDetail",
    components: {
      SidePanel,
      PostCardDetail,
    },
    props: ["id"],
    data() {
      return {
        post: [],
        errored: false,
      }
    },
    created() {
      posts.detailPost(this.id)
        .then(response => {
          this.post = response.data;
        })
        .catch(() => {
          this.$router.push({name: "not_found",});
        })
    },
    methods:
      {
        moment,
      }
  }
</script>

<style scoped>
</style>
