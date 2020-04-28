<template>
  <v-parallax dark :src="require('../assets/lash4.jpg')" height="350" jumbotron>
    <v-container fluid grid-list-xl text-xs-center class="home-logo">
      <v-layout justify-center align-center column mt-4 pa-5>
        <div class="logo font-weight-black white--text text-xs-center">
          <span class="name-site">Mariana's Blog</span>
        </div>
        <div class="display-1 white--text text-xs-center">Cute kitty developer</div>
      </v-layout>
    </v-container>
  </v-parallax>
</template>


<script>
  export default {
    name: 'HomeLogo'
  };
</script>


<style scoped>
  .name-site {
    text-shadow: 1px 1px 1px gray;
  }

  .display-1 {
    font-style: italic;
  }

  .logo {
    font-size: 86px;
  }
</style>
