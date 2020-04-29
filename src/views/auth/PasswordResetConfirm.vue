<template>
  <card-auth>
    <v-toolbar dark color="blue-grey darken-2">
      <v-toolbar-title>Reset Password Confirm</v-toolbar-title>
    </v-toolbar>
    <password-reset-confirm-form/>
  </card-auth>
</template>


<script>
  import CardAuth from "@/components/fragments/CardAuth";
  import PasswordResetConfirmForm from "@/components/auth/PasswordResetConfirmForm";

  export default {
    name: "PasswordResetConfirm",
    components: {
      PasswordResetConfirmForm,
      CardAuth,
    },
  };
</script>


<style>
</style>
