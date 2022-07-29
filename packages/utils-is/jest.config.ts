import { Config } from '@jest/types';

import base from '../../jest.config';

const config: Config.InitialOptions = {
  ...base,
  displayName: 'utils-is',
  testMatch: ['**/__tests__/*.+(ts|js)'],
};

export default config;
