import type {
  PopConfirmLocale,
  CalendarLocale,
  SelectLocale,
  InputLocale,
  EmptyLocale,
} from '../';

export interface Locale {
  popConfirm: Partial<PopConfirmLocale>;
  calendar: Partial<CalendarLocale>;
  select: Partial<SelectLocale>;
  input: Partial<InputLocale>;
  empty: Partial<EmptyLocale>;
}

export type Context = { locale: Partial<Locale> };
