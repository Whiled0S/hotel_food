import RPC from "../rpc";

const defaultCategories = [{name: 'All', id: -1}];

export default {
  namespaced: true,

  state: () => ({
    location: null,
    blocks: null,
    business: null,
    categories: null,
    products: null,

    defaultCategories,
    loading: true,
    itemsLoading: false
  }),

  getters: {
    categories: state => state.categories ? [...state.defaultCategories, ...state.categories] : []
  },

  mutations: {
    SET_LOCATION(state, location) {
      state.location = location;
    },

    SET_BLOCKS(state, blocks) {
      state.blocks = blocks;
    },

    SET_BUSINESS(state, business) {
      state.business = business;
    },

    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },

    SET_PRODUCTS(state, products) {
      state.products = products;
    },

    SET_LOADING(state, status) {
      state.loading = status;
    },

    SET_ITEMS_LOADING(state, status) {
      state.itemsLoading = status;
    }
  },

  actions: {
    async getRestaurantData({commit, rootState}, {businessId}) {
      const [productsMessage, locationMessage] = await RPC.getRestaurantData(businessId, rootState.locationHash);

      RPC.preventError(productsMessage, () => {
        const {
          payload: {blocks, business, categories}
        } = productsMessage;

        commit('SET_BLOCKS', blocks);
        commit('SET_BUSINESS', business);
        commit('SET_CATEGORIES', categories);
      });

      RPC.preventError(locationMessage, () => {
        const {payload} = locationMessage;

        commit('SET_LOCATION', payload);
      });
    },

    async getProductsByBusiness({commit}, {businessId}) {
      const responseMessage = await RPC.getProductsByBusiness(businessId);

      RPC.preventError(responseMessage, () => {
        const {
          payload: {blocks, business, categories}
        } = responseMessage;

        commit('SET_BLOCKS', blocks);
        commit('SET_BUSINESS', business);
        commit('SET_CATEGORIES', categories);
      });
    },

    async getBlocks({commit}, {businessId}) {
      commit('SET_ITEMS_LOADING', true);

      const responseMessage = await RPC.getProductsByBusiness(businessId);

      RPC.preventError(responseMessage, () => {
        const {
          payload: {blocks}
        } = responseMessage;

        commit('SET_BLOCKS', blocks);
        commit('SET_ITEMS_LOADING', false);
      });
    },

    async getProductByCategory({commit}, {businessId, categoryId}) {
      commit('SET_ITEMS_LOADING', true);

      const responseMessage = await RPC.getProductByCategory(businessId, categoryId);

      RPC.preventError(responseMessage, () => {
        const {
          payload: {items}
        } = responseMessage;

        commit('SET_PRODUCTS', items);
        commit('SET_ITEMS_LOADING', false);
      });
    },

    cleanDishes({commit}) {
      commit('SET_BLOCKS', null);
      commit('SET_PRODUCTS', null);
    }
  }
};
