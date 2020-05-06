import router from "./router"
import store from "./store"

import App from "./App.vue"
import Vue from "vue"
import "./plugins/vuetify"


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app")
