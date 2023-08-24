import React from 'react';
import { PropsBase, Size } from '@pkg/shared';

export interface TagProps extends PropsBase<HTMLDivElement> {
  size?: Size;
  icon?: React.ReactNode;
  type?: 'primary' | 'info' | 'success' | 'warning' | 'error';
  round?: boolean;
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  closeable?: boolean;
  bordered?: boolean;
  checked?: boolean;
  checkable?: boolean;
  onChange?: (checked: boolean) => void;
}
