// Catalog Types
import { ShopCatalogClient, ShopCatalogGroup } from '~/store/shop-catalog/types';

// User Types
import { UserState, ShopItem } from '~/store/user/types';

// Vuex
import { ActionContext, ActionTree } from 'vuex';

const actions: ActionTree<UserState, any> = {
  addItemToCart ({ commit, dispatch }: ActionContext<UserState, any>, item: ShopItem) {
    commit('ADD_TO_USER_CART', item);
  },

  increaseItemCount ({ commit, dispatch }: ActionContext<UserState, any>, item: ShopItem) {
    commit('INCREASE_USER_CART_ITEM', item);
  },

  removeItemFromCart ({ commit, dispatch }: ActionContext<UserState, any>, itemId: number) {
    commit('REMOVE_FROM_USER_CART', itemId);
  },

  updateCartPrices ({ commit }: ActionContext<UserState, any>, catalogData: ShopCatalogClient) {
    const catalogItems = catalogData.reduce((acum: any[], group: ShopCatalogGroup) => {
      if ( group.items ) {
        acum.push(...group.items);
      }

      return acum;
    }, []);

    commit('UPDATE_CART_PRICES', catalogItems);
  }
};

export default actions;
