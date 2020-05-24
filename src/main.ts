import Vue from "vue";
import router from "./routing/router";
import "@/extensions";
import "@/global.scss";
import "@fortawesome/fontawesome-pro/css/all.min.css";
import App from "./App.vue";
import { i18n } from "./lang/languageManagement";
import { vuetify } from "@/vuetify";

Vue.config.productionTip = false;
Vue.config.devtools = true;

const VueExtended = Vue.extend({ i18n });
const Application = new VueExtended({
  vuetify,
  router,
  render: h => h(App),
}).$mount("#app");

export default Application;
