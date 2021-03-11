<script>
export default {
  name: 'ShopCatalogGroupItem',

  props: {
    item: {
      type: Object,
      default: _ => ({})
    }
  },

  data: () => ({
    isPriceIncreased: false,
    isSamePrice: false,
    canSetClasses: false
  }),

  computed: {
    itemPriceClasses () {
      const { isPriceIncreased, isSamePrice, canSetClasses } = this;

      return {
        'shop-catalog-group-item__price-container_increased': canSetClasses && isPriceIncreased && !isSamePrice,
        'shop-catalog-group-item__price-container_decreased': canSetClasses && !isPriceIncreased && !isSamePrice
      };
    },

    itemFullName () {
      const { N, count } = this.item;

      return N && count
        ? `${N}(${count})`
        : '';
    },

    itemPrice () {
      return this.item?.price || '';
    }
  },

  watch: {
    itemPrice (newPrice, oldPrice) {
      this.canSetClasses = true;

      this.isSamePrice = newPrice === oldPrice;
      this.isPriceIncreased = newPrice > oldPrice;
    }
  },

  methods: {
    clickItem () {
      this.$emit('on-click-item', this.item);
    }
  }
};
</script>

<template>
  <div class="shop-catalog-group-item">
    <div
      class="shop-catalog-group-item__content"
      @click="clickItem"
    >
      <span
        v-if="itemFullName"
        class="shop-catalog-group-item__name"
      >
        {{ itemFullName }}
      </span>
      <div
        :class="itemPriceClasses"
        class="shop-catalog-group-item__price-container"
      >
        <span
          v-if="itemPrice"
          class="shop-catalog-group-item__price"
        >
          {{ item.price }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../../styles/components/shop-catalog/shop-catalog-group/shop-catalog-group-item";
</style>
