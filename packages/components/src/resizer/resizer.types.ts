import React from 'react';
import type { PLACEMENTS } from '@pkg/shared';

export type ResizerProps = React.HTMLAttributes<HTMLElement> & {
  placement?: (typeof PLACEMENTS)[number];
};
