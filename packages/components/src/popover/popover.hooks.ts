/*eslint no-case-declarations: "off"*/
import { castArray, emptyFn, throttle } from '@tool-pack/basic';
import { calcPlacement, calcPosition } from './popover.utils';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { collectScroller, calcDistanceWithParent } from '@tool-pack/dom';
import {
  getComponentClass,
  PLACEMENTS_12,
  type Placement_12,
  outerEventObserve,
  useNextEffect,
} from '@pkg/shared';
import {
  delay,
  fromEvent,
  of,
  switchMap,
  take,
  takeUntil,
  tap,
  merge,
  takeWhile,
  defer,
  retry,
  AsyncSubject,
} from 'rxjs';
import type { PopoverRequiredPartProps } from './Popover';

export function useResizeObserver(
  enable: boolean,
  elRef: React.MutableRefObject<HTMLElement | undefined>,
  callback: () => void,
) {
  useEffect(() => {
    if (!elRef.current || !enable) return;
    const observer = new ResizeObserver(callback);
    observer.observe(elRef.current);
    return () => observer.disconnect();
  }, [callback, elRef, enable]);
}

const balloonClassName = getComponentClass('word-balloon');
const classNames = PLACEMENTS_12.map((p) => balloonClassName + '--' + p);
function replaceBalloonClass(balloon: HTMLElement, placement: Placement_12) {
  balloon.classList.remove(...classNames);
  balloon.classList.add(balloonClassName + '--' + placement);
}

export function usePosition(
  triggerElRef: React.RefObject<HTMLElement>,
  balloonElRef: React.MutableRefObject<HTMLElement | undefined>,
  {
    offset,
    placement,
    viewport: getViewportEl,
    appendTo,
    widthByTrigger,
  }: Pick<
    PopoverRequiredPartProps,
    'offset' | 'placement' | 'viewport' | 'appendTo' | 'widthByTrigger'
  >,
) {
  const _placement = useRef(placement);
  // const forceUpdate = useForceUpdate();

  const refreshPosition = useMemo(() => {
    const refreshPosition = (): void => {
      const triggerEl = triggerElRef.current;
      const balloonEl = balloonElRef.current;
      if (!triggerEl || !balloonEl || balloonEl.style.display === 'none')
        return;

      const viewportEl = appendTo?.() || getViewportEl?.() || triggerEl;
      const containerEl =
        appendTo?.() || (triggerEl.offsetParent as HTMLElement) || triggerEl;

      // 窗体宽度跟触发元素一致
      if (widthByTrigger) {
        balloonEl.style.width = triggerEl.offsetWidth + 'px';
        void balloonEl.offsetWidth;
      }

      const lastPlace = _placement.current;
      const place = calcPlacement(
        triggerEl,
        balloonEl,
        lastPlace,
        viewportEl,
        offset,
      );

      const distance: [number, number] =
        appendTo === null
          ? [0, 0]
          : calcDistanceWithParent(triggerEl, containerEl);
      const { x, y } = calcPosition(
        triggerEl,
        balloonEl,
        place,
        offset,
        distance,
      );
      balloonEl.style.top = y + 'px';
      balloonEl.style.left = x + 'px';

      if (placement !== place || lastPlace !== place)
        replaceBalloonClass(balloonEl, place);

      _placement.current = place;
    };
    return throttle(() => refreshPosition(), 5, {
      leading: true,
      trailing: true,
    });
  }, [offset, placement, triggerElRef, balloonElRef, widthByTrigger]);

  return [
    refreshPosition,
    () => {
      _placement.current = placement;
    },
  ] as const;
}

function hoverTriggerHandler(
  triggerEl: HTMLElement,
  balloonElRef: React.MutableRefObject<HTMLElement | undefined>,
  open: () => void,
  close: () => void,
  enterDelay: number,
  leaveDelay: number,
  show: boolean,
) {
  const triggerEnterEvent = fromEvent(triggerEl, 'mouseenter');
  const triggerMoveEvent = fromEvent(triggerEl, 'mousemove');
  const triggerLeaveEvent = fromEvent(triggerEl, 'mouseleave');

  // setShow(true) 之后是异步显示窗体的，此时无法获取窗体dom，所以需要延时一下
  const balloonLeaveEvent = defer(() =>
    fromEvent(balloonElRef.current!, 'mouseleave'),
  ).pipe(retry({ count: 5, delay: 2 }));

  const leaveEvent = merge(triggerLeaveEvent, balloonLeaveEvent)
    .pipe(
      switchMap(() =>
        of(null).pipe(
          delay(leaveDelay),
          takeUntil(triggerMoveEvent),
          takeUntil(
            defer(() => fromEvent(balloonElRef.current!, 'mouseenter')),
          ),
        ),
      ),
      takeUntil(triggerEnterEvent),
      take(1),
    )
    .pipe(tap(close));

  const enterEvent = triggerEnterEvent.pipe(
    switchMap(() =>
      enterDelay
        ? of(null).pipe(delay(enterDelay), takeUntil(triggerLeaveEvent))
        : of(null),
    ),
    tap(open),
    switchMap(() => leaveEvent),
  );

  const sub = (show ? merge(leaveEvent, enterEvent) : enterEvent).subscribe();
  return sub.unsubscribe.bind(sub);
}

