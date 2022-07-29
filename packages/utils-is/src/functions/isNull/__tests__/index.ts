import { isNull } from '../';

describe('isNull', () => {
  it.concurrent.each([[undefined], [null]])(
    'Returns true if the specified value is "%v".',
    (v) => {
      expect(isNull(v)).toBe(true);
    }
  );
});
