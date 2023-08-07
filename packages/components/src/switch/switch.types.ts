import React from 'react';
import type { PropsBase, Size } from '@pkg/shared';

export interface SwitchProps
  extends Omit<PropsBase<HTMLButtonElement>, 'children'> {
  checked?: boolean;
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  onChange?: (checked: boolean) => void;
  checkedChildren?: React.ReactNode;
  uncheckedChildren?: React.ReactNode;
  checkedIcon?: React.ReactNode;
  uncheckedIcon?: React.ReactNode;
}
