import auth from "../../api/auth";
import session from "../../api/session";
import {
  LOGIN_BEGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  REMOVE_TOKEN,
  SET_TOKEN,
} from "../actions/auth";

const TOKEN_STORAGE_KEY = "TOKEN_STORAGE_KEY";

const initialState = {
  authenticating: false,
  loginError: false,
  serverError: false,
  token: localStorage.getItem(TOKEN_STORAGE_KEY) || "",

};

const getters = {
  isAuthenticated: state => !!state.token,
};

const actions = {
  login({commit, dispatch}, {username, password}) {
    commit(LOGIN_BEGIN);
    return auth.login(username, password)
      .then(({data}) => commit(SET_TOKEN, data.key))
      .then(() => commit(LOGIN_SUCCESS))
      .then(() => dispatch("user/getAccount", {}, {root:true}))
      .catch((error) => commit(LOGIN_FAILURE, error));
  },
  logout({commit}) {
    return auth.logout()
      .then(() => commit(LOGOUT))
      .finally(() => {
        commit("user/REMOVE_PROFILE", null, { root: true });
        commit("user/REMOVE_AVATAR", null, { root: true });
        commit(REMOVE_TOKEN);
        });
  },
  initialize({commit}) {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);


    if (token) {
      commit(SET_TOKEN, token);
    } else {
      commit(REMOVE_TOKEN);
    }
  },
};

const mutations = {
  [LOGIN_BEGIN](state) {
    state.authenticating = true;
    state.loginError = false;
    state.serverError = false;
  },
  [LOGIN_FAILURE](state, error) {
    state.authenticating = false;
    if (error.response) {
      if (error.response.status === 400) {
        state.loginError = error.response.data.non_field_errors;
        state.serverError = false;
      }
    } else state.serverError = true;
  },
  [LOGIN_SUCCESS](state) {
    state.authenticating = false;
    state.loginError = false;
    state.serverError = false;
  },
  [LOGOUT](state) {
    state.authenticating = false;
    state.loginError = false;
    state.serverError = false;
  },
  [SET_TOKEN](state, token) {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
    session.defaults.headers.Authorization = `Token ${token}`;
    state.token = token;
  },
  [REMOVE_TOKEN](state) {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    delete session.defaults.headers.Authorization;
    state.token = null;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
