<template>
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <img :src="원룸들[누른거].image">
      <h4>{{원룸들[누른거].title}}</h4>
      <p>{{원룸들[누른거].content}}</p>
      <!-- <input @input="month = $event.target.value"> 아래랑 같은 의미 -->
      <input v-model.number="month">
      <p>{{month}}개월 선택함 : {{month + 원룸들[누른거].price}}원</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name : 'Modal',
  data(){
    return{
      month : 1,
    }
  },
  watch : {
    //data명과 같아야함
    //파라미터1: 변경될 데이터, 파라미터2 : 변경전 데이터
    month(value){
      if(value > 12){
        alert('13이상 입력 X');
      }

      if(isNaN(value)){
        alert('문자입력 금지');
        this.month = 1;
      }
    },
  },
  beforeUpdate(){
    if(this.month == 2){
      alert('2를 기입함');
      this.month = 3;
    }
  },
  props : {
    원룸들 : Array,
    누른거 : Number,
    모달창열렸니 : Boolean
  }
}
</script>

<style>

</style>