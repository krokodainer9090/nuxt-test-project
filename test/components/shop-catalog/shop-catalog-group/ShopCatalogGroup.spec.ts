// Components
import ShopCatalogGroup from '~/components/shop-catalog/shop-catalog-group/ShopCatalogGroup.vue';
import ShopCatalogGroupItem from '~/components/shop-catalog/shop-catalog-group/ShopCatalogGroupItem.vue';

// Utilities
import { shallowMount, Wrapper } from '@vue/test-utils';
import { shopCatalogGroup, shopCatalogItem } from '~/test/utils/misc/constants';

describe('ShopCatalogGroup', () => {
  const mountFunction: (options?: Object) => Wrapper<any> = (options = {}) => {
    return shallowMount(ShopCatalogGroup, {
      ...options
    });
  };

  it('should render empty group', () => {
    const wrapper = mountFunction();

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render group with items', () => {
    const wrapper = mountFunction({
      propsData: {
        group: shopCatalogGroup
      }
    });
    const emitObject = wrapper.emitted();

    expect(wrapper.html()).toMatchSnapshot();

    // Test emit on-click-item
    wrapper.findComponent(ShopCatalogGroupItem).vm.$emit('on-click-item', shopCatalogItem);

    expect(emitObject['on-click-item']?.[0]).toEqual([shopCatalogItem]);
  });
});
