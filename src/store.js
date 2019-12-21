import Vue from 'vue';
import Vuex from 'vuex';

import home from './store/home';
import restaurant from "./store/restaurant";
import dish from './store/dish';
import cart from './store/cart';
import receipt from "./store/receipt";
import history from "./store/history";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    isMenuOpened: false,
    locationHash: '',
    previousUrl: null
  }),

  getters: {

  },

  mutations: {
    SET_MENU_STATUS(state, status) {
      state.isMenuOpened = status;
    },

    SET_LOCATION_HASH(state, hash) {
      state.locationHash = hash;
    },

    SET_PREVIOUS_URL(state, url) {
      state.previousUrl = url;
    }
  },

  actions: {
    openMenu({commit}) {
      commit('SET_MENU_STATUS', true);
    },

    closeMenu({commit}) {
      commit('SET_MENU_STATUS', false);
    }
  },

  modules: {
    home,
    restaurant,
    dish,
    cart,
    receipt,
    history
  }
});
