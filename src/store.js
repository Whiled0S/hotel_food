import Vue from 'vue';
import Vuex from 'vuex';

import modals from './store/modals';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    modals
  }
});
