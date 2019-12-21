import RPC from "../rpc";

export default {
  namespaced: true,

  state: () => ({
    items: null,
    order: null,
    suggestedItems: null,

    highlightTermsOfUse: false,
    isCheckoutPending: false
  }),

  getters: {
    getProductQuantity(state) {
      return id => state.items.find(item => item.id === id)?.quantityInCart || 0;
    },

    totalQuantity: state => state.items.reduce((q, i) => q + i.quantityInCart, 0),

    itemsSet: state => state.items instanceof Array,
    orderSet: state => state.order instanceof Object,

    total: state => state.items.reduce((acc, item) => acc + item.precisionPrice / 100 * item.quantityInCart, 0)
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

    SET_CART_ORDER(state, order) {
      state.order = order;
    },

    SET_SUGGESTED_ITEMS(state, items) {
      state.suggestedItems = items;
    },

    SET_HIGHLIGHT_TERMS(state, status) {
      state.highlightTermsOfUse = status;
    },

    CLEAR_CART(state) {
      state.items = [];
    },

    RESET_CART(state) {
      state.items = null;
      state.order = null;
    },

    SET_CHECKOUT_PENDING(state, status) {
      state.isCheckoutPending = status;
    }
  },

  actions: {
    addIntoCart({rootState}, {productId, amount}) {
      RPC.addIntoCart(rootState.locationHash, productId, amount);
    },

    async getCart({commit, rootState}) {
      const [cartResponse, suggestedResponse] = await RPC.getCart(rootState.locationHash);

      RPC.preventError(cartResponse, () => {
        const {
          payload: {cart}
        } = cartResponse;

        if (cart) {
          commit('SET_CART_ITEMS', cart.items);
          commit('SET_CART_ORDER', cart.order);
        } else {
          commit('SET_CART_ITEMS', []);
        }
      });

      RPC.preventError(suggestedResponse, () => {
        const {
          payload: {items}
        } = suggestedResponse;

        if (items && items.length) {
          commit('SET_SUGGESTED_ITEMS', items);
        }
      });
    },

    deleteFromCart({commit}, {productId}) {
      commit('DELETE_PRODUCT', productId);
      RPC.deleteFromCart(productId);
    },

    clearCart({commit}) {
      commit('CLEAR_CART');
      RPC.clearCart();
    },

    resetCart({commit}) {
      commit('RESET_CART');
    },

    async processCheckout({commit, rootState}, {acceptTermsOfUse, comment}) {
      commit('SET_CHECKOUT_PENDING', true);
      const responseMessage = await RPC.processCheckout(rootState.locationHash, acceptTermsOfUse, comment);

      if (responseMessage.type === 'error') {
        commit('SET_CHECKOUT_PENDING', false);

        const {payload: {context}} = responseMessage;

        if (context) {
          const {attribute} = context;

          if (attribute === 'acceptTermsOfUse') {
            commit('SET_HIGHLIGHT_TERMS', true);
          }
        } else {
          alert(responseMessage.payload.message);
        }
      } else {
        RPC.preventError(responseMessage, () => {
          const {
            payload: {url}
          } = responseMessage;

          window.location.href = url;
        });
      }
    }
  }
};
