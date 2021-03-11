// Vuex
import Vuex from 'vuex';

// Utilities
import actions from '~/store/shop-catalog/actions';
import mutations from '~/store/shop-catalog/mutations';
import getters from '~/store/shop-catalog/getters';
import state from '~/store/shop-catalog/state';

export const shopCatalogModule = {
  'shop-catalog': {
    namespaced: true,
    state: state(),
    actions,
    mutations,
    getters
  }
};

export function shopCatalogStore (Vue: any) {
  Vue.use(Vuex);

  return new Vuex.Store({
    modules: shopCatalogModule
  });
}
