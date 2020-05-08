import Router from "vue-router";
import Vue from "vue";
import VeeValidate from "vee-validate";

import Home from "../views/Home";
import Login from "../views/auth/Login";
import Lost from "../views/Lost";
import PasswordReset from "../views/auth/PasswordReset";
import PasswordResetConfirm from "../views/auth/PasswordResetConfirm";
import PostAdd from "../views/posts/PostAdd"
import PostDetail from "../views/posts/PostDetail";
import PostEdit from "../views/posts/PostEdit";
import Profile from "../views/Profile"
import store from "../store";
import VerifyEmail from "../views/auth/VerifyEmail";

const requireAuthenticated = (to, from, next) => {
  store.dispatch("auth/initialize")
    .then(() => {
      if (!store.getters["auth/isAuthenticated"]) {
        next("/login");
      } else {
        next();
      }
    });
};

const requireUnauthenticated = (to, from, next) => {
  store.dispatch("auth/initialize")
    .then(() => {
      if (store.getters["auth/isAuthenticated"]) {
        next("/home");
      } else {
        next();
      }
    });
};

const redirectLogout = (to, from, next) => {
  store.dispatch("auth/logout")
    .then(() => next("/login"));
};

Vue.use(VeeValidate);
Vue.use(Router);

export default new Router({
  saveScrollPosition: true,
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
      beforeEnter: requireAuthenticated,
    },
    {
      path: "/password_reset",
      component: PasswordReset,
    },
    {
      path: "/password_reset/:uid/:token",
      component: PasswordResetConfirm,
    },
    {
      path: "/register/:key",
      component: VerifyEmail,
    },
    {
      path: "/login",
      component: Login,
      beforeEnter: requireUnauthenticated,
    },
    {
      path: "/logout",
      beforeEnter: redirectLogout,
    },
    {
      path: "/post_add",
      component: PostAdd,
      beforeEnter: requireAuthenticated,

    },
    {
      path: '/post_edit/:id',
      component: PostEdit,
      props: true,
      beforeEnter: requireAuthenticated,

    },
    {
      path: "/post/:id",
      name: "post",
      component: PostDetail,
      props: true,
      beforeEnter: requireAuthenticated,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      beforeEnter: requireAuthenticated,
    },
    {
      path: "*",
      name: "not_found",
      component: Lost,
    },
  ],
});
