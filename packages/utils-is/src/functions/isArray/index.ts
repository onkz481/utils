export function isArray(v: any) {
  return Object.prototype.toString.call(v) === '[object Array]';
}
