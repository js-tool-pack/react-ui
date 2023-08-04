import React from 'react';
import { Size } from '@pkg/shared';

export type OptionProps = React.HTMLAttributes<HTMLElement> & {
  tag?: keyof HTMLElementTagNameMap;
  size?: Size;
  disabled?: boolean;
  expandable?: boolean;
  readonly?: boolean;
  icon?: React.ReactNode;
};
