import React from 'react';
import type { Size } from '@pkg/shared';
import type { OptionProps } from '~/option';
import type { PopoverProps } from '~/popover';
import { DividerProps } from '~/divider';

export type DropdownDivider = DividerProps & {
  type: 'divider';
  key: React.Key;
};

export type DropdownOption = Omit<OptionProps, 'size' | 'children'> & {
  type?: 'group' | 'option';
  key: React.Key;
  label: React.ReactNode;
  children?: DropdownOptionsItem[];
};
export type DropdownOptionsItem = DropdownOption | DropdownDivider;
export type DropdownProps = Omit<
  PopoverProps,
  'content' | 'onChange' | 'name' | 'onSelect'
> & {
  size?: Size;
  onSelect?: (option: DropdownOption, parents: DropdownOption[]) => void;
  options: DropdownOptionsItem[];
  header?: React.ReactNode;
  footer?: React.ReactNode;
  hideOnClick?: boolean;
};
