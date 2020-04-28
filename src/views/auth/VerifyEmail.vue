<template>
  <card-auth>
    <v-toolbar dark color="blue-grey darken-2">
      <v-toolbar-title>Verify Email</v-toolbar-title>
    </v-toolbar>
    <form-verify-email></form-verify-email>
  </card-auth>
</template>


<script>
  import CardAuth from "@/components/fragments/CardAuth";
  import FormVerifyEmail from "@/components/auth/FormVerifyEmail";

  export default {
    name: 'VerifyEmail',
    components: {
      FormVerifyEmail,
      CardAuth,
    },

  };
</script>


<style>
</style>
