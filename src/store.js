import Vue from 'vue';
import Vuex from 'vuex';

import index from './store/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    isMenuOpened: false
  }),

  mutations: {
    SET_MENU_STATUS (state, status) {
      state.isMenuOpened = status;
    }
  },

  actions: {
    openMenu ({ commit }) {
      commit('SET_MENU_STATUS', true);
    },

    closeMenu ({ commit }) {
      commit('SET_MENU_STATUS', false);
    }
  },

  modules: {
    index
  }
});
