import { useCallback, useEffect, useState } from 'react';

export function useVisible(
  visibleDep: boolean | void,
  onHide?: () => boolean | Promise<void> | void,
): [boolean, () => Promise<void> | void] {
  const [visible, setVisible] = useState(visibleDep || false);

  useEffect(() => {
    setVisible(visibleDep || false);
  }, [visibleDep]);

  const hide = useCallback((): Promise<void> | void => {
    const close = () => setVisible(false);
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

  return [visible, hide];
}
