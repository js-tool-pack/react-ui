import { PropsBase } from '@pkg/shared';
import React from 'react';

export interface CalendarProps
  extends Omit<PropsBase<HTMLDivElement>, 'children'> {
  dateCell?: (
    date: Date,
    attrs: Partial<React.HTMLAttributes<HTMLTableDataCellElement>>,
    status: {
      isNextMonth: boolean;
      isSelected: boolean;
      isPreMonth: boolean;
      isToday: boolean;
    },
  ) => React.ReactNode;
  firstDay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  onChange?: (value: Date) => void;
  header?: boolean;
  month?: Date;
  value?: Date;
  today?: Date;
}
