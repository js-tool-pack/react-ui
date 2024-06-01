import type { ChildMap } from '../transition-group.types';
import { useLayoutEffect, useRef } from 'react';
import { applyTranslation } from '../utils';
import type { Key } from 'react';

type RectMap = Map<Key, DOMRect>;

export function useFlips(childMap: ChildMap, name: string): void {
  const prevChildMapRef = useRef(childMap);
  const prevRects = getChildRects(prevChildMapRef.current);

  useLayoutEffect((): void => {
    prevChildMapRef.current = childMap;
    if (!prevRects.size) return;
    let wrapperEl: HTMLElement | null = null;

    const moveClass = `${name}-move-active`;
    const nextRects = new Map<Key, DOMRect>();
    // 获取最新的样式
    childMap.forEach(({ ref: el }, key): void => {
      if (!el) return;
      // ⚠️注意：这里中断了原 transition 动画，如果要修复该问题，可从这里改
      // 但是不加的话，如果之前有 flips 动画会突然中断
      el.style.transition = 'none';
      nextRects.set(key, el.getBoundingClientRect());
      if (!prevRects.has(key)) prevRects.set(key, nextRects.get(key)!);
      el.style.transition = '';
    });

    const flips: Array<() => void> = [];
    // 计算之前样式与现在的样式的差，并设置样式
    childMap.forEach(({ ref: el }, key): void => {
      if (!el) return;
      wrapperEl = el.parentElement;
      // if (hasTransition(el, name)) return;
      if (!applyTranslation(el, prevRects.get(key)!, nextRects.get(key)!))
        return;
      flips.push((): void => {
        const { style: s } = el;
        el.classList.add(moveClass);
        el.addEventListener('transitionend', function cb(e): void {
          if (e.target !== el || !/transform$/.test(e.propertyName)) return;
          el.removeEventListener('transitionend', cb);
          el.classList.remove(moveClass);
        });
        s.transform = s.webkitTransform = s.transitionDuration = '';
      });
    });
    // 刷新
    if (wrapperEl !== null) void (wrapperEl as HTMLElement).offsetHeight;
    // 动画
    flips.forEach((f) => f());
  });
}

function getChildRects(childMap: ChildMap): RectMap {
  const rects: RectMap = new Map();
  childMap.forEach(({ ref: el }, key): void => {
    el && rects.set(key, el.getBoundingClientRect());
  });
  return rects;
}

// function hasTransition(el: HTMLElement, name: string): boolean {
//   const classes = ['-enter-active', '-leave-active'].map((i) => name + i);
//   return classes.some((i) => el.classList.contains(i));
// }
