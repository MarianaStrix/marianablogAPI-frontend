<template>
  <v-card flat color="while">
    <v-card-text>
      <template v-if="error">
        <span>We're sorry, we're not able to retrieve this information at the moment,
          please try back later.
        </span>
      </template>
      <template v-else>

        <form @submit.prevent="submit">
          <v-text-field
            box
            color="teal darken-1"
            v-model="title"
            v-validate="'required'"
            :error-messages="errors.collect('title')"
            label="Title"
            data-vv-name="title"
            required>
          </v-text-field>
          <v-textarea
            box
            v-model="text"
            color="teal darken-1"
            v-validate="'required'"
            :error-messages="errors.collect('text')"
            name="text"
            label="Text post"
            rows="10">
          </v-textarea>
          <v-text-field
            box
            v-model="tags"
            :error-messages="errors.collect('tags')"
            v-validate="'required'"
            label="Tags"
            data-vv-name="tags"
            hint="A comma-separated list of tags. For example: travel, city, university"
            color="teal darken-1">
          </v-text-field>
        </form>
        <v-card-actions>
          <v-spacer/>
          <v-btn
            @click="submit(title, text,  tags)"
            right
            dark
            color="blue-grey darken-1">
            Add post
          </v-btn>
        </v-card-actions>
      </template>
    </v-card-text>
  </v-card>
</template>


<script>
  import posts from "../../api/posts";

  export default {
    name: "PostAddForm",
    data() {
      return {
        title: "",
        text: "",
        tags: "",
        error: false,
      };
    },
    methods: {
      makeListTags: function (tags) {
        return tags.split(", ");
      },
      submit(title, text, tags) {
        this.$validator.validateAll().then((result) => {
          if (result) {
            posts.addPost(title, text, this.makeListTags(tags))
              .then(response => {
                this.$router.push({name: "post", params: {id: response.data.id}});
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
