import { filter, fromEvent, type Observable } from 'rxjs';
import { isChildHTMLElement } from '@tool-pack/dom';
import { castArray } from '@tool-pack/basic';

/**
 * 元素外部事件监听
 * @param inner 与外部相对的内部元素
 * @param eventName 事件名
 */
export function outerEventObserve(
  inner: HTMLElement,
  eventName: keyof HTMLElementEventMap,
): Observable<MouseEvent>;
/**
 * 元素外部事件监听
 * @param getInner 获取与外部相对的内部元素
 * @param eventName 事件名
 */
export function outerEventObserve(
  getInner: () => HTMLElement,
  eventName: keyof HTMLElementEventMap,
): Observable<MouseEvent>;
/**
 * 元素外部事件监听
 * @param getInners 获取与外部相对的内部元素数组
 * @param eventName 事件名
 */
export function outerEventObserve(
  getInners: () => (HTMLElement | undefined)[],
  eventName: keyof HTMLElementEventMap,
): Observable<MouseEvent>;
export function outerEventObserve(
  inners:
    | (() => (HTMLElement | undefined)[])
    | (() => HTMLElement)
    | HTMLElement,
  eventName: keyof HTMLElementEventMap,
): Observable<MouseEvent> {
  const getEls: (() => (HTMLElement | undefined)[]) | (() => HTMLElement) =
    typeof inners === 'function' ? inners : () => inners;

  return fromEvent<MouseEvent>(window, eventName).pipe(
    filter((e) => {
      const target = e.target as HTMLElement | null;
      if (!target) return false;
      return castArray(getEls()).every(
        (el) => !el || (target !== el && !isChildHTMLElement(target, el)),
      );
    }),
  );
}
