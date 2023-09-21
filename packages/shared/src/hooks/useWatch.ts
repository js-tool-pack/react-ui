import { emptyFn } from '@tool-pack/basic';
import { useRef } from 'react';

export function useWatch<T>(
  value: T,
  cb: (newVal: T, oldVal?: T) => void,
  { immediate }: { immediate?: boolean } = {},
): () => void {
  const ref = useRef({ isMounted: true, canceled: false, oldVal: value });

  const obj = ref.current;
  if (obj.canceled) return emptyFn;

  const { isMounted, oldVal } = obj;
  obj.oldVal = value;
  if (oldVal !== value) cb(value, oldVal);

  // immediate
  if (immediate && isMounted) cb(value);
  obj.isMounted = false;

  return () => (obj.canceled = true);
}
