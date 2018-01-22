import Vue from 'vue'
import store from '@/store'
import router from '@/router'
import App from "./App"

Vue.config.productionTip = false;

var app = new Vue({
  el: "#app",
  store,
  router,
  template: '<App/>',
  components: { App }
});
