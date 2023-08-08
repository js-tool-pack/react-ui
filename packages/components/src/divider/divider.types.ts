import { CSSProperties } from 'react';
import { PropsBase } from '@pkg/shared';

export interface DividerProps extends PropsBase {
  lineStyle?: CSSProperties['borderStyle'];
  lineColor?: CSSProperties['borderColor'];
  lineWidth?: CSSProperties['borderWidth'];
  placement?: 'left' | 'center' | 'right';
  vertical?: boolean;
  tag?: keyof HTMLElementTagNameMap;
}
