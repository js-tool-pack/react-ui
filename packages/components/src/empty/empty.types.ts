import { PropsBase } from '@pkg/shared';
import React from 'react';

export interface EmptyProps extends PropsBase<HTMLDivElement> {
  description?: React.ReactNode;
  icon?: React.ReactNode;
}

export interface EmptyLocale {
  description: React.ReactNode;
}
