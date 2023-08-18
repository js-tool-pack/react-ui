import { useEffect } from 'react';
import { lockScroll } from '@tool-pack/dom';

export function useScrollLock(
  visible: boolean | void,
  container?: HTMLElement | (() => HTMLElement | undefined),
  options: { enabled?: boolean; delay?: number; preventShaking?: boolean } = {},
) {
  const { enabled = true, delay = 500, preventShaking = true } = options;

  useEffect(() => {
    if (!enabled || !visible) return;
    const el = typeof container === 'function' ? container() : container;
    const unlock = lockScroll(el, preventShaking);
    return () => {
      // 需要等窗体退场动画结束后才能取消滚动锁定
      setTimeout(unlock, delay);
    };
  }, [enabled, container, visible]);
}
