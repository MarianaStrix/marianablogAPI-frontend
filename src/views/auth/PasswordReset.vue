<template>
  <card-auth>
    <v-toolbar dark color="blue-grey darken-2">
      <v-toolbar-title>Reset Password</v-toolbar-title>
    </v-toolbar>
    <password-reset-form>
    </password-reset-form>
  </card-auth>
</template>


<script>
  import CardAuth from "@/components/fragments/CardAuth";
  import PasswordResetForm from "@/components/auth/PasswordResetForm";

  export default {
    name: 'PasswordReset',
    components: {
      CardAuth,
      PasswordResetForm,
    },
  };
</script>


<style>
</style>
