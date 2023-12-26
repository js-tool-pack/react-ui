import type { PropsBase, Size } from '@pkg/shared';
import type { PopoverProps } from '~/popover';
import type { DividerProps } from '~/divider';
import type { OptionProps } from '~/option';
import React from 'react';

export interface SelectOptionProps extends OptionProps {
  selected?: boolean;
  picked?: boolean;
}
export interface SelectDivider extends DividerProps {
  type: 'divider';
  key: React.Key;
}
export interface SelectOption extends Omit<OptionProps, 'children' | 'size'> {
  label:
    | ((selected: boolean, option: SelectOption) => React.ReactNode)
    | React.ReactNode;
  value: React.Key;
  type?: 'option';
  // [key: string]: unknown;
}
export interface SelectOptionGroup
  extends Omit<OptionProps, 'children' | 'disabled' | 'readonly' | 'size'> {
  children?: SelectOptionsItem[];
  label: React.ReactNode;
  key: React.Key;
  type: 'group';
}
export type SelectOptionsItem =
  | SelectOptionGroup
  | SelectDivider
  | SelectOption;

export interface SelectControllerRef {
  focus(): void;
  blur(): void;
}

export interface SelectStaticProps
  extends PropsBase<HTMLLabelElement>,
    Pick<
      PopoverProps,
      | 'onVisibleChange'
      | 'widthByTrigger'
      | 'showArrow'
      | 'placement'
      | 'visible'
      | 'trigger'
      | 'offset'
    > {
  popoverAttrs?: Partial<React.HTMLAttributes<HTMLDivElement>>;
  filter?: (pattern: string, option: SelectOption) => boolean;
  onChange?: (value: any, options: SelectOption[]) => void;
  // 控制器
  controllerRef?: React.Ref<SelectControllerRef>;
  onSelect?: (option: SelectOption) => void;
  onSearch?: (pattern: string) => void;
  // dynamic
  value?: React.Key[] | React.Key;
  options: SelectOptionsItem[];
  status?: 'warning' | 'error';
  ignoreComposition?: boolean;
  // slots
  header?: React.ReactNode;
  footer?: React.ReactNode;
  empty?: React.ReactNode;
  icon?: React.ReactNode;

  placeholder?: string;
  onFocus?: () => void;

  onClear?: () => void;
  maxTagCount?: number;

  // 过滤
  filterable?: boolean;
  clearable?: boolean;
  onBlur?: () => void;
  disabled?: boolean;

  multiple?: boolean;

  loading?: boolean;
  // 远程
  remote?: boolean;
  size?: Size;
}
export interface SelectProps<
  Multiple extends boolean = false,
  ValueType extends React.Key = React.Key,
> extends SelectStaticProps {
  onChange?: (
    value: Multiple extends true ? ValueType[] : ValueType,
    options: SelectOption[],
  ) => void;
  value?: Multiple extends true ? ValueType[] : ValueType;
  multiple?: Multiple;
}

export type SelectFC = <
  Multiple extends boolean = false,
  ValueType extends React.Key = React.Key,
>(
  props: SelectProps<Multiple, ValueType>,
) => React.ReactElement;
