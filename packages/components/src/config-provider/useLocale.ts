import { Locale } from './config-provider.types';
import { ConfigContext } from './config.context';
import { useContext, useMemo } from 'react';

export function useLocale(): Locale;
export function useLocale<K extends keyof Locale>(name: K): Locale[K];
export function useLocale<K extends keyof Locale>(
  name: K,
  presetLocale: Locale[K],
): Required<Locale[K]>;
export function useLocale(name?: keyof Locale, presetLocale?: object) {
  const locale = useContext(ConfigContext).locale;
  return useMemo(() => {
    if (!name) return locale;

    const componentLocale = locale[name];
    if (!presetLocale) return componentLocale;

    return { ...presetLocale, ...componentLocale };
  }, [name, locale, presetLocale]);
}
