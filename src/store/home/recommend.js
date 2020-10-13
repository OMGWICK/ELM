const recommendModule = {
  namespaced: true,
  state: {
    recommendList: [],
    status: 404,
  },
  mutations: {
    pushRecommendList(state, data) {
      //向下拖动加载
      state.recommendList.push(...data.recommendList);
    },
    initRecommendList(state, data) {
      //第一次初始化
      state.recommendList = data;
    },
    changeStatus(state, status) {
      state.status = status;
    },
    detailList(state, callback) {
      state.recommendList = state.recommendList.sort(callback);
    },
  },
  actions: {
    pushRecommendList({ commit }, data) {
      //向下拖动加载
      commit('pushRecommendList', data);
    },
    initRecommendList({ commit }, data) {
      //第一次初始化
      commit('initRecommendList', data);
    },
    changeStatus({ commit }, status) {
      commit('changeStatus', status);
    },
  },
};

export default recommendModule;
