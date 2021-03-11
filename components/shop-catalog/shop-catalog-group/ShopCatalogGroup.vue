<script>
// Components
import ShopCatalogGroupItem from './ShopCatalogGroupItem';

export default {
  name: 'ShopCatalogGroup',

  components: {
    ShopCatalogGroupItem
  },

  props: {
    group: {
      type: Object,
      default: _ => ({})
    }
  },

  computed: {
    groupItems () {
      return this.group?.items || [];
    }
  },

  methods: {
    getGroupItemKey (key) {
      return `shop-catalog-group-item-${key}`;
    },

    onClickItem (item) {
      this.$emit('on-click-item', item);
    }
  }
};
</script>

<template>
  <div class="shop-catalog-group">
    <h3 class="shop-catalog-group__title">{{ group.G }}</h3>
    <div class="shop-catalog-group__content container">
      <div class="row">
        <ShopCatalogGroupItem
          v-for="(item, index) in groupItems"
          :key="getGroupItemKey(item.id || index)"
          :item="item"
          class="shop-catalog-group__group-item col-12 col-xl-6"
          @on-click-item="onClickItem"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../../styles/components/shop-catalog/shop-catalog-group/shop-catalog-group.scss";
</style>
