import Vue from 'vue';
// bootstrap
import 'bootstrap'; // Import js file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import css file
// jquery
import jquery from 'jquery';
// AXIOS
import axios from 'axios';
import VueAxios from 'vue-axios';
// loading
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

// 元件，全域註冊
Vue.component('Loading', Loading);

// 註冊全域變數：window 加上 $ 這個變數，並指向 jquery 套件
// 全域註冊完 仍需在 區域元件上補上 /* global $ */
window.$ = jquery;

// 套件加入到 Vue 的藍圖（原型）內
Vue.use(VueAxios, axios);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
