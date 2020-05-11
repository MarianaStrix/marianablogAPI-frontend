import session from "./session";

const BASE_URL = process.env.VUE_APP_BASEURL;


export default {
  postList() {
    return session.get(BASE_URL + "/posts/", {});
  },
  addPost(title, text, tags) {
    return session.post(BASE_URL + "/posts/", { title, text, tags });
  },
  detailPost(id) {
    return session.get(BASE_URL + "/posts/" + id + "/", {});
  },
  deletePost(id) {
    return session.delete(BASE_URL + "/posts/" + id + "/", {});
  },
  editPost(id, title, text, tags) {
    return session.patch(BASE_URL + "/posts/" + id + "/", { title, text, tags });
  }
};
