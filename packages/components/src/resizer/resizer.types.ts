import type { PLACEMENTS, PropsBase } from '@pkg/shared';

export interface ResizerProps extends PropsBase<HTMLDivElement> {
  placement?: (typeof PLACEMENTS)[number];
  min?: number;
  max?: number;
}
