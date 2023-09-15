import type { PropsBase } from '@pkg/shared';
import React from 'react';

export interface SpaceProps extends PropsBase {
  tag?: keyof HTMLElementTagNameMap;
  style?: React.CSSProperties;
  separator?: React.ReactNode;
  gap?: number | string;
  className?: string;
  vertical?: boolean;
  fillRatio?: number;
  inline?: boolean;
  fill?: boolean;
}
