/* eslint-disable perfectionist/sort-objects */
import { Placement_12 } from '@pkg/shared';
import { getSize } from './_getSize';

export function calcPosition(
  triggerEl: HTMLElement,
  balloonEl: HTMLElement,
  placement: Placement_12 = 'top',
  offset = 10,
  [distanceT, distanceL]: [number, number] = [0, 0],
): { x: number; y: number } {
  const ref = getSize(triggerEl);
  const rel = getSize(balloonEl);

  const commonFn = {
    vtcX: () => distanceL + (ref.width - rel.width) / 2,
    hrzX: () => distanceL,
    hrzY: () => distanceT - (rel.height - ref.height) / 2,
    hrzEndX: () => distanceL + ref.width - rel.width,
    hrzStartY: () => distanceT,
    hrzEndY: () => distanceT + ref.height - rel.height,
    topY: () => distanceT - rel.height - offset,
    rightX: () => distanceL + ref.width + offset,
    bottomY: () => distanceT + ref.height + offset,
    leftX: () => distanceL - rel.width - offset,
  };

  const map: Record<Placement_12, () => { x: number; y: number }> = {
    top: () => ({ x: commonFn.vtcX(), y: commonFn.topY() }),
    'top-start': () => ({ x: commonFn.hrzX(), y: commonFn.topY() }),
    'top-end': () => ({ x: commonFn.hrzEndX(), y: commonFn.topY() }),

    bottom: () => ({ x: commonFn.vtcX(), y: commonFn.bottomY() }),
    'bottom-start': () => ({ x: commonFn.hrzX(), y: commonFn.bottomY() }),
    'bottom-end': () => ({ x: commonFn.hrzEndX(), y: commonFn.bottomY() }),

    left: () => ({ x: commonFn.leftX(), y: commonFn.hrzY() }),
    'left-start': () => ({ x: commonFn.leftX(), y: commonFn.hrzStartY() }),
    'left-end': () => ({ x: commonFn.leftX(), y: commonFn.hrzEndY() }),

    right: () => ({ x: commonFn.rightX(), y: commonFn.hrzY() }),
    'right-start': () => ({ x: commonFn.rightX(), y: commonFn.hrzStartY() }),
    'right-end': () => ({ x: commonFn.rightX(), y: commonFn.hrzEndY() }),
  };

  return map[placement]();
}
