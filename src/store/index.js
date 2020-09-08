import Vue from 'vue';
import Vuex from 'vuex';
import UGCConfig from '@/store/modules/UGCConfig';
import DictInstitutes from '@/store/modules/institutes';
import DictFaculties from '@/store/modules/faculties';
import DictChairs from '@/store/modules/chairs';
import DictPositions from '@/store/modules/positions';
import DictDegrees from '@/store/modules/degrees';
import DictStatuses from '@/store/modules/statuses';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    UGCConfig,
    DictInstitutes,
    DictFaculties,
    DictChairs,
    DictPositions,
    DictDegrees,
    DictStatuses,
  },
});
