import { parseFormattedDate, formatDate } from '@tool-pack/basic';
import { DatePanelProps, DatePanel } from './Date.panel';
import type { RequiredPart } from '@tool-pack/types';
import React, { useMemo, useRef } from 'react';
import { getClasses } from '@pkg/shared';
import { TimePicker } from '../picker';
import { Input } from '~/input';

type Props = DatePanelProps;

const cls = getClasses(
  'date-picker-date-time-panel',
  ['inputs', 'month', 'calendar'],
  [],
);
const defaultProps = {} satisfies Partial<Props>;

export const DateTimePanel: React.FC<Props> = (props) => {
  const { onChange, month, value, ...rest } = props as RequiredPart<
    Props,
    keyof typeof defaultProps
  >;

  const inputFormular = 'yyyy-MM-dd';
  const panelRef = useRef<HTMLDivElement>(null);
  const inputValue = useMemo(
    () => (value ? formatDate(value, inputFormular) : ''),
    [value],
  );

  return (
    <div className={cls.root} ref={panelRef}>
      <div className={cls.__.inputs}>
        <Input
          onChange={onDateInputChange}
          placeholder="选择日期"
          value={inputValue}
          size="small"
        />
        <TimePicker panelRef={panelRef} onChange={onChange} value={value} />
      </div>
      <DatePanel {...rest} onChange={onChange} month={month} value={value} />
    </div>
  );

  function onDateInputChange(v: string): void {
    if (v.length !== inputFormular.length) return;
    const date = parseFormattedDate(v, inputFormular);

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
};
