<template>
  <v-layout justify-center>
    <v-flex xs12 sm9>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex xs6>
            <v-card flat>
              <v-img
                :src="card"
                max-width="300"
                max-height="400"
              ></v-img>
            </v-card>
          </v-flex>

          <v-flex xs6>
            <v-card flat class="profile-data">
              <div>
                <span class="profile">Login:</span>
                {{ profile.username }}
              </div>
              <div>
                <span class="profile">Email:</span>
                {{ profile.email }}
              </div>
              <div>
                <span class="profile">First name:</span>
                {{ profile.first_name }}
              </div>
              <div>
                <span class="profile">Last name:</span>
                {{ profile.last_name }}
              </div>
              <div>
                <span class="profile">Avatar:</span>
                <input
                  ref="uploadBtn"
                  type="file"
                  accept="image/*"
                  @change="uploadImage()"
                  id="file-input"
                >
              </div>
            </v-card>
          </v-flex>

        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "ProfileBase",
    props: ["profile"],
    data() {
      return {
        errored: false,
        card: this.$store.state.user.avatar,
      }
    },
    computed: {
      ...mapGetters("user", ["getAvatar"]),
    },

    methods: {
      uploadImage() {
        let files = this.$refs.uploadBtn.files;
        const formData = new FormData();
        formData.append("avatar", files[0]);
        formData.append("username", this.profile.username);
        let config = {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        };
        this.$store.dispatch("user/updateAccountAvatar", {
          id: this.profile.pk,
          data: formData,
          config: config,
        })
          .then(() => this.card = this.$store.state.user.avatar)
          .catch(() => this.errored = true)
      }
    },
  }
</script>

<style scoped>
  .profile {
    font-weight: bold;
  }

  .profile-data {
    font-size: 16px;
    line-height: 2;
  }
</style>
