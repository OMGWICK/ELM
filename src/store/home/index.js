import recommend from './recommend';
import search from './search';
import home from './home';
import location from './location';

const homeModule = {
  namespaced: true,
  state: {
    currentPosition: 0,
    isShowMask: false,
  },
  mutations: {
    changeCurrentPosition(state, newPosition) {
      state.currentPosition = newPosition;
    },
    changeMaskStatus(state, newStatus) {
      state.isShowMask = newStatus;
    },
  },
  modules: {
    recommend,
    search,
    home,
    location,
  },
};
export default homeModule;
