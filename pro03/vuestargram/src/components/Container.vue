<template>
  <div v-if="step == 0">
    <Post :게시물="data" v-for="data in 게시물들" :key="data" />
  </div>

  <div v-if="step == 1">
    <!-- 필터선택페이지 -->
    <div
      class="upload-image"
      :style="`background-image:url(${imgUpload})`"
    ></div>
    <div class="filters">
      <div class="filter-1"></div>
      <div class="filter-1"></div>
      <div class="filter-1"></div>
      <div class="filter-1"></div>
      <div class="filter-1"></div>
    </div>
  </div>

  <div v-if="step == 2">
    <!-- 글작성페이지 -->
    <div
      class="upload-image"
      :style="`background-image:url(${imgUpload})`"
    ></div>
    <div class="write">
      <textarea @input="$emit('imgUrl', $event.target.value)" class="write-box">
write!</textarea
      >
    </div>
  </div>
</template>

<script>
import Post from './Post.vue';
export default {
  name: 'Container',
  props: {
    게시물들: Array,
    step: Number,
    imgUpload: String,
  },
  components: {
    Post: Post,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
