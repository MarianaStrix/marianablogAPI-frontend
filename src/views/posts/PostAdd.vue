<template>
  <v-container grid-list-md class="total-tape">
    <v-layout row wrap>
      <v-flex xs12 sm12 md9>
        <h1 align="center">Add Post</h1>
        <form-post-add></form-post-add>
      </v-flex>
      <side-panel></side-panel>
    </v-layout>
  </v-container>

</template>

<script>
  import FormPostAdd from "@/components/posts/FormPostAdd";
  import SidePanel from "@/components/SidePanel";

  export default {
    name: "PostAdd",
    components: {FormPostAdd, SidePanel},
  }
</script>

<style scoped>

</style>