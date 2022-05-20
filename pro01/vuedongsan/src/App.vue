<template>
  <transition name="fade">
    <Modal @closeModal="모달창열렸니 = false" :원룸들 = "원룸들" :누른거 = "누른거" :모달창열렸니="모달창열렸니" />
  </transition>
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
  <Discount v-if="showDiscout == true" />

  <button @click="priceSort">가격순정렬</button>
  <button @click="sortBack">되돌리기</button>

  <!--:이름 = "오브젝트.name" :나이 = "오브젝트.age"는 v-bind="오브젝트"와 같음 -->
  <!-- 문자 = "문자열" :숫자 = 1234 :어레이 = "[1,2,3]" :오브젝트 = "{name : 'kim'}"-->
  <!-- @openModal 자식메세지 이름, $event 자식이 보낸 데이터-->
  <Card @openModal="모달창열렸니 = true; 누른거 = $event" :원룸 ="data" v-for="(data) in 원룸들" :key="data" />
</template>

<script>
import Discount from './Discount.vue';
import Modal from './Modal.vue';
import Card from './Card.vue';
import data from './oneroom.js';


export default {
  name: 'App',
  data(){
    return{
      showDiscout : true,
      원룸들오리지널 : [...data],
      원룸들 : data,
      누른거 : 0,
      모달창열렸니 : false,
      신고수 : [0, 0, 0],
      오브젝트 : {name : 'kim', age : 20},
      메뉴들 : ['Home', 'Shop', 'About'],
    }
  },
  methods:{
    increase(){
      this.신고수++;
    },
    priceSort(){
      this.원룸들.sort((a, b)=>{
        return a.price -b.price;
      });
    },
    sortBack(){
      this.원룸들 = [...this.원룸들오리지널];

    }
  },
  components: {
    Discount : Discount,
    Modal : Modal,
    Card : Card
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
.fade-enter-from{
  transform: translateY(-1000px);
  opacity: 0;
}
.fade-enter-active{
  transition: all 1s;
}
.fade-enter-to{
  opacity: 1;
  transform: translateY(0px);
}

.fade-leave-from{
  opacity: 1;
}
.fade-leave-active{
  transition: all 1s;
}
.fade-leave-to{
  opacity: 0;
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
  padding: 30px;
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
