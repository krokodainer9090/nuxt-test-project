import { UserCart, UserCurrency, UserState } from '~/store/user/types';

export default {
  getUserCart (state: UserState): UserCart {
    return state.userCart;
  },

  getUserCartSum (state: UserState): number {
    const sum = state.userCart.reduce((accum, currentValue) => {
      accum += currentValue.price * currentValue.currentCount;

      return accum;
    }, 0);

    return Math.round(sum * 100) / 100;
  },

  getUserCurrencyValue (state: UserState): UserCurrency {
    return state.currencyValue;
  }
};
