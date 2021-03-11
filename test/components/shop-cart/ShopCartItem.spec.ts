// Components
import ShopCartItem from '~/components/shop-cart/ShopCartItem.vue';

// Utilities
import { shallowMount, Wrapper } from '@vue/test-utils';
import { shopCatalogItem } from '~/test/utils/misc/constants';

// Constants
const CLASS_NAME = '.shop-cart-item';

const classes = {
  input: `${CLASS_NAME}__input`,
  deleteBtn: `${CLASS_NAME}__delete-btn`
};

describe('ShopCartItem', () => {
  const mountFunction: (options?: Object) => Wrapper<any> = (options = {}) => {
    return shallowMount(ShopCartItem, {
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
        cartItem: shopCatalogItem
      }
    });
    const emitObject = wrapper.emitted();

    expect(wrapper.html()).toMatchSnapshot();

    // Check increase count of item
    await wrapper.setData({
      currentItemCount: shopCatalogItem.count
    });

    expect(emitObject['increase-count']?.[0]).toEqual([{
      id: shopCatalogItem.id,
      count: shopCatalogItem.count
    }]);

    // Check delete item emit
    await wrapper.find(classes.deleteBtn).trigger('click');

    expect(emitObject['delete-item']?.[0]).toEqual([shopCatalogItem.id]);
  });

  it('should handler error currentCount', async () => {
    const wrapper = mountFunction({
      propsData: {
        cartItem: shopCatalogItem
      }
    });
    const emitObject = wrapper.emitted();

    // Check error increase count of item
    await wrapper.setData({
      currentItemCount: shopCatalogItem.count + 1
    });

    // // No emit if error
    expect(emitObject['increase-count']?.[0]).toBeUndefined();

    expect(wrapper.html()).toMatchSnapshot();
  });
});
