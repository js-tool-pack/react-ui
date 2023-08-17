import { useEffect } from 'react';
import { noScroll } from '@tool-pack/dom';

export function useScrollLock(
  visible: boolean | void,
  container?: HTMLElement | (() => HTMLElement | undefined),
  options: { enabled?: boolean; delay?: number } = {},
) {
  const { enabled = true, delay = 500 } = options;
  useEffect(() => {
    if (!enabled || !visible) return;
    const el = typeof container === 'function' ? container() : container;
    const unlock = noScroll(
      el,
      [document.body, document.documentElement].includes(el!),
    );
    return () => {
      // 需要等窗体退场动画结束后才能取消滚动锁定
      setTimeout(unlock, delay);
    };
  }, [enabled, container, visible]);
}
