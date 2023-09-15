/* eslint-disable perfectionist/sort-object-types */
import {
  Subscription,
  fromEvent,
  filter,
  merge,
  timer,
  race,
  take,
  tap,
  map,
} from 'rxjs';
import { LIFE_CIRCLE, STATUS } from './transition.enums';
import type { CB } from './transition.types';
import React from 'react';

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
  classes,
  el,
  on,
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
    const due = 300;
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
        tap((type) => (type === RaceType.Timer ? onExpired() : onStart())),
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
    function onExpired() {
      on(LIFE_CIRCLE.expired);
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

    on(LIFE_CIRCLE.ready);

    void el.offsetHeight;
    addListener();
    el.classList.remove(classes.from);
    el.classList.add(classes.active, classes.to);

    on(LIFE_CIRCLE.go);
  };

  return { clearListener, start };
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

type Cb = (el: HTMLElement) => void;
/**
 * 回调适配器
 */
export function transitionCBAdapter(
  cbs: Partial<{
    // ---- enter ----
    onBeforeEnter: Cb;
    onEnterReady: Cb;
    onEnterGo: Cb;
    onEnterStart: Cb;
    onEnterCancel: Cb;
    onEnterExpired: Cb;
    onAfterEnter: Cb;
    // ---- leave ----
    onBeforeLeave: Cb;
    onLeaveReady: Cb;
    onLeaveGo: Cb;
    onLeaveStart: Cb;
    onLeaveCancel: Cb;
    onLeaveExpired: Cb;
    onAfterLeave: Cb;
    // ---- idle ----
    onIdle: Cb;
    // ---- invisible ----
    onInvisible: Cb;
  }>,
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
      [STATUS.hide]() {
        const map: LIFE_MAP = {
          [LIFE_CIRCLE.expired]: cbs.onLeaveExpired,
          [LIFE_CIRCLE.before]: cbs.onBeforeLeave,
          [LIFE_CIRCLE.cancel]: cbs.onLeaveCancel,
          [LIFE_CIRCLE.ready]: cbs.onLeaveReady,
          [LIFE_CIRCLE.start]: cbs.onLeaveStart,
          [LIFE_CIRCLE.after]: cbs.onAfterLeave,
          [LIFE_CIRCLE.go]: cbs.onLeaveGo,
        };
        map[lifeCircle]?.(el);
      },
      [STATUS.show]() {
        const map: LIFE_MAP = {
          [LIFE_CIRCLE.expired]: cbs.onEnterExpired,
          [LIFE_CIRCLE.before]: cbs.onBeforeEnter,
          [LIFE_CIRCLE.cancel]: cbs.onEnterCancel,
          [LIFE_CIRCLE.ready]: cbs.onEnterReady,
          [LIFE_CIRCLE.start]: cbs.onEnterStart,
          [LIFE_CIRCLE.after]: cbs.onAfterEnter,
          [LIFE_CIRCLE.go]: cbs.onEnterGo,
        };
        map[lifeCircle]?.(el);
      },
      [STATUS.invisible]: () => cbs.onInvisible?.(el),
      [STATUS.idle]: () => cbs.onIdle?.(el),
      // none实际上是不可能出现的，因为 status none 不会触发回调
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      [STATUS.none]: () => {},
    };

    maches[status]();
  };
}
