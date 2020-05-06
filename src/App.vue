<template>
  <v-app>
    <app-navigation/>
    <home-logo/>
    <v-content transition="slide-x-transition">
      <router-view/>
    </v-content>
  </v-app>
</template>


<script>
  import AppNavigation from "@/components/AppNavigation";
  import HomeLogo from "@/components/HomeLogo";
  import {mapGetters} from "vuex";

  export default {
    name: "App",
    components: {
      HomeLogo,
      AppNavigation
    },
    computed: mapGetters("auth", [
      "isAuthenticated",
    ]),
  };
</script>


<style>
  body {
    padding: 0;
  }
</style>
