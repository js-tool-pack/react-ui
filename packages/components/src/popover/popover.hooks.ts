/*eslint no-case-declarations: "off"*/
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { PopoverProps } from './popover.types';
import { calcPlacement, calcPosition } from './popover.utils';
import { castArray, throttle } from '@tool-pack/basic';
import { collectScroller, calcDistanceWithParent } from '@tool-pack/dom';
import {
  getComponentClass,
  PLACEMENTS_12,
  type Placement_12,
  outerEventObserve,
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
} from 'rxjs';

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
  placement: Placement_12,
  refEl: React.RefObject<HTMLElement>,
  relEl: React.MutableRefObject<HTMLElement | undefined>,
  appendTo: Required<PopoverProps>['appendTo'],
  offset: number,
  getViewportEl?: PopoverProps['viewport'],
) {
  const _placement = useRef(placement);
  // const forceUpdate = useForceUpdate();

  const refreshPosition = useMemo(() => {
    const refreshPosition = (): void => {
      const ref = refEl.current;
      const balloon = relEl.current;
      if (!ref || !balloon || balloon.style.display === 'none') return;

      const viewportEl = appendTo?.() || getViewportEl?.() || ref;
      const containerEl =
        appendTo?.() || (ref.offsetParent as HTMLElement) || ref;

      const lastPlace = _placement.current;
      const place = calcPlacement(ref, balloon, lastPlace, viewportEl, offset);

      const distance: [number, number] =
        appendTo === null ? [0, 0] : calcDistanceWithParent(ref, containerEl);
      const { x, y } = calcPosition(ref, balloon, place, offset, distance);
      balloon.style.top = y + 'px';
      balloon.style.left = x + 'px';

      if (placement !== place || lastPlace !== place)
        replaceBalloonClass(balloon, place);

      _placement.current = place;
    };
    return throttle(() => refreshPosition(), 5, {
      leading: true,
      trailing: true,
    });
  }, [offset, placement, refEl, relEl]);

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
  disabled: boolean | void,
  visible: boolean | void,
  trigger: Exclude<PopoverProps['trigger'], undefined>,
  children: React.ReactElement,
  triggerElRef: React.RefObject<HTMLElement>,
  balloonElRef: React.MutableRefObject<HTMLElement | undefined>,
  refreshPosition: () => void,
  enterDelay: number,
  leaveDelay: number,
) {
  const [show, setShow] = useState(false);

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
            switchMap(() => of(toggle()).pipe(takeWhile((v) => v))),
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
    setShow(visible);
  }, [visible, disabled]);

  return show;

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
  function toggle(): boolean {
    let visible = false;
    setShow((v) => (visible = !v));
    return visible;
  }
}
