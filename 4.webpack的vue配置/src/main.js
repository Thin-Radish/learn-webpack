const {add, mul} = require('./js/mathUtils.js')

console.log(add(20,30));
console.log(mul(20,30));


require('./css/main.css');

import Vue from 'vue'

// export default导出import就不用{}
// js实例写法
// import App from './vue/app'

import App from './vue/App.vue'


new Vue({
  el: '#app',
  template: '<App/>',
  components:{
    App
  }
})