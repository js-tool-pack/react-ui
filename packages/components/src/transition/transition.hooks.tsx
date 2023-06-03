import { cloneElement, useCallback, useEffect, useMemo, useRef } from 'react';
import { addTransition, getClasses } from './transition.utils';
import { LIFE_CIRCLE, STATUS } from './transition.enums';
import type { CB, El, Mode } from './transition.types';
import { useForceUpdate, useIsInitDep } from '@pkg/shared';

export function useDispatcher(
  mode: Mode,
  // show?: boolean,
  appear: boolean,
  children: El,
  cb?: CB,
) {
  const forceUpdate = useForceUpdate();
  const cbRef = useRef<CB | void>();
  const isInitDep = useIsInitDep(children);

  const [prev, next] = useChildren(children);
  const prevRef = useRef<El>();
  const nextRef = useRef<El>();
  const prevStatusRef = useRef<STATUS>(STATUS.none);
  const nextStatusRef = useRef<STATUS>(STATUS.none);

  const setChild = useCallback((p?: El, n?: El) => {
    prevRef.current = p;
    nextRef.current = n;
    // forceUpdate();
  }, []);
  const setStatus = useCallback((p: STATUS, n: STATUS) => {
    prevStatusRef.current = p;
    nextStatusRef.current = n;
    forceUpdate();
  }, []);
  const setVisible = useCallback((el: HTMLElement) => {
    const originVis = el.style.visibility;
    el.style.visibility = 'hidden';
    setTimeout(() => (el.style.visibility = originVis));
  }, []);
  const createAfterHandler = useCallback(
    (p = STATUS.none, n = STATUS.idle) => {
      return ((el, status, lifeCircle) => {
        cb?.(el, status, lifeCircle);
        if (status === STATUS.hide && LIFE_CIRCLE.after === lifeCircle) {
          setVisible(el);
          setStatus(p, n);
          cbRef.current = undefined;
        }
      }) as CB;
    },
    [cb, setStatus, setVisible],
  );

  useEffect(() => {
    setChild(prev, next);

    if (isInitDep && !appear) {
      setStatus(STATUS.idle, STATUS.idle);
      return;
    }

    if ((prev && !next) || (!prev && next)) {
      setStatus(STATUS.hide, STATUS.show);
      cbRef.current = createAfterHandler();
    } else {
      switch (mode) {
        case 'out-in':
          setStatus(STATUS.hide, STATUS.none);
          cbRef.current = createAfterHandler(STATUS.none, STATUS.show);
          break;
        case 'in-out':
          setStatus(STATUS.idle, STATUS.show);
          cbRef.current = (_, __, lifeCircle) => {
            if (LIFE_CIRCLE.after === lifeCircle) {
              setStatus(STATUS.hide, STATUS.idle);
              cbRef.current = createAfterHandler();
            }
          };
          break;
        default:
          setStatus(STATUS.hide, STATUS.show);
          cbRef.current = createAfterHandler();
          break;
      }
    }
    return () => {
      setStatus(STATUS.none, STATUS.none);
      cbRef.current = undefined;
    };
  }, [prev, next]);

  return [
    prevRef.current,
    nextRef.current,
    prevStatusRef.current,
    nextStatusRef.current,
    cbRef.current,
  ] as const;
}

export function useChildren<T extends El[] | El>(children: T) {
  const prev = useRef<T>();
  const memo = useMemo<[T | void, T | void]>(
    () => [prev.current, children],
    [children],
  );
  useEffect(() => {
    prev.current = children;
  }, [children]);
  return memo;
}

export function useTransition(
  // from: string,
  status: STATUS,
  name: string,
  children?: El,
  cb?: void | CB,
) {
  const elRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = elRef.current;
    // console.log(from, 'status', STATUS[status], !!transRef.current);
    if (!children || !el || status === STATUS.none) return;
    // console.log(from, 'status', STATUS[status], !!transRef.current);

    const classes = getClasses(name, status === STATUS.show);

    const trans = addTransition({
      el,
      classes,
      on: (lifeCircle) => {
        // console.log('[life circle]:', LIFE_CIRCLE[type]);
        cb?.(el, status, lifeCircle);
      },
    });

    el.style.visibility = '';
    trans.start();
    return () => {
      trans.clearListener();
      // 如果把active的class也清理掉就跟vue的差不多了，不过那种动画会从头开始
      trans.removeClass();
    };
  }, [children, status, name, elRef]);

  if (!children || STATUS.none === status) return;
  if (status === STATUS.idle) return children;
  return <>{cloneElement(children, { ref: elRef })}</>;
}
