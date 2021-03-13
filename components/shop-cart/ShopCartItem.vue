<script>
// Components
import Input from '../controls/input/TheInput';

export default {
  name: 'ShopCartItem',

  components: {
    Input
  },

  props: {
    cartItem: {
      type: Object,
      default: _ => ({})
    }
  },

  data () {
    const { currentCount } = this.cartItem;

    return {
      isError: false,
      currentCount
    };
  },

  computed: {
    currentItemCount: {
      get () {
        return String(this.currentCount);
      },

      set (currentCount) {
        this.currentCount = Number(currentCount);
      }
    },

    itemName () {
      return this.cartItem?.N || '';
    },

    itemPrice () {
      return this.cartItem?.price
        ? `${this.cartItem.price} руб.`
        : '';
    },

    validationType () {
      return {
        name: 'lessOrEqualNumber',
        value: this.cartItem.count
      };
    }
  },

  watch: {
    currentItemCount (currentCount) {
      if ( !this.isError ) {
        this.$emit('increase-count', {
          id: this.cartItem.id,
          count: Number(currentCount)
        });
      }
    }
  },

  methods: {
    deleteItem () {
      this.$emit('delete-item', this.cartItem.id);
    },

    onError (isError) {
      this.isError = isError;
    }
  }
};
</script>

<template>
  <div class="shop-cart-item">
    <div class="row shop-cart-item__content">
      <div class="col-6">
        <span
          v-if="itemName"
          class="shop-cart-item__name"
        >
          {{ itemName }}
        </span>
      </div>
      <div class="col-2">
        <Input
          v-model="currentItemCount"
          type="number"
          :validation-type="validationType"
          class="shop-cart-item__input"
          @on-error="onError"
        />
        <div
          v-if="isError"
          class="shop-cart-item__error"
        >
          <span class="shop-cart-item__error-text">
            Столько товара на складе нет. Осталось товара: {{ cartItem.count }} шт.
          </span>
        </div>
      </div>
      <div class="col-2 col-md-3">
        <span
          v-if="itemPrice"
          class="shop-cart-item__price"
        >
          {{ itemPrice }}
          <span class="shop-cart-item__price-count">/ шт.</span>
        </span>
      </div>
      <div class="col-2 col-md-1">
        <div
          class="shop-cart-item__delete-btn"
          @click="deleteItem"
        >
          <span class="shop-cart-item__delete-btn-text">
            Удалить
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../styles/components/shop-cart/shop-cart-item";
</style>
