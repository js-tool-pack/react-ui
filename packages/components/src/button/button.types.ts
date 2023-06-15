import React from 'react';

type BTN = React.ButtonHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps extends Omit<BTN, 'type'> {
  htmlType?: BTN['type'];
  size?: 'large' | 'medium' | 'small';
  type?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
  plain?: boolean | 'dashed' | 'text';
  shape?: 'default' | 'none' | 'circle' | 'round';
}
