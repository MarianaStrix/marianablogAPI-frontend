import user from "../../api/user";
import {
  ACCOUNT_BEGIN,
  ACCOUNT_FAILURE,
  ACCOUNT_SUCCESS,
  ACCOUNT_UPDATE_BEGIN,
  ACCOUNT_UPDATE_FAILURE,
  ACCOUNT_UPDATE_SUCCESS,
  AVATAR_BEGIN,
  AVATAR_FAILURE,
  AVATAR_SUCCESS,
  AVATAR_UPDATE_BEGIN,
  AVATAR_UPDATE_FAILURE,
  AVATAR_UPDATE_SUCCESS,
  SET_AVATAR,
  SET_PROFILE,
  REMOVE_AVATAR,
  REMOVE_PROFILE

} from "../actions/user";

const AVATAR_STORAGE_KEY = "AVATAR_STORAGE_KEY";
const PROFILE_STORAGE_KEY = "PROFILE_STORAGE_KEY";


const state = {
  statusGetAvatar: "",
  errorGetAvatar: "",
  avatar: "",
  statusGetAccount: "",
  errorGetAccount: "",
  profile: {},
  statusUpdateAccount: "",
  errorUpdateAccount: "",
  statusUpdateAvatar: "",
  errorUpdateAvatar: "",
};

const getters = {
  getAvatar: state => state.avatar,
};

const actions = {
  getAccount({ commit, dispatch }) {
    commit(ACCOUNT_BEGIN);
    return user.getAccount()
      .then((response) => {
        commit(ACCOUNT_SUCCESS, response);
        commit(SET_PROFILE, response.data);
      })
      .then(() => {
        dispatch("user/getAccountAvatar", { id: state.profile.pk }, { root: true });
      })
      .catch((error) => {
        commit(ACCOUNT_FAILURE, error);
        dispatch("auth/logout", {}, { root: true });
      });
  },

  updateAccount({ commit }, { profileNew }) {
    commit(ACCOUNT_UPDATE_BEGIN);
    return user.updateAccount(profileNew)
      .then((response) => {
        commit(ACCOUNT_UPDATE_SUCCESS);
        commit(SET_PROFILE, response.data);
      })
      .catch((error) => commit(ACCOUNT_UPDATE_FAILURE, error))
  },

  getAccountAvatar({ commit }, {id}) {
    commit(AVATAR_BEGIN);
    return user.getAccountAvatar(id)
      .then((response) => {
        commit(AVATAR_SUCCESS);
        commit(SET_AVATAR, response.data.avatar);
      })
      .catch((error) => commit(AVATAR_FAILURE, error))
  },

  updateAccountAvatar({ commit }, { id, data, config }) {
    commit(AVATAR_UPDATE_BEGIN);
    return user.updateAccountAvatar(id, data, config)
      .then((response) => {
        commit(AVATAR_UPDATE_SUCCESS);
        commit(SET_AVATAR, response.data.avatar);
      })
      .catch((error) => commit(AVATAR_UPDATE_FAILURE, error))
  },

  initializeStorageProfile({ commit }) {
    const profile = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY));

    if (profile) {
      commit(SET_PROFILE, profile);
    } else {
      commit(REMOVE_PROFILE);
    }
  },
  initializeStorageProfileAvatar({ commit }) {
    const avatar = JSON.parse(localStorage.getItem(AVATAR_STORAGE_KEY));

    if (avatar) {
      commit(SET_AVATAR, avatar);
    } else {
      commit(REMOVE_AVATAR);
    }
  },
};

const mutations = {
  [ACCOUNT_BEGIN](state) {
    state.statusGetAccount = "loading";
  },
  [ACCOUNT_SUCCESS](state) {
    state.statusGetAccount = "success";
    state.errorGetAccount = "";
  },
  [ACCOUNT_FAILURE](state, error) {
    state.statusGetAccount = "error";
    state.errorGetAccount = error;
    state.profile = {};
  },

  [ACCOUNT_UPDATE_BEGIN](state) {
    state.statusUpdateAccount = "loading"
  },
  [ACCOUNT_UPDATE_SUCCESS](state) {
    state.statusUpdateAccount = "success";
    state.errorUpdateAccount = "";
  },
  [ACCOUNT_UPDATE_FAILURE](state, error) {
    state.statusUpdateAccount = "error";
    state.errorUpdateAccount = error;
  },

  [AVATAR_BEGIN](state) {
    state.statusGetAvatar = "loading";
  },
  [AVATAR_SUCCESS](state) {
    state.statusGetAvatar = "success";
    state.errorGetAvatar = "";
  },
  [AVATAR_FAILURE](state, error) {
    state.statusGetAvatar = "error";
    state.errorGetAvatar = error;
    state.avatar = "";
  },

  [AVATAR_UPDATE_BEGIN](state) {
    state.statusUpdateAvatar = "loading";
  },
  [AVATAR_UPDATE_SUCCESS](state) {
    state.statusUpdateAvatar = "success";
    state.errorUpdateAvatar = "";
  },
  [AVATAR_UPDATE_FAILURE](state, error) {
    state.statusUpdateAvatar = "error";
    state.errorUpdateAvatar = error;
  },

  [SET_PROFILE](state, profile) {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
    state.profile = profile;
  },
  [REMOVE_PROFILE](state) {
    localStorage.removeItem(PROFILE_STORAGE_KEY);
    state.profile = {};
  },

  [SET_AVATAR](state, avatar) {
    localStorage.setItem(AVATAR_STORAGE_KEY, JSON.stringify(avatar));
    state.avatar = avatar;

  },
  [REMOVE_AVATAR](state) {
    localStorage.removeItem(AVATAR_STORAGE_KEY);
    state.avatar = "";
  },
};

export default {
  namespaced: true,
  state: state,
  getters,
  actions,
  mutations,
};
