<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="?" />
    <div class="post-header" v-for="data in follower" :key="data">
      <div class="profile" :style="`background-image:url(${data.image})`"></div>
      <span class="profile-name">{{ data.name }}</span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, toRefs } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';
export default {
  name: 'MyPage',
  props: {
    one: Number,
  },
  setup(props) {
    let { one } = toRefs(props);
    console.log(one.value);

    let store = useStore();
    console.log(store.state.name);
    let follower = ref([]);
    // let test = reactive({ name: 'kim' });
    onMounted(() => {
      axios.get('/follower.json').then((a) => {
        follower.value = a.data;
      });
    });

    return { follower };
  },
  data() {
    return {};
  },
};
</script>

<style></style>
