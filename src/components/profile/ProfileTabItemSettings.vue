<template>
  <v-card flat color="while">
    <v-card-text id="text-post">
      <v-form>
        <span class="title">Basic settings</span>

        <v-container>
          <v-text-field
            v-model="firstname"
            color="teal darken-1"
            label="First name"
            type="text"
            v-bind:placeholder="profile.first_name"
            v-validate="'max:32'"
            :error-messages="errors.collect('firstname')"
            data-vv-name="firstname"

          ></v-text-field>
          <v-text-field
            v-model="lastname"
            color="teal darken-1"
            label="Last name"
            type="text"
            v-bind:placeholder="profile.last_name"
            v-validate="'max:32'"
            :error-messages="errors.collect('lastname')"
            data-vv-name="lastname"

          ></v-text-field>


        </v-container>
      </v-form>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          @click="submit(username, firstname, lastname, profileNew)"
          right
          dark
          color="blue-grey darken-1"
        >Save
        </v-btn>
      </v-card-actions>
    </v-card-text>

  </v-card>

</template>

<script>

  export default {
    name: "ProfileTabItemSettings",
    props: ["profile"],

    data() {
      return {
        profileBase: {},
        formHasErrors: false,
        username: null,
        lastname: null,
        firstname: null,
        profileNew: {},
        dictionary: {
          attributes: {
            email: "E-mail Address"
            // custom attributes
          },
          custom: {
            firstname: {
              max: "The first name field may not be greater than 32 characters"
            },
            lastname: {
              max: "The last name field may not be greater than 32 characters"
            }
          }
        }
      }
    },
    mounted() {
      this.$validator.localize("en", this.dictionary)
    },
    computed: {
      form() {
        return {
          username: this.username,
          lastname: this.lastname,
          firstname: this.firstname,
        }
      },
    },

    methods: {
      submit(username, firstname, lastname, profileNew) {
        this.$validator.validateAll().then(() => {
          if (lastname || firstname) {
            if (firstname)
              profileNew["first_name"] = firstname;
            if (lastname != null)
              profileNew["last_name"] = lastname;
            // eslint-disable-next-line no-console
            console.log(profileNew)
            // this.$store.dispatch("user/updateAccount", {profileNew})
            //   .then(() => {
            //     this.lastname = null;
            //     this.firstname = null;
            //   })
            //   .catch(() => this.serverError = true)
          }
        });
      },
    }
  }
</script>

<style scoped>
  .errorForm {
    color: red;
  }
</style>
