import Vue from 'vue';
import router from '../src/router';
import store from '../src/store';
import App from '../src/App.vue';

import '../src/plugin/element';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

window.onbeforeunload = () => {
  localStorage.setItem('store', JSON.stringify(store.state))
}
