import React, { useCallback, useEffect, useRef } from 'react';

export function useForwardRef<T, W extends boolean = false>(
  forwardRef: React.ForwardedRef<T> | undefined,
  withRefresh = false as W,
): W extends false
  ? React.RefObject<T>
  : [ref: React.RefObject<T>, refresh: () => void] {
  const ref = useRef<T>(null);

  const refresh = useCallback(() => {
    if (!forwardRef) return;
    if (typeof forwardRef === 'function') forwardRef(ref.current as T);
    else forwardRef.current = ref.current as T;
  }, [forwardRef]);

  useEffect(refresh, [refresh]);

  if (!withRefresh) return ref as ReturnType<typeof useForwardRef<T, W>>;
  return [ref, refresh] as ReturnType<typeof useForwardRef<T, W>>;
}
