<template>
  <card-auth>
    <v-toolbar dark color="blue-grey darken-2">
      <v-toolbar-title>Reset Password Confirm</v-toolbar-title>
    </v-toolbar>
    <form-password-reset-confirm/>
  </card-auth>
</template>


<script>
  import CardAuth from "@/components/fragments/CardAuth";
  import FormPasswordResetConfirm from "@/components/auth/FormPasswordResetConfirm";

  export default {
    name: "PaswordResetConfirm",
    components: {
      FormPasswordResetConfirm,
      CardAuth,
    },
  };
</script>


<style>
</style>
