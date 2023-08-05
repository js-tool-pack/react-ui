import React from 'react';
import { Size } from '@pkg/shared';

export interface OptionProps {
  tag?: keyof HTMLElementTagNameMap;
  size?: Size;
  disabled?: boolean;
  expandable?: boolean;
  readonly?: boolean;
  icon?: React.ReactNode;
  ref?: React.ForwardedRef<HTMLElement>;
  attrs?: Partial<React.HTMLAttributes<HTMLElement>>;
  children: React.ReactNode;
}
