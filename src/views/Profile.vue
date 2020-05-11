<template>
  <v-container grid-list-md class="total-tape">
    <v-card flat color="while">
      <template v-if="statusGetAccount === 'loading'">
        <v-progress-circular
          indeterminate
          color="teal darken-3"
        ></v-progress-circular>
        <div class="loading">Loading...</div>
      </template>

      <template v-else-if="statusGetAccount === 'success'">
        <profile-tabs>
        </profile-tabs>
      </template>

      <template v-else-if="statusGetAccount === 'error'">
        Oops something went wrong, please try again.
      </template>
      <template v-else-if="errored">
        Oops something went wrong, please try again.
      </template>
    </v-card>
  </v-container>
</template>


<script>
  import { mapState } from 'vuex';

  import ProfileTabs from "@/components/profile/ProfileTabs";

  export default {
    name: "Profile",
    components: {
      ProfileTabs,
    },
    data() {
      return {
        user: "",
        errored: false,
      }
    },

    created() {
      this.$store.dispatch("user/initializeStorageProfile")
        .catch(() => this.errored = true );
      this.$store.dispatch("user/initializeStorageProfileAvatar")
        .catch(() => this.errored = true );
    },
    computed: {
      ...mapState("user", ["statusGetAccount"]),
      ...mapState({profile: state => state.user.profile}),
    },
  }
</script>


<style scoped>
  .loading {
    padding-left: 1em;
  }
</style>
