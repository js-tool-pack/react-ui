import type { TIMING_FNS, PropsBase } from '@pkg/shared';

export interface NumberTransitionProps
  extends Omit<PropsBase<HTMLDivElement>, 'children'> {
  format?: (value: number | string) => number | string;
  timingFunction?: (typeof TIMING_FNS)[number];
  precision?: number | null;
  onFinished?: () => void;
  resetSignal?: unknown;
  duration?: number;
  active?: boolean;
  from?: number;
  to?: number;
}
