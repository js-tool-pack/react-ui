import type { OptionValueType, PropsBase } from '@pkg/shared';
import { InputPopoverProps } from '~/input-popover';
import { OptionProps } from '~/option';
import React from 'react';

export interface PickerOption extends OptionProps {
  label: React.ReactNode;
  value: OptionValueType;
}

export interface PickerPanelProps
  extends Omit<PropsBase<HTMLDivElement>, 'children'> {
  onChange?: (value: OptionValueType[]) => void;
  options?: Array<PickerOption[]>;
  value?: OptionValueType[];
}

export interface PickerProps extends PickerPanelProps {
  panelAttrs?: Partial<React.HTMLAttributes<HTMLDivElement>>;
  format?: (value: OptionValueType[]) => React.ReactNode;
  inputPopoverProps?: Partial<InputPopoverProps>;
}
