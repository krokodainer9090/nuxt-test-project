// Components
import TheInput from '~/components/controls/input/TheInput.vue';

// Utilities
import { shallowMount, Wrapper } from '@vue/test-utils';

// Constants
const CLASS_NAME = '.input';
const newValue = '13';

const validationType = {
  name: 'lessOrEqualNumber',
  value: 55
};
const errorText = 'Текст ошибки';

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

  it('should render number input with error block', async () => {
    const wrapper = mountFunction({
      propsData: {
        type: 'number',
        value: '222',
        validationType,
        errorText
      }
    });
    const input = wrapper.find(CLASS_NAME);
    await input.trigger('keypress');

    // Check error render
    await input.trigger('input');
    expect(wrapper.html()).toMatchSnapshot();
  });
});
