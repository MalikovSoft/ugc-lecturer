export default {
  state: {
    positions: [],
  },
  getters: {
    positions: (state) => {
      return state.positions;
    },
    positionById: (state) => (id) => {
      return state.positions.find((position) => position.id === id);
    },
  },
  mutations: {
    updatePositions(state, positions) {
      state.positions = positions;
    },
  },
  actions: {
    async fetchPositionsFromAPI({ commit }, apiLink) {
      const response = await fetch(`${apiLink}?position=all`);
      const positions = await response.json();
      commit('updatePositions', positions);
    },
  },
};
