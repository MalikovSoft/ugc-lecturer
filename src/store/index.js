import Vue from 'vue';
import Vuex from 'vuex';
import UGCConfig from '@/store/modules/UGCConfig';
import DictInstitutes from '@/store/modules/institutes';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { UGCConfig, DictInstitutes },
});
