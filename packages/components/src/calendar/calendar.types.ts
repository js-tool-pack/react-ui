import { PropsBase } from '@pkg/shared';

export interface CalendarProps
  extends Omit<PropsBase<HTMLDivElement>, 'children'> {
  dateCell?: (date: Date) => React.ReactNode;
  onChange?: (value: Date) => void;
  weekStart?: 'MonDay' | 'SunDay';
  header?: boolean;
  value?: Date;
}
