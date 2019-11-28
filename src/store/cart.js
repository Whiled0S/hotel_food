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
    ADD_PRODUCT(state, productId) {
      state.products = {
        ...state.products,
        [productId]: (state.products[productId] || 0) + 1
      };
    },

    REMOVE_PRODUCT(state, productId) {
      if (!state.products[productId]) return;

      const amount = state.products[productId] - 1;

      if (amount <= 0) {
        delete state.products[productId];
        state.products = { ...state.products };
      } else {
        state.products = {
          ...state.products,
          [productId]: amount
        };
      }
    },

    SET_CART(state, cart) {
      // eslint-disable-next-line no-console
      console.log(cart);
    }
  },

  actions: {
    addIntoCart({getters, rootState}, {productId, amount}) {
      const productQuantity = getters.getProductQuantity(productId);
      const quantity = productQuantity ? productQuantity + amount : amount;

      RPC.addIntoCart(rootState.locationHash, productId, quantity);
    },

    async getCart({commit, rootState}) {
      const responseMessage = await RPC.getCart(rootState.locationHash);

      RPC.preventError(responseMessage, () => {
        const {
          payload: {cart}
        } = responseMessage;

        commit('SET_CART', cart);
      });
    }
  }
};
