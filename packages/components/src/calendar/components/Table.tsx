import {
  getStartOfWeek,
  getEndOfMonth,
  getEndOfWeek,
  createArray,
  dateAdd,
  chunk,
} from '@tool-pack/basic';
import type { RequiredPart } from '@tool-pack/types';
import { ConvertOptional } from '@tool-pack/types';
import { CalendarProps } from '~/calendar';
import { getClasses } from '@pkg/shared';
import { CalendarTableCell } from './';
import React, { useMemo } from 'react';

interface Props
  extends ConvertOptional<
    Pick<CalendarProps, 'weekStart' | 'dateCell' | 'value'>
  > {
  setValue(value: Date): void;
}

const cls = getClasses('calendar-table', [], []);
const defaultProps = {} satisfies Partial<Props>;

export const CalendarTable: React.FC<Props> = (props) => {
  const {
    value = new Date(),
    weekStart,
    setValue,
    dateCell,
  } = props as RequiredPart<Props, keyof typeof defaultProps>;
  const dates: Date[][] = useMemo(() => {
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

      let startOfWeek = getStartOfWeek(firstDateOfMonth, weekStart);
      if (startOfWeek.getDate() === 1) {
        startOfWeek = dateAdd(startOfWeek, -1, 'week');
      }

      const endOfPrevMonth = getEndOfMonth(value, -1);
      return createArray({
        end: endOfPrevMonth.getDate() + 1,
        fill: getFill(endOfPrevMonth),
        start: startOfWeek.getDate(),
      });
    }
    function getNextMonthDates(): Date[] {
      let endOfEndWeek = getEndOfWeek(endOfMonth, weekStart);
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
  }, [value, weekStart]);
  return (
    <table className={cls.root} cellSpacing={0} cellPadding={0}>
      <thead>
        <tr>
          {(weekStart === 'MonDay'
            ? weekDayNames.slice(1)
            : weekDayNames.slice(0, -1)
          ).map((name) => (
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
                dateCell={dateCell}
                setValue={setValue}
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

CalendarTable.defaultProps = defaultProps;
const weekDayNames = ['日', '一', '二', '三', '四', '五', '六', '日'] as const;
