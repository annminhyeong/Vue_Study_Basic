<template>
  <div
    @click="fire"
    :class="filter + ' filter-item'"
    :style="`background-image:url(${imgUpload})`"
  >
    <slot name="a"></slot>
    <slot :msg="msg"></slot>
  </div>
</template>

<script>
export default {
  name: 'FilterBox',
  data() {
    return {
      msg: 'hello',
    };
  },
  methods: {
    fire() {
      this.emitter.emit('filter', this.filter);
    },
  },
  props: {
    imgUpload: String,
    filter: String,
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
