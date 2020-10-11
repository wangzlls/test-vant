import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import {Button, Cell, CellGroup, Icon, Image, Lazyload, Col, Row, Popup, Toast} from "vant";

Vue.use(Button)
Vue.use(Cell)
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Image);
Vue.use(Lazyload);
Vue.use(Col);
Vue.use(Row);
Vue.use(Popup);
Vue.use(Toast);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
