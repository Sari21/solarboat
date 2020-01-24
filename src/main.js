import Vue from "vue";
import App from "./App.vue";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import router from "C:/Users/Sári/Documents/SCHDesign/solarboat/sb/src/components/router";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
