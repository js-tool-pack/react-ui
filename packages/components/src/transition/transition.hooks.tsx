import React, { cloneElement, useEffect, useMemo, useRef } from 'react';
import { addTransition, getClasses, isSameEl } from './transition.utils';
import { LIFE_CIRCLE, STATUS } from './transition.enums';
import type { CB, El, Mode, TransitionProps } from './transition.types';
import { getClassNames, nextTick } from '@tool-pack/basic';
import {
  getComponentClass,
  useForceUpdate,
  useForwardRef,
  useIsChanged,
  useIsInitDep,
} from '@pkg/shared';

const rootClass = getComponentClass('transition');

export function useDispatcher(
  mode: Mode,
  show: boolean | void,
  appear: boolean | null,
  children: El,
) {
  const forceUpdate = useForceUpdate();
  const isInitDep = useIsInitDep(children);
  const isInitShow = useIsInitDep(show);
  const [isShowChanged] = useIsChanged(show);
  const [prev, next] = useChildren(children);
  const statusCacheRef = useRef<[STATUS, STATUS]>();
  const cbRef = useRef<CB>();
  const prevLifeRef = useRef<LIFE_CIRCLE[]>([]);

  const createAfterHandler = (p = STATUS.none, n = STATUS.idle): CB => {
    return (_el, _status, lifeCircle) => {
      if ([LIFE_CIRCLE.after, LIFE_CIRCLE.expired].includes(lifeCircle)) {
        statusCacheRef.current = [p, n];
        cbRef.current = undefined;
        forceUpdate();
      }
      prevLifeRef.current.unshift(lifeCircle);
      prevLifeRef.current.length = 2;
    };
  };

  let childs = [prev, next] as [El, El];

  const getStatusByShow = (): [STATUS, STATUS] => {
    let nextStatus: STATUS | undefined;
    if (isInitShow) {
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
    } else if (
      !isShowChanged &&
      (prevLifeRef.current[1] === LIFE_CIRCLE.start ||
        prevLifeRef.current[0] === LIFE_CIRCLE.expired)
    ) {
      // 这里产出 idle 和 invisible，且没有下一步操作
      // 判断是否正常的事件，这里只有after才能进来，但是有些交叉的after的前面并不是start
      // 奇怪的问题，不过只会在频繁切换show时出现，如果是不正常的事件那就重新再启动动画
      // prevLifeRef.current[1] === LIFE_CIRCLE.start
      if (statusCacheRef.current) {
        nextStatus = statusCacheRef.current[1];
      } else {
        nextStatus = show ? STATUS.idle : STATUS.invisible;
      }
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
    if (c) return c;
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

  // ⚠️: 直接设置为undefined会刷新dom失败，hide后也会显示dom
  // 需要异步才行
  // statusCacheRef.current = undefined;
  nextTick(() => (statusCacheRef.current = undefined));
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
  { attrs = {} }: Partial<TransitionProps> = {},
) {
  const elRef = useForwardRef(
    (children as React.RefAttributes<unknown>)?.ref,
  ) as React.MutableRefObject<HTMLElement | null>;

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

    innerCB?.(el, status, LIFE_CIRCLE.before);
    cb?.(el, status, LIFE_CIRCLE.before);

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
    };
  }, [children, status, classes, cb]);

  if (!children || STATUS.none === status || typeof children === 'boolean')
    return;

  const style = {
    ...children.props.attrs?.style,
    ...children.props.style,
    ...attrs.style,
  };

  const className = getClassNames(
    children.props.className,
    children.props.attrs?.className,
    attrs.className,
    {
      [classes?.from]: classes && status === STATUS.show,
      [`${rootClass}--invisible`]: STATUS.invisible === status,
    },
  );

  const props = {
    ...attrs,
    ref: elRef,
    className,
    style,
    attrs: children.props.attrs,
  } as React.HTMLAttributes<HTMLElement> &
    React.DOMAttributes<HTMLElement> & {
      attrs: React.HTMLAttributes<HTMLElement>;
    };

  if (typeof children.props.attrs === 'object') {
    props.attrs = { ...children.props.attrs, className, style };
  } else {
    props.className = className;
    props.style = style;
  }

  return cloneElement(children, props);
}
