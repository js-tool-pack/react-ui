import React from 'react';
import type { PropsBase, Size } from '@pkg/shared';
import type { ButtonProps } from '~/button';

export interface TagProps extends PropsBase<HTMLDivElement> {
  size?: Size;
  icon?: React.ReactNode;
  type?: 'primary' | 'info' | 'success' | 'warning' | 'error';
  round?: boolean;
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  closeable?: boolean;
  closeBtnAttrs?: ButtonProps['attrs'];
  bordered?: boolean;
  checked?: boolean;
  checkable?: boolean;
  onChange?: (checked: boolean) => void;
}
