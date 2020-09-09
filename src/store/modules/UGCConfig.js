export default {
  state: {
    ugcId: '',
    apiLink: '',
    backLink: '',
    session: null,
    content: null,
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
    session: (state) => {
      return state.session;
    },
    content: (state) => {
      return state.content;
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
    updateSession(state, value) {
      state.session = value;
    },
    updateContent(state, value) {
      state.content = value;
    },
    destroySession(state) {
      state.session.destroy();
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
    async setSession({ commit }, value) {
      commit('updateSession', value);
    },
    async setContent({ commit }, value) {
      commit('updateContent', value);
    },
    async destroySession({ commit }) {
      commit('destroySession');
    },
  },
};
