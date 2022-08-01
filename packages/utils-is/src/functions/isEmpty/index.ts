// types
import { all } from 'types';

import { isNull } from '../isNull';

export function isEmpty(v: all): boolean {
  if (isNull(v)) return true;

  if (Array.isArray(v) && v.length === 0) return true;

  if (typeof v === 'string' && v === '') return true;

  if (typeof v === 'number' && v === 0) return true;

  if (typeof v === 'object' && v !== null && Object.keys(v).length === 0)
    return true;

  return false;
}
