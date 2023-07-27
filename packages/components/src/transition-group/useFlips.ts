import React, { useLayoutEffect } from 'react';
import { applyTranslation } from './transition-group.utils';

export function useFlips(
  wrapperRef: React.MutableRefObject<HTMLElement | undefined>,
  name: string,
) {
  const prevRects = getChildRects(wrapperRef.current);

  useLayoutEffect(() => {
    const wrapperEl = wrapperRef.current;
    if (!wrapperEl || !prevRects) return;

    const moveClass = `${name}-move-active`;
    const { children } = wrapperEl;
    const nextRects: Record<string, DOMRect> = {};
    // 获取最新的样式
    forEachEl(children, (el, key) => {
      el.style.transition = 'none';
      nextRects[key] = el.getBoundingClientRect();
      if (!prevRects[key]) prevRects[key] = nextRects[key]!;
      el.style.transition = '';
    });

    const flips: Array<() => void> = [];
    // 计算之前样式与现在的样式的差，并设置样式
    forEachEl(children, (el, key) => {
      // if (hasTransition(el, name)) return;
      if (!applyTranslation(el, prevRects[key]!, nextRects[key]!)) return;
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
  wrapperEl: HTMLElement | undefined,
): Record<React.Key, DOMRect> | void {
  if (!wrapperEl) return;
  const rects: Record<React.Key, DOMRect> = Object.create(null);
  forEachEl(
    wrapperEl.children,
    (el, key) => (rects[key] = el.getBoundingClientRect()),
  );
  return rects;
}

function forEachEl(
  els: HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollection,
  cb: (el: HTMLElement, key: string) => void,
) {
  const len = els.length;
  for (let i = 0; i < len; i++) {
    const el = els[i] as HTMLElement | undefined;
    if (!el) continue;
    const key = el.getAttribute('data-key');
    if (!key) continue;
    cb(el, key);
  }
}

// function hasTransition(el: HTMLElement, name: string): boolean {
//   const classes = ['-enter-active', '-leave-active'].map((i) => name + i);
//   return classes.some((i) => el.classList.contains(i));
// }
