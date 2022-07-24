import { isObject } from '../';

describe('isObject', () => {
  it.concurrent.each([[{}]])(
    'Returns true if the specified value is "%v".',
    (v) => {
      expect(isObject(v)).toBe(true);
    }
  );

  it.concurrent.each([[[]], [null]])(
    'Returns false if the specified value is not empty.',
    (v) => {
      expect(isObject(v)).toBe(false);
    }
  );
});
