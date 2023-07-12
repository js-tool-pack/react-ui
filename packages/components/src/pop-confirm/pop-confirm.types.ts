import React from 'react';
import type { PopoverProps } from '../popover';

export type PopConfirmProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  'children'
> &
  PopoverProps & {
    confirmText?: string | null;
    onConfirm?: () => boolean | Promise<void> | void;
    cancelText?: string | null;
    onCancel?: () => boolean | Promise<void> | void;
    icon?: React.ReactNode;
  };
