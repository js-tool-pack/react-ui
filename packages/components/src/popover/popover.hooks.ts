/*eslint no-case-declarations: "off"*/
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Placement_12, PopoverProps } from './popover.types';
import { calcPlacement, calcPosition } from './popover.utils';
import { castArray, throttle } from '@tool-pack/basic';
import {
  addOuterEventListener,
  collectScroller,
  isChildHTMLElement,
} from '@tool-pack/dom';
import { getComponentClass, PLACEMENTS_12 } from '@pkg/shared';

export function useResizerObserver(
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
) {
  const _placement = useRef(placement);
  // const forceUpdate = useForceUpdate();

  const refreshPosition = useMemo(() => {
    const refreshPosition = (): void => {
      const ref = refEl.current;
      const balloon = relEl.current;
      if (!ref || !balloon || balloon.style.display === 'none') return;
      const containerEl = appendTo();

      const lastPlace = _placement.current;
      const place = calcPlacement(ref, balloon, lastPlace, containerEl, offset);
      const { x, y } = calcPosition(ref, balloon, place, containerEl, offset);
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
  }, [appendTo, offset, placement, refEl, relEl]);

  return [
    refreshPosition,
    () => {
      _placement.current = placement;
    },
  ] as const;
}

function hoverTriggerHandler(
  el: HTMLElement,
  relEl: React.MutableRefObject<HTMLElement | undefined>,
  enterHandler: () => void,
  leaveHandler: () => void,
) {
  let timer: ReturnType<typeof setTimeout>;
  const _leaveHandler = () => {
    clearTimeout(timer);
    timer = setTimeout(leaveHandler, 100);
  };

  const balloonEnterHandler = () => {
    clearTimeout(timer);
  };

  const _enterHandler = () => {
    clearTimeout(timer);
    enterHandler();
    relEl.current?.addEventListener('mouseenter', balloonEnterHandler);
    relEl.current?.addEventListener('mouseleave', _leaveHandler);
  };

  el.addEventListener('mouseenter', _enterHandler);
  el.addEventListener('mouseleave', _leaveHandler);

  return () => {
    el.removeEventListener('mouseenter', _enterHandler);
    el.removeEventListener('mouseleave', _leaveHandler);
    relEl.current?.removeEventListener('mouseenter', balloonEnterHandler);
    relEl.current?.removeEventListener('mouseleave', _leaveHandler);
  };
}

export function useShowController(
  disabled: boolean | void,
  visible: boolean | void,
  trigger: Required<PopoverProps>['trigger'],
  children: React.ReactElement,
  refEl: React.RefObject<HTMLElement>,
  relEl: React.MutableRefObject<HTMLElement | undefined>,
  refreshPosition: () => void,
) {
  const [show, setShow] = useState(false);

  // 事件触发启动
  useEffect(() => {
    const el = refEl.current;
    if (disabled) {
      setShow(false);
    }
    if (!el || typeof visible === 'boolean' || disabled) return;

    const triggers = [...new Set(castArray(trigger))];

    const enterHandler = (/*e: MouseEvent*/) => {
      setShow(true);
    };

    const leaveHandler = () => {
      setShow(false);
    };

    const cancellers: Array<() => void> = triggers.map((t) => {
      switch (t) {
        case 'hover':
          return hoverTriggerHandler(el, relEl, enterHandler, leaveHandler);
        case 'click':
          let canceler: void | (() => void);
          const handler = () => {
            if (canceler) return;
            enterHandler();
            const removeOuter = addOuterEventListener(
              el,
              'click',
              (e) => {
                const target = e.target as HTMLElement;
                const parent = relEl.current as HTMLElement;

                if (!target || isChildHTMLElement(target, parent)) return;

                leaveHandler();
                canceler?.();
              },
              true,
            );
            canceler = () => {
              removeOuter();
              canceler = undefined;
            };
          };
          el.addEventListener('click', handler);
          return () => {
            el.removeEventListener('click', handler);
            canceler?.();
          };
        case 'focus':
          el.addEventListener('focus', enterHandler);
          el.addEventListener('blur', leaveHandler);
          return () => {
            el.removeEventListener('focus', enterHandler);
            el.removeEventListener('blur', leaveHandler);
          };
      }
    });

    return () => {
      cancellers.forEach((i) => i());
      cancellers.length = 0;
    };
  }, [children, trigger, disabled, visible]);

  const cancelListRef = useRef<Array<() => void>>([]);

  const unwatchScroller = () => {
    cancelListRef.current.forEach((i) => i());
    cancelListRef.current.length = 0;
  };

  // show为true时监听滚动
  useEffect(() => {
    const el = refEl.current;
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
}
