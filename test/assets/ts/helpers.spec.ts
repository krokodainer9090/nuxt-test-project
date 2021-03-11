import { getRandomNumberBetween } from '~/assets/ts/helpers';

describe('getRandomNumberBetween', () => {
  describe('positive', () => {
    it('should return random value', () => {
      const canBeArr = [...Array(6).keys()];

      expect(canBeArr.includes(getRandomNumberBetween(0, 6))).toBe(true);
    });
  });

  describe('negative', () => {
    it('should throw arguments error', () => {
      try {
        // @ts-ignore
        getRandomNumberBetween();
      } catch (e) {
        expect(e).toBe('error TS2554: Expected 2 arguments, but got 0.');
      }
    });

    it('should return 0 if min equal or more than max', () => {
      expect(getRandomNumberBetween(2, 1)).toBe(0);
      expect(getRandomNumberBetween(2, 2)).toBe(0);
    });
  });
});
