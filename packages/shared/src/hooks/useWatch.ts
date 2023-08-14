import { useEffect, useRef } from 'react';

export function useWatch<T>(
  value: T,
  cb: (newVal: T, oldVal?: T) => void,
  { immediate }: { immediate?: boolean } = {},
): () => void {
  const oldValRef = useRef(value);
  const isInitRef = useRef(true);
  const canceledRef = useRef(false);

  useEffect(() => {
    if (canceledRef.current) return;

    const oldVal = oldValRef.current;
    if (value === oldVal) return;

    oldValRef.current = value;
    cb(value, oldVal);
  }, [cb, value]);

  // immediate
  if (immediate && isInitRef.current) cb(value);
  isInitRef.current = false;

  return () => (canceledRef.current = true);
}
