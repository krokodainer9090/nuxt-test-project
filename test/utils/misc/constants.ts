import { ShopCatalogItem } from '~/store/shop-catalog/types';

export const shopCatalogItem: ShopCatalogItem = {
  id: 8,
  T: 3,
  N: "Суп с пекинской капустой",
  count: 15,
  currentCount: 0,
  price: 42.8
};

export const shopCatalogGroupItems: ShopCatalogItem[] = [
  {
    id: 1,
    T: 2,
    N: 'Товар 1',
    count: 2,
    currentCount: 0,
    price: 22.8
  },
  {
    id: 2,
    T: 5,
    N: 'Товар 2',
    count: 500,
    currentCount: 0,
    price: 55
  },
  {
    id: 3,
    T: 22,
    N: 'Товар 3',
    count: 21,
    currentCount: 0,
    price: 65.5
  }
];

export const shopCatalogGroup: { G: string; items: ShopCatalogItem[] } = {
  G: 'Группа 1',
  items: shopCatalogGroupItems
};
