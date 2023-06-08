import { useCallback, useState } from 'react';

export function useForceUpdate() {
  const [, forceUpdate] = useState({});
  return useCallback(() => {
    forceUpdate({});
  }, []);
}
