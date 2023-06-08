import { useEffect, useRef } from 'react';

export function useClientSize(
  container: HTMLElement = globalThis?.document.documentElement,
) {
  const size = useRef([0, 0] as [number, number]);

  useEffect(() => {
    if (!container) return;
    const handler = () => {
      const { clientWidth: cw, clientHeight: ch } = container;
      size.current = [cw, ch];
    };
    handler();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [container]);

  return size.current;
}
