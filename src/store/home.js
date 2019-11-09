import RPC from "../rpc";

const defaultCategories = [{name: 'All', id: -1}];

export default {
  namespaced: true,

  state: () => ({
    company: null,
    location: null,
    categories: null,
    blocks: null,
    businesses: null,

    defaultCategories,
    loading: true
  }),

  getters: {
    categories: state => [...state.defaultCategories, ...state.categories]
  },

  mutations: {
    SET_COMPANY(state, company) {
      state.company = company;
    },

    SET_LOCATION(state, location) {
      state.location = location;
    },

    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },

    SET_BLOCKS(state, blocks) {
      state.blocks = blocks;
    },

    SET_BUSINESSES(state, businesses) {
      state.businesses = businesses;
    },

    SET_LOADING(state, status) {
      state.loading = status;
    }
  },

  actions: {
    async getIndexData({commit, rootGetters}) {
      const responseMessage = await RPC.getIndexData(rootGetters.location);

      RPC.preventError(responseMessage, () => {
        const {
          payload: {
            company, location, categories, blocks
          }
        } = responseMessage;

        commit('SET_COMPANY', company);
        commit('SET_LOCATION', location);
        commit('SET_CATEGORIES', categories);
        commit('SET_BLOCKS', blocks);
      });
    },

    cleanRestaurants({commit}) {
      commit('SET_BLOCKS', null);
      commit('SET_BUSINESSES', null);
    },

    async getBlocks({commit, rootGetters}) {
      const responseMessage = await RPC.getIndexData(rootGetters.location);

      RPC.preventError(responseMessage, () => {
        const {payload: {blocks}} = responseMessage;

        commit('SET_BLOCKS', blocks);
      });
    },

    async getBusinessesByCategory({commit, rootGetters}, {categoryId}) {
      const responseMessage = await RPC.getBusinessesByCategory(rootGetters.location, categoryId);

      RPC.preventError(responseMessage, () => {
        const {payload: {items}} = responseMessage;

        commit('SET_BUSINESSES', items);
      });
    }
  }
};
