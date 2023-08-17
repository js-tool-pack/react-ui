import { useEffect } from 'react';
import { noScroll } from '@tool-pack/dom';

export function useScrollLock(
  visible: boolean | void,
  container?: HTMLElement | (() => HTMLElement | undefined),
  enable = true,
) {
  useEffect(() => {
    if (!enable || !visible) return;
    const el = typeof container === 'function' ? container() : container;
    return noScroll(
      el,
      [document.body, document.documentElement].includes(el!),
    );
  }, [enable, container, visible]);
}
