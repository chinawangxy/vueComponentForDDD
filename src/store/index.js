import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabIndex: 0
  },
  mutations: {
    changeTabIndex(state, index) {
      state.tabIndex = index;
    }
  },
  actions: {},
  modules: {}
});
