const detail = {
  namespaced: true,
  state: {
    menu: [],
    rst: {},
    comments: {},
    status: 404,
    shoppingCart: [],
    busineName: '',
  },
  mutations: {
    initMenu(state, data) {
      state.menu = data;
    },
    initRst(state, data) {
      state.rst = data;
      state.busineName = data.name;
    },
    initComments(state, data) {
      state.comments = data;
    },
    changeStatus(state, status) {
      state.status = status;
    },
    pushShoppingCart(state, data) {
      state.shoppingCart.push(data);
    },
    deleteShoppingCart(state, index) {
      state.shoppingCart.splice(index, 1);
    },
    clearShoppingCart(state) {
      state.shoppingCart = [];
    },
  },
  actions: {
    initMenu({ commit }, payload) {
      commit('initMenu', payload);
    },
    initRst({ commit }, payload) {
      commit('initRst', payload);
    },
    initComments({ commit }, payload) {
      commit('initComments', payload);
    },
    changeStatus({ commit }, payload) {
      commit('changeStatus', payload);
    },
  },
};

export default detail;
