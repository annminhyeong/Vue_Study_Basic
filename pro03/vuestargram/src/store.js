import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      name: 'kim',
      age: 20,
      likes: 60,
      likeStatus: false,
    };
  },
  mutations: {
    이름변경(state) {
      state.name = 'park';
    },
    나이증가(state, receiveData) {
      state.age += receiveData;
    },

    likePlus(state) {
      if (state.likeStatus === false) {
        state.likes++;
        state.likeStatus = true;
      } else {
        state.likes--;
        state.likeStatus = false;
      }
    },
  },
});

export default store;
