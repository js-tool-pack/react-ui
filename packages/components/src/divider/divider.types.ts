import { PropsBase } from '@pkg/shared';
import { CSSProperties } from 'react';

export interface DividerProps extends PropsBase {
  lineStyle?: CSSProperties['borderStyle'];
  lineColor?: CSSProperties['borderColor'];
  lineWidth?: CSSProperties['borderWidth'];
  placement?: 'center' | 'right' | 'left';
  tag?: keyof HTMLElementTagNameMap;
  vertical?: boolean;
}
