// Components
import TheInput from '~/components/controls/input/TheInput.vue';

// Utilities
import { shallowMount, Wrapper } from '@vue/test-utils';

// Constants
const CLASS_NAME = '.input';
const newValue = '13';
const notNumberValue = 'gregre';

describe('TheInput', () => {
  const mountFunction: (options?: Object) => Wrapper<any> = (options = {}) => {
    return shallowMount(TheInput, {
      ...options
    });
  };

  it('should render input', () => {
    const wrapper = mountFunction();

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render number input with value', async () => {
    const wrapper = mountFunction({
      propsData: {
        type: 'number',
        value: '222'
      }
    });
    const emitObject = wrapper.emitted();

    // Check it's number input
    expect(wrapper.vm.isNumberInput).toBe(true);

    // Test input value emit
    const input = wrapper.find(CLASS_NAME);

    // @ts-ignore
    input.element.value = newValue;
    await input.trigger('input');

    expect(emitObject.input?.[0]).toEqual([newValue]);

    // Snapshot
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render number input and check keypress', async () => {
    const wrapper = mountFunction({
      propsData: {
        type: 'number',
        value: '222'
      }
    });
    const input = wrapper.find(CLASS_NAME);
    await input.trigger('keypress');

    // @ts-ignore
    input.element.value = notNumberValue;
    await input.trigger('keypress');
  });
});
