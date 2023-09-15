import { PropsBase } from '@pkg/shared';
import React from 'react';

type Attrs = React.HTMLAttributes<HTMLElement>;
export interface IconProps extends PropsBase {
  color?: React.CSSProperties['color'];
  className?: Attrs['className'];
  size?: number | string;
}
