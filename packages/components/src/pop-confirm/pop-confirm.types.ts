import React from 'react';
import type { PopoverProps } from '~/popover';
import type { ButtonProps } from '~/button';

export interface PopConfirmProps extends Omit<PopoverProps, 'name'> {
  onConfirm?: () => boolean | Promise<void> | void;
  onCancel?: () => boolean | Promise<void> | void;
  icon?: React.ReactNode;
  confirmProps?: ButtonProps | null;
  cancelProps?: ButtonProps | null;
}
