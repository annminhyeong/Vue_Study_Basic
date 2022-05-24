<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">글발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container
    :게시물들="게시물들"
    :step="step"
    :imgUpload="imgUpload"
    @write="작성한글 = $event"
  />
  <button @click="more">더보기</button>
  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import postdata from './assets/postdata.js';
import Container from './components/Container.vue';
export default {
  name: 'App',
  data() {
    return {
      게시물들: postdata,
      클릭수: 0,
      step: 0,
      imgUpload: '',
      작성한글: '',
    };
  },
  methods: {
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.클릭수}.json`)
        .then((result) => {
          console.log(result.data);
          this.게시물들.push(result.data);
          this.클릭수++;
        });
    },
    upload(e) {
      let 파일 = e.target.files;
      this.imgUpload = URL.createObjectURL(파일[0]);
      this.step++;
    },
    publish() {
      let 내게시물 = {
        name: 'Kim Hyun',
        userImage: 'https://placeimg.com/100/100/arch',
        postImage: this.imgUpload,
        likes: 36,
        date: 'May 15',
        liked: false,
        content: this.작성한글,
        filter: 'perpetua',
      };
      this.게시물들.unshift(내게시물);
      this.step = 0;
    },
  },
  components: {
    Container: Container,
  },
};
</script>

<style>
@import url('style.css');
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: 'consolas';
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
