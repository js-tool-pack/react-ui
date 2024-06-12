import type { Context } from './config-provider.types';
import { ConfigContext } from './config.context';
import React from 'react';

export const ConfigProvider: React.FC<
  {
    children: React.ReactNode;
  } & Partial<Context>
> = ({ locale = {}, children }) => {
  return (
    <ConfigContext.Provider value={{ locale }}>
      {children}
    </ConfigContext.Provider>
  );
};
