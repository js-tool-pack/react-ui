import React from 'react';
import { PropsBase } from '@pkg/shared';

export interface BaseLayoutsProps
  extends PropsBase,
    Pick<React.HTMLAttributes<HTMLElement>, 'className' | 'style'> {
  tag?: keyof HTMLElementTagNameMap;
}
export interface LayoutProps extends BaseLayoutsProps {
  vertical?: boolean;
}
