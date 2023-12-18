import { CalendarHeader } from '~/calendar/components/Header';
import type { CalendarProps } from './calendar.types';
import { CalendarTable } from '~/calendar/components';
import { useStateRef, getClasses } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import React from 'react';

const cls = getClasses('calendar', ['date-cell'], ['prev-month', 'next-month']);
const defaultProps = {
  weekStart: 'MonDay',
  value: new Date(),
  header: true,
} satisfies Partial<CalendarProps>;

export const Calendar: React.FC<CalendarProps> = React.forwardRef<
  HTMLDivElement,
  CalendarProps
>((props, ref) => {
  const {
    attrs = {},
    weekStart,
    onChange,
    dateCell,
    header,
    value,
  } = props as RequiredPart<CalendarProps, keyof typeof defaultProps>;

  const [valueRef, setValueRef] = useStateRef(value);

  return (
    <div
      {...attrs}
      className={getClassNames(cls.root, attrs.className)}
      ref={ref}
    >
      {header && (
        <CalendarHeader
          value={valueRef.current}
          weekStart={weekStart}
          setValue={setValue}
        />
      )}
      <CalendarTable
        value={valueRef.current}
        weekStart={weekStart}
        setValue={setValue}
        dateCell={dateCell}
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
