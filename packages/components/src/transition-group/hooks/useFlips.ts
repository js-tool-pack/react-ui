import type { ChildMap } from '../transition-group.types';
import React, { useLayoutEffect, useRef } from 'react';
import { applyTranslation } from '../utils';

type RectMap = Map<React.Key, DOMRect>;

export function useFlips(
  wrapperRef: React.MutableRefObject<HTMLElement | null>,
  childMap: ChildMap,
  name: string,
): void {
  const prevChildMapRef = useRef(childMap);
  const prevRects = getChildRects(wrapperRef.current, prevChildMapRef.current);

  useLayoutEffect(() => {
    prevChildMapRef.current = childMap;
    const wrapperEl = wrapperRef.current;
    if (!wrapperEl || !prevRects) return;

    const moveClass = `${name}-move-active`;
    const { children } = wrapperEl;
    const nextRects = new Map<React.Key, DOMRect>();
    // 获取最新的样式
    forEachEl(children, childMap, (el, key) => {
      el.style.transition = 'none';
      nextRects.set(key, el.getBoundingClientRect());
      if (!prevRects.has(key)) prevRects.set(key, nextRects.get(key)!);
      el.style.transition = '';
    });

    const flips: Array<() => void> = [];
    // 计算之前样式与现在的样式的差，并设置样式
    forEachEl(children, childMap, (el, key) => {
      // if (hasTransition(el, name)) return;
      if (!applyTranslation(el, prevRects.get(key)!, nextRects.get(key)!))
        return;
      flips.push(() => {
        const { style: s } = el;
        el.classList.add(moveClass);
        el.addEventListener('transitionend', function cb(e) {
          if (e.target !== el || !/transform$/.test(e.propertyName)) return;
          el.removeEventListener('transitionend', cb);
          el.classList.remove(moveClass);
        });
        s.transform = s.webkitTransform = s.transitionDuration = '';
      });
    });
    // 刷新
    void wrapperEl.offsetHeight;
    // 动画
    flips.forEach((t) => t());
  });
}

function getChildRects(
  wrapperEl: HTMLElement | undefined | null,
  childMap: ChildMap,
): RectMap | void {
  if (!wrapperEl) return;
  const rects: RectMap = new Map();
  forEachEl(wrapperEl.children, childMap, (el, key) =>
    rects.set(key, el.getBoundingClientRect()),
  );
  return rects;
}

function forEachEl(
  els: NodeListOf<HTMLElement> | HTMLCollection | HTMLElement[],
  childMap: ChildMap,
  cb: (el: HTMLElement, key: React.Key) => void,
) {
  let i = 0;
  childMap.forEach((_, key) => {
    const el = els[i++];
    if (!el) return;
    cb(el as HTMLElement, key);
  });
}

// function hasTransition(el: HTMLElement, name: string): boolean {
//   const classes = ['-enter-active', '-leave-active'].map((i) => name + i);
//   return classes.some((i) => el.classList.contains(i));
// }
