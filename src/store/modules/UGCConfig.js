export default {
  state: {
    ugcId: '',
    apiLink: '',
    backLink: '',
  },
  getters: {
    ugcId: (state) => {
      return state.ugcId;
    },
    apiLink: (state) => {
      return state.apiLink;
    },
    backLink: (state) => {
      return state.backLink;
    },
  },
  mutations: {
    updateUGCId(state, value) {
      state.ugcId = value;
    },
    updateApiLink(state, value) {
      state.apiLink = value;
    },
    updateBackLink(state, value) {
      state.backLink = value;
    },
  },
  actions: {
    async setUGCId({ commit }, value) {
      commit('updateUGCId', value);
    },
    async setApiLink({ commit }, value) {
      commit('updateApiLink', value);
    },
    async setBackLink({ commit }, value) {
      commit('updateBackLink', value);
    },
  },
};
