import Vue from 'vue';
import Vuex from 'vuex';

import modals from './store/modals';

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
    modals
  }
});
