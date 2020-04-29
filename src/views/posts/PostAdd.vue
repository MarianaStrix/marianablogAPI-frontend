<template>
  <v-container grid-list-md class="total-tape">
    <v-layout row wrap>
      <v-flex xs12 sm12 md9>
        <h1 align="center">Add Post</h1>
        <post-add-form></post-add-form>
      </v-flex>
      <side-panel></side-panel>
    </v-layout>
  </v-container>

</template>

<script>
  import PostAddForm from "@/components/posts/PostAddForm";
  import SidePanel from "@/components/SidePanel";

  export default {
    name: "PostAdd",
    components: {
      PostAddForm,
      SidePanel,
    },
  }
</script>

<style scoped>

</style>