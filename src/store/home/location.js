const locationModule = {
  namespaced: true,
  state: {
    locationList: [],
    status: 404,
  },
  mutations: {
    initLocaionList(state, data) {
      state.locationList = data.locationList;
    },
    changeStatus(state, status) {
      state.status = status;
    },
  },
  actions: {
    initLocaionList({ commit }, data) {
      commit('initLocaionList', data);
    },
    changeStatus({ commit }, status) {
      commit('changeStatus', status);
    },
  },
};

export default locationModule;
