import { fromEvent, take, tap } from 'rxjs';

export function handleFocus(
  triggerEl: HTMLElement,
  close: () => void,
  open: () => void,
  show: boolean,
): () => void {
  // 按下 Esc 键
  // const escape$ = fromEvent<KeyboardEvent>(window, 'keydown').pipe(
  //   filter((e) => e.code === 'Escape'),
  //   tap(() => el.blur()),
  // );
  const blur$ = fromEvent(triggerEl, 'blur');
  const focus$ = fromEvent(triggerEl, 'focus');

  const openWaiter$ = focus$.pipe(tap(open), take(1));
  // const closeWaiter$ = merge(blur$, escape$).pipe(tap(close), take(1));
  const closeWaiter$ = blur$.pipe(tap(close), take(1));

  const focusSub = (show ? closeWaiter$ : openWaiter$).subscribe();
  return () => focusSub.unsubscribe();
}
