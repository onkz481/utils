import { isBool } from '../';

describe('isBool', () => {
  it.concurrent.each([[true], [false]])(
    'Returns true if the specified value is "%v".',
    (v) => {
      expect(isBool(v)).toBe(true);
    }
  );

  it.concurrent.each([[''], [null], [undefined]])(
    'Returns false if the specified value is not empty.',
    (v) => {
      expect(isBool(v)).toBe(false);
    }
  );
});
