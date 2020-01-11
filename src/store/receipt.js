import RPC from '../rpc';

export default {
  namespaced: true,

  state: () => ({
    location: null,
    order: null,
    products: null,
    error: false
  }),

  getters: {},

  mutations: {
    SET_LOCATION(state, location) {
      state.location = location;
    },

    SET_ORDER(state, order) {
      state.order = order;
    },

    SET_PRODUCTS(state, products) {
      state.products = products;
    },

    SET_ERROR(state, status) {
      state.error = status;
    }
  },

  actions: {
    async getOrder({ commit }, { orderId }) {
      const { payload: { status } } = await RPC.checkPayment(orderId);

      if (status !== 'AUTHORIZED') return commit('SET_ERROR', true);

      const responseMessage = await RPC.getOrder(orderId);

      const { payload: { item: { location, order, products } } } = responseMessage;

      commit('SET_LOCATION', location);
      commit('SET_ORDER', order);
      commit('SET_PRODUCTS', products);
    }
  }
};
