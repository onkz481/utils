// types
import { all } from 'types';

import { isNull } from '../isNull';

export function isNumeric(v: all) {
  if (isNull(v)) return false;

  if (typeof v === 'object') return false;

  if (typeof v === 'string' && v === '') return false;

  return !isNaN(Number(v));
}
