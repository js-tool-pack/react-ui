// import type { CalendarLocale } from '~/calendar';

export interface Locale {
  // calendar: Partial<CalendarLocale>;
  calendar: object;
}

export type Context = { locale: Partial<Locale> };
