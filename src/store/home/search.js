const searchModule = {
  namespaced: true,
  state: {
    searchList: [],
    status: 404,
  },
  mutations: {
    pushSearchList(state, data) {
      //向下拖动加载
      state.searchList.push(...data.searchList);
    },
    initSearchList(state, data) {
      //第一次初始化
      state.searchList = data;
    },
    changeStatus(state, status) {
      state.status = status;
    },
    detailList(state, callback) {
      state.searchList = state.searchList.sort(callback);
    },
  },
  actions: {
    pushSearchList({ commit }, data) {
      //向下拖动加载
      commit('pushSearchList', data);
    },
    initSearchList({ commit }, data) {
      //第一次初始化
      commit('initSearchList', data);
    },
    changeStatus({ commit }, status) {
      commit('changeStatus', status);
    },
  },
};

export default searchModule;
