import type { SetStateAction, Dispatch } from 'react';
import { useWatch } from './useWatch';
import { useState } from 'react';

/**
 * 跟随外部状态的内部状态
 */
export function useFollowingState<T>(
  state: T,
): [T, Dispatch<SetStateAction<T>>];
export function useFollowingState<T, S>(
  state: T,
  stateHandler: (state: T) => S,
): [S, Dispatch<SetStateAction<S>>];
export function useFollowingState(
  state: unknown,
  stateHandler: (state: unknown) => unknown = (v) => v,
) {
  const result = useState(() => stateHandler(state));
  useWatch(state, (v) => result[1](stateHandler(v)));
  return result;
}
