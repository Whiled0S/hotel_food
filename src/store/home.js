import RPC from '../rpc';

const defaultCategories = [{ name: 'All', id: -1 }];

export default {
  namespaced: true,

  state: () => ({
    company: null,
    location: null,
    categories: null,
    blocks: null,
    businesses: null,

    defaultCategories,
    loading: true,
    itemsLoading: false
  }),

  getters: {
    categories: state => state.categories ? [...state.defaultCategories, ...state.categories] : []
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
    },

    SET_ITEMS_LOADING(state, status) {
      state.itemsLoading = status;
    }
  },

  actions: {
    async getIndexData({ commit, rootState }) {
      const responseMessage = await RPC.getIndexData(rootState.locationHash);

      const { payload: { company, location, categories, blocks } } = responseMessage;

      commit('SET_COMPANY', company);
      commit('SET_LOCATION', location);
      commit('SET_CATEGORIES', categories);
      commit('SET_BLOCKS', blocks);
    },

    cleanRestaurants({ commit }) {
      commit('SET_BLOCKS', null);
      commit('SET_BUSINESSES', null);
    },

    async getBlocks({ commit, rootState }) {
      commit('SET_ITEMS_LOADING', true);

      const responseMessage = await RPC.getIndexData(rootState.locationHash);

      const { payload: { blocks } } = responseMessage;

      commit('SET_BLOCKS', blocks);
      commit('SET_ITEMS_LOADING', false);
    },

    async getBusinessesByCategory({ commit, rootState }, { categoryId }) {
      commit('SET_ITEMS_LOADING', true);

      const responseMessage = await RPC.getBusinessesByCategory(rootState.locationHash, categoryId);

      const { payload: { items } } = responseMessage;

      commit('SET_BUSINESSES', items);
      commit('SET_ITEMS_LOADING', false);
    }
  }
};
