import React from 'react';
import type { Size } from '@pkg/shared';

type BTN = React.ButtonHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps extends Omit<BTN, 'type'> {
  htmlType?: BTN['type'];
  size?: Size;
  type?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
  plain?: boolean | 'dashed' | 'text';
  shape?: 'default' | 'none' | 'circle' | 'round';
}
