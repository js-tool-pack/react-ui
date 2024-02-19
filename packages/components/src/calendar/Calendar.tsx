import {
  useFollowingState,
  useStateRef,
  getClasses,
  useWatch,
} from '@pkg/shared';
import type { CalendarLocale, CalendarProps } from './calendar.types';
import { getStartOfMonth, getClassNames } from '@tool-pack/basic';
import { ConfigContext } from '~/config-provider/config.context';
import { CalendarHeader } from '~/calendar/components/Header';
import { CalendarTable } from '~/calendar/components';
import type { RequiredPart } from '@tool-pack/types';
import React, { useContext, useMemo } from 'react';
import calendarLocale from './locale/en-US';

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
  const contextLocale = useContext(ConfigContext).locale;
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
  } = props as RequiredPart<CalendarProps, keyof typeof defaultProps>;

  const locale = useMemo<CalendarLocale>(
    () =>
      Object.assign({}, calendarLocale, contextLocale.calendar, propsLocale),
    [contextLocale.calendar, propsLocale],
  );

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
});

Calendar.defaultProps = defaultProps;
Calendar.displayName = 'Calendar';
