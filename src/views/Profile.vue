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
        <profile-form>
        </profile-form>
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

  import ProfileForm from "@/components/profile/ProfileForm";

  export default {
    name: "Profile",
    components: {
      ProfileForm,
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
        .catch(() => this.errored = true )
    },
    computed: {
      ...mapState("user", ["statusGetAccount"]),
      ...mapState({profile: state => state.user.profile}),
    },

    // methods: {
    //     ...mapActions("user", ["isAuthenticated"]),
    //     saveBasicSettings(profile) {
    //         this.$validator.validateAll().then((result) => {
    //             if (result) {
    //                 user.updateAccountDetails(profile)
    //             }
    //         });
    //     }
    // }
  }
</script>


<style scoped>
  .loading {
    padding-left: 1em;
  }
</style>
