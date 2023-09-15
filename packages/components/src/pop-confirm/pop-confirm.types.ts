import type { PopoverProps } from '~/popover';
import type { ButtonProps } from '~/button';
import React from 'react';

export interface PopConfirmProps extends Omit<PopoverProps, 'name'> {
  onConfirm?: () => Promise<void> | boolean | void;
  onCancel?: () => Promise<void> | boolean | void;
  confirmProps?: ButtonProps | null;
  cancelProps?: ButtonProps | null;
  icon?: React.ReactNode;
}
