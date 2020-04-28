<template>
  <card-auth>
    <v-tabs color="blue-grey darken-2"
            grow fixed-tabs dark
            slider-color="white">
      <v-tab>
        Login
      </v-tab>

      <v-tab-item>
        <form-login></form-login>
      </v-tab-item>

      <v-tab>
        Sing in
      </v-tab>

      <v-tab-item>
        <register></register>
      </v-tab-item>

    </v-tabs>
  </card-auth>
</template>


<script>
  import CardAuth from "@/components/fragments/CardAuth";
  import FormLogin from "@/components/auth/FormLogin";
  import Register from "@/components/auth/FormRegister";

  export default {
    name: 'Login',
    components: {
      CardAuth,
      FormLogin,
      Register,
    },

  }
</script>


<style scoped>
</style>
