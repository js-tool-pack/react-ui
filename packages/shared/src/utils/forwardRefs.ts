import type { MutableRefObject, Ref } from 'react';

/**
 * 传递 ref
 */
export function forwardRefs(
  value: unknown,
  ...refs: (Ref<unknown> | undefined)[]
): void {
  refs.forEach((ref): void => {
    if (!ref) return;
    switch (typeof ref) {
      case 'function':
        ref(value);
        break;
      case 'object':
        (ref as MutableRefObject<unknown>).current = value;
        break;
    }
  });
}
