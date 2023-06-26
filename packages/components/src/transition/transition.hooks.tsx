import { cloneElement, useCallback, useEffect, useMemo, useRef } from 'react';
import { addTransition, getClasses, isSameEl } from './transition.utils';
import { LIFE_CIRCLE, STATUS } from './transition.enums';
import type { CB, El, Mode } from './transition.types';
import { getClassNames, nextTick } from '@tool-pack/basic';
import { useForceUpdate, useIsInitDep } from '@pkg/shared';

export function useDispatcher(
  mode: Mode,
  // show?: boolean,
  appear: boolean,
  children: El,
) {
  const forceUpdate = useForceUpdate();
  const isInitDep = useIsInitDep(children);
  const [prev, next] = useChildren(children);

  const setVisible = useCallback((el: HTMLElement) => {
    const originVis = el.style.visibility;
    el.style.visibility = 'hidden';
    setTimeout(() => (el.style.visibility = originVis));
  }, []);

  const createAfterHandler = (p = STATUS.none, n = STATUS.idle): CB => {
    return (el, status, lifeCircle) => {
      if (status === STATUS.hide && LIFE_CIRCLE.after === lifeCircle) {
        setVisible(el);
      }
      if (LIFE_CIRCLE.after === lifeCircle) {
        cache.current = [p, n];
        cbRef.current = undefined;
        forceUpdate();
      }
    };
  };

  const cache = useRef<[STATUS, STATUS]>();
  const cbRef = useRef<CB>();

  let childs = [prev, next] as [El, El];

  const res = (): [STATUS, STATUS] => {
    const c = cache.current;
    if (isSameEl(prev, next)) {
      childs = [undefined, next];
      return [STATUS.none, STATUS.idle];
    }
    if (c) {
      const cc = [...c] as [STATUS, STATUS];
      // 直接设置为undefined会刷新dom失败，hide后也会显示dom
      // 需要异步才行
      // cache.current = undefined;
      nextTick(() => (cache.current = undefined));
      return cc;
    }
    if (isInitDep && !appear) {
      return [STATUS.idle, STATUS.idle];
    }
    if ((prev && !next) || (!prev && next)) {
      cbRef.current = createAfterHandler();
      return [STATUS.hide, STATUS.show];
    }
    switch (mode) {
      case 'out-in':
        cbRef.current = createAfterHandler(STATUS.none, STATUS.show);
        return [STATUS.hide, STATUS.none];
      case 'in-out':
        cbRef.current = (_, __, lifeCircle) => {
          if (LIFE_CIRCLE.after === lifeCircle) {
            cbRef.current = createAfterHandler();
            cache.current = [STATUS.hide, STATUS.idle];
            forceUpdate();
          }
        };
        return [STATUS.idle, STATUS.show];
      default:
        cbRef.current = createAfterHandler();
        return [STATUS.hide, STATUS.show];
    }
  };

  const status = res();
  return [...childs, ...status, cbRef.current] as const;
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
  innerCB?: CB,
  cb?: CB,
) {
  const elRef = useRef<HTMLElement>(null);

  const noTrans = [STATUS.none, STATUS.idle].includes(status) || !children;

  const classes = useMemo(
    () => (noTrans ? undefined : getClasses(name, status === STATUS.show)),
    [noTrans, name, status],
  )!;

  useEffect(() => {
    const el = elRef.current;
    // console.log(from, 'status', STATUS[status], !!transRef.current);
    if (!el || noTrans) return;
    const trans = addTransition({
      el,
      classes,
      on: (lifeCircle) => {
        innerCB?.(el, status, lifeCircle);
        cb?.(el, status, lifeCircle);
      },
    });
    trans.start();
    return () => {
      trans.clearListener();
      // 如果把active的class也清理掉就跟vue的差不多了，不过那种动画会从头开始
      // trans.removeClass();
    };
  }, [children, status, classes, cb]);

  if (!children || STATUS.none === status || typeof children === 'boolean')
    return;
  if (status === STATUS.idle) return children;

  return (
    <>
      {cloneElement(children, {
        ref: elRef,
        className: getClassNames(children.props.className, {
          [classes.fromClassName]: status === STATUS.show,
        }),
      })}
    </>
  );
}
