import type { PopConfirmLocale, CalendarLocale } from '../';

export interface Locale {
  popConfirm: Partial<PopConfirmLocale>;
  calendar: Partial<CalendarLocale>;
}

export type Context = { locale: Partial<Locale> };
