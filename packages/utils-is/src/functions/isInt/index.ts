export function isInt(v: any) {
  if (typeof v !== 'number') return false;

  const IS_INT = isFinite(v) && Math.floor(v) === v;

  return IS_INT;
}
