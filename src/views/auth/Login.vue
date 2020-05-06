<template>
  <card-auth>
    <v-tabs color="blue-grey darken-2"
            grow fixed-tabs dark
            slider-color="white">
      <v-tab>
        Login
      </v-tab>

      <v-tab-item>
        <login-form></login-form>
      </v-tab-item>

      <v-tab>
        Sing in
      </v-tab>

      <v-tab-item>
        <register-form></register-form>
      </v-tab-item>

    </v-tabs>
  </card-auth>
</template>


<script>
  import CardAuth from "@/components/fragments/CardAuth";
  import LoginForm from "@/components/auth/LoginForm";
  import RegisterForm from "@/components/auth/RegisterForm";

  export default {
    name: "Login",
    components: {
      CardAuth,
      LoginForm,
      RegisterForm,
    },

  }
</script>


<style scoped>
</style>
