export default {
  state: {
    statuses: [],
  },
  getters: {
    statuses: (state) => {
      return state.statuses;
    },
    statusById: (state) => (id) => {
      return state.statuses.find((status) => status.id === id);
    },
  },
  mutations: {
    updateStatuses(state, statuses) {
      state.statuses = statuses;
    },
  },
  actions: {
    async fetchStatusesFromAPI({ commit }, apiLink) {
      const response = await fetch(`${apiLink}?academicStatus=all`);
      const statuses = await response.json();
      commit('updateStatuses', statuses);
    },
  },
};
