import { getClassNames, isSameTime } from '@tool-pack/basic';
import type { RequiredPart } from '@tool-pack/types';
import { ConvertOptional } from '@tool-pack/types';
import { CalendarProps } from '~/calendar';
import { getClasses } from '@pkg/shared';
import React from 'react';

interface Props extends ConvertOptional<Pick<CalendarProps, 'dateCell'>> {
  onClick(value: Date): void;
  today: Date;
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
  const { dateCell, onClick, today, value, date } = props as RequiredPart<
    Props,
    keyof typeof defaultProps
  >;
  const valueYear = value.getFullYear();
  const valueMonth = value.getMonth();
  const dateYear = date.getFullYear();
  const dateMonth = date.getMonth();

  const status = {
    isNextMonth:
      dateYear > valueYear ||
      (dateYear === valueYear && dateMonth > valueMonth),
    isPreMonth:
      dateYear < valueYear ||
      (dateYear === valueYear && dateMonth < valueMonth),
    isSelected: isSameTime('yyyy-MM-dd', value, date),
    isToday: isSameTime('yyyy-MM-dd', today, date),
  };

  const attrs: Partial<React.HTMLAttributes<HTMLTableDataCellElement>> = {
    className: getClassNames(cls.root, {
      [cls['--']['next-month']]: status.isNextMonth,
      [cls['--']['prev-month']]: status.isPreMonth,
      [cls['--']['active']]: status.isSelected,
      [cls['--']['today']]: status.isToday,
    }),
    onClick: handleClick,
  };
  const _dateCell = dateCell || (() => <td {...attrs}>{date.getDate()}</td>);
  return _dateCell(date, attrs, status);

  function handleClick(): void {
    // react 渲染太快了，事件还没冒泡完毕就渲染完成了，所以要延迟一下触发
    setTimeout(() => onClick(date));
  }
};

CalendarTableCell.defaultProps = defaultProps;
