<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{ name }}</h2>
    <br><br>
    <Cpn></Cpn>
  </div>
</template>

<script>
// import Cpn from './Cpn'不能简写

import Cpn from './Cpn.vue'
export default {
  name: "App",
  components:{
    Cpn
  },
  data() {
    return {
      message: "Hello Webpack",
      name: "heapyTom",
    };
  },
  methods: {
    btnClick() {},
  },
};
</script>

<style>
.title {
  color: pink;
}
</style>