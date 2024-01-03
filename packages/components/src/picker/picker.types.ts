import type { OptionValueType, PropsBase } from '@pkg/shared';
import { InputPopoverProps } from '~/input-popover';
import { OptionProps } from '~/option';
import React from 'react';

export interface PickerOption<T extends OptionValueType = OptionValueType>
  extends OptionProps {
  label: React.ReactNode;
  value: T;
}

export interface PickerPanelProps<T extends OptionValueType = OptionValueType>
  extends Omit<PropsBase<HTMLDivElement>, 'children'> {
  options?: Array<PickerOption<T>[]>;
  onChange?: (value: T[]) => void;
  value?: T[];
}

export type PickerPanelFC = <
  ValueType extends OptionValueType = OptionValueType,
>(
  props: PickerPanelProps<ValueType>,
) => React.ReactElement;

export interface PickerProps<T extends OptionValueType = OptionValueType>
  extends PickerPanelProps<T> {
  panelAttrs?: Partial<React.HTMLAttributes<HTMLDivElement>>;
  inputPopoverProps?: Partial<InputPopoverProps>;
  format?: (value: T[]) => React.ReactNode;
}

export type PickerFC = <ValueType extends OptionValueType = OptionValueType>(
  props: PickerProps<ValueType>,
) => React.ReactElement;
