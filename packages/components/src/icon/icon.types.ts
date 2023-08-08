import React from 'react';
import { PropsBase } from '@pkg/shared';

type Attrs = React.HTMLAttributes<HTMLElement>;
export interface IconProps extends PropsBase {
  className?: Attrs['className'];
  size?: number | string;
  color?: React.CSSProperties['color'];
}
