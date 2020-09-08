export default {
  state: {
    faculties: [],
  },
  getters: {
    faculties: (state) => {
      return state.faculties;
    },
    facultyById: (state) => (id) => {
      return state.faculties.find((faculty) => faculty.id === id);
    },
    facultiesByInstitute: (state) => (institute) => {
      return state.faculties.filter((faculty) => faculty.instituteID === institute.id);
    },
  },
  mutations: {
    updateFaculties(state, faculties) {
      state.faculties = faculties;
    },
  },
  actions: {
    async fetchIFacultiesFromAPI({ commit }, apiLink) {
      const response = await fetch(`${apiLink}?faculty=all`);
      const faculties = await response.json();
      commit('updateFaculties', faculties);
    },
  },
};
