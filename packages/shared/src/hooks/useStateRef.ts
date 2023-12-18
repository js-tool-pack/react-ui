import { useForceUpdate } from './useForceUpdate';
import { useCallback, useRef } from 'react';
import { useWatch } from './useWatch';

export function useStateRef<V>(
  state: V,
): [
  stateRef: React.MutableRefObject<V>,
  setStateRef: (value: V) => void,
  forceUpdate: () => void,
] {
  const forceUpdate = useForceUpdate();
  const stateRef = useRef(state);
  useWatch(state, (n) => (stateRef.current = n));

  const setValue = useCallback((value: V) => {
    stateRef.current = value;
    forceUpdate();
  }, []);

  return [stateRef, setValue, forceUpdate];
}
