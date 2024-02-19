import type { PopConfirmLocale, CalendarLocale, EmptyLocale } from '../';

export interface Locale {
  popConfirm: Partial<PopConfirmLocale>;
  calendar: Partial<CalendarLocale>;
  empty: Partial<EmptyLocale>;
}

export type Context = { locale: Partial<Locale> };
