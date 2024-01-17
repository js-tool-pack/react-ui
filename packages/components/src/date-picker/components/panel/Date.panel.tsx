import type {
  InnerCommonProps,
  DatePickerProps,
} from '../../date-picker.types';
import { DatePickerSelect } from '../dp.Select';
import { YearMonthPicker } from '../picker';
import { dateAdd } from '@tool-pack/basic';
import { getClasses } from '@pkg/shared';
import { Calendar } from '~/calendar';
import React, { useRef } from 'react';

export interface DatePanelProps
  extends Pick<DatePickerProps, 'dateDisabled' | 'dateCell' | 'format'>,
    InnerCommonProps {
  onMonthChange: (month: Date) => void;
  placement: 'right' | 'left' | null;
  values: [start?: Date, end?: Date];
  range: boolean;
  month: Date;
}

const cls = getClasses(
  'date-picker-date-panel',
  ['inputs', 'month', 'calendar'],
  [],
);

export const DatePanel: React.FC<DatePanelProps> = (props) => {
  const {
    onMonthChange,
    dateDisabled,
    placement,
    onChange,
    dateCell,
    month,
    value,
  } = props;

  const panelRef = useRef<HTMLDivElement>(null);

  return (
    <div className={cls.root} ref={panelRef}>
      <div className={cls.__.month}>
        <DatePickerSelect
          showRightBtn={!placement || placement !== 'left'}
          showLeftBtn={!placement || placement !== 'right'}
          onChange={_onChange}
          value={value}
        >
          <YearMonthPicker
            onChange={onYearMonthPickerChange}
            panelRef={panelRef}
            value={month}
          />
        </DatePickerSelect>
      </div>
      <div className={cls.__.calendar}>
        <Calendar
          onChange={onCalendarChange}
          dateDisabled={dateDisabled}
          dateCell={dateCell}
          key="Calendar"
          header={false}
          month={month}
          value={value}
        />
      </div>
    </div>
  );

  function onCalendarChange(date: Date): void {
    const arr = value
      ? [
          value.getHours(),
          value.getMinutes(),
          value.getSeconds(),
          value.getMilliseconds(),
        ]
      : [];

    const newDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      ...arr,
    );
    onChange(newDate);
  }
  function onYearMonthPickerChange([year, month]: [
    year: number,
    month: number,
  ]): void {
    const arr = value
      ? [
          value.getDate(),
          value.getHours(),
          value.getMinutes(),
          value.getSeconds(),
          value.getMilliseconds(),
        ]
      : [];

    const newDate = new Date(year, month - 1, ...arr);
    onMonthChange(newDate);
  }
  function _onChange(addValue: -1 | 1, type: 1 | 2): void {
    const date = dateAdd(month, addValue, type === 2 ? 'year' : 'month');
    onMonthChange(date);
  }
};
