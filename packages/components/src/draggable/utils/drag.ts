import { fromEvent, switchMap, takeUntil, filter, merge, map, tap } from 'rxjs';
import { inRange } from '@tool-pack/basic';
import type { FN } from '@tool-pack/types';

export function drag(
  refs: (HTMLElement | undefined)[],
  ghostClassName: string,
  onMove: (prevIndex: number, currIndex: number) => void,
  onUp: (prevIndex: number, currIndex: number) => void,
): undefined | FN {
  const mouseUp$ = fromEvent<MouseEvent>(window, 'mouseup');
  const dragOver$ = fromEvent<DragEvent>(window, 'dragover');
  const dragEnd$ = fromEvent<DragEvent>(window, 'dragend');
  const dragStart$ = fromEvent<DragEvent>(window, 'dragstart');

  const listen = (el: HTMLElement) => {
    const mouseDown$ = fromEvent<MouseEvent>(el, 'mousedown');
    const queue$ = mouseDown$.pipe(
      map(findMouseDownChildIndex),
      filter((index): boolean => index >= 0),
      map(
        (
          index,
        ): {
          readonly chosen: HTMLElement;
          readonly originIndex: number;
          index: number;
        } => {
          const chosen = refs[index] as HTMLElement;
          chosen.draggable = true;
          return { originIndex: index, chosen, index };
        },
      ),
      switchMap((params) =>
        dragStart$.pipe(
          tap((e): void => {
            if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
          }),
          map(() => params),
        ),
      ),
      switchMap((params) => {
        return dragOver$.pipe(
          tap((e: DragEvent): void => {
            params.chosen.classList.add(ghostClassName);
            if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
            const currIndex = findDragItemIndex(e);
            if (currIndex > -1 && currIndex !== params.index) {
              onMove(params.index, currIndex);
              params.index = currIndex;
            }
            if (mouseInElement(e, el)) e.preventDefault();
          }),
          takeUntil(
            merge(
              mouseUp$,
              dragEnd$.pipe(
                tap((e): void => {
                  const currIndex = findDragItemIndex(e);
                  if (currIndex > -1 && currIndex !== params.originIndex)
                    onUp(params.index, currIndex);
                }),
              ),
            ).pipe(
              tap((): void => {
                restoreChosenEl(params.chosen);
              }),
            ),
          ),
        );
      }),
    );
    const sub = queue$.subscribe();

    return () => {
      sub.unsubscribe();
    };
  };

  const subs = refs.map<void | FN>((el): void | FN => {
    if (el) return listen(el);
  });

  return () => {
    subs.forEach((s) => s?.());
    subs.length = 0;
  };

  function restoreChosenEl(el: HTMLElement): void {
    if (el.hasAttribute('draggable')) el.draggable = false;
    el.classList.remove(ghostClassName);
  }
  function findMouseDownChildIndex(e: MouseEvent): number {
    const target = e.target as HTMLElement | null;
    if (!target) return -1;
    return refs.findIndex((child) => child && child.contains(target));
  }
  function mouseInElement(ev: MouseEvent, el: HTMLElement): boolean {
    const { clientX, clientY } = ev;
    const { height, width, left, top } = el.getBoundingClientRect();
    return (
      inRange(clientX, [left, left + width]) &&
      inRange(clientY, [top, top + height])
    );
  }
  function findDragItemIndex(e: DragEvent): number {
    return refs.findIndex((child) => child && mouseInElement(e, child));
  }
}
