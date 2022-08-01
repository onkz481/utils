// types
import { all } from 'types';

export function isNull(v: all): boolean {
  return v === undefined || v === null;
}
