<template>
  <span>
    <v-navigation-drawer app v-model="drawer" class="blue-grey darken-4" dark disable-resize-watcher>
      <v-list>
        <template v-for="(item, index) in isAuthenticated ? itemsLogin : itemsNotLogin">
          <v-list-tile :key="index">
            <v-list-tile-content>
              <router-link :to="{path:item.router}">
                {{item.title}}
              </router-link>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app dense color="blue-grey darken-4" dark>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link to="/">
        <v-toolbar-title to="/">
          <img id="logo-image" alt="" src="../assets/logo.png">
        </v-toolbar-title>
      </router-link>
      <v-btn v-if="isAuthenticated" flat class="hidden-sm-and-down" to="/post_add">Add post</v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn v-if="isAuthenticated" flat class="hidden-sm-and-down" to="/profile">
        My profile
      </v-btn>
      <v-btn v-if="!isAuthenticated" flat class="hidden-sm-and-down" to="/login">
        Sign in
      </v-btn>
      <v-btn v-if="isAuthenticated" flat class="hidden-sm-and-down" to="/logout">
        Logout
      </v-btn>
    </v-toolbar>
  </span>
</template>


<script>
  import { mapGetters, } from "vuex";
  export default {
    name: "AppNavigation",
    data() {
      return {
        appTitle: "Mariana\"s Blog",
        drawer: false,
        itemsLogin: [
          {title: "Home", router: "/"},
          {title: "Add post", router: "/post_add"},
          {title: "My profile", router: "/profile"},
          {title: "Logout", router: "/logout"},
        ],
        itemsNotLogin: [
          {title: "Sign in", router: "/login"},
        ],
      };
    },

    computed: {
      ...mapGetters("auth", ["isAuthenticated"]),
    },
  };
</script>

<style scoped>
  #logo-image {
    width: 50px;
    height: 45px;
  }
</style>
