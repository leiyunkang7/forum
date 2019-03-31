import Vue from "vue";
import "./plugins/axios";
import "./mock";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import "./plugins/element.js";
import "normalize.css";
import "./assets/font/iconfont.css";
import "./assets/styles/main.less";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
