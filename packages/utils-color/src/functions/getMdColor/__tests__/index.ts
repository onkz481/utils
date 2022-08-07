import { getMdColor } from '../index';

describe('isCssColor', () => {
  it.concurrent('Make sure the return value is a "red" color code.', () => {
    expect(getMdColor('red')).toBe('#F44336');
  });

  it.concurrent('Make sure the return value is a "black" color code.', () => {
    expect(getMdColor('black')).toBe('#000000');
  });

  it.concurrent(
    'Make sure the return value is a "red darken1" color code.',
    () => {
      expect(getMdColor('red', 'darken1')).toBe('#E53935');
    }
  );

  it.concurrent('Make sure the return value is "undefined".', () => {
    expect(getMdColor('grey', 'accent1')).toBe(undefined);
  });
});
