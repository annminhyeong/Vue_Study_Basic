import axios from 'axios';
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      name: 'kim',
      age: 20,
      likes: 60,
      likeStatus: false,
      more: {},
    };
  },
  mutations: {
    setMore(state, data) {
      state.more = data;
    },
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
  actions: {
    getData(context) {
      axios
        .get('https://codingapple1.github.io/vue/more0.json')
        .then((result) => {
          context.commit('setMore', result.data);
        });
    },
  },
});

export default store;
