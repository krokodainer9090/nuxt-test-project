export type ShopCatalogParams = {
  goodsValue: Object | null,
  namesValue: Object | null
};

export type ShopCatalogItem = {
  N: string,
  T: number,
  id: number | never,
  count: number | never,
  currentCount: number | never,
  price: number | never
};

export type ShopCatalogItemCollection = ShopCatalogItem & {
  items: ShopCatalogItem[] | never
}

export type ShopCatalogGroup = ShopCatalogItemCollection & {
  G: string
};

export type ShopCatalog = {
  [G: string]: ShopCatalogGroup;
};

export type ShopCatalogClient = ShopCatalogGroup[];

export type ShopCatalogState = {
  shopCatalog: ShopCatalogClient
}
