import React, { useEffect, useRef } from 'react';

export function useForwardRef<T>(
  forwardRef: React.ForwardedRef<T>,
): React.RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!forwardRef) return;
    if (typeof forwardRef === 'function') forwardRef(ref.current as T);
    else forwardRef.current = ref.current as T;
  }, [forwardRef]);

  return ref;
}
