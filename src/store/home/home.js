const homeModule = {
  namespaced: true,
  state: {
    foodtrys: [],
    activity: {},
    shopList: [],
    status: 404,
  },
  mutations: {
    changeDataStatus(state, newStatus) {
      state.status = newStatus;
    },
    initFoodtrys(state, initData) {
      state.foodtrys = initData;
    },
    initactivity(state, initData) {
      state.activity = initData;
    },
    pushShopList(state, initData) {
      state.shopList.push(...initData.shopList);
    },
    detailList(state, callback) {
      state.shopList = state.shopList.sort(callback);
    },
  },
  actions: {
    changeDataStatus({ commit }, status) {
      commit('changeDataStatus', status);
    },
    initFoodtrys({ commit }, initData) {
      commit('initFoodtrys', initData);
    },
    initactivity({ commit }, initData) {
      commit('initactivity', initData);
    },
    pushShopList({ commit }, initData) {
      commit('pushShopList', initData);
    },
  },
  modules: {},
};
export default homeModule;
