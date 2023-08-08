import React from 'react';
import type { PLACEMENTS, PropsBase } from '@pkg/shared';

export interface DrawerProps extends Omit<PropsBase, 'ref'> {
  bodyAttrs?: PropsBase['attrs'];
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
}
