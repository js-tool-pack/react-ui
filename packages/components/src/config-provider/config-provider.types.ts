import type {
  PopConfirmLocale,
  DatePickerLocale,
  CalendarLocale,
  SelectLocale,
  InputLocale,
  EmptyLocale,
} from '../';

export interface Locale {
  datePicker: Partial<DatePickerLocale>;
  popConfirm: Partial<PopConfirmLocale>;
  calendar: Partial<CalendarLocale>;
  select: Partial<SelectLocale>;
  input: Partial<InputLocale>;
  empty: Partial<EmptyLocale>;
}

export type Context = { locale: Partial<Locale> };
