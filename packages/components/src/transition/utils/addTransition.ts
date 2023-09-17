import {
  Subscription,
  fromEvent,
  filter,
  merge,
  timer,
  race,
  take,
  map,
  tap,
} from 'rxjs';
import { LIFE_CIRCLE } from '~/transition/transition.enums';
import { getClasses } from './getClasses';

export function addTransition({
  classes,
  el,
  on,
}: {
  classes: ReturnType<typeof getClasses>;
  on: (lifeCircle: LIFE_CIRCLE) => void;
  el: HTMLElement;
}) {
  let sub: Subscription;
  return { clearListener, start };

  function start() {
    if (!el) return;

    on(LIFE_CIRCLE.ready);

    void el.offsetHeight;
    addListener();
    el.classList.remove(classes.from);
    el.classList.add(classes.active, classes.to);

    on(LIFE_CIRCLE.go);
  }
  function addListener() {
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
  }
  function clearListener() {
    sub?.unsubscribe();
  }
}
