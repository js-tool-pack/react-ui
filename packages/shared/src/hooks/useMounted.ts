import { useEffect, type EffectCallback } from 'react';

/**
 * useEffect 语义化，并没有省多少代码，就少写个[]
 * @param onMounted
 */
export function useMounted(onMounted: EffectCallback): void {
  useEffect(onMounted, []);
}
