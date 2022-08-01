// types
import { all } from 'types';

export function isObject(v: all) {
  return Object.prototype.toString.call(v) === '[object Object]';
}
