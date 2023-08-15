import type { Placement, PropsBase } from '@pkg/shared';

export interface ResizerProps extends PropsBase<HTMLDivElement> {
  placement?: Placement;
  min?: number;
  max?: number;
}
