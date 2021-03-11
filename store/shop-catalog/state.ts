// Default
import { defaultShopCatalog } from '~/store/shop-catalog/defaults';

// Types
import { ShopCatalogState } from '~/store/shop-catalog/types';

export default (): ShopCatalogState => {
  return {
    shopCatalog: defaultShopCatalog
  };
};
