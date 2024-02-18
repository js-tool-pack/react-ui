import type { Context } from './config-provider.types';
import { createContext } from 'react';

export const ConfigContext = createContext<Context>({
  locale: {},
});
