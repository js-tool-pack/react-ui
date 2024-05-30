import { type MutableRefObject, useRef } from 'react';
import { useWatch } from './useWatch';

/**
 * 跟随外部状态的内部状态ref
 */

export function useFollowingRef<T, R>(
  state: T,
  stateHandler?: (state: T) => R,
): MutableRefObject<R> {
  const cb = stateHandler || ((v) => v);
  const ref = useRef(cb(state));
  useWatch(state, (n) => (ref.current = cb(n)));
  return ref as MutableRefObject<R>;
}
