import React from 'react';
import type { TIMING_FNS } from '@pkg/shared';

export type NumberTransitionProps = {
  from?: number;
  to?: number;
  duration?: number;
  precision?: number | null;
  active?: boolean;
  timingFunction?: (typeof TIMING_FNS)[number];
  ref?: React.ForwardedRef<HTMLDivElement>;
  onFinished?: () => void;
  format?: (value: number | string) => number | string;
  attrs?: Partial<React.HTMLAttributes<HTMLDivElement>>;
  resetSignal?: unknown;
};
