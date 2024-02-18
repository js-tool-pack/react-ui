import type { Context } from './config-provider.types';
import { ConfigContext } from './config.context';
import React from 'react';

export const ConfigProvider: React.FC<
  Partial<Context> & {
    children: React.ReactNode;
  }
> = ({ locale = {}, children }) => {
  return (
    <ConfigContext.Provider value={{ locale }}>
      {children}
    </ConfigContext.Provider>
  );
};
