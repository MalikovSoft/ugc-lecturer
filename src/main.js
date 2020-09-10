import Vue from 'vue';
import App from './App.vue';
import store from './store';

import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

import ImgInputer from 'vue-img-inputer';
import 'vue-img-inputer/dist/index.css';

import VueNumericInput from 'vue-numeric-input';
import Vue2Editor from 'vue2-editor';

// Font Awesome init
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus,
  faAt,
  faUser,
  faGraduationCap,
  faChalkboardTeacher,
  faBriefcase,
  faSave,
  faDoorOpen,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(
  faPlus,
  faAt,
  faUser,
  faGraduationCap,
  faChalkboardTeacher,
  faBriefcase,
  faSave,
  faDoorOpen,
);

Vue.config.productionTip = false;
Vue.component('v-select', vSelect);
Vue.component('ImgInputer', ImgInputer);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueNumericInput);
Vue.use(Vue2Editor);

const BACK_LINK = document.getElementById('AppLecturerEntityEditor').getAttribute('back-link');
const UGC_ID = document.getElementById('AppLecturerEntityEditor').getAttribute('ugc-id');
const API_LINK = document.getElementById('AppLecturerEntityEditor').getAttribute('api-link');

function onNewSessionHandler(session) {
  if (session) {
    store.dispatch('setSession', session);
    store.dispatch('setContent', session.getValues());
  }
}

function onErrorHandler(errorType, message, additionalData) {
  console.error(errorType, message, additionalData);
}

function initSession(sessionId) {
  let elem = document.getElementById('AppLecturerEntityEditor');
  OpenCmsUgc.initFormForSession(sessionId, elem, onNewSessionHandler, onErrorHandler);
}

window.initUgc = function() {
  initSession(UGC_ID);
};

window.onunload = function() {
  if (store.getters.session) store.dispatch('destroySession');
};

store.dispatch('setUGCId', UGC_ID);
store.dispatch('setApiLink', API_LINK);
store.dispatch('setBackLink', BACK_LINK);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#AppLecturerEntityEditor');
