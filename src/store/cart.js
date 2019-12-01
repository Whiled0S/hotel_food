import RPC from "../rpc";

export default {
  namespaced: true,

  state: () => ({
    products: {},
    items: []
  }),

  getters: {
    getProductQuantity(state) {
      return id => state.items.find(item => item.id === id)?.quantityInCart || 0;
    }
  },

  mutations: {
    ADD_PRODUCT(state, product) {
      const itemIndex = state.items.findIndex(item => item.id === product.id);

      if (itemIndex === -1) {
        state.items.push({...product, quantityInCart: 1, image: product.images[0]});
      } else {
        state.items[itemIndex].quantityInCart++;
      }

      state.items = [...state.items];
    },

    REMOVE_PRODUCT(state, productId) {
      const itemIndex = state.items.findIndex(item => item.id === productId);

      if (itemIndex !== -1) {
        const quantity = state.items[itemIndex].quantityInCart - 1;

        if (quantity <= 0) {
          state.items.splice(itemIndex, 1);
        } else {
          state.items[itemIndex].quantityInCart = quantity;
          state.items = [...state.items];
        }
      }
    },

    DELETE_PRODUCT(state, productId) {
      const itemIndex = state.items.findIndex(item => item.id === productId);

      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
      }
    },

    SET_CART_ITEMS(state, items) {
      state.items = items;
    },

    CLEAR_CART(state) {
      state.items = [];
    }
  },

  actions: {
    addIntoCart({rootState}, {productId, amount}) {
      RPC.addIntoCart(rootState.locationHash, productId, amount);
    },

    async getCart({commit, rootState}) {
      const responseMessage = await RPC.getCart(rootState.locationHash);

      RPC.preventError(responseMessage, () => {
        const {
          payload: {cart: {items}}
        } = responseMessage;

        commit('SET_CART_ITEMS', items);
      });
    },

    deleteFromCart({commit}, {productId}) {
      commit('DELETE_PRODUCT', productId);
      RPC.deleteFromCart(productId);
    },

    clearCart({commit}) {
      commit('CLEAR_CART');
      RPC.clearCart();
    }
  }
};
