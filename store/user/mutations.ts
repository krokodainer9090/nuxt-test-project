// Catalog Types
import { ShopCatalogItem } from '~/store/shop-catalog/types';

// User Types
import { UserState, ShopItem, UserCurrency } from '~/store/user/types';

// Vuex
import { MutationTree } from 'vuex';

const mutations: MutationTree<UserState> = {
  ADD_TO_USER_CART (state: UserState, item: ShopItem) {
    const isAlreadyExits = state.userCart.find(cartItem => {
      return cartItem.id === item.id;
    });

    if ( !isAlreadyExits ) {
      item = {
        ...item,
        currentCount: 1
      };

      state.userCart.push(item);
    }
  },

  INCREASE_USER_CART_ITEM (state: UserState, { id, count }: ShopItem) {
    const itemIndex = state.userCart.findIndex(cartItem => {
      return cartItem.id === id;
    });

    if ( itemIndex !== -1 ) {
      state.userCart[itemIndex].currentCount = Number(count);
    }
  },

  REMOVE_FROM_USER_CART (state: UserState, itemId: number) {
    const deleteItemIndex = state.userCart.findIndex(cartItem => {
      return cartItem.id === itemId;
    });

    if ( deleteItemIndex !== -1 ) {
      state.userCart.splice(deleteItemIndex, 1);
    }
  },

  SET_CURRENCY_VALUE (state: UserState, currencyValue: UserCurrency) {
    state.currencyValue = currencyValue;
  },

  UPDATE_CART_PRICES (state: UserState, catalogItems: ShopCatalogItem[]) {
    state.userCart.forEach((item, key) => {
      const itemInCatalog = catalogItems.find((catalogItem: ShopCatalogItem) => catalogItem.id === item.id);

      if ( itemInCatalog ) {
        state.userCart[key].price = itemInCatalog.price;
      }
    });
  }
};

export default mutations;
