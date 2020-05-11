import session from "./session";
import session_without_token from "./session_without_token";

const BASE_URL = process.env.VUE_APP_BASEURL;


export default {
  login(username, password) {
    return session.post(BASE_URL + "/auth/login/", { username, password });
  },
  logout() {
    return session.post(BASE_URL + "/auth/logout/", {});
  },
  createAccount(username, password1, password2, email, recaptcha) {
    return session.post(
      BASE_URL + "/registration/",
      { username, email, password1, password2, recaptcha }
      );
  },
  sendAccountPasswordResetEmail(email) {
    return session.post(BASE_URL + "/auth/password/reset/", { email });
  },
  resetAccountPassword(uid, token, new_password1, new_password2) {
    return session_without_token.post(BASE_URL + "/auth/password/reset/confirm/", {
      uid,
      token,
      new_password1,
      new_password2
    });
  },
  verifyAccountEmail(key) {
    return session_without_token.post(
      BASE_URL + "/registration/verify-email/",
      { key }
      );
  },
  getAccountDetails() {
    return session.get(BASE_URL + "/auth/user/");
  },
  updateAccountDetails(data) {
    return session.patch(BASE_URL + "/auth/user/", data);
  },
  changeAccountPassword(password1, password2) {
    return session.post(
      BASE_URL + "/auth/password/change/",
      { password1, password2 }
      );
  },

};
