import React from 'react';
import type { PropsBase, Size } from '@pkg/shared';

export interface OptionProps extends PropsBase {
  tag?: keyof HTMLElementTagNameMap;
  size?: Size;
  disabled?: boolean;
  expandable?: boolean;
  readonly?: boolean;
  icon?: React.ReactNode;
}
