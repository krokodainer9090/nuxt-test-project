import { lessOrEqualNumber } from '~/assets/ts/validations';

describe('lessOrEqualNumber', () => {
  describe('positive', () => {
    it('should return true', () => {
      expect(lessOrEqualNumber(1, 2)).toBe(true);
      expect(lessOrEqualNumber('1', '1')).toBe(true);
    });
  });

  describe('negative', () => {
    it('should throw arguments error', () => {
      try {
        // @ts-ignore
        lessOrEqualNumber();
      } catch (e) {
        expect(e).toBe('error TS2554: Expected 2 arguments, but got 0.');
      }
    });

    it('should return false', () => {
      expect(lessOrEqualNumber(2, 1)).toBe(false);
      expect(lessOrEqualNumber('2', '1')).toBe(false);
      expect(lessOrEqualNumber('2', 1)).toBe(false);
    });
  });
});
