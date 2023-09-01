import { useEffect } from 'react';

/**
 * useEffect 语义化，并没有省多少代码
 */
export function useBeforeDestroy(onBeforeDestroy: () => void): void {
  useEffect(() => onBeforeDestroy, []);
}
