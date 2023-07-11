import React from 'react';
import { TooltipProps } from '../tooltip';

export type PopConfirmProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  'children'
> &
  TooltipProps & {
    content?: React.ReactNode;
    confirmText?: string | null;
    onConfirm?: () => boolean | Promise<void> | void;
    cancelText?: string | null;
    onCancel?: () => boolean | Promise<void> | void;
    icon?: React.ReactNode;
  };
