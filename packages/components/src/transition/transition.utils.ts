import React from 'react';
import type { CB } from './transition.types';
import { LIFE_CIRCLE, STATUS } from './transition.enums';

export function getClasses(name: string, show: boolean) {
  const el = show ? 'enter' : 'leave';
  const nameEl = `${name}-${el}`;

  return {
    active: `${nameEl}-active`,
    from: `${nameEl}-from`,
    to: `${nameEl}-to`,
  };
}
export function addTransition({
  el,
  on,
  classes,
}: {
  el: HTMLElement;
  on: (lifeCircle: LIFE_CIRCLE) => void;
  classes: ReturnType<typeof getClasses>;
}) {
  const _classes = { ...classes };

  const handlers = {
    start: (e: TransitionEvent) => {
      if (e.target !== e.currentTarget) return;
      el.removeEventListener('transitionstart', handlers.start);
      on(LIFE_CIRCLE.start);
    },
    cancel(e: TransitionEvent) {
      if (e.target !== e.currentTarget) return;
      el.removeEventListener('transitioncancel', handlers.cancel);
      on(LIFE_CIRCLE.cancel);
    },
    end(e: TransitionEvent) {
      if (e.target !== e.currentTarget) return;
      clearListener();
      on(LIFE_CIRCLE.after);
    },
  };
  const addListener = () => {
    // console.log('addListener');
    el.addEventListener('transitionstart', handlers.start);
    el.addEventListener('transitionend', handlers.end);
    el.addEventListener('transitioncancel', handlers.cancel);
  };
  const clearListener = () => {
    // console.log('clearListener');
    el.removeEventListener('transitionstart', handlers.start);
    el.removeEventListener('transitionend', handlers.end);
    el.removeEventListener('transitioncancel', handlers.cancel);
  };
  const start = () => {
    if (!el) return;

    on(LIFE_CIRCLE.before);

    void el.offsetHeight;
    addListener();
    el.classList.remove(_classes.from);
    el.classList.add(_classes.active, _classes.to);

    on(LIFE_CIRCLE.run);
  };

  return { start, clearListener };
}

export function isSameEl(prev: unknown, next: unknown): boolean {
  return (
    React.isValidElement(prev) &&
    React.isValidElement(next) &&
    prev.type === next.type &&
    prev.key !== null &&
    prev.key === next.key
  );
}

/**
 * 回调适配器
 */
export function transitionCBAdapter(
  cbs: Partial<
    Record<
      // ---- enter ----
      | 'onEnterReady'
      | 'onBeforeEnter'
      | 'onEnterRun'
      | 'onEnterStart'
      | 'onAfterEnter'
      | 'onEnterCancel'
      // ---- leave ----
      | 'onLeaveReady'
      | 'onBeforeLeave'
      | 'onLeaveRun'
      | 'onLeaveStart'
      | 'onAfterLeave'
      | 'onLeaveCancel'
      // ---- idle ----
      | 'onIdle'
      // ---- invisible ----
      | 'onInvisible',
      (el: HTMLElement) => void
    >
  >,
  log = false,
): CB {
  return (el, status, lifeCircle): void => {
    log &&
      console.log(
        'transitionCbAdapter:',
        STATUS[status],
        LIFE_CIRCLE[lifeCircle],
      );

    type LIFE_MAP = Record<
      LIFE_CIRCLE,
      ((el: HTMLElement) => void) | undefined
    >;

    const maches: Record<STATUS, () => void> = {
      [STATUS.show]() {
        const map: LIFE_MAP = {
          [LIFE_CIRCLE.ready]: cbs.onEnterReady,
          [LIFE_CIRCLE.before]: cbs.onBeforeEnter,
          [LIFE_CIRCLE.run]: cbs.onEnterRun,
          [LIFE_CIRCLE.start]: cbs.onEnterStart,
          [LIFE_CIRCLE.after]: cbs.onAfterEnter,
          [LIFE_CIRCLE.cancel]: cbs.onEnterCancel,
        };
        map[lifeCircle]?.(el);
      },
      [STATUS.hide]() {
        const map: LIFE_MAP = {
          [LIFE_CIRCLE.ready]: cbs.onLeaveReady,
          [LIFE_CIRCLE.before]: cbs.onBeforeLeave,
          [LIFE_CIRCLE.run]: cbs.onLeaveRun,
          [LIFE_CIRCLE.start]: cbs.onLeaveStart,
          [LIFE_CIRCLE.after]: cbs.onAfterLeave,
          [LIFE_CIRCLE.cancel]: cbs.onLeaveCancel,
        };
        map[lifeCircle]?.(el);
      },
      [STATUS.idle]: () => cbs.onIdle?.(el),
      [STATUS.invisible]: () => cbs.onInvisible?.(el),
      // none实际上是不可能出现的，因为 status none 不会触发回调
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      [STATUS.none]: () => {},
    };

    maches[status]();
  };
}
