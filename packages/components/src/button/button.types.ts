import React from 'react';
import type { PropsBase, Size } from '@pkg/shared';

type BTN = React.ButtonHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps
  extends PropsBase<HTMLButtonElement>,
    // 因为 button 的 className、onClick、style 比较常用，所以放置在外面
    Pick<BTN, 'className' | 'onClick' | 'disabled' | 'style'> {
  attrs?: Partial<React.ButtonHTMLAttributes<HTMLButtonElement>>;
  htmlType?: BTN['type'];
  size?: Size;
  type?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
  plain?: boolean | 'dashed' | 'text';
  shape?: 'default' | 'none' | 'circle' | 'round';
  loading?: boolean;
  icon?: React.ReactElement | boolean;
  rightIcon?: boolean;
}
export interface ButtonGroupProps extends PropsBase<HTMLElement> {
  size?: ButtonProps['size'];
}
