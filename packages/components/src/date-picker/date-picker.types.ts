import { CalendarProps } from '~/calendar';
import { PopoverProps } from '~/popover';
import { PropsBase } from '@pkg/shared';
import React from 'react';

export type RangeValueType = [start: Date, end: Date];

export interface InnerCommonProps {
  onChange: (value: Date) => void;
  value?: Date;
}

export interface DatePickerShortcut {
  value: RangeValueType | Date;
  label: React.ReactNode;
}

export interface DatePickerProps
  extends Omit<PropsBase<HTMLLabelElement>, 'children'>,
    Pick<PopoverProps, 'visible'>,
    Pick<CalendarProps, 'dateDisabled' | 'dateCell'> {
  type?: 'datetime' | 'month' | 'year' | 'date' | 'time';
  onChange?: (value: RangeValueType | Date) => void;
  shortcuts?: DatePickerShortcut[];
  value?: RangeValueType | Date;
  icon?: React.ReactNode;
  disabled?: boolean;
  range?: boolean;
  format?: string;
}

export interface DatePickerTypeProps<Range extends boolean = false>
  extends Omit<DatePickerProps, 'onChange' | 'value'> {
  onChange?: (value: Range extends true ? RangeValueType : Date) => void;
  value?: Range extends true ? RangeValueType : Date;
  range?: Range;
}

export type DatePickerFC = <Range extends boolean = false>(
  props: DatePickerTypeProps<Range>,
) => React.ReactElement;

export interface DatePickerLocale {
  rangePlaceholder: [startTime: string, endTime: string];
  confirmText: string;
  placeholder: string;
}
