import RPC from "../rpc";

export default {
  namespaced: true,

  state: () => ({
    company: null,
    location: null,
    categories: null,
    blocks: null,

    isLoading: true
  }),

  getters: {},

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

    SET_LOADING(state, status) {
      state.isLoading = status;
    }
  },

  actions: {
    async getIndexData({commit}) {
      const responseMessage = await RPC.getIndexData('c4ca4238a0b923820dcc509a6f75849b');

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
    }
  }
};
