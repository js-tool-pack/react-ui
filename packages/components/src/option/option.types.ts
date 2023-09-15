import type { PropsBase, Size } from '@pkg/shared';
import React from 'react';

export interface OptionProps extends PropsBase {
  tag?: keyof HTMLElementTagNameMap;
  extra?: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  readonly?: boolean;
  size?: Size;
}
