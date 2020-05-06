<template>
  <v-tabs fixed-tabs>

    <v-tab>
      Profile
    </v-tab>
    <v-tab-item>
      <profile-form-base v-bind:profile="profile" >
      </profile-form-base>
    </v-tab-item>

    <v-tab>
      Settings
    </v-tab>
    <v-tab-item>
      <profile-form-basic-settings v-bind:profile="profile">
      </profile-form-basic-settings>
    </v-tab-item>

  </v-tabs>
</template>

<script>
  import { mapState } from "vuex";

  import ProfileFormBase from "@/components/profile/ProfileFormBase";
  import ProfileFormBasicSettings from "@/components/profile/ProfileFormBasicSettings";

  export default {
    name: "ProfileForm",
    components: {
      ProfileFormBase,
      ProfileFormBasicSettings,
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
