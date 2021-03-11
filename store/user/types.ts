import { ShopCatalogItem } from '~/store/shop-catalog/types';

// Shop
export type ShopItem = ShopCatalogItem;

export type UserCart = ShopItem[];

// Currency
export type UserCurrency = number;

export type UserState = {
  userCart: UserCart,
  currencyValue: UserCurrency
};
