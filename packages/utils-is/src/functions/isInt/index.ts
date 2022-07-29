// types
import { all } from '../../types';

export function isInt(v: all) {
  if (typeof v !== 'number') return false;

  const IS_INT = isFinite(v) && Math.floor(v) === v;

  return IS_INT;
}
