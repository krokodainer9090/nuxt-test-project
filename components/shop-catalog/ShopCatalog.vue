<script>
// Components
import ShopCatalogGroup from './shop-catalog-group/ShopCatalogGroup';

// Vuex
import { createNamespacedHelpers } from 'vuex';

// Store
const shopCatalogStore = createNamespacedHelpers( 'shop-catalog' );

export default {
  name: 'ShopCatalog',

  components: {
    ShopCatalogGroup
  },

  computed: {
    ...shopCatalogStore.mapGetters({
      shopCatalog: 'getShopCatalog'
    })
  },

  methods: {
    getShopCatalogGroupKey (key) {
      return `shop-catalog-section-${key}`;
    },

    onClickItem (item) {
      this.$store.dispatch('user/addItemToCart', item);
    }
  }
};
</script>

<template>
  <section class="shop-catalog w-100">
    <div class="container">
      <h2 class="shop-catalog__title">Каталог магазина</h2>
      <div class="row">
        <ShopCatalogGroup
          v-for="(group, index) in shopCatalog"
          :key="getShopCatalogGroupKey(group.id || index)"
          :group="group"
          class="shop-catalog__group col-12 col-md-6"
          @on-click-item="onClickItem"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @import "../../styles/components/shop-catalog/shop-catalog";
</style>
