import {
  mergeReactDefaultProps,
  useFollowingState,
  useStateRef,
  getClasses,
  useWatch,
} from '@pkg/shared';
import { getStartOfMonth, getClassNames } from '@tool-pack/basic';
import { CalendarHeader } from '~/calendar/components/Header';
import { useLocale } from '~/config-provider/useLocale';
import type { CalendarProps } from './calendar.types';
import { CalendarTable } from '~/calendar/components';
import EnUS from './locale/en-US';
import React from 'react';

const cls = getClasses('calendar', ['date-cell'], ['prev-month', 'next-month']);
const defaultProps = {
  today: new Date(),
  header: true,
  firstDay: 0,
} satisfies Partial<CalendarProps>;

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  (props, ref) => {
    const {
      locale: propsLocale,
      month: propsMonth,
      dateDisabled,
      attrs = {},
      firstDay,
      onChange,
      dateCell,
      header,
      today,
      value,
    } = mergeReactDefaultProps(props, defaultProps);

    const locale = Object.assign(useLocale('calendar', EnUS), propsLocale);

    const [valueRef, setValueRef] = useStateRef(value);
    const [month, setMonth] = useFollowingState(
      propsMonth,
      (v) => v || getStartOfMonth(value || today || new Date()),
    );
    useWatch(
      valueRef.current,
      (v) => v && !propsMonth && setMonth(getStartOfMonth(v)),
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
            locale={locale}
            today={today}
            value={month}
          />
        )}
        <CalendarTable
          weekDayNames={locale.weekDayNames}
          dateDisabled={dateDisabled}
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
  },
);

Calendar.displayName = 'Calendar';
