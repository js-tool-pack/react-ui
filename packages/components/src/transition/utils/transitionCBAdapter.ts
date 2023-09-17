import { LIFE_CIRCLE, STATUS } from '../transition.enums';
import type { CB } from '../transition.types';

export const ENTER_KEYS = [
  'onBeforeEnter',
  'onEnterReady',
  'onEnterGo',
  'onEnterStart',
  'onEnterCancel',
  'onEnterExpired',
  'onAfterEnter',
] as const;
type ENTER_KEYS_UNION = (typeof ENTER_KEYS)[number];
export const LEAVE_KEYS = [
  'onBeforeLeave',
  'onLeaveReady',
  'onLeaveGo',
  'onLeaveStart',
  'onLeaveCancel',
  'onLeaveExpired',
  'onAfterLeave',
] as const;
type LEAVE_KEYS_UNION = (typeof LEAVE_KEYS)[number];
export const OTHER_KEYS = ['onInvisible', 'onIdle'] as const;
type OTHER_KEYS_UNION = (typeof OTHER_KEYS)[number];

export const ORDERS = [
  LIFE_CIRCLE.before,
  LIFE_CIRCLE.ready,
  LIFE_CIRCLE.go,
  LIFE_CIRCLE.start,
  LIFE_CIRCLE.cancel,
  LIFE_CIRCLE.expired,
  LIFE_CIRCLE.after,
] as const;

const ENTER_KEYMAP = getKeymap(ENTER_KEYS);
const LEAVE_KEYMAP = getKeymap(LEAVE_KEYS);

type Cb = (el: HTMLElement) => void;

/**
 * 回调适配器
 */
export function transitionCBAdapter(
  cbs: Partial<
    Record<ENTER_KEYS_UNION | LEAVE_KEYS_UNION | OTHER_KEYS_UNION, Cb>
  >,
  log = false,
): CB {
  return (el, status, lifeCircle): void => {
    log &&
      console.log(
        'transitionCbAdapter:',
        STATUS[status],
        LIFE_CIRCLE[lifeCircle],
      );

    const maches: Record<STATUS, () => void> = {
      [STATUS.show]() {
        cbs[ENTER_KEYMAP[lifeCircle]]?.(el);
      },
      [STATUS.hide]() {
        cbs[LEAVE_KEYMAP[lifeCircle]]?.(el);
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

function getKeymap<const T>(keys: readonly T[]): Record<LIFE_CIRCLE, T> {
  return ORDERS.reduce(
    (res, cur, index) => {
      res[cur] = keys[index]!;
      return res;
    },
    {} as Record<LIFE_CIRCLE, T>,
  );
}
