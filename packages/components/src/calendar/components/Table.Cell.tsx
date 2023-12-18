import { getClassNames, isSameTime } from '@tool-pack/basic';
import type { RequiredPart } from '@tool-pack/types';
import { ConvertOptional } from '@tool-pack/types';
import { CalendarProps } from '~/calendar';
import { getClasses } from '@pkg/shared';
import React from 'react';

interface Props extends ConvertOptional<Pick<CalendarProps, 'dateCell'>> {
  setValue(value: Date): void;
  value: Date;
  date: Date;
}

const cls = getClasses(
  'calendar-cell',
  [],
  ['today', 'active', 'prev-month', 'next-month'],
);
const defaultProps = {} satisfies Partial<Props>;

export const CalendarTableCell: React.FC<Props> = (props) => {
  const { setValue, dateCell, value, date } = props as RequiredPart<
    Props,
    keyof typeof defaultProps
  >;
  const valueYear = value.getFullYear();
  const valueMonth = value.getMonth();
  const dateYear = date.getFullYear();
  const dateMonth = date.getMonth();
  const today = new Date();

  const isPrevMonth =
    dateYear < valueYear || (dateYear === valueYear && dateMonth < valueMonth);
  const isNextMonth =
    dateYear > valueYear || (dateYear === valueYear && dateMonth > valueMonth);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
    <td
      className={getClassNames(cls.root, {
        [cls['--']['active']]: isSameTime('yyyy-MM-dd', value, date),
        [cls['--']['today']]: isSameTime('yyyy-MM-dd', today, date),
        [cls['--']['prev-month']]: isPrevMonth,
        [cls['--']['next-month']]: isNextMonth,
      })}
      onClick={handleClick}
    >
      {dateCell ? dateCell(date) : date.getDate()}
    </td>
  );
  function handleClick() {
    setValue(date);
  }
};

CalendarTableCell.defaultProps = defaultProps;
