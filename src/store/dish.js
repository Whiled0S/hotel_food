import RPC from "../rpc";

export default {
  namespaced: true,

  state: () => ({
    product: null,

    loading: true
  }),

  getters: {},

  mutations: {
    SET_PRODUCT(state, product) {
      state.product = product;
    },

    SET_LOADING(state, status) {
      state.loading = status;
    }
  },

  actions: {
    async getProduct({commit}, {productId}) {
      const responseMessage = await RPC.getProduct(productId);

      RPC.preventError(responseMessage, () => {
        const {
          payload: {product}
        } = responseMessage;

        commit('SET_PRODUCT', product);
      });
    }
  }
};
