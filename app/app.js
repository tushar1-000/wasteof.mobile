import Vue from "nativescript-vue";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
import RipplePlugin from "@nativescript-community/ui-material-ripple/vue";
import User from "./components/User";

Vue.use(RadSideDrawer);
Vue.use(RipplePlugin);
Vue.component("User", User);
Vue.registerElement(
  "PullToRefresh",
  () => require("@Akylas/nativescript-pulltorefresh").PullToRefresh
);
import App from "./components/App";

Vue.config.silent = false;

new Vue({
  render: (h) => h(App),
}).$start();