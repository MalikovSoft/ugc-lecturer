export default {
  state: {
    institutes: [],
  },
  getters: {
    institutes: (state) => {
      return state.institutes;
    },
    instituteById: (state) => (id) => {
      return state.institutes.find((institute) => institute.id === id);
    },
  },
  mutations: {
    updateInstitutes(state, institutes) {
      state.institutes = institutes;
    },
  },
  actions: {
    async fetchInstitutesFromAPI({ commit }, apiLink) {
      const response = await fetch(`${apiLink}?institute=all`);
      const institutes = await response.json();
      commit('updateInstitutes', institutes);
    },
  },
};
