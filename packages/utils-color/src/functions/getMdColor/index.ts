import { mdColors } from '../../variables';

import type { MdShades } from '../../variables';

export function getMdColor(
  m: keyof typeof mdColors,
  s?: keyof MdShades
): string | undefined {
  const color = mdColors[m];

  if (typeof color === 'string') return color;

  return s ? color[s] : color.base;
}
