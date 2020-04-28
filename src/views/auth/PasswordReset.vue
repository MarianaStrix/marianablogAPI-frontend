<template>
  <card-auth>
    <v-toolbar dark color="blue-grey darken-2">
      <v-toolbar-title>Reset Password</v-toolbar-title>
    </v-toolbar>
    <form-password-reset>
    </form-password-reset>
  </card-auth>
</template>


<script>
  import CardAuth from "@/components/fragments/CardAuth";
  import FormPasswordReset from "@/components/auth/FormPasswordReset";

  export default {
    name: 'PasswordReset',
    components: {
      CardAuth,
      FormPasswordReset,
    },
  };
</script>


<style>
</style>
