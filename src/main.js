import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import Axios from "axios";
import Vuex from "vuex";

Vue.config.productionTip = false;
// Vue.use(Vuex);
//Vue.config.productionTip = false;
// Vue.prototype.$http = Axios;
// const token = localStorage.getItem('TOKEN_STORAGE_KEY');
// if (token) {
//     Vue.prototype.$http.defaults.headers.common.Authorization["Authorization"] = token;
// }
// console.log(axios.defaults.headers.common);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
