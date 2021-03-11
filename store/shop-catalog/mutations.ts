// Types
import { ShopCatalogClient, ShopCatalogState } from '~/store/shop-catalog/types';

// Vuex
import { MutationTree } from 'vuex';

const mutations: MutationTree<ShopCatalogState> = {
  SET_SHOP_CATALOG (state: ShopCatalogState, shopCatalog: ShopCatalogClient) {
    state.shopCatalog = shopCatalog;
  }
};

export default mutations;
