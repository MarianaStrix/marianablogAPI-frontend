<template>
  <v-card-text>
    <template v-if="registrationLoading">
      <v-card-text>
        loading...
      </v-card-text>
    </template>
    <template v-else-if="!registrationCompleted">
      <form method="post">
        <v-text-field v-model="inputs.username"
                      prepend-icon="person"
                      v-validate="'required'"
                      :error-messages="errors.collect('login')"
                      data-vv-name="login"
                      name="login"
                      label="Login"
                      type="text"
        ></v-text-field>
        <v-text-field v-model="inputs.email"
                      v-validate="'required|email'"
                      :error-messages="errors.collect('email')"
                      data-vv-name="email"
                      prepend-icon="email"
                      name="email"
                      label="E-mail"
                      type="email"
        ></v-text-field>
        <v-text-field v-model="inputs.password1"
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
        <v-text-field v-model="inputs.password2"
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
      <div>
        <span class="errorForm" v-show="registrationError">
          <div v-for="(value, index) of registrationError" :key="index">
            {{ String(value).replace(',','') }}
          </div>
        </span>
        <template>
          <vue-recaptcha ref="recaptcha"
                         :sitekey="sitekey"
                         @verify="onVerify"
                         @expired="onExpired"
          ></vue-recaptcha>
        </template>
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="register(inputs)"
               dark
               color="blue-grey darken-1"
        >Sing in
        </v-btn>
      </v-card-actions>
    </template>

    <template v-else>
      <div>
        Registration complete. You should receive an email shortly with instructions on how to
        activate your account.
      </div>
    </template>

  </v-card-text>
</template>


<script>
  import {mapActions, mapState} from "vuex";
  import VueRecaptcha from "vue-recaptcha";

  const SITE_KEY = process.env.VUE_APP_SITE_KEY_RECAPTCHA;

  export default {
    name: "RegisterForm",
    components: {VueRecaptcha},
    $_veeValidate: {

      validator: "new"
    },
    data() {
      return {
        show: false,
        sitekey: SITE_KEY,
        recaptchaForm: false,
        inputs: {
          username: "",
          email: "",
          password1: "",
          password2: "",
          recaptcha: "",
        },
      };
    },
    computed: mapState("signup", [
      "registrationCompleted",
      "registrationError",
      "registrationLoading",
    ]),
    methods: {
      ...mapActions(
        "signup", [
          "createAccount",
          "clearRegistrationStatus",

        ]),
      onVerify: function (key) {
        this.recaptchaForm = true;
        this.inputs.recaptcha = key;
      },
      onExpired: function () {
        this.$refs.recaptcha.reset();
        this.recaptchaForm = false;
      },
      register(inputs) {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.createAccount(inputs)
          }
        });
      },
    },
    beforeRouteLeave(to, from, next) {
      this.clearRegistrationStatus();
      next();
    },
  };
</script>

<style>
  .errorForm {
    color: red;
    font-size: 14px;
  }
</style>
