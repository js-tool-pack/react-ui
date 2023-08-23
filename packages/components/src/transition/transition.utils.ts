import React from 'react';
import type { CB } from './transition.types';
import { LIFE_CIRCLE, STATUS } from './transition.enums';
import {
  filter,
  fromEvent,
  map,
  merge,
  race,
  Subscription,
  take,
  tap,
  timer,
} from 'rxjs';

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
        tap((type) => (type === RaceType.Timer ? onEnd() : onStart())),
        take(1),
      ),
      cancelEvent.pipe(filterTarget(), tap(onCancel), take(1)),
      endEvent.pipe(filterTarget(), tap(onEnd), take(1)),
    ).subscribe();

    function filterTarget() {
      return filter<TransitionEvent>((value) => value.target === el);
    }
    function onStart() {
      on(LIFE_CIRCLE.start);
    }
    function onCancel() {
      on(LIFE_CIRCLE.cancel);
    }
    function onEnd() {
      on(LIFE_CIRCLE.after);
    }
  };
  const clearListener = () => {
    sub?.unsubscribe();
  };
  const start = () => {
    if (!el) return;

    on(LIFE_CIRCLE.before);

    void el.offsetHeight;
    addListener();
    el.classList.remove(classes.from);
    el.classList.add(classes.active, classes.to);

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
