import RPC from '../rpc';

export default {
  namespaced: true,

  state: () => ({
    orders: [],
    loading: true
  }),

  getters: {},

  mutations: {
    SET_LOADING(state, status) {
      state.loading = status;
    },

    SET_ORDERS(state, orders) {
      state.orders = orders;
    }
  },

  actions: {
    async getOrders({ commit }) {
      commit('SET_LOADING', true);
      const responseMessage = await RPC.getOrders();

      const { payload: { items } } = responseMessage;

      commit('SET_ORDERS', items.reverse());
      commit('SET_LOADING', false);
    }
  }
};
