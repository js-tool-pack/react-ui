import { useCallback, useEffect, useRef } from 'react';

/**
 * 类似 nextTick 函数，只不过它的next不是js中的事件循环，而是useEffect;
 * 传入的函数会在下一次的useEffect中执行
 */
export function useNextEffect() {
  const effectsRef = useRef<Array<() => void>>([]);

  useEffect(() => {
    const effects = effectsRef.current;
    if (!effects.length) return;

    effects.forEach((e) => e());
    effects.length = 0;
  });

  return useCallback((effect: () => void): (() => void) => {
    const effects = effectsRef.current;
    effects.push(effect);

    return () => {
      const index = effects.indexOf(effect);
      effects.splice(index, 1);
    };
  }, []);
}
