import React from 'react';
import clsx from 'clsx';

import { mdColors } from '@onkz481/utils-color';

import Palette from '../Palette';

export default function MdPalettes(): JSX.Element {
  let colors = {};
  let others = {};

  Object.keys(mdColors).forEach((key) => {
    if (typeof mdColors[key] === 'string') others[key] = mdColors[key];
    else colors[key] = mdColors[key];
  });

  colors = { ...colors, others };

  return (
    <div className="container--fluid">
      <div className="row row--no-gutters" style={{ justifyContent: 'center' }}>
        {Object.keys(colors).map((key) => (
          <div
            key={key}
            className={clsx('col col--6')}
            style={{ padding: '0 4px 8px 4px' }}
          >
            <Palette name={key} color={colors[key]} />
          </div>
        ))}
      </div>
    </div>
  );
}
