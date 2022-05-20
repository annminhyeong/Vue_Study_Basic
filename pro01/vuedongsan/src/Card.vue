<template>
  <div>
    <img :src="원룸.image">
    <!-- 부모한테 메세지 보낼때 $emit('작명','데이터')-->
    <h4 @click="함수">{{원룸.title}}</h4>
    <p>{{원룸.price}}</p>
  </div>  
</template>

<script>
export default {
  name : 'Card',
  props : {
    원룸 : Object
  },
  methods : {
    함수(){
      this.$emit('openModal', this.원룸.id)
    }
  }
}
</script>

<style>

</style>