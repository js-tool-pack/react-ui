import { useForceUpdate } from '@pkg/shared';
import { useEffect } from 'react';

export function useAppendTo(
  appendTo: (() => HTMLElement | null) | void | null,
  defAppendTo?: (() => HTMLElement) | null,
): [HTMLElement | null, () => void] {
  const forceUpdate = useForceUpdate();

  const target = (appendTo && appendTo()) || null;

  useEffect(() => {
    // 由于 createPortal 是立即执行的，而 ref 是异步才能获取到，导致 appendTo 拿不到正确的值，
    // 且 appendTo 切换时会丢失动画，所以需要额外刷新一次。
    // 默认的是 body，没有异步获取，所以不需要刷新
    // appendTo 为 null 也不需要刷新，只有根元素位置会变化才需要刷新
    if (appendTo === null || defAppendTo === appendTo) return;
    forceUpdate();
  }, []);

  return [target, forceUpdate];
}
