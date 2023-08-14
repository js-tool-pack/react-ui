import { useRef } from 'react';

export function useWatch<T>(
  value: T,
  cb: (newVal: T, oldVal?: T) => void,
  { immediate }: { immediate?: boolean } = {},
): () => void {
  const oldValRef = useRef(value);
  const isInitRef = useRef(true);
  const canceledRef = useRef(false);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  if (canceledRef.current) return () => {};

  const oldVal = oldValRef.current;
  oldValRef.current = value;
  if (oldVal !== value) {
    cb(value, oldVal);
  }

  // immediate
  if (immediate && isInitRef.current) cb(value);
  isInitRef.current = false;

  return () => (canceledRef.current = true);
}
