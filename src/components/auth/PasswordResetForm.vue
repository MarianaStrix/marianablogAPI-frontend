<template>
  <v-card-text>
    <template v-if="emailLoading">
      <v-icon>fas fa-circle-notch fa-spin</v-icon>
      loading...
    </template>

    <template v-else-if="!emailCompleted">
      <form @submit.prevent="submit">
        <v-text-field
          v-model="inputs.email"
          v-validate="'required|email'"
          :error-messages="errors.collect('email')"
          data-vv-name="email"
          label="E-mail"
          prepend-icon="email"
          name="E-mail"
          type="text"
        ></v-text-field>
      </form>
      <span class="errorForm" v-show="emailError">
        A error occured while processing your request.
      </span>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="submit(inputs)"
               dark
               color="blue-grey darken-1"
        >Reset Password
        </v-btn>
      </v-card-actions>
    </template>

    <template v-else>
      <div>
        Check your inbox for a link to reset your password. If an email doesn't appear within a few
        minutes, check your spam folder.
      </div>
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
    name: "PasswordResetForm",
    $_veeValidate: {
      validator: "new"
    },
    data() {
      return {
        inputs: {email: ""},
      };

    },
    computed: mapState("password", [
      "emailCompleted",
      "emailError",
      "emailLoading",
    ]),
    methods: {
      ...mapActions("password", [
        "sendPasswordResetEmail",
        "clearEmailStatus",
      ]),

      submit(inputs) {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.sendPasswordResetEmail(inputs);
          }
        });
      },
    },
    beforeRouteLeave(to, from, next) {
      this.clearEmailStatus();
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
