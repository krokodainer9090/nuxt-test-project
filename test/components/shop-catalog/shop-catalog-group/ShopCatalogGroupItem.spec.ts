// Components
import ShopCatalogGroupItem from '~/components/shop-catalog/shop-catalog-group/ShopCatalogGroupItem.vue';

// Utilities
import { shallowMount, Wrapper } from '@vue/test-utils';
import { shopCatalogItem } from '~/test/utils/misc/constants';

// Constants
const itemContentClass = '.shop-catalog-group-item__content';

describe('ShopCatalogGroupItem', () => {
  const mountFunction: (options?: Object) => Wrapper<any> = (options = {}) => {
    return shallowMount(ShopCatalogGroupItem, {
      ...options
    });
  };

  it('should render empty item', () => {
    const wrapper = mountFunction();

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render item', async () => {
    const wrapper = mountFunction({
      propsData: {
        item: shopCatalogItem
      }
    });
    const emitObject = wrapper.emitted();

    expect(wrapper.html()).toMatchSnapshot();

    // Test emit on-click-item
    await wrapper.find(itemContentClass).trigger('click');

    expect(emitObject['on-click-item']?.[0]).toEqual([shopCatalogItem]);
  });
});
