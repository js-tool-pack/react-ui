import type { CalendarLocale } from '~/calendar';

export interface Locale {
  calendar: Partial<CalendarLocale>;
}

export type Context = { locale: Partial<Locale> };
