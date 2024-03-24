import { useValueWithPrev } from './useValueWithPrev';

/**
 * 类似于 useDeferredValue
 * useDeferredValue 起初会跟原值一样，当原值改变以后会落后于原值，最后会额外更新一次自身值
 * 跟 useDeferredValue 不一样的是起初值是 undefined，最后不会额外更新自身值
 */
export function useOldValue<T>(value: T): undefined | T {
  return useValueWithPrev(value)[1];
}
