import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index.js'
Vue.config.productionTip = false

import { NavBar, Image, Field, CellGroup, Button, Divider, Checkbox, CheckboxGroup,Dialog,Toast,Icon    } from 'vant';
Vue
  .use(NavBar)
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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
