import { useMounted } from '@pkg/shared';
import { isFunction } from '@tool-pack/basic';

/**
 * target 是 window
 */
export function useEventListenerOnMounted<K extends keyof WindowEventMap>(
  target: Window,
  eventName: K,
  callback: (this: Window, ev: WindowEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions,
): void;
/**
 * target 是 document
 */
export function useEventListenerOnMounted<K extends keyof DocumentEventMap>(
  target: Document,
  eventName: K,
  callback: (this: Document, ev: DocumentEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions,
): void;
/**
 * target 是 HTMLElement
 */
export function useEventListenerOnMounted<K extends keyof HTMLElementEventMap>(
  target: HTMLElement,
  eventName: K,
  callback: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions,
): void;
/**
 * target 是 ref 需要传函数
 */
export function useEventListenerOnMounted<K extends keyof HTMLElementEventMap>(
  getTarget: () => HTMLElement,
  eventName: K,
  callback: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions,
): void;
/**
 * 在组件创建时添加事件监听，组件移除时移除事件监听
 *
 * 如果想在 onMounted 时绑定多个事件，不应多次使用该 hook，而是使用 useMounted + RxJs 绑定多个事件代替
 *
 * @example
 *
 * useEffect(() => {
 *   const handler = () => setShow(false);
 *   window.addEventListener('blur', handler);
 *   return () => window.removeEventListener('blur', handler);
 * }, []);
 *
 * // 以上代码可简化为一行代码
 * useEventOnMounted(window, 'blur', () => setShow(false));
 */
export function useEventListenerOnMounted(
  target: Window | HTMLElement | Document | (() => HTMLElement),
  eventName: string,
  callback: (this: unknown, ev: unknown) => unknown,
  options?: boolean | AddEventListenerOptions,
): void {
  useMounted(() => {
    const tg = isFunction(target) ? target() : target;
    tg.addEventListener(eventName, callback, options);
    return () => tg.removeEventListener(eventName, callback, options);
  });
}
