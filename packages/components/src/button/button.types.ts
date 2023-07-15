import React from 'react';
import type { Size } from '@pkg/shared';

type BTN = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type ButtonProps = Omit<BTN, 'type'> & {
  htmlType?: BTN['type'];
  size?: Size;
  type?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
  plain?: boolean | 'dashed' | 'text';
  shape?: 'default' | 'none' | 'circle' | 'round';
  loading?: boolean;
  icon?: React.ReactElement | boolean;
  rightIcon?: boolean;
};
