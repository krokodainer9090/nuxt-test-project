import Vuex from 'vuex';

// Components
import ShopCatalog from '~/components/shop-catalog/ShopCatalog.vue';
import ShopCatalogGroup from '~/components/shop-catalog/shop-catalog-group/ShopCatalogGroup.vue';

// Utilities
import { shallowMount, Wrapper, createLocalVue } from '@vue/test-utils';

// Store
import { shopCatalogModule } from '~/test/store/shop-catalog/shop-catalog-store';
import { userModule } from '~/test/store/user/user-store';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    ...shopCatalogModule,
    ...userModule
  }
});

describe('ShopCatalog', () => {
  const mountFunction: (options?: Object) => Wrapper<any> = (options = {}) => {
    return shallowMount(ShopCatalog, {
      ...options,
      localVue,
      store
    });
  };

  it('should render empty catalog', () => {
    const wrapper = mountFunction();

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render catalog with groups', async () => {
    // Call actions to get shop catalog
    await store.dispatch('shop-catalog/getShopCatalog' );

    // Check snapshot
    const wrapper = mountFunction();
    expect(wrapper.html()).toMatchSnapshot();

    wrapper.findComponent(ShopCatalogGroup).vm.$emit('on-click-item');
  });
});
