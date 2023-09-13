import { DividerProps } from '~/divider';
import React from 'react';
import { OptionProps } from '~/option';
import { PopoverProps } from '~/popover';
import { Size } from '@pkg/shared';

export interface SelectOptionProps extends OptionProps {
  selected?: boolean;
  picked?: boolean;
}
export interface SelectDivider extends DividerProps {
  type: 'divider';
  key: React.Key;
}
export interface SelectOption extends Omit<OptionProps, 'size' | 'children'> {
  type?: 'option';
  value: React.Key;
  label:
    | React.ReactNode
    | ((selected: boolean, option: SelectOption) => React.ReactNode);
  // [key: string]: unknown;
}
export interface SelectOptionGroup
  extends Omit<OptionProps, 'size' | 'children' | 'disabled' | 'readonly'> {
  type: 'group';
  key: React.Key;
  label: React.ReactNode;
  children?: SelectOptionsItem[];
}
export type SelectOptionsItem =
  | SelectOption
  | SelectOptionGroup
  | SelectDivider;

export interface SelectControllerRef {
  focus(): void;
  blur(): void;
}

export interface SelectStaticProps
  extends Omit<PopoverProps, 'content' | 'name' | 'children'> {
  popoverAttrs?: Partial<React.HTMLAttributes<HTMLDivElement>>;

  size?: Size;
  options: SelectOptionsItem[];
  disabled?: boolean;
  clearable?: boolean;
  loading?: boolean;
  placeholder?: string;
  status?: 'warning' | 'error';
  onFocus?: () => void;
  onBlur?: () => void;
  onClear?: () => void;
  onSelect?: (option: SelectOption) => void;
  maxTagCount?: number;
  ignoreComposition?: boolean;

  // 过滤
  filterable?: boolean;
  filter?: (pattern: string, option: SelectOption) => boolean;

  // 远程
  remote?: boolean;
  onSearch?: (pattern: string) => void;

  // slots
  header?: React.ReactNode;
  footer?: React.ReactNode;
  empty?: React.ReactNode;
  icon?: React.ReactNode;

  // 控制器
  controllerRef?: React.Ref<SelectControllerRef>;

  // dynamic
  value?: React.Key[] | React.Key;
  multiple?: boolean;
  onChange?: (value: any, options: SelectOption[]) => void;
}
export interface SelectProps<
  Multiple extends boolean = false,
  ValueType extends React.Key = React.Key,
> extends SelectStaticProps {
  value?: Multiple extends true ? ValueType[] : ValueType;
  multiple?: Multiple;
  onChange?: (
    value: Multiple extends true ? ValueType[] : ValueType,
    options: SelectOption[],
  ) => void;
}

export type SelectFC = <
  Multiple extends boolean = false,
  ValueType extends React.Key = React.Key,
>(
  props: SelectProps<Multiple, ValueType>,
) => React.ReactElement;
