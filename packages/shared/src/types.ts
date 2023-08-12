import type { SIZES } from './constant';
import React from 'react';
import { PLACEMENTS, PLACEMENTS_12 } from './constant';

export type Size = (typeof SIZES)[number];
export type Placement = (typeof PLACEMENTS)[number];
export type Placement_12 = (typeof PLACEMENTS_12)[number];
export interface PropsBase<T extends HTMLElement = HTMLElement> {
  attrs?: Partial<React.HTMLAttributes<T>>;
  children?: React.ReactNode;
  ref?: React.ForwardedRef<T>;
}
