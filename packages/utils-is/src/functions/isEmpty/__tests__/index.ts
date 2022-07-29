import { isEmpty } from '../';

describe('isEmpty', () => {
  it.concurrent.each([[undefined], [null], [''], [0], [[]], [{}]])(
    'Returns true if the specified value is "%v".',
    (v) => {
      expect(isEmpty(v)).toBe(true);
    }
  );

  it.concurrent.each([['value'], [['value']], [{ value: 'value' }]])(
    'Returns false if the specified value is not empty.',
    (v) => {
      expect(isEmpty(v)).toBe(false);
    }
  );
});
