// Types
import { UserState } from '~/store/user/types';

// Default
import { defaultUserCard, defaultCurrencyValue } from '~/store/user/default';

export default (): UserState => {
  return {
    userCart: defaultUserCard,
    currencyValue: defaultCurrencyValue
  };
};
