import { isString } from '../';

describe('isString', () => {
  it.concurrent.each([[''], ['str']])(
    'Returns true if the specified value is "%v".',
    (v) => {
      expect(isString(v)).toBe(true);
    }
  );

  it.concurrent.each([[0]])(
    'Returns true if the specified value is "%v".',
    (v) => {
      expect(isString(v)).toBe(false);
    }
  );
});
