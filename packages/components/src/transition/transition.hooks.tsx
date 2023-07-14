import { cloneElement, useEffect, useMemo, useRef } from 'react';
import { addTransition, getClasses, isSameEl } from './transition.utils';
import { LIFE_CIRCLE, STATUS } from './transition.enums';
import type { CB, El, Mode } from './transition.types';
import { getClassNames, nextTick } from '@tool-pack/basic';
import { useForceUpdate, useIsInitDep } from '@pkg/shared';

export function useDispatcher(
  mode: Mode,
  show: boolean | void,
  appear: boolean | null,
  children: El,
) {
  const forceUpdate = useForceUpdate();
  const isInitDep = useIsInitDep(children);
  const [prev, next] = useChildren(children);
  const showCacheRef = useRef<boolean | void>();
  const statusCacheRef = useRef<[STATUS, STATUS]>();
  const cbRef = useRef<CB>();

  const setVisible = (el: HTMLElement) => {
    const originVis = el.style.visibility;
    el.style.visibility = 'hidden';
    setTimeout(() => (el.style.visibility = originVis));
  };

  const createAfterHandler = (p = STATUS.none, n = STATUS.idle): CB => {
    return (el, status, lifeCircle) => {
      if (show && status === STATUS.show && LIFE_CIRCLE.ready === lifeCircle) {
        el.style.display = '';
      }
      if (status === STATUS.hide && LIFE_CIRCLE.after === lifeCircle) {
        setVisible(el);
      }
      if (LIFE_CIRCLE.after === lifeCircle) {
        statusCacheRef.current = [p, n];
        cbRef.current = undefined;
        forceUpdate();
      }
    };
  };

  let childs = [prev, next] as [El, El];

  const getStatusByShow = (): [STATUS, STATUS] => {
    let nextStatus: STATUS | undefined;
    if (isInitDep) {
      if (appear !== undefined) {
        switch (appear) {
          case null:
            nextStatus = show ? STATUS.idle : STATUS.none;
            break;
          case false:
            nextStatus = show ? STATUS.idle : STATUS.invisible;
            break;
          case true:
            nextStatus = show ? STATUS.show : STATUS.invisible;
            break;
        }
      } else {
        nextStatus = show ? STATUS.idle : STATUS.invisible;
      }
    } else if (show === showCacheRef.current) {
      nextStatus = show ? STATUS.idle : STATUS.invisible;
    }
    if (nextStatus !== undefined) return [STATUS.none, nextStatus];

    cbRef.current = createAfterHandler(
      STATUS.none,
      show ? STATUS.idle : STATUS.invisible,
    );
    return [STATUS.none, show ? STATUS.show : STATUS.hide];
  };
  const getStatusByMode = (): [STATUS, STATUS] => {
    switch (mode) {
      case 'out-in':
        cbRef.current = createAfterHandler(STATUS.none, STATUS.show);
        return [STATUS.hide, STATUS.none];
      case 'in-out':
        cbRef.current = (_, __, lifeCircle) => {
          if (LIFE_CIRCLE.after === lifeCircle) {
            cbRef.current = createAfterHandler();
            statusCacheRef.current = [STATUS.hide, STATUS.idle];
            forceUpdate();
          }
        };
        return [STATUS.idle, STATUS.show];
      default:
        cbRef.current = createAfterHandler();
        return [STATUS.hide, STATUS.show];
    }
  };

  const getStatus = (): [STATUS, STATUS] => {
    const c = statusCacheRef.current;
    if (show !== undefined) {
      childs = [undefined, next];
      return getStatusByShow();
    }
    if (isSameEl(prev, next)) {
      childs = [undefined, next];
      return [STATUS.none, STATUS.idle];
    }
    if (c) {
      const cc = [...c] as [STATUS, STATUS];
      // 直接设置为undefined会刷新dom失败，hide后也会显示dom
      // 需要异步才行
      // cache.current = undefined;
      nextTick(() => (statusCacheRef.current = undefined));
      return cc;
    }
    if (isInitDep && !appear) {
      return [STATUS.idle, STATUS.idle];
    }
    if ((prev && !next) || (!prev && next)) {
      cbRef.current = createAfterHandler();
      return [STATUS.hide, STATUS.show];
    }
    return getStatusByMode();
  };

  const status = getStatus();
  showCacheRef.current = show;
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
  status: STATUS,
  name: string,
  children?: El,
  innerCB?: CB,
  cb?: CB,
) {
  const elRef = useRef<HTMLElement | null>(null);

  const noTrans =
    ([STATUS.none, STATUS.idle, STATUS.invisible] as STATUS[]).includes(
      status,
    ) || !children;

  const classes = useMemo(
    () => (noTrans ? undefined : getClasses(name, status === STATUS.show)),
    [noTrans, name, status],
  )!;

  if (!children) elRef.current = null;

  useEffect(() => {
    const el = elRef.current;

    // console.log(from, 'status', STATUS[status], !!transRef.current);
    if (!el) return;

    innerCB?.(el, status, LIFE_CIRCLE.ready);
    cb?.(el, status, LIFE_CIRCLE.ready);

    if (noTrans) return;

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

  return (
    <>
      {cloneElement(children, {
        ref: elRef,
        className: getClassNames(children.props.className, {
          [classes?.fromClassName]: classes && status === STATUS.show,
        }),
        style: {
          ...children.props.style,
          display:
            STATUS.invisible === status
              ? 'none'
              : children.props.style?.display,
        },
      })}
    </>
  );
}
