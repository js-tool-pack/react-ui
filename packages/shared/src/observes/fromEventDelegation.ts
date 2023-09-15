import { type Observable, fromEvent, filter } from 'rxjs';
import { isChildHTMLElement } from '@tool-pack/dom';
import { isFunction } from '@tool-pack/basic';

/**
 * 事件委托
 */
export function fromEventDelegation<K extends keyof HTMLElementEventMap>(
  target: HTMLElement,
  eventName: K,
  options?: Omit<AddEventListenerOptions, 'signal'>,
): Observable<HTMLElementEventMap[K]>;
/**
 * 事件委托
 */
export function fromEventDelegation<K extends keyof HTMLElementEventMap>(
  getTarget: () => HTMLElement,
  eventName: K,
  options?: Omit<AddEventListenerOptions, 'signal'>,
): Observable<HTMLElementEventMap[K]>;
export function fromEventDelegation<K extends keyof HTMLElementEventMap>(
  getEl: (() => HTMLElement) | HTMLElement,
  eventName: K,
  options: Omit<AddEventListenerOptions, 'signal'> = {},
): Observable<HTMLElementEventMap[K]> {
  return fromEvent<HTMLElementEventMap[K]>(
    document.documentElement,
    eventName,
    options,
  ).pipe(
    filter((e): boolean => {
      // srcElement IE6-8
      const target = (e.target || e.srcElement) as HTMLElement | null;
      const el = isFunction(getEl) ? getEl() : getEl;
      if (!target) return false;
      return target === el || isChildHTMLElement(target, el);
    }),
  );
}
