import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "amfe-flexible/index.js";
Vue.config.productionTip = false;

import {
  NavBar,
  Image,
  Field,
  CellGroup,
  Button,
  Divider,
  Checkbox,
  CheckboxGroup,
  Dialog,
  Toast,
  Icon,
  ActionSheet,
  Popup,
  DatetimePicker,
  RadioGroup,
  Radio,
  Area,
  Tab, 
  Tabs,
  Collapse, 
  CollapseItem 
} from "vant";
Vue.use(NavBar)
  .use(Image)
  .use(Field)
  .use(CellGroup)
  .use(Button)
  .use(Divider)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Dialog)
  .use(Toast)
  .use(Icon)
  .use(ActionSheet)
  .use(Popup)
  .use(DatetimePicker)
  .use(RadioGroup)
  .use(Radio)
  .use(Area)
  .use(Tab)
  .use(Tabs)
  .use(Collapse)
  .use(CollapseItem)
;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
