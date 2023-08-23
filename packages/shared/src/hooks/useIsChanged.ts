import { useRef } from 'react';

export function useIsChanged<T>(value: T): [isChanged: boolean, prevValue: T] {
  const prevValueRef = useRef(value);

  const prevValue = prevValueRef.current;
  prevValueRef.current = value;

  return [prevValue !== value, prevValue];
}
