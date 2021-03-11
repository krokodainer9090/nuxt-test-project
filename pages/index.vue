<script>
// Components
import ShopCatalog from '~/components/shop-catalog/ShopCatalog';
import ShopCart from '~/components/shop-cart/ShopCart';

export default {
  components: {
    ShopCatalog,
    ShopCart
  },

  fetch ({ store }) {
    return store.dispatch('shop-catalog/getShopCatalog');
  },

  data: () => ({
    timerClearFunc: null
  }),

  mounted () {
    this.timerClearFunc = this.fetchOnInterval();
  },

  beforeDestroy () {
    this.timerClearFunc();
  },

  methods: {
    fetchOnInterval () {
      const intervalId = setInterval(() => {
        this.$store.dispatch('shop-catalog/fetchCatalogWithCurrency');
      }, 15000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }
};
</script>

<template>
  <div class="index-page">
    <ShopCatalog class="index-page__catalog" />
    <ShopCart class="index-page__cart" />
  </div>
</template>

<style lang="scss">
@import "../styles/pages/index-page";
</style>
