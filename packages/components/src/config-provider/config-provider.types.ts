import type {
  PopConfirmLocale,
  DatePickerLocale,
  CalendarLocale,
  LoadingLocale,
  SelectLocale,
  InputLocale,
  EmptyLocale,
  /* {import insert target} */
} from '../';

export interface Locale {
  datePicker: Partial<DatePickerLocale>;
  popConfirm: Partial<PopConfirmLocale>;
  calendar: Partial<CalendarLocale>;
  loading: Partial<LoadingLocale>;
  select: Partial<SelectLocale>;
  input: Partial<InputLocale>;
  empty: Partial<EmptyLocale>;
  /* {export insert target} */
}

export type Context = { locale: Partial<Locale> };
