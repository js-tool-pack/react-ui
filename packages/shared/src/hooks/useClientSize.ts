import { useEffect, useRef } from 'react';

export function useClientSize(
  container: HTMLElement = globalThis?.document.documentElement,
) {
  const size = useRef([
    container?.clientWidth || 0,
    container?.clientHeight || 0,
  ] as [number, number]);

  useEffect(() => {
    if (!container) return;
    const handler = () => {
      const { clientHeight: ch, clientWidth: cw } = container;
      size.current = [cw, ch];
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [container]);

  return size.current;
}
