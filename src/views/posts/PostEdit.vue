<template>
  <v-container grid-list-md class="total-tape">
    <v-layout row wrap>
      <v-flex xs12 sm12 md9>
        <h1 align="center">Edit Post</h1>

        <v-card flat color="while">
          <v-card-text id="text-post">

            <form @submit.prevent="submit">
              <v-text-field
                box
                v-model="title"
                v-validate="'required'"
                :error-messages="errors.collect('title')"
                data-vv-name="title"
                label="Title"
                color="teal darken-1"
                type="text"
              ></v-text-field>
              <v-textarea
                box
                v-model="text"
                v-validate="'required'"
                :error-messages="errors.collect('text')"
                data-vv-name="text"
                label="Text post"
                color="teal darken-1"
                type="text"
                row="10"
              ></v-textarea>
              <v-text-field
                box
                v-model="tags"
                v-validate="'required'"
                :error-messages="errors.collect('tags')"
                data-vv-name="tags"
                label="Tags"
                color="teal darken-1"
                type="text"
                hint="A comma-separated list of tags. For example: travel, city, university"
              ></v-text-field>
            </form>
            <v-card-actions>
              <v-spacer/>
              <v-btn
                @click="submit(title, text,  tags)"
                right
                dark
                color="blue-grey darken-1"
              >
                Edit post
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-flex>
      <side-panel></side-panel>
    </v-layout>
  </v-container>

</template>

<script>
  import SidePanel from "../../components/SidePanel";
  import posts from "../../api/posts";

  export default {
    name: "PostEdit",
    components: {SidePanel},
    props: ["id"],
    data() {
      return {
        post: [],
        title: "",
        text: "",
        tags: "",
        errored: false,
      }
    },
    created() {
      posts.detailPost(this.id)
        .then(response => {
          this.post = response.data;
          this.title = this.post.title;
          this.text = this.post.text;
          this.tags = this.post.tags.join(", ");
          // eslint-disable-next-line no-console
          console.log(this.tags)
        })
        .catch(() => {
          this.$router.push({name: "not_found",});
        });
    },
    methods: {
      makeListTags: function (tags) {
        return tags.split(", ")
      },

      submit(title, text, tags) {
        this.$validator.validateAll().then((result) => {
          if (result) {
            posts.editPost(this.post.id, title, text, this.makeListTags(tags))
              .then(response => {
                this.$router.push({name: "post", params: {id: response.data.id}})
              })
              .catch(() => {
                this.error = true;
              })
          }
        });
      },
    }
  }
</script>

<style scoped>

</style>
