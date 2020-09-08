export default {
  state: {
    chairs: [],
  },
  getters: {
    chairs: (state) => {
      return state.chairs;
    },
    chairById: (state) => (id) => {
      return state.chairs.find((chair) => chair.id === id);
    },
    chairsByFaculty: (state) => (faculty) => {
      return state.chairs.filter((chair) => chair.facultyID === faculty.id);
    },
  },
  mutations: {
    updateChairs(state, chairs) {
      state.chairs = chairs;
    },
  },
  actions: {
    async fetchChairsFromAPI({ commit }, apiLink) {
      const response = await fetch(`${apiLink}?chair=all`);
      const chairs = await response.json();
      commit('updateChairs', chairs);
    },
  },
};
