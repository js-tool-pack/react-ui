import type { FN } from '@tool-pack/types';
import React, { useRef } from 'react';

export function useForwardRef<T>(
  forwardRef: React.ForwardedRef<T> | undefined,
): React.RefObject<T> {
  const ref = useRef<T>(null);
  const initRef = useRef<null | FN>(() => {
    if (!forwardRef) return;
    initRef.current = null;

    let { current } = ref;
    const isFn = typeof forwardRef === 'function';

    // 代理内部 ref.current
    Object.defineProperty(ref, 'current', {
      set(v: T) {
        current = v;
        isFn && forwardRef(current);
      },
      get: () => current,
    });

    if (!isFn) {
      // 外部 ref.current 链接到内部 ref.current
      Object.defineProperty(forwardRef, 'current', {
        set: (v: T) => (current = v),
        get: () => current,
      });
    }
  });

  initRef.current?.();

  return ref;
}
