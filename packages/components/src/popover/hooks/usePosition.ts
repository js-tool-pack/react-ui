import { getComponentClass, PLACEMENTS_12, Placement_12 } from '@pkg/shared';
import { calcPlacement, calcPosition } from '~/popover/utils';
import { PopoverRequiredPartProps } from '~/popover/Popover';
import { calcDistanceWithParent } from '@tool-pack/dom';
import React, { useMemo, useRef } from 'react';
import { throttle } from '@tool-pack/basic';

export function usePosition(
  triggerElRef: React.RefObject<HTMLElement>,
  balloonElRef: React.MutableRefObject<HTMLElement | undefined>,
  {
    viewport: getViewportEl,
    widthByTrigger,
    placement,
    appendTo,
    offset,
  }: Pick<
    PopoverRequiredPartProps,
    'widthByTrigger' | 'placement' | 'viewport' | 'appendTo' | 'offset'
  >,
) {
  const _placement = useRef(placement);
  // const forceUpdate = useForceUpdate();

  const refreshPosition = useMemo(() => {
    const refreshPosition = (): void => {
      const triggerEl = triggerElRef.current;
      const balloonEl = balloonElRef.current;
      if (!triggerEl || !balloonEl || balloonEl.style.display === 'none')
        return;

      const viewportEl = appendTo?.() || getViewportEl?.() || triggerEl;
      const containerEl =
        appendTo?.() || (triggerEl.offsetParent as HTMLElement) || triggerEl;

      // 窗体宽度跟触发元素一致
      if (widthByTrigger) {
        balloonEl.style.width = triggerEl.offsetWidth + 'px';
        void balloonEl.offsetWidth;
      }

      const lastPlace = _placement.current;
      const place = calcPlacement(
        triggerEl,
        balloonEl,
        lastPlace,
        viewportEl,
        offset,
      );

      const distance: [number, number] =
        appendTo === null
          ? [0, 0]
          : calcDistanceWithParent(triggerEl, containerEl);
      const { x, y } = calcPosition(
        triggerEl,
        balloonEl,
        place,
        offset,
        distance,
      );
      balloonEl.style.top = y + 'px';
      balloonEl.style.left = x + 'px';

      if (placement !== place || lastPlace !== place)
        replaceBalloonClass(balloonEl, place);

      _placement.current = place;
    };
    return throttle(() => refreshPosition(), 5, {
      trailing: true,
      leading: true,
    });
  }, [offset, placement, triggerElRef, balloonElRef, widthByTrigger]);

  return [
    refreshPosition,
    () => {
      _placement.current = placement;
    },
  ] as const;
}

const balloonClassName = getComponentClass('word-balloon');
const classNames = PLACEMENTS_12.map((p) => balloonClassName + '--' + p);
function replaceBalloonClass(balloon: HTMLElement, placement: Placement_12) {
  balloon.classList.remove(...classNames);
  balloon.classList.add(balloonClassName + '--' + placement);
}
