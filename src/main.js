// import Vue from "vue";

// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";

import { SvgIcon } from "../form-generator/form-gen-component.umd";

window.Vue.component(SvgIcon.name, SvgIcon);

import App from "./App.vue";
// window.ELEMENT = Element;

// Vue.use(window.Element);
// Vue.config.productionTip = false;

// eslint-disable-next-line no-undef
new window.Vue({
  el: "#app",
  data: function () {
    return { visible: false };
  },
  render: (h) => h(App),
});
