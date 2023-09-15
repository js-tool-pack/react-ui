import type { Placement, PropsBase } from '@pkg/shared';
import React from 'react';

export interface DrawerProps extends Omit<PropsBase, 'ref'> {
  onClose?: () => Promise<void> | boolean | void;
  appendTo?: (() => HTMLElement | null) | null;
  size?: React.CSSProperties['width'];
  destroyOnClose?: boolean | 'mixed';
  bodyAttrs?: PropsBase['attrs'];
  closeIcon?: React.ReactNode;
  closeOnClickMask?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  title?: React.ReactNode;
  placement?: Placement;
  onLeave?: () => void;
  resizeable?: boolean;
  showClose?: boolean;
  visible: boolean;
  zIndex?: number;
  esc?: boolean;
}
