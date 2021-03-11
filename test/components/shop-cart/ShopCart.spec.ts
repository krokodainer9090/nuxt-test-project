// Components
import ShopCart from '~/components/shop-cart/ShopCart.vue';
import ShopCartItem from '~/components/shop-cart/ShopCartItem.vue';

// Utilities
import { shallowMount, Wrapper, createLocalVue } from '@vue/test-utils';
import { shopCatalogItem } from '~/test/utils/misc/constants';

// Store
import { userStore } from '~/test/store/user/user-store';

const localVue = createLocalVue();
const store = userStore(localVue);

// Constants
const newCountItem = 10;

describe('ShopCart', () => {
  const mountFunction: (options?: Object) => Wrapper<any> = (options = {}) => {
    return shallowMount(ShopCart, {
      ...options,
      localVue,
      store
    });
  };

  it('should render empty cart', () => {
    const wrapper = mountFunction();

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render cart with item', async () => {
    await store.dispatch('user/addItemToCart', shopCatalogItem);

    const wrapper = mountFunction();
    const itemComponent = wrapper.findComponent(ShopCartItem);

    expect(wrapper.html()).toMatchSnapshot();

    // Increase count of item
    itemComponent.vm.$emit('increase-count', {
      id: shopCatalogItem.id,
      count: newCountItem
    });
    shopCatalogItem.currentCount = newCountItem;

    expect(wrapper.vm.cartItems).toEqual([shopCatalogItem]);

    // Delete item from cart
    itemComponent.vm.$emit('delete-item', shopCatalogItem.id);

    expect(wrapper.vm.cartItems).toEqual([]);
  });
});
