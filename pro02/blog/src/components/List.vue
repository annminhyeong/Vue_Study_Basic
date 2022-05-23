<template>
  <div v-for="(data, i) in 블로그글" :key="data">
    <h5 @click="$router.push(`/detail/${i}`)">{{ data.title }}</h5>
    <p>{{ data.date }}</p>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    블로그글: Array,
  },
};
</script>

<style></style>
