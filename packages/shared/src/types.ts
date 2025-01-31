import { PLACEMENTS_12, PLACEMENTS } from './constant';
import type { SIZES } from './constant';
import React from 'react';

export type Size = (typeof SIZES)[number];
export type Placement = (typeof PLACEMENTS)[number];
export type Placement_12 = (typeof PLACEMENTS_12)[number];
export interface PropsBase<T extends HTMLElement = HTMLElement> {
  attrs?: Partial<React.HTMLAttributes<T>>;
  children?: React.ReactNode;
  ref?: React.Ref<T>;
}

export type OptionValueType = string | number;

export type VisibleController = { show(): void; hide(): void };

export interface ChildrenProps extends React.HTMLAttributes<HTMLElement> {
  ref: React.RefObject<HTMLElement | null>;
  children?: React.ReactNode;
}
