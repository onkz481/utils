import { isNumeric } from '../';

describe('isNumeric', () => {
  it.concurrent.each([[0], ['0'], [1], ['1'], [1.1], [-1], [-1.1]])(
    'Returns true if the specified value is "%v".',
    (v) => {
      expect(isNumeric(v)).toBe(true);
    }
  );

  it.concurrent.each([[undefined], [null], [''], ['str'], [[]], [{}]])(
    'Returns true if the specified value is "%v".',
    (v) => {
      expect(isNumeric(v)).toBe(false);
    }
  );
});
