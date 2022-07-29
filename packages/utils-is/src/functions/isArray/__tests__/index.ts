import { isArray } from '../';

describe('isArray', () => {
  it.concurrent.each([[[]], [[1]], [new Array(1)]])(
    'Returns true if the specified value is "%v".',
    (v) => {
      expect(isArray(v)).toBe(true);
    }
  );

  it.concurrent.each([[{}], [null], [undefined]])(
    'Returns false if the specified value is not empty.',
    (v) => {
      expect(isArray(v)).toBe(false);
    }
  );
});
