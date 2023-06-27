import React, { useRef, useMemo, RefObject, useLayoutEffect } from 'react';
import { LIFE_CIRCLE } from '../transition/transition.enums';
import { ChildStatus } from './transition-group.enums';
import { applyTranslation } from './transition-group.utils';
import type {
  CompKey,
  Child,
  TransitionGroupCB,
} from './transition-group.types';
import { useForceUpdate, useIsInitDep } from '@pkg/shared';
import { nextTick } from '@tool-pack/basic';
import { reflow } from '../transition/transition.utils';

export function useDispatcher(
  el: RefObject<HTMLElement>,
  name?: string,
  children?: React.ReactElement[],
  appear = false,
  on?: TransitionGroupCB,
) {
  const forceUpdate = useForceUpdate();
  const isInit = useIsInitDep(children);
  const keyMap = useKeyMap(children);
  const childList = useRef<Child[]>([]);
  const appearRef = useRef<boolean>(appear);
  const [rectMap, refreshRect] = useRectMap(el, childList);

  const runFlip = () => {
    if (!el.current?.children?.length) return;

    const children = el.current.children;
    const startHandlers: Array<() => void> = [];
    childList.current.forEach((child, index) => {
      if (child.status !== ChildStatus.move) return;
      const rect = rectMap.current.get(child.component.key!)!;
      const el = children[index] as HTMLElement;
      const moveClass = `${name}-move-active`;
      if (applyTranslation(el, rect)) {
        el.addEventListener('transitionend', function handler() {
          el.classList.remove(moveClass);
          el.removeEventListener('transitionend', handler);
          forceUpdate();
        });
        el.classList.add(moveClass);
        startHandlers.push(() => {
          el.style.transitionDuration = '';
          el.style.transform = '';
        });
      }
    });
    nextTick(() => startHandlers.forEach((h) => h()));
    reflow(el.current);
  };

  const updateDiff = () => {
    const originKeyMap = new Map<CompKey, { index: number; child: Child }>();

    const len = childList.current.length || 0;
    let isRemove = false;
    for (let i = len - 1; i >= 0; i--) {
      const item = childList.current[i];
      if (!item) continue;
      originKeyMap.set(item.component.key!, { index: i, child: item });
      if (!keyMap.has(item.component.key!)) {
        item.status = ChildStatus.leave;
        isRemove = true;
      } else {
        if (item.status === ChildStatus.idle) item.status = ChildStatus.move;
      }
    }

    const isShuffle = len === children?.length && !isRemove;
    children?.forEach((it, index) => {
      const find = originKeyMap.get(it.key!);
      if (!find) {
        const child: Child = {
          component: it,
          status: isInit && !appear ? ChildStatus.idle : ChildStatus.enter,
          on(el, status, lifeCircle) {
            on?.(it.key!, status, lifeCircle);
            if (child.status === ChildStatus.enter) {
              if (lifeCircle === LIFE_CIRCLE.before) {
                forceUpdate();
                runFlip();
                return;
              }
              if (lifeCircle === LIFE_CIRCLE.after) {
                child.status = ChildStatus.idle;
              }
              return;
            }
            if (child.status === ChildStatus.leave) {
              if (lifeCircle === LIFE_CIRCLE.running) {
                runFlip();
                return;
              }
              if (lifeCircle === LIFE_CIRCLE.after) {
                el.style.display = 'none';
                const index = childList.current.indexOf(child);
                childList.current.splice(index, 1);
                forceUpdate();
              }
            }
          },
        };
        childList.current.push(child);
      } else {
        if (isShuffle && index !== find.index) {
          const curChild = childList.current[index];
          if (curChild) {
            [
              childList.current[index] as unknown,
              childList.current[find.index],
            ] = [childList.current[find.index], curChild];
            originKeyMap.get(curChild.component.key!)!.index = find.index;
          }
          find.index = index;
        }
      }
    });

    if (isShuffle) {
      nextTick(() => {
        forceUpdate();
        runFlip();
      });
    }
  };

  useLayoutEffect(() => {
    refreshRect();
    updateDiff();
    appearRef.current = !isInit || appear;
    forceUpdate();
  }, [children]);

  return [childList.current, appearRef.current] as const;
}

export function useKeyMap(children?: React.ReactElement[]) {
  return useMemo(() => {
    return (children || []).reduce((map, cur) => {
      if (!cur.key) throw new Error('传入的html元素必须有key');
      map.set(cur.key, cur);
      return map;
    }, new Map<CompKey, React.ReactElement>());
  }, [children]);
}

export function useRectMap(
  el: RefObject<HTMLElement>,
  childList: RefObject<Child[]>,
) {
  const rectMap = useRef(new Map<CompKey, DOMRect>());

  const refreshRect = () => {
    if (!el) return;
    rectMap.current.clear();
    childList.current?.forEach((child, index) => {
      const node = el.current?.children[index];
      if (!node) return;
      const rect = node.getBoundingClientRect();
      rectMap.current.set(child.component.key!, rect);
    });
  };

  return [rectMap, refreshRect] as const;
}
