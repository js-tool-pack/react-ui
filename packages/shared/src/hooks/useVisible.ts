import { useCallback, useRef } from 'react';
import { useForceUpdate } from './useForceUpdate';

export function useVisible(
  outerVisible: boolean | undefined,
  onHide?: () => boolean | Promise<void> | void,
): [
  visible: boolean | undefined,
  hide: (onHide?: () => boolean | Promise<void> | void) => Promise<void> | void,
  setVisible: (value?: boolean) => void,
] {
  const forceUpdate = useForceUpdate();
  const lastOuterVisibleRef = useRef(outerVisible);
  const visibleRef = useRef<boolean | undefined>(outerVisible);

  const setVisible = useCallback((value: boolean | undefined) => {
    visibleRef.current = value;
    forceUpdate();
  }, []);

  if (lastOuterVisibleRef.current !== outerVisible) {
    visibleRef.current = outerVisible || false;
  }
  lastOuterVisibleRef.current = outerVisible;

  const hide = useCallback(
    (cb = onHide): Promise<void> | void => {
      if (visibleRef.current === false) return;

      const close = () => {
        setVisible(false);
      };
      if (!cb || typeof cb !== 'function') {
        close();
        return;
      }

      const res = cb();
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
    },
    [onHide],
  );

  return [visibleRef.current, hide, setVisible];
}
