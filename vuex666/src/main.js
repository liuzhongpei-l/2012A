import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vant, { Lazyload } from 'vant';
import 'vant/lib/index.css';

Vue.use(Lazyload);
Vue.use(Vant);
Vue.config.productionTip = false;

console.log(1111);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
