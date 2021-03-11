import { ShopCatalogState, ShopCatalogClient } from '~/store/shop-catalog/types';

export default {
  getShopCatalog (state: ShopCatalogState): ShopCatalogClient {
    return state.shopCatalog;
  }
};
