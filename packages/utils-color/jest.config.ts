import { Config } from '@jest/types';

import base from '../../jest.config';

const config: Config.InitialOptions = {
  ...base,
  displayName: 'utils-color',
  testMatch: ['**/__tests__/*.+(ts|js)'],
};

export default config;
