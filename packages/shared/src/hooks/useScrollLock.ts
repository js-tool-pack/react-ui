import { lockScroll } from '@tool-pack/dom';
import { useEffect } from 'react';

export function useScrollLock(
  visible: boolean | void,
  container?: (() => HTMLElement | undefined) | HTMLElement,
  options: { preventShaking?: boolean; enabled?: boolean; delay?: number } = {},
) {
  const { preventShaking = true, enabled = true, delay = 500 } = options;

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
