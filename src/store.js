import Vue from 'vue';
import Vuex from 'vuex';
import router from "./router";

import home from './store/home';
import restaurant from "./store/restaurant";
import dish from './store/dish';

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    isMenuOpened: false,
  }),

  getters: {
    locationHash: () => router.history.current.params.location
  },

  mutations: {
    SET_MENU_STATUS(state, status) {
      state.isMenuOpened = status;
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
    dish
  }
});
