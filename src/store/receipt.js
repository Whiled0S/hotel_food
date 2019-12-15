import RPC from "../rpc";

export default {
  namespaced: true,

  state: () => ({
    location: null,
    order: null,
    products: null
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
    }
  },

  actions: {
    async getOrder({commit}, {orderId}) {
      const responseMessage = await RPC.getOrder(orderId);

      RPC.preventError(responseMessage, () => {
        const {
          payload: {
            item: {location, order, products}
          }
        } = responseMessage;

        commit('SET_LOCATION', location);
        commit('SET_ORDER', order);
        commit('SET_PRODUCTS', products);
      });
    }
  }
};
