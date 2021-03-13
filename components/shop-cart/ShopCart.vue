<script>
// Components
import ShopCartItem from './ShopCartItem';

// Vuex
import { createNamespacedHelpers } from 'vuex';

// Store
const user = createNamespacedHelpers( 'user' );

export default {
  name: 'ShopCart',

  components: {
    ShopCartItem
  },

  computed: {
    ...user.mapGetters({
      userCart: 'getUserCart',
      userCartSum: 'getUserCartSum'
    }),

    cartItems () {
      return this.userCart ?? [];
    }
  },

  methods: {
    getShopCartItemKey (key) {
      return `shop-card-item-${key}`;
    },

    increaseCountItem (item) {
      this.$store.dispatch('user/increaseItemCount', item);
    },

    deleteItem (itemId) {
      this.$store.dispatch('user/removeItemFromCart', itemId);
    }
  }
};
</script>

<template>
  <section class="shop-cart">
    <div class="container">
      <div class="shop-cart__content">
        <h2 class="shop-cart__title">Корзина</h2>
        <div class="shop-cart__header">
          <div class="row">
            <div class="col-6">
              <span class="shop-cart__header-text">
                Наименование товара и описание
              </span>
            </div>
            <div class="col-2">
              <span class="shop-cart__header-text">
                Количество
              </span>
            </div>
            <div class="col-4">
              <span class="shop-cart__header-text">
                Цена
              </span>
            </div>
          </div>
        </div>
        <div class="shop-cart__content">
          <ShopCartItem
            v-for="(item, index) in cartItems"
            :key="getShopCartItemKey(item.id || index)"
            :cart-item="item"
            @increase-count="increaseCountItem"
            @delete-item="deleteItem"
          />
        </div>
        <div class="shop-cart__sum">
          <span class="shop-cart__sum-text">
            Общая стоимость: <span class="shop-cart__sum-text-price">{{ userCartSum }} руб.</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "../../styles/components/shop-cart/shop-cart";
</style>
