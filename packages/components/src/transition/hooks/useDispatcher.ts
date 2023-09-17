import {
  useValueWithPrev,
  useForceUpdate,
  isSameReactEl,
  useIsChanged,
  useIsInitDep,
} from '@pkg/shared';
import { LIFE_CIRCLE, STATUS } from '~/transition/transition.enums';
import { Mode, CB, El } from '~/transition/transition.types';
import { useEffect, useRef } from 'react';

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
  const [next, prev] = useValueWithPrev(children);
  const statusCacheRef = useRef<[STATUS, STATUS]>();
  const cbRef = useRef<CB>();
  const prevLifeRef = useRef<LIFE_CIRCLE[]>([]);

  let childs = [prev, next] as [El, El];
  const status = getStatus();

  // ⚠️: 直接设置为undefined会刷新dom失败，hide后也会显示dom
  // 需要异步才行
  // statusCacheRef.current = undefined;
  // nextTick(() => (statusCacheRef.current = undefined));
  useEffect(() => (statusCacheRef.current = undefined));
  return [...childs, ...status, cbRef.current] as const;

  function createAfterHandler(p = STATUS.none, n = STATUS.idle): CB {
    return (_el, _status, lifeCircle) => {
      if ([LIFE_CIRCLE.expired, LIFE_CIRCLE.after].includes(lifeCircle)) {
        statusCacheRef.current = [p, n];
        cbRef.current = undefined;
        forceUpdate();
      }
      prevLifeRef.current.unshift(lifeCircle);
      prevLifeRef.current.length = 2;
    };
  }
  function getStatusByShow(): [STATUS, STATUS] {
    let nextStatus: undefined | STATUS;
    if (
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
    } else if (isInitShow) {
      switch (appear) {
        case null:
          nextStatus = show ? STATUS.idle : STATUS.none;
          break;
        case false:
          nextStatus = show ? STATUS.idle : STATUS.invisible;
          break;
        case true:
          nextStatus = show ? STATUS.show : STATUS.hide;
          cbRef.current = createAfterHandler(
            STATUS.none,
            show ? STATUS.idle : STATUS.invisible,
          );
          break;
      }
    }
    if (nextStatus !== undefined) return [STATUS.none, nextStatus];

    // 防止在严格模式下第二次渲染时直接变为下一个状态
    prevLifeRef.current = [];

    cbRef.current = createAfterHandler(
      STATUS.none,
      show ? STATUS.idle : STATUS.invisible,
    );
    return [STATUS.none, show ? STATUS.show : STATUS.hide];
  }
  function getStatusByMode(): [STATUS, STATUS] {
    switch (mode) {
      case 'out-in':
        // cbRef.current = createAfterHandler(STATUS.none, STATUS.show);
        cbRef.current = (_, __, lifeCircle) => {
          if (LIFE_CIRCLE.after === lifeCircle) {
            cbRef.current = createAfterHandler();
            statusCacheRef.current = [STATUS.none, STATUS.show];
            forceUpdate();
          }
        };
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
  }
  function getStatus(): [STATUS, STATUS] {
    const c = statusCacheRef.current;
    if (show !== undefined) {
      childs = [undefined, next];
      return getStatusByShow();
    }
    if (isSameReactEl(prev, next)) {
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
  }
}
