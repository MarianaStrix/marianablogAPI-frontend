<template>
  <card-auth>
    <v-toolbar dark color="blue-grey darken-2">
      <v-toolbar-title>Verify Email</v-toolbar-title>
    </v-toolbar>
    <verify-email-form></verify-email-form>
  </card-auth>
</template>


<script>
  import CardAuth from "@/components/fragments/CardAuth";
  import VerifyEmailForm from "@/components/auth/VerifyEmailForm";

  export default {
    name: "VerifyEmail",
    components: {
      VerifyEmailForm,
      CardAuth,
    },

  };
</script>


<style>
</style>
