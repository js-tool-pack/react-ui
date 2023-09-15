import { useForceUpdate } from './useForceUpdate';
import { useCallback, useRef } from 'react';

export function useVisible(
  outerVisible: undefined | boolean,
  onHide?: () => Promise<void> | boolean | void,
): [
  visible: undefined | boolean,
  hide: (onHide?: () => Promise<void> | boolean | void) => Promise<void> | void,
  setVisible: (value?: boolean) => void,
] {
  const forceUpdate = useForceUpdate();
  const lastOuterVisibleRef = useRef(outerVisible);
  const visibleRef = useRef<undefined | boolean>(outerVisible);

  const setVisible = useCallback((value: undefined | boolean) => {
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
