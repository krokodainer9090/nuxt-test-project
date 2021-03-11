// Json Data
import data from '../../static/data/data.json';
import names from '../../static/data/names.json';

// Types
import {
  ShopCatalogParams,
  ShopCatalogState,
  ShopCatalog,
  ShopCatalogGroup,
  ShopCatalogItem, ShopCatalogClient
} from '~/store/shop-catalog/types';

// Utilities
import { getRandomNumberBetween } from '~/assets/ts/helpers';

// Vuex
import { ActionTree, ActionContext } from 'vuex';

const actions: ActionTree<ShopCatalogState, any> = {
  async getShopCatalog ({ commit, rootGetters }: ActionContext<ShopCatalogState, any>,
    { goodsValue, namesValue }: ShopCatalogParams = { goodsValue: null, namesValue: null }) {
    const catalogData: ShopCatalog = {};
    const dataGoods = goodsValue ?? data.Value.Goods;
    const dataNames = namesValue ?? names;
    const currencyValue = rootGetters['user/getUserCurrencyValue'];

    for (const good of dataGoods) {
      const currentGroup = dataNames[good.G];
      const currentGood = currentGroup.B[good.T];

      const normalizedGroup : ShopCatalogGroup = {
        id: good.G,
        items: [],
        ...currentGroup
      };

      const normalizedGood : ShopCatalogItem = {
        id: good.T,
        price: Math.round(good.C * currencyValue * 100) / 100,
        count: good.P,
        ...currentGood
      };

      const savedGroup = catalogData[normalizedGroup.id];

      if ( !savedGroup ) {
        normalizedGroup.items.push(normalizedGood);

        catalogData[normalizedGroup.id] = normalizedGroup;
      } else {
        savedGroup.items.push(normalizedGood);
      }
    }

    const sortCatalogData = Object.keys(catalogData).reduce((accum: Object[], currentValue) => {
      accum.push(catalogData[currentValue]);

      return accum;
    }, []);

    commit('SET_SHOP_CATALOG', sortCatalogData);

    return sortCatalogData;
  },

  fetchCatalogWithCurrency ({ commit, dispatch }: ActionContext<ShopCatalogState, any>) {
    const goodsData = require('../../static/data/data.json');
    const catalogParams = {
      goodsValue: goodsData.Value.Goods,
      namesValue: require('../../static/data/names.json')
    };
    const newCurrencyValue = getRandomNumberBetween(20, 81);

    commit('user/SET_CURRENCY_VALUE', newCurrencyValue, { root: true });

    return dispatch('getShopCatalog', catalogParams).then((response: ShopCatalogClient) => {
      return dispatch('user/updateCartPrices', response, { root: true });
    });
  }
};

export default actions;
