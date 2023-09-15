import type { PropsBase, Size } from '@pkg/shared';
import React from 'react';

type BTN = React.ButtonHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps
  extends PropsBase<HTMLButtonElement>,
    // 因为 button 的 className、onClick、style 比较常用，所以放置在外面
    Pick<BTN, 'className' | 'disabled' | 'onClick' | 'style'> {
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  attrs?: Partial<React.ButtonHTMLAttributes<HTMLButtonElement>>;
  shape?: 'default' | 'circle' | 'round' | 'none';
  plain?: 'dashed' | boolean | 'text';
  icon?: React.ReactElement | boolean;
  htmlType?: BTN['type'];
  rightIcon?: boolean;
  loading?: boolean;
  size?: Size;
}
export interface ButtonGroupProps extends PropsBase<HTMLElement> {
  size?: ButtonProps['size'];
}
