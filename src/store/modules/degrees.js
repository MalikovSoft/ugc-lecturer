export default {
  state: {
    degrees: [],
  },
  getters: {
    degrees: (state) => {
      return state.degrees;
    },
    degreeById: (state) => (id) => {
      return state.degrees.find((degree) => degree.id === id);
    },
  },
  mutations: {
    updateDegrees(state, degrees) {
      state.degrees = degrees;
    },
  },
  actions: {
    async fetchDegreesFromAPI({ commit }, apiLink) {
      const response = await fetch(`${apiLink}?academicDegree=all`);
      const degrees = await response.json();
      commit('updateDegrees', degrees);
    },
  },
};
