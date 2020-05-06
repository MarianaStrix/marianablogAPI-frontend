<template>
  <v-card-text>
    <template v-if="resetLoading">
      loading...
    </template>
    <template v-else-if="!resetCompleted">

      <form @submit.prevent="submit">
        <v-text-field
          v-model="inputs.password1"
          v-validate="'required|min:8'"
          :error-messages="errors.collect('password')"
          prepend-icon="lock"
          :type="show ? 'text' : 'password'"
          :append-icon="show ? 'visibility' : 'visibility_off'"
          name="password"
          label="Password"
          ref="password"
          @click:append="show = !show">
        </v-text-field>
        <v-text-field
          v-model="inputs.password2"
          v-validate="'required|confirmed:password'"
          :error-messages="errors.collect('password_confirmation')"
          prepend-icon="lock"
          :type="show ? 'text' : 'password'"
          :append-icon="show ? 'visibility' : 'visibility_off'"
          name="password_confirmation"
          label="Re-enter password"
          data-vv-as="password"
          @click:append="show = !show">
        </v-text-field>
      </form>
      <span class="errorForm"
            v-for="(error, index) in resetError"
            :key="index"
            v-show="resetError">
                {{error}}
            </span>
      <span class="errorForm" v-show="resetErrorToken">
        The password reset link was invalid, possibly because it has already been used. Please request a new password reset.
      </span>
      <span class="errorForm" v-show="serverError">
        {{resetError}}
        Server error
      </span>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="submit"
               dark
               color="blue-grey darken-1"
        >Reset Password
        </v-btn>
      </v-card-actions>
    </template>

    <template v-else>
      Your password has been reset.
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn to="/login"
               dark
               color="blue-grey darken-1">
          return to login page
        </v-btn>
      </v-card-actions>
    </template>

  </v-card-text>
</template>


<script>

  import {mapActions, mapState} from "vuex";

  export default {
    name: "PasswordResetConfirmForm",
    data() {
      return {
        show: false,
        inputs: {
          password1: "",
          password2: "",
          uid: this.$route.params.uid,
          token: this.$route.params.token,
        },
      };
    },
    computed: mapState("password", [
      "resetCompleted",
      "resetError",
      "resetLoading",
      "serverError",
      "resetErrorToken",
    ]),
    methods: {
      ...mapActions(
        "password", [
          "resetPassword",
          "clearResetStatus",
        ]),
      submit() {
        this.$validator
          .validateAll()
          .then((result) => {
            if (result) {
              this.resetPassword(this.inputs)
            }
          })
      },
    },
    beforeRouteLeave(to, from, next) {
      this.clearResetStatus();
      next();
    },
  };
</script>


<style scoped>
  .errorForm {
    color: red;
    font-size: 15px;
  }
</style>
