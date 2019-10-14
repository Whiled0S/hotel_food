export default {
  namespaced: true,

  state: {
    modal: ""
  },

  getters: {
    modal: state => Boolean(state.modal.length)
  },

  mutations: {
    SET_MODAL(state, name) {
      state.modal = name;
    },

    RESET_MODAL(state) {
      state.modal = "";
    }
  },

  actions: {
    openModal({commit}, name) {
      commit('SET_MODAL', name);
    },

    closeModal({commit}) {
      commit('RESET_MODAL');
    }
  }
};
