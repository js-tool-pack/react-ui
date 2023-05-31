import { useEffect, useMemo, useRef } from 'react';

export function useIsInitDep(dep: unknown) {
  const prev = useRef<boolean>(true);
  const isInit = useMemo(() => prev.current, [dep]);
  useEffect(() => {
    prev.current = false;
  }, []);
  return isInit;
}
