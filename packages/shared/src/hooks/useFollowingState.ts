import { useWatch } from './useWatch';
import { useState } from 'react';

/**
 * 跟随外部状态的内部状态
 */
export function useFollowingState<T>(state: T) {
  const result = useState<T>(state);
  useWatch(state, (v) => result[1](v));
  return result;
}
