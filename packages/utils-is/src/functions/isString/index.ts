// types
import { all } from 'types';

export function isString(v: all) {
  if (typeof v === 'string') return true;

  return false;
}
