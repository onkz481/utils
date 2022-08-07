import { isCssColor } from '../';

describe('isCssColor', () => {
  it.concurrent.each([
    '#ffffff',
    'rgb(0, 0, 0)',
    'rgba(0, 0, 0, 0.5)',
    'hsl(0, 100%, 50%)',
    'hsla(0, 100%, 50%, 0.5)',
    'var(--color-a)',
  ])('Returns true if the specified value is "%s".', (v) => {
    expect(isCssColor(v)).toBe(true);
  });

  it.concurrent.each(['', 'unknown'])(
    'Returns true if the specified value is "%s".',
    (v) => {
      expect(isCssColor(v)).toBe(false);
    }
  );
});
