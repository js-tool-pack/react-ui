import type { PopoverProps } from '~/popover';
import type { OptionProps } from '~/option';
import { DividerProps } from '~/divider';
import type { Size } from '@pkg/shared';
import React from 'react';

export interface DropdownOptionProps extends OptionProps {
  expandable?: boolean;
}
export interface DropdownDivider extends DividerProps {
  type: 'divider';
  key: React.Key;
}
export interface DropdownOption
  extends Omit<DropdownOptionProps, 'children' | 'size'> {
  children?: DropdownOptionsItem[];
  type?: 'option' | 'group';
  label: React.ReactNode;
  key: React.Key;
}
export type DropdownOptionsItem = DropdownDivider | DropdownOption;
export interface DropdownProps extends Omit<PopoverProps, 'content' | 'name'> {
  onSelect?: (option: DropdownOption, parents: DropdownOption[]) => void;
  options: DropdownOptionsItem[];
  header?: React.ReactNode;
  footer?: React.ReactNode;
  hideOnClick?: boolean;
  size?: Size;
}
