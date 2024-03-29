import { useEffect } from 'react';

export function useResizeEvent(
  enable: boolean,
  callback: () => void,
  options?: AddEventListenerOptions | boolean,
) {
  useEffect(() => {
    if (!enable) return;
    const handler = () => {
      callback();
    };
    window.addEventListener('resize', handler, options);
    return () => window.removeEventListener('resize', handler, options);
  }, [callback, options, enable]);
}
