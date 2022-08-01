export function isObject(v: any) {
  return Object.prototype.toString.call(v) === '[object Object]';
}
