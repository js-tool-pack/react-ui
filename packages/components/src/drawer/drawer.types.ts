import React from 'react';
import type { PLACEMENTS } from '@pkg/shared';

export type DrawerProps = React.HTMLAttributes<HTMLElement> & {
  visible: boolean;
  header?: React.ReactNode;
  title?: React.ReactNode;
  showClose?: boolean;
  closeIcon?: React.ReactNode;
  onClose?: () => void;
  footer?: React.ReactNode;
  onLeave?: () => void;
  zIndex?: number;
  closeOnClickMask?: boolean;
  placement?: (typeof PLACEMENTS)[number];
  destroyOnClose?: boolean | 'mixed';
  size?: React.CSSProperties['width'];
  appendTo?: HTMLElement | null;
  resizeable?: boolean;
};
