import {
  fromEvent,
  switchMap,
  takeUntil,
  Subject,
  delay,
  merge,
  take,
  tap,
  of,
} from 'rxjs';
import React from 'react';

export function handleHover(
  triggerEl: HTMLElement,
  open: () => void,
  close: () => void,
  enterDelay: number,
  leaveDelay: number,
  show: boolean,
  enterBalloonSubject: React.MutableRefObject<Subject<void>>,
  leaveBalloonSubject: React.MutableRefObject<Subject<void>>,
): () => void {
  const triggerEnterEvent = fromEvent(triggerEl, 'mouseenter');
  const triggerMoveEvent = fromEvent(triggerEl, 'mousemove');
  const triggerLeaveEvent = fromEvent(triggerEl, 'mouseleave');

  const leaveEvent = merge(
    triggerLeaveEvent,
    leaveBalloonSubject.current.asObservable(),
  )
    .pipe(
      switchMap(() =>
        of(null).pipe(
          delay(leaveDelay),
          takeUntil(triggerMoveEvent),
          takeUntil(enterBalloonSubject.current.asObservable()),
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
  return () => sub.unsubscribe();
}
