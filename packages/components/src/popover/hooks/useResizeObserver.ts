import React, { useEffect } from 'react';

export function useResizeObserver(
  enable: boolean,
  elRef: React.MutableRefObject<HTMLElement | null>,
  callback: () => void,
) {
  useEffect(() => {
    if (!elRef.current || !enable) return;
    const observer = new ResizeObserver(callback);
    observer.observe(elRef.current);
    return () => observer.disconnect();
  }, [callback, elRef, enable]);
}
