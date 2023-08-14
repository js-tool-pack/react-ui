import { useCallback, useRef } from 'react';
import { useForceUpdate } from './useForceUpdate';

export function useVisible(
  outerVisible: boolean | void,
  onHide?: () => boolean | Promise<void> | void,
): [boolean, () => Promise<void> | void] {
  const forceUpdate = useForceUpdate();
  const lastOuterVisibleRef = useRef(outerVisible);
  const visibleRef = useRef(outerVisible || false);

  if (lastOuterVisibleRef.current !== outerVisible) {
    visibleRef.current = outerVisible || false;
  }
  lastOuterVisibleRef.current = outerVisible;

  const hide = useCallback((): Promise<void> | void => {
    if (visibleRef.current === false) return;

    const close = () => {
      visibleRef.current = false;
      forceUpdate();
    };
    if (!onHide) {
      close();
      return;
    }

    const res = onHide();
    switch (typeof res) {
      case 'boolean':
        if (!res) break;
      // eslint-disable-next-line no-fallthrough
      case 'undefined':
        close();
        break;
      case 'object':
        return (
          res
            .then(close)
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            .catch(() => {})
        );
    }
  }, [onHide]);

  return [visibleRef.current, hide];
}
