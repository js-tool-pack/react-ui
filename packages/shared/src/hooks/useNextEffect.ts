import { useCallback, useEffect, useRef } from 'react';

/**
 * 类似 nextTick 函数，只不过它的next不是js中的事件循环，而是useEffect;
 * 传入的函数会在下一次的useEffect中执行
 *
 * @override 返回值为 nextEffect
 */
export function useNextEffect(): (
  effect: () => void,
  clearPrev?: boolean,
) => () => void;
/**
 * 类似 nextTick 函数，只不过它的next不是js中的事件循环，而是useEffect;
 * 传入的函数会在下一次的useEffect中执行
 *
 * @override 返回值改为 [nextEffect, effects]
 */
export function useNextEffect(
  withEffects: true,
): [
  nextEffect: (effect: () => void, clearPrev?: boolean) => () => void,
  effects: Array<() => void>,
];
export function useNextEffect(withEffects = false) {
  const effectsRef = useRef<Array<() => void>>([]);

  useEffect(() => {
    const effects = effectsRef.current;
    if (!effects.length) return;

    effects.forEach((e) => e());
    effects.length = 0;
  });

  const nextEffect: (effect: () => void, clearPrev?: boolean) => () => void =
    useCallback((effect, clearPrev = false) => {
      const effects = effectsRef.current;
      clearPrev && (effects.length = 0);
      effects.push(effect);

      return () => {
        const index = effects.indexOf(effect);
        effects.splice(index, 1);
      };
    }, []);

  if (!withEffects) return nextEffect;
  return [nextEffect, effectsRef.current];
}
