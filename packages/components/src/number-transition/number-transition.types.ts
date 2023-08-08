import type { PropsBase, TIMING_FNS } from '@pkg/shared';

export interface NumberTransitionProps
  extends Omit<PropsBase<HTMLDivElement>, 'children'> {
  from?: number;
  to?: number;
  duration?: number;
  precision?: number | null;
  active?: boolean;
  timingFunction?: (typeof TIMING_FNS)[number];
  onFinished?: () => void;
  format?: (value: number | string) => number | string;
  resetSignal?: unknown;
}
