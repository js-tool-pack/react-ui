import React from 'react';
import { PLACEMENTS_12 } from '@pkg/shared';

export type WordBalloonProps = React.HTMLAttributes<HTMLElement> & {
  placement?: (typeof PLACEMENTS_12)[number];
  contentStyle?: React.CSSProperties;
  arrowStyle?: React.CSSProperties;
  background?: React.CSSProperties['background'];
  showArrow?: boolean;
};
