import type { PropsBase, Size } from '@pkg/shared';
import React from 'react';

export interface SwitchProps
  extends Omit<PropsBase<HTMLButtonElement>, 'children'> {
  onChange?: (checked: boolean) => void;
  uncheckedChildren?: React.ReactNode;
  checkedChildren?: React.ReactNode;
  uncheckedIcon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
  disabled?: boolean;
  checked?: boolean;
  loading?: boolean;
  size?: Size;
}