export function useShowController(
  triggerElRef: React.RefObject<HTMLElement>,
  balloonElRef: React.MutableRefObject<HTMLElement | undefined>,
  refreshPosition: () => void,
  {
    delay: enterDelay,
    onVisibleChange,
    leaveDelay,
    children,
    disabled,
    visible,
    trigger,
  }: Pick<
    PopoverRequiredPartProps,
    | 'onVisibleChange'
    | 'leaveDelay'
    | 'children'
    | 'disabled'
    | 'trigger'
    | 'visible'
    | 'delay'
  >,
) {
  const [show, _setShow] = useState(false);
  const nextEffect = useNextEffect();

  // 事件触发启动
  useEffect(() => {
    const el = triggerElRef.current;
    if (disabled) close();
    if (!el || typeof visible === 'boolean' || disabled) return;

    const triggers = [...new Set(castArray(trigger))];

    const cancellers: Array<() => void> = triggers.map((t) => {
      switch (t) {
        case 'hover':
          return hoverTriggerHandler(
            el,
            balloonElRef,
            open,
            close,
            enterDelay,
            leaveDelay,
            show,
          );
        case 'click':
          const outerEvent = outerEventObserve(
            () => [el, balloonElRef.current],
            'click',
          ).pipe(
            tap(close),
            takeUntil(fromEvent(el, 'click', { capture: true })),
            take(1),
          );
          const queueEvent = fromEvent<MouseEvent>(el, 'click').pipe(
            switchMap(() => toggle().pipe(takeWhile((v) => v))),
            switchMap(() => outerEvent),
          );
          // 当弹窗已经打开时(例如Button loading时会刷新该effect)，添加点击和外部点击订阅
          // 不然只有点击触发器才能外部点击订阅，否则如果很多popover的话会有一堆外部点击订阅
          const clickSub = (
            show ? merge(outerEvent, queueEvent) : queueEvent
          ).subscribe();
          return clickSub.unsubscribe.bind(clickSub);
        case 'focus':
          const focusSub = merge(
            fromEvent(el, 'focus').pipe(tap(open)),
            fromEvent(el, 'blur').pipe(tap(close)),
          ).subscribe();
          return focusSub.unsubscribe.bind(focusSub);
        case 'contextmenu':
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          return () => {};
      }
    });

    return () => {
      cancellers.forEach((i) => i());
      cancellers.length = 0;
    };
  }, [children, trigger, disabled, visible]);

  const cancelListRef = useRef<Array<() => void>>([]);

  // show为true时监听滚动
  useEffect(() => {
    const el = triggerElRef.current;
    if (!el || !show) return;

    const scroller: Array<HTMLElement | Window> = collectScroller(el);
    scroller.push(window);
    const watchScroller = () =>
      (cancelListRef.current = scroller.map((s) => {
        const handler = () => {
          refreshPosition();
        };
        s.addEventListener('scroll', handler);
        return () => s.removeEventListener('scroll', handler);
      }));

    if (show) watchScroller();
    else unwatchScroller();

    return unwatchScroller;
  }, [show]);

  // visible同步show
  useEffect(() => {
    if (visible === undefined || disabled) return;
    _setShow(visible);
  }, [visible, disabled]);

  return show;

  function setShow(value: boolean | ((prevValue: boolean) => boolean)): void {
    const onChange: Exclude<typeof onVisibleChange, undefined> = onVisibleChange
      ? (next) => nextEffect(() => onVisibleChange(next), true)
      : emptyFn;

    _setShow((prev) => {
      const next = typeof value === 'function' ? value(prev) : value;
      // visible 同步 show 时不走 onVisibleChange
      next !== prev && onChange(next);
      return next;
    });
  }
  function unwatchScroller(): void {
    cancelListRef.current.forEach((i) => i());
    cancelListRef.current.length = 0;
  }
  function open(/*e: MouseEvent*/): void {
    setShow(true);
  }
  function close(): void {
    setShow(false);
  }
  function toggle(): AsyncSubject<boolean> {
    // 因为 hook 设置值传的是函数的话，并不一定是同步执行的，有可能是异步的(猜是覆盖上一次设置的值但未刷新时)，
    // 如果是同步的那么用Subject后来的subscribe是订阅不到的，此时就需要 AsyncSubject 了。

    // BehaviorSubject 也能发送最新值给后订阅者，但是 complete 后继续订阅就没有作用了。
    // ReplaySubject 也能发送最新值给后订阅者，并可重复一组特定大小的值，而且 complete 后仍然有作用，但是有点杀鸡用牛刀了。
    // AsyncSubject 仅发送 complete 前的最终值给订阅者，前面多少次 next 都无用，且 complete 后继续订阅仍然有效，是最符合的。
    const as$ = new AsyncSubject<boolean>();
    setShow((prev) => {
      const next = !prev;
      as$.next(next);
      as$.complete();
      return next;
    });
    return as$;
  }
}
