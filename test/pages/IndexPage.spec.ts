// Components
import IndexPage from '~/pages/index.vue';

// Utilities
import { shallowMount, Wrapper, createLocalVue } from '@vue/test-utils';
import { shopCatalogStore } from '~/test/store/shop-catalog/shop-catalog-store';

// Store
const localVue = createLocalVue();
const store = shopCatalogStore(localVue);

describe('IndexPage', () => {
  const mountFunction: (options?: Object) => Wrapper<any> = (options = {}) => {
    return shallowMount(IndexPage, {
      ...options,
      localVue,
      store
    });
  };

  it('should render IndexPage', () => {
    const wrapper = mountFunction();

    expect(wrapper.html()).toMatchSnapshot();
  });
});
