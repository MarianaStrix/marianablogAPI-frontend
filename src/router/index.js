import Vue from 'vue';
import VeeValidate from 'vee-validate';
import Router from 'vue-router';

import About from '../views/About';
import Home from '../views/Home';
import Login from '../views/auth/Login';
import Lost from '../views/Lost';
import PasswordReset from '../views/auth/PasswordReset';
import PasswordResetConfirm from '../views/auth/PasswordResetConfirm';
import VerifyEmail from '../views/auth/VerifyEmail';

import store from '../store';

const requireAuthenticated = (to, from, next) => {
    store.dispatch('auth/initialize')
        .then(() => {
            if (!store.getters['auth/isAuthenticated']) {
                next('/login');
            } else {
                next();
            }
        });
};

const requireUnauthenticated = (to, from, next) => {
    store.dispatch('auth/initialize')
        .then(() => {
            if (store.getters['auth/isAuthenticated']) {
                next('/home');
            } else {
                next();
            }
        });
};

const redirectLogout = (to, from, next) => {
    store.dispatch('auth/logout')
        .then(() => next('/login'));
};

Vue.use(VeeValidate);
Vue.use(Router);

export default new Router({
    saveScrollPosition: true,
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/about',
            component: About,
            beforeEnter: requireAuthenticated,
        },
        {
            path: '/home',
            component: Home,
            beforeEnter: requireAuthenticated,
        },
        {
            path: '/password_reset',
            component: PasswordReset,
        },
        {
            path: '/password_reset/:uid/:token',
            component: PasswordResetConfirm,
        },

        {
            path: '/register/:key',
            component: VerifyEmail,
        },
        {
            path: '/login',
            component: Login,
            beforeEnter: requireUnauthenticated,
        },
        {
            path: '/logout',
            beforeEnter: redirectLogout,
        },
        {
            path: '*',
            component: Lost,
        },
    ],
});
