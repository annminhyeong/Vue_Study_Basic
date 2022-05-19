<template>
  <Modal :원룸들 = "원룸들" :누른거 = "누른거" :모달창열렸니="모달창열렸니" />
  <div v-if="1 == 2">
    <p>안녕하세요</p>
  </div>
  <div v-else-if="1 == 3">
    <p>안녕히가세요</p>
  </div>
  <div v-else>
    <p>내일봬요</p>
  </div>
  <div class="menu">
    <a v-for="data in 메뉴들" :key="data">{{data}}</a>
  </div>
  <Discount/>
  <div v-for="(data, i) in 원룸들" :key="data">
    <img :src="data.image">
    <h4 @click="모달창열렸니 = ture; 누른거 = i">{{data.title}}</h4>
    <p>{{data.price}}</p>
  </div>  
</template>

<script>
import Discount from './Discount.vue';
import Modal from './Modal.vue';
import data from './oneroom.js';


export default {
  name: 'App',
  data(){
    return{
      누른거 : 0,
      원룸들 : data,
      모달창열렸니 : false,
      신고수 : [0, 0, 0],
      메뉴들 : ['Home', 'Shop', 'About'],
    }
  },
  methods:{
    increase(){
      this.신고수++;
    }
  },
  components: {
    Discount : Discount,
    Modal : Modal,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.menu{
  background-color: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
  text-decoration: none;
}

.discount{
  background-color: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

img{
  width: 30%;
  margin-top: 40px;
}

.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
