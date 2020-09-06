import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

const BACK_LINK = document.getElementById('AppLecturerEntityEditor').getAttribute('back-link');
const UGC_ID = document.getElementById('AppLecturerEntityEditor').getAttribute('ugc-id');
const API_LINK = document.getElementById('AppLecturerEntityEditor').getAttribute('api-link');

store.dispatch('setUGCId', UGC_ID);
store.dispatch('setApiLink', API_LINK);
store.dispatch('setBackLink', BACK_LINK);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#AppLecturerEntityEditor');
