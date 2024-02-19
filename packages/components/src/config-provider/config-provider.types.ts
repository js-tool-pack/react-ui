import type {
  PopConfirmLocale,
  CalendarLocale,
  SelectLocale,
  EmptyLocale,
} from '../';

export interface Locale {
  popConfirm: Partial<PopConfirmLocale>;
  calendar: Partial<CalendarLocale>;
  select: Partial<SelectLocale>;
  empty: Partial<EmptyLocale>;
}

export type Context = { locale: Partial<Locale> };
