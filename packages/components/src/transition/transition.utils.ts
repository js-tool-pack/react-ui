import React from 'react';
import type { CB } from './transition.types';
import { LIFE_CIRCLE, STATUS } from './transition.enums';
import {
  tap,
  map,
  race,
  take,
  merge,
  timer,
  filter,
  fromEvent,
  Subscription,
} from 'rxjs';

export function getClasses(name: string, show: boolean) {
  const el = show ? 'enter' : 'leave';
  const nameEl = `${name}-${el}`;

  return {
    activeClassName: `${nameEl}-active`,
    fromClassName: `${nameEl}-from`,
    toClassName: `${nameEl}-to`,
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

  const addClass = () => {
    el.classList.add(_classes.activeClassName, _classes.toClassName);
  };
  const removeClass = () => {
    const { fromClassName, toClassName, activeClassName } = _classes;
    el.classList.remove(fromClassName, toClassName);
    requestAnimationFrame(() => {
      el && el.classList.remove(activeClassName);
    });
  };

  const handlers = {
    start: () => {
      on(LIFE_CIRCLE.start);
    },
    cancel() {
      on(LIFE_CIRCLE.cancel);
    },
    end() {
      on(LIFE_CIRCLE.after);
      removeClass();
    },
  };
  let sub: Subscription;
  const addListener = () => {
    sub?.unsubscribe();

    const startEvent = fromEvent<TransitionEvent>(el, 'transitionstart');
    const endEvent = fromEvent<TransitionEvent>(el, 'transitionend');
    const cancelEvent = fromEvent<TransitionEvent>(el, 'transitioncancel');

    enum RaceType {
      Transition,
      Timer,
    }
    const due = 150;
    const raceObserve = race(
      // transition
      startEvent.pipe(
        filterTarget(),
        map(() => RaceType.Transition),
      ),
      // timer
      timer(due).pipe(map(() => RaceType.Timer)),
    );

    sub = merge(
      raceObserve.pipe(
        tap((type) => handlers[type === RaceType.Timer ? 'end' : 'start']()),
        take(1),
      ),
      cancelEvent.pipe(filterTarget(), tap(handlers.cancel), take(1)),
      endEvent.pipe(filterTarget(), tap(handlers.end), take(1)),
    ).subscribe();

    function filterTarget() {
      return filter<TransitionEvent>((value) => value.target === el);
    }
  };
  const clearListener = () => {
    sub?.unsubscribe();
  };
  const start = () => {
    if (!el) return;
    on(LIFE_CIRCLE.before);
    addListener();
    el.classList.add(_classes.fromClassName);
    // 使用offsetHeight强制刷新ui
    reflow(el);
    run();
  };
  const run = () => {
    on(LIFE_CIRCLE.run);
    el.classList.remove(_classes.fromClassName);
    addClass();
    on(LIFE_CIRCLE.running);
  };

  return { start, clearListener, removeClass };
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

export function reflow(el?: HTMLElement) {
  // 使用offsetHeight强制刷新ui
  void el?.offsetHeight;
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
      | 'onEnterRunning'
      | 'onEnterStart'
      | 'onAfterEnter'
      | 'onEnterCancel'
      // ---- leave ----
      | 'onLeaveReady'
      | 'onBeforeLeave'
      | 'onLeaveRun'
      | 'onLeaveRunning'
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
          [LIFE_CIRCLE.running]: cbs.onEnterRunning,
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
          [LIFE_CIRCLE.running]: cbs.onLeaveRunning,
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
