import React from 'react';
import type { PropsBase } from '@pkg/shared';

export interface SpaceProps extends PropsBase {
  className?: string;
  style?: React.CSSProperties;
  gap?: number | string;
  vertical?: boolean;
  tag?: keyof HTMLElementTagNameMap;
  separator?: React.ReactNode;
  inline?: boolean;
  fill?: boolean;
  fillRatio?: number;
}
