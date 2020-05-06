<template>
  <v-card-text>
    <form @submit.prevent="submit">
      <v-text-field
        v-model="username"
        prepend-icon="person"
        v-validate="'required'"
        :error-messages="errors.collect('username')"
        label="Login"
        data-vv-name="username"
        required
        id="login"
        type="text"
      ></v-text-field>
      <v-text-field
        v-model="password"
        prepend-icon="lock"
        :append-icon="show ? 'visibility' : 'visibility_off'"
        :type="show ? 'text' : 'password'"
        v-validate="'required'"
        :error-messages="errors.collect('password')"
        label="Password"
        data-vv-name="password"
        required
        @click:append="show = !show"
      ></v-text-field>
    </form>
    <div>
      <span class="errorForm" v-show="loginError">
        {{String(loginError)}} There was a problem with your login and password.
      </span>
      <span class="errorForm" v-show="serverError">
        Not connected to the server.
      </span>
    </div>
    <router-link class="link-reset" to="/password_reset">Reset password</router-link>
    <v-card-actions>
      <v-spacer/>
      <v-btn @click="submit(username, password)"
             dark
             color="blue-grey darken-1"
      >Login
      </v-btn>
    </v-card-actions>
  </v-card-text>
</template>


<script>
  import {mapState} from "vuex";

  export default {
    name: "LoginForm",
    $_veeValidate: {
      validator: "new"
    },

    data: () => ({
      username: "",
      password: "",
      show: false,
      dictionary: {
        custom: {
          username: {
            required: () => "Login can not be empty",
          },
          password: {
            required: () => "Password can not be empty",
          }
        }
      }
    }),

    computed:
      mapState("auth", [
        "authenticating",
        "loginError",
        "serverError",
      ]),

    methods: {
      submit(username, password) {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.$store
              .dispatch("auth/login", {username, password})
              .then(() => this.$router.push("/"))
              .catch(() => this.serverError = true)
          }
        });
      },
    }
  }
</script>


<style scoped>
  .link-reset {
    padding: 0;
    margin-left: 40px;
    color: #607d8b;
    font-size: 16px;
  }

  .errorForm {
    color: red;
    font-size: 15px;
  }
</style>
