import type { Placement_12, Placement } from '@pkg/shared';
import { calcDistanceWithParent } from '@tool-pack/dom';
import { type Size, getSize } from './_getSize';

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
