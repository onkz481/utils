import { isInt } from '../';

describe('isInt', () => {
  it.concurrent.each([[0], [23], [-23]])(
    'Returns true if the specified value is "%v".',
    (v) => {
      expect(isInt(v)).toBe(true);
    }
  );

  it.concurrent.each([['23'], [23.5], ['23.5'], [null], [undefined]])(
    'Returns false if the specified value is not empty.',
    (v) => {
      expect(isInt(v)).toBe(false);
    }
  );
});
