import RPC from "../rpc";

export default {
  namespaced: true,

  state: () => ({
    products: {}
  }),

  getters: {
    getProductQuantity(state) {
      return id => state.products[id] || 0;
    }
  },

  mutations: {
    ADD_PRODUCT(state, {productId, quantity}) {
      state.products = {
        ...state.products,
        [productId]: quantity
      };
    }
  },

  actions: {
    async addIntoCart({commit, getters, rootState}, {productId}) {
      const productQuantity = getters.getProductQuantity(productId);
      const quantity = productQuantity ? productQuantity + 1 : 1;

      const responseMessage = await RPC.addIntoCart(rootState.locationHash, productId, quantity);

      RPC.preventError(responseMessage, () => {
        const {
          payload: {cartItem}
        } = responseMessage;

        commit('ADD_PRODUCT', cartItem);
      });
    }
  }
};
