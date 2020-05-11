<template>
  <v-tabs fixed-tabs slider-color="teal darken-1">

    <v-tab>
      Settings
    </v-tab>
    <v-tab-item >
      <profile-tab-item-settings v-bind:profile="profile">
      </profile-tab-item-settings>
    </v-tab-item>

    <v-tab>
      Profile
    </v-tab>
    <v-tab-item>
      <profile-tab-item-account v-bind:profile="profile">
      </profile-tab-item-account>
    </v-tab-item>

  </v-tabs>
</template>

<script>
  import {mapState} from "vuex";

  import ProfileTabItemAccount from "@/components/profile/ProfileTabItemAccount";
  import ProfileTabItemSettings from "@/components/profile/ProfileTabItemSettings";

  export default {
    name: "ProfileTabs",
    components: {
      ProfileTabItemAccount,
      ProfileTabItemSettings,
    },
    data() {
      return {
        user: "",
      }
    },
    computed: {
      ...mapState({profile: state => state.user.profile}),
    },
  }
</script>

<style scoped>
</style>
