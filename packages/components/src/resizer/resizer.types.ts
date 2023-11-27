import type { Placement, PropsBase } from '@pkg/shared';

export interface ResizerProps extends PropsBase<HTMLDivElement> {
  onResized?: () => void;
  placement?: Placement;
  min?: number;
  max?: number;
}
