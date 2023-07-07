import { getElRealSize } from '@pkg/shared';
import type { Placement, Placement_12 } from './tooltip.types';
import { calcDistanceWithParent } from '@tool-pack/dom';

/**
 * 计算上下左右4个方位是否可以放得下窗体
 */
export function calcPlacement(
  refEl: HTMLElement,
  relEl: HTMLElement,
  placement: Placement_12 = 'top',
  containerEl = globalThis.document?.body,
  offset = 10,
): Placement_12 {
  const getScrollPoint = (): readonly [number, number] => {
    if (containerEl === document.body) {
      return [
        document.body.scrollTop || document.documentElement.scrollTop,
        document.body.scrollLeft || document.documentElement.scrollLeft,
      ];
    }
    return [containerEl.scrollTop, containerEl.scrollLeft];
  };

  const getViewportSize = (): Size => {
    if (containerEl === document.body)
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      };
    return { width: containerEl.clientWidth, height: containerEl.clientHeight };
  };

  const sizes = { ref: getSize(refEl), rel: getSize(relEl) };
  const viewportSize = getViewportSize();
  const [distanceT, distanceL] = calcDistanceWithParent(refEl, containerEl);
  const [scrollTop, scrollLeft] = getScrollPoint();

  const map: Record<Placement, () => Placement> = {
    top() {
      return scrollTop <= distanceT - sizes.rel.height - offset
        ? 'top'
        : 'bottom';
    },
    bottom() {
      return scrollTop + viewportSize.height >=
        sizes.ref.height + distanceT + sizes.rel.height + offset
        ? 'bottom'
        : 'top';
    },
    left() {
      return scrollLeft <= distanceL - sizes.rel.width - offset
        ? 'left'
        : 'right';
    },
    right() {
      return scrollLeft + viewportSize.width >=
        sizes.ref.width + distanceL + sizes.rel.width + offset
        ? 'right'
        : 'left';
    },
  };

  const split = placement.split('-') as [Placement, string];
  const p: Placement = map[split[0]]();
  if (p !== split[0]) split[0] = p;

  return split.join('-') as Placement_12;
}

interface Size {
  width: number;
  height: number;
}
function getSize(el: HTMLElement): Size {
  const style = getElRealSize(el);
  return { width: style[0], height: style[1] };
}

export function calcPosition(
  refEl: HTMLElement,
  relEl: HTMLElement,
  placement: Placement_12 = 'top',
  containerEl = globalThis.document?.body,
  offset = 10,
): { x: number; y: number } {
  const ref = getSize(refEl);
  const rel = getSize(relEl);

  const [distanceT, distanceL] = calcDistanceWithParent(refEl, containerEl);

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
