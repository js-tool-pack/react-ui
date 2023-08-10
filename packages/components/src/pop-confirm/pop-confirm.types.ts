import React from 'react';
import type { PopoverProps } from '~/popover';

export interface PopConfirmProps extends PopoverProps {
  confirmText?: string | null;
  onConfirm?: () => boolean | Promise<void> | void;
  cancelText?: string | null;
  onCancel?: () => boolean | Promise<void> | void;
  icon?: React.ReactNode;
}
