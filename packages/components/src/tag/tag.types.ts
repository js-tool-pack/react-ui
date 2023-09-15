import type { PropsBase, Size } from '@pkg/shared';
import type { ButtonProps } from '~/button';
import React from 'react';

export interface TagProps extends PropsBase<HTMLDivElement> {
  type?: 'primary' | 'success' | 'warning' | 'error' | 'info';
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChange?: (checked: boolean) => void;
  closeBtnAttrs?: ButtonProps['attrs'];
  icon?: React.ReactNode;
  closeable?: boolean;
  checkable?: boolean;
  disabled?: boolean;
  bordered?: boolean;
  checked?: boolean;
  round?: boolean;
  size?: Size;
}
