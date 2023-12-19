import { PropsBase } from '@pkg/shared';

export interface CalendarProps
  extends Omit<PropsBase<HTMLDivElement>, 'children'> {
  dateCell?: (date: Date) => React.ReactNode;
  firstDay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  onChange?: (value: Date) => void;
  header?: boolean;
  value?: Date;
}
