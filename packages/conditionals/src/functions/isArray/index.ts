// types
import { all } from '../../types';

export function isArray(v: all) {
  return Object.prototype.toString.call(v) === '[object Array]';
}
