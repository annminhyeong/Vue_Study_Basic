<template>
  <div class="discount">
    <h4>지금결제하면 {{changePrice}}% 할인</h4>
  </div>
</template>

<script>
export default {
  name : 'Discount',
  data(){
    return{
      changePrice : 30
    }
  },
  mounted(){
    let stop = setInterval(() => {
      this.changePrice--;
      if(this.changePrice == 0){
        clearInterval(stop);
      }
    }, 1000);
  },
}

</script>

<style>

</style>