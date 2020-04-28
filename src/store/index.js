import createLogger from 'vuex/dist/logger';
import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import password from './modules/password';
import signup from './modules/signup';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    password,
    signup,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
