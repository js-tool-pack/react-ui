import { useRef } from 'react';

export function useValueWithPrev<T>(
  value: T,
): [current: T, prev: undefined | T] {
  const memoRef = useRef<[T, undefined | T]>([value, undefined]);
  const memo = memoRef.current;
  if (memo[0] !== value) [memo[0], memo[1]] = [value, memo[0]];
  return memo;
}
