import type { SIZES } from './constant';
import React from 'react';

export type Size = (typeof SIZES)[number];
export interface PropsBase<T extends HTMLElement = HTMLElement> {
  attrs?: Partial<React.HTMLAttributes<T>>;
  children?: React.ReactNode;
  ref?: React.ForwardedRef<T>;
}
