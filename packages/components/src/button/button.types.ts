import React from 'react';

export interface ButtonProps {
  disabled?: boolean;
  children?: React.ReactNode;
  size?: 'large' | 'medium' | 'small';
  type?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
  plain?: boolean | 'dashed' | 'text';
  shape?: 'default' | 'circle' | 'round';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
