import {
  getStartOfWeek,
  getEndOfMonth,
  getEndOfWeek,
  createArray,
  dateAdd,
  chunk,
} from '@tool-pack/basic';
import type { CalendarLocale, CalendarProps } from '~/calendar';
import type { ConvertOptional } from '@tool-pack/types';
import { getClasses } from '@pkg/shared';
import { CalendarTableCell } from './';
import React, { useMemo } from 'react';

interface Props
  extends ConvertOptional<
    Pick<CalendarProps, 'dateDisabled' | 'firstDay' | 'dateCell' | 'value'>
  > {
  weekDayNames: CalendarLocale['weekDayNames'];
  setValue(value: Date): void;
  month: Date;
  today: Date;
}

const cls = getClasses('calendar-table', [], []);

export const CalendarTable: React.FC<Props> = (props) => {
  const {
    dateDisabled,
    weekDayNames,
    firstDay,
    setValue,
    dateCell,
    value,
    month,
    today,
  } = props;
  const dates: Date[][] = useMemo(() => {
    const value = month;
    const endOfMonth = getEndOfMonth(value);

    const list: Date[] = [
      ...getPrevMonthDates(),
      ...getCurrMonthDates(),
      ...getNextMonthDates(),
    ];
    if (list.length < 42) list.push(...getExtra());

    return chunk(list, 7);

    function getExtra(): Date[] {
      const end = list.at(-1) as Date;
      return createArray({
        start: end.getDate() + 1,
        fill: getFill(end),
        len: 7,
      });
    }
    function getCurrMonthDates(): Date[] {
      return createArray({
        end: endOfMonth.getDate() + 1,
        fill: getFill(value),
        start: 1,
      });
    }
    function getPrevMonthDates(): Date[] {
      const firstDateOfMonth = new Date(value);
      firstDateOfMonth.setDate(1);

      const startOfWeek = getStartOfWeek(firstDateOfMonth, { firstDay });
      if (startOfWeek.getDate() === 1) {
        // 往前延伸一个星期
        // startOfWeek = dateAdd(startOfWeek, -1, 'week');
        return [];
      }

      const endOfPrevMonth = getEndOfMonth(value, -1);
      return createArray({
        end: endOfPrevMonth.getDate() + 1,
        fill: getFill(endOfPrevMonth),
        start: startOfWeek.getDate(),
      });
    }
    function getNextMonthDates(): Date[] {
      let endOfEndWeek = getEndOfWeek(endOfMonth, { firstDay });
      if (endOfEndWeek.getDate() === endOfMonth.getDate()) {
        endOfEndWeek = dateAdd(endOfEndWeek, 1, 'week');
      }
      return createArray({
        end: endOfEndWeek.getDate() + 1,
        fill: getFill(endOfEndWeek),
        start: 1,
      });
    }
    function getFill(month: Date): (v: number) => Date {
      return (v) => new Date(month.getFullYear(), month.getMonth(), v);
    }
  }, [month, firstDay]);

  const weekDays: readonly string[] = useMemo(
    () => [...weekDayNames.slice(firstDay), ...weekDayNames.slice(0, firstDay)],
    [firstDay],
  );

  return (
    <table className={cls.root} cellSpacing={0} cellPadding={0}>
      <thead>
        <tr>
          {weekDays.map((name) => (
            <th key={name}>{name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dates.map((row, index) => (
          <tr key={index}>
            {row.map((date) => (
              <CalendarTableCell
                key={`${date.getMonth()} ${date.getDate()}`}
                dateDisabled={dateDisabled}
                dateCell={dateCell}
                onClick={setValue}
                today={today}
                month={month}
                value={value}
                date={date}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
