import session from "./session";
const BASE_URL = process.env.VUE_APP_BASEURL;


export default {
  getAccountAvatar(id) {
    return session.get(BASE_URL + "/accounts/" + id);
  },
  updateAccountAvatar(id, data, config) {
    return session.put(BASE_URL + "/accounts/" + id +"/", data, config)
  },
  getAccount() {
    return session.get(BASE_URL + "/auth/user/");
  },
  updateAccount(data) {
    return session.patch(BASE_URL + "/auth/user/", data);
  },
  changeAccountPassword(password1, password2) {
    return session.post(BASE_URL + "/auth/password/change/",
      { password1, password2 });
  },
};
