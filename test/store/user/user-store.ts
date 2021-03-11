// Vuex
import Vuex from 'vuex';

// Utilities
import actions from '~/store/user/actions';
import mutations from '~/store/user/mutations';
import getters from '~/store/user/getters';
import state from '~/store/user/state';

export const userModule = {
  'user': {
    namespaced: true,
    state: state(),
    actions,
    mutations,
    getters
  }
};

export function userStore (Vue: any) {
  Vue.use(Vuex);

  return new Vuex.Store({
    modules: userModule
  });
}
