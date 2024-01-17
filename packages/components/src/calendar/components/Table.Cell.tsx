import { getClassNames, isSameTime } from '@tool-pack/basic';
import { ConvertOptional } from '@tool-pack/types';
import { CalendarProps } from '~/calendar';
import { getClasses } from '@pkg/shared';
import React from 'react';

interface Props
  extends ConvertOptional<
    Pick<CalendarProps, 'dateDisabled' | 'dateCell' | 'value'>
  > {
  onClick(value: Date): void;
  today: Date;
  month: Date;
  date: Date;
}

const cls = getClasses(
  'calendar-cell',
  [],
  ['today', 'active', 'prev-month', 'next-month', 'disabled'],
);

export const CalendarTableCell: React.FC<Props> = (props) => {
  const { dateDisabled, dateCell, onClick, today, month, value, date } = props;
  const dateYear = date.getFullYear();
  const dateMonth = date.getMonth();
  const monthYear = month.getFullYear();
  const monthMonth = month.getMonth();

  const status = {
    isNextMonth:
      dateYear > monthYear ||
      (dateYear === monthYear && dateMonth > monthMonth),
    isPreMonth:
      dateYear < monthYear ||
      (dateYear === monthYear && dateMonth < monthMonth),
    isSelected: Boolean(value && isSameTime('yyyy-MM-dd', value, date)),
    isToday: isSameTime('yyyy-MM-dd', today, date),
    disabled: dateDisabled?.(date, value) || false,
  };

  const attrs: Partial<React.HTMLAttributes<HTMLTableDataCellElement>> = {
    className: getClassNames(cls.root, {
      [cls['--']['next-month']]: status.isNextMonth,
      [cls['--']['prev-month']]: status.isPreMonth,
      [cls['--']['active']]: status.isSelected,
      [cls['--']['disabled']]: status.disabled,
      [cls['--']['today']]: status.isToday,
    }),
    onClick: handleClick,
  };
  const _dateCell = dateCell || (() => <td {...attrs}>{date.getDate()}</td>);
  return _dateCell(date, attrs, status);

  function handleClick(): void {
    if (status.disabled) return;
    // react 渲染太快了，事件还没冒泡完毕就渲染完成了，所以要延迟一下触发
    setTimeout(() => onClick(date));
  }
};
