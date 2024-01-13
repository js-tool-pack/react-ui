import {
  useFollowingState,
  useStateRef,
  getClasses,
  useWatch,
} from '@pkg/shared';
import { getStartOfMonth, getClassNames } from '@tool-pack/basic';
import { CalendarHeader } from '~/calendar/components/Header';
import type { CalendarProps } from './calendar.types';
import { CalendarTable } from '~/calendar/components';
import type { RequiredPart } from '@tool-pack/types';
import React from 'react';

const cls = getClasses('calendar', ['date-cell'], ['prev-month', 'next-month']);
const defaultProps = {
  today: new Date(),
  header: true,
  firstDay: 0,
} satisfies Partial<CalendarProps>;

export const Calendar: React.FC<CalendarProps> = React.forwardRef<
  HTMLDivElement,
  CalendarProps
>((props, ref) => {
  const {
    month: outerMonth,
    attrs = {},
    firstDay,
    onChange,
    dateCell,
    header,
    today,
    value,
  } = props as RequiredPart<CalendarProps, keyof typeof defaultProps>;

  const [valueRef, setValueRef] = useStateRef(value);
  const [month, setMonth] = useFollowingState(
    outerMonth,
    (v) => v || getStartOfMonth(value || today || new Date()),
  );
  useWatch(
    valueRef.current,
    (v) => v && !outerMonth && setMonth(getStartOfMonth(v)),
  );

  return (
    <div
      {...attrs}
      className={getClassNames(cls.root, attrs.className)}
      ref={ref}
    >
      {header && (
        <CalendarHeader
          onMonthChange={setMonth}
          onChange={setValue}
          today={today}
          value={month}
        />
      )}
      <CalendarTable
        value={valueRef.current}
        firstDay={firstDay}
        setValue={setValue}
        dateCell={dateCell}
        month={month}
        today={today}
      />
    </div>
  );
  function setValue(value: Date): void {
    setValueRef(value);
    onChange?.(value);
  }
});

Calendar.defaultProps = defaultProps;
Calendar.displayName = 'Calendar';
