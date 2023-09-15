import type { Placement_12, Placement } from '@pkg/shared';
import { calcDistanceWithParent } from '@tool-pack/dom';

/**
 * 计算上下左右4个方位是否可以放得下窗体
 */
export function calcPlacement(
  triggerEl: HTMLElement,
  balloonEl: HTMLElement,
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
        height: document.documentElement.clientHeight,
        width: document.documentElement.clientWidth,
      };
    return { height: containerEl.clientHeight, width: containerEl.clientWidth };
  };

  const sizes = { ref: getSize(triggerEl), rel: getSize(balloonEl) };
  const viewportSize = getViewportSize();
  const [distanceT, distanceL] = calcDistanceWithParent(triggerEl, containerEl);
  const [scrollTop, scrollLeft] = getScrollPoint();

  const map: Record<Placement, () => Placement> = {
    bottom() {
      return scrollTop + viewportSize.height >=
        sizes.ref.height + distanceT + sizes.rel.height + offset
        ? 'bottom'
        : 'top';
    },
    right() {
      return scrollLeft + viewportSize.width >=
        sizes.ref.width + distanceL + sizes.rel.width + offset
        ? 'right'
        : 'left';
    },
    left() {
      return scrollLeft <= distanceL - sizes.rel.width - offset
        ? 'left'
        : 'right';
    },
    top() {
      return scrollTop <= distanceT - sizes.rel.height - offset
        ? 'top'
        : 'bottom';
    },
  };

  const split = placement.split('-') as [Placement, string];
  let p = map[split[0]]();
  if (p !== split[0]) {
    // 如果原位置不行，那就反向再算一遍；这样反面也不行的话，就会回到原位置，而如果反面行那就是反面
    p = map[p]();

    // // 返回原位置则代表两面都不满足条件
    // if (p === split[0]) {
    //   // todo: 如果两面都不行，选择较宽的那面
    // }

    split[0] = p;
  }

  return split.join('-') as Placement_12;
}

interface Size {
  height: number;
  width: number;
}
function getSize(el: HTMLElement): Size {
  return { height: el.offsetHeight, width: el.offsetWidth };
}

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
    hrzY: () => distanceT - (rel.height - ref.height) / 2,
    vtcX: () => distanceL + (ref.width - rel.width) / 2,
    hrzEndY: () => distanceT + ref.height - rel.height,
    hrzEndX: () => distanceL + ref.width - rel.width,
    bottomY: () => distanceT + ref.height + offset,
    rightX: () => distanceL + ref.width + offset,
    topY: () => distanceT - rel.height - offset,
    leftX: () => distanceL - rel.width - offset,
    hrzStartY: () => distanceT,
    hrzX: () => distanceL,
  };

  const map: Record<Placement_12, () => { x: number; y: number }> = {
    'right-start': () => ({ y: commonFn.hrzStartY(), x: commonFn.rightX() }),
    'bottom-end': () => ({ x: commonFn.hrzEndX(), y: commonFn.bottomY() }),
    'left-start': () => ({ y: commonFn.hrzStartY(), x: commonFn.leftX() }),

    'bottom-start': () => ({ y: commonFn.bottomY(), x: commonFn.hrzX() }),
    'right-end': () => ({ y: commonFn.hrzEndY(), x: commonFn.rightX() }),
    'left-end': () => ({ y: commonFn.hrzEndY(), x: commonFn.leftX() }),

    'top-end': () => ({ x: commonFn.hrzEndX(), y: commonFn.topY() }),
    'top-start': () => ({ x: commonFn.hrzX(), y: commonFn.topY() }),
    bottom: () => ({ y: commonFn.bottomY(), x: commonFn.vtcX() }),

    right: () => ({ x: commonFn.rightX(), y: commonFn.hrzY() }),
    left: () => ({ x: commonFn.leftX(), y: commonFn.hrzY() }),
    top: () => ({ x: commonFn.vtcX(), y: commonFn.topY() }),
  };

  return map[placement]();
}
